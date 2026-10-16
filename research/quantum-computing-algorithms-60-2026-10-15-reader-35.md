# Step 3a reader report — batch 35

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Batch: `35`

## Verdict

No uneditable defect remains. Both assigned pages are mathematically consistent with their items. I repaired two missing algorithm `justified_by` links and made one rounding-proof inference explicit. No other confirmed statement, proof, computation, title, citation, or page-summary defect was found.

## Opened inventory

### Assigned pages

- `library/quantum-algorithms/grover-search-and-invariant-plane-rotations.md` — A page.
- `library/quantum-algorithms/grover-search-and-invariant-plane-rotations-examples.md` — B page.

### Assigned items

The manifest contains 21 A-page items:

- `def-qa-11-marked-search-problem`
- `alg-qa-11-grover-iterate`
- `lem-qa-11-good-bad-decomposition`
- `thm-qa-11-grover-iterate-query-cost`
- `alg-qa-11-known-count-grover-search`
- `lem-qa-11-grover-invariant-plane-rotation`
- `alg-qa-11-known-count-random-iteration-search`
- `alg-qa-11-bbht-unknown-count-search`
- `thm-qa-11-exact-integer-iteration-formula`
- `prop-qa-11-known-count-preprocessing-cost`
- `prop-qa-11-known-count-random-selection-bit-cost`
- `prop-qa-11-known-count-random-gate-accounting`
- `thm-qa-11-integer-iteration-regime`
- `lem-qa-11-random-iteration-average`
- `lem-qa-11-bbht-stage-success-bound`
- `thm-qa-11-bbht-termination-and-success`
- `thm-qa-11-known-count-success-bound`
- `thm-qa-11-known-count-random-success`
- `thm-qa-11-bbht-expected-query-cost`
- `thm-qa-11-known-count-query-cost`
- `thm-qa-11-known-count-random-query-cost`

The B page contains two examples:

- `ex-qa-11-small-grover-rotation`
- `cex-qa-11-rounding-can-overshoot`

### Dependencies and evidence opened

Opened the 39 distinct direct external item suppliers listed by the assigned items, plus the tensor-register definition needed to check the product inner product:

`cor-sine-and-cosine-are-one-lipschitz`, `cor-trigonometric-parity-and-pythagorean-identity`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-inner-product-space`, `def-pi-via-first-positive-cosine-zero`, `def-principal-inverse-sine-and-cosine`, `def-qa-classical-bit-cost`, `def-qa-expected-query-cost`, `def-qa-finite-branch-output-law`, `def-qa-input-encoding-and-size`, `def-qa-phase-query`, `def-qa-quantum-query-algorithm`, `def-qa-quantum-query-complexity`, `def-qa-standard-bit-query`, `def-qa-task-and-promise-domain`, `def-qc-circuit-cost-model`, `def-qc-dirac-notation-conversion`, `def-qc-elementary-circuit-resources`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-ordered-bitstring-encoding`, `def-qc-pure-state-and-ray`, `def-qc-reflection`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `lem-ceiling-and-least-positive-integer-threshold`, `lem-integer-part`, `lem-of-square-monotone`, `lem-qc-tensor-product-basis-and-dimension`, `thm-cosine-has-a-smallest-positive-zero`, `thm-double-angle-and-power-reduction-identities`, `thm-of-square-roots`, `thm-qa-bit-query-to-phase-query`, `thm-qc-bitstring-index-is-bijection`, `thm-qc-computational-basis-orthonormal`, `thm-qc-reflection-unitary-involution`, `thm-qc-unit-vector-projector-is-density`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-derivatives`, and `thm-sine-cosine-signs-monotonicity-and-ranges`.

Read `research/quantum-computing-algorithms-60-2026-10-15-batch-35.source-evidence.json`, the assigned batch notes, and the 18 proof-bearing contracts in `research/quantum-computing-algorithms-60-2026-10-15-batch-35.proof-contracts.json`. Compared their cited supplier and step-input maps with the current item arguments. Read the relevant local source passages: de Wolf, §§7.1–7.2, local text lines 4451–4828; Childs, §§19.1–19.3, lines 8148–8585; and Brassard–Høyer–Mosca–Tapp, §2, lines 300–525. De Wolf supports the phase-query rotation and integer success law; Childs's quantum-walk query construction is separate from the one-bit-query phase-kickback implementation proved locally; the local BBHT bound fills in the expected-cost sketch in BHMT.

## Repairs

- `alg-qa-11-known-count-grover-search`: added `justified_by: [prop-qa-11-known-count-preprocessing-cost]`. That proposition depends on this algorithm and proves the doubling/binary-search termination, exact recurrence list, and selection cost needed for the procedure to be well-defined.
- `alg-qa-11-known-count-random-iteration-search`: added `justified_by: [prop-qa-11-known-count-random-selection-bit-cost]`. That proposition depends on this algorithm and establishes the finite binary search and iteration-label bound used by its selection procedure.
- `thm-qa-11-integer-iteration-regime`: in proof step 1.1, made explicit that cosine is positive at $\pi/4$ by strict decrease and $\cos(\pi/2)=0$, and that $\theta>0$ before replacing $|\theta|$ by $\theta$ in the Lipschitz bound. Updated the matching `1.1` derivation in the batch proof-contract file. The repair uses the existing dependencies and does not change the theorem statement.

No stale `verification.judge` record was present on the changed items. Reflow reported the three changed item files unchanged. Precheck passed: both algorithms had 0 checked proof steps and 0 failures; the theorem had 1 checked step and 0 failures. The final batched layout command passed with 3 items, 5 proof steps, and 0 defects. An earlier layout attempt hit the renderer's internal timeout; the final rerun passed.

## Page verdicts

- `grover-search-and-invariant-plane-rotations`: pass. The summary accurately separates exact known-count maximization, fixed-round randomized known-count search, and unknown-count BBHT; it preserves the distinction among query, gate, classical preprocessing, and verification costs, as well as the no-finite-emptiness-decision boundary.
- `grover-search-and-invariant-plane-rotations-examples`: pass. The $N=4,t=1$ probabilities and period-three pattern follow from the exact integer formula; the $N=2,t=1$ example correctly shows the continuous optimizer $1/2$ is not a legal iteration count. The page is a logical leaf.

## Unedited defects and blockers

No confirmed uneditable defect, proposed withdrawal, or assigned-page prose defect remains. No published or other-batch supplier defect was found in the proof-relevant interfaces reviewed.

There is no reader-local blocker. The Autopilot status read at `2026-10-16T01:01:17.597Z` showed the run still running, with unrelated run-wide blockers: invalid 1-scaffold construction scheduling for `def-qc-effective-unitary-matrix-input` in batch 12, and `3a-split` dispatch `split-10` failed three times. These are outside batch 35 and were not changed.

## Coverage note

All 23 assigned items and both assigned pages were opened, along with the 39 distinct direct external item dependencies and the additional tensor-register source needed for the product-inner-product interface. The full transitive dependency closure and the prose of every page-level prerequisite were not separately audited; only the dependencies needed to trace the assigned claims were followed. No uneditable finding remains.
