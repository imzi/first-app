import React, {useState, useEffect} from 'react'
import scheduleData from './scheduleGride.json'


function Schedule() {
    const [ageGroup, setAgeGroup] = useState({
        values : []
    });

    const handleAgeGroups = () => {
        const newAgeGroup = []
        scheduleData.map((item, index) => {
           return newAgeGroup[index] = item.age_group;
        })
        setAgeGroup({
            values : newAgeGroup
        })
    }


    
    useEffect(() => {
        handleAgeGroups()
        console.log(ageGroup)
    }, [])

    const removeAge = (index, outerIndex) => {
        const newAges = [...ageGroup.values];
        newAges[index][outerIndex] = !newAges[index][outerIndex]
        setAgeGroup({
            values : newAges    
        });
    }

    return (
        <div>
            <table bordered  size="sm">
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
                    <tr onClick={() => handleAgeGroups()}>
                        Click Here
                    </tr>
                  <tr>
                      {
                          ageGroup.values.map((item, index) => {
                             return (
                                 <td>
                                    {item.map((subItem, outerIndex) => {
                                     return(
                                        <span onClick={() => removeAge(index, outerIndex)}>{subItem}   </span> 
                                     )
                                    }) }
                                 </td>                                 
                             )
                          })
                      }
                  </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Schedule
