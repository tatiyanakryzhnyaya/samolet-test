import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <h1>Samolet Test</h1>
            </Link>
            <Link to="/regions">
                Перейти к списку регионов
            </Link>
        </div>
    )
}

export default Header;