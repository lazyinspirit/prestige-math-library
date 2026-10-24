#!/usr/bin/env python3
"""PREPARED ONLY. Root runs AFTER actual combined25 application. No native gates/receipts."""
import argparse,concurrent.futures,datetime,hashlib,json,os,pathlib,re,signal,subprocess,sys
RUN='advanced-qft-supersymmetry-build-2026-10-23';ROOT=pathlib.Path.cwd();PREP=ROOT/'research'/(RUN+'-owner-resolution/private-preparation');HERE=pathlib.Path(__file__).resolve().parent
ap=argparse.ArgumentParser();ap.add_argument('--proposal',default=str(PREP/'root-combined25-proposal-v1/manifest.json'));ap.add_argument('--manifest-sha256',required=True);ap.add_argument('--application',default=str(PREP/'root-combined25-application-v1/root-decision.json'));ap.add_argument('--out',default=str(PREP/'root-combined25-current-checks-v1'));ap.add_argument('--contract-workers',type=int,default=4);A=ap.parse_args()
OUT=pathlib.Path(A.out).resolve();assert OUT.is_relative_to(PREP.resolve()),'Private preparation output only';assert not OUT.exists(),'Preserve earlier checks: output directory must be absent';assert 1<=A.contract_workers<=4;OUT.mkdir();now=lambda:datetime.datetime.now(datetime.timezone.utc).isoformat();sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();j=lambda p:json.loads(pathlib.Path(p).read_text());rel=lambda p:os.path.relpath(pathlib.Path(p),ROOT);checks=[];input_guards={};input_changes=[];preflight_errors=[];counts={'sources':25,'manifests':69,'pages':138,'items':442,'render_files':580,'layout_sources':25};contract_results=[];scope={};proposal_hash=None;application_hash=None;started=now()
ENV={**os.environ,'PHYSICS_REPO':str(ROOT)}
def capture(name,command,timeout=650):
 so=OUT/(name+'.stdout');se=OUT/(name+'.stderr');start=now();status=None;failure=None
 with so.open('xb')as outf,se.open('xb')as errf:
  try:
   proc=subprocess.Popen(command,cwd=ROOT,env=ENV,stdout=outf,stderr=errf,start_new_session=True)
   try:status=proc.wait(timeout=timeout)
   except subprocess.TimeoutExpired:
    os.killpg(proc.pid,signal.SIGKILL);proc.wait();status=124;failure='timeout; child process group terminated'
  except Exception as error:status=127;failure=repr(error)
 return {'name':name,'command':command,'started_at':start,'ended_at':now(),'exit_code':status,'execution_error':failure,'stdout_path':rel(so),'stdout_sha256':sha(so),'stderr_path':rel(se),'stderr_sha256':sha(se),'scope_verified':False}
def parsed(check):return j(ROOT/check['stdout_path'])
def finish_check(check,verify):
 try:check['result_summary']=verify(check);check['scope_verified']=True
 except Exception as error:check['validation_error']=repr(error)
 check['passed']=check['exit_code']==0 and check['scope_verified'] and not check.get('validation_error');return check
def assert_true(cond,message):
 if not cond:raise AssertionError(message)
def excluded(p):
 s=str(p);return '.physics-autopilot/'in s or '.autopilot/'in s or re.search(r'/research/'+re.escape(RUN)+r'-step1-',str(pathlib.Path(p).resolve())) is not None
