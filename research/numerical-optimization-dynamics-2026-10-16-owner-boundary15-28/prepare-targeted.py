from pathlib import Path
import json,re,copy,difflib,datetime
R='numerical-optimization-dynamics-2026-10-16';D=Path('research')/(R+'-owner-boundary15-28');MAP={}
def add(id,case,evidence,status='checked'):MAP[(id,case)]={'status':status,('evidence' if status=='checked' else 'reason'):evidence}
# Actual anchor errors: complete source claims/proofs read; each row names its real discharge.
rows={
'alg-symmetric-indefinite-block-ldl-star':{
'zero':'Definition admits n=0 with the empty pivot partition and unique empty permutation; completion returns empty factors. A scalar d_r=0 or singular 2-by-2 block instead returns pivot-failure before inversion.',
'one':'Definition allows a single 1-by-1 block. Its trailing set may be empty, its maximum is zero and its nonzero scalar pivot is tested before computing B_r D_r^{-1}.',
'degenerate':'Definition rejects d_r=0 or det D_r=0 and failed threshold tests; the finite-precision branch propagates range-failure, pivot-failure or pivot-inconclusive with the stage and no factor arrays.'},
'alg-certified-hermitian-one-and-two-by-two-ldl-kernel':{
'zero':'Definition rejects a zero scalar pivot d, or a 2-by-2 pivot with scale s=0. It separately defines exact zero modulus, empty maxima as zero and empty trailing outputs when t=0.',
'one':'Definition has a separate k=1 branch with a real nonzero d, componentwise divisions by d and its scalar threshold certificate; k=2 formulas are not imposed on that branch.',
'degenerate':'Definition requires the strict certificate |dhat|>epsilon_d before the 2-by-2 divisions. Unresolved signs or exhausted controller budget return pivot-inconclusive, while definite zero pivots and range failures have separate exits.'},
'lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual':{
'zero':'Statement explicitly sets e_M=beta=eta_{k,0}=0 for t=0. Proof step 2.2 says empty trailing arrays have zero residual, so no nonempty trailing norm is divided into this case.',
'one':'Proof step 2.1 treats scalar-pivot real-component division separately with omega_1=u; the two-by-two sensitivity estimates in steps 1.1 and 1.2 are used only when k=2.',
'degenerate':'Proof step 1.1 derives det E nonzero from successful strict determinant certification. Statement retains mu<1 and explicitly denies uniform smallness near a singular normalized pivot; failed certificates are outside the successful-kernel claim.'},
'alg-householder-bidiagonalization':{
'zero':'Definition Step 1 uses identity when the active column is zero and Step 2 does the same for a zero active row. Finite-precision identity branches preserve the block without normalizing a zero vector.',
'one':'Definition takes p=min(m,n). For p=1 only the left update is executed; the right update is conditional on k<p, so its absent row tail is not normalized.',
'degenerate':'Definition propagates nonfinite or overflow failures with partial factors. Zero active vectors use identity, and exact represented products are explicitly distinguished from rounded dense accumulators and uncertified residual reports.'},
'alg-implicit-shifted-bidiagonal-qr-with-deflation':{
'zero':'Definition admits N=0 and tau=0. It tests convergence before requesting a sweep, uses zero-shift handling for a zero/small leading diagonal, and identity for a zero annihilation vector, avoiding its division.',
'one':'Definition skips singleton active blocks; if all blocks are singleton it returns converged before a sweep-budget check. Thus a one-by-one B requires no two-row Givens step.',
'degenerate':'Definition returns budget-exhausted with candidates and residuals when no sweep remains, and range-failure for invalid operations. Neither branch certifies convergence or candidate accuracy; each discarded entry is separately recorded.'},
'alg-scaled-complex-householder-and-givens-updates':{
'zero':'Definition copies a zero Householder target with identity, takes the Givens identity for b=0 including (0,0), and separates x_1=0 and z=0 phase branches before their divisions.',
'one':'Definition permits a length-one nonzero Householder column; its scaled two-real-component norm and sequential single-term dot remain defined. Separate-block application omits the target overwrite, also when no trailing columns exist.',
'degenerate':'Definition rejects invalid/nonfinite/out-of-normal-range operations and nonpositive required norms before continuing. The exact representative Q normalizes stored Givens coefficients only for analysis, not as an unmodeled rounded instruction.'},
'lem-scaled-complex-householder-and-givens-local-backward-error':{
'zero':'Statement gives E=0 for identity branches. Proof step 3.1 treats the zero Householder column by identity and step 4.1 states identity discrepancies are zero; no v*v normalization is applied there.',
'one':'Statement requires (r-1)u<1; at r=1 this condition is automatic. Proof step 1.1 includes exact zeros in its sequential complex-dot expansion, and step 3.1 applies the resulting bound to the single-term case.',
'degenerate':'Statement is conditional on successful operations with 0<u<1 and (r-1)u<1, making every displayed arithmetic-error denominator positive. Proof steps 2.2 and 4.1 treat zero/special Givens branches separately; no failed-range result receives a bound.'},
'cor-computed-singular-values-absolute-error-from-backward-stability':{
'zero':'Proof step 2.1 has no division by E or a singular value, so E=0 gives zero perturbation error. Step 2.2 retains a separate rounded modulus allowance; a zero diagonal modulus is zero rather than a relative-error division.',
'one':'Proof step 1.1 compares the p singular values of the tall embedding and A; for p=1 this is the single scalar magnitude. Step 2.2 orders a finite list and therefore includes a singleton list unchanged.',
'degenerate':'Statement restricts the accuracy conclusion to successful fully reduced diagonal output and explicitly excludes budget-exhausted candidates. Repeated or zero singular values remain covered by the absolute perturbation comparison in step 2.1.'},
'lem-computed-augmented-tikhonov-solve-residual-and-output-error':{
'zero':'Proof step 1.2 bounds error by the certified residual divided by lambda>0, so zero residual and zero allowance give exact output. Step 4.1 checks w=0 directly before dividing by its norm.',
'one':'Statement permits m=n=1. Proof step 1.1 uses the positive alpha lower bound on the augmented matrix, and step 1.2 uses the scalar normal equation in the same dimensions without an extra size restriction.',
'degenerate':'Statement requires lambda>0, successful normal-range alpha, successful QR/solve and a certified nonsingularity margin. Proof step 1.1 explicitly distinguishes exact full rank from rounded arithmetic success; no bound is assigned to a failed pivot.'},
'lem-prox-indicator-is-euclidean-projection':{
'one':'Proof step 2.2 applies the nearest-point supplier for every n>=1, including n=1. Step 2.1 separately proves the zero-dimensional singleton case rather than importing the positive-dimensional supplier.',
'degenerate':'Proof step 2.1 gives the full result for n=0 and C={0}. The scalar t is required positive, and step 2.2 uses only its positive factor 2t to preserve minimizers.',
'endpoints':'Proof step 1.1 treats convex-combination endpoints as equality and interior weights separately; step 1.2 identifies the closed epigraph C times [0,+infinity), including height zero.',
'nonempty-choice':'Proof step 1.1 chooses one point from the single assumed nonempty C to show properness. Step 2.2 uses the unique nearest point, and step 2.1 explicitly identifies that point when n=0; no choice from an arbitrary family is claimed.'},
'lem-prox-l1-is-soft-thresholding':{
'degenerate':'Proof step 2.2 handles s=0 and both equalities s=+t*lambda and s=-t*lambda in the middle branch, whose unique half-line minimizers are both zero. No coordinate or threshold difference is divided into.',
'endpoints':'Proof step 2.2 includes the closed interval -t*lambda<=s<=t*lambda and its two threshold endpoints. On both half-lines the shared boundary u=0 is explicitly compared with the strict exterior minimizer.',
'nonempty-choice':'Proof step 1.1 uses h(0)=0 to establish a nonempty finite effective domain, and steps 2.2 and 3.1 construct the unique minimizer explicitly for every finite coordinate; no arbitrary selection principle is invoked.'},
'thm-projected-gradient-fixed-point-kkt-certificate':{
'zero':'Proof step 1.1 explicitly treats n=0: nonempty C is {0}, the gradient and normal cone are zero, and projection fixes zero. Step 2.1 also handles global minimality in this branch before the positive-dimensional KKT theorem.',
'iff-forward':'Proof step 1.2 takes G_L^C(x)=0, identifies x=P_C(x-grad f(x)/L), and uses the projection inequality and L>0 to obtain -grad f(x) in N_C(x). Step 1.1 separately covers n=0.',
'iff-reverse':'Proof step 1.3 assumes -grad f(x) in N_C(x), expands the squared distance to v=x-grad f(x)/L and proves x is the unique nearest point, hence G_L^C(x)=0. Step 1.1 covers n=0; the separate multiplier implication has no claimed converse.'}}
for id,cs in rows.items():
 for case,e in cs.items():add(id,case,e)
