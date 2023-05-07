import { Interface } from './Interface'
import { RulesBtn } from './RulesBtn'

import { Rock } from './weapons/Rock'
import { Paper } from './weapons/Paper'
import { Scissors } from './weapons/Scissors'

import './Page_2.css'

export const Page_2 = ({ score, clearScore, weapon, chosenWeapon, houseWeapon, openRules, playBtn, result }) => {
    return (
        <>
            <Interface score={score} clearScore={clearScore} />

            <div className='page-2'>
                <div className='pick-section'>
                {
                        playBtn.text === 'play again' ?
                        <div className='end-of-game'></div> : ''
                    }
                    <div
                        className={
                            `you-picked 
                            ${playBtn.text === 'wait...' ? 'unactive-weapon' : ''}`
                    }>
                        <p>YOU PICKED</p>
                        {
                            chosenWeapon === 'rock' ?
                            <Rock weapon={weapon} /> :
                            chosenWeapon === 'paper' ?
                            <Paper weapon={weapon} /> :
                            chosenWeapon === 'scissors' ?
                            <Scissors weapon={weapon} /> : ''
                        }
                    </div>
                    <div className='house-picked'>
                        <p>THE HOUSE PICKED</p>
                        {
                            houseWeapon === 'rock' ?
                            <Rock /> :
                            houseWeapon === 'paper' ?
                            <Paper /> :
                            houseWeapon === 'scissors' ?
                            <Scissors /> :
                            <div className='empty-circle'></div>
                        }
                    </div>
                </div>
                <div className='result-and-btn'>
                    {
                        playBtn.text === 'play again' ?
                        <h1 className='result'>{result}</h1> : ''
                    }
                    <div onClick={playBtn.function} className={`play-btn ${playBtn.text === 'wait...' ? 'unactive' : ''}`}>
                        <p>{playBtn.text}</p>
                    </div>
                </div>
            </div>

            <RulesBtn openRules={openRules} />
        </>
    )
}