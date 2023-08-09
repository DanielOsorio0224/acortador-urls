import PropTypes from 'prop-types'
import style from './loader.module.css'

export default function Loader({item, id}) {
  
  if(item == null){
    return <Container>Loading...</Container>
  }
  if(item == undefined){
    return <Container>No url found {id}</Container>
  }
    return (
    <Container>Redirect {item.url} </Container>
  )
}

function Container({children}){
    <div className={style.loaderContainer}>{children}</div>
}

Loader.propTypes = {
  item: PropTypes,
  id: PropTypes
}