try:
 assert_true((ROOT/'SCHEMA.md').exists()and'## Physics extensions'in(ROOT/'SCHEMA.md').read_text()and(ROOT/'CLAUDE.md').exists(),'Run from physics workspace')
 proposal=j(A.proposal);proposal_hash=sha(A.proposal);assert_true(proposal_hash==A.manifest_sha256,'Explicit reviewed manifest digest differs');application=j(A.application);application_hash=sha(A.application);assert_true(application['manifest_sha256']==proposal_hash and application['run']==RUN and application['reviewer']=='/root','Actual Root application receipt is not bound to this proposal');actual_files={r['path']:r for r in application['files']};assert_true(len(actual_files)==len(application['files']),'Duplicate application postimage rows')
 source_paths=proposal['scope']['source_paths'];assert_true(len(source_paths)==25 and len(set(source_paths))==25,'Combined proposal must name exactly25 distinct source paths');assert_true(all(re.fullmatch(r'items/[a-z][a-z0-9-]*\.md',p)for p in source_paths),'Bad source subject path')
 files=proposal['files'];assert_true(isinstance(files,list)and len(files)==37,'Expected37 combined postimages');assert_true(set(actual_files)=={r['path']for r in files},'Actual application postimage set mismatch');seen=set()
 for row in files:
  assert_true(row['path']not in seen,'Duplicate combined target');seen.add(row['path']);expected=row.get('candidate_sha256')or row.get('after_sha256')or row.get('proposed_sha256');assert_true(bool(re.fullmatch('[a-f0-9]{64}',expected or '')),'Missing exact candidate digest');actual_expected=actual_files[row['path']]['after_sha256'];assert_true(sha(ROOT/row['path'])==actual_expected,'Actual receipt postimage not installed: '+row['path'])
  if row.get('kind')=='notes-append':
   recipe=proposal['notes_templates'][row['path']];candidate=(ROOT/row['candidate_path']).read_bytes();suffix=recipe['append_template'].encode();assert_true(candidate.endswith(suffix),'Notes template suffix mismatch');prefix=candidate[:-len(suffix)];assert_true(hashlib.sha256(prefix).hexdigest()==row['before_sha256']==recipe['before_sha256'],'Historical notes prefix differs');substituted=prefix+suffix.replace(b'{{ROOT_APPLICATION_TIMESTAMP}}',application['startedAt'].encode()).replace(b'{{ROOT_APPLICATION_RECEIPT}}',proposal['application_receipt_path'].encode());assert_true((ROOT/row['path']).read_bytes()==substituted,'Notes differ beyond actualtimestamp/receipt substitution')
  else:assert_true(actual_expected==expected,'Non-notes actual digest differs from reviewed candidate')
 assert_true(set(source_paths)=={p for p in seen if p.startswith('items/')},'25source paths must equal actual source postimages')
 manifests=[f'research/{RUN}-batch-{b}.pages.json'for b in range(1,70)];pages=[];batch_ids={}
 for b,p in enumerate(manifests,1):
  doc=j(ROOT/p);assert_true(isinstance(doc,list)and len(doc)==2,'Expected one actual A/B pair in '+p);pages+=doc;ids=[i['id']for page in doc for i in page['items']];assert_true(ids and len(set(ids))==len(ids),'Empty/duplicate batch subject selection');batch_ids[b]=ids
 ids=[i for b in batch_ids.values()for i in b];assert_true(len(pages)==138 and len(ids)==442 and len(set(ids))==442 and len({p['id']for p in pages})==138,'Wrong actual69/138/442 manifest frontier')
 item_paths=['items/'+id+'.md'for id in ids];page_paths=[f"library/{p['category']}/{p['id']}.md"for p in pages];assert_true(len(set(item_paths+page_paths))==580,'Wrong/duplicate580 render selection');assert_true(set(source_paths)<=set(item_paths),'Combined sources outside current442')
 scope={'source_paths':source_paths,'manifest_paths':manifests,'item_paths':item_paths,'page_paths':page_paths,'item_ids':ids,'batch_ids':batch_ids}
 # Reuse Root74's loader/context guard universe, taking NEW actual hashes. No old result is reused as a pass.
 seed=j(PREP/'owned-policy-render-after-root74-v2.json');paths={str((ROOT/p).resolve())for p in seed['guards']if not excluded(ROOT/p)};paths.update(str(p.resolve())for p in(ROOT/'items').glob('*.md'));context_item_inventory=sorted(str(p.resolve())for p in(ROOT/'items').glob('*.md'))
 paths.update(str((ROOT/p).resolve())for p in item_paths+page_paths+manifests+['research/plan-spec.json','research/math-imports.json','SCHEMA.md','CLAUDE.md','WORKFLOW.md'])
 for b in range(1,70):
  for suffix in ['proof-contracts.json','coverage.json','notes.md','cross-batch-dependencies.json']:
   p=ROOT/f'research/{RUN}-batch-{b}.{suffix}'
   if p.exists():paths.add(str(p.resolve()))
 for p in [pathlib.Path(A.proposal),pathlib.Path(A.application),pathlib.Path(application['approval_path']),HERE/'check-after-application.py',HERE/'metadata-diagnostic.mts',HERE/'source-schema.mjs',HERE/'runtime-context.mjs',PREP/'review-authored-step1-owner-request-v5.mts',PREP/'root-experiment-mirror-rebinding-v2/prepared-mappings-v2.json']:
  paths.add(str(p.resolve()))
 # Every ACTUAL production postimage is guarded during checks, including hyphenated notes.
 for target in actual_files:paths.add(str((ROOT/target).resolve()))
 approval=j(ROOT/application['approval_path']);assert_true(sha(ROOT/application['approval_path'])==application['approval_sha256'],'Actual approval digest differs');assert_true(len(approval['scientific_decisions'])==2,'Expected exact two Root scientific decisions')
 for decision in approval['scientific_decisions']:
  assert_true(sha(ROOT/decision['path'])==decision['sha256'],'Changed Root scientific decision');paths.add(str((ROOT/decision['path']).resolve()))
 for row in files:
  p=row.get('candidate_path')or row.get('proposed_path')
  if p:paths.add(str((ROOT/p).resolve()))
 context=capture('runtime-context',['node',str(HERE/'runtime-context.mjs')]);assert_true(context['exit_code']==0,'Actual SSR dependency API failed');runtime=parsed(context)
 for p,h in runtime['dependencies'].items():
  real=(ROOT.parent/p).resolve();assert_true(sha(real)==h,'SSR code changed during fingerprint');paths.add(str(real))
 # Static local import closure captures checker code. Bare package/runtime identities are additionally bound by actual proofLayoutDependencies.
 entries=['tools/physics-support/content-policy.mjs','tools/physics-support/rendercheck.mjs','tools/physics-support/proof-contract.mjs','tools/physics-support/statement-first-check.mjs','tools/physics-support/proof-layout.mjs','tools/physics-support/tsx-run.mjs'];pending=[(ROOT/p).resolve()for p in entries]+[HERE/'metadata-diagnostic.mts',HERE/'source-schema.mjs'];visited=set()
 while pending:
  p=pathlib.Path(pending.pop()).resolve()
  if p in visited or not p.is_file():continue
  visited.add(p);paths.add(str(p))
  if p.suffix in('.mjs','.js','.mts','.ts','.tsx'):
   for target in re.findall(r'''(?:from\s*|import\s*)['"]([^'"]+)['"]''',p.read_text()):
    if target.startswith('.'):pending.append((p.parent/target).resolve())
    elif target.startswith('/'):pending.append(pathlib.Path(target))
 input_guards={rel(p):sha(p)for p in sorted(paths)if not excluded(p)};assert_true(not any(excluded(ROOT/p)for p in input_guards),'Mutable readiness/state entered content guards');(OUT/'guards-before.json').write_text(json.dumps(input_guards,indent=2)+'\n');(OUT/'scope.json').write_text(json.dumps(scope,indent=2)+'\n')
 def policy_check(c):
  d=parsed(c);assert_true(d['summary']['scope']==442 and len(d['scope'])==442 and set(d['scope'])==set(ids),'Policy selected wrong/empty subjects');return {'selected':442,'errors':d['summary']['errors'],'warnings':d['summary']['warnings']}
 def render_check(c):
  d=parsed(c);assert_true(d['checked']==580,'Render selection not580');return {'selected':580,'errors':len(d['errors']),'warnings':len(d.get('warnings',[]))}
 checks.append(finish_check(capture('source-policy',['node','tools/physics-support/content-policy.mjs',*manifests,'--json']),policy_check))
 checks.append(finish_check(capture('render',['node','tools/physics-support/rendercheck.mjs',*item_paths,*page_paths,'--json']),render_check))
 metadata_out=OUT/'metadata-v5.json'
 def metadata_check(c):
  d=j(metadata_out);assert_true(d['scope']['items']==442 and d['scope']['manifests']==69 and d['scope']['pages']==138,'Metadata V5 selection mismatch');assert_true(len(d['rows'])==442,'Metadata V5 omitted current rows');c['data_path']=rel(metadata_out);c['data_sha256']=sha(metadata_out);return {'selected':442,'errors':d['summary']['errors'],'graph_errors':len(d['graph_errors'])}
 checks.append(finish_check(capture('metadata-v5',['node','tools/physics-support/tsx-run.mjs',str(HERE/'metadata-diagnostic.mts'),'--out',str(metadata_out)]),metadata_check))
 def schema_check(c):
  d=parsed(c);assert_true(d['checked']==442 and d['pages']==138 and len(d['scope'])==442 and set(d['scope'])==set(ids),'Schema scope mismatch');return {'selected':442,'errors':d['error_count']}
 checks.append(finish_check(capture('source-schema',['node',str(HERE/'source-schema.mjs')]),schema_check))
 def statement_check(c):
  text=(ROOT/c['stdout_path']).read_text();m=re.search(r'statement-first: (\d+) item\(s\) checked; (\d+) defect\(s\)',text);assert_true(m is not None and int(m[1])==442,'Statement check wrong/empty scope');return {'selected':int(m[1]),'errors':int(m[2])}
 checks.append(finish_check(capture('statement',['node','tools/physics-support/statement-first-check.mjs','--run',RUN,'--domain','physics']),statement_check))
 def layout_check(c):
  text=(ROOT/c['stdout_path']).read_text();m=re.search(r'proof-layout: (\d+) items, (\d+) steps, (\d+) defects',text);assert_true(m is not None and int(m[1])==25,'Layout wrong/empty scope');return {'selected':int(m[1]),'steps':int(m[2]),'errors':int(m[3])}
 checks.append(finish_check(capture('layout',['node','tools/physics-support/proof-layout.mjs',*source_paths]),layout_check))
 def contract(b):
  expected=batch_ids[b];c=capture('contract-batch-'+str(b),['node','tools/physics-support/proof-contract.mjs',f'research/{RUN}-batch-{b}.proof-contracts.json','--strict','--items',','.join(expected),'--json'])
  def verify(c):
   d=parsed(c);assert_true(len(d['scope'])==len(expected)and set(d['scope'])==set(expected),'Strict selected different/empty subjects');assert_true(len(d['checked'])==len(expected)and set(d['checked'])==set(expected),'Strict omitted actual selected subjects');assert_true(d['ok']and not d['errors'],'Strict proof contract reported errors');return {'batch':b,'selected':len(expected),'checked':len(d['checked']),'errors':len(d['errors']),'warnings':len(d.get('warnings',[]))}
  c=finish_check(c,verify);c['batch']=b;c['selected_ids']=expected;return c
 with concurrent.futures.ThreadPoolExecutor(max_workers=A.contract_workers)as pool:contract_results=list(pool.map(contract,range(1,70)))
 checks+=contract_results
 for p,h in input_guards.items():
  try:
   actual=sha(ROOT/p)
   if actual!=h:input_changes.append({'path':p,'before':h,'after':actual})
  except Exception as e:input_changes.append({'path':p,'error':repr(e)})
 after_inventory=sorted(str(p.resolve())for p in(ROOT/'items').glob('*.md'))
 if after_inventory!=context_item_inventory:input_changes.append({'kind':'context-item-inventory-change','before_count':len(context_item_inventory),'after_count':len(after_inventory)})
