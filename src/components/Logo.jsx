import Link from 'next/link'

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Umair Developer, go back to homepage."
      className="flex items-center border-white group focus-visible:outline-accent"
    >
      <div className="overflow-hidden transition ease-in-out rounded-full hover:opacity-60">
        <span className="text-sm font-bold">Umair</span>
        <span className="text-sm text-accent font-bold"> Developer</span>
      </div>
    </Link>
  )
}

export default Logo
