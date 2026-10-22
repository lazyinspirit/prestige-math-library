import json,hashlib,copy
from pathlib import Path
R='physics-non-fluid-129-2026-10-21-r2'
D=Path(f'research/{R}-owner-step3-qft-decision-ledger'); E=D/'evidence'
sha=lambda b:hashlib.sha256(b).hexdigest()
inputs={}
def bind(p):
 p=Path(p);b=p.read_bytes();inputs[str(p)]=sha(b);q=E/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b);return sha(b)
def load(p):bind(p);return json.loads(Path(p).read_text())
scopes={b:load(f'research/{R}-step3-scope-{b}.json') for b in [59,62,65,66,67,69,75,78,79,83]}
docs={b:load(f'research/{R}-alpha-batch-{b}-3a-decisions.json') for b in scopes}
for b in scopes:
 for s in [f'alpha-batch-{b}-3a.md',f'reader-findings-{b}.json',f'refute-{b}.json',f'step3-hash-{b}-pre.json',f'step3-hash-{b}-post.json']:
  p=Path(f'research/{R}-{s}')
  if p.exists():bind(p)
bind('tools/physics-support/step3-scope.mjs');bind('tools/physics-support/step3-owner-finding-alias.mjs')
ledger=Path('research/defect-ledger.jsonl'); bind(ledger)
rows={json.loads(l)['defect_id']:{'row':json.loads(l),'line_sha256':sha(l.encode())} for l in ledger.read_text().splitlines()}
def decision(b,o):return next(x for x in docs[b]['decisions'] if x['obligation']==o)
def finding(b,o):return next(x for k in ['reader_findings','refuter_findings'] for x in scopes[b][k] if x['obligation']==o)
patches=[]; supp=[]; proposedrows=[]
def patch(b,o,after,reason):
 old=decision(b,o);patches.append({'path':f'research/{R}-alpha-batch-{b}-3a-decisions.json','obligation':o,'before':copy.deepcopy(old),'set':after,'reason':reason})
pairs=[(59,6,1,'The same unspecified unit-quaternion/matrix identification and norm-preservation step. '),(59,3,2,'The same missing Schwartz topology in the Hermite continuity claim. '),(59,2,3,'The same ambient-Borel PVM domain omission, exposed by B=I and E_B({0}). '),(59,4,4,'The same missing finite joint Gaussian-law definition, distinct from the separately owned topology and characteristic-law defects. '),(59,5,7,'The same Teschl inversion/Plancherel locator fault. Preserve the different original severity labels; final verdicts agree and original observed carriers are identical. '),(79,1,1,'The same unsupported A-page requires entries, with the legitimate Stokes prerequisite retained. ')]
for b,a,z,why in pairs:
 po=f'reader:{b}:{a}';ao=f'refuter:{b}:{z}';pf=finding(b,po);af=finding(b,ao)
 assert pf['id']==af['id'] and pf['observed_sha256']==af['observed_sha256'] and pf['defect']==af['defect']
 assert decision(b,po)['verdict']==decision(b,ao)['verdict']
 evidence=why+f"Exact frozen findings share observed_sha256={pf['observed_sha256']}; both final decisions classify that same literal issue identically. No original finding, severity or observation is replaced."
 patch(b,ao,{'same_defect_as':po,'same_defect_evidence':evidence},evidence)
