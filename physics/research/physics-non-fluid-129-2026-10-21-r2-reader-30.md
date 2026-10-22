# Reader report — batch 30

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `30`

## Scope and inventory

Read the workspace instructions, physics content model, reader brief, batch-30
manifest, batch notes, cross-batch page row, proof contracts, both assigned
pages, all six assigned items, and the mathematical interfaces used by their
claims. The manifest assigns:

| Carrier | Verdict |
|---|---|
| `library/general-relativity/gr-fx02-conformal-constraint-construction.md` (`gr-fx02-conformal-constraint-construction`) | Pass after the proof-only repairs below. Its four A-items and required pages resolve; the empty body follows the current statement-first page layout. |
| `library/general-relativity/gr-fx02-conformal-constraint-construction-examples.md` (`gr-fx02-conformal-constraint-construction-examples`) | Pass. It places the two assigned examples under the assigned A-page and has no body, as expected for this layout. |

The A-page's required context pages were also opened: draft
`gr-fx01-hypersurface-and-null-geometry` and published
`gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`. Their declared page
interfaces resolve. I checked the GR14 summary and the precise Fourier/Sobolev
and constraint suppliers used here; I did not re-audit the unrelated items on
those pages.

Assigned items, in their claim order:

1. `def-gr-fx-conformal-constraint-data`
2. `thm-gr-fx-lichnerowicz-reduction`
3. `prop-gr-fx-constant-constraint-solution`
4. `prop-gr-fx-positive-linearized-constraint`
5. `ex-gr-fx02-1`
6. `ex-gr-fx02-2`

The 33 unique direct prerequisite interfaces were opened: `def-smooth-manifold`,
`def-smooth-tensor-field`, `def-riemannian-metric-and-riemannian-manifold`,
`def-levi-civita-connection`,
`def-product-connection-on-tensor-and-hom-bundles`,
`thm-fundamental-theorem-of-riemannian-geometry`,
`def-christoffel-symbols-of-an-affine-connection`,
`prop-christoffel-formula-for-the-levi-civita-connection`,
`def-curvature-of-an-affine-connection`,
`thm-curvature-is-a-type-one-three-tensor`,
`def-contraction-of-a-mixed-tensor`,
`lem-contraction-is-independent-of-the-basis-formula`,
`def-gr-smooth-lorentzian-objects`,
`lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form`,
`def-integer-power`, `lem-power-laws`, `thm-algebra-of-derivatives`,
`thm-ck-euclidean-maps-closed-under-algebra-and-composition`,
`prop-identity-maps-and-composites-of-smooth-maps-are-smooth`,
`def-countable-choice`, `def-gr-spacelike-initial-data-and-constraints`,
`thm-gr-constraint-equations-in-normal-frame`, `def-dual-connection`,
`thm-clairaut-schwarz-mixed-partials`,
`thm-chain-rule-for-total-derivatives`,
`thm-logarithm-derivative-and-integral`, `thm-nth-roots-exist`,
`def-rational-power`, `def-gr-periodic-torus-and-sobolev-spaces`,
`lem-gr-periodic-fourier-differentiation-and-norm-equivalence`,
`thm-fourier-basis-and-parseval-on-the-n-torus`, `thm-heine-borel-rn`, and
`thm-extreme-value-metric`. The full proof of
`thm-gr-constraint-equations-in-normal-frame` was inspected for the exact
Hamiltonian and momentum residuals used by the definition and reduction.

## Review findings and edits

- `def-gr-fx-conformal-constraint-data`, proof 2.1: the coordinate formula for
  the scalar Laplacian was shown to be smooth but its chart independence was
  not stated. I added Fact F13 identifying the formula as the metric trace of
  the covariant derivative of `df`, using the already declared product/dual
  connection, and included that justification in the proof. Its contract now
  records F13 and the exact supplier excerpt.
- `prop-gr-fx-positive-linearized-constraint`, proof 1.1: the proof used
  `R̃ = 0` and `Δ̃ = L_*^{-2} Σ∂ᵢ²` for the displayed flat metric without showing
  the calculation. I added the zero-Christoffel, zero-curvature and Laplacian
  calculation. Proof 2.1 used conjugate symmetry to conclude that the Fourier
  inverse is real-valued; I added the coefficient identity for complex
  conjugation and injectivity of the Fourier isometry.
- `ex-gr-fx02-1`, proof 1.1: I expanded the dual/tensor connection rule to
  justify that the constant covariant tensor has zero covariant derivative
  when the Christoffel symbols vanish. Proof 2.1 now computes
  `tr_h K = τ` before identifying the nonzero tracefree part.
- `ex-gr-fx02-2`, proof 2.1: I evaluated the normalized `H¹` norm of the
  constant function explicitly, so the failure of every positive coercivity
  constant follows directly.

The claims, domains, and dependency edges were not changed. The four affected
proof contracts were synchronized; no `verification.judge` record was present
on the edited items. Scoped checks after editing:

- Reflow: all four changed items completed.
- Precheck: 4 items checked, 0 failing.
- Proof layout: 4 items, 9 numbered steps, 0 defects.

No TikZ, tikzcd, or CD diagram occurs in the two pages or six items. No diagram
was required for these tensor and Fourier calculations. The batch contains no
postulate, reported experiment, empirical premise, or statistical claim.

## Source review

I checked the relevant equations and surrounding passages in Gourgoulhon,
*3+1 Formalism and Bases of Numerical Relativity*, especially §§6.3.3,
6.4.2, 6.5.2–6.5.3, and 8.2.2–8.2.4: [arXiv PDF](https://arxiv.org/pdf/gr-qc/0703035).
The conformal scalar-curvature factor is given at (6.52), the tracefree
curvature scaling and momentum transformation at (6.79)–(6.83), the
Hamiltonian Lichnerowicz equation at (6.103), and the CTT equations and data
reconstruction at (8.5)–(8.8) and (8.20)–(8.25). These support the formula and
scope; the assigned theorem independently derives its stated covariant-tensor
weights and momentum cancellation.

I also checked Bartnik and Isenberg, *The Constraint Equations*, §4.1,
including (47)–(56) and the surrounding discussion of the CMC equation and
solvability limits: [arXiv PDF](https://arxiv.org/pdf/gr-qc/0405092). The
references support the conformal formulation and caution against asserting
general solvability. The assigned items make only the local algebraic and
linear claims they prove.

The dimensional assignments are consistent: $\phi$ is dimensionless,
$[\tau]=\mathrm m^{-1}$, and the scalar curvature and squared TT norm have
units $\mathrm m^{-2}$. In the flat-torus example,
$A=2a_*^2/L_*^4$ also has units $\mathrm m^{-2}$.

## Unedited defects and blocker

No confirmed defect remains in the assigned pages or items. No blocker prevents
the assigned claims from being checked. This review checked the exact direct
supplier statements and the relevant cited source passages; it did not
independently re-prove every transitive mathematical supplier proof or re-audit
the full prerequisite page contents.
