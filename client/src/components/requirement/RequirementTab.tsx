import {MouseEvent, useState} from 'react';
import GETab from './GETab';
import MajorTab from './MajorTab';
import OtherTab from './OtherTab';

function RequirementTab () {
  const [tab, setTab] = useState<number>(1);

  return (
    <div>
      <ul className="tab-panel">
        <li className={tab == 1?"tab tab-active":"tab"} onClick={()=>setTab(1)}>
          Major Requirement
        </li>
        <li className={tab == 2?"tab tab-active":"tab"} onClick={()=>setTab(2)}>
          General Education
        </li>
        <li className={tab == 3?'tab tab-active':'tab'} onClick={()=>setTab(3)}>
          Other
        </li>
      </ul>
      {tab === 1 && <MajorTab/>}
      {tab === 2 && <GETab />}
      {tab === 3 && <OtherTab />}
    </div>
  );
}

export default RequirementTab 