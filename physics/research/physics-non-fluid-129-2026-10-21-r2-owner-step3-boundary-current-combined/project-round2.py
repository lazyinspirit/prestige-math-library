"""Strict research-only projection from sealed proposal. No production writes."""
import json,hashlib,pathlib,copy,sys
HERE=pathlib.Path(__file__).resolve().parent
ROOT=HERE.parent.parent
seal=json.loads((HERE/'seal.json').read_text())
actual_proposal_hash=hashlib.sha256((HERE/'proposal.json').read_bytes()).hexdigest()
if actual_proposal_hash!=seal['proposal']['sha256']:raise SystemExit('Sealed proposal changed')
p=json.loads((HERE/'proposal.json').read_text())
def check(g):
 path=ROOT/g['path'];actual=hashlib.sha256(path.read_bytes()).hexdigest()
 if actual!=g['sha256']:raise SystemExit('Guard changed: '+str(path))
check(p['immutable_base_guard'])
for g in p['owner_input_guards']:check(g)
for id,b in p['source_bindings'].items():
 if b['binding_status']!='matches-reviewed-body':raise SystemExit('Pending owner final receipt: '+id)
 check({'path':b['path'],'sha256':b['reviewed_sha256']})
data=json.loads((ROOT/p['immutable_base_guard']['path']).read_text())
for r in p['rows']:
 rows=data['contracts'][r['id']]['boundaries'];n=next(i for i,x in enumerate(rows) if x['case']==r['case'])
 if rows[n]!=r['original_row']:raise SystemExit('Original row mismatch: '+r['id']+'/'+r['case'])
 rows[n]=copy.deepcopy(r['semantic_after_row'])
out=HERE/'merged.semantic-proposal.round2.json'
assert out.resolve()!= (ROOT/p['immutable_base_guard']['path']).resolve()
out.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n')
print('Research-only successor: '+str(out))
