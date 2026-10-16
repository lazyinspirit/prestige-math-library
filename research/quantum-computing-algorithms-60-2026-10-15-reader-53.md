# Step 3a Reader Report — Batch 53

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Coverage: batch `53`

## Opened inventory

Pages opened:

- `library/quantum-algorithms/quantum-sampling-expectation-and-monte-carlo.md` — `quantum-sampling-expectation-and-monte-carlo` (A, draft).
- `library/quantum-algorithms/quantum-sampling-expectation-and-monte-carlo-examples.md` — `quantum-sampling-expectation-and-monte-carlo-examples` (B, draft).

All 17 manifest items were opened and reviewed:

- A page: `def-qa-29-expectation-estimation-task`, `lem-qa-29-independent-trial-median-bound`, `lem-qa-29-certified-natural-logarithm-series`, `lem-qa-29-dyadic-parameters-terminate`, `thm-qa-29-classical-mc-chebyshev-baseline`, `thm-qa-29-counting-is-indicator-expectation`, `def-qa-29-coherent-sampler`, `lem-qa-29-coherent-sampler-outcome-law`, `alg-qa-29-amplitude-counting-consumer`, `alg-qa-29-quantum-expectation-estimation`, `alg-qa-29-variance-aware-monte-carlo`, `thm-qa-29-quantum-expectation-error-cost`, `lem-qa-29-positive-mean-dyadic-estimator`, `thm-qa-29-variance-aware-guarantee`, and `thm-qa-29-coherent-query-cost-translation`.
- B page: `cex-qa-29-unavailable-coherent-sampler` and `ex-qa-29-bernoulli-expectation`.

The direct dependency sections and the supporting QA13/QPE arguments needed for this review were opened. This included the finite probability, expectation, independence, variance, concentration, exponential/logarithm, calculus, and rational-parameter suppliers; the register, tensor, state, measurement, Dirac, controlled/inverse access, reflection, circuit-cost, and query-model suppliers; and the QA13 phase-estimation, counting, confidence, and cost suppliers. The QPE review also opened the eigenphase model and algorithm, binary-QFT definition/correctness, finite outcome kernel, geometric sum, superposition law, grid/tail and nearest-label bounds, circular phase distance, sine bounds, Grover eigenphase relation, and exact cyclotomic comparison.

Source checks:

- Ashley Montanaro, [“Quantum speedup of Monte Carlo methods,” arXiv:1504.06987v3](https://arxiv.org/pdf/1504.06987v3): §2.1 Algorithm 1 and Theorem 3 (PDF pp. 7–8); §2.2 Algorithm 2 and Lemma 4 (pp. 9–10); §2.3 Algorithm 3 and Theorem 5 (pp. 11–12). These passages match the bounded-mean reduction, dyadic bins and L2 tail estimate, and coarse-centering construction reviewed here.
- Brassard, Høyer, Mosca, and Tapp, [“Quantum Amplitude Amplification and Estimation,” arXiv:quant-ph/0005055v1](https://arxiv.org/pdf/quant-ph/0005055): §4, Theorem 12 and its proof (PDF pp. 18–19), and Theorem 13 for counting (p. 20). The stated error, success probabilities, endpoint behavior, and counting rescaling agree with the local QA13 suppliers.

## Edit and evidence

- Edited `items/lem-qa-29-independent-trial-median-bound.md`, steps 3.1 and 5.1. Both steps used independence after applying a function to independent finite-valued variables. The cited definition gives independence through generated sigma-algebras, but the inclusion of the transformed sigma-algebras was not stated. I added the finite-fiber argument showing `σ(f(X_i)) ⊆ σ(X_i)` at both uses. This supplies the missing justification for applying product factorization and the median concentration bound.
- Updated the matching step derivations in `research/quantum-computing-algorithms-60-2026-10-15-batch-53.proof-contracts.json`. The item had no `verification.judge` record to remove.
- Validation after the edit: `node tools/tsx-run.mjs tools/reflow.mts items/lem-qa-29-independent-trial-median-bound.md` reported unchanged; `node tools/tsx-run.mjs tools/precheck.mts items/lem-qa-29-independent-trial-median-bound.md` passed; the final `node tools/proof-layout.mjs items/lem-qa-29-independent-trial-median-bound.md` reported 1 item, 5 steps, 0 defects.

No other repair was indicated by the independent checks. In particular, the L2 tail estimate, centered positive/negative decomposition, confidence schedules, endpoint cases, exact access requirements, and query-to-circuit accounting matched their stated hypotheses and dependencies.

## Uneditable defects

None found.

## Page verdicts

- `quantum-sampling-expectation-and-monte-carlo` (A): the summary accurately describes the finite expectation task, coherent-sampler access boundary, classical baseline, bounded-mean estimator, variance-aware construction, and counting specialization. No remaining page-prose defect found.
- `quantum-sampling-expectation-and-monte-carlo-examples` (B): the summary accurately describes the Bernoulli good-state example and the distinction between sample-only and explicitly supplied coherent access. No defect found. B-page prose was not edited.

## Blockers and coverage limits

No batch-53 blocker remains. The recomputed run status was still `running` and separately reported a pre-existing invalid stage-1 scaffold identity in batch 12 (`def-qc-effective-unitary-matrix-input`) and three failed attempts for readers 38 and 44. Those run-level issues are outside this reader assignment.

This review covers the assigned batch and the dependency statements/proofs needed to check its claims; it is not a whole-corpus audit or a new certification of the published foundational items.
