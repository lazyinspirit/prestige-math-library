// Separate, single-pass direct-consumer maintenance. This module creates no
// Step-7 decisions or certificates. Evidence schemas cannot establish truth.
import {createHash} from 'node:crypto';
import {existsSync,readFileSync,writeFileSync,mkdirSync,renameSync} from 'node:fs';
import {join,relative} from 'node:path';
import {readLibraryItems,discoverDownstream,partitionImpacts,validateFrontier} from './step7-rounds.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step7-statement.mjs';

const hash=value=>createHash('sha256').update(typeof value==='string'?value:JSON.stringify(value)).digest('hex');
const check=(value,message)=>{if(!value)throw new Error(`consumer maintenance: ${message}`);};
const nonempty=value=>typeof value==='string'&&value.trim().length>0;
const explanation=value=>typeof value==='string'&&value.trim().length>=40;
const read=path=>JSON.parse(readFileSync(path,'utf8'));
function directory(root,run){check(/^[A-Za-z0-9._-]+$/.test(run),'invalid run');return join(root,'research',`${run}-consumer-maintenance`);}
function load(root,run){
  const dir=directory(root,run);
  if(!existsSync(join(dir,'state.json')))return {version:1,run,events:{},obligations:{},packs:[],active:null,frontier_events:[]};
  const state=read(join(dir,'state.json'));check(state.version===1&&state.run===run,'queue identity mismatch');
  for(const binding of Object.values(state.bindings??{}))for(const [path,expected] of Object.entries(binding))check(hash(readFileSync(join(root,path),'utf8'))===expected,`frozen input changed: ${path}`);
  for(const collection of state.collections??[])check(hash(readFileSync(join(root,collection.path),'utf8'))===collection.sha256,`collected evidence changed: ${collection.path}`);
  return state;
}
function save(root,run,state){const dir=directory(root,run);mkdirSync(dir,{recursive:true});const temp=join(dir,`state.${process.pid}.tmp`);writeFileSync(temp,JSON.stringify(state,null,2)+'\n');renameSync(temp,join(dir,'state.json'));}
function immutable(path,value){const text=JSON.stringify(value,null,2)+'\n';if(existsSync(path)){check(readFileSync(path,'utf8')===text,`immutable artifact differs: ${path}`);return;}writeFileSync(path,text,{flag:'wx'});}
function frontier(root,run){const path=join(root,'research',`${run}-step7-v2`,'frontier.json');check(existsSync(path),'missing immutable frontier');const frozen=validateFrontier(read(path));check(frozen.run===run,'frontier run mismatch');return new Set(frozen.ids);}
function verifyPack(root,run,state,id){const dir=directory(root,run),binding=state.bindings?.[id];check(binding,'missing frozen pack binding');for(const [path,expected] of Object.entries(binding))check(hash(readFileSync(join(root,path),'utf8'))===expected,`frozen input changed: ${path}`);return read(join(dir,`${id}.json`));}
function enqueue(root,run,state,events,items){
  const eligible=frontier(root,run,items),byId=new Map(items.map(i=>[i.id,i]));
  for(const event of events){
    check(byId.has(event.id),'missing supplier');
    check([event.before_statement_sha256,event.after_statement_sha256].every(x=>/^[a-f0-9]{64}$/.test(x)),'missing statement hashes');
    if(event.before_statement_sha256===event.after_statement_sha256)continue;
    const normalized={id:event.id,before_statement_sha256:event.before_statement_sha256,after_statement_sha256:event.after_statement_sha256};
    const key=hash(normalized),known=Boolean(state.events[key]);if(known&&!(event.consumer_ids?.length))continue;
    if(!known)check(byId.get(event.id).statement_sha256===event.after_statement_sha256,`stale supplier event: ${event.id}`);
    state.events[key]=normalized;
    const consumers=known?[]:discoverDownstream({items,repairedIds:[event.id]});
    for(const target of event.consumer_ids??[]){check(byId.has(target)&&target!==event.id,'invalid discovered consumer');check(explanation(event.discovery_evidence?.[target]),'missing explicit discovery use evidence');if(!consumers.some(c=>c.id===target))consumers.push({id:target,paths:[[event.id,target]],discovery_evidence:event.discovery_evidence[target]});}
    for(const consumer of consumers){
      if(eligible.has(consumer.id)){if(!state.frontier_events.some(e=>e.event_key===key&&e.consumer_id===consumer.id))state.frontier_events.push({...normalized,event_key:key,consumer_id:consumer.id,...(consumer.discovery_evidence?{discovery_evidence:consumer.discovery_evidence}:{})});continue;}
      const obligation=hash([key,consumer.id]);
      state.obligations[obligation]??={id:consumer.id,event_key:key,status:'pending',paths:consumer.paths,...(consumer.discovery_evidence?{discovery_evidence:consumer.discovery_evidence}:{})};
    }
  }
}
function status(state){return {complete:!state.active&&!Object.values(state.obligations).some(o=>o.status!=='complete'),active:state.active,packs:state.packs,pending:Object.values(state.obligations).filter(o=>o.status!=='complete'),frontier_events:state.frontier_events,completed_changes:state.completed_changes??[],collections:state.collections??[]};}
export function maintenanceStatus(root,run){return status(load(root,run));}
export function syncMaintenance(root,run,events=[]){const state=load(root,run);enqueue(root,run,state,events,readLibraryItems(root));save(root,run,state);return status(state);}

