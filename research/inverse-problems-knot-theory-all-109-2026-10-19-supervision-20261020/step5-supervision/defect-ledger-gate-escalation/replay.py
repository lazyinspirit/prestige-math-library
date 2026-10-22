import json,pathlib,hashlib,collections
P=pathlib.Path(__file__).parent
B=json.loads((P/'before-hashes.json').read_text());changed=[p for p,h in B['files'].items()if hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()!=h]
assert not changed,('Changed bound inputs; reconcile before application',changed)
E=json.loads((P/'candidate-evidence.json').read_text());R=json.loads((P/'candidate-rows.json').read_text());L=[json.loads(x)for x in pathlib.Path('research/defect-ledger.jsonl').read_text().splitlines()if x.strip()];run=E['run'];mine=[r for r in L if r['run']==run]
superseded={x for r in mine for x in r.get('supersedes',[])};active=[r for r in mine if r['defect_id']not in superseded]
def owners(a,rows):
 def refs(r):return [x for x in r.get('adjudication_ref',[])if isinstance(x,dict)]
 def same(r,x):return x.get('item_sha256')==a['item_sha256'] and (not x.get('id')or x['id']==a['id'])
 exact=[r for r in rows if any(same(r,x)and x.get('model')==a['model']and x.get('context_sha256')==a['context_sha256']for x in refs(r))]
 return exact or [r for r in rows if any(same(r,x)and(not x.get('model')or not x.get('context_sha256'))for x in refs(r))]
counts=[]
for b,r in zip(E['bindings'],R):
 a=b['adjudication'];assert len(owners(a,active))==0;assert len(owners(a,active+R))==1
 assert b['native_review']['disposition']=='repaired';counts.append((a['step5_phase'],a['step5_round']))
assert len({r['defect_id']for r in L+R})==len(L+R)
print(json.dumps({'bound_inputs_unchanged':len(B['files']),'original_missing_obligations':len(R),'candidate_ownership_exactly_one_for_each':True,'foreign_ledger_rows_preserved_by_append_only_plan':len(L)-len(mine),'native_repaired_review_attributions':len(R),'phase_counts':{str(k):v for k,v in collections.Counter(counts).items()},'no_live_edits':True,'not_a_gate_or_new_proof_review':True},indent=2))
