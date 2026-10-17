// Exact initial metadata history; historical rows never become current reviews.
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
const base=(root,run)=>join(root,'research',`${run}-step5-v2`,'initial-metadata-history');
export const initialMetadataHistoryPath=(root,run)=>join(root,'research',`${run}-step5-v2`,'initial-1-owner-metadata-history.json');
const stateDrained=s=>Object.values(s.dispatches??{}).every(x=>!x.startedAt||Boolean(x.endedAt));
function beforeImpact(root,run){
  need(!existsSync(join(root,'research',`${run}-step5-v2`,'impact-initial-1.json'))
    &&!readdirSync(join(root,'research',`${run}-dispatch`)).some(n=>/^alpha-repair-step5-v2-impact-initial(?:-pass-\d+)?-r1-u/.test(n)),
    'initial impact already frozen or dispatched');
}
function validate(root,run,row,{current=false,receiptBytes=null}={}){
  const {sha256,...payload}=row,path=initialMetadataHistoryPath(root,run);
  need(sha256===sha(payload)&&row.version===1&&row.kind==='owner-initial-metadata-history'
    &&row.run===run&&row.phase==='initial'&&row.round===1&&row.authorized_by==='owner'
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
  const dir=join(root,'research',`${run}-step5-v2`),pack=bound(join(dir,'initial-1.json'));
  const frontier=bound(join(dir,'frontier.json')),baseline=bound(join(dir,'baseline.json'));
  need(pack.run===run&&pack.phase==='initial'&&pack.round===1&&pack.adjudicationSchemaVersion===1
    &&Array.isArray(pack.units)&&pack.units.length>0&&new Set(pack.units).size===pack.units.length
    &&frontier.run===run&&same([...pack.frontier_ids].sort(),[...frontier.ids].sort()),'wrong frozen initial inventory');
  const state=bound(row.creation_state),request=bound(row.owner_gate_request);
  need(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&stateDrained(state)
    &&request.run===run&&request.version===1&&request.id===row.owner_gate_request_id
    &&typeof request.id==='string'&&request.id.length>0&&request.group==='5.1-adjudicate'
    &&same(request.stages,['5.1-adjudicate'])&&date(request.at)
    &&Date.parse(request.at)<=Date.parse(row.recorded_at),'not the actual paused/drained native creation hold');
  const reports=[];
  for(const unit of pack.units){
    const label=`step5-v2-initial-r1-u${unit}`,rp=join(dir,`${label}.json`),report=bound(rp);
    need(report.run===run&&report.phase==='initial'&&report.round===1&&String(report.unit)===unit
      &&report.input_sha256===sha(pack),'native initial report mismatch');reports.push(report);
    const empty=report.completion==='mechanical-zero-work',dispatchLabel=empty?`step5-v2-empty-initial-r1-u${unit}`:label;
    const dp=join(root,'research',`${run}-dispatch`,`${empty?'tool-':'alpha-adjudicate-'}${dispatchLabel}.result.json`),native=bound(dp);
    const observed=state.dispatches?.[`5.1-adjudicate:${dispatchLabel}`];
    need(native.run===run&&native.ok===true&&native.label===dispatchLabel&&same(native.covers,[unit])
      &&observed?.stage==='5.1-adjudicate'&&observed.role===native.role&&observed.label===native.label
      &&observed.lastExitOk===true&&same(observed.covers,native.covers)&&date(observed.startedAt)
      &&date(observed.endedAt)&&date(native.ended_at)
      &&Date.parse(observed.startedAt)<=Date.parse(native.ended_at)
      &&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)
      &&Date.parse(observed.endedAt)<=Date.parse(request.at),'incomplete actual native initial dispatch');
    if(empty)need(native.role==='tool'&&native.written_by==='autopilot'&&report.mathematical_review===false
      &&pack.assignments[unit]?.length===0&&['reviews','decisions','created_items','downstream'].every(k=>Array.isArray(report[k])&&!report[k].length),'invalid actual zero-work completion');
    else{
      need(native.role==='alpha-adjudicate'&&native.runner==='codex'&&native.model==='gpt-6.1-sol'
        &&native.provider_effort==='high'&&native.exit_code===0&&native.process_exit_code===0&&native.timed_out===false
        &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
        &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0
        &&Number.isSafeInteger(native.attempt)&&native.attempt>0&&observed.attempt===native.attempt
        &&native.evidence_tag===`.attempt-${native.attempt}`&&date(native.started_at)
        &&Date.parse(observed.startedAt)<=Date.parse(native.started_at)
        &&Date.parse(native.started_at)<=Date.parse(native.ended_at),'not genuine completed native Sol initial work');
      need(same(native,bound(dp.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`))),'native immutable attempt mismatch');
    }
  }
  // Authenticate complete repair-time source/manifest graph from immutable
  // archives. Later history reads do not require the live graph to stay frozen.
  const expectedNames=readdirSync(join(root,'research')).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).sort();
  need(Array.isArray(row.manifests)&&same(row.manifests.map(x=>x.path.split('/').pop()).sort(),expectedNames),'incomplete actual run manifest graph');
  const graphPages=[],sourceById=new Map(),manifestByPath=new Map();
  need(Array.isArray(row.sources)&&new Set(row.sources.map(x=>x.id)).size===row.sources.length,'invalid source archive inventory');
  for(const source of row.sources){
    need(source.path===`items/${source.id}.md`,'wrong archived source identity');
    const text=bytes(source.archive),fm=yaml().parse(split(text).fm);
    need(fm?.id===source.id,'invalid archived source frontmatter');sourceById.set(source.id,{fm,text});
    if(current)need(readFileSync(join(root,source.path),'utf8')===text,'live source differs from repair-time graph '+source.id);
  }
  for(const manifest of row.manifests){
    need(new RegExp(`^research/${run}-batch-\\d+\\.pages\\.json$`).test(manifest.path),'foreign manifest');
    const text=bytes(manifest.archive),pages=JSON.parse(text);need(Array.isArray(pages),'invalid archived manifest');
    graphPages.push(...pages);manifestByPath.set(manifest.path,pages);
    if(current)need(readFileSync(join(root,manifest.path),'utf8')===text,'live manifest differs from corrected graph');
    for(const page of pages)for(const item of page.items??[]){
      const s=sourceById.get(item.id)?.fm;
      need(s&&same(item.kind,s.kind)&&same(item.title,s.title)&&Array.isArray(item.deps)&&Array.isArray(s.deps)
        &&same([...item.deps].sort(),[...s.deps].sort())&&item.dependency_level===s.dependency_level,'not a source-to-manifest metadata mirror '+item.id);
    }
  }
  const graph=dependencyLevels(graphPages);
  need(!graph.errors.length&&graph.items.size===sourceById.size
    &&same([...graph.items.keys()].sort(),[...sourceById.keys()].sort()),'invalid complete repaired in-run dependency graph');
  const seen=new Set();need(Array.isArray(row.carriers)&&row.carriers.length>0,'missing manifest corrections');
  for(const carrier of row.carriers){
    need(!seen.has(carrier.path)&&manifestByPath.has(carrier.path),'duplicate or foreign corrected manifest');seen.add(carrier.path);
    const before=bound(carrier.before_file),after=manifestByPath.get(carrier.path),copy=structuredClone(before);let count=0;
    need(same(before.map(p=>[p.id,p.items.map(x=>x.id)]),after.map(p=>[p.id,p.items.map(x=>x.id)])),'manifest page/item inventory changed');
    for(let p=0;p<copy.length;p++)for(let i=0;i<copy[p].items.length;i++)for(const field of ['title','deps','dependency_level']){
      if(!same(copy[p].items[i][field],after[p].items[i][field])){copy[p].items[i][field]=after[p].items[i][field];count++;}
    }
    need(count>0&&same(copy,after),'manifest repair changed more than source title/deps/level mirrors');
    for(const report of reports)if(Object.hasOwn(report.supporting_evidence??{},carrier.path))
      need(report.supporting_evidence[carrier.path]===sha(bytes(carrier.before_file)),'manifest preimage is not actual native supporting bytes');
  }
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
  // The archived state is historical-only on later reads. The first collection
  // also requires real live drained 5.1 or pre-dispatch 5.2 currency.
  if(current){beforeImpact(root,run);const live=read(join(root,'.autopilot',run,'state.json'));
    need(live.run===run&&stateDrained(live)&&((live.stage==='5.1-adjudicate'&&live.paused===true)||live.stage==='5.2-impact'),'wrong live initial collection boundary');}
  return {path,evidence,historicalGuards:{[label.id]:itemHashGuard(before)},sourceIds:[label.id],historicalReviews:originals.map(x=>x.review),row};
}
export function loadInitialMetadataHistory(root,run,options={}){
  const path=initialMetadataHistoryPath(root,run);return existsSync(path)?validate(root,run,read(path),options):null;
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
export function recordInitialMetadataHistory(root,run,payload){
  const statePath=join(root,'.autopilot',run,'state.json'),requestPath=join(root,'.autopilot',run,'owner-gate-request.json');
  const stateBytes=readFileSync(statePath,'utf8'),requestBytes=readFileSync(requestPath,'utf8');
  const state=JSON.parse(stateBytes);need(state.run===run&&state.stage==='5.1-adjudicate'&&state.paused===true&&stateDrained(state),'recording requires actual paused drained 5.1');beforeImpact(root,run);
  need(!existsSync(join(root,'research',`${run}-step5-v2`,'initial-1-collected.json')),'original initial collection already exists');
  const bindings={...payload.bindings},store=(name,bytes)=>{
    const path=join(base(root,run),name);mkdirSync(resolve(path,'..'),{recursive:true});
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
  const dir=join(root,'research',`${run}-step5-v2`),pack=read(join(dir,'initial-1.json'));
  for(const name of ['initial-1.json','frontier.json','baseline.json','step4-verdicts.json'])bind(join(dir,name));
  for(const unit of pack.units){const label=`step5-v2-initial-r1-u${unit}`,rp=join(dir,label+'.json');bind(rp);const report=read(rp);
    const dp=join(root,'research',`${run}-dispatch`,`${report.completion==='mechanical-zero-work'?'tool-step5-v2-empty-initial-r1-u'+unit:'alpha-adjudicate-'+label}.result.json`);bind(dp);
    const native=read(dp);if(report.completion!=='mechanical-zero-work')bind(dp.replace(/\.result\.json$/,`.attempt-${native.attempt}.result.json`));}
  for(const file of [...payload.carriers.map(x=>x.before_file),payload.source_level.before_file])bind(resolve(root,file));
  const row={...payload,version:1,kind:'owner-initial-metadata-history',run,phase:'initial',round:1,authorized_by:'owner',owner_identity:'/root',historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,recorded_at:new Date().toISOString(),creation_state,owner_gate_request,owner_gate_request_id:read(requestPath).id,manifests,sources,bindings};
  const receipt={...row,sha256:sha(row)},target=initialMetadataHistoryPath(root,run);
  const receiptBytes=JSON.stringify(receipt,null,2)+'\n';
  validate(root,run,receipt,{current:true,receiptBytes});
  need(readFileSync(statePath,'utf8')===stateBytes&&readFileSync(requestPath,'utf8')===requestBytes,
    'native state or request changed during owner recording');
  need(!existsSync(target),'metadata history receipt already exists');writeFileSync(target,receiptBytes,{flag:'wx'});
  return {path:target,historical_only:true,current_review_targets:[payload.source_level.id]};
}
