import {readFileSync as read,writeFileSync as write,readdirSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {runPages,dependencyLevels} from '../../../../tools/item-dependency-levels.mjs';
import {yaml,split} from '../../../../tools/pathway-lib.mjs';
import {loadPnpClassificationMigration,PNP_CURRENT,PNP_OLD} from '../../../../tools/step5-pnp-classification-migration.mjs';
const root=process.cwd(),run='inverse-problems-knot-theory-all-109-2026-10-19',out=fileURLToPath(new URL('.',import.meta.url));
const sha=x=>createHash('sha256').update(x).digest('hex'),json=x=>JSON.stringify(x,null,2)+'\n',eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b),need=(v,m)=>{if(!v)throw Error(m)};
const raw=read('research/plan-spec.json'),plan=JSON.parse(raw),before=structuredClone(plan),by=new Map(plan.pages.map(p=>[p.id,p])),pages=runPages(root,run),ids=pages.flatMap(p=>p.items.map(i=>i.id));
need(pages.length===218&&ids.length===1472&&new Set(ids).size===1472,'scope drift');
const bindings={'research/plan-spec.json':sha(raw)},changes=[],fields={},batches=new Set(),sourceChecks=[];
for(const name of readdirSync('research').filter(n=>n.startsWith(run+'-batch-')&&n.endsWith('.pages.json'))) bindings['research/'+name]=sha(read('research/'+name));
const graph=dependencyLevels(pages);need(!graph.errors.length,graph.errors.join('\n'));
for(const p of pages){
 const target=by.get(p.id);need(target,'missing page '+p.id);need(eq(target.items.map(i=>typeof i==='string'?i:i.id),p.items.map(i=>i.id)),'identity/order drift '+p.id);need(eq(target.requires??[],p.requires??[]),'requires drift '+p.id);
 const items=[];
 for(let k=0;k<p.items.length;k++){
  const a=target.items[k],b=p.items[k],path=`items/${b.id}.md`,bytes=read(path),source=split(bytes.toString()),fm=yaml().parse(source.fm);
  need(fm.id===b.id&&fm.kind===b.kind&&fm.title===b.title&&['draft','published'].includes(fm.status)&&fm.dependency_level===graph.levels.get(b.id)&&eq([...(fm.deps??[])].sort(),[...b.deps].sort()),'source/manifest metadata mismatch '+b.id);
  sourceChecks.push({id:b.id,page:p.id,dependency_level:graph.levels.get(b.id),raw_sha256:sha(bytes)});
  if(!eq(a,b)){
   const keys=[...new Set([...Object.keys(a),...Object.keys(b)])].filter(key=>!eq(a[key],b[key])).sort();for(const key of keys)fields[key]=(fields[key]??0)+1;
   const head=(b.kind==='open-problem'?'Open problem':['definition','algorithm'].includes(b.kind)?'Definition':b.kind==='example'?'Example':b.kind==='counterexample'?'Statement refuted':b.kind==='remark'?'Remark':'Statement'),claim=source.body.match(new RegExp('^## '+head+'\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))','m'))?.[1]?.trim();
   const mirrorChecks={};for(const key of keys){if(['title','kind','deps','dependency_level','justified_by','sources','provenance','forward_refs'].includes(key))mirrorChecks[key]=['deps','justified_by','forward_refs'].includes(key)?eq([...(fm[key]??[])].sort(),[...b[key]].sort()):eq(fm[key]??(Array.isArray(b[key])?[]:null),b[key]);else if(key==='statement')mirrorChecks[key]=claim===b[key]?.trim();else mirrorChecks[key]='editorial metadata; inspect full delta';}
   items.push({id:b.id,fields:keys,before:a,after:b,source_sha256:sha(bytes),mirror_checks:mirrorChecks});
  }
 }
 if(items.length){changes.push({page:p.id,batch:p.batch,items});batches.add(p.batch);target.items=structuredClone(p.items);}
}
const own=new Set(pages.map(p=>p.id)),foreign=before.pages.filter(p=>!own.has(p.id)),foreignAfter=plan.pages.filter(p=>!own.has(p.id));need(eq(foreign,foreignAfter),'foreign page changed');
const head=JSON.parse(execFileSync('git',['show','HEAD:research/plan-spec.json'],{maxBuffer:256*1024*1024}));
const foreignWorkingDeltas=foreign.filter(p=>!eq(p,head.pages.find(x=>x.id===p.id))).map(p=>p.id);
const pnp=loadPnpClassificationMigration(root,run,{current:true});need(pnp,'migration absent');
const migration=JSON.parse(read(`research/${run}-step5-v2/pnp-classification-migration.json`));
const carrier=migration.carriers.find(c=>c.path==='research/plan-spec.json');bindings[carrier.current_file]=sha(read(carrier.current_file));
const allItems=plan.pages.flatMap(p=>p.items??[]);need(allItems.filter(i=>i.id===PNP_CURRENT&&i.kind==='algorithm').length===1&&!allItems.some(i=>i.id===PNP_OLD),'PnP semantic projection differs');
need(ids.includes('ex-ip-exact-adaptive-credible-coverage-by-posterior-null-deletion')&&!ids.includes('op-ip-honest-coverage-over-ill-posed-truth-classes'),'OP->EX projection differs');
mkdirSync(out+'before/research',{recursive:true});mkdirSync(out+'candidate/research',{recursive:true});write(out+'before/research/plan-spec.json',raw);write(out+'candidate/research/plan-spec.json',json(plan));
write(out+'inventory.json',json({run,recorded_at:new Date().toISOString(),scope:{pages:218,items:1472},changed_pages:changes.length,changed_items:changes.reduce((s,p)=>s+p.items.length,0),fields,batches:[...batches].sort((a,b)=>+a-+b),bindings,candidate_sha256:sha(json(plan)),foreign_pages_preserved:foreign.length,foreign_working_deltas_preserved:foreignWorkingDeltas,pnp_archived_carrier_untouched:true,pnp_live_semantic_projection_preserved:true,op_to_ex_preserved:true,mathematical_review:false,native_review_credit_claimed:false,changes}));
write(out+'metadata-checks.json',json({run,checked_at:new Date().toISOString(),status:'PASS',pages:218,items:1472,scope:'source ID/kind/title/status/deps/dependency-level and graph labels; no recertification/permission/gate',rows:sourceChecks.sort((a,b)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id))}));
console.log(json({pages:changes.length,items:changes.reduce((s,p)=>s+p.items.length,0),fields,foreignPages:foreign.length,foreignWorkingDeltas:foreignWorkingDeltas.length,mirrorFalse:changes.flatMap(p=>p.items).filter(i=>Object.values(i.mirror_checks).includes(false)).map(i=>({id:i.id,checks:i.mirror_checks})),metadata:'1472 PASS'}));
