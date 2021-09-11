import {useSelector} from "react-redux";
import {updatePlace, updatePlaceData} from "../actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Form = () => {
    const place = useSelector((state) => state.place)
    const theme = useSelector((state) => state.theme)
    const [value, setValue] =  useState("")
    const dispatch = useDispatch();
    return(
        <div className="container">
        <div className="row">
        <div className="col-12 form  ">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                // dispatch(updatePlace(e.target.value));
                setValue(e.target.value)
              }}
            />
            <button 
            className={theme ? "btn btn-light" : "btn btn-dark"} 
            onClick={() => {
              dispatch(updatePlaceData(value))
            }}
            >
              Submit
            </button>
          </div>
          
        </div>
    </div>
    )
}
export default Form;