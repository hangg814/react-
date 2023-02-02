/**
 * JSX
 * JSX是一个语法扩展，自身并不会自动执行，需要通过babel进行转换，转换成createElement函数的调用，
 * 而createElement函数执行，返回的结果是一个对象，这个对象用来描述dom结构
 * 在react中我们把这个对象称为虚拟dom
 * 
 * 使用jsx极大的方便了我们在使用react的时候编写ul逻辑的便利因为在react中我们可以通过js表达式进行
 * 值的输出，列表的循环，条件的判断，事件的添加
 * 
 */

import React from "react"
import Rate from './component/Rate/index'

// 该函数是一个有效的 React 组件，
// 接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。
// 这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。
const App = (props) => {
  const arr = ['第一', '第二', '第三', '第四']

  return (
    <div>
      <div>
        <h1>{1 + 8}</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>

      <div>
        <ul>
          {arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>

          {/* 组件 */}
      <Rate /> 

    </div>
  )
}

// setInterval(App, 1000);

export default App
