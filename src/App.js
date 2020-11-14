import React from 'react';

function Onepiece({ name, image }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={image} alt={name} />
    </div>

  );
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
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg"
  },
  {
    id: 4,
    name: "우솝",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg"
  },
  {
    id: 5,
    name: "버기",
    image: "https://image.aladin.co.kr/product/21891/12/cover500/s972636400_1.jpg"
  }
]


function App() {
  return (
    onepiece.map(name => <Onepiece key={name.id} name={name.name} image={name.image} />)
  )
}

export default App;