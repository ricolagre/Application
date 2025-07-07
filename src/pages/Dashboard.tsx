// Plus besoin d'import React si tsconfig est bien configuré
const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* 6 Widgets simulés */}
      {[
        { title: "Utilisateurs", value: "100k+" },
        { title: "Uptime", value: "99.9%" },
        { title: "Pays", value: "50+" },
        { title: "Support", value: "24/7" },
        { title: "Commandes", value: "25k+" },
        { title: "Revenus", value: "$1.2M" },
      ].map(({ title, value }, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow p-6 text-center text-gray-700"
        >
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="mt-2 font-semibold">{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
