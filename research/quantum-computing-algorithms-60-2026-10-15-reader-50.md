# Step 3a reader report — batch 50

Run: quantum-computing-algorithms-60-2026-10-15  
Scope: batch 50 only

## Review inventory

Read the repository instructions (CLAUDE.md, README.md, SCHEMA.md,
WORKFLOW.md), briefs/reader.md, and the batch-50 manifest.

Opened assigned pages:

- hhl-phase-estimation-linear-systems
- hhl-phase-estimation-linear-systems-examples

Opened all 22 assigned items:

- def-qa-26-hhl-reciprocal-filter
- def-qa-26-hhl-sine-window
- lem-qa-26-hermitian-dilation
- lem-qa-26-hhl-filter-geometry
- def-qa-26-qlsp-task
- lem-qa-26-hhl-filter-perturbation
- lem-qa-26-hhl-sine-window-prefix-masses
- lem-qa-26-qlsp-target-is-well-defined
- lem-qa-26-hhl-prefix-table-synthesis-error
- def-qa-26-hhl-access-model
- lem-qa-26-hhl-sine-window-kernel-moment
- lem-qa-26-phase-to-eigenvalue-unwrapping
- lem-qa-26-hhl-capped-amplification
- alg-qa-26-hhl-phase-estimation
- lem-qa-26-hhl-success-amplitude
- thm-qa-26-hhl-amplified-postselection-cost
- thm-qa-26-hhl-simulator-cost
- lem-qa-26-postselection-normalization-bound
- thm-qa-26-hhl-state-correctness
- thm-qa-26-hhl-query-cost
- cex-qa-26-hhl-classical-vector-output
- ex-qa-26-diagonal-hhl

Opened direct supplier items used by the assigned claims:

- def-adjoint-of-a-linear-map-between-inner-product-spaces,
  def-moore-penrose-pseudoinverse, def-qc-dirac-notation-conversion,
  def-kernel-and-image-of-a-linear-map,
  def-qc-register-and-computational-basis, def-qc-pure-state-and-ray,
  def-qc-controlled-unitary-access,
  def-linear-isometry-and-orthogonal-or-unitary-operator,
  def-operator-norm-on-a-finite-dimensional-inner-product-space,
  def-qc-inverse-unitary-access, def-qc-circuit-cost-model,
  def-qc-one-qubit-gate-alphabet-and-rotations,
  def-qa-20-simulation-error-and-cost-model,
  def-qa-20-sparse-hamiltonian-oracle-model
- thm-singular-value-decomposition,
  thm-moore-penrose-pseudoinverse-exists-and-is-unique,
  cor-trigonometric-parity-and-pythagorean-identity,
  lem-qa-13-pi-rational-bounds,
  cor-sine-and-cosine-are-one-lipschitz,
  thm-quarter-turn-values-and-shift-formulas,
  thm-sine-and-cosine-derivatives,
  thm-double-angle-and-power-reduction-identities,
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
  thm-complex-exponential-addition-and-real-extension,
  thm-sine-and-cosine-addition-formulas,
  thm-cofunction-supplementary-and-reflection-identities,
  cor-triangle-inequality-for-inner-product-norm,
  thm-logarithm-derivative-and-integral,
  thm-complex-spectral-theorem-for-normal-endomorphisms,
  thm-qa-19-matrix-exponential-unitary-properties,
  thm-qc-axis-rotation-pauli-formula,
  thm-qa-exact-binary-qft-circuit-correct,
  thm-sine-cosine-signs-monotonicity-and-ranges
- lem-qa-phase-estimation-geometric-sum,
  lem-qa-phase-estimation-sine-chord-bounds,
  alg-qa-quantum-phase-estimation,
  alg-qa-12-amplitude-amplification,
  lem-qa-12-amplification-plane-invariant,
  thm-qa-12-amplification-rotation-correctness,
  lem-qa-25-sorted-xor-sparse-access-isometries,
  lem-qa-25-clean-subspace-unitary-hybrid,
  alg-qa-25-small-time-aware-simulator,
  thm-qa-25-small-time-aware-simulator-correctness,
  thm-qa-25-qubitized-simulation-resource-bound

