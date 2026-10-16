# Batch 40 authoring notes — Adversary Methods and Quantum Query Complexity

## Scope, plan, and design

This batch owns the A/B pair adversary-methods-and-quantum-query-complexity / adversary-methods-and-quantum-query-complexity-examples, at orders 2244 and 2245 in quantum-algorithms. I read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the owner-authoring direction, the assigned task, research/plan-spec.json, the current QA planning exports and operational contracts, and research/quantum-computing-algorithms-60-2026-10-15-batch-dependency-levels.json.

The task says no page-specific design section was found; there is no pair-specific design controlling this page. The root plan and task agree on category, order, title, companion, and the twelve requires pages. There is no current plan-versus-design conflict. The older Reichardt 2009 span-program route is a source-route caveat rather than a plan conflict: its Theorem 10.1 retains logarithmic overhead. The page's tight upper bound is proved locally using the later state-conversion/reflection construction.

The A-page inventory has 29 items: the 21 audited QA16 contracts plus eight local foundations or intermediate results required for complete proofs. The B page has the OR dual certificate and the signed-weight counterexample. The pair stays draft and below the 100-item page cap.

## Authoring order and dependency levels

I recomputed the item graph from the current nonempty manifests plus this pair using only deps edges. No cycles occur in the assigned slice. The assigned item levels, in supplier-first order, are:

- 0: lem-qa-16-finite-sdp-strong-duality, lem-qa-16-schur-product-psd
- 10: lem-qa-16-effective-spectral-gap
- 17: lem-qa-16-query-unitary-normal-form
- 19: def-qa-16-boolean-query-domain
- 20: alg-qa-16-controlled-consistency-reflection, def-qa-16-input-mismatch-matrices, def-qa-16-query-address-projectors
- 21: def-qa-16-filtered-gamma2, lem-qa-16-general-adversary-finite-and-attained, thm-qa-16-controlled-consistency-reflection-correct
- 22: def-qa-16-general-adversary-bound, lem-qa-16-filtered-gamma2-well-defined, thm-qa-16-controlled-consistency-reflection-query-cost
- 23: def-qa-16-nonnegative-adversary-bound, lem-qa-16-adversary-progress-endpoints, lem-qa-16-nonconstant-adversary-at-least-one, lem-qa-16-one-query-progress-change, thm-qa-16-dual-vector-characterization
- 24: alg-qa-16-dual-adversary-reflection-evaluator, lem-qa-16-nonnegative-dual-overlap-upper-bound, prop-qa-16-general-versus-nonnegative-adversary, thm-qa-16-filtered-gamma-adversary-equality, thm-qa-16-general-adversary-lower-bound
- 25: prop-qa-16-ambainis-base-separation, thm-qa-16-adversary-composition-lower-bound, thm-qa-16-dual-evaluator-success
- 26: thm-qa-16-dual-evaluator-query-cost
- 27: thm-qa-16-general-adversary-tightness

B-page levels are:

- 24: ex-qa-16-or-dual-certificate
- 26: cex-qa-16-negative-weights-matter

The cross-batch input records 129 direct in-run supplier edges, 105 transitive in-run suppliers, and 102 transitive root suppliers. It records 38 direct external supplier IDs; 18 published root supplier bodies were inspected and excerpted, while the remaining 84 transitive roots (all published carriers) are explicitly listed as unreviewed rather than independently recertified. The current scheduler input recorded in the dispatch is 8a8741bd10bd2c8045ab35f84063b17c7eaf83424674eeb221f486015b3f7848. The shared dependency artifact has a different input hash; I leave that shared owner artifact untouched and record the freshness discrepancy for owner recomputation.

## Supplier reconciliation

I inspected each direct supplier carrier actually used in the proofs, including its statement/definition and proof where present. Direct in-run suppliers are the QA25 promise/query algorithm, bounded-error correctness and query-complexity definitions; QA26 standard XOR bit query; QC10 clean ancillas; QC02 register/computational-basis statements; QC03 pure-state interface; QC08 controlled-unitary, reflection, global-phase and reflection-sign theorems; QC09 deferred measurement; and QA31 phase-estimation algorithm, access-cost and tail theorem. The dependency input records their exact actual excerpts, consumers, levels, and availability. These bodies are draft content, not independent acceptance.

I also read the actual published direct definitions and theorem proofs used for inner products, adjoints, PSD operators, operator norms, the real/complex spectral theorem, SVD, strict separation, operator norm/singular-value equality, trace, Euclidean closure, Cauchy–Schwarz, Heine–Borel, compact images, compact subsets being closed, the extreme value theorem, and finite-dimensional orthogonal decomposition and orthonormal bases. The effective spectral-gap supplier proof was reduced to the exact identity Pi w=(I−U)w/2 when Delta w=0; no Jordan-lemma citation is needed. The bit-query normal form pads inactive slots with response |+>, so it does not assume controlled access to an unknown oracle. The controlled-reflection construction uses the exact plus-on-range reflection sign and two ordinary self-inverse queries.

