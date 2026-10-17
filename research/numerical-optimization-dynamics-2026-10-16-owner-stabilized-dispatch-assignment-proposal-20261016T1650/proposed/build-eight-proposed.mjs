#!/usr/bin/env node
// ROOT ONLY; prepared, unexecuted. Writes a fresh research fragment, never authority.
import { createHash } from 'node:crypto';
import { readFileSync, existsSync, mkdirSync, writeFileSync, lstatSync } from 'node:fs';
import { resolve, join, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { splitFrontmatter, sectionText, numberedProofSteps } from '/home/lazyinspirit/Projects/prestige-math-library/tools/facts-block.mjs';
import { yaml } from '/home/lazyinspirit/Projects/prestige-math-library/tools/pathway-lib.mjs';
const ROOT = '/home/lazyinspirit/Projects/prestige-math-library', RUN = 'numerical-optimization-dynamics-2026-10-16';
const POLICY = 'step3-stabilized-source-identical-acceptance-continuity-v1';
const argv = process.argv.slice(2), opt = name => { const at = argv.indexOf('--' + name); return at < 0 ? null : argv[at + 1]; };
const assert = (ok, message) => { if (!ok) throw Error(message); };
assert(opt('root') === ROOT && opt('run') === RUN, 'Explicit actual --root/--run required');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(key => [key, canonical(x[key])])) : x;
const sha = x => createHash('sha256').update(x).digest('hex');
const hash = x => sha(JSON.stringify(canonical(x)) ?? 'undefined');
const same = (a, b) => hash(a) === hash(b), norm = x => String(x ?? '').replace(/\s+/g, ' ').trim();
const plain = path => typeof path === 'string' && !isAbsolute(path) && !path.includes('\\')
  && !path.split('/').some(part => ['', '.', '..'].includes(part));
const safe = (path, ownResearch = false) => {
  assert(plain(path) && (!ownResearch || path.startsWith(`research/${RUN}-`)), 'Unsafe or foreign path: ' + path);
  const absolute = resolve(ROOT, path);
  assert(absolute.startsWith(ROOT + '/'), 'Path escapes actual repository');
  for (let part = absolute; ; part = dirname(part)) {
    const stat = lstatSync(part);
    assert(!stat.isSymbolicLink() && (part === absolute ? stat.isFile() : stat.isDirectory()), 'Nonregular/symlink evidence: ' + path);
    if (dirname(part) === part) break;
  }
  return absolute;
};
const output = opt('output-dir'), inventoryPath = opt('inventory');
assert(plain(output) && output.split('/').length === 2 && output.startsWith(`research/${RUN}-`) && !existsSync(resolve(ROOT, output)), 'Fresh own-run output directory required');
const cache = new Map();
function read(path) {
  if (!cache.has(path)) { const raw = readFileSync(safe(path)); cache.set(path, { raw, text: raw.toString('utf8'), sha256: sha(raw) }); }
  return cache.get(path);
}
const json = path => JSON.parse(read(path).text), ref = path => ({ path, sha256: read(path).sha256 });
safe(inventoryPath, true);
const inventory = json(inventoryPath);
assert(inventory.version === 1 && inventory.run === RUN && inventory.root === ROOT && inventory.mode === 'read-only-owner-evidence-inventory', 'Wrong actual native inventory');
const configPath = relative(ROOT, join(dirname(fileURLToPath(import.meta.url)), 'actual-excerpt-config.json'));
const config = json(configPath);
read('tools/step3-owner-stabilized-source-identical-continuity.mjs');
assert(config.run === RUN && config.entries.length === 8, 'Wrong approved eight-entry excerpt config');
const generated = new Map(), archived = new Map();
function put(name, value) {
  const path = `${output}/${name}`;
  const raw = Buffer.isBuffer(value) ? value : Buffer.from(JSON.stringify(value, null, 2) + '\n');
  if (generated.has(path)) assert(generated.get(path).equals(raw), 'Conflicting generated archive path');
  generated.set(path, raw); return { path, sha256: sha(raw) };
}
function archive(path, name) {
  if (!archived.has(path)) archived.set(path, put('archives/' + name, read(path).raw));
  return archived.get(path);
}
const successful = (r, batch) => r.run === RUN && r.role === 'alpha' && r.label === `3a-batch-${batch}`
  && Number.isInteger(r.attempt) && r.attempt >= 1 && r.evidence_tag === `.attempt-${r.attempt}` && r.ok === true
  && r.exit_code === 0 && r.process_exit_code === 0 && r.timed_out !== true
  && r.covers?.map(String).includes(String(batch)) && r.terminal_summary?.task_completed === true
  && r.terminal_summary?.task_aborted === false && r.terminal_summary?.final_response_present === true
  && typeof r.session_id === 'string' && r.session_id.length > 0
  && Number.isFinite(Date.parse(r.started_at)) && Number.isFinite(Date.parse(r.ended_at)) && Date.parse(r.ended_at) >= Date.parse(r.started_at);
