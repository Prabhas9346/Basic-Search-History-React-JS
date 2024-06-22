import {Component} from 'react'
import './index.css'

class HistoryItem extends Component {
  render() {
    const {history, deleteItem} = this.props

    const {id, timeAccessed, logoUrl, title, domainUrl} = history
    const deleteBtn = () => {
      deleteItem(id)
    }
    return (
      <li>
        <div className="historySubBox">
          <p className="timeEl">{timeAccessed}</p>
          <div className="historySubBox1">
            <img className="logoImg" src={logoUrl} alt="domain logo" />
            <p>{title}</p>
            <p className="domainUrlEl">{domainUrl}</p>
          </div>

          <button onClick={deleteBtn} type="button" data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}
export default HistoryItem
