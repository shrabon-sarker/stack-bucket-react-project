import React from 'react'
import DeleteIcon from '../../assets/icons/delete-icon.png'
import PrinterIcon from '../../assets/icons/printer-white-icon.png'
import DownArrowIcon from '../../assets/icons/down-arrow-white-icon.png'

function Table() {
    return (
        <div>
            <table className='table__table'>
						<thead className='table__thead'>
							<tr>
								<th>Item Name</th>
								<th>Quantity</th>
								<th>Cost</th>
								<th className='align-right'>
									{/* <button className='icon-button'>
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
									</button> */}
                                    Actions
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
        </div>
    )
}

export default Table
