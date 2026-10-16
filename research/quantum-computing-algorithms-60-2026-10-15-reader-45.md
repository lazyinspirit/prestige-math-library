# Step 3a reader report — batch 45

Run: quantum-computing-algorithms-60-2026-10-15  
Batch: 45  
Role: reader

## Verdict

The A page and its 15 assigned items pass after the access-condition repair below. The examples page and its three assigned items pass after its two-term example states the inverse access it uses. No confirmed defect remains uneditable, and the findings JSON is empty.

## Assigned inventory opened

### A page

Opened library/quantum-algorithms/lcu-oblivious-amplitude-amplification-and-taylor-simulation.md and all 15 listed items, in dependency order:

- lem-qa-21-pure-state-trace-distance-from-vector-error
- def-qa-21-clean-ancilla-postselection
- lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
- thm-qa-21-clean-ancilla-postselection-probability-law
- def-qa-21-lcu-input-and-access-model
- alg-qa-21-lcu-block-encoding
- def-qa-21-oblivious-reflection
- def-qa-21-truncated-taylor-lcu
- thm-qa-21-lcu-block-correctness
- alg-qa-21-one-step-oblivious-amplification
- thm-qa-21-taylor-tail-bound
- thm-qa-21-oblivious-amplification-block-identity
- lem-qa-21-robust-one-step-oaa-isometry
- alg-qa-21-segmented-taylor-simulation
- thm-qa-21-taylor-simulation-error-and-cost

The page summary accurately describes the finite access model, projected block, postselection, phase convention, Taylor segmentation, retained work registers, and separate resource charges. No page prose edit was needed.

### Examples page

Opened library/quantum-algorithms/lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples.md and all three listed items:

- ex-qa-21-cancelling-normalization-padding
- cex-qa-21-unknown-input-reflection
- ex-qa-21-two-term-lcu-postselection

The summary accurately describes the padding calculation, the limited preserved-program impossibility claim, and the two-term branch calculation. No page prose edit was needed.

### Required page summaries

Opened each page in the A page’s requires list:

- library/quantum-computing/state-preparation-isometry-synthesis-and-limits.md
- library/quantum-algorithms/hamiltonian-simulation-and-product-formulas.md
- library/quantum-computing/reversible-computation-ancillas-and-coherent-oracles.md
- library/quantum-computing/controlled-gates-phase-and-entanglement.md
- library/quantum-computing/uniform-circuit-families-promise-problems-and-complexity.md
- library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md
- library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md
- library/quantum-computing/registers-tensor-products-and-partial-trace.md
- library/real-analysis/the-complex-exponential-and-eulers-formula.md
- library/quantum-computing/classical-and-quantum-error-correcting-codes.md

## Dependency inventory

Opened the direct item suppliers in the batch dependency graph:

- alg-qc-state-preparation
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- cor-operator-norm-submultiplicative-and-t-star-t-identity
- cor-triangle-inequality-for-inner-product-norm
- def-adjoint-of-a-linear-map-between-inner-product-spaces
- def-complex-exponential
- def-inner-product-norm
- def-linear-isometry-and-orthogonal-or-unitary-operator
- def-natural-logarithm
- def-operator-norm-on-a-finite-dimensional-inner-product-space
- def-qa-19-finite-matrix-dynamics
- def-qa-20-simulation-error-and-cost-model
- def-qc-circuit-cost-model
- def-qc-clean-and-dirty-ancillas
- def-qc-controlled-unitary-access
- def-qc-density-operator
- def-qc-dirac-notation-conversion
- def-qc-inverse-unitary-access
- def-qc-partial-trace
- def-qc-reflection
- def-qc-register-and-computational-basis
- def-qc-state-preparation-cost-model
- def-qc-tensor-map
- def-qc-tensor-register-and-permutation
- def-qc-trace-norm
- def-real-and-complex-inner-product-space
- def-self-adjoint-and-normal-endomorphism
- def-trace-of-an-endomorphism
- lem-complex-exponential-series-converges-everywhere
- lem-qc-linear-isometry-adjoint-identities
- thm-adjoint-exists-and-is-unique-in-finite-dimension
- thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
- thm-complex-spectral-theorem-for-normal-endomorphisms
- thm-exponential-is-strictly-increasing
- thm-non-negative-operator-characterisations
- thm-qa-19-matrix-exponential-unitary-properties
- thm-qc-computational-basis-orthonormal
- thm-qc-isometric-encoding-projector
- thm-qc-partial-trace-characterization-and-basis-independence
- thm-qc-reflection-unitary-involution
- thm-qc-state-preparation-rotation-level-upper-bound
- thm-qc-trace-norm-spectral-formula

