#!/usr/bin/env node
// Historical telemetry only: allowlisted counters/identities, never transcript prose.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {createGzip, createGunzip, gunzipSync} from 'node:zlib';
import {createInterface} from 'node:readline';
import {once} from 'node:events';
import {finished} from 'node:stream/promises';
import {execFileSync} from 'node:child_process';
import {resolve, relative, dirname, basename, join} from 'node:path';
import {pathToFileURL} from 'node:url';

const numericUsage = ['input_tokens','cached_input_tokens','output_tokens','reasoning_output_tokens','total_tokens','observed_requests','max_request_input_tokens','requests_over_272k','compactions'];
const scalarKeys = ['id','model','role','label','run','attempt','stage','runner','provider','profile','requested_effort','provider_effort','context_window','auto_compact_token_limit','started_at','ended_at','ms','exit_code','timed_out','ok','session_id','at','keep','verdict','outcome','severity','status','pt','cached_pt','ct','prompt_chars','item_chars','cited_items','pair_items','batch_items'];
const hash = s => createHash('sha256').update(s).digest('hex');
export function pick(row, keys) {
  const out={}; for(const k of keys) if(['string','number','boolean'].includes(typeof row?.[k]) || row?.[k]===null) out[k]=row[k];
  return out;
}
export function normalizeDispatch(row) {
  const out=pick(row,scalarKeys);
  if(Array.isArray(row.covers))out.covers=row.covers.filter(x=>typeof x==='string'||typeof x==='number');
  out.token_usage=row.token_usage?.available===true
    ? {available:true,...pick(row.token_usage,numericUsage)} : {available:false};
  return out;
}
export function usageAvailability(row) {
  if(!Number.isFinite(row.pt)||!Number.isFinite(row.ct))return 'missing';
  return row.pt===0&&row.ct===0?'reported-zero-ambiguous':'reported';
}
export function counterDelta(previous, total) {
  const out={}; for(const k of numericUsage)if(Number.isFinite(total?.[k]))out[k]=total[k]-(Number.isFinite(previous?.[k])&&total[k]>=previous[k]?previous[k]:0);
  return out;
}
export function safeRelative(root, path) {
  const full=resolve(root,path),rel=relative(root,full);
  if(!rel||rel==='..'||rel.startsWith('../')||rel.startsWith('/')||rel.split('/').includes('.git'))throw Error(`unsafe path: ${path}`);
  let cur=root;for(const part of rel.split('/')){cur=join(cur,part);if(fs.existsSync(cur)&&fs.lstatSync(cur).isSymbolicLink())throw Error(`symlink path: ${path}`);}
  return rel;
}
export function sourceKind(p) {
  if(/-judge-attempts\.jsonl$/.test(p))return 'judge-attempt';
  if(p.endsWith('.result.json'))return 'dispatch';
  if(/cost[^/]*\.jsonl$/.test(p))return 'judge-cost';
  if(/(?:-judge(?:-paired)?|\/verification\/judge[^/]*)\.jsonl$/.test(p)&&!p.includes('context-hash'))return 'judge-verdict';
  if(/(?:defects|defect-ledger)[^/]*\.jsonl$/.test(p))return 'defect';
  if(/\/rollout-[^/]+\.jsonl$/.test(p))return 'session';
  if(p.includes('autopilot')&&p.endsWith('/state.json'))return 'state';
  if(p.includes('autopilot')&&p.endsWith('/events.jsonl'))return 'events';
  if(/-dispatch\/.*\.log(?:\.gz)?$/.test(p))return 'log';
  if(p.startsWith('research/')&&p.endsWith('.jsonl'))return 'workflow-ledger';
  return null;
}
function git(root,...args){return execFileSync('git',args,{cwd:root,encoding:'utf8',maxBuffer:100e6});}
export async function collect(root,outDir,excludeSnapshot=null) {
  root=resolve(root);outDir=resolve(outDir);
  if(fs.existsSync(outDir))throw Error('Output directory already exists; choose a fresh snapshot, do not overwrite evidence');
  fs.mkdirSync(outDir,{recursive:true});
  const files=execFileSync('rg',['--files','--hidden','--no-ignore','-g','!.git','-g','!**/node_modules/**'],{cwd:root,encoding:'utf8',maxBuffer:100e6}).trim().split('\n').sort();
  const snapshots=excludeSnapshot?[excludeSnapshot].flat():[];
  const excluded=new Set(snapshots.flatMap(dir=>gunzipSync(fs.readFileSync(join(dir,'sources.jsonl.gz'))).toString().trim().split('\n').map(l=>JSON.parse(l).path)));
  const sources=files.filter(p=>sourceKind(p)&&!excluded.has(p)&&!resolve(root,p).startsWith(outDir+'/'));
  const closed={};for(const l of git(root,'log','--all','--format=%H %s','--grep=engine close-out').split('\n')){const m=l.match(/^(\S+) chore\(([^)]+)\): engine close-out/);if(m&&!closed[m[2]])closed[m[2]]=m[1];}
  const resumeRuns=files.filter(p=>/^research\/[^/]+-RESUME\.md$/.test(p)).map(p=>p.slice(9,-10));
  const runNames=[...new Set([...Object.keys(closed),...resumeRuns,...sources.filter(p=>p.includes('-dispatch/')).map(p=>p.split('/').find(x=>x.endsWith('-dispatch'))?.slice(0,-9)).filter(Boolean)])].sort((a,b)=>b.length-a.length);
  const stateDirs=[];for(const p of sources.filter(p=>sourceKind(p)==='state'))try{const d=JSON.parse(fs.readFileSync(join(root,p),'utf8'));if(d.run)stateDirs.push({dir:dirname(p),run:d.run});}catch{}
  stateDirs.sort((a,b)=>b.dir.length-a.dir.length);
  const infer=p=>runNames.find(r=>p.split('/').some(x=>x===r||x.startsWith(r+'-')))??stateDirs.find(x=>p.startsWith(x.dir+'/'))?.run??basename(p).replace(/(?:-judge)?-cost.*|\.jsonl$|\.json$/g,'');
  const sinks={};
  function sink(kind){if(!sinks[kind]){const output=fs.createWriteStream(join(outDir,`${kind}.jsonl.gz`)),gzip=createGzip({level:9});gzip.pipe(output);sinks[kind]={gzip,output,count:0};}return sinks[kind];}
  async function emit(kind,row){const s=sink(kind);s.count++;if(!s.gzip.write(JSON.stringify(row)+'\n'))await once(s.gzip,'drain');}
  const runStats={};
  function stats(run){return runStats[run]??={run,closeout_commit:closed[run]??null,dispatches:0,dispatch_ok:0,dispatch_failed:0,dispatch_unknown:0,dispatch_usage_known:0,dispatch_input:0,dispatch_cached:0,dispatch_output:0,dispatch_ms:0,judge_calls:0,judge_reported:0,judge_zero_ambiguous:0,judge_input:0,judge_cached:0,judge_output:0,verdict_pass:0,verdict_reject:0,sessions:0,session_input:0,session_cached:0,session_output:0,first:null,last:null,models:{},event_types:{},gaps:[]};}
  function dates(st,row){for(const t of [row.started_at,row.ended_at,row.startedAt,row.finishedAt,row.at,row.timestamp])if(typeof t==='string'&&Number.isFinite(Date.parse(t))){if(!st.first||t<st.first)st.first=t;if(!st.last||t>st.last)st.last=t;}}
  const seenInodes=new Map(),seenContent=new Map(),costSeen=new Set(),verdictSeen=new Set();
  const inventory=[],gaps=[];
  for(const [index,p] of sources.entries()){
    const kind=sourceKind(p),full=join(root,p),stat=fs.lstatSync(full);if(!stat.isFile())continue;
    const entry={path:p,kind,run:infer(p),bytes:stat.size,sha256:null,lines:0,malformed:0,records:0};inventory.push(entry);
    const inode=`${stat.dev}:${stat.ino}`,prior=seenInodes.get(inode);
    if(prior){entry.alias_of=prior.path;entry.sha256=prior.sha256;entry.accounting='hardlink-alias';continue;}
    seenInodes.set(inode,entry);
    // Hash original bytes; no credential file is a telemetry source.
    const digest=createHash('sha256');for await(const chunk of fs.createReadStream(full))digest.update(chunk);entry.sha256=digest.digest('hex');
    const contentKey=`${kind}:${entry.run}:${entry.sha256}`;
    if(seenContent.has(contentKey)){entry.alias_of=seenContent.get(contentKey);entry.accounting='byte-identical-copy';continue;}
    seenContent.set(contentKey,p);entry.accounting='represented';
    if(/\/fixture\//.test(p)||/step7scopetest\d+|judge-context-injection-test/.test(p)){entry.accounting='test-fixture-excluded';continue;}
    try{
      if(kind==='dispatch'||kind==='state'){
        const raw=JSON.parse(fs.readFileSync(full,'utf8')),run=raw.run??entry.run;entry.run=run;const st=stats(run);
        if(kind==='dispatch'){
          const row=normalizeDispatch(raw);dates(st,row);st.dispatches++;st.dispatch_ms+=Number(row.ms)||0;
          st[row.ok===true?'dispatch_ok':row.ok===false?'dispatch_failed':'dispatch_unknown']++;
          const model=row.model??'(tool/unknown)';st.models[model]=(st.models[model]??0)+1;
          if(row.token_usage.available){st.dispatch_usage_known++;st.dispatch_input+=row.token_usage.input_tokens??0;st.dispatch_cached+=row.token_usage.cached_input_tokens??0;st.dispatch_output+=row.token_usage.output_tokens??0;}
          await emit('dispatches',{source:p,...row,run});entry.records++;
        }else{
          const row={...pick(raw,['run','stage','startedAt','finishedAt','paused','version']),stages:{},dispatches:{}};dates(st,row);
          for(const [id,x]of Object.entries(raw.stages??{}))row.stages[id]=pick(x,['enteredAt','gatesPassedAt','doneAt','fixRounds']);
          for(const [id,x]of Object.entries(raw.dispatches??{}))row.dispatches[id]=pick(x,['stage','role','label','attempt','attempts','startedAt','endedAt','lastExitOk']);
          await emit('states',{source:p,...row});entry.records++;
        }
      }else{
        const stream=p.endsWith('.gz')?fs.createReadStream(full).pipe(createGunzip()):fs.createReadStream(full);
        const lines=createInterface({input:stream,crlfDelay:Infinity});
        let previous=null,sessionUsage={input_tokens:0,cached_input_tokens:0,output_tokens:0},sessionInfo={},tokenEvents=0,compactions=0,expectTokens=false,logHints=[];
        for await(const line of lines){entry.lines++;if(!line.trim())continue;
          if(kind==='log'){
            // Only retain numeric terminal counters, not surrounding prose. Hints are never summed as billed usage.
            if(expectTokens&&/^\s*[\d,]+\s*$/.test(line))logHints.push({line:entry.lines,value:Number(line.replace(/,/g,''))});
            expectTokens=/^\s*tokens used\s*$/.test(line);continue;
          }
          let row;try{row=JSON.parse(line);}catch{entry.malformed++;continue;}
          const run=row.run??entry.run,st=stats(run);dates(st,row);
          if(kind==='session'){
            if(row.type==='session_meta')sessionInfo={...sessionInfo,...pick(row.payload,['id','timestamp','model_provider'])};
            if(row.type==='turn_context')sessionInfo={...sessionInfo,...pick(row.payload,['model','effort'])};
            if(row.type==='compacted')compactions++;
            if(row.type!=='event_msg'||row.payload?.type!=='token_count')continue;
            const total=pick(row.payload.info?.total_token_usage,numericUsage),last=pick(row.payload.info?.last_token_usage,numericUsage);
            if(!Number.isFinite(total.input_tokens)||!Number.isFinite(total.output_tokens))continue;
            if(JSON.stringify(total)===JSON.stringify(previous))continue;
            const delta=counterDelta(previous,total);for(const k of Object.keys(sessionUsage))sessionUsage[k]+=delta[k]??0;previous=total;tokenEvents++;
            await emit('session-counters',{source:p,run,timestamp:row.timestamp,total,last});entry.records++;
          }else if(kind==='events'){
            const event=pick(row,['at','type','stage','role','label','attempt','running','exit_code','round','ms']);
            if(!event.stage){const m=String(row.message??'').match(/^entering ([\w.-]+) /);if(m)event.stage=m[1];}
            st.event_types[event.type??'unknown']=(st.event_types[event.type??'unknown']??0)+1;
            await emit('events',{source:p,line:entry.lines,run,...event});entry.records++;
          }else{
            const clean=pick(row,[...scalarKeys,'latency_ms','max_tokens','finish_reason','has_content','raw_bytes']);if(kind==='judge-cost'){
              // Timestamped duplicated archive rows may be collapsed. Untimed repeats within a file are real observations.
              const key=row.at?`${run}:${hash(JSON.stringify(row))}`:`${p}:${entry.lines}`;
              if(costSeen.has(key)){entry.duplicate_rows=(entry.duplicate_rows??0)+1;continue;}costSeen.add(key);
              clean.usage_availability=usageAvailability(row);st.judge_calls++;
              if(clean.usage_availability==='reported')st.judge_reported++;else if(clean.usage_availability==='reported-zero-ambiguous')st.judge_zero_ambiguous++;
              st.judge_input+=Number(row.pt)||0;st.judge_cached+=Number(row.cached_pt)||0;st.judge_output+=Number(row.ct)||0;
            }else if(kind==='judge-verdict'){
              const key=row.at?`${run}:${hash(JSON.stringify(row))}`:`${p}:${entry.lines}`;
              if(verdictSeen.has(key)){entry.duplicate_rows=(entry.duplicate_rows??0)+1;continue;}verdictSeen.add(key);
              if(row.keep===true)st.verdict_pass++;if(row.keep===false)st.verdict_reject++;
            }
            await emit(kind,{source:p,line:entry.lines,run,...clean});entry.records++;
          }
        }
        if(kind==='session'){
          const st=stats(entry.run);st.sessions++;st.session_input+=sessionUsage.input_tokens;st.session_cached+=sessionUsage.cached_input_tokens;st.session_output+=sessionUsage.output_tokens;
          await emit('sessions',{source:p,run:entry.run,...sessionInfo,usage_available:tokenEvents>0,token_events:tokenEvents,compactions,usage:sessionUsage});entry.records++;
        }else if(kind==='log'){
          await emit('log-counter-hints',{source:p,run:entry.run,terminal_counter_hints:logHints,interpretation:'unattributed hints; excluded from usage totals'});entry.records++;
        }
      }
    }catch(error){entry.accounting='read-error';entry.error_code=error.code??error.name;gaps.push({source:p,problem:'read-error',code:entry.error_code});}
    if(entry.malformed)gaps.push({source:p,problem:'malformed-json-lines',count:entry.malformed});
    if((index+1)%500===0)console.error(`telemetry ${index+1}/${sources.length} sources`);
  }
  for(const r of Object.values(runStats)){
    const llm=inventory.filter(x=>x.run===r.run&&x.kind==='dispatch'&&x.accounting==='represented').length;
    if(r.dispatch_usage_known<r.dispatches)r.gaps.push(`${r.dispatches-r.dispatch_usage_known} dispatch records lack usage (includes mechanical tools)`);
    if(r.judge_zero_ambiguous)r.gaps.push(`${r.judge_zero_ambiguous} judge calls report zero counters; historical instrumentation may be absent`);
    if(!llm&&!r.judge_calls&&!r.sessions)r.gaps.push('no retained token measurements');
  }
  for(const r of inventory)await emit('sources',r);
  for(const s of Object.values(sinks))s.gzip.end();
  await Promise.all(Object.values(sinks).map(s=>finished(s.output)));
  const totals=Object.fromEntries(Object.entries(sinks).map(([k,s])=>[k,s.count]));
  const summary={schema:1,generated_at:new Date().toISOString(),baseline_commit:git(root,'rev-parse','HEAD').trim(),source_files:inventory.length,source_accounting:Object.fromEntries([...new Set(inventory.map(x=>x.accounting))].map(k=>[k,inventory.filter(x=>x.accounting===k).length])),records:totals,gaps,runs:Object.values(runStats).sort((a,b)=>a.run.localeCompare(b.run)),limitations:['Dispatch, judge and session counters overlap and MUST NOT be summed together.','Token counters are observed telemetry, not billed dollar costs.','Missing historical counters remain unknown. Zero-only judge rows are ambiguous.','Run dates are observation bounds, not necessarily engine elapsed time.','Event messages, prompts, transcript prose, auth and credentials are omitted.','Archive snapshots can overlap event/session observations; source paths and hashes remain available.']};
  fs.writeFileSync(join(outDir,'summary.json'),JSON.stringify(summary,null,2)+'\n');
  const cols=['run','closeout_commit','dispatches','dispatch_ok','dispatch_failed','dispatch_usage_known','dispatch_input','dispatch_cached','dispatch_output','judge_calls','judge_reported','judge_zero_ambiguous','judge_input','judge_cached','judge_output','verdict_pass','verdict_reject','sessions','session_input','session_cached','session_output','first','last'];
  fs.writeFileSync(join(outDir,'runs.tsv'),cols.join('\t')+'\n'+summary.runs.map(r=>cols.map(k=>r[k]??'').join('\t')).join('\n')+'\n');
  const manifest={schema:1,files:fs.readdirSync(outDir).sort().map(p=>({path:p,bytes:fs.statSync(join(outDir,p)).size,sha256:hash(fs.readFileSync(join(outDir,p)))}))};
  fs.writeFileSync(join(outDir,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
  console.log(JSON.stringify({runs:summary.runs.length,sources:inventory.length,records:totals,gaps:gaps.length,out:outDir}));return summary;
}
export async function verify(outDir){
  const m=JSON.parse(fs.readFileSync(join(outDir,'manifest.json'),'utf8'));
  for(const f of m.files){safeRelative(outDir,f.path);const b=fs.readFileSync(join(outDir,f.path));if(b.length!==f.bytes||hash(b)!==f.sha256)throw Error(`archive mismatch: ${f.path}`);}
  const summary=JSON.parse(fs.readFileSync(join(outDir,'summary.json'),'utf8'));
  for(const [kind,n]of Object.entries(summary.records)){let count=0;for await(const line of createInterface({input:fs.createReadStream(join(outDir,kind+'.jsonl.gz')).pipe(createGunzip()),crlfDelay:Infinity})){JSON.parse(line);count++;}if(count!==n)throw Error(`record count mismatch ${kind}`);}
  if(Object.values(summary.source_accounting).reduce((a,b)=>a+b,0)!==summary.source_files)throw Error('source accounting incomplete');
  console.log(`telemetry verified: ${summary.source_files} source paths, ${summary.runs.length} run namespaces; ${summary.gaps.length} explicit source gaps`);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){const [cmd,arg,...exclude]=process.argv.slice(2);if(cmd==='collect'&&arg)await collect(process.cwd(),arg,exclude);else if(cmd==='verify'&&arg)await verify(resolve(arg));else throw Error('Usage: run-telemetry.mjs collect OUT_DIR [EXCLUDE_SNAPSHOT ...] | verify OUT_DIR');}
