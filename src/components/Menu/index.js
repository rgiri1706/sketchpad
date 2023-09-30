import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_ITEMS } from '@/constants';
import { menuItemClick, actionItemClick } from '@/slice/menuSlice';

const Menu = () =>{
    const dispatch = useDispatch();
    const actionMenuItem = useSelector((state)=> state.menu.activeMenuItem);

    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName));
    }

    const handleItemAction = (itemName) => {
        dispatch(actionItemClick(itemName));
    }
    return (
        <div className={styles.menuContainer}>
            <div className={cx(styles.iconWrapper, {[styles.active]: actionMenuItem == MENU_ITEMS.PENCIL})} onClick={()=>handleMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>
            <div className={cx(styles.iconWrapper, {[styles.active]: actionMenuItem == MENU_ITEMS.ERASER})}  onClick={()=>handleMenuClick(MENU_ITEMS.ERASER)}>
                <FontAwesomeIcon icon={faEraser} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleItemAction(MENU_ITEMS.UNDO)}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleItemAction(MENU_ITEMS.REDO)}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
            </div>
            <div className={styles.iconWrapper} onClick={()=> handleItemAction(MENU_ITEMS.DOWNLOAD)}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Menu;