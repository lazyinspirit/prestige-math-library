#!/usr/bin/env node
// Metadata mirrors only. No validators, mathematical acceptance, hashes or run transitions.
import { readFileSync, readdirSync, lstatSync, mkdirSync, writeFileSync, renameSync, unlinkSync } from 'node:fs';
import { resolve, dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const RUN = 'machine-learning-all-101-2026-10-19';
const PROOFLESS_EXCLUSIONS = new Set(['alg-graphical-lasso-coordinate-descent','alg-flow-matching-training-and-sampling']);
const args = process.argv.slice(2);
const opt = flag => { const i = args.indexOf(flag); if (i < 0) return undefined; if (!args[i + 1] || args[i + 1].startsWith('--')) throw Error(`missing ${flag} value`); return args[i + 1]; };
if (args.includes('--help')) {
  console.log('node reconcile-proof-contracts.mjs [--root REPO] [--out NEW_PROPOSAL_DIR]\nDefault: read-only inspection, compact JSON report to stdout. --exclude-proofless-algorithms opts into the two root-authorized obsolete worksheet removals only. --out saves candidates and exact-byte plan inside research/.\nRoot only: --apply-plan PLAN --root-apply; refuses changed inputs/inventory. Pending diagnostics block unless --preserve-reported-flags explicitly keeps them unresolved. Never runs gates.');
  process.exit(0);
}
let root = resolve(opt('--root') ?? process.cwd());
const need = (condition, message) => { if (!condition) throw Error(message); };
const object = x => x && typeof x === 'object' && !Array.isArray(x);
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const norm = s => String(s ?? '').replace(/\s+/g, ' ').trim();
const safe = p => { need(typeof p === 'string' && !p.includes('..') && !p.startsWith('/'), `unsafe path ${p}`); return join(root,p); };
const raw = p => { const full = safe(p); need(lstatSync(full).isFile() && !lstatSync(full).isSymbolicLink(), `not regular ${p}`); return readFileSync(full,'utf8'); };
const manifestRE = new RegExp(`^${RUN}-batch-(\\d+)\\.pages\\.json$`);
const inventory = () => readdirSync(join(root,'research')).filter(n => manifestRE.test(n)).sort((a,b)=>Number(a.match(manifestRE)[1])-Number(b.match(manifestRE)[1]));
const contractPath = batch => `research/${RUN}-batch-${batch}.proof-contracts.json`;
if (opt('--apply-plan')) {
  need(args.includes('--root-apply'), 'application requires explicit --root-apply');
  const plan = JSON.parse(readFileSync(resolve(opt('--apply-plan')),'utf8'));
  need(plan.kind === 'selected-run-contract-mirror-plan' && plan.run === RUN && plan.version === 1, 'wrong plan');
  need(plan.blockers.length === 0 || args.includes('--preserve-reported-flags'), 'unresolved diagnostics: repair/reinspect or explicitly preserve them unresolved with --preserve-reported-flags');
  need(same(inventory(),plan.manifests), 'manifest inventory changed');
  for (const g of plan.guards) need(raw(g.path) === g.raw, `stale exact-byte input ${g.path}`);
  const allowed = new Set(plan.manifests.map(n => contractPath(n.match(manifestRE)[1])));
  const targets = new Set();
  const {isProofBearing: actualProofBearing}=await import(pathToFileURL(join(root,'tools/proof-bearing.mjs')));
  const {splitFrontmatter: splitSource}=await import(pathToFileURL(join(root,'tools/facts-block.mjs')));
  const {parseFrontmatter: parseMeta}=await import(pathToFileURL(join(root,'tools/content-policy-lib.mjs')));
  for(const e of plan.exclusions??[]) { const source=splitSource(raw(`items/${e.id}.md`));need(PROOFLESS_EXCLUSIONS.has(e.id)&&parseMeta(source.fm).kind==='algorithm'&&!actualProofBearing(source.body),'invalid proofless exclusion '+e.id); }
  for (const c of plan.changes) {
    need(allowed.has(c.path) && !targets.has(c.path), `unowned/duplicate output ${c.path}`); targets.add(c.path);
    need(raw(c.path) === c.before, `stale target ${c.path}`);
    const before=JSON.parse(c.before), after=JSON.parse(c.after);
    const excluded=(plan.exclusions??[]).filter(e=>e.path===c.path);
    const removed=new Set(excluded.map(e=>e.id));need(removed.size===excluded.length,'duplicate exclusions');
    for(const e of excluded)need(same(before.contracts[e.id],e.archived_entry)&&before.scope[e.scope_index]===e.id,'exclusion archive mismatch');
    need(same(before.scope.filter(id=>!removed.has(id)),after.scope), 'unapproved scope removal/addition');
    need(same(Object.keys(before.contracts).filter(id=>!removed.has(id)),Object.keys(after.contracts)), 'unapproved entry inventory change');
    for (const key of Object.keys(before)) if (!['contracts','scope'].includes(key)) need(same(before[key],after[key]), `top field changed ${key}`);
    for (const id of Object.keys(before.contracts)) {
      if(removed.has(id))continue;
      const old=before.contracts[id], next=after.contracts[id];
      for (const key of new Set([...Object.keys(old),...Object.keys(next)]))
        if (!['citations','derivations','routine_steps'].includes(key)) need(same(old[key],next[key]), `protected field changed ${id}.${key}`);
    }
  }
  // Stage all files, then recheck every input before the first replacement.
  const staged=[];
  try {
    for (const c of plan.changes) { const path=safe(c.path)+`.owner-contract-${process.pid}.tmp`; writeFileSync(path,c.after,{flag:'wx'}); staged.push({path,target:safe(c.path)}); }
    for (const g of plan.guards) need(raw(g.path) === g.raw, `input race ${g.path}`);
    need(same(inventory(),plan.manifests),'manifest inventory race');
    for (const row of staged) renameSync(row.path,row.target);
  } finally { for (const row of staged) { try { unlinkSync(row.path); } catch (e) { if (e.code!=='ENOENT') throw e; } } }
  console.log(JSON.stringify({run:RUN,applied:plan.changes.map(c=>c.path),archived_exclusions:plan.exclusions??[],unresolved_diagnostics:plan.blockers,diagnostics_discharged:false,coverage_granted:false})); process.exit(0);
}
const { SOURCE_SECTIONS, factParagraphs, numberedProofSteps, sourceSectionText, splitFrontmatter } = await import(pathToFileURL(join(root,'tools/facts-block.mjs')));
const { isProofBearing } = await import(pathToFileURL(join(root,'tools/proof-bearing.mjs')));
const { parseFrontmatter } = await import(pathToFileURL(join(root,'tools/content-policy-lib.mjs')));
const guards=new Map(), blockers=[], drift=[], changes=[], observations=[], exclusions=[];
const read=p=>{ const s=raw(p); need(!guards.has(p)||guards.get(p)===s,`input changed during inspection ${p}`); guards.set(p,s); return s; };
const flag=(code,id,detail)=>blockers.push({code,id,detail});
for (const p of ['tools/facts-block.mjs','tools/proof-bearing.mjs','tools/regen-contract-entries.mjs','tools/proof-contract.mjs','tools/proof-contract-coverage.mjs','tools/content-policy-lib.mjs']) read(p);
const scriptRelative=relative(root,fileURLToPath(import.meta.url)); if (!scriptRelative.startsWith('..')) read(scriptRelative);
const manifests=inventory(); need(manifests.length===101,`expected actual101 manifests, got ${manifests.length}`);
const owners=new Map(), batches=[];
for (const name of manifests) {
  const pages=JSON.parse(read(`research/${name}`)); need(Array.isArray(pages)&&pages.length,'invalid manifest '+name);
  const ids=[]; for (const p of pages) { need(Array.isArray(p.items)&&p.items.length,'empty manifest page '+p.id); for (const row of p.items) { need(typeof row.id==='string'&&!owners.has(row.id),'missing/duplicate owned id '+row.id); owners.set(row.id,name); ids.push(row.id); } }
  batches.push({batch:name.match(manifestRE)[1],ids});
}
const itemCache=new Map();
function item(id) {
  if(itemCache.has(id)) return itemCache.get(id);
  need(/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id),`invalid item id ${id}`);
  const text=read(`items/${id}.md`), {fm,body}=splitFrontmatter(text); need(fm,`missing frontmatter ${id}`);
  const meta=parseFrontmatter(fm); need(meta.id===id,`id mismatch ${id}`);
  const result={text,body,meta}; itemCache.set(id,result); return result;
}
function stepsFor(body) {
  const parsed=numberedProofSteps(body), ids=new Set(parsed.map(s=>s.id)); need(ids.size===parsed.length,'duplicate numbered proof steps');
  return parsed.map(s=>{ const tokens=new Set(); for(const t of s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) { if(t[2])tokens.add(t[2]);else if(/^steps?\s/i.test(t[0])||ids.has(t[1]))tokens.add(t[1]); } return {...s,tokens}; });
}
function mirror(entry, current, id) {
  const steps=stepsFor(current.body), stepIds=new Set(steps.map(s=>s.id)), facts=factParagraphs(current.body);
  if (!isProofBearing(current.body)) {
    if(current.meta.kind==='algorithm' && (entry.derivations?.length||entry.routine_steps?.length||entry.citations?.length)) observations.push({code:'proofless-algorithm-obsolete-contract',id,detail:'No supplied proof-like section. Coverage does not mandate exclusion; preserve entry/scope and history. No algorithm kind-based deletion or mathematical reopening.'});
    return entry;
  }
  if(!steps.length) { flag('proof-section-without-numbered-steps',id,'No mirror can establish a supplied proof'); return entry; }
  const oldRows=[...(entry.derivations??[]),...(entry.routine_steps??[])];
  const oldByStep=new Map(); for(const row of oldRows) { if(oldByStep.has(row.step))flag('overlapping-old-step-classification',id,row.step); oldByStep.set(row.step,row); }
  const changedClaims=new Set(steps.filter(s=>!oldByStep.has(s.id)||norm(oldByStep.get(s.id).claim)!==norm(s.claim)).map(s=>s.id));
  for(const b of entry.boundaries??[]) {
    for(const match of String(b.evidence??'').matchAll(/\b(?:steps?\s+)?(\d+\.\d+)\b/gi)) {
      if(!/^steps?\s/i.test(match[0])&&!oldByStep.has(match[1])&&!stepIds.has(match[1]))continue;
      if(!stepIds.has(match[1])) { const detail={case:b.case,status:b.status,step:match[1],evidence:b.evidence}; if(b.status==='checked')flag('stale-boundary-step',id,detail);else observations.push({code:'stale-inactive-boundary-reference',id,detail,meaning:'Strict boundary checker does not inspect evidence of not_applicable rows; preserve reason/status pending narrow cleanup.'}); }
      else if(changedClaims.has(match[1]))observations.push({code:'boundary-anchor-claim-changed',id,detail:{case:b.case,step:match[1],evidence:b.evidence},meaning:'Advisory: the old contract claim differs from current paragraph; same step exists. This does not prove a changed argument or invalidate retained boundary evidence.'});
    }
  }
  for(const smoke of entry.finite_smoke??[]) if(typeof smoke.assertion==='string'&&!norm(current.text).includes(norm(smoke.assertion)))flag('stale-finite-smoke-assertion',id,{check:smoke.check,assertion:smoke.assertion});
  const priorCitations=new Map((entry.citations??[]).map(c=>[`${c.fact}\0${c.source}`,c]));
  const citations=[];
  const declared=new Set([...(current.meta.deps??[]),...(current.meta.justified_by??[]),...(current.meta.forward_refs??[])]);
  for(const f of facts.values())for(const src of new Set(f.links)) {
    if(!declared.has(src))flag('undeclared-fact-source',id,{fact:f.label,source:src});
    const supplier=item(src); let selected;
    for(const section of SOURCE_SECTIONS) { const quote=sourceSectionText(supplier.body,section)?.trim();if(quote){selected={source_section:section,quote};break;} }
    if(!selected){flag('missing-citable-source-section',id,src);continue;}
    const uses=steps.filter(s=>s.tokens.has(f.label)).map(s=>s.id);
    if(!uses.length)flag('fact-without-current-use',id,{fact:f.label,source:src});
    citations.push({...priorCitations.get(`${f.label}\0${src}`),fact:f.label,source:src,...selected,uses});
  }
  const citationKeys=new Set(citations.map(c=>`${c.fact}\0${c.source}`));
  const orphanAnnotated=[
    ...(entry.citations??[]).filter(c=>!citationKeys.has(`${c.fact}\0${c.source}`)&&Object.keys(c).some(k=>!['fact','source','source_section','quote','uses'].includes(k))),
    ...(entry.derivations??[]).filter(r=>!stepIds.has(r.step)&&Object.keys(r).some(k=>!['id','claim','step','inputs'].includes(k))),
  ];
  if(orphanAnnotated.length){flag('retired-row-has-unrelated-fields',id,orphanAnnotated);return entry;}
  const routine=Array.isArray(entry.routine_steps)?entry.routine_steps:[], routineIds=new Set(routine.map(r=>r.step));
  for(const r of routine)if(!stepIds.has(r.step))flag('stale-routine-classification',id,r);
  const record=s=>{const inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));for(const t of s.tokens)if(!have.has(t)){inputs.push(/^\d/.test(t)?`step ${t}`:t);have.add(t);}
    for(const t of s.tokens) { if(/^[FAL]/.test(t)&&!facts.has(t))flag('proof-token-missing-fact',id,{step:s.id,token:t});if(/^\d/.test(t)&&!stepIds.has(t))flag('proof-token-missing-step',id,{step:s.id,token:t}); }
    return {...oldByStep.get(s.id),id:oldByStep.get(s.id)?.id??`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs};};
  const byId=new Map(steps.map(s=>[s.id,record(s)]));
  const next={...entry,citations,derivations:steps.filter(s=>!routineIds.has(s.id)).map(s=>byId.get(s.id))};
  if(Array.isArray(entry.routine_steps))next.routine_steps=routine.map(r=>byId.get(r.step)??r);
  for(const key of Object.keys(entry))if(!['citations','derivations','routine_steps'].includes(key))need(same(entry[key],next[key]),`protected field changed ${id}.${key}`);
  if(!same(entry,next))drift.push({id,citations_before:entry.citations?.length,citations_after:citations.length,derivations_before:entry.derivations?.length,derivations_after:next.derivations.length,changed_claim_steps:[...changedClaims],retired_derivation_rows:(entry.derivations??[]).filter(r=>!stepIds.has(r.step)),protected_fields:Object.keys(entry).filter(k=>!['citations','derivations','routine_steps'].includes(k))});
  return next;
}
for(const b of batches) {
  const path=contractPath(b.batch),before=read(path),doc=JSON.parse(before);
  need(doc.version===1&&Array.isArray(doc.scope)&&new Set(doc.scope).size===doc.scope.length&&object(doc.contracts),`invalid contract ${path}`);
  const owned=new Set(b.ids), next=structuredClone(doc);
  for(const id of doc.scope)if(!owned.has(id))flag('contract-scope-outside-owning-manifest',id,path);
  for(const id of Object.keys(doc.contracts))if(!doc.scope.includes(id))flag('contract-entry-outside-scope',id,path);
  for(const id of b.ids) {
    const current=item(id),entry=doc.contracts[id];
    if(!entry||!doc.scope.includes(id)) {if(isProofBearing(current.body))flag('missing-registered-proof-contract',id,path);continue;}
    need(object(entry),`invalid contract entry ${id}`);
    if(args.includes('--exclude-proofless-algorithms')&&PROOFLESS_EXCLUSIONS.has(id)) {
      need(current.meta.kind==='algorithm'&&!isProofBearing(current.body),`exclusion no longer proofless algorithm ${id}`);
      exclusions.push({id,path,scope_index:doc.scope.indexOf(id),archived_entry:structuredClone(entry),reason:'Root explicitly authorized excluding obsolete proofless algorithm worksheet; algorithm source, manifest and page inventory unchanged; separate property proof carriers already registered.'});
      next.scope=next.scope.filter(value=>value!==id);delete next.contracts[id];continue;
    }
    next.contracts[id]=mirror(entry,current,id);
  }
  if(!same(doc,next))changes.push({path,before,after:JSON.stringify(next,null,2)+'\n'});
}
// No unused source scanning: only manifest subjects and their actual fact suppliers were opened.
for(const [path,text] of guards)need(raw(path)===text,`inspection race ${path}`);
need(same(inventory(),manifests),'manifest inventory changed during inspection');
const report={run:RUN,kind:'selected-run-contract-mirror-inspection',manifest_count:manifests.length,item_count:owners.size,read_inputs:guards.size,changed_contract_files:changes.map(c=>c.path),drift,blockers,observations,exclusions,policy:{algorithm_exclusion:'Default preserves all scope/entries. --exclude-proofless-algorithms removes only the two explicitly root-authorized obsolete worksheets after actual kind/no-argument checks, archiving entire entries. Manifest/page/source inventory remains unchanged.',preserved:'scope, entry inventory, risk_review, boundaries, finite_smoke and every non-mirror field; existing citation/step extra fields retained on surviving rows; no boundary conclusions fabricated.',coverage_granted:false}};
if(opt('--out')) {
  const out=resolve(opt('--out'));need(out.startsWith(join(root,'research')+'/'),'proposal output must be inside research');mkdirSync(out,{recursive:false});
  writeFileSync(join(out,'report.json'),JSON.stringify(report,null,2)+'\n',{flag:'wx'});
  const plan={version:1,kind:'selected-run-contract-mirror-plan',run:RUN,manifests,guards:[...guards].map(([path,raw])=>({path,raw})),changes,blockers,exclusions,coverage_granted:false};
  writeFileSync(join(out,'plan.json'),JSON.stringify(plan,null,2)+'\n',{flag:'wx'});
  mkdirSync(join(out,'candidates'));for(const c of changes)writeFileSync(join(out,'candidates',c.path.split('/').at(-1)),c.after,{flag:'wx'});
}
console.log(JSON.stringify({run:RUN,manifest_count:manifests.length,item_count:owners.size,input_count:guards.size,changed_files:changes.length,excluded_obsolete_worksheets:exclusions.length,drifting_items:drift.length,blockers:blockers.length,observations:observations.length,observation_codes:[...new Set(observations.map(b=>b.code))],blocker_codes:[...new Set(blockers.map(b=>b.code))],out:opt('--out')??null,coverage_granted:false}));
