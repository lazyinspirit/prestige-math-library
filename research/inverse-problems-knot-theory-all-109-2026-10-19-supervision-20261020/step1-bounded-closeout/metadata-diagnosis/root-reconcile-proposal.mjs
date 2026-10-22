#!/usr/bin/env node
// PROPOSAL ONLY. Not executed by its author. Root runs after all writers drain.
// No engine control, readiness, contracts, harvests, review stamps, or gates.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';

const RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
const argv = process.argv.slice(2);
const value = key => {const i=argv.indexOf(key);return i<0?undefined:argv[i+1];};
const root = path.resolve(value('--root') ?? process.cwd());
const apply = argv.includes('--apply');
assert.equal(argv.filter(x=>x==='--apply').length,apply?1:0);
assert(value('--decisions') && value('--archive-dir'),
  'Root supplies --decisions FILE and one --archive-dir DIR; optional --apply');
const absolute = relative => path.resolve(root,relative);
const read = file => fs.readFileSync(absolute(file),'utf8');
const json = file => JSON.parse(read(file));
const digest = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const parser = await import(pathToFileURL(absolute('tools/pathway-lib.mjs')).href);
const {splitFrontmatter,sourceSectionText,SOURCE_SECTIONS,sectionText} =
  await import(pathToFileURL(absolute('tools/facts-block.mjs')).href);
const {dependencyLevels} =
  await import(pathToFileURL(absolute('tools/item-dependency-levels.mjs')).href);
const YAML = parser.yaml();
const decisionsFile = value('--decisions');
const decisions = json(decisionsFile);
assert.equal(decisions.version,1);assert.equal(decisions.run,RUN);
assert.equal(decisions.authorized_by,'/root');
assert(Array.isArray(decisions.helpers),'Explicit include/hold/context helper decisions required');
if (apply) {
  assert.equal(decisions.all_mathematical_writers_drained,true,
    'Do not apply while any mathematical/metadata writer is active');
  assert(Array.isArray(decisions.drain_evidence) && decisions.drain_evidence.length,
    'Root must name actual final drain evidence');
  for (const file of decisions.drain_evidence) assert(fs.existsSync(absolute(file)));
}
const stateFile = `.autopilot/${RUN}/state.json`;
const state = json(stateFile);
assert.equal(state.run,RUN);assert.equal(state.stage,'1-scaffold');
assert.equal(state.paused,true);assert.equal(state.pauseAfter,'1-scaffold');
assert(!state.stages?.['1-scaffold']?.gatesPassedAt);
assert(!Object.values(state.dispatches??{}).some(d=>d.startedAt&&!d.endedAt),
  'Native dispatches must be drained');
const guards = new Map();
function guarded(file) {
  const bytes = fs.readFileSync(absolute(file));
  const current = digest(bytes);
  if (guards.has(file)) assert.equal(guards.get(file),current,`Concurrent input: ${file}`);
  else guards.set(file,current);
  return bytes.toString('utf8');
}
guarded(stateFile);guarded(decisionsFile);guarded('CLAUDE.md');
assert(guarded('CLAUDE.md').includes('Run-specific external-source boundary'));
const mutations = new Map();
function propose(file,next,purpose,{argumentBody}={}) {
  const before = guarded(file);
  if (argumentBody!==undefined)
    assert.equal(splitFrontmatter(next).body,argumentBody,
      `Item argument bytes would change: ${file}`);
  if (before!==next) mutations.set(file,{before,next,purpose});
}
function parseFM(file,{allowBatch6Repair=false}={}) {
  let text=guarded(file),m=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);
  let repaired=false;
  if (!m && allowBatch6Repair) {
    // Only the TWO explicitly diagnosed truncated page envelopes; no body removal.
    assert(/^---\r?\n/.test(text));
    const raw=text.replace(/^---\r?\n/,'');
    assert(!/^##?\s/m.test(raw),'Not a YAML-only truncated envelope');
    const doc=YAML.parseDocument(raw,{uniqueKeys:true});assert.equal(doc.errors.length,0);
    const fm=doc.toJS();assert(fm&&typeof fm==='object');
    const eol=text.includes('\r\n')?'\r\n':'\n';
    text=text.replace(/[\r\n]*$/,'')+eol+'---'+eol;
    m=text.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);
    repaired=true;
  }
  assert(m,`Missing or malformed FM envelope: ${file}`);
  const doc=YAML.parseDocument(m[2],{uniqueKeys:true});
  assert.equal(doc.errors.length,0,`Malformed renderer YAML: ${file}`);
  const fm=doc.toJS();assert(fm&&typeof fm==='object'&&!Array.isArray(fm));
  return {file,text,m,doc,fm,body:m[4],repaired};
}
function serializeFM(parsed) {
  let next=parsed.doc.toString({lineWidth:0}).replace(/[\r\n]*$/,'');
  if(parsed.m[1].includes('\r\n'))next=next.replace(/\r?\n/g,'\r\n');
  return parsed.m[1]+next+parsed.m[3]+parsed.body;
}
const manifests = fs.readdirSync(absolute('research'))
  .filter(n=>new RegExp(`^${RUN}-batch-\\d+\\.pages\\.json$`).test(n))
  .sort((a,b)=>Number(a.match(/-batch-(\d+)/)[1])-Number(b.match(/-batch-(\d+)/)[1]))
  .map(name=>({file:`research/${name}`,batch:name.match(/-batch-(\d+)/)[1]}));