export function prepareMaintenance(root,run){
  const state=load(root,run),dir=directory(root,run);
  if(state.active)return {complete:false,pack:verifyPack(root,run,state,state.active)};
  const entries=Object.entries(state.obligations).filter(([,o])=>o.status==='pending');
  if(!entries.length)return {complete:true};
  const items=readLibraryItems(root),eligible=frontier(root,run,items),ids=[...new Set(entries.map(([,o])=>o.id))].sort();
  check(ids.every(id=>!eligible.has(id)),'outside consumer entered eligible frontier');
  const id=`pack-${String(state.packs.length+1).padStart(4,'0')}`;
  const before=Object.fromEntries(items.map(i=>[i.id,{sha256:i.sha256,guard_sha256:itemHashGuard(readFileSync(join(root,'items',`${i.id}.md`),'utf8')),statement_sha256:i.statement_sha256}]));
  const carriers=Object.fromEntries(ids.map(id=>[id,readFileSync(join(root,'items',`${id}.md`),'utf8')]));
  const lanes=partitionImpacts(ids,3,items).map((targets,index)=>({lane:index+1,ids:targets,assignment:relative(root,join(dir,`${id}-lane-${index+1}.json`)),task:relative(root,join(dir,`${id}-lane-${index+1}.md`)),report:relative(root,join(dir,`${id}-lane-${index+1}-report.json`))}));
  const pack={version:1,run,id,ids,before,carriers,obligations:Object.fromEntries(entries),events:state.events,lanes};
  mkdirSync(dir,{recursive:true});immutable(join(dir,`${id}.json`),pack);
  for(const lane of lanes){
    immutable(join(root,lane.assignment),{run,pack:id,...lane,before:Object.fromEntries(lane.ids.map(id=>[id,{...before[id],text:carriers[id]}])),obligations:entries.filter(([,o])=>lane.ids.includes(o.id)).map(([key,o])=>({key,...o,event:state.events[o.event_key]}))});
    const inputHash=hash(readFileSync(join(root,lane.assignment),'utf8'));
    const task=`# Separate consumer maintenance — ${id}, lane ${lane.lane}\n\nRead CLAUDE.md and ${lane.assignment}. Only edit these existing items: ${lane.ids.join(', ')||'(none)'}. No new items. This is not Step-7 repair, judgment, adjudication, certification or a gate. Examine the exact use of each changed supplier. Leave sound consumers byte-for-byte unchanged. Make only strictly necessary smallest logically sufficient repairs; do not tidy, restyle or improve unrelated text. Read authoritative sources if unsure; report unresolved uncertainty instead of accepting it. Never invent source reading or hashes.\n\nWrite ${lane.report} as JSON {run,pack,lane,input_sha256:"${inputHash}",decisions:[...]}; copy the controller-generated input hash exactly. Include one decision per assigned item: {id,disposition:"sound"|"repaired",reason,understanding:{basis:"familiarity"|"sources",evidence:"specific honest account",uncertainty:false,sources:[{url,read:true,evidence}]},event_uses:[{event_key,affected_use,reason}],affected_use,invalidated_claim,minimality,edits:[{before,after,necessity}]}. Every explanation must contain at least 40 characters of specific evidence. The sources array is mandatory when basis is sources; list only actually read source URLs and exact supporting evidence. Repaired decisions require the three explicit necessity explanations and a declared surgical edit list: each before snippet must uniquely occur in the frozen original at its sequential edit position; after is its exact replacement. Every edited byte must be represented, with a specific necessity explanation. Sound decisions have edits:[] and a specific mathematical reason explaining why each supplier change does not invalidate the consumer. Fields cannot establish mathematical truth; you are responsible for the argument. Identify unresolved mathematics with disposition:"escalated" or uncertainty:true (blocks collection). All content hashes are generated centrally; do not manufacture them.\n`;
    const discoveryInstructions='\nIf a necessary repair changes your item Statement/Definition and you discover an actual direct consumer use missing from the dependency/reference graph, record optional decision fields consumer_ids:["consumer-id"] and discovery_evidence:{"consumer-id":"exact mathematical use, at least 40 characters"}. Identify only existing direct consumers and reconcile missing load-bearing dependencies where within your assigned edit scope. A reference alone does not justify an edit. Discovery fields on a proof-only repair or sound decision never trigger downstream work.\n';
    const path=join(root,lane.task),fullTask=task+discoveryInstructions;if(existsSync(path))check(readFileSync(path,'utf8')===fullTask,'immutable task differs');else writeFileSync(path,fullTask,{flag:'wx'});
  }
  state.bindings??={};state.bindings[id]=Object.fromEntries([relative(root,join(dir,`${id}.json`)),...lanes.flatMap(l=>[l.assignment,l.task])].map(path=>[path,hash(readFileSync(join(root,path),'utf8'))]));
  for(const [key] of entries)state.obligations[key].status='assigned';
  state.active=id;state.packs.push(id);save(root,run,state);return {complete:false,pack};
}

