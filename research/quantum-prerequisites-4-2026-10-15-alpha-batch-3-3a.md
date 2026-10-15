# Batch 3 Step 3a adjudication

Run: quantum-prerequisites-4-2026-10-15; group: batch-3. Scope: batch 3 only.

Pre/post reader item and page fingerprints are identical; touched/page obligations are empty. Four finding obligations remain. No agents or judge cycles are used.

## Completed in dependency order

### Level 0: def-complex-path-polygonal-length-and-rectifiability

Reviewed Definition and Proof 1.1–3.1 against the current metric, partition, prefix finite-sum/nonnegativity and extended-supremum suppliers. The n=1 endpoint sequence has constant b tail, so the supremum family is nonempty for a<b; nonnegative finite chords exclude -infinity, and a real upper bound is equivalent to finite supremum in both directions. Singleton a=b is defined separately as zero. Only prefix sums and nonnegativity are used, not the disputed general lower-index convention or splitting. No choice or extra regularity is needed.

Current dependencies read: def-complex-numbers-and-arithmetic, def-complex-metric-convergence-and-continuity, def-metric-continuity, def-interval, lem-real-line-is-a-metric-space, def-partition-and-refinement, def-complete-ordered-field, def-extended-reals, lem-extended-reals-complete, def-finite-sum, lem-finite-sum-laws. The published finite-sum findings remain to be adjudicated with their actual consumer.

Review sequence: level 1 topology transport, both level 2 results, level 3 reparametrization, and the level 4 example with all four findings.

### Level 1: thm-complex-coordinate-isometry-and-topology-transport

Reviewed all four proof steps and exact supplier statements. Coordinate distance equality and surjectivity give equality of positive-radius balls and the inverse correspondence. The union is the family of all contained balls, so no arbitrary choice is used. Both maps are continuous with delta=epsilon and open; bijectivity transfers complements, interior/closure ball tests and boundary difference. Compactness and connectedness are transported by restrictions with induced spaces in each direction. Empty subsets, zero distance and arbitrary real affine parameter t (including 0 and 1) are covered; boundedness never invokes an undefined empty diameter. No defect found.

Suppliers checked: coordinate bijection/arithmetic and real scalar transport, complex metric, p=2 norm, isometry, balls, metric topology/open-set algebra, homeomorphism, interior/closure/boundary, compactness, boundedness, and continuous-image theorems for compact and connected spaces.

### Level 2: thm-complex-coordinate-map-preserves-real-total-differentiability

Read Proof 1.1–4.1 and the Euclidean linear-map and total-derivative definitions. The inverse coordinate map preserves real linear combinations; conjugation is a bijection on real-linear candidates. For k=Phi(h), the open-domain condition, nonzero increments, norms and remainder ratios agree exactly, giving both existence implications and the displayed derivative formula. The 2-dimensional domain/codomain meet m,n>=1. No complex-linearity is assumed and no choice is required (inverse images are unique). No defect found.

### thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed

Reviewed Proof 1.1–4.1 and the complete Euclidean length, coordinate-BV and piecewise-C1 supplier arguments. Exact chord equality uses the same partitions; extended suprema agree even at infinite length. Continuity transfers by the isometry before applying the BV equivalence in both directions. The stated differentiability on interiors with continuous one-sided derivative extensions is precisely the piecewise-speed supplier hypothesis; corners, zero speed and singleton zero variation/empty sum are allowed. Dimension is 2 throughout, so norm dimension restrictions hold. No extra AC or smoothness premise is used. No defect found.

### thm-complex-path-length-invariant-under-monotone-reparametrization

Reviewed Proof 1.1–4.1 and the complete Euclidean reparametrization proof: monotone image partitions delete repeated points; finitely many ordered preimages lift target partitions; reversal uses symmetry of chords. The consumer first proves composition continuity with the interval subspace metrics, then applies coordinate-length equality and the Euclidean theorem under continuous, surjective and weak monotonicity hypotheses. Nondecreasing and nonincreasing cases, pauses, infinite length, singleton source forcing singleton target, and a singleton target with nondegenerate source are all accounted for. Only finite preimage selection is involved; no arbitrary choice is assumed. No defect found.

### Level 4: ex-complex-coordinate-and-path-transport

