import datetime, hashlib, json, pathlib

run='physics-non-fluid-129-2026-10-21-r2'
root=pathlib.Path('.')
state_dir=root/'.physics-autopilot'/run
state=json.loads((state_dir/'state.json').read_text())
assert not (state_dir/'controller.lock').exists()
assert all(d.get('endedAt') for d in state['dispatches'].values())
sha=lambda b:hashlib.sha256(b).hexdigest()
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
base=root/'research'/(run+'-owner-step3-root-adoption')
out=base/'scientific-owner-resolutions'
assert not out.exists()

# Each entry binds an actual completed same-owner scientific repair and consumer
# review. Current carrier certification and the native gate battery remain owed.
issues=[
 ('57','thm-nrqmx-finite-mode-bogoliubov',['reader:57:1','refuter:57:1'],
  'bogoliubov52/report.json','bogoliubov-ordering',True,
  'Explicit Pi permutation, grouped R_g/J_0 and W_g(w)=W(Pi^T w), with consistent interleaved covariance. The full vacuum/annihilation/symplectic conclusions remain. Same-owner complete current twelve-consumer use review and focused Gaussian F4 correction are recorded; root read the complete repaired supplier.'),
 ('58','thm-qftx-wavefront-product',['reader:58:8','refuter:58:8'],
  'qft58-global-calculus/report.json','global-pullback',True,
  'The new same-pair global microlocal pullback lemma proves controlled approximation, compact conic separation, all-chart estimates, cutoff independence, coordinate covariance and finite gluing. Root read both complete new helper arguments and the exact mechanical numbering successors. Same-owner full seventeen-existing-consumer review is retained; public Statements are unchanged.'),
 ('58','prop-qftx-hadamard-wick-change',['touched:58:prop-qftx-hadamard-wick-change'],
  'qft58-global-calculus/report.json','wick-compatibility',False,
  'The new matching-compatibility lemma proves simultaneous finite-family products, original-slot controlled regularizations, admissible partial pushforwards, order independence and output microcausality for singular cross edges and smooth self edges. No singular self-contraction is asserted. Root read the complete arguments and requested the actual empty-family and slot-preserving corrections; same-owner current consumer uses were checked.'),
 ('64','thm-qftx-positive-unbounded-spectral-calculus',['reader:64:1','refuter:64:1'],
  'qft59-adjoint/decision.json','adjoint-criterion',False,
  'F6 now gives the exact existing unbounded-adjoint definition; Proof1.1 proves the ambient-norm boundedness and representing-vector criterion in both required directions. The exact definition is declared directly in source metadata. Statement unchanged; actual direct heavy-Gaussian use checked by the same scientific owner. No full audit of all six indirect consumer proofs is claimed.'),
 ('65','lem-qftx-local-polynomial-functionals-are-microcausal',['reader:65:2','refuter:65:2'],
  'qft60-all-chart/decision.json','all-chart-microcausality',True,
  'The complete choice-free arbitrary-chart proof supplies density Jacobians, finite chain/Leibniz amplitudes, uniform nonstationary phase, explicit repeated-integration-by-parts bounds and intrinsic diagonal conormal transport. Root read the complete final five-step proof; public Statement and dependencies are unchanged. Same-owner thirteen-consumer actual-use checks and their reading limits are retained.'),
 ('91','def-csm-frontier-finite-generator-chain',['reader:91:1','refuter:91:1'],
  'csm-generator89-context/application-receipt.json','generator-justification',False,
  'Source now declares justified_by for the actual existence lemma, with no cyclic reverse deps edge. Its universal existence citation is explicitly conditional on the supplier Axiom of Choice, while supplied realization syntax and the q=0 finite atomic branch remain separate. Root applied the declared metadata; same-owner all seven final consumer checks found no further source repair.'),
 ('121','post-tgrx-free-collapse-scattering',['reader:121:1','refuter:121:1'],
  'tgr120-outgoing/final-consumer-join.json','outgoing-packet-interface',False,
  'The repaired Postulate specifies a compatible common unital star algebra/state, conjugate-linear outgoing packet maps, tau_s f=e^(i omega s)f, reversed B pairing, exact smeared passive operator equalities and delta normalization. The retained fixed-band norm premise has its exact number-form stationarity consequence stated. The optional Fock/Bogoliubov witness concerns comparison-sector consistency only. Root read the complete source proposal, local calculations and exact published Fock suppliers; same-owner final eleven-consumer join, including changed batch129 carriers actually reread after completion, needs no source repair.'),
]

ledger_path=root/'research/defect-ledger.jsonl'
ledger_before=ledger_path.read_bytes()
ledger=[json.loads(l) for l in ledger_before.splitlines() if l.strip()]
existing_ids={r['defect_id'] for r in ledger}
documents={}
pending_rows=[]
changes=[]
evidence_guards=[]

