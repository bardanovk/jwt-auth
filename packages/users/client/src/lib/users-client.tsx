import styles from './users-client.module.scss';

/* eslint-disable-next-line */
export interface UsersClientProps {}

export function UsersClient(props: UsersClientProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UsersClient!</h1>
    </div>
  );
}

export default UsersClient;
