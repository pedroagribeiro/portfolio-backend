import StatusCodes from 'http-status-codes';
import { Response, Request, Router } from 'express';

import contactService from '@services/contact-service';
import { ParamMissingError } from '@shared/errors';

const router = Router();
const { CREATED } = StatusCodes;

router.post('/submit', async (req: Request, res: Response) => {
  const { contact } = req.body;
  if (!contact) {
    throw new ParamMissingError();
  }
  await contactService.submitContact(contact);
  return res.status(CREATED).end();
});

export default router;
