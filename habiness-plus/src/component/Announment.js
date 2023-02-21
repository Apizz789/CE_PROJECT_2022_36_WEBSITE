import React, { useState } from 'react'
import './Announment.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
// import DatePicker from 'react-bootstrap-datetimepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';÷
// import TimePicker from 'react-bootstrap-time-picker';


function Announment() {


  // const [date, setDate] = useState(null);


  // const handleDateChange = (newDate) => {
  //   setDate(newDate);
  // };


  return (

    <div class="box1">
      <label class="text_title">Announment</label>

      <div>
        <input type="text" class="text_box mb-2" />

        <DropdownButton id="my-dropdown" title="My Dropdown" >
          <Dropdown.Item eventKey="1">Simple</Dropdown.Item>
          <Dropdown.Item eventKey="2">Important</Dropdown.Item>
          <Dropdown.Item eventKey="3">OP3</Dropdown.Item>
        </DropdownButton>

        {/* <DatePicker
          inputProps={{ readOnly: true }}
          onChange={handleDateChange}
          value={date}
          timeFormat={false}
          dateFormat="DD/MM/YYYY"
        /> */}

        {/* <TimePicker
          onChange={handleTimeChange}
          value={time}
          step={30}
          start="09:00"
          end="18:00"
          format={24}
        /> */}

        <button type="button" class="bt1 btn btn-primary">Click Me!</button>


      </div>


    </div>

  )
}

export default Announment