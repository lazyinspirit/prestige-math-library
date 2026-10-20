# Reader report — batch 95

Run: `machine-learning-all-101-2026-10-19`  
Role: Step 3a reader  
Scope: batch `95`

## Opened inventory

Instructions and controls: `CLAUDE.md`, `README.md`, `briefs/reader.md`, the relevant item/algorithm/page sections of `SCHEMA.md`, the relevant review/algorithm sections of `WORKFLOW.md`, the batch manifest, and the active autopilot status.

Pages:

- `library/machine-learning/low-rank-adaptation-and-parameter-update-geometry.md`
- `library/machine-learning/low-rank-adaptation-and-parameter-update-geometry-examples.md`

Assigned items, read in dependency order:

- `def-low-rank-adaptation-of-a-linear-layer`
- `alg-finite-budget-low-rank-adaptation`
- `thm-low-rank-adapter-factorization-ambiguity`
- `thm-low-rank-adapter-merging-and-gradients`
- `rem-adaptation-rank-and-empirical-transfer`
- `ex-low-rank-adapter-change-of-basis`
- `ex-rank-one-adapter-cannot-realize-full-rank-update`
- `ex-zero-zero-initialization-stalls-adaptation`
- `ex-merged-and-unmerged-adapter-forward-pass-agree`

Dependencies read to check these claims:

- `def-feedforward-neural-network` (current-run draft supplier)
- `def-finite-straight-line-computational-program`
- `alg-reverse-mode-automatic-differentiation`
- `thm-singular-value-decomposition`
- `alg-backpropagation-through-shared-parameter-recurrence` (current-run draft supplier)
- `thm-shared-parameter-backpropagation-gradient-formula` (current-run draft supplier)
- `thm-reverse-mode-computes-gradient`
- `thm-chain-rule-for-total-derivatives`

The batch 95 proof contract was also reviewed and updated for the repaired theorem.

## Review and repair

The factor shapes, rank bound, SVD factor construction, change-of-basis non-identifiability, matrix gradient formulas, zero-initialization calculation, and merged/unmerged output calculations are supported by their stated hypotheses and dependencies. The diagrams in the opened feedforward-network and shared-parameter-recurrence suppliers have arrows and labels consistent with their accompanying text; the assigned items contain no diagrams.

One defect was repaired in `thm-low-rank-adapter-merging-and-gradients`, under `Statement` and proof steps 1.2, 2.1–5.1. The original statement attached the algorithm's every-step exact-gradient claim to a fixed empirical loss over a list of examples, while the assigned algorithm permits each step to use a different ordered minibatch, including repeated indices. The proof already enumerated a step's minibatch in 1.2 but called it the fixed loss in 5.1, so the stated link between the algorithm and that fixed objective was not established. The statement now defines the batch objective \(\mathcal L_t\) for each step and its gradient \(G_t\); the proof applies the recurrence, chain-rule, Frobenius-gradient, and reverse-mode arguments to that objective at each successful step. This preserves the full-data gradient formula and makes the procedure claim match the algorithm's admitted minibatches.

Updated the corresponding derivation entries for steps 1.2, 2.1, 3.1, 4.1, and 5.1 in `research/machine-learning-all-101-2026-10-19-batch-95.proof-contracts.json`. The item had no `verification.judge` record.

Checks after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-low-rank-adapter-merging-and-gradients.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-low-rank-adapter-merging-and-gradients.md` — pass.
- `node tools/proof-layout.mjs items/thm-low-rank-adapter-merging-and-gradients.md` — 9 steps, 0 defects.

No confirmed defect remains in the other assigned items or opened dependencies. No links interrupt an assigned statement, definition, or example description. The report records the sole repair; there are no uneditable findings.

## Page verdicts

- `low-rank-adaptation-and-parameter-update-geometry` — pass. Frontmatter-only page with an empty body, `page_layout: compact-v1`, and the assigned A-item inventory and prerequisites matching the manifest.
- `low-rank-adaptation-and-parameter-update-geometry-examples` — pass. Frontmatter-only page with an empty body, `page_layout: compact-v1`, and the assigned example inventory and companion prerequisite matching the manifest.

## Blockers

No batch 95 blocker. The active run status separately reports `3a-collect` blocked after `collect-57` failed three times; that blocker covers batch 57 and is outside this assignment.
