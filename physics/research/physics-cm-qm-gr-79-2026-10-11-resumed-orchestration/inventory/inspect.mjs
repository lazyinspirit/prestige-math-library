import {readFileSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep3,itemHash} from '../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../../tools/physics-support/step1-decisions.mjs';
import {dependencyLevels} from '../../../tools/physics-support/item-dependency-levels.mjs';
import {readLibraryItems} from '../../../tools/physics-support/step5-rounds.mjs';
import {logicalConsumers} from '../../../tools/physics-support/impact-scope.mjs';
import {consumers} from '../../../tools/physics-support/batch-scope-review.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',out=resolve('research',run+'-resumed-orchestration/inventory');
const read=p=>JSON.parse(readFileSync(p,'utf8')),hash=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const s=loadStep3(root,run),dl=dependencyLevels(s.pages),work=[],counts={};
for(const [id,{page,item}] of s.items){let d;try{d=step1Decision(s,id);}catch(e){d={closed:false,reason:e.message};}
 const state=d.closed?'current-ready':d.row?.decision==='escalated'?'escalated':d.row?'stale-ready':'missing-readiness';counts[state]=(counts[state]??0)+1;
 if(!d.closed)work.push({id,batch:page.batch,page:page.id,level:dl.levels.get(id),state,recorded_at:d.row?.at??null,reason:d.reason,recorded_sha256:d.row?.sha256??null,current_sha256:d.row?itemHash(s,id,d.row.dependencies):null,readiness_file:`research/${run}-step1-${id}.json`,raw_sha256:existsSync(`items/${id}.md`)?hash(`items/${id}.md`):null});}
console.log('Native readiness',counts);
const items=readLibraryItems(root),byId=new Map(items.map(x=>[x.id,x])),extra=[];
const archive=`research/${run}-cc-spectral-prerequisite/native-holds`;
for(const name of readdirSync(archive).filter(n=>n.endsWith('.md'))){const text=readFileSync(`${archive}/${name}`,'utf8'),fm=yaml().parse(text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};if(!fm.id)continue;extra.push({id:fm.id,deps:[...(fm.deps??[]),...(fm.justified_by??[]),...(fm.forward_refs??[])],references:[...text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]),aliases:fm.aliases??[]});}
const aliases=new Map();for(const i of [...items,...extra])for(const a of i.aliases??[])if(!byId.has(a))aliases.set(a,i.id);
const rev=new Map(),logical=new Map();for(const i of [...items,...extra]){for(const raw of [...i.deps,...i.references]){const d=aliases.get(raw)??raw;if(!rev.has(d))rev.set(d,new Set());rev.get(d).add(i.id);}for(const raw of i.deps){const d=aliases.get(raw)??raw;if(!logical.has(d))logical.set(d,new Set());logical.get(d).add(i.id);}}
for(const w of work){w.direct_consumers=[...(rev.get(w.id)??[])].sort();w.indirect_consumers=[...logicalConsumers(rev,w.id)].filter(x=>x!==w.id&&!w.direct_consumers.includes(x)).sort();w.consumer_batches=[...new Set([...w.direct_consumers,...w.indirect_consumers].map(id=>s.items.get(id)?.page.batch).filter(Boolean))].sort((a,b)=>+a-+b);w.classification=w.state==='escalated'?'held-coupled-supplier-consumer-obligation':'changed-input-readiness-currency';w.proposed_group=w.consumer_batches.some(x=>['37','38','39','40'].includes(x))||['37','38','39','40'].includes(w.batch)?'coupled-spectral-owner':'focused-current-input-currency';}
const escalationRoots=work.filter(x=>x.state==='escalated').map(x=>x.id),nativeCone=consumers(root,escalationRoots,extra);
const supervision=read(`research/${run}-supervision.json`),historical=supervision.escalations.filter(x=>!/^resolved|^closed/.test(x.status??''));
const state=read(`.physics-autopilot/${run}/state.json`),dispatches=Object.values(state.dispatches).filter(x=>x.stage==='1-scaffold');
const notes=[];for(const d of dispatches.filter(x=>x.lastExitOk&&x.endedAt).sort((a,b)=>b.endedAt.localeCompare(a.endedAt)).slice(0,10)){const file=`research/${run}-${d.label}.notes.md`;notes.push({batch:d.label,ended_at:d.endedAt,file,present:existsSync(file),raw_sha256:existsSync(file)?hash(file):null});}
const result={version:1,run,recorded_at:new Date().toISOString(),method:'Read-only native loadStep3/step1Decision/itemHash/dependencyLevels; readLibraryItems; native consumers union with retained before carriers; logicalConsumers full transitive traversal. No production edits, decisions, controls or gates.',counts,items:s.items.size,pages:s.pages.length,empty_pages:s.pages.filter(p=>!p.items?.length).map(p=>({id:p.id,batch:p.batch})),level_errors:dl.errors,current_native_state:{stage:state.stage,paused:state.paused,active:dispatches.filter(x=>!x.endedAt).map(x=>x.label),completed:dispatches.filter(x=>x.endedAt&&x.lastExitOk).length},work:work.sort((a,b)=>(a.level??0)-(b.level??0)||a.id.localeCompare(b.id)),historical_nonresolved_supervision:historical,native_held_consumer_union:nativeCone,archived_before_carriers:extra.length,latest_native_notes:notes,source_evidence:{supervision:{file:`research/${run}-supervision.json`,sha256:hash(`research/${run}-supervision.json`)},checkpoint:{file:`research/${run}-supervision-restored-2026-10-11/current-checkpoint.json`,sha256:hash(`research/${run}-supervision-restored-2026-10-11/current-checkpoint.json`)}}};
writeFileSync(`${out}/inventory.json`,JSON.stringify(result,null,2)+'\n');console.log('Written inventory',work.length,'work rows',nativeCone.length,'consumer union');
