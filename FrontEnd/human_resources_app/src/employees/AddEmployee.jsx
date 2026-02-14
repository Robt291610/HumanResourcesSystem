import React from 'react'

export default function () {
    return (
        <div className='container'>

            <div className='container text-center' style={{ margin: "30px" }}>
                <h3>Add Employee</h3>
            </div>


            <form>
                <div class="mb-3">
                    <label htmlFor="name" class="form-label">Name</label>
                    <input type="email" class="form-control" id="name" required/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


        </div>
    )
}
