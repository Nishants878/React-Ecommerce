import React from 'react'
import classes from './ShoeContainer.module.css';
import shoe from '../../picture/green.png'

export default function ShoeContainer() {
    return (
        <div className={classes.ShoeCard}>
              <div className={classes.container}>
        <div className={[classes.card, classes.card1].join(' ')}>
            <div className={classes.imgBx}>
               <img src={shoe} alt="Shoe"/>
            </div>
           
        </div>
    </div>
        </div>
    )
}
