# Batch 68 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-68.

Review proceeds in the generated dependency order. No agents, judgments or stamps are used.

## Supplier blocker

`reader:68:1` and `refuter:68:1`: escalated. The current batch-17 `alg-scaled-complex-householder-and-givens-updates` still specifies only “sequentially” for norm sums and `d=fl(v^*B)` for dots. Its operationwise-model dependency defines scalar and six-operation complex multiplication, not a reduction primitive. The wrapper's assertion of fixed sequential dots cannot supply the missing order. Independently read the producer carrier, its contract and owning manifest, the wrapper and its termination lemma. The contract's assertion of prescribed products does not fix the source procedure. Missing prerequisite: an explicit ordered scalar reduction schedule with real-component order for the supplier's norms, dots and updates. Local closure would require overriding another batch's procedure and cannot preserve source-trace identity. Owner must route supplier-first repair to batch 17, then re-review the batch-68 denominator solver and finite-budget theorem. Leave risk reviews of those trace claims open. No closed defect row is fabricated for an unresolved escalation.

The reader observation is unbound: historical_delta_unknown remains true. This dispatch authorizes adjudicating its historical disposition using current-source evidence, but exact historical observed bytes were not retained; no original byte identity or historical repair is asserted. Immutable producer routing fingerprints and dependency path will be retained verbatim in decisions.

## Completed item checkpoints

- `def-analytic-primary-matrix-function`: reviewed finite Jordan jets, common branch, n>=1 and well-definedness discharge; complete risk review in owning contract.
- `lem-diagonal-pade-remainder-bound`: reader's derivative justification is sound. Checked summable majorant, all endpoint coefficients, beta integral, nonzero denominator and m=0/rho=0/z=0. No further edit needed.
- `thm-analytic-primary-matrix-function-jordan-contour-agreement`: reader's annihilating-polynomial argument correctly bounds diagonal-block Jordan sizes, and corrected step reference is valid. Checked all eight steps, products, contour hypotheses and normal case. No further edit needed.

Sources so far are the actual local cited carriers and proofs, not report conclusions. Remaining actions: complete ordered carrier/dependency review, decide all seven touched and four finding obligations, record remaining risk reviews and run focused checks. Published carriers remain read-only.

- `thm-frechet-exponential-integral-and-block-function-identity`: All six steps checked: Frobenius submultiplicativity, compact resolvent bound, spectral containment via determinant continuity, uniform Neumann O(H^2), triangular resolvent, and absolutely convergent double exponential series. Beta integral coefficients are 1/(p+q+1)!. The remainder bound counts words with at least two E factors. Admissible cycle hypotheses are preserved for small H.

- `thm-principal-matrix-logarithm-and-square-root-exist`: Checked all four steps: truncated Taylor composition gives exp(Log A)=A and R^2=A. Scalar branch maps to the stated strip/right half-plane. Any strip-spectrum logarithm is recovered by Log(exp Y); Sylvester spectral separation applied to QD+DR=0 proves square-root uniqueness without assuming commutation. Zero eigenvalues and the closed negative ray are excluded.

- `ex-nonnormal-exponential-large-transient-norm`: Checked N^2=0, the finite exponential e^-1(I+10N), both adjoint products, row norm 11/e, and e<3 from factorial estimates. Similarity scaling turns the nonzero superdiagonal into a standard Jordan block; the formula also follows directly from the exponential series. Spectrum is {-1}; no stability bound is inferred from it.

- `alg-pade-denominator-solve-by-householder-qr`: OPEN: independently checked exact residual audit, finite conversion/back-substitution/controller loops, zero pivots, range failure and K=0 before-operation dispatch. The macro source does not determine its norm/dot accumulation order, so a fully funded source trace is not defined. Needs batch-17 supplier-first explicit scalar schedule; do not clear this escalation or certify trace identity.

