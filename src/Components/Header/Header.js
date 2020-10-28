import React from 'react';
import classes from './Header.module.css';
import { Dropdown } from 'semantic-ui-react'





export default function TopBar() {
    return (
        <div className={classes.HeaderMainContainer}>
           <nav className={classes.NavigationContainer}>
               <div className={classes.LeftContainer}>
               <svg className={classes.ShoeSvg} xmlns="http://www.w3.org/2000/svg"
 width="42.000000pt" height="42.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none" 
 
>
<path className={classes.Path} d="M410 534 c-77 -28 -108 -34 -165 -34 -38 1 -76 1 -82 1 -17 -1 -16
-40 2 -75 21 -40 19 -51 -17 -81 -26 -22 -37 -25 -70 -20 -51 9 -50 -1 11
-101 27 -45 52 -91 56 -103 9 -28 49 -54 72 -47 10 3 101 88 201 189 158 159
182 187 182 215 0 37 -34 79 -70 86 -15 3 -63 -9 -120 -30z m135 2 c18 -13 18
-14 -4 -49 -12 -19 -18 -38 -13 -41 5 -3 17 9 28 27 18 31 19 31 22 8 3 -20
-29 -57 -180 -208 -100 -100 -188 -183 -194 -183 -6 0 -19 9 -29 20 -17 19
-16 20 12 44 17 14 36 38 42 53 8 21 35 40 107 77 52 26 102 59 111 72 20 31
8 45 -13 16 -9 -13 -47 -39 -86 -58 -59 -30 -75 -34 -94 -25 -15 6 -25 7 -29
1 -4 -6 1 -13 9 -16 14 -5 13 -10 -7 -34 -12 -16 -30 -40 -40 -54 -10 -14 -22
-26 -27 -26 -4 0 -26 28 -47 63 -57 90 -59 94 -30 68 22 -20 32 -23 71 -17 25
4 46 12 46 18 0 7 -17 8 -48 4 l-47 -7 32 20 c38 24 63 60 72 104 7 31 11 34
151 84 80 28 150 52 156 52 5 1 19 -5 29 -13z m-320 -68 c-11 -6 -24 -18 -29
-26 -7 -12 -10 -12 -17 -1 -18 28 -9 39 29 39 33 -1 35 -2 17 -12z"
  
/>
<path d="M447 503 c-7 -11 10 -40 18 -31 4 4 3 14 -3 24 -5 9 -12 12 -15 7z"/>
<path d="M400 476 c0 -8 5 -18 10 -21 6 -3 10 1 10 9 0 8 -4 18 -10 21 -5 3
-10 -1 -10 -9z" />
<path d="M354 454 c3 -9 6 -18 6 -20 0 -3 4 -3 10 1 11 7 2 35 -12 35 -6 0 -7
-7 -4 -16z" />
<path d="M307 453 c-7 -11 10 -40 18 -31 4 4 3 14 -3 24 -5 9 -12 12 -15 7z" />
<path d="M260 421 c0 -12 5 -21 10 -21 6 0 10 6 10 14 0 8 -4 18 -10 21 -5 3
-10 -3 -10 -14z" />
<path d="M485 420 c-15 -17 -16 -20 -3 -20 19 0 42 26 30 34 -5 3 -17 -3 -27
-14z"/>
</g>
</svg>
               <h1 className={classes.Logo}>
                  Shotime
               </h1>
               </div>
               <div className={classes.RightContainer}>
                   <div className={classes.LinkWrapper}>
                   <Dropdown text='Shoes'>
    <Dropdown.Menu>
      <Dropdown.Item  text='Nike' />
      <Dropdown.Item text='Adidas' />
      <Dropdown.Item text='Puma' />
    </Dropdown.Menu>
  </Dropdown>
                   </div>
                   <div className={classes.LinkWrapper}>
                       Contact
                   </div>
                   <div className={classes.LinkWrapper}>
                   <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
                   </div>
               </div>
           </nav>
        </div>
    )
}
