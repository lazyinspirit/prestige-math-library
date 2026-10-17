# Batch 84 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-84`.

Scope: nine touched carriers, one refuter obligation, and eleven required risk reviews, in the dispatched dependency order. Reader findings and page obligations are empty. No agents, judges, stamps, or engine transitions are initiated.

## Completed review, in dependency order

### Level 0: residual linearization

`lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian`: every step reviewed. Convexity keeps the segment inside U; openness permits endpoint derivatives; componentwise FTC and integral norm inequality apply to the continuous derivative. Subtracting the endpoint Jacobian gives the factor 1-t and integral 1/2. This is valid for rectangular matrices, x=x*, and L=0, without choice. Read all thirteen direct dependency statements/definitions. No routed decision is owed; risk review complete.

### Level 0: gradient and Hessian

`thm-nonlinear-least-squares-gradient-and-hessian`: square expansion proves the gradient, and coordinate product differentiation proves the Hessian with the library's (k,j) convention. C2 supplies the needed continuous ordered partials. All eight direct dependency statements/definitions checked. No mathematical defect found.

`refuter:84:1` is confirmed_fatal as a false exact source locator, not a failure of the mathematical formulas. The current observed carrier still contains that locator. Independently opened Nocedal–Wright's cited PDF: equations (10.4) and (10.5) are on printed p.246, PDF p.265 (zero-based page 264), in the Chapter 10 introduction before section 10.1. Replace the first locator with that exact location. Statement, proof, dependencies and consumers' mathematical interface are unchanged.

Sources consulted: https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf (Chapter 10 introduction, equations 10.4–10.5; section 10.3 pp.256–259 for later context); https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html (current lecture). Sources document context; local arguments are reviewed independently.

This was the initial checkpoint; subsequent sections below complete those obligations.

### Level 4: scaled trust-region minimizer

`lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer`: All three proof steps and all four direct suppliers checked, including positive-definite supplier proof step 1.1. Nonsingular D and lambda>0 make the damped matrix positive definite; completing the square proves unique penalized minimization. Penalty comparison proves constrained minimization at radius ||Dp||. g!=0 forces p!=0, so radius and predicted reduction are positive. No full rank of J is assumed or needed, and no choice is used. Nocedal–Wright Lemma 10.2 gives context; scaled result proved locally. No decision owed; complete risk review recorded.

### alg-gauss-newton-qr-svd-step-with-rank-safeguard

Reviewed the complete Definition, all three proof steps and nine direct supplier interfaces. Exact QR nonzero diagonal and exact SVD singular values strictly above tau imply full rank and the stated unique minimizer. Computed QR retains input-bound reflector records; full-rank and backward-stability claims require their separate certificates and all supplier hypotheses. SVD intervals wholly below/equal tau take precedence over straddling intervals; a zero stored singular value is rejected before division. Every scheduled rounded dot, solve, and failure path is finite. m<n returns before requesting a factorization. Compared hash-matching preimage in owner-step2-boundaries71-84/template-own-packet-v2/source-before/items with current reader-post bytes: added dimensions, arithmetic schedule, branch order and input binding are sound. Exact QR consumers must supply factors; consumer review continues in dispatched order.
Final verdict: amended_repair.

### alg-safeguarded-levenberg-marquardt

Reviewed the full five-branch Definition, all three proof steps and ten direct supplier interfaces. The added C1/J=Dr hypothesis and square-norm derivative correctly justify stationary returns without C2. Computed rounded-zero gradient requires an exact certificate; augmented stored matrix needs its own full-rank certificate. Zero steps and nonpositive prediction cannot reach ratio division. Each rejection constructs a fresh augmented matrix at current damping; at most N trials return including domain/radius rejection on attempt N. Damping failures return before acceptance. Positive lambda and nonsingular D ensure exact augmented rank even when J is deficient. Hash-matching preimage confirms that C1 hypothesis, derivative argument and operation schedule are the reader changes; accepted. Consumers are checked below against the strengthened input interface.
Final verdict: amended_repair.

### thm-gauss-newton-local-linear-contraction

Checked every step and ten actual supplier interfaces. SVD yields ||A^-1||<=sigma^-2; stationarity and vector FTC give the integral Hessian identity along the closed-ball segment. Transpose norm equality and two product differences give 2ML(1-t)||e||, whose integral is ML||e||. Residual-curvature bound contributes kappa; q<1 makes the ball invariant and q^k proves convergence. x=x*, L=0 and q=0 cause no divisions by zero. Hash-bound preimage comparison and reader evidence identify the added exact reduced QR input as a necessary, sound clarification; full column rank permits those factors. No finite-precision rate is inferred.
Final verdict: accepted_repair.

