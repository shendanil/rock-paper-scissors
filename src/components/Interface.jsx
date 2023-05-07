import './Interface.css'

export const Interface = ({ score, clearScore }) => {
    return (
        <>
            <div className='wrapper'>
                <div className='logo'>
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                </div>
                <div onClick={clearScore} className='score'>
                    <p>SCORE</p>
                    <h2>{score}</h2>
                </div>
            </div>
        </>
    )
}