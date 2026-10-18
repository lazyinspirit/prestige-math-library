# Batch 54 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`. Group: `batch-54`.

Scope: one touched carrier; no reader/refuter findings or page obligations. Initial risk-report passed and routes 19 HIGH/CRITICAL items. Current direct external supplier statements were read, including real nonsymmetric Lax–Milgram, Sobolev closure, affine scaling, reference trace/Poincare and polynomial membership. Published suppliers remain read-only.

## Completed reviews in generated dependency order

### cor-afem-constant-convection-weak-wellposedness

Steps 1.1–2.1: Poincare makes the gradient norm complete, the constant real convection term vanishes on the diagonal by compact-support density, and nonsymmetric real Lax–Milgram applies. Bounded polygon, real scalars, L2 data and inherited AC/Countable Choice are explicit. Zero data gives the unique zero solution; no H2 regularity is used.

### def-afem-local-moment-interpolant

The finite reference P1 Gram matrix is positive definite; determinant-normalized dual moments exist uniquely and act on L2 classes. Least-index incident cells remove arbitrary selection; boundary coefficients are zero. The finite nodal sum is conforming with zero boundary trace. No Sobolev point evaluation or extra choice is used.

### def-afem-p1-residual-estimator-and-data-oscillation

Checked real constant convection, P1 cellwise Laplacian zero, outward-normal jump sign, the one-half global edge allocation, and constant projection cancellation of b·grad U. Cellwise Lipschitz diffusion admits the separately defined traces; no variable-coefficient estimate is asserted. Empty indicator subsets and zero residuals give zero sums.

### lem-afem-vertex-patch-poincare

Steps 1.1–4.1: scaled reference Poincare and trace bound adjacent cell means, bounded angle valence and edge connectivity give bounded paths and comparable cell diameters. Zero-boundary closure supplies zero local boundary trace. The three-star cell union is connected through K, so the same argument applies. Constants depend only on shape regularity; Countable Choice is inherited.

### def-afem-p1-approximation-class

The initial mesh makes every finite-budget infimum nonempty, and v=0 bounds its value. For s>0 the supremum is allowed to be infinite; N=0 uses N+1 and includes the initial best approximation. Exact symmetric Galerkin orthogonality proves the best-energy identity. This is an approximation class for the fixed weak model, with Countable Choice explicit.

### lem-afem-convection-quasi-orthogonality-under-fine-mesh

Steps 1.1–2.1: nestedness permits d as a fine test; constant-vector skew integration by parts gives the stated cross-term sign. The explicitly assumed pickup bound and 2ab inequality yield (1-mu) times both squared norms. Division is valid only for mu<1. Checked b=0, d=0 and zero error; no universal dual regularity claim.

### lem-afem-p1-residual-representation

Steps 1.1–3.1: integrate affine grad U cellwise, sum outward normal fluxes, subtract the discrete form to get the negative jump sign. Boundary terms vanish for compactly supported tests. Finite-mesh trace continuity extends every term to H01 by density. U need not solve the Galerkin equations; the identity requires only the exact weak u.

### thm-afem-local-moment-interpolation-estimates

Steps 1.1–2.1: dual moments reproduce P1 coefficients, zero boundary coefficients give H01 membership. For an interior cell subtract its patch mean locally in integrals; for boundary cells use zero and boundary patch Poincare. Scaled dual and hat norms give h and gradient estimates, then scaled trace gives the h_E^(1/2) edge estimate. No operator evaluation outside H01 is used; selection constants are uniform.

### lem-afem-common-refinement-overlay-and-cardinality

Steps 1.1–2.1: deterministic binary descendants form a common forest. The union of both conforming edge subdivisions matches on both sides; internal-node union gives the minimal overlay. A full binary tree has leaves=internal nodes+1, proving the count including equal meshes and an unchanged initial mesh. No choice or arbitrary triangulation overlay is used.

### lem-afem-data-oscillation-reduction-under-marked-refinement

Steps 1.1–2.1: child P0 spaces contain parent constants, so their summed projection errors decrease. Three generations multiply marked squared diameter weights by at most 1/4; containment handles all closure-only cells. Bulk marking gives 1-3theta_O/4, including theta_O=1 and all-zero oscillation. Completion of the budgeted call is an explicit assumption.

### lem-afem-localized-galerkin-refinement-estimate

Steps 1.1–3.1: the auxiliary moment map selects unchanged incident cells preferentially. For fine-minus-coarse d, those dual moments recover d(z), so Jd=d on every unchanged cell and its incident traces vanish. The surviving residual and edge terms are charged to subdivided cells only. Uniform local moment/trace bounds and bounded overlap prove the estimate; zero d is handled before division.

### lem-afem-nvb-conforming-closure-and-cumulative-counting

Reviewed steps 1.1–4.1 against Bonito–Canuto–Nochetto–Veeser §§8.1.1–8.1.3, Lemmas 8.4–8.7. Strict generation descent terminates recursion, with reinspection as in the algorithm (a coarser chain cell can require two bisections). The generation/distance bound and summable allocation yield cumulative counts, not a uniform one-call bound. In step 3.3 set-distance chains also require intervening diameters; the deliberately enlarged D=2D1+2C0 absorbs these. Seven virtual requests per marked parent account for three generations. Empty marks require no splits.