### thm-gauss-newton-zero-residual-quadratic-convergence

Checked all four steps and three direct suppliers. Endpoint-Jacobian remainder gives ||E||<=L||e||^2/2. Expanding the least-squares objective in an arbitrary real direction yields normal orthogonality; Pythagoras bounds the fitted residual by ||E||, and the uniform lower bound gives C=L/(2sigma). The min{R,1/(2C)} hypothesis closes induction when C>0. For C=0 the newly explicit x0 in B is essential and sufficient for one-step convergence; no division by C occurs in that case. Exact QR input satisfies the repaired procedure. Current bytes match reader-post and hash-matching preimage identifies both additions; accepted without further edit.
Final verdict: accepted_repair.

### ex-exponential-kinetics-gauss-newton-fit

Checked both verification steps and three direct suppliers. Substituting (a,k)=(2,1) makes both residuals zero. Differentiation gives the stated two-by-two Jacobian. With c=e^-1>0 and s=sqrt(1+c^2), direct multiplication gives Q^TQ=I and QR=J; R diagonal is positive. Invertibility makes the zero step the unique minimizer. The new explicit QR factors meet the algorithm input contract, with no assertion of convergence from arbitrary initial data. This moderate-risk item has no mandatory risk worksheet; its touched obligation is accepted.
Final verdict: accepted_repair.

### lem-levenberg-marquardt-large-damping-forces-sufficient-decrease

Checked all four steps and ten direct supplier interfaces. With g=J^Tr!=0, positivity gives nonzero p and pred>=lambda*d^2*||p||^2. The system gives ||g||/(lambda*C_D)<=||p||<=||g||/(lambda*d^2) and ||g||<=MR0. lambda>=Lambda ensures ||p||<=P<=1, so its segment lies in S1 even though S1 need not be convex, and ||Dp||<=Delta/2. Residual remainder yields C_E||p||^2 objective error; combining the upper step bound and lower prediction gives C_E*C_D^2/(lambda*d^6). Ceiling plus one counts the first acceptable trial, including Lambda=lambda_min. C1 suffices throughout; the reader correctly removed the C2-only gradient citation and supplied exact QR hypothesis. Exact solves/evaluations and N attempts remain essential.
Final verdict: amended_repair.

### ex-nonzero-residual-gauss-newton-is-only-linear

Independently checked all four steps and all three suppliers. J=(1,x)^T gives gradient (3x+x^3)/2 and the stated exact rational update. Explicit Q=J/sqrt(1+x^2), R=sqrt(1+x^2) supplies exact QR for every x. Every nonzero |x|<1 stays nonzero and shrinks by strictly less than 1/2. On radius 1/10, M=11/10,L=sigma=1,kappa=101/200 yield q=123/200. The error ratio tends to 1/2 and the quadratic ratio diverges, excluding a uniform quadratic bound. Zero starting point is explicitly excluded from those ratios. Reader addition is a sound exact-factor interface repair; current reader-post bytes accepted.
Final verdict: amended_repair.

### ex-rank-deficient-identifiability-and-lm-step

Checked both verification steps and four direct suppliers. Coincident J columns give rank one and the line of minimizers. The supplied two-by-two QR has orthonormal Q and zero second diagonal in R. For [J;I], direct inner products verify the supplied four-by-two Q is orthonormal and multiplication by R gives the augmented matrix. The positive definite system gives p=(5/11,5/11), m0(p)=5/242 and pred=300/121. Affine residual makes rho=1; ||p||=5sqrt(2)/11<1 means the unchanged damping branch, not boundary reduction. Residual is C1 on R2, satisfying the repaired LM interface. Both reader-supplied exact factorizations are sound.
Final verdict: accepted_repair.

### thm-safeguarded-levenberg-marquardt-global-stationarity

Reviewed all five steps and thirteen direct supplier interfaces. C1 square-norm differentiation gives gradient J^Tr; continuity at accumulation points follows from continuous residual/Jacobian entries. Finite-attempt supplier plus exact supplied augmented QR prevents budget failure. Accepted positive reduction keeps iterates in compact S. lambda>=Lambda accepts an interior step, so rejections stop before gamma*Lambda unless initial lambda is already larger; accepted updates never increase damping. Thus uniform lambda_max bounds the normal matrix, yielding the stated positive c and telescoping square-gradient summability. Compactness keeps every subsequential limit inside S subset U. Example r(t)=(t,1) has nonzero stationary residual and N=3 with the stated constants. No full-rank J hypothesis is needed. Reader repair soundly replaces the C2-only citation with a direct C1 argument and supplies every exact QR call.
Final verdict: amended_repair.

