import React from 'react'
import ReactDOM from 'react-dom/client'
import BtnDefault from './src/components/BtnDefault/BtnDefault'
import BtnOutline from './src/components/BtnOutline/BtnOutline'
import ConsultInvestment from './src/pages/ConsultInvestment/ConsultInvestment' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BtnDefault contentText="Clique aqusszszszssi"/>
    <br/>
    <br />
    <BtnOutline contentText="Clique"/>
    <ConsultInvestment/>
  </React.StrictMode>,
)