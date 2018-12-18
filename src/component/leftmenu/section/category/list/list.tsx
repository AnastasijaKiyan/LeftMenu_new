import React, { Component } from 'react';
import { IState } from '../../../../../type/IState';
import * as Reducer from '../../../../../reducer/reducer'
import Item from './item/item';
import { IItem } from '../../../../../type/IItem';



interface IProps {
    categoryId: number
}

export default class List extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        let allItems: IItem[] = Reducer.store.getState().items;
        let filteredItems: IItem[] = allItems.filter((i) => i.field == this.props.categoryId);

        if (Reducer.condition.selectedCategoryId != this.props.categoryId) {
            return null;
        } else {
            return (
                <div>
                    {
                        filteredItems.map(
                            (item): JSX.Element => {
                                return <Item key={item.id} name={item.name}/>
                            }
                        )
                    }
                </div>
            )
        }
    }
}