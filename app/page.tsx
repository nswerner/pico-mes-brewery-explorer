import Image from 'next/image';
import InflatableParty from '../public/InflatableParty.jpeg';
export default function Home() {
  return (
    <div
      style={{ maxWidth: '60vw' }}
      className="m-4 flex flex-row justify-between"
    >
      <Image alt="Nick" src={InflatableParty} height={600} width={450} />
      <div className="m-6">
        <h1 className="text-2xl font-bold">Nick Werner</h1>
        <h4 className="text-lg font-semibold mb-2">Software Engineer</h4>
        <p>
          {`Hello! My name is Nick Werner. I'm a builder, a tinkerer, and a problem solver. 
          With a background in software engineering and experience as a business owner,
          I thrive on problem solving and creating solutions. I live in Encinitas, California, with my girlfriend Heather,
          dog Myrtle, and cat Dorian the Grey. In my free time, you can find me working out, binging a show, 
          reading (mostly sci-fi), taking a walk, coding, cooking, trying a new restaurant, playing piano, or gaming!
          `}
        </p>
        <br />
        <p>
          {`
          Fun fact - Heather and I often combine our birthdays into an epic party! In the picture to the left, we're celebrating our birthdays/housewarming party. In order to attend,
          you had to wear an inflatable costume! We even had a bounce house - as you can tell, Myrtle loved it :D
        `}
        </p>
        <br />
        <p>
          {`I'm seeking an opportunity to join your team where I can deliver impact and mentorship, as well as learn and grow as an engineer.
          I excel when wearing many hats, and I'm excited to see what Pico MES has to offer! 
          I'm confident that I can bring a unique perspective to the team and I'm eager to learn more about your company, team, and culture.
          `}
        </p>
        <br />{' '}
        <a
          href="https://github.com/nswerner/pico-mes-brewery-explorer"
          className="text-blue-500 hover:underline"
        >
          Check out the code here
        </a>
      </div>
    </div>
  );
}
