import styles from './auth-client.module.scss';

/* eslint-disable-next-line */
export interface AuthClientProps {}

export function AuthClient(props: AuthClientProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AuthClient!</h1>
    </div>
  );
}

export default AuthClient;
