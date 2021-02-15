import React from 'react'
import Nav from '../../components/nav'


function ErrorPage() {
    return (
        <div>
            <Nav />
            {/* Min page content  */}
            <main className='container __margin--ylg'>
                <h1> 404 page not found </h1>
            </main>
        </div>
    )
}

export default ErrorPage
