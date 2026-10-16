# Batch 58 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-58`.
Scope: three routed decisions and fifteen HIGH/CRITICAL risk reviews, in generated dependency order. No page-only obligations. Reader findings are empty; the refuter has one missing-hypothesis finding.

## Completed review, levels 0–5

- `def-qa-34-threshold-band-svd-target`: accepted reader repair. Current raw SHA256 `174da9e8f0aa5d858d57c4bcdc0b2d255b1d85021829eec1ee1976248cb5bd36` equals reader-post; pre was `6886c02ada94d6906a48518ce507af3da694d287a5c97276f609760f09f890fe`. Independently computed A=diag(1/2,0) times projection onto (1,1)/sqrt(2): [[1/4,1/4],[0,0]], versus [[1/2,0],[0,0]] for projection onto e1. Thus the original null-direction invariance assertion was false. The replacement correctly distinguishes kernel-supported ranges from mixed ranges. Subspace-based definition and both endpoints remain sound. SVD, orthogonal projection and Frobenius definitions checked directly. Consumer two-sketch lemma uses an arbitrary band projection and remains sound; further ModFKV/Tang consumer checks remain below.
- `thm-qa-34-best-frobenius-rank-k-approximation`: complete risk review recorded in owning contract. Checked SVD/Frobenius/projection statements and every step, including k=0, maximal k, zero matrix and kernel completion. Weight rearrangement proves the full rank bound.
- `lem-qa-34-two-sketch-threshold-band-bound`: complete risk review recorded. Checked the compression positivity, eigenvalue/top-k comparisons, crossing count, deficit and rounding estimates, including empty spaces, eta=1 and repeated/equal endpoint singular values. No defect found.
- `thm-qa-34-product-state-error-bound`: complete risk review recorded. Product states have trace one by their product eigenbasis, telescoping and tensor trace-norm multiplication prove the bound, and the finite POVM supplier gives the conclusion. No defect found.

Sources opened: Tang v3 https://arxiv.org/pdf/1807.04271v3; FKV author manuscript https://www.math.cmu.edu/~af1p/Texfiles/SVD.pdf; Watrous https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf. Relevant sections are being checked below. Initial risk-report completed with 0 errors and fifteen HIGH/CRITICAL subjects. Local checks are not judge or gate certification.

Next: resolve the level-15 end-to-end contract finding, check every direct consumer, then complete remaining risk reviews in generated order. No published carrier edited.

## Level 15: refuter:58:1

Confirmed fatal and repaired, confidence 1. The old definition admitted H0=0, H1=C and the unique map from L(0), which is completely positive and trace-preserving vacuously. The declared diamond distance is outside `def-qc-diamond-norm`'s nonzero-space domain. Both the contract spaces and standalone distance clause now explicitly require nonzero finite-dimensional complex Hilbert spaces. Provenance is ai-altered and the batch manifest mirrors it. No proof contract exists for this definition; no judge record was present. The refuter observation uses the engine's subject fingerprint (`00da4007…`), while the raw source hash is `c9afda04…`; those are different hash representations, not evidence of a historical edit.

Direct-use search across items and library found `alg-qa-34-error-budget-allocation`, `thm-qa-34-error-budget-allocation-correctness`, `thm-qa-34-channel-hybrid-bound`, `thm-qa-34-tensor-error-bound` and the owning A-page. The two bound statements already require nonzero complex Hilbert spaces; the allocator and correctness theorem use the contract's local normalized distances, hence its admissible spaces. The empty allocator branch is an identity on the declared space. The A-page's finite channel composition description remains accurate. No consumer Statement/Definition change or outside-batch edit is necessary. `ex-qa-34-three-stage-budget` uses qubit spaces explicitly and remains valid. Checked density/trace-distance, complete positivity, circuit ordering and both cost definitions directly.

Next: level-16 sampling, adaptive probability, channel and heralding reviews. Closed defect row will be appended with the final decisions.

## Completed level-16 reviews

Specific complete risk reviews now record the Gram second-moment and Markov argument, inner-product median amplification, adaptive finite-history and geometric bounds, normalized channel telescoping, and the heralded p=0/p=1 branches. Exact cited statements were opened, including access/fresh-randomness, finite probability/independence, Markov/Chebyshev/union bound, instrument and channel suppliers.

