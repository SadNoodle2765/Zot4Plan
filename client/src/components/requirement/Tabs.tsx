import {useState} from 'react';
import GETab from './GETab';
import MajorTab from './MajorTab';
import AddTab from './AddCourse/AddTab';

function Tabs () {
  const [tab, setTab] = useState<number>(1);

  return (
    <div className='ml-075 shadow-0 round-15'>
      <ul className="flex tab-panel m-0">
        <li className={'flex justify-center item-center tab round-top-left bd-r-w ' 
            + (tab === 1?"tab-active":"bg-grey")} 
            onClick={()=>setTab(1)}>
              Major Requirement
        </li>
        <li className={'flex justify-center item-center tab bd-r-w ' 
            + (tab === 2?"tab-active":"bg-grey")} 
            onClick={()=>setTab(2)}>
              General Education
        </li>
        <li className={'flex justify-center item-center tab round-top-right ' 
            + (tab === 3?"tab-active":"bg-grey")} 
            onClick={()=>setTab(3)}>
              + Courses
        </li>
      </ul>

      {tab === 1 && <MajorTab/>}
      {tab === 2 && <GETab/>}
      {tab === 3 && <AddTab/>}

      <div style={{height: '1.2rem'}}></div>
    </div>
  );
}

export default Tabs 