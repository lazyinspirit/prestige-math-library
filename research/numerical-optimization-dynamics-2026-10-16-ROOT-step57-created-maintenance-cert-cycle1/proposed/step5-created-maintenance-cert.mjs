// A distinct native maintenance basis for an already certified run-created
// helper. This supplies no frontier review, creation or judgment.
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {maintenanceStatus} from './consumer-maintenance.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';

const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const need=(x,m)=>{if(!x)throw Error(`Step 5 created maintenance certification: ${m}`);};
const explanation=x=>typeof x==='string'&&x.trim().length>=40;
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const metadata=t=>t.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/)?.[0];

export function createdMaintenanceBasis(root,run,phase,round,{prior,result,progress,eligible,items,current}) {
  const basis=new Map(),evidence={},records=[];
  const creations=new Map((prior?.creations??[]).map(x=>[x.id,x]));
  const priorItems=new Map((prior?.items??[]).map(x=>[x.id,x]));
  const targets=new Set([...creations.keys()].filter(id=>!eligible.has(id)&&priorItems.get(id)?.guard_sha256!==current[id]));
  if(!targets.size||!(result.maintenance_packs??[]).length)return {basis,evidence,records};
  need(progress.complete===true&&result.run===run&&result.phase===phase&&result.round===round,'not a closed current owner wave');
  const status=maintenanceStatus(root,run); // Revalidates immutable inputs and collections.
  need(status.complete===true,'maintenance is not complete');
  const dir=join(root,'research',`${run}-consumer-maintenance`),state=read(join(dir,'state.json'));
  const byId=new Map(items.map(x=>[x.id,x])),aliases=new Map();
  for(const item of items)for(const alias of item.aliases??[])if(!byId.has(alias)){
    need(!aliases.has(alias)||aliases.get(alias)===item.id,'ambiguous current supplier alias');aliases.set(alias,item.id);
  }
  const capture=(path,expected)=>{
    const bytes=readFileSync(path,'utf8'),actual=hash(bytes);
    need(!expected||actual===expected,`changed evidence ${path}`);
    need(!evidence[path]||evidence[path]===actual,'conflicting evidence');evidence[path]=actual;return bytes;
  };
  for(const id of result.maintenance_packs){
    need(progress.work_order?.filter(x=>x.kind==='maintenance'&&x.id===id).length===1,'pack absent or duplicated in current work order');
    const ref=status.collections.filter(x=>x.pack===id);need(ref.length===1,'ambiguous maintenance collection');
    const collectionPath=join(root,ref[0].path);
    need(result.evidence?.[collectionPath]===ref[0].sha256,'collection not authenticated by closed wave');
    const collection=JSON.parse(capture(collectionPath,ref[0].sha256));
    need(collection.version===1&&collection.run===run&&collection.pack===id,'wrong collection identity');
    const candidates=collection.receipts.filter(x=>targets.has(x.id)&&x.disposition==='repaired');
    if(!candidates.length)continue;
    const bindings=state.bindings?.[id];need(bindings,'missing pack bindings');
    for(const [path,expected]of Object.entries(bindings))capture(join(root,path),expected);
    const packPath=join(dir,`${id}.json`),pack=read(packPath);
    need(evidence[packPath]&&pack.version===1&&pack.run===run&&pack.id===id,'unbound pack identity');
    need(same(pack.lanes.map(x=>x.lane),[1,2,3])&&same(pack.lanes.flatMap(x=>x.ids).sort(),[...pack.ids].sort()),'invalid lane partition');
    for(const receipt of candidates){
      const target=receipt.id,item=byId.get(target),old=priorItems.get(target),creation=creations.get(target);
      need(!basis.has(target)&&item&&!item.published&&creation&&old,'duplicate, published or unregistered helper');
      const lanes=pack.lanes.filter(x=>x.ids.includes(target));need(lanes.length===1,'helper is not assigned exactly once');
      const lane=lanes[0],assignmentPath=join(root,lane.assignment),taskPath=join(root,lane.task),reportPath=join(root,lane.report);
      need(evidence[assignmentPath]&&evidence[taskPath],'unbound assignment/task');
      const assignment=read(assignmentPath),reportBytes=capture(reportPath),report=JSON.parse(reportBytes);
      const collectedReports=collection.reports.filter(x=>x.lane===lane.lane);
      need(collectedReports.length===1&&collectedReports[0].sha256===hash(reportBytes)&&same(collectedReports[0].report,report),'report differs from immutable collection');
      need(assignment.run===run&&assignment.pack===id&&assignment.lane===lane.lane&&same(assignment.ids,lane.ids)
        &&report.run===run&&report.pack===id&&report.lane===lane.lane&&report.input_sha256===evidence[assignmentPath],'wrong assignment/report identity');
      const decisions=report.decisions.filter(x=>x.id===target);need(decisions.length===1,'missing or duplicate actual decision');
      const decision=decisions[0],understanding=decision.understanding;
      need(decision.disposition==='repaired'&&explanation(decision.reason)&&['affected_use','invalidated_claim','minimality'].every(k=>explanation(decision[k]))
        &&['familiarity','sources'].includes(understanding?.basis)&&understanding.uncertainty===false&&explanation(understanding.evidence),'incomplete actual repair evidence');
      if(understanding.basis==='sources')need(Array.isArray(understanding.sources)&&understanding.sources.length>0
        &&understanding.sources.every(x=>/^https?:\/\//.test(x.url)&&x.read===true&&explanation(x.evidence)),'missing source reading');
      const label=`consumer-maintenance-${phase}-r${round}-${id}-lane-${lane.lane}`;
      const dispatchPath=join(root,'research',`${run}-dispatch`,`alpha-repair-${label}.result.json`);
      need(result.evidence?.[dispatchPath]&&progress.maintenance_evidence?.[dispatchPath]===result.evidence[dispatchPath],'native dispatch not bound to current closed wave');
      const dispatchBytes=capture(dispatchPath,result.evidence[dispatchPath]),dispatch=JSON.parse(dispatchBytes);
      need(dispatch.run===run&&dispatch.role==='alpha-repair'&&dispatch.label===label&&same(dispatch.covers,[`maintenance:${id}:${lane.lane}`])
        &&dispatch.model==='gpt-6.1-sol'&&dispatch.provider_effort==='high'&&dispatch.ok===true&&dispatch.exit_code===0&&dispatch.process_exit_code===0
        &&dispatch.timed_out===false&&dispatch.terminal_summary?.task_completed===true&&dispatch.terminal_summary.task_aborted===false
        &&dispatch.terminal_summary.final_response_present===true&&dispatch.terminal_summary.error_events===0
        &&Number.isSafeInteger(dispatch.attempt)&&dispatch.attempt>0&&dispatch.evidence_tag===`.attempt-${dispatch.attempt}`
        &&Number.isFinite(Date.parse(dispatch.started_at))&&Date.parse(dispatch.ended_at)>=Date.parse(dispatch.started_at),'not a genuine successful native maintenance attempt');
      const attemptPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.result.json`);
      need(capture(attemptPath)===dispatchBytes,'immutable successful attempt differs');
      const promptPath=dispatchPath.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.prompt.md`);
      need(resolve(root,dispatch.prompt??'')===promptPath,'wrong immutable prompt identity');
      const prompt=capture(promptPath);need(prompt.includes(readFileSync(taskPath,'utf8'))&&prompt.includes(report.input_sha256),'prompt does not bind actual task/input');
      const original=pack.carriers[target],before=pack.before[target],assigned=assignment.before?.[target];
      need(typeof original==='string'&&assigned?.text===original&&same({...assigned,text:undefined},{...before,text:undefined})
        &&hash(original)===before.sha256&&itemHashGuard(original)===before.guard_sha256&&statementHash(original)===before.statement_sha256
        &&old.item_sha256===before.sha256&&old.guard_sha256===before.guard_sha256,'maintenance preimage is not the certified created helper');
      const text=readFileSync(join(root,'items',`${target}.md`),'utf8');let reconstructed=original;
      need(Array.isArray(decision.edits)&&decision.edits.length>0,'missing exact surgical edits');
      for(const edit of decision.edits){
        need(typeof edit.before==='string'&&edit.before.length>0&&typeof edit.after==='string'&&edit.before!==edit.after&&explanation(edit.necessity),'invalid surgical edit');
        const offset=reconstructed.indexOf(edit.before);need(offset>=0&&reconstructed.indexOf(edit.before,offset+1)<0,'ambiguous surgical preimage');
        reconstructed=reconstructed.slice(0,offset)+edit.after+reconstructed.slice(offset+edit.before.length);
      }
      need(reconstructed===text&&text!==original&&metadata(original)===metadata(text)
        &&new RegExp(`^status: draft$`,'m').test(metadata(text)??'')&&new RegExp(`^pipeline_run: ${run}$`,'m').test(metadata(text)??'')
        &&before.statement_sha256===statementHash(text)&&item.statement_sha256===before.statement_sha256,'not an exact draft proof-only repair');
      const obligations=Object.entries(pack.obligations).filter(([,x])=>x.id===target);
      const expectedEvents=[...new Set(obligations.map(([,x])=>x.event_key))].sort();
      need(obligations.length>0&&same(decision.event_uses?.map(x=>x.event_key).sort(),expectedEvents)
        &&decision.event_uses.every(x=>explanation(x.affected_use)&&explanation(x.reason)),'incomplete actual supplier-use examination');
      const expectedReceipt={...decision,before_sha256:before.sha256,after_sha256:hash(text),before_guard_sha256:before.guard_sha256,
        after_guard_sha256:itemHashGuard(text),before_statement_sha256:before.statement_sha256,after_statement_sha256:statementHash(text),obligation_keys:obligations.map(([key])=>key)};
      need(same(receipt,expectedReceipt)&&receipt.after_guard_sha256===current[target]&&receipt.after_sha256===item.sha256,'collection/current source mismatch');
      const suppliers=[...new Set([...(item.deps??[]),...(item.references??[])].map(x=>aliases.get(x)??x))].filter(x=>x!==target).sort();
      for(const supplier of suppliers)need(byId.get(supplier)&&pack.before[supplier]?.sha256===byId.get(supplier).sha256,'supplier changed since genuine maintenance reading');
      const record={id:target,basis:'native-consumer-maintenance',pack:id,lane:lane.lane,collection:collectionPath,report:reportPath,
        dispatch:attemptPath,prompt:promptPath,before_sha256:before.sha256,after_sha256:item.sha256,before_guard_sha256:before.guard_sha256,
        after_guard_sha256:current[target],statement_sha256:item.statement_sha256,suppliers:suppliers.map(id=>({id,sha256:byId.get(id).sha256})),reason:decision.reason};
      basis.set(target,record);records.push(record);
    }
  }
  return {basis,evidence,records};
}
