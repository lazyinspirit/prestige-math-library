#!/usr/bin/env python3
"""ROOT ONLY. --apply copies guarded metadata; default is read-only verification."""
import pathlib,json,subprocess,sys
B=pathlib.Path(__file__).resolve().parent;ROOT=B.parents[2]
assert sys.argv[1:] in [[],['--apply']]
subprocess.run(['node',str(B/'verify93.mjs')],cwd=ROOT,check=True)
if sys.argv[1:]==['--apply']:
 p=json.loads((B/'projection.json').read_text())
 # Recheck every complete input immediately before the metadata-only writes.
 for rel in p['guards']:assert (ROOT/rel).read_bytes()==(B/'before'/rel).read_bytes(),rel
 for rel in p['outputs']:(ROOT/rel).write_bytes((B/'proposed'/pathlib.Path(rel).name).read_bytes())
 subprocess.run(['node',str(B/'verify93.mjs'),'--current'],cwd=ROOT,check=True)
 print('Applied exactly batch93 pages/contracts; no source or native evidence modified.')
