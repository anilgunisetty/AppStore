import './index.css'

const TabItem = props => {
  const {eachTabDetails, clickTab, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const clickTabItem = () => {
    // console.log('click TabItem')
    clickTab(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={clickTabItem} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
