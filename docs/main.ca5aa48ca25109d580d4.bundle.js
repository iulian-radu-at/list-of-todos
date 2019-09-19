(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),defineProperty=__webpack_require__(117),styles={path:{stroke:"none",fillRule:"nonzero",fill:"#5066F0",fillOpacity:1},svg:{width:"1.5em",height:"1.5em",paddingTop:5,cursor:"pointer"}},buttons_StatusDone=function StatusDone(_ref){var onClick=_ref.onClick;return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",style:styles.svg,onClick:onClick},react.createElement("g",{id:"surface1"},react.createElement("path",{style:styles.path,d:"M 49.21875 25 C 49.21875 38.375 38.375 49.21875 25 49.21875 C 11.625 49.21875 0.78125 38.375 0.78125 25 C 0.78125 11.625 11.625 0.78125 25 0.78125 C 38.375 0.78125 49.21875 11.625 49.21875 25 Z M 22.199219 37.824219 L 40.167969 19.855469 C 40.777344 19.246094 40.777344 18.253906 40.167969 17.644531 L 37.957031 15.4375 C 37.347656 14.824219 36.359375 14.824219 35.746094 15.4375 L 21.09375 30.089844 L 14.253906 23.246094 C 13.640625 22.636719 12.652344 22.636719 12.042969 23.246094 L 9.832031 25.457031 C 9.222656 26.066406 9.222656 27.058594 9.832031 27.667969 L 19.988281 37.824219 C 20.597656 38.433594 21.589844 38.433594 22.199219 37.824219 Z M 22.199219 37.824219 "})))},StatusOpen_styles={path:{stroke:"none",fillRule:"nonzero",fill:"#5066F0",fillOpacity:1},svg:{width:"1.5em",height:"1.5em",paddingTop:5,cursor:"pointer"}},buttons_StatusOpen=function StatusOpen(_ref){var onClick=_ref.onClick;return react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50pt",height:"50pt",viewBox:"0 0 50 50",version:"1.1",style:StatusOpen_styles.svg,onClick:onClick},react.createElement("g",{id:"surface1"},react.createElement("path",{style:StatusOpen_styles.path,d:"M 25 0.78125 C 11.621094 0.78125 0.78125 11.621094 0.78125 25 C 0.78125 38.378906 11.621094 49.21875 25 49.21875 C 38.378906 49.21875 49.21875 38.378906 49.21875 25 C 49.21875 11.621094 38.378906 0.78125 25 0.78125 Z M 25 44.53125 C 14.210938 44.53125 5.46875 35.789062 5.46875 25 C 5.46875 14.210938 14.210938 5.46875 25 5.46875 C 35.789062 5.46875 44.53125 14.210938 44.53125 25 C 44.53125 35.789062 35.789062 44.53125 25 44.53125 Z M 25 44.53125 "})))};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var getStyle=function getStyle(ourStyle,customStyle){return customStyle?function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},ourStyle,{},customStyle):ourStyle};function TaskInList_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function TaskInList_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?TaskInList_ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TaskInList_ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var TaskInList_styles={button:{marginRight:10},container:{display:"flex",alignItems:"center",backgroundColor:"#cccccc",border:"solid 1px #444444",margin:10,padding:10},text:{textAlign:"left"}},src_TaskInList=function TaskInList(_ref){var item=_ref.item,onChange=_ref.onChange,style=_ref.style,handleChangeToOpen=react.useCallback((function(){onChange(TaskInList_objectSpread({},item,{done:!1}))}),[item,onChange]),handleChangeToDone=react.useCallback((function(){onChange(TaskInList_objectSpread({},item,{done:!0}))}),[item,onChange]);return react.createElement("div",{style:getStyle(TaskInList_styles.container,style)},react.createElement("div",{style:TaskInList_styles.button},item.done?react.createElement(buttons_StatusDone,{onClick:handleChangeToOpen}):react.createElement(buttons_StatusOpen,{onClick:handleChangeToDone})),react.createElement("div",{style:TaskInList_styles.text},item.text))},ListOfTodos_style={border:"solid 1px #888888"};__webpack_exports__.a=function ListOfTodos(_ref){var items=_ref.items,onChange=_ref.onChange,styleItem=_ref.styleItem,styleList=_ref.styleList;if(0===items.length)return null;var handleChangeTask=function handleChangeTask(changedItem){var newItems=items.map((function(item){return item.id!==changedItem.id?item:changedItem}));onChange(newItems)},renderItems=items.map((function renderItem(item){return react.createElement(src_TaskInList,{item:item,onChange:handleChangeTask,style:styleItem})}));return react.createElement("div",{style:getStyle(ListOfTodos_style,styleList)},renderItems)}},258:function(module,exports,__webpack_require__){__webpack_require__(259),__webpack_require__(361),module.exports=__webpack_require__(362)},362:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(113);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(561)}),module)}.call(this,__webpack_require__(190)(module))},561:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_rai_Workspace_components_list_of_todos_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(257),_src_ListOfTodos__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(160),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(113),styles={container:{height:"90vh",width:400,margin:10,textAlign:"center"},pre:{margin:"auto",textAlign:"left",width:"fit-content"},separator:{marginBottom:20}},mockItems=[{id:"1",text:"Text 1"},{id:"2",text:"Text 2 must to be a long text so we can see if it wrappes when there is not enough place to display it in one line",done:!0}],emptyHandle=function emptyHandle(){};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("ListOfTodos",module).addParameters({options:{showPanel:!1}}).add("with empty list",(function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:styles.container},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_ListOfTodos__WEBPACK_IMPORTED_MODULE_1__.a,{items:[],onChange:emptyHandle}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null),"There is nothig displayed for an empty list.")})).add("with non empty list",(function(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(mockItems),_React$useState2=Object(_home_rai_Workspace_components_list_of_todos_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),items=_React$useState2[0],setItems=_React$useState2[1],handleChangeStatus=react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback((function(newItems){setItems(newItems),document.getElementById("l").innerHTML=JSON.stringify(newItems,void 0,2)}),[items]);return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:styles.container},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_ListOfTodos__WEBPACK_IMPORTED_MODULE_1__.a,{items:items,onChange:handleChangeStatus}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{style:styles.separator}),"Items in list: ",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre",{id:"l",style:styles.pre}))}))}.call(this,__webpack_require__(190)(module))}},[[258,1,2]]]);
//# sourceMappingURL=main.ca5aa48ca25109d580d4.bundle.js.map