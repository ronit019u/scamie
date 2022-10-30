
let computerScore = 0;
let playerScore = 0; 

const rockbut = document.querySelector('.rock') 
const paperbut = document.querySelector('.paper')
const scissorbut = document.querySelector('.scissor')
const outcomeD = document.querySelector('.outcome')
const playerScoreS = document.querySelector('.player-won')
const computerScoreS = document.querySelector('.computer-won')

              const computerPlay = () => {
                const arr = ['paper' , 'rock' , 'scissor'];
                const computerChoice = Math.floor(Math.random() * arr.length);
                return arr[computerChoice]
              }

                 const playGround = (computerChoice , playerChoice) => {
                  if(playerChoice === computerChoice) {
                    const p = document.createElement('p')
                    p.innerText = 'Tied!'
                    outcomeD.appendChild(p)
                  } else if(playerChoice === 'scissor' && computerChoice === 'paper') {
                    playerScore++
                    const p = document.createElement('p')
                    p.innerText = 'You win Scissor wins'
                    
                    outcomeD.appendChild(p)
                  } else if(playerChoice === 'paper' && computerChoice === 'rock') {
                    const p = document.createElement('p')
                    playerScore++
                    p.innerText = ' You win paper wins against rock'
                    outcomeD.appendChild(p)
                  } else if(playerChoice === 'rock' && computerChoice === 'scissor') {
                    playerScore++
                    const p = document.createElement('p')
                    p.innerText = 'rock wins against scissor'
                    outcomeD.appendChild(p)
                  } else {
                    computerScore++
                    const p = document.createElement('p')
                    p.innerText = 'C wins against P' 
                    outcomeD.appendChild(p)
                  }
                 }

                 const checkrecord = (computerScore , playerScore) => {
                  if(playerScore === 5) {
                    const h2= documnent.createElement('h2')
                     h2.classList.add('player-won')
                    h2.innerText = 'You won $(playerScore) against $(computerScore) good'
                  outcomeD.appendChild(h2)
                  } else if(computerScore === 5) {
                    const h2 = documnent.createElement('h2')
                    h2.classList.add('computer-won')
                    h2.innerText = 'You lost $(playerScore) against $(computerScore) good'
                  outcomeD.appendChild(h2)
                }
                 }

                 const scoreupdate = (computerScore , playerScore) => {
                  playerScoreS.innerText = playerScore
                  computerScoreS.innerText = computerScore
                 }
                
                 rockbut.addEventListener('click' , () => {
                  const computerChoice = computerPlay()
                  const playerChoice = 'rock'
                  playGround(computerChoice , playerChoice)
                  checkrecord(computerScore , playerScore)
                  scoreupdate(computerScore , playerScore)
                 })

                 paperbut.addEventListener('click' , () => {
                  const computerChoice = computerPlay()
                  const playerChoice = 'paper'
                  playGround(computerChoice , playerChoice) 
                  checkrecord(computerScore , playerScore)
                  scoreupdate(computerScore , playerScore)                 
                 })

                 scissorbut.addEventListener('click' , () => {
                  const computerChoice = computerPlay()
                  const playerChoice = 'scissor'
                  playGround(computerChoice , playerChoice)
                  checkrecord(computerScore , playerScore)
                  scoreupdate(computerScore , playerScore)
                 })


                  
                
