import './RulesBtn.css'

export const RulesBtn = ({ openRules }) => {
    return (
        <div onClick={openRules} className='rules'>
          <p>RULES</p>
        </div>
    )
}