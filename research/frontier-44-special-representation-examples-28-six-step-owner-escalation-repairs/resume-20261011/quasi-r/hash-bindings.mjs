import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {resolve, dirname} from 'node:path';
import {itemHashGuard} from '../../../../tools/item-hash.mjs';
import {frontmatterList} from '../../../../tools/frontmatter-list.mjs';

const here=dirname(fileURLToPath(import.meta.url));
const root=resolve(here,'../../../..');
const subjects=['lem-quasi-r-divided-power-integrality-on-based-lattices',
 'thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules'];
const sha=text=>createHash('sha256').update(text).digest('hex');
const items=new Map(),aliases=new Map();
for(const file of readdirSync(resolve(root,'items')).filter(x=>x.endsWith('.md'))){
 const path=`items/${file}`,text=readFileSync(resolve(root,path),'utf8');
 const id=file.slice(0,-3),deps=frontmatterList(text,'deps');
 const row={id,path,deps,raw_sha256:sha(text),content_sha256:itemHashGuard(text)};
 items.set(id,row);
 for(const alias of frontmatterList(text,'aliases'))aliases.set(alias,id);
}
const canonical=id=>aliases.get(id)||id;
const reached=new Set(subjects),rows=[];
let progress=true;
while(progress){
 progress=false;
 for(const row of items.values()){
  if(reached.has(row.id))continue;
  const suppliers=row.deps.map(canonical).filter(id=>reached.has(id));
  if(!suppliers.length)continue;
  reached.add(row.id);progress=true;
  rows.push({...row,affected_suppliers:suppliers,
   direct:row.deps.map(canonical).some(id=>subjects.includes(id))});
 }
}
const supplierIds=['lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains',
 'lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain',
 'cex-finite-type-based-modules-need-not-have-finite-basis-compatible-envelopes'];
const evidencePaths=[
 'quasi-r/renewed-authoring/periodic-module-and-finite-cut-coherence.md',
 'quasi-r/renewed-tensor-escape/exact-finite-cut-experiment.py',
 'quasi-r/renewed-tensor-escape/investigation.md'];
const evidence=evidencePaths.map(path=>{
 const repoPath=`research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/${path}`;
 return {path:repoPath,raw_sha256:sha(readFileSync(resolve(root,repoPath)))};
});
const result={version:1,recorded_at:new Date().toISOString(),acceptance:false,
 purpose:'Current disk binding; no consumer mathematical audit or review-round reset',
 subjects:subjects.map(id=>items.get(id)),suppliers:supplierIds.map(id=>items.get(id)),
 evidence,consumer_count:rows.length,consumers:rows.map(row=>({...row,
  affected_suppliers:row.deps.map(canonical).filter(id=>reached.has(id))
 })).sort((a,b)=>a.id.localeCompare(b.id)),
 unresolved:'Unrestricted finite-type finite supported positive-polynomial tensor lifts and finite inverse transitions',
 new_route_result:'Nonzero integer shear amplitudes scale each endpoint and cannot change cyclotomic nondivisibility'};
writeFileSync(resolve(here,'current-bindings.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({subjects:result.subjects.map(({id,raw_sha256,content_sha256})=>({id,raw_sha256,content_sha256})),consumer_count:rows.length},null,2));
