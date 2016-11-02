import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { fetchUser, setUserName } from './redux/actions/user'

import { getArticle } from './service/model/article.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux</h2>
        </div>
        {this.renderWelcome()}
        {this.renderArticle()}
      </div>
    );
  }


  constructor(props){
    super(props)
    this.state = {
      articles: [],
      login: false,
      name: '',
    }
  }

  componentWillMount(){
    this.fnGetArticle()
  }

  async fnGetArticle(){
    let articles = await getArticle()
    // getArticle().then(articles => {
    //   this.setState({
    //     articles
    //   })
    // })
    console.log(111)
    this.setState({
      articles
    })
  }

  handleChange(){
    const name = this.refs.input.value
    this.setState({
      name: this.refs.input.value
    })
  }

  login(ev){
    ev.preventDefault()
    this.props.dispatch(fetchUser(this.state.name))
    this.setState({
      login: true,
    })
  }

  logout(){
    this.setState({
      name: '',
      login: false,
    })
  }

  renderArticle(){
    return (
      <ul>
        {this.state.articles.map(data => <li>{data.title}</li>)}
      </ul>
    )
  }

  renderWelcome(){
    const {user} = this.props
    if( this.state.login && user.name ){
      return (
        <p className="App-intro">
          Welcome to {user.name}
          <button onClick={this.logout.bind(this)}>Logout</button>
        </p>
      )
    }else{
      return (
        <form className="App-intro">
          <input  onSubmit={this.logout.bind(this)} placeholder="user name" onChange={this.handleChange.bind(this)} value={this.state.name} ref="input" />
          <button onClick={this.login.bind(this)}>Login</button>
        </form>
        )
    }
  }

}

export default connect(store => {
  return {
    user: store.user
  }
})(App)
