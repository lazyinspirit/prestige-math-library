# Batch 54 — authoring and handoff notes

## Governing inputs and plan reconciliation

- Read the current CLAUDE.md, SCHEMA.md, WORKFLOW.md, owner-authoring direction, batch task, QA-R5 plan materials, plan-spec.json, batch dependency-level input, and the current supplier carriers before authoring.
- The task says “design: none found.” There is no standalone QA30 design file, but the current audited QA-R5 planning section contains QA30 and the binding OP7/OP8 operational contracts. The owner direction and current plan control, so the QA30 section and OP7/OP8 were used. The old task statement was not treated as evidence that no design exists.
- plan-spec.json has the assigned A/B page names, order 2272/2273, category, companion relation, and page requirements. Its item arrays are pre-authoring placeholders. The audited QA-R5 proposal has 27 A items and 3 B items; this batch adds five local prerequisite items, for 32 A items and 3 B items. Both pages remain below the 100-item cap.
- The current pages preserve all fifteen A-page requirements from plan-spec.json and the B page’s A-page prerequisite. The two requested library page files are draft pages; no published content, shared plan, shared operational contract, engine state, or verdict was changed.

## Inventory and dependency levels

The batch manifest is the controlling inventory. Levels were recomputed from actual in-run item suppliers, including the current QA29 carriers at levels 23 and 24. The page dependency level remains the dispatched level 15. The largest assigned item level is 30.

| Level | Items |
|---:|---|
| 0 | lem-qa-30-hermitian-product-trace-real; lem-qa-30-positive-product-trace-nonnegative |
| 1 | def-qa-30-sdp-primal-dual-pair; lem-qa-30-normalized-hermitian-observable-effects |
| 2 | def-qa-30-mmw-game; thm-qa-30-sdp-weak-duality |
| 3 | lem-qa-30-exp-quadratic-bound; ex-qa-30-sdp-weak-duality |
| 4 | thm-qa-30-mmw-regret-bound |
| 5 | lem-qa-30-mmw-dual-output-feasibility |
| 7 | def-qa-30-variational-quantum-algorithm |
| 8 | def-qa-30-classical-optimizer-interface; def-qa-30-qaoa-circuit-and-objective; def-qa-30-vqe-rayleigh-objective; thm-qa-30-parameter-shift-rule |
| 9 | thm-qa-30-qaoa-expectation-bound; thm-qa-30-vqe-rayleigh-ritz-guarantee |
| 10 | lem-qa-30-capamplify-state-output-bound; cex-qa-30-variational-global-optimum; ex-qa-30-vqe-and-qaoa-objectives |
| 11 | def-qa-30-sdp-reference-state-access |
| 12 | lem-qa-30-sdp-trace-mean-ratio-identity |
| 14 | def-qa-30-quantum-membership-separation-model; def-qa-30-sdp-sparse-oracle-model |
| 15 | alg-qa-30-quantum-membership-to-separation |
| 16 | thm-qa-30-quantum-membership-separation-cost |
| 17 | alg-qa-30-sdp-gibbs-purification |
| 18 | thm-qa-30-sdp-gibbs-state-error-cost |
| 24 | alg-qa-30-sdp-matrix-expectation-oracle |
| 25 | thm-qa-30-sdp-matrix-expectation-cost |
| 26 | lem-qa-30-mmw-to-sdp-feasibility |
| 27 | thm-qa-30-sdp-binary-search-correctness |
| 28 | alg-qa-30-quantum-sdp-solver |
| 29 | thm-qa-30-quantum-sdp-solver-guarantee |
| 30 | thm-qa-30-quantum-sdp-solver-cost |

The QA29 source page and its A inventory are now present. Its expectation-estimator algorithm is at item level 23 and its error/cost theorem at level 24. These actual levels determine the batch-54 consumers. The QA29 examples page still has an empty scaffold inventory; batch 54 does not require that B page.

## Mathematical scope and authoring decisions

