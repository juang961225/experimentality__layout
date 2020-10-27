import React from 'react'
import '../styles/intro.scss'
import logoIntro from '../styles/assets/logo-intro-mobile.png'
import arrow from '../styles/assets/arrow-mobile-10.png'


class Intro extends React.Component {
    render(){
        return(
            <section className='intro'>
                <div className='intro__container'>
                    <img className='intro__img' src={logoIntro} alt="logo"/>
                    <div className='intro__container-subtitle'>
                    <h2 className='intro__subtitle'>History</h2>
                    <h2 className='intro__subtitle'>Form</h2>
                    </div>
                </div>
                <h1 className='intro__title'>Welcome<span className='intro__line-break'>-</span> to the family</h1>
                <img className='intro__arrow' src={arrow} alt="arrow"/>
            </section>
        )
    }
}

export default Intro