for batch,subject,obligations,report_suffix,label,share,reason in issues:
 source=root/'items'/(subject+'.md')
 evidence=root/'research'/(run+'-owner-step3-'+report_suffix)
 assert evidence.exists(),str(evidence)
 evidence_guards.append({'path':str(evidence),'sha256':sha(evidence.read_bytes())})
 path=root/'research'/(run+'-alpha-batch-'+batch+'-3a-decisions.json')
 if path not in documents:documents[path]=[path.read_bytes(),json.loads(path.read_text())]
 doc=documents[path][1]
 scope=json.loads((root/'research'/(run+'-step3-scope-'+batch+'.json')).read_text())
 targets={x['obligation']:x for k in ['reader_findings','refuter_findings'] for x in scope.get(k,[])}
 primary_id=None
 for index,obligation in enumerate(obligations):
  decision=next(d for d in doc['decisions'] if d['obligation']==obligation)
  assert decision['id']==subject and decision['verdict']=='escalated'
  target=targets.get(obligation)
  # Preserve exact independent observation versions. Share only where the native
  # ordinary same-finding predicate can authenticate the identical carrier.
  if share and index:
   primary=targets[obligations[0]]
   assert primary['defect']==target['defect'] and primary['observed_sha256']==target['observed_sha256']
   defect_id=primary_id
  else:
   suffix='' if share or len(obligations)==1 else '-'+obligation.split(':')[0]
   defect_id=run+'-owner-3a-b'+batch+'-'+label+suffix
   assert defect_id not in existing_ids
   severity='fatal' if batch in ['57','58','64','65'] else target.get('severity','fatal')
   row={'defect_id':defect_id,'run':run,'at':now,'batch':batch,'group':'batch-'+batch,
        'subject':subject,'class':'accuracy','subclass':target.get('defect','invalid-inference') if target else 'invalid-inference',
        'severity':severity,'location':'frontmatter' if batch=='91' else 'statement' if batch in ['57','121'] else 'proof-step',
        'caught_at_stage':'3a-adjudicate','caught_by_role':'owner','disposition':'fixed','repair_confidence':1,
        'correction':reason,
        'evidence':[{'path':str(evidence),'note':'Actual same-owner scientific repair and consumer review; original source-reading limits retained.'},
                    {'path':str(source),'note':'Current source raw '+sha(source.read_bytes())+'. Root metadata-only source successors preserve the reviewed scientific body.'},
                    {'path':str(path),'note':'Current owner disposition of '+obligation+'; original native decisions preserved in this transaction.'}],
        'adjudication_ref':[{'path':str(path),'obligation':o} for o in obligations] if share else [{'path':str(path),'obligation':obligation}]}
   if batch=='91' and index==0:row['supersedes']=[run+'-3a-b91-generator-justification-open']
   if batch=='121' and obligation.startswith('refuter:'):row['supersedes']=[run+'-3a-batch-121-outgoing-packet-open']
   if len(obligations)>1 and not share:
    row['evidence'].append({'path':'research/'+run+'-step3-scope-'+batch+'.json','note':'Two original independent observations bind different historical source/carrier fingerprints. Separate current closed observation rows preserve both; this does not claim two unrelated scientific defects.'})
   if 'supersedes' in row:assert all(x in existing_ids for x in row['supersedes'])
   pending_rows.append(row);existing_ids.add(defect_id)
   if share:primary_id=defect_id
  row=next(r for r in pending_rows if r['defect_id']==defect_id)
  decision['route']='touched' if obligation.startswith('touched:') else 'reader' if obligation.startswith('reader:') else 'flagged'
  decision['verdict']='amended_repair' if obligation.startswith('touched:') else 'confirmed_fatal' if row['severity']=='fatal' else 'confirmed_nonfatal'
  decision['defect_ids']=[defect_id]
  decision['repair_confidence']=1
  decision['owner_resolution']='Root adopts the actual completed current-source scientific repair and same-owner consumer checks; native independent observations and original carrier history remain unchanged. Mechanical contract/readiness recertification and all native gate checks remain required.'
  decision['evidence']=reason+' Scientific evidence: '+str(evidence)+'. Current raw '+sha(source.read_bytes())+'. Original native adjudicator escalation is preserved in the root application archive. No independent native reread, gate success or whole-transitive audit is invented.'
  if share and index:
   decision['same_defect_as']=obligations[0]
   decision['same_defect_evidence']='The original taxonomy and observed carrier hashes are identical; the same actual supplier fault is corrected by the named same-owner repair, with both original severity/location reports preserved.'
  if 'required_owner_decision' in decision:decision['historical_required_owner_decision']=decision.pop('required_owner_decision')
  if decision.get('risk_review',{}).get('status')=='open':
   decision['prior_native_risk_review']=decision['risk_review']
   decision['risk_review']={'status':'complete','reviewer':'/root adopting named scientific owner','notes':reason+' Remaining mechanical certification and native gates are not asserted by this source disposition.'}
  changes.append({'obligation':obligation,'subject':subject,'verdict':decision['verdict'],'defect_id':defect_id})

assert len(changes)==13 and len(pending_rows)==10
out.mkdir(parents=True)
(out/'defect-ledger.before.jsonl').write_bytes(ledger_before)
for path,(before,doc) in documents.items():(out/path.name).write_bytes(before)
for path,(before,doc) in documents.items():assert path.read_bytes()==before
assert ledger_path.read_bytes()==ledger_before
with ledger_path.open('ab') as f:f.write(('\n'.join(json.dumps(row,separators=(',',':')) for row in pending_rows)+'\n').encode())
for path,(before,doc) in documents.items():path.write_text(json.dumps(doc,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'at':now,'run':run,'changes':changes,
 'new_closed_rows':[r['defect_id'] for r in pending_rows],'evidence_guards':evidence_guards,
 'source_edits':False,'independent_review_invented':False,'native_gate_success':False,
 'ledger_before_sha256':sha(ledger_before),'ledger_after_sha256':sha(ledger_path.read_bytes()),
 'qualification':'Root current-source scientific resolutions only. Exact current contract/readiness preparation, creation certification and all native gates remain required. Original independent observations and superseded open rows remain historical evidence.'},indent=2)+'\n')
print('Resolved13 actual scientific owner holds;10 closed observation rows, all original histories preserved')
