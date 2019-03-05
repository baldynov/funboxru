import React from 'react'
import './ItemList.scss'
import Item from "../Item/Item";
import isEqual from 'lodash/isEqual'
import xorWith from 'lodash/xorWith'
import unionWith from 'lodash/unionWith'

export default class ItemList extends React.Component {
    state = {
        items: [
            {
                header: 'Сказочное заморское яство',
                title: 'Нямушка',
                type: 'с фуа-гра',
                count: '10 порций',
                bonus: 'мышь в подарок',
                number: '0,5',
                description: 'Печень утки разварная с артишоками',
                isDisabled: false,
            },
            {
                header: 'Сказочное заморское яство',
                title: 'Нямушка',
                type: 'с рыбой',
                count: '40 порций',
                bonus: '2 мыши в подарок',
                number: '2',
                description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                isDisabled: false,
            },
            {
                header: 'Сказочное заморское яство',
                title: 'Нямушка',
                type: 'с курой',
                count: '100 порций',
                bonus: '5 мышей в подарок',
                number: '5',
                description: 'Филе из цыплят с труфелями в бульоне',
                isDisabled: true,
            }
        ],
        selected: [1]
    };

    //обработчик выбора
    handlerSelect(index) {
        let selected = this.state.selected;
        if (selected.includes(index)) {
            selected = xorWith(selected, [index], isEqual);
        }else {
            selected = unionWith(selected, [index], isEqual);
        }
        this.setState({selected});
    }

    render() {
        return (
            <div className='ItemList'>
                {this.state.items.map((item, index) => {
                   return (
                       <Item header={item.header}
                             title={item.title}
                             type={item.type}
                             count={item.count}
                             bonus={item.bonus}
                             number={item.number}
                             description={item.description}
                             isDisabled={item.isDisabled}
                             indexItem={index}
                             handlerSelect={this.handlerSelect.bind(this)}
                             key={index}
                             selected={this.state.selected}
                       />
                   )
                })}
            </div>
        )
    }
}