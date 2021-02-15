import PlusIcon from '../../assets/icons/plus-icon.png'
import Suggestion from '../suggestion'
import FilterOverlay from './FilterOverlay'



function CreateItem({label, extra}){
    return(
        <div>
            <div className='section add-item __shadow--sm'>
                <div className='add-item__relative'>
                    <div className='add-item__input'>
                        <img
                            className='add-item__icon'
                            src={PlusIcon}
                            alt={label}
                        />
                        <input
                            className='add-item__input-field'
                            type='text'
                            placeholder={label}
                        />
                    </div>
                    {/* FilterOverlay */}
                    {extra && <FilterOverlay />}
                </div>
                <div className='horizontal-line'></div>
                {/* Suggestion */}

                {extra && <Suggestion/>}
            </div>
        </div>
    )
}

export default CreateItem