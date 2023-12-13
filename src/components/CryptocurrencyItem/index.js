// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="table-header table-header2">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-img" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-title">{usdValue}</p>
        <p className="euro-title">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
