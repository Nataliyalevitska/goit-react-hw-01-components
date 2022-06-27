import './TransactionHistory.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className="transaction-history">
        <thead>
          <tr className="top-sheet">
            <th className="sheet-item">Type</th>
            <th className="sheet-item">Amount</th>
            <th className="sheet-item">Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="Transaction-item">
              <td className="sheet-data">{item.type}</td>
              <td className="sheet-data">{item.amount}</td>
              <td className="sheet-data">{item.currency}</td>
            </tr>
          ))}

          {/* <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionHistory;
