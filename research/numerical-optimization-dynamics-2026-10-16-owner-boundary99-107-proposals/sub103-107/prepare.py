import json,copy,difflib,sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).parent))
from groundings import G
ROOT=Path.cwd(); D=Path(__file__).parent
DIAG=ROOT/'research/numerical-optimization-dynamics-2026-10-16-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'
native=json.loads(DIAG.read_text()); keys={(r['id'],r['case']) for c in native['templates'] for r in c['rows']}
ops=[]; reviews=[]; sources={}; counts={}; adjudications=[]
for b in range(103,108):
 p=ROOT/f'research/numerical-optimization-dynamics-2026-10-16-batch-{b}.proof-contracts.json'
 raw=p.read_text(); x=json.loads(raw); y=copy.deepcopy(x); n=0
 for id,c in y['contracts'].items():
  assert id in G,id
  source=ROOT/'items'/f'{id}.md'; body=source.read_text(); sources[str(source.relative_to(ROOT))]=body
  reviews.append({'batch':b,'id':id,'source':str(source.relative_to(ROOT)),'source_read':'Entire current Statement/Definition/Example and Proof/Verification/Counterexample body read. No mathematical re-review or native acceptance claimed.','case_mapping':G[id]})
  for i,row in enumerate(c.get('boundaries',[])):
   k=(id,row['case']); before=copy.deepcopy(row)
   special=(id=='lem-baoab-one-step-weak-expansion' and row['case']=='endpoints') or (id=='lem-stable-gaussian-autoregression-invariant-law' and row['case']=='empty') or (id=='thm-likelihood-ratio-gradient-identity-on-fixed-support' and row['case'].startswith('iff-'))
   if k not in keys and not special: continue
   field='reason' if row['status']=='not_applicable' else 'evidence'
   text=f"{row['case']} review of {id}: {G[id]}"
   if id=='lem-stable-gaussian-autoregression-invariant-law' and row['case']=='empty':
    row['status']='checked';row.pop('reason',None);field='evidence'
    text='Proof step 1.1 sums j=0,1,..., a nonempty covariance-series index set; proof step 3.1 also iterates at n=0, whose finite innovation sum j=0,...,n-1 is empty and equals zero, leaving the identity transition. Thus the actual empty aggregate is accounted for; d,m>=1 exclude an empty state/noise coordinate specification.'
   if id=='lem-baoab-one-step-weak-expansion' and row['case']=='endpoints':
    text='The Statement admits 0<h<=1, including h=1 and excluding h=0. Proof step 2.2 bounds the exact five-substep product Taylor remainder, proof step 3.1 bounds the SDE integral remainder, and proof step 4.1 subtracts them, retaining the general polynomial-growth exponent and the bounded-test exponent 3 separately.'
   row[field]=text
   if row!=before:
    ops.append({'file':str(p.relative_to(ROOT)),'path':['contracts',id,'boundaries',i],'before':before,'proposed':copy.deepcopy(row),'reason':'Replace boilerplate with individually read item cases; no source/quote/smoke/history alteration.'});n+=1
   if id=='thm-likelihood-ratio-gradient-identity-on-fixed-support' and row['case'].startswith('iff-'):
    adjudications.append({'file':str(p.relative_to(ROOT)),'path':['contracts',id,'boundaries',i],'case':row['case'],'request':'Root review and bind a reviewed false-positive disposition if accepted; worker writes no adjudication or hashes.','reason':G[id]})
 counts[b]=n
 for branch,data in [('before',raw),('proposed',json.dumps(y,indent=2,ensure_ascii=False)+'\n')]:
  q=D/branch/p.name;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(data)
 diff=''.join(difflib.unified_diff(raw.splitlines(True),(json.dumps(y,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile='before/'+p.name,tofile='proposed/'+p.name))
 q=D/'diffs'/f'batch-{b}.diff';q.parent.mkdir(parents=True,exist_ok=True);q.write_text(diff)
for rel,body in sources.items():
 q=D/'source-before'/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(body)
for name,obj in [('operations.json',ops),('item-case-review.json',reviews),('root-adjudication-requests.json',adjudications),('inventory.json',{'batches':list(range(103,108)),'subjects':len(reviews),'native_template_distinct_rows':sum(k[0] in G for k in keys),'boundary_row_operations':len(ops),'counts':counts,'root_adjudications':len(adjudications),'unresolved_mathematical_gaps_found':[],'not_executed':['canonical apply','gate','hash','adjudication binding','native acceptance'],'canonical_guard':'Every selected row must equal before; every source must equal source-before; unrelated parsed fields must remain current.'})]:
 (D/name).write_text(json.dumps(obj,indent=2,ensure_ascii=False)+'\n')
print(json.dumps({'subjects':len(reviews),'operations':len(ops),'by_batch':counts,'root_adjudications':len(adjudications)}))
