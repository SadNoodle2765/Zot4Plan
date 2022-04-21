import { useState } from 'react';

import QuestionMark from '../icon/QuestionMark';
import TutorialSlider from '../card/TutorialCard';
import ReactTooltip from "react-tooltip";

function HelpButton () {
    const [showTutorial, setShowTutorial] = useState(false);

    function handleOnClick( e: { preventDefault: () => void; }) {
        e.preventDefault();
        setShowTutorial(!showTutorial)
    }

    return (
    <>
        <button 
            data-tip data-for='helpTip'
            className='btn-outlined-header' 
            onClick={handleOnClick}
            aria-label="open tutorial"
        >
            <QuestionMark/>
        </button>
        <ReactTooltip id="helpTip" place="bottom" effect="solid">
            Tutorial
        </ReactTooltip>

        {showTutorial && <TutorialSlider closedTutorial={handleOnClick}/> }
    </>
    )
}

export default HelpButton;