Also opened relevant lower-level suppliers for the state-preparation and reflection uses:

- def-qc-pure-state-and-ray
- prop-adjoint-algebra
- thm-finite-dimensional-isometry-characterisations
- thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
- def-qc-one-qubit-gate-alphabet-and-rotations
- thm-qc-axis-rotation-pauli-formula
- def-qc-pauli-matrices
- def-qc-toffoli-and-fredkin
- def-qc-ordered-bitstring-encoding
- lem-qc-prefix-norm-rotation-identities
- def-qc-circuit-denotational-semantics
- def-qc-elementary-circuit-resources
- thm-polar-form-with-unique-principal-argument
- thm-qc-rank-one-reflection-phase-and-control-sign
- lem-qc-linear-isometry-preserves-inner-products

The current batch notes, source-evidence record, proof contracts, and cross-batch dependency ledger were used as navigation and evidence. Their decisions were checked against the current item text.

## Source checks

I read the relevant primary-source passages directly:

- Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3, equations (28.15)–(28.25), printed pages 141–143, including the PREPARE† block construction and the projected oblivious-amplification identity: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
- Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §§9.3–9.3.1, printed pages 73–76, including equation (9.3), Taylor product terms, and the oblivious-amplification exercise: https://arxiv.org/pdf/1907.09415
- John Watrous, The Theory of Quantum Information, §1.1.3, equations (1.181)–(1.184), PDF pages 33–34, for the trace norm, Hermitian rank-two formula, and partial-trace contractivity: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf

The local trace-distance, partial-trace, robust-leakage, and segmented-cost claims were verified from their proofs. The short index-width concern was resolved: for finite K, s_K<2 when x≤ln 2 (if x=0, s_K=1; otherwise the exponential tail after K is positive), so both padding coefficients are positive in this construction.

## Repairs and evidence

1. In items/alg-qa-21-lcu-block-encoding.md, Definition, the input required complete PREPARE and SELECT access but the procedure called PREPARE†. The referenced access model, items/def-qa-21-lcu-input-and-access-model.md, explicitly says inverse access is not implied and its cost is separate. I made explicit PREPARE† access and its declared cost an admissibility condition, and made the procedure call and charge that supplied inverse.

2. In items/thm-qa-21-lcu-block-correctness.md, Facts & Assumptions, the theorem’s Given clause now carries the inverse-access condition needed to instantiate the LCU algorithm. Its proof remains the same finite matrix-element calculation.

3. In items/ex-qa-21-two-term-lcu-postselection.md, Example, Facts & Assumptions, and Verification step 1.1, the example now gives the full PREPARE matrix and states that its inverse access is supplied. The matrix is unitary, its first column is the required coefficient state, and the SELECT blocks are I and Z. The affected theorem contract’s L1 excerpt and the example contract’s step-1.1 derivation were updated in research/quantum-computing-algorithms-60-2026-10-15-batch-45.proof-contracts.json. No stale verification.judge record was present on the changed items.

## Unedited defects and page verdicts

No confirmed uneditable defect was found in the assigned items, relevant dependency items, or page summaries. No proposed withdrawal was identified. The findings file therefore has an empty findings array.

- lcu-oblivious-amplitude-amplification-and-taylor-simulation: pass; summary matches the checked access, branch, error, and cost claims.
- lcu-oblivious-amplitude-amplification-and-taylor-simulation-examples: pass; summary matches the checked examples and the corrected inverse-access declaration.

## Validation

- Reflow: alg-qa-21-lcu-block-encoding unchanged; thm-qa-21-lcu-block-correctness unchanged; ex-qa-21-two-term-lcu-postselection reflowed.
- Precheck: algorithm 0 checked and 0 failing; theorem 1 checked and 0 failing; example 1 checked and 0 failing.
- Final proof-layout command on all three changed item paths: 3 items, 6 steps, 0 defects.

## Blocker

The batch review had no blocker. At the latest live status check (2026-10-16 03:05 UTC), the run remained active, 3a-read covered 43/60 batches, and batch 45 was still missing from that stage. The run also reported an upstream spec blocker for invalid construction-scheduling identity def-qc-effective-unitary-matrix-input in batch 12 and a separate 3a-collect failure for batch 36. These are outside batch 45 and were left to the run owner.

## Coverage note

All 18 assigned items and both assigned pages were reviewed. The ten required page summaries and the dependency items listed above were opened. This was a batch review; I did not audit every unrelated item listed on prerequisite pages or the entire transitive dependency graph. No unresolved mathematical uncertainty remains for batch 45.
