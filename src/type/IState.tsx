import { ICategory } from "./ICategory";
import { IItem } from './IItem';

// export interface IState {
//  list: IItem[];
// }

export interface IState {
  categories: ICategory[],
  items: IItem[],
  selectedCategoryId: number | null
}