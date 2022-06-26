import React, { useEffect, useRef } from 'react'

const DisplayBox = ({ children }) => {

  useEffect(() => {
    const box = document.querySelectorAll('.display-cover-box');
    const windowHeight = window.innerHeight;
    for (let el = 1; el < box.length; el++) {
      box[el].style.top = `${windowHeight*el}px`;
    }
    document.body.style.height = `${windowHeight*box.length}px`;
    window.addEventListener('scroll', function() {
      const offset = window.pageYOffset;
      box[1].style.top = windowHeight-offset >= 0 ? `${windowHeight-offset}px` : '0px';
      box[2].style.top = windowHeight*2-offset >= 0 ? `${windowHeight*2-offset}px` : '0px';

      const footerClasses = document.getElementsByTagName('footer')[0].classList;
      if (windowHeight*2 == offset) {
        footerClasses.add('footer-show');
      } else {
        footerClasses.remove('footer-show');
      }
    })
  }, []);
  return (
    <div className='display-cover-box'>
        {children}
    </div>
  )
}

export default DisplayBox;