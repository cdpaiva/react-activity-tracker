import { useInterval } from "../utils/hooks"

const Timer = ({ timer, setTimer, timerOn }) => {

    useInterval(() => setTimer(timer + 1), timerOn ? 1000 : null)

    const hours = ("0" + (Math.floor(timer / 3600) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timer / 60) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(timer) % 60)).slice(-2);

    return (
        <div className="flex justify-center">
            <div className="text-3xl text-center border-2 border-green-700 rounded py-3 px-6 max-w-sm">
                {hours} : {minutes} : {seconds}
            </div>
        </div>
    )
}

export default Timer