import LoginStatus from '@/enum/LoginStatus';
import useLogin from '@/hooks/useLogin';
import { Navigate } from 'react-router-dom';

//是否登录
const LoginAuth = ({ children }: { children: React.ReactNode }) => {
  const [loginStatus] = useLogin();
  if (loginStatus === LoginStatus.HadLogin) {
    return <>{children}</>;
  }

  if (loginStatus === LoginStatus.NotLogin) {
    return <Navigate to={'/login'} replace></Navigate>;
  }
  return null;
};

export default LoginAuth;
