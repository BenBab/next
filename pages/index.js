import React from 'react';
import fetch from 'isomorphic-unfetch';

import { siteName } from '../App_config';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import styled from 'styled-components';


import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

const Home = (props) => {
  const isClientOrServer = typeof window !== 'undefined' && window.document ? 'client' : 'server';
  console.log(isClientOrServer)
  console.log(isClientOrServer === 'client' ? props : null)


  return (
    <div>
      <Head title="Home" />
      <p>{props.data.administrator}</p>
      

    </div>
  )
}

Home.getInitialProps = async function() {
  const res = await fetch(`https://react-boiler-5ecbd.firebaseio.com/${siteName}/site.json`)
  const data = await res.json()

  console.log(`Show data fetched. ${data.administrator}`)

  return {
    data
  }
}



export default Home
