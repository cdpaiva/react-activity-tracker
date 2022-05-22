const ActivityCard = ({ activity, timer, id, remove, retrack }) => {
    return <div className="flex flex-row justify-between border-2 border-black p-2 mb-2 rounded">
        {/* TODO: Format timer presentation */}
        <p className="leading-10 text-xl">{`${activity} in ${timer}`}</p>
        <div className="flex gap-2">
            <button className='border-2 border-black px-4 py-2 hover:bg-green-300 rounded' onClick={() => remove(id)}>Remove</button>
            <button className='border-2 border-black px-4 py-2 hover:bg-green-300 rounded' onClick={() => retrack(activity)}>Track Again</button>
        </div>
    </div>
}

export default ActivityCard