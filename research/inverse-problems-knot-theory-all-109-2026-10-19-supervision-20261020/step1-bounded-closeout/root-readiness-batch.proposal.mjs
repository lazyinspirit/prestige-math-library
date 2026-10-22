// ROOT-ONLY execution proposal. Syntax-checking this file performs no runtime work.
// This is the native version-1 Step1 receipt operation, batched over ONE snapshot.
import { existsSync, readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadStep3, itemHash } from '../../../tools/frontier-snapshot.mjs';
import { step1Decision } from '../../../tools/step1-decisions.mjs';

const RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
const ROOT = fileURLToPath(new URL('../../../', import.meta.url));
const BASE = 'research/' + RUN + '-supervision-20261020/step1-bounded-closeout';
const args = process.argv.slice(2);
const get = (key, fallback) => {
  const n = args.indexOf('--' + key);
  if (n < 0) return fallback;
  if (!args[n + 1] || args[n + 1].startsWith('--')) throw Error('Missing --' + key + ' argument');
  return args[n + 1];
};
const need = (ok, message) => { if (!ok) throw Error(message); };
const abs = p => resolve(ROOT, p);
const json = p => JSON.parse(readFileSync(abs(p), 'utf8'));
const receipt = id => 'research/' + RUN + '-step1-' + id + '.json';
const list = value => Array.isArray(value) ? value : [];
const pass = value => /^PASS\b/i.test(value ?? '');
const sameSet = (a, b) => a.size === b.size && [...a].every(id => b.has(id));
const guardFile = BASE + '/root-mathematical-drain.json';
const stateFile = '.autopilot/' + RUN + '/state.json';

need(args.includes('--apply') && args.includes('--root-authorized'),
  'Root only: review this proposal first, then supply --apply --root-authorized after final metadata and fourteen imports.');
need(resolve(process.cwd()) === resolve(ROOT), 'Run from the repository root.');
const projectionFile = BASE + '/metadata-diagnosis/metadata-projection.json';
const eligibilityFile = BASE + '/readiness-missing104-eligibility-evidence.proposal.json';
const source66File = BASE + '/root-source-qualified-66-scope-adoption-registry.json';
const source14File = get('source14-registry', BASE + '/root-source-qualified-14-scope-adoption-registry.json');
const questionFile = BASE + '/anisotropic-open-question-owner-disposition.json';
const mapFile = 'research/' + RUN + '-math-resolution-map.json';
const providerFile = BASE + '/root-reconciliation-decisions.json';
const archiveName = get('archive-label', 'root-readiness-final-before');
need(/^[a-zA-Z0-9_-]+$/.test(archiveName), 'Archive label must be one safe directory name.');
const archive = BASE + '/' + archiveName;
const executionReport = BASE + '/root-readiness-batch-execution.json';

// Preconditions are intentionally stricter than the old 66-only drain.
need(existsSync(abs(source14File)), 'Missing final root-adopted fourteen-import registry: ' + source14File);
const p = json(projectionFile), eligibility = json(eligibilityFile);
const r66 = json(source66File), r14 = json(source14File), question = json(questionFile);
const map = json(mapFile), provider = json(providerFile), initialDrain = json(guardFile);
const guards = () => {
  const state = json(stateFile), drain = json(guardFile);
  need(state.run === RUN && state.stage === '1-scaffold' && state.paused === true
    && state.pauseAfter === '1-scaffold', 'Run must remain paused at 1-scaffold with pauseAfter=1-scaffold.');
  need(!Object.values(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt), 'Active native dispatch.');
  need(drain.run === RUN && drain.authorized_by === '/root'
    && drain.mathematical_writers_drained === true && drain.proof_bodies_frozen === true
    && drain.native_active_dispatches === 0, 'Root final mathematical drain is incomplete.');
  need(Number.isFinite(Date.parse(drain.at)) && Number.isFinite(Date.parse(r14.adopted_at))
    && Date.parse(drain.at) >= Date.parse(r14.adopted_at), 'Drain predates the final fourteen-import adoption.');
  need(drain.at === initialDrain.at, 'Final drain changed during this batch; restart from the frozen state.');
};
for (const [name, reg] of [[source66File, r66], [source14File, r14]]) {
  need(reg.run === RUN && reg.adopted_by_root === true && reg.adopted_by === '/root', 'Registry is not root-adopted: ' + name);
  need(Array.isArray(reg.entries), 'Registry needs explicit per-ID entries: ' + name);
  for (const e of reg.entries) {
    need(e.id && pass(e.independent_review?.recorded_verdict)
      && existsSync(abs(e.independent_review?.final_record ?? 'MISSING')), 'Missing explicit final PASS record for ' + e.id);
  }
}
const by66 = new Map(r66.entries.map(e => [e.id, e]));
const by14 = new Map(r14.entries.map(e => [e.id, e]));
const eligible = new Map(eligibility.entries.map(e => [e.id, e]));
const original230 = new Set(p.readiness_escalated.map(e => e.id));
const missing104 = new Set(p.readiness_missing.map(e => e.id));
const held14 = new Set(eligibility.entries.filter(e => e.eligibility === 'HOLD-EXACT-NEW-INPUT-BINDING-PENDING').map(e => e.id));
need(original230.size === 230 && missing104.size === 104 && eligible.size === 104, 'Fixed 230/104 input populations changed.');
need(by66.size === 66 && by14.size === 14 && sameSet(held14, new Set(by14.keys())), 'Final fourteen registry does not match the exact surgical-import population.');
need(question.run === RUN && question.item === 'op-ip-general-anisotropic-calderon-uniqueness'
  && question.authorized_by === '/root' && question.statement_unchanged === true, 'Question/status disposition not explicitly authorized.');
