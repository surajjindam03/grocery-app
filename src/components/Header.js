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
            <a href="https://github.com/surajjindam03/grocery-app">Github</a>
        </li>
        </ul>
            
      </nav>

    )
}

export default Header;