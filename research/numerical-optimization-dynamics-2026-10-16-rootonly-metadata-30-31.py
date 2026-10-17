#!/usr/bin/env python3
"""Root-reviewed exact metadata mirrors. Default is read-only preview.

Run only after root review:
 python3 research/numerical-optimization-dynamics-2026-10-16-rootonly-metadata-30-31.py --apply-root-reviewed

No proof verdicts, source edits, hashes, run controls or acceptance are written.
Every scoped metadata carrier and actual changed source input must still match
its full archived bytes. A concurrent change fails closed and is never overwritten.
"""
from pathlib import Path
from datetime import datetime,timezone
import json,os,sys,tempfile
ROOT=Path(__file__).resolve().parent.parent
DATA=ROOT/'research/numerical-optimization-dynamics-2026-10-16-rootonly-metadata-30-31-data'
preview=json.loads((DATA/'preview.json').read_text())
if sys.argv[1:] not in ([],['--preview'],['--apply-root-reviewed']):
 raise SystemExit('Use --preview (default), or --apply-root-reviewed after independent root review.')
apply=sys.argv[1:]==['--apply-root-reviewed']
files=preview['files']
def guard():
 for p in files:
  if (ROOT/p).read_bytes()!=(DATA/'before'/Path(p).name).read_bytes():raise SystemExit('STALE METADATA; no overwrite: '+p)
 for p in preview['source_guards']:
  if (ROOT/p).read_bytes()!=(DATA/'sources'/Path(p).name).read_bytes():raise SystemExit('STALE SOURCE; no overwrite: '+p)
guard()
print(json.dumps({'mode':'apply-root-reviewed' if apply else 'read-only-preview','guarded_metadata':files,'guarded_actual_source_inputs':preview['source_guards'],'changes':[c['locus'] for c in preview['changes']],'diff':str(DATA/'changes.diff'),'acceptance_granted':False},indent=2))
if not apply:raise SystemExit(0)
now=datetime.now(timezone.utc);archive=DATA/('applied-'+now.strftime('%Y%m%dT%H%M%S%fZ'))
archive.mkdir();(archive/'before').mkdir();(archive/'final').mkdir()
for p in files:
 name=Path(p).name;(archive/'before'/name).write_bytes((ROOT/p).read_bytes())
temps=[]
try:
 for p in files:
  target=ROOT/p;data=(DATA/'proposed'/target.name).read_bytes()
  fd,tmp=tempfile.mkstemp(prefix=target.name+'.root-mirror-',dir=target.parent)
  with os.fdopen(fd,'wb') as out:out.write(data)
  os.chmod(tmp,target.stat().st_mode & 0o777);temps.append((p,Path(tmp),data))
 guard()
 for p,tmp,data in temps:
  if (ROOT/p).read_bytes()!=(DATA/'before'/Path(p).name).read_bytes():raise SystemExit('Concurrent metadata change; stopped before overwrite: '+p)
  os.replace(tmp,ROOT/p);(archive/'final'/Path(p).name).write_bytes(data)
 with (archive/'completion.json').open('x') as out:json.dump({'applied_at':now.isoformat(),'root_review_required':True,'operation':'exact-metadata-mirrors-only','files':files,'source_guards':preview['source_guards'],'proof_acceptance_or_native_acceptance_granted':False},out,indent=2);out.write('\n')
 print('Applied exact mirrors; genuine application archive: '+str(archive))
finally:
 for _,tmp,_ in temps:
  if tmp.exists():tmp.unlink()
