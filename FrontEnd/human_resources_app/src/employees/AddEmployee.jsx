import React from 'react'

export default function () {
    return (
        <div className='container'>

            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Add Employee</h3>
            </div>


            <form>
                <div class="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" required={true}/>
                </div>

                <div class="mb-3">
                    <label htmlFor="department" classNema="form-label">Department</label>
                    <input type="text" className="form-control" id="department" name="department"/>
                </div>

                <div class="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" step="any" className="form-control" id="salary" name="salary"/>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-sm">Add</button>
                    <a href="/" className="btn btn-danger btn-sm me-3">Return</a>
                </div>
            </form>


        </div>
    )
}
