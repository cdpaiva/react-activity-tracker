/*
Presents a finished activity
Has a button to keep track of that activity again
Has a button to delete the activity
*/

const ActivityCard = ({activity, timer, id, remove, retrack}) => {
    return <div>
        {`${activity} in ${timer}`}
        <button onClick={()=>remove(id)}>Remove</button>
        <button onClick={()=>retrack(activity)}>Track Again</button>
    </div>
}

export default ActivityCard