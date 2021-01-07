export type OAuth2QueryResponseType = 'code';
export type OAuth2QueryAccessType = 'online' | 'offline';
export type OAuth2QueryGrantType =
  | 'access_token'
  | 'refresh_token'
  | 'authorization_code'
  | 'password'
  | 'client_credentials'
  | 'urn:ietf:params:oauth:grant-type:saml2-bearer';

export type OAuth2QueryBoolean = 'true' | 'false';
export type OAuth2QueryPrompt = 'none' | 'consent' | 'select_account';

export interface OAuth2QueryBaseParameters {
  client_id: string;
}

export interface OAuth2QueryAuthClientParameters extends OAuth2QueryAuthParameters {
  client_secret: string;
}

export interface OAuth2QueryAuthParameters extends OAuth2QueryBaseParameters {
  redirect_uri: string;
  response_type: OAuth2QueryResponseType;
  scope: string;
  access_type?: OAuth2QueryAccessType;
  state?: string;
  include_granted_scopes?: OAuth2QueryBoolean;
  login_hint?: string;
  prompt?: OAuth2QueryPrompt;
}

export type OAuth2QueryTokenParameters =
  | OAuth2QueryTokenAuthorizationCodeParameters
  | OAuth2QueryTokenRefreshTokenParameters
  | OAuth2QueryTokenPasswordParameters
  | OAuth2QueryTokenClientCredentialsParameters
  | OAuth2QueryTokenSAMLParameters;

export type OAuth2ErrorResponseError =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'unauthorized_client'
  | 'unsupported_grant_type'
  | 'invalid_scope';

export interface OAuth2ErrorResponse {
  error: OAuth2ErrorResponseError;
  error_description?: string;
  error_uri?: string;
}

export interface OAuth2QueryTokenBaseParameters extends OAuth2QueryAuthClientParameters {
  grant_type: OAuth2QueryGrantType;
}

export interface OAuth2QueryTokenAuthorizationCodeParameters extends OAuth2QueryTokenBaseParameters {
  grant_type: 'authorization_code';
  code: string;
  redirect_uri: string;
}

export interface OAuth2QueryTokenRefreshTokenParameters extends OAuth2QueryTokenBaseParameters {
  grant_type: 'refresh_token';
  refresh_token: string;
}

export interface OAuth2QueryTokenPasswordParameters extends OAuth2QueryTokenBaseParameters {
  grant_type: 'password';
  username: string;
  password: string;
  scope: string;
}

export interface OAuth2QueryTokenClientCredentialsParameters extends OAuth2QueryTokenBaseParameters {
  grant_type: 'client_credentials';
  scope: string;
}

export interface OAuth2QueryTokenSAMLParameters extends OAuth2QueryTokenBaseParameters {
  grant_type: 'urn:ietf:params:oauth:grant-type:saml2-bearer';
  scope: string;
}