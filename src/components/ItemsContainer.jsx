import PropTypes from 'prop-types'
import style from './itemsContainer.module.css'

export default function ItemsContainer({children}) {
  return (
    <div className={style.itemesContainer}>{children}</div>
  )
}


ItemsContainer.propTypes = {
    children: PropTypes
}