except Exception as error:preflight_errors.append(repr(error))
finally:
 byname={c['name']:c for c in checks};error_count=lambda name:byname.get(name,{}).get('result_summary',{}).get('errors');failures=[{'batch':c['batch'],'exit_code':c['exit_code'],'validation_error':c.get('validation_error'),'execution_error':c.get('execution_error')}for c in contract_results if not c['passed']];selected=sum(len(c['selected_ids'])for c in contract_results);passed=not preflight_errors and not input_changes and len(checks)==75 and len(contract_results)==69 and selected==442 and all(c['passed']for c in checks)and all(error_count(n)==0 for n in['source-policy','render','metadata-v5','source-schema','statement','layout']);summary={'kind':'PRIVATE actual postapplication checks; NOT native gate, owner receipt, attestation, scientific acceptance or source-authority adoption','run':RUN,'started_at':started,'ended_at':now(),'proposal_path':rel(A.proposal),'proposal_sha256':proposal_hash,'application_path':rel(A.application),'application_sha256':application_hash,'postimages':{r['path']:r['after_sha256']for r in locals().get('application',{}).get('files',[])},'runtime_context':locals().get('context'),'counts':counts,'items':442,'pages':138,'manifests':69,'source_count':25,'render_files':580,'checks':checks,'policy_errors':error_count('source-policy'),'render_errors':error_count('render'),'metadata_errors':error_count('metadata-v5'),'source_schema_errors':error_count('source-schema'),'statement_errors':error_count('statement'),'input_guards':input_guards,'input_guard_count':len(input_guards),'input_changes':input_changes,'preflight_errors':preflight_errors,'contract_selected':selected,'contract_batches':len(contract_results),'contract_failures':failures,'layout_exit':byname.get('layout',{}).get('exit_code'),'passed':passed,'native_gate':False,'owner_receipt_written':False,'production_written':False,'guard_scope_note':'Current scoped69manifests/442items/138pages/contracts/coverage/notes plus actual loader scientific source/alias context and actual checker/SSR code. Mutable native state and Step1 readiness rows excluded. Context is not validator subject scope.','science_boundary':'Combined proposal separately attributes genuine cochain-index and chainlift Hom/LES proof repairs. Checker does not relabel them formatting or certify independent scientific acceptance.'};(OUT/'summary.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps({'summary':rel(OUT/'summary.json'),'passed':passed,'checks':len(checks),'contract_batches':len(contract_results),'contract_selected':selected,'input_changes':len(input_changes),'preflight_errors':preflight_errors}));sys.exit(0 if passed else 1)
