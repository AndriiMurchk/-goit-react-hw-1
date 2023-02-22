import PropTypes from 'prop-types';

export const Stats = ({
  item:{label, percentage}}) => {
    return (
      <>
      <div>{label}</div>
      <div>{percentage}%</div>
      </>
    )
};

Stats.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }).isRequired,
}


