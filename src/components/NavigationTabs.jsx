export default function NavigationTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="bg-emerald-300">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#aboutme"
                  onClick={() => handlePageChange("AboutMe")}
                  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "AboutMe" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  About Me
                </a>
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={
                    currentPage === "Portfolio" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  Portfolio
                </a>
                <a
                  href="#resume"
                  onClick={() => handlePageChange("Resume")}
                  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={
                    currentPage === "Resume" ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500" : "text-isabelline-600"
                  }
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 space-x-2 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
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
