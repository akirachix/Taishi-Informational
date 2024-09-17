const teamMembers = [
  { name: 'Patricia Ainembabazi', role: 'Software developer', image: 'images/patricia.jpg' },
  { name: 'Nancy Nabacwa', role: 'Software developer', image: 'images/nancy.png' },
  { name: 'Pearl Cheshari', role: 'Software developer', image: 'images/pearl.png' },
  { name: 'Lavender Anyango', role: 'Software developer', image: 'images/lavender.jpg' },
  { name: 'Latifah Umunyana', role: 'Software developer', image: 'images/latifa.png' },
];

function TeamSection() {
  return (
    <section id='team' className="bg-white font-josefin py-0 xl:px-18 mb-4">
      <div className="container mx-auto px-4 md:px-8 im:flex-col xl:px-0.5 max-w-[1400px]">
        <h2 className="text-4xl font-bold text-center mt-4">Team</h2>
        <p className="text-[30px] text-center mt-4 mb-12 font-light ">
          Meet Taishi, the team responsible for bringing Themis AI to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 im:flex nhm:px-10 nh:px-10 flex-col gap-y-8 justify-center">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col items-center
                ${index === 0 ? 'md:col-start-1' : ''}
                ${index === 1 ? 'md:col-start-3' : ''}
                ${index === 2 ? 'md:col-start-5' : ''}
                ${index === 3 ? 'md:col-start-2 md:row-start-2' : ''}
                ${index === 4 ? 'md:col-start-4 md:row-start-2' : ''}
              `}
            >
              <div className="w-58 h-58 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <h3 className="text-[24px] font-semibold text-center mb-1 text-[#D38816]">
                {member.name}
              </h3>
              <p className="text-[18px] text-center text-gray-800">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;