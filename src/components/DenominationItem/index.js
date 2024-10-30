// DenominationItem.js
import './index.css'

function DenominationItem({removeValue, denominationsList}) {
  return (
    <ul className="button-container">
      {denominationsList.map(amount => (
        <li key={amount}>
          <button className="button-box" onClick={() => removeValue(amount)}>
            {amount}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default DenominationItem