Additional confirmed defect discovered during risk review: `thm-qa-34-adaptive-failure-union-bound` omitted nonnegativity of its budgets. Take L=2, stage 1 failing surely, delta1=1, delta2=-1. No successful history reaches stage 2, so its bound is vacuous, but the asserted total bound says 1<=0. Added only delta_j>=0, preserving arbitrary nonnegative bounds (no unnecessary upper restriction). Existing proof step 2.1 is now justified when a stage is unreachable. Statement provenance and manifest updated; exact owned citation mirrors refreshed. Repair confidence 1; row `qc60-b58-3a-negative-unreachable-budget`. Direct consumers are allocator correctness, whose delta/L is positive, linear-combination correctness, which uses the unchanged geometric expectation clause, and the owning A-page, whose wording remains true. No consumer repair or further hop is needed.

Outside-scope alert: `thm-qc-channel-composition-hybrid-bound` Statement quantifies over finite-dimensional channels without explicitly restricting its three spaces to nonzero. For H0=H1=0,H2=C, its raw diamond distances are outside `def-qc-diamond-norm`'s domain, just as in the confirmed contract defect. Required owner disposition: supplier-owning batch should qualify its spaces, then check direct consumers supplier-first. The owned channel-hybrid theorem already requires all spaces nonzero and uses only valid instances; this alert does not invalidate that argument. No outside carrier edited.

Next: level-17 risk reviews, then ModFKV and Tang, including the remaining threshold-definition consumer checks.

## Completed level-17 reviews

Recorded complete risk reviews for exponential Gram concentration (finite tilted-mgf and bounded-differences proof, normalized rows/columns), error-budget correctness (positive budgets and explicit cost accounting), linear-combination correctness (valid acceptance ratios, finite caps, exact accepted law), tensor-channel bound (nonzero prefix spaces, reference-entangled inputs), and the three-stage example (root-convention rank-one effects and 3/100 arithmetic). No further defect found in these arguments.

Completed the end-to-end definition's remaining direct reference consumers: normalized-vector TV lemma, Tang theorem, and entry-query counterexample use only its unchanged finite total-variation definition. These uses do not involve channel-space admissibility. Along with the previously recorded four channel/allocator consumers and A-page, this exhausts the direct search; no consumer edit is needed.

Raw hybrid supplier proof was read fully: its Given already restricts H0,H1,H2 to nonzero, and the composition-norm algebra is sound there. The outside alert is a Statement-versus-Given mismatch, not a defect in its valid nonzero-space instances. The tensor supplier explicitly states nonzero spaces and proves its two-sided norm and error assertions; no analogous alert applies to it.

Next: complete ModFKV risk review at level 18, then Tang at level 19. No open local prerequisite blocker so far.

## Completed level 18: ModFKV

Verified its three proof steps and recorded complete risk review: the explicit sample ceiling satisfies the exponential bound, tK<=1/2, and the deterministic error is below epsilon F. The rank and empty-retention cases, conditional second sketch and zero-probability INVALID branch are sound. The definition's arbitrary band projection remains sufficient; no consumer used the deleted kernel-invariance sentence. Exact arithmetic/access/SVD operation counts are explicitly scoped.

Tang v3 §2.1 (PDF pp. 8–9) actually permits a positive contraction on the middle subspace. The local definition selects projection-valued targets; its stronger local conclusion is proved by the explicit band-rounding argument. Tang §4.2, Theorem 4.4/Algorithm 2 and the following description/cost calculation (PDF pp. 14–16), were read in full through the quoted local use. Local concentration and deterministic estimates independently supply the guarantees.

Next: Tang's final eight-step proof and the reader's two corrections.

## Completed level 19: Tang

Accepted the reader's repair, confidence 1. Current raw SHA256 `ec9469a78b1fd960e79b1d2a063dc2b61c57dae5efdeebc49d2a7bd629551e3c` equals reader-post; pre was `cf89e2096809edfc69c150f47056cf846cc2ec826a2a73cf79a8578c2620f855`. Independently checked all eight current steps and supplier statements. In 7.1 the explicit identity D_i=A_i VV^T and norm bound lambda_max(V^TV)<=1+tK<=3/2 correctly justify absorbing the additive 1 in the refinement factor. The reader's added SVD/operator-norm dependencies and corrected axiom-use locator were missing from the manifest; mirrored them there without changing the accepted item bytes. The prior undefined M and nonexistent axiom locator are recorded as separate nonfatal defects.

The probability model is substantive: countable choice and dependent choice enter through the countable product in 3.1; summable stage failures give both uniform good-estimate confidence and eventual almost-sure accuracy. A nonzero realized row implies z!=0; this proves termination without querying its full norm. The stopping threshold gives the claimed relative error. The finite rejection cap is executable on bad histories too; confidence and exact conditional accepted laws are carefully separated. Recomputed cancellation <=2K/q, finite cap, the three failure budgets, and both resource exponents and row refinement factor. No full arbitrary-index choice or unsupported conditioning on the nonzero-row event is used. Current detailed risk review is complete.

