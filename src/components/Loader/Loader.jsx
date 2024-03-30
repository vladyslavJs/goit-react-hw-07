import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css'

export default function Loader() {
    return (
        <div className={css.loader}>
            <RotatingLines
                visible={true}
                height="38"
                width="38"
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}