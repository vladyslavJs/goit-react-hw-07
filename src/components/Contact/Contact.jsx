import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


import { FcBusinessman } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";


export default function Contact({ data: { id, name, number } }) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id))
            .unwrap()
            .then(() => {
                toast.success('Contact deleted')
            })
            .catch(() => {
                toast.error('Something is wrong, please try again')
            });
    }

    return (
        <>
            <div className={css.container}>
            <p className={css.info}>Contact info</p>
            <p className={css.name}>
               <FcBusinessman/> {name}
            </p>
            <p>
                <FcPhone/>{number}
            </p>
            <button className={css.button} onClick={handleDelete}>
                Delete <MdDeleteOutline className={css.icon} />
            </button>
            </div>
        </>
        
    );

}