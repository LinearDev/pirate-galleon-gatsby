import React from 'react'
import Plate from '../UI/Plate';

const PlatesBox = () => {
  return (
    <div className="container content-box">
        <div className="row justify-content-around plate-box">
            <div className='plates-heading'>
                <div className="col-md-12 text-center plates-heading-text">
                    <h2>Присоединяйся к<br />ПИРАТСКОЙ ГАЛЕРЕ</h2>
                    <p>Стань матросом на пиратской галере</p>
                </div>
            </div>
            <Plate title={'ГАЛЕРА'} desc={'Боевой корабль, для перемещения использующий главным образом вёсла'}/>
            <Plate title={'ПИРАТ'} desc={'Морской либо речной разбойник, промышляющий пиратством'}/>
            <Plate title={'РОДЖЕР'} desc={'Пиратский чёрный флаг с адамовой головой (черепом человека) и костями'}/>
        </div>
    </div>
  )
}

export default PlatesBox;