// Current manifest mirror reconciliation; no source or frozen-history edits.
import fs from 'node:fs';import {sha256} from '../tools/step6-lib.mjs';
import {planDocument,planForeignResidual} from '../tools/step6-plan-projection.mjs';
const run='machine-learning-all-101-2026-10-19',out=`research/${run}-owner-plan-mirror-reconciliation.json`,file='research/plan-spec.json',read=p=>fs.readFileSync(p,'utf8'),same=(a,b)=>JSON.stringify(a)===JSON.stringify(b),need=(x,m)=>{if(!x)throw Error(m);};
const state=JSON.parse(read(`.autopilot/${run}/state.json`));need(state.stage==='5.6-impact'&&state.paused&&Object.values(state.dispatches).every(x=>!x.startedAt||x.endedAt),'Need actual drained5.6hold');
const manifests=new Map(),pages=new Map();for(const n of fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n))){const p='research/'+n,text=read(p);manifests.set(p,text);for(const row of JSON.parse(text)){need(!pages.has(row.id),'Duplicate manifest page');pages.set(row.id,row);}}
need(pages.size===202&&manifests.size===101,'Wrong original scope');
const before=read(file),doc=planDocument(before),edits=[];
for(const row of doc.rows.filter(x=>pages.has(x.id))){const manifest=pages.get(row.id);for(const k of ['kind','category','requires'])need(same(row.value[k]??[],manifest[k]??[]),'Non-item plan disagreement '+row.id);
 if(same(row.value.items,manifest.items))continue;
 need(same(row.value.items.map(x=>x.id),manifest.items.map(x=>x.id)),'Item scope/order changed '+row.id);
 const node=row.children.find(x=>x.key==='items'),indent=/^ */.exec(before.slice(before.lastIndexOf('\n',node.start)+1,node.start))[0];
 edits.push({id:row.id,start:node.start,end:node.end,before:before.slice(node.start,node.end),after:JSON.stringify(manifest.items,null,2).replace(/\n/g,'\n'+indent)});
}
need(edits.length===29,'Unexpected mirror inventory');let after=before;for(const e of [...edits].reverse())after=after.slice(0,e.start)+e.after+after.slice(e.end);
const afterDoc=planDocument(after),selected=[...pages.keys()];need(planForeignResidual(before,selected)===planForeignResidual(after,selected),'Foreign plan bytes changed');
for(const row of afterDoc.rows.filter(x=>pages.has(x.id))){need(same(row.value.items,pages.get(row.id).items),'Items not reconciled');const old=doc.rows.find(x=>x.id===row.id);for(const key of new Set([...Object.keys(old.value),...Object.keys(row.value)]))if(key!=='items')need(same(old.value[key],row.value[key]),'Non-item value changed');}
const patch={version:1,run,at:new Date().toISOString(),attribution:'root current manifest mirror reconciliation; metadata only, no mathematical review or native coverage',selected_pages:202,changed_pages:29,source_writes:0,frozen_artifact_writes:0,before_sha256:sha256(before),after_sha256:sha256(after),foreign_residual_sha256:sha256(planForeignResidual(before,selected)),manifest_sha256:Object.fromEntries([...manifests].map(([p,t])=>[p,sha256(t)])),edits};
need(read(file)===before,'Plan CAS changed');for(const [p,t]of manifests)need(read(p)===t,'Manifest CAS changed');
fs.writeFileSync(out,JSON.stringify(patch,null,2)+'\n',{flag:'wx'});fs.writeFileSync(file,after);need(read(file)===after,'Plan write mismatch');console.log(JSON.stringify({changed_pages:29,selected_pages:202,source_writes:0,foreign_bytes_preserved:true,evidence:out}));