### thm-afem-p1-residual-reliability-and-local-efficiency

Verified both numbered steps: total squared weight 14 gives threshold 42/5, and prefixes 0,9,13,14 first cross it at cardinality one. Distinct weights remove tie ambiguity; the empty prefix does not meet a positive threshold.

Current raw SHA-256 is `d496e5d4b650f0a82fdb9acdbe4c60c5e7bb759357314b18d070aa8a2a03ae91`, exactly reader-post; reader-pre was `2f095211786e6add6e74ebdc52d0dbc53437266a0c32c46138cf135833778462`. The manifest fingerprint is identical pre/post. The reader repaired the first two efficiency clauses, but the marked-correction proof remains unresolved. Verdict: **escalated**, no complete repair claimed. The Statement has not been changed.

### ex-afem-dorfler-marking-three-cells

Verified both numbered steps: total squared weight 14 gives threshold 42/5, and prefixes 0,9,13,14 first cross it at cardinality one. Distinct weights remove tie ambiguity; the empty prefix does not meet a positive threshold.

### lem-afem-dorfler-marking-cardinality

Steps 1.1–2.1 use only ordinary global efficiency (sound polynomial-bubble clauses), not the open marked-correction clause. Initial P0 data eliminate oscillation. Overlay best approximation and symmetric Pythagoras give correction square at least (1-lambda^2)e_T^2; localized reliability then proves the displayed bulk threshold. Sorted prefix exchange proves cardinality minimality; binary overlay count bounds subdivided cells. Zero error implies all indicators zero, so the empty mark is valid.

### lem-afem-residual-estimator-reduction

Steps 1.1–2.1: Young splitting separates inherited residual from convection correction. Marked volume weights reduce by 3/4; each split old edge has sum of squared subedge lengths at most half its squared length. Old jumps vanish on new edges inside a parent. P1 inverse trace controls the correction jumps. The one-half edge allocation and Young factors leave at least half the marked estimator reduction; epsilon>0 is explicit. The estimate remains valid for zero residual and empty bulk marks.

### ex-afem-data-oscillation-reduction-under-refinement

Verified steps 1.1–2.1: parent area 1/2 and indicator support area 1/8 give mean 1/4 and variance integral 3/32. Diameter squared 2 gives oscillation square 3/16. The midpoint-joining corner boundary is a union of three-generation edges (or two collinear subedges), so every child projection is exact; final oscillation is zero, consistent with gamma_O=1/4. Countable Choice and sufficient budget are explicit.

### thm-afem-error-and-oscillation-contraction

OPEN supplier dependency: F1 and step 1.1 require the unresolved marked-correction clause of thm-afem-p1-residual-reliability-and-local-efficiency, whose step 3.1 applies a marked-cell correction bound to unmarked neighbors. Conditional on that clause, all algebra checks: delta=kappa-nu>0, beta>1/(1-gamma_O), epsilon=theta_E/4, and sufficiently small sigma give coefficients below one. Real convection, pickup and AC assumptions are explicit; zero quantities require no division. Do not accept this theorem until the missing discrete lower bound is supplied.

### thm-afem-p1-poisson-optimal-complexity

OPEN inherited dependency: F1 uses the contraction theorem, currently blocked by its marked-correction supplier. Conditional proof checked: P0 data make M_O empty, approximation-class infimum supplies comparison meshes with error lambda e_k, cardinality plus cumulative closure bounds added cells, and inverse error powers sum geometrically in the correct direction. e_k=0 and seminorm zero branches stop before inversion; initial count uses N+1. Restricted b=0, 0<s<=1/2 and sufficient budgets are explicit. Owner must resolve the marked-correction prerequisite before completion.

## Escalation evidence and required owner resolution

The missing prerequisite is a discrete local lower bound for the actual marked-only three-generation refinement, controlling every marked edge jump without an interior node in its unmarked neighbor. Step 3.1 obtains its volume bound for marked cells and then invokes it on both incident cells of each marked edge. Ordinary polynomial bubbles from steps 1.2 and 2.1 cannot replace these fine P1 tests: fine Galerkin orthogonality does not hold for those bubbles.

A concrete admissible refinement shows why conformity alone does not supply the missing interior cell node. Triangulate the unit square by K=conv{(0,0),(1,0),(0,1)} and L=conv{(1,0),(1,1),(0,1)}. Give K the bottom reference edge and L the right reference edge; the shared diagonal is nonreference in both, so the initial labels are compatible. Three uniform generations on K split the shared diagonal only at P=(1/2,1/2). Conformity on L is achieved by first bisecting its right reference edge at Q=(1,1/2), then bisecting the child with diagonal reference edge. Its leaves are conv{(1,0),P,Q}, conv{P,(0,1),Q}, and conv{(0,1),(1,1),Q}. All their nodes lie on the boundary of the original L. Thus L has no interior P1 nodal bubble of the kind required by the written substitution. This is a counterexample to the claimed availability of the test, not a counterexample to the theorem's inequality.

