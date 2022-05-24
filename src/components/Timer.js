import { useInterval } from "../utils/hooks"
import { timeFormatter } from "../utils/helpers";

const Timer = ({ timer, setTimer, timerOn }) => {
    useInterval(() => setTimer(timer + 1), timerOn ? 1000 : null)

    return (
        <div className="flex justify-center">
            <div className="text-4xl font-bold italic text-center bg-gradient-to-tr from-green-200 to-green-400 rounded py-3 px-6 max-w-sm">
                {timeFormatter(timer)}
            </div>
        </div>
    )
}

export default Timer