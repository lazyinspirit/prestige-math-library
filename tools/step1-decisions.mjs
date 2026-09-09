// Scaffold readiness records; no dispatches, repairs, or proof approvals.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { loadStep3, itemHash } from './step3-decisions.mjs';

const safe = value => {
  if (!/^[a-zA-Z0-9_-]+$/.test(value ?? '')) throw Error('Invalid run or item ID');
  return value;
};
const file = (root, run, id) => join(root, 'research', `${safe(run)}-step1-${safe(id)}.json`);

export function step1Decision(s, id) {
  const path = file(s.root, s.run, id);
  if (!existsSync(path)) return { closed: false, reason: 'Readiness record missing' };
  const row = JSON.parse(readFileSync(path, 'utf8'));
  if (row.version !== 1 || row.run !== s.run || row.item !== id
      || !['ready', 'escalated'].includes(row.decision) || typeof row.owner !== 'boolean'
      || !row.reason?.trim() || !Array.isArray(row.dependencies)) throw Error(`Invalid Step 1 record: ${id}`);
  if (row.decision === 'escalated') return { closed: false, owner: true, row, reason: row.reason };
  if (row.sha256 !== itemHash(s, id, row.dependencies))
    return { closed: false, owner: row.owner, row, reason: 'Item or dependency changed; record current readiness' };
  return { closed: true, row };
}

export function checkStep1(s) {
  const work = [];
  for (const id of s.items.keys()) {
    const result = step1Decision(s, id);
    if (!result.closed) work.push({ item: id, page: s.items.get(id).page.id, ...result });
  }
  for (const page of s.pages) if (!page.items?.length)
    work.push({ page: page.id, reason: 'Empty scaffold inventory' });
  return { run: s.run, items: s.items.size, ready: s.items.size - work.filter(x => x.item).length,
    closed: work.length === 0, work };
}

export function recordStep1(root, { run, item, decision, reason, dependencies, owner = false }) {
  if (!['ready', 'escalated'].includes(decision)) throw Error('Decision must be ready or escalated');
  if (!reason?.trim()) throw Error('Record evidence or the exact blocker');
  if (!Array.isArray(dependencies) || dependencies.some(d => typeof d !== 'string' || !d.trim()))
    throw Error('Record examined dependency IDs, including an explicit empty list');
  const s = loadStep3(root, run);
  if (!s.items.has(item)) throw Error(`Unknown run item ${item}`);
  const previous = step1Decision(s, item);
  if (!owner && (previous.owner || previous.row?.owner)) throw Error('Only the owner may resolve this record');
  if (previous.closed && !owner) throw Error('Keep unchanged ready items and records intact');
  const row = { version: 1, run, item, decision, owner, reason,
    dependencies: [...new Set(dependencies)].sort(), sha256: itemHash(s, item, dependencies),
    at: new Date().toISOString() };
  writeFileSync(file(root, run, item), JSON.stringify(row, null, 2) + '\n');
  return row;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), get = key => {
      const at = args.indexOf(`--${key}`);
      return at < 0 ? undefined : args[at + 1];
    };
    if (args[0] === 'check') {
      const result = checkStep1(loadStep3(process.cwd(), get('run')));
      console.log(JSON.stringify(result, null, 2));
      process.exitCode = result.closed ? 0 : 1;
    } else if (args[0] === 'record') {
      console.log(JSON.stringify(recordStep1(process.cwd(), { run: get('run'), item: get('item'),
        decision: get('decision'), reason: get('reason'), owner: args.includes('--owner'),
        dependencies: get('dependencies') === undefined ? undefined : JSON.parse(get('dependencies')),
      }), null, 2));
    } else throw Error('Usage: step1-decisions.mjs check --run RUN; record --run RUN --item ID --decision ready|escalated --dependencies JSON --reason TEXT [--owner]');
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