There is also a false exact integral in step 3.1. On a marked triangle's original reference edge AB, three generations introduce M=(A+B)/2 and quarter points Q=(A+M)/2, R=(B+M)/2. The midpoint nodal hat on that mesh is supported on QR along AB. Its trace integral is |AB|/4, whereas the text states h_E/2. A uniform positive multiple of h_E would suffice, but the exact written equality needs correction.

Attempted closure: ordinary polynomial bubbles establish the first two clauses but are outside the fine P1 space. Enlarging the refined set to the edge-neighbor patch would supply cell bubbles and make the standard proof available, but changes the algorithm's refinement interface and its downstream contracts. No such interface change or theorem narrowing was made. An alternative signed discrete edge lifting for the existing pattern would need a new proved lemma; its existence and uniform estimate have not been established here. Owner must supply that prerequisite, or authorize and review patch refinement and all actual consumers. Preserve both open defects until that resolution.

Direct consumer uses: lem-afem-dorfler-marking-cardinality uses only ordinary efficiency and is unaffected by this missing clause; thm-afem-error-and-oscillation-contraction uses the marked clause in F1/step 1.1 and remains blocked. thm-afem-p1-poisson-optimal-complexity inherits the blockage through contraction. No Statements or Definitions were changed; no consumer source edits were made. Batch 54's cross-batch dependency input is [], consistent with the reviewed manifest. No published dependency defect or proposed withdrawal was identified.

## Sources consulted

- [Nochetto Lecture 1](https://www.math.umd.edu/~rhn/lectures/lecture1.pdf), §1.5: local interpolation and trace framework; the local dual-moment construction was checked directly against the repository's suppliers.
- [Nochetto Lecture 2](https://www.math.umd.edu/~rhn/lectures/lecture2.pdf), §2.1.1, §2.1.2 Lemma 2.2 (printed pp. 13–15) and Lemma 2.9 (printed p. 20): the lower-bound construction explicitly assumes interior nodes throughout the edge-neighbor patch, and its discrete version uses fine-space tests.
- [Nochetto Lecture 3](https://www.math.umd.edu/~rhn/lectures/lecture3.pdf), §3.1 Lemmas 3.1–3.2 (printed p. 28): skew integration by parts and the fine-mesh pickup condition; local items explicitly assume the pickup estimate.
- [Bonito–Canuto–Nochetto–Veeser](https://andreabonito.org/Publications/Preprints/2024_afem_acta.pdf), §§8.1.1–8.1.3, Lemmas 8.4–8.7 and Remark 8.8 (printed pp. 219–225): recursive closure may bisect coarser chain cells twice; generation/distance allocation yields cumulative complexity, with seven virtual requests for three generations.
- [Cascón–Kreuzer–Nochetto–Siebert](https://math.umd.edu/~rhn/papers/pdf/optimality.pdf), Lemmas 3.6–3.7, Theorem 4.1 and Remark 4.2 (printed pp. 12–14): localized upper bound and overlay; Remark 4.2 explicitly distinguishes its estimator-contraction argument from discrete lower bounds requiring interior nodes in marked and adjacent cells. That alternative does not supply the stronger marked-correction clause authored here.
- Both forms of the Lecture 4 URL returned a web-tool internal error. No claim is made to have read that PDF. Optimal-complexity algebra was checked from the full current local proof and its actual local suppliers.

## Disposition

Exactly one decision is owed: touched:54:thm-afem-p1-residual-reliability-and-local-efficiency, escalated. Reader and refuter finding arrays are empty. Sixteen HIGH/CRITICAL risk reviews are complete; the touched theorem, contraction, and optimal-complexity reviews remain open. No proof repair, judge cycle, stamp, gate battery, publication or commit was performed. No closed defect-ledger row was fabricated for these unresolved prerequisites. Current item source bytes remain unchanged.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-54.proof-contracts.json`: exit 0, 24 items routed, 19 HIGH/CRITICAL.
- Final same command with `--require-reviewed`: exit 1, exactly three incomplete reviews: residual reliability/local efficiency, error/oscillation contraction, and optimal complexity. These remain open intentionally pending owner resolution; this is not a passing gate.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-afem-p1-residual-reliability-and-local-efficiency.md`: pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-afem-p1-residual-reliability-and-local-efficiency.md`: 1 item, 4 steps, 0 defects. No item was edited or formatted in this dispatch.
- Decision JSON parsed and its sole obligation was checked against the scope. All 24 current raw item hashes equal the reader-post snapshot. The historical reader-pre body was not independently recovered; pre/post fingerprints and the reader report establish the reported delta, not a fresh review of absent historical bytes.
- The live autopilot status was read from `.autopilot/numerical-analysis-remaining-71-2026-10-17`; Step 3a adjudication is active. No engine transitions were initiated.

Written artifacts: this report, its exact companion decisions JSON, and the batch-54 proof-contract risk reviews. Existing frontier input remains `[]`; no cross-batch or published ledger change is needed. Next action belongs to the owner: resolve the missing fine-space local lower bound and the midpoint-hat integral, then review the dependent contraction and complexity carriers. No escalation was cleared.
