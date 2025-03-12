import MenuItems from './MenuItems'
import ThemeChanger from './ThemeChanger'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
    <div className="mt-12 p-2 md:mt-0 text-center border-b bg-white dark:bg-black text-sm">
  
  <a
    href="https://github.com/Umairmalik12/medicare-pms"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-accent transition-colors"
    aria-label="View source code on GitHub"
  >
  
  </a>
  .
</div>

    <header className="container mx-auto px-4 md:px-12 lg:px-20">
      <nav
        className="hidden md:flex justify-between items-center h-full mt-auto space-x-6 text-sm bg-opacity-30 backdrop-blur-sm"
        aria-label="Main Navigation"
      >
        <div className="flex items-center space-x-4">
          <Logo />
          <MenuItems />
        </div>
        <ThemeChanger
          styles="hidden sm:block transition-transform ease-in-out focus:outline-none hover:text-accent focus-visible:outline-accent"
        />
      </nav>
      <Navbar />
    </header>
    </>
  )
}

export default Header
