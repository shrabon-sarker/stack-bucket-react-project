
import DeleteIcon from '../../assets/icons/delete-icon.png'
// Import Assets
import EditIcon from '../../assets/icons/edit-icon.png'
import PrinterIcon from '../../assets/icons/printer-icon.png'
import CreateItem from '../../components/create'
import Nav from '../../components/nav'
import Table from '../../components/table'



function BucketPages() {
    return(
        <div>
            {/* navigation bar */}
            <Nav />
            {/* Min page content  */}
            <main className='container __margin--ylg'>
                {/* add new bucket secttion */}
                <CreateItem  label="Create New Bucket" />
                {/* buckets Tables */}
                <div className='section table __shadow--sm'>
					<Table />
				</div>
            </main>
        </div>
    )
}

export default BucketPages