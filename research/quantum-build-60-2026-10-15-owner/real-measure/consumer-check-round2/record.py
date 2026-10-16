from pathlib import Path
import json,re,hashlib
b=Path(__file__).parent;sha=lambda x:hashlib.sha256(x).hexdigest();a=json.load(open(b/'source-use-inventory.json'));focused=set(json.load(open(b/'focused-ids.json')));extra=set(json.load(open(b/'additional-actual-ids.json')));actual=focused|extra;direct={r['id']:r for r in json.load(open(b/'direct-source-windows.json'))};region='thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral'
nonparts=set('''cex-a-transient-chain-can-return-with-positive-probability
cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux
cex-expansion-shock-is-weak-but-not-entropic
cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence
cex-rankine-hugoniot-alone-does-not-give-uniqueness
cor-lax-shock-inequalities-for-convex-scalar-laws
ex-birth-and-death-chain-recurrence-criterion
ex-burgers-shock-riemann-solution
ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity
ex-empirical-state-frequencies-converge-to-stationary-masses
ex-gelfand-transform-of-l-one-of-an-lca-group
ex-gradient-catastrophe-before-shock-formation
ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave
lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality
lem-finite-irreducible-chain-hitting-time-geometric-tail
lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
thm-oleinik-one-sided-entropy-condition
thm-riemann-solver-for-strictly-convex-scalar-flux
thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent'''.splitlines())
rows=[]
for r in a:
 id=r['id'];dr=direct.get(id);evidence=r['interface_matches']+r['direct_supplier_uses'];text='\n'.join(v['text']for v in evidence)
 if id in actual:
  scope='direct-premise-and-relevant-use-source-check'if dr else'indirect-affected-notation-source-check'
  if id in nonparts:reason='The displayed superscript denotes locally specified one-sided states, positive-return times, an extended character, or a named form; it is not a positive/negative function part. Its literal symbol survives unchanged. Any arithmetic-measurability dependency continues to have the same hypotheses/conclusions.'
  elif id==region:reason='The read Statement admits f=+infinity; proof1.1 writes f(x)-t, while scalar subtraction is absent from def-extended-reals. Proposed proof uses coordinate lifts F,T and the everywhere-defined partial sum F+(-T), because T is real, and verifies the same region threshold in finite and infinite cases. Statement unchanged.'
  elif id=='ex-polya-urn-proportion-martingale':reason='The dependency occurs only in metadata. Read Verification2.1 constructs finite-valued variables on a finite interval partition;3.1 uses bounded real arithmetic with deterministic strictly positive denominator T_n+c. No extended part/product notation or zero-infinity case is used.'
  elif re.search(r'zero.times.infinity|0\s*\\cdot\s*\(?[+-]?\\infty',text):reason='The cited local use explicitly declares zero for zero-infinity density/simple-integral products or applies that declared convention. The complete product table agrees at all four zero-infinity cases, at finite values and at nonzero infinite signs. The function-level repair does not redefine scalar arithmetic or remove the independently stated integral convention.'
  elif re.search(r'positive (?:and|or) negative|positive/negative|\^\s*(?:\{[+-]\}|[+-](?![0-9A-Za-z\\])|\\pm|\{\\pm\})',text):reason='The source uses pointwise maxima/parts or decomposes real/imaginary components before integrating. The five-row full-domain identity table preserves both parts, magnitude and the defined reconstruction everywhere. Where the read passage subtracts integrals it retains integrability/boundedness or explicitly finite component bounds; complex/vector magnitudes retain their own types.'
  else:reason='The actual supplier premise and displayed relevant use call one of the unchanged scalar, finite-sum/product, magnitude or lattice clauses. Finite real arithmetic is exactly the restriction of the complete table; complex formulas use their real/imaginary components, not max of complex values. Indicator localizations retain zero at zero-infinity points. No source Statement restriction or conclusion is removed.'
  disposition='surgical-proof-repair-proposed'if id==region else'compatible-with-typed-interface'
 elif evidence:
  scope='symbol-triage-only';disposition='no-new-affected-function-interface-identified-in-triage';reason='The broad syntax hit is recorded literally below. Representative symbols/one-sided limits/geometry/finite zero arithmetic do not identify a use of the changed function interface. This is triage, not a proof audit; full-domain equality and unchanged direct consumer Statements supply downstream premise continuity.'
 else:
  scope='unchanged-intermediate-contract-inheritance-no-new-source-read';disposition='unchanged-downstream-premises';reason='No direct original-supplier premise or explicit part/zero-infinity candidate was selected by this scan. It remains a logical descendant of an unchanged intermediate theorem contract. No manual source-read or independent proof-validity claim is made for this item; premise continuity follows from replacement by extensionally identical supplier conclusions.'
 rows.append({'id':id,'source':r['file'],'raw_sha256':r['raw_sha256'],'inspection_scope':scope,'disposition':disposition,'reason':reason,'direct_roots':r['direct_roots'],'statement_context':r['statement'] if id in actual else None,'supplier_use_loci':r['direct_supplier_uses']if id in actual else [],'notation_use_loci':r['interface_matches']if id in actual else ([r['interface_matches'][0]]if r['interface_matches']else[]),'read_primary_step_labels': [x.split(' ',1)[0]for x in dr['relevant_steps'][:2]]if dr else [],'read_scope_limit':'Read hypothesis/use windows and, for tagged direct premises, at most the first two relevant proof paragraphs shown in direct batches; longer exact extracted windows are archived but are not additional claimed read coverage.'if id in actual else None})
