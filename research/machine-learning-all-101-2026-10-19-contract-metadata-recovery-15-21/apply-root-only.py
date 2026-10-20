#!/usr/bin/env python3
"""Root-owned integration of exactly two reviewed contract metadata proposals."""
import argparse, datetime, hashlib, json, os, pathlib, tempfile
parser=argparse.ArgumentParser()
parser.add_argument('--apply',action='store_true',help='Root only: apply the two guarded proposals')
parser.add_argument('--check',action='store_true',help='Read-only guard validation (default)')
args=parser.parse_args()
root=pathlib.Path(__file__).resolve().parents[2]
base=pathlib.Path(__file__).resolve().parent
packet=json.loads((base/'packet.json').read_text())
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def path(p):
    v=root/p
    if v.is_symlink() or not v.resolve().is_relative_to(root):raise SystemExit('Unsafe path: '+p)
    return v
for row in packet['bindings']:
    p=path(row['path'])
    if not p.is_file() or sha(p)!=row['sha256']:raise SystemExit('Stale input: '+row['path'])
for row in packet['proposals']:
    p=path(row['target']);q=path(row['proposed']['path'])
    if sha(q)!=row['proposed']['sha256']:raise SystemExit('Stale proposal: '+str(q))
    if row['must_be_absent']:
        if p.exists():raise SystemExit('Create target already exists: '+str(p))
    elif not p.is_file() or sha(p)!=row['expected_target_sha256']:raise SystemExit('Stale target: '+str(p))
state=json.loads(path('.autopilot/'+packet['run']+'/state.json').read_text())
if state['stage']!='1-scaffold':raise SystemExit('Expected actual native Step-1 owner hold')
if any(d.get('startedAt') and not d.get('endedAt') for d in state['dispatches'].values()):raise SystemExit('Native writers have not drained')
if not args.apply:
    print(json.dumps({'checked':True,'proposals':len(packet['proposals']),'bindings':len(packet['bindings']),'applied':False}))
    raise SystemExit(0)
receipt=base/'root-application.json'
if receipt.exists():raise SystemExit('Application receipt already exists; inspect current history')
changes=[]
for row in packet['proposals']:
    target=path(row['target']);data=path(row['proposed']['path']).read_bytes()
    if row['must_be_absent']:
        with target.open('xb') as handle:handle.write(data)
    else:
        if sha(target)!=row['expected_target_sha256']:raise SystemExit('Target changed during integration: '+str(target))
        fd,tmp=tempfile.mkstemp(prefix=target.name+'.owner-',dir=target.parent)
        try:
            with os.fdopen(fd,'wb') as handle:handle.write(data)
            os.chmod(tmp,target.stat().st_mode & 0o777)
            os.replace(tmp,target)
        finally:
            if os.path.exists(tmp):os.unlink(tmp)
    if sha(target)!=row['proposed']['sha256']:raise SystemExit('Integrated bytes differ: '+str(target))
    changes.append({'path':row['target'],'before_sha256':row['expected_target_sha256'],'sha256':sha(target)})
receipt.write_text(json.dumps({'run':packet['run'],'kind':'root-applied-contract-metadata-recovery','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'packet_sha256':sha(base/'packet.json'),'changes':changes,'mathematical_acceptance':False,'native_independent_review_credit':False,'recertification_or_gate_credit':False},indent=2)+'\n')
print(json.dumps({'applied':True,'receipt':str(receipt.relative_to(root)),'changes':changes}))
