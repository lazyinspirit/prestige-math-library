# Step 5a reader report — batch 18

Run: `frontier-36-complete`  
Role: reader (`reader-18`)

## Scope and opened assigned files

Opened both assigned page files:

- `library/representation-theory/unitary-representations-positive-type-and-gns.md` (A page)
- `library/representation-theory/unitary-representations-positive-type-and-gns-examples.md` (B page)

Opened all 21 assigned item files, which currently have `status: draft`:

- `def-strongly-continuous-unitary-representation`
- `lem-continuity-criteria-for-unitary-representations`
- `def-cyclic-vector-and-cyclic-unitary-representation`
- `thm-schurs-lemma-for-unitary-representations`
- `def-matrix-coefficient-of-a-unitary-representation`
- `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous`
- `def-continuous-function-of-positive-type`
- `lem-diagonal-unitary-coefficients-have-positive-type`
- `lem-positive-type-functions-define-a-pre-hilbert-form`
- `lem-the-gns-null-space-is-translation-invariant`
- `lem-the-gns-translation-action-is-unitary-and-strongly-continuous`
- `thm-gns-construction-for-topological-groups`
- `thm-uniqueness-of-the-cyclic-gns-representation`
- `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations`
- `lem-dominated-positive-type-functions-give-positive-commutant-contractions`
- `lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function`
- `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations`
- `ex-positive-type-functions-on-a-discrete-group`
- `ex-gns-representation-of-a-one-dimensional-character`
- `ex-positive-type-gaussian-on-the-real-line`
- `cex-a-bounded-continuous-function-need-not-have-positive-type`

## Dependency evidence opened

Opened the dependency statements and proof clauses needed to check the main
inference chains, including:

- Representation, Hilbert-space, inner-product, operator-adjoint and
  positive-operator foundations: `def-topological-group`, `def-hilbert-space`,
  `def-bounded-linear-operator`, `def-linear-subspace`,
  `def-real-and-complex-inner-product-space`,
  `thm-cauchy-schwarz-in-an-inner-product-space`,
  `cor-inner-product-induces-a-norm`, `def-hilbert-space-adjoint`,
  `thm-hilbert-adjoint-properties`, and
  `def-self-adjoint-positive-unitary-and-normal-operator`.
- Schur and spectral-calculus steps: `def-projection-valued-measure`,
  `thm-continuous-functional-calculus-for-bounded-normal-operators`,
  `thm-borel-functional-calculus-for-bounded-normal-operators`,
  `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
  `thm-support-and-uniqueness-of-the-spectral-measure`, and
  `thm-nth-roots-exist`.
- Uniform continuity and scalar continuity: `def-left-and-right-uniformities-of-a-topological-group`,
  `def-uniformly-continuous-map`, `lem-metric-uniformity-dictionary`,
  `def-complex-metric-convergence-and-continuity`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`,
  `lem-complex-conjugation-and-modulus-laws`, and `lem-of-square-monotone`.
- Domination, extremality and invariant-subspace steps:
  `thm-riesz-representation-for-hilbert-space`,
  `thm-choice-implies-dependent-implies-countable-choice`,
  `def-countable-choice`, `def-extreme-point-and-face`,
  `def-orthogonality-and-orthogonal-complement`,
  `thm-orthogonal-decomposition-by-a-closed-subspace`, and
  `lem-orthogonal-projection-is-linear-self-adjoint-contractive`.
- Completion and discrete-group example steps: `def-completion-of-a-normed-space`,
  `thm-completion-of-an-inner-product-space-is-hilbert`,
  `thm-completion-universal-property-for-bounded-linear-maps`,
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
  `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`,
  `def-trace-of-an-endomorphism`, `def-trace-of-a-square-matrix`, and
  `def-dimension`.
