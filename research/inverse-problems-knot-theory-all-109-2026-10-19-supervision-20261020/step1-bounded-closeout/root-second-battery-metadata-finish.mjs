// Root-only reconciliation of confirmed plan failures. No mathematical review.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {yaml} from '../../../tools/pathway-lib.mjs';
import {dependencyLevels} from '../../../tools/item-dependency-levels.mjs';
const run='inverse-problems-knot-theory-all-109-2026-10-19';
const base=`research/${run}-supervision-20261020/step1-bounded-closeout`;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const state=read(`.autopilot/${run}/state.json`);
assert(state.paused&&state.stage==='1-scaffold'&&state.pauseAfter==='1-scaffold');
assert(!Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt));
assert(process.argv.includes('--root-apply'));
const changes=new Map(), Y=yaml();
const stage=(file,after)=>{const before=fs.existsSync(file)?fs.readFileSync(file,'utf8'):null;if(before!==after)changes.set(file,{before,after});};
const current=file=>changes.get(file)?.after??fs.readFileSync(file,'utf8');
function front(file,edit,original){
  const before=original??current(file),m=before.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);assert(m);
  const doc=Y.parseDocument(m[2]);assert.equal(doc.errors.length,0);edit(doc);
  let fm=doc.toString({lineWidth:0}).replace(/[\r\n]*$/,'');if(m[1].includes('\r\n'))fm=fm.replace(/\r?\n/g,'\r\n');
  const after=m[1]+fm+m[3]+m[4];assert.equal(after.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)([\s\S]*)$/)[1],m[4]);stage(file,after);
}
const restoration=read(`${base}/mixed-quotient-context-restoration-proposal.json`);
assert(!fs.existsSync(restoration.root_copy_to));
const reviewed=read(restoration.independent_review.path);assert.equal(reviewed.verdict,'locally-reviewed');assert.equal(reviewed.repair_requested,false);
const donor=fs.readFileSync(restoration.root_copy_from,'utf8');
front(restoration.root_copy_to,doc=>{
  assert.equal(doc.get('id'),restoration.id);
  for(const id of doc.get('deps').toJSON())assert(fs.existsSync(`items/${id}.md`));
  doc.set('pipeline_run',run);
  doc.set('source_boundary',{
    kind:'preserved-independently-reviewed-local-proof',
    independent_review:restoration.independent_review.path,
    published_baseline:restoration.provenance_recommendation.published_baseline,
    qualification:restoration.provenance_recommendation.qualification,
    reading_limit:restoration.provenance_recommendation.current_reading_limit,
    root_adoption:`${base}/root-second-battery-metadata-finish-adoption.json`,
    new_mathematical_review:false,
  });
},donor);
const binding=read(`${base}/longitudinal-missing-id-binding/proposal.json`);
const target=binding.canonical_target;
front(target,doc=>{assert.deepEqual(doc.get('deps').toJSON(),binding.existing_header_deps);doc.set('deps',binding.recommended_metadata_deps);});
const placement=read(`${base}/b-leaf-placement-proposal/proposal.json`);
const ownerMap=new Map(placement.moves.map(m=>[m.from,m.to]));
const manifests=[],pages=[],priorInventory=new Set();
for(let batch=1;batch<=109;batch++){
  const file=`research/${run}-batch-${batch}.pages.json`,rows=read(file);manifests.push({file,rows});pages.push(...rows);
  for(const page of rows)for(const item of page.items){assert(!priorInventory.has(item.id));priorInventory.add(item.id);if(item.id===path.basename(target,'.md')){assert.deepEqual(item.deps,binding.existing_header_deps);item.deps=[...binding.recommended_metadata_deps];}}
}
assert.equal(priorInventory.size,1471);assert.equal(pages.length,218);
const movedRequires=[];
for(const page of pages){const before=page.requires??[],after=[...new Set(before.map(id=>ownerMap.get(id)??id))];if(JSON.stringify(before)!==JSON.stringify(after)){page.requires=after;front(`library/${page.category}/${page.id}.md`,doc=>{assert.deepEqual(doc.get('requires').toJSON(),before);doc.set('requires',after);});movedRequires.push({page:page.id,before,after});}}
const graph=dependencyLevels(pages,{validateLabels:false});assert.deepEqual(graph.errors,[]);assert.equal(graph.items.size,1471);
const relabeled=[];
for(const [id,{item}]of graph.items){const level=graph.levels.get(id);if(item.dependency_level!==level){relabeled.push({id,before:item.dependency_level,after:level});item.dependency_level=level;front(`items/${id}.md`,doc=>doc.set('dependency_level',level));}}
for(const {file,rows}of manifests)stage(file,JSON.stringify(rows,null,2)+'\n');
// Splice only selected page records whose requires changed. Preserve every
// unrelated plan byte, including the approved published-placement maintenance.
const planFile='research/plan-spec.json',planText=fs.readFileSync(planFile,'utf8'),plan=JSON.parse(planText),updates=new Map();
for(const page of pages){const row=plan.pages.find(p=>p.id===page.id);assert(row);if(JSON.stringify(row.requires??[])!==JSON.stringify(page.requires??[]))updates.set(page.id,{...row,requires:page.requires??[]});}
const spans=[],starts=[];let quoted=false,escaped=false;
for(let n=0;n<planText.length;n++){const c=planText[n];if(quoted){if(escaped)escaped=false;else if(c==='\\')escaped=true;else if(c==='"')quoted=false;continue;}if(c==='"'){quoted=true;continue;}if(c==='{')starts.push(n);else if(c==='}'){const start=starts.pop();if(starts.length===1){let row;try{row=JSON.parse(planText.slice(start,n+1))}catch{}if(updates.has(row?.id)){const prefix=planText.slice(planText.lastIndexOf('\n',start)+1,start);assert(/^ *$/.test(prefix));spans.push({start,end:n+1,text:JSON.stringify(updates.get(row.id),null,2).replace(/\n/g,'\n'+prefix)});}}}}
assert.equal(spans.length,updates.size);let afterPlan=planText;for(const s of spans.sort((a,b)=>b.start-a.start))afterPlan=afterPlan.slice(0,s.start)+s.text+afterPlan.slice(s.end);JSON.parse(afterPlan);stage(planFile,afterPlan);
const archive=`${base}/root-second-battery-metadata-finish-before`;assert(!fs.existsSync(archive));
for(const [file,c]of changes)assert.equal(fs.existsSync(file)?fs.readFileSync(file,'utf8'):null,c.before,`Concurrent writer ${file}`);
fs.mkdirSync(archive);
for(const [file,c]of changes){const dest=path.join(archive,file);fs.mkdirSync(path.dirname(dest),{recursive:true});if(c.before===null)fs.writeFileSync(dest+'.absent.json','{"previously_absent":true}\n');else fs.writeFileSync(dest,c.before);}
for(const [file,c]of changes){const tmp=file+`.root-metadata-${process.pid}.tmp`;fs.writeFileSync(tmp,c.after);fs.renameSync(tmp,file);}
fs.writeFileSync(`${base}/root-second-battery-metadata-finish-adoption.json`,JSON.stringify({run,authorized_by:'/root',at:new Date().toISOString(),frontier_items:1471,pages:218,batches:109,new_frontier_items:0,new_proofs:0,restored_previously_reviewed_context:restoration.id,restoration_evidence:restoration.independent_review,restored_body_unchanged:true,source_qualification:restoration.provenance_recommendation,longitudinal_binding:binding.minimum_name_replacement,accepted_longitudinal_scope_evidence:binding.evidence,moved_requires:movedRequires,dependency_label_updates:relabeled,archive,changed_files:[...changes.keys()],limits:'No new mathematics or proof audit. Restored accepted local proof unchanged; preserved all actual dependency edges and choice scope. No native gate, readiness or state stamp.'},null,2)+'\n');
console.log(JSON.stringify({restored_context:restoration.id,stale_declarations_rebound:2,source_page_requirements_retargeted:movedRequires.length,dependency_labels_updated:relabeled.length,changed_files:changes.size,frontier_items:1471}));