export function maintenanceUnits(root,run,pack){pack??=prepareMaintenance(root,run).pack;return pack?pack.lanes.map(lane=>({id:`consumer-maintenance-${pack.id}-lane-${lane.lane}`,...lane})):[];}

export function collectMaintenance(root,run,packOrId){
  const state=load(root,run),dir=directory(root,run),id=typeof packOrId==='string'?packOrId:packOrId?.id??state.active;
  if(state.active!==id&&state.collections?.some(c=>c.pack===id))return status(state);
  check(state.active===id,'pack is not active');const pack=verifyPack(root,run,state,id);
  const items=readLibraryItems(root),current=new Map(items.map(i=>[i.id,i]));
  check(JSON.stringify([...current.keys()].sort())===JSON.stringify(Object.keys(pack.before).sort()),'item inventory changed: no new or removed items permitted');
  const assigned=new Set(pack.ids);
  for(const item of items)if(!assigned.has(item.id))check(item.sha256===pack.before[item.id].sha256,`unassigned carrier changed: ${item.id}`);
  const receipts=[],rawReports=[];
  for(const lane of pack.lanes){
    const report=read(join(root,lane.report));check(report.run===run&&report.pack===id&&report.lane===lane.lane&&report.input_sha256===hash(readFileSync(join(root,lane.assignment),'utf8')),'report identity/input mismatch');
    check(Array.isArray(report.decisions)&&report.decisions.length===lane.ids.length,'incomplete lane decisions');const seen=new Set();
    for(const decision of report.decisions){
      const target=decision.id;check(lane.ids.includes(target)&&!seen.has(target),'duplicate or unassigned decision');seen.add(target);
      check(explanation(decision.reason),'missing mathematical reason');
      check(['sources','familiarity'].includes(decision.understanding?.basis)&&explanation(decision.understanding?.evidence)&&decision.understanding.uncertainty===false,'missing honest understanding evidence or unresolved uncertainty');
      if(decision.understanding.basis==='sources')check(Array.isArray(decision.understanding.sources)&&decision.understanding.sources.length>0&&decision.understanding.sources.every(s=>/^https?:\/\//.test(s.url)&&s.read===true&&explanation(s.evidence)),'missing actually read source evidence');
      const obligations=Object.entries(pack.obligations).filter(([,o])=>o.id===target);
      const expected=[...new Set(obligations.map(([,o])=>o.event_key))].sort();
      check(Array.isArray(decision.event_uses)&&JSON.stringify(decision.event_uses.map(e=>e.event_key).sort())===JSON.stringify(expected)&&decision.event_uses.every(e=>explanation(e.affected_use)&&explanation(e.reason)),'missing exact supplier use evidence');
      const text=readFileSync(join(root,'items',`${target}.md`),'utf8');let reconstructed=pack.carriers[target];
      check(Array.isArray(decision.edits),'missing declared surgical edit list');
      if(decision.disposition==='sound'){check(decision.edits.length===0&&text===reconstructed,'sound consumer changed');}
      else {
        check(decision.disposition==='repaired','unresolved maintenance disposition');
        check(['affected_use','invalidated_claim','minimality'].every(key=>explanation(decision[key]))&&decision.edits.length>0,'missing necessity/minimality evidence');
        for(const edit of decision.edits){check(nonempty(edit.before)&&typeof edit.after==='string'&&edit.before!==edit.after&&explanation(edit.necessity),'invalid surgical edit');const offset=reconstructed.indexOf(edit.before);check(offset>=0&&reconstructed.indexOf(edit.before,offset+1)<0,'declared before snippet is absent or ambiguous');reconstructed=reconstructed.slice(0,offset)+edit.after+reconstructed.slice(offset+edit.before.length);}
        check(reconstructed===text&&text!==pack.carriers[target],'unlisted edit or empty repair');
      }
      receipts.push({...decision,before_sha256:pack.before[target].sha256,after_sha256:hash(text),before_guard_sha256:pack.before[target].guard_sha256,after_guard_sha256:itemHashGuard(text),before_statement_sha256:pack.before[target].statement_sha256,after_statement_sha256:statementHash(text),obligation_keys:obligations.map(([key])=>key)});
    }
    rawReports.push({lane:lane.lane,report,sha256:hash(readFileSync(join(root,lane.report),'utf8'))});
  }
  // Validate every lane before committing any completion. Snapshot the exact
  // reports so subsequent report edits cannot rewrite accepted evidence.
  const collection={version:1,run,pack:id,receipts,reports:rawReports};
  enqueue(root,run,state,receipts.map(r=>({id:r.id,before_statement_sha256:r.before_statement_sha256,after_statement_sha256:r.after_statement_sha256,consumer_ids:r.consumer_ids,discovery_evidence:r.discovery_evidence})),items);
  immutable(join(dir,`${id}-collection.json`),collection);
  state.collections??=[];state.collections.push({pack:id,path:relative(root,join(dir,`${id}-collection.json`)),sha256:hash(readFileSync(join(dir,`${id}-collection.json`),'utf8'))});
  for(const receipt of receipts)for(const key of receipt.obligation_keys)state.obligations[key].status='complete';
  state.completed_changes??=[];
  state.completed_changes.push(...receipts.filter(r=>r.disposition==='repaired').map(r=>({id:r.id,pack:id,before_guard_sha256:r.before_guard_sha256,after_guard_sha256:r.after_guard_sha256,before_statement_sha256:r.before_statement_sha256,after_statement_sha256:r.after_statement_sha256})));
  state.active=null;save(root,run,state);return status(state);
}
