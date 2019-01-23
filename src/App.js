import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CSS from './App.css'
import Archive from './components/Archive'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import About from './components/About'

export default class App extends Component {
  render () {
    return (
      <main>
        <Navbar />
      </main>
    )
  }
}
