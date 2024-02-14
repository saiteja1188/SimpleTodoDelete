// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, onDeleteUser} = props
  const {title, id} = todosList

  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-items">
      <p className="description">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