need(provider.run === RUN && provider.authorized_by === '/root', 'Current provider integration is not root-authorized.');
need(map.bounded_closeout_status?.original_historical_escalations === 230
  && map.bounded_closeout_status?.covered_at_recorded_scope === 230
  && list(map.bounded_closeout_status?.remaining_original_scope_math_holds).length === 0, 'Historical original closure scope is incomplete.');

// Exact, per-ID scope evidence. Earlier scope histories are referenced, not rewritten.
const evidence = new Map();
for (const [n, closure] of list(map.mathematical_closures).entries()) {
  for (const id of list(closure.originals)) evidence.set(id, {
    path: mapFile, pointer: '/mathematical_closures/' + n,
    claim: String(closure.verdict ?? 'Recorded owner mathematical closure at its exact declared scope'),
  });
}
for (const [n, status] of list(map.source_status_dispositions).entries()) {
  for (const id of list(status.ids)) evidence.set(id, {
    path: mapFile, pointer: '/source_status_dispositions/' + n,
    claim: String(status.verdict ?? 'Recorded source/status disposition only, no solution asserted'),
  });
}
for (const [id, entry] of by66) evidence.set(id, {
  path: source66File, pointer: '/entries/' + r66.entries.indexOf(entry),
  claim: entry.closure_basis + '; final review ' + entry.independent_review.final_record,
});
for (const id of original230) need(evidence.has(id), 'Uncovered original escalated record: ' + id);
for (const id of missing104) {
  const e = eligible.get(id);
  need(e && (e.eligibility === 'CANDIDATE-MISSING-RECEIPT-ONLY-AT-RECORDED-AUTHOR-SCOPE'
    || (e.eligibility === 'HOLD-EXACT-NEW-INPUT-BINDING-PENDING' && by14.has(id))
    || (e.eligibility === 'STATUS-CARRIER-OWNER-DISPOSITION-ONLY' && question.item === id)), 'Missing ID has no explicit eligibility: ' + id);
}
guards();

// ONE normal native snapshot load; no construction projection or tool mutation.
const s = loadStep3(ROOT, RUN);
need(s.items.size === 1471 && s.pages.length === 218 && s.pairs.size === 109,
  'Frozen 1471-item / 218-page / 109-batch frontier changed.');
for (const id of [...original230, ...missing104]) need(s.items.has(id), 'Assigned item left the frozen frontier: ' + id);
const historicalReady = new Set([...s.items.keys()].filter(id => !original230.has(id) && !missing104.has(id)));
need(historicalReady.size === 1137, 'Historical ready complement is not 1137.');

// Actual run logical dependency order. External providers are bound by itemHash,
// but are not promoted into the selected frontier. Forward justifications are
// not converted into artificial proof-dependency edges here.
const order = [], visiting = new Set(), done = new Set();
const visit = id => {
  if (done.has(id)) return;
  need(!visiting.has(id), 'Logical manifest dependency cycle at ' + id);
  visiting.add(id);
  for (const d of list(s.items.get(id).item.deps).filter(d => s.items.has(d)).sort()) visit(d);
  visiting.delete(id); done.add(id); order.push(id);
};
for (const id of [...s.items.keys()].sort()) visit(id);

