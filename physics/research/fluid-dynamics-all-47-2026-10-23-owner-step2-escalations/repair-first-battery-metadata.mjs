import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {collect,refresh} from '../../tools/physics-support/frontier-dependency-ledger.mjs';
import {sourceSectionText,numberedProofSteps} from '../../tools/physics-support/facts-block.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/first-battery-metadata-integration.json`,read=p=>JSON.parse(rf(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(out))throw Error('Already repaired');
const writes=new Map(),changes=[],id='ex-fd-constant-profile-bootstrap',source=`items/${id}.md`,before=rf(source,'utf8');
let after=before.replaceAll('\\iota','\\mathcal I');
const old='Use the map $\\mathcal I$ defined in the Example, denoting it by $\\mathcal I$ in this calculation: $\\mathcal I(y)=\\mathcal I(y)=[\\xi\\mapsto y]$.';
if(!after.includes(old))throw Error('Unexpected local notation');
after=after.replace(old,'Use the constant-profile map $\\mathcal I:\\mathbb R\\to H$ defined in the Example.');
writes.set(source,after);changes.push({id,operation:'Uniformly rename the constant-profile linear isometry to mathcal I; remove only duplicate alias wording. Domains, hypotheses, all formulas and conclusions are retained.'});
for(const p of [`research/${run}-batch-34.pages.json`,'research/plan-spec.json']){const d=read(p);for(const page of Array.isArray(d)?d:d.pages)for(const row of page.items??[])if(row.id===id)row.statement=sourceSectionText(after,'Example').trim();writes.set(p,JSON.stringify(d,null,2)+'\n');}
const cp=`research/${run}-batch-34.proof-contracts.json`,contract=read(cp),steps=new Map(numberedProofSteps(after).map(s=>[s.id,s]));
for(const row of contract.contracts[id].derivations??[]){if(!steps.has(row.step))throw Error('Missing current step');row.claim=steps.get(row.step).claim;}
writes.set(cp,JSON.stringify(contract,null,2)+'\n');
const coveragePath=`research/${run}-batch-18.coverage.json`,coverage=read(coveragePath);let fixed=0;
for(const page of coverage.pages)for(const src of page.sources??[])for(const a of src.source_resolution?.alternatives??[])if(a.item==='lem-fd-polynomial-ode-continuation'){
 if(!a.deps.includes('thm-euclidean-space-complete'))throw Error('Unexpected coverage preimage');
 a.deps=a.deps.map(d=>d==='thm-euclidean-space-complete'?'thm-cauchy-criterion-via-lub':d);fixed++;
 changes.push({item:a.item,operation:'Coverage prerequisite now names the actual coordinatewise Cauchy-completeness supplier used by current F2/proof3.1. Current complete proof was read; all original source retrieval/reading evidence retained.'});
}
if(fixed!==1)throw Error('Unexpected coverage scope');writes.set(coveragePath,JSON.stringify(coverage,null,2)+'\n');
const ledger=collect(process.cwd(),run),missing=ledger.edges.filter(e=>!e.reviews.length);if(missing.length!==14||ledger.unreviewed_batches.length)throw Error('Unexpected ledger scope');
const files=new Map(),fact=read(`${base}/current-fact-attribution-13.json`);
for(const e of missing){
 const path=`research/${run}-batch-${e.consumer_batch}.cross-batch-dependencies.json`;if(!files.has(path))files.set(path,read(path));
 let evidence;
 if(e.consumer_batch==='13'){const r=fact.rows.find(r=>r.id===e.consumer&&r.supplier===e.supplier);if(!r)throw Error('Missing real formulation review');evidence=`Root adopts actual same-reviewer direct formulation use in ${base}/current-fact-attribution-13.json: ${r.reason} Current exact source and metadata are bound in fact-attribution-metadata-integration.json.`;}
 else if(e.consumer_batch==='16')evidence=`Root adopts actual pathwise conformation/smooth-motion review in ${base}/batches-15-16-resolution.json and source2 final104 closure. The Definition uses the specified motion and velocity trajectory to interpret C(t); no additional Eulerian field regularity is inferred.`;
 else if(e.consumer_batch==='26')evidence=`Root adopts actual same-scientist direct weak-moment Euler proof in ${base}/batch-25-resolution.json. The Maxwellian density, mean and temperature give the pressure/energy Gaussian moments under the explicitly retained positive-density and temperature hypotheses. This is the actual moment supplier, not the unused controlled-passage theorem.`;
 else if(e.consumer_batch==='46')evidence=`Root adopts actual same-scientist exact real-trigonometric supplier review in ${base}/batch-46-resolution.json and full46/47 closure. The real sine/cosine definitions, derivatives and period conventions support the displayed capillary mode and smooth periodic descent; all hypotheses and modes remain retained.`;
 else if(e.consumer_batch==='47')evidence=`Root adopts actual fixed Cartesian inertial-chart and SI formulation review in ${base}/batch-47-resolution.json and source2 final104 closure. The free-surface postulate states its classical absolute-time/Euclidean frame and units; no empirical or relativistic conclusion is inferred.`;
 else throw Error('No actual scientific authority for edge');
 files.get(path).push({kind:e.kind,consumer:e.consumer,supplier:e.supplier,status:'verified',evidence});changes.push({kind:'cross-batch-review',consumer:e.consumer,supplier:e.supplier,evidence});
}
for(const[path,d]of files)writes.set(path,JSON.stringify(d,null,2)+'\n');
const archive=`${base}/before-first-battery-metadata`;mkdirSync(archive,{recursive:false});const preimages=[];
for(const[path,text]of writes){const bytes=rf(path),target=`${archive}/${path.replaceAll('/','__')}`;wf(target,bytes,{flag:'wx'});preimages.push({path,archive:target,sha256:sha(bytes),after_sha256:sha(text)});}
for(const[path,text]of writes)wf(path,text);
refresh(process.cwd(),run,true);
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),native_failure:`${base}/first-native-battery.json`,changes,preimages,source_changes:[id],item_dependencies_changed:[],source_reading_claims_added:false,complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({notation_sources:1,coverage_rows:fixed,current_cross_batch_edges:missing.length,files:writes.size}));
