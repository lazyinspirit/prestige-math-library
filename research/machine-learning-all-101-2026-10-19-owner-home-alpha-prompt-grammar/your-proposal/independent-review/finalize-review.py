from pathlib import Path
import hashlib,json
p=Path(__file__).resolve().parent.parent;h=lambda b:hashlib.sha256(b).hexdigest()
i=json.loads((p/'candidate-inventory.json').read_text())
for r in i['files']:
 assert h(Path(r['candidate']).read_bytes())==r['candidate_sha256']
 assert h(Path(r['path']).read_bytes())==r['before_sha256']
 assert h((p/'before'/r['path']).read_bytes())==r['before_sha256']
for r in json.loads((p/'actual-source-evidence.json').read_text())['native_refs']:assert h(Path(r['path']).read_bytes())==r['sha256']
before=(p/'before/tools/step3-owner-home-alpha-continuations.mjs').read_text();after=(p/'tools/step3-owner-home-alpha-continuations.mjs').read_text()
assert before.split(' const text=prompt.toString(),identity=')[0]==after.split(' const text=prompt.toString();')[0]
assert before.split('export function homeAlphaClosureEvidence',1)[1]==after.split('export function homeAlphaClosureEvidence',1)[1]
actual=json.loads((p/'independent-review/actual30-result.json').read_text())
assert actual['candidate_sha256']=={r['path']:r['candidate_sha256'] for r in i['files']}
assert '# pass 47\n# fail 0\n' in (p/'independent-review/focused.tap').read_text()
report={
 'version':1,'run':'machine-learning-all-101-2026-10-19','reviewer':'/root/step2_dissimilarity30','status':'accepted-for-root-integration','live_edits':False,'native_dispatch_or_gate_run':False,
 'candidate_inventory_sha256':h((p/'candidate-inventory.json').read_bytes()),'implementation_diff_sha256':h((p/'implementation.diff').read_bytes()),'candidate_sha256':{r['path']:r['candidate_sha256'] for r in i['files']},
 'current_live_matches_archived_before':True,'actual_native_source_refs_current':True,'unchanged_helper_prefix_including_native_attempt_success_guards':True,'unchanged_closure_and_required_obligations_suffix':True,
 'reviewed':'Full changed helper and wrapper, complete changed test/doc diff, entire actual161-line native30 prompt, actual result equality and native gate decisions, Dispatcher prompt assembly, Executor fallback resolver, original planner and source/authority/one-shot guards.',
 'findings_resolved':[{'finding':'Dispatch-header substring admitted a spoofed unanchored heading','resolution':'Final candidate requires a unique line-anchored exact resolved block; focused negative passes.'},{'finding':'Assembled sink could follow an existing/dangling symlink','resolution':'Final candidate lstat-checks parent lineage and target regularity; both sink-negative fixtures pass.'}],
 'remaining_findings':[],
 'independent_tests':[
 {'command':'node tools/tsx-run.mjs --test '+str(p.relative_to(Path.cwd())/'tools/autopilot/test/home-alpha-continuations.test.mts'),'observed_pass':36,'observed_fail':0,'note':'Independently run focused durable regressions; final hashes match tested code.'},
 {'command':'node tools/tsx-run.mjs --test '+str(p.relative_to(Path.cwd())/'independent-review/extra-focused.test.mts'),'observed_pass':47,'observed_fail':0,'output':'independent-review/focused.tap','note':'36 original tests plus11 reviewer additions:9 strict fresh-result negatives, actual native planner no task writes on stale source, unchanged sibling fallback array.'},
 {'command':'node '+str(p.relative_to(Path.cwd())/'independent-review/check-actual30.mjs'),'result':'pass','output':'independent-review/actual30-result.json','note':'Exact candidate helper in disposable directory accepts actual30 identity/closure read-only, with stable==attempt1 and13 authenticated closure refs. Legacy appended task/order delivery is not claimed.'}],
 'preservation':['Executor.resolveInput is unchanged and retains first-existing fallback semantics, tested through its real method.','Future wrapper returns a scalar task containing every normal task/order and registered task source, after every selected beforeDispatch guard.','Any completed fresh result/attempt still consumes the one shot; successful closure still requires exact stable==attempt1 and all existing success/session/terminal/time/prompt-path guards.','Ordinary role/brief/covers/model/gates/artifacts, scheduling and unselected sibling task arrays remain unchanged.','Native prompt/result/report/decisions/registry were not edited and completed30 was not redispatched.'],
 'limit':'Focused independent code review of four exact frozen targets, not mathematical acceptance, native coverage, gate clearance or permission to rerun completed30.'}
report['native_current_output_refs']=[{'path':f,'sha256':h(Path(f).read_bytes())} for f in ['research/machine-learning-all-101-2026-10-19-alpha-batch-30-3a.md','research/machine-learning-all-101-2026-10-19-alpha-batch-30-3a-decisions.json']]
(p/'independent-review/final-review.json').write_text(json.dumps(report,indent=2)+'\n')
print('Independent final review SHA256:',h((p/'independent-review/final-review.json').read_bytes()))
print('Frozen inventory SHA256:',report['candidate_inventory_sha256'])
