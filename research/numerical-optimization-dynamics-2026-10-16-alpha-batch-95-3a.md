# Batch 95 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`. Group: `batch-95`.

Scope: three touched obligations, no page, reader, or refuter findings. Reader/refuter reports are evidence only. Current touched raw hashes equal their post-reader snapshots and differ from pre-reader hashes. No new item edits have been made.

## Ordered review checkpoint

### lem-continuous-riemann-lebesgue-agreement

Reviewed steps 1.1–4.1: Heine–Borel supplies compactness before Heine–Cantor; continuous g is Borel, bounded and integrable on measure-one [0,1]. Half-open cells, including N=1 and the closed final cell, are measurable and have measure 1/N under the explicit Countable Choice premise. Signed simple integrals follow by positive/negative parts and linearity. Both integrals differ from the same left sum by at most epsilon, so equality follows. Reader compactness addition is audit enrichment of an immediate inference; no mathematical defect found.

### lem-unit-interval-lebesgue-gauss-data-valid

Reviewed both steps against def-gauss-moment-data: finite mass one, positive relative neighborhoods at endpoints and interior, M+1 distinct grid points for M>=1, and absolute moments k=0 through 2M bounded by one. Countable Choice is explicitly carried from the box-measure supplier. No empty-support, zero-power or endpoint exception remains.

### def-collocation-quadrature-tableau

Reviewed definition against cardinal basis with n=M-1 and the admissible implicit RK definition. Distinct ordered nodes make denominators nonzero, including the M=1 empty product. Oriented zero-length integrals handle c_i=0. Polynomial nodal/derivative/endpoint identities follow from finite integration and cardinal values only for an admissible solution. Branch existence and M-uniform conditioning are explicitly excluded from the asserted interface.

The ordered review is complete below. A few later carriers were opened with their suppliers before the earlier review notes were committed; the mathematical dispositions and risk entries were completed in the generated level order. This is a file-opening process limitation, not a claim of strict supplier-first opening.

### lem-collocation-polynomial-scaled-derivatives

Reviewed all four steps: bounded f gives stage displacement O(h); the reader-added convex ball about (t,u) lies in open D and bounds finitely many continuous partials for uniform scalar Taylor remainders. Starting with the order-zero expansion, coefficient induction integrates degree-m reproduced coefficients to degree <=m+1; fixed cardinal basis controls differentiated remainders. The defining integral, rather than nodal values alone, determines u_h. Chain/product rules give h^j factors; Taylor reproduction gives the residual bounds for j<M and polynomial annihilation handles M<=j<=2M. M=1, zero node, componentwise norm conversion and fixed-node constants checked. The added ball is an immediate local hypothesis verification, classified as audit enrichment.

Verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`.

### lem-collocation-quadrature-matrix-well-defined

Reviewed both steps with cardinal basis n=M-1, continuity and oriented integrals. Distinct nodes give finite polynomial coefficients; c_i=0 uses the stipulated zero integral. Nonempty [0,1] is closed and bounded and hence compact by Heine–Borel, so the continuous finite absolute-cardinal sum attains a finite maximum by EVT. M=1 and endpoint nodes cause no exception. Reader compactness addition is audit enrichment; no changed mathematical interface.

Verdict: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`.

### alg-explicit-left-euler-sdc-sweep

Reviewed exact procedure and admissibility: augmented initial columns cancel; strictly lower triangular Q_delta gives forward stage recursion with old field values cached. Node rejection precedes tableau construction; a>=1, q>=1 or uncertified invariance rejects acceptance. K=0 performs no residual test. Acceptance deliberately returns U^k and its cached endpoint, which matches the contraction residual estimate for ||T(U^k)-U^k||. New-stage domain checks precede evaluations. Finite budget and exact arithmetic are explicit; correctness and cost are delegated to separate results.

### thm-collocation-local-defect-order-m