const planned = [], kept = [], priorRows = new Map();
const at = new Date().toISOString();
for (const id of order) {
  const rel = receipt(id), raw = existsSync(abs(rel)) ? readFileSync(abs(rel), 'utf8') : null;
  priorRows.set(id, raw);
  // Native decision function performs the exact native currency test at ROOT runtime.
  const previous = step1Decision(s, id);
  if (previous.closed) { kept.push(id); continue; }
  let reason;
  const declared = s.items.get(id).item;
  const dependencies = [...new Set([...list(declared.deps), ...list(declared.justified_by),
    ...list(declared.forward_refs), ...list(previous.row?.dependencies)])].sort();
  if (previous.row?.decision === 'escalated')
    need(original230.has(id) || (missing104.has(id) && by14.has(id)), 'Unassigned escalation cannot be resolved: ' + id);
  if (original230.has(id)) {
    const e = evidence.get(id);
    reason = 'Owner scaffold-readiness reconciliation for ' + id + ' at the exact recorded scope; evidence ' + e.path + '#' + e.pointer + ': ' + e.claim
      + '. Prior escalation/history is archived, not erased. This receipt is not a new proof review or external-proof reconstruction.';
  } else if (missing104.has(id)) {
    const e = eligible.get(id);
    if (by14.has(id)) {
      const ext = by14.get(id);
      reason = 'Owner scaffold-readiness after the bounded established-input repair for ' + id + '; explicit root adoption ' + source14File
        + '; independent final scope review ' + ext.independent_review.final_record + '; author reports ' + list(ext.author_reports).join(', ')
        + '. External results remain imports, not newly reconstructed proofs. Earlier author-status gap retained in ' + eligibilityFile + '.';
    } else if (question.item === id) {
      reason = 'Owner completion of the exact open-question/status carrier only; ' + questionFile + ': ' + question.disposition
        + '. No claimed solution is accepted or used as a logical supplier; no new root paper reading is asserted.';
    } else {
      reason = 'Owner authorship-readiness for ' + id + '; ' + e.reason + ' Evidence: ' + e.author_status_evidence
        + '; ' + e.contract_metadata.path + '#' + e.contract_metadata.pointer + '; ' + e.native_author_completion.path + '#' + e.native_author_completion.pointer
        + (e.preferred_scope_evidence ? '; ' + e.preferred_scope_evidence.path + '#' + e.preferred_scope_evidence.pointer : '')
        + '. This records completed authored scope, not independent proof acceptance; per-ID eligibility evidence ' + eligibilityFile + '.';
    }
  } else {
    need(historicalReady.has(id) && previous.row?.decision === 'ready', 'Unexpected missing/non-ready historical record: ' + id);
    reason = 'Owner currency-only scaffold-readiness recertification for historically authored ' + id + '. Prior ready reason: '
      + previous.row.reason + '. Historical receipt retained in ' + archive + '/receipts/' + basename(rel)
      + '; current source/provider metadata integration: ' + providerFile + '; adopted original-scope registry: ' + source66File
      + '; final fourteen-input registry: ' + source14File + '. No old proof is reapproved or strengthened; this is current native item/dependency binding only.';
  }
  // Exactly the version-1 recordStep1 schema; owner operation is explicit.
  planned.push({ id, path: rel, row: { version: 1, run: RUN, item: id, decision: 'ready', owner: true, reason,
    dependencies, sha256: itemHash(s, id, dependencies), at } });
}
guards();
if (planned.length === 0) {
  console.log(JSON.stringify({ run: RUN, kept_current_ready: kept.length, written: 0, note: 'No existing current ready receipt changed.' }));
} else {
  // Preflight all prior bytes BEFORE the archive or any receipt write.
  need(!existsSync(abs(archive)), 'Archive already exists; never overwrite history. Choose a fresh --archive-label after root review.');
  for (const [id, raw] of priorRows) {
    const current = existsSync(abs(receipt(id))) ? readFileSync(abs(receipt(id)), 'utf8') : null;
    need(current === raw, 'Receipt changed concurrently: ' + id);
  }
  mkdirSync(abs(archive + '/receipts'), { recursive: true });
  for (const [id, raw] of priorRows) if (raw !== null)
    copyFileSync(abs(receipt(id)), abs(archive + '/receipts/' + basename(receipt(id))));
  writeFileSync(abs(archive + '/archive-record.json'), JSON.stringify({ version: 1, run: RUN, at,
    authorization: '/root via --root-authorized', original_population: 1471,
    existing_receipts_archived: [...priorRows.values()].filter(v => v !== null).length,
    missing_before: [...priorRows].filter(([, raw]) => raw === null).map(([id]) => id),
    changed_receipts: planned.map(e => e.id), kept_current_ready: kept,
    final_drain: guardFile, final_drain_at: initialDrain.at, source14_registry: source14File,
    scope: 'Preserve existing receipt bytes once; readiness is authorship/status, not proof acceptance.' }, null, 2) + '\n', { flag: 'wx' });
  guards();
  for (const e of planned) writeFileSync(abs(e.path), JSON.stringify(e.row, null, 2) + '\n');
  writeFileSync(abs(executionReport), JSON.stringify({ version: 1, run: RUN, at,
    executed_by: '/root', snapshot_loads: 1, frontier_items: 1471, archive,
    kept_current_ready: kept.length, written: planned.length, written_ids_dependency_order: planned.map(e => e.id),
    source14_registry: source14File, final_drain: guardFile,
    limits: 'Native version-1 readiness binding only. No new mathematical acceptance, validators, gates or engine transition.' }, null, 2) + '\n');
  console.log(JSON.stringify({ run: RUN, kept_current_ready: kept.length, written: planned.length, archive, executionReport }));
}
