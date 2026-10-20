#!/usr/bin/env python3
"""Field/span CAS only. Default is read-only; root authorization is explicit."""
import argparse, pathlib, json, hashlib, os, datetime
p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');p.add_argument('--owner');p.add_argument('--plan-sha256');a=p.parse_args()
root=pathlib.Path.cwd();base=pathlib.Path(__file__).resolve().parent; planpath=base/'operations.json';raw=planpath.read_bytes();sha=lambda b:hashlib.sha256(b).hexdigest();plan=json.loads(raw)
if a.plan_sha256 and a.plan_sha256!=sha(raw):raise SystemExit('plan hash mismatch')
if a.apply and (a.owner!='/root' or not a.plan_sha256):raise SystemExit('apply requires --owner /root --plan-sha256 HASH')
for ref in plan['source_guards']+plan['evidence_guards']:
 if sha((root/ref['path']).read_bytes())!=ref['sha256']:raise SystemExit('stale guard: '+ref['path'])
prepared={};before={}
for op in plan['operations']:
 path=root/op['path']; original=before.setdefault(path,path.read_bytes());work=prepared.get(path,original);b=op['before_literal'].encode();after=op['after_literal'].encode()
 if sha(b)!=op['before_literal_sha256'] or work.count(b)!=1:raise SystemExit('CAS mismatch '+op['path']+' '+str(op['selector']))
 if json.loads(b)!=op['before'] or json.loads(after)!=op['after']:raise SystemExit('invalid object operation')
 prepared[path]=work.replace(b,after,1)
for path,content in prepared.items():
 if path.name.endswith('.jsonl'):
  for line in content.splitlines():
   if line.strip():json.loads(line)
 else:json.loads(content)
# Final current byte guards across preparation; changes outside these spans remain preserved.
for path,b in before.items():
 if path.read_bytes()!=b:raise SystemExit('concurrent write: '+str(path))
report={'plan_sha256':sha(raw),'operations':len(plan['operations']),'files':[{'path':str(path.relative_to(root)),'before_sha256':sha(before[path]),'after_sha256':sha(content)} for path,content in prepared.items()],'mode':'apply' if a.apply else 'read-only-check','native_acceptance_claimed':False,'native_gates_run':False}
if a.apply:
 archive=base/('root-application-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%SZ'));archive.mkdir()
 for path,b in before.items():
  dst=archive/'before'/path.relative_to(root);dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(b)
 # Each write atomic; all guards verified before first mutation. No state, observations or gates touched.
 for path,content in prepared.items():
  temp=path.with_name(path.name+'.owner-resolution-tmp');temp.write_bytes(content);os.replace(temp,path)
 (archive/'application.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))
