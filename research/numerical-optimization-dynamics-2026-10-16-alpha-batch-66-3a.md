# Batch 66 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-66`.

Scope has no touched items, changed pages, reader findings, or refuter findings. Thus no decisions are owed. The reader report and both findings artifacts were read. Pre/post inventories have identical item and page fingerprints. No content repair has been made.

## Risk review checkpoints

### thm-finite-transient-hitting-and-mean-exit-residual-bound

Reviewed all five proof phases against the row-transition definition and geometric-escape supplier. The block geometric sum converges with norm <= L/epsilon; two-sided telescoping gives the inverse. Finite-exit weights telescope to one and nonnegative double sums justify the exit-time tail identity. Residual identities hold for arbitrary candidate vectors. Checked G empty, immediate exit, epsilon=1, one state, and excluded empty U; no infinite path law or choice axiom is needed. Reader and refuter contain no findings. No defect found.

### thm-irreducible-finite-class-has-unique-invariant-vector

Reviewed each proof step and all four direct suppliers, including the finite stationary-existence proof. Positive invariant mass propagates along positive paths; reversal R_ik=pi_k K_ki/pi_i has row sum one and reverses the irreducible graph. The finite maximum principle proves every signed real fixed vector is a multiple of pi. Normalization then proves uniqueness. Checked singleton and periodic classes; no aperiodicity or choice axiom is needed. Reader and refuter contain no findings. No defect found.

### lem-dobrushin-zero-sum-l1-coefficient

Reviewed all five steps with the column-law and l1 nonexpansiveness suppliers. Positive and negative parts each have mass 1/2; their product coupling bounds the norm by half the maximum column distance. A distinct maximizing pair attains equality, including identical columns; n=1 is separately defined as zero. Coordinate min identity gives the overlap formula and scaling handles arbitrary zero-sum vectors including zero. Reader and refuter contain no findings. No defect found.


### thm-finite-chain-closed-class-cesaro-weight-decomposition

Reviewed all seven steps and all eight direct dependencies. The finite acyclic component graph supplies paths to sinks and escape of U; no exact real-comparison oracle is needed for the graph definition. Closed blocks have unique positive invariant laws. Stationary mass on U vanishes; first-entry weights yield alpha_j and sum to one. The Cesaro drift telescopes to zero, finite-coordinate Bolzano-Weierstrass extractions give subsequential limits, and limiting class masses uniquely identify every limit. Checked empty U, multiple singleton classes, periodic blocks, and arbitrary initial probabilities. No choice beyond finitely many existential selections; no defect found. Reader/refuter findings empty.

### thm-finite-markov-closed-class-decomposition-correctness

Reviewed all four steps against the algorithm, column-law definition, and escape lemma. Reflexive initialization includes length-zero paths. Floyd-Warshall induction works in place because updates of R_ik and R_kj cannot change their truth values during stage k. Mutual reachability partitions states, outgoing-edge tests identify sinks, and finite acyclic component paths lift to positive state paths. Each transient path ends at positive omitted row mass, verifying escape hypotheses. All loops and comparisons terminate by the exact input contract. Checked singleton matrix and empty U. No defect found; reader/refuter findings empty.

### thm-one-closed-class-augmented-stationary-system-is-nonsingular

Reviewed all five steps against all four direct suppliers. The finite condensation graph gives escape to the unique sink. The absolute-value row-sum bound eliminates transient coordinates even for signed fixed vectors; irreducible uniqueness identifies the remaining kernel. For every replaced row, conservation of column mass recovers the omitted equation, and normalization kills the scalar kernel. Checked empty U, singleton matrix, and arbitrary replacement row. The class probability is understood as extended by zero outside C in the displayed global vector. No defect found; reader/refuter findings empty.

Sources checked: Ipsen–Selee §3.3 Theorem 3.7 and Corollary 3.9, PDF pages 13–14 (zero-based 12–13), https://ipsen.math.ncsu.edu/ps/simax75294.pdf; row formulas transpose to the local column formulas. Grinstead–Snell §11.2 Theorems 11.3–11.6, printed pages 417–420, https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf; absorbing-state hypotheses are generalized locally through the explicit escape proof. Also checked §11.3 Theorems 11.10–11.11, printed page 438: irreducible invariant uniqueness and Cesaro convergence. These citations document the claims; local proofs carry their arguments.

### thm-m-step-dobrushin-stationary-residual-bound

Reviewed all five proof steps and all five direct suppliers. Finite stationarity exists by the transposed published theorem; strict contraction on zero-sum differences proves uniqueness. Reverse triangle gives the first residual bound, and telescoping plus l1 nonexpansiveness gives the m factor. Checked n=1 (q=0), m=1, zero residual, and strict denominator q<1; no conclusion is asserted when q>=1. The claim requires a positive integer m as specified in Facts and Assumptions. No defect found; reader/refuter findings empty.

