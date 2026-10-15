// Shared presentation and native metadata only; never grants review or gate coverage.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const labels = new Set(['step6-contract-close-v2', 'snap-pre-closeout-v2', 'pathway-sync-v2', 'pathway-seed-v2', 'pathway-close-v2', 'judge-stamps-v2', 'readiness-v2', 'step6-evidence-v2', 'report-baseline-v2', 'owner-report-v2', 'owner-report-render-v2', 'close-step6-v2']);
const isCloseout = label => labels.has(label) || /^(?:contract-rework-|certify-rework-)/.test(label ?? '');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
export function makeSummaryResponse(evidence, run, { physics = false } = {}) {
  const caveats = [];
  const outside = evidence.defects?.outsideOpenFindings?.length ?? 0;
  const deferred = (evidence.deferrals?.pairs?.length ?? 0) + (evidence.deferrals?.items?.length ?? 0);
  const terminal = evidence.verification?.terminal_resolutions?.length ?? 0;
  if (outside) caveats.push(`${outside} outside-owned OPEN findings remain visible and are not passed ${physics ? 'physics' : 'mathematical'} coverage.`);
  if (deferred) caveats.push(`${deferred} documented deferrals remain outside the completed frontier; their exact scope and reasons remain in the audit packet.`);
  if (terminal) caveats.push(`${terminal} terminal resolutions are recorded separately from ordinary judge acceptance; consult their exact evidence in the audit packet.`);
  return { version: 2, readiness_verdict: evidence.readiness.verdict,
    executive_summary: `${run}: ${evidence.build.pages} pages, ${evidence.build.items} items; ${evidence.verification.verdicts_complete}/${evidence.verification.scope} frontier verdicts complete. Workflow blockers: ${evidence.verification.workflow_owned_blockers}. Proof-layout and judge closure evidence remain in the audit packet.`,
    caveats, owner_reading_priorities: [], recommendations: [] };
}
export function step6Telemetry(repo, run, { researchDir = 'research', stateDir = `.autopilot/${run}` } = {}) {
  const eventsPath = join(repo, stateDir, 'events.jsonl');
  const events = existsSync(eventsPath) ? readFileSync(eventsPath, 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line)) : [];
  const starts = events.filter(row => row.type === 'stage' && /entering 6-/.test(row.message ?? '') || row.type === 'dispatch' && /^6-/.test(row.stage ?? ''));
  const first = starts.map(row => Date.parse(row.at)).filter(Number.isFinite).sort((a, b) => a - b)[0];
  const dispatches = events.filter(row => row.type === 'dispatch' && /^6-/.test(row.stage ?? ''));
  const seenDispatch = new Set(); let retries = 0;
  for (const row of dispatches) { const key = `${row.stage}:${row.label}`; if (seenDispatch.has(key)) retries++; seenDispatch.add(key); }
  const receipts = [], seen = new Set();
  const collect = dir => {
    if (!existsSync(dir)) return;
    for (const name of readdirSync(dir)) {
      if (!/\.attempt-\d+\.result\.json$/.test(name)) continue;
      const row = read(join(dir, name));
      if (row.run !== run || !isCloseout(row.label)) continue;
      const key = JSON.stringify([row.role, row.label, row.attempt, row.started_at, row.session_id]);
      if (!seen.has(key)) { seen.add(key); receipts.push(row); }
    }
  };
  collect(join(repo, researchDir, `${run}-dispatch`));
  for (const archive of ['report-reopen-before', 'report-packaging-reopen-before'])
    collect(join(repo, stateDir, archive, researchDir, `${run}-dispatch`));
  const measured = receipts.filter(row => row.token_usage?.available === true);
  const sum = key => measured.reduce((total, row) => total + (Number.isFinite(row.token_usage[key]) ? row.token_usage[key] : 0), 0);
  return { elapsed_to_report_ms: first === undefined ? null : Math.max(0, Date.now() - first),
    dispatches: dispatches.length || null, retries: events.length ? retries : null,
    usage_available: measured.length > 0, measured_attempts: measured.length,
    input_tokens: measured.length ? sum('input_tokens') : null,
    cached_input_tokens: measured.length ? sum('cached_input_tokens') : null,
    output_tokens: measured.length ? sum('output_tokens') : null,
    usage_scope: 'Unique retained Step-6 worker attempt receipts; missing or overwritten usage is not estimated.' };
}
export function renderSummaryReport({ run, evidence, response, telemetry }) {
  const outside = evidence.defects?.outsideOpenFindings?.length ?? 0;
  const deferred = (evidence.deferrals?.pairs?.length ?? 0) + (evidence.deferrals?.items?.length ?? 0);
  const terminal = evidence.verification?.terminal_resolutions?.length ?? 0;
  const lines = [`# ${run} — Step 6`, '', `Status: **${response.readiness_verdict}**.`, '',
    `${evidence.build.pages} pages; ${evidence.build.items} items. Frontier verdicts: ${evidence.verification.verdicts_complete}/${evidence.verification.scope}; workflow blockers: ${evidence.verification.workflow_owned_blockers}. Proof-layout gates passed; judge closure ${evidence.verification.closure_closed ? 'closed' : 'open'}.`, ''];
  const caveats = [];
  if (outside) caveats.push(`${outside} outside-owned OPEN findings (not passed coverage)`);
  if (deferred) caveats.push(`${deferred} documented deferrals`);
  if (terminal) caveats.push(`${terminal} terminal resolutions`);
  if (caveats.length) lines.push(`Material caveats: ${caveats.join('; ')}.`, '');
  if (telemetry.elapsed_to_report_ms !== null) lines.push(`Elapsed to report: ${(telemetry.elapsed_to_report_ms / 60000).toFixed(1)} min. Recorded dispatch retries: ${telemetry.retries ?? 'unavailable'}.`, '');
  if (telemetry.usage_available) lines.push(`Retained worker usage: ${telemetry.input_tokens} input (${telemetry.cached_input_tokens} cached), ${telemetry.output_tokens} output tokens across ${telemetry.measured_attempts} measured attempts. Missing usage is not estimated.`, '');
  else lines.push('Worker token telemetry unavailable.', '');
  lines.push(`Audit packet: [exact evidence](${run}-step6-evidence.json).`);
  if (response.caveats.length) lines.push(`Recorded caveats: ${response.caveats.length}; [full response](${run}-step6-report.response.json).`);
  lines.push('', 'Content remains draft. Publication and push require separate owner action. The local closeout commit and its native terminal gates follow this report.', '');
  return lines.join('\n');
}