Reviewed all four steps: componentwise exact-solution derivative induction supplies normalized composite Mth derivative O(h^M). Taylor remainder and degree-(M-1) reproduction yield uniform interpolation error with fixed Lambda_M. FTC gives exact-stage residual O(h^(M+1)); subtraction from the assumed local branch and h L ||Q||<=1/2 gives stage error. Endpoint splitting adds O(h^(M+1)) quadrature error and O(h^(M+2)) stage contribution. M=1, c_i=0 and finite-dimensional norm constants checked; existence, convex tube and fixed-node uniformity remain explicit assumptions.

### lem-sdc-fixed-point-is-collocation-stage

Both implications checked by substituting U+=U: augmented preconditioner terms cancel to (0|Q), and conversely the same cancellation verifies the sweep equation. Admissibility is assumed, and triangular recursion ensures the fixed-point equation is the intended sweep. No convergence or solver acceptance is inferred.

### lem-sdc-sweep-work-and-storage-bound

All steps checked against the actual procedure: M predictor calls even at K=0; each full sweep adds M, failed prefix adds p<M, and acceptance returns the old cached iterate without new calls. Thus M(K+1) includes exhaustion and zero-budget cases. Dense stage sums cost O(M^2 d), residuals O(Md) with at most M square roots, and reused buffers require O(M^2+Md) independent of K. Certificates, predictor construction, f internals and quadrature construction are explicitly excluded; finite termination is conditional on external checks/evaluations returning.

### lem-one-node-gauss-data-is-midpoint

Checked both steps and actual Gaussian interfaces: order-two Lebesgue data restrict to order-one data for the same measure; integrals of 1 and x are 1 and 1/2 by agreement plus FTC. The monic polynomial x-1/2 is orthogonal to all constants and uniqueness identifies it. Empty cardinal product is one, yielding node 1/2, weight 1, and Q11=1/2. Countable Choice remains explicit.

### lem-sdc-scalar-linear-iteration-matrix

Checked fixed-point subtraction and sign convention E=U-U*: (I-z Q_delta) E_next=z(Q-Q_delta)E. Unit lower triangular matrix is invertible by forward substitution for every real z, including z=0. Induction yields B^k and row triangle inequality gives the bound, with k=0 interpreted as the identity power. No collocation existence or convergence is inferred at singular collocation parameters.

### thm-sdc-sweep-contraction-and-error-bound

Checked five steps: finite-coordinate Cauchy limits and closed product ball prove completeness in block max norm; each invariant inner map is a contraction with a<1, yielding S(V). Subtracting inner equations and dividing by positive 1-a gives q. S maps the ball to itself and q<1 supplies unique fixed point, hence unique collocation stage; initial membership is explicit for geometric error. Triangle inequality yields residual/(1-q) for every V in the ball. L=0 gives a=q=0 without division issues; no unproved global convergence claimed.

### ex-sdc-cost-accounting-per-sweep

Both verification steps checked against the cost lemma and actual loop: constant predictor is still charged M calls, K=0 exhausts without acceptance, each complete sweep adds M, failed prefixes remain bounded, and acceptance uses U^(s-1) cache. Dense matrices/buffers, arithmetic and square roots agree with the supplier, retaining all exclusions and exact-arithmetic caveats.

## Newly detected residual theorem defect (D01)

Local disposition: `amended_repair`; `repair_confidence: 1`. Defect ID: `nod-b95-3a-residual-missing-order-hypotheses`. This was detected during the routed risk review, not in a reader/refuter finding; no extra routed JSON obligation is invented.

Before raw SHA-256: `b9af7ae8a8e2df56a8eb67ed2b4d8297c012a028d8f69bc7623ce1f83982b858`. The old Statement assumes only local contraction, state Lipschitz continuity and tube membership, whereas proof 2.1 imports smooth collocation local order from F4. For M=p=2 with nodes 0 and 1, take f(t,y)=sqrt(abs(t)), y(0)=0 on [0,1]. The state Lipschitz constant is zero; each inner map is constant, a=q=0, exact stages give zero sweep residual and bounded invariant balls exist. The method is composite trapezoidal quadrature of sqrt(t). Concavity makes every cell error have the same sign, and the first cell has exact increment (2/3)h^(3/2) versus trapezoidal increment (1/2)h^(3/2). Thus final error is at least h^(3/2)/6 and is not O(h^2).

