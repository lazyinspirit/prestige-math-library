from pathlib import Path
import json,re,copy,datetime,difflib
R='numerical-optimization-dynamics-2026-10-16';base=Path(__file__).resolve().parent;prior=base.parent
old=json.loads((prior/'template-intents.json').read_text());d=copy.deepcopy(old);bykey={x['item']+'::'+x['case']:x for x in d['operations']}
issues=json.loads(Path(f'research/{R}-owner-boundary-integration-intake/literal-anchor-issues.json').read_text());keys={x['key']for x in issues if x['key']in bykey};anchors={}
def anchor(i,cases,section,detail,needle=None):
 text=Path(f'items/{i}.md').read_text();m=re.search(r'^## '+re.escape(section)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S);assert m,(i,section);body=m[1].strip();label=None;quote=body
 if needle:
  ps=list(re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',body,re.M|re.S));hit=[z for z in ps if needle in z[2]];assert len(hit)==1,(i,needle,[z[1]for z in hit]);label=hit[0][1];quote=hit[0][2].strip()
 for case in cases.split(','):
  key=i+'::'+case
  if key in keys:anchors[key]={'section':section,'step':label,'description':detail,'quote':quote}
# Definition-like input and procedure cues: anchor their actual defining package.
anchor('alg-backward-euler-convolution-quadrature','endpoints','Definition','initialisation and returned-node range')
anchor('alg-implicit-midpoint-hamiltonian-step','degenerate','Definition','the explicit theta=0 convention after the finite iteration')
anchor('alg-implicit-midpoint-hamiltonian-step','empty','Definition','finite-iteration branch1 for budget B=0')
anchor('alg-implicit-midpoint-hamiltonian-step','endpoints','Definition','admissible ball inequalities and failure statuses')
anchor('alg-implicit-midpoint-hamiltonian-step','one','Definition','finite-iteration branches2–3 at budget B=1')
anchor('alg-local-symplectic-euler-step','one','Definition','the displayed kick-then-drift coordinate update')
anchor('alg-na-computed-clenshaw-curtis-via-fast-dft','endpoints,one','Definition','branch2 even extension and its reflected interior-index range')
anchor('alg-na-computed-clenshaw-curtis-via-fast-dft','zero','Definition','branch1 midpoint return before any DFT call')
anchor('alg-na-romberg-trapezoid-table','empty,zero','Definition','the admitted L>=0 table inventory and base-column branch1')
anchor('alg-na-romberg-trapezoid-table','one','Definition','base column and Richardson branch2 with j=1')
anchor('alg-na-romberg-trapezoid-table','endpoints','Definition','branch1 invocation of the closed composite trapezoidal rule')
anchor('alg-parabolic-backward-euler-averaged-forms','one','Definition','one-cell averages, variational solve and returned reconstructions')
anchor('alg-parabolic-backward-euler-averaged-forms','zero','Definition','the homogeneous variational step and its declared unique-solve interface')
anchor('alg-parabolic-crank-nicolson-cg1','one','Definition','one-cell averaged-load midpoint equation')
anchor('alg-parabolic-crank-nicolson-cg1','zero','Definition','homogeneous initial/load data in its unique coercive variational step')
anchor('def-caputo-derivative-and-fractional-integral','one','Definition','the positive-order integral formula and strict Caputo-order domain')
anchor('def-caputo-derivative-and-fractional-integral','zero','Definition','the continuous-input bound on the closed time interval')
anchor('def-local-leapfrog-domain-on-an-open-configuration-set','empty,one','Definition','the explicit admitted-domain restriction of the local drift and three shears')
anchor('def-na-bernoulli-polynomials','one,zero','Definition','the B_0 assignment and predecessor coefficient recursion')
anchor('def-na-clenshaw-curtis-dct-i','empty,one','Definition','the endpoint summands and interior range1 through n-1')
anchor('def-na-clenshaw-curtis-dct-i','endpoints','Definition','the stated right-to-left Lobatto ordering and endpoint coefficients')
anchor('def-na-clenshaw-curtis-quadrature','zero','Definition','the separate n=0 midpoint convention')
anchor('def-na-clenshaw-curtis-quadrature','one','Definition','the n>=1 DCT-coefficient/moment formula')
anchor('def-na-clenshaw-curtis-quadrature','endpoints','Definition','the affine pullback m+d t and zero-degree midpoint branch')
anchor('def-na-closed-newton-cotes-eight-panel-rule','endpoints,one,zero','Definition','the nine explicit nodes, rational weights and linear finite sum')
anchor('def-na-peano-kernel','one','Definition','the separate r=1 indicator and Darboux-integrability paragraph')
# Proof-derived or statement-specific specialisations, each tied to a real current source locus.
anchor('cor-na-closed-newton-cotes-eight-panel-peano-bound','one','Proof','application of degree9 exactness to the Peano bound','The exactness condition')
anchor('cor-parabolic-semidiscrete-spatial-error-rates','one','Proof','the explicit s=1 rate specialisation','The $h^{r+1}$ case')
anchor('ex-backward-euler-is-a-stable-but-not-symplectic','degenerate','Verification','the oscillator matrix and state-independent determinant','For the oscillator')
anchor('ex-l1-and-cq-fractional-relaxation-first-step','endpoints','Verification','the explicit positivity and less-than-one conclusions','Both values are positive')
anchor('ex-l1-full-history-cost-and-truncation-bias','empty','Verification','the retained-lag sum whose empty range telescopes to zero','For $n>m$')
anchor('ex-l1-full-history-cost-and-truncation-bias','one','Verification','the direct-history per-step count','The direct full-history step')
anchor('ex-na-eight-panel-newton-cotes-negative-weight-amplification','endpoints','Proof','the explicit absolute-weight sum including the two endpoint weights','The positive weight numerators')
anchor('ex-stoermer-verlet-bounded-harmonic-oscillator-energy','degenerate','Verification','the explicit linear oscillator update matrix','The first kick gives')
anchor('ex-symplectic-euler-harmonic-oscillator','degenerate,zero','Verification','the displayed linear step formula','Since $V\'(q)=q$')
anchor('lem-backward-euler-cq-weights-and-partial-sums','endpoints','Statement','the open-disc generating identity and explicit n=0 empty-product convention')
anchor('lem-canonical-kick-and-drift-shears-have-symplectic-jacobians','degenerate,one','Proof','the explicit symmetric-Hessian kick block calculation','At an admitted point')
anchor('lem-canonical-kick-and-drift-shears-have-symplectic-jacobians','empty','Statement','the pointwise assertion on admitted open-domain points')
anchor('lem-finite-modified-hamiltonian-exists','one','Proof','the finite triangular coefficient recursion','Seek $Y_h=')
anchor('lem-fractional-integral-kernel-power-integral','one','Statement','the beta>0 integral identity specialised to beta=1')
anchor('lem-local-hamiltonian-flow-preserves-symplectic-matrix','one','Proof','the canonical-block/Hessian identity','In canonical coordinates')
anchor('lem-na-chebyshev-integral-moments','one','Proof','the separate zero-frequency sine contribution','For the nonnegative integer')
anchor('lem-na-chebyshev-recurrence-angle-identity','endpoints','Statement','the universal real-angle identity, including theta=0 and pi')
anchor('lem-na-clenshaw-curtis-dct-i-orthogonality','one','Proof','the explicit endpoint-frequency and off-diagonal cases','For $k,\\ell$')
anchor('lem-na-closed-newton-cotes-eight-panel-weights-and-exactness','zero','Proof','the degree-at-most8 polynomial reproduction argument','For every polynomial $p$')
anchor('lem-one-step-modified-energy-defect','one','Statement','the single-admitted-step estimate with finite N>=r')
anchor('lem-parabolic-bochner-time-mollification','degenerate,one','Proof','the reflected convolution construction on the given evolution triple','Let $\\eta_\\epsilon$')
anchor('lem-parabolic-discrete-energy-identity','degenerate','Proof','the bilinear square expansion, also valid on the zero Hilbert space','Expand the last square')
anchor('lem-parabolic-energy-pairing-and-trace','degenerate,one,zero','Statement','the real evolution-space identities for every0<=s<=t<=T')
anchor('lem-parabolic-projection-time-product-rule','degenerate,zero','Statement','the fixed-map and time-dependent product formulas')
anchor('lem-parabolic-ritz-projection-well-defined','degenerate','Proof','the explicit zero-trial-space branch','If $V_h=\\{0\\}$')
anchor('lem-truncated-modified-flow-matches-map','endpoints','Statement','the signed-step bound including |h|=h_0 under the admitted compact hypotheses')
anchor('lem-truncated-modified-flow-matches-map','one','Proof','the fixed-order coefficient regrouping and remainder','Expand the finitely many polynomials')
anchor('prop-local-leapfrog-and-symplectic-euler-are-symplectic','degenerate','Proof','the symplectic matrix product calculation','If $A$ and $B$')
anchor('prop-local-leapfrog-and-symplectic-euler-are-symplectic','empty','Statement','the universal assertion on every admitted open-domain point')
anchor('thm-backward-euler-cq-compatible-quadratic-first-order-error','one','Proof','the coefficient representation using the s_n supplier','Put $v(t)=t^2$')
anchor('thm-finite-order-modified-energy-bound','one','Proof','the finite sum of individual modified-energy increments','For the selected method')
anchor('thm-implicit-midpoint-branch-symplectic-order-and-error','degenerate,one','Proof','the contraction certificates and separately proved theta=0 branch','Since $H\\in C^2')
anchor('thm-local-symplectic-euler-and-leapfrog-trajectory-errors','endpoints,zero','Proof','the finite error recurrence including its initial value','For either method')
anchor('thm-na-clenshaw-curtis-exactness-and-near-best-error','one','Proof','the n>=1 integral-of-interpolant identity','For $n\\ge1$')
anchor('thm-na-clenshaw-curtis-interpolation-coefficients','one','Proof','the separately calculated endpoint and interior DCT reconstruction factors','Substitute the expression')
anchor('thm-na-euler-maclaurin-composite-trapezoid-remainder','one','Proof','the finite correction iteration including its first/final recurrence','Write $b_q:=')
anchor('thm-na-romberg-even-power-cancellation','endpoints','Statement','the closed-interval smooth expansion and supplied trapezoid-table hypotheses')
anchor('thm-parabolic-backward-euler-error-and-reconstruction','degenerate','Proof','the homogeneous square-system uniqueness argument, also valid for the zero trial space','Fix a finite basis')
anchor('thm-parabolic-backward-euler-error-and-reconstruction','zero','Statement','the exact C_U and C_e expressions for homogeneous data')
anchor('thm-parabolic-crank-nicolson-second-order','zero','Statement','the separate homogeneous-data stability and second-derivative error constants')
anchor('thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound','empty,zero','Statement','the definitions of P_h,rho,theta and the full variational residual')
anchor('thm-parabolic-variational-wellposedness-and-energy-stability','one','Statement','the real separable Hilbert evolution setting, which permits the scalar triple')
missing=keys-set(anchors);assert not missing,missing
# Atomic late flow map, exclusively this item and independently of earlier217 map.
flow='lem-truncated-modified-flow-matches-map';mp={'1.1':'1.1','2.1':'1.2','2.2':'1.3','3.1':'2.1'}
for z in d['operations']:
 if z['item']==flow:
  field='evidence'if z['after']['status']=='checked'else'reason'
  z['after'][field]=re.sub(r'(?<![\d.])(\d+\.\d+)(?![\d.])',lambda m:mp.get(m[1],m[1]),z['after'][field]);z['reason']=z['after'][field]
changes=[]
for key,a in anchors.items():
 z=bykey[key];assert z['after']['status']=='checked';before=z['after']['evidence'];cue=a['section']+(' '+a['step']if a['step']else'')+', '+a['description']+': '
 z['after']['evidence']=cue+before;z['reason']=z['after']['evidence'];z['literal_source_anchor']=a
 changes.append({'key':key,'old_evidence':before,'new_evidence':z['after']['evidence'],'anchor':a})
# Strict native grammar parity, read-only across exactly631 intended rows.
issues_final=[];proofrefs_final=[];guards=[]
for z in d['operations']:
 text=Path(z['source_inspected']).read_text();steps=set(re.findall(r'^\s*(\d+\.\d+)\s+',text,re.M));note=' '.join(z['after'].get(k,'')for k in ['evidence','reason']);key=z['item']+'::'+z['case']
 for m in re.finditer(r'\b(?:proof|verification)\s*(?:steps?\s*)?(\d+\.\d+)\b',note,re.I):
  if m[1]not in steps:proofrefs_final.append([key,m[0]])
 if z['after']['status']=='checked':
  evidence=z['after']['evidence'];refs=[m[1]for m in re.finditer(r'\b(?:steps?\s+)?(\d+\.\d+)\b',evidence,re.I)if re.match(r'^steps?\s',m[0],re.I)or m[1]in steps]
  if not refs and not re.search(r'statement|definition|example|counterexample',evidence,re.I):issues_final.append([key,'unanchored'])
  for ref in refs:
   if ref not in steps:issues_final.append([key,'missing_named_step',ref])
 doc=json.loads(Path(z['target']).read_text());v=doc
 for k in z['path']:v=v[k]
 if v!=z['before']:guards.append(key)
assert not issues_final and not proofrefs_final and not guards,(issues_final,proofrefs_final,guards)
d['revision']='Authoritative final anchor revision: existing631statusesunchanged; exact84currentlistedanchorsadded; flow-only atomic final-label map.'
(base/'template-intents.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');(base/'anchor-changes.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2)+'\n')
(base/'before-template-intents.json').write_bytes((prior/'template-intents.json').read_bytes())
p=base/'current-source-evidence'/f'items/{flow}.md';p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(Path(f'items/{flow}.md').read_bytes())
receipt={'run':R,'status':'FINAL ROOTONLY UNAPPLIED','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'authoritative_packet':str(base/'template-intents.json'),'original_packet_preserved':str(prior/'template-intents.json'),'operation_count':len(d['operations']),'actual_index_intersection_rows':len(keys),'checked_anchor_revisions':len(changes),'statuses_changed':0,'late_flow_mapping':mp,'late_flow_source_snapshot':str(p),'source_changes':[],'native_literal_anchor_issues':issues_final,'explicit_proof_reference_issues':proofrefs_final,'row_guard_drifts':guards,'canonical_writes':False,'hashes_computed':False,'gates_run':False}
(base/'completion.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps(receipt,indent=2))
