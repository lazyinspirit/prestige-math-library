#!/usr/bin/env node
// Selected immutable mathematical context from physics; never a publication or
// a transfer of native execution, audit, authoring or frontier ownership.
import { readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { yaml, split } from './pathway-lib.mjs';
const ID = /^(def|alg|thm|lem|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*$/;
const KINDS = {def:'definition',alg:'algorithm',thm:'theorem',lem:'lemma',prop:'proposition',cor:'corollary',ex:'example',cex:'counterexample',fs:'false-statement',rem:'remark'};
export const rawHash = bytes => createHash('sha256').update(bytes).digest('hex');
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])])) : value;
const fingerprint = value => rawHash(JSON.stringify(stable(value)));
const fail = message => { throw Error(`physics mathematics context: ${message}`); };
const present = path => { try { lstatSync(path); return true; } catch (e) { if (e.code === 'ENOENT') return false; throw e; } };
function regular(root, path) {
  if (typeof path !== 'string' || path.startsWith('/') || path.split('/').some(p => !p || p === '.' || p === '..')) fail('unsafe path');
  let current = root;
  for (const part of path.split('/')) { current = join(current, part); if (lstatSync(current).isSymbolicLink()) fail(`symlink: ${path}`); }
  if (!lstatSync(current).isFile()) fail(`not a regular file: ${path}`);
  return current;
}
const bytes = (root, path) => readFileSync(regular(root, path));
const json = (root, path) => JSON.parse(bytes(root, path));
const git = (root, args) => execFileSync('git', ['-C', root, '--no-replace-objects', ...args], { maxBuffer: 32 * 1024 * 1024 });
const sortedIds = values => {
  if (!Array.isArray(values) || !values.length || values.some(id => !ID.test(id)) || new Set(values).size !== values.length) fail('nonempty unique canonical IDs required');
  return [...values].sort();
};
function lists(fm, key) {
  const value = fm[key] ?? [];
  if (!Array.isArray(value) || value.some(id => typeof id !== 'string' || !(key==='aliases' ? Boolean(id.trim()) : ID.test(id))) || new Set(value).size !== value.length) fail(`invalid ${key} for ${fm.id}`);
  return value;
}
function item(root, path, id, physics) {
  const raw = bytes(root, path), {fm, body} = split(raw.toString('utf8')); const data = yaml().parse(fm);
  if (!data || data.id !== id || !ID.test(id) || data.kind !== KINDS[id.split('-')[0]]
    || data.status !== 'published' || data.domain === 'physics' || data.library === 'physics'
    || (physics && data.domain !== 'mathematics') || data.proved_here === false
    || data.external_dependency || lists(data, 'external_refs').length || data.physical_scope != null
    || data.empirical_result || (data.empirical_premises ?? []).length
    || Object.values(data.dependency_roles ?? {}).some(role => role !== 'mathematical-premise')) fail(`not an eligible published mathematical carrier: ${path}`);
  const deps = [...new Set([...lists(data, 'deps'), ...lists(data, 'justified_by')])].sort();
  if (physics && lists(data,'deps').some(dep=>data.dependency_roles?.[dep]!=='mathematical-premise')) fail(`missing mathematical dependency role: ${path}`);
  if (physics && lists(data, 'forward_refs').length) fail(`forward references require separate context, not supported: ${path}`);
  if (!body.trim() || !data.title?.trim()) fail(`incomplete carrier: ${path}`);
  return {raw, data, deps, path, sha256:rawHash(raw)};
}
function identities(root, ignored) {
  const map = new Map();
  // Project only identity fields: unrelated in-flight descriptive YAML must not
  // force broad validation. Duplicate or malformed identity fields fail closed.
  for (const name of readdirSync(join(root,'items')).filter(f => f.endsWith('.md'))) {
    const id = name.slice(0,-3); if (ignored.has(id)) continue;
    const {fm} = split(bytes(root, `items/${name}`).toString('utf8')); const lines = fm.split(/\r?\n/); const selected=[]; const seen=new Set();
    for (let i=0;i<lines.length;i++) {
      const match=lines[i].match(/^("(?:[^"\\]|\\.)*"|'(?:[^']|'')*'|[a-zA-Z_][a-zA-Z0-9_-]*)\s*:/); if (!match) continue;
      const key=Object.keys(yaml().parse(`${match[1]}: null`))[0]; if (!['id','aliases'].includes(key)) continue;
      if (seen.has(key)) fail(`duplicate identity field: items/${name}`); seen.add(key); selected.push(lines[i]);
      while(i+1<lines.length && !/^[^\s#-][^\n]*:/.test(lines[i+1])) selected.push(lines[++i]);
    }
    const data=yaml().parse(selected.join('\n')) ?? {};
    if (data.id !== id) fail(`noncanonical root identity: items/${name}`);
    for(const token of [id,...lists(data,'aliases')]) { const owners=map.get(token)??new Set();owners.add(id);map.set(token,owners); }
  }
  return map;
}
export function inspectSelection(root, run, selection, {installed=false}={}) {
  root=resolve(root); if (!/^[a-zA-Z0-9_-]+$/.test(run??'')) fail('invalid run');
  if (selection.version!==1) fail('invalid selection'); const entries=sortedIds(selection.entry_ids), expected=sortedIds(selection.expected_ids);
  const expectedSet=new Set(expected), imported=new Map(), boundaries=new Map(), visiting=new Set();
  function visit(id) {
    if (imported.has(id) || boundaries.has(id)) return;
    if (visiting.has(id)) fail(`dependency cycle: ${id}`);
    const target=`items/${id}.md`;
    if (!expectedSet.has(id) && present(join(root,target))) { const row=item(root,target,id,false); boundaries.set(id,{id,path:target,sha256:row.sha256}); return; }
    visiting.add(id);
    const source=`physics/items/${id}.md`, sourceItem=item(root,source,id,true);
    const commit=git(root,['log','-1','--format=%H','--',source]).toString().trim();
    if (!/^[a-f0-9]{40,64}$/.test(commit)) fail(`source is not Git-authenticated: ${id}`);
    git(root,['merge-base','--is-ancestor',commit,'HEAD']);
    if (!git(root,['show',`${commit}:${source}`]).equals(sourceItem.raw)) fail(`source differs from authenticated publication: ${id}`);
    for(const dep of sourceItem.deps) visit(dep);
    imported.set(id,{id,path:target,source_path:source,sha256:sourceItem.sha256,publication_commit:commit,kind:sourceItem.data.kind,aliases:lists(sourceItem.data,'aliases'),deps:sourceItem.deps,source_verification:sourceItem.data.verification??null});
    visiting.delete(id);
  }
  for(const id of entries) visit(id);
  if (JSON.stringify([...imported.keys()].sort())!==JSON.stringify(expected)) fail('actual missing-root closure differs from expected_ids');
  const identity=identities(root,installed?expectedSet:new Set()); const tokens=new Set();
  for(const row of imported.values()) {
    if(!installed && present(join(root,row.path))) fail(`destination collision: ${row.path}`);
    for(const token of [row.id,...row.aliases]) { if(tokens.has(token) || identity.has(token)) fail(`identity or alias collision: ${token}`);tokens.add(token); }
  }
  // These are prerequisite context, never any current or historical frontier.
  for(const name of readdirSync(join(root,'research')).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n))) {
    for(const page of json(root,`research/${name}`)) for(const row of page.items??[]) if(expectedSet.has(typeof row==='string'?row:row.id)) fail(`imported ID appears in frontier manifest: ${name}`);
  }
  const files=[...imported.values()].sort((a,b)=>a.id.localeCompare(b.id)); const boundary_files=[...boundaries.values()].sort((a,b)=>a.id.localeCompare(b.id));
  const context_sha256=fingerprint({files:files.map(({id,sha256,deps})=>({id,sha256,deps})),boundary_files});
  return {version:1,kind:'selected-physics-mathematics-context-inspection',run,entry_ids:entries,expected_ids:expected,context_sha256,files,boundary_files};
}
function researchPath(run,path) {
  if (typeof path!=='string' || !(path.startsWith(`research/${run}-`) || path.startsWith(`research/${run}/`)) || path.split('/').some(p=>p==='..'||p==='.')) fail('evidence must be run-owned research');
  return path;
}
function reviewEvidence(root, run, inspection, reviewPath, acceptancePath) {
  researchPath(run,reviewPath);researchPath(run,acceptancePath);
  const review=json(root,reviewPath), acceptance=json(root,acceptancePath);
  if(review.version!==1 || review.kind!=='focused-physics-mathematics-context-review' || review.run!==run
    || !/^\/root\/[^\s]+$/.test(review.reviewer??'') || review.context_sha256!==inspection.context_sha256
    || review.scope!=='full-supplier-proof-and-dependency-review' || !Number.isFinite(Date.parse(review.reviewed_at))
    || review.native_execution_coverage!==false || !Array.isArray(review.items) || !Array.isArray(review.evidence_files) || !review.evidence_files.length) fail('missing, invalid or stale focused review');
  const evidencePaths=new Set();
  for(const row of review.evidence_files) { researchPath(run,row.path);if(evidencePaths.has(row.path) || rawHash(bytes(root,row.path))!==row.sha256)fail('missing, duplicate or stale review evidence');evidencePaths.add(row.path); }
  const subjects=review.items.map(row=>row.id);
  if(new Set(subjects).size!==subjects.length || JSON.stringify(subjects.sort())!==JSON.stringify(inspection.expected_ids)) fail('focused review must cover exact imported closure');
  for(const file of inspection.files) {
    const row=review.items.find(row=>row.id===file.id);
    if(row.raw_sha256!==file.sha256 || row.verdict!=='pass' || row.dependency_review!=='pass'
      || (file.kind==='definition' ? row.definition_review : row.proof_review)!=='pass'
      || typeof row.evidence!=='string' || row.evidence.trim().length<40) fail(`unaccepted or stale supplier review: ${file.id}`);
  }
  const review_sha256=rawHash(bytes(root,reviewPath));
  if(acceptance.version!==1 || acceptance.kind!=='owner-accepted-physics-mathematics-context-review'
    || acceptance.run!==run || acceptance.authorized_by!=='owner' || acceptance.reviewer!=='/root'
    || acceptance.verdict!=='accepted' || acceptance.review_file!==reviewPath || acceptance.review_sha256!==review_sha256
    || acceptance.context_sha256!==inspection.context_sha256 || acceptance.native_execution_coverage!==false
    || !Number.isFinite(Date.parse(acceptance.accepted_at)) || Date.parse(acceptance.accepted_at)<Date.parse(review.reviewed_at)
    || typeof acceptance.reason!=='string' || acceptance.reason.trim().length<40) fail('missing, invalid or stale owner acceptance');
  return {review:{path:reviewPath,sha256:review_sha256},acceptance:{path:acceptancePath,sha256:rawHash(bytes(root,acceptancePath))}};
}
export function verifyContextReceiptHistory(root,receiptPath,{selectedIds=[]}={}) {
  root=resolve(root);const receipt=json(root,receiptPath); const expected=`research/${receipt.run}-physics-math-context-import.json`;
  if(receiptPath!==expected || receipt.version!==1 || receipt.kind!=='immutable-selected-physics-mathematics-context-import'
    || receipt.source_reference_root!=='physics' || !Number.isFinite(Date.parse(receipt.recorded_at))
    || receipt.external_context_only!==true || receipt.native_execution_coverage!==false) fail('invalid import receipt');
  if(selectedIds.some(id=>receipt.expected_ids.includes(id))) fail('external context cannot be a selected audit/authoring subject');
  const inspection=inspectSelection(root,receipt.run,{version:1,entry_ids:receipt.entry_ids,expected_ids:receipt.expected_ids},{installed:true});
  for(const field of ['context_sha256','files','boundary_files']) if(fingerprint(receipt[field])!==fingerprint(inspection[field])) fail(`stale receipt ${field}`);
  const evidence=reviewEvidence(root,receipt.run,inspection,receipt.review?.path,receipt.acceptance?.path);
  if(fingerprint(evidence)!==fingerprint({review:receipt.review,acceptance:receipt.acceptance})) fail('review/acceptance evidence changed');
  if(fingerprint(receipt.owned_paths)!==fingerprint(inspection.files.map(({path,sha256})=>({path,sha256}))))fail('invalid import ownership paths');
  return {receipt,paths:[receiptPath,receipt.review.path,receipt.acceptance.path,...json(root,receipt.review.path).evidence_files.map(row=>row.path),...receipt.files.map(row=>row.source_path)]};
}

