import {Router, Redirect} from '@reach/router'


//custom Components
import BucketPages from '../pages/bucket'
import BucketDetailPages from '../pages/bucket-details'
import ErrorPage from '../pages/404'





function AppRouter(){
    return(
        <Router>
            <BucketPages path='/' />
            <Redirect from='buckets' to='/' noThrow />
            <BucketDetailPages path='/buckets/:bucketID' />
            <ErrorPage default />
        </Router>
    )
}

export default AppRouter
