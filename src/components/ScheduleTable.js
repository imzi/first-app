import React, {useState, useEffect} from 'react'
import Select from 'react-select'
import data from './scheduleGride.json'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {IoIosClose} from 'react-icons/io'
import { Row, Col, Container, Table } from 'react-bootstrap';

function ScheduleTable() {
    const [suppliers, setSuppliers] = useState(data);
    const [ageGroup, setAgeGroup] = useState({
        values : []
    }); 

    useEffect(() => {
        const handleAgeGroups = (data) => {
            const newAgeGroup = [];
            data.map((item, index) => {
               return newAgeGroup[index] = item.age_group;
            })
            setAgeGroup({
                values : newAgeGroup
            })
        }
        handleAgeGroups(data);
    }, []) 

    const removeAge = (index, outerIndex) => {
        const newAges = [...ageGroup.values];
        newAges[index][outerIndex] = !newAges[index][outerIndex]
        setAgeGroup({
            values : newAges    
        });
    }
    
    let options = [
        { value: '690 8th street', label: '690 8th street' },
        { value: '200 Lexigton', label: '200 Lexigton' },
        { value: 'Others', label: 'Others' }
    ]

    let hourOptions = [
        { value: '00', label: '00'},
        { value: '01', label: '01'},
        { value: '02', label: '02'},
        { value: '03', label: '03'},
        { value: '04', label: '04'},
        { value: '05', label: '05'},
        { value: '06', label: '06'},
        { value: '07', label: '07'},
        { value: '08', label: '08'},
        { value: '09', label: '09'},
        { value: '10', label: '10'},
        { value: '11', label: '11'},
        { value: '12', label: '12'},
        { value: '13', label: '13'},
        { value: '14', label: '14'},
        { value: '15', label: '15'},
        { value: '16', label: '16'},
        { value: '17', label: '17'},
        { value: '18', label: '18'},
        { value: '19', label: '19'},
        { value: '20', label: '20'},
        { value: '21', label: '21'},
        { value: '22', label: '22'},
        { value: '23', label: '23'},
    ]

    let minutesOptions = [
        { value: '00', label: '00'},
        { value: '01', label: '01'},
        { value: '02', label: '02'},
        { value: '03', label: '03'},
        { value: '04', label: '04'},
        { value: '05', label: '05'},
        { value: '06', label: '06'},
        { value: '07', label: '07'},
        { value: '08', label: '08'},
        { value: '09', label: '09'},
        { value: '10', label: '10'},
        { value: '11', label: '11'},
        { value: '12', label: '12'},
        { value: '13', label: '13'},
        { value: '14', label: '14'},
        { value: '15', label: '15'},
        { value: '16', label: '16'},
        { value: '17', label: '17'},
        { value: '18', label: '18'},
        { value: '19', label: '19'},
        { value: '20', label: '20'},
        { value: '21', label: '21'},
        { value: '22', label: '22'},
        { value: '23', label: '23'},
        { value: '24', label: '24'},
        { value: '25', label: '25'},
        { value: '26', label: '26'},
        { value: '27', label: '27'},
        { value: '28', label: '28'},
        { value: '29', label: '29'},
        { value: '30', label: '30'},
        { value: '31', label: '31'},
        { value: '32', label: '32'},
        { value: '33', label: '33'},
        { value: '34', label: '34'},
        { value: '35', label: '35'},
        { value: '36', label: '36'},
        { value: '37', label: '37'},
        { value: '38', label: '38'},
        { value: '39', label: '39'},
        { value: '40', label: '40'},
        { value: '41', label: '41'},
        { value: '42', label: '42'},
        { value: '43', label: '43'},
        { value: '44', label: '44'},
        { value: '45', label: '45'},
        { value: '46', label: '46'},
        { value: '47', label: '47'},
        { value: '48', label: '48'},
        { value: '49', label: '49'},
        { value: '50', label: '50'},
        { value: '51', label: '51'},
        { value: '52', label: '52'},
        { value: '53', label: '53'},
        { value: '54', label: '54'},
        { value: '55', label: '55'},
        { value: '56', label: '56'},
        { value: '57', label: '57'},
        { value: '58', label: '58'},
        { value: '59', label: '59'}
    ]

    let cart = [
        ["Corn", "Potato", "Radish"],
        ["Tomato", "Graphes", "Mango"],
        ["Child", "Adult", "Big"]
    ];

    let statusesData = [
        true,
        true,
        false
    ]

    const [statuses, setStatus] = useState(statusesData)

    const handleRemoveRow = index => {
        const newSuppliers = suppliers.filter((supplier, i) => i !== index);
        setSuppliers(newSuppliers);
    }

    const handDefaultCheckbox = (index) => {
        const newSuppliers = statuses.filter((status, i) => i !== index);
        setStatus(newSuppliers) 
    };

    const handleTime = (supplier, index) => {
        if (suppliers[index].time.time = true) {
            return(
                <Container>
                <Row xs="auto">
                    <Col>From</Col>
                    <Col><Select defaultValue={{value: supplier.time.time[0], label: supplier.time.time[0]}} options={hourOptions}/></Col>
                    <Col>:</Col>
                    <Col><Select defaultValue={{value: supplier.time.time[1], label: supplier.time.time[1]}} options={minutesOptions}/></Col>
                    <Col>To</Col>
                    <Col><Select defaultValue={{value: supplier.time.time[2], label: supplier.time.time[2]}} options={hourOptions}/></Col>
                    <Col>:</Col>
                    <Col><Select defaultValue={{value: supplier.time.time[3], label: supplier.time.time[3]}} options={minutesOptions}/></Col>
                </Row>
            </Container>
            );
        }  
        if (suppliers[index].time.startTime = true){
            console.log(supplier[index].time.startTime)

            return (
                <Container>
                <Row xs="auto">
                    <Col><Select defaultValue={{value: supplier.time.startTime[0], label: supplier.time.startTime[0]}} options={hourOptions}/></Col>
                    <Col>:</Col>
                    <Col><Select defaultValue={{value: supplier.time.startTime[1], label: supplier.time.startTime[1]}} options={minutesOptions}/></Col>
                </Row>
            </Container>
            );
        }
    }
    return (
        <Table bordered  size="sm">
            <thead style={{backgroundColor: "#f7fbff", textAlign: 'center'}}>
                <tr>
                    <th>Supplier</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Language</th>
                    <th>Starting / Service point</th>
                    <th>Vahicle Type</th>
                    <th>Meal Plan</th>
                    <th>Age Group</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody style={{textAlign: 'left'}}>
                {suppliers.map((supplier, index) => (
                    <tr>
                        <td>{supplier.supplier}</td>
                        <td>{supplier.day}</td>
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

                                    ageGroup.values.map((item, index2) =>{
                                        return(
                                            <span key={index}>
                                                {
                                                    item.map((subItem, ageIndex) => {
                                                        return(
                                                            <span key={ageIndex}>{subItem}<IoIosClose style={{color: "red"} } 
                                                            onClick= {() => removeAge(index, ageIndex)}/>
                                                        </span>
                                                        )
                                                    })
                                                }
                                            </span>
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
                        </td>                        
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ScheduleTable
