import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={props.img}
        alt={props.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800">{props.name}</h1>
      </div>
    </div>
  )
}

export default Card
