import pathlib,json,hashlib,copy,datetime
out=pathlib.Path('research/hopf-hecke-unfinished-15-2026-10-15-owner/step2-gate-escalation/contracts-1-5');sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();m=json.load(open(out/'patch-manifest.json'));guards=json.load(open(out/'source-read-guards.json'))
def apply(doc,ops):
 d=copy.deepcopy(doc)
 for op in ops:
  bits=[x.replace('~1','/').replace('~0','~')for x in op['path'].split('/')[1:]];a=d
  for x in bits[:-1]:a=a[int(x)]if isinstance(a,list)else a[x]
  k=bits[-1];i=int(k)if isinstance(a,list)and k!='-'else k
  if op['op']=='test':assert a[i]==op['value'],op['path']
  elif op['op']=='replace':a[i]=copy.deepcopy(op['value'])
  elif op['op']=='remove':a.pop(i)
  elif op['op']=='add':
   if isinstance(a,list):a.append(copy.deepcopy(op['value']))if k=='-'else a.insert(i,copy.deepcopy(op['value']))
   else:a[i]=copy.deepcopy(op['value'])
 return d
proofops=0;cas=[]
for p in m['proposals']:
 ops=json.load(open(p['operations_file']));archived=json.load(open(p['before_file']));projection=json.load(open(p['local_validation_projection']));assert apply(archived,ops)==projection
 live=json.load(open(p['target']));result=apply(live,ops)
 for op in ops:assert op['path'].startswith('/contracts/')and any('/'+k+'/'in op['path']for k in ['citations','derivations','routine_steps'])
 for id,e in live['contracts'].items():
  for k,v in e.items():
   if k not in ['citations','derivations','routine_steps']:assert result['contracts'][id].get(k)==v,(id,k)
 for id in projection['contracts']:
  for k in ['citations','derivations','routine_steps']:assert result['contracts'][id].get(k)==projection['contracts'][id].get(k),(id,k)
 cas.append(dict(target=p['target'],current_raw_sha256=sha(p['target']),archival_whole_file_hash_matches=sha(p['target'])==p['before_raw_sha256'],all_owned_tests_apply=True,protected_current_fields_unchanged=True));proofops+=len(ops)
c=m['coverage_proposal'];assert apply(json.load(open(c['target'])),json.load(open(c['operations_file'])))==json.load(open(c['local_validation_projection']))
for g in guards:assert sha(g['path'])==g['raw_sha256'],g['path']
boundary=[]
for b in range(1,6):
 rec=json.load(open(out/f'local-check-{b}.json'));assert not rec['non_boundary_finite_errors'];boundary+=rec['result']['errors']
e=dict(version=1,run=m['run'],cycle=1,kind='focused-current-proof-contract-reconciliation',subjects=14,proof_contract_operations=proofops,coverage_operations=4,live_cas=cas,source_guards_current=len(guards),protected_fields='No operation touches boundaries, finite_smoke, finite_checks, scope, status, provenance, verification, source items/pages, or native evidence. Complete local projections are validation conveniences only, never whole-contract integration replacements.',concurrent_boundary_integration='Root subsequently integrated boundary-only rows in batches1–4. Archival raw hashes legitimately differ; every granular nonboundary test still applies to actual current files and preserves all current boundary/finite fields exactly.',reading_evidence='Current14 complete proof bodies were read in their supplier/use order. citation-clauses-to-review.json records18 actual source clauses from11 suppliers, covering induced tensor maps, free-basis extension, typed coalgebra axioms, quotient cosets/laws, AC complement, finite span/basis/dimension, independent-set size bound and group-like/primitive definition. Existing matching exact source quotes are retained and rebound to their actual current Fact labels/use steps. proof-reading-map.json gives the exact current fact/source/step mapping; source-preimages retains complete current bytes with source-read-guards.',substantive_reconciliations=[
'Comatrix and quotient examples now use actual induced tensor maps/free basis extension. The coideal quotient example constructs its one-dimensional coalgebra directly; its obsolete bundled AC quotient-theorem citation is removed.',
'Fundamental coalgebra theorem retains actual finite/zero branch and arbitrary-dimensional AC separation, tensor injection/kernel, quotient transport and finite-sum premises. F13 is the exact free-basis extension used for coefficient coalgebra map.',
'Comodule correspondence now proves separation explicitly in1.3 by AC complement of a finite coefficient span;1.4 and4.1 give full finite-C correspondence without Choice. Unique representers define coaction in2.1 without extra arbitrary selections; coassociativity3.2 contracts twice and morphisms3.3 once. The coverage2 alternative records these exact suppliers and proof phases.',
'Finite-duality and concrete dimension examples add actual finite-basis/no-finite-basis clauses; no infinite-dimensional full-dual coproduct or topology assumption is imported.',
'Group/polynomial construction now maps primitive x and characteristic-p x^p via F12, new source steps and actual phase order, preserving finite-group-only full function algebra and all-characteristic polynomial claims.',
'Involutive antipode branches now map1.1/2.1/3.1; tensor-Hopf counit has an explicit4.1 derivation and exact F1/F2 uses.',
'Module coherence converse1.5/1.7 uses actual F1/F2/F3/F6 unit-tensor calculations. Root removed unused F8 Fact only; its dependency metadata remains. No false F8 proof use is fabricated.'
],local_checks='All14 selected failed subjects have zero citation/derivation errors. Batches1/3/4/5 strict local checks pass. Saved batch2 check retains only4 boundary-reference errors assigned elsewhere, plus original nonfatal shotgun advisory; root has since integrated its boundary corrections. Exact coverage2 local check passes27harvests/0errors/0warnings. These are local proposal checks, not native gates or review verdicts.',reserved_original_boundary_errors=boundary,coverage_history='Only exact alternative argument and deps change. All source-resolution status, recovery attempts, fetch stamps and original source reading history remain genuine and unchanged.',unresolved_focused_mathematical_gaps=[])
(out/'reconciliation-evidence.json').write_text(json.dumps(e,indent=2)+'\n')
for rel in ['owner-format/mechanical-step-references.json','owner-format/unused-bialgebra-fact.json']:
 p=out.parent/rel
 if p.exists():m.setdefault('root_mechanical_source_evidence',[]).append(dict(path=str(p),raw_sha256=sha(p)))
m['source_guards_sha256']=sha(out/'source-read-guards.json');m['final_nonboundary_cas_observation']=cas;(out/'patch-manifest.json').write_text(json.dumps(m,indent=2)+'\n')
files=[dict(path=str(p),sha256=sha(p),bytes=p.stat().st_size)for p in sorted(out.rglob('*'))if p.is_file()and p.name!='seal.json']
(out/'seal.json').write_text(json.dumps(dict(version=1,kind='sealed-granular-contract-coverage-proposal',run=m['run'],cycle=1,at=datetime.datetime.now(datetime.timezone.utc).isoformat(),all_source_guards_match=True,all_current_owned_json_tests_apply=True,protected_fields_unchanged=True,files=files),indent=2)+'\n')
print(json.dumps(dict(subjects=14,contract_operations=proofops,coverage_operations=4,source_guards=len(guards),current_owned_tests_apply=True,manifest_sha256=sha(out/'patch-manifest.json'),seal_sha256=sha(out/'seal.json')),indent=2))
