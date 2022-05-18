import React from 'react'

const Keypads = ({usedKeys}) => {

  const [letters, setLetters] = React.useState(null)
  const [click, setClick] = React.useState(false)

  const handleClick = (e) => {
    setClick(!click)
    console.log(e.target);
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json())
      .then(json => {
        setLetters(json)
    })
  }, [])

  return (
    <div className="keypad">
      {letters && letters.map((l) => {

        const color = usedKeys[l.key]
        
        return (
          <div key={l.key} className={`color click`} onClick={handleClick}>
            {l.key}
          </div>
        )
      })}
    </div>
  )
}

export default Keypads