/** Historical publication provenance only. Validate the entire immutable import
 * and its actual physics sources/evidence without asking current root successors
 * to equal the historical preimage. This does not authenticate a repair itself. */
export function hasPhysicsContextPriorPublication(root,id,before,commit,claimedAt,run,reference) {
  try {
    if (!ID.test(id) || !/^[a-zA-Z0-9_-]+$/.test(run??'')
      || !/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit??'')
      || !Number.isFinite(Date.parse(claimedAt)) || !reference || typeof reference!=='object'
      || Array.isArray(reference) || Object.keys(reference).sort().join(',')!=='path,sha256,source_path'
      || reference.path!==`research/${run}-physics-math-context-import.json`
      || reference.source_path!==`physics/items/${id}.md`
      || !/^[a-f0-9]{64}$/.test(reference.sha256??'')
      || rawHash(bytes(root,reference.path))!==reference.sha256) return false;
    const {receipt}=verifyContextReceiptHistory(root,reference.path);
    const rows=receipt.files.filter(row=>row.id===id), row=rows[0];
    if (rows.length!==1 || row.path!==`items/${id}.md` || row.source_path!==reference.source_path
      || row.publication_commit!==commit || row.sha256!==rawHash(Buffer.from(before,'utf8'))
      || Date.parse(receipt.recorded_at)>Date.parse(claimedAt)
      || !bytes(root,row.source_path).equals(Buffer.from(before,'utf8'))) return false;
    // History verification already authenticates the complete published physics
    // carrier and ancestor; additionally enforce exact commit identity/time.
    const [object,timestamp,...extra]=git(root,['show','--no-patch','--format=%H%n%ct',commit]).toString().trim().split('\n');
    return object===commit && !extra.length && /^\d+$/.test(timestamp)
      && Number(timestamp)*1000<=Date.parse(receipt.recorded_at)
      && Number(timestamp)*1000<=Date.parse(claimedAt)
      && git(root,['show',`${commit}:${row.source_path}`]).equals(Buffer.from(before,'utf8'));
  } catch { return false; }
}


// Shared helpers for the unchanged importer and current-context wrapper.
export {bytes,json,present,fail,reviewEvidence,item};
