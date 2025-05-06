export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', color: 'white', background: '#111', minHeight: '100vh' }}>
      <h1>Overview</h1>
      <div>Win Rate: 57.6% &nbsp; ROI: +11.4% &nbsp; Units: +24.5</div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Unit Performance</h2>
        <img src="/graph.png" alt="Graph" />
      </div>
    </div>
  );
}