# Three distinct observation rows; explicitly count recurrence rather than fabricate independent faults.
for b,o,oldid,newid,reason in [
 (62,'refuter:62:1',f'{R}-3a-b62-eg-annular-attribution',f'{R}-owner-3a-b62-eg-annular-refuter-observation','Same literal omission on identical raw source, but frozen severity and snapshot differ; existing same-source alias schema cannot represent this pair. Separate observation row retains recurrence and nonfatal-recorded maintenance, pending the source completion proposed below.'),
 (65,'refuter:65:1',f'{R}-3a-batch-65-connection',f'{R}-owner-3a-b65-connection-refuter-observation','Same missing connection construction persisted across two genuinely different raw source versions. Existing alias schema requires equal raw source bytes. Current dimension-independent Koszul construction resolves both observations; this is not a second independent scientific defect.'),
 (67,'touched:67:lem-qftx-coherent-band-poisson',f'{R}-3a-b67-ptb-2',f'{R}-owner-3a-b67-ptb-reader-preimage','Touched reader repaired original pp1–2/Eqs1–8 locator to p2/Eq12, itself still inaccurate. Existing refuter67:2 row describes that post-reader fault. Preserve two actual observed citation versions, resolved by the same final p3 mean/following probabilities locator; touched and flagged routes cannot share a row.')]:
 base=copy.deepcopy(rows[oldid]['row']);base['defect_id']=newid;base.pop('at',None);base['recurrence_of']=oldid
 base['adjudication_ref']=[{'path':f'research/{R}-alpha-batch-{b}-3a-decisions.json','obligation':o}]
 base['observation_record_only']=True;base['correction']=reason
 base['evidence']=[{'path':str(D/'review.md'),'note':reason}]
 if b!=67:base['frozen_observation']=finding(b,o)
 else:
  p=f'research/{R}-owner-step2-baseline/items/lem-qftx-coherent-band-poisson.md';h=bind(p)
  assert h==json.loads(Path(f'research/{R}-step3-hash-67-pre.json').read_text())['hashes']['lem-qftx-coherent-band-poisson']['item_sha256']
  base['observed_raw_source']={'path':p,'sha256':h};base['location']='frontmatter';base['severity']='nonfatal';base['disposition']='fixed'
 proposedrows.append({'append_only':True,'row':base,'existing_row_guard':{'defect_id':oldid,'line_sha256':rows[oldid]['line_sha256']},'reason':reason})
 patch(b,o,{'defect_ids':[newid],'evidence':decision(b,o)['evidence']+' Owner observation-ownership clarification: '+reason},reason)
 # Alias keys must be removed from reassigned refuter decisions.
 if b in [62,65]:patches[-1]['remove']=['same_defect_as','same_defect_evidence','same_defect_receipt_sha256']
