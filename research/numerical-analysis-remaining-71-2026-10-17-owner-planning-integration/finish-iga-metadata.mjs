import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {yaml} from '../../tools/pathway-lib.mjs';
import {splitFrontmatter,sourceSectionText} from '../../tools/facts-block.mjs';
import {spawnSync} from 'node:child_process';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/iga-final-before`;
const manifest=`research/${run}-batch-69.pages.json`,contracts=`research/${run}-batch-69.proof-contracts.json`,cross=`research/${run}-batch-69.cross-batch-dependencies.json`,coverage=`research/${run}-batch-69.coverage.json`;
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));
if(Object.values(state.dispatches).some(x=>x.stage==='1-scaffold'&&x.covers.includes('69')&&!x.endedAt))throw Error('writer live');
for(const lane of ['geometry','approximation'])if(!existsSync(`research/${run}-ROOT-iga-${lane}-supplier-cycle2/REVIEW.md`))throw Error('final report absent');
if(existsSync(archive))throw Error('already finalized');
const pages=JSON.parse(readFileSync(manifest,'utf8')),ids=pages.flatMap(p=>p.items.map(i=>i.id));
const inputs=[manifest,contracts,cross,coverage,...ids.map(id=>`items/${id}.md`),...pages.map(p=>`library/${p.category}/${p.id}.md`)];
const originals=new Map(inputs.map(p=>[p,readFileSync(p,'utf8')]));
for(const [p,text]of originals){const target=`${archive}/${p}`;mkdirSync(target.slice(0,target.lastIndexOf('/')),{recursive:true});writeFileSync(target,text,{flag:'wx'});}
const statementChanged=new Set(['thm-nurbs-quotient-best-approximation-transfer','lem-matching-nurbs-patch-traces-give-h1-conformity','lem-boundary-preserving-tensor-schoenberg-h1-approximation','def-isogeometric-galerkin-patch-space-and-refinement']);
const proofChanged=new Set([...statementChanged,'lem-nurbs-knot-cell-simplicial-geometry-adapter','thm-nurbs-p1-tensor-spline-h1-error-rate','thm-nurbs-tensor-product-l2-approximation','thm-boundary-preserving-nurbs-projector-and-h1-rate','cex-multipatch-trace-mismatch-not-h1']);
const oldUrl='https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf',newUrl='https://d-nb.info/1278950273/34';
const source=JSON.parse(originals.get(coverage)).pages.flatMap(p=>p.sources??[]).find(s=>s.url===newUrl);
if(source?.fetch_verified?.bytes!==12378027||source.fetch_verified.sha256_16!=='3211742664d7720a')throw Error('DNB exact native receipt guard');
const bibliography=[];
for(const id of ids){const p=`items/${id}.md`,text=originals.get(p);if(text.includes(oldUrl)){writeFileSync(p,text.replaceAll(oldUrl,newUrl));bibliography.push(id);}}
const mirrors=[];
for(const page of pages)for(const item of page.items){const {fm,body}=splitFrontmatter(readFileSync(`items/${item.id}.md`,'utf8')),m=yaml().parse(fm);if(JSON.stringify(item.deps)!==JSON.stringify(m.deps)){item.deps=m.deps;mirrors.push(item.id);}if(statementChanged.has(item.id))item.statement=sourceSectionText(body,item.kind==='definition'?'Definition':'Statement').trim();if(item.sources){item.sources=JSON.parse(JSON.stringify(item.sources).replaceAll(oldUrl,newUrl));}}
writeFileSync(manifest,JSON.stringify(pages,null,2)+'\n');
const doc=JSON.parse(originals.get(contracts)),entries=doc.contracts??doc;
const regenerate=Object.keys(entries).filter(id=>proofChanged.has(id)||(entries[id].citations??[]).some(c=>statementChanged.has(c.source))).filter(id=>/## (Proof|Refutation|Verification|Counterexample)\n/.test(readFileSync(`items/${id}.md`,'utf8')));
const child=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',contracts,...regenerate],{encoding:'utf8'});if(child.status!==0)throw Error(child.stderr||child.stdout);
const edgeDoc=JSON.parse(originals.get(cross));
for(const edge of edgeDoc)if(edge.kind==='page'&&edge.supplier==='curved-mesh-geometry-and-conservative-mesh-transfer'){edge.status='verified';edge.owner_resolution={at:new Date().toISOString(),evidence:'Original geometry reviewer SECOND/final actual adapter/data/tensor/Strang and all old/current consumers complete; original approximation reviewer SECOND/final complete. Root read both FULL reports and actual repaired carriers. Existing PE17 definitions retained and actual63 native author drained14:20; local rational-cell adapter and coefficient bounds supply the declared interface. This closes historical interface availability only; native independent reviews/gates remain due.',historical_status:'open',historical_evidence:edge.evidence};}
writeFileSync(cross,JSON.stringify(edgeDoc,null,2)+'\n');
const cov=JSON.parse(originals.get(coverage));cov.owner_resolution={at:new Date().toISOString(),evidence:'Original geometry and approximation SECOND/final actual reviews completed; historical scope/interface/source blockers retained below as historical author handoff. Root bookkeeping and scoped checks are separate receipts; native independent reviews/gates remain due.',historical_blockers:cov.blockers??[]};cov.blockers=[];cov.status='Full source history retained; both assigned final prerequisite reviews complete; native independent reviews and gates remain due.';writeFileSync(coverage,JSON.stringify(cov,null,2)+'\n');
writeFileSync(`${base}/iga-final-metadata-integration.json`,JSON.stringify({run,at:new Date().toISOString(),archive,manifest_dependency_mirrors:mirrors,statement_mirrors:[...statementChanged],bibliography_same_version_fulltext_alignment:{oldUrl,newUrl,items:bibliography,genuine_native_fetch:source.fetch_verified,fulltext_identity_evidence:`research/${run}-ROOT-iga-geometry-supplier-cycle1/SOURCE-LIVENESS-ADDENDUM.md`},regenerated_contracts:regenerate,regeneration_output:child.stdout,mathematical_body_changes_by_root:false,native_acceptance_claimed:false,original_input_hashes:[...originals].map(([p,t])=>({path:p,sha256:createHash('sha256').update(t).digest('hex')}))},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({mirrors,bibliography:bibliography.length,regenerate}));
