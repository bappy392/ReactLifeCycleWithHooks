import React from 'react'
import CardNumClass from './CardNumClass'
import OddOrEvenClass from './OddOrEvenClass'

const bdCards = [
  {
    image: '/logo192.png',
    title: 'sample title 1',
    description: 'sample description 1',
  },
  {
    image: '/logo192.png',
    title: 'sample title 2',
    description: 'sample description 2',
  },
  {
    image: '/logo192.png',
    title: 'sample title 3',
    description: 'sample description 3',
  },
]

class AppClass extends React.Component {
  constructor(props) {
    console.log('Constructor')
    super(props)
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
    this.resetCount = this.resetCount.bind(this)
    this.state = {
      count: 0,
      randomCards: [30, 33, 37, 42],
      pickedValue: null,
      show:true
    }
  }


  static getDerivedStateFromProps(state,props){
    console.log("getDerivedStateFromProps")
    return null
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps, nextState)
    console.log('shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentDidMount(){
    console.log('componentDidMount')
  } 

  incrementCount() {
    console.log('Increment Count')
    // console.log(this.state)
    // this.setState({
    //   count: this.state.count + 1,
    // })


    this.state.count=this.state.count+1
    this.forceUpdate()

    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1,
    //   }
    // })
  }



  decrementCount() {
    // this.setState({
    //   count: this.state.count - 1,
    // })
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  resetCount = () => {
    this.setState({
      count: 0,
    })
  }

  pickedCardParent = (cardNum) => {
    this.setState({
      pickedValue: cardNum,
    })
  }
  //   resetCount() {
  //     console.log('Reset Count')
  //   }

  render() {
    console.log('render')

    const { count, randomCards, pickedValue } = this.state
    return (
      <div className='app'>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.resetCount}>Reset</button>
        <OddOrEvenClass count={count} pickedValue={pickedValue} />
        <button onClick={()=>this.setState({show:!this.state.show})}>Show Hide Component</button>
       { this.state.show ? randomCards.map((cardNum) => (
          <CardNumClass
            cardNum={cardNum}
            key={cardNum}
            pickedCardParent={this.pickedCardParent}
          />
        )) : 'Component is hidden'
      }

        

        {/* {bdCards.map((card, index) => (
          <CardNumClass key={index} card={card} />
        ))} */}
      </div>
    )
  }
}

export default AppClass
