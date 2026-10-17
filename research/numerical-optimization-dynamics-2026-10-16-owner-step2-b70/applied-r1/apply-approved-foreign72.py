from pathlib import Path
import json,hashlib,subprocess,shlex,re,datetime
B=Path(__file__).resolve().parent;P=B.parent/'foreign72-rebase-proposal-r1';r=json.loads((P/'proposal.json').read_text());p=Path(r['path']);state=json.loads(Path('.autopilot/numerical-optimization-dynamics-2026-10-16/state.json').read_text());dispatch=state['dispatches']['2-scope-review:scope-repair-72-1'];assert dispatch['endedAt'] and dispatch['lastExitOk']
active=[]
for line in subprocess.check_output(['ps','-eo','pid,args'],text=True).splitlines():
 if 'node tools/dispatch.mjs --role scope-repairer ' not in line:continue
 a=shlex.split(line.strip());args=a[1:]
 try:t=Path(args[args.index('--task')+1])
 except (ValueError,IndexError):continue
 text=t.read_text();m=re.search(r'Authorized source files:\s*(\[.*?\])\.',text)
 if m:assert str(p) not in json.loads(m[1]),'NEW ACTIVE WRITER '+str(t)
 elif 'No canonical application' in text or 'Do not apply source, metadata' in text:pass
 elif 'Your canonical source write allowlist is EXACTLY items/alg-safeguarded-levenberg-marquardt.md.' in text:assert str(p)!='items/alg-safeguarded-levenberg-marquardt.md'
 else:raise RuntimeError('UNCLASSIFIED WRITER '+str(t))
 active.append({'pid':a[0],'task':str(t)})
assert hashlib.sha256(p.read_bytes()).hexdigest()==r['before_sha256'],'REBASE GUARD DRIFT'
q=B/'foreign72-before'/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(p.read_bytes());new=(P/'proposed'/p).read_bytes();assert hashlib.sha256(new).hexdigest()==r['proposed_sha256'];p.write_bytes(new)
row={'path':str(p),'status':'applied','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native72_drained':dispatch,'active_native_source_dispatches_checked':active,'before_sha256':r['before_sha256'],'approved_proposed_sha256':r['proposed_sha256'],'full_before':str(q),'root_authority':'Exact rebased6-line input paragraph approved, preserving native72 dependency/F4 changes.'};(B/'foreign72-application.json').write_text(json.dumps(row,indent=2)+'\n');app=json.loads((B/'source-application.json').read_text());app['rows']=[row if x['path']==str(p) else x for x in app['rows']];(B/'source-application.json').write_text(json.dumps(app,indent=2)+'\n');print('Native72 drained; current exact rebase guard matched; final foreign example applied.')
