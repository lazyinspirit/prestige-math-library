import{readFileSync,writeFileSync,mkdirSync,existsSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{yaml}from'../../tools/pathway-lib.mjs';
import{splitFrontmatter,sourceSectionText}from'../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/hp-final-before`,file=ext=>`research/${run}-batch-68.${ext}.json`;
if(existsSync(archive))throw Error('already integrated');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`,'utf8'));if(Object.values(state.dispatches).some(d=>d.stage==='1-scaffold'&&d.covers.includes('68')&&!d.endedAt))throw Error('native writer live');
for(const lane of['simplex','corner'])if(!existsSync(`research/${run}-ROOT-hp-${lane}-supplier-cycle2/REVIEW.md`))throw Error('final report missing');
const pages=JSON.parse(readFileSync(file('pages'),'utf8')),ids=pages.flatMap(p=>p.items.map(i=>i.id));
for(const p of [...['pages','proof-contracts','coverage','cross-batch-dependencies'].map(file),...ids.map(id=>`items/${id}.md`),...pages.map(p=>`library/${p.category}/${p.id}.md`)]){const dest=`${archive}/${p}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,readFileSync(p),{flag:'wx'});}
const statements=new Set(['lem-hp-unweighted-legendre-derivative-tail','lem-hp-simplex-p-explicit-conforming-interpolant','thm-hp-corner-exponential-energy-convergence','lem-hp-weighted-analytic-corner-pointwise-control']);
const changed=new Set([...statements,'thm-hp-triangle-unweighted-smooth-approximation','lem-hp-analytic-polynomial-approximation-on-a-triangle']);
const mirrors=[];for(const p of pages)for(const i of p.items){const{fm,body}=splitFrontmatter(readFileSync(`items/${i.id}.md`,'utf8')),m=yaml().parse(fm);if(JSON.stringify(i.deps)!==JSON.stringify(m.deps)){i.deps=m.deps;mirrors.push(i.id);}if(statements.has(i.id))i.statement=sourceSectionText(body,'Statement').trim();}
writeFileSync(file('pages'),JSON.stringify(pages,null,2)+'\n');
const contracts=JSON.parse(readFileSync(file('proof-contracts'),'utf8')),entries=contracts.contracts??contracts;
const regen=Object.keys(entries).filter(id=>changed.has(id)||(entries[id].citations??[]).some(c=>statements.has(c.source)));
const child=spawnSync(process.execPath,['tools/regen-contract-entries.mjs',file('proof-contracts'),...regen],{encoding:'utf8'});if(child.status!==0)throw Error(child.stderr||child.stdout);
const cross=JSON.parse(readFileSync(file('cross-batch-dependencies'),'utf8'));for(const row of cross)if(row.status==='open'&&row.supplier==='curved-mesh-geometry-and-conservative-mesh-transfer'){row.owner_resolution={at:new Date().toISOString(),historical_status:row.status,historical_unresolved_supplier_ids:row.unresolved_supplier_ids,historical_evidence:row.evidence,evidence:'Actual63 native author drained14:20; real geometry page and five stated interfaces present, same geometry interfaces read by root and original IGA geometry reviewer final cycle. All68 mathematical claims remain affine and consume no curved result. Original hp simplex→corner SECOND/final actual full consumer closure complete; this closes page availability/context only, no curved-scope extension or independent acceptance.'};row.status='verified';row.unresolved_supplier_ids=[];}
writeFileSync(file('cross-batch-dependencies'),JSON.stringify(cross,null,2)+'\n');
writeFileSync(`${base}/hp-final-metadata-integration.json`,JSON.stringify({run,at:new Date().toISOString(),archive,manifest_statement_mirrors:[...statements],dependency_mirrors:mirrors,regenerated_contracts:regen,regeneration_output:child.stdout,canonical_sources_changed_by_root:false,analytic_step_label_change:'old1.2→current2.2 after cover construction',native_acceptance_claimed:false},null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({statement_mirrors:[...statements],dependency_mirrors:mirrors,regenerated_contracts:regen}));
