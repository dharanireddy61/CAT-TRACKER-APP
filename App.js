import { useState } from "react";
import "./App.css";

function App() {
  const [qa, setQa] = useState(0);
  const [varc, setVarc] = useState(0);
  const [dilr, setDilr] = useState(0);
  const [qaDone, setQaDone] = useState(0);
  const [varcDone, setVarcDone] = useState(0);
  const [dilrDone, setDilrDone] = useState(0);
  const totalQa = 26, totalVarc = 10, totalDilr = 20;
  const idealDailyHours = 8;

  const totalToday = qa + varc + dilr;
  const studyEffort = Math.min((totalToday / idealDailyHours) * 100, 100);

  const qaCompletion = (qaDone / totalQa) * 100;
  const varcCompletion = (varcDone / totalVarc) * 100;
  const dilrCompletion = (dilrDone / totalDilr) * 100;

  const overallCompletion = (qaCompletion + varcCompletion + dilrCompletion) / 3;

  let projectedPercentile;
  const combinedEffort = (studyEffort + overallCompletion) / 2;
  if (combinedEffort >= 90) projectedPercentile = "99–99.5%";
  else if (combinedEffort >= 80) projectedPercentile = "97–98.9%";
  else if (combinedEffort >= 65) projectedPercentile = "95–96.9%";
  else if (combinedEffort >= 50) projectedPercentile = "90–94.9%";
  else if (combinedEffort >= 30) projectedPercentile = "85–89%";
  else projectedPercentile = "<85%";

  return (
    <div className="App">
      <h1>CAT 2025 Tracker</h1>
      <div className="section">
        <h2>Today's Study Hours</h2>
        <input type="number" placeholder="QA" onChange={e => setQa(Number(e.target.value))} />
        <input type="number" placeholder="VARC" onChange={e => setVarc(Number(e.target.value))} />
        <input type="number" placeholder="DILR" onChange={e => setDilr(Number(e.target.value))} />
      </div>
      <div className="section">
        <h2>Syllabus Completed</h2>
        <input type="number" placeholder="QA Topics Done (out of 26)" onChange={e => setQaDone(Number(e.target.value))} />
        <input type="number" placeholder="VARC Topics Done (out of 10)" onChange={e => setVarcDone(Number(e.target.value))} />
        <input type="number" placeholder="DILR Topics Done (out of 20)" onChange={e => setDilrDone(Number(e.target.value))} />
      </div>
      <div className="results">
        <p><strong>Total Hours Today:</strong> {totalToday} hrs</p>
        <p><strong>Study Effort:</strong> {studyEffort.toFixed(1)}%</p>
        <p><strong>QA Completion:</strong> {qaCompletion.toFixed(1)}%</p>
        <p><strong>VARC Completion:</strong> {varcCompletion.toFixed(1)}%</p>
        <p><strong>DILR Completion:</strong> {dilrCompletion.toFixed(1)}%</p>
        <p><strong>Overall Completion:</strong> {overallCompletion.toFixed(1)}%</p>
        <p><strong>📈 Projected Percentile:</strong> {projectedPercentile}</p>
      </div>
    </div>
  );
}

export default App;