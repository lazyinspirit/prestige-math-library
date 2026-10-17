#!/usr/bin/env node
// ROOT ONLY. Prepared, unexecuted. Execution writes only a new research packet.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import { splitFrontmatter, sectionText, numberedProofSteps } from '/home/lazyinspirit/Projects/prestige-math-library/tools/facts-block.mjs';
import { yaml } from '/home/lazyinspirit/Projects/prestige-math-library/tools/pathway-lib.mjs';
import { loadStep3OwnerRehomes, ownerRehomeCarrierBatch } from '/home/lazyinspirit/Projects/prestige-math-library/tools/step3-owner-rehomes.mjs';

const argv = process.argv.slice(2);
const option = name => { const at = argv.indexOf('--' + name); return at >= 0 ? argv[at + 1] : null; };
const ROOT = '/home/lazyinspirit/Projects/prestige-math-library';
const RUN = 'numerical-optimization-dynamics-2026-10-16';
if (option('root') !== ROOT || option('run') !== RUN) throw Error('Explicit exact --root and --run required');
const inventoryArg = option('inventory'), outputArg = option('output-dir');
if (!inventoryArg || !outputArg) throw Error('--inventory and fresh --output-dir required');
const researchPath = value => {
  const absolute = resolve(ROOT, value), rel = relative(ROOT, absolute);
  if (!rel.startsWith('research/' + RUN) || rel.includes('..')) throw Error('Expected own-run research path: ' + value);
  return { absolute, relative: rel };
};
const output = researchPath(outputArg), input = researchPath(inventoryArg);
if (existsSync(output.absolute)) throw Error('Output directory already exists; use a fresh packet path');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const sha = value => createHash('sha256').update(value).digest('hex');
const hash = value => sha(JSON.stringify(canonical(value)) ?? 'undefined');
// Root execution computes each distinct raw reference hash at most once.
const cache = new Map();
const read = path => {
  const absolute = resolve(ROOT, path);
  if (!absolute.startsWith(ROOT + '/')) throw Error('Path outside actual repository');
  if (!cache.has(absolute)) {
    const raw = readFileSync(absolute);
    cache.set(absolute, { raw, text: raw.toString('utf8'), sha256: sha(raw), path: relative(ROOT, absolute) });
  }
  return cache.get(absolute);
};
const parsed = path => JSON.parse(read(path).text);
const ref = path => { const file = read(path); return { path: file.path, sha256: file.sha256 }; };
const inventory = parsed(input.absolute);
if (inventory.version !== 1 || inventory.run !== RUN || inventory.root !== ROOT
  || inventory.mode !== 'read-only-owner-evidence-inventory' || !Array.isArray(inventory.groups)) throw Error('Unexpected actual root inventory');
