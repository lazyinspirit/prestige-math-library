// Exact owner resolution of native append planning blockers, never Alpha credit.
import { readFileSync, existsSync, lstatSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';

const sha = raw => createHash('sha256').update(raw).digest('hex');
const assert = (ok, why) => { if (!ok) throw Error(`append owner resolution: ${why}`); };
const nonempty = x => typeof x === 'string' && x.trim().length > 0;
const equal = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const hash = x => /^[a-f0-9]{64}$/.test(x ?? '');
function local(root, path) {
  assert(nonempty(path) && !path.startsWith('/') && !path.split('/').some(p => !p || p === '.' || p === '..'), 'unsafe evidence path');
  const full = resolve(root, path);
  for (let p = full; p !== root; p = dirname(p)) assert(!lstatSync(p).isSymbolicLink(), `symlink evidence: ${path}`);
  assert(lstatSync(full).isFile(), `nonregular evidence: ${path}`);
  return full;
}
function bytes(root, link, prefix = 'research/') {
  assert(link && hash(link.sha256) && link.path?.startsWith(prefix), 'invalid evidence link');
  const raw = readFileSync(local(root, link.path));
  assert(sha(raw) === link.sha256, `stale evidence: ${link.path}`);
  return raw;
}
function json(root, link) { return JSON.parse(bytes(root, link)); }

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(k => [k, canonical(value[k])]));
  return value;
}
export function appendManifestPageHash(pages) {
  assert(Array.isArray(pages), 'invalid appended manifest');
  return sha(JSON.stringify(pages.map(p => ({ id: p.id, kind: p.kind })).sort((a, b) => a.id.localeCompare(b.id))));
}
function affectedConsumers(plan, page) {
  const pages = new Map((plan.pages ?? []).map(p => [p.id, p]));
  const affected = new Set(), queue = [page];
  const companion = pages.get(page)?.companion ?? `${page}-examples`;
  if (pages.has(companion)) { affected.add(companion); queue.push(companion); }
  while (queue.length) {
    const supplier = queue.shift();
    for (const p of pages.values()) if ((p.requires ?? []).includes(supplier) && p.id !== page && !affected.has(p.id)) {
      affected.add(p.id); queue.push(p.id);
    }
  }
  return affected;
}
// Full planned item/design interfaces, not mutable unrelated global plan bytes.
// New affected consumers change this projection; unrelated appended pages do not.
export function appendDriftOwnerScopeHash(entry, resolutions, ledger, plan) {
  assert(Array.isArray(resolutions) && resolutions.length > 0, 'empty owner resolutions');
  const pages = new Map((plan.pages ?? []).map(p => [p.id, p]));
  const affected = new Set();
  for (const row of resolutions) {
    assert(entry.pairs.includes(row.page) && pages.has(row.page), 'wrong resolved scope page');
    affected.add(row.page);
    for (const page of affectedConsumers(plan, row.page)) affected.add(page);
  }
  const prerequisites = new Set();
  for (const page of affected) for (const req of pages.get(page)?.requires ?? []) {
    assert(pages.has(req), `missing required planned interface: ${req}`);
    if (!affected.has(req)) prerequisites.add(req);
  }
  const ids = [...new Set([...affected, ...prerequisites])].sort();
  return sha(JSON.stringify(canonical({ allow_in_run_dependencies: ledger.allow_in_run_dependencies === true,
    affected: [...affected].sort(), prerequisites: [...prerequisites].sort(),
    pages: ids.map(id => pages.get(id)),
    ledger: (ledger.pages ?? []).filter(p => ids.includes(p.id)).sort((a, b) => a.id.localeCompare(b.id)) })));
}

export function appendOwnerResolutionPath(entry) { return `${entry.archive}/owner-drift-resolutions.json`; }

/** Read-only. A missing receipt preserves the ordinary blocked-verdict behavior.
 * This requires an existing engine refresh seal; it cannot mint native evidence. */
