import './FriendList.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { avatar, name, isOnline } = friend;
        return (
          <li key={friend.id} className="FriendList-item">
            <span className={isOnline ? 'status' : 'statusnActiv'}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendList;
