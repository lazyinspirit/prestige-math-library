import json,pathlib,copy,hashlib,datetime
B=pathlib.Path('research/frontier-43-complex-representation-15-step8-owner-f-proposal');P=json.load(open(B/'proposal.json'));RUN=P['run'];checks=[]
def record(check,passed,detail=''):
 checks.append({'check':check,'passed':passed,'detail':detail});assert passed,(check,detail)
for g in P['input_guards']:
 record('current input guard '+g['path'],hashlib.sha256(pathlib.Path(g['path']).read_bytes()).hexdigest()==g['raw_sha256'])
original=json.load(open(B/'before'/f'{RUN}-alpha-f-scope-decisions.json'));proposed=json.load(open(B/'proposed'/f'{RUN}-alpha-f-scope-decisions.json'))
record('all six owner rows assessed',set(r['decline_id'] for r in original['decisions'] if r['decision']=='owner-decision')==set(p['prior_decline_id'] for p in P['coverage_patches']))
record('all untouched original decisions preserved exactly',all(r in proposed['decisions'] for r in original['decisions'] if r['decision']=='stands'))
record('all proposed declines have stands with resolved evidence',all(r['decision']=='stands' and r['evidence'].strip() for r in proposed['decisions']))
for n in [6,7]:
 reconstructed=json.load(open(B/'before'/f'{RUN}-batch-{n}.coverage.json'))
 for patch in P['coverage_patches']:
  if int(patch['before_decision']['batch'])!=n:continue
  for p in reconstructed['pages']:
   for s in p['sources']:
    if p['page']==patch['selector']['page'] and s['url']==patch['selector']['source_url']:
     at=next(i for i,c in enumerate(s['contents']) if c==patch['before']);s['contents'][at:at+1]=patch['after_rows']
 record('only six exact original coverage members changed, batch '+str(n),reconstructed==json.load(open(B/'proposed'/f'{RUN}-batch-{n}.coverage.json')))
 record('manifest unchanged, batch '+str(n),(B/'before'/f'{RUN}-batch-{n}.pages.json').read_bytes()==(B/'proposed'/f'{RUN}-batch-{n}.pages.json').read_bytes())
for r in json.load(open(B/'source-evidence/source-cache-binding.json')):record('source text exact extraction binding '+r['read_text'],r['fitz_page_newline_join_exact_match'])
review=[
 {'row':'04024288','review':'Re-read generic divided-power formulas, source order and current triangular-decomposition dependencies. The braid/root-vector route is optional here; explicit uncommissioned future disposition resolves the sentinel. No integral/crystal supplier is invented.','focused_correction':'None needed after review.'},
 {'row':'747fc77d','review':'Compared separate source highest-weight and HC theorem statements with complete QG-2 inventory. Split preserves future highest-weight theory and holds HC separately; neither section is advertised as fully delivered. Current rank-one case remains present.','focused_correction':'None needed after review.'},
 {'row':'9cbeedc9','review':'Independently checked the ordinary/divided basis conversion: u_t=[t]_i!v_t gives E_i u_t=[t]_i[N-t+1]_i u_(t-1) and K_i u_t=q_i^(N-2t)u_t. Explicit theorem parameter is N≥0. Source has all integer m and a reverse PBW instruction; their separate residual metadata prevents a false full-delivery claim.','focused_correction':'First proposal already separates negative m and the unused alternative PBW proof; no proof edit or new item needed.'},
 {'row':'aa2f224e','review':'Re-read §§12.2.2–12.2.4. The new locator excludes only root-of-unity and coordinate-duality results. Current Hopf theorem is already proved in a different fixed inverse-torus convention. Source coordinate proof uses relations/matrix coefficients, with no q-scheme supplier.','focused_correction':'None needed after review.'},
 {'row':'efcd565c','review':'Re-read R and Schur–Weyl statements and their preceding arguments; checked beginning of §13.3. Crystal operators are later and unused in that source route. QG-5 quasi-R operator and QG-6 wedge relation are not the universal finite-type R or Schur–Weyl theorem.','focused_correction':'None needed after review.'},
 {'row':'a0787ad8','review':'Re-read complete §6.8 and exact current positive equal-weight convention. Negative weights are outside this inventory, and KL-8 is a degenerate-Ariki theorem rather than an unequal-parameter home. Out-of-scope stays with false destination assertion removed.','focused_correction':'None needed after review.'}
]
receipt={'version':1,'run':RUN,'group':'f','reviewer':'step8_scope_owner_f','review_type':'same owner, separate evidence/guard review after proposal construction; not independent-agent or whole-item certification','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'ready-for-root-serial-integration','mathematical_rounds':1,'review':review,'checks':checks,'local_structural_check_files':[str(B/'structural-check.json'),str(B/'coverage-structural-check.json')],'consumer_impact':'No supplier Statement/Definition or proof is changed, so no downstream mathematical consumer repair is triggered by this metadata proposal. Current approved pair/claim inventories are unchanged.','native_controls':'No engine action, canonical mutation, source re-fetch or native gate was performed. Root owns integration and gates.'}
(B/'same-owner-review.json').write_text(json.dumps(receipt,indent=2,ensure_ascii=False)+'\n')
P['same_owner_review']=str(B/'same-owner-review.json');P['source_cache_binding']=str(B/'source-evidence/source-cache-binding.json');P['local_structural_checks']=[str(B/'structural-check.json'),str(B/'coverage-structural-check.json')];P['status']='ready-private-proposal-only-no-canonical-writes';(B/'proposal.json').write_text(json.dumps(P,indent=2,ensure_ascii=False)+'\n')
print('Separate same-owner review complete;',len(checks),'checks passed; six dispositions ready.')
