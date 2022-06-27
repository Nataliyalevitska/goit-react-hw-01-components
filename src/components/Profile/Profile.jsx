import s from './Profile.module.css';
import PropTypes from 'prop-types';


 const Profile = ({ user}) => {
  const { avatar, username, tag, location,stats:{followers,views,likes} } = user;
  return (
    <div className={s.Profilewrap}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.colorTitle}>{'@' + tag}</p>
        <p className={s.colorTitle}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li className={s.Profileitem}>
          <span className={(s.label, s.colorTitle)}>Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })

}
export default Profile;