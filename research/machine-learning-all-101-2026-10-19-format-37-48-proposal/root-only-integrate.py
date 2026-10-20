#!/usr/bin/env python3
"""Default read-only validation; --apply is for root only. No readiness/gates."""
import argparse,json,hashlib
from pathlib import Path
base=Path(__file__).resolve().parent;root=base.parents[1];run='machine-learning-all-101-2026-10-19'
def sha(x):return hashlib.sha256(x).hexdigest()
def load(p):return json.loads(p.read_text())
def main():
 args=argparse.ArgumentParser();args.add_argument('--apply',action='store_true');apply=args.parse_args().apply;guards=load(base/'integration-guards.json');old={};writes={}
 for op in guards['source_operations']:
  p=root/op['actual_path'];old[p]=p.read_bytes();assert sha(old[p])==op['expected_sha256'],p;q=(root/op['proposed_path']).read_bytes();assert sha(q)==op['proposed_sha256'];writes[p]=q
 for batch,ops in guards['contracts_operations'].items():
  p=root/'research'/(run+'-batch-'+batch+'.proof-contracts.json');old[p]=p.read_bytes();d=json.loads(old[p])
  for op in ops:
   assert d['contracts'][op['id']]==op['expected_old_contract'],op['id'];d['contracts'][op['id']]=op['proposed_contract']
  writes[p]=(json.dumps(d,indent=2)+'\n').encode()
 for p,b in old.items():assert p.read_bytes()==b,p
 if apply:
  archive=base/'root-execution-preimages';assert not archive.exists();archive.mkdir()
  for p,b in old.items():
   q=archive/p.relative_to(root);q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b)
  for p,b in writes.items():p.write_bytes(b)
 print(json.dumps({'applied':apply,'source_carriers':len(guards['source_operations']),'contract_keys':{b:len(x) for b,x in guards['contracts_operations'].items()},'no_readiness_or_gates':True},indent=2))
if __name__=='__main__':main()
