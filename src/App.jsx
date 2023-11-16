import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/container";
import Button from "./components/Button/button";
import Text from "./components/Text/text";
import SidMenu from "./components/SidMenu/sidMenu";
import ProgressBar from "./components/ProgrssBar/progressBar";
import Slider from "./components/Slider/slider";

function App() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [photos, setPhotos] = useState([]);

  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer YOUR_ACCESS_KEY",
    },
  };

  const getData = async () => {
    try {
      let resp = await fetch(url, options);
      let jsonData = await resp.json();
      setPhotos(jsonData.results);
    } catch (error) {
      console.log(error);
    }
  };

  const list = photos.map((el) => (
    <div>
      <Text>{el.title}</Text>
      <img src={`http://image.tmdb.org/t/p/w500/${el.backdrop_path}` }/>
    </div>
  ));

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <br />
        <Text color="red" size={24}>
          Custome Components
        </Text>
        <br />
        <Button radius={50}>Click Me</Button>
        <Button>Click Me</Button>
        <Button type="primary">Click Me</Button>
        <Button type="primary" radius={50} onClick={() => setOpen(true)}>
          Open Menu
        </Button>
        <Text>Progress Bar</Text>
        <ProgressBar value={20} />
        <Text>Slider</Text>
        <br />
        <Slider
          list={list}
          current={current}
          onNext={() =>
            current !== list.length - 1
              ? setCurrent(current + 1)
              : setCurrent(0)
          }
          onPrev={() => current !== 0 && setCurrent(current - 1)}
        />
      </Container>
      <SidMenu isOpen={open}>
        <Text size={18}>Menu title</Text>
        <Button onClick={() => setOpen(false)}>Close Modal</Button>
      </SidMenu>
    </>
  );
}

export default App;
