import { useEffect, useState } from "react";
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>@social</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