Repair: explicitly assume the uniform hypotheses of the already cited local-defect and stability suppliers for exact and numerical starts; bind U_n* to y_n and require V_n in its invariant ball. This preserves the intended residual schedule and the complete proof. No new dependency is needed. No item consumer was found in a full current items text search. The owning A-page summary already qualifies collocation order by smoothness, tube, branch and stability hypotheses and remains accurate. No consumer repair is necessary; no next hop arises. The manifest carries no Statement mirror for this theorem. Its contract boundary premise is updated. No judge record is present.

### prop-one-node-gauss-collocation-order-two

Checked midpoint identification and three proof steps. Bounded f yields U-u=O(h), then U-u=(h/2)f0+O(h^2); coordinate Taylor with bounded second partials yields the matching h and h^2 endpoint terms. Differentiating y prime with C^2 f supplies bounded third derivative of y for the O(h^3) exact remainder. Same-tube small-step stability gives 1+2Lh and the exact-start global recurrence proves order two. Countable Choice only enters the one-node Gaussian identification; branch and uniform tube assumptions remain explicit.

### thm-sdc-finite-sweeps-raise-order

Every step checked: predictor membership in each C_(n,u) permits contraction from ||U0-U*||=O(h), q=O(h) gives O(h^(k+1)) stage error, and endpoint multiplication adds h. Cross-input subtraction uses the common tube Lipschitz bound even for different invariant balls; fixed-k induction gives bounded input sensitivity and 1+C_s h endpoint stability. The exact-start O(h^(M+1)) defect plus O(h^(k+2)) yields p=min(M,k+1), including k=0 and M=1. Grid recurrence applies because both starts belong to U_n. Candidate endpoint is distinct from the algorithm early-return branch; no uniform-in-k or M assertion.

### thm-sdc-residual-tolerance-preserves-order

Completed review after repairing D01 (nod-b95-3a-residual-missing-order-hypotheses; repair_confidence=1): the Statement now assumes the actual uniform local collocation defect/stability prerequisites and V_n membership in the invariant ball for start y_n. Before repair, zero-residual endpoint-node collocation for sqrt(abs(t)) gave trapezoidal global error >=h^(3/2)/6 and contradicted p=M=2. Residual/(1-q_n) now yields stage error C_tau h^(p+1), endpoint perturbation O(h^(p+2)), and exact-collocation stability plus defect yields the displayed recurrence and order p<=M. L=0, zero residual, p=M=1 and exact start checked. No item consumers; page summary already carries the restored caveats.

### ex-sdc-one-node-gauss-stiff-iteration-diverges

Both verification steps checked: z=-6, Q_delta=0 and Q=1/2 give iteration factor -3; stage U*=1/4, initial error 3/4, and endpoint factor -1/2. Formal recurrence diverges while solved midpoint endpoint is stable. The example explicitly does not invoke the finite algorithm acceptance test, which would reject q=3; Countable Choice is carried.

### ex-sdc-two-node-gauss-nonstiff-cubic-ivp

Both steps checked: valid order-four moment data restrict to order-three rule data; Gaussian exactness degree 3 integrates s^3. Agreement for continuous cardinal polynomials identifies Gaussian Lebesgue weights with collocation Riemann weights. State-independent f makes stages explicit finite sums and L=0, and FTC gives y(s)=s^4/4, endpoint 1/4. Only endpoint exactness is asserted; no false interior-polynomial identity.

## nod-b95-3a-ftc-first-part-citation

Local disposition: `amended_repair`, nonfatal; `repair_confidence: 1`. F6 attributes differentiation of a continuous-integrand integral to FTC second part; that direction is FTC first part. Added the exact existing supplier, preserving the argument and all hypotheses. Before raw SHA-256: `c72d3b1b51fbd39b64f85522bbf2af2851d2e47fd5b93972bb2bb27df70d0b6c`. This is a risk-review discovery, recorded here without adding an unowed routed JSON obligation. Neither repair changes a Statement or Definition.

