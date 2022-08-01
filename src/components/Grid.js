import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-regular-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'


const Grid = (props) => {

    var piece = props.board[props.id];
    // var end = props.end;

    return (
        <button className='grid' onClick={props.onClick}>
            <div className='piece'>
                {
                    piece === 'O' ? <FontAwesomeIcon icon={faCircle} /> : 
                    piece === 'X' ? <FontAwesomeIcon icon={faXmark} /> : 
                    ''
                }
            </div>
        </button>
    )
}

export default Grid