import React, { useState } from 'react'
import './Announment.css';
import { DropdownButton, Dropdown, Col, Row, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Announment() {

  const [selectedItem, setSelectedItem] = useState('Select an item');

  const handleItemClick = (item) => {
    setSelectedItem(item)
  };

  const [selectedDate, setSelectedDate] = useState(null);



  return (

    <div class="box1 container">
      <div class="box2">
        <label class="text_title">Announment</label>
        <p class="text_discription">[Send your short text for all users.]</p><hr />




        <Row>
          <Col class="center">
            <Row> <label class="text_input1">Title</label></Row>
            <Row><input type="text" class="text_box mb-2" placeholder="Enter your Title." /></Row>
          </Col>

          <Col class="waa">
            <Row> <label class="text_input2">Description</label></Row>
            <Row><input type="text" class="text_box mb-2" placeholder="Enter your Description." /></Row>
          </Col>




        </Row><br />



        <Row>


          <Col class="aa col-5">
            <Row><input type="date" class="text_box mb-2" placeholder="Enter your Title." /></Row>
            {/* <Col>
              <DropdownButton title={selectedItem}>
                <Dropdown.Item onClick={() => handleItemClick('Item 1')}>
                  Item 1
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick('Item 2')}>
                  Item 2
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleItemClick('Item 3')}>
                  Item 3
                </Dropdown.Item>
              </DropdownButton>
            </Col> */}

          </Col>

          <Col class="aa col-2">
            <Col>



              <Row><input type="time" class="text_box mb-2" placeholder="Enter your Title." /></Row>




            </Col>
          </Col>

        </Row>








        <Row>
          <Col><button type="button" class="bt1 btn btn-primary">Send</button></Col>
          {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Launch demo modal
          </button>

          {/* <!-- Modal --> */}
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </Row>



      </div >
    </div >

  );
}

export default Announment