for case,e in {
'zero':'Statement includes exact arithmetic Delta_r=0, giving exact factorization. Proof steps 1.1 and 5.2 recover this identity with every local residual zero; the empty partition has rho_blk=rhohat_blk=0 and empty residual sums.',
'one':'Proof step 1.1 establishes the single accepted 1-by-1 or 2-by-2 block identity before substitution. At one stage W_1=I and the aggregate residual is just its embedded local residual as in step 1.2.',
'degenerate':'Statement assumes a successful run with each pivot invertible. Proof step 4.1 retains actual inverse-pivot norms and actual growth rather than claiming a uniform bound near singularity; the kernel certification in step 5.1 supplies admissibility.'}.items():add('thm-block-ldl-star-residual-with-actual-growth',case,e)
for case,e in {
'zero':'Proof step 1.1 starts at j=0 with equality; when all local E_j,D_j vanish, steps 2.1 and 3.1 give E=0 and exact unitary equivalence without division by the input matrix norm.',
'one':'Proof step 1.1 includes one update J=1, giving norm at most (1+eta_1)||C_0||+delta_1. The unwinding in steps 2.1 and 3.1 then gives the single local perturbation allowance.',
'degenerate':'Statement covers every recorded deflation/cleanup as an identity update with E_j=0 and separate D_j. Proof step 3.2 retains successful range/active-dimension hypotheses and makes no unconditional QR convergence claim.'}.items():add('thm-bidiagonal-svd-backward-error-under-local-stability',case,e)
for case,e in {
'zero':'Statement assumes lambda>0 but permits delta=0 and exact zero residuals. Proof steps 1.2, 2.1 and 2.2 set the corresponding noise and solve contributions to zero without dividing by delta, r_h or the unknown error.',
'one':'Proof step 4.1 specializes the Hilbert identity to finite matrices without a dimension lower bound beyond the matrix convention; for a scalar A the same normal inverse and residual division by lambda>0 apply.',
'degenerate':'Proof step 1.1 uses the positive shifted normal operator, so A may be rank deficient or zero without making the regularized inverse singular. The excluded lambda=0 limit is not claimed; arithmetic bounds in step 4.2 remain conditional.',
'nonempty-choice':'Statement explicitly assumes Countable Choice, and proof step 1.1 invokes A1 for the Hilbert-adjoint/invertibility setup. The concrete coefficient representation in step 4.2 is supplied as input and introduces no extra full-Choice assertion.'}.items():add('thm-tikhonov-error-chain-with-discretization-and-residual',case,e)
add('thm-local-finite-element-interpolation-estimates','nonempty-choice','Statement assumes Countable Choice; proof steps 2.1 and 2.2 choose the Bramble-Hilbert polynomial under F7. The additional full Axiom of Choice is confined to the automatic Lagrange nodal-boundedness application in step 1.1, not the generic bounded-DOF estimate.')
add('ex-convex-composite-midpoint-and-trapezoid-bracketing','one','Example allows n=1. Verification step 2.1 proves the single midpoint panel bound, step 3.1 proves its chord/trapezoid bound, and step 4.1 combines them; no nonexistent step is needed.')
add('ex-convex-composite-midpoint-and-trapezoid-bracketing','endpoints','Verification step 3.1 uses the endpoint chord coefficients (v-x)/h and (x-u)/h on the closed panel. Integrating its explicit antiderivative gives h(f(u)+f(v))/2, retaining both endpoints in the trapezoid rule.')
# Contradicted NA rows: actual finite/empty cases or precise false-positive adjudication.
for id,reason in {
'def-na-dct-ii-and-dst-i-even-odd-extension':'Definition fixes N>=1; the DCT index range0..N-1 and DST range1..N each contain N entries. The odd extension has two expressly assigned zero endpoints, not an empty input transform.',
'lem-na-zero-padding-removes-linear-convolution-aliasing':'Facts & Assumptions explicitly give positive n,m, so M>=n+m-1>=1 and both input supports have positive index lengths. Proof steps 1.1 and 2.1 allow a zero coefficient contribution and an empty zero-output tail without claiming empty cyclic length.',
'thm-na-dst-i-orthogonality-inverse-and-dft-extension':'The DST-I domain in the named Definition fixes N>=1; the displayed sum has N terms and the odd DFT has length2(N+1). Proof step 2.1 gives its positive diagonal (N+1)/2 also for N=1.',
'alg-na-computed-fast-transforms-and-convolution':'Definition requires N>=1 and returns the one-entry vector at N=1. Composite recursive lengths r,s are positive proper factors, while the prime-branch padding M is a positive power of two; no empty transform is called.',
'lem-discrete-summation-by-parts-poincare-and-inverse-bound':'The imported rectangular-grid Definition has Nx,Ny>=2 and Lx,Ly>0, so each interior row/column index range1..N-1 is nonempty. Proof steps 1.1 and 2.1 telescope these actual finite sums; an empty interior grid is excluded.',
'cor-l2-inverse-error-budget-and-cross-term-condition':'Statement fixes a list of N>=1 increments, so the main chain is nonempty. Proof step 2.1 also covers N=1, when the pair-index cross sum is empty and zero, yielding exact root-sum-square for the sole increment.'}.items():
 if id=='cor-l2-inverse-error-budget-and-cross-term-condition':add(id,'empty',reason)
 else:add(id,'empty',reason,'not_applicable')
