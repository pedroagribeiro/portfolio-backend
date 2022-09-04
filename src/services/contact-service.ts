import { IContact } from '@models/contact-model';
import { prisma } from '../utils/prisma';

async function submitContact(contact: IContact) {
  const contact_ = await prisma.contact.create({ data: contact });
  return { success: true, contact: contact_ };
}

export default {
  submitContact,
} as const;