For the HHL filter convention, checked Harrow, Hassidim, and Lloyd,
[“Quantum algorithm for linear systems of equations”](https://arxiv.org/pdf/0811.3171),
Appendix A, Eqs. (A3a)–(A3b), PDF p. 5. It states the reciprocal well branch
1/(2κλ) for positive λ ≥ 1/κ and the sine transition on the positive
interval. The signed odd extension used here was checked directly at both
transition endpoints. The sine-window definition is also given in that paper,
Eq. (2), PDF p. 1.

## Repairs and evidence

1. In def-qa-26-hhl-reciprocal-filter, added sgn(z) to the transition
   branch of fκ. Before the repair, for negative z in the transition band
   the branch was positive while the reciprocal branch was negative, so the
   title’s oddness claim failed and the filter jumped at |z|=1/κ. The added
   factor makes fκ odd and makes the transition values match the adjacent
   plateaus at |z|=1/(2κ) and |z|=1/κ. The positive branch agrees with
   HHL Eq. (A3a); the negative branch follows from the signed-spectrum
   convention and the endpoint calculation.

   Rechecked the assigned direct and indirect consumers: lem-qa-26-hhl-filter-geometry,
   lem-qa-26-hhl-filter-perturbation, alg-qa-26-hhl-phase-estimation,
   lem-qa-26-hhl-success-amplitude, thm-qa-26-hhl-state-correctness,
   the cost theorems, and ex-qa-26-diagonal-hhl. Their bounds and state
   formulas remain valid with the corrected odd branch.

2. In lem-qa-26-hhl-filter-perturbation, stated κ≥1, t0>0, and real
   λ,δ explicitly. The proof defines Δ=|δ|/t0; the missing positivity
   condition was needed for that estimate and for the filter’s stated
   domain. With the corrected signed transition, the endpoint matching and
   same-sign Lipschitz argument in step 1.1 now hold on both half-lines.

3. In lem-qa-26-hhl-sine-window-kernel-moment, inserted the missing leading
   minus sign in the closed formula for αk. At λ=0,k=0, the defining
   Fourier sum is positive, whereas the old expression was negative because
   its denominator is sin(π/(2T)) sin(-π/(2T)) < 0. The corrected sign
   matches the finite sum. Since the proof’s probability is |αk|², the
   second-moment bound and its consumer remain unchanged.

4. In lem-qa-26-hhl-prefix-table-synthesis-error, added the ideal
   prefix-tree state-preparation argument. The proof shows that every split
   ratio is in (0,1), the left/right rotation amplitudes are the square
   roots of the child-mass ratios, and induction gives leaf amplitude
   sqrt(wτ/W_T(0,T)) = sqrt(2/T) sin(π(τ+1/2)/T). Added its direct
   dependencies on the sine-window definition, prefix-mass lemma, and
   cofunction identity; synchronized the batch manifest and proof contract.

5. In alg-qa-26-hhl-phase-estimation, specified the sine-table circuit’s
   register order, root-to-leaf traversal, controls, and child-bit convention
   (1 is left, 0 is right). This removes ambiguity in the rotation
   instructions and connects the executed circuit to the proved prefix-tree
   state.

Updated exact proof-contract quotations and derivations for the changed
carriers. Removed the old hash-bound endpoint template_review from the
perturbation contract because its item statement changed. The changed items
had no verification.judge record to remove. No page prose was edited.

## Unedited defects

None found. No withdrawal is proposed.

## Page verdicts

- hhl-phase-estimation-linear-systems — **Pass after the listed repairs.**
  Its summary matches the reviewed state-output, rectangular-dilation,
  sine-window, simulation-error, and sparse-query results.
- hhl-phase-estimation-linear-systems-examples — **Pass.** The diagonal
  calculation and its grid-spacing caveat are correct; the output-length
  witness distinguishes an explicit classical coordinate list from a
  quantum state output.

## Validation and workflow status

- reflow.mts: all five changed items reported unchanged.
- precheck.mts: all five changed items passed; definitions and algorithm
  had zero proof sections to check.
- proof-layout.mjs: one batched run over all five changed item paths,
  5 items, 9 steps, 0 defects.
- No verification.judge stamps were present on the changed items.

The run status snapshot at 2026-10-16T02:51:58Z reported no active workers,
but the run remains blocked outside batch 50: 1-scaffold has an invalid
construction item identity (def-qc-effective-unitary-matrix-input in batch
12), and 3a-read reports three failed attempts each for readers 38 and 44.
These workflow blockers do not prevent this batch-50 review; they still need
owner resolution before the run can advance.

Coverage note: all assigned pages and items and the direct item suppliers
used to evaluate their claims were opened. The deeper proof chains behind
supplier items outside batch 50 were not independently re-audited.
