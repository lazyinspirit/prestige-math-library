#!/usr/bin/env python3
"""Root-only guarded transaction for the eight staged ledger-input files.

No source/readiness writes, collection, certification, review or gates.
Each replacement is atomic. All bytes are staged before the drained-owner
transaction; a detected failure rolls back this transaction's own writes.
"""
import argparse, datetime, hashlib, json, os, pathlib, re, stat, tempfile
parser=argparse.ArgumentParser()
parser.add_argument('--apply',action='store_true',help='Root only: integrate the eight guarded metadata files')
parser.add_argument('--check',action='store_true',help='Read-only guard check (default)')
args=parser.parse_args()
base=pathlib.Path(__file__).resolve().parent
root=base.parents[1]
report_path=base/'report.json'
report_raw=report_path.read_bytes()
report=json.loads(report_raw)
run=report['run']
def digest(b):return hashlib.sha256(b).hexdigest()
def path(name):
    p=root/name
    if p.is_symlink() or not p.resolve().is_relative_to(root):raise RuntimeError('Unsafe path: '+name)
    return p
changes=[row for row in report['files'] if row['changed']]
if len(changes)!=8:raise RuntimeError('Expected exactly eight changed input files')
allowed={f'research/{run}-batch-{b}.cross-batch-dependencies.json' for b in [3,7,8,9,15,18,23,33]}
if {row['target'] for row in changes}!=allowed:raise RuntimeError('Unexpected target set')
def guards():
    if report_path.read_bytes()!=report_raw:raise RuntimeError('Report changed during application')
    for row in report['bindings']:
        p=path(row['path'])
        if not p.is_file() or digest(p.read_bytes())!=row['sha256']:raise RuntimeError('Stale input: '+row['path'])
    for row in report['files']:
        p=path(row['target'])
        if row['expected_absent']:
            if p.exists():raise RuntimeError('Expected absent target: '+row['target'])
        elif not p.is_file() or digest(p.read_bytes())!=row['expected_sha256']:raise RuntimeError('Stale target: '+row['target'])
        for field in ['proposed','diff','before_archive']:
            bound=row[field]
            if bound and digest(path(bound['path']).read_bytes())!=bound['sha256']:raise RuntimeError('Stale staged '+field+': '+bound['path'])
    state=json.loads(path('.autopilot/'+run+'/state.json').read_bytes())
    if state['stage']!='1-scaffold':raise RuntimeError('Expected native Step-1 owner hold')
    if any(d.get('startedAt') and not d.get('endedAt') for d in state['dispatches'].values()):raise RuntimeError('Native writers have not drained')
guards()
if not args.apply:
    print(json.dumps({'checked':True,'applied':False,'bindings':len(report['bindings']),'changed_files':len(changes),'status_promotions':0}))
    raise SystemExit(0)
lock=base/'root-apply.lock'
receipt=base/'root-application.json'
if receipt.exists():raise RuntimeError('Application receipt exists; inspect history before any further work')
lockfd=os.open(lock,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600)
staged=[]
applied=[]
def atomic_restore(target,raw,mode):
    fd,name=tempfile.mkstemp(prefix=target.name+'.root-rollback-',dir=target.parent)
    try:
        with os.fdopen(fd,'wb') as handle:handle.write(raw);handle.flush();os.fsync(handle.fileno())
        os.chmod(name,mode)
        os.replace(name,target)
    finally:
        if os.path.exists(name):os.unlink(name)
try:
    guards()
    for row in changes:
        target=path(row['target'])
        raw=path(row['proposed']['path']).read_bytes()
        old=target.read_bytes() if target.exists() else None
        mode=stat.S_IMODE(target.stat().st_mode) if old is not None else 0o644
        fd,name=tempfile.mkstemp(prefix=target.name+'.root-stage-',dir=target.parent)
        with os.fdopen(fd,'wb') as handle:handle.write(raw);handle.flush();os.fsync(handle.fileno())
        os.chmod(name,mode)
        staged.append((row,target,name,old,mode))
    guards()
    for row,target,name,old,mode in staged:
        if old is None:
            os.link(name,target) # Atomic create; refuses a concurrent target.
            os.unlink(name)
        else:
            if target.read_bytes()!=old:raise RuntimeError('Concurrent target change: '+str(target))
            os.replace(name,target)
        applied.append((row,target,old,mode))
        if digest(target.read_bytes())!=row['proposed']['sha256']:raise RuntimeError('Integrated bytes differ: '+str(target))
    result={'run':run,'kind':'root-applied-cross-batch-metadata-normalization','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'report_sha256':digest(report_raw),'changes':[{'path':row['target'],'before_sha256':row['expected_sha256'],'sha256':row['proposed']['sha256']} for row in changes],'native_independent_review_credit':False,'mathematical_acceptance':False,'gate_or_readiness_credit':False,'status_promotions':0,'foreign_rows_merged':False}
    with receipt.open('x') as handle:handle.write(json.dumps(result,indent=2)+'\n')
    print(json.dumps({'applied':True,'changed_files':len(changes),'receipt':str(receipt.relative_to(root))}))
except BaseException:
    for row,target,old,mode in reversed(applied):
        if target.exists() and digest(target.read_bytes())==row['proposed']['sha256']:
            if old is None:target.unlink()
            else:atomic_restore(target,old,mode)
        else:raise RuntimeError('Concurrent post-write change blocks rollback: '+str(target))
    raise
finally:
    for row,target,name,old,mode in staged:
        if os.path.exists(name):os.unlink(name)
    os.close(lockfd)
    lock.unlink()
