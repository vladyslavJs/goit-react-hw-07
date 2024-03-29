// import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { useId } from 'react';
// import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { CiSearch } from "react-icons/ci";


export default function SearchBox() {

    const elementId = useId();
    // const dispatch = useDispatch();
    // const value = useSelector(selectNameFilter);


    return (
        <div className={css.container}>
            <label htmlFor={elementId}>
                <p className={css.text}>Find contacts by name: <CiSearch/></p>
            </label>
            <input
                className={css.input}
                type="text"
                placeholder="John Wick"
                id={elementId}
                // value={value}
                // onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
}