for id,e in {
'lem-cardinal-lagrange-interpolation-and-operator-norm':'Statement permits n=0, which has one interpolation node. Proof step 1.1 explicitly invokes the empty-product cardinal polynomial at n=0, and step 3.1 constructs the constant one-node test function; the interpolation data itself is never empty.',
'lem-chebyshev-cardinal-polynomial-formulas':'Statement fixes n>=1 and excludes the selected node angle before its quotient formulas. At n=1 there are no interior Lobatto nodes; proof step 1.3 supplies the two endpoint derivatives instead, so the empty interior-index case does not create a denominator.',
'alg-symmetric-indefinite-block-ldl-star':'Definition explicitly admits n=0 with the empty exhaustive pivot partition and empty permutation. It initializes empty L,D arrays and returns the empty factorization; empty trailing maxima in both block tests are assigned zero.',
'alg-jacobi-stationary-iteration':'Definition requires n>=1 but permits the EMPTY update loop m=0 and returns x^(0). For n=1 the off-diagonal sum is empty and zero, with its nonzero diagonal checked before the scalar division.',
'alg-gauss-seidel-stationary-iteration':'Definition requires n>=1 but expressly returns x^(0) at zero budget m=0. For n=1 both triangular off-diagonal sums are empty, leaving the admitted nonzero diagonal solve.',
'lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction':'Statement fixes n>=1. Proof step 2.1 permits a path of length0 with C^0 entry1; for n=1 this is the empty edge-product case. The coordinate series has its k=0 unit term, making v>=1.',
'al g':'unused'}.items():
 if id!='al g':add(id,'empty',e)