The proof contracts contain exact supplier-section excerpts and list every proof step's inputs. The finite SDP dual used in the vector characterization includes explicit strict feasible points for both sides, scalar slack variables for row/column inequalities, the Lagrangian block PSD constraints, and the reduction of their dual to the adversary spectral optimization. The Boolean output-label code is |x_i xor f(x)>; an output-only label would destroy required cross-output terms.

## Source reading and retrieval

Two independent complete lecture-note treatments support the A page: Andrew Childs, Lecture Notes on Quantum Algorithms, complete 191-page document with the complete relevant passages in §§23.1–23.2, §24.1, and §24.6; and Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page document with §§12.1–12.4 inspected. Their actual prior full-text fetch stamps are retained in batch-40.coverage.json.

I also read the complete relevant proofs in Lee–Mittal–Reichardt–Špalek–Szegedy, Quantum Query Complexity of State Conversion, §§3.1–3.4, §§4.1–4.2, Appendix A.1, and Appendix C; and Høyer–Lee–Špalek, Negative Weights Make Adversaries Stronger, §§2.2, 6.1–6.2, and 7.1. The latter full PDF and extracted text are cached under research/quantum-computing-algorithms-60-2026-10-15-batch-40.sources/. Reichardt 2009 Theorem 10.1 and §11 were read only to establish the logarithmic-overhead caveat; I do not use that source as the tight upper-bound proof.

Every harvested source result has an included or inline disposition in batch-40.coverage.json. No retrieval failed; no source was dropped; no recovery search was needed; therefore no source_resolution record was created. The Høyer–Lee–Špalek source received its missing full-text fetch stamp in the final check; the coverage now has 5/5 verified sources.

## Mathematical route and caveats

The signed progress endpoint bound is proved by factoring the cross-output final-state overlap into correct/wrong measurement components and balancing the two factors; this yields the exact constant 2√(ε(1−ε)) even for signed Γ. The one-query change is proved directly from the XOR oracle's response-bit |+>,|−> action and the orthogonal address projectors.

The filtered-γ₂ factorization uses finite-dimensional vector families, assigns each off-diagonal target entry to a mismatch coordinate, proves feasibility iff the diagonal vanishes, and obtains attainment by minimizing the continuous cost on a compact feasible sublevel set. Boolean filtered-γ₂ equality is exact. The evaluator's false-positive calculation separates phases at ω=1/(4A): low-phase mass is at most 3/64; the phase-label-zero tail outside that interval is at most 1/38 for M≥512A, giving a total below 1/3. Its exact query count is 2(M−1). No gate-efficiency claim is made for the reflection about the full witness span.

The sorted-four-bit function's nonnegative value is proved exactly by both an explicit matrix and equivariant input distributions. The signed matrix uses rational weights scaled by 999/1000; the filtered block eigenvalues are bounded exactly by 1.001 before scaling. The iterated separation uses the signed composition lower bound and a recursively producted input-distribution certificate for the nonnegative upper bound.

## Run state and scoped-check record

At dispatch, .autopilot/ identified the native run at 1-scaffold with batch 40 dispatched. This batch does not modify .autopilot/, shared plans, other pair files, published content, engine state, or verdicts.

The final batch-dependency recomputation from current manifests keeps batch 40 at level 13 but adds batch 9 to its required batches: current requires are 1, 2, 3, 8, 9, 10, 14, 25, 26, and 31, while both the dispatch and recorded shared dependency artifact list omit 9. The direct route is the required `uniform-circuit-families-promise-problems-and-complexity` page, which itself requires `circuit-syntax-denotational-semantics-and-measurement`; the assigned `lem-qa-16-query-unitary-normal-form` consumes `thm-qc-deferred-measurement` from batch 9. I read that supplier body and retained the dependency. The recomputed batch input hash is `4b6cb99be36a82f245ecf62a8f78e4cde69502b94cca4a201ab1d1d5305ac3ed`; the shared artifact still has `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`. I did not update the shared owner artifact; the owner should recompute it and reconcile the dispatch list.

Scoped checks after final item edits: dependency slice 31/31 with no cycles and maximum level 27; precheck 31/31; proof-layout 31 items, 99 steps, 0 defects; strict proof contracts 31/31, 0 errors/warnings; renderer check 33 assigned files, clean; content-policy 31 items, clean; coverage 1 page, 19 harvested results, clean; source-fetch 5/5 verified, 0 drops; focused depcheck passed. The run-wide item-level check remains blocked only by the empty unrelated page `quantum-sampling-expectation-and-monte-carlo-examples`, missing/invalid level on `lem-qa-18-johnson-stored-data-query-access`, and six stale QA34 labels: `lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-tang-without-sampling-access`. The global batch dependency check also reports the shared input-hash mismatch above; neither owner scope was edited. Step1 author-readiness records were written with `node tools/step1-decisions.mjs record` for all 31 items, using their exact direct dependency lists; the assigned hash check reports 31 ready, 0 open.