- The two trace lemmas were proved locally, including dimension zero. The normalized observable lemma proves the POVM effects and expectation identity. The SDP page fixes maximize/minimize signs and proves weak duality without strong-duality or attainment assumptions.
- The MMW update is well-defined by positive definite finite matrix exponentials. The bounded-loss scalar exponential inequality is proved for both signs. The regret proof uses the current published Golden–Thompson carrier, a positive-product trace argument, the partition-function recurrence, and the least-eigenvalue lower bound.
- The no-failure MMW dual-certificate lemma now states the exact shifted trace-estimate condition and proves the feasibility and objective increment. The full Arora–Kale feasibility reduction, complementary primal certificate, and noisy-oracle soundness are not proved in this batch and remain escalated.
- The VQA, optimizer, QAOA, and VQE definitions state finite inputs, costs, and output conventions. Local proofs establish the real objective, the parameter-shift identity under its single Pauli-generator hypothesis, the QAOA expected-score bound, and the Rayleigh–Ritz equality condition including degenerate ground spaces. The B page directly verifies the scalar SDP, the restricted-ansatz counterexample, and a two-qubit VQE / one-edge QAOA distribution.
- CapAmplify is proved for a generic flagged quantum state, not inferred from classical repetition amplification. Its random iteration uses a finite b-bit draw; an out-of-range integer is a failed branch. The accepted draw has average Grover success above 1/8, and the acceptance probability gives randomized-branch success at least 1/16. The proof also gives the two-dimensional rotation, good-ray preservation, and the capped-round failure bound.
- The reference state uses the exact H/CNOT preparation for power-of-two dimensions. Arbitrary dimensions carry the supplied cost CΦ; no padded Gibbs trace is treated as unchanged.
- The trace-ratio lemma uses the M=0 observable block as the denominator baseline. It proves pM/p0 = 1 + Tr(MρG)/2, with p0 positive.
- The Gibbs-error theorem has the needed condition ζ ≤ √pG/2. Under it, the implemented flag is nonzero with probability at least pG/4, and normalized vector error is at most 2ζ/√pG. The original broader statement did not justify these conclusions.
- The standalone matrix-expectation item requires an explicit normalized-purification circuit and inverse. The solver’s OP8 flagged-trace route remains a separate procedure; a postselected state does not supply a free inverse.
- Membership-to-separation keeps the complete finite OP7 instructions and source Theorem 23 target. The local query theorem is escalated because the complete smoothing, finite-grid, probability, and query-count argument is not authored here. Its further Õ(n) optimization corollary also needs the classical separation-to-optimization theorem under exact weak-oracle, radius, precision, and bit-cost hypotheses; no local supplier was available, and no proof was invented. OP7 returns the negative of the source normal, converting the source’s “≤” halfspace to the assigned “≥” convention.
- The sparse solver definition preserves OP8’s finite subroutines and cost coordinates. OP8 maps a capped/statistical ORACLE_FAIL to HIGHER; that branch is unsound because failure to find a point is not a certificate of emptiness. This assigned solver definition propagates ORACLE_FAIL as UNDECIDED/FAIL. The shared OP8 text was left untouched, and the solver plus its guarantees are escalated for owner reconciliation.
- The end-to-end MMW feasibility reduction, threshold binary-search invariant, solver guarantee, and solver resource theorem remain explicit escalations. Their statements were retained; no partial proof or source citation is presented as acceptance.
- No choice axiom is used. All finite-dimensional arguments and finite random schedules are choice-free.

## Source reading and disposition

The source ledger is research/quantum-computing-algorithms-60-2026-10-15-batch-54.source-coverage.json; full-text reading records and fetch evidence are in the matching source-evidence.json.

