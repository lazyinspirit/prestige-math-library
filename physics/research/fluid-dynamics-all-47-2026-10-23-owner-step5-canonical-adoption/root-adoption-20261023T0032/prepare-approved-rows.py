import json,pathlib,hashlib,datetime
R=pathlib.Path('research'); run='fluid-dynamics-all-47-2026-10-23'; base=R/(run+'-owner-step5-canonical-adoption'); sec=R/(run+'-owner-step5-secondary-accounting'); out=base/'root-adoption-20261023T0032';out.mkdir(exist_ok=True)
load=lambda p:json.load(open(p)); sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest(); dump=lambda p,x:p.write_text(json.dumps(x,indent=2)+'\n')
a=load(base/'provisional-fixed-rows-final.json'); b=load(sec/'secondary-fixed-rows.json'); ledger=[json.loads(l) for l in (R/'defect-ledger.jsonl').read_text().splitlines() if l]; journal=[json.loads(l) for l in (R/(run+'-judge-adjudications.jsonl')).read_text().splitlines() if l]
key=lambda r:tuple(r.get(k) for k in ['id','model','context_sha256','item_sha256'])
owned={key(v) for r in ledger for v in r.get('adjudication_ref',[]) if isinstance(v,dict)}; known={r['defect_id'] for r in ledger}
assert len(a)==55 and len(b)==7
for r in a+b:
 assert r['defect_id'] not in known
 for e in r['evidence']:
  if e.get('sha256'):assert sha(e['path'])==e['sha256'],e
 for ref in r.get('adjudication_ref',[]):
  assert key(ref) not in owned
  assert any(key(x)==key(ref) and x['outcome'] in ['confirmed_fatal','confirmed_nonfatal'] for x in journal),ref
narrow={
'lem-fd-conformation-storage':('F10 cited transformation conclusions requiring a C2 motion absent from the C1 trajectory hypotheses. The stated covariance follows directly by chain/product differentiation from the given transformed fields.','Native final-adjudicator replaced the inapplicable supplier invocation with direct C1 covariance and observer-spin cancellation, preserving the Statement.'),
'lem-fd-finite-mode-compactness':('The proof zeroed the actual pointwise Fourier limit at exceptional times, which need not preserve coefficient convergence or Cw continuity.','Native final-adjudicator retained the actual Cw H-valued coefficient limit and separated its V-valued Bochner representative, proving the same bounds and strong convergence.'),
'rem-fd-compressible-stability-distinctions':('The unqualified periodic-grid conservation summary omitted the common width and common time-step ratio required for conservation of the unweighted sum.','Native final-adjudicator restored the exact uniform periodic mesh and common-ratio hypotheses and finite reindexing conservation argument.'),
'pthm-fd-no-slip-cfd-observations':('The adopted supplier has time-first fields while this theorem uses space-first physical fields without specifying their relationship.','Native final-adjudicator defined the explicit physical-field reindexing on the respective product domains, including the adopted weak extension, preserving all bounds.'),
 'thm-fd-stratified-linear-energy':('The ancillary claim that N>0 is necessary for positivity of 1/N^2 is false: N=-1 also gives the positive weight 1.','Native final-adjudicator corrected the necessity explanation while retaining the approved N>0 convention, equations, energy and identity.'),
'pthm-fd-cauchy-momentum-angular':('The broad local-balance supplier requires C1 thermodynamic fields and total-energy balance absent from this mechanical Statement; its narrowed F3 restatement was unlicensed.','Native final-adjudicator replaced that invocation with direct transport, divergence, continuous-residual localization and the alternating-symbol mechanical angular-momentum argument. No thermal premise was added.'),
'pthm-fd-energy-decomposition':('The Statement omitted the same-motion velocity premise. Static motion with steady shear can satisfy its material integral balances while violating the claimed local equations.','Native final-adjudicator added the explicit induced-velocity premise and used direct transport/divergence/localization, kinetic stress-work subtraction and potential/flux cancellation to retain the conclusions.')}
for r in a:
 r['attribution']='Root adopts the authentic completed initial native final-adjudication and its own repair review. No independent audit or current impact-source acceptance is claimed.'
 r['native_reported_description']=r['description']; r['native_reported_correction']=r['correction']
 if r['subject'] in narrow:
  r['description'],r['correction']=narrow[r['subject']]
  r['related_secondary_defect_ids']=[x['defect_id'] for x in b if x['subject']==r['subject']]
 else:r['correction']='Native final-adjudicator reported: '+r['correction']
for r in b:r['adoption_status']='Adopted by Root from actual completed initial native adjudication and repaired review; not an independent review.'
(R/'defect-ledger.jsonl').read_bytes();(out/'defect-ledger-before.jsonl').write_bytes((R/'defect-ledger.jsonl').read_bytes())
dump(out/'approved-rows.json',a+b)
dump(out/'root-adoption.json',{'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'primary_rows':55,'secondary_rows':7,'false_positive_originals_excluded':12,'exact_reference_owners_added':55,'root_compound_classification': 'Seven distinct secondary issues, Maxwellian F6 remains one truncated-restatement defect. Primary descriptions narrowed without changing native tuple ownership; full native descriptions retained as attributed evidence.','basis':'Actual native initial reports, completed frozen collection and source deltas examined during supervision. Current mathematical body guards checked separately; unchanged bodies do not create a new scientific review.','rows_sha256':sha(out/'approved-rows.json'),'ledger_before_sha256':sha(R/'defect-ledger.jsonl'),'native_review':False,'independent_audit':False,'gates_attempted':0})
print(out)
