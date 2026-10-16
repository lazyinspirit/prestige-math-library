// Root-operated guarded release. No action is performed merely by importing this file.
// --preflight is read-only. Other modes require explicit completed build/publication commits.
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, copyFileSync, appendFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard, stripVerification } from '../../tools/item-hash.mjs';
import { recordedPublishedRepair } from '../../tools/published-repair-policy.mjs';
import { yaml, split } from '../../tools/pathway-lib.mjs';

const run = 'quantum-computing-algorithms-60-2026-10-15';
const base = `research/${run}-owner`;
const args = process.argv.slice(2), option = flag => args[args.indexOf(flag) + 1];
const modes = ['--preflight', '--integrate', '--metadata', '--proposal-check', '--prepare-closeout'];
const mode = modes.find(flag => args.includes(flag));
if (!mode || modes.filter(flag => args.includes(flag)).length !== 1) throw Error(`choose one of ${modes.join(', ')}`);
const read = path => readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const sha = value => createHash('sha256').update(value).digest('hex');
const hash = path => sha(readFileSync(path));
const must = (condition, message) => { if (!condition) throw Error(message); };
const stableWrite = (path, object) => writeFileSync(path, JSON.stringify(object, null, 2) + '\n');
const fm = text => yaml().parse(split(text).fm);
const body = text => split(text).body;
// Only publication status and verification may differ from reviewed full carriers.
const mathematical = text => stripVerification(text.replace(/^status: published$/m, 'status: draft'));
const invoke = (command, commandArgs) => {
  const result = spawnSync(command, commandArgs, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  must(!result.error && result.status === 0, `${command} ${commandArgs.join(' ')} failed; HOLD and inspect existing changes, never retry blindly:\n${result.error?.message ?? ''}${result.stdout ?? ''}${result.stderr ?? ''}`);
  return result.stdout;
};
const planPath = `${base}/published-repair-integration-order.json`;
const plan = json(planPath), rows = plan.items;
const corrections = new Map(json(`${base}/published-repair-corrections.json`).items.map(row => [row.id, row]));
const guards = json(`${base}/native-interface-reconciliation/native-norms/final-native-interface/preserved-pending71-guards.json`);
must(hash(planPath) === guards.plan_raw_sha256 && rows.length === 71 && new Set(rows.map(row => row.id)).size === 71, 'original 71 integration-order guard changed');
const pending = new Set(rows.map(row => row.id));
for (const row of rows) {
  pending.delete(row.id);
  must(!(row.proposal_dependencies ?? []).some(id => pending.has(id)), `not supplier-first: ${row.id}`);
  const correction = corrections.get(row.id);
  must(correction?.proposal === row.proposal && correction.proposal_raw_sha256 === row.proposal_raw_sha256 && correction.correction?.trim(), `missing concrete correction: ${row.id}`);
  must(hash(row.proposal) === row.proposal_raw_sha256 && hash(row.before_file) === row.before_raw_sha256, `proposal/preimage guard changed: ${row.id}`);
}

// Seven observed complex/product carriers have exact full archived preimages.
const observation = json(`${base}/native-interface-reconciliation/complex-and-product-interface-observation.json`);
const inputDir = 'research/quantum-prerequisites-4-2026-10-15-owner/authoring-gate-escalation/cross-batch/current-inputs';
const interfaces = [];
for (const row of observation.rows) {
  const matches = readdirSync(inputDir).filter(name => name.endsWith(`-${row.id}.md`));
  must(matches.length === 1, `ambiguous full supplier snapshot: ${row.id}`);
  const snapshot = `${inputDir}/${matches[0]}`;
  must(hash(snapshot) === row.actual_raw_sha256, `original supplier observation mismatch: ${row.id}`);
  interfaces.push({ id: row.id, snapshot, snapshot_sha256: row.actual_raw_sha256 });
}
const normEvidence = json(`${base}/native-interface-reconciliation/native-norms/final-native-interface/final-disposition.json`);
for (const row of normEvidence.actual_supplier_dispositions) {
  must(hash(row.current_snapshot) === row.current_raw_sha256, `final norm snapshot mismatch: ${row.id}`);
  interfaces.push({ id: row.id, snapshot: row.current_snapshot, snapshot_sha256: row.current_raw_sha256 });
}
must(new Set(interfaces.map(row => row.id)).size === 15, 'expected 14 native suppliers plus existing real norm definition');
for (const row of interfaces) {
  const source = read(`items/${row.id}.md`), snapshot = read(row.snapshot);
  must(mathematical(source) === mathematical(snapshot) && body(source) === body(snapshot), `real semantic/source drift; explicit focused reconciliation required: ${row.id}`);
}
const inventory = json(`${base}/repair-integration-plan.json`);
const oldFour = inventory.items.filter(row => row.status === 'already-recorded-published-repair');
for (const row of oldFour) {
  const text = read(`items/${row.id}.md`), receipt = fm(text).verification?.repair;
  must(receipt?.startsWith('research/quantum-hopf-hecke-75-2026-10-15-owner/published-repairs/'), `original repair identity changed: ${row.id}`);
  must(recordedPublishedRepair(process.cwd(), row.id, text, receipt).ok, `original genuine repair receipt invalid: ${row.id}`);
}
const receiptPath = id => `${base}/published-repairs/${id}.json`;
const completed = row => {
  if (!existsSync(receiptPath(row.id))) return false;
  const receipt = json(receiptPath(row.id)), text = read(`items/${row.id}.md`);
  must(receipt.run === run && receipt.before_raw_sha256 === row.before_raw_sha256 && receipt.correction === corrections.get(row.id).correction, `unexpected existing repair: ${row.id}`);
  must(fm(text).verification?.repair === receiptPath(row.id) && recordedPublishedRepair(process.cwd(), row.id, text, receiptPath(row.id)).ok, `incomplete/stale repair; HOLD: ${row.id}`);
  must(mathematical(text) === mathematical(read(row.proposal)), `repaired carrier differs from reviewed proposal: ${row.id}`);
  return true;
};
const done = rows.filter(completed).map(row => row.id);
for (const row of rows.filter(row => !done.includes(row.id))) must(hash(`items/${row.id}.md`) === row.before_raw_sha256, `live preimage changed: ${row.id}`);
const pagePlan = json(`${base}/published-consumer-page-requires-plan.json`);
for (const row of pagePlan.amendments) must(hash(row.file) === row.library_before_raw_sha256, `published page source changed; reassess before release: ${row.page}`);
console.log(JSON.stringify({ run, mode, reviewed_interfaces: interfaces.length, native_suppliers: 14, exact_pending_proposals: rows.length - done.length, valid_integrated_repairs: done.length, preserved_original_repairs: oldFour.length, published_pages_unchanged: pagePlan.amendments.length }));
if (mode === '--preflight') process.exit(0);

const hhCommit = option('--hh-closeout-commit'), publicationCommit = option('--publication-commit');
for (const commit of [hhCommit, publicationCommit]) must(/^[a-f0-9]{40,64}$/.test(commit ?? ''), 'mutations require --hh-closeout-commit SHA and later --publication-commit SHA');
invoke('git', ['merge-base', '--is-ancestor', hhCommit, publicationCommit]);
invoke('git', ['merge-base', '--is-ancestor', publicationCommit, 'HEAD']);
must(hhCommit !== publicationCommit, 'closeout and publication must be distinct commits');
const prerequisiteRun = 'quantum-prerequisites-4-2026-10-15';
const prerequisiteState = json(`.autopilot/${prerequisiteRun}/state.json`);
const prerequisiteClose = prerequisiteState.stages?.['6-close-v2'];
must(prerequisiteClose?.doneAt && prerequisiteClose?.gatesPassedAt && !prerequisiteClose.skipped, 'original native prerequisite closeout has not completed');
invoke('git', ['cat-file', '-e', `${hhCommit}:research/${prerequisiteRun}-step6-report.md`]);
const hhRun = 'hopf-hecke-unfinished-15-2026-10-15';
const hhState = json(`.autopilot/${hhRun}/state.json`);
const validated = hhState.stages?.['6-final-validation-v3'];
const finalDispatch = hhState.dispatches?.['6-finalize-v3:step6-finalize-v3'];
must(validated?.doneAt && validated?.gatesPassedAt && !validated.skipped && !validated.routedTo
  && hhState.stage === '6-finalize-v3' && finalDispatch?.endedAt && finalDispatch.lastExitOk === true,
  'HH genuine v3 final validation and finalize must complete first');
const finalPath = `research/${hhRun}-dispatch/tool-step6-finalize-v3.result.json`;
const committedFinal = invoke('git', ['show', `${hhCommit}:${finalPath}`]);
must(committedFinal === read(finalPath), 'HH native final receipt differs from actual closeout commit');
const finalReceipt = JSON.parse(committedFinal), validation = finalReceipt.native_final_validation;
must(finalReceipt.run === hhRun && finalReceipt.ok === true && finalReceipt.written_by === 'step6-finalize'
  && finalReceipt.label === 'step6-finalize-v3' && !finalReceipt.transaction_pending
  && validation?.stage === '6-final-validation-v3' && validation.doneAt === validated.doneAt
  && validation.gatesPassedAt === validated.gatesPassedAt && validation.gates?.length > 0
  && validation.gates.every(gate => gate.ok === true), 'HH final receipt lacks genuine completed v3 gate evidence');
must(invoke('git', ['rev-parse', `${hhCommit}^`]).trim() === finalReceipt.closeout_scope?.before_head, 'supplied HH commit is not actual native closeout transaction');
invoke('git', ['cat-file', '-e', `${hhCommit}:research/${hhRun}-step6-report.md`]);
for (const row of interfaces.filter(row => row.id !== 'def-norm-and-normed-space')) must(fm(read(`items/${row.id}.md`)).status === 'published', `prerequisite publication pending: ${row.id}`);
const releaseDir = `${base}/actual-integration`;
mkdirSync(releaseDir, { recursive: true });
const journal = `${releaseDir}/journal.jsonl`;
const log = row => appendFileSync(journal, JSON.stringify({ at: new Date().toISOString(), ...row }) + '\n');
log({ mode, hh_closeout_commit: hhCommit, publication_commit: publicationCommit, original_plan_sha256: hash(planPath), interfaces: interfaces.map(row => ({ ...row, current_raw_sha256: hash(`items/${row.id}.md`), current_mathematical_sha256: sha(mathematical(read(`items/${row.id}.md`))) })) });
try {
  if (mode === '--integrate') {
    // Guard the helper itself using the frozen support preparation.
    const originalHelper = 'research/quantum-hopf-hecke-75-2026-10-15-owner/integrate-published-repair.mjs';
    const pin = json(`${base}/supporting-closeout-preparation.json`).owned_paths.find(row => row.path === originalHelper);
    must(pin && hash(originalHelper) === pin.sha256, 'genuine original repair helper changed');
    const importAnchor = "import { recordedPublishedRepair } from '../../tools/published-repair-policy.mjs';";
    const idBefore = 'const id = /^id:\\s*(\\S+)/m.exec(candidate)?.[1];';
    const idAfter = 'const id = yaml().parse(split(candidate).fm)?.id;';
    const originalSource = read(originalHelper);
    must(originalSource.split(importAnchor).length === 2 && originalSource.split(idBefore).length === 2, 'original helper adaptation anchors changed');
    const adaptedSource = originalSource.replace(importAnchor, importAnchor + "\nimport { yaml, split } from '../../tools/pathway-lib.mjs';").replace(idBefore, idAfter);
    const helper = `${base}/integrate-published-repair.mjs`;
    const adaptation = json(`${base}/published-repair-helper-adaptation.json`);
    must(read(helper) === adaptedSource && adaptation.original_helper === originalHelper
      && adaptation.original_sha256 === pin.sha256 && adaptation.adapted_helper === helper
      && adaptation.adapted_sha256 === hash(helper), 'run-local helper differs from exact YAML identity adaptation');
    log({ action: 'authenticated-helper-adaptation', original_helper: originalHelper, original_sha256: pin.sha256, adapted_helper: helper, adapted_sha256: hash(helper) });
    for (const row of rows) {
      if (done.includes(row.id)) continue;
      must(hash(`items/${row.id}.md`) === row.before_raw_sha256 && hash(row.proposal) === row.proposal_raw_sha256, `immediate source/proposal guard failed: ${row.id}`);
      log({ action: 'repair-start', id: row.id });
      const output = invoke(process.execPath, [helper, '--run', run, row.proposal, row.before_file, corrections.get(row.id).correction]);
      must(completed(row), `helper did not produce valid repair: ${row.id}`);
      log({ action: 'repair-complete', id: row.id, output });
    }
  } else {
    must(done.length === 71, 'all 71 actual source integrations must complete first');
    if (mode === '--metadata') {
      const path = 'research/plan-spec.json', source = read(path), canonical = JSON.parse(source);
      if (existsSync(`${releaseDir}/plan-spec.before.json`))
        must(read(`${releaseDir}/plan-spec.before.json`) === source, 'canonical source changed after metadata attempt; HOLD');
      else copyFileSync(path, `${releaseDir}/plan-spec.before.json`);
      // Replace only exact JSON object slices for actual existing items/pages.
      const replacements = new Map();
      const actualIds = new Set([...rows.map(row => row.id), ...oldFour.map(row => row.id), ...interfaces.map(row => row.id)]);
      for (const page of canonical.pages) {
        for (const item of page.items ?? []) {
          if (!actualIds.has(item.id)) continue;
          const actual = fm(read(`items/${item.id}.md`));
          for (const key of ['kind', 'title', 'deps', 'justified_by', 'forward_refs']) {
            if (key in actual) item[key] = actual[key]; else if (['deps', 'justified_by', 'forward_refs'].includes(key)) delete item[key];
          }
        }
        const amendment = pagePlan.amendments.find(row => row.page === page.id);
        if (amendment) {
          must(JSON.stringify(page.requires) === JSON.stringify(amendment.current_requires), `canonical Requires drift: ${page.id}`);
          page.requires = [...page.requires, ...amendment.add_requires];
        }
      }
      // Preserve layout and every unrelated byte by replacing changed scalar/array fields below.
      const original = JSON.parse(source);
      const patchPage = (oldPage, newPage) => {
        if (JSON.stringify(oldPage) === JSON.stringify(newPage)) return;
        const render = (value, indentation) => JSON.stringify(value, null, 2).replace(/\n/g, `\n${' '.repeat(indentation)}`);
        const oldPageText = render(oldPage, 4);
        must(source.split(oldPageText).length === 2, `ambiguous canonical page encoding: ${oldPage.id}`);
        let pageText = oldPageText;
        for (let i = 0; i < (oldPage.items ?? []).length; i++) {
          const oldItem = oldPage.items[i], newItem = newPage.items[i];
          if (JSON.stringify(oldItem) === JSON.stringify(newItem)) continue;
          const oldItemText = render(oldItem, 8);
          must(pageText.split(oldItemText).length === 2, `ambiguous canonical item encoding: ${oldItem.id}`);
          pageText = pageText.replace(oldItemText, () => render(newItem, 8));
        }
        if (JSON.stringify(oldPage.requires) !== JSON.stringify(newPage.requires)) {
          const oldRequires = `"requires": ${render(oldPage.requires, 6)}`;
          must(pageText.split(oldRequires).length === 2, `ambiguous canonical Requires encoding: ${oldPage.id}`);
          pageText = pageText.replace(oldRequires, () => `"requires": ${render(newPage.requires, 6)}`);
        }
        replacements.set(oldPageText, pageText);
      };
      for (let i = 0; i < original.pages.length; i++) patchPage(original.pages[i], canonical.pages[i]);
      let next = source;
      for (const [before, after] of replacements) next = next.replace(before, () => after);
      must(JSON.stringify(JSON.parse(next)) === JSON.stringify(canonical), 'surgical canonical mirror failed');
      writeFileSync(path, next);
      stableWrite(`${releaseDir}/metadata.json`, { run, before_sha256: sha(source), after_sha256: sha(next), pages_changed: replacements.size, requires_edges_added: 4, library_page_sources_changed: false, actual_item_metadata_only: true });
    } else if (mode === '--proposal-check') {
      const old = 'research/quantum-planning-review/mechanical-check.json', archive = `${releaseDir}/mechanical-check.before.json`;
      must(!existsSync(archive), 'proposal checker already attempted; preserve original archive and inspect actual output');
      if (existsSync(old)) copyFileSync(old, archive);
      invoke(process.execPath, ['research/quantum-planning-review/check-proposals.mjs']);
      copyFileSync(old, `${releaseDir}/mechanical-check.actual.json`);
    } else if (mode === '--prepare-closeout') {
      must(json(`${releaseDir}/mechanical-check.actual.json`).status === 'pass', 'actual proposal checker must pass first');
      const policyPath = `research/${run}-closeout-scope.json`, policy = json(policyPath);
      const support = json(`${base}/supporting-closeout-preparation.json`);
      const required = new Set(['research/plan-spec.json', 'research/published-consumer-supplier-ledger.md', ...rows.map(row => `items/${row.id}.md`), ...oldFour.map(row => `items/${row.id}.md`)]);
      for (const row of oldFour) {
        const path = fm(read(`items/${row.id}.md`)).verification.repair;
        required.add(path); required.add(json(path).before_file);
      }
      const owned = new Map(support.owned_paths.filter(row => !required.has(row.path) && !row.path.startsWith(`research/${run}-`)).map(row => {
        if (row.path === 'research/quantum-planning-review/mechanical-check.json') {
          must(hash(`${releaseDir}/mechanical-check.before.json`) === row.sha256, 'original checker report archive guard changed');
          must(hash(row.path) === hash(`${releaseDir}/mechanical-check.actual.json`), 'actual checker report changed');
          return [row.path, { ...row, sha256: hash(row.path), reason: 'Actual mechanical proposal check after source integration; original virtual report archived with its original exact hash.' }];
        }
        must(hash(row.path) === row.sha256, `support inventory drift: ${row.path}`);
        return [row.path, row];
      }));
      for (const row of pagePlan.amendments) owned.set(row.file, { path: row.file, sha256: hash(row.file), reason: 'Exact unchanged published consumer page supporting canonical Requires edge repair.' });
      const evidence = `${releaseDir}/supporting-closeout.json`;
      stableWrite(evidence, { version: 1, run, owned_paths: [...owned.values()] });
      must(policy.additional_paths.length === 0, 'existing additional closeout scope needs explicit reconciliation');
      copyFileSync(policyPath, `${releaseDir}/closeout-scope.before.json`, 1);
      policy.additional_paths = [...owned.values()].map(row => ({ ...row, ownership_evidence: evidence }));
      stableWrite(policyPath, policy);
    }
  }
  log({ result: 'complete', mode });
} catch (error) {
  log({ result: 'HOLD', mode, error: error.message });
  throw error;
}
