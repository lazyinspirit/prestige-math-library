// Read-only current review coverage. Never writes verdicts, receipts, or state.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const TOOLS = dirname(fileURLToPath(import.meta.url));
const cache = new Map();
const hash = value => createHash('sha256').update(value).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
function fingerprint(repo, run) {
  const paths = [];
  for (const dir of ['items', 'research']) {
    for (const name of readdirSync(join(repo, dir)).sort()) {
      const path = join(repo, dir, name), stat = statSync(path);
      if (stat.isFile()) paths.push([path, stat.size, stat.mtimeMs, stat.ctimeMs]);
    }
  }
  // Page carriers and orientation-review evidence are current inputs too.
  function pages(dir) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) pages(path);
      else { const s = statSync(path); paths.push([path, s.size, s.mtimeMs, s.ctimeMs]); }
    }
  }
  pages(join(repo, 'library'));
  // Forward verdicts may bind nested research reports; never cache past changes
  // in those exact evidence files, without scanning unrelated archive trees.
  const verdictPath = join(repo, 'research', `${run}-5b-verdicts.jsonl`);
  if (existsSync(verdictPath)) for (const line of readFileSync(verdictPath, 'utf8').split(/\r?\n/).filter(Boolean)) {
    let row; try { row = JSON.parse(line); } catch { continue; }
    if (row.kind !== 'forward' || typeof row.evidence !== 'string'
      || !/^research\/[a-zA-Z0-9._/-]+$/.test(row.evidence) || row.evidence.split('/').includes('..')) continue;
    const path = join(repo, row.evidence);
    if (!existsSync(path)) paths.push([path, 'missing']);
    else { const stat = statSync(path); paths.push([path, stat.size, stat.mtimeMs, stat.ctimeMs]); }
  }
  return hash(JSON.stringify(paths));
}
function jsonCommand(script, args, repo, physics) {
  const result = spawnSync(process.execPath, [join(TOOLS, physics ? 'physics-support' : '', script), ...args], {
    cwd: repo, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, timeout: 120000,
    env: { ...process.env, ...(physics ? { PHYSICS_REPO: repo } : {}) },
  });
  try {
    const doc = JSON.parse(result.stdout);
    const expected = script === 'cross-group-edges.mjs' ? 0 : Array.isArray(doc.errors) && doc.errors.length ? 1 : 0;
    if (result.error || result.signal || result.status !== expected) throw Error('unexpected coverage subprocess exit');
    return doc;
  }
  catch { throw Error(`5b coverage inspection unavailable (${script}): ${String(result.error?.message || result.stderr || result.stdout).slice(-500)}`); }
}

