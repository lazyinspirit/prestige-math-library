#!/usr/bin/env python3
"""Root-only exact metadata mirror; default previews; no source or acceptance changes."""
from pathlib import Path
from datetime import datetime,timezone
import json,sys,os,tempfile
D=Path(__file__).resolve().parent
ROOT=Path.cwd()
cfg=json.loads((D/'config.json').read_text());target=ROOT/cfg['file']
assert sys.argv[1:] in ([],['--preview'],['--apply-root-reviewed']), 'Explicit root-reviewed switch required'
def guard():
 assert target.read_bytes()==(D/'before'/target.name).read_bytes(),'Metadata changed; refuse overwrite'
 for src in cfg['source_guards']:
  assert (ROOT/src).read_bytes()==(D/'sources'/Path(src).name).read_bytes(),'Source changed; refuse stale mirror: '+src
guard()
print(json.dumps({'mode':'root-reviewed-apply' if sys.argv[1:]==['--apply-root-reviewed'] else 'read-only-preview','file':cfg['file'],'operations':cfg['operations'],'published_supplier_context':cfg['new_published_supplier_context'],'no_acceptance_or_recertification':True},indent=2))
if sys.argv[1:]!=['--apply-root-reviewed']:raise SystemExit(0)
A=D/('applied-'+datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));A.mkdir()
(A/'before.json').write_bytes(target.read_bytes())
data=(D/'proposed'/target.name).read_bytes();fd,tmp=tempfile.mkstemp(prefix=target.name+'.root-mirror-',dir=target.parent)
try:
 with os.fdopen(fd,'wb') as out:out.write(data)
 os.chmod(tmp,target.stat().st_mode & 0o777);guard();os.replace(tmp,target)
 (A/'final.json').write_bytes(data)
 (A/'completion.json').write_text(json.dumps({'root_executed_exact_metadata_mirror':True,'file':cfg['file'],'acceptance_or_recertification_granted':False},indent=2)+'\n')
finally:
 if Path(tmp).exists():Path(tmp).unlink()
