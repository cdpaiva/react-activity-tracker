import { useState } from 'react'
import ActivityCard from './components/ActivityCard'
import Timer from './components/Timer'

const App = () => {
  const [activity, setActivity] = useState("")
  const [activities, setActivities] = useState([])
  // const [notification, setNotification] = useState("")
  const [timer, setTimer] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  const start = () => {
    setTimerOn(true)
  }

  const stop = () => {
    setTimerOn(false)
    // setNotification(`Finished tracking ${activity}, in ${timer} seconds.`)
    createActivity(activity, timer)
    setActivity("")
    setTimer(0)
  }

  const pause = () => {
    //TODO: on paused status there should be no input available
    setTimerOn(false)
  }

  const createActivity = (activity, timer) => {
    const pastActivity = activities.find(a => a.activity === activity)
    let newAct = { activity, timer, id: Math.floor(Math.random() * 10000) }
    if (pastActivity) {
      let newTimer = pastActivity.timer + timer
      let id = pastActivity.id
      newAct.id = id
      newAct.timer = newTimer
      setActivities(activities.map(a => a.id !== id ? a : newAct))
      return
    }
    setActivities(activities.concat(newAct))
  }

  const remove = (id) => {
    setActivities(activities.filter(a => a.id !== id))
  }

  const retrack = (activity) => {
    setActivity(activity)
  }

  const buttons = () => {
    //No activity is being tracked
    if (!timerOn && timer === 0) {
      return <button className='border-2 border-black px-4 py-2 hover:bg-green-300 disabled:bg-gray-300 rounded disabled:cursor-not-allowed' onClick={start} disabled={!activity}>Start</button>
    }
    //An activity is being tracked
    if (!timerOn && timer !== 0) {
      return <>
        <button className='border-2 border-black px-4 py-2 mr-2 hover:bg-green-300 rounded' onClick={start}>Resume</button>
        <button className='border-2 border-black px-4 py-2 hover:bg-green-300 rounded' onClick={stop}>Stop</button>
      </>
    }
    //An activity is paused
    if (timerOn) {
      return <>
        <button className='border-2 border-black px-4 py-2 mr-2 hover:bg-green-300 rounded' onClick={stop}>Stop</button>
        <button className='border-2 border-black px-4 py-2 hover:bg-green-300 rounded' onClick={pause}>Pause</button>
      </>
    }
  }

  return (
    <div className='container mx-auto'>
      <h1 className='font-extrabold text-4xl text-center my-4'>Activity Tracker</h1>
      <Timer timerOn={timerOn} timer={timer} setTimer={setTimer} />
      <div className='flex flex-col h-24'>
      {
        timerOn
        ? <div className='text-xl italic self-center my-auto'>Tracking {activity}</div>
        : <>
            <div className='text-xl italic mb-4'>
              Name the activity to track:
            </div>
            <input className='bg-green-300 border-b-2 border-black h-10 w-full mb-4' type="text" onChange={e => setActivity(e.target.value)} value={activity}>
            </input>
          </>
      }
      </div>
      <div className='flex justify-center mb-4'>
        {buttons()}
      </div>
      <div className='w-3/4 mx-auto '>
        <h3 className='text-xl mb-2 underline'>Last Activities:</h3>
        {activities.length === 0 && <p className='italic'>There are no activities yet. After tracking one, you can see the results here.</p>}
        {activities.map(a =>
          <ActivityCard {...a} remove={remove} retrack={retrack} key={a.id} />)}
      </div>
    </div>
  )
}

export default App
