# Step 3a reader report — batch 43

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Reader: `reader-43`  
Reviewed: 2026-10-21

## Opened inventory

Pages:

- `library/inverse-problems/inverse-scattering-and-born-linearization.md` (A)
- `library/inverse-problems/inverse-scattering-and-born-linearization-examples.md` (B)

Assigned items, reviewed so each in-batch supplier preceded its consumers:

- `def-ip-fixed-frequency-far-field-data`
- `lem-ip-small-contrast-scattering-map-well-defined`
- `lem-ip-born-linearization-of-the-scattering-map`
- `alg-ip-regularized-born-reconstruction`
- `ex-ip-outside-neumann-norm-ball`
- `ex-ip-small-volume-contrast-in-born-regime`
- `ex-ip-limited-aperture-born-data-have-a-nontrivial-kernel`

The direct non-batch-43 suppliers opened at their relevant Definition or
Statement sections were: `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
`cor-vector-valued-ftc-and-lipschitz-bound`, `def-banach-space`,
`def-countable-choice`, `def-essential-supremum-with-respect-to-a-measure`,
`def-euclidean-inner-product`, `def-fourier-transform-on-l-one-of-rn`,
`def-frechet-derivative-between-banach-spaces`,
`def-l-p-space-as-a-quotient-by-null-functions`, `def-metric-bounded-diameter`,
`def-operator-norm`, `def-pi-via-first-positive-cosine-zero`,
`def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`,
`def-volume-integral-scattering-model`, `lem-complex-norm-realification-is-a-real-norm`,
`lem-l-one-fourier-transform-is-well-defined`, `lem-volume-far-field-map-is-bounded`,
`lem-volume-integral-operator-well-defined-and-bounded`,
`prop-essential-supremum-is-attained-as-the-least-essential-bound`,
`thm-complex-exponential-is-entire-with-derivative-itself`,
`thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`,
`thm-complex-lp-completeness-and-almost-everywhere-subsequences`,
`thm-dimension-of-a-linear-subspace`,
`thm-ip-picard-range-criterion-for-compact-operators`,
`thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-nth-roots-exist`,
`thm-rank-nullity`, and `thm-volume-integral-scattering-born-neumann-error`.

For the stated estimates I also inspected the proof sections of the volume
operator, far-field, Neumann-series, complex-L2 pairing, essential-supremum,
Fourier-transform, exponential, vector-valued FTC, complex-Lp completeness, and
realification suppliers. I checked the supporting statements
`lem-three-dimensional-scattering-kernel-is-square-integrable`,
`def-complex-lp-and-euclidean-test-function-conventions`, and
`def-complex-exponential`. The current batch-2 Picard theorem's statement,
Facts & Assumptions, proof, and singular-system diagram were inspected because
the assigned algorithm cites its range criterion. The batch-43 manifest,
coverage record, proof contracts, cross-batch dependency record, and author notes
were also opened as evidence, not as verdicts.

## Item verdicts and edits

- `def-ip-fixed-frequency-far-field-data` — Pass. The strict operator-norm
  branch, outgoing-kernel convention, solution notation, Born integral, and
  Fourier frequency (k(\theta-d)/(2\pi)) are coherent. The definition makes
  no claim outside that branch.
- `lem-ip-small-contrast-scattering-map-well-defined` — Pass. The operator
  estimate gives openness; the volume Neumann result supplies existence and
  uniqueness; the L2 pairings justify both integrals; and the cited volume
  far-field estimate gives the stated continuity and uniform outgoing limit.
- `lem-ip-born-linearization-of-the-scattering-map` — Pass. The remainder
  estimates follow from the Neumann tail and Cauchy–Schwarz, and the quadratic
  specialization yields the real Banach-space Fréchet derivative at zero.
  The statement does not claim joint-data differentiability or nonlinear
  uniqueness.
- `alg-ip-regularized-born-reconstruction` — Pass. The finite cell matrix has
  the stated Fourier sign and normalization; the SVD coefficients use the
  declared linear-in-first-variable inner product; the budget and residual
  branches are complete. The Picard criterion is used only to limit what the
  finite residual certifies.
- `ex-ip-outside-neumann-norm-ball` — Repaired step 3.1. The original strict
  pointwise kernel lower bound was integrated to a strict estimate without
  stating why the excess has positive integral. The repair observes that its
  positive level sets cannot all be null on (D) of positive measure. This
  establishes the strict inequality used to conclude \(\|K_{q,1}\|>2\).
- `ex-ip-small-volume-contrast-in-born-regime` — Pass. The cube constants give
  (C_D=1/(2\sqrt2)<1), and substitution into the uniform remainder yields
  the displayed bound.
- `ex-ip-limited-aperture-born-data-have-a-nontrivial-kernel` — Pass. The
  (m+1)-cell construction gives a linear map \(\mathbb C^{m+1}\to\mathbb C^m\);
  rank-nullity supplies a nonzero kernel contrast, and scaling keeps it in the
  small-norm branch. The zero-data filter conclusion and nonlinear caveat are
  correct.

The repair changed only `items/ex-ip-outside-neumann-norm-ball.md` and its
step-3.1 derivation in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-43.proof-contracts.json`.
No `verification.judge` record existed on the item. Reflow reported unchanged;
precheck passed; the final batched proof-layout command covered the changed item
and reported 1 item, 4 steps, 0 defects.

The assigned TikZ diagram in `lem-ip-born-linearization-of-the-scattering-map`
correctly places (kd) and (k\theta) on the radius-(k) circle and points
the chord from (kd) to (k\theta), labeled (k(\theta-d)). The proof is
independent of the diagram. No other assigned item contains a diagram, and no
additional diagram is needed for the remaining exposition.

## Uneditable finding

`def-euclidean-inner-product` is published and outside the write scope. In its
Definition's opening paragraph, the sentence beginning “This is the same set
that” continues with “and \(d_1\), \(d_2\), \(d_\infty\) are metrics on it calls
\(\mathbb R^n\),” which is ill-formed. The explicit coordinate and norm
formulas later in the definition remain readable and were sufficient to verify
the assigned Euclidean calculations, so this is reported as a nonfatal
published-dependency defect. The assigned consumer named for routing is
`ex-ip-outside-neumann-norm-ball` (the same supplier is also used by
`ex-ip-small-volume-contrast-in-born-regime`).

No other item or page defect remained. No item or page summaries were added or
edited.

## Page verdicts

- `inverse-scattering-and-born-linearization` — Pass. Frontmatter only; the
  required page prerequisites and four-item inventory match the batch manifest;
  `page_layout: compact-v1` is preserved.
- `inverse-scattering-and-born-linearization-examples` — Pass. Frontmatter
  only; it requires the A page and its three examples match the manifest;
  `page_layout: compact-v1` is preserved.

## Blocker and coverage note

The live autopilot status was PAUSED at the final status check, with batch 43
still missing from `3a-read` and no worker in flight. I did not change run
controls. The assigned item bodies were opened before completing the external
supplier inspection, so the requested supplier-first opening sequence was not
achieved; I rechecked the conclusions against the supplier sections before
recording these verdicts. No unresolved mathematical uncertainty remains beyond
the reported published prose defect.
