import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { yaml } from '../../tools/physics-support/pathway-lib.mjs';
import { SOURCE_SECTIONS, splitFrontmatter, sourceSectionText, factParagraphs, numberedProofSteps } from '../../tools/physics-support/facts-block.mjs';
import { statementHash } from '../../tools/physics-support/step5-statement.mjs';
import { dependencyLevels } from '../../tools/physics-support/item-dependency-levels.mjs';

const run='physics-cm-qm-gr-79-2026-10-11', base=`research/${run}-resumed-orchestration`;
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const read=p=>fs.readFileSync(p,'utf8'), json=p=>JSON.parse(read(p));
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const receipts=['batch3-supplier-repair','batch3-definition-consumer-repair','batch17-interface-repair','batch9-rigid-body-repair','batch36-oscillator-repair','batch66-gr-tetrad-repair'].map(name=>json(`${base}/${name}/receipt.json`));
const ids=new Set(receipts.flatMap(r=>r.changed_items??r.source_rows?.map(row=>row.id)??(Array.isArray(r.scope)?r.scope:[])));
const deps={
  'prop-cm-first-return-map-is-a-local-c1-diffeomorphism':['def-interior-closure-boundary-top','thm-heine-borel-rn','thm-continuous-image-of-a-compact-space-is-compact','cor-mean-value-theorem'],
  'thm-cm-stability-of-extreme-principal-axes':['thm-heine-borel-rn'],
  'thm-cm-instability-of-the-intermediate-axis':['thm-heine-borel-rn'],
  'def-gr-local-frame-and-tetrad-fields':['def-gr-observer-congruence-and-adapted-charts'],
  'lem-gr-tetrad-change-of-basis-is-lorentz':['def-gr-tensor-fields-and-components'],
  ...Object.fromEntries(Object.entries(json(`${base}/batch36-oscillator-repair/metadata-deltas.json`).item_dependency_changes).map(([id,d])=>[id,d.add_deps])),
};
const docs=new Map(), guards=new Map();
function content(p){if(!guards.has(p))guards.set(p,sha(read(p)));return docs.get(p)??read(p);}
function set(p,value){content(p);docs.set(p,typeof value==='string'?value:JSON.stringify(value,null,2)+'\n');}
function info(id){const text=content(`items/${id}.md`), {fm,body}=splitFrontmatter(text);return {text,fm:yaml().parse(fm),body};}
function section(id,heading){const body=info(id).body;return heading?sourceSectionText(body,heading)?.trim():[...SOURCE_SECTIONS].map(h=>sourceSectionText(body,h)?.trim()).find(Boolean);}
for(const r of receipts)for(const row of r.source_hashes_before_parent_metadata_integration??r.source_rows??[]){
  const expected=row.current_raw_sha256??row.source_raw_sha256;
  assert(sha(content(`items/${row.id}.md`))===expected,`Writer/hash changed: ${row.id}`);
}
for(const [id,added] of Object.entries(deps)){
  let {text,fm}=info(id);const missing=added.filter(dep=>!fm.deps.includes(dep));
  for(const dep of added)assert(fs.existsSync(`items/${dep}.md`),`Missing supplier ${dep}`);
  if(!missing.length)continue;
  assert(/^deps: \[[^\n]*\]$/m.test(text),`Unexpected deps layout ${id}`);
  text=text.replace(/^deps: \[([^\n]*)\]$/m,(_,old)=>`deps: [${old}${old?', ':''}${missing.join(', ')}]`);
  const roles=missing.filter(dep=>!fm.dependency_roles?.[dep]).map(dep=>`  ${dep}: mathematical-premise\n`).join('');
  assert(/^dependency_roles:\n(?:[ \t].*\n)+/m.test(text),`Unexpected roles layout ${id}`);
  text=text.replace(/^dependency_roles:\n(?:[ \t].*\n)+/m,block=>block+roles);
  assert(splitFrontmatter(text).body===info(id).body,`Body changed ${id}`);set(`items/${id}.md`,text);
}
const manifestPaths=fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).map(n=>`research/${n}`);
const manifests=new Map(manifestPaths.map(p=>[p,JSON.parse(content(p))]));
const before=new Map(json(`research/${run}-scope-review/batch-3/review-0.input.json`).before_items.map(row=>[row.id,row.statement_sha256]));
const interfaces=new Set([...ids].filter(id=>before.get(id)!==statementHash(info(id).text)));
for(const pages of manifests.values())for(const page of pages)for(const item of page.items)if(ids.has(item.id)){
  const {fm}=info(item.id);item.deps=fm.deps;item.dependency_roles=fm.dependency_roles;
  if(interfaces.has(item.id)&&typeof item.statement==='string')item.statement=section(item.id);
  for(const key of ['physical_scope','framework','empirical_qualifications'])if(key in item&&key in fm)item[key]=fm[key];
}
const graph=dependencyLevels([...manifests.values()].flat(),{validateLabels:false});assert(!graph.errors.length,graph.errors.join('\n'));
const levels=json(`${base}/batch66-gr-tetrad-repair/level-proposal.json`);
for(const row of levels){assert(sha(content(`items/${row.id}.md`))===row.source_sha256||deps[row.id],`Level source changed ${row.id}`);assert(graph.levels.get(row.id)===row.new_level,`Level proposal mismatch ${row.id}`);}
for(const pages of manifests.values())for(const page of pages)for(const item of page.items){
  const level=graph.levels.get(item.id);if(item.dependency_level===level)continue;
  assert(levels.some(row=>row.id===item.id),`Unexpected level change ${item.id}`);
  const p=`items/${item.id}.md`, text=content(p);set(p,text.replace(/^dependency_level: \d+$/m,`dependency_level: ${level}`));item.dependency_level=level;
}
for(const [p,pages] of manifests)set(p,pages);
const contractPaths=fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.proof-contracts\\.json$`).test(n)).map(n=>`research/${n}`);
const proposals=json(`${base}/batch36-oscillator-repair/contract-deltas.json`);
for(const p of contractPaths){
  const doc=JSON.parse(content(p));
  for(const [id,patch] of Object.entries(proposals[p]?.contracts??{}))doc.contracts[id]={...doc.contracts[id],...patch};
  for(const [id,c] of Object.entries(doc.contracts??{})){
    if(ids.has(id)){
      const body=info(id).body, steps=numberedProofSteps(body), facts=[...factParagraphs(body).values()];
      if(steps.length){
        const old=new Map((c.derivations??[]).map(d=>[d.step,d]));
        c.derivations=steps.map(s=>({...old.get(s.id),id:old.get(s.id)?.id??`step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:s.inputs}));
        const current=[];
        for(const fact of facts)for(const source of new Set(fact.links)){
          const prior=(c.citations??[]).find(row=>row.fact===fact.label&&row.source===source);
          const heading=prior?.source_section??[...SOURCE_SECTIONS].find(h=>section(source,h));
          assert(heading,`No source section ${source}`);
          const uses=steps.filter(s=>new RegExp(`\\b${fact.label}\\b`).test(s.text)).map(s=>s.id);
          current.push(prior?{...prior,uses}:{fact:fact.label,source,source_section:heading,quote:section(source,heading),uses});
        }
        c.citations=current;
      }
    }
    for(const cite of c.citations??[])if(interfaces.has(cite.source)){
      const quote=section(cite.source,cite.source_section);assert(quote,`Missing mirrored source section ${cite.source}`);cite.quote=quote;
    }
  }
  set(p,doc);
}
const prose='research/plan-general-relativity-track.md', old=content(prose);
const marker='Declared earlier prerequisites: `gr-framework-and-geometry`.';
assert(old.includes(marker),'GR02 prose prerequisite marker missing');
set(prose,old.replace(marker,'Declared earlier prerequisites: `gr-framework-and-geometry`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `roots-and-rational-powers`, and `the-exterior-derivative-and-cartan-calculus`. The latter three supplier pages were adopted in the approved 2026-10-10 closure recorded in `research/'+run+'-supplier-page-closure/batch66-author-requires-adoption.json`; the Original reservation below remains historical.'));
const changes=[...docs].filter(([p,value])=>value!==read(p));
for(const [p] of changes)assert(sha(read(p))===guards.get(p),`Integration input changed ${p}`);
for(const [p,value] of changes){const temp=`${p}.${process.pid}.tmp`;fs.writeFileSync(temp,value);fs.renameSync(temp,p);}
const receipt={run,at:new Date().toISOString(),scope:'Mechanical metadata integration; no battery, independent audit or native-history rewrite',repaired_items:[...ids],source_interfaces_mirrored:[...interfaces],changes:changes.map(([p,value])=>({path:p,before_sha256:guards.get(p),after_sha256:sha(value)}))};
fs.writeFileSync(`${base}/completed-metadata-integration.json`,JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({files_changed:changes.length,repaired_items:ids.size,interfaces_mirrored:interfaces.size}));