export function loadAppendDriftOwnerResolutions(root, run, entry, report) {
  root = resolve(root);
  const path = appendOwnerResolutionPath(entry);
  if (!existsSync(resolve(root, path))) return new Map();
  const doc = JSON.parse(readFileSync(local(root, path)));
  assert(doc.version === 1 && doc.policy === 'owner-resolved-native-append-drift-blockers'
    && doc.run === run && doc.number === entry.number && doc.authorized_by === 'owner'
    && nonempty(doc.owner_identity) && nonempty(doc.reason)
    && Number.isFinite(Date.parse(doc.authorized_at)), 'invalid owner authorization');
  assert(doc.entry_sha256 === sha(JSON.stringify(entry)), 'append registry entry changed');
  assert(doc.report?.path === entry.report && bytes(root, doc.report).toString('utf8') === report, 'wrong append report');
  assert(doc.plan?.path === 'research/plan-spec.json', 'wrong plan');
  const plan = JSON.parse(readFileSync(local(root, doc.plan.path))); 
  assert(doc.ledger?.path === `research/${run}-scope-ledger.json`, 'wrong ledger');
  const ledger = JSON.parse(readFileSync(local(root, doc.ledger.path))); 
  assert(ledger.run === run, 'wrong ledger run');
  assert(doc.scope_sha256 === appendDriftOwnerScopeHash(entry, doc.resolutions, ledger, plan), 'affected planning scope changed');
  assert(doc.append_evidence?.path === entry.evidence, 'wrong append input evidence');
  bytes(root, doc.append_evidence);
  assert(Array.isArray(doc.manifests) && doc.manifests.length === entry.batches.length, 'missing appended item inventories');
  const expectedManifests = new Set(entry.batches.map(b => `research/${run}-batch-${b}.pages.json`));
  const inventoryPages = new Set();
  for (const link of doc.manifests) {
    assert(expectedManifests.delete(link.path), 'wrong or duplicate appended manifest');
    const pages = JSON.parse(readFileSync(local(root, link.path)));
    assert(hash(link.pages_sha256) && link.pages_sha256 === appendManifestPageHash(pages), 'appended page identities changed');
    for (const page of pages) {
      assert(entry.newPages.includes(page.id) && !inventoryPages.has(page.id), 'wrong or duplicate appended page inventory');
      inventoryPages.add(page.id);
    }
  }
  assert(inventoryPages.size === entry.newPages.length, 'incomplete appended page inventory');
  assert(Array.isArray(doc.inputs) && doc.inputs.length > 0, 'missing repaired prerequisite input bindings');
  const inputPaths = new Set();
  for (const link of doc.inputs) {
    assert(/^(research|items|library)\//.test(link.path ?? '') && !inputPaths.has(link.path), 'invalid or duplicate prerequisite input');
    inputPaths.add(link.path); bytes(root, link, '');
  }

  // The current refresh pointer, its immutable seal, and the actual successful
  // native result/prompt/task must all agree. No owner assertion replaces them.
  assert(doc.native_refresh?.path === `${entry.archive}/current-review-refresh.json`, 'wrong native refresh pointer');
  const request = json(root, doc.native_refresh), stage = `1-append-drift-${entry.number}`, unit = `append-${entry.number}`;
  assert(request.run === run && request.stage === stage && request.unit === unit
    && /^[a-zA-Z0-9-]{1,80}$/.test(request.id ?? '')
    && request.label === `drift-review-append-${entry.number}-refresh-${request.id}`
    && request.task === `${entry.archive}/refresh-${request.id}.task.md`
    && Number.isFinite(Date.parse(request.requestedAt)), 'invalid engine refresh request');
  assert(doc.native_seal?.path === `${entry.archive}/refresh-${request.id}.seal.json`, 'wrong native refresh seal');
  const seal = json(root, doc.native_seal);
  assert(doc.native_result?.path === `research/${run}-dispatch/alpha-${request.label}.result.json`, 'wrong native result');
  const result = json(root, doc.native_result);
  assert(Number.isInteger(result.attempt) && result.attempt > 0
    && result.run === run && result.role === 'alpha' && result.label === request.label
    && result.ok === true && result.runner !== 'autopilot' && nonempty(result.runner)
    && result.exit_code === 0 && result.process_exit_code === 0 && result.timed_out === false
    && equal(result.covers, [unit]) && result.terminal_summary?.task_completed === true
    && result.terminal_summary?.task_aborted === false
    && Date.parse(result.started_at) >= Date.parse(request.requestedAt)
    && Date.parse(result.started_at) >= Date.parse(entry.at)
    && Date.parse(result.ended_at) >= Date.parse(result.started_at)
    && Date.parse(doc.authorized_at) >= Date.parse(result.ended_at), 'not a fresh successful native append review');
  assert(doc.native_prompt?.path === `research/${run}-dispatch/alpha-${request.label}.attempt-${result.attempt}.prompt.md`, 'wrong native prompt');
  const prompt = bytes(root, doc.native_prompt).toString('utf8');
  assert(result.prompt === resolve(root, doc.native_prompt.path)
    && prompt.includes(`run: ${run}`) && prompt.includes(`output: ${entry.report}`), 'native prompt assignment changed');
  assert(doc.native_task?.path === request.task, 'wrong native task');
  bytes(root, doc.native_task);
  assert(request.taskSha256 === doc.native_task.sha256
    && equal(seal, { run, number: entry.number, id: request.id, label: request.label,
      requestSha256: doc.native_refresh.sha256, resultSha256: doc.native_result.sha256,
      reportSha256: doc.report.sha256, taskSha256: doc.native_task.sha256 }), 'native refresh seal changed');
  assert(request.stateFile === resolve(root, `.autopilot/${run}/state.json`)
    && request.dispatchDir === resolve(root, `research/${run}-dispatch`), 'wrong engine paths');
  const state = JSON.parse(readFileSync(local(root, `.autopilot/${run}/state.json`)));
  const native = state.nativeRefreshes?.find(r => r.id === request.id && r.stage === stage);
  const dispatch = state.dispatches?.[`${stage}:${request.label}`];
  assert(state.run === run && native?.run === run && native.unit === unit
    && native.requestedAt === request.requestedAt && native.plan?.label === request.label
    && native.plan?.role === 'alpha' && dispatch?.role === 'alpha' && dispatch.covers?.includes(unit), 'missing engine-started refresh');

  const headings = [...report.matchAll(/^###\s+`?([a-z0-9]+(?:-[a-z0-9]+)*)`?\s*$/gm)];
  const pages = new Map((plan.pages ?? []).map(p => [p.id, p]));
  const accepted = new Map();
  assert(Array.isArray(doc.resolutions) && doc.resolutions.length > 0, 'empty owner resolutions');
  for (const row of doc.resolutions) {
    assert(entry.pairs.includes(row.page) && !accepted.has(row.page) && nonempty(row.reason)
      && ledger.pages?.some(p => p.id === row.page && p.kind === 'A')
      && pages.get(row.page)?.kind === 'A', 'wrong or duplicate resolved page');
    const matches = headings.filter(m => m[1] === row.page);
    assert(matches.length === 1, 'ambiguous resolved report section');
    const index = headings.indexOf(matches[0]);
    const body = report.slice(matches[0].index + matches[0][0].length, headings[index + 1]?.index ?? report.length);
    const verdicts = [...body.matchAll(/^VERDICT:.*$/gm)];
    assert(verdicts.length === 1 && /^VERDICT:\s*drift-blocked\b/.test(verdicts[0][0])
      && row.verdict === verdicts[0][0], 'wrong exact blocked verdict');
    assert(Array.isArray(row.sources) && row.sources.length > 0, 'missing full source repair preimages');
    const sourcePaths = new Set();
    let pageBound = false;
    for (const source of row.sources) {
      assert(/^(?:research\/.*\.(?:md|json)|(?:items|library)\/.*\.md)$/.test(source.path ?? '')
        && !sourcePaths.has(source.path) && hash(source.current_sha256), 'invalid source repair binding');
      sourcePaths.add(source.path);
      const before = bytes(root, source.original), after = readFileSync(local(root, source.path));
      assert(sha(after) === source.current_sha256 && source.current_sha256 !== source.original.sha256, 'stale or unchanged repaired source');
      if (before.toString('utf8').includes(row.page) && after.toString('utf8').includes(row.page)) pageBound = true;
    }
    assert(pageBound, 'repair preimages do not bind the resolved page');
    assert(Array.isArray(row.proof_evidence) && row.proof_evidence.length > 0, 'missing actual proof evidence');
    const proofPaths = new Set();
    for (const link of row.proof_evidence) {
      assert(!proofPaths.has(link.path), 'duplicate proof evidence'); proofPaths.add(link.path);
      assert(bytes(root, link).toString('utf8').trim().length > 0, 'empty actual proof evidence');
    }
    const affected = affectedConsumers(plan, row.page);
    assert(Array.isArray(row.consumers) && row.consumers.length === affected.size, 'incomplete actual consumer dispositions');
    const seen = new Set();
    for (const consumer of row.consumers) {
      assert(affected.has(consumer.page) && !seen.has(consumer.page)
        && ['repaired', 'checked-unaffected'].includes(consumer.disposition) && nonempty(consumer.reason), 'invalid actual consumer disposition');
      seen.add(consumer.page);
    }
    const evidence = json(root, row.evidence);
    assert(evidence.run === run && evidence.number === entry.number && evidence.page === row.page
      && evidence.owner === true && evidence.decision === 'resolved' && evidence.verdict === row.verdict
      && nonempty(evidence.reason) && equal(evidence.sources, row.sources)
      && equal(evidence.consumers, row.consumers) && equal(evidence.proof_evidence, row.proof_evidence), 'owner acceptance does not bind the actual repair');
    assert(evidence.repair_evidence?.path !== row.evidence.path
      && bytes(root, evidence.repair_evidence).toString('utf8').trim().length > 0, 'missing genuine delegated repair evidence');
    accepted.set(row.page, row.verdict);
  }
  return accepted;
}

/** The post-apply gate must not silently lose the resolution when the original
 * report and append reports are merged. Bind the exact native merge receipt. */
export function loadAppliedAppendDriftOwnerResolutions(root, run, mergedReport) {
  root = resolve(root);
  const registryPath = `research/${run}-frontier-appends.json`;
  if (!existsSync(resolve(root, registryPath))) return new Map();
  const registry = JSON.parse(readFileSync(local(root, registryPath)));
  assert(registry.version === 1 && registry.run === run && Array.isArray(registry.appends), 'invalid append registry');
  const accepted = new Map();
  for (const entry of registry.appends) {
    if (!existsSync(resolve(root, appendOwnerResolutionPath(entry)))) continue;
    const receiptPath = `${entry.archive}/review-applied.json`;
    // A pending generation has not contributed any blocked section to this report.
    if (!existsSync(resolve(root, receiptPath))) continue;
    const receipt = JSON.parse(readFileSync(local(root, receiptPath)));
    const report = readFileSync(local(root, entry.report), 'utf8');
    assert(receipt.run === run && receipt.number === entry.number && receipt.inventoriesPreserved === true
      && receipt.reportSha256 === sha(report)
      && receipt.ownerResolutionSha256 === sha(readFileSync(local(root, appendOwnerResolutionPath(entry)))), 'stale native append application receipt');
    const original = readFileSync(local(root, entry.originalReport), 'utf8');
    const record = entry.preimages?.find(p => p.path === `research/${run}-alpha-step1-drift.md` && p.archive === entry.originalReport);
    assert(record?.sha256 === sha(original) && receipt.originalReportSha256 === sha(original), 'stale original append report preimage');
    const merged = original + `\n\n<!-- native append review ${entry.number}; original preimage retained in ${entry.archive} -->\n` + report;
    assert(receipt.mergedReportSha256 === sha(merged) && mergedReport.startsWith(merged)
      && (mergedReport.length === merged.length || mergedReport.slice(merged.length).startsWith('\n\n<!-- native append review ')), 'merged native append report changed');
    for (const [page, verdict] of loadAppendDriftOwnerResolutions(root, run, entry, report)) {
      assert(!accepted.has(page), 'duplicate applied owner resolution'); accepted.set(page, verdict);
    }
  }
  return accepted;
}