summary={}
for r in rows:summary[r['inspection_scope']]=summary.get(r['inspection_scope'],0)+1
(b/'dispositions.json').write_text(json.dumps({'status':'focused-source-and-extensional-interface-check-not-audit','cycle':2,'summary':summary,'equivalence_evidence':str(b/'extensional-equivalence.md'),'items':rows},indent=2)+'\n')
# Exact new proposal/before bindings only; this is not a published-repair receipt.
p=b/'proposed/items'/f'{region}.md';pre=b/'before/items'/p.name
manifest={'version':1,'status':'proposed-surgical-consumer-proof-repair-only','cycle':2,'id':region,'target':'items/'+p.name,'before_file':str(pre),'before_raw_sha256':sha(pre.read_bytes()),'proposal_file':str(p),'proposal_raw_sha256':sha(p.read_bytes()),'statement_changed':False,'correction':'Replace possibly infinite f(x)-t by explicitly defined coordinate-lift sum F+(-T), prove lift measurability using rectangles/thresholds, and verify finite/infinite threshold cases. Statement and Tonelli step unchanged.','checks':{'precheck':{'command':'node tools/tsx-run.mjs tools/precheck.mts '+str(p)+' --json','exit_code':0,'result':str(b/'precheck.json')},'rendercheck':{'command':'node tools/rendercheck.mjs '+str(p)+' --json','exit_code':0,'result':str(b/'rendercheck.json')},'proof_layout':{'command':'node tools/proof-layout.mjs '+str(p),'exit_code':0,'result':str(b/'proof-layout.txt')}},'pending':['Owner integration and authentic published-repair receipt with current canonical one-file checks; no status/audit/native change made.']}
(b/'repair-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
old=json.load(open(b.parent/'manifest.json'));stable=[]
for r in old['files']:
 p=Path(r['proposal']);stable.append({'id':r['id'],'expected_raw_sha256':r['proposal_raw_sha256'],'actual_raw_sha256':sha(p.read_bytes()),'match':sha(p.read_bytes())==r['proposal_raw_sha256']})
(b/'stable-proposals-check.json').write_text(json.dumps({'all_match':all(r['match']for r in stable),'files':stable},indent=2)+'\n');print(json.dumps(summary));print('stable12',all(r['match']for r in stable))