### cor-uniformized-generator-stationary-residual-certificate

Reviewed both proof steps, the exact correction algorithm, m-step theorem, and all three batch-47 generator suppliers in full. nu>0 dominating exit rates makes P stochastic. Qpi=0 iff Ppi=pi, and the supplied master-equation uniqueness proof identifies constant trajectories; the same probability is uniquely stationary. Substitution Px-x=Qx/nu and triangle inequality give the stated bound for arbitrary raw real y and probability x. Exact rational successful outputs supply these data; all-nonpositive y and q>=1 remain unavailable statuses. Checked zero generator (strict contraction possible only in the singleton case), nu at maximal rate, and normalized or unnormalized y. No defect found; reader/refuter findings empty. The refuter admitted a clipped corollary excerpt; this review read the complete proof.

### thm-corrected-stationary-residual-certificate-soundness

Reviewed all three steps and both direct suppliers. Every loop is finite on exact rational inputs; validation, zero positive mass, coefficient one, and strict coefficient branches are all covered. For s>0, x=y+/s is nonnegative and sums to one; the overlap formula computes exactly delta(P^m), including n=1. Strict q<1 permits the m-step bound and adding exact correction distance c proves soundness. Checked invalid P, y=0 or nonpositive, signed y with positive mass, zero residual, singleton, and q=1. No solver convergence or floating-point certification is asserted. No defect found; reader/refuter findings empty.

### ex-xd-periodic-iteration-versus-stationarity

Reviewed all three verification steps against the four direct suppliers. The swap matrix has stationary law (1/2,1/2), is irreducible, and alternates from e1; every power has disjoint columns and delta=1. L=(I+P)/2 has identical columns pi and sends e1 exactly to pi in one step. At raw y=e1 the separate residual calculation has correction 0, residual norm 1 and bound 1, equal to the actual error. Thus stationary existence, iteration failure and certificate behavior are consistent. Exact rational branch is applicable. No defect found; reader/refuter findings empty.

### ex-xd-reducible-absorbing-class-weights

Reviewed all three verification steps and five direct suppliers. I2 has two closed singleton classes and empty U; every probability is fixed, and initial law (3/5,2/5) remains every iterate and Cesaro average. Mixture weights are exactly its class masses. All powers equal I2 with delta=1, so the normalized raw input reaches certificate-unavailable despite zero residual. Stationary solve becomes determined once class weights are specified. Checked endpoints a=0 and a=1 of the full stationary family. No defect found; reader/refuter findings empty.

Additional source check: Liu, §1 equations (1.1)–(1.3), PDF pages 1–2, https://arxiv.org/pdf/1208.4974. Its normwise perturbation bound assumes two irreducible positive recurrent chains and strict coefficient for the reference chain. Local residual inequalities are proved directly, without importing these additional assumptions or an inverse-operator argument from Liu.

## Disposition and local checks

All eleven HIGH/CRITICAL risk reviews are complete in the batch-66 proof contract. The `reviewed_no_defect` risk dispositions do not add artificial decisions for untouched, unflagged items. No repair confidence field is needed because no repair was made. There are no confirmed defects, escalations, published-item findings, proposed withdrawals, or affected outside consumers from this review.

The existing `research/numerical-optimization-dynamics-2026-10-16-batch-66.cross-batch-dependencies.json` was inspected under `briefs/tasks/frontier-dependency-ledger.md`. Reviewed consumer uses retain their exact existing suppliers: the uniformization corollary uses the batch-47 generator definition, stochasticity lemma, and master-equation theorem with matching positive-rate hypotheses; the class and residual theorems use the published row/invariant conventions, finite existence theorem, and bounded-real subsequence theorem. No dependency or interface changed, so no ledger edit or refresh was necessary. This review does not claim a new review of unrelated page prerequisites or lower-risk untouched examples.

Commands and results:

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-66.proof-contracts.json`: exit 0, 20 items routed; eleven HIGH/CRITICAL items identified.
- After recording the eleven reviews, the same command with `--require-reviewed`: exit 0, zero errors, 20 items routed.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-66.proof-contracts.json --strict`: exit 0, zero errors and warnings, 20/20 items checked.
- A focused comparison of all 44 high-risk contract citation mirrors against complete current supplier sections found zero mismatches.
- Pre/post inventories agree on all 20 item/contract/manifest fingerprints and both page fingerprints. Current raw bytes of all 20 item carriers match the reader-post item fingerprints.

Only risk-review metadata and these task-named report/decisions artifacts were written. Item and page sources were unchanged, so no formatter, precheck, or proof-layout invocation was applicable. No judge, stamp, certification, engine transition, or gate battery was initiated. The engine owns subsequent hashing and gates. There are no remaining batch-66 blockers.