# Per-definition biconditionals are operational predicates; both branches explicitly specified.
for id,forward,reverse in [
('def-hermitian-structural-graph-adapter','Definition sets H_ij=H_ji=1 when A_ij is nonzero, so every off-diagonal Hermitian nonzero is recorded as an edge.','Definition otherwise sets both H entries to0, so H_ij=1 can arise only from A_ij nonzero; conjugate symmetry identifies the same undirected pair.'),
('alg-nested-dissection-ordering-on-regular-grids','Definition admits an edge when two coordinate vertices differ by1 in exactly one coordinate and agree in all others; the explicit lexicographic bijection transports it to index labels.','Definition uses this test exactly when assigning grid edges, excluding all other pairs. This is the stated graph-construction predicate, not a new fill-complexity equivalence.'),
('alg-sparse-cholesky-with-invalid-pivot-status','Definition relabels a filled original-vertex edge {v_i,v_j} as the permitted position edge {i,j} via the given ordering.','Definition permits {i,j} exactly from the original filled edge {v_i,v_j}; the permutation is a bijection. This statement concerns support relabeling, not equivalence between rounded success and positive definiteness.'),
('def-revised-simplex-basis-dictionary','Definition declares a basis primal feasible exactly when its basic coordinate vector A_B^{-1}b is nonnegative; nonbasic entries are fixed0.','Definition makes x(B) a basic feasible solution precisely through A_B^{-1}b>=0, with the empty basis and multiplier explicitly retained for m=0.'),
('alg-revised-simplex-residual-audit','Definition issues verified-optimal-for-stored-data only after all four exact tests xhat>=0,r_p=0,r_d>=0,g=0 pass.','Definition returns that status whenever all four tests pass; every other finite-input case is candidate-only. Empty-vector max is0 and nonfinite inputs are rejected before this predicate.'),
('alg-revised-simplex-qr-basis-recompute-and-audit','Definition admits an exact-witness primal record only after primal feasibility, least-index negative reduced cost, positive eligible direction and the ratio/tie tests all hold; it explicitly lists the corresponding dual predicate.','Definition makes those exact-witness predicates the admission rule in both modes; enclosure mode admits only when every required sign/comparison/tie is proved. Failed or unresolved predicates retain the current basis and return inconclusive, as Step5 specifies.')]:
 add(id,'iff-forward',forward);add(id,'iff-reverse',reverse)
