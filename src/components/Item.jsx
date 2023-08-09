import PropTypes from 'prop-types'
import style from './item.module.css'

export default function Item({ item }) {
    return (
        <div className={style.itemContainer}>
            <div className={style.itemInfoContainer}>
                <span className={style.itemInfoTag}>URL:</span>
                <span>{item.url}</span>
            </div>
            <div className={style.itemInfoContainer}>
                <span className={style.itemInfoTag}>Short URL:</span>
                <span>
                    <a href={`http://localhost:5173/u/${item.shortUrl}`} rel='noreferrer' target='_blank'>
                        http://localhost:5173/u/{item.shortUrl}
                    </a>
                </span>
            </div>
            <div className={style.itemInfoContainer}>
                <span className={style.itemInfoTag}>VIEWS:</span>
                <span>{item.views} views</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes
}