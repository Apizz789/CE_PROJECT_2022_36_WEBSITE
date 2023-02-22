import React, { useState } from 'react'
import './Announment.css';
import { DropdownButton, Dropdown, Col, Row, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'






function Announment() {

  const [selectedItem, setSelectedItem] = useState('Select an item');

  const handleItemClick = (item) => {
    setSelectedItem(item)
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);



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
            <Row>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your Description."></textarea>
            </Row>
          </Col>




        </Row>

        <Row id="r2">
          <Col class="aa col-5">
            <Row> <label class="text_input3">Date</label></Row>
            <Row><input type="date" class="date_box mb-2" placeholder="Enter your Title." /></Row>
          </Col>

          <Col class="aa col-2">
            <Col>
              <Row> <label class="text_input4">Time</label></Row>
              <Row><input type="time" class="time_box mb-2" placeholder="Enter your Title." /></Row>
              <div>

              </div>




            </Col>
          </Col>

        </Row>








        <Row>
          <Col>
            <Button variant="primary" data-target="#exampleModalCenter" onClick={() => setShowModal(true)}>
              Send
            </Button>

            <Modal show={showModal} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title><FontAwesomeIcon icon={faTriangleExclamation} /> Please be careful!</Modal.Title>
              </Modal.Header>
              <Modal.Body>This Messeges will send to all user. </Modal.Body>
              <Modal.Footer>

                <Button variant="primary" onClick={() => console.log('Save changes')}>
                  Send Messeges
                </Button>

              </Modal.Footer>
            </Modal>
          </Col>
        </Row>




      </div >
    </div >

  );
}

export default Announment