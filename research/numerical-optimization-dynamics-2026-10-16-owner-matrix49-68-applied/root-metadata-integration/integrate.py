#!/usr/bin/env python3
import argparse,json,hashlib,os
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');a=p.parse_args();base=Path(__file__).resolve().parent;repo=base.parents[2]
for rel,h in json.loads((base/'rawguards.json').read_text()).items():
 t=repo/rel
 if not t.is_file() or hashlib.sha256(t.read_bytes()).hexdigest()!=h:raise SystemExit('GUARD MISMATCH '+rel)
paths=json.loads((base/'integration.json').read_text())['canonical_targets']
if a.apply:
 for rel in paths:
  t=repo/rel;tmp=t.with_name(t.name+'.matrix-owner-tmp');tmp.write_bytes((base/'proposed'/rel).read_bytes());os.replace(tmp,t)
 print('Applied guarded metadata/page inventory proposals only; root owns levels/currentbindings.')
else:print('Guardsmatch; readonlycheck-only. Rootreviewdiffsbefore--apply.')
