import { createStore, Store, Reducer, Action } from "redux";
import { IState } from "../type/IState";
import dataCategories from "../data/datacategory";
import dataItems from "../data/dataitem";
import { ICondition } from '../type/ICondition';

export const condition: ICondition = {
   selectedCategoryId: null
 };

interface IAction extends Action { }

interface IReducer extends Reducer {
   (state: IState, action: IAction): IState;
}


const initialState: IState = {
   categories: dataCategories,
   items: dataItems,
   selectedCategoryId: null
};



const reducer: IReducer = (state: IState | undefined = initialState, action: IAction): IState => {
   let result: IState = {
         categories: dataCategories,
         items: dataItems,
         selectedCategoryId: condition.selectedCategoryId
   }
   return result;
}

export const store: Store<IState> = createStore(reducer);

