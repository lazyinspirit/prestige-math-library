"""ROOT-EXECUTED, metadata only. No source/manifest/plan/readiness/gate writes."""
from pathlib import Path
import json, hashlib, sys, copy
RUN='physics-td-qft-rpm-62-2026-10-14'
here=Path(__file__).resolve().parent
root=here.parent.parent
if Path.cwd().resolve()!=root:raise SystemExit('Run from physics workspace')
if sys.argv[1:] not in [[],['--apply']]:raise SystemExit('Only --apply is accepted; default validates without writes')
seen={}
def read(rel):
 p=root/rel
 if not p.resolve().is_relative_to(root) or p.is_symlink():raise ValueError('Nonlocal/symlink input: '+rel)
 if rel not in seen:seen[rel]=p.read_bytes()
 return seen[rel]
def sha(b):return hashlib.sha256(b).hexdigest()
def guarded(rel,h):
 b=read(rel)
 if sha(b)!=h:raise ValueError('Guard refused: '+rel)
 return b
idx=json.loads((here/'patch-index.json').read_text())
if idx['run']!=RUN:raise ValueError('Wrong run')
proposal=json.loads(guarded(idx['proposal'],idx['proposal_sha256']))
diag=json.loads(guarded(idx['diagnostic'],idx['diagnostic_sha256']))
numeric=json.loads(guarded(idx['numeric_receipt'],idx['numeric_receipt_sha256']))
if len(diag['errors'])!=77 or len(diag['groups'])!=13 or diag['shared_writes'] or not diag['all_numeric_source_body_hash_and_yaml_guards_validated']:raise ValueError('Unexpected diagnostic authority')
if set(proposal['scope'])!={g['id'] for g in diag['groups']}:raise ValueError('Scope mismatch')
after={x['path']:x['after_sha256'] for x in numeric['writes']}
for rel,h in idx['source_after_guards'].items():
 if after.get(rel)!=h:raise ValueError('Source guard is not numeric AFTER authority: '+rel)
 guarded(rel,h)
docs={p:json.loads(guarded(p,h)) for p,h in idx['contract_before_guards'].items()}
for g in diag['groups']:
 id=g['id'];doc=docs[g['contract_path']];old=doc['contracts'][id]['boundaries']
 if old!=idx['old_boundary_arrays'][id]:raise ValueError('Boundary-array preimage refused: '+id)
 for e in g['errors']:
  b=old[e['boundary_index']]
  if b['case']!=e['case'] or b.get('case_scope')!=e['current_case_scope']:raise ValueError('Diagnostic JSON preimage refused: '+id+'/'+e['case'])
 new=proposal['contracts'][id]
 if set(new)!= {'boundaries'}:raise ValueError('Only boundaries allowed')
 if [x['case'] for x in new['boundaries']]!=[x['case'] for x in old]:raise ValueError('Cases reordered/dropped')
 text=read('items/'+id+'.md').decode();expected=idx['source_after_guards']['items/'+id+'.md']
 for b in new['boundaries']:
  scope=b.get('case_scope')
  if scope and (scope['current_raw_sha256']!=expected or scope['source_excerpt'] not in text):raise ValueError('Current source excerpt/AFTER binding refused: '+id+'/'+b['case'])
 before=copy.deepcopy(doc['contracts'][id]);doc['contracts'][id]['boundaries']=copy.deepcopy(new['boundaries'])
 untouched_before={k:v for k,v in before.items() if k!='boundaries'};untouched_after={k:v for k,v in doc['contracts'][id].items() if k!='boundaries'}
 if untouched_before!=untouched_after:raise ValueError('Unrelated/manual contract fields changed')
# Final input currency check immediately before any write; every observed source is read once and re-compared as bytes.
for rel,b in seen.items():
 if (root/rel).read_bytes()!=b:raise ValueError('Input changed before write: '+rel)
if '--apply' not in sys.argv:
 print(json.dumps({'guarded':True,'subjects':13,'diagnostic_preimages':77,'shared_writes':False,'source_writes':False}));raise SystemExit
backup=here/'root-apply-before';backup.mkdir(exist_ok=False)
for rel in docs:(backup/rel.replace('/','__')).write_bytes(seen[rel])
writes=[]
for rel,doc in docs.items():
 out=(json.dumps(doc,indent=2)+'\n').encode();(root/rel).write_bytes(out);writes.append({'path':rel,'before_sha256':sha(seen[rel]),'after_sha256':sha(out)})
receipt={'run':RUN,'subjects':13,'diagnostic_preimages':77,'shared_contract_writes':writes,'source_writes':False,'unrelated_fields_preserved':True,'tests_or_gates':False,'next':'Root numeric helper handles other expected-before bindings; no scientific review or readiness promotion asserted.'}
(here/'root-application-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt))
