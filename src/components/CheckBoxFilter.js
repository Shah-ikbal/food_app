import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './CheckBoxFilter.css';



  const GreenCheckbox = withStyles({
    root: {
      color: "lightgray",
      '&$checked': {
        color: "#FF4500",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);




const FilterCriteria = styled.div`
    display: flex;
    align-items: center;

`

function CheckBoxFilter({name}) {


    const [checked, setChecked] = useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <FilterCriteria>
            <GreenCheckbox 
                checked={checked}
                onChange={handleChange}
                size="small"
            />
            <h5 className={checked ? "checkbox__nameChecked" : "checkbox__name"} >{name}</h5>
        </FilterCriteria>
    )
}

export default CheckBoxFilter
