import Service from 'src/service';

import { FormResetPassword } from './types';

export const resetPassword = ({ userId, password }: FormResetPassword) =>
  Service.post(`/v1/auth/reset-password`, { userId, password });