## nod-b95-3a-stage-update-residual-name

Local disposition: `amended_repair`, nonfatal; `repair_confidence: 1`. Verification 1.1 calls G(V)=V-1+(h/2)V the stage derivative residual. The cited supplier defines G as the stage update residual and G/h as the derivative-scaled residual. Corrected the name; all numerical values and estimates are unchanged. Before raw SHA-256: `b3f1babd45d031582037bb36b752cda47a3b46bcf935cef87040ad63ae743187`. This is a risk-review discovery, recorded here without adding an unowed routed JSON obligation. Neither repair changes a Statement or Definition.

### lem-gauss-collocation-weighted-defect-bound

Reviewed all eight proof steps and cited interfaces. Averaged Jacobian along stated convex segments yields e prime=B e-r with ||B||<=h L. Backward Volterra iteration converges uniformly for hL<=1/2; completeness, uniform-limit continuity and now correctly cited FTC first part give P prime=-PB, P(1)=I and ||P||<=2. Scaled exact/collocation path derivatives give B^(j)=O(h^(j+1)); Leibniz induction gives P^(j)=O(h^j) and Taylor q of degree M-1 with P-q=O(h^M). Continuous-integral agreement matches Gauss and collocation weights; monic uniqueness matches the two moment branches. q I_M g has degree <=2M-2 and qg has 2Mth derivative O(h^(2M)), so exactness and the Hermite remainder prove weighted cancellation O(h^(2M)). Product differentiation cancels PB e with P B e without commuting matrices, giving endpoint error h times that integral. M=1, fixed-M constants, nonempty intervals and explicit Countable Choice checked. Nonfatal F6 citation mismatch repaired (nod-b95-3a-ftc-first-part-citation), repair_confidence=1.

### ex-sdc-constant-predictor-too-few-sweeps

Checked all three verification steps: C_u=[0,2u] is invariant for h<=1 with predictor u, a=0 and q=h/2. Start states remain in [1,e] by the exponential bound, so r0<=eh/2 eventually meets tol=1 and returns U0, giving Euler multiplier 1+h. The exact solution is exp(t), verified by the integrating-factor derivative and MVT; exact normalized derivative bound is <=eh. Binomial coefficients in (1+1/N)^N are termwise <=1/j!, and j=2 alone loses 1/(2N), proving error >=h/2. Accepted r0>=h/2 is not O(h^3); this is a sufficient-target failure, with the separate error lower bound proving order loss. Countable Choice, finite K>=1 and fixed interval premises checked.

### ex-sdc-inexact-midpoint-stage-residual

Checked all three steps against the actual RK residual supplier. Ball [0,2] maps into [0.9,1]; h|A|M_F=0.1<=1 and q=1/20. U*=20/21 and V=U*+1/2000 lie in the ball; update residual G has magnitude 21/40000, below (1-q)h^3=19/20000. Stage bound 21/38000<1/1000 and endpoint difference 1/20000<h^4 are correct. Corrected nonfatal terminology G (update residual) versus G/h (derivative-scaled residual), defect nod-b95-3a-stage-update-residual-name, repair_confidence=1. This is a single-step computation with no unsupported global-order claim.

### thm-gauss-collocation-local-defect-order-2m

Both steps checked against current weighted-defect supplier: valid order-2M Lebesgue data and matching cardinal-integral weights instantiate the stated Gauss tableau. The same bounded componentwise C^(2M+1) derivatives, Jacobian operator bound, convex common tube, connecting segments and unique small-step branch satisfy the weighted lemma, giving O(h^(2M+1)). Countable Choice is explicit, integral conventions agree, M=1 is allowed, and constants depend on fixed nodes/M. No inference of superconvergence from degree alone.

## Routed decisions and audit maintenance

Exactly three decisions are owed and appear in the companion decisions JSON, each `reviewed_no_defect` with `change_kind: audit_enrichment` and an empty `defect_ids` array. The reader/refuter findings arrays are empty. The compactness and local-ball additions are sound immediate hypothesis verifications, not confirmed mathematical defects. Their current raw hashes equal the recorded post-reader hashes and differ from the pre-reader hashes. No Statement or Definition of these three carriers changed.

