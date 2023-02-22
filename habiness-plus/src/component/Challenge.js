import React, { useState } from 'react'
import './Challenge.css';
import { DropdownButton, Dropdown, Col, Row, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconPicker, Icon } from "icon-picker-react";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css";
import "@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css";


function Challenge() {

    const [selectedItem, setSelectedItem] = useState('Select an item');

    const handleItemClick = (item) => {
        setSelectedItem(item)
    };
    const [showModal, setShowModal] = useState(false);
    const [iconLabel, setIconLabel] = useState('');

    
    return (
        <div>
            
            <div class="box1 container">
                <div class="box2">
                    <label class="text_title">System Challenges</label>
                    <p class="text_discription">[Create system activity below.]</p><hr />

                    <Row>
                        <Col class="center">
                            <Row> <label class="text_input1">Icon</label></Row>
                            <Row>
                                <Col>
                                    <input type="button" class="text_box2 mb-2" placeholder="Enter your Title." />
                                    <input type="text" class="text_box3 mb-2" placeholder="Enter your Title." />

                                </Col>


                            </Row>
                           
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
                                    <Modal.Title> Please be careful!</Modal.Title>
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

            </div>
        </div>
    )
}

export default Challenge