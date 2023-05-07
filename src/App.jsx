import { useState, useEffect } from 'react'

import Popup from 'react-animated-popup'

import { Rules } from './components/Rules'
import { Page_1 } from './components/Page_1'
import { Page_2 } from './components/Page_2'
import { Attribution } from './components/Attribution'

const App = () => {

  const [score, setScore] = useState(0)
  const [areRulesOpen, setAreRulesOpen] = useState(false)
  const [chosenWeapon, setChosenWeapon] = useState('')
  const [houseWeapon, setHouseWeapon] = useState('')
  const [playBtn, setPlayBtn] = useState({
    text: 'play',
    function: play
  })
  const [result, setResult] = useState('')

  useEffect(() => {
    const storedScore = parseFloat(localStorage.getItem('score'))
    storedScore ? setScore(storedScore) : ''
  }, [])

  function clearScore() {
    setScore(0)
    localStorage.clear()
  }

  function weapon(el) {
    chosenWeapon ? setChosenWeapon('') : setChosenWeapon(el.target.className)
    setHouseWeapon('')
    setPlayBtn({ text: 'play', function: play })
    setResult('')
  }

  function playAgain() {
    setChosenWeapon('')
    setHouseWeapon('')
    setPlayBtn({ text: 'play', function: play })
    setResult('')
  }

  function play() {

    setResult('')

    let randomArr = [ Math.ceil(Math.random() * 3) ]
    for (let i = 1; i < 30; i++) {
      let prevNum = randomArr[i - 1]
      let currNum = Math.ceil(Math.random() * 3)
      while (currNum === prevNum) currNum =  Math.ceil(Math.random() * 3)
      randomArr.push(currNum)
    }
    
    setPlayBtn({text: 'wait...'})
    
    setTimeout(() => {
      setPlayBtn({ text: 'play again', function: playAgain })
    }, 3000)
    
    function doSetTimeout(i) {
      setTimeout(() => {
        setHouseWeapon(() => {
          return (
            randomArr[i] === 1 ? 'rock' :
            randomArr[i] === 2 ? 'paper' :
            'scissors'
        )})
      }, 100 * i)
    }
    
    for (let i = 0; i < 30; ++i) {
      doSetTimeout(i)
    }
  }

  useEffect(() => {

    const weaponMap = {
      rock: {
        rock: 'draw',
        paper: 'you lost',
        scissors: 'you win'
      },
      paper: {
        rock: 'you win',
        paper: 'draw',
        scissors: 'you lost'
      },
      scissors: {
        rock: 'you lost',
        paper: 'you win',
        scissors: 'draw'
      }
    }
    
    setResult(() => {
      const outcome = weaponMap[chosenWeapon]?.[houseWeapon]
      
      if (outcome === 'you win') {
        setScore(prevScore => prevScore + 1)
      } else if (outcome === 'you lost') {
        setScore(prevScore => prevScore - 1)
      }
      
      return outcome
    })
    
  }, [playBtn])
  

  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score])

  
  return (
    <div className="App">
      <Popup
        visible={areRulesOpen}
        onClose={() => setAreRulesOpen(false)}
        animationDuration='250'>
        <Rules closeRules={() => setAreRulesOpen(false)} />
      </Popup>

      {!chosenWeapon ?
        <Page_1
          score={score}
          clearScore={clearScore}
          weapon={weapon}
          openRules={() => setAreRulesOpen(true)}
          /> :
          <Page_2
          score={score}
          clearScore={clearScore}
          weapon={weapon}
          chosenWeapon={chosenWeapon}
          houseWeapon={houseWeapon}
          playBtn={playBtn}
          result={result}
          openRules={() => setAreRulesOpen(true)}
        />
      }

      <Attribution />
    </div>
  )
}

export default App
