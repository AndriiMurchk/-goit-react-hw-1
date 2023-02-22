import PropTypes from 'prop-types';
import {Operation} from './Operation/Operation';
import { StyledTransaction, StyledOperation } from './Transaction.styled';


export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledTransaction>
    <thead className='title'>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className='list-operation'>
  {transactions.map(transaction => (
            <StyledOperation key={transaction.id}><Operation transaction={transaction} /></StyledOperation>
          ))}
  </tbody>
  </StyledTransaction>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};