import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistorySearch extends Component {
  state = {searchInput: ''}

  render() {
    const {historyList, deleteItem} = this.props
    const {searchInput} = this.state

    const searchItem = event => {
      this.setState({searchInput: event.target.value.toLowerCase()})
    }
    const filteredList = historyList.filter(eachElement =>
      eachElement.title.toLowerCase().includes(searchInput),
    )

    return (
      <div>
        <navbar>
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searchBox">
            <img
              className="searchImg"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input onChange={searchItem} type="search" />
          </div>
        </navbar>
        <div>
          {filteredList.length !== 0 && (
            <ul>
              {filteredList.map(element => (
                <HistoryItem
                  key={element.id}
                  history={element}
                  deleteItem={deleteItem}
                />
              ))}
            </ul>
          )}
          {filteredList.length === 0 && (
            <div className="emptyHistory">
              <p>There is no History to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default HistorySearch
