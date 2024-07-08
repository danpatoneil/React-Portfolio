export default function NavigationTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-emerald-300">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <div className="flex space-x-4">
                <a
                  href="#aboutme"
                  onClick={() => handlePageChange("AboutMe")}
                  className={
                    currentPage === "AboutMe" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  About Me
                </a>
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  className={
                    currentPage === "Portfolio" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  Portfolio
                </a>
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 space-x-2 px-2 pb-3 pt-2">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={currentPage === "AboutMe" ? "active" : ""}
          >
            About Me
          </a>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "active" : ""}
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "text-white-600 bg-emerald"
                : "bg-vivid_sky_blue"
            }
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
