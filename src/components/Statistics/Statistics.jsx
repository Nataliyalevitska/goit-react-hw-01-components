import './Statistics.css';
import colorSt from '../../services/color.js';
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      
      <ul className="stat-list">
        {stats.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li
              key={id}
              style={{ backgroundColor: colorSt() }}
              className="Stat-item"
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired
};

export default Statistics;