for case,e in {'iff-forward':'Statement uses exactly-when for graph edges as the definition of its directed support; it does not assert a characterization of weighted contraction by strong connectivity. Proof steps 2.1–4.1 establish only the stated sufficient contraction conclusion.','iff-reverse':'The exactly-when phrase defines support edges i->j by c_ij>0. No reverse necessity of irreducibility for Cv<v is claimed; proof step 4.1 derives Cv=v-1 from the established convergent series.'}.items():add('lem-irreducible-row-substochastic-matrix-has-strict-weighted-contraction',case,e,'not_applicable')
add('lem-filled-edge-path-characterisation','iff-forward','Proof step 1.1 establishes the k=0 edge/walk base case. Step 1.2 constructs a witnessing walk for every retained or newly filled edge by concatenating the two walks through the eliminated vertex.')
add('lem-filled-edge-path-characterisation','iff-reverse','Proof step 2.1 takes a witnessing walk, separates its first and last occurrences of v_k, and uses the induction hypothesis to obtain the two later-neighbor edges. Step 3.1 combines both directions for every stage.')
for case,e in {'iff-forward':'Statement says objective decrease is strictly negative exactly when theta>0. Proof step 3.2 writes it as theta*cbar_j with cbar_j<0, so theta>0 gives strict negativity.','iff-reverse':'Proof step 3.2 has theta>=0 and cbar_j<0; if the objective change is strictly negative then theta cannot be0. It explicitly identifies theta=0 with the degenerate-pivot zero-change case.'}.items():add('thm-revised-simplex-primal-pivot-objective-ray-optimality',case,e)
for id,e in {
'alg-nested-dissection-ordering-on-regular-grids':'Definition has k>=1 and d in{2,3}. It recurses only on NONEMPTY child boxes; when every side length is1 it appends the remaining vertex as a terminal separator. Empty children are omitted, and no empty box is indexed.',
'thm-sparse-cholesky-structural-pattern-without-cancellation':'Proof step 2.1 starts at column j=0 with the explicit empty recurrence sum equal0. If no permitted strict-lower positions exist, the no-cancellation condition is vacuous and steps 4.1–5.1 assert only the diagonal pattern.',
'thm-multifrontal-elimination-equivalence-and-sparse-costs':'Proof step 1.1 treats a leaf with no child contributions. In step 2.1 a node with no children has an empty contribution sum, so its front is assembled only from assigned entries; the work and storage sums in step 3.2 count actual existing fronts.',
' thm':'unused'}.items():
 if id!=' thm':add(id,'empty',e)
