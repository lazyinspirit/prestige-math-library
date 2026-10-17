#!/usr/bin/env python3
"""Root-only batch57 exact-source metadata mirror; preview by default."""
from pathlib import Path
from datetime import datetime,timezone
import json,sys,os,tempfile
D=Path(__file__).resolve().parent;ROOT=Path.cwd();cfg=json.loads((D/'config.json').read_text())
assert sys.argv[1:] in ([],['--preview'],['--apply-root-reviewed'])
def guard():
 for p in cfg['files']:
  assert (ROOT/p).read_bytes()==(D/'before'/Path(p).name).read_bytes(),'Metadata changed: '+p
 for p in cfg['source_guards']:
  assert (ROOT/p).read_bytes()==(D/'sources'/Path(p).name).read_bytes(),'Source changed: '+p
guard()
print(json.dumps({'mode':'root-reviewed-apply' if sys.argv[1:]==['--apply-root-reviewed'] else 'read-only-preview','files':cfg['files'],'operations':cfg['operations'],'no_acceptance_or_recertification':True},indent=2))
if sys.argv[1:]!=['--apply-root-reviewed']:raise SystemExit(0)
A=D/('applied-'+datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));(A/'before').mkdir(parents=True);(A/'final').mkdir();temps=[]
try:
 for p in cfg['files']:
  target=ROOT/p;(A/'before'/target.name).write_bytes(target.read_bytes());data=(D/'proposed'/target.name).read_bytes();fd,tmp=tempfile.mkstemp(prefix=target.name+'.root-mirror-',dir=target.parent)
  with os.fdopen(fd,'wb') as out:out.write(data)
  os.chmod(tmp,target.stat().st_mode & 0o777);temps.append((target,Path(tmp),data))
 guard()
 for target,tmp,data in temps:
  assert target.read_bytes()==(D/'before'/target.name).read_bytes(),'Concurrent metadata change'
  os.replace(tmp,target);(A/'final'/target.name).write_bytes(data)
 (A/'completion.json').write_text(json.dumps({'root_executed_exact_metadata_mirror':True,'files':cfg['files'],'acceptance_or_recertification_granted':False},indent=2)+'\n')
finally:
 for _,tmp,_ in temps:
  if tmp.exists():tmp.unlink()
