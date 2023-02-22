import PropTypes from 'prop-types';

export const Operation = ({
  transaction:{type, amount, currency}}) => {
    return (
      <>
      <td align="center">{type}</td>
      <td align="center">{amount}</td>
      <td align="center">{currency}</td>
      </>
    )
};

Operation.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    }).isRequired,
}