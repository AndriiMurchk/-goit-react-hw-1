import PropTypes from 'prop-types'

export const Profile = ({
  user:{username,tag, location, avatar, stats}}) => {
  return (
    <div>
    <img src={avatar} alt={username}  width="240" />
    <h2>{username}</h2>
    <p>@{tag}</p>
    <p>{location}</p>
    <ul>
    <li>Folowers{stats.followers}</li>
    <li>Views{stats.views}</li>
    <li>Likes{stats.likes}</li>
  </ul>
  </div>
  );
};

