// Owner acceptance of exact repaired planning blockers; never worker coverage.
import { readFileSync, existsSync, lstatSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const assert = (condition, message) => { if (!condition) throw Error(message); };
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
const hash = value => /^[a-f0-9]{64}$/.test(value ?? '');
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function local(root, path) {
  assert(nonempty(path) && !path.startsWith('/') && !path.split('/').some(p => !p || p === '.' || p === '..'), 'invalid relative evidence path');
  const full = resolve(root, path);
  for (let p = full; p !== root; p = dirname(p)) assert(!lstatSync(p).isSymbolicLink(), `symlink evidence path: ${path}`);
  assert(lstatSync(full).isFile(), `nonregular evidence: ${path}`);
  return full;
}
function bytes(root, link, prefix = 'research/') {
  assert(link && hash(link.sha256) && link.path?.startsWith(prefix), 'invalid evidence link');
  const raw = readFileSync(local(root, link.path));
  assert(sha(raw) === link.sha256, `stale evidence: ${link.path}`);
  return raw;
}

// Bind the whole authorized page inventory and its plan interfaces, without
// treating subsequently authored item lists as planning scope changes.
export function driftScopeHash(ledger, spec) {
  const pages = new Map((spec.pages ?? []).map(p => [p.id, p]));
  return sha(JSON.stringify({ allow_in_run_dependencies: ledger.allow_in_run_dependencies === true,
    pages: (ledger.pages ?? []).map(p => ({ ...p, plan: (() => {
      const s = pages.get(p.id);
      assert(s, `scope page absent from plan: ${p.id}`);
      return { id: s.id, kind: s.kind, category: s.category, order: s.order,
        companion: s.companion ?? null, requires: s.requires ?? [] };
    })() })).sort((a, b) => a.id.localeCompare(b.id)) }));
}

export function verifyNativeAppendReport(root, run, original, current) {
  if (original.equals(current)) return true;
  const registry = JSON.parse(readFileSync(local(root, `research/${run}-frontier-appends.json`)));
  let reconstructed = original.toString('utf8');
  for (const entry of registry.appends ?? []) {
    const receipt = JSON.parse(readFileSync(local(root, `${entry.archive}/review-applied.json`)));
    const added = readFileSync(local(root, entry.report), 'utf8');
    assert(receipt.run === run && receipt.number === entry.number
      && receipt.inventoriesPreserved === true
      && receipt.originalReportSha256 === sha(reconstructed)
      && receipt.reportSha256 === sha(added), 'invalid native append report binding');
    reconstructed += `\n\n<!-- native append review ${entry.number}; original preimage retained in ${entry.archive} -->\n` + added;
    assert(receipt.mergedReportSha256 === sha(reconstructed), 'native merged report changed');
  }
  assert(current.toString('utf8') === reconstructed, 'original drift report changed outside native append');
  return true;
}

export function loadDriftOwnerResolutions(root, run, report, ledger, spec) {
  root = resolve(root);
  const path = `research/${run}-owner-drift-resolutions.json`;
  if (!existsSync(resolve(root, path))) return new Map();
  const doc = JSON.parse(readFileSync(local(root, path), 'utf8'));
  assert(doc.version === 1 && doc.policy === 'owner-resolved-drift-blockers'
    && doc.run === run && doc.authorized_by === 'owner' && nonempty(doc.owner_identity)
    && nonempty(doc.reason) && nonempty(doc.authorized_at) && Number.isFinite(Date.parse(doc.authorized_at)), 'invalid owner drift authorization');
  assert(doc.scope_sha256 === driftScopeHash(ledger, spec), 'owner drift scope changed');
  assert(doc.report?.path === `research/${run}-alpha-step1-drift.md`, 'wrong native drift report');
  const rawReport = bytes(root, doc.report);
  assert(rawReport.toString('utf8') === report, 'current drift report changed');
  verifyNativeAppendReport(root, run, bytes(root, doc.original_report), rawReport);
  assert(doc.drift_evidence?.path === `research/${run}-drift-evidence.json`, 'wrong original drift evidence');
  const driftEvidence = JSON.parse(bytes(root, doc.drift_evidence));
  assert(Array.isArray(driftEvidence), 'invalid original drift evidence');
  const result = JSON.parse(bytes(root, doc.native_result));
  assert(Number.isInteger(result.attempt) && result.attempt > 0
    && doc.native_result.path === `research/${run}-dispatch/alpha-drift-review.attempt-${result.attempt}.result.json`
    && result.run === run && result.role === 'alpha' && result.label === 'drift-review'
    && result.runner !== 'autopilot' && nonempty(result.runner) && result.ok === true
    && result.exit_code === 0 && result.process_exit_code === 0 && result.timed_out === false
    && equal(result.covers, ['drift']) && result.terminal_summary?.task_completed === true
    && result.terminal_summary?.task_aborted === false, 'not a successful original native drift dispatch');
  assert(doc.native_prompt?.path === `research/${run}-dispatch/alpha-drift-review.attempt-${result.attempt}.prompt.md`, 'wrong native drift prompt');
  const prompt = bytes(root, doc.native_prompt).toString('utf8');
  assert(result.prompt === resolve(root, doc.native_prompt.path)
    && prompt.includes(`run: ${run}`) && prompt.includes(`output: ${doc.report.path}`), 'native prompt does not bind drift assignment');
  assert(Array.isArray(doc.resolutions) && doc.resolutions.length > 0, 'empty owner drift resolutions');
  const accepted = new Map();
  const pages = new Map((spec.pages ?? []).map(p => [p.id, p]));
  for (const row of doc.resolutions) {
    assert(nonempty(row.page) && !accepted.has(row.page)
      && ledger.pages?.some(p => p.id === row.page && p.kind === 'A')
      && nonempty(row.reason), 'invalid or duplicate resolved page');
    const sections = [...report.matchAll(/^###\s+`?([a-z0-9][a-z0-9-]*)`?\s*$/gm)];
    const selected = sections.filter(m => m[1] === row.page);
    assert(selected.length === 1, 'ambiguous resolved report section');
    const index = sections.indexOf(selected[0]);
    const body = report.slice(selected[0].index + selected[0][0].length, sections[index + 1]?.index ?? report.length);
    const verdicts = [...body.matchAll(/^VERDICT:.*$/gm)];
    assert(verdicts.length === 1 && /^VERDICT:\s*drift-blocked\b/.test(verdicts[0][0])
      && row.verdict === verdicts[0][0], 'owner resolution does not bind exact blocked verdict');
    assert(driftEvidence.filter(e => e.page === row.page).length === 1, 'missing original page drift evidence');
    assert(Array.isArray(row.sources) && row.sources.length > 0, 'missing full source preimages');
    const sourcePaths = new Set();
    let pageBound = false;
    for (const source of row.sources) {
      assert(nonempty(source.path) && /^(research|items|library)\/.*\.md$/.test(source.path)
        && !sourcePaths.has(source.path) && hash(source.current_sha256), 'invalid source repair binding');
      sourcePaths.add(source.path);
      const before = bytes(root, source.original);
      const after = readFileSync(local(root, source.path));
      assert(sha(after) === source.current_sha256 && source.current_sha256 !== source.original.sha256,
        'stale or unchanged corrected source');
      if (before.toString('utf8').includes(row.page) && after.toString('utf8').includes(row.page)) pageBound = true;
    }
    assert(pageBound, 'source preimages do not bind resolved page');
    const affected = new Set();
    const queue = [row.page];
    const primary = pages.get(row.page);
    const companion = primary?.companion ?? `${row.page}-examples`;
    if (pages.has(companion)) { affected.add(companion); queue.push(companion); }
    while (queue.length) {
      const supplier = queue.shift();
      for (const p of pages.values()) if ((p.requires ?? []).includes(supplier) && p.id !== row.page && !affected.has(p.id)) {
        affected.add(p.id); queue.push(p.id);
      }
    }
    assert(Array.isArray(row.consumers) && row.consumers.length === affected.size, 'incomplete affected consumer dispositions');
    const seen = new Set();
    for (const consumer of row.consumers) {
      assert(affected.has(consumer.page) && !seen.has(consumer.page)
        && ['repaired', 'checked-unaffected'].includes(consumer.disposition) && nonempty(consumer.reason), 'invalid affected consumer disposition');
      seen.add(consumer.page);
    }
    const evidence = JSON.parse(bytes(root, row.evidence));
    assert(evidence.run === run && evidence.page === row.page && evidence.owner === true
      && evidence.decision === 'resolved' && evidence.verdict === row.verdict && nonempty(evidence.reason)
      && equal(evidence.sources, row.sources) && equal(evidence.consumers, row.consumers), 'focused owner evidence does not bind resolution');
    // Preserve the genuine delegated reasoning separately from owner acceptance.
    const repairEvidence = bytes(root, evidence.repair_evidence);
    assert(repairEvidence.length > 0 && evidence.repair_evidence.path !== row.evidence.path,
      'missing genuine focused repair evidence');
    accepted.set(row.page, row.verdict);
  }
  return accepted;
}

// Calculation only: does not accept a blocker or attempt a gate.
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const run = process.argv[process.argv.indexOf('--run') + 1];
  assert(process.argv.includes('--run') && /^[a-z0-9][a-z0-9-]*$/.test(run ?? ''), 'usage: node tools/drift-owner-resolutions.mjs --run RUN');
  console.log(driftScopeHash(JSON.parse(readFileSync(`research/${run}-scope-ledger.json`, 'utf8')),
    JSON.parse(readFileSync('research/plan-spec.json', 'utf8'))));
}
