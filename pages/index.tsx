import { createContext, useContext } from "react";
import Hooks from "@/components/ReactDefault/Hooks";
import Hello from "@/components/ReactDefault/Poprs";
import RefUse from "@/components/ReactDefault/useRef";
import Counter from "@/components/ReactDefault/useState";
import Welcome from "@/components/ReactDefault/Welcome";
import type { NextPage } from "next";
import EventButton from "@/components/ReactDefault/Event";
import FruitList from "@/components/ReactDefault/List";
import Login from "@/components/ReactDefault/Rendering-if";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>현재 테마: {theme}</p>;
}

const Home: NextPage = () => {
  return (
    <>
      <ThemeContext.Provider value="light">
        <Welcome />
        <hr />
        <Hello name="Jammy" age={25} />
        <hr />
        <Counter />
        <hr />
        <Hooks />
        <hr />
        <RefUse />
        <hr />
        <Child />
        <hr />
        <EventButton />
        <hr />
        <FruitList />
        <hr />
        <Login isLoggedIn={true} />
      </ThemeContext.Provider>
    </>
  );
};

export default Home;
