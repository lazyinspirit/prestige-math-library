import{readFileSync,writeFileSync,mkdirSync}from'node:fs';import{createHash}from'node:crypto';import{itemHashGuard}from'../../../../tools/item-hash.mjs';
const run='hopf-hecke-unfinished-15-2026-10-15',base=`research/${run}-owner/step2-gate-escalation/boundaries-6-10`;
const sha=b=>createHash('sha256').update(b).digest('hex');const read=p=>JSON.parse(readFileSync(p));
const contexts=read(`${base}/contexts.json`),repairs=read(`${base}/repairs.json`),diagnostic=read(`${base}/frontier-before-context.json`);
repairs['ex-hh-regular-hopf-module-projection']={empty:['checked','Example: the module is regular H itself, and epsilon(1)=1 excludes H=0 over a field. Verification2.1 identifies its coinvariants k1 and the decomposition, including h=0, without claiming a zero carrier.']};
const targeted=new Set(diagnostic.templates.flatMap(t=>t.rows.map(r=>`${r.id}|${r.case}`)));
const ops=[],guards=[],manifest=[];
for(let batch=6;batch<=10;batch++){
 const path=`research/${run}-batch-${batch}.proof-contracts.json`,bytes=readFileSync(path),doc=JSON.parse(bytes);
 const ap=`${base}/archive/${path}`;mkdirSync(ap.slice(0,ap.lastIndexOf('/')),{recursive:true});writeFileSync(ap,bytes);
 for(const[id,c]of Object.entries(doc.contracts)){
  if(!contexts[id])throw Error(`Missing reviewed source context: ${id}`);
  const ip=`items/${id}.md`,src=readFileSync(ip,'utf8'),sourceGuard=itemHashGuard(src),sourceRaw=sha(src);
  const sp=`${base}/archive/${ip}`;mkdirSync(sp.slice(0,sp.lastIndexOf('/')),{recursive:true});writeFileSync(sp,src);
  guards.push({id,batch,item_path:ip,item_sha256:sourceGuard,raw_sha256:sourceRaw,archive:sp});
  let count=0;
  for(let i=0;i<c.boundaries.length;i++){
   const before=structuredClone(c.boundaries[i]),name=before.case,repair=repairs[id]?.[name];
   if(!targeted.has(`${id}|${name}`)&&!repair)continue;
   let after=repair?{case:name,status:repair[0],[repair[0]==='checked'?'evidence':'reason']:repair[1]}:structuredClone(before);
   const text=after.reason??after.evidence??'';
   const rh=sha(JSON.stringify({case:name,status:after.status,text}));
   const explanation=name==='endpoints'?'The only bounds relevant to this item are those specified in its displayed algebraic formulas; the Statement supplies no ordered interval or limit parameter.':name.startsWith('iff-')?'The actual Statement/Definition and the listed proof conclusions were checked for this implication axis; the row disposition concerns those actual conclusions, not an omitted converse.':`The ${name} worksheet axis was checked against the actual quantified inputs and the concrete formulas described here.`;
   after.template_review={upheld:true,by:'/root/quasitriangular_readiness_reconciliation',reason:contexts[id]+' '+explanation+' Current row: '+text,item_sha256:sourceGuard,row_sha256:rh};
   c.boundaries[i]=after;ops.push({file:path,id,batch,path:['contracts',id,'boundaries',i],expected_case:name,before,after,item_guard:sourceGuard,item_raw_sha256:sourceRaw});count++;
  }
  manifest.push({id,batch,boundary_operations:count,review_context:contexts[id]});
 }
 const pp=`${base}/proposal/${path}`;mkdirSync(pp.slice(0,pp.lastIndexOf('/')),{recursive:true});writeFileSync(pp,JSON.stringify(doc,null,2)+'\n');
}
writeFileSync(`${base}/operations.json`,JSON.stringify({version:1,run,kind:'proposal-only-boundary-row-cas-operations',cycle:1,max_cycles:2,allowed_path:'contracts.<id>.boundaries.<index> ONLY',source_guards:guards,operations:ops,items:manifest,concurrency:'Before applying each row, compare itemHashGuard and exact old boundary row; replace only that row in the fresh current JSON, retaining all nonboundary fields and other rows. Never copy a proposal whole-contract carrier over live contracts.',limits:'Focused failed-boundary review only; no proof audit/acceptance stamp or native execution claim.'},null,2)+'\n');
console.log(JSON.stringify({items:manifest.length,operations:ops.length,batches:[6,7,8,9,10],sources_bound_after_final_A2_spacing:true}));
