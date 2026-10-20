// Final Step-3 decisions are scoped to current A/B scaffold bytes.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or page ID');
  return value;
};
const json = path => JSON.parse(readFileSync(path, 'utf8'));
export function scaffoldHash(root, run, page) {
  safe(run); safe(page);
  const dir = join(root, 'research');
  const files = readdirSync(dir).filter(f => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f)).sort();
  const matches = files.flatMap(file => {
    const pages = json(join(dir, file));
    const a = pages.find(p => p.id === page && p.kind === 'A');
    return a ? [{ file, pages, a }] : [];
  });
  if (matches.length !== 1) throw Error(`Expected one scaffold for ${page}`);
  const { file, pages, a } = matches[0];
  const b = pages.find(p => p.id === a.companion && p.kind === 'B');
  if (!b) throw Error(`Missing companion for ${page}`);
  const coverage = json(join(dir, file.replace('.pages.json', '.coverage.json')));
  const plan = json(join(dir, 'plan-spec.json')).pages;
  const payload = [a, b, coverage.pages?.find(p => p.page === page),
    plan.filter(p => [a.id, b.id].includes(p.id))];
  return createHash('sha256').update(JSON.stringify(payload)).digest('hex');
}
const pathFor = (root, run, page, owner) => join(root, 'research',
  `${safe(run)}-scaffold-${owner ? 'owner' : 'final'}-${safe(page)}.json`);
export function readResolution(root, run, page) {
  const hash = scaffoldHash(root, run, page);
  // Only an explicit owner record outranks an agent record.
  for (const owner of [true, false]) {
    const path = pathFor(root, run, page, owner);
    if (!existsSync(path)) continue;
    const row = json(path);
    if (row.run !== run || row.page !== page || row.owner !== owner || row.scaffold_sha256 !== hash) continue;
    if (!['accept', 'repaired', 'escalate', ...(owner ? ['hold'] : [])].includes(row.decision)
      || !row.reason?.trim() || (!owner && ['accept', 'repaired'].includes(row.decision) && row.confidence !== 1)) {
      throw Error(`Invalid scaffold decision: ${path}`);
    }
    return row;
  }
  return null;
}
export function recordResolution(root, { run, page, decision, confidence, reason, owner = false }) {
  if (!['accept', 'repaired', 'escalate', ...(owner ? ['hold'] : [])].includes(decision)) throw Error('Invalid decision');
  if (!reason?.trim()) throw Error('A reason is required');
  if (!owner && ['accept', 'repaired'].includes(decision) && confidence !== 1) throw Error('Less than 100% confidence requires escalation');
  if (!owner && readResolution(root, run, page)?.owner) throw Error('The owner decision is final');
  const row = { version: 1, run, page, owner, decision, confidence: owner ? null : confidence,
    reason, scaffold_sha256: scaffoldHash(root, run, page), at: new Date().toISOString() };
  writeFileSync(pathFor(root, run, page, owner), JSON.stringify(row, null, 2) + '\n');
  return row;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), get = key => {
      const i = args.indexOf(`--${key}`);
      return i < 0 || args[i + 1]?.startsWith('--') ? undefined : args[i + 1];
    };
    if (args[0] !== 'record') throw Error('Usage: scaffold-resolution.mjs record --run RUN --page A_ID --decision accept|repaired|escalate|hold --reason TEXT [--confidence 1] [--owner]');
    console.log(JSON.stringify(recordResolution(process.cwd(), { run: get('run'), page: get('page'),
      decision: get('decision'), reason: get('reason'), confidence: Number(get('confidence')),
      owner: args.includes('--owner') })));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
