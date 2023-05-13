import React from 'react';
import Hamburger from './Hamburger';
const {useState} = React;



export default function Nav(props) {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`; 

return(
    <nav className="min-w-full py-5 flex justify-between px-4 bg-slate-500">
       <h1 className='text-lg'>Tanner Tieman</h1>

        
        <Hamburger isOpen={props.isOpen} />
           
        
    </nav>
    )

}
