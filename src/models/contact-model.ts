// **** Types **** //

// Contact schema
export interface IContact {
  id: number;
  full_name: string;
  email: string;
  message: string;
}

// **** Functions **** //

/**
 * Get a new Contact object.
 */
function _new(full_name: string, email: string, message: string): IContact {
  return {
    id: -1,
    full_name,
    email,
    message,
  };
}

/**
 * Copy a contact object.
 */
function copy(contact: IContact): IContact {
  return {
    id: contact.id,
    full_name: contact.full_name,
    email: contact.email,
    message: contact.message,
  };
}

// **** Export default **** //

export default {
  new: _new,
  copy,
};
