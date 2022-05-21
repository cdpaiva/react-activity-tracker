import { useInterval } from "../utils/hooks"

const Timer = ({ timer, setTimer, timerOn }) => {

    useInterval(() => setTimer(timer + 1), timerOn ? 1000 : null)

    const hours = ("0" + (Math.floor(timer / 3600) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timer / 60) % 60)).slice(-2);
    const seconds = ("0" + (Math.floor(timer) % 60)).slice(-2);

    return (
        <div>
            {hours} : {minutes} : {seconds}
        </div>
    )
}

export default Timer