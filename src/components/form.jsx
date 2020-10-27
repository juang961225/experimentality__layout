import React from 'react'
import '../styles/form.scss'


class Form extends React.Component {
  render(){
    return(
      <section className='form'>
        <h2 className='form__title'>Form</h2>
        <form className='form__container'>
          <div className='form__wrapper-inputs'>
          <label className='form__label' htmlFor="">Nombre*</label>
          <input className='form__input' type="text"/>
          <label className='form__label' htmlFor="">Apellido</label>
          <input className='form__input' type="text"/>
          <label className='form__label' htmlFor="">Correo*</label>
          <input className='form__input' type="email"/>
          <label className='form__label' htmlFor="">Fecha de Nacimiento*</label>
          <input className='form__input' type="date"/>
          </div>
          <div className='form__wrapper'>
            <div className='form__terms'>
              <input className='form__checkbox' type="checkbox"/>
              <label className='form__label-checkbox' htmlFor="">Acepto terminos <span className='form__broken'>-</span> y condiciones*</label>
            </div>
            <div className='form__send'>
              <span className='form__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.sed diam</span>
              <input className='form__button' type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form