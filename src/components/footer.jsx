import React from 'react'
import '../styles/footer.scss'
import logoFooter from '../styles/assets/logoFooter-13.png'

class FooterComponent extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <h2 className='footer__title'>all right reserved</h2>
                <img className='footer__img' src={logoFooter} alt="logo"/>
            </footer>
        )
    }
}

export default FooterComponent
