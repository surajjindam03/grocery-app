import React from 'react'


function Header(){


    return(

        <nav
        role="navigation"
        aria-label="Main menu"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
       >
        <ul>
        <li>My Grocery App</li>
        <li>
        <a className="anchor-image" href="https://github.com/surajjindam03/grocery-app">
                <img className="image-class" src="github.webp" alt='Github repo'/>
        </a>
        </li>
    
        </ul>
        {/* <a className="anchor-image" href="https://github.com/surajjindam03/grocery-app">
                <img className="image-class" src="github.webp" alt='Github repo'/>
        </a> */}
            
      </nav>

    )
}

export default Header;