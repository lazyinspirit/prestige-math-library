# Step 3a reader report — batch 51

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Assigned pages: `block-encoding-linear-systems-and-variable-time-amplification` (A), `block-encoding-linear-systems-and-variable-time-amplification-examples` (B)

## Opened inventory

Opened both assigned pages:

- `library/quantum-algorithms/block-encoding-linear-systems-and-variable-time-amplification.md`
- `library/quantum-algorithms/block-encoding-linear-systems-and-variable-time-amplification-examples.md`

Opened all 21 assigned items:

- A page: `lem-qa-27-even-sign-window`, `def-qa-27-variable-time-model`, `def-qa-27-block-encoded-qlsp`, `lem-qa-27-lcu-projected-block-identity`, `lem-qa-27-supported-pseudoinverse-target`, `alg-qa-27-qsvt-pseudoinverse`, `def-qa-27-cks-sparse-oracle-model`, `thm-qa-27-pseudoinverse-polynomial-degree`, `lem-qa-coherent-amplitude-grid-rounding`, `alg-qa-relative-probability-estimation`, `thm-qa-relative-probability-guarantee`, `alg-qa-27-capped-lower-bound-amplification`, `lem-qa-27-capped-lower-bound-amplification`, `lem-qa-27-low-target-amplification`, `thm-qa-27-vtaa-amplification`, `thm-qa-27-qsvt-inverse-state-cost`, `alg-qa-27-cks-variable-time-linear-solver`, `lem-qa-27-cks-stopping-time-instantiation`, `thm-qa-27-cks-linear-condition-guarantee`.
- B page examples: `ex-qa-27-sparse-diagonal-qlsp`, `ex-qa-27-fixed-vs-variable-time-cost`.

Also inspected the supporting dependency sections used in the local arguments: the QLSP task, block-encoding and access definitions, SVD and Moore–Penrose results, QC control/inverse/measurement and clean-work interfaces, QSP/QSVT procedures and action/error/query results, phase estimation and amplitude-estimation guarantees, amplitude-amplification procedures, QA20 sparse access, QA25 sparse block encoding/simulation and clean-subspace hybrid, and reversible Boolean-circuit embedding. Read the binding OP1A and OP6 sections in `research/quantum-algorithms-planning/operational-contracts.md`.

For the specialized source claims, consulted the primary-source passages in Ambainis, *Variable time amplitude amplification*, Theorem 1 and §§3.1–3.3 (PDF pp. 4–8); Childs–Kothari–Somma, *Quantum algorithm for systems of linear equations with exponentially improved dependence on precision*, Theorem 21, Lemmas 22–23 and §5 (PDF pp. 22–29); and Gilyén et al., *Quantum singular value transformation and beyond*, Lemma 40 and Theorem 41 (PDF pp. 36–38). The local cached source texts and the corresponding arXiv records were inspected.

## Repairs

1. **`def-qa-27-variable-time-model`, Definition.** The model asserted `sum p_i = 1` but did not require every branch to stop by `T_max`; an allowed run could retain unfinished mass, making that assertion false and leaving `T_av` undefined as a stopping-time distribution. Added the final-stop exhaustion condition and made the probability sum follow from it. This matches the stopping-mass convention in Ambainis Theorem 1 and CKS Theorem 21; the assigned CKS construction also explicitly turns any final no-stop branch into a terminal bad stop.

2. **`ex-qa-27-fixed-vs-variable-time-cost`, dependencies, Example, and Fact F2.** Fact F2 used the assigned VTAA theorem’s production expression without naming that supplier or its input condition. Added `thm-qa-27-vtaa-amplification` to `deps`, raised `dependency_level` from 22 to 24, and clarified that the calculation is only the supplied-certificate regime’s production term and excludes `C_build`. The displayed arithmetic and its caveat about no universal speedup remain valid. Updated the batch proof-contract citations for the revised model definition and added the F2 citation to the VTAA theorem.

Neither changed item had a `verification.judge` record. Reflow reported both items unchanged. Precheck reported the definition as 0 proofs/0 failures and the example as 1 proof/0 failures. The required combined proof-layout run reported 2 items, 3 steps, 0 defects.

## Uneditable defects

None identified in the assigned pages, items, or reviewed dependency sections.

## Page verdicts

- **A page — no page-prose defect identified.** Its summary accurately describes the QLSP promise, QSVT route, explicit variable-time resources, terminal branch, and stated limits after the definition repair.
- **B page — no page-prose defect identified.** Its summary matches the two examples and does not claim a universal variable-time speedup. B-page prose was not edited.

## Blocker / handoff note

The repaired example’s dependency and level are not reflected in the supplied batch-51 manifest, which still lists only the QSVT-cost and model dependencies at level 22. The manifest and `research/plan-spec.json` were outside this reader’s edit scope. Resynchronize the planning artifact if the splitter requires manifest parity.

## Coverage limitation

The assigned pages and all 21 assigned items were opened. I checked the supporting clauses needed for the main local arguments, but did not independently audit every transitive proof in the foundational circuit, calculus, and matrix-analysis dependency closures. No finding is based on those unopened transitive proofs.
