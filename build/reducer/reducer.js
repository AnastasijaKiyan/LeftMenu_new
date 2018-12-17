"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var datacategory_1 = require("../data/datacategory");
var dataitem_1 = require("../data/dataitem");
exports.condition = {
    selectedCategoryId: null
};
var initialState = {
    categories: datacategory_1["default"],
    items: dataitem_1["default"],
    selectedCategoryId: null
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var result = {
        categories: datacategory_1["default"],
        items: dataitem_1["default"],
        selectedCategoryId: exports.condition.selectedCategoryId
    };
    return result;
};
// // export const store = new createStore(reducer.bind(this), initialState);
exports.store = redux_1.createStore(reducer);
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
