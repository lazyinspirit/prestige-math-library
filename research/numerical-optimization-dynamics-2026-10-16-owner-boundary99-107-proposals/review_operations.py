#!/usr/bin/env python3
import json,sys,difflib
from pathlib import Path
D=Path(__file__).resolve().parent; ROOT=Path.cwd(); ops=json.loads((D/'operations.json').read_text()); docs={}; changes={}
for op in ops:
 p=ROOT/op['file'];docs.setdefault(str(p),json.loads(p.read_text()))
 cur=docs[str(p)]
 for k in op['path'][:-1]:cur=cur[k]
 k=op['path'][-1]
 if cur[k]!=op['before']:raise SystemExit(f'STALE selected row: {op["file"]} {op["path"]}')
 cur[k]=op['proposed'];changes[str(p)]=docs[str(p)]
# Source guards: retain exact current body bytes copied during preparation.
for part in ['sub99-102','sub103-107']:
 for p in (D/part/'source-before').rglob('*.md'):
  rel=p.relative_to(D/part/'source-before')
  if (ROOT/rel).read_bytes()!=p.read_bytes():raise SystemExit(f'STALE source {rel}')
# Child rawguards.json honestly distinguishes current snapshots from earlier substantive read bytes, whose equality was not archived.
if '--apply' not in sys.argv:
 print(json.dumps({'mode':'review-only','selected_rows':len(ops),'contract_files':len(changes),'no_canonical_writes':True}));sys.exit()
receipt=D/'ROOT-application-before';receipt.mkdir(exist_ok=False)
for s,x in changes.items():
 p=Path(s);(receipt/p.name).write_bytes(p.read_bytes());p.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'root_requested_application':True,'rows':len(ops),'files':len(changes)}))