- Scalar-character and Gaussian calculations: `thm-complex-numbers-form-a-field`,
  `thm-complex-plane-is-complete`, `thm-gaussian-integral`,
  `thm-substitution-for-improper-integrals`, `def-mixed-improper-integral`,
  `thm-differentiation-under-the-integral-sign`, `thm-dominated-convergence`,
  `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`,
  `thm-lebesgue-measure-under-dilations-and-reflections`,
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `def-complex-lp-and-euclidean-test-function-conventions`,
  `thm-ftc-second-part`, `thm-derivative-of-exponential`,
  `thm-sine-and-cosine-derivatives`, `thm-exponential-limits-and-range`,
  `thm-exponential-is-strictly-increasing`,
  `cor-exponential-reciprocal-and-positivity`,
  `lem-exponential-dominates-one-plus-x`, and
  `def-real-exponential-function-and-e`.

These targets were inspected for the exact statements and hypotheses used in
the assigned proofs; their full transitive dependency proofs were not all
re-audited.

## External source checks

- Bekka–de la Harpe–Valette, *Kazhdan's Property (T)*, Appendix C,
  Theorem C.4.10, printed pp. 376–377, states the cyclic GNS coefficient and
  uniqueness up to a pointed unitary intertwiner. Proposition C.5.1, printed
  pp. 379–380, gives the dominated positive-type summand result, and Theorem
  C.5.2, printed pp. 380–381, states extremality of a normalized positive-type
  function exactly when its GNS representation is irreducible. These locations
  match the source locators in the assigned items; the local proofs were checked
  on their own arguments and dependencies.
- Dyatlov, *Lecture Notes for 18.155*, §11.1.4, Proposition 11.14, printed
  pp. 123–124, states the Fourier transform of $e^{-|x|^2/2}$ as
  $(2\pi)^{n/2}e^{-|\xi|^2/2}$ under the $e^{-ix\xi}$ convention. This matches
  the B-page item's stated comparison. The item's local differentiation and
  ODE argument derives the scaled, even Gaussian coefficient itself, so the
  sign convention does not affect that calculation.
- The cited Kowalski ETH 2025 notes, §3.4, Proposition 3.4.17, are indexed with
  the stated Schur-lemma result and its spectral-theorem prerequisite. The
  direct PDF fetch timed out; I did not read its full proof. The assigned Schur
  proof was checked against the opened local spectral-calculus dependencies.

## Review findings

No confirmed or suspected mathematical defect was found in the assigned item
files, the page summaries, or the dependency clauses opened for this review.
In particular, the GNS form uses the stated first-variable-linear convention;
left translation preserves the kernel; the cyclic orbit and uniqueness
arguments have the required density; the commutant form produces a positive
contraction with the claimed coefficient; the invariant-subspace projection
commutes with the representation; and the displayed finite-matrix witnesses
and Gaussian coefficient have the stated signs and normalizations.

## Edits and uneditable defects

- Edits: none. No material repair was needed, so no proof contract or
  `verification.judge` record was changed and no reflow/precheck command was
  run.
- Uneditable defects: none identified.

## Page verdicts

- A page `unitary-representations-positive-type-and-gns`: no defect found. Its
  summary matches the assigned GNS, commutant and extremality results and
  records the choice assumptions appearing in those results.
- B page `unitary-representations-positive-type-and-gns-examples`: no defect
  found. Its discrete-group, character, Gaussian and counterexample summaries
  match the assigned examples and their checked calculations.

## Blocker and coverage limitation

The requested status command for `frontier-36-complete` at
`.autopilot/frontier-36-complete` reported a workflow-revision mismatch and no
configured status there. The available recomputed state is instead
`.autopilot/frontier-36-twelve-categories`: it is running but blocked at the
Step 1 drift gate, which requires owner repair and recertification for
`smooth-projective-serre-duality-and-flag-variety-line-bundles` (see
`research/frontier-36-twelve-categories-step1-blockers.json`). That state has
not reached Step 5a and has a different run name from this dispatch, so I
cannot confirm workflow assignment identity from live state. This did not
prevent reading and reviewing the assigned current files. This report is a
content review, not evidence that the workflow stage advanced.

I opened all assigned pages and items and the dependency statements needed for
the proof checks described above. I did not re-audit every transitive dependency
proof or re-fetch every external URL. The Kowalski direct-PDF fetch timed out,
but no finding depends on that citation because the local proof was checked
against its mathematical dependencies.
