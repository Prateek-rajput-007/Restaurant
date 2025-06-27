import { useState } from 'react';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(false);

  // Detect current path for highlighting
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/catering', label: 'Catering' },
    { href: '/gift-cards', label: 'Gift Cards' },
  ];

  const toggleNav = () => setIsNavOpen((v) => !v);
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((v) => !v);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-30">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4 md:px-10 py-4 min-h-[7rem]">
        {/* Desktop Sidebar Toggle (Top-Left Icon) */}
        <button
          id="desktop-nav-button"
          className="hidden md:flex items-center justify-center rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 p-2"
          title="Open Navigation Menu"
          aria-controls="desktop-sidebar"
          aria-expanded={isDesktopSidebarOpen}
          onClick={toggleDesktopSidebar}
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-800 h-8 w-8 transition-transform hover:scale-110"
          >
            <path d="M27 11.9796H5C4.73478 11.9796 4.48043 12.085 4.29289 12.2725C4.10536 12.46 4 12.7144 4 12.9796C4 13.2448 4.10536 13.4992 4.29289 13.6867C4.48043 13.8743 4.73478 13.9796 5 13.9796H27C27.2652 13.9796 27.5196 13.8743 27.7071 13.6867C27.8946 13.4992 28 13.2448 28 12.9796C28 12.7144 27.8946 12.46 27.7071 12.2725C27.5196 12.085 27.2652 11.9796 27 11.9796Z" />
            <path d="M27 19.9796H5C4.73478 19.9796 4.48043 20.085 4.29289 20.2725C4.10536 20.46 4 20.7144 4 20.9796C4 21.2448 4.10536 21.4992 4.29289 21.6867C4.48043 21.8743 4.73478 21.9796 5 21.9796H27C27.2652 21.9796 27.5196 21.8743 27.7071 21.6867C27.8946 21.4992 28 21.2448 28 20.9796C28 20.7144 27.8946 20.46 27.7071 20.2725C27.5196 20.085 27.2652 19.9796 27 19.9796Z" />
          </svg>
        </button>

        {/* Desktop Layout: Menus left, Logo center, Right section right */}
        <div className="hidden md:flex flex-1 items-center justify-between w-full">
          {/* Left: Navigation */}
          <nav className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  currentPath === link.href
                    ? 'bg-[#f45c24] text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                aria-current={currentPath === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Center: Logo (shifted a bit left with mx-2 instead of mx-8) */}
          <a href="/" className="flex items-center h-18 shrink-0 mx-0">
            <img
              className="h-full object-contain"
              src="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1"
              srcSet="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1 1x, https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=2 2x"
              alt="Saffron Indian Kitchen"
              width={74}
              height={74}
            />
          </a>
          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              className="flex items-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition"
              aria-label="Sign in"
            >
              Sign in
            </button>
            <a
              className="flex items-center text-base rounded-md bg-orange-600 text-white py-2 px-3 hover:bg-blue-700 transition"
              aria-label="Order Online"
              href="/menu"
            >
              Order Online
              <svg
                aria-hidden="true"
                className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="256" height="256" fill="none" />
                <line
                  x1="70"
                  y1="128"
                  x2="216"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                  className="origin-[216px_128px] scale-x-0 group-hover:scale-x-100 transition-transform"
                />
                <polyline
                  points="144 56 216 128 144 200"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile: Logo left, right section right */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center h-16 shrink-0">
            <img
              className="h-full object-contain"
              src="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1"
              srcSet="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1 1x, https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=2 2x"
              alt="Saffron Indian Kitchen"
              width={64}
              height={64}
            />
          </a>
          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              className="flex items-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition"
              aria-label="Sign in"
            >
              Sign in
            </button>
            {/* Mobile Nav Toggle */}
            <button
              id="open-nav-button"
              className="flex md:hidden items-center justify-center rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 p-2"
              title="Open Mobile Navigation"
              aria-controls="mobile-nav"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-800 h-8 w-8"
              >
                <path d="M27 11.9796H5C4.73478 11.9796 4.48043 12.085 4.29289 12.2725C4.10536 12.46 4 12.7144 4 12.9796C4 13.2448 4.10536 13.4992 4.29289 13.6867C4.48043 13.8743 4.73478 13.9796 5 13.9796H27C27.2652 13.9796 27.5196 13.8743 27.7071 13.6867C27.8946 13.4992 28 13.2448 28 12.9796C28 12.7144 27.8946 12.46 27.7071 12.2725C27.5196 12.085 27.2652 11.9796 27 11.9796Z" />
                <path d="M27 19.9796H5C4.73478 19.9796 4.48043 20.085 4.29289 20.2725C4.10536 20.46 4 20.7144 4 20.9796C4 21.2448 4.10536 21.4992 4.29289 21.6867C4.48043 21.8743 4.73478 21.9796 5 21.9796H27C27.2652 21.9796 27.5196 21.8743 27.7071 21.6867C27.8946 21.4992 28 21.2448 28 20.9796C28 20.7144 27.8946 20.46 27.7071 20.2725C27.5196 20.085 27.2652 19.9796 27 19.9796Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${
          isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleNav}
        aria-hidden={!isNavOpen}
      />
      <nav
        id="mobile-nav"
        className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <a href="/" className="flex items-center h-12">
              <img
                src="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1"
                alt="Saffron Indian Kitchen"
                className="h-10"
              />
            </a>
            <button
              onClick={toggleNav}
              className="p-2 rounded hover:bg-gray-200"
              aria-label="Close Mobile Navigation"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-3 py-2 rounded-md font-medium transition ${
                    currentPath === link.href
                      ? 'bg-[#f45c24] text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-current={currentPath === link.href ? 'page' : undefined}
                  onClick={toggleNav}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-4 pb-6">
            <a
              className="flex items-center w-full justify-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition mb-2"
              aria-label="Download app"
              target="_blank"
              rel="noreferrer"
              href="https://saffronindian.app.ordersave.com/download-app"
            >
              Download app
            </a>
            <button
              className="flex items-center w-full justify-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition"
              aria-label="Sign in"
            >
              Sign in
            </button>
            <a
              className="flex items-center w-full justify-center text-base rounded-md bg-blue-600 text-white py-2 px-3 hover:bg-blue-700 transition mt-2"
              aria-label="Order Online"
              href="/menu"
              onClick={toggleNav}
            >
              Order Online
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 hidden md:block ${
          isDesktopSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleDesktopSidebar}
        aria-hidden={!isDesktopSidebarOpen}
      />
      <nav
        id="desktop-sidebar"
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 hidden md:block ${
          isDesktopSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Desktop Sidebar Navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <a href="/" className="flex items-center h-12">
              <img
                src="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=64&auto=format&dpr=1"
                alt="Saffron Indian Kitchen"
                className="h-10"
              />
            </a>
            <button
              onClick={toggleDesktopSidebar}
              className="p-2 rounded hover:bg-gray-200"
              aria-label="Close Desktop Sidebar"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-3 py-2 rounded-md font-medium transition ${
                    currentPath === link.href
                      ? 'bg-[#f45c24] text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-current={currentPath === link.href ? 'page' : undefined}
                  onClick={toggleDesktopSidebar}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-4 pb-6">
            <a
              className="flex items-center w-full justify-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition mb-2"
              aria-label="Download app"
              target="_blank"
              rel="noreferrer"
              href="https://saffronindian.app.ordersave.com/download-app"
              onClick={toggleDesktopSidebar}
            >
              Download app
            </a>
            <button
              className="flex items-center w-full justify-center text-base rounded-md border border-gray-300 bg-gray-100 text-gray-700 py-2 px-3 hover:bg-gray-200 transition"
              aria-label="Sign in"
              onClick={toggleDesktopSidebar}
            >
              Sign in
            </button>
            <a
              className="flex items-center w-full justify-center text-base rounded-md bg-blue-600 text-white py-2 px-3 hover:bg-blue-700 transition mt-2"
              aria-label="Order Online"
              href="/menu"
              onClick={toggleDesktopSidebar}
            >
              Order Online
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;