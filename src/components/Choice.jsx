import './Choice.css'
import { Rock } from './weapons/Rock'
import { Paper } from './weapons/Paper'
import { Scissors } from './weapons/Scissors'

export const Choice = ({weapon}) => {
    return (
        <div className='rock-paper-scissors'>
            <svg className='triangle' width="313" height="278" xmlns="http://www.w3.org/2000/svg"><path stroke="#000" strokeWidth="15" fill="none" opacity=".2" d="M156.5 262 300 8H13z"/></svg>
            <Rock
                style={{ transform: 'translate(-80px, 62px)', position: 'absolute' }}
                weapon={weapon} />
            <Paper
                style={{ transform: 'translate(-192px, -139px)', position: 'absolute' }}
                weapon={weapon} />
            <Scissors
                style={{ transform: 'translate(33px, -139px)', position: 'absolute' }}
                weapon={weapon} />
        </div>
    )
}