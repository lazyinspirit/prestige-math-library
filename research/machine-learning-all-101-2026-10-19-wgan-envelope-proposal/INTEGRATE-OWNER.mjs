#!/usr/bin/env node
// Root-reviewed integration only. This file has NOT been executed by its author.
// node research/...-wgan-envelope-proposal/INTEGRATE-OWNER.mjs --apply
// No readiness, itemHash, scope-binding, native review, gate, state, or git operations.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const RUN = 'machine-learning-all-101-2026-10-19';
const relative = p => path.relative(ROOT, p);
const absolute = p => path.resolve(ROOT, p);
const read = p => fs.readFileSync(absolute(p), 'utf8');
const json = p => JSON.parse(read(p));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const sha = p => hash(fs.readFileSync(absolute(p)));
const assert = (condition, message) => { if (!condition) throw Error(message); };
const stable = value => JSON.stringify(value && typeof value === 'object'
  ? Array.isArray(value) ? value.map(v => JSON.parse(stable(v)))
    : Object.fromEntries(Object.keys(value).sort().map(k => [k, JSON.parse(stable(value[k]))])) : value);
const same = (a,b) => stable(a) === stable(b);
const encode = value => JSON.stringify(value, null, 2) + '\n';
const PLAN = JSON.parse(fs.readFileSync(path.join(HERE, 'INTEGRATION-PLAN.json'), 'utf8'));
const META = json(PLAN.metadata.path);
const A = 'integral-probability-metrics-and-wasserstein-gans';
const B = A + '-examples';
const canonicalPath = 'research/plan-machine-learning-track.md';
const planPath = 'research/plan-spec.json';
const normalizeRow = row => {
  const copy = structuredClone(row);
  if (typeof copy.description === 'string') copy.description = copy.description.replace(/SHA-256 [a-f0-9]{64}/g, 'SHA-256 <CURRENT-ROOT-DIGEST>');
  return copy;
};
// Own rows compare semantically, allowing only root's controlling-digest refresh.
function validateOwnRows(text) {
  const doc = JSON.parse(text);
  for (const expected of META.plan_row_guards) {
    const rows = doc.pages.filter(p => p.id === expected.id);
    assert(rows.length === 1, `Expected one own plan row: ${expected.id}`);
    assert(same(normalizeRow(rows[0]), normalizeRow(expected)), `Own plan row changed substantively: ${expected.id}`);
  }
  return doc;
}
function replaceStanza(text) {
  const before = META.canonical_stanza_guard;
  assert(text.split(before).length === 2, 'Current exact ML56 stanza guard failed');
  const candidate = read(PLAN.canonical_candidate.path).replace(/\s*$/, '\n');
  const at = text.indexOf(before);
  const result = text.slice(0, at) + candidate + text.slice(at + before.length);
  assert(result.slice(0,at) === text.slice(0,at), 'Canonical prefix preservation failed');
  assert(result.slice(at + candidate.length) === text.slice(at + before.length), 'Canonical suffix preservation failed');
  return result;
}
// Locate exact object bytes while respecting JSON quoted strings and escaped quotes.
// Replacement touches only the matching A-row object, not foreign rows/formatting.
function ownRowSpan(text, id) {
  const starts = [], matches = []; let quoted = false, escaped = false;
  for (let i=0; i<text.length; i++) {
    const c = text[i];
    if (quoted) { if (escaped) escaped=false; else if (c==='\\') escaped=true; else if(c==='"') quoted=false; continue; }
    if(c==='"') { quoted=true; continue; }
    if(c==='{') starts.push(i);
    if(c==='}') {
      const start = starts.pop(); assert(start !== undefined, 'Unbalanced plan JSON');
      const value = JSON.parse(text.slice(start, i+1));
      if(value?.id === id) matches.push({start,end:i+1,value});
    }
  }
  assert(matches.length===1, `Expected one textual own plan object ${id}`);
  return matches[0];
}
function replaceOwnRow(text, canonicalSha) {
  const doc = validateOwnRows(text), span = ownRowSpan(text,A);
  assert(same(doc.pages.find(p=>p.id===A),span.value), 'Text span is not own pages row');
  const current = span.value, next = structuredClone(current);
  const oldBody = META.canonical_stanza_guard.replace(/^###[^\n]*\n\n/, '').trim();
  const newBody = read(PLAN.canonical_candidate.path).replace(/^###[^\n]*\n\n/, '').trim();
  assert(current.description.split(oldBody).length===2, 'Own plan prose guard failed');
  next.description = current.description.replace(oldBody,newBody);
  // This touches the one owned A-row control only; root refreshes all other controls.
  assert((next.description.match(/SHA-256 [a-f0-9]{64}/g)??[]).length===1, 'Expected one own description SHA control');
  next.description = next.description.replace(/SHA-256 [a-f0-9]{64}/, `SHA-256 ${canonicalSha}`);
  next.requires = META.requires_proposal.A_after;
  const lineStart = text.lastIndexOf('\n',span.start)+1;
  const indentation = text.slice(lineStart,span.start).match(/^\s*$/)?.[0] ?? '';
  const replacement = JSON.stringify(next,null,2).replace(/\n/g,'\n'+indentation);
  const result = text.slice(0,span.start)+replacement+text.slice(span.end);
  assert(result.slice(0,span.start)===text.slice(0,span.start), 'Foreign plan prefix changed');
  assert(result.slice(span.start+replacement.length)===text.slice(span.end), 'Foreign plan suffix changed');
  const afterDoc = JSON.parse(result);
  assert(same(afterDoc.pages.filter(p=>p.id!==A),doc.pages.filter(p=>p.id!==A)), 'Foreign plan rows changed');
  return result;
}
function statement(text) { return text.match(/\n## Statement\n([\s\S]*?)\n## Statement references/)?.[1]; }
function validateAll() {
  assert(sha(PLAN.repair_report.path)===PLAN.repair_report.sha256, 'Accepted repair report bytes changed');
  for(const [p,digest] of Object.entries(PLAN.proposal_hashes)) assert(sha(p)===digest, `Proposal bytes changed: ${p}`);
  for(const [p,digest] of Object.entries(PLAN.current_guards)) assert(sha(p)===digest, `Current scoped input changed: ${p}`);
  for(const p of PLAN.new_paths) assert(!fs.existsSync(absolute(p)), `New item path already exists: ${p}`);
  const state = json(`.autopilot/${RUN}/state.json`);
  const own = state.dispatches['1-scaffold:batch-63'];
  assert(own?.endedAt && own.lastExitOk===true, 'Native63 must be terminal successful');
  assert(!Object.values(state.dispatches).some(d=>d.stage==='1-scaffold' && d.role==='beta' && !d.endedAt), 'A native author has reopened; preserve writer ownership');
  replaceStanza(read(canonicalPath));
  validateOwnRows(read(planPath));
  const manifest = json(PLAN.manifest_candidate.path);
  assert(same(manifest.map(p=>p.id),[A,B]), 'Candidate page identities changed');
  assert(manifest.flatMap(p=>p.items).length===6, 'Candidate inventory must contain six items');
  assert(same(manifest[0].requires,META.requires_proposal.A_after), 'Candidate A requires mismatch');
  assert(same(manifest[1].requires,[A]), 'Candidate B requires changed');
  for(const id of ['thm-wgan-ideal-critic-generator-gradient','cor-wgan-loss-differentiable-almost-everywhere-under-choice'])
    assert(statement(read(`items/${id}.md`))===statement(read(PLAN.source_candidates[id])), `Original Statement bytes changed: ${id}`);
  const existingRows = json(META.cross_batch_append_guard.path);
  assert(same(existingRows,META.cross_batch_append_guard.before), 'Sidecar exact row guards failed');
  const newRows = json(PLAN.sidecar_candidate.path);
  assert(same(newRows,[...existingRows,...META.cross_batch_append_guard.append]), 'Sidecar is not exact guarded append');
  const beforeCoverage=json(`research/${RUN}-batch-63.coverage.json`), afterCoverage=json(PLAN.coverage_candidate.path);
  assert(beforeCoverage.pages.length===afterCoverage.pages.length, 'Coverage page count changed');
  for(let i=0;i<beforeCoverage.pages.length;i++) {
    assert(beforeCoverage.pages[i].page===afterCoverage.pages[i].page, 'Coverage page identity changed');
    const beforeSources=beforeCoverage.pages[i].sources, afterSources=afterCoverage.pages[i].sources;
    assert(beforeSources.length===afterSources.length,'Native coverage source count changed');
    for(let j=0;j<beforeSources.length;j++) {
      const before={...beforeSources[j]}, after={...afterSources[j]}; delete before.contents; delete after.contents;
      assert(same(before,after),'Native source/fetch/recovery evidence changed');
    }
  }
  const beforeEvidence=json(`research/${RUN}-batch-63.source-evidence.json`), afterEvidence=json(PLAN.source_evidence_candidate.path);
  delete afterEvidence.owner_local_reconciliation;
  assert(same(beforeEvidence,afterEvidence),'Original native source evidence changed');
  const contracts=json(PLAN.contract_candidate.path);
  assert(contracts.scope.length===6 && Object.keys(contracts.contracts).length===6,'Six scoped contracts required');
  // Bind current observed used-supplier bytes; no new published whole-proof audit is claimed.
  for(const [p,digest] of Object.entries(PLAN.used_supplier_guards)) assert(sha(p)===digest, `Used supplier bytes changed: ${p}`);
}
function atomicCasWrite(p, before, after) {
  const target=absolute(p), present=fs.existsSync(target);
  assert(before===null ? !present : present && fs.readFileSync(target,'utf8')===before, `Last-moment compare guard failed: ${p}`);
  fs.mkdirSync(path.dirname(target),{recursive:true});
  const temporary=target+`.wgan-owner-${process.pid}.tmp`;
  assert(!fs.existsSync(temporary), `Temporary path exists: ${temporary}`);
  fs.writeFileSync(temporary,after,{flag:'wx'});
  try {
    assert(before===null ? !fs.existsSync(target) : fs.readFileSync(target,'utf8')===before, `Input raced before rename: ${p}`);
    fs.renameSync(temporary,target);
  } finally { if(fs.existsSync(temporary)) fs.unlinkSync(temporary); }
}
assert(process.argv.length===3 && process.argv[2]==='--apply', 'Root-only integration requires --apply; review this script and INTEGRATION-PLAN.json first. No dry-run execution is needed.');
validateAll(); // ALL guards/candidate structures prevalidate before any archive or mutation.
const stamp = new Date().toISOString().replace(/[:.]/g,'-');
const archivePath = `research/${RUN}-owner-wgan-integration-${stamp}`;
assert(!fs.existsSync(absolute(archivePath)), 'Archive directory exists');
const reportPath = `${archivePath}/owner-acceptance.json`;
const integration = {
  version:1,run:RUN,batch:'63',at:new Date().toISOString(),authority:'Executed by root after explicit complete cycle1 mathematical acceptance and integration-script review.',
  mathematical_acceptance:'Root explicitly read all four staged sources, independently checked both full refutations, hats/density normalization/local constants/critic sign/derivative mismatch and the rational-supremum theorem proof; root accepted cycle1 mathematics. This integration adds no native review or gate credit.',
  repair_report:PLAN.repair_report,script:{path:relative(fileURLToPath(import.meta.url)),sha256:hash(fs.readFileSync(fileURLToPath(import.meta.url)))},integration_plan:{path:relative(path.join(HERE,'INTEGRATION-PLAN.json')),sha256:hash(fs.readFileSync(path.join(HERE,'INTEGRATION-PLAN.json')))},
  native_history_preserved:true,readiness_written:false,item_hashes_computed:false,gates_attempted:false,scope_bindings_refreshed:false,
  status:'integration-in-progress',archive:archivePath,mutations:[],pending_root_work:['Refresh remaining controlling canonical SHA pointers as part of root111-control pass. Only owned A description control is refreshed here.','Refresh actual drift/source/evidence/scope-ledger and home bindings for approved new inventory/requirements.','Compute actual current hashes and ordinary readiness in dependency order. Page-requirement changes invalidate actual page-context receipts, including otherwise unchanged native source files.','Complete later required independent native reviews and gates; this report is no substitute.'],
};
fs.mkdirSync(absolute(archivePath),{recursive:true});
const plannedWrites = PLAN.writes.map(w=>({target:w.target,after:read(w.candidate),before:fs.existsSync(absolute(w.target))?read(w.target):null}));
// Archive every initial target, plus immutable native observations and own shared-row guards.
for(const w of plannedWrites) if(w.before!==null) {
  const p=absolute(`${archivePath}/before/${w.target}`);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,w.before,{flag:'wx'});
}
for(const p of [canonicalPath,planPath]) {
  const target=absolute(`${archivePath}/before/${p}`);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,read(p),{flag:'wx'});
}
fs.writeFileSync(absolute(`${archivePath}/current-guards.json`),encode(PLAN.current_guards),{flag:'wx'});
fs.writeFileSync(absolute(reportPath),encode(integration),{flag:'wx'});
try {
  // Sources before local manifest/metadata/consumers. Only the listed owned paths mutate.
  for(const w of plannedWrites) {
    atomicCasWrite(w.target,w.before,w.after);
    integration.mutations.push({path:w.target,before_sha256:w.before===null?null:hash(w.before),after_sha256:hash(w.after),before_archive:w.before===null?null:`${archivePath}/before/${w.target}`});
  }
  // Re-read shared files NOW. Foreign canonical edits since initial validation are kept.
  // Root must serialize the tiny read/compare/rename windows with its other shared writes;
  // filesystem rename is atomic but is not an OS-level conditional multi-file transaction.
  const canonicalBefore=read(canonicalPath), canonicalAfter=replaceStanza(canonicalBefore);
  fs.writeFileSync(absolute(`${archivePath}/canonical-at-cas.before.md`),canonicalBefore,{flag:'wx'});
  atomicCasWrite(canonicalPath,canonicalBefore,canonicalAfter);
  integration.mutations.push({path:canonicalPath,before_sha256:hash(canonicalBefore),after_sha256:hash(canonicalAfter),before_archive:`${archivePath}/canonical-at-cas.before.md`,foreign_prefix_suffix_bytes_preserved:true});
  const planBefore=read(planPath),planAfter=replaceOwnRow(planBefore,hash(canonicalAfter));
  assert(read(canonicalPath)===canonicalAfter,'Canonical changed before own description binding; root must reconcile, do not overwrite');
  fs.writeFileSync(absolute(`${archivePath}/plan-at-row-cas.before.json`),planBefore,{flag:'wx'});
  atomicCasWrite(planPath,planBefore,planAfter);
  integration.mutations.push({path:planPath,before_sha256:hash(planBefore),after_sha256:hash(planAfter),before_archive:`${archivePath}/plan-at-row-cas.before.json`,own_page_row:A,all_foreign_row_and_outside_object_bytes_preserved:true});
  for(const [p,digest] of Object.entries(PLAN.immutable_native_guards)) assert(sha(p)===digest,`Native history/receipt changed during integration: ${p}`);
  integration.status='approved-mathematics-integrated-current-bindings-and-readiness-pending-root';
  integration.canonical_after_sha256=hash(canonicalAfter);
  integration.finished_at=new Date().toISOString();
  fs.writeFileSync(absolute(reportPath),encode(integration));
  process.stdout.write(encode({report:reportPath,archive:archivePath,status:integration.status,mutations:integration.mutations.length,canonical_sha256:integration.canonical_after_sha256}));
} catch(error) {
  integration.status='integration-stopped-root-recovery-required';integration.error=String(error?.stack??error);integration.finished_at=new Date().toISOString();
  fs.writeFileSync(absolute(reportPath),encode(integration));
  // Never auto-rollback shared files: a foreign owner may have made newer changes.
  throw error;
}
