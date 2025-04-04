import Image from 'next/image'
import Socials from '@/components/Socials'

const AboutPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
        About Umair Javed
      </h1>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-70 h-70 overflow-hidden  shadow-2xl border-4 border-primary transform hover:scale-105 transition duration-500 ease-in-out">
            <Image
              src="/images/Screenshot_2.jpg"  // Image path
              alt="Umair Javed - Full Stack Developer"
              width={250}
              height={260}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 space-y-6 text-lg leading-relaxed text-gray-800">
          <p>
            Umair Javed is a passionate and highly skilled Full-Stack Developer with over five years of hands-on experience in building and maintaining scalable, production-level web and mobile applications. He holds an MPhil in Computer Science and a BS in Information Technology.
          </p>
          <p>
            Umair specializes in modern frameworks and architectures including Angular, React, Node.js, and Loopback. His experience spans enterprise systems, hybrid mobile apps, and data-driven dashboards. Whether leading frontend design or backend API development, Umair ensures clean code, optimized performance, and long-term maintainability.
          </p>
          <p>
            His portfolio includes successful projects such as <strong>ECMS Frontend & Backend, XY Community, HomeaZZon, FoodSoft API & Web, POS Systems, BurjSoft, FoodVez, Gridster, HMC Software</strong>, and many more. These solutions span industries like healthcare, retail, tech, and community platforms.
          </p>
          <p>
            Umair has a keen eye for detail and UX, blending his technical know-how with real-world problem-solving. His ability to integrate third-party services, manage authentication flows, optimize databases, and build cross-platform mobile apps makes him a versatile asset in any software team.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base">
          <div>
            <h3 className="font-bold text-lg">Frontend</h3>
            <p>Angular, React, TypeScript, JavaScript, HTML, CSS</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Backend</h3>
            <p>Node.js, Loopback, Express.js</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Databases</h3>
            <p>MySQL, MongoDB</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Mobile</h3>
            <p>Capacitor (Hybrid Mobile Apps)</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Other Tools</h3>
            <p>Git, REST APIs, JWT, Firebase, Stripe, Docker (basic), Postman</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          {[
            'ECMS Frontend & Backend',
            'XY Community',
            'POS Systems',
            'HomeaZZon',
            'FoodSoft API',
            'BurjSoft',
            'Gridster Dashboard',
            'Truevo Widget',
            'Youtube Downloader',
            'Toppharma',
            'Water Reminder App',
            'Web View In Focus',
          ].map((project) => (
            <div key={project} className="rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
              <p className=" mb-2 text-lg font-semibold">{project}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social links & resume */}
      <div className="mt-16">
        <Socials
          resume="/files/umair-resume.pdf"
          email="umairid112233@gmail.com"
          github="https://github.com/Umairmalik12"
          linkedin="https://www.linkedin.com/in/malik-umair-javaid-5288b5137/"
        />
      </div>
    </section>
  )
}

export default AboutPage
