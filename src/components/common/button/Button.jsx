import {Button as ReactButton} from 'react-bootstrap';
import './Button.css';

const Button = ({label, onChange, onClick, height, width, standart, className }) => {
    let classText = standart ? 'custom_button_std ' : 'custom_button ';
    classText += className;

    return (
        <ReactButton 
            className={classText}
            onChange={onChange}
            onClick={onClick}
            style={{width:width, height: height}}
            >
            {label}
        </ReactButton>
    );
}

export default Button;