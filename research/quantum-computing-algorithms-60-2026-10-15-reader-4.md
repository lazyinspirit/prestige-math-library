# Step 3a reader report — batch 4

Run: `quantum-computing-algorithms-60-2026-10-15`  
Assignment: `reader-4`, batch `4`

## Opened inventory

Assigned pages:

- `library/quantum-computing/measurements-povms-and-instruments.md`
- `library/quantum-computing/measurements-povms-and-instruments-examples.md`

All 17 assigned items were opened in dependency order. The item list is grouped
by the manifest's dependency level:

- Level 1: `def-qc-projective-measurement`.
- Level 2: `def-qc-povm-and-outcome-law`,
  `thm-qc-projective-measurement-outcome-law`.
- Level 3: `def-qc-finite-outcome-probability-kernel`,
  `lem-qc-finite-ancilla-amplification-is-block-map`,
  `thm-qc-finite-naimark-isometric-compression`,
  `thm-qc-povm-probabilities-normalize`,
  `thm-qc-projective-conditional-state`.
- Level 4: `def-qc-completely-positive-map`,
  `thm-qc-finite-outcome-law-is-a-probability-kernel`.
- Level 5: `def-qc-instrument-and-conditional-state`.
- Level 6: `thm-qc-instrument-outcome-law-normalizes`,
  `thm-qc-luders-instrument-of-a-povm-is-valid`,
  `thm-qc-zero-probability-branch-has-no-conditioned-state`.
- Level 7: `thm-qc-instrument-conditional-state-is-density`,
  `thm-qc-nonselective-instrument-output-is-density`,
  `ex-qc-zero-probability-projective-branch`.

The following direct draft suppliers in other batches of this run were also
opened and reviewed before their batch-4 consumers:

- Batch 1: `def-qc-dirac-notation-conversion`.
- Batch 2: `def-qc-register-and-computational-basis`,
  `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`,
  `lem-qc-tensor-product-basis-and-dimension`.
- Batch 3: `def-qc-density-operator`, `def-qc-finite-positive-effect-family`,
  `lem-qc-complete-effect-family-members-are-effects`.

I checked the claim or definition interface of each direct published supplier
used in the assigned item closure:

`cor-finite-iterated-tensor-products-represent-multilinear-maps`,
`def-adjoint-of-a-linear-map-between-inner-product-spaces`,
`def-coordinate-column-and-matrix-of-a-linear-map`, `def-dimension`,
`def-finite-probability-space-and-event`,
`def-kernel-and-image-of-a-linear-map`, `def-linear-map`,
`def-matrix-product-and-identity-matrix`,
`def-non-negative-and-positive-operator`,
`def-real-and-complex-inner-product-space`,
`def-trace-of-an-endomorphism`, `def-vector-space-of-linear-maps`,
`lem-composition-and-identity-linear-maps`,
`prop-linear-maps-form-a-vector-space`,
`prop-standard-coordinate-inner-products`, `prop-trace-is-linear`,
`thm-adjoint-exists-and-is-unique-in-finite-dimension`,
`thm-gram-schmidt-orthonormalisation`,
`thm-non-negative-operator-characterisations`,
`thm-non-negative-square-root-exists-and-is-unique`, and
`thm-trace-of-ab-equals-trace-of-ba`.

## Review and evidence

I checked the authored definitions, hypotheses, proof steps, operator-domain and
codomain conventions, trace identities, zero-dimensional cases where allowed,
conditional-state branches, the qubit computation, page summaries, and the
assigned proofs' cited clauses. The finite projective and POVM laws follow from
positivity of the compressed operators and finite trace cyclicity. The kernel
proof uses the specified real-and-imaginary matrix coordinates and establishes
measurability and affinity on the density set. The ancilla block map is
well-defined on full operator spaces, including zero-dimensional factor cases;
the complete-positivity and Lüders proofs verify all finite ancilla dimensions.
The instrument proofs establish branch normalization, zero-branch behavior,
positive-branch density, and the nonselective mixture formula. The example's
matrices and branch calculations are correct.

I checked the cited literature passages for the main measurement claims:

- John Watrous, *The Theory of Quantum Information*, Theorem 2.42, printed
  p. 109 (PDF p. 116),
  <https://jhwatrous.github.io/TQI.pdf>. The theorem states that for a finite
  measurement there is an isometry $A$ with
  \(\mu(a)=A^*(I\otimes E_{a,a})A\); its proof constructs
  \(A=\sum_a\sqrt{\mu(a)}\otimes e_a\) and verifies \(A^*A=I\). This matches
  the algebraic compression proved in
  `thm-qc-finite-naimark-isometric-compression`.
- John Preskill, *Quantum Information*, Chapter 3, §3.1.2, printed pp. 8–10
  (PDF pp. 8–10),
  <https://www.preskill.caltech.edu/ph219/chap3_15.pdf>. The section derives
  POVM effects \(E_a=M_a^\dagger M_a\), outcome weights, and explicitly says a
  POVM does not determine the post-measurement state.
- Preskill, Chapter 3, §§3.2.4 and 3.2.6, printed pp. 16–18 (PDF pp. 16–18),
  the same URL. Section 3.2.4 gives the trace-weighted branch maps and
  conditional normalization; §3.2.6 defines complete positivity by positivity
  under extensions to larger systems. These locations support the instrument
  and complete-positivity conventions used here.

No citation in the assigned claims was found inaccurate, and no unresolved
mathematical uncertainty required another source.

## Edits and validation

No item or page was edited: I found no confirmed defect in the assigned
carriers. Consequently no proof contract or `verification.judge` record was
changed, and reflow, precheck, and `proof-layout` were not run. No item changed.

## Uneditable defects

None identified in the assigned pages, items, or reviewed direct suppliers.

## Page verdicts

- `measurements-povms-and-instruments` (A): **Pass.** The summary accurately
  describes the finite algebraic measurement, kernel, Naimark, complete
  positivity, and instrument results proved by its listed items.
- `measurements-povms-and-instruments-examples` (B): **Pass.** The summary
  matches the example's verified two-outcome projective measurement and its
  zero-probability Lüders branch.

## Blockers and coverage limits

There is no batch-4 blocker. The run status check on 2026-10-16 reported a
separate `1-scaffold` stage-spec blocker: the unit prerequisite graph is invalid
because `def-qc-effective-unitary-matrix-input` has an invalid construction
scheduling identity in batch 12. This is outside batch 4.

I did not re-audit the full transitive proofs of the 21 published dependencies;
I checked their exact interfaces as used here. The eight direct draft suppliers
from batches 1–3 were read in full. All assigned pages and all 17 assigned item
sources were read.
