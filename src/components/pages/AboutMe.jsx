import image from "../../assets/DanO.jpg";

export default function AboutMe() {
  return (
    <div className="bg-isabelline-500 flex flex-wrap items-center">
      <img
        src={image}
        className="flex-shrink-0 h-auto w-1/2 md:w-1/4 lg:w-1/5"
        alt="A photograph of Daniel O'Neil, the person this portfolio is about. He is wearing a striped shirt, a red tie, and glasses. He is stood in front of a lovely abstract painting his mother made for him as a gift."
      />
      <div className="w-full md:w-3/4 lg:w-4/5 p-5">
        <h1 className="font-display">Daniel O'Neil</h1>
        <p className="font-display py-6">
          Hi, I'm Daniel O'Neil. I am an aspiring full-stack developer based in
          East Lansing, Michigan. I have a Bachelors of Science in Finance and
          Information Systems Management from Wayne State University, and I have
          full-stack development training from the MSU coding bootcamp. I am
          looking for either local or remote employment opportunities as I
          highly value my family and friends in the area and proximity to them
          is important to me. I hope this portfolio does a good job of
          exemplifying my skills in React, but I also have experience in the
          rest of the MERN stack, more basic full stack concepts like relational
          databases and JavaScript. I also have some experience in fully offline
          programming in Java, C++, and some Python although you won't find
          those represented in my GitHub. Outside of work I love playing video
          games, watching sports, working out, spending time with my friends and
          loved ones, and cooking.
        </p>
      </div>
    </div>
  );
}