Source correction for `lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian`: The integral Taylor identity is on printed p.257/PDF p.276, not printed p.256/PDF p.275. Independently checked the source passage immediately preceding equation (10.30). Closed defect `nod-b84-3a-residual-integral-source-page`; repair_confidence: 1. Risk-only disposition `risk-review:84:lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian`: amended_repair. No new routed obligation or JSON decision is asserted.

Source correction for `ex-nonzero-residual-gauss-newton-is-only-linear`: The large-residual linear-rate caveat is on printed p.262/PDF p.281, not printed p.263/PDF p.282. Independently checked the METHODS FOR LARGE-RESIDUAL PROBLEMS paragraph. Closed defect `nod-b84-3a-nonzero-residual-source-page`; repair_confidence: 1. Recorded under its routed touched decision.

Source correction for `thm-safeguarded-levenberg-marquardt-global-stationarity`: The Cornell LM section supplies regularized least squares and a gradient stopping test, but no explicit warning that stationarity need not mean zero residual. Corrected that attribution; the local proof step 5.1 independently proves the caveat. Closed defect `nod-b84-3a-global-cornell-attribution`; repair_confidence: 1. Recorded under its routed touched decision.

## Final carrier verdicts and scope

The decisions JSON is authoritative for the final verdicts: four accepted_repair (local linear theorem, zero-residual theorem, exponential fit and rank-deficient example), five amended_repair (both algorithms, large-damping lemma, nonzero-residual example and global theorem), and one confirmed_fatal source-locator finding. All completed repairs have repair_confidence 1. Four amendments synchronize manifest deps left stale by the reader; the mathematical reader source is retained. The nonzero-residual example and global theorem additionally receive source-only corrections described above. No mathematical Statement, Definition or numbered proof is altered by Alpha.

The eleven mandatory risk reviews are specific complete Alpha reviews, replacing author-only notes; a review of the moderate-risk exponential example is also recorded. The residual-linearization source-page correction is an additional disposition of its expressly routed risk review, recorded in this report and its contract, not an invented touched obligation. Exactly ten dispatched JSON decisions are written.

## Consumer and dependency checks

Searched every current item and library page for the two changed algorithm definitions and the reader-changed theorem statements. Actual logical/reference consumers are entirely within batch 84, plus its A-page summary. QR exact consumers are the LM procedure, both local convergence theorems, and all three examples; each now supplies exact factors. Computed LM calls preserve candidate-only semantics and all certification hypotheses. LM consumers are the large-damping lemma, global theorem and rank-deficient example; their residuals are C1 with J=Dr and their exact calls supply augmented QR. The large-damping lemma feeds only global stationarity, where all its compact-neighborhood, constants and trial-cap hypotheses match. Local linear contraction feeds the nonzero-residual example, whose explicit constants were checked; zero-residual convergence has no external reference consumer. No outside repair or additional hop is needed. No published carrier was edited and no defective published supplier was identified.

Maintained the batch-owned frontier dependency input, preserving all existing page rows and owner evidence. Updated actual supplier claim mirrors and independent consumer-interface evidence for its six item rows, including the changed positive-definite supplier statement. The square-map Newton page remains contextual: the rectangular residual remainder is proved locally without importing a square-map claim. Stable item IDs, inventories and proposed withdrawals are preserved.

## Historical evidence

Both immutable Step-3 pre/post snapshots were compared with current source. Before the source-only Alpha corrections, all twelve current raw item hashes equaled the reader-post hashes. Exact pre-reader source preimages were recovered by matching raw SHA-256; no missing-byte or unbound-observation disposition is needed. Word-level diffs were inspected for each of the nine touched items, and their actual before/after changes agree with the reader report. The refuter observation is still valid against the uncorrected source and is not dismissed because it is now repaired.

Preimage locations (each matched to the immutable pre-reader item_sha256):