The three newly discovered risk-review defects above have explicit local repair dispositions, `repair_confidence: 1`, and one closed defect-ledger row each. Their report dispositions are the adjudication references; they are not invented reader/refuter or touched obligations in the frozen dispatch. The engine must retain/bind the three newly repaired carrier deltas in its subsequent collection and routing. No scope, hash snapshot, stamp, judge record, or engine transition was modified here.

Audit maintenance also synchronized the two reader-added dependency lists in the batch manifest, six stale exact citation mirrors (the two Heine–Borel/boundedness pairs and two recurrence statements), and the added FTC first-part citation's fact-use map. These metadata corrections have no defect rows. The updated recurrence supplier explicitly permits real p>=1 and retains the same bound used by both consumers.

## Sources and prerequisite evidence

The current local supplier Statements/Definitions were checked at the cited interfaces, including the measure/choice, Darboux, cardinal interpolation, scalar Taylor, calculus, Gaussian moment/orthogonality/exactness/remainder, Euclidean completeness, Banach, exponential and discrete/global-error results. The per-item contract citations give exact item IDs, source sections and checked quote mirrors; the ordered notes above describe the actual applications and boundary checks. Reading supplier statements is not a re-audit of their whole transitive proofs.

Primary external material independently opened in this session:

- Causley–Seal, [On the convergence of spectral deferred correction methods](https://arxiv.org/pdf/1706.06245), §1.1, equation (9), printed p. 4 and Remark 3, p. 5: explicit correction recurrence and its conditional collocation fixed-point interpretation. These support the procedural convention; local contraction and work counts were checked directly.
- Rutgers [MATH 373 Lecture 14](https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf), §10.4, Theorems 11–12, printed pp. 44–45: exactness degree 2n+1 for n+1 nodes, cardinal-integral weights, and the Hermite remainder construction. The local moment-data supplier is the precise measure-theoretic interface used here.

The HNW book, Hunter notes and other bibliography entries were not independently fetched in this session; no claim of reading them is made. All repaired inferences are supported by current proved local suppliers or the elementary counterexample calculation above. No published carrier was edited and no defective published supplier was found in the assigned uses. No new published-ledger record or withdrawal was needed.

## Local validation and handoff

- Reflow of the three newly edited items: all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those three explicit item paths: 3 checked, 0 failing.
- Final batched `node tools/proof-layout.mjs` on all three reader-touched and all three newly edited paths: 6 items, 25 steps, 0 defects. No item edit or formatter ran afterward.
- `node tools/rendercheck.mjs` on the three newly edited items: 3 files, all math and YAML parsed, no errors.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-95.proof-contracts.json --strict`: 25/25 checked, 0 errors and 0 warnings after synchronizing the stale mirrors/use map.
- `node tools/content-policy.mjs research/numerical-optimization-dynamics-2026-10-16-batch-95.pages.json`: 25 scoped items, 0 errors and 0 warnings.
- Risk report ran first without `--require-reviewed`, then with it after the ordered reviews: 22 HIGH/CRITICAL entries have complete, specific Alpha reviews; 25 items routed, 0 errors.
- `node tools/defect-ledger.mjs validate --run numerical-optimization-dynamics-2026-10-16`: batch-95 rows have no reported errors; the command still exits 1 for four foreign schema errors in batch-93 D001/D002 (invalid location and caught_by_role values). These are outside this dispatch and are reported for the owner, without edits to batch-93 rows.

Earlier command-invocation errors were corrected: direct Node execution of the .mts precheck needs the tsx wrapper, and content-policy takes a batch manifest rather than Markdown item paths. These are mechanical failures, not mathematical defects; none received a defect-ledger row.

No mathematical blocker or unresolved prerequisite remains in the owned review. Owner/engine follow-up is collection of the three new repairs, any supplemental decision routing it requires, and the foreign batch-93 ledger schema diagnostics. All judging, carrier stamping, coverage gates and stage transitions remain engine-owned.
