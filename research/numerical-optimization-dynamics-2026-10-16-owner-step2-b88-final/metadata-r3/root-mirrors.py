#!/usr/bin/env python3
"""ROOT ONLY frozen metadata preview/default; --apply after root review and writer drain."""
from pathlib import Path
import json,sys
base=Path(__file__).resolve().parent
root=base.parents[2]
assert len(sys.argv)==1 or sys.argv[1:]==['--apply']
for p in (base/'before').rglob('*'):
 if p.is_file():
  rel=p.relative_to(base/'before');assert (root/rel).read_bytes()==p.read_bytes(),'Changed guarded input '+str(rel)
if sys.argv[1:]==['--apply']:
 for rel in json.loads((base/'changes.json').read_text()):(root/rel).write_bytes((base/'proposed'/rel).read_bytes())
 print('Applied exact root-reviewed metadata mirrors only.')
else:print((base/'proposal.diff').read_text(),end='')
