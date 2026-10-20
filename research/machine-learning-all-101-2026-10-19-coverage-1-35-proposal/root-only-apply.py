#!/usr/bin/env python3
"""Field-level CAS only. Default check; root may --apply. Protected fetch fields
are never changed. Integrate new B rows before the network owner's field ops.
"""
import argparse,json,copy,hashlib
from pathlib import Path
base=Path(__file__).resolve().parent;root=base.parents[1]
def main():
 p=argparse.ArgumentParser();p.add_argument('--apply',action='store_true');apply=p.parse_args().apply;ops=json.loads((base/'field-operations.json').read_text())['operations'];docs={};before={}
 for op in ops:
  assert 'fetch_verified' not in op['field'] and 'recovery_attempts' not in op['field']
  path=root/op['file']
  if path not in docs:before[path]=path.read_bytes();docs[path]=json.loads(before[path])
  d=docs[path];pages=[x for x in d['pages'] if x['page']==op['page']];assert len(pages)==1;target=pages[0]
  if op['source_url'] is not None:
   matches=[x for x in target['sources'] if x['url']==op['source_url']];assert len(matches)==1;target=matches[0]
  if op['content_name'] is not None:
   matches=[x for x in target['contents'] if x['name']==op['content_name']];assert len(matches)==1;target=matches[0]
  assert target.get(op['field'])==op['expected_old'],(op['file'],op['page'],op['field']);target[op['field']]=copy.deepcopy(op['proposed'])
 # No existing source recovery/stamp field can be altered, including concurrent
 # legitimate changes made by the network owner before this execution.
 for path,d in docs.items():
  old=json.loads(before[path])
  for a,b in zip(old['pages'],d['pages']):
   for source in a['sources']:
    new=next(x for x in b['sources'] if x['url']==source['url'])
    for k in ['fetch_verified','recovery_attempts']:assert source.get(k)==new.get(k)
 for path,data in before.items():assert path.read_bytes()==data
 if apply:
  archive=base/'root-execution-preimages';assert not archive.exists();archive.mkdir()
  for path,data in before.items():
   q=archive/path.relative_to(root);q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(data)
  for path,d in docs.items():path.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps({'applied':apply,'field_operations':len(ops),'files':len(docs),'protected_fetch_fields_preserved':True,'no_source_proof_canonical_readiness_gate_writes':True},indent=2))
if __name__=='__main__':main()