function review(b, id, obligation, spec, verdicts, proofRequired = true) {
  const resultPath = `research/${RUN}-dispatch/alpha-3a-batch-${b}.result.json`, result = json(resultPath);
  assert(successful(result, b), 'Actual current native review incomplete');
  const immutable = `research/${RUN}-dispatch/alpha-3a-batch-${b}${result.evidence_tag}.result.json`;
  assert(read(immutable).raw.equals(read(resultPath).raw), 'Stable result differs from immutable attempt');
  const reportPath = `research/${RUN}-alpha-batch-${b}-3a.md`, originalAssignmentPath = `research/${RUN}-alpha-batch-${b}-3a-order.task.md`;
  assert(read(reportPath).text.includes(spec.report_excerpt) && spec.report_excerpt.trim().length >= 80,
    'Actual specific report excerpt absent');
  let assignmentPath = originalAssignmentPath, assignmentContext = {};
  if (!read(originalAssignmentPath).text.includes(id)) {
    assignmentPath = `research/${RUN}-dispatch/alpha-3a-batch-${b}${result.evidence_tag}.prompt.md`;
    assert(typeof result.prompt === 'string' && [assignmentPath, resolve(ROOT, assignmentPath)].includes(result.prompt)
      && read(assignmentPath).text.includes(id), 'Neither static task nor authenticated actual native dispatch prompt names the item');
    assignmentContext = { assignment_kind: 'native-dispatch-prompt', original_assignment: ref(originalAssignmentPath) };
  }
  const decisionsPath = `research/${RUN}-alpha-batch-${b}-3a-decisions.json`, doc = json(decisionsPath);
  assert(doc.version === 1 && doc.group === `batch-${b}` && (!Object.hasOwn(doc, 'run') || doc.run === RUN), 'Wrong native decision document identity');
  const matches = doc.decisions.filter(d => d.id === id && d.obligation === obligation);
  assert(matches.length === 1 && verdicts.includes(matches[0].verdict) && matches[0].repair_confidence === 1, 'Native actual decision not supported acceptance');
  const decision = matches[0], originalDoc = archive(decisionsPath, `native-b${b}-decisions-before-stamp.json`);
  let decisionArchive = originalDoc;
  if (!Object.hasOwn(doc, 'run')) decisionArchive = put(`bindings/ROOT-derived-${encodeURIComponent(obligation)}-accepted.json`, {
    run: RUN, decisions: [decision], owner_archive_provenance: { root_derived: true,
      original_document: originalDoc, original_group: doc.group,
      reason_missing_run_context: 'Original native version1 decision document omits top-level run. ROOT binds its exact unchanged decision to the actual run-local group/path, genuine successful current native result, assignment and report; this wrapper is derived binding only, never original native output or new mathematical coverage.',
      native_result: ref(resultPath), native_assignment: ref(assignmentPath), native_report: ref(reportPath) }
  });
  const sourcePath = `items/${id}.md`, source = read(sourcePath), parsed = splitFrontmatter(source.text);
  const steps = numberedProofSteps(parsed.body).map(({id, claim}) => ({id, claim}));
  assert(!proofRequired || steps.length > 0, 'Actual accepted full proof missing');
  const witness = { version: 1, run: RUN, id, obligation, session_id: result.session_id,
    accepted_decision_sha256: hash(decision), native_result: ref(resultPath), native_report: ref(reportPath),
    mathematical_acceptance_source: 'actual-native-review', root_binding_only: true,
    report_excerpt: spec.report_excerpt, source_raw_sha256: source.sha256, proof_steps: steps, review_basis: spec.review_basis };
  if (!proofRequired) { witness.interface_section = 'Definition'; witness.interface_text = sectionText(parsed.body, 'Definition'); assert(witness.interface_text, 'Complete actual producer Definition missing'); }
  if (spec.original_report) {
    // Preserve original mathematical reading separately from the fresh
    // attribution acceptance; never claim a fresh mathematical reread.
    assert(read(spec.original_report).text.includes(spec.report_excerpt) && read(reportPath).text.includes(spec.current_acceptance_excerpt), 'Original/current actual review excerpts do not match');
    const originalResult = json(spec.original_result);
    assert(successful(originalResult, b), 'Original full-proof native review result is not genuine complete success');
    const oldSource = splitFrontmatter(read(spec.original_source_archive).text);
    assert(oldSource.body === parsed.body, 'Current mathematical body differs from actual original source archive');
    witness.proof_review_provenance = { basis: spec.review_basis,
      original_native_report: ref(spec.original_report), original_native_result: ref(spec.original_result),
      original_source_archive: ref(spec.original_source_archive), original_session_id: originalResult.session_id,
      original_full_proof_excerpt: spec.report_excerpt, current_focused_acceptance_excerpt: spec.current_acceptance_excerpt,
      explanation: 'The current session accepts the actual attribution repair and verifies unchanged complete mathematical body. The concrete original proof reading remains historical original native coverage, not a new full-proof reread claimed by this continuation.' };
  }
  archive(sourcePath, `${id}.current-before.md`);
  archive(resultPath, `native-b${b}-stable-result.json`); archive(immutable, `native-b${b}-attempt-${result.attempt}-result.json`);
  archive(reportPath, `native-b${b}-report.md`);
  archive(originalAssignmentPath, `native-b${b}-original-static-assignment.md`);
  archive(assignmentPath, assignmentPath === originalAssignmentPath ? `native-b${b}-original-static-assignment.md` : `native-b${b}-actual-attempt-${result.attempt}-prompt.md`);
  return { result, decision, source, parsed, native_review: { result: ref(resultPath), immutable_result: ref(immutable),
    report: ref(reportPath), assignment: ref(assignmentPath), decisions: decisionArchive,
    ...assignmentContext, obligation, decision_sha256: hash(decision), full_proof_review: put(`bindings/${id}.actual-native-review-binding.json`, witness) } };
}
function retained(oldEntry, current) {
  const before = oldEntry.risk_review, after = current.risk_review;
  if (!before || !after || after.status !== 'complete' || !String(after.notes ?? '').trim()) return false;
  const oldHistory = oldEntry.risk_review_history ?? [], history = current.risk_review_history ?? [];
  if (!Array.isArray(oldHistory) || !Array.isArray(history) || !oldHistory.every((x,i) => same(x, history[i]))) return false;
  const {notes: a, ...restA} = before, {notes: b, ...restB} = after;
  return same(before,after) || same(after.prior_review,before) || history.some(x=>same(x,before))
    || same(restA,restB) && typeof a === 'string' && typeof b === 'string' && b.startsWith(a);
}
const proposed = [], holds = [];
for (const spec of config.entries) {
  const b = spec.batch, id = spec.id, obligation = `post-reader:${b}:${id}`;
  try {
    const groups = inventory.groups.filter(g => g.group === `batch-${b}`); assert(groups.length === 1, 'Actual group absent/ambiguous');
    const rows = groups[0].targets.filter(r => r.obligation === obligation); assert(rows.length === 1, 'Actual owed target absent/ambiguous');
    const row = rows[0], target = row.check_target ?? row.target;
    const detail = row.decisions?.find(d => d.decision?.obligation === obligation);
    assert(detail && !detail.inventory_error && detail.decision.verdict === 'accepted_repair'
      && detail.accepted_repair_comparison?.differs_beyond_native_risk_review_exception === true, 'No current supported beyond-risk accepted target');
    assert(target.stabilized === true && target.route === 'touched' && !target.direct && typeof target.added === 'boolean'
      && target.batch === b && target.id === id && row.check_target_sha256 === hash(target), 'Target not exact native stabilized check target');
    const snapPath = `research/${RUN}-step3-hash-${b}-pre-3a.json`, snap = json(snapPath);
    const before = snap.hashes?.[id], current = detail.current_carrier;
    assert(snap.version === 2 && snap.run === RUN && String(snap.batch) === b && snap.label === 'pre-3a' && snap.manifest.includes(id)
      && same(before, detail.native_pre_post?.post_carrier) && before.item_sha256 === current?.item_sha256
      && before.manifest_sha256 === current.manifest_sha256 && detail.current_carrier_sha256 === hash(current), 'Actual raw source/manifest pre3a continuity does not hold');
    const readerPath = `research/${RUN}-step3-hash-${b}-post.json`, reader = json(readerPath);
    const scopePath = `research/${RUN}-step3-scope-${b}.json`, scope = json(scopePath);
    assert(reader.version === 2 && reader.run === RUN && reader.label === 'post' && String(reader.batch) === b
      && scope.version === 2 && scope.run === RUN && String(scope.batch) === b
      && !scope.touched.includes(id) && !(scope.pages_touched??[]).includes(id)
      && !same(reader.hashes?.[id], before) && target.added === !reader.manifest.includes(id), 'Actual native stabilized delta disagrees');
    const oldPath = `research/${RUN}-ROOT-current-alpha-followup-${b}/05-${RUN}-batch-${b}.proof-contracts.json`;
    const original = json(oldPath).contracts?.[id]; assert(original && hash(original) === before.contract_sha256, 'HOLD: genuine full old contract entry does not authenticate to pre3a');
    const contractPath = `research/${RUN}-batch-${b}.proof-contracts.json`, contract = json(contractPath).contracts?.[id];
    const manifestPath = `research/${RUN}-batch-${b}.pages.json`, m = json(manifestPath), pages = Array.isArray(m)?m:m.pages;
    const entries = pages.flatMap(p => (p.items??[]).filter(x=>x?.id===id).map(x=>({...x,__step4_page_id:p.id})));
    assert(entries.length===1 && hash(entries[0])===current.manifest_sha256 && hash(contract)===current.contract_sha256, 'Current metadata no longer equals actual inventory');
    const actual = review(b,id,obligation,spec,['accepted_repair']);
    assert(same(actual.decision,detail.decision) && actual.source.sha256===before.item_sha256
      && same(entries[0].deps??[],yaml().parse(actual.parsed.fm)?.deps??[]), 'Actual native decision/source/deps changed since inventory');
    assert(retained(original,contract), 'HOLD: unsupported old risk-review/history retention');
    const fields = ['risk_review','risk_review_history'].filter(k=>!same(original[k],contract[k]));
    const a = structuredClone(original), z = structuredClone(contract); for(const k of fields){delete a[k];delete z[k];}
    const refreshes=[];
    if (b==='85') {
      const supplier=config.supplier_review, sourceId=supplier.id;
      const beforeCites=(a.citations??[]).filter(x=>x.fact==='F3'&&x.source===sourceId&&x.source_section==='Definition');
      const afterCites=(z.citations??[]).filter(x=>x.fact==='F3'&&x.source===sourceId&&x.source_section==='Definition');
      assert(beforeCites.length===1&&afterCites.length===1,'Actual85 unique supplier citation absent');
      const producer=review('85',sourceId,`post-reader:85:${sourceId}`,supplier,['accepted_repair','amended_repair'],false);
      assert(producer.result.session_id===actual.result.session_id && norm(afterCites[0].quote)===norm(sectionText(producer.parsed.body,'Definition'))
        && (yaml().parse(actual.parsed.fm)?.deps??[]).includes(sourceId), 'Actual producer/current full quote not same-session reviewed logical supplier');
      const supplierRows=pages.flatMap(p=>(p.items??[]).filter(x=>x?.id===sourceId));assert(supplierRows.length===1,'Actual supplier ownership absent/ambiguous');
      const sourceRef=archive(`items/${sourceId}.md`,`${sourceId}.current-before.md`);
      refreshes.push({fact:'F3',source:sourceId,source_section:'Definition',producer_batch:'85',supplier_source:sourceRef,native_review:producer.native_review});
      delete beforeCites[0].quote;delete afterCites[0].quote;
    }
    assert(same(a,z),'HOLD: actual old/current contracts contain an unlisted change');
    let added=null;
    if(target.added){
      assert(b==='77','No approved real added-helper history configured for this item');
      const birthPath=`research/${RUN}-ROOT-native77-completed-origin-observations/ROOT-origin-observations.json`,birth=json(birthPath);
      const creatorPath=`research/${RUN}-dispatch/alpha-3a-batch-77.attempt-1.result.json`,creator=json(creatorPath);
      assert(successful(creator,'77')&&creator.session_id!==actual.result.session_id&&Date.parse(creator.ended_at)<Date.parse(actual.result.started_at),'Creator/reviewer history unsupported');
      const find=path=>{const xs=birth.observations.filter(x=>x.path===path);assert(xs.length===1,'Birth observation absent/ambiguous');return xs[0];};
      const source=find(`items/${id}.md`),report=find(`research/${RUN}-alpha-batch-77-3a.md`),decisions=find(`research/${RUN}-alpha-batch-77-3a-decisions.json`),result=find(creatorPath);
      assert(birth.run===RUN&&birth.observed_by==='root'&&birth.actual_creator.attempt===creator.attempt&&birth.actual_creator.label===creator.label
        &&birth.actual_creator.ended_at===creator.ended_at&&source.raw_sha256===before.item_sha256&&read(source.archive).sha256===before.item_sha256
        &&read(report.archive).sha256===report.raw_sha256&&read(decisions.archive).sha256===decisions.raw_sha256
        &&read(creatorPath).sha256===result.raw_sha256&&!reader.manifest.includes(id)&&!Object.hasOwn(reader.hashes,id),'Actual birth/source/result archives fail precise guards');
      assert(typeof actual.decision.causal_subject==='string'&&actual.decision.same_defect_as&&actual.decision.defect_ids?.length,'Actual helper causal references missing');
      const creatorDoc=json(decisions.archive);
      assert(creatorDoc.group==='batch-77'&&(!Object.hasOwn(creatorDoc,'run')||creatorDoc.run===RUN),'Actual creator decisions archive identity differs');
      added={reader_post:ref(readerPath),creator_result:ref(creatorPath),creator_report:ref(report.archive),creator_decisions:ref(decisions.archive),
        birth_observations:ref(birthPath),creator_source:ref(source.archive),creation_certification:{path:`research/${RUN}-step3-auditor-certifications.json`,required_current_native_certification:true}};
    }
    archive(contractPath,`current-b${b}-contracts-before.json`);archive(manifestPath,`current-b${b}-manifest-before.json`);
    archive(oldPath,`original-b${b}-full-pre3a-contract-preimage.json`);
    proposed.push({version:1,policy:POLICY,run:RUN,id,obligation,target_sha256:hash(target),stabilized_input_carrier_sha256:hash(before),
      current_carrier_sha256:hash(current),stabilized_input_snapshot:ref(snapPath),input_contract_preimage:ref(oldPath),allowed_review_fields:fields,
      supplier_quote_refreshes:refreshes,independent_execution_coverage_adopted:false,native_review:actual.native_review,added_helper_review:added});
  }catch(cause){holds.push({batch:b,id,obligation,reason:String(cause?.message??cause)});}
}
const ownerPath=`research/${RUN}-step3-owner-repair-evidence.json`;
const ownerBefore=existsSync(resolve(ROOT,ownerPath))?archive(ownerPath,'canonical-owner-evidence-untouched-before.json'):null;
put('installed-policy-at-preparation.mjs',read('tools/step3-owner-stabilized-source-identical-continuity.mjs').raw);
put('input-inventory.json',read(inventoryPath).raw);put('approved-excerpts.json',read(configPath).raw);
put('proposed-eight-fragment.json',{version:1,run:RUN,stabilized_source_identical_acceptance_continuities:proposed});
put('report.json',{version:1,run:RUN,status:'PROPOSED research fragment only; no canonical merge, native validation, gate or new coverage',
  expected_items:config.entries.map(({batch,id})=>({batch,id})),proposed_count:proposed.length,holds,
  untouched_canonical_owner_evidence_before:ownerBefore,all_input_guards:[...cache].map(([path,x])=>({path,sha256:x.sha256})),
  certification:'Typed native gate requirement only; certificate is neither assumed nor generated',native_strict_validation:'NOT RUN: actual runtime policy/native battery remains owed'});
for(const[path,x]of cache)assert(readFileSync(safe(path)).equals(x.raw),'Input changed during preparation: '+path);
assert(!existsSync(resolve(ROOT,output)),'Output appeared concurrently');mkdirSync(resolve(ROOT,output));
for(const[path,raw]of generated){mkdirSync(dirname(resolve(ROOT,path)),{recursive:true});writeFileSync(resolve(ROOT,path),raw,{flag:'wx'});}
console.log(JSON.stringify({output,proposed:proposed.length,holds:holds.length,canonical_changes:false,native_checks:false}));
