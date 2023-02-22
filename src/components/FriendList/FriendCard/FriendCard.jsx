import PropTypes from 'prop-types';
import{ StyledFriendCard, Status} from './Friend.Card.styled';

export const FriendCard = ({
  friend:{avatar, name, isOnline},}) => {
    return (
      <StyledFriendCard>
        <Status isActive={isOnline}></Status>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
      </StyledFriendCard>
    )
  };

  FriendCard.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      }).isRequired,
  }