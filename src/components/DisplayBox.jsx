import React, { useEffect, useRef } from 'react'

const DisplayBox = ({ children }) => {

  useEffect(() => {
    const box = document.querySelectorAll('.display-cover-box');
    const windowHeight = window.innerHeight;
    for (let el = 0; el < box.length; el++) {
      console.log(el);
      box[el].style.zIndex = -el;
      box[el].style.top = `${windowHeight*el}px`;
    }
    document.body.style.height = `${windowHeight*box.length}px`;
    window.addEventListener('scroll', function() {
      const offset = this.window.pageYOffset;
      console.log(offset);
    })
  }, []);
  return (
    <div className='display-cover-box'>
        {children}
    </div>
  )
}

export default DisplayBox;