Reviewed every verification step and all actual cited supplier clauses, reader findings 1–2 and refuter findings 1–2. Coordinates, affine parameter, sqrt(13) distance, ball image, conjugation real derivative, finite-path continuity/corners, coordinate variations and speeds (1,1,0) are correct. Reversal and paused surjection satisfy the reparametrization hypotheses; singleton length is zero. Spikes have positive denominators and disjoint intervals, match at midpoints/endpoints, remain in [0,1], are locally finite away from zero and satisfy the explicit 2/N continuity bound at zero. Repaired the harmonic construction to primitive prefix H_N=sum_(j<N)1/(j+1), including H_0=0 and N=1. An independent prefix-recursion induction now proves the needed block identity, avoiding the disputed published lower-index notation/splitting. B_k has exactly q_k positive terms at least 1/(2q_k), with q_k>=1, and Archimedean growth makes the constructed partition sums unbounded. No choice needed. Published general lower-index/splitting defects remain separately escalated; this consumer no longer uses those clauses.

Repairs completed with repair_confidence 1: F12 and steps 1.8, 2.2, 3.2 now use prefix sums and an explicit block recursion. Example inputs and outputs are unchanged. No Statement or Definition changed, and no new dependency or consumer obligation arises. Contract citation excerpts/uses, derivations, boundary evidence, and manifest strategy were synchronized. No prior verification.judge field was present.

Current external published suppliers still contain the reported lower-index subtraction and splitting gaps. Their general repair remains outside this draft edit authority. Owner escalations, ledger entries and focused local-check results are recorded below.

## Routed findings and owner blockers

### reader:3:1 — escalated

Independent current review confirms that Definition / Notation uses d=n+1-m as a natural term count without defining natural subtraction or the equivalent unique additive gap. def-nat-order only permits this notation once subtraction is available; def-nat-finite-sum-and-product cannot be imported because it depends on def-finite-sum. Attempted closure: the unique witness m+d=n+1 follows from natural order plus commutativity/cancellation and would repair the general interface, including d=0. Source consulted: current def-finite-sum, def-nat-order, def-nat-addition, lem-nat-order-add-compatible and def-nat-finite-sum-and-product; Aspnes SummationNotation section 1.1 supplies recursive summation, not the missing local natural-gap definition. Published content is read-only in this dispatch. Owner must authorize/perform supplier-first correction with exact gap prerequisites and check general consumers. The assigned example now uses primitive prefix sums; that local workaround does not resolve this published finding.

Ledger: `qp4-b3-published-lower-index-gap`.

### reader:3:2 — escalated

Read current Statement clause 3, L1 and Proof 1.3 independently. The displayed induction correctly proves the witness form with n=m+d, but the source identifies d=n-m and the shifted lower-index notation through the still-deficient def-finite-sum interface. The written general interface lacks the natural-order/cancellation identification. Attempted closure: first repair def-finite-sum by the unique additive witness, then select m+d=n and reuse the existing induction on d (including d=0); no new analysis theorem is needed. Sources consulted: both current finite-sum suppliers, def-nat-order and its cancellation references, def-nat-finite-sum-and-product, and Aspnes section 1.1. Owner must arrange the published supplier-first repair and review actual general splitting consumers. The original reader fatal classification concerns the unestablished general lower-index interface; the local doubling application is independently repairable and is repaired in the owned example. Published content remains read-only and this prerequisite review remains open.

Ledger: `qp4-b3-published-splitting-gap`.

### refuter:3:1 — confirmed_fatal

Original Verification 1.8 used H_N=sum_(n=1)^N 1/n through the deficient published lower-index definition. The issue is retained as an original finding, not declared false because the consumer is now repaired. F12 and Verification 1.8 now define H_N=sum_(j<N)1/(j+1) directly from the valid prefix recursion, including H_0=0 and H_1=1; induction adding the next spike proves the exact partition sum 2H_N. Steps 2.2 and 3.2 use explicit prefix blocks, preserving boundedness, continuity and nonrectifiability. No natural subtraction or general lower-index convention is needed. The statement, dependencies and example inputs/outputs are unchanged. Contract and manifest strategy updated; repair complete.

Ledger: `qp4-b3-example-harmonic-prefix`.

### refuter:3:2 — confirmed_nonfatal

Original Verification 3.2 invoked general splitting without identifying its natural-count witness; for this application q_(K+1)=q_K+q_K supplies the count immediately, so the local gap is nonfatal. The repair proves H_(q+d)=H_q+sum_(j<d)1/(q+j+1) directly by induction on d using only prefix recursions. Set q=d=q_K to obtain H_(q_(K+1))=H_(q_K)+B_K, where the q_K explicit prefix terms in B_K are each at least 1/(2q_K), hence B_K>=1/2. q_K>=1 prevents zero denominators; K=0 and d=0 are included. This closes the application without asserting that the published general splitting carrier has been repaired.

