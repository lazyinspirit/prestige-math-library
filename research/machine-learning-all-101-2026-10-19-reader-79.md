# Step 3a Reader Report — Batch 79

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `79`

## Opened inventory

Assigned pages:

- `linear-contextual-bandits-and-linucb` — A page, draft. Its 11 item IDs match the assigned A inventory; the body is empty and `page_layout: compact-v1` is present.
- `linear-contextual-bandits-and-linucb-examples` — B page, draft. Its four example IDs match the assigned B inventory; the body is empty and `page_layout: compact-v1` is present.

All 15 assigned items were opened and reviewed in supplier order:

- Level 0: `lem-linucb-elliptical-potential`, `lem-linucb-trace-determinant-bound`, `lem-linucb-predictable-mgf-substitution`.
- Level 1: `def-linear-contextual-bandit-model`.
- Level 2: `lem-linucb-ridge-information-matrix`, `ex-linucb-feature-norm-violation`.
- Level 3: `lem-linucb-ridge-estimates-are-measurable`, `lem-linucb-gaussian-mixture-supermartingale`.
- Level 4: `alg-linucb`, `thm-self-normalized-linear-confidence-ellipsoid`.
- Level 5: `thm-linucb-regret`, `ex-linucb-two-context-two-action-update`, `ex-linucb-unbounded-parameter-norm`.
- Level 6: `cor-linucb-expected-regret`, `ex-linucb-mean-range-exceeds-one`.

The direct supplier interfaces used by the proofs were opened, including the matrix/determinant/Cholesky, conditional-expectation, martingale, measurability, Gaussian-integral, Tonelli, optional-sampling, Markov, Cauchy–Schwarz, and expectation items listed in the batch dependencies. The current-run supplier `def-online-decision-protocol` (batch 73) was inspected. To check the ML02 page requirement, I also opened `def-linear-regression-objectives` and `thm-ols-and-ridge-solutions`. The 11 page prerequisites on the A page were checked for page identity, status, and inventory; their unrelated item bodies were not audited.

Relevant authoritative source passages were checked against the local arguments: Lattimore–Szepesvári, *Bandit Algorithms*, §19.3, Assumption 19.1, Theorem 19.2, and Lemma 19.4 (PDF pp. 251–252), and §20.1, Theorems 20.4–20.5 (PDF pp. 267–268); Abbasi-Yadkori, Pál, and Szepesvári, “Online Least Squares Estimation with Self-Normalized Processes,” Lemma 1, Theorem 3, Lemma 4, and Theorem 13 (arXiv:1102.2670, PDF pp. 1–5 and 8–9). The relevant arguments support the conditional exponential process, Gaussian mixture, self-normalized radius, elliptical potential, and optimism/regret steps. No mathematical uncertainty remains in those claims.

No TikZ/tikzcd or other diagrams were present in the assigned carriers; no diagram repair or addition was required.

## Repairs and evidence

- `alg-linucb`: removed the sentence inside `## Definition` asserting that the row-elimination failure branch is unreachable. The exact failure branch remains part of the procedure. Its correctness and termination are proved separately in `thm-linucb-regret`, which is the algorithm's `justified_by` result.
- `thm-linucb-regret`: stated explicitly that the confidence input satisfies `0 < δ < 1`. Expanded Proof step 1.1 to show that after `k` pivots the remaining block is invertible, hence a nonzero pivot exists; the same row operations yield `V_t^{-1}`, and determinant changes give `D_t = det(V_t)`. This establishes that the algorithm's failure branch is unreachable on admissible model inputs and that its rounds complete. The proof uses the ridge information-matrix lemma and the cited elementary row-operation determinant theorem.
- `lem-linucb-ridge-estimates-are-measurable`: added the finite-dimensional Borel-coordinate argument, using rational open boxes as a countable basis, to pass from measurable entries to measurable vector/matrix random elements.
- `lem-linucb-gaussian-mixture-supermartingale`: made joint measurability on `Ω × R^d` explicit from the measurable factor projections and the coordinate-generated Borel sigma-algebra before applying Tonelli.
- `cor-linucb-expected-regret`: reordered the proof so the deterministic bound and integrability of `B_n` are proved before using expectation linearity and monotonicity. The resulting bound retains the stated constant.

Regenerated the affected entries in `machine-learning-all-101-2026-10-19-batch-79.proof-contracts.json` for the four proof-bearing edited items. `alg-linucb` has no phase proof steps in its contract; the separate regret-theorem contract records the algorithm's well-definedness proof. None of the edited items had a `verification.judge` record to remove.

Validation after the final edits:

- `reflow.mts` reported unchanged for all five edited item files.
- `precheck.mts` passed for `thm-linucb-regret`, `lem-linucb-ridge-estimates-are-measurable`, `lem-linucb-gaussian-mixture-supermartingale`, and `cor-linucb-expected-regret`; `alg-linucb` had 0 phase proofs to check. The expected-regret proof adopted the checker's dependency-layer renumbering before its final passing precheck.
- `proof-layout.mjs` on all five changed paths: 5 items, 24 steps, 0 defects.
- Same-owner consumer checks after the algorithm-definition and regret-statement edits found only assigned consumers: `ex-linucb-two-context-two-action-update`, `cor-linucb-expected-regret`, and `ex-linucb-mean-range-exceeds-one`. Each was reviewed; the corollary uses $\delta=1/n\in(0,1)$ and the range example only cites the theorem's range hypothesis, so both remain compatible with the explicit confidence-parameter domain.

No other assigned item was edited.

## Defects not repaired

None. There are no unedited mathematical defects or unresolved dependency findings for this batch.

## Page verdicts

- `linear-contextual-bandits-and-linucb`: pass. The assigned item inventory and required-page IDs are present; its required linear-model vocabulary and online timing interfaces were inspected. Empty body and compact layout comply with the page-presentation rule.
- `linear-contextual-bandits-and-linucb-examples`: pass. The four assigned examples are listed once under `examples`, the companion A page is required, and the empty body and compact layout comply.

## Blocker

The live autopilot status remains `running`, with no worker in flight. Its separate `3a-collect` blocker is `collect-57 failed 3x (covers 57)`; it is outside batch 79 and did not prevent this review.
