from pathlib import Path
import hashlib,json,datetime
root=Path('.')
p=Path('research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1/parallel-degree-norm')
r='frontier-44-special-representation-examples-28'
def sha(s):return hashlib.sha256(s.encode()).hexdigest()
def guard(path):return {'path':str(path),'sha256':hashlib.sha256(Path(path).read_bytes()).hexdigest()}
def collect(x,out):
 if isinstance(x,dict):
  if x.get('id'):out[x['id']]=x
  for v in x.values():collect(v,out)
 elif isinstance(x,list):
  for v in x:collect(v,out)
oldp=Path(f'research/{r}-owner-cyclotomic-native11-consumer-escalations/native11-round2-b1-proof-only-candidate.pages.json')
finalp=Path(f'research/{r}-owner-cyclotomic-native11-consumer-escalations/final-round2-actual-afterbinding-sufficiency.json')
a={};b={};collect(json.loads(oldp.read_text()),a);collect(json.loads(Path(f'research/{r}-batch-11.pages.json').read_text()),b)
final=json.loads(finalp.read_text());assert guard(oldp)['sha256']==final['native11']['sha256']
suppliers=[]
for id in ['thm-cyclotomic-klr-induction-is-projective-on-the-right','thm-cyclotomic-klr-sl-two-categorical-commutator','lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action']:
 assert a[id]['statement']==b[id]['statement'] and a[id]['strategy']==b[id]['strategy']
 assert set(a[id]['deps'])==set(b[id]['deps'])
 src=Path('items/'+id+'.md');text=src.read_text();proof=text.split('\n## Proof\n',1)[1]
 (p/(id+'.authentic-approved-prototype.json')).write_text(json.dumps(a[id],indent=2)+'\n')
 (p/(id+'.author-before.md')).write_text(text)
 suppliers.append({'id':id,'canonical_guard':guard(src),'canonical_proof_raw_sha256':sha(proof),'old_statement_sha256':sha(a[id]['statement']),'old_strategy_sha256':sha(a[id]['strategy']),'old_current_statement_strategy_equal':True,'deps_equal_as_sets':True,'final2_subject_verdict':next(s['verdict'] for s in final['subjects'] if s['id']==id)})
id='thm-cyclotomic-klr-induction-is-projective-on-the-right';text=Path('items/'+id+'.md').read_text()
clauses=[]
for prefix in ['[F3]','2.1 The monic comparison','3.1 Projectivity']:
 start=text.index(prefix);end=text.find('\n\n',start);clause=text[start:end]
 clauses.append({'clause':clause,'sha256':sha(clause)})
report={'version':1,'run':r,'reviewer':'/root/repair_klr_global_basis','helper':'/root/construct_degree_norm','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'authority':'Construction draft only; no native/canonical/origin/record/control/gate/cap writes','degree':{'id':'lem-degree-and-codegree-of-standard-tableaux','proposal':guard(p/'lem-degree-and-codegree-of-standard-tableaux.proposed.md'),'statement_equal_canonical':True,'proof_restores':'Empty signed corner vector u0, Cartan column u(j+1)-2uj+u(j-1), same-residue above/below splitting, full defect and degree/codegree recurrence, detailed plateau cancellation for full e-brick','supplier_hold':{'id':'def-cyclic-affine-type-a-cartan-datum','required':'(Lambda0,alpha_i)=delta_i0','actual':'Current step4.1 extends with (Q,Lambda0)=0 and Remarks explicitly repeats orthogonality','counter_disposition':'Root/original supplier owner must classify and reconcile; helper claims no accepted repair or additional old-gap round'},'checks':{'precheck':'node tools/tsx-run.mjs tools/precheck.mts <proposal> --json:1 checked,0 failing,pass','rendercheck':'node tools/rendercheck.mjs <proposal> --json:1 checked,0 errors,0 warnings','proof_layout':'node tools/proof-layout.mjs <proposal>:1 item,6 steps,0 defects','meaning':'Mechanical local checks only; supplier hold remains'}},'norm':{'id':'lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension','decision':'HOLD_EXACT_SUPPLIER_AUTHOR_BINDINGS_NO_HELPER_MATH_PATCH','full_scope_retained':'Every field, finite cyclic e>=2 including double edge, every standard homogeneous dominant cyclotomic weight, admissible graded parameters; no highest/global-basis isometry, Hecke-basis or Frobenius input','old_native11_history':{'final2':guard(finalp),'authenticated_accepted_prototype':guard(oldp),'exact_native11_raw_hash_matches_final2':True,'round':2,'maximum':2,'remaining_repairs':0,'current_batch11_raw_changed':True,'consumed_statement_strategy_matches_accepted_prototype':True,'note':'Current batch11 differs from sealed old carrier, but the three used objects differ only by dependency-array order and have identical Statement/strategy and equal dependency sets'},'suppliers':suppliers,'exact_current_author_seam':{'id':id,'clauses':clauses,'accepted_strategy_excerpt':a[id]['strategy'],'differences':['Approved target M=coker P=Be is replaced in current step3.1 by K0, while K0 is an A[t]-projective comparison module and cannot be the appended-dot-annihilated quotient target','Approved proof explicitly establishes P_r/fP_r A-projective by monic division before using a splitting pf=1; current F3 and step3.1 simply assert such a splitting from an annihilator','Current step2.1 infers K0/K1 are cyclic presented by monic polynomial relations from injectivity of P, which is not the accepted quotient-projectivity route'],'disposition':'Authenticated current author regression relative to final2 accepted prototype; original reviewer/root owns any restoration of that approved argument; no independent new solution or closure claimed'},'other_suppliers':'Current sl-two proof4.1 says equal-colour mixed maps have distinct endpoint idempotents; accepted strategy says unequal-color maps, consistent with the actual norm unequal-color use at v1; normalized proof3.1 incorrectly retains q^-b_ij after saying normalization cancels it, but its v1 use is still unaffected; full supplier closure remains reviewer-owned'},'after_guards':[]}
canonical=Path('items/lem-degree-and-codegree-of-standard-tableaux.md').read_text();draft=(p/'lem-degree-and-codegree-of-standard-tableaux.proposed.md').read_text()
assert canonical.split('\n## Statement\n')[1].split('\n## Facts & Assumptions\n')[0]==draft.split('\n## Statement\n')[1].split('\n## Facts & Assumptions\n')[0]
for row in json.loads((p/'input-guards.json').read_text()):
 current=guard(row['path']);report['after_guards'].append({**current,'unchanged':current['sha256']==row['sha256']})
(p/'handoff.json').write_text(json.dumps(report,indent=2)+'\n')
print('Handoff persisted; all initial guards unchanged:',all(x['unchanged'] for x in report['after_guards']))
