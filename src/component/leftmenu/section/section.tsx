import React from "react";
import Category from "./category/category";
import { store } from '../../../reducer/reducer'
import { IState } from "../../../type/IState";

interface IProps { }

export default class Section extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    const state: IState = store.getState();

    return (
      <section className="leftmenu-section">
        {
          state.categories.map(
            (category): JSX.Element => {
              return (
                <Category key={category.id} name={category.name} id={category.id} />
              )
            }
          )
        }
      </section>
    );
  }
}


