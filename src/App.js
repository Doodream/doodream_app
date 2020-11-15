import React from 'react';
import PropTypes from 'prop-types';

function Onepiece({ name, image, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>

  );
}

Onepiece.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const onepiece = [
  {
    id: 1,
    name: "루피",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "상디",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "나미",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg",
    rating: 4.7
  },
  {
    id: 4,
    name: "우솝",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg",
    rating: 4.4
  },
  {
    id: 5,
    name: "버기",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg",
    rating: 4.3
  }
]


function App() {
  return (
    onepiece.map(name => <Onepiece key={name.id} name={name.name} image={name.image} rating = {name.rating}/>)
  )
}

export default App;