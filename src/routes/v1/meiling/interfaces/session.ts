import { MeilingV1ExtendedAuthMethods, MeilingV1SigninType } from './query';

export interface MeilingV1Session {
  user?: MeilingLoggedInUser[];
  extendedAuthentication?: MeilingV1SessionExtendedAuthentication;
  previouslyLoggedIn?: MeilingLoggedInUser[];
}

export interface MeilingLoggedInUser {
  id: string;
}

interface MeilingV1SignInTwoFactorAuth extends MeilingV1ChallengeData {
  id: string;
  type: MeilingV1SigninType.TWO_FACTOR_AUTH;
  method?: MeilingV1ExtendedAuthMethods;
}

interface MeilingV1SignInPasswordLess extends MeilingV1ChallengeData {
  type: MeilingV1SigninType.PASSWORDLESS;
  method?: MeilingV1ExtendedAuthMethods;
}

interface MeilingV1ChallengeData {
  challenge?: string;
  challengeCreatedAt?: Date;
}

export type MeilingV1SessionExtendedAuthentication = MeilingV1SignInPasswordLess | MeilingV1SignInTwoFactorAuth;
