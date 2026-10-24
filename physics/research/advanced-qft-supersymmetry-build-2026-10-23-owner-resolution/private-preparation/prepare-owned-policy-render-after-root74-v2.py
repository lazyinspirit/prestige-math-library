from pathlib import Path
import json,subprocess,hashlib,datetime,re
root=Path.cwd();r='advanced-qft-supersymmetry-build-2026-10-23';prep=root/'research'/(r+'-owner-resolution/private-preparation');prior=json.loads((prep/'owned-policy-render-after-root74-v1.json').read_text());out=prep/'owned-policy-render-after-root74-v2.json';assert not out.exists();sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest();paths=set(prior['inputs']);paths.update(str(p.relative_to(root))for p in (root/'items').glob('*.md'));paths.update(['research/plan-spec.json','research/math-imports.json']);pending=[root/'tools/physics-support/content-policy.mjs',root/'tools/physics-support/rendercheck.mjs'];seen=set()
while pending:
 p=pending.pop().resolve()
 if p in seen or not p.exists():continue
 seen.add(p);paths.add(str(p))
 if p.suffix in ('.mjs','.js','.mts','.ts'):
  for rel in re.findall(r'''(?:from\s*|import\s*)['"](\.[^'"]+)['"]''',p.read_text()):pending.append((p.parent/rel).resolve())
guards={f:sha(root/f)for f in sorted(paths)};results=[]
for old in prior['results']:
 command=old['command'];name=old['name'];stdout=prep/(name+'-after-root74-v2.stdout.json');stderr=prep/(name+'-after-root74-v2.stderr.txt');assert not stdout.exists();assert not stderr.exists();start=datetime.datetime.now(datetime.timezone.utc).isoformat()
 with stdout.open('xb')as so,stderr.open('xb')as se:proc=subprocess.run(command,cwd=root,stdout=so,stderr=se,timeout=600)
 end=datetime.datetime.now(datetime.timezone.utc).isoformat();data=json.loads(stdout.read_text());scope_error=None
 if name=='actual-owned-source-policy':
  expected={Path(f).stem for f in prior['scope']['files']if f.startswith('items/')};assert data['summary']['scope']==442;assert len(data['scope'])==442;assert set(data['scope'])==expected
 else:assert data['checked']==580
 results.append({'name':name,'command':command,'startedAt':start,'endedAt':end,'exit_code':proc.returncode,'stdout_path':str(stdout.relative_to(root)),'stdout_sha256':sha(stdout),'stderr_path':str(stderr.relative_to(root)),'stderr_sha256':sha(stderr),'summary':data.get('summary',{'checked':data.get('checked'),'errors':len(data.get('errors',[])),'warnings':len(data.get('warnings',[]))}),'errors':data.get('errors',[]),'warnings':data.get('warnings',[])})
races=[f for f,h in guards.items()if sha(root/f)!=h];report={'kind':'PRIVATE actual owned policy/render preparation with complete regular-file output; NOT native gate/receipt/acceptance','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':prior['scope'],'guards':guards,'guard_scope_note':'Exact owned selection plus all items actually read as policy dependency/alias context, import-index/plan, and static local checker module import closure. Unowned items are prerequisite context only, not validator subjects.','results':results,'inputs_rechecked_unchanged':not races,'races':races,'production_written':False,'source_permission_currency_asserted':False,'post_request_review':False,'native_gate':False,'receipt_written':False};out.write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({'output':str(out.relative_to(root)),'results':[{k:x[k]for k in ['name','exit_code','summary']}for x in results],'races':races,'guard_count':len(guards)}))