- `thm-matrix-function-rational-contour-error-bound`: Checked all three steps: f and r both holomorphic on Omega justify subtracting the same admissible cycle formulas. The row norm integral estimate sums absolute chain coefficients, giving the weighted length even with negative/zero coefficients. Scalar error alone is insufficient; the actual uniform resolvent hypothesis is retained.

- `thm-pade-denominator-solve-verified-branch-correct`: Both proof steps are independent of candidate accuracy or trace choice: verified return requires exact zero residual on original M,C and complete X. Left multiplication establishes uniqueness only with invertible M. Rational adapter is conditional on supplied encodings. Supplier trace escalation remains open but does not invalidate this conditional audit implication.

- `alg-pade-scaling-and-squaring-exponential`: Reviewed all seven instructions: exact polynomial evaluation, complete-candidate/status gate, separate squaring budget, exact defect rows, finite scalar-tail test, weighted contour length, and nonnegative recurrence. m=0 and s=0 are allowed; K=0 may give scalar-tail inconclusive. Certification requires caller topology and validator success plus exact denominator audit. Batch-17 source schedule remains an external execution blocker, not a certified source trace.

- `thm-newton-matrix-sign-convergence-and-quadratic-rate`: All five steps checked. Scalar diagonal update preserves nonzero real-part sign, proving invertibility. S commutes with each iterate; Cayley transform satisfies G_next=G^2 with eigenvalues inside unit disk. Nilpotent polynomial factors decay, including mu=0. Exact quadratic identity and geometric inverse bound prove local rate for any submultiplicative norm, retaining norm(I) rather than assuming it equals one.

- `thm-newton-polar-factor-quadratic-convergence`: All three steps checked: nonsingular polar factor gives positive H and unitary U. Positive scalar iteration stays positive, is >=1 after its first step, and decreases to one. (y_next-1)=(y-1)^2/(2y) gives the uniform 1/2 bound for k>=1 in spectral norm; the bound is not asserted at k=0. No rounded convergence claim.

- `thm-pade-scaling-and-squaring-error-bound`: All seven steps checked: scalar positive series tail uses ratio <=x/(K+2)<1, pi lower bound arithmetic is exact, nonzero q on the closed disk extends to an open neighborhood and gives invertible Q via jets. Product calculus identifies r(B)=Q^-1P. Signed-cycle weighted length, validated resolvent, exact stored defects and induced row norm give the noncommutative error recurrence. s=0 and m=0 are covered. Conditional correctness does not require a unique candidate trace.

- `thm-schur-parlett-recurrence-correctness`: All four steps checked against actual Bartels-Stewart pivot theorem and algorithm. Diagonal jets match, GT=TG yields the displayed signed recurrence, shorter-distance blocks fix each RHS, and successful invertible pivots give uniqueness even without a separately checked spectral-disjointness premise. Exact Schur similarity yields f(A). Single-block and merged partitions are covered.

- `thm-matrix-function-finite-algorithms-termination-and-budget-status`: OPEN: reviewed all six steps, finite callbacks, K_H=0, N=0, masks, range failures, at most n-1 merges, and finite exact audits. Counter induction bounds an executed sequence, but F2 still supplies no norm/dot ordering, so equality to a specified source trace in Statement and step 1.1 is unsupported. Owner must repair batch-17 arithmetic schedule and re-review the actual downstream producer proofs; no local weakening or closed repair asserted.

## Final decisions and historical comparison

All seven current touched item raw hashes match their immutable post-reader snapshots. Exact pre-reader source preimages were located and SHA-256 checked in `owner-step2-b33/before/items/` (the two procedure Definitions and branch-cut example), `owner-step1-gate-r1-binding-before/items/` (Padé remainder), and `owner-step2-boundaries-57-70/final-source-preimages/` (Jordan agreement and unchanged theorems), under the current run prefix. Read the resulting complete diffs. No missing historical-preimage exception is needed for these touched carriers.

