// Root-current repairs with exact native history, never new native coverage.
import {existsSync,readFileSync,readdirSync,lstatSync,realpathSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {itemHashGuard} from './item-hash.mjs';
import {statementHash} from './step5-statement.mjs';
import {frontmatterList} from './frontmatter-list.mjs';
import {discoverDownstream} from './step5-rounds.mjs';
import {currentHashesMany} from './step5-terminal-resolution.mjs';
const hash=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const need=(x,m)=>{if(!x)throw Error('Step 5 current owner repair: '+m);};
const key=r=>`${r.id}\0${r.model}\0${r.context_sha256}`;
const evidenceText=r=>typeof r?.reason==='string'&&r.reason.trim().length>=40&&r.uncertain===false
  &&Array.isArray(r.source_urls)&&r.source_urls.every(x=>/^https:\/\//.test(x))&&(r.source_urls.length||r.familiar===true);
const drained=s=>Object.values(s.dispatches??{}).every(x=>!x.startedAt||Boolean(x.endedAt));
function source(text,id){
  const m=text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);need(m,'missing source frontmatter');
  const fm=m[1],body=text.slice(m[0].length),scalar=k=>fm.match(new RegExp(`^${k}:\\s*["']?([^\\r\\n"']+)["']?\\s*$`,'m'))?.[1]?.trim();
  need(scalar('id')===id&&scalar('status')==='draft','not the exact draft source');
  const unique=a=>[...new Set(a)].sort(),deps=unique(['deps','justified_by','forward_refs'].flatMap(k=>frontmatterList(fm,k)));
  const links=[...body.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]);
  return {id,kind:scalar('kind'),deps,aliases:frontmatterList(fm,'aliases'),references:unique([...links,...frontmatterList(fm,'external_refs')]).filter(x=>!deps.includes(x)),statement_sha256:statementHash(text)};
}
export function loadOwnerCurrentRepairs(root,pack,reports,current,items,row,{matchesReview}){
  const run=pack.run,dir=join(root,'research',`${run}-step5-v2`),path=join(dir,`${pack.phase}-${pack.round}-owner-current-repairs.json`),stage='5.5-adjudicate';
  need(row.version===4&&row.kind==='step5-owner-current-repair-supplement'&&row.run===run
    &&row.phase==='repeat'&&pack.phase==='repeat'&&row.round===pack.round&&Number.isSafeInteger(row.round)&&row.round>0
    &&row.pack_sha256===hash(pack)&&pack.rejected&&pack.repair_scope==='frontier'
    &&row.authorized_by==='owner'&&row.reviewed_by==='root'&&row.native_execution_coverage_adopted===false
    &&date(row.repair_started_at)&&date(row.completed_at)&&Date.parse(row.completed_at)>=Date.parse(row.repair_started_at)
    &&typeof row.authorization==='string'&&row.authorization.trim().length>=80
    &&Array.isArray(row.entries)&&row.entries.length>0&&row.entries.length<=pack.frontier_ids.length,'invalid bounded root-current envelope');
  need(!existsSync(join(dir,`repeat-${pack.round}-collected.json`))&&!existsSync(join(dir,`impact-repeat-${pack.round}.json`))
    &&!readdirSync(join(root,'research',`${run}-dispatch`)).some(n=>new RegExp(`^alpha-repair-step5-v2-impact-repeat(?:-pass-[0-9]+)?-r${pack.round}-u`).test(n)), 'next owner pack/execution already exists');
  const evidence={[path]:hash(readFileSync(path,'utf8'))};
  const ref=(r,expected=null)=>{
    need(r&&typeof r.path==='string'&&/^[a-f0-9]{64}$/.test(r.sha256??'')&&(!expected||resolve(root,r.path)===resolve(root,expected)),'wrong exact evidence reference');
    const p=resolve(root,r.path);need(p.startsWith(resolve(root,'research')+'/')&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&realpathSync(p).startsWith(realpathSync(join(root,'research'))+'/'),'evidence outside regular research');
    const text=readFileSync(p,'utf8');need(hash(text)===r.sha256&&(!evidence[p]||evidence[p]===r.sha256),'changed/conflicting evidence');evidence[p]=r.sha256;return text;
  };
  const snapshot=JSON.parse(ref(row.creation_state)),request=JSON.parse(ref(row.creation_request));
  need(snapshot.run===run&&snapshot.stage===stage&&snapshot.paused===true&&drained(snapshot)
    &&snapshot.stages?.[stage]?.gatesPassedAt===null&&snapshot.stages[stage].doneAt===null
    &&!snapshot.blockers?.some(x=>x.stage===stage&&String(x.key).startsWith('gate:'))
    &&request.run===run&&request.version===1&&typeof request.id==='string'&&request.id===row.owner_gate_request_id
    &&request.group===stage&&same(request.stages,[stage])&&date(request.at)
    &&Date.parse(request.at)<=Date.parse(row.repair_started_at),'not the actual paused/drained pre-gate creation hold');
  const live=read(join(root,'.autopilot',run,'state.json'));
  // Native collection runs after permission/resume. Creation, separately,
  // must have been genuinely paused; consumption requires the same drained stage.
  need(live.run===run&&live.stage===stage&&drained(live),'wrong live collection boundary');
  const frontier=new Set(pack.frontier_ids),byId=new Map(items.map(x=>[x.id,x])),targets=new Set(),rejections=[],originRows=[];
  const beforeTexts=new Map(),findingById=new Map();
  for(const entry of row.entries){
    const id=entry.id,unit=String(entry.unit),native=reports.find(r=>String(r.unit)===unit);
    need(typeof id==='string'&&frontier.has(id)&&pack.before[id]&&byId.has(id)&&!byId.get(id).published&&!targets.has(id)
      &&['assigned-scope-preservation','native-outside-alert'].includes(entry.origin_kind)&&native,'duplicate, foreign or unsupported repair target');targets.add(id);
    const label=`step5-v2-repeat-r${pack.round}-u${unit}`,reportPath=join(dir,label+'.json');
    const original=JSON.parse(ref(entry.original_report,reportPath));need(same(original,native)&&original.run===run&&original.phase==='repeat'
      &&original.round===pack.round&&String(original.unit)===unit&&original.input_sha256===hash(pack),'wrong actual original native report');
    const dp=join(root,'research',`${run}-dispatch`,`alpha-adjudicate-${label}.result.json`),dispatch=JSON.parse(ref(entry.dispatch,dp));
    need(dispatch.run===run&&dispatch.role==='alpha-adjudicate'&&dispatch.label===label&&dispatch.ok===true&&dispatch.model==='gpt-6.1-sol'
      &&dispatch.provider_effort==='high'&&same(dispatch.covers,[unit])&&dispatch.exit_code===0&&dispatch.process_exit_code===0&&dispatch.timed_out===false
      &&dispatch.terminal_summary?.task_completed===true&&dispatch.terminal_summary.task_aborted===false
      &&dispatch.terminal_summary.final_response_present===true&&dispatch.terminal_summary.error_events===0
      &&Number.isSafeInteger(dispatch.attempt)&&dispatch.attempt>0&&dispatch.evidence_tag===`.attempt-${dispatch.attempt}`&&date(dispatch.ended_at), 'not a genuine completed native adjudication');
    need(same(dispatch,JSON.parse(ref(entry.original_attempt,dp.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.result.json`)))),'immutable native result mismatch');
    const promptPath=dp.replace(/\.result\.json$/,`.attempt-${dispatch.attempt}.prompt.md`);
    need(resolve(root,dispatch.prompt??'')===promptPath,'wrong actual native prompt');ref(entry.dispatch_prompt,promptPath);
    for(const state of [snapshot,live]){
      const observed=state.dispatches?.[`${stage}:${label}`];need(observed?.lastExitOk===true&&observed.role===dispatch.role&&observed.attempt===dispatch.attempt
        &&same(observed.covers,dispatch.covers)&&date(observed.endedAt)&&Date.parse(observed.endedAt)>=Date.parse(dispatch.ended_at)
        &&Date.parse(observed.endedAt)<=Date.parse(request.at),'creation lacks exact successful native dispatch');
    }
    const before=ref(entry.native_source),approved=ref(entry.approved_source),finding=JSON.parse(ref(entry.root_finding));
    const beforeMeta=source(before,id),approvedMeta=source(approved,id);need(beforeMeta.kind===approvedMeta.kind,'source kind changed before root correction');beforeTexts.set(id,before);findingById.set(id,finding);
    need(itemHashGuard(approved)===pack.before[id]&&statementHash(approved)===pack.before_statements?.[id]
      &&finding.version===1&&finding.id===id&&finding.reviewed_by==='root'&&finding.confirmed_defect===true
      &&finding.native_finding_claimed===false&&finding.native_execution_coverage_adopted===false
      &&date(finding.reviewed_at)&&Date.parse(finding.reviewed_at)>=Date.parse(dispatch.ended_at)
      &&Date.parse(finding.reviewed_at)<=Date.parse(row.completed_at)&&typeof finding.reason==='string'&&finding.reason.trim().length>=80,
      'missing exact frozen approved source and separately attributed actual root finding');
    const after=readFileSync(join(root,'items',id+'.md'),'utf8');need(source(after,id).kind===beforeMeta.kind,'root correction changes the subject kind');
    need(current[id]===itemHashGuard(after)&&current[id]!==itemHashGuard(before)&&current[id]!==pack.before[id]
      &&statementHash(after)!==statementHash(before),'no genuine root defining-clause repair');
    need(typeof finding.native_excerpt==='string'&&finding.native_excerpt.length>=20&&before.includes(finding.native_excerpt)
      &&typeof finding.repaired_excerpt==='string'&&finding.repaired_excerpt.length>=20&&after.includes(finding.repaired_excerpt),'root finding lacks actual before/after source clauses');
    if(entry.origin_kind==='assigned-scope-preservation'){
      const rejected=pack.assignments[unit]?.find(x=>key(x)===key(entry.rejection??{})),review=original.reviews?.find(x=>x.id===id),decision=original.decisions?.find(x=>key(x)===key(rejected??{}));
      need(rejected?.id===id&&!Object.hasOwn(original,'completion')&&!(original.blockers??[]).length
        &&original.repair_notes?.status==='assigned_repair_complete'&&original.repair_notes.repair_complete===true
        &&review?.disposition==='repaired'&&evidenceText(review)&&review.post_sha256===itemHashGuard(before)&&review.post_sha256!==pack.before[id]
        &&decision?.outcome==='confirmed_fatal'&&evidenceText(decision)&&finding.kind==='owner-confirmed-approved-scope-narrowing'
        &&typeof finding.approved_excerpt==='string'&&finding.approved_excerpt.length>=20
        &&approved.includes(finding.approved_excerpt)&&after.includes(finding.approved_excerpt), 'not an actual completed assigned repair with verified approved-clause restoration');
      rejections.push(rejected);originRows.push({id,unit,origin_kind:entry.origin_kind,rejection:rejected,native_decision:decision,native_review:review});
    }else{
      need(beforeMeta.kind==='definition'&&!Object.values(pack.assignments).flat().some(x=>x.id===id)&&!(original.created_items??[]).some(x=>x.id===id)
        &&itemHashGuard(before)===pack.before[id]&&finding.kind==='owner-confirmed-native-outside-alert'
        &&Number.isSafeInteger(entry.repair_note_index)&&entry.repair_note_index>=0&&Array.isArray(original.repair_notes)
        &&original.repair_notes[entry.repair_note_index]===entry.native_alert&&typeof entry.native_alert==='string'
        &&entry.native_alert.includes(`items/${id}.md`)&&entry.native_alert.includes('Outside-lane owner alert')
        &&entry.native_alert.includes('not edited or fully adjudicated')&&entry.native_alert.includes('frontier owner'), 'not the exact original separate outside-lane alert');
      originRows.push({id,unit,origin_kind:entry.origin_kind,native_alert:entry.native_alert,repair_note_index:entry.repair_note_index});
    }
  }
  need(Array.isArray(row.scope)&&row.scope.length>0&&Array.isArray(row.reviews)&&Array.isArray(row.decisions),'missing root current scope/reviews');
  const ids=new Set();
  for(const value of row.scope){
    need(frontier.has(value.id)&&pack.before[value.id]&&byId.has(value.id)&&!byId.get(value.id).published&&!ids.has(value.id)
      &&typeof value.reason==='string'&&value.reason.trim().length>=40,'invalid current root review scope');ids.add(value.id);
    const before=ref(value.before_source),old=source(before,value.id),nativeRows=reports.flatMap(r=>r.reviews??[]).filter(r=>r.id===value.id);
    const assigned=Object.values(pack.assignments).flat().some(x=>x.id===value.id);
    need(nativeRows.length===(assigned?1:0)&&itemHashGuard(before)===(assigned?nativeRows[0].post_sha256:pack.before[value.id]),'cannot invent missing original source/review history');
    if(beforeTexts.has(value.id))need(beforeTexts.get(value.id)===before,'ambiguous root repair preimage');beforeTexts.set(value.id,before);
    need(targets.has(value.id)?value.role==='repair-target':value.role==='direct-consumer','wrong root scope role');
  }
  need([...targets].every(id=>ids.has(id)),'missing primary repaired subject');
  const oldItems=items.map(x=>beforeTexts.has(x.id)?{...x,...source(beforeTexts.get(x.id),x.id)}:x),expected=new Set(targets),queue=[...targets],changedInterfaces=[];
  while(queue.length){
    const id=queue.shift(),before=beforeTexts.get(id);
    need(before,'consumer preimage missing');if(statementHash(before)===byId.get(id).statement_sha256)continue;changedInterfaces.push(id);
    for(const impact of [...discoverDownstream({items:oldItems,repairedIds:[id]}),...discoverDownstream({items,repairedIds:[id]})])if(frontier.has(impact.id)&&!expected.has(impact.id)){expected.add(impact.id);queue.push(impact.id);}
  }
  need(same([...ids].sort(),[...expected].sort())&&same(row.expected_review_ids,[...expected].sort()),'root scope does not equal exact old/current defining-clause consumer closure');
  const direct=[...discoverDownstream({items:oldItems,repairedIds:changedInterfaces}),...discoverDownstream({items,repairedIds:changedInterfaces})];
  for(const value of row.scope)if(!targets.has(value.id))need(changedInterfaces.includes(value.supplier)
    &&direct.some(x=>x.id===value.id&&x.suppliers.includes(value.supplier))&&typeof value.consumed_clause==='string'&&value.consumed_clause.trim().length>=40,'consumer lacks actual affected use');
  const contexts=currentHashesMany(root,[...ids]),seen=new Set();
  need(Array.isArray(row.source_reading)&&row.source_reading.length>0,'missing actual relevant source-reading evidence');
  const reviewedUrls=new Set();
  for(const entry of row.source_reading){ref(entry.source);need(entry.full_text_reviewed===true&&typeof entry.read_extent==='string'&&entry.read_extent.trim().length>=40&&typeof entry.reason==='string'&&entry.reason.trim().length>=40,'missing actual local full-text read extent');
    if(entry.url!==undefined){need(/^https:\/\//.test(entry.url),'invalid actually reviewed source URL');reviewedUrls.add(entry.url);}}
  for(const review of row.reviews){const now=contexts.get(review.id);need(ids.has(review.id)&&!seen.has(review.id)&&review.reviewed_by==='root'&&evidenceText(review)
    &&review.source_urls.every(url=>reviewedUrls.has(url))&&['repaired','unaffected'].includes(review.disposition)&&matchesReview(review)&&review.post_sha256===current[review.id]
    &&review.item_sha256===now?.item_sha256&&review.context_sha256===now?.context_sha256
    &&review.disposition===(current[review.id]===itemHashGuard(beforeTexts.get(review.id))?'unaffected':'repaired'),'not an actual distinct current root mathematical review');seen.add(review.id);}
  need(seen.size===ids.size&&row.decisions.length===rejections.length,'missing current reviews or invented outside-alert decision');
  for(const rejected of rejections){const native=originRows.find(x=>x.id===rejected.id).native_decision,decision=row.decisions.find(x=>key(x)===key(rejected));
    need(decision?.reviewed_by==='root'&&decision.outcome===native.outcome&&decision.defect_type===native.defect_type&&evidenceText(decision),'original assigned outcome/type/fatal count changed');}
  need(new Set(row.decisions.map(key)).size===row.decisions.length,'duplicate root decisions');
  need(typeof row.repairer_identity==='string'&&row.repairer_identity.length>0&&row.native_execution_coverage_adopted===false,'missing actual outside repair attribution');ref(row.repair_evidence);
  return {...row,ids,evidence,path,rejections,origin_rows:originRows,root_interface_changes:changedInterfaces};
}
