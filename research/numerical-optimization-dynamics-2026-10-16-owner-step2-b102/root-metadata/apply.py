#!/usr/bin/env python3
import pathlib,json,sys,shutil,datetime
base=pathlib.Path(__file__).resolve().parent
root=base.parent.parent.parent
p=json.loads((base/'projection.json').read_text())
for f,t in p['source_guards'].items():
 if (root/f).read_text()!=t:raise SystemExit('Source changed: '+f)
docs={};pending=[]
for o in p['operations']:
 d=docs.setdefault(o['file'],json.loads((root/o['file']).read_text()));v=d
 for k in o['path'][:-1]:v=v[k]
 if v[o['path'][-1]]==o['after']:continue
 if v[o['path'][-1]]!=o['before']:raise SystemExit('Target field changed '+o['file'])
 pending.append(o)
print(json.dumps({'pending_fields':len(pending),'files':list(docs),'mode':'preview unless --apply'},indent=2))
if '--apply' not in sys.argv:raise SystemExit(0)
arc=base/('applied-before-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));arc.mkdir()
for f in set(o['file'] for o in pending):
 q=arc/f;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(root/f,q)
for o in pending:
 v=docs[o['file']]
 for k in o['path'][:-1]:v=v[k]
 v[o['path'][-1]]=o['after']
for f in set(o['file'] for o in pending):(root/f).write_text(json.dumps(docs[f],indent=2,ensure_ascii=False)+'\n')
(base/'completion.json').write_text(json.dumps({'fields':pending,'archive':str(arc)},indent=2)+'\n')
