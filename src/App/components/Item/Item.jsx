import React from 'react'
import './Item.scss'
import PropTypes from 'prop-types';

export default class Item extends React.Component {

    static propTypes = {
        header: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        count: PropTypes.string,
        bonus: PropTypes.string,
        number: PropTypes.string,
        description: PropTypes.string,
        isDisabled: PropTypes.bool,
        indexItem: PropTypes.number,
        handlerSelect: PropTypes.func,
        selected: PropTypes.array
    };

    static defaultProps = {
        header: 'Заголовок',
        title: 'Название',
        type: 'вкус',
        count: 'количество порций',
        bonus: 'подарок',
        number: '0',
        description: 'описание',
        isDisabled: false,
        indexItem: 0
    };

    state = {
        header: this.props.header,
        title: this.props.title,
        type: this.props.type,
        count: this.props.count,
        bonus: this.props.bonus,
        number: this.props.number,
        description: this.props.description,
        isDisabled: this.props.isDisabled,
        indexItem: this.props.indexItem,
        isHover: false
    };

    handlerClick(index) {
        this.setState({isHover: false});
        this.props.handlerSelect(index)
    }

    renderDescription(index) {
        return (
            <div className='item-description__content'>
                <div>Что сидишь, порадуй котэ, </div>
                <div className='item-description__button' onClick={click => this.handlerClick(index)}> купи</div>
            </div>
        );
    }

    render() {
        const item = this.state;
        const isSelected = this.props.selected.includes(item.indexItem);
        const style = item.isDisabled ? 'disabled' : isSelected ? 'selected' : '';
        const descriptionDisabled = `Печалька, ${item.type} закончился`;

        return (
            <div className={`item ${style} ${isSelected && item.isHover ? 'hover' : ''}`}>
                <div className={`item-border`}>
                    <div className='item-content'
                         onClick={click => !item.isDisabled && this.handlerClick(item.indexItem)}
                         onMouseOut={event => isSelected && this.setState({isHover: true})}
                    >
                        <div className='item-info'>
                            <div className='item-header'>{item.isHover ? 'Котэ не одобряет?' : item.header}</div>
                            <div className='item-title'>{item.title}</div>
                            <div className='item-type'>{item.type}</div>
                            <div className='item-count'>{item.count}</div>
                            <div className='item-bonus'>{item.bonus}</div>
                        </div>
                        <div className='item-footer'>
                            <div className={`item-weight`}>
                                <div className='item-weight__number'>{item.number}</div>
                                <div className='item-weight__text'>кг</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item-description'>
                    {item.isDisabled ? descriptionDisabled : isSelected ? item.description : this.renderDescription(item.indexItem)}
                </div>
            </div>
        )
    }
}