const rehomes = loadStep3OwnerRehomes(ROOT, RUN);
const sourceBeforeMap=option('source-metadata-before-map')?parsed(researchPath(option('source-metadata-before-map')).absolute):{};
const prepared = [], held = [], skipped = [], archives = new Map(), derivedArchives = new Map();
const norm = value => String(value ?? '').replace(/\s+/g, ' ').trim();
const modulePath = 'tools/step3-owner-source-identical-continuity.mjs';
read(modulePath);
const archive = (path, name) => {
  if (!archives.has(path)) archives.set(path, { filename: name, file: read(path) });
  return { path: output.relative + '/archives/' + archives.get(path).filename, sha256: archives.get(path).file.sha256 };
};
for (const group of inventory.groups) for (const row of group.targets ?? []) {
  const target = row.check_target ?? row.target;
  for (const detail of row.decisions ?? []) {
    const decision = detail.decision;
    const label = { group: group.group, obligation: decision?.obligation, id: decision?.id };
    // Strict requested subset: never stabilized, added, page, direct or finding routes.
    if (decision?.verdict !== 'accepted_repair' || target?.route !== 'touched'
      || target.direct || target.stabilized || target.added !== false) continue;
    if (detail.accepted_repair_comparison?.differs_beyond_native_risk_review_exception !== true) {
      skipped.push({ ...label, reason: 'No beyond-risk native-post difference in actual inventory' }); continue;
    }
    try {
      if (detail.inventory_error) throw Error('Inventory carrier error: ' + detail.inventory_error);
      if (!target.batch || target.id !== decision.id || target.obligation !== decision.obligation) throw Error('Target identity incomplete');
      if (row.check_target_sha256 !== hash(target)) throw Error('Inventory check-target hash mismatch');
      const before = detail.native_pre_post?.post_carrier, current = detail.current_carrier;
      if (!before?.item_sha256 || !current?.item_sha256) throw Error('Missing immutable-post/current item carrier');
      // No rehome or metadata-only source exception is assumed by this builder.
      let sourceMetadataBefore=null;
      if (before.item_sha256 !== current.item_sha256) {
        const explicitPath=sourceBeforeMap[decision.id];
        if(!explicitPath)throw Error('Raw source differs from immutable post: explicit authenticated complete source preimage is required');
        researchPath(explicitPath);const oldFile=read(explicitPath),liveFile=read(`items/${decision.id}.md`);
        if(oldFile.sha256!==before.item_sha256||liveFile.sha256!==current.item_sha256)throw Error('Explicit before/current source hashes do not match native carriers');
        const a=splitFrontmatter(oldFile.text),b=splitFrontmatter(liveFile.text),am=yaml().parse(a.fm)??{},bm=yaml().parse(b.fm)??{};
        if(a.body!==b.body)throw Error('Explicit metadata source continuity requires identical entire body');
        for(const k of ['audited','verified','sources_checked','repair'])if(hash(am.verification?.[k])!==hash(bm.verification?.[k]))throw Error('Forbidden audit/repair marker change');
        const projection=({dependency_level,verification,provenance,...rest})=>rest;
        if(hash(projection(am))!==hash(projection(bm)))throw Error('Nonmechanical frontmatter changed');
        sourceMetadataBefore=ref(explicitPath);
      }
      if (detail.current_carrier_sha256 !== hash(current)) throw Error('Inventory current-carrier hash mismatch');
      const sourcePath = `items/${decision.id}.md`, source = read(sourcePath);
      if (source.sha256 !== current.item_sha256) throw Error('Current raw source no longer equals actual inventory source');
      const snapshotPath = `research/${RUN}-step3-hash-${target.batch}-post.json`;
      const snap = parsed(snapshotPath);
      if (snap.version !== 2 || snap.run !== RUN || String(snap.batch) !== String(target.batch) || snap.label !== 'post'
        || hash(snap.hashes?.[target.id]) !== hash(before)) throw Error('Actual immutable reader-post snapshot differs from inventory');
      const currentBatch = ownerRehomeCarrierBatch(rehomes, decision.id, target.batch);
      const manifestPath = `research/${RUN}-batch-${currentBatch}.pages.json`;
      const manifest = parsed(manifestPath), pages = Array.isArray(manifest) ? manifest : manifest.pages;
      if (!Array.isArray(pages)) throw Error('Current manifest pages absent');
      const matching = pages.flatMap(page => (page.items ?? []).filter(item => item?.id === decision.id)
        .map(item => ({ ...item, __step4_page_id: page.id })));
      if (matching.length !== 1) throw Error('Expected exactly one current manifest item row');
      const manifestRow = matching[0];
      const contractPath = `research/${RUN}-batch-${currentBatch}.proof-contracts.json`;
      const contract = parsed(contractPath).contracts?.[decision.id];
      if (hash(manifestRow) !== current.manifest_sha256 || hash(contract ?? null) !== current.contract_sha256) throw Error('Actual current manifest/contract differs from inventory');
      const { fm, body } = splitFrontmatter(source.text), meta = yaml().parse(fm) ?? {};
      if (hash(manifestRow.deps ?? []) !== hash(meta.deps ?? [])) throw Error('Actual manifest dependencies differ from current source frontmatter');
      const heading = meta.kind === 'definition' || meta.kind === 'algorithm' ? 'Definition'
        : meta.kind === 'example' && sectionText(body, 'Example') ? 'Example'
        : meta.kind === 'counterexample' ? 'Statement refuted'
        : meta.kind === 'remark' && !sectionText(body, 'Statement') && sectionText(body, 'Remarks') ? 'Remarks' : 'Statement';
      if (contract == null && (!['definition', 'algorithm', 'remark'].includes(meta.kind)
        || numberedProofSteps(body).length !== 0 || before.contract_sha256 !== hash(null) || current.contract_sha256 !== hash(null))) throw Error('Null contract does not satisfy the native restricted definition/algorithm/remark branch');
      const claim = sectionText(body, heading);
      // Exact native normalization of the complete section; never substring matching.
      if (!claim || typeof manifestRow.statement !== 'string' || norm(manifestRow.statement) !== norm(claim)) throw Error('HOLD: manifest lacks whole current ' + heading + ' mirror under native whitespace normalization; no expansion/projection performed');
      const decisionPath = relative(ROOT, resolve(ROOT, group.decision_path));
      const document = parsed(decisionPath);
      const candidates = document.decisions?.filter(d => d.obligation === decision.obligation && d.id === decision.id) ?? [];
      const nativeDecisionPath = `research/${RUN}-alpha-${group.group}-3a-decisions.json`;
      const hasDocumentRun = Object.hasOwn(document, 'run');
      if (decisionPath !== nativeDecisionPath || document.version !== 1 || document.group !== group.group
        || hasDocumentRun && document.run !== RUN || candidates.length !== 1 || candidates[0].verdict !== 'accepted_repair'
        || hash(candidates[0]) !== hash(decision)) throw Error('Actual accepted document path/group/run/decision differs from native inventory');
      const nativeResultPath = `research/${RUN}-dispatch/alpha-3a-batch-${target.batch}.result.json`;
      const result = parsed(nativeResultPath);
      if (result.run !== RUN || result.role !== 'alpha' || result.ok !== true || result.exit_code !== 0
        || result.process_exit_code !== 0 || result.timed_out === true || result.terminal_summary?.task_completed !== true
        || result.terminal_summary?.task_aborted === true || !result.covers?.map(String).includes(String(target.batch))) throw Error('Current stable native Alpha result is not genuine completed success');
      const nativeReportPath = `research/${RUN}-alpha-batch-${target.batch}-3a.md`;
      const nativeAssignmentPath = `research/${RUN}-alpha-batch-${target.batch}-3a-order.task.md`;
      read(nativeReportPath);
      if (!read(nativeAssignmentPath).text.includes(target.id)) throw Error('Actual current native assignment does not contain item ID');
      const originalAcceptedArchive = archive(decisionPath, `alpha-${group.group}-accepted-before-stamp.json`);
      let acceptedArchive = originalAcceptedArchive;
      if (!hasDocumentRun) {
        // The original native document remains archived byte-exact. This is
        // explicit ROOT-derived run binding, not original native output.
        const wrapper = { run: RUN, decisions: [candidates[0]], owner_archive_provenance: {
          root_derived: true, original_document: originalAcceptedArchive,
          original_group: document.group,
          reason_missing_run_context: 'Original native version1 decision document omits top-level run. Root binds its unchanged accepted decision to the actual run-local native path/group and genuine successful current Alpha result, assignment and report; no new native authorship, coverage or mathematical acceptance is asserted.',
          native_result: ref(nativeResultPath), native_assignment: ref(nativeAssignmentPath), native_report: ref(nativeReportPath)
        } };
        const filename = `ROOT-derived-${encodeURIComponent(decision.obligation)}-accepted.json`;
        const raw = Buffer.from(JSON.stringify(wrapper, null, 2) + '\n');
        derivedArchives.set(filename, raw);
        acceptedArchive = { path: output.relative + '/archives/' + filename, sha256: sha(raw) };
      }
      archive(nativeResultPath, `alpha-batch-${target.batch}.stable-result.json`);
      archive(nativeReportPath, `alpha-batch-${target.batch}.report.md`);
      archive(nativeAssignmentPath, `alpha-batch-${target.batch}.assignment.md`);
      const entry = { version: 1, policy: 'step3-source-identical-acceptance-continuity-v1', run: RUN,
        id: decision.id, obligation: decision.obligation,
        post_reader_carrier_sha256: hash(before), target_sha256: hash(target), current_carrier_sha256: hash(current),
        historical_manifest_delta_unknown: true, independent_execution_coverage_adopted: false,
        post_reader_snapshot: ref(snapshotPath), native_result: ref(nativeResultPath), native_report: ref(nativeReportPath),
        native_assignment: ref(nativeAssignmentPath), accepted_decision_archive: acceptedArchive,
        accepted_decision_sha256: hash(decision), ...(sourceMetadataBefore?{source_metadata_before:sourceMetadataBefore}:{}) };
      prepared.push({ ...label, entry, current_batch: currentBatch, actual_target: target,
        source_path: sourcePath, current_source_raw_sha256: source.sha256,
        accepted_archive_kind: hasDocumentRun ? 'byte-exact original native document' : 'explicit ROOT-derived missing-run binding wrapper',
        original_accepted_document: originalAcceptedArchive,
        native_strict_contract_validation: 'NOT RUN: mandatory native runtime predicate remains owed',
        rationale: 'An actual existing native accepted_repair on an original touched, nonadded item is preserved across exact-source-identical current carrier metadata; historical manifest delta remains unknown and no independent execution coverage is adopted.' });
    } catch (cause) { held.push({ ...label, reason: String(cause?.message ?? cause) }); }
  }
}
// Refuse a packet assembled across concurrent canonical writes. No canonical writes occur.
for (const [absolute, file] of cache) if (!readFileSync(absolute).equals(file.raw)) throw Error('Input changed while preparing packet: ' + file.path);
mkdirSync(join(output.absolute, 'archives'), { recursive: true });
for (const { filename, file } of archives.values()) writeFileSync(join(output.absolute, 'archives', filename), file.raw, { flag: 'wx' });
for (const [filename, raw] of derivedArchives) writeFileSync(join(output.absolute, 'archives', filename), raw, { flag: 'wx' });
writeFileSync(join(output.absolute, 'input-inventory.json'), read(input.absolute).raw, { flag: 'wx' });
writeFileSync(join(output.absolute, 'continuity-module-reviewed.mjs'), read(modulePath).raw, { flag: 'wx' });
writeFileSync(join(output.absolute, 'proposed-owner-evidence-fragment.json'), JSON.stringify({ version: 1, run: RUN,
  source_identical_acceptance_continuities: prepared.map(row => row.entry) }, null, 2) + '\n', { flag: 'wx' });
writeFileSync(join(output.absolute, 'report.json'), JSON.stringify({ version: 1, run: RUN,
  status: 'PROPOSED ONLY; no canonical integration, runtime validation, acceptance or gate result',
  inventory: ref(input.absolute), prepared, held, skipped,
  input_guards: [...cache.values()].map(file => ({ path: file.path, sha256: file.sha256 })),
  native_runtime_strict_contract_validation: 'NOT RUN; actual module predicate remains required by native battery',
  source_metadata_before_branch: 'NOT GENERATED: differing raw source remains HOLD pending separately authenticated complete preimage' }, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ output: output.relative, proposed: prepared.length, held: held.length, skipped: skipped.length }));
