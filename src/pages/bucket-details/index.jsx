

// custom assets

import DeleteIcon from '../../assets/icons/delete-icon.png'
import Nav from '../../components/nav'
import CreateItem from '../../components/create'
import Table from '../../components/table'



function BucketDetailPages() {
    return(
        <div>
            {/* navigation bar */}

            <Nav />

            {/* main content  */}
            <main className='container __margin--ylg'>
                {/* Add items */}
                    <CreateItem extra label='Add New Item' />
                {/* Item Tables */}
                <section className='section table __shadow--sm'>
					<Table />
				</section>

                {/* complated items tables */}
                <section className='section table table--success __shadow--sm'>
					<Table />
				</section>
            </main>
        </div>
    )
}

export default BucketDetailPages