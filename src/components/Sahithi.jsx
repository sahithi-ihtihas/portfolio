import profilePic from '../assets/react.svg'; // Replace with your own image

export default function Sahithi() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-20">
      <img
        src={profilePic}
        alt="Profile"
        className="w-64 h-64 rounded-lg object-cover grayscale"
      />
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl font-bold">
          Hi, I’m <span className="text-black">Sahithi Yarlagadda</span> and I’m a{' '}
          <span className="bg-black text-white px-1">Senior Java Developer</span>.
        </h1>
        <p className="mt-4 text-gray-600">
          I’m a developer based in Hyderabad, India. I build web apps and love clean code. Open to new opportunities.
        </p>
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">Contact me</button>
          <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-white">Check my work</button>
        </div>
      </div>
    </section>
  );
}