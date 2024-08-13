import Image from 'next/image';
import SkillProgressBar from './SkillProgressBar'; // Adjust path as necessary

export default function AboutMe() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="container mx-auto px-32 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Image */}
        <div className="flex-1 relative mb-8 md:mb-0">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 relative overflow-hidden rounded-full">
            <Image
              src="https://img.freepik.com/free-photo/successful-teen-boy-raises-clanched-fists-celebrates-triumph-looks-with-joy-exclaims-loudly-has-thick-stubble-wears-casual-t-shirt-poses-pink-wall-screams-yes-got-prize-wins-contest_273609-42515.jpg?w=1380&t=st=1723561388~exp=1723561988~hmac=690d2e1c19ce803b77162c74b1e82be96eb2cea5861074418470d2be9a4a116d"
              layout="fill"
              objectFit="cover"
              alt="Profile Picture"
              className="rounded-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500 opacity-20 rounded-full"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 text-center md:text-left">About Me</h2>
          <p className="text-gray-600 mb-6 text-pretty text-2xl md:text-3xl md:text-left">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
            Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
          </p>

          {/* Skill Progress Bars */}
          <div className="space-y-4">
            {[
              { skill: 'UX', initialPercentage: 90 },
              { skill: 'Website Design', initialPercentage: 85 },
              { skill: 'App Design', initialPercentage: 80 },
              { skill: 'Graphic Design', initialPercentage: 75 },
            ].map((item, index) => (
              <SkillProgressBar
                key={index}
                skill={item.skill}
                initialPercentage={item.initialPercentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