old=decision(69,'touched:69:def-qftx-euclidean-limit-data')
patch(69,old['obligation'],{'defect_ids':[f'{R}-3a-b69-growth-comparison'],'evidence':old['evidence']+' Ownership clarification: this touched obligation owns the genuine pre-reader growth-comparison repair only; finite-site omission is owned solely by refuter:69:1. Both actual repairs are retained.'},'Separate genuine growth-comparison and finite-site defects, avoiding incompatible touched/flagged double ownership.')
ids=['pnf129-r2-b66-3a-class-cardinality',f'{R}-3a-b69-seminorm-degree',f'{R}-3a-batch-75-square-index-endpoint',f'{R}-3a-batch-75-site-labels',f'{R}-3a-batch-78-descent-diagram',f'{R}-3a-batch-78-gluing-diagram',f'{R}-3a-batch-78-zero-worksheet',*[f'{R}-3a-b83-source-locator-{i}' for i in [1,2,3]]]
reasons=[
 'The original singleton-representative sentence is false: nonzero rescalings give distinct factor pairs. Current final Statement correctly gives one equivalence class, and proof3.1 establishes it. Current Ward/BCFW uses need only existence/determinant and remain compatible.',
 'Current step1.1 uses maximum total multi-index degrees, a nonempty basic-neighbourhood list and an actual D(f)=0 branch. These precisely fix the restricted-seminorm bound, including zero functionals; Statement unchanged.',
 'Current hypothesis explicitly imposes every square for1<=i<n. For n=2 old vacuous endpoint range allowed U1=I,q=1,delta=2 and noninvertible B1=0. Both current local consumers impose every square; no narrowed conclusion.',
 'Current diagram labels all four site-charge ends a, matching its Example datum; the former undefined X is removed. Range/kernel proof and physical qualifications unchanged.',
 'Both factor restriction arrows now land in the common boundary groupoid. The comparison from the global groupoid to the homotopy pullback is the proved equivalence; the diagram no longer labels a projection into the wrong object.',
 'Current gluing illustration is the typed restriction square, and its separate comparison-equivalence prose matches descent. Weighted push-pull proof and Statement unchanged.',
 'Current zero worksheet explicitly requires one vertex and no1-cells. A one-vertex circle has |G| flat labels, so the qualification is necessary; actual Definition/proof already counted flat assignments correctly.',
 'Current Fewster–Rejzner locator separates Definition24 §5.1 from Theorem26 proof §5.2. Native83 report explicitly records reading these exact passages; this proposal adopts that attributed citation repair, without claiming a fresh external retrieval.',
 'Current interface locator correctly identifies §5.2 Theorem26 proof and calls it Reeh–Schlieder; it does not attribute a general CPT theorem to that source. Native83 source reading remains attributed history.',
 'Current example locator names §§5.1–5.2 for the Fourier sign, spectrum and bounded-insertion analytic passage. The finite two-atom calculation is local; native83 recorded source reading is preserved, not invented anew.'
]
for did,reason in zip(ids,reasons):
 row=rows[did]['row'];b=int(row['batch']);assert row['subject'] in scopes[b]['manifest_post'];bind(f"items/{row['subject']}.md")
 supp.append({'path':f'research/{R}-alpha-batch-{b}-3a-decisions.json','append':{'obligation':'gate:'+did,'id':row['subject'],'route':'gate','verdict':'confirmed_fatal' if row['severity']=='fatal' else 'confirmed_nonfatal','defect_ids':[did],'evidence':'Supplemental ownership for an actual local risk-review discovery, not a frozen reader/refuter finding. '+reason+' See original native Alpha report and preserved closed ledger row; this supplement creates no new source acceptance stamp.'},'closed_ledger_line_sha256':rows[did]['line_sha256']})
# Additional current source binds, not a claim of re-reading every proof in this task.
fullread=['lem-qftx-spinor-factorization','lem-qftx-tempered-tensor-products','thm-qftx-tl-hecke-braid','ex-qftx-vacuum-channel-exchange','lem-qftx-finite-groupoid-gluing-descent','thm-qftx-finite-groupoid-gluing','def-qftx-finite-flat-connection-groupoid','thm-qftx-spectral-tube-holomorphy','def-qftx-cpt-spin-statistics-interface','ex-qftx-positive-frequency-tube','lem-qftx-coherent-band-poisson','def-qftx-wavefront-hadamard','lem-qftx-finite-graph-scaling-degree','lem-qft-test-frechet-uniform-scaling-order','prop-qftx-helicity-polarization-ward','thm-qftx-rational-bcfw-residue','prop-qftx-coxeter-specialization']
for id in fullread:bind(f'items/{id}.md')
for id in ['thm-qftx-scalar-eg-induction','def-qftx-scaling-cocycle','def-qftx-local-time-ordered-system','prop-qftx-anomaly-obstruction']:
 bind(f'items/{id}.md')
for b in [59,79]:
 for x in docs[b]['decisions']:
  p=Path(f"items/{x['id']}.md")
  if p.exists():bind(p)
