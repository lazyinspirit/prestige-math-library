from pathlib import Path
import json,re,hashlib
sc=Path(__file__).resolve().parent
inv=json.loads((sc/'proposed-inventory.json').read_text()); led=json.loads((sc/'closure-ledger.json').read_text())
ids=[i for p in inv['pages'] for i in p['provisional_A_items']]
assert len(ids)==len(set(ids))
assert set(ids)=={r['id'] for r in led['physical_contracts']}
for p in inv['pages']:
 assert len(p['provisional_A_items'])<=p['A_budget']<=100
 assert p['B_budget']<=100
 assert set(p['provisional_A_items'])==set(re.findall(r'\bcm\d\d-[a-z0-9-]+',p['contract_text']))
for p in inv['mathematical_pages']:
 assert len(p['provisional_A_sections'])<=p['A_budget']<=100
 assert len(p.get('provisional_split_items',[]))<=p['A_budget']
 assert len(p.get('provisional_B_items',[]))<=p['B_budget']
 assert p['B_budget']<=100
math={r['id']:r for r in led['mathematical_sections']}; visiting=set(); done={}
def level(i):
 if i in visiting: raise AssertionError('cycle at '+i)
 if i in done:return done[i]
 visiting.add(i); r=math[i]
 assert r['domain']=='mathematics'
 assert all(v=='mathematical-premise' for v in r['dependency_roles'].values())
 d=0 if not r['deps'] else 1+max(level(j) for j in r['deps'])
 assert r['dependency_level']==d
 visiting.remove(i);done[i]=d;return d
for i in math:level(i)
allproof='\n'.join((sc/p).read_text() for p in ['mathematical-prerequisites.md','expansion-proofs.md','mechanical-horseshoe.md','analytic-kam.md','analytic-backward-error.md','local-fluid-wellposedness.md'])
for i in math:assert re.search(r'^#{1,2} '+re.escape(i)+r' —',allproof,re.M),i
for r in led['physical_contracts']:
 assert set(r['mathematical_sections'])<=set(math)
 assert not r['production_readiness']
assert all(not r['status'].startswith('required-unresolved') for r in led['required_residual_obligations'])
assert all(r['status']!='required-unresolved' for r in led['physical_contracts'])
assert 'R-KAM' in {x['id'] for x in led['required_residual_obligations']}
assert 'R-HOMOCLINIC' in {x['id'] for x in led['required_residual_obligations']}
summary={'command':'python3 '+str(sc/'check-expansion.py'),'exit_code':0,'scope':'JSON coverage, uniqueness, budgets, pure-math local DAG/levels and proof-section existence; not proof certification','primary_pairs':len(inv['pages']),'mathematical_pairs':len(inv['mathematical_pages']),'unique_provisional_A_contracts':len(ids),'mathematical_sections':len(math),'maximum_A_budget':max(p['A_budget'] for p in inv['pages']+inv['mathematical_pages']),'maximum_B_budget':max(p['B_budget'] for p in inv['pages']+inv['mathematical_pages']),'local_mathematical_DAG':True,'whole_framework_complete':led['whole_framework_complete'],'independent_proof_certification':False,'production_run_started':False}
(sc/'structural-check-summary.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps(summary,indent=2))