export function step5bReviewCoverage({ repo, run, physics = false }) {
  if (!/^[A-Za-z0-9._-]+$/.test(run ?? '')) throw Error('Invalid Step5b run');
  repo = resolve(repo);
  const key = `${repo}\0${run}\0${physics}`, inputs = fingerprint(repo, run);
  if (cache.get(key)?.inputs === inputs) return cache.get(key).result;
  const cross = jsonCommand('cross-group-edges.mjs', ['coverage', '--root', repo, '--run', run], repo, physics);
  if (cross.version !== 1 || cross.run !== run || typeof cross.complete !== 'boolean'
    || !Array.isArray(cross.pending) || !Array.isArray(cross.errors)
    || !['edges','forwards','changes'].every(k => Number.isInteger(cross.counts?.[k]) && cross.counts[k] >= 0)
    || cross.complete !== (cross.pending.length === 0 && cross.errors.length === 0)) throw Error('Malformed cross-review coverage');
  const pending = [...cross.pending], errors = cross.errors.map(row => ({ ...row, channel: 'cross' }));
  const windows = [];
  for (const [name, from, to] of [['impact', 'pre-author', 'post-5a'], ['impact-5b', 'post-5a', null]]) {
    const receiptPath = join(repo, 'research', `${run}-${name}.json`);
    const receipt = existsSync(receiptPath) ? read(receiptPath) : null;
    const args = ['--root', repo, '--run', run, '--touches', `research/${run}-touches.json`, '--from', from,
      ...(to ? ['--to', to] : ['--current']), '--direct-boundary', '--json',
      ...(receipt ? ['--receipt', receiptPath] : [])];
    // Missing receipt: derive only. The gate's bootstrap writer is never invoked.
    const impact = jsonCommand('impact-audit.mjs', args, repo, physics);
    if (!Array.isArray(impact.required_review) || new Set(impact.required_review).size !== impact.required_review.length
      || impact.required_review.some(id => typeof id !== 'string')
      || !Array.isArray(impact.impacts) || impact.impacts.some(row => typeof row.source !== 'string' || !Array.isArray(row.required_review))
      || !Array.isArray(impact.errors) || impact.summary?.errors !== impact.errors.length) throw Error('Malformed impact coverage');
    const required = impact.required_review, rows = receipt?.dispositions ?? [];
    const byId = new Map(rows.map(row => [row.id, row]));
    const waiting = new Set(required.filter(id => !byId.has(id) || byId.get(id)?.status === 'pending'));
    for (const id of waiting) pending.push({ kind: 'impact', window: name, id,
      suppliers: impact.impacts.filter(row => row.required_review.includes(id)).map(row => row.source) });
    if (!receipt) pending.push({ kind: 'impact-window', window: name, reason: 'reviewer-bound receipt not yet written' });
    for (const issue of impact.errors) {
      // Only genuinely unfinished rows are continuable; malformed/stale evidence holds.
      const id = [...waiting].find(id => issue.message.includes(`${id} `) || issue.message.endsWith(` ${id}`));
      if (id && ['receipt-missing-impact', 'receipt-disposition-status', 'receipt-disposition-notes'].includes(issue.code)) continue;
      errors.push({ ...issue, channel: name });
    }
    for (const id of required.filter(id => !waiting.has(id))) {
      const row = byId.get(id);
      const uses = row?.supplier_uses;
      const relevant = impact.impacts.filter(entry => entry.required_review.includes(id)).map(entry => entry.source);
      if (!/^[a-f0-9]{64}$/.test(row?.carrier_raw_sha256 ?? '') || !Array.isArray(uses)
        || new Set(uses?.map(use => use.supplier)).size !== uses?.length
        || relevant.some(supplier => !uses.some(use => use.supplier === supplier))) {
        errors.push({ code: 'impact-review-evidence-incomplete', channel: name,
          message: `${id}: current consumer hash and all relevant changed supplier uses/exclusions are required` });
        continue;
      }
      if (row.carrier_raw_sha256 !== hash(readFileSync(join(repo, 'items', `${id}.md`))))
        errors.push({ code: 'impact-consumer-stale', channel: name, message: `${id}: reviewed consumer bytes changed` });
      for (const use of uses) {
        const path = join(repo, 'items', `${use.supplier}.md`);
        if (typeof use.consumed_clause !== 'string' || !use.consumed_clause.trim()
          || !Array.isArray(use.use_locations) || !use.use_locations.length
          || use.use_locations.some(location => typeof location.section !== 'string' || !location.section.trim()
            || !(Number.isInteger(location.line) && location.line > 0 || typeof location.step === 'string' && /^\d+\.\d+$/.test(location.step)))
          || use.disposition === 'not-load-bearing' && !String(use.justification ?? '').trim())
          errors.push({ code: 'impact-use-evidence-incomplete', channel: name,
            message: `${id}: ${use.supplier} needs a consumed clause/use location or an explicit justified exclusion` });
        if (!/^[a-z0-9-]+$/.test(use.supplier ?? '') || !existsSync(path)
          || !/^[a-f0-9]{64}$/.test(use.supplier_raw_sha256 ?? '') || use.supplier_raw_sha256 !== hash(readFileSync(path)))
          errors.push({ code: 'impact-supplier-stale', channel: name, message: `${id}: reviewed supplier ${use.supplier} bytes changed` });
      }
    }
    windows.push({ name, required: required.length, reviewed: required.length - waiting.size, pending: waiting.size });
  }
  const total = cross.counts.edges + cross.counts.forwards + cross.counts.changes + windows.reduce((n, w) => n + w.required, 0);
  const unique = [...new Map(pending.map(row => [JSON.stringify(row), row])).values()];
  const completed = total - unique.filter(row => row.kind !== 'impact-window').length;
  const result = { complete: unique.length === 0 && errors.length === 0, pending: unique, errors,
    counts: { ...cross.counts, impact_windows: windows, completed: errors.length ? 0 : completed, pending: unique.length },
    progress: hash(JSON.stringify(unique.map(row => JSON.stringify(Object.fromEntries(
      ['kind','from','to','item','target','batch','id','window'].filter(k => row[k] !== undefined).map(k => [k,row[k]])))).sort())),
    why: `${completed}/${total} current review obligations complete; ${unique.length} unfinished${errors.length ? `; ${errors.length} invalid/stale evidence hold(s)` : ''}` };
  cache.set(key, { inputs, result });
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2), option = key => args[args.indexOf(`--${key}`) + 1];
    const result = step5bReviewCoverage({ repo: args.includes('--root') ? option('root') : process.cwd(), run: option('run'), physics: args.includes('--physics') });
    if (args.includes('--pending')) {
      const limit = args.includes('--limit') ? Number(option('limit')) : 25;
      if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw Error('--limit must be1..100');
      console.log(JSON.stringify({ ...result, pending: result.pending.slice(0, limit) }, null, 2));
    } else console.log(JSON.stringify({ ...result, pending: undefined }, null, 2));
    process.exitCode = result.errors.length ? 2 : 0;
  } catch (error) { console.error(error.message); process.exitCode = 2; }
}
