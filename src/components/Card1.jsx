const statsData = [
  { name: "30+", desc: "Language Support" },
  { name: "10K+", desc: "Developers" },
  { name: "100K+", desc: "Hours Saved" },
];

const Card1 = () => {
  return (
    <div className="rounded-[24px] w-[447px] h-[170px] z-10 border shadow-2xl bg-white">
      <div className="border-b border-x h-[70px] p-5 rounded-t-[24px]">
        <div className="flex items-center gap-3">
          <img src="/logop.png" alt="CodeAnt Logo" className="w-[28px] h-[31px]" />
          <h1 className="text-lg font-bold">AI to Detect & Autofix Bad Code</h1>
        </div>
      </div>
      <div className="p-5 flex items-center justify-between gap-5">
        {statsData.map((stats, i) => (
          <div key={i} className="text-center">
            <h2 className="text-lg text-[#081735] font-bold">{stats.name}</h2>
            <p className="text-sm text-[#171717]">{stats.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
