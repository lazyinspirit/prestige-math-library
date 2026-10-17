#!/usr/bin/env python3
from pathlib import Path
import json,hashlib,sys,datetime
BASE=Path(__file__).resolve().parent
REPO=BASE.parents[2]
P=json.loads((BASE/'plan.json').read_text())
if len(sys.argv)>2 or (len(sys.argv)==2 and sys.argv[1]!='--apply'):raise SystemExit('usage: apply-metadata.py [--apply]')
for g in P['raw_guards']:
 if (REPO/g['path']).read_bytes()!=(REPO/g['raw']).read_bytes():raise SystemExit('STALE RAW GUARD: '+g['path'])
for t in P['targets']:
 if (REPO/t['path']).read_bytes()!=(REPO/t['before']).read_bytes():raise SystemExit('STALE TARGET: '+t['path'])
 if hashlib.sha256((REPO/t['proposed']).read_bytes()).hexdigest()!=t['proposed_sha256']:raise SystemExit('CHANGED PAYLOAD: '+t['path'])
print('Raw source/metadata/payload guards match;2targets.')
if '--apply' not in sys.argv:print('Read-only inspection; no canonical writes.');raise SystemExit(0)
for t in P['targets']:(REPO/t['path']).write_bytes((REPO/t['proposed']).read_bytes())
(BASE/'root-application.json').write_text(json.dumps({'version':1,'run':P['run'],'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'applied':[t['path']for t in P['targets']],'scope':'Root executed guarded metadata projection;no source edits,native acceptance,gates or recertification.'},indent=2)+'\n')
print('Applied2reviewedmetadata payloads.')
