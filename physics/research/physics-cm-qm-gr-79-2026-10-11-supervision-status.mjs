import fs from 'node:fs';
const run = 'physics-cm-qm-gr-79-2026-10-11';
const state = JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`));
const rows = Object.values(state.dispatches).filter(row => row.stage === state.stage);
const active = rows.filter(row => row.startedAt && !row.endedAt);
const ended = rows.filter(row => row.endedAt);
const partial = {reports: 0, decisions: 0, reviews: 0, uncertain: 0};
const dir = `research/${run}-step5-v2/`;
if (fs.existsSync(dir)) for (const name of fs.readdirSync(dir).filter(name => /^step5-v2-(?:initial|repeat)-r\d+-u\d+\.json$/.test(name))) {
  try {
    const report = JSON.parse(fs.readFileSync(dir + name));
    partial.reports++;
    partial.decisions += report.decisions?.length ?? 0;
    partial.reviews += report.reviews?.length ?? 0;
    partial.uncertain += report.decisions?.filter(row => row.uncertain).length ?? 0;
  } catch { /* An active writer may be replacing its partial report. */ }
}
console.log(JSON.stringify({at: new Date().toISOString(), stage: state.stage,
  finishedAt: state.finishedAt, paused: state.paused, active: active.length,
  completed: ended.filter(row => row.lastExitOk).length,
  failures: ended.filter(row => !row.lastExitOk).map(row => ({label: row.label, lastExitOk: row.lastExitOk})),
  blockers: state.blockers, partial}, null, 2));
