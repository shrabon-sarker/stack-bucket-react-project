import React from 'react'
import brandLogo from '../../assets/brand-logo/brand-logo.svg'
import MoreMenu from '../../assets/icons/more-menu.png'


function ErrorPage() {
    return (
        <div>
            <nav className='nav __shadow--lg'>
				<div className='container nav__container'>
					<div className='nav__brand'>
						<img
							className='nav__brand-logo'
							src={brandLogo}
							alt='Brand Logo'
						/>
						<h1 className='nav__brand-name'>Stack Learner</h1>
					</div>
					<div className='nav__menu nav__menu--right'>
						<div className='nav__menu-items'>
							<img
								className='nav__menu-icon'
								src={MoreMenu}
								alt='More Menu'
							/>
						</div>
					</div>
				</div>
			</nav>
            {/* Min page content  */}
            <main className='container __margin--ylg'>
                <h1> 404 page not found </h1>
            </main>
        </div>
    )
}

export default ErrorPage