- van Apeldoorn, Gilyén, Gribling, and de Wolf, Quantum SDP-solvers: Better upper and lower bounds, arXiv:1705.01843v4: complete 69-page PDF read sequentially. The SDP normalization, Gibbs/trace approach, MetaAlgorithm 1, MMW route, appendices, and source complexity qualifications were inspected. Local proofs are supplied where claims are ready; the source’s unsupported solver stages remain escalated.
- Brandão and Svore, Quantum speed-ups for solving semidefinite programs, arXiv:1609.05537: complete 24-page PDF read sequentially as an independent SDP treatment.
- van Apeldoorn et al., Convex optimization using quantum oracles, arXiv:1809.00643v4: complete 29-page PDF read sequentially. The weak-oracle definitions, Lemmas 14–21, and the full proof of Theorem 23 were inspected. Its membership-to-separation target is recorded; the local proof remains escalated. The cited classical optimization composition was not treated as a complete local proof.
- Cerezo et al., Variational quantum algorithms, arXiv:2012.09265: complete 33-page PDF read sequentially. The VQA objective, optimizer caveats, QAOA/VQE discussion, and parameter-shift equation (7) were inspected; the assigned algebraic claims are proved locally.
- Andrew Childs, Lecture Notes on Quantum Algorithms: complete 191-page course-note corpus read sequentially. Its SDP weak-duality discussion and quantum circuit/access conventions were re-inspected. This is the full lecture-note treatment for the page.
- Farhi, Goldstone, and Gutmann, A Quantum Approximate Optimization Algorithm, arXiv:1411.4028v1: complete 16-page PDF read sequentially. The QAOA state/objective, MaxCut cost operator, measurement procedure, and stated limits on angle optimization were inspected.
- Gilyén et al., Quantum singular value transformation and beyond, arXiv:1806.01838: complete 67-page PDF read sequentially; QSVT error and implementation conventions used by the conditional Gibbs bound were re-inspected.
- Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, arXiv:quant-ph/0005055: complete 32-page PDF read sequentially; amplification and amplitude-estimation hypotheses were inspected.
- Montanaro, Quantum speedup of Monte Carlo methods, arXiv:1504.06987v3: complete 28-page PDF read sequentially; reversible-sampler and expectation-estimation access/cost conditions were inspected.

The source-fetch checker found no retrieval failures and no dropped sources. Eight existing full-text stamps and attempt histories were reused. The A- and B-page occurrences of the newly added Farhi PDF were each fetch-stamped successfully. No recovery retry or source-resolution drop was needed. The final check verified 12/12 source occurrences with no new stamps. Every harvested result and its item disposition is listed in the source-coverage file.

## Supplier review and reconciliation

- All fifteen required page bodies are present and were inspected. The QA28 and QA29 page bodies are drafts, and their item proofs remain drafts; no acceptance is inferred from their presence.
- Current QA29 carriers and the current A-page inventory agree on levels 23 and 24. The QA29 examples inventory remains empty but is not a QA30 prerequisite.
- The actual lem-finite-dimensional-golden-thompson-trace-inequality carrier is published and its complete proof was read. Older QA-R5 planning text still calls it a draft; this stale status is recorded, and the current carrier controls.
- Current QC interface bodies used by QA30 were checked for basis order, root inner-product convention, phase signs, inverse/control access, POVM semantics, circuit cost, register order, and reflection signs. The 49 unique direct external item suppliers and exact excerpts are recorded in the cross-batch dependency file.
- The current shared scheduler input remains the dispatched hash 3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9. Shared scheduler state was not changed.

## Scoped check record

| Check | Result |
|---|---|
| Scoped precheck on 35 assigned carriers | Pass: 23 proof-bearing carriers checked, 0 failures. |
| proof-layout on 35 assigned carriers | Pass: 35 items, 49 steps, 0 defects. |
| content-policy on batch-54 manifest | Pass: 35 items, 0 errors, 0 warnings. |
| strict proof-contract check | Pass: 35/35 entries, 0 errors, 0 warnings. |
| focused depcheck on the 35 assigned IDs and their prerequisite closure | Pass: 0 errors, 0 warnings; 1,669 closure items and 455 closure pages checked. |
| rendercheck on 35 carriers and both pages | Pass: 37 files, 0 errors, 0 warnings. |
| source-fetch-check with --stamp | Pass: 12/12 source occurrences verified, 0 new stamps on the final run, 0 drops. |
| run-wide item-dependency-levels | Exit 1 on unrelated scaffold issues: the QA29 B/examples inventory is empty and six QA34 carriers have level mismatches. No batch-54 item level was reported inconsistent. |
| run-wide proof-contract-coverage | Exit 1 because the QA29 B/examples inventory is empty. The batch-54 strict contracts themselves pass. |
| Step 1 per-item decisions | Pass: 35 records examined; 29 ready/hash-current, 6 escalated, 0 stale or missing. The six escalations are listed above; readiness records do not constitute independent approval. |

Step 1 decisions below record each item’s dependencies and final ready/escalated disposition. They document authoring completeness and blockers; they are not independent approval.
