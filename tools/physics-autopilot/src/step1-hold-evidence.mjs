// Exact native diagnostic serialization; this carries no gate or readiness authority.
import { readFileSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
const action = 'Owner or authorized operator: resolve findings, reconcile shared files, then rerun gates. Do not repeat unchanged scaffolds.';
export function step1HoldPacket(run, stage, at, failure) {
  const failures = [failure, ...(failure.advisory ?? [])]
    .filter(row => !row.stage || row.stage === stage)
    .map(({ advisory, ...row }) => row);
  return JSON.stringify({ run, stage, at, failures, action }, null, 2) + '\n';
}
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
/** Narrow historical reconstruction, never a recomputation of today's repaired gates. */
export function authenticateAppendHold(root, entry, ref) {
  const fail = why => { throw Error(`native Step 1 hold diagnostic: ${why}`); };
  const regular = path => {
    const abs = resolve(root, path);
    if (!abs.startsWith(resolve(root) + '/') || realpathSync(abs) !== abs || !lstatSync(abs).isFile()) fail('unsafe evidence path');
    return readFileSync(abs);
  };
  if (ref.path !== `research/${entry.run}-step1-blockers.json`
      || !entry.protectedResearch?.some(row => row === ref)
      || entry.baseResolution?.inputPaths?.[ref.path]
      || entry.fixedInputs?.some(row => row.path === ref.path)
      || entry.priorReviewInputs?.some(row => row.path === ref.path)) fail('not an unbound derived hold diagnostic');
  if (!ref.archive || sha(regular(ref.archive.path)) !== ref.sha256 || ref.archive.sha256 !== ref.sha256) fail('prior diagnostic archive changed');
  const current = regular(ref.path), packet = JSON.parse(current.toString());
  const stages = [`1-append-drift-${entry.number}`, `1-append-apply-${entry.number}`];
  if (packet.run !== entry.run || !stages.includes(packet.stage)
      || !Number.isFinite(Date.parse(packet.at)) || Date.parse(packet.at) < Date.parse(entry.at)) fail('wrong run, generation or time');
  const events = regular(join(entry.stateDir, 'events.jsonl')).toString().trim().split('\n').map(line => JSON.parse(line));
  const message = `stage ${packet.stage}: owner repair and recertification required; repair every rejected item, refresh all certifications invalidated by the repair, then retry the gate before transition — Step 1 held; resolve ${ref.path}`;
  // Executor deduplicates owner blocks: later native holds need not emit a
  // second escalation. Its first same-stage escalation must still exist, and
  // the later battery must end at its own native idle report immediately after
  // the packet timestamp. Neither current gate success nor today's findings
  // substitute for this historical failure/hold sequence.
  const holds = events.map((event, i) => ({ event, i })).filter(({ event }) => event.type === 'owner-escalation'
    && event.message === message && Date.parse(event.at) >= Date.parse(entry.at));
  const completions = events.map((event, i) => ({ event, i })).filter(({ event }) => event.type === 'report'
    && event.stage === packet.stage && event.running === 0 && Date.parse(event.at) >= Date.parse(packet.at)
    && Date.parse(event.at) - Date.parse(packet.at) <= 1000);
  if (completions.length !== 1 || !holds.some(({ i }) => i < completions[0].i)) fail('missing matching native owner hold/completion');
  const end = completions[0].i;
  let start = end - 1;
  while (start >= 0 && !(events[start].type === 'gates' && new RegExp(`^${packet.stage}: running [1-9][0-9]* gate\\(s\\)$`).test(events[start].message))) start--;
  if (start < 0 || Date.parse(events[start].at) < Date.parse(entry.at)) fail('missing current-generation gate battery');
  const battery = events.slice(start + 1, end);
  const primary = battery.filter(event => event.type === 'gate' && event.ok === false);
  if (primary.length !== 1) fail('missing unique failed native gate');
  const failed = primary[0];
  if (!battery.some(event => event.type === 'blocked' && event.stage === packet.stage && event.gate === failed.id
      && event.message === `stage ${packet.stage}: gate ${failed.id} failed — ${failed.why}`)) fail('missing matching native failure block');
  const strip = ({ at, type, ...row }) => row;
  const advisory = [];
  for (let i = 0; i < battery.length; i++) {
    const event = battery[i];
    if (event.type !== 'gate-advisory' || event.ok !== false) continue;
    const notify = battery[i + 1];
    if (notify?.type !== 'gate-advisory' || typeof notify.message !== 'string') fail('unattributed advisory failure');
    const stage = notify.message.split(': gate ')[0];
    if (notify.message !== `${stage}: gate ${event.id} ALSO failing (advisory) — ${String(event.why).slice(0, 200)}`) fail('advisory mismatch');
    advisory.push({ ...strip(event), stage });
  }
  if (battery.some(event => !Number.isFinite(Date.parse(event.at))
      || ((event.type === 'gate' || (event.type === 'gate-advisory' && event.id)) && Date.parse(event.at) > Date.parse(packet.at)))) fail('hold precedes its gate evidence');
  const lastGate = battery.filter(event => event.type === 'gate' || (event.type === 'gate-advisory' && event.id)).at(-1);
  if (!lastGate || Date.parse(packet.at) - Date.parse(lastGate.at) > 1000) fail('packet time is not the native hold boundary');
  if (step1HoldPacket(entry.run, packet.stage, packet.at, { ...strip(failed), advisory }) !== current.toString()) fail('packet does not exactly reconstruct from native history');
  return true;
}
