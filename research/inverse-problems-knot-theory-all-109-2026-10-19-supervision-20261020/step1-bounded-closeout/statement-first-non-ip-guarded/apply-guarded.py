#!/usr/bin/env python3
"""Root-owned application only. Dry run by default; --apply explicitly installs proposals."""
from pathlib import Path
import json,sys
base=Path(__file__).resolve().parent
root=next(p for p in base.parents if (p/'CLAUDE.md').is_file() and (p/'items').is_dir())
packet=json.loads((base/'guarded-apply-packet.json').read_text())
rows=packet['items']
for row in rows:
    canonical=root/row['canonical']
    preimage=root/row['preimage']
    proposed=root/row['proposed']
    if '-ip-' in row['id'] or canonical!=root/'items'/(row['id']+'.md'):
        raise SystemExit('Invalid scope: '+row['id'])
    if canonical.read_bytes()!=preimage.read_bytes():
        raise SystemExit('Preimage changed; refuse entire batch: '+row['id'])
    if not proposed.is_file():
        raise SystemExit('Missing proposal: '+row['id'])
if '--apply' in sys.argv:
    for row in rows:
        (root/row['canonical']).write_bytes((root/row['proposed']).read_bytes())
    print('Applied',len(rows),'guarded formatting proposals; no metadata or run state changed.')
else:
    print('All',len(rows),'preimage guards match. Dry run only; canonical files untouched.')
