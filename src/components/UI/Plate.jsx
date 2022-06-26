import React from 'react'

const Plate = ({title, desc}) => {
  return (
    <div className="col-lg-3 col-md-8 plate">
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Plate;