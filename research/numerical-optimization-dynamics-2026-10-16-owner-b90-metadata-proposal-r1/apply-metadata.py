#!/usr/bin/env python3
"""Root-owned guarded projection. Default is read-only inspection; --apply writes exact reviewed metadata bytes."""
from pathlib import Path
import json,sys,datetime,hashlib
BASE=Path(__file__).resolve().parent
REPO=BASE.parent.parent
plan=json.loads((BASE/'plan.json').read_text())
if len(sys.argv)>2 or (len(sys.argv)==2 and sys.argv[1]!='--apply'):raise SystemExit('usage: apply-metadata.py [--apply]')
for g in plan['raw_guards']:
    if (REPO/g['path']).read_bytes()!=(REPO/g['before_bytes']).read_bytes():raise SystemExit('STALE RAW GUARD: '+g['path'])
for t in plan['targets']:
    if hashlib.sha256((REPO/t['proposed']).read_bytes()).hexdigest()!=t['proposed_raw_sha256']:raise SystemExit('STALE PROPOSAL PAYLOAD: '+t['path'])
    if (REPO/t['path']).read_bytes()!=(REPO/t['before']).read_bytes():raise SystemExit('STALE TARGET: '+t['path'])
print('All exact raw guards match; targets:')
for t in plan['targets']:print(t['path'])
if '--apply' not in sys.argv:print('Read-only inspection; no canonical writes.');raise SystemExit(0)
# All guards checked before any write; no regeneration from mutable outside inputs.
for t in plan['targets']:(REPO/t['path']).write_bytes((REPO/t['proposed']).read_bytes())
receipt={'version':1,'run':plan['run'],'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'plan':str(BASE/'plan.json'),'applied_paths':[t['path'] for t in plan['targets']],'checks':'Raw guards and exact reviewed payloads only; no validator gate,test,source edit or recertification performed.'}
(BASE/'root-application.json').write_text(json.dumps(receipt,indent=2)+'\n')
print('Applied exact reviewed metadata payloads; root-application.json recorded.')
