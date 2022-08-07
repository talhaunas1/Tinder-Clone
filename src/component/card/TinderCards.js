import React,{useState} from 'react'    
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name:'Elon Musk',
            url:'https://fortune.com/2022/07/09/how-elon-musk-bizarre-twitter-takeover-saga-could-have-just-been-a-cover-for-him-to-sell-8-billion-in-tesla-stock/ '
        },
        {
            name:'Jeff Bezos',
            url:'https://www.ultrahdwallpaper.in/uploads/cache/882201035/Jeff-Bezos-HD-Wallpaper-400x270-MM-100.jpg '
        }
    ])

    const swiped = (direction, nametoDelete) =>{
        console.log("removing" + nametoDelete)
    }
   
    const outOffFrame = (name) =>{
        console.log(name + "left the screen")
    }
    
    


  return (
    <div className='TinderCard'>
        <div className='tindercards_container'>

        {people.map((person) => (
            // <h1> {person.name} </h1>
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={() => outOffFrame(person.name)}
            >
                <div style={{ backgroundImage:`url(${ person.url})` }} 
                    className="card"
                    >
                        <h3>{person.name}</h3>
                </div>

            </TinderCard>
         ))}
         
        </div>
        
    
    </div>
  )
}

export default TinderCards