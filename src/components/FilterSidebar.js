import CheckBoxFilter from './CheckBoxFilter';
import styled from 'styled-components';
import { format, ocassion } from "./util";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Slider from '@material-ui/core/Slider';
import { useState } from 'react';


const SidebarComponent = styled.div`
    flex: 0.3;
    padding-right: 10px;
    border-right: 1px solid lightgray;
    
`
const SidebarTitle = styled.div`
    display: flex;
    justify-content: space-between;
`
const FilterContainer = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 10px;
`


function FilterSidebar() {
    const [price, setPrice] = useState([500, 2000])

    const handleChange = (event, newPrice) => {
        setPrice(newPrice)
    }    

    return (
        <SidebarComponent>
            <FilterContainer>
                <SidebarTitle>
                    <h4>Format</h4>
                    <ExpandLessIcon style={{color: "gray"}}/>
                </SidebarTitle>
                { format.map(({id, name}) => (
                    <CheckBoxFilter key={id} name={name}/>
                ))}
            </ FilterContainer>
            <FilterContainer>
                <SidebarTitle>
                <h4>Price ₹{price[0]*20}- ₹{price[1]*30}</h4>
                    <ExpandLessIcon style={{color: "gray"}}/>
                </SidebarTitle>
                <Slider
                    style={{color: "#FF4500", margin: "10px 0"}}
                    value={price}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={(value) => `₹${value}`}
                    />
            </FilterContainer>
            <FilterContainer>
                <SidebarTitle>
                    <h4>Ocassion</h4>
                    <ExpandLessIcon style={{color: "gray"}}/>
                </SidebarTitle>
                { ocassion.map(({id, name}) => (
                    <CheckBoxFilter key={id} name={name}/>
                ))}
            </ FilterContainer>
        </SidebarComponent>
    )
}

export default FilterSidebar
