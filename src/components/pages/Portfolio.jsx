import textEditorImage from '../../assets/TextEditor.png'
import backEndImage from '../../assets/backEnd.png'
import gamingDatabaseImage from '../../assets/GamersGala.png'
import SVGLogoGeneratorImage from '../../assets/SVGGenerator.png'
import noteTakerImage from '../../assets/noteTaker.png'
import readmeGeneratorImage from '../../assets/ReadmeGenerator.png'

export default function Portfolio() {
  const projectArray = [
    {
      name: "Text Editor",
      link: "https://github.com/danpatoneil/Text-Editor",
      imageSrc: textEditorImage,
    },
    {
      name: "E-Commerce Back End",
      link: "https://github.com/danpatoneil/E-Commerce-Back-End",
      imageSrc: backEndImage,
    },
    {
      name: "Gaming Database",
      link: "https://github.com/danpatoneil/Gaming-Database",
      imageSrc: gamingDatabaseImage,
    },
    {
      name: "SVG Logo Generator",
      link: "https://github.com/danpatoneil/SVG-Logo-Generator",
      imageSrc: SVGLogoGeneratorImage,
    },
    {
      name: "Note Taker",
      link: "https://github.com/danpatoneil/Note-Taker",
      imageSrc: noteTakerImage,
    },
    {
      name: "Readme Generator",
      link: "https://github.com/danpatoneil/Readme-Generator",
      imageSrc: readmeGeneratorImage,
    },
  ];
  return (
    <div className="bg-isabelline-500 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8">
      {projectArray.map((project) => (
        <a
          href={project.link}
          className="relative bg-cover bg-center h-72 rounded-xl border-solid border-2 border-black_olive-400 text-black_olive-200"
          key={project.name}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project.imageSrc}
              alt={project.imageAlt}
              className="object-cover w-full h-full transform transition-transform hover:scale-110 ease-in duration-75"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <p className="bg-emerald-400 absolute bottom-3 right-3 text-3xl rounded-xl p-2 border-solid border-2 border-black_olive-400">
              {project.name}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
