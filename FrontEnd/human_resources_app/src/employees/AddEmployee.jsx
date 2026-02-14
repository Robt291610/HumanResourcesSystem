import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function () {

    const[employee, setEmployee]=useState({
        name:"",
        department:"",
        salary:""
    })

    const{name, department, salary } = employee

    const onImputChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    let navigation = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = "http://localhost:8080/api/employees";
        await axios.post(baseUrl, employee);
        navigation('/');

    }


    
    return (
        <div className='container'>

            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Add Employee</h3>
            </div>


            <form onSubmit={(e) => onSubmit(e)}>
                
                <div class="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required={true}
                        value={name} onChange={(e) => onImputChange(e)}
                    />
                </div>

                <div class="mb-3">
                    <label htmlFor="department" classNema="form-label">Department</label>
                    <input type="text" className="form-control" id="department" name="department"
                        value={department} onChange={(e) => onImputChange(e)}
                    />
                </div>

                <div class="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" step="any" className="form-control" id="salary" name="salary"
                        value={salary} onChange={(e) => onImputChange(e)}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-sm">Add</button>
                    <a href="/" className="btn btn-danger btn-sm me-3">Return</a>
                </div>
            </form>
        </div>
    )
}
