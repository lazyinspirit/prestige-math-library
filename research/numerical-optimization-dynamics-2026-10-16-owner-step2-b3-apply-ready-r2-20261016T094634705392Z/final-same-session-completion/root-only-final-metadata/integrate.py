#!/usr/bin/env python3
"""Root-only byte-guarded metadata integration; default is read-only."""
import argparse,json,os
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');a=p.parse_args()
b=Path(__file__).resolve().parent;repo=Path.cwd();d=json.loads((b/'integration.json').read_text())
for rel in d['source_guard_paths']:
 if (repo/rel).read_bytes()!=(b/'guards'/rel).read_bytes():raise SystemExit('GUARD MISMATCH '+rel)
if a.apply:
 for rel in d['canonical_targets']:
  dest=repo/rel;tmp=dest.with_name(dest.name+'.original3-root-tmp');tmp.write_bytes((b/'proposed'/rel).read_bytes());os.replace(tmp,dest)
 print('Root-only guarded metadata/page inventory packet applied. No levels/readiness changed. Batch100: '+json.loads((b/'batch100-pending.json').read_text())['status'])
else:print('All byte guards match. Read-only; review diffs before root --apply. Batch100: '+json.loads((b/'batch100-pending.json').read_text())['status'])
