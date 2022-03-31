import {useState, MouseEvent} from 'react';
import  { StylesConfig } from "react-select";
import Axios from 'axios';
import AsyncSelect  from 'react-select/async';

import Add from '../../icons/Add'

import { useSelector } from 'react-redux';
import {RootState} from '../../../app/store';
import { useDispatch } from 'react-redux';
import {addCourseOther} from '../../../features/StoreSlice'

interface OptionType {
    value: string;
    label: string;
}

interface CourseType{
    id:string;
}

const myStyle: StylesConfig<OptionType, false> =  {
    menu: (provided, state) => {
        const width ='200px';
        return {
            ...provided, width
        };
    },

    control: (provided, state) => {
        const width ='200px';
        return {
            ...provided, width
        };
      }
}

const promiseOptions = (inputValue: string, callback:(options: OptionType[]) => void) => {
    let filterCourse:OptionType[] = [];
    if(inputValue.length < 3)
        callback(filterCourse);
    else 
        setTimeout(() => {
            Axios.get('http://localhost:8080/api/filterCourses', {
                params: { id: inputValue }}).then((res) => {
                    res.data.forEach((course:CourseType) => filterCourse.push({value: course.id, label: course.id}))
                    callback(filterCourse);
            });
        }, 500);
}

function BrowseCourse() {
    const [selectCourse, setSelectCourse] = useState<string>("");
    const courses = useSelector((state:RootState)=> state.store.courses.allIds);
    const dispatch = useDispatch();
    console.log("add select");

    const submitAddCourse = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if(!courses.includes(selectCourse))
            setTimeout(() => {
                Axios.get('http://localhost:8080/api/getCourseById', {
                    params: { id: selectCourse } } ).then((res) => {
                        console.log(res);
                        if(res.data.message === 'success') {
                            console.log(res.data);
                            dispatch(addCourseOther({course: res.data.data}));
                        }
                });
            }, 500); 
    };

    const handleOnChange = (option: OptionType | null) => {
        if(option)
            setSelectCourse(option.value);
        else
            setSelectCourse("");
    }

    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <AsyncSelect
                styles={myStyle}
                isClearable={true}
                cacheOptions 
                defaultOptions
                loadOptions={promiseOptions}
                onChange={handleOnChange}
                placeholder="Choose course"
                aria-label="Browse and add Course"
            />
            <button className='add-btn' onClick={submitAddCourse}> <Add/> </button>
        </div>
    )
};

export default BrowseCourse;