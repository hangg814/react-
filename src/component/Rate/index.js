import React from "react"
import './index.css'

class Rate extends React.Component {
  // static defaultProps  声明props的默认值
  static defaultProps = {
    count: 5
  }

  state = {
    //默认显示数量    -1 则不显示
    hoverIndex: -1
  }

  //经过事件
  headerMouseover = (i) => {
    console.log(i);
    this.setState({
      hoverIndex: i
    })
  }

  // 离开事件   离开 全不显示
  headerMouseout = () => {
    this.setState({
      hoverIndex: -1
    })
  }

  renderStar () {
    const star = []
    for (let i = 0; i < this.props.count; i++) {
      star.push(
        <p 
          key={i}
          className={i <= this.state.hoverIndex ? 'hover' : ''}
          onMouseOver={() => this.headerMouseover(i)}
        ></p>
      )
    }
    return star
  }

  render () {
    return (
      <div className="star">{this.renderStar()}</div>
    )
  }
}
export default Rate