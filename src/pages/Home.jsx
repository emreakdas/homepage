import StartHero from "../components/StartHero";
import Projects from "../components/Projects/List";
import Articles from "../components/Articles";
import More from "../components/More";

function Home() {
  return (
    <>
      <StartHero />
      <Projects />
      <Articles />
      <More />
    </>
  );
}

export default Home;
