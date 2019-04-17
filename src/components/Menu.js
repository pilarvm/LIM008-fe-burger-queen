import React, { useState } from 'react';
import { menu } from '../menu.json';

const Menu = () => {
    const dataMenu = {
        menu
    }

    const [ comida, setMenu] = useState(dataMenu)

    return (
        <div className="col-md-4" >
            <div className="card mt-4" type="button"  title={menu.title} >
                <div className="card-header" title={menu.title}>
                </div>
                <div className="card-body" title={menu.title}>
                    <p title={menu.title}> $ {menu.precio}</p>
                </div>
                <div className="card-footer"  title={menu.title}>
                    <p title={menu.title}>{menu.title}</p>
                </div>
            </div>
        </div>
    )


        
}
export default Menu;