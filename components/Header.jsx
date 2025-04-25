import React from 'react'
import { VscGithub } from "react-icons/vsc";

const Header = () => {
  return (
    <nav className={"flex items-center justify-around p-5  rounded-b-lg shadow-md shadow-gray-950 bg-[#131313]"} id='home'>
      <h3 className={'text-white text-xl md:text-2xl font-bold font-mono hover:cursor-pointer text-center'}> &lt; AIEnhance /&gt; </h3>
      <span>
        <a href={"https://github.com/AbhayLonkar"}>
          <VscGithub className={'invert size-6 md:size-8'} />
        </a>
      </span>
    </nav>
  )
}

export default Header
