# Step 3a reader report — batch 64

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `64`  
Review: `reader-64`

## Inventory opened

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/exterior-wave-problems-absorbing-boundaries-and-pml.md` (A)
- `library/numerical-pdes-and-spatial-discretization/exterior-wave-problems-absorbing-boundaries-and-pml-examples.md` (B)

The A page's required context pages were also opened:

- `library/numerical-pdes-and-spatial-discretization/spectral-collocation-and-galerkin-methods.md` (published)
- `library/numerical-pdes-and-spatial-discretization/boundary-integral-equations-and-galerkin-bem.md` (draft)

All 18 assigned item files were opened in dependency order.

| A-page items | B-page items |
| --- | --- |
| `def-pe18-cartesian-complex-stretch-pml` | `ex-pe18-pml-angle-dependent-attenuation` |
| `def-pe18-local-impedance-absorbing-boundary` | `ex-pe18-impedance-normal-and-grazing-incidence` |
| `thm-pe18-pml-perfect-matching-and-propagating-mode-decay` | `ex-pe18-insufficient-damping-near-resonant-cavity` |
| `lem-pe18-spherical-hankel-modulus-and-radiation-bounds` | `ex-pe18-spherical-monopole-exterior-field` |
| `thm-pe18-planar-impedance-reflection-coefficient` | `ex-pe18-spherical-dtn-monopole-symbol` |
| `thm-pe18-finite-pml-dirichlet-reflection` | |
| `def-pe18-exact-spherical-dtn-map` | |
| `thm-pe18-spherical-impedance-modal-reflection` | |
| `thm-pe18-rellich-uniqueness-for-a-spherical-obstacle` | |
| `thm-pe18-exact-spherical-dtn-map-on-smooth-data` | |
| `def-pe18-spherical-dtn-truncated-variational-problem` | |
| `lem-pe18-modal-trace-and-form-continuity` | |
| `thm-pe18-spherical-exact-dtn-variational-wellposedness` | |

Direct mathematical suppliers opened: `def-pe18-exterior-helmholtz-problem`, `def-spherical-bessel-and-hankel-functions`, `lem-spherical-bessel-and-hankel-radial-solutions`, `def-three-dimensional-spherical-harmonic-space`, `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem`, `lem-pe18-spherical-hankel-radial-identities`, `lem-pe18-spherical-harmonic-structure-and-density`, and `lem-pe18-outgoing-spherical-mode-expansion`.

Additional suppliers opened for the stated harmonic-density, compactness, calculus, power-series, factorial, and trigonometric facts: `thm-real-stone-weierstrass-for-compact-metric-spaces`, `cor-euclidean-closed-balls-and-spheres-are-compact`, `def-sine-and-cosine-by-power-series`, `def-complex-exponential`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-sine-and-cosine-derivatives`, `thm-eulers-formula`, `thm-termwise-differentiation-of-a-real-power-series`, `thm-power-series-uniform-on-compact-subintervals`, `thm-ratio-test`, `lem-sine-and-cosine-series-converge-everywhere`, `def-factorial-and-falling-factorial`, `lem-of-naturals-positive`, `cor-zero-derivative-implies-constant`, `lem-trigonometric-identities-machin-and-range-reduction`, `lem-uniform-closure-of-a-real-function-algebra-is-a-lattice`, `lem-two-point-interpolation-in-a-separating-real-function-algebra`, `def-metric-compactness`, `def-euclidean-spheres-and-closed-balls`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`, `def-metric-topology`, and `def-metric-bounded-diameter`.

## Review and edit

The PML coordinate pullback, interface value/flux match, propagating-mode attenuation, finite Dirichlet reflection, planar and spherical impedance coefficients, outgoing spherical mode identities, smooth-data DtN series, spherical uniqueness, and the exact-DtN variational formulation were checked against their stated hypotheses and suppliers. The five examples and both page summaries accurately keep their claims within the one-mode or spherical settings stated; the cavity source is at the PML interface `x_0=L/2`, and the text does not claim general PML stability.

One proof gap was repaired in `items/lem-pe18-modal-trace-and-form-continuity.md`, Proof 1.1. The original Young inequality placed a factor `(1+ell)^2` on the radial-derivative norm, which is not controlled by the defined energy. The repair defines `A=||w||_L2` and `B=||w'||_L2` and uses `2(1+ell)AB <= (1+ell)^2 A^2+B^2`. The first term is controlled by the angular/mass weight because `(1+ell)^2 <= 2(1+ell(ell+1))`; the second is controlled by the radial energy because `r>=a>0`. Reflection of the interval gives the inner trace bound, and summing gives the stated weighted trace estimate.

The matching derivation `step-1-1` was updated in `research/numerical-analysis-remaining-71-2026-10-17-batch-64.proof-contracts.json`. The repaired item had no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed; the required final proof-layout run reported 1 item, 2 steps, 0 defects.

Source checks for the specialized formulas used NIST DLMF §10.49 equations 10.49.6 and 10.49.17–10.49.18 (finite outgoing Hankel form and positive sum-of-squares formula), §10.50 equation 10.50.1 (Wronskian of the two Hankel branches), and §10.52 equations 10.52.1–10.52.4 (origin and outgoing asymptotics). Johnson, *Notes on Perfectly Matched Layers*, §§3.1–3.2 gives the complex-coordinate stretch and coordinate pullback; §6 equation (9) states that an imaginary normal wavenumber acquires oscillation but no added decay; §7.2 describes the grazing-angle attenuation limit. Galkowski, Lafontaine, and Spence, equation (1.10), uses the local impedance condition `partial_n v - i k v = 0` under the same outgoing convention.

## Defects not edited

None identified in the assigned items or page prose. No published or other-batch dependency defect was confirmed.

## Page verdicts

- `exterior-wave-problems-absorbing-boundaries-and-pml`: sound after the trace-proof repair; its summaries, diagrams, and hypotheses match the listed local results.
- `exterior-wave-problems-absorbing-boundaries-and-pml-examples`: sound; the examples preserve their one-mode and spherical scope and do not assert discretization stability.

## Blockers and coverage limits

No batch-64 blocker. The autopilot status snapshot at `2026-10-18T00:57:43.695Z` showed a separate `3a-collect` blocker (`collect-11`, covers batch 11, failed three times).

The full recursive dependency graph, including `justified_by` context, contained 600 items. I reviewed all assigned items, their direct mathematical suppliers, and the selected supporting suppliers listed above, but did not independently re-audit every lower-level result in the general published analysis/set-theory closure. No finding is based on those unreviewed lower-level proofs.
