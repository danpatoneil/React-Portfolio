export default function NavigationTabs({ currentPage, handlePageChange, pageList }) {
  return (
    <nav className="bg-emerald-400">
          <div className="sm:items-stretch sm:justify-start hidden sm:flex">
              <div className="flex flex-1 justify-center">
                {pageList.map((pageName) => (
                <a
                  href={`#${pageName}`}
                  onClick={() => handlePageChange(pageName)}
                  key={pageName}
                  className={
                    currentPage === pageName
                      ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500 text-2xl text-center flex-1"
                      : "text-isabelline-600 px-2 border-solid border-2 border-emerald-300 text-center hover:bg-vivid_sky_blue-700 hover:px-2 hover:border-solid hover:border-2 hover:border-black_olive-400 text-2xl flex-1"
                  }
                >
                  {pageName}
                </a>

                ))}
              </div>
          </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 space-x-2 px-2 pb-3 pt-2">
                {pageList.map((pageName) => (
                <a
                href={`#${pageName}`}
                key={pageName}
                onClick={() => handlePageChange(pageName)}
                className={
                    currentPage === pageName
                      ? "bg-spanish_orange-700 px-2 border-solid border-2 border-black_olive-400 text-black_olive-500 text-m text-center flex-1"
                      : "text-isabelline-600 px-2 border-solid border-2 border-emerald-300 text-center hover:bg-vivid_sky_blue-700 hover:px-2 hover:border-solid hover:border-2 hover:border-black_olive-400 text-m flex-1"
                  }
              >
                {pageName}
              </a>
                ))}
        </div>
      </div>
    </nav>
  );
}
