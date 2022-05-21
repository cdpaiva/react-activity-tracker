import { useState } from 'react'
import ActivityCard from './components/ActivityCard'
import Timer from './components/Timer'

const App = () => {
  const [activity, setActivity] = useState("")
  const [activities, setActivities] = useState([])
  const [notification, setNotification] = useState("")
  const [timer, setTimer] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  const start = () => {
    setTimerOn(true)
  }

  const stop = () => {
    setTimerOn(false)
    setNotification(`Finished tracking ${activity}, in ${timer} seconds.`)
    const act = createActivity(activity, timer)
    setActivities(activities.concat(act))
    setActivity("")
    setTimer(0)
  }

  const pause = () => {
    setTimerOn(false)
  }

  const createActivity = (activity, timer) => {
    return {activity, timer, id:Math.floor(Math.random()*10000)}
  }

  const remove = (id) => {
    setActivities(activities.filter(a=>a.id !==id))
  }

  const retrack = (activity) => {
    setActivity(activity)
  }

  const buttons = () => {
    if (!timerOn && timer === 0) {
      return <button onClick={start}>Start</button>
    }
    if (!timerOn && timer !== 0) {
      return <>
        <button onClick={start}>Resume</button>
        <button onClick={stop}>Stop</button>
      </>
    }
    if (timerOn) {
      return <>
        <button onClick={stop}>Stop</button>
        <button onClick={pause}>Pause</button>
      </>
    }
  }

  return (
    <>
      <h1>Activity Tracker</h1>
      <Timer timerOn={timerOn} timer={timer} setTimer={setTimer} />

      <div>
        Name the activity to track:
      </div>
      <input type="text" onChange={e => setActivity(e.target.value)} value={activity}>
      </input>

      {(timerOn && activity)
        && <div>Started to track: {activity}</div>
      }
      <div>
        {buttons()}
      </div>
      {activities.map(a => 
      <ActivityCard {...a} remove={remove} retrack={retrack} key={a.id}/>)}
    </>
  )
}

export default App
