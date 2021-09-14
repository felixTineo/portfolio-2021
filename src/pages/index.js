import * as React from "react"
import logo from '../images/logo.svg';

const IndexPage = () => {
  return (
    <div className="h-screen flex flex-col p-2">
      <header className="">
        <img src={logo} alt="felix tineo logo" />
      </header>
      <main className="flex-1 flex justify-center items-center">
        <h1>Under construction 🚧</h1>
      </main>
    </div>
  )
}

export default IndexPage
