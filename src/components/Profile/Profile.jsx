import PropTypes from "prop-types";
import { StyledProfile } from "./Profile.styled";

export const Profile = ({
  user:{username, tag, location, avatar, stats},
}) => {
  return (
    <StyledProfile>
      <img src={avatar} alt={username}  width="140" className="profileImg"/>
      <h2 className="userName">{username}</h2>
        <p className="contact">@{tag}</p>
        <p className="contact">{location}</p>
      <ul className="profileList">
        <li className="profileList_item"><p>Folowers</p><b>{stats.followers}</b></li>
        <li className="profileList_item"><p>Views</p><b>{stats.views}</b></li>
        <li className="profileList_item"><p>Likes</p><b>{stats.likes}</b></li>
    </ul>
  </StyledProfile>
  );
};

Profile.propTypes ={
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
  }).isRequired
}
