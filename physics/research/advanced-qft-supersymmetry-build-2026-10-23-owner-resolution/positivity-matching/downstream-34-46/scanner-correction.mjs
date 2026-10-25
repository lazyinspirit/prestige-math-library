import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
const { splitFrontmatter } = await import(pathToFileURL(resolve('tools/physics-support/step6-lib.mjs')));
const { parseFrontmatter } = await import(pathToFileURL(resolve('tools/physics-support/content-policy-lib.mjs')));
const run='advanced-qft-supersymmetry-build-2026-10-23';
const base=`research/${run}-owner-resolution/positivity-matching/downstream-34-46`;
const hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const target='items/def-qftx-adjoint-higgs-monopole-sector.md';
const before=hash(target), rows=new Map(), aliases=new Map(), inputs={}, errors=[];
for(const name of readdirSync('research').filter(n=>n.startsWith(`${run}-batch-`)&&n.endsWith('.pages.json'))){
 const p=`research/${name}`;inputs[p]=hash(p);
 for(const page of JSON.parse(readFileSync(p,'utf8')))for(const row of page.items??[]){
  if(!row||typeof row!=='object')continue;
  const path=`items/${row.id}.md`;if(!existsSync(path))continue;
  try{
   const meta=parseFrontmatter(splitFrontmatter(readFileSync(path,'utf8')).frontmatter);
   if(!meta||typeof meta!=='object'||meta.id!==row.id)throw new Error('source identity mismatch');
   rows.set(row.id,{batch:name.split('-batch-')[1].split('.')[0],deps:meta.deps??[],justified_by:meta.justified_by??[]});
   for(const alias of meta.aliases??[])aliases.set(alias,row.id);
   inputs[path]=hash(path);
  }catch(e){errors.push({path,error:String(e.message)});}
 }
}
if(errors.length)throw new Error(JSON.stringify(errors));
const canonical=id=>aliases.get(id)??id;
const seeds=new Set([...rows].filter(([,r])=>['18','28'].includes(r.batch)).map(([id])=>id));
const seen=new Set(seeds);
for(;;){let changed=false;for(const [id,r] of rows){if(seen.has(id))continue;if([...r.deps,...r.justified_by].some(x=>seen.has(canonical(x)))){seen.add(id);changed=true;}}if(!changed)break;}
const descendants=[...seen].filter(id=>!seeds.has(id)).sort();
if(descendants.some(id=>['34','46'].includes(rows.get(id).batch)))throw new Error('New34/46 logical descendant requires scientific review');
const after=hash(target);if(after!==before)throw new Error('Read-only source guard failed');
const p=`${base}/review.json`, review=JSON.parse(readFileSync(p,'utf8'));
if(!existsSync(`${base}/review.before-scanner-correction.json`))copyFileSync(p,`${base}/review.before-scanner-correction.json`);
review.actual_source_graph={outside18_28_descendants:descendants,scope:'Actual deps/justified_by from every existing current-run manifest carrier, parsed by canonical line-anchored splitFrontmatter plus renderer frontmatter parser; owned aliases resolved.',unrelated_parse_errors:[],carriers_parsed:rows.size,inputs,scanner_correction:{cause:'The earlier ad hoc raw split on --- truncated an interior quoted locator containing signature (+---). The supplier YAML is valid; the previous parse diagnosis was a scanner false positive.',target,target_sha256:before,target_source_unchanged:before===after,canonical_splitter:'tools/physics-support/step6-lib.mjs#splitFrontmatter',canonical_parser:'tools/physics-support/content-policy-lib.mjs#parseFrontmatter',previous_review:`${base}/review.before-scanner-correction.json`,previous_review_sha256:hash(`${base}/review.before-scanner-correction.json`),source_metadata_native_changes:false}};
writeFileSync(p,`${JSON.stringify(review,null,2)}\n`);
console.log(JSON.stringify({carriers_parsed:rows.size,parse_errors:errors.length,outside18_28_descendants:descendants,source_unchanged:before===after,target_sha256:before}));
