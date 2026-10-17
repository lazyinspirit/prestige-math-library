#!/usr/bin/env python3
"""Root-owned guarded metadata projection; default prints proposal, --apply writes."""
import json,pathlib,sys,datetime,shutil
base=pathlib.Path(__file__).resolve().parent
root=base.parent.parent
p=json.loads((base/'projection.json').read_text())
for name,expected in p['source_guards'].items():
 if (root/name).read_text()!=expected:raise SystemExit('Source changed since proposal: '+name)
files={}; pending=[]
for op in p['operations']:
 name=op['file']; doc=files.setdefault(name,json.loads((root/name).read_text()));v=doc
 for k in op['path'][:-1]:v=v[k]
 k=op['path'][-1]
 if v[k]==op['after']:continue
 if v[k]!=op['before']:raise SystemExit('Target field changed since proposal: '+name+' '+str(op['path']))
 pending.append(op)
print(json.dumps({'pending_fields':len(pending),'target_files':sorted({o['file'] for o in pending}),'crossledger':'proposal only; not applied','53':'L1 supplier quotes unchanged; no edit'},indent=2))
if '--apply' not in sys.argv:raise SystemExit(0)
arc=base/('applied-before-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));arc.mkdir()
for name in sorted({o['file'] for o in pending}):
 q=arc/name;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/name,q)
for op in pending:
 v=files[op['file']]
 for k in op['path'][:-1]:v=v[k]
 v[op['path'][-1]]=op['after']
for name in sorted({o['file'] for o in pending}):(root/name).write_text(json.dumps(files[name],indent=2,ensure_ascii=False)+'\n')
(base/'completion.json').write_text(json.dumps({'run':p['run'],'archive':str(arc),'applied_fields':pending,'canonical_files':sorted({o['file'] for o in pending}),'crossledger_applied':False,'53_contract_changed':False},indent=2)+'\n')
