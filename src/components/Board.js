import React from 'react'
import Grid from './Grid'

const Board = (props) => {

    const createGrid = (id) => {
        return <Grid id={id} onClick={() => props.onClick(id)} turn={props.turn} board={props.board}/>
    }

    return (
    <div className='Board'>
        <div className='turn'>Turn: {props.turn}</div>
        <br></br>
        <div className='grids'>
            <div className='row'>
                {createGrid(0)}
                {createGrid(1)}
                {createGrid(2)}
            </div>
            <div className='row'>
                {createGrid(3)}
                {createGrid(4)}
                {createGrid(5)}
            </div>
            <div className='row'>
                {createGrid(6)}
                {createGrid(7)}
                {createGrid(8)}
            </div>
        </div>
    </div>
    )
}

export default Board