Four reader repairs are accepted: Jordan agreement's inaccurate step citation (nonfatal, with sound annihilator elaboration), Schur–Parlett's missing input partition, its principal-function caller's missing forwarded argument, and the branch example's incomplete controls. Four closed defect rows are appended, each at 3a-adjudicate and referenced by its decision. No new item edits were necessary. Manifests carry IDs/kinds/deps/levels rather than quoted changed Definitions; these remain aligned, and the reader already updated affected contract quotes and boundaries.

The Padé difference-quotient addition is reviewed_no_defect / audit_enrichment: the already-cited bounded-operator exponential lemma explicitly supplies differentiability, so the pre-reader integration by parts was licensed. Do not manufacture a mathematical defect for this added derivation. The Schur–Parlett correctness item's source is identical pre/post and its changed contract refreshes citation evidence: reviewed_no_defect / audit_enrichment.

The finite-budget theorem's source is also identical pre/post but has a real unresolved supplier dependency; its touched obligation and refuter finding are escalated. The reader supplier finding, refuter supplier finding and denominator-solver refuter finding are likewise escalated. Exactly eleven decisions are recorded: four accepted_repair, two reviewed_no_defect, five escalated. Escalated findings have no invented closed ledger row or repair_confidence.

## Consumer and source review

The direct item/reference consumers of the two changed procedure Definitions are exactly the principal-function procedure, branch-cut example, Schur–Parlett correctness theorem and finite-budget theorem (plus their supplier carriers). Read their actual uses. The principal caller and example are already repaired; the two theorems need no argument changes for the partition input. The finite-budget theorem retains the separate upstream schedule escalation. No interface changes propagate beyond those consumers, and no outside consumer edit is made.

Local sources checked include finite Hermite interpolation and Jordan existence/classification statements; higher global Cauchy formula and cycle/index/null-homology definitions; principal logarithm/branch powers; bounded-operator exponential and finite-dimensional completeness; polar/square-root and spectral resolution; the complex row norm and submultiplicativity; the actual QR/triangular recurrences; exact Jordan evaluator; resolvent validator and its soundness/certificate statements; Francis Schur procedure and finite-status statement; Bartels–Stewart procedure, exact correctness and successful-pivot uniqueness proofs. The branch-cut example uses the actual n=2 initialization and pre-sweep stopping order. These local sources suffice for the reviewed arguments; no new external full-text reading is claimed. This is a focused dependency review, not a recursive audit of all published foundational proofs. No defective published supplier was identified in the uses reviewed, so the published ledger is unchanged.

## Checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-68.proof-contracts.json`: exit 0, 28 routed, fifteen HIGH/CRITICAL.
- Thirteen complete specific risk reviews recorded; the denominator solver and finite-budget theorem remain explicitly open pending the supplier repair.
- Final same command with `--require-reviewed`: exit 1, exactly those two open reviews reported. This is an honest unresolved prerequisite, not a mechanical defect to close.
- Focused precheck on all seven touched paths: exit 0, five proof-bearing items passed, two algorithms have no proof rows.
- Final batched proof-layout on those seven paths: exit 0, 23 steps, 0 defects. No item source was edited during adjudication.
- Owning cross-batch input marks the two trace consumers' arithmetic/wrapper uses open; `frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16` succeeded. Historical owner receipts are preserved as evidence, not treated as mathematical verdicts.

Owner action required: explicitly define the batch-17 source arithmetic schedule, resolve the wrapper's actual prerequisite claims as needed, then re-review the batch-68 denominator and finite-budget trace claims. Do not clear these five escalations or two open risk reviews solely from source presence or earlier owner approval. No judging, stamping, publication, commit or stage transition was initiated.

Final metadata check: exact eleven-obligation coverage and all seven reader-post source hashes pass. A literal citation scan found the branch example contract F3 still quoted an earlier Francis Definition. Normalized that quote to the actual current Definition after reading its complete initialization and stopping instructions; the example's mathematical use is unchanged. This is metadata synchronization, not a new mathematical defect. No item source edit or repeated layout check is needed.
