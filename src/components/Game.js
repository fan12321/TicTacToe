import React, { useState } from 'react'
import Board from './Board'

const Game = () => {

    const [turn, setTurn] = useState('O');
    const [board, setBoard] = useState([
        '', '', '', 
        '', '', '', 
        '', '', ''
    ]);
    const [count, setCount] = useState(0);

    var end = false;

    const play = (id) => {
        setCount(count + 1);
        if (board[id] !== '' || end) return;
        // console.log(turn, id);
        var tmpBoard = [...board];
        tmpBoard[id] = turn;
        setBoard(tmpBoard);
        // console.log(board);
        if (turn === 'O') setTurn('X');
        else setTurn('O');

        console.log(count);
    }

    const playAgain = () => {
        end = false;
        setTurn('O');
        setCount(0);
        setBoard([
            '', '', '', 
            '', '', '', 
            '', '', ''
        ]);
    }

    const win = () => {
        if (
            (board[0] === board[1] && board[0] === board[2] && board[0].length === 1) || 
            (board[3] === board[4] && board[3] === board[5] && board[3].length === 1) || 
            (board[6] === board[7] && board[6] === board[8] && board[6].length === 1) || 
            (board[0] === board[3] && board[0] === board[6] && board[0].length === 1) || 
            (board[1] === board[4] && board[1] === board[7] && board[1].length === 1) || 
            (board[2] === board[5] && board[2] === board[8] && board[2].length === 1) || 
            (board[0] === board[4] && board[0] === board[8] && board[0].length === 1) || 
            (board[2] === board[4] && board[2] === board[6] && board[2].length === 1)
        ) {
            end = true;
            if (turn === 'O') {
                return (
                    <>
                    <div>Winner: X</div>
                    <br></br>
                    <button onClick={playAgain}>Play again</button>
                    </>
                )
            }
            else if (turn === 'X') {
                return (
                    <>
                    <div>Winner: O</div>
                    <br></br>
                    <button onClick={playAgain}>Play again</button>
                    </>
                )
            }
        }
        else if (count >= 9) {
            // console.log("HI");
            end = true;
            return (
                <>
                <div>It's a tie!</div>
                <br></br>
                <button onClick={playAgain}>Play again</button>
                </>
            )
        }
        else return '';
    }

    return (
        <div className='Game'>
            <div className='title'>Tic Tac Toe</div>
            <br></br>
            <Board onClick={play} turn={turn} board={board}/>
            <div className='win'>
                <br></br>
                {win()}
            </div>
        </div>
    )
}

export default Game