Remaining threshold-target consumers `thm-qa-34-modfkv-low-rank-approximation`, Tang and the owning A-page remain valid; the downstream dequantization remark preserves the nonzero-row and countable-model caveats. All direct consumers of the repaired adaptive theorem remain valid. No affected consumer outside batch 58 needs an edit.

## Sources and evidence limits

Tang v3 §4.1, Propositions 4.2–4.3 (PDF pp. 12–13), and §4.3/Algorithm 3, correctness and cost calculation (pp. 17–18), support the model and method; the local proof supplies its explicit caps and adaptive stopping argument. FKV author-hosted manuscript PDF p. 6 states the truncated-SVD optimum; the local rank proof was independently checked. Watrous §3.3.2, Definition 3.43, Theorem 3.46, Proposition 3.48 and Theorem 3.49 (printed pp. 170–175, PDF pp. 178–182) give the raw map-norm, composition and tensor interfaces. No external citation substitutes for a local supplier proof.

Existing delegated `template_review` records in the batch contracts retain their historical item/row hashes and proposal references; they were not restamped or represented as current by this review. The new specific risk reviews bind current item bytes separately. Owner/engine must refresh any historical boundary stamp required by its gates. The aggregate proof-contract mirror was merged only for batch-58 entries. No judge cycle, decision stamping, publication or run control was performed.

## Final dispositions and checks

Exactly three routed decisions are written in the task-named decisions JSON:

- `touched:58:def-qa-34-threshold-band-svd-target`: `accepted_repair`.
- `refuter:58:1`: `confirmed_fatal`, locally repaired with confidence 1.
- `touched:58:thm-qa-34-tang-recommendation-sampler`: `amended_repair` (mathematical reader repair retained; manifest and contract bookkeeping completed).

Five closed rows were appended through the serialized defect-ledger tool: `qc60-b58-3a-mixed-null-band-projection`, `qc60-b58-3a-nonzero-channel-spaces`, `qc60-b58-3a-tang-undefined-M`, `qc60-b58-3a-tang-choice-locator`, and `qc60-b58-3a-negative-unreachable-budget`. The additional adaptive-budget defect is linked from its current risk/repair record and this report; the original scope owes no separate decision for that previously untouched/unflagged item, so no fourth obligation was invented. The append tool validated and appended all five rows and refreshed its generated view. Mechanical contract failures received no defect rows.

Initial strict contract check found five stale quote mirrors and Tang step 7.1's omitted F8 input. Refreshed the exact owned quotes for trace-norm triangle inequality, circuit cost model, threshold target and computational basis statements; added F8 to that derivation's inputs. Final `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-58.proof-contracts.json --strict`: 19/19 items checked, 0 errors, 0 warnings. Final `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-58.proof-contracts.json --require-reviewed`: 0 errors, all fifteen HIGH/CRITICAL reviews complete. Each risk review is specific to the proof and records the actual current item raw hash.

Reflow reported both locally edited items unchanged. Scoped precheck on the two locally edited and two reader-repaired items checked the two proofs with 0 failures (the two definitions have no phase proofs). Scoped rendercheck passed all four files. After the final item edits and formatter, ran once in one batch:

`node tools/proof-layout.mjs items/def-qa-34-end-to-end-error-contract.md items/thm-qa-34-adaptive-failure-union-bound.md items/def-qa-34-threshold-band-svd-target.md items/thm-qa-34-tang-recommendation-sampler.md`

Result: 4 items, 12 steps, 0 defects. No later item edit was made. This is local mechanical validation, not judging or certification.

No substantial unmet prerequisite blocks a sound owned argument, and no local escalation was cleared without resolution. The batch-6 raw-hybrid Statement alert remains for its owner; its valid nonzero-space proof suffices for the assigned consumer. Existing historical boundary stamps remain unmodified and require separate owner/engine currency handling. Published content was read-only, with no new defective published item found; no published-consumer ledger entry was therefore needed. The frontier-dependency ledger now records owned consumers and the exact outside alert. Stable IDs and all withdrawal proposals were preserved.

Read-only live status at 2026-10-16T03:27:34Z confirmed this run is active under tools/autopilot with Step 3a in progress and the separate batch-12 specification blocker. No scheduling, retries, gate battery, stamp, judge, publication or commit was initiated. All authorized batch-58 local work is complete; owner/engine disposition of the outside alert and historical boundary currency is the next action.