assert.equal(manifests.length,109,'Preserve the original109 native batch identities');
const pages = new Map(), homes=new Map();
for(const mf of manifests) {
  mf.rows=JSON.parse(guarded(mf.file));assert(Array.isArray(mf.rows));
  for(const p of mf.rows) {
    assert(!pages.has(p.id));assert(Array.isArray(p.items)&&p.items.length);
    pages.set(p.id,{page:p,batch:mf.batch,manifest:mf});
    for(const i of p.items){assert(i&&typeof i.id==='string');assert(!homes.has(i.id));homes.set(i.id,p.id);}
  }
}
assert.equal(pages.size,218,'Do not silently add/drop original page obligations');
if(decisions.frontier_policy==='preserve-1471-context-only') {
  assert.equal(homes.size,1471,'Preserve the explicitly bounded original manifest inventory');
  assert(decisions.helpers.every(row=>row.disposition==='context'),
    'Bounded context policy forbids new manifest helper placement');
}
const originalManifestIds=new Set(homes.keys());
const seenHelper = new Set(), helperDispositions=[];
for(const row of decisions.helpers) {
  assert(row&&typeof row.id==='string'&&!seenHelper.has(row.id));seenHelper.add(row.id);
  assert(['include','hold','context'].includes(row.disposition));
  assert(typeof row.reason==='string'&&row.reason.trim());
  helperDispositions.push(row);
  if(row.disposition!=='include')continue;
  assert(Array.isArray(row.acceptance_evidence)&&row.acceptance_evidence.length,
    `Explicit genuine adoption evidence required for ${row.id}`);
  for(const file of row.acceptance_evidence){assert(fs.existsSync(absolute(file)));guarded(file);}
  assert(pages.has(row.page),`Helper needs an existing genuine home: ${row.id}`);
  const home=pages.get(row.page);assert.equal(String(row.batch),home.batch);
  if(homes.has(row.id))assert.equal(homes.get(row.id),row.page,'No implicit rehome');
  else{home.page.items.push({id:row.id});homes.set(row.id,row.page);}
}
const rehomes=decisions.existing_item_rehomes??[];
assert(Array.isArray(rehomes));
const rehomed=new Set();
for(const row of rehomes) {
  assert(row&&originalManifestIds.has(row.id)&&!rehomed.has(row.id));rehomed.add(row.id);
  assert(typeof row.reason==='string'&&row.reason.trim());
  const evidence=Array.isArray(row.evidence)?row.evidence:[row.evidence];
  assert(evidence.length&&evidence.every(x=>typeof x==='string'&&fs.existsSync(absolute(x))));
  for(const file of evidence)guarded(file);
  assert(pages.has(row.from_page)&&pages.has(row.to_page)&&row.from_page!==row.to_page);
  const current=homes.get(row.id);
  assert(current===row.from_page||current===row.to_page,'No unapproved rehome source');
  if(current===row.to_page)continue; // idempotent after a completed root application
  const from=pages.get(row.from_page).page,to=pages.get(row.to_page).page;
  const i=from.items.findIndex(x=>x.id===row.id);assert(i>=0);
  const [item]=from.items.splice(i,1);to.items.push(item);homes.set(row.id,row.to_page);
}
assert.equal(homes.size,1471,'Rehomes preserve original item inventory');
for(const home of pages.values())assert(home.page.items.length>0&&
  (home.page.kind!=='A'||home.page.items.length<=100),'Rehomes preserve nonempty pages and A capacity');
