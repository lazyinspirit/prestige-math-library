// Root-only, drained Step-2 integration. This grants no review or gate coverage.
import {readFileSync as read, writeFileSync as write, existsSync as exists, mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {runPages, dependencyLevels} from '../../tools/item-dependency-levels.mjs';
import {yaml} from '../../tools/pathway-lib.mjs';
import {splitFrontmatter, SOURCE_SECTIONS, sourceSectionText} from '../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17', base=`research/${run}-owner-planning-integration`;
const receipt=`${base}/step2-source-metadata-integration.json`, archive=`${base}/step2-source-metadata-before`;
if(exists(receipt)) throw Error('Already integrated; preserve the first exact history');
const state=JSON.parse(read(`.autopilot/${run}/state.json`));
if(!state.paused || state.stage!=='2-scope-review' || Object.values(state.dispatches).some(d=>!d.endedAt)) throw Error('Require actual paused, drained Step2 boundary');
const allowed=new Set([
 'lem-nufft-certified-gaussian-gridding-returns-a-status',
 'lem-ewald-certified-particle-mesh-evaluator-terminates',
 'lem-hlr-bottom-up-recompression-error-bound',
 'lem-strong-rrqr-interpolative-decomposition-returns-a-status',
 'lem-riccati-finite-budget-wrappers-return-a-status',
 'def-fv-regular-simplicial-companion-family',
 'lem-fv-conforming-companion-and-test-recovery',
 'thm-tpfa-discrete-rellich-and-physical-gradient-closure',
 'lem-hybrid-mimetic-backward-euler-energy-and-compactness',
 'thm-hybrid-mimetic-parabolic-weak-flux-limit',
 'thm-hp-galerkin-h-p-regularity-energy-bound',
]);
const pages=runPages(process.cwd(),run), originalCount=pages.reduce((n,p)=>n+p.items.length,0);
if(pages.length!==142 || originalCount!==1456) throw Error('Unexpected original frontier');
const source=new Map(), originals=new Map(), changedInterfaces=[], additions=[], changes=[];
const sha=x=>createHash('sha256').update(x).digest('hex');
const get=id=>{if(!source.has(id)){const raw=read(`items/${id}.md`,'utf8'),{fm,body}=splitFrontmatter(raw),meta=yaml().parse(fm);if(meta.id!==id||meta.status!=='draft'||(meta.pipeline_run!==undefined&&meta.pipeline_run!==run))throw Error('Source ownership '+id);source.set(id,{raw,meta,body});}return source.get(id);};
const claim=body=>{for(const h of SOURCE_SECTIONS){const t=sourceSectionText(body,h)?.trim();if(t)return t;}throw Error('No citable claim');};
const iface=raw=>[...raw.replace(/^---\r?\n[\s\S]*?\r?\n---/,'').matchAll(/^##[ \t]+(?:Statement|Definition|Postulate|Observations|Uncertainty|Setup|Procedure|Interpretation)[ \t]*\r?\n([\s\S]*?)(?=^##[ \t]+|(?![\s\S]))/gm)].map(m=>m[0].replace(/\r\n/g,'\n').trim());
for(const p of pages){
 const path=`library/${p.category}/${p.id}.md`, raw=read(path,'utf8'),meta=yaml().parse(splitFrontmatter(raw).fm);
 if(meta.page!==p.id||meta.status!=='draft')throw Error('Page ownership '+p.id);
 const actual=[...(meta.items??[]),...(meta.examples??[])];
 if(new Set(actual).size!==actual.length)throw Error('Duplicate placement '+p.id);
 const old=new Map(p.items.map(i=>[i.id,i]));
 for(const id of old.keys())if(!actual.includes(id))throw Error('Dropped original '+id);
 const native=`research/${run}-scope-review/batch-${p.batch}/repair-1.input.json`;
 const before=exists(native)?JSON.parse(read(native)).before_interfaces??{}:{};
 p.items=actual.map(id=>{
  const s=get(id), prior=old.get(id);if(!prior){if(!allowed.has(id))throw Error('Unexpected new item '+id);additions.push({id,page:p.id,batch:p.batch});}
  const row=prior?{...prior}:{id,strategy:'Complete same-frontier prerequisite authored by the assigned Codex escalation owner; see the exact scope report and source-local proof.'};
  for(const key of ['id','kind','title','deps']){if(s.meta[key]===undefined)throw Error('Missing source field '+id+' '+key);row[key]=s.meta[key];}
  for(const key of ['justified_by','provenance','sources','generation']){if(s.meta[key]!==undefined)row[key]=s.meta[key];else delete row[key];}
  if(!prior||id==='alg-hlr-bottom-up-recompression'||(before[id]&&JSON.stringify(before[id])!==JSON.stringify(iface(s.raw)))){row.statement=claim(s.body);if(prior)changedInterfaces.push(id);}
  return row;
 });
}
if(additions.length!==allowed.size || additions.some(x=>!allowed.has(x.id)))throw Error('New prerequisite inventory incomplete');
const extras={
 'nonuniform-fast-fourier-transforms':['outward-rounded-interval-and-ball-arithmetic','finite-precision-direct-factorizations'],
 'randomized-low-rank-approximation':['conjugate-families-and-posterior-prediction'],
 'energy-stable-incompressible-navier-stokes-discretization':['parabolic-finite-element-methods'],
 'discontinuous-galerkin-methods':['finite-element-meshes-and-interpolation','ceas-lemma-and-aubin-nitsche-error-estimates'],
 'isogeometric-galerkin-methods':['finite-element-meshes-and-interpolation','ceas-lemma-and-aubin-nitsche-error-estimates','variational-crimes-and-strang-lemmas'],
 'monotone-hjb-schemes-and-policy-iteration':['measures-and-their-basic-properties','lebesgue-measure-on-euclidean-space','countability-and-uncountability'],
};
const plan=JSON.parse(read('research/plan-spec.json')), pageMap=new Map(plan.pages.map(p=>[p.id,p])), homes=new Map();
for(const p of plan.pages)for(const i of p.items??[])if(!homes.has(i.id))homes.set(i.id,p.id);
for(const p of pages){pageMap.set(p.id,p);for(const i of p.items)homes.set(i.id,p.id);p.requires=[...new Set([...(p.requires??[]),...(extras[p.id]??[])])];}
const closure=id=>{const seen=new Set(),visit=x=>{if(seen.has(x))return;seen.add(x);for(const dep of pageMap.get(x)?.requires??[])visit(dep);};visit(id);return seen;};
const addedEdges=[];
for(const p of pages)for(const i of p.items)for(const dep of i.deps){const home=homes.get(dep);if(home&&home!==p.id&&!closure(p.id).has(home)){p.requires.push(home);addedEdges.push({consumer:p.id,supplier:home,item:i.id,dependency:dep});}}
// Check the complete reachable page graph before writing a metadata carrier.
const done=new Set(),active=new Set();function visit(id,route=[]){if(active.has(id))throw Error('Page cycle '+[...route,id].join(' -> '));if(done.has(id))return;active.add(id);for(const dep of pageMap.get(id)?.requires??[])visit(dep,[...route,id]);active.delete(id);done.add(id);}for(const p of pages)visit(p.id);
const graph=dependencyLevels(pages,{validateLabels:false});if(graph.errors.length)throw Error(graph.errors.join('\n'));
const save=(path,text)=>{const old=read(path,'utf8');if(old===text)return;const dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});if(exists(dest))throw Error('Archive exists '+path);write(dest,old,{flag:'wx'});write(path,text);changes.push({path,before_raw_sha256:sha(old),after_raw_sha256:sha(text)});};
for(const[id,s]of source){const level=graph.levels.get(id);if(s.meta.dependency_level===level)continue;const match=s.raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);let fm=match[1];fm=/^dependency_level:/m.test(fm)?fm.replace(/^dependency_level:.*$/m,`dependency_level: ${level}`):fm+`\ndependency_level: ${level}`;const next=s.raw.replace(match[0],`---\n${fm}\n---`);if(splitFrontmatter(next).body!==s.body)throw Error('Mathematical body changed '+id);save(`items/${id}.md`,next);s.raw=next;s.meta.dependency_level=level;}
for(const p of pages){const order=new Map(p.items.map((i,n)=>[i.id,n]));for(const i of p.items)i.dependency_level=graph.levels.get(i.id);p.items.sort((a,b)=>a.dependency_level-b.dependency_level||order.get(a.id)-order.get(b.id));
 const path=`library/${p.category}/${p.id}.md`,raw=read(path,'utf8'),m=raw.match(/^---\r?\n([\s\S]*?)\r?\n---/),doc=yaml().parseDocument(m[1]);
 for(const key of ['items','examples']){const previous=doc.get(key)?.toJSON?.()??doc.toJSON()[key]??[];if(previous.length){const ids=new Set(previous);doc.set(key,p.items.filter(i=>ids.has(i.id)).map(i=>i.id));}}
 const next=raw.replace(m[0],`---\n${String(doc).trimEnd()}\n---`);if(splitFrontmatter(next).body!==splitFrontmatter(raw).body)throw Error('Page prose changed '+p.id);save(path,next);
}
for(let n=1;n<=71;n++){const path=`research/${run}-batch-${n}.pages.json`;save(path,JSON.stringify(pages.filter(p=>p.batch===String(n)).map(({batch,...p})=>p),null,2)+'\n');}
write(receipt,JSON.stringify({version:1,run,at:new Date().toISOString(),archive,original_items:originalCount,current_items:graph.items.size,pages:pages.length,additions,changed_interface_mirrors:changedInterfaces,added_item_induced_page_edges:addedEdges,source_bodies_changed:false,page_prose_changed:false,changes,native_coverage_granted:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({items:graph.items.size,additions:additions.length,metadata_files_changed:changes.length,added_edges:addedEdges.length}));