add('thm-bidiagonal-svd-backward-error-under-local-stability','empty','Proof step 1.1 explicitly starts at J=0 with equality. The empty product is1 and both perturbation/cleanup sums are0, so steps 2.1–3.1 give C_0=I*C_0*I without adding an error term.')
add('thm-na-dct-ii-orthogonality-inverse-and-dft-extension','empty','The DCT-II domain requires N>=1. At N=1 the inverse sum over k=1..N-1 is empty, leaving x_0=X_0; proof step 2.1 has the sole diagonal entry N=1 and step 3.1 inverts it.')
add('thm-na-dct-ii-chebyshev-coefficient-extraction','empty','The DCT-II domain requires N>=1. At N=1 the expansion has the sole coefficient a_0 and there are no positive k extraction equations; proof steps 1.1–2.1 give X_0=N*a_0 without an absent coefficient.')
add('thm-na-arbitrary-length-fft-correctness-and-cost','empty','Statement fixes N>=1. Proof step 1.1 gives the explicit one-term N=1 base case; no nontrivial recursion tree is used there. For N>=2 the comparison tree in step 3.1 has at least one terminal size and finite child-factor sets.')
add('thm-strict-row-diagonal-dominance-implies-jacobi-and-gauss-seidel-convergence','empty','Statement requires n>=1; for n=1 each off-diagonal row sum is empty and zero. Proof step 1.1 then forces a_11 nonzero, and the Jacobi/Gauss-Seidel iteration matrices in steps 2.1–3.2 are zero, so the scalar case is retained.')
add('thm-irreducibly-weakly-diagonally-dominant-jacobi-and-gauss-seidel-converge','empty','Proof step 1.1 handles n=1 separately: the strict-row hypothesis gives |a_11|>0 despite an empty off-diagonal graph. Statement allows length-zero paths, and the finite nilpotent sums in steps 3.2–4.1 include their r=0 term.')
add('thm-chebyshev-interpolation-near-best-error-bound','empty','Proof step 2.1 takes the infimum over the explicitly nonempty polynomial class P_n, which contains the zero polynomial for every n>=0. At n=0 the named cardinal supplier retains the one-node interpolant; no empty best-approximation class is used.','not_applicable')
add('thm-global-error-from-one-step-defect-and-stability','empty','Statement fixes d,N,p>=1 and T>0, so the time-step index0..N-1 has N entries and each exact path supplies a point of every admitted tube slice. Proof step 2.1 applies the recurrence to e_0,...,e_N, never an empty sequence.','not_applicable')
add('thm-continuous-flow-log-density-equation','empty','Statement requires a probability density p_0:U_0->(0,infinity) and fixes x_0 in the common flow domain, excluding empty initial support. Its divergence sum has d>=1 terms. Proof steps 1.1–2.1 retain these nonempty domains when forming density and the invertible Jacobian.','not_applicable')
add('thm-divergence-integral-error-with-separate-quadrature','empty','Statement has N>=1 and defines ell_n using sum_{j=0}^{n-1} I_j. At n=0 this prefix is empty and ell_0 is unchanged; proof step 2.1 iterates zero times there, leaving precisely its initial error allowance.')
# Emit exact boundary-row-only proposal; unrelated proof citations/smoke/history remain unchanged.
ops=[];files={};inspected={}
for (id,case),row in MAP.items():
 matches=[]
 for b in range(15,29):
  f=f'research/{R}-batch-{b}.proof-contracts.json'
  if f not in files:files[f]=json.loads(Path(f).read_text())
  if id in files[f]['contracts']:matches.append((b,f,files[f]['contracts'][id]))
 assert len(matches)==1,(id,len(matches));b,f,c=matches[0];i=next(i for i,x in enumerate(c['boundaries']) if x['case']==case);before=copy.deepcopy(c['boundaries'][i]);after={k:v for k,v in before.items() if k not in ['reason','evidence','reviewed','template_review']};after.update({'case':case,**row})
 if row['status']=='not_applicable':after['reviewed']={'upheld':True,'by':'same focused owner /root/num_ledger_28_36','reason':row['reason']}
 if after!=before:ops.append({'batch':str(b),'file':f,'item':id,'case':case,'json_pointer':f'/contracts/{id}/boundaries/{i}','before':before,'after':after,'source_read':['items/'+id+'.md'],'scope':'boundary worksheet only; source claim/proof unchanged','root_binding_required':True});c['boundaries'][i]=after
 inspected[id]='Current entire Statement/Definition and Proof/Verification read for the exact boundary signal; no broad mathematical re-audit.'
changed=set(x['file'] for x in ops);patch=''
for f in sorted(changed):
 before=Path(f).read_text();after=json.dumps(files[f],indent=2,ensure_ascii=False)+'\n'
 for sub,t in [('before',before),('proposed',after)]:q=D/sub/f;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(t)
 patch+=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='a/'+f,tofile='b/'+f))
(D/'targeted.patch').write_text(patch);(D/'targeted-operations.json').write_text(json.dumps({'run':R,'created_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'canonical_applied':False,'source_edits':False,'hashes_or_gates':False,'operations':ops,'inspected_items':inspected,'template_closure':'Separate full scope template review still pending; these exact cases replace corresponding old template rows only.','history':'Full original contract carriers archived; unrelated contract fields, citations, classifications and smoke copied unchanged.'},indent=2,ensure_ascii=False)+'\n');print('TARGETED',len(ops),'rows',len(inspected),'items',len(changed),'files')