// Root-authorized existing-ID rehomes carry their exact existing contract
// entries/risks and scope membership; no fabricated author dispatch or review.
const contractDocs=new Map();
const contractDoc=batch=>{
  const file=`research/${RUN}-batch-${batch}.proof-contracts.json`;
  if(!contractDocs.has(file))contractDocs.set(file,JSON.parse(guarded(file)));
  return {file,doc:contractDocs.get(file)};
};
for(const row of rehomes) {
  const source=contractDoc(pages.get(row.from_page).batch),target=contractDoc(pages.get(row.to_page).batch);
  if(source.file===target.file)continue;
  source.doc.contracts??={};target.doc.contracts??={};
  assert(Array.isArray(source.doc.scope)&&Array.isArray(target.doc.scope));
  if(Object.hasOwn(source.doc.contracts,row.id)) {
    if(Object.hasOwn(target.doc.contracts,row.id))assert.deepEqual(target.doc.contracts[row.id],source.doc.contracts[row.id],
      `Conflicting preexisting contract at destination: ${row.id}`);
    else target.doc.contracts[row.id]=source.doc.contracts[row.id];
    delete source.doc.contracts[row.id];
  }
  if(source.doc.scope.includes(row.id)) {
    source.doc.scope=source.doc.scope.filter(id=>id!==row.id);
    if(!target.doc.scope.includes(row.id))target.doc.scope.push(row.id);
  }
}
for(const [file,doc]of contractDocs)propose(file,JSON.stringify(doc,null,2)+'\n',
  'Exact existing-ID contract/scope migration with entry/risks intact; historical preimage archived');
const parsedItems=new Map();
const canonicalOverrides=decisions.canonical_metadata_overrides??{};
assert(canonicalOverrides&&typeof canonicalOverrides==='object'&&!Array.isArray(canonicalOverrides));
for(const id of Object.keys(canonicalOverrides))assert(homes.has(id),
  `Canonical override outside explicit current/included frontier: ${id}`);
