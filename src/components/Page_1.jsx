import { Interface } from './Interface'
import { Choice } from './Choice'
import { RulesBtn } from './RulesBtn'

export const Page_1 = ({ score, clearScore, openRules, weapon }) => {

  return (
    <>
      <Interface score={score} clearScore={clearScore} />
      <Choice weapon={weapon} />
      <RulesBtn openRules={openRules} />
    </>
  )
}
