import styles from '../FriendsListItem/FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name} style={{ color: isOnline ? 'green' : 'red' }}>
        {name}
      </p>
    </li>
  );
};
