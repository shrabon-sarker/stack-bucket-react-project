

// custom assets
import BrandLogo from '../../assets/brand-logo/brand-logo.svg'
import MoreMenu from '../../assets/icons/more-menu.png'
import PlusIcon from '../../assets/icons/plus-icon.png'
import LeftArrowIcon from '../../assets/icons/left-arrow-icon.png'
import RightArrowIcon from '../../assets/icons/right-arrow-icon.png'
import DeleteIcon from '../../assets/icons/delete-icon.png'

import PrinterIcon from '../../assets/icons/printer-white-icon.png'

import DownArrowIcon from '../../assets/icons/down-arrow-white-icon.png'



function BucketDetailPages() {
    return(
        <div>
            {/* navigation bar */}
            <nav className='nav __shadow--lg'>
				<div className='container nav__container'>
					<div className='nav__brand'>
						<img
							className='nav__brand-logo'
							src={BrandLogo}
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

            {/* main content  */}
            <main className='container __margin--ylg'>
                {/* Add items */}
                <div className='section add-item __shadow--sm'>
					<div className='add-item__relative'>
						<div className='add-item__input'>
							<img
								className='add-item__icon'
								src={PlusIcon}
								alt='Create New Bucket'
							/>
							<input
								className='add-item__input-field'
								type='text'
								placeholder='Create New Bucket'
							/>
						</div>
						<div className='add-item__filter-overlay hide'>
							<ul className='add-item__filter-list'>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
								<li className='add-item__filter-item'>
									<div className='add-item__filter-content'>
										<img
											className='add-item__filter-icon'
											src={PlusIcon}
											alt='Item'
										/>
										Egg
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className='horizontal-line'></div>
					<div className='add-item__suggestions'>
						<div className='add-item__suggestion-control add-item__suggestion-control--prev'>
							<img
								className='add-item__suggestion-control-icon'
								src={LeftArrowIcon}
								alt='Previous'
							/>
						</div>
						<div className='add-item__suggestion-chips'>
							<div className='add-item__suggestion-chip-item'>
								Egg
							</div>
							<div className='add-item__suggestion-chip-item'>
								Carrot
							</div>
							<div className='add-item__suggestion-chip-item'>
								Banana
							</div>
							<div className='add-item__suggestion-chip-item'>
								Apple
							</div>
							<div className='add-item__suggestion-chip-item'>
								Coke
							</div>
							<div className='add-item__suggestion-chip-item'>
								Water
							</div>
							<div className='add-item__suggestion-chip-item'>
								Medicine
							</div>
							<div className='add-item__suggestion-chip-item'>
								Milk
							</div>
							<div className='add-item__suggestion-chip-item'>
								Apple
							</div>
							<div className='add-item__suggestion-chip-item'>
								Coke
							</div>
							<div className='add-item__suggestion-chip-item'>
								Water
							</div>
							<div className='add-item__suggestion-chip-item'>
								Medicine
							</div>
							<div className='add-item__suggestion-chip-item'>
								Apple
							</div>
							<div className='add-item__suggestion-chip-item'>
								Coke
							</div>
							<div className='add-item__suggestion-chip-item'>
								Water
							</div>
							<div className='add-item__suggestion-chip-item'>
								Medicine
							</div>
							<div className='add-item__suggestion-chip-item'>
								Milk
							</div>
						</div>
						<div className='add-item__suggestion-control add-item__suggestion-control--next'>
							<img
								className='add-item__suggestion-control-icon'
								src={RightArrowIcon}
								alt='Next'
							/>
						</div>
					</div>
				</div>
                {/* Item Tables */}
                <section className='section table __shadow--sm'>
					<table className='table__table'>
						<thead className='table__thead'>
							<tr>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Cost</th>
								<th className='align-right'>Actions</th>
							</tr>
						</thead>
						<tbody className='table__tbody'>
							<tr>
								<th>
									<div className='table__item-name'>
										<input type='checkbox' />
										<label>Carrots</label>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											aria-placeholder='500G'
											contenteditable
										>
											2KG
										</span>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											contenteditable
										>
											250
										</span>
										<span>BDT</span>
									</div>
								</th>
								<th className='align-right'>
									<button className='icon-button icon-button--custom'>
										<img
											className='icon-button__icon'
											src={DeleteIcon}
											alt='Delete'
										/>
									</button>
								</th>
							</tr>
						</tbody>
					</table>
				</section>

                {/* complated items tables */}
                <section className='section table table--success __shadow--sm'>
					<table className='table__table'>
						<thead className='table__thead'>
							<tr>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Cost</th>
								<th className='align-right'>
									<button className='icon-button'>
										<img
											className='icon-button__icon'
											src={PrinterIcon}
											alt='Print'
										/>
									</button>
									<button className='icon-button'>
										<img
											className='icon-button__icon'
											src={DownArrowIcon}
											alt='Print'
										/>
									</button>
								</th>
							</tr>
						</thead>
						<tbody className='table__tbody'>
							<tr>
								<th>
									<div className='table__item-name'>
										<input type='checkbox' />
										<label>Carrots</label>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											aria-placeholder='500G'
											contenteditable
										>
											2KG
										</span>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											contenteditable
										>
											250
										</span>
										<span>BDT</span>
									</div>
								</th>
								<th className='align-right'>
									<button className='icon-button'>
										<img
											className='icon-button__icon'
											src={DeleteIcon}
											alt='Delete'
										/>
									</button>
								</th>
							</tr>
							<tr>
								<th>
									<div className='table__item-name'>
										<input type='checkbox' />
										<label>Carrots</label>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											aria-placeholder='500G'
											contenteditable
										>
											2KG
										</span>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											contenteditable
										>
											250
										</span>
										<span>BDT</span>
									</div>
								</th>
								<th className='align-right'>
									<button className='icon-button'>
										<img
											className='icon-button__icon'
											src={DeleteIcon}
											alt='Delete'
										/>
									</button>
								</th>
							</tr>
							<tr>
								<th>
									<div className='table__item-name'>
										<input type='checkbox' />
										<label>Carrots</label>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											aria-placeholder='500G'
											contenteditable
										>
											2KG
										</span>
									</div>
								</th>
								<th>
									<div className='table__item-input'>
										<span
											className='auto-grow-input'
											role='textbox'
											contenteditable
										>
											250
										</span>
										<span>BDT</span>
									</div>
								</th>
								<th className='align-right'>
									<button className='icon-button'>
										<img
											className='icon-button__icon'
											src={DeleteIcon}
											alt='Delete'
										/>
									</button>
								</th>
							</tr>
						</tbody>
					</table>
				</section>
            </main>
        </div>
    )
}

export default BucketDetailPages