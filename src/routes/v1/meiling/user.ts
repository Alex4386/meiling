import { FastifyReply } from 'fastify/types/reply';
import { FastifyRequest } from 'fastify/types/request';
import { getUserByID } from '../../../common/user';
import { sendMeilingError } from './error';
import { MeilingV1ErrorType, MeilingV1Session } from './interfaces';

export async function meilingV1UserHandler(req: FastifyRequest, rep: FastifyReply) {
  const session = req.session.get('meiling-v1') as MeilingV1Session | null | undefined;

  if (session?.user?.id) {
    const userId = session.user.id;

    const user = await getUserByID(userId);
    rep.send(user);
  } else {
    sendMeilingError(rep, MeilingV1ErrorType.UNAUTHORIZED, 'You are not logged in.');
  }
}