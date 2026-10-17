#!/usr/bin/env python3
"""Root-only guarded metadata mirror. Default checks bytes only; --apply writes exact prepared bytes."""
from pathlib import Path
import json, os, sys, tempfile
HERE=Path(__file__).resolve().parent
ROOT=HERE.parents[1]
plan=json.loads((HERE/'metadata-plan.json').read_text())
for row in plan['source_guards']:
    if (ROOT/row['target']).read_bytes() != (ROOT/row['expected']).read_bytes():
        raise SystemExit('Source changed; stop and rebuild proposal: '+row['target'])
for row in plan['metadata_files']:
    if (ROOT/row['target']).read_bytes() != (ROOT/row['before']).read_bytes():
        raise SystemExit('Metadata changed; stop and rebuild proposal: '+row['target'])
    json.loads((ROOT/row['proposed']).read_text())
if sys.argv[1:] != ['--apply']:
    print('Guards match; no writes. Root may execute this utility with --apply.')
    raise SystemExit(0)
# All guards checked before any write. No hash, readiness, level or gate operation.
staged=[]
try:
    for row in plan['metadata_files']:
        target=ROOT/row['target']
        fd,name=tempfile.mkstemp(prefix='.'+target.name+'.owner-mirror-',dir=target.parent)
        with os.fdopen(fd,'wb') as f:
            f.write((ROOT/row['proposed']).read_bytes())
        os.chmod(name,target.stat().st_mode & 0o777)
        staged.append((Path(name),target))
    for temporary,target in staged:
        os.replace(temporary,target)
    print('Applied exact batch83/89 metadata mirrors; root owns current checks/bindings.')
finally:
    for temporary,target in staged:
        if temporary.exists(): temporary.unlink()