Ledger: `qp4-b3-example-block-recursion`.

The two published findings are escalated with deferred ledger rows; they are not represented as closed repairs. Their risk/prerequisite reviews remain open for the owner. The two local refuter findings have fixed ledger rows and repair_confidence 1. This preserves the required distinction between the general published interface and the now-independent local application. No owner resolution of either published defect has been received or inferred.

## Source checks and scope

Checked current local statements and complete relevant source arguments for all actual direct dependencies listed in the per-item sections; additional natural-gap context is listed in the finding decisions. This is not a transitive whole-library audit. The current published carriers still contain the disputed formulas; no historical repair is inferred from raw-hash differences. The scope retains original observed fingerprints in the decisions.

- [U. Lang, Differential Geometry I](https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf), section 1.1, printed p. 1 (PDF page 5), lines 72–91: continuous metric-space curves, partition-supremum length, and continuous surjective weakly monotone reparametrization with length equality. Its use of nondecreasing lists is compatible with deleting repeats; singleton zero convention is explicit locally.
- [J. Aspnes, Summation Notation](https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html), sections 1.1–1.2, lines 59–80: recursive finite sums and index shifts. This confirms the elementary recursion route; it does not fill a missing local natural-subtraction interface. No reliance on the page's broken rendered formulas: recurrence LaTeX is exposed in its formula image alternative text.

No external bibliography was claimed to have been read beyond these specific passages. All transport claims are proved by their current local arguments and exact supplier interfaces. No arbitrary Axiom of Choice is used.

Both published IDs were moved from bounded-clear dispositions to A-P in the deduplicated published-consumer/supplier index under an exclusively owned lock; old audit descriptions are retained as history. The owned cross-batch dependency input is still []: no in-run external batch supplier is used or introduced. The frontier-dependency-ledger instructions therefore require no new edge or refresh.

## Validation and handoff

All commands below ran locally and exited 0 on their final invocation:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-complex-coordinate-and-path-transport.md`: completed before final checks.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-complex-coordinate-and-path-transport.md --json`: 1 proof checked, pass, 0 failures.
- `node tools/rendercheck.mjs items/ex-complex-coordinate-and-path-transport.md --json`: 1 checked, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/quantum-prerequisites-4-2026-10-15-batch-3.proof-contracts.json --strict`: 7/7 checked, 0 errors, 0 warnings. An intermediate duplicate citation row was consolidated before this passing run; it was a mechanical contract-edit issue, not a mathematical defect.
- `node tools/proof-layout.mjs items/ex-complex-coordinate-and-path-transport.md`: run after the final item edit and reflow; 1 item, 14 steps, 0 defects. No item edit followed it.
- `node tools/risk-report.mjs research/quantum-prerequisites-4-2026-10-15-batch-3.proof-contracts.json`: initial routing read, 0 errors, six CRITICAL items identified.
- Same risk command with `--require-reviewed`: all six risk reviews complete, 0 errors, 7 items routed. Repeated at handoff after contract reconciliation.
- `node tools/defect-ledger.mjs append --file /tmp/qp4-b3-defect-rows.json --no-render`: appended the four obligation-specific rows. Generated global view is left to the engine; no whole-run closure is claimed.
- `node tools/defect-ledger.mjs validate --run quantum-prerequisites-4-2026-10-15`: 4 rows checked, 0 errors.
- Focused JSON assertions: exactly the four routed obligations, correct group `batch-3`, zero touched/page obligations, identical reader pre/post fingerprints, unchanged empty cross-batch input, and released own published-ledger lock.

Published current raw hashes at handoff match those recorded before local work: `def-finite-sum` = `4cf40c8200c759cbf0a02f539ea6c9604ec4f2f5272ef01cb650d1b8def69bc7`; `lem-finite-sum-laws` = `79f2e027d726371ea6f310526ad85fcaa8785ab92db773162331e6cc2a81308f`. Neither published carrier was edited.

Locally completed: independent risk review, the two example repairs, their contract/manifest reconciliation, exact four-entry decisions file and published handoff bookkeeping. Open owner obligations: `reader:3:1` and `reader:3:2`, requiring supplier-first resolution of the general lower-index sum interface. Those escalations have not been cleared. No gates, judging, certification, decision stamping, publication, scheduling or engine transitions were performed.
