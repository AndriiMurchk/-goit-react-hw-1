import PropTypes from 'prop-types';
import {Stats} from './stats/stats';
import { StyledStatistics } from "./Statistics.styled";

export const Statistics = ({data, title}) => {
    return (
      <StyledStatistics>
        {title ? (<h2>{title}</h2>) : null}
        
        <ul className='statList'>
          {data.map(item => (
            <li key={item.id} className="statList_item"><Stats item={item} /></li>
          ))}
        </ul>
      </StyledStatistics>
    );
  };

  Statistics.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
  };