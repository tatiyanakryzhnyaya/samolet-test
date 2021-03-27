import { connect } from "react-redux"
import styles from "./region.module.css"

const Region = ({region}) => {

    if (!region) return <>Регион не выбран</>

    return (
        <div className={styles.region}>
            <div className={styles.regionTitle}>Регион {region && region.fullname}</div>
            <ul>
                {region && Object.keys(region).map(keyProp => 
                    <li key={keyProp}> <b>{keyProp}:</b> {region[keyProp]}</li>
                )}
            </ul>
            
        </div>
    )
}

export default Region

