import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import data from './scheduleData.json'
import {RiDeleteBinFill} from 'react-icons/ri'
import {IoIosClose} from 'react-icons/io'
import { Row, Col, Container, Table } from 'react-bootstrap';

function ScheduleList() {
    const [schedule, setSchedule] = useState(data);

    // const handleScheduleData = () => {
    //     setSchedule({
    //         field : data.field
    //     })
    // }

    // useEffect(() => {
    //     handleScheduleData();
    // }, [])

    return (
        <Table bordered  size="sm">
            <thead style={{backgroundColor: "#f7fbff", textAlign: 'center'}}>
                <tr>
                    <th>Supplier</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Language</th>
                    <th>Starting / Service point</th>
                    {
                        schedule.map((obj, outerIndex) => {
                            if (obj.configurationName === "ExtraAtributes") {
                                return(
                                    obj.configurationAttribute.map((innerObj, innerIndex) => {
                                        return(
                                            <th>{innerObj.innerConfigurationName}</th>
                                        )
                                    })
                                )
                            }
                        })
                    }
                    <th>Age Group</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign: 'left'}}>
                {schedule.map((scheduleObj, outerIndex) => (
                    <tr>
                        {
                            scheduleObj.configurationAttribute.map((oo) => {
                                return (
                                    <td>{oo}</td>
                                )
                            })
                        }
                        {/* <td>{supplier.day}</td>
                        <td >
                            {handleTime(supplier, index)}
                        </td>
                        <td>{supplier.language}</td>
                        <td > 
                            <Select defaultValue={{value:supplier.starting_service_point[0],label:supplier.starting_service_point[0]}} options={options} />
                        </td>
                        <td>{supplier.vahicle_type}</td>
                        <td>{supplier.meal_plan.map(item =>{
                            return(
                                <span>{item}<IoIosClose style={{color: "red"}}/></span>
                            );
                        })} </td>
                        <td>
                            <Row>
                                <Col>
                                {
                                    ageGroup.values.map((item, ageIndex) =>{
                                                return(
                                                    <span>{item}<IoIosClose style={{color: "red"} } onClick= {() => removeAge(index, ageIndex)}/></span>
                                                )
                                            
                                    })
                                }
                                </Col>
                            </Row>
                        </td>
                        <td>
                            <input
                                name="isActive"
                                type="checkbox"
                                checked={statuses[index]}
                                onChange={()=> handDefaultCheckbox(index)}
                            />
                        </td>
                        <td>
                            <RiDeleteBin6Fill
                            onClick = {() => handleRemoveRow(index)}
                            />
                        </td>                         */}
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ScheduleList