bind(f'research/{R}-batch-78.proof-contracts.json');bind(f'research/{R}-reader-67.md')
bind(f'research/{R}-owner-step3-qft67-preimages/review.md')
bind(f'research/{R}-owner-step3-root-adoption/scope-current-diagnostic.stderr')
text=Path('items/thm-qftx-scalar-eg-induction.md').read_text()
old='The fixed-annulus Baire argument used in the graph supplier gives, for every real $\\omega<d$, a uniform annular estimate $C\\rho^{-\\omega}p_m$.'
assert text.count(old)==1
new=r'''Fix a compact annulus $K\subset\mathbb R^d\setminus\{0\}$ and a real $\omega<d$. On the complete fixed-support test space $\mathcal D_K$, put $L_\rho(\psi)=\rho^\omega(t_\Gamma)_\rho(\psi)$. Since $\operatorname{sd}_0(t_\Gamma)=-\infty$, for every $\omega$ there is a decay exponent $\eta<\omega$, so $L_\rho(\psi)\to0$ for each fixed $\psi$. On every compact scale interval $[\epsilon,1]$ the scaled tests vary continuously in one fixed-support test space, so $\sup_{0<\rho\le1}|L_\rho(\psi)|<\infty$. The closed sets $E_N=\{\psi:\sup_\rho|L_\rho(\psi)|\le N\}$ cover $\mathcal D_K$. Completeness and Baire under DC, supplied by the already assumed AC, give $\psi_0,m,a>0$ with $\psi_0+\{\zeta:p_m(\zeta)<a\}\subset E_N$ for some positive integer $N$. Subtraction gives $|L_\rho(\zeta)|\le2N$ there; scaling $\zeta=a\psi/(2p_m(\psi))$ yields $|L_\rho(\psi)|\le(4N/a)p_m(\psi)$ when $p_m(\psi)>0$, while $p_m(\psi)=0$ implies $\psi=0$. Hence $|(t_\Gamma)_\rho(\psi)|\le C\rho^{-\omega}p_m(\psi)$ uniformly. This is the fixed-annulus Baire proof, with the arbitrarily negative decay exponent replacing the finite-real-degree hypothesis. [A1, F12]'''
science={'status':'proposal_only_pending_root_source_release','subject':'thm-qftx-scalar-eg-induction','path':'items/thm-qftx-scalar-eg-induction.md','source_sha256':inputs['items/thm-qftx-scalar-eg-induction.md'],'exact_old':old,'exact_new':new,'add_fact':r'[F12] [[def-fixed-support-test-function-frechet-space]] gives the increasing derivative seminorms on $\mathcal D_K$; [[lem-fixed-support-test-function-spaces-are-complete]] makes it complete; [[thm-baire-category-for-complete-metric-spaces]] gives Baire under DC, supplied by [A1].','root_metadata_proposal':{'add_deps_roles_mathematical_premise':['def-fixed-support-test-function-frechet-space','lem-fixed-support-test-function-spaces-are-complete','thm-baire-category-for-complete-metric-spaces'],'existing_choice_supplier':'thm-choice-implies-dependent-implies-countable-choice','public_statement_change':False},'reason':'Actual load-bearing uniform-bound justification is absent from current graph supplier and not licensed by the finite-real-degree theorem Statement. Native62 report gives the correct immediate adaptation. The explicit local completion above closes the gap under unchanged AC; existing dyadic summation then gives sd=-infinity. Do not mark either observation source-fixed until this is applied and checked.'}
proposal={'version':1,'run':R,'scope':'Current decision/ledger validation58..83 only','production_writes':False,'cycle':1,'guards':inputs,'decision_patches':patches,'supplemental_decisions':supp,'new_observation_ledger_rows_proposed':proposedrows,'pending_scientific_source_proposal':science,'limits':{'full_current_source_reads_this_task':fullread,'other_current_sources':'Bound as context; only relevant paragraphs/frozen observations were read, not whole proofs.','external_reading':'No new external retrieval or fresh book/PDF audit; citation83 proposal attributes exact native83 reading.','claims':'No gate run, root hash stamp, acceptance or certification. Original finding and ledger bytes remain untouched. Separate observation rows are recurrences of one repair, not additional independent scientific discoveries.'}}
(D/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
(E/'frozen-findings-selected.json').write_text(json.dumps({str(b):{'reader_findings':s['reader_findings'],'refuter_findings':s['refuter_findings']} for b,s in scopes.items()},ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'patches':len(patches),'supplements':len(supp),'new_observation_rows':len(proposedrows),'guards':len(inputs),'proposal_sha256':sha((D/'proposal.json').read_bytes())}))
