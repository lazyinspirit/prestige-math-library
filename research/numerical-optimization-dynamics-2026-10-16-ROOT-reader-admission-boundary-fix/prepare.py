from pathlib import Path
import json, difflib

base=Path(__file__).parent
code=Path('tools/step5-reader-concerns.mjs')
old="""  if(row.version===2)need(state.paused===true,'v2 admission requires a paused, drained boundary');"""
new="""  if(row.version===2){
    // Creation authority belongs to the real paused 5.1 hold. Native planning
    // later runs in drained, unpaused 5.2; it authenticates that creation rather
    // than claiming another pause occurred at the planning boundary.
    const creation=row.creation_state,requestRef=row.owner_gate_request;
    need(creation&&typeof creation.file==='string'&&date(creation.captured_at)
      &&requestRef&&typeof requestRef.file==='string'&&typeof requestRef.id==='string'
      &&requestRef.id.length>0,'missing v2 paused-creation archives');
    const creationPath=resolve(root,creation.file),requestPath=resolve(root,requestRef.file);
    const created=bound(creationPath),request=bound(requestPath);
    need(created.run===run&&created.stage==='5.1-adjudicate'&&created.paused===true
      &&Object.values(created.dispatches??{}).every(value=>!value.startedAt||Boolean(value.endedAt))
      &&request.version===1&&request.run===run&&request.id===requestRef.id
      &&request.group==='5.1-adjudicate'
      &&JSON.stringify(request.stages)===JSON.stringify(['5.1-adjudicate'])&&date(request.at),
      'v2 creation must archive the actual paused, drained native 5.1 owner hold');
    const captured=Date.parse(creation.captured_at),recorded=Date.parse(row.recorded_at);
    need(Date.parse(request.at)<=captured&&captured<=recorded,
      'v2 owner capture and recording must follow the native creation request');
    need(Array.isArray(initial.units)&&initial.units.length>0
      &&new Set(initial.units).size===initial.units.length,'invalid v2 initial unit inventory');
    for(const unit of initial.units){
      const label=`step5-v2-initial-r1-u${unit}`,report=bound(join(dir,`${label}.json`));
      const mechanical=report.completion==='mechanical-zero-work';
      const dispatchLabel=mechanical?`step5-v2-empty-initial-r1-u${unit}`:label;
      const native=bound(join(dispatchDir,`${mechanical?'tool-':'alpha-adjudicate-'}${dispatchLabel}.result.json`));
      const observed=created.dispatches?.[`5.1-adjudicate:${dispatchLabel}`];
      need(observed?.stage==='5.1-adjudicate'&&observed.role===native.role
        &&observed.label===native.label&&observed.lastExitOk===true
        &&JSON.stringify(observed.covers)===JSON.stringify([unit])
        &&JSON.stringify(native.covers)===JSON.stringify(observed.covers)
        &&date(observed.startedAt)&&date(observed.endedAt)&&date(native.ended_at)
        &&Date.parse(observed.startedAt)<=Date.parse(native.ended_at)
        &&Date.parse(native.ended_at)<=Date.parse(observed.endedAt)
        &&Date.parse(observed.endedAt)<=Date.parse(request.at),
        'v2 creation archive lacks a matching successful actual initial unit');
      if(!mechanical){
        need(Number.isSafeInteger(native.attempt)&&native.attempt>0
          &&observed.attempt===native.attempt&&native.evidence_tag===`.attempt-${native.attempt}`
          &&date(native.started_at)&&Date.parse(observed.startedAt)<=Date.parse(native.started_at)
          &&Date.parse(native.started_at)<=Date.parse(native.ended_at)
          &&native.process_exit_code===0&&native.exit_code===0&&native.timed_out===false
          &&native.terminal_summary?.task_completed===true&&native.terminal_summary.task_aborted===false
          &&native.terminal_summary.final_response_present===true&&native.terminal_summary.error_events===0,
          'incomplete v2 initial native execution');
        const attempt=bound(join(dispatchDir,`alpha-adjudicate-${label}.attempt-${native.attempt}.result.json`));
        need(hash(native)===hash(attempt),'v2 initial stable result differs from immutable attempt');
      }
    }
    // The common guard above still requires a paused/drained live 5.1 state or
    // a drained live 5.2 state. Only actual 5.2 preparation may use the latter.
    need(state.stage==='5.1-adjudicate'||requireCollection===true,
      'v2 read-only admission validation requires the paused native 5.1 hold');
  }"""
doc=Path('WORKFLOW.md')
docold="""It requires a paused drained boundary, all current run manifests bound and a
unique current owner. Each entry supplies typed `source_kind: concern` or"""
docnew="""Creation requires the actual paused, drained native 5.1 owner hold after every
genuine initial unit completes and before the first impact pack freezes. The
envelope adds `creation_state: {file, captured_at}` and
`owner_gate_request: {file, id}` pointing to exact research archives of that
native state and matching request, both raw-SHA256-bound in `bindings`.
The request must name the same run, group and sole stage `5.1-adjudicate`;
the archived state must be paused and drained. Its dispatch rows must match
every successful initial native result and unit coverage, including genuine
mechanical zero-work completions; worker results also retain exact immutable
attempt and successful terminal execution checks. The root records the truthful
archive capture time in `captured_at`, after the native request's `at`, and
`recorded_at` must follow that capture. The native request must follow all
completed initial dispatches. The native state has no update-time field;
filesystem modification times confer no historical authority. Capture exact
native bytes at this real hold; no synthetic paused state is permitted.
Read-only validation still requires live paused, drained 5.1. Native impact
preparation actually runs in drained, unpaused 5.2 before owner dispatch and
authenticates these paused-creation archives while rechecking all original
reports, current manifests and unchanged kept-item guards. It does not require
or imply a new 5.2 pause. All current run manifests remain bound and each item
must have a unique current owner. Version-1 behavior is unchanged.
Each entry supplies typed `source_kind: concern` or"""
edits=[]
for p,pairs in [(code,[(old,new)]),(doc,[(docold,docnew)])]:
 before=p.read_text();after=before
 for x,y in pairs:
  if after.count(x)!=1:raise RuntimeError('unique literal guard failed '+str(p))
  after=after.replace(x,y,1)
 for sub,text in [('before',before),('proposed',after)]:
  out=base/sub/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(text)
 diff=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+str(p),tofile='b/'+str(p)))
 out=base/(p.name+'.diff');out.write_text(diff)
 edits.append({'path':str(p),'before_file':str(base/'before'/p),'proposed_file':str(base/'proposed'/p),'diff_file':str(out),'guard':'Require byte identity with before_file before install; unique literal replacement only. Root owns hashes, installation and native validation.','replacements':[{'source_excerpt':x,'proposed_replacement':y} for x,y in pairs]})
(base/'guarded-successor.json').write_text(json.dumps({'research_only':True,'applied':False,'review_cycle':1,'edits':edits},indent=2)+'\n')
