// Exact initial metadata history; historical rows never become current reviews.
import { sol61Effort } from './math-workflow-effort.mjs';
import {readFileSync,writeFileSync,existsSync,mkdirSync,readdirSync,lstatSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {yaml,split} from './pathway-lib.mjs';
import {itemHashGuard} from './item-hash.mjs';
import {dependencyLevels} from './item-dependency-levels.mjs';
const sha=x=>createHash('sha256').update(typeof x==='string'?x:JSON.stringify(x)).digest('hex');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const need=(v,m)=>{if(!v)throw Error('Step 5 initial metadata history: '+m);};
const date=x=>typeof x==='string'&&Number.isFinite(Date.parse(x));
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const base=(root,run,phase='initial',round=1)=>join(root,'research',`${run}-step5-v2`,phase==='initial'?'initial-metadata-history':`repeat-${round}-metadata-history`);
export const repeatMetadataHistoryPath=(root,run,round)=>join(root,'research',`${run}-step5-v2`,`repeat-${round}-owner-metadata-history.json`);
export const initialMetadataHistoryPath=(root,run)=>join(root,'research',`${run}-step5-v2`,'initial-1-owner-metadata-history.json');
const stateDrained=s=>Object.values(s.dispatches??{}).every(x=>!x.startedAt||Boolean(x.endedAt));
function beforeImpact(root,run,phase='initial',round=1){
  if(phase==='repeat'){
    need(!existsSync(join(root,'research',`${run}-step5-v2`,`repeat-${round}-collected.json`))
      &&!existsSync(join(root,'research',`${run}-step5-v2`,`impact-repeat-${round}.json`))
      &&!readdirSync(join(root,'research',`${run}-dispatch`)).some(n=>new RegExp(`^alpha-repair-step5-v2-impact-repeat(?:-pass-\\d+)?-r${round}-u`).test(n)),
      'repeat collection or impact already frozen/dispatched');return;
  }
  need(!existsSync(join(root,'research',`${run}-step5-v2`,'impact-initial-1.json'))
    &&!readdirSync(join(root,'research',`${run}-dispatch`)).some(n=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(n)),
    'initial impact already frozen or dispatched');
}
function validate(root,run,row,{current=false,receiptBytes=null}={}){
  const repeat=row.version===3,phase=repeat?'repeat':'initial',round=repeat?row.round:1,stage=repeat?'5.5-adjudicate':'5.1-adjudicate';
  const {sha256,...payload}=row,path=repeat?repeatMetadataHistoryPath(root,run,round):initialMetadataHistoryPath(root,run);
  need(sha256===sha(payload)&&[1,2,3].includes(row.version)&&row.kind===(repeat?'owner-repeat-numeric-metadata-history':'owner-initial-metadata-history')
    &&row.run===run&&row.phase===phase&&row.round===round&&Number.isSafeInteger(round)&&round>0&&row.authorized_by==='owner'
    &&row.owner_identity==='/root'&&row.historical_only===true&&row.current_review_granted===false
    &&row.native_execution_coverage_adopted===false&&date(row.recorded_at)
    &&typeof row.reason==='string'&&row.reason.trim().length>=80
    &&row.bindings&&typeof row.bindings==='object'&&!Array.isArray(row.bindings), 'invalid envelope');
  const evidence={[path]:sha(receiptBytes??readFileSync(path,'utf8'))};
  for(const [file,hash]of Object.entries(row.bindings)){
    const p=resolve(root,file);
    need(p.startsWith(resolve(root,'research')+'/')&&/^[a-f0-9]{64}$/.test(hash)
      &&existsSync(p)&&lstatSync(p).isFile()&&!lstatSync(p).isSymbolicLink()
      &&sha(readFileSync(p,'utf8'))===hash,'stale bound archive/native evidence '+file);evidence[p]=hash;
  }
  const bytes=file=>{const p=resolve(root,file);need(Object.hasOwn(evidence,p),'missing binding '+file);return readFileSync(p,'utf8');};
  const bound=file=>JSON.parse(bytes(file));
  const dir=join(root,'research',`${run}-step5-v2`),pack=bound(join(dir,`${phase}-${round}.json`));
  const frontier=bound(join(dir,'frontier.json')),baseline=bound(join(dir,'baseline.json'));
  need(pack.run===run&&pack.phase===phase&&pack.round===round&&pack.adjudicationSchemaVersion===1
    &&Array.isArray(pack.units)&&pack.units.length>0&&new Set(pack.units).size===pack.units.length
    &&frontier.run===run&&same([...pack.frontier_ids].sort(),[...frontier.ids].sort()),'wrong frozen initial inventory');
  const state=bound(row.creation_state),request=bound(row.owner_gate_request);
  need(state.run===run&&state.stage===stage&&state.paused===true&&stateDrained(state)&&(!repeat||state.stageRounds?.[stage]===round)
    &&request.run===run&&request.version===1&&request.id===row.owner_gate_request_id
    &&typeof request.id==='string'&&request.id.length>0&&request.group===stage
    &&same(request.stages,[stage])&&date(request.at)
    &&Date.parse(request.at)<=Date.parse(row.recorded_at),'not the actual paused/drained native creation hold');
  if(row.version>=2)need(Array.isArray(frontier.batches)&&pack.units.length===frontier.batches.length
    &&frontier.batches.every(b=>pack.units.includes(String(b.id)))&&same(pack.frontier_ids,frontier.ids),
    'v2 requires every original frozen unit');
  const verdicts=row.version===2?bound(join(dir,'step4-verdicts.json')):null;
  const reports=[],nativeOutputs=new Map();
  for(const unit of pack.units){
    const label=`step5-v2-${phase}-r${round}-u${unit}`,rp=join(dir,`${label}.json`),report=bound(rp);
    need(report.run===run&&report.phase===phase&&report.round===round&&String(report.unit)===unit
      &&report.input_sha256===sha(pack),'native initial report mismatch');reports.push(report);
    const empty=report.completion==='mechanical-zero-work',dispatchLabel=empty?`step5-v2-empty-${phase}-r${round}-u${unit}`:label;
    const dp=join(root,'research',`${run}-dispatch`,`${empty?'tool-':'alpha-adjudicate-'}${dispatchLabel}.result.json`),native=bound(dp);
    const observed=state.dispatches?.[`${stage}:${dispatchLabel}`];
    need(native.run===run&&native.ok===true&&native.label===dispatchLabel&&same(native.covers,[unit])
      &&observed?.stage===stage&&observed.role===native.role&&observed.label===native.label
      &&observed.lastExitOk===true&&same(observed.covers,native.covers)&&date(observed.startedAt)
      &&date(observed.endedAt)&&date(native.ended_at)
      &&Date.parse(observed.startedAt)<=Date.parse(native.ended_at)
      &&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)
      &&Date.parse(observed.endedAt)<=Date.parse(request.at),'incomplete actual native initial dispatch');
    if(empty)need(native.role==='tool'&&native.written_by==='autopilot'&&report.mathematical_review===false
      &&pack.assignments[unit]?.length===0&&['reviews','decisions','created_items','downstream'].every(k=>Array.isArray(report[k])&&!report[k].length),'invalid actual zero-work completion');
    else{
      need(native.role==='alpha-adjudicate'&&native.runner==='codex'&&native.model==='gpt-6.1-sol'
        &&native.provider_effort===sol61Effort(root,native.run)&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false
        &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
        &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0
        &&Number.isSafeInteger(native.attempt)&&native.attempt>0&&observed.attempt===native.attempt
        &&native.evidence_tag===`.attempt-${native.attempt}`&&date(native.started_at)
        &&Date.parse(observed.startedAt)<=Date.parse(native.started_at)
        &&Date.parse(native.started_at)<=Date.parse(native.ended_at),'not genuine completed native Sol initial work');
      need(same(native,bound(dp.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`))),'native immutable attempt mismatch');
      if(row.version>=2){
        const stem=dp.replace(/\.result\.json$/,`.attempt-${native.attempt}`),logPath=stem+'.log',promptPath=stem+'.prompt.md';
        need(resolve(root,native.log??'')===logPath&&resolve(root,native.prompt??'')===promptPath,'v2 wrong native log/prompt identity');
        const log=bytes(logPath),prompt=bytes(promptPath),end=log.lastIndexOf('\ntokens used\n'),start=log.lastIndexOf('\ncodex\n',end);
        need(start>=0&&end>start&&prompt.includes(`run: ${run}\nrole: alpha-adjudicate\nlabel: ${label}\ncovers: ${unit}\noutput: ${relative(root,rp)}\n`)
          &&prompt.includes(`input_sha256:"${sha(pack)}"`),'v2 native final output identity missing');
        const output=JSON.parse(log.slice(start+7,end).trim());
        need(output.run===run&&output.phase===phase&&output.round===round&&String(output.unit)===unit&&output.input_sha256===sha(pack),'v2 wrong immutable native final identity');
        nativeOutputs.set(unit,output);
      }
    }
  }
  // Authenticate complete repair-time source/manifest graph from immutable
  // archives. Later history reads do not require the live graph to stay frozen.
  const expectedNames=readdirSync(join(root,'research')).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort();
  need(Array.isArray(row.manifests)&&same(row.manifests.map(x=>x.path.split('/').pop()).sort(),expectedNames),'incomplete actual run manifest graph');
  const graphPages=[],sourceById=new Map(),manifestByPath=new Map(),manifestBytes=new Map();
  need(Array.isArray(row.sources)&&new Set(row.sources.map(x=>x.id)).size===row.sources.length,'invalid source archive inventory');
  for(const source of row.sources){
    need(source.path===`items/${source.id}.md`,'wrong archived source identity');
    const text=bytes(source.archive),fm=yaml().parse(split(text).fm);
    need(fm?.id===source.id,'invalid archived source frontmatter');sourceById.set(source.id,{fm,text});
    if(current)need(readFileSync(join(root,source.path),'utf8')===text,'live source differs from repair-time graph '+source.id);
  }
  const exactNativePost=(id,guard)=>{const rows=reports.flatMap(report=>(report.reviews??[]).filter(v=>v.id===id).map(review=>({report,review})));
    if(rows.length!==1)return false;const {report,review}=rows[0],out=nativeOutputs.get(String(report.unit)),summaries=(out?.reviews??[]).filter(v=>v.id===id);
    return pack.assignments[String(report.unit)]?.some(v=>(typeof v==='string'?v:v.id)===id)
      &&['repaired','unaffected'].includes(review.disposition)&&review.uncertain===false&&review.post_sha256===guard
      &&summaries.length===1&&summaries[0].disposition===review.disposition&&summaries[0].post_sha256===guard
      &&summaries[0].review_context_sha256===review.review_context_sha256&&summaries[0].uncertain===false;
  };
  const optionalJustification=(a,b)=>same(a,b)||((a===undefined||Array.isArray(a)&&!a.length)&&(b===undefined||Array.isArray(b)&&!b.length));
  for(const manifest of row.manifests){
    need(new RegExp(`^research/${run}-batch-\\d+\\.pages\\.json$`).test(manifest.path),'foreign manifest');
    const text=bytes(manifest.archive),pages=JSON.parse(text);need(Array.isArray(pages),'invalid archived manifest');
    graphPages.push(...pages);manifestByPath.set(manifest.path,pages);manifestBytes.set(manifest.path,text);
    if(current)need(readFileSync(join(root,manifest.path),'utf8')===text,'live manifest differs from corrected graph');
    for(const page of pages)for(const item of page.items??[]){
      const s=sourceById.get(item.id)?.fm;
      need(s&&same(item.kind,s.kind)&&same(item.title,s.title)&&Array.isArray(item.deps)&&Array.isArray(s.deps)
        &&same([...item.deps].sort(),[...s.deps].sort())&&item.dependency_level===s.dependency_level
        &&(row.version<2||optionalJustification(item.justified_by,s.justified_by)),'not a source-to-manifest metadata mirror '+item.id);
    }
  }
  const graph=dependencyLevels(graphPages);
  need(!graph.errors.length&&graph.items.size===sourceById.size
    &&same([...graph.items.keys()].sort(),[...sourceById.keys()].sort()),'invalid complete repaired in-run dependency graph');
  if(row.version===2)need(same([...graph.items.keys()].sort(),[...frontier.ids].sort()),'v2 repaired graph differs from full original frontier');
  if(repeat){
    const judgePath=join(dir,`judge-${round}.json`),judge=bound(judgePath),certificate=bound(row.prior_certificate);
    const {sha256:certificateHash,...certificatePayload}=certificate;
    need(pack.input_evidence?.[judgePath]===sha(bytes(judgePath))&&judge.run===run&&judge.round===round
      &&judge.certification_sha256===certificateHash&&certificateHash===sha(certificatePayload)
      &&certificate.run===run&&certificate.version===2&&Array.isArray(certificate.creations)
      &&resolve(root,row.prior_certificate)===join(dir,`certification-${certificate.phase}-${certificate.round}.json`),
      'v3 lacks exact prior native certification/judge lineage');
    const created=certificate.creations.map(c=>c.id);
    need(new Set(created).size===created.length&&created.every(id=>!frontier.ids.includes(id)
      &&certificate.items.some(item=>item.id===id&&item.guard_sha256===pack.before[id]))
      &&same([...graph.items.keys()].sort(),[...frontier.ids,...created].sort()),
      'v3 graph changes original frontier or existing native creation scope');
  }
  const seen=new Set();need(Array.isArray(row.carriers)&&(row.version>=2||row.carriers.length>0),'missing manifest corrections');
  for(const carrier of row.carriers){
    need(!seen.has(carrier.path)&&manifestByPath.has(carrier.path),'duplicate or foreign corrected manifest');seen.add(carrier.path);
    const before=bound(carrier.before_file),after=manifestByPath.get(carrier.path),copy=structuredClone(before);let count=0;
    need(same(before.map(p=>[p.id,p.items.map(x=>x.id)]),after.map(p=>[p.id,p.items.map(x=>x.id)])),'manifest page/item inventory changed');
    for(let p=0;p<copy.length;p++)for(let i=0;i<copy[p].items.length;i++)for(const field of (repeat?['dependency_level']:row.version===2?['title','deps','dependency_level','justified_by']:['title','deps','dependency_level'])){
      if(!same(copy[p].items[i][field],after[p].items[i][field])){
        if(repeat){const id=copy[p].items[i].id,label=row.source_levels?.find(x=>x.id===id);
          need(label&&copy[p].items[i][field]===label.before&&after[p].items[i][field]===label.after,'v3 mirror is not an exact declared numeric source correction');}
        if(field==='justified_by'){
          const id=copy[p].items[i].id,source=sourceById.get(id),label=row.source_levels?.find(x=>x.id===id);
          need(source.fm.status==='draft'&&Array.isArray(source.fm.justified_by)&&source.fm.justified_by.length>0
            &&same(after[p].items[i][field],source.fm.justified_by)
            &&exactNativePost(id,itemHashGuard(label?bytes(label.before_file):source.text)),
            'v2 justification mirror lacks exact original native source post');
        }
        copy[p].items[i][field]=after[p].items[i][field];count++;
      }
    }
    need(count>0&&same(copy,after),'manifest repair changed more than source title/deps/level mirrors');
    for(const report of reports)if(Object.hasOwn(report.supporting_evidence??{},carrier.path))
      need(report.supporting_evidence[carrier.path]===sha(bytes(carrier.before_file)),'manifest preimage is not actual native supporting bytes');
    if(row.version>=2)for(const report of reports)for(const [file,hash]of Object.entries(report.supporting_evidence??{}))
      if(resolve(root,file)===resolve(root,carrier.path)){if(repeat)need(hash===sha(manifestBytes.get(carrier.path)),'v3 changed native supporting pin requires a separate authentic protocol');need(hash===sha(bytes(carrier.before_file)),'v2 manifest preimage differs from exact absolute/relative native supporting bytes');}
  }
  if(row.version>=2)for(const report of reports)for(const [file,expected]of Object.entries(report.supporting_evidence??{})){
    const canonical=relative(root,resolve(root,file));if(!manifestBytes.has(canonical)||sha(manifestBytes.get(canonical))===expected)continue;
    const carrier=row.carriers.find(c=>c.path===canonical);
    need(carrier&&sha(bytes(carrier.before_file))===expected,'v2 missing exact historical supporting manifest carrier '+canonical);
  }
  let historicalGuards,sourceIds,historicalReviews;
  if(row.version===1){
  const label=row.source_level;
  need(label?.id==='ex-box-muller-finite-midpoint-tail'&&label.before===2&&label.after===1
    &&sourceById.has(label.id)&&graph.levels.get(label.id)===1,'not the sole authorized computed label correction');
  const before=bytes(label.before_file),after=sourceById.get(label.id).text;
  need(before.split('dependency_level: 2').length===2
    &&before.replace('dependency_level: 2','dependency_level: 1')===after,'source changed beyond sole numeric dependency label');
  const originals=reports.flatMap(r=>(r.reviews??[]).filter(x=>x.id===label.id).map(review=>({report:r,review})));
  need(originals.length===1&&originals[0].review.disposition==='repaired'
    &&originals[0].review.post_sha256===itemHashGuard(before)&&itemHashGuard(before)!==pack.before[label.id]
    &&originals[0].report.decisions.some(x=>x.id===label.id&&x.outcome==='confirmed_nonfatal'&&x.uncertain===false)
    &&baseline[label.id]===pack.before[label.id],'sole label lacks its genuine exact historical repair review');
  historicalGuards={[label.id]:itemHashGuard(before)};sourceIds=[label.id];historicalReviews=originals.map(x=>x.review);
  }else{
    need(!Object.hasOwn(row,'source_level')&&Array.isArray(row.source_levels)&&row.source_levels.length>0,
      'v2 requires explicit draft numeric source_levels');
    historicalGuards={};sourceIds=[];const changed=new Set();
    for(const label of row.source_levels){
      need(typeof label.id==='string'&&!changed.has(label.id)&&sourceById.has(label.id)
        &&Number.isSafeInteger(label.before)&&label.before>=0&&Number.isSafeInteger(label.after)&&label.after>=0
        &&label.before!==label.after&&graph.levels.get(label.id)===label.after,'v2 duplicate/invalid/noncomputed numeric label');changed.add(label.id);
      const before=bytes(label.before_file),after=sourceById.get(label.id).text,oldFm=yaml().parse(split(before).fm),fm=sourceById.get(label.id).fm;
      const lines=[...before.matchAll(/^dependency_level: (0|[1-9]\d*)$/gm)];
      need(oldFm?.id===label.id&&oldFm.status==='draft'&&fm.status==='draft'&&oldFm.kind===fm.kind
        &&oldFm.dependency_level===label.before&&fm.dependency_level===label.after
        &&lines.length===1&&Number(lines[0][1])===label.before
        &&before.replace(lines[0][0],`dependency_level: ${label.after}`)===after,
        'v2 source changed beyond one numeric dependency_level or is not a true draft');
      const guard=itemHashGuard(before),originals=reports.flatMap(report=>(report.reviews??[]).filter(x=>x.id===label.id).map(review=>({report,review})));
      if(label.historical_basis==='native-post'){
        need(originals.length===1,'v2 numeric label lacks unique original native post');
        const {report,review}=originals[0],output=nativeOutputs.get(String(report.unit));
        const summaries=(output?.reviews??[]).filter(x=>x.id===label.id);
        need(pack.assignments[String(report.unit)]?.some(x=>(typeof x==='string'?x:x.id)===label.id)
          &&['repaired','unaffected'].includes(review.disposition)&&review.uncertain===false&&review.post_sha256===guard
          &&summaries.length===1&&summaries[0].disposition===review.disposition&&summaries[0].post_sha256===guard
          &&summaries[0].review_context_sha256===review.review_context_sha256&&summaries[0].uncertain===false,
          'v2 historical source is not the exact assigned native report/final-output post guard');
      }else if(repeat){
        need(label.historical_basis==='unassigned-before'&&originals.length===0
          &&Object.values(pack.assignments).every(rows=>rows.every(x=>(typeof x==='string'?x:x.id)!==label.id))
          &&frontier.ids.includes(label.id)&&guard===pack.before[label.id],
          'v3 unassigned numeric source is not its exact frozen repeat before');
      }else{
        const matches=verdicts.filter(v=>v.id===label.id);
        need(label.historical_basis==='baseline-keep'&&originals.length===0
          &&Object.values(pack.assignments).every(rows=>rows.every(x=>(typeof x==='string'?x:x.id)!==label.id))
          &&guard===baseline[label.id]&&pack.before[label.id]===baseline[label.id]
          &&matches.length===1&&matches[0].model==='gpt-6-luna'&&matches[0].keep===true,
          'v2 unassigned label lacks its unchanged original baseline and accepted Luna verdict');
      }
      need(frontier.ids.includes(label.id)&&(repeat?typeof pack.before[label.id]==='string':typeof baseline[label.id]==='string'&&pack.before[label.id]===baseline[label.id]),'numeric source is outside original frozen authority');
      historicalGuards[label.id]=guard;sourceIds.push(label.id);
    }
    for(const [id,source]of sourceById)if(source.fm.status==='draft'||repeat){
      const rows=reports.flatMap(report=>(report.reviews??[]).filter(review=>review.id===id));
      need(rows.length<=1,'v2 graph has ambiguous original draft review posts');
      const expected=rows.length?rows[0].post_sha256:pack.before[id];
      need(typeof expected==='string'&&(itemHashGuard(source.text)===expected||changed.has(id)),
        'v2 omits a changed draft source or includes unrelated current source changes '+id);
    }
    if(repeat)for(const label of row.source_levels)need(row.carriers.filter(carrier=>bound(carrier.before_file).some(page=>(page.items??[]).some(item=>item.id===label.id&&item.dependency_level===label.before))).length===1,'v3 numeric source lacks its exact original manifest mirror');
    historicalReviews=reports.flatMap(report=>(report.reviews??[]).filter(review=>changed.has(review.id)));
  }
  // The archived state is historical-only on later reads. The first collection
  // also requires real live drained 5.1 or pre-dispatch 5.2 currency.
  if(current){beforeImpact(root,run,phase,round);const live=read(join(root,'.autopilot',run,'state.json'));
    need(live.run===run&&stateDrained(live)&&(repeat?live.stage===stage&&live.stageRounds?.[stage]===round:['5.1-adjudicate','5.2-impact'].includes(live.stage)),'wrong live adjudication collection boundary');}
  return {path,evidence,historicalGuards,sourceIds,historicalReviews,row};
}
export function loadInitialMetadataHistory(root,run,options={}){
  const path=initialMetadataHistoryPath(root,run);return existsSync(path)?validate(root,run,read(path),options):null;
}
export function loadRepeatMetadataHistory(root,run,round,options={}){
  const path=repeatMetadataHistoryPath(root,run,round);return existsSync(path)?validate(root,run,read(path),options):null;
}
export function initialMetadataSupportingHistory(history,path,expected){
  if(!history?.root||!history?.run)return null;
  const loaded=loadInitialMetadataHistory(history.root,history.run);if(!loaded)return null;
  const carrier=loaded.row.carriers.find(x=>resolve(history.root,x.path)===resolve(history.root,path));
  return carrier&&sha(readFileSync(resolve(history.root,carrier.before_file),'utf8'))===expected
    ?{archive:resolve(history.root,carrier.before_file),marker:loaded.path}:null;
}
// Root invokes this recorder only at the real paused boundary. It captures native
// bytes itself and never writes source, reports, packs, verdicts or live state.
function recordMetadataHistory(root,run,payload,repeatRound=null){
  const repeat=repeatRound!==null,phase=repeat?'repeat':'initial',round=repeat?repeatRound:1,stage=repeat?'5.5-adjudicate':'5.1-adjudicate';
  need(!repeat||payload.version===3&&Number.isSafeInteger(round)&&round>0,'invalid repeat v3 version/round');
  const statePath=join(root,'.autopilot',run,'state.json'),requestPath=join(root,'.autopilot',run,'owner-gate-request.json');
  const stateBytes=readFileSync(statePath,'utf8'),requestBytes=readFileSync(requestPath,'utf8');
  const state=JSON.parse(stateBytes);need(state.run===run&&state.stage===stage&&state.paused===true&&stateDrained(state)&&(!repeat||state.stageRounds?.[stage]===round),'recording requires actual paused drained adjudication');beforeImpact(root,run,phase,round);
  need(!existsSync(join(root,'research',`${run}-step5-v2`,`${phase}-${round}-collected.json`)),'original initial collection already exists');
  const version=repeat?3:payload.version===2?2:1;
  if(version>=2)need(!Object.hasOwn(payload,'source_level')&&Array.isArray(payload.source_levels)
    &&['creation_state','owner_gate_request','manifests','sources'].every(k=>!Object.hasOwn(payload,k)),'v2 caller cannot supply creation/current graph archives');
  const bindings={...payload.bindings},store=(name,bytes)=>{
    const path=join(base(root,run,phase,round),name);mkdirSync(resolve(path,'..'),{recursive:true});
    if(existsSync(path))need(readFileSync(path,'utf8')===bytes,'immutable archive conflict '+path);else writeFileSync(path,bytes,{flag:'wx'});
    bindings[relative(root,path)]=sha(bytes);return relative(root,path);
  },bind=path=>{bindings[relative(root,path)]=sha(readFileSync(path,'utf8'));};
  const creation_state=store('creation-state.json',stateBytes);
  const owner_gate_request=store('owner-gate-request.json',requestBytes);
  const manifests=[],sources=[],ids=new Set();
  for(const name of readdirSync(join(root,'research')).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort()){
    const path=`research/${name}`,text=readFileSync(join(root,path),'utf8');manifests.push({path,archive:store('manifests/'+name,text)});
    for(const page of JSON.parse(text))for(const item of page.items??[]){need(!ids.has(item.id),'duplicate owned item');ids.add(item.id);
      const path=`items/${item.id}.md`;sources.push({id:item.id,path,archive:store('sources/'+item.id+'.md',readFileSync(join(root,path),'utf8'))});}
  }
  const dir=join(root,'research',`${run}-step5-v2`),pack=read(join(dir,`${phase}-${round}.json`));
  for(const name of [`${phase}-${round}.json`,'frontier.json','baseline.json',...(repeat?[`judge-${round}.json`]:['step4-verdicts.json'])])bind(join(dir,name));
  for(const unit of pack.units){const label=`step5-v2-${phase}-r${round}-u${unit}`,rp=join(dir,label+'.json');bind(rp);const report=read(rp);
    const dp=join(root,'research',`${run}-dispatch`,`${report.completion==='mechanical-zero-work'?`tool-step5-v2-empty-${phase}-r${round}-u${unit}`:'alpha-adjudicate-'+label}.result.json`);bind(dp);
    const native=read(dp);if(report.completion!=='mechanical-zero-work'){bind(dp.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`));if(version>=2){bind(resolve(root,native.log));bind(resolve(root,native.prompt));}}}
  for(const file of [...payload.carriers.map(x=>x.before_file),...(version>=2?payload.source_levels:[payload.source_level]).map(x=>x.before_file)])bind(resolve(root,file));
  if(repeat)bind(resolve(root,payload.prior_certificate));
  const row={...payload,version,kind:repeat?'owner-repeat-numeric-metadata-history':'owner-initial-metadata-history',run,phase,round,authorized_by:'owner',owner_identity:'/root',historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,recorded_at:new Date().toISOString(),creation_state,owner_gate_request,owner_gate_request_id:read(requestPath).id,manifests,sources,bindings};
  const receipt={...row,sha256:sha(row)},target=repeat?repeatMetadataHistoryPath(root,run,round):initialMetadataHistoryPath(root,run);
  const receiptBytes=JSON.stringify(receipt,null,2)+'\n';
  validate(root,run,receipt,{current:true,receiptBytes});
  need(readFileSync(statePath,'utf8')===stateBytes&&readFileSync(requestPath,'utf8')===requestBytes,
    'native state or request changed during owner recording');
  need(!existsSync(target),'metadata history receipt already exists');writeFileSync(target,receiptBytes,{flag:'wx'});
  return {path:target,historical_only:true,current_review_targets:(version>=2?payload.source_levels:[payload.source_level]).map(x=>x.id)};
}

export function recordInitialMetadataHistory(root,run,payload){return recordMetadataHistory(root,run,payload);}
export function recordRepeatMetadataHistory(root,run,round,payload){return recordMetadataHistory(root,run,payload,round);}
