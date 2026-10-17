import json,re
from pathlib import Path
ROOT=Path.cwd();R='numerical-optimization-dynamics-2026-10-16';D=Path(__file__).parent
ids=['def-centered-taylor-model-with-derivative-interval','thm-centered-taylor-model-encloses-function-range']
reviewed=ids+['def-dyadic-floating-point-format-and-directed-rounding','def-intervals-rectangles-and-complex-balls','def-outward-rounded-interval-and-ball-operations','thm-outward-rounded-operations-are-isotone-and-dag-sound','lem-taylor-integral-remainder','alg-budgeted-validated-range-evaluation','thm-budgeted-range-evaluation-terminates-and-is-sound']
# Read-only literal public-ID inventory includes actual nonlogical uses.
refs=[]
for base in ['items','library']:
 for p in (ROOT/base).rglob('*.md'):
  for i,line in enumerate(p.read_text().splitlines(),1):
   for id in ids:
    if id in line:refs.append({'target':id,'file':str(p.relative_to(ROOT)),'line':i,'text':line})
metadata_refs=[]
for p in (ROOT/'research').glob(R+'-batch-*.proof-contracts.json'):
 x=json.load(open(p))
 for subject,c in x.get('contracts',{}).items():
  for i,cite in enumerate(c.get('citations',[])):
   if cite.get('source') in ids:metadata_refs.append({'file':str(p.relative_to(ROOT)),'subject':subject,'path':['contracts',subject,'citations',i],'supplier':cite['source']})
closure={'owner':'/root/num_step2_prox27, same focused repair owner for both changed public interfaces and all affected consumers','before_interfaces':{id:(D/'before/items'/f'{id}.md').read_text().split('## ',1)[1].split('\n## ',1)[0] for id in ids},'proposed_interfaces':{id:(D/'proposed/items'/f'{id}.md').read_text().split('## ',1)[1].split('\n## ',1)[0] for id in ids},'aliases':{'before':{id:[] for id in ids},'proposed':{id:[] for id in ids},'basis':'Neither target frontmatter declares aliases; IDs retained. No alias introduced.'},'all_literal_source_uses':refs,'all_current_run_citation_uses':metadata_refs,'consumer_dispositions':[
 {'subject':ids[1],'supplier':ids[0],'use':'Actual logical dependency and L1 Definition quote. Entire source read; proposed theorem explicitly proves exact analytic inclusion separately from finite computed success.','disposition':'focused repair included'},
 {'subject':ids[0],'supplier':ids[1],'use':'Frontmatter justified_by only; not a logical deps edge. Entire Definition read; proposed finite-success/status semantics align with the revised theorem.','disposition':'focused repair included; no dependency cycle created'},
 {'subject':'library/numerical-linear-algebra-and-approximation/outward-rounded-interval-and-ball-arithmetic.md','use':'Only owning A placement and descriptive Taylor-model paragraph. Entire page read; opening paragraph already says overflow and exhausted budgets return explicit non-finite statuses, and later text makes no unconditional fixed-format success guarantee.','disposition':'current page remains accurate; no source edit proposed'},
 {'subject':'alg-budgeted-validated-range-evaluation','use':'Entire Definition read because of nearby range-evaluation terminology. It calls the elementary evaluator, not this Taylor model, preserves every non-finite leaf status and certifies only a completed width-tested hull.','disposition':'false positive as an affected Taylor consumer; no target ID dependency/call or mathematical edit'},
 {'subject':'thm-budgeted-range-evaluation-terminates-and-is-sound','use':'Entire theorem read: finite-call termination and conditional certified hull, based on real/complex elementary range suppliers; no Taylor theorem use.','disposition':'no affected target dependency; no edit'}], 'further_hops':[],'further_hops_basis':'The only logical item consumer of the changed Definition is the repaired theorem. No other item cites the changed theorem ID, and the only reverse target use is the Definition justified_by. Whole items/library public-ID and generic centered-Taylor phrase inventory supplies the nonlogical page use; no external item consumer or higher-hop changed interface found.'}
(D/'consumer-closure.json').write_text(json.dumps(closure,indent=2,ensure_ascii=False)+'\n')
# Save genuine exact input artifacts and current Luna rows; never generate hashes.
for id in reviewed:
 p=Path('items')/(id+'.md');q=D/'before'/p;q.parent.mkdir(parents=True,exist_ok=True)
 if not q.exists():q.write_bytes(p.read_bytes())
