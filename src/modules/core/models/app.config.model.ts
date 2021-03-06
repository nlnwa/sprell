import {AuthConfig} from 'angular-oauth2-oidc';

export class AppConfig {
  apiUrl?: string;
  grpcWebUrl?: string;
  authConfig?: AuthConfig;

  constructor(json?: Partial<AppConfig>) {
    if (json) {
      Object.assign(this, json);
    }
  }
}
