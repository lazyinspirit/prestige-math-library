#!/usr/bin/env python3
"""Root only --apply. Default preflight; no metadata, records or gates."""
import argparse,json,hashlib,os
from pathlib import Path
base=Path(__file__).resolve().parent;root=base.parents[1]
def sha(x):return hashlib.sha256(x).hexdigest()
def main():
 p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');apply=p.parse_args().apply;ops=json.loads((base/'integration-guards.json').read_text())['operations'];old={};new={}
 for op in ops:
  f=root/op['actual_path'];q=root/op['proposed_path'];old[f]=f.read_bytes();new[f]=q.read_bytes();assert sha(old[f])==op['expected_sha256'],f;assert sha(new[f])==op['proposed_sha256'],q
 assert len(old)==10
 if apply:
  archive=base/'root-execution-preimages';assert not archive.exists();archive.mkdir()
  for f,b in old.items():
   q=archive/f.relative_to(root);q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b)
  temps={}
  for f,b in new.items():
   q=f.with_name(f.name+'.statement-first-root-tmp');assert not q.exists();q.write_bytes(b);temps[f]=q
  for f,b in old.items():assert f.read_bytes()==b,f
  for f,q in temps.items():os.replace(q,f)
 print(json.dumps({'applied':apply,'sources':10,'all_raw_guards_pass':True,'contract_writes':0,'metadata_or_readiness_or_gate_writes':False},indent=2))
if __name__=='__main__':main()