page=Path('library/numerical-linear-algebra-and-approximation/outward-rounded-interval-and-ball-arithmetic.md');q=D/'before'/page;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(page.read_bytes())
for p in [Path('research')/(R+'-batch-14-step5-context.json'),Path('research')/(R+'-judge.jsonl'),Path('research')/(R+'-judge-attempts.jsonl')]:
 rows=[json.loads(s) for s in p.read_text().splitlines() if s.strip()] if p.suffix=='.jsonl' else None
 if rows is None:
  q=D/'before'/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(p.read_bytes())
 else:
  selected=[row for row in rows if row.get('id',row.get('item')) in reviewed];(D/(p.stem+'-current-reviewed-subset.json')).write_text(json.dumps(selected,indent=2,ensure_ascii=False)+'\n')
judge=json.load(open(D/(R+'-judge-current-reviewed-subset.json')));attempts=json.load(open(D/(R+'-judge-attempts-current-reviewed-subset.json')))
statuses=[]
for id in reviewed:
 rows=[r for r in judge if r.get('id')==id];ats=[r for r in attempts if r.get('id')==id]
 statuses.append({'id':id,'actual_latest_luna':rows[-1] if rows else None,'actual_attempt_rows':ats,'currency':'Existing native observation on frozen before-source; no proposed-source judgment is asserted. No hash computed by this task.'})
(D/'current-luna-status.json').write_text(json.dumps(statuses,indent=2,ensure_ascii=False)+'\n')
(D/'confirmed-counterexample.json').write_text(json.dumps({'basis':'Independent exact arithmetic derivation from the actual Definition/status interfaces; no fixture execution or check run.','format':{'p':2,'emin':0,'emax':2,'Nmax':'(2^2-1)*2^(2-2+1)=6','nonnegative_finite_values':['0','1/2','1','3/2','2','3','4','6']},'analytic_data':{'f':'f(t)=6t on R','X':'[0,2]','c':0,'n':1,'C0':'[0,0]','C1':'[6,6]','D':'[0,0]','M':0,'R':2,'remainder_radius':0},'required_polynomial_product':'[6,6]*[0,2] has exact corner products0,12; its upper endpoint12 exceedsNmax6.','actual_status':'overflow with outward extended endpoints; not a finite interval and not a finite Taylor certificate.','exact_analytic_range':'f(X)=[0,12], and exact analytic E1=[0,12].','force':'No finite interval with endpoints in this selected format can contain12, so no finite-result fallback may be asserted for these data.','original_defect':'The unconditional T_n inclusion and FactsL3 omit the all-required-operations-finite premise of the actual DAG theorem; analytic Taylor remainder remains sound.','proposed_resolution':'Retain unconditional exact analytic E_n inclusion; certify finite computed T_n only on the actual finite-success branch; propagate failures.'},indent=2)+'\n')
(D/'future-invalidation-obligations.json').write_text(json.dumps({'source_targets':ids,'native_history':'Preserve original Luna rows, attempt records, Alpha risk_review and source locators unchanged as history; no new external reading or native acceptance claimed.','required_after_source_application':['Root refresh exact changed Definition/Statement quotes and complete proof-input/use mirrors from future-mirror-operations.json.','Root/native Step5 integrate the actual accepted source correction and full current consumer evidence; do not treat old Alpha risk notes as reading the new interfaces.','Root rebind any invalidated reviewed boundary item/row evidence and carrier hashes; this packet writes no hashes.','Root owns the native fresh checking/judging/gates as required by the actual stage; no proposed-source Luna result is fabricated.'],'not_proposed':['No canonical metadata application','No original risk_review replacement','No ledger write','No new dependency/page/item or reading locator','No original native report/result rewrite']},indent=2)+'\n')
(D/'completion.json').write_text(json.dumps({'status':'exact-research-proposal-ready-unapplied','run':R,'cycle':'First distinct current concern, cycle1 research preparation','confirmed_concern':'The current fixed-format computed Taylor certificate claim omits its finite-success hypothesis; explicit overflow witness is admissible.','source_carriers':ids,'future_mirror_operations':len(json.load(open(D/'future-mirror-operations.json'))),'current_luna_primary':{s['id']:s['actual_latest_luna'] for s in statuses if s['id'] in ids},'full_focused_consumer_closure':'Complete old/proposed public-ID/alias/nonlogical use inventory and actual consumer dispositions in consumer-closure.json. No external item consumer found.','unresolved_mathematical_obligations':[],'canonical_writes':0,'hashes_computed':0,'checks_or_tests_or_gates':0,'dispatches':0,'no_proposed_source_acceptance_claim':True},indent=2,ensure_ascii=False)+'\n')
print('Saved actual Luna subset, exact counterexample, full focused consumer inventory and future obligations; no native/canonical changes.')
