# Step 3a reader report — batch 30

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: independent reader  
Batch: `30`

## Opened inventory

The live run status was `3a-read`; batch 30 had no reader result at review time. All 24 assigned items below are draft items from this run.

Assigned pages opened:

- A page `toric-code-anyons-logical-operators-and-protection` (draft).
- B page `toric-code-anyons-logical-operators-and-protection-examples` (draft).
- Required published page `stabilizer-css-codes-syndromes-and-procedures`.

Assigned items opened in dependency-level order:

- Level 0: `def-qc-tqc-periodic-square-cellulation`; `lem-qc-tqc-finite-square-cycle-is-boundary`.
- Level 1: `def-qc-tqc-toric-checks`; `lem-qc-tqc-contractible-disk-lifts-to-plane`; `lem-qc-tqc-toric-incidence-ranks`.
- Level 2: `def-qc-tqc-toric-excitations`; `lem-qc-tqc-toric-check-commutation`; `lem-qc-tqc-toric-cycle-quotient`.
- Level 3: `def-qc-tqc-toric-hamiltonian`; `lem-qc-tqc-toric-joint-check-eigenspaces`; `lem-qc-tqc-toric-string-syndrome`; `thm-qc-tqc-toric-code-dimension`.
- Level 4: `def-qc-tqc-toric-logical-loops`; `thm-qc-tqc-toric-gap`; `thm-qc-tqc-toric-local-indistinguishability`; `thm-qc-tqc-toric-mutual-sign`.
- Level 5: `def-qc-tqc-toric-energy-barrier`; `thm-qc-tqc-toric-distance`; `thm-qc-tqc-toric-logical-algebra`; `ex-qc-tqc-l3-toric-checks`.
- Level 6: `thm-qc-tqc-toric-constant-barrier`; `thm-qc-tqc-toric-recovery`; `cex-qc-tqc-planar-is-not-toric`.
- Level 7: `cex-qc-tqc-gap-not-physical-protection`.

Direct published item dependencies opened:

- `thm-rank-nullity`; `def-qc-register-and-computational-basis`; `def-qc-tensor-map`; `lem-qc-tensor-product-basis-and-dimension`; `def-qc-pauli-matrices`; `def-qc-local-operator-support-and-weight`.
- `thm-qc-pauli-commutator-is-symplectic-pairing`; `def-qc-stabilizer-code-space`; `def-qc-stabilizer-syndrome-and-logical-operators`; `def-qc-square-planar-surface-code`.
- `thm-qc-stabilizer-projector-and-dimension`; `thm-qc-stabilizer-logical-pauli-quotient-dimension`; `def-qc-stabilizer-distance`; `thm-qc-square-planar-surface-code-distance-and-path-count`; `thm-qc-stabilizer-distance-detection-and-correction`.
- Additional cited recovery target opened: `thm-qc-knill-laflamme-explicit-recovery`.

The batch proof-contract artifact was checked: its `scope` and `contracts` ID lists match the 24-item manifest inventory. It carries an ID roster, not step-level citation quotes; the item Facts & Assumptions and proofs were checked directly. No rendered batch evidence bundle was present in the current run artifacts.

## Review and verdicts

The coordinate definitions give distinct incidences for `L≥3`. The finite-support face-filling formula verifies the square-lattice cycle claim; the connected primal and dual incidence graphs give the two unique global check relations. The torus cycle quotient follows from the spanning-tree cycle basis and the two cut parities. These facts support the independent check rank `2L²−2` and code dimension four.

The check commutation, endpoint syndrome, and joint-sector arguments use explicit support parity. The sector energy formula gives the exact gap, and one-edge errors attain its lower bound. The four displayed loops have the stated pairings and independent logical classes; the cut-parity argument proves distance `L`. The sequential string paths establish the stated constant barrier upper bound. The recovery claim preserves the strict integer condition `2t<L`, which specializes the cited distance theorem correctly.

For local indistinguishability, the support hypothesis places both primal and crossing-dual chains in the disk; the lift and finite face-filling arguments make each centralizing Pauli a stabilizer up to phase, while an anticommuting Pauli has zero compression. The `L=3` calculation, planar-versus-periodic comparison, and global-projector perturbation preserve their stated boundary and physical-model qualifications. The pages’ summaries match the items and do not promote these finite-model results to thermal-lifetime or local-perturbation stability claims.

- A page `toric-code-anyons-logical-operators-and-protection`: **no confirmed defect**.
- B page `toric-code-anyons-logical-operators-and-protection-examples`: **no confirmed defect**.

No confirmed defects were found in assigned items, pages, or the direct dependencies reviewed. No withdrawals are proposed.

## Edits and checks

No files were edited. No item repair, proof-contract update, judge-record removal, reflow, precheck, or proof-layout run was needed.

## Uneditable defects and blockers

None. There is no blocker.

## Coverage limitation

The direct published suppliers used by the batch and the additional explicit-recovery target were opened. Their deeper published dependency ancestry was not independently re-proved; the review used those checked supplier interfaces as established library results. No unresolved issue in the assigned claims depended on that ancestry. No external literature search was needed to settle a mathematical uncertainty because the reviewed claims were resolved by the displayed finite calculations and cited library statements.
