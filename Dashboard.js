
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-800 p-4 rounded">Win Rate: 57.6%</div>
        <div className="bg-gray-800 p-4 rounded">ROI: +11.4%</div>
        <div className="bg-gray-800 p-4 rounded">Units: +24.5</div>
      </div>
      <div className="bg-gray-900 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Unit Performance</h2>
        <img src="/chart.png" alt="Performance Graph" />
      </div>
      <div className="bg-gray-900 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Recent Picks</h2>
        <ul>
          <li>Apr. 23 – Phillies (-1.5) – Win</li>
          <li>Apr. 22 – Reds (+120) – Loss</li>
        </ul>
      </div>
    </div>
  );
}
