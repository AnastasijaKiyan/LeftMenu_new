import React from 'react';

const Title = (): JSX.Element | null => {

    return (
        <section className="leftmenu-title">
            <a href="#"><img className="leftmenu-title-logo" src="../../pict/logo.png" /></a>
            <div className="leftmenu-title-text">
                advertising module
            </div>
        </section>
    )
}

export default Title;