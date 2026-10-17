#!/usr/bin/env python3
"""Root-only guarded metadata projection. Default is check-only; --apply writes ONLY3batch29metadatafiles."""
import argparse,hashlib,json,os
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--apply',action='store_true');args=parser.parse_args()
base=Path(__file__).resolve().parent
repo=base.parents[2]
guards=json.loads((base/'rawguards.json').read_text())
for rel,expected in guards.items():
 p=repo/rel
 if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest()!=expected:raise SystemExit('GUARD MISMATCH: '+rel)
paths=json.loads((base/'integration.json').read_text())['canonical_targets']
for rel in paths:json.loads((base/'proposed'/rel).read_text())
if args.apply:
 for rel in paths:
  dst=repo/rel;tmp=dst.with_name(dst.name+'.owner29-tmp');tmp.write_bytes((base/'proposed'/rel).read_bytes());os.replace(tmp,dst)
 print('APPLIED3batch29metadatafiles; no63metadata/levels/readiness touched.')
else:print('GUARDS MATCH; check-only, no canonicalwrites. Root must review diffs before --apply.')
