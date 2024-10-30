// CashWithdrawal.js
import './index.css'
import {useState} from 'react'
import DenominationItem from '../DenominationItem'

function CashWithdrawal() {
  const [balance, setBalance] = useState(2000)

  const removeValue = amount => {
    setBalance(prevBalance => prevBalance - amount)
  }

  const denominationsList = [50, 100, 200, 500]

  return (
    <div className="bg-container">
      <div className="container">
        <div className="first-row">
          <h1 className="heading">S</h1>
          <p className="para1">Sarah Williams</p>
        </div>
        <div className="second-row">
          <p className="para2">Your Balance</p>
          <p className="para3">{balance}</p>
        </div>
        <div className="third-row">
          <p className="para2">In Rupees</p>
        </div>
        <p className="withdraw-heading">Withdraw</p>
        <p className="sum-para">CHOOSE SUM (IN RUPEES)</p>
        <DenominationItem
          removeValue={removeValue}
          denominationsList={denominationsList}
        />
      </div>
    </div>
  )
}

export default CashWithdrawal
