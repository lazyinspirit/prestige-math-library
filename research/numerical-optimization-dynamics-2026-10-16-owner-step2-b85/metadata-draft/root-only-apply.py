#!/usr/bin/env python3
"""ROOT ONLY: show exact metadata diffs by default; apply only after root review."""
from pathlib import Path
import argparse,hashlib,json,difflib
root=Path.cwd();base=Path(__file__).resolve().parent
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--apply',action='store_true')
parser.add_argument('--assert-writers-drained',action='store_true')
args=parser.parse_args();
if args.apply:raise SystemExit('Zero-delta observation only: no canonical apply needed or authorized')
sha=lambda v:hashlib.sha256(v).hexdigest()
rows=json.loads((base/'metadata-raw-guards.json').read_text())
if args.apply and not args.assert_writers_drained:raise SystemExit('ROOT must confirm no conflicting metadata/source writer')
for r in rows:
 before=(base/'before'/r['path']).read_bytes();after=(base/'proposed'/r['path']).read_bytes()
 if sha(before)!=r['before_raw_sha256']or sha(after)!=r['proposed_raw_sha256']:raise SystemExit('Archived input changed: '+r['path'])
 if(root/r['path']).read_bytes()!=before:raise SystemExit('Metadata before mismatch: '+r['path'])
for r in json.loads((base/'source-raw-guards.json').read_text()):
 if sha((root/r['path']).read_bytes())!=r['raw_sha256']:raise SystemExit('Current source context changed: '+r['path'])
for r in rows:
 if args.apply:
  (root/r['path']).write_bytes((base/'proposed'/r['path']).read_bytes());print('APPLIED '+r['path'])
 else:
  a=(base/'before'/r['path']).read_text();b=(base/'proposed'/r['path']).read_text()
  print(''.join(difflib.unified_diff(a.splitlines(True),b.splitlines(True),fromfile='before/'+r['path'],tofile='proposed/'+r['path'])),end='')
