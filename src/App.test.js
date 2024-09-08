port App, { urlPathForToday } from './App'port renderer from 'react-test-renderer'port React, { Component } from 'react'port { Provider } from 'react-redux'port store from './store'port Layout from './scenes/Layout/Layout'port { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'port dateService from './services/dates/dateService'port NotFound from './scenes/components/NotFounport React from 'react'port ReactDOM from 'react-dom'port store from './store('renders without crashing', () => const div = document.createElement('div')ReactDOM.render(<App />, div)port { urlPathForToday } from './Apppshot('App renders correctly', () => const tree = renderer.create  <App /).toJSON()expect(tree).toMatchSnapshot()
test('placeholder', () => {

  expect(4).toBe(4)
})
