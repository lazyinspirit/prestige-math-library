#!/usr/bin/env python3
"""ROOT ONLY: inspect exact draft diffs by default; --apply writes approved bytes."""
from pathlib import Path
import argparse, hashlib, json, difflib
root=Path.cwd()
base=Path(__file__).resolve().parent
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--apply', action='store_true')
parser.add_argument('--include-33', action='store_true',help='Root explicitly coordinates optional single A1 quote projection with batch33 metadata work')
parser.add_argument('--assert-writers-drained',action='store_true',help='Root confirms no conflicting source/metadata writer')
args=parser.parse_args()
rows=json.loads((base/'metadata-raw-guards.json').read_text())
selected=[r for r in rows if args.include_33 or not r['optional_batch33']]
sha=lambda v:hashlib.sha256(v).hexdigest()
if args.apply and not args.assert_writers_drained:
 raise SystemExit('ROOT must confirm writers drained with --assert-writers-drained before applying')
for r in selected:
 p=root/r['path'];before=(base/'before'/r['path']).read_bytes();proposed=(base/'proposed'/r['path']).read_bytes()
 if sha(before)!=r['before_raw_sha256'] or sha(proposed)!=r['proposed_raw_sha256']:raise SystemExit('Archived bytes changed: '+r['path'])
 if p.read_bytes()!=before:raise SystemExit('Current target differs from full before: '+r['path'])
for r in json.loads((base/'source-raw-guards.json').read_text()):
 if sha((root/r['path']).read_bytes())!=r['raw_sha256']:raise SystemExit('Source context differs from reviewed projection: '+r['path'])
for r in selected:
 before=(base/'before'/r['path']).read_text();after=(base/'proposed'/r['path']).read_text()
 if args.apply:
  (root/r['path']).write_bytes((base/'proposed'/r['path']).read_bytes())
  print('APPLIED '+r['path'])
 else:
  print(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='before/'+r['path'],tofile='proposed/'+r['path'])),end='')
