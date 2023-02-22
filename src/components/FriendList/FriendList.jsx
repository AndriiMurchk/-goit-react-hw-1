import PropTypes from 'prop-types';
import {FriendCard} from './FriendCard/FriendCard';
import{ StyledFriendList} from './FriendCard/Friend.Card.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend =>(
        <li key={friend.id}>
          <FriendCard friend={ friend } />
        </li>
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};