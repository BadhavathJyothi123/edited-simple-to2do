// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTitle} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTitle(id)
  }

  return (
    <li className="list-container">
      <div className="title-container">
        <p className="title">{title}</p>
        <button className="delete-btn" onClick={onDelete} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
