import { readFileSync,writeFileSync,readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadStep3,itemHash } from '../../../../../tools/physics-support/frontier-snapshot.mjs';
import { split,yaml } from '../../../../../tools/physics-support/pathway-lib.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',id='lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint',supplier='thm-algebra-of-derivatives';
const out=`research/${run}-resumed-orchestration/metadata/batch42-momentum-applied`,manifest=`research/${run}-batch-42.pages.json`,contract=`research/${run}-batch-42.proof-contracts.json`,carrier=`items/${id}.md`,receipt=`research/${run}-step1-${id}.json`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex');
const raws=new Map([manifest,contract,carrier,receipt,'research/plan-spec.json',`items/${supplier}.md`].map(p=>[p,readFileSync(p)]));
const s=loadStep3(root,run),edges=new Map();
for(const [key,record] of s.items){const text=readFileSync(`items/${key}.md`,'utf8'),fm=yaml().parse(split(text).fm);edges.set(key,new Set([...(record.item.deps??[]),...(record.item.justified_by??[]),...(record.item.forward_refs??[]),...(fm.deps??[]),...(fm.justified_by??[]),...(fm.forward_refs??[])]));}
const cone=new Set([id]);let changed=true;while(changed){changed=false;for(const [key,edges_] of edges)if(!cone.has(key)&&[...edges_].some(x=>cone.has(x))){cone.add(key);changed=true;}}
const hashes=[...cone].sort().map(key=>{const path=`research/${run}-step1-${key}.json`,row=JSON.parse(readFileSync(path,'utf8'));return {id:key,path,row_sha256:hash(readFileSync(path)),recorded_sha256:row.sha256,before_sha256:itemHash(s,key,row.dependencies),dependencies:row.dependencies};});
for(const [p,raw] of raws)writeFileSync(`${out}/before-${p.split('/').pop()}`,raw);
writeFileSync(`${out}/guards-before.json`,JSON.stringify({at:new Date().toISOString(),guards:[...raws].map(([path,raw])=>({path,raw_sha256:hash(raw)})),consumer_hashes:hashes,public_interface_changed:false},null,2)+'\n');
const pages=JSON.parse(raws.get(manifest)!.toString()),page=pages.find((p:any)=>p.items.some((i:any)=>i.id===id)),item=page.items.find((i:any)=>i.id===id);
const fm=yaml().parse(split(raws.get(carrier)!.toString()).fm);
if(!fm.deps.includes(supplier)||fm.dependency_roles[supplier]!=='mathematical-premise')throw Error('Actual carrier supplier use missing');
if(item.deps.includes(supplier))throw Error('Manifest edge already present; do not replay');
item.deps.splice(1,0,supplier);item.dependency_roles[supplier]='mathematical-premise';
const contracts=JSON.parse(raws.get(contract)!.toString()),derivation=contracts.contracts[id].derivations.find((d:any)=>d.step==='1.5');
if(!derivation||derivation.inputs.includes(supplier))throw Error('Exact contract mapping unavailable/already applied');
// The supplier is linked inline in step1.5, not in a labelled Fact. A citations[]
// row would require fabricating a Fact. Native derivation inputs accept source IDs.
derivation.inputs.push(supplier);
for(const [p,raw] of raws)if(hash(readFileSync(p))!==hash(raw))throw Error(`Guard changed ${p}`);
writeFileSync(manifest,JSON.stringify(pages,null,2)+'\n');
writeFileSync(contract,JSON.stringify(contracts,null,2)+'\n');
const current=loadStep3(root,run),impact=hashes.map(row=>({...row,after_sha256:itemHash(current,row.id,row.dependencies),changed:row.before_sha256!==itemHash(current,row.id,row.dependencies)}));
for(const row of impact)if(hash(readFileSync(row.path))!==row.row_sha256)throw Error(`Readiness mutated unexpectedly ${row.id}`);
const report={at:new Date().toISOString(),manifest,contract,manifest_raw_sha256:hash(readFileSync(manifest)),contract_raw_sha256:hash(readFileSync(contract)),carrier_raw_sha256:hash(readFileSync(carrier)),carrier_preserved:hash(readFileSync(carrier))===hash(raws.get(carrier)),plan_preserved:hash(readFileSync('research/plan-spec.json'))===hash(raws.get('research/plan-spec.json')),contract_change:'Only d-1.5.inputs appended actual inline supplier ID; citations[] unchanged because no labelled Fact links this supplier.',manifest_change:'Only exact target deps and dependency_roles added existing carrier supplier.',public_interface_changed:false,consumer_hash_impact:impact,consumer_readiness_written:false};
writeFileSync(`${out}/applied-impact.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({affected:impact.filter(r=>r.changed).map(r=>r.id),carrier_preserved:report.carrier_preserved,plan_preserved:report.plan_preserved},null,2));
