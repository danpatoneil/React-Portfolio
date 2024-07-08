import githubLogo from "../assets/github-mark.png";

export default function Footer() {
  return (
    <div className="bg-vivid_sky_blue-800 p-10 font-display py-6 text-3xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-6">
      <p className="flex items-center justify-center">
        <a
          className="text-emerald-400 hover:text-emerald-900 flex items-center"
          href="mailto:danpatoneil@gmail.com"
        >
          📧 <span className="ml-2">danpatoneil@gmail.com</span>
        </a>
      </p>
      <p className="flex items-center justify-center">
        <a
          className="text-emerald-400 hover:text-emerald-600 flex items-center"
          href="https://github.com/danpatoneil/"
        >
          <img src={githubLogo} alt="" className="h-10 inline mr-2" />
          <span>github.com/danpatoneil</span>
        </a>
      </p>
    </div>
  );
}