for(const [id,homeId] of homes) {
  const source=parseFM(`items/${id}.md`);assert.equal(source.fm.id,id);
  const override=canonicalOverrides[id];
  if(override!==undefined) {
    assert(override&&typeof override==='object'&&!Array.isArray(override));
    for(const [field,v] of Object.entries(override)) {
      assert(['deps','justified_by','sources','provenance','generation','local_proof_acceptance','axiom_use'].includes(field),
        `Not an authorized canonical metadata override: ${id}#${field}`);
      if(['deps','justified_by'].includes(field))assert(Array.isArray(v)&&new Set(v).size===v.length
        &&v.every(x=>typeof x==='string'&&/^[A-Za-z]+-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(x)),
        'deps/justified_by must be full explicit chosen ID arrays, never source URLs');
      if(['sources','provenance','generation','local_proof_acceptance'].includes(field))assert(v&&typeof v==='object'&&!Array.isArray(v));
      if(v===null){assert.equal(field,'axiom_use');source.doc.delete(field);delete source.fm[field];}
      else{source.doc.set(field,v);source.fm[field]=v;}
    }
    source.explicitCanonicalOverride=true;
  }
  assert(typeof source.fm.title==='string'&&source.fm.title.trim(),`Missing canonical title ${id}`);
  assert(typeof source.fm.kind==='string'&&source.fm.kind,`Missing canonical kind ${id}`);
  if(!originalManifestIds.has(id))assert.equal(source.fm.pipeline_run,RUN,
    `Newly included helper must belong to this run: ${id}`);
  assert(['draft','published'].includes(source.fm.status));
  assert(Array.isArray(source.fm.deps??[])&&!(source.fm.deps??[]).some(x=>typeof x!=='string'));
  parsedItems.set(id,source);
  const row=pages.get(homeId).page.items.find(x=>x.id===id);
  for(const field of ['kind','title','deps','justified_by','forward_refs','proof_strategy','provenance','generation','local_proof_acceptance','sources','axiom_use']) {
    if(field==='deps')row.deps=source.fm.deps??[];
    else if(Object.hasOwn(source.fm,field))row[field]=source.fm[field];
    else delete row[field];
  }
  // Keep all other existing manifest fields, especially declared import metadata.
  // Copy explicitly labelled canonical FM import/source-limit fields verbatim.
  for(const [field,v] of Object.entries(source.fm))
    if(/^(?:external_|imported_|source_reading|reading_limits)/.test(field))row[field]=v;
  let claim;
  for(const heading of SOURCE_SECTIONS){const t=sourceSectionText(source.body,heading)?.trim();if(t){claim=t;break;}}
  if(!claim&&source.fm.kind==='open-problem')claim=sectionText(source.body,'Open problem').trim();
  if(!claim&&id==='rem-jones-polynomial-unknot-detection-status') {
    const historical=sectionText(source.body,'Historical question').trim();
    const status=sectionText(source.body,'Status').trim();
    assert(historical&&status,'Root-authorized historical remark sections unavailable');
    claim=`## Historical question\n\n${historical}\n\n## Status\n\n${status}`;
  }
  assert(claim,`Actual defining-section mirror unavailable; do not synthesize a proof: ${id}`);
  row.statement=claim;
  // Optional root-authored import/strategy note. Never auto-label a citation as
  // locally reconstructed, or invent an actual source-reading extent.
  if(decisions.manifest_metadata_overrides?.[id]) {
    const override=decisions.manifest_metadata_overrides[id];
    for(const field of Object.keys(override))
      assert(['strategy','external_inputs','source_reading_limits','owner_metadata_note'].includes(field));
    Object.assign(row,override);
  }
}
// Definition discharge is a separate edge: its provider must logically depend
// through deps on the definition being discharged. Never add the reverse deps
// edge merely because a Facts citation discharges a definition's obligation.
const logicalDeps=id=>{
  if(parsedItems.has(id))return parsedItems.get(id).fm.deps??[];
  const file=`items/${id}.md`;
  assert(fs.existsSync(absolute(file)),`Unknown logical supplier ${id}`);
  const parsed=parseFM(file);assert.equal(parsed.fm.id,id);
  return parsed.fm.deps??[];
};
const reachesByDeps=(from,target)=>{
  const seen=new Set(),todo=[...logicalDeps(from)];
  while(todo.length){const id=todo.pop();if(id===target)return true;
    if(seen.has(id))continue;seen.add(id);todo.push(...logicalDeps(id));}
  return false;
};
for(const [id,override] of Object.entries(canonicalOverrides))if(Object.hasOwn(override,'justified_by')) {
  assert.equal(parsedItems.get(id).fm.kind,'definition',
    `justified_by override is only authorized for a definition: ${id}`);
  for(const provider of override.justified_by)assert(reachesByDeps(provider,id),
    `Discharge provider must depend through logical deps on ${id}: ${provider}`);
}
const planFile='research/plan-spec.json',planText=guarded(planFile),plan=JSON.parse(planText);
const planRequiresChanges=[],planOrderChanges=[];
const planById=new Map(plan.pages.map(p=>[p.id,p]));
for(const [id,home] of pages) {
  const planned=planById.get(id);assert(planned,`No controlling plan page ${id}`);
  const order=decisions.page_order_overrides?.[id];
  if(order!==undefined) {
    assert(typeof order==='number'&&Number.isFinite(order),'Explicit finite numeric page order required');
    if(planned.order!==order)planOrderChanges.push({id,order});
    planned.order=order;home.page.order=order;
  }
  const override=decisions.requires_overrides?.[id];
  if(override!==undefined) {
    assert(Array.isArray(override)&&override.every(x=>typeof x==='string'));
    if(JSON.stringify(planned.requires??[])!==JSON.stringify(override))
      planRequiresChanges.push({id,requires:[...override]});
    home.page.requires=[...override];planned.requires=[...override];
  } else assert.deepEqual(home.page.requires??[],planned.requires??[],
    `Root must decide conflicting plan/manifest requires for ${id}`);
}
const allPages=[...pages.values()].map(h=>({...h.page,batch:h.batch}));
const mainOf=id=>pages.get(id)?.page.kind==='B'?(pages.get(id).page.companion??id):id;
const requirementClosure=id=>{
  const seen=new Set(),todo=[...(planById.get(id)?.requires??[])];
  while(todo.length){const next=todo.pop();if(seen.has(next))continue;seen.add(next);
    todo.push(...(planById.get(next)?.requires??[]));}
  return seen;
};
const missingPageEdges=[];
for(const [id,homeId] of homes) {
  const consumer=mainOf(homeId),reached=requirementClosure(consumer);
  for(const dep of parsedItems.get(id).fm.deps??[])if(homes.has(dep)){
    const supplier=mainOf(homes.get(dep));
    if(supplier!==consumer&&!reached.has(supplier))missingPageEdges.push({
      item:id,dependency:dep,consumer_page:consumer,supplier_page:supplier});
  }
}
if(apply)assert.equal(missingPageEdges.length,0,
  'Root must supply genuine reading-order/home decisions for uncovered in-run page dependencies; inspect plan mode');
