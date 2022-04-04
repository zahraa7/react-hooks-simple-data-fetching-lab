import { useEffect, useState } from "react";

function App() {
  const [dog, setDog] = useState(``);
  console.log(dog);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        return setDog(data);
      });
  }, []);

  return (
    <span>
      {!dog ? (
        <h2>Loading...</h2>
      ) : (
        <img src={dog.message} alt="A Random Dog"></img>
      )}
    </span>
  );
}

export default App;