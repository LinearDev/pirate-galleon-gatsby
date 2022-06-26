import React from 'react'

const WhatIs = () => {
  return (
    <div className="container content-box">
        <div className="row justify-content-md-start">
            <div className="col-lg-8 col-md-7 what-is">
                <h2>Что же такое Галера?</h2>
                <p>Мечтаешь стать пиратом в мире программирования? Или просто изучить ремесло которое у всех на слуху но никто его не видел? Тогда тебе к нам!
                    И ты сразу спросишь, это же наверное стоит миллион деняк? НЕТ! И ещё раз нет. Мы волонтеры которые учат тех кто хочет учиться, а главное научиться.</p>
                <p style={{marginBottom: '40px'}}>Приятное комьюнити, веселые и знающие своё дело люди - вот что ждет тебя в ПИРАТСКОЙ ГАЛЕРЕ!</p>
                <a className='contact-link'>
                    <font className='contact-link-bold'>Telegram -&nbsp;</font>
                    ПИРАЦКАЯ ГАЛЕРА
                </a>
            </div>
        </div>
    </div>
  )
}

export default WhatIs;