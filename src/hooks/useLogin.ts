import LoginStatus from '@/enum/LoginStatus';
import { useLayoutEffect, useState } from 'react';

const useLogin = () => {
  const [loginStatus, setLoginStatus] = useState<LoginStatus>(0);

  useLayoutEffect(() => {
    setLoginStatus(LoginStatus.HadLogin);
  }, []);
  return [loginStatus];
};

export default useLogin;
