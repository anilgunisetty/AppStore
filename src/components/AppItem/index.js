import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails

  return (
    <li className="list-container">
      <img alt="props" src={imageUrl} className="image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
