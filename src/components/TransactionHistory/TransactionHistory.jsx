import { PropTypes } from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={styles['transaction-history']}>
        <thead>
          <tr className={styles['top-sheet']}>
            <th className={styles['sheet-item']}>Type</th>
            <th className={styles['sheet-item']}>Amount</th>
            <th className={styles['sheet-item']}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className={styles['Transaction-item']}>
              <td className={styles['sheet-data']}>{item.type}</td>
              <td className={styles['sheet-data']}>{item.amount}</td>
              <td className={styles['sheet-data']}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
