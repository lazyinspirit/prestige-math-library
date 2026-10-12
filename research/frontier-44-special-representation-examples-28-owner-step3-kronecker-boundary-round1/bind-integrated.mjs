import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {yamlCandidates} from '../../tools/paths.mjs';
import {itemHashGuard,itemSurfaceHash} from '../../tools/item-hash.mjs';
const run='frontier-44-special-representation-examples-28',base=`research/${run}-owner-step3-kronecker-boundary-round1`;
const hash=b=>createHash('sha256').update(b).digest('hex');
const bind=path=>{const b=readFileSync(path);return {path,raw_sha256:hash(b),...(path.startsWith('items/')?{item_content_sha256:itemHashGuard(b.toString()),item_surface_sha256:itemSurfaceHash(b.toString())}:{})}};
const reviewPath=`${base}/review.json`,integrationPath=`${base}/root-integration-round1/integration.json`,review=JSON.parse(readFileSync(reviewPath)),integration=JSON.parse(readFileSync(integrationPath));
if(hash(readFileSync(reviewPath))!==integration.review_sha256)throw Error('original review changed');
for(const w of integration.writes){
 if(hash(readFileSync(w.path))!==w.after_raw_sha256)throw Error(`integrated current bytes changed: ${w.path}`);
 if(hash(readFileSync(w.before_file))!==w.before_raw_sha256)throw Error(`authentic before bytes changed: ${w.path}`);
 if(hash(readFileSync(`${base}/proposed/${w.path}`))!==w.after_raw_sha256)throw Error(`not exact approved proposal: ${w.path}`);
}
for(const s of review.suppliers)if(bind(s.path).raw_sha256!==s.raw_sha256)throw Error(`supplier changed: ${s.path}`);
for(const c of review.consumers.filter(c=>c.binding.path.startsWith('items/')))if(bind(c.binding.path).raw_sha256!==c.binding.raw_sha256)throw Error(`unchanged consumer changed: ${c.id}`);
for(const p of review.pages.filter(p=>!p.proposed))if(bind(p.canonical.path).raw_sha256!==p.canonical.raw_sha256)throw Error(`unchanged page changed: ${p.canonical.path}`);
for(const source of review.sources)for(const k of ['pdf','extracted_text'])if(hash(readFileSync(source[k].path))!==source[k].raw_sha256)throw Error('source evidence changed');
const require=createRequire(import.meta.url);let YAML;for(const path of yamlCandidates()){try{YAML=require(path);break}catch{}}
if(!YAML)throw Error('renderer YAML parser unavailable');
const reverse=new Map(),texts=new Map();let parsed=0;
for(const filename of readdirSync('items').filter(p=>p.endsWith('.md'))){
 const id=filename.slice(0,-3),text=readFileSync(`items/${filename}`,'utf8'),fm=/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text);if(!fm)throw Error(`missing frontmatter: ${id}`);
 const data=YAML.parse(fm[1]);if(!data||typeof data!=='object')throw Error(`invalid frontmatter: ${id}`);
 texts.set(id,text);parsed++;
 for(const dep of data.deps??[]){if(!reverse.has(dep))reverse.set(dep,[]);reverse.get(dep).push(id)}
}
const L='lem-kronecker-reduction-lemma',T='thm-row-gap-reduction-and-conditional-k-stability',C='cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability',R='rem-no-general-positive-combinatorial-rule-for-kronecker-coefficients-is-known';
const closure=id=>{const seen=new Set(),queue=[...(reverse.get(id)??[])];for(let i=0;i<queue.length;i++){const x=queue[i];if(seen.has(x))continue;seen.add(x);queue.push(...(reverse.get(x)??[]))}return [...seen].sort()};
const citations=id=>[...texts].filter(([other,text])=>other!==id&&text.includes(`[[${id}`)).map(([id])=>id).sort();
const inventory=[L,T].map(id=>({id,direct:(reverse.get(id)??[]).sort(),transitive:closure(id),citations:citations(id)}));
if(JSON.stringify(closure(L))!==JSON.stringify([C,R,T].sort()))throw Error('new supplier consumer scope requires review');
if(JSON.stringify(closure(T))!==JSON.stringify([C,R].sort()))throw Error('new theorem consumer scope requires review');
for(const subject of inventory)for(const id of subject.citations)if(![T,C,R].includes(id))throw Error('new citation consumer requires review');
const supplierBindings=review.suppliers.map(x=>bind(x.path));
const correctedBindings=[L,T,C].map(id=>bind(`items/${id}.md`));
const dispositions=[
 {id:T,binding:correctedBindings[1],supplier_bindings:[correctedBindings[0]],verdict:'current use sound',used_clause:'Lemma proof 1.1 finite small-q LR coefficient identity and proof 2.1 first-row Jacobi–Trudi expansion, not equality of compacted outputs',use_location:'F2; proof1.1,2.1,3.1,4.1',review:'Checked actual integrated identities; single-cut alpha shift and inverse partition inequality preserve LR content and all comparisons under original sharp s-gap; same tail cofactors imply all-t equality and universal eventual threshold including k=1',statement_changed:true,downstream_closed:[C,R]},
 {id:C,binding:correctedBindings[2],supplier_bindings:[correctedBindings[1],correctedBindings[0]],verdict:'current use sound',used_clause:'Row-gap theorem part(i) at ((3,2),(3,2),(4,1)), k=1,s=1',use_location:'F4; proof3.1; final remark',review:'Integrated proof uses exact separated triple with3>=2+1 and first parts3<=3<=4; u=t-1 gives every t>=1. Finite t=0 and t=1 sums remain0 and1 and match sealed exact character calculation; original Statement unchanged',statement_changed:false,downstream_closed:[]},
 {id:R,binding:bind(`items/${R}.md`),supplier_bindings:[correctedBindings[0],correctedBindings[1]],verdict:'unchanged current use sound',used_clause:'bounded-size reduction and eventual constancy without a general positive combinatorial interpretation',use_location:'Statement; Remarks(a),(d)',review:'Actual unchanged text consumes only structural conclusions preserved by corrected interfaces, not old block formula, weak-decrease hypothesis, first-part-order threshold or equality of compacted images; no repair required',statement_changed:false,downstream_closed:[]}
];
const pages=review.pages.map(p=>({binding:bind(p.canonical.path),verdict:'current supplier summary sound',review:p.proposed?'A-page exactly matches approved corrected summary: 2s compacting shear, original2s ell² bound and direct single-cut sharp s-gap argument; open-gap assertions removed':'B-page unchanged: finite0/all-t1 family and theorem use preserved'}));
const manifest=bind(`research/${run}-batch-26.pages.json`);
const facts={version:1,run,batch:'26',reviewer:'/root/repair_step3_kronecker_boundary',recorded_at:new Date().toISOString(),status:'CURRENT_INTEGRATED_MATHEMATICS_AND_ALL_AFFECTED_CONSUMERS_BOUND',mathematical_sufficiency:true,unresolved_mathematical_obligations:[],round:{current:1,maximum:2,new_review_repair_cycle:false,counter_reset:false},original_review:bind(reviewPath),integration:bind(integrationPath),corrected_items:correctedBindings,unchanged_suppliers:supplierBindings,consumer_inventory:{method:'Current complete items metadata parsed by actual renderer YAML parser; reverse deps closure and every exact supplier citation',parsed_items:parsed,subjects:inventory,additional_consumers_found:[]},dispositions,pages,manifest,sources:review.sources.map(s=>({url:s.url,version:s.version,read_scope:s.read_scope,pdf:bind(s.pdf.path),extracted_text:bind(s.extracted_text.path)})),source_and_page_scope_unchanged:true,no_published_consumer_repairs_required:true,proof_conclusions_bound:['Unconditional row-difference vanishing and bounded reduction with corrected2s shear','Full common-index inverse and LR preservation for every smallq<=s','Partition outputs, unchanged tail and original r<=2s ell² bound','Original sharp s-gap theorem and universal eventual-constancy threshold','Independent finite witness values0/1 and all-t>=1 conclusion'],verification_basis:'Same-reviewer current proof/use review and exact-byte equality to reviewed proposals; sealed finite checks retained. This is not a whole-item independent audit or a native gate receipt',prior_local_checks:bind(`${base}/local-checks.json`),finite_checks:bind(`${base}/finite-regression.json`),remaining_operational_work:['Root explicit canonical checks and current proof-contract/notes synchronization','Genuine current native Step3 bookkeeping and engine closure with pauseBeforeStep4 preserved'],canonical_writes_by_reviewer:false,gate_attempt:false,native_history_unchanged:true};
// Stable binding must cover the very same current bytes through the complete inventory pass.
for(const rec of [...correctedBindings,...supplierBindings,...dispositions.map(x=>x.binding),...pages.map(x=>x.binding),manifest])if(hash(readFileSync(rec.path))!==rec.raw_sha256)throw Error(`carrier changed during after-binding: ${rec.path}`);
const output=`${base}/current-after-binding-round1.json`;writeFileSync(output,JSON.stringify(facts,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({path:output,sha256:hash(readFileSync(output)),status:facts.status,consumers:dispositions.length,parsed_items:parsed},null,2));
