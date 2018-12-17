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

// // export const store = new createStore(reducer.bind(this), initialState);
export const store: Store<IState> = createStore(reducer);

// export const onSearch: IHandler = (text: string): void => {
//   const action = { type: "onSearch" };
//   condition.search = text;
//   store.dispatch(action);
// };

// export const onAddLang: IHandler = (lang: string): void => {
//   const action = { type: "onSearch" };
//   if (condition.lang.some(item => item == lang)) return; // !!!
//   condition.lang.push(lang);
//   store.dispatch(action);
// };

// export const onRemoveLang: IHandler = (lang: string): void => {
//   const action = { type: "onRemoveLang" };
//   const index = condition.lang.indexOf(lang);
//   if (index < 0) return;
//   condition.lang.splice(index, 1);
//   store.dispatch(action);
// };