const graph=dependencyLevels(allPages,{validateLabels:false});
assert.equal(graph.errors.length,0,graph.errors.join('\n'));
for(const [id,level] of graph.levels) {
  const p=parsedItems.get(id),item=pages.get(homes.get(id)).page.items.find(i=>i.id===id);
  item.dependency_level=level;
  const levelChanged=p.fm.dependency_level!==level;
  if(levelChanged)p.doc.set('dependency_level',level);
  if(levelChanged||p.explicitCanonicalOverride)
    propose(p.file,serializeFM(p),'Explicit root canonical metadata overrides and dependency-level FM only',
      {argumentBody:p.body});
}
const truncatedPages=new Set(['factorized-and-composite-linear-inversion',
  'factorized-and-composite-linear-inversion-examples']);
for(const [id,home] of pages) {
  const p=home.page;
  assert(p.kind!=='A'||p.items.length<=100,`Capacity requires supported scope/append decision: ${id}`);
  // Stable sort preserves the author's original order among equal-level items.
  p.items.sort((a,b)=>a.dependency_level-b.dependency_level);
  const file=`library/${p.category}/${id}.md`;
  const source=parseFM(file,{allowBatch6Repair:truncatedPages.has(id)});
  assert.equal(source.fm.page,id);assert.equal(source.body.trim(),'','Do not generate/delete page summaries');
  source.doc.set('items',p.items.filter(i=>!['example','counterexample'].includes(i.kind)).map(i=>i.id));
  source.doc.set('examples',p.items.filter(i=>['example','counterexample'].includes(i.kind)).map(i=>i.id));
  source.doc.set('requires',p.requires??[]);
  if(decisions.page_order_overrides?.[id]!==undefined)source.doc.set('order',p.order);
  // Existing compact labels survive; preparation tool, not this proposal, owns
  // adding a missing page_layout after the envelopes are valid.
  propose(file,serializeFM(source),'Page inventory/requires and exact truncated-envelope repair');
}
for(const mf of manifests)propose(mf.file,JSON.stringify(mf.rows,null,2)+'\n','Canonical metadata/defining-section mirrors');
if(planRequiresChanges.length||planOrderChanges.length) {
  let next=planText;
  for(const change of planRequiresChanges) {
    const escaped=change.id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const marker=new RegExp(`"id"\\s*:\\s*"${escaped}"`).exec(next);
    assert(marker,`Cannot locate exact planned page ${change.id}`);
    const field=/"requires"\s*:\s*\[/.exec(next.slice(marker.index));
    assert(field,`Root must supply existing requires array for ${change.id}`);
    const begin=marker.index+field.index;
    const arrayStart=next.indexOf('[',begin);
    let end=arrayStart+1,depth=1,inString=false,escape=false;
    for(;end<next.length&&depth;end++) {
      const c=next[end];
      if(inString){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')inString=false;}
      else if(c==='"')inString=true;else if(c==='[')depth++;else if(c===']')depth--;
    }
    assert.equal(depth,0,'Unterminated plan requires array');
    const lineStart=next.lastIndexOf('\n',begin)+1;
    const indent=next.slice(lineStart,begin).match(/^\s*/)[0];
    const replacement='"requires": '+JSON.stringify(change.requires,null,2)
      .split('\n').map((s,i)=>i?indent+s:s).join('\n');
    next=next.slice(0,begin)+replacement+next.slice(end);
  }
  for(const change of planOrderChanges) {
    const escaped=change.id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const marker=new RegExp(`"id"\\s*:\\s*"${escaped}"`).exec(next);
    assert(marker,`Cannot locate exact planned page ${change.id}`);
    const begin=next.lastIndexOf('{',marker.index);
    assert(begin>=0,'Actual page object required');
    let depth=0,inString=false,escape=false,stringStart=-1,pageEnd=-1,orderSpan;
    for(let i=begin;i<next.length;i++) {
      const c=next[i];
      if(inString) {
        if(escape){escape=false;continue;}
        if(c==='\\'){escape=true;continue;}
        if(c==='"') {
          inString=false;
          if(depth===1&&JSON.parse(next.slice(stringStart,i+1))==='order') {
            const scalar=/^\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/.exec(next.slice(i+1));
            if(scalar) {assert(!orderSpan,'Duplicate top-level order');
              const at=i+1+scalar[0].lastIndexOf(scalar[1]);orderSpan={at,end:at+scalar[1].length};}
          }
        }
      } else if(c==='"'){inString=true;stringStart=i;}
      else if(c==='{')depth++;
      else if(c==='}'&&--depth===0){pageEnd=i+1;break;}
    }
    assert(pageEnd>marker.index&&orderSpan,`Existing top-level numeric plan order required: ${change.id}`);
    assert.equal(JSON.parse(next.slice(begin,pageEnd)).id,change.id,'Exact page object binding');
    next=next.slice(0,orderSpan.at)+JSON.stringify(change.order)+next.slice(orderSpan.end);
  }
  assert.deepEqual(JSON.parse(next),plan,'Surgical plan edit changed unrelated metadata');
  propose(planFile,next,'Explicit root-approved requires/order fields only; all other bytes preserved');
}
// Snapshot ALL read inputs immediately before any write; root supplies external
// writer drain evidence because the native state cannot see those sessions.
for(const [file,hash] of guards)assert.equal(digest(fs.readFileSync(absolute(file))),hash,`Input changed: ${file}`);
const archive=absolute(value('--archive-dir'));
assert(archive.startsWith(absolute(`research/${RUN}`)),'Archive must be run-local research');
const report={version:1,run:RUN,mode:apply?'root-apply':'proposal-plan',
  at:new Date().toISOString(),item_count:homes.size,page_count:pages.size,batches:manifests.length,
  decisions_file:decisionsFile,helper_dispositions:helperDispositions,
  existing_item_rehomes:rehomes,page_order_overrides:decisions.page_order_overrides??{},
  canonical_metadata_overrides_applied:Object.entries(canonicalOverrides)
    .map(([id,fields])=>({id,fields:Object.keys(fields)})),
  uncovered_current_inrun_page_dependencies:missingPageEdges,
  input_guards:[...guards].map(([file,sha256])=>({file,sha256})),
  changes:[...mutations].map(([file,x])=>({file,purpose:x.purpose,before_sha256:digest(x.before),after_sha256:digest(x.next)})),
  mathematical_review:false,readiness_or_native_coverage:false,
  imported_inputs:'Canonical item body/Facts untouched; exact FM labels/provenance/source/definition mirrored. No source-reading claim inferred.'};
if(!apply){console.log(JSON.stringify(report,null,2));process.exit(0);}
fs.mkdirSync(archive,{recursive:true});
const indexFile=path.join(archive,'archive-index.json');
const index=fs.existsSync(indexFile)?JSON.parse(fs.readFileSync(indexFile,'utf8')):
  {version:1,run:RUN,created_at:new Date().toISOString(),files:[]};
assert.equal(index.run,RUN);
for(const [file,x] of mutations) {
  let old=index.files.find(r=>r.file===file);
  if(old)assert.equal(digest(fs.readFileSync(path.join(archive,old.archive))),old.sha256);
  else {
    const archiveName=`before-${String(index.files.length).padStart(5,'0')}`;
    fs.writeFileSync(path.join(archive,archiveName),x.before,{flag:'wx'});
    old={file,archive:archiveName,sha256:digest(x.before)};index.files.push(old);
    fs.writeFileSync(indexFile,JSON.stringify(index,null,2)+'\n');
  }
  assert.equal(read(file),x.before,`Concurrent write before apply: ${file}`);
  const tmp=absolute(file)+`.root-metadata-${process.pid}.tmp`;
  fs.writeFileSync(tmp,x.next,{flag:'wx'});fs.renameSync(tmp,absolute(file));
}
const receipt=path.join(archive,`application-${crypto.randomUUID()}.json`);
fs.writeFileSync(receipt,JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({receipt,changed:mutations.size,scope:homes.size,
  next:'Root alone integrates contracts/coverage/dependency-review evidence, recomputes batch labels and readiness, then fresh native owner hold/full battery.'}));
