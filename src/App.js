import './App.css';
import {useEffect, useState} from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDateTimePicker, MobileDateTimePicker, TimePicker } from '@mui/x-date-pickers';


function App() {
const today=new Date();
console.log(today,'today');
// const now = new Date();
//   now.setHours(23, 59, 59, 999);
const [mxTime,setmxTime] = useState(new Date());
const [currentTime,setCurrentTime] = useState('');
  const previousDay = new Date();
  previousDay.setDate(today.getDate() - 1);
  const previousTime = new Date();
  previousTime.setTime(today.getTime());
  const futureDay = (new Date()).setDate(today.getDate()+1);
useEffect(()=>{
  setCurrentTime(new Date());
},[currentTime]);

useEffect(()=>{
  handlemax();
},[mxTime])

const handlemax = (ctime) =>{
  setmxTime(ctime);
}
// const aa = currentTime.getMinutes();
// console.log(aa);
  return (
    <div className="App">
      
       
       <LocalizationProvider dateAdapter={AdapterDateFns}> 
       <DemoContainer components={['DateTimePicker','TimePicker']}>

       <DateTimePicker sx={{width:'300px'}} closeOnSelect={false} disablePast label="previous date and time hidden" />
       
       <DateTimePicker sx={{width:'300px'}} closeOnSelect={false} minDate={futureDay} label="current and previous date hidden" />
       
       <DateTimePicker maxDate={previousDay} closeOnSelect={false} sx={{width:'300px'}} label="current and future date hidden"  />

       <DateTimePicker closeOnSelect={false} sx={{width:'300px'}} disableFuture label="future date and time hidden"  />

       <DatePicker sx={{width:'300px'}} closeOnSelect={false} disableFuture disablePast label="only current Date" />
      
      <TimePicker sx={{width:'300px'}} closeOnSelect={false} minTime={currentTime} label="current and previous time hidden"  />

      <TimePicker sx={{width:'300px'}} value={mxTime} onChange={handlemax} closeOnSelect={false} maxTime={new Date()} label="current and future time hidden"  />
      
      </DemoContainer>
       </LocalizationProvider>
     </div>
   );
 }

export default App;

// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BasicDatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker label="Basic date picker" />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }