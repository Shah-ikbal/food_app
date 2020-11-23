import React from 'react';
import './Results.css';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { useState } from 'react';
import FilteredRestaurants from './FilteredRestaurants';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  }));
  


function  Results() {
    const classes = useStyles();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value)
    }
    
    return (
        <div className="results">
            <div className="results__top">
                <div className="results__filtered">
                    <div className="results__selected">
                        <p style={{color: "gray"}}>5-ratings</p>
                        <ClearIcon style={{color: "gray", fontSize: "25px"}}/>
                    </div>
                    <div className="results__selected">
                        <p style={{color: "gray"}}>₹0 - ₹700</p>
                        <ClearIcon style={{color: "gray", fontSize: "25px"}}/>
                    </div>
                    <div className="results__selected">
                        <p style={{color: "gray"}}>Non-Vegetarian</p>
                        <ClearIcon style={{color: "gray", fontSize: "25px"}}/>
                    </div>
                    <div className="results__selected">
                        <p style={{color: "gray"}}>0-5 kms</p>
                        <ClearIcon style={{color: "gray", fontSize: "25px"}}/>
                    </div>
                </div>
                <div className="results__menuItem">
                    <h4>Sort by:</h4>
                    <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Most Popular</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={value}
                            label="Most Popular"
                            onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Name"}>Name</MenuItem>
                            <MenuItem value={"Price"}>Price</MenuItem>
                            <MenuItem value={"Location"}>Location</MenuItem>
                            </Select>
                    </FormControl>
                </div> 
            </div>
            <div className="results__bottom">
                <div className="results__row">
                    <FilteredRestaurants name="Malabar Hotel" rating={3.1} image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"/>
                    <FilteredRestaurants name="Barbeque Delight" rating={2.0} image="https://lh3.googleusercontent.com/mSYYT8VtXKcbUQbHDNVg2dfr05Wmm1_PfnZML9ETurINRPSbsaUedErsQGo6kRXRZm4LgS7rVHKdKTvBbXmrPF6kVO4=w1000"/>
                    <FilteredRestaurants name="Punjabi Dhaba" rating={4.2}  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksrxfm4vPlxBrVxs4hDS3AmYfKr_ACcQOng&usqp=CAU"/>
                </div>
                <div className="results__row">
                    <FilteredRestaurants name="Malabar Hotel" rating={3.0} image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"/>
                    <FilteredRestaurants name="Barbeque Delight" rating={3.0} image="https://lh3.googleusercontent.com/mSYYT8VtXKcbUQbHDNVg2dfr05Wmm1_PfnZML9ETurINRPSbsaUedErsQGo6kRXRZm4LgS7rVHKdKTvBbXmrPF6kVO4=w1000"/>
                    <FilteredRestaurants name="Punjabi Dhaba" rating={2.0} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksrxfm4vPlxBrVxs4hDS3AmYfKr_ACcQOng&usqp=CAU"/>
                </div>
                <div className="results__row">
                    <FilteredRestaurants name="Malabar Hotel" rating={2.1} image="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg"/>
                    <FilteredRestaurants name="Barbeque Delight" rating={4.1} image="https://lh3.googleusercontent.com/mSYYT8VtXKcbUQbHDNVg2dfr05Wmm1_PfnZML9ETurINRPSbsaUedErsQGo6kRXRZm4LgS7rVHKdKTvBbXmrPF6kVO4=w1000"/>
                    <FilteredRestaurants name="Punjabi Dhaba" rating={4.4} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksrxfm4vPlxBrVxs4hDS3AmYfKr_ACcQOng&usqp=CAU"/>
                </div>
            </div>   
        </div>
    )
}

export default Results
