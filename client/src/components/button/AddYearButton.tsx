import {memo} from 'react';
import {useDispatch} from 'react-redux';

import OutlineAdd from '../icon/OutlineAdd';
import {addYear} from '../../features/StoreSlice';

import ReactTooltip from "react-tooltip";

function AddYearButton() {
    const dispatch = useDispatch();

    const addNewYear = ( e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(addYear());
    }

    return ( 
    <div>
        <button
            className="absolute btn-secondary" 
            onClick={addNewYear}
            data-tip data-for='addYearTip'
            aria-label='add year'
        > 
            <OutlineAdd/> 
        </button>

        <ReactTooltip id="addYearTip" place="top" effect="solid">
            Add year
        </ReactTooltip>
    </div>
    )

}

export default memo(AddYearButton);