- `thm-nonlinear-least-squares-gradient-and-hessian`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-nonlinear-least-squares-gradient-and-hessian.md`.
- `lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian.md`.
- `lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer`: `research/numerical-optimization-dynamics-2026-10-16-owner-step2-boundaries71-84/template-own-packet-v2/source-before/items/lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer.md`.
- `alg-gauss-newton-qr-svd-step-with-rank-safeguard`: `research/numerical-optimization-dynamics-2026-10-16-owner-step2-boundaries71-84/template-own-packet-v2/source-before/items/alg-gauss-newton-qr-svd-step-with-rank-safeguard.md`.
- `alg-safeguarded-levenberg-marquardt`: `research/numerical-optimization-dynamics-2026-10-16-owner-step2-boundaries71-84/template-own-packet-v2/source-before/items/alg-safeguarded-levenberg-marquardt.md`.
- `thm-gauss-newton-local-linear-contraction`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-gauss-newton-local-linear-contraction.md`.
- `thm-gauss-newton-zero-residual-quadratic-convergence`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-gauss-newton-zero-residual-quadratic-convergence.md`.
- `lem-levenberg-marquardt-large-damping-forces-sufficient-decrease`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/lem-levenberg-marquardt-large-damping-forces-sufficient-decrease.md`.
- `thm-safeguarded-levenberg-marquardt-global-stationarity`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/thm-safeguarded-levenberg-marquardt-global-stationarity.md`.
- `ex-exponential-kinetics-gauss-newton-fit`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/ex-exponential-kinetics-gauss-newton-fit.md`.
- `ex-rank-deficient-identifiability-and-lm-step`: `research/numerical-optimization-dynamics-2026-10-16-owner-step1-gate-r1-binding-before/items/ex-rank-deficient-identifiability-and-lm-step.md`.
- `ex-nonzero-residual-gauss-newton-is-only-linear`: `research/numerical-optimization-dynamics-2026-10-16-owner-step2-boundaries71-84/template-own-packet-v2/source-before/items/ex-nonzero-residual-gauss-newton-is-only-linear.md`.

## Boundary counterexample supporting the historical repair

The old unrestricted C=0 one-step conclusion is false: take U=R, r(x)=x for x<=1 and r(x)=x+(x-1)^3 for x>1, x*=0 and B=[-1,1]. The residual is C1, J=1 on B, L=0 and sigma=1, so C=0. Starting at x0=2 gives r(2)=3,J(2)=4, hence the exact step reaches 5/4 rather than 0. The reader's x0 in B qualification excludes this case and is justified by the local remainder proof.

## Checks and remaining owner action

- Initial risk report, without --require-reviewed: completed over all twelve batch contracts and routed eleven HIGH/CRITICAL reviews.
- Final `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-84.proof-contracts.json --require-reviewed`: exit 0, all required Alpha reviews complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-84.proof-contracts.json --strict`: exit 0, 12/12 checked, 0 errors and 0 warnings.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-84.pages.json`: exit 0, 12 items, 0 errors. Dependency arrays were explicitly synchronized against current item frontmatter, not merely checked for presence.
- Reflow of the four Alpha-edited items: unchanged.
- Precheck of those four items: 4 checked, 0 failing.
- Rendercheck of those four items: exit 0; actual KaTeX and renderer YAML parsed all four.
- Final single batched `node tools/proof-layout.mjs items/thm-nonlinear-least-squares-gradient-and-hessian.md items/lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian.md items/ex-nonzero-residual-gauss-newton-is-only-linear.md items/thm-safeguarded-levenberg-marquardt-global-stationarity.md`: 4 items, 14 steps, 0 defects. No item edit followed this check.
- Scoped `git diff --check`: exit 0.
- Decisions: exact set of nine touched obligations plus refuter:84:1; no missing, duplicate or extra JSON decisions. All decision-referenced ledger rows are fixed and subject-matching. Closed rows were appended through the serialized ledger tool, which refreshed its generated view.

Required frontier-ledger refresh was attempted after updating the owned input: `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`. It exited 1 on an unrelated carrier's invalid YAML escape: `items/thm-cir-lamperti-scheme-converges-in-probability.md`, line 32 column 76, backslash-k in a double-quoted locator containing the strict Feller condition. That item is outside batch 84 and was not edited. Owner action: repair/coordinate that carrier's YAML, then rerun the merge. Batch 84's reviewed input is saved; the unified ledger refresh is not claimed successful. This mechanical failure creates no mathematical defect-ledger row and no unresolved mathematical risk review.

No mathematical prerequisite escalation, published defect, historical-byte uncertainty, proposed withdrawal, or outside consumer repair is outstanding. Engine stamping and the gate battery remain to be performed by the engine.
