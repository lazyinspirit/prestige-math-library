#!/usr/bin/env python3
from pathlib import Path
import json,sys,hashlib,datetime
BASE=Path(__file__).resolve().parent
REPO=BASE.parent.parent.parent
plan=json.loads((BASE/'plan.json').read_text())
if len(sys.argv)>2 or (len(sys.argv)==2 and sys.argv[1]!='--apply'):raise SystemExit('usage: apply-metadata.py [--apply]')
for g in plan['raw_guards']:
    if (REPO/g['path']).read_bytes()!=(REPO/g['raw']).read_bytes():raise SystemExit('STALE RAW GUARD: '+g['path'])
for t in plan['targets']:
    if (REPO/t['path']).read_bytes()!=(REPO/t['before']).read_bytes():raise SystemExit('STALE METADATA TARGET: '+t['path'])
    if hashlib.sha256((REPO/t['proposed']).read_bytes()).hexdigest()!=t['proposed_sha256']:raise SystemExit('CHANGED PROPOSAL: '+t['path'])
print('Exact current raw guards match for all sources and metadata; metadata targets:')
for t in plan['targets']:print(t['path'])
if '--apply' not in sys.argv:print('Read-only inspection; no canonical writes.');raise SystemExit(0)
if plan.get('pending_foreign_source'):raise SystemExit('HELD: native72 source writer must drain and final source/consumer bindings must be refreshed before root application.')
for t in plan['targets']:(REPO/t['path']).write_bytes((REPO/t['proposed']).read_bytes())
(BASE/'root-application.json').write_text(json.dumps({'version':1,'run':plan['run'],'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'applied':[t['path'] for t in plan['targets']],'authority':'Root executed guarded reviewed b58/b70 metadata projection; no source edits, gates, native acceptance, dependency-level assignment or recertification.'},indent=2)+'\n')
print('Applied exact metadata payloads; receipt root-application.json written.')
