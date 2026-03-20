import { useState } from "react";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics"

const App = () => {
    const [counts, setCounts] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    function makeFeedback(type) {
        setCounts(prev => ({
            ...prev,
            [type]: prev[type] + 1
        }));
    }

    return (
        <>
            <Feedback makeFeedback={makeFeedback}/>
            <Statistics counts={counts}/>
        </>
    )
}

export default App