import { timeFormatter } from "../utils/helpers"

const ActivityCard = ({ activity, timer, id, remove, retrack }) => {
    return <div className="flex flex-row justify-between border-2 border-black p-2 mb-2 rounded">
        <div className="flex flex-1 justify-between mr-4">
            <div className="leading-10 text-xl">{activity}</div>
            <div className="leading-10 text-xl">{timeFormatter(timer)}</div>
        </div>
        <div className="flex gap-2 items-center justify-center">
            <button className='btn btn-warning' onClick={() => remove(id)}>Remove</button>
            <button className='btn btn-secondary' onClick={() => retrack(activity)}>Retrack</button>
        </div>
    </div>
}

export default ActivityCard