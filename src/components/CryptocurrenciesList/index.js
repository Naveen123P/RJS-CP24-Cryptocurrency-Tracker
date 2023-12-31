// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptocurrenciesList: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <Loader type="Circles" color="#ffffff" height={20} width={20} />
        ) : (
          <div className="bg-container2" data-testid="loader">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-img"
            />
            <ul className="cryptocurrency-container">
              <li className="table-header">
                <p className="coin-type-title">Coin Type</p>
                <div className="usd-euro-container">
                  <p className="usd-title">USD</p>
                  <p className="euro-title">EURO</p>
                </div>
              </li>

              {cryptocurrenciesList.map(eachItem => (
                <CryptocurrencyItem
                  key={eachItem.id}
                  cryptoDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
