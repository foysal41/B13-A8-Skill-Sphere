import Image from "next/image";
import Hero from "./components/homgepage/Hero";
import PopularCourses from "./components/homgepage/PopularCourses";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <PopularCourses></PopularCourses>
    </div>
  );
}
