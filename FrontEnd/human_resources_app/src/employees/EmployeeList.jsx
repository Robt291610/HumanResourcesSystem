import { useEffect, useState} from "react";
import { NumericFormat } from 'react-number-format';
import axios from "axios";

export default function EmployeeList() {


    // conection to the backend
    const baseUrl = "http://localhost:8080/api/employees";

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        try{
            const result = await axios.get(baseUrl);
            console.log("Result: ");
            console.log(result.data);
            setEmployee(result.data);
        }
        catch(error){
            console.error("There was an error loading: ", error);
        }
    }

    return (
        <div class="container">
            <div className="container text-center" style={{margin: "30px"}}>
                <h3>Human Resource System</h3>
            </div>

            <table class="table table-striped table-hover align-middle">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Employee</th>
                        <th scope="col">Department</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    // iterate employee array
                    employee.map((employee) => (
                    <tr key={employee.id}>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>
                            <NumericFormat value={employee.salary}
                            displayType={'text'}
                            thousandSeparator="," prefix={'$'}
                            decimalScale={2} fixedDecimalScale/>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
