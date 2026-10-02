# Step 5a reader report — batch 28

Run: `frontier-37-owner-30`  
Role: reader  
Status: complete; no blocker and no uneditable defect remains.

## Opened inventory

Read the manifest `research/frontier-37-owner-30-batch-28.pages.json`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `briefs/reader.md`.

| Page | File | Assigned items opened |
|---|---|---|
| `hyperbolic-riemann-surfaces-and-uniformization` (A) | `library/complex-analysis/hyperbolic-riemann-surfaces-and-uniformization.md` | `def-properly-discontinuous-group-action`; `lem-holomorphic-structure-lifts-to-covering-surface`; `lem-biholomorphic-invariance-of-plane-subharmonicity`; `def-harmonic-and-subharmonic-riemann-surface-functions`; `lem-locality-of-subharmonicity`; `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces`; `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces`; `def-canonical-green-kernel-riemann-surface`; `lem-green-envelope-dichotomy-and-logarithmic-pole`; `lem-green-kernel-exists-after-removing-a-chart-disc`; `lem-surface-green-identity-on-smooth-bordered-domain`; `lem-green-kernel-symmetry-on-riemann-surfaces`; `lem-weak-harmonic-limits-on-riemann-surfaces`; `lem-green-function-uniformizes-simply-connected-surface`; `lem-dipole-green-function-on-riemann-surface`; `lem-nongreen-simply-connected-surface-is-plane-or-sphere`; `lem-three-simply-connected-models-are-inequivalent`; `thm-uniformization-simply-connected-riemann-surfaces`; `def-universal-covering-type-riemann-surface`; `cor-universal-cover-classification-riemann-surfaces`; `def-poincare-metric-hyperbolic-riemann-surface`; `thm-deck-transformations-are-hyperbolic-isometries`; `lem-cocompact-free-affine-plane-action-is-a-lattice`; `cor-compact-genus-determines-uniformization-type` |
| `hyperbolic-riemann-surfaces-and-uniformization-examples` (B) | `library/complex-analysis/hyperbolic-riemann-surfaces-and-uniformization-examples.md` | `ex-hyperbolic-disc-and-half-plane-geodesics`; `ex-annulus-and-punctured-disc-hyperbolic-covers`; `ex-complex-torus-parabolic-deck-lattice`; `ex-genus-two-cocompact-fuchsian-quotient`; `ex-three-uniformization-models-are-distinct` |

## Dependency and source evidence

Opened the specific supplier items needed for the audited arguments: thm-euclidean-semicontinuous-extreme-value-theorem, thm-semicontinuity-level-set-characterisation, def-plane-subharmonic-function, lem-gluing-lemma-for-plane-subharmonic-functions, lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity, thm-harmonic-majorant-characterization-of-plane-subharmonicity, thm-maximum-principle-for-plane-subharmonic-functions, thm-plane-subharmonic-functions-are-locally-integrable, def-poisson-modification-of-a-subharmonic-function, thm-poisson-modification-preserves-subharmonicity-and-majorizes, thm-harnack-convergence-principle-for-plane-harmonic-functions, thm-harnack-inequality-on-a-disc, thm-conformal-invariance-of-plane-harmonicity, lem-log-modulus-is-harmonic-off-its-centre, def-green-function-plane-domain, lem-weak-harmonic-limits-on-riemann-surfaces, and lem-surface-green-identity-on-smooth-bordered-domain.

The real-valued semicontinuous extreme-value theorem was checked directly: its range is R, so it does not itself prove attainment for an extended-valued function that can equal negative infinity.

Authoritative sources read:

- Donald E. Marshall, [*The Uniformization Theorem*](https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf), full 15-page PDF. Relevant locators: p. 1, lines 43–52 (the source Perron family requires a compact support `K != W`); p. 2, lines 79–87 (the local candidate and envelope properties); pp. 4–5, lines 155–168 (finite Dirichlet barriers); and pp. 7–9 (the Green and non-Green cases). The repository definition explicitly extends the compact-surface convention by allowing `K=X` when `X` is compact.
- David Gilbarg and Neil Trudinger, *Elliptic Partial Differential Equations of Second Order*, 2nd ed., §6.3, Theorem 6.14, printed pp. 107–108. It gives `C^{2,α}` boundary regularity for the classical Dirichlet problem; the symmetry proof uses it for the zero-boundary harmonic kernels, then extends their chart expressions across the smooth boundary before applying the stated Green identity.

## Repairs and evidence

- `def-canonical-green-kernel-riemann-surface`: the support clause now allows any compact `K⊆X`, including `K=X` on a compact surface; the text marks this as an explicit extension of Marshall’s `K != W` convention. The local candidate is constructed on a larger chart and is `max{-log|ξ/r|,0}`, so its boundary gluing is justified by finite-max subharmonicity. The definition’s compact-support change is carried through its assigned consumers and the corresponding proof contracts.
- `lem-green-envelope-dichotomy-and-logarithmic-pole`: the compact case is proved by adding constants to the local candidate, which makes the envelope infinite. Finite maxima and Poisson modifications are shown to retain compact support under the new convention. The leastness maximum argument now uses compact superlevel sets that stay away from the pole, rather than treating a support set containing the pole as a subset of the punctured surface.
- `lem-green-kernel-exists-after-removing-a-chart-disc`: the barrier proof now fixes one barrier and one positive gap, then uses candidate-dependent exhaustion truncations for arbitrary compact supports. Their boundary values are compared on the fixed truncation, preserving a uniform gap. The maximum comparison applies only on the exterior of the pole disc.
- `lem-green-kernel-symmetry-on-riemann-surfaces`: interior harmonic smoothness is no longer used to infer boundary regularity. The zero-boundary kernels are continuous by the Dirichlet construction; smooth-boundary regularity now supplies `C²` expressions up to the boundary, and a local extension supplies the neighborhood hypothesis of the surface Green identity. The identity then yields symmetry by taking the two logarithmic-pole limits.
- `lem-dipole-green-function-on-riemann-surface`: the candidate support is not assumed disjoint from the pole disc. A compact-support exterior maximum principle gives the bound only outside that disc. The Harnack compact sets exclude the inner circles removed from their domains. The domains `Y_{t_n}` increase to the thrice-punctured surface, but do not each contain it; a diagonal subsequence over relatively compact coordinate discs gives the harmonic limit. The logarithmic-pole comparison explicitly uses subharmonicity of the extended `log|z|` term. Its internal step labels were normalized to the precheck dependency order, with the claims and their order preserved.
- `lem-nongreen-simply-connected-surface-is-plane-or-sphere`: the maximum argument now handles both compact and noncompact `X`. On compact `X`, the upper-semicontinuous function attains its maximum on `X`; on noncompact `X`, its positive set is confined to a compact support. In both cases its vanishing near the pole contradicts a positive interior maximum.
- `lem-biholomorphic-invariance-of-plane-subharmonicity`: the maximum set is propagated inside the domain `V` where `w=u-H` is defined, using full-measure equality on circles, density, and upper semicontinuity at the boundary.
- `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces`: extended-valued maximum attainment is derived from compactness and closed superlevel sets, not the finite-valued theorem. The boundary barrier estimate now uses `v≤φ(ζ)+ε−Aq` with `A` independent of the Perron candidate; since `q→0`, the upper limit follows with the correct sign. The maximum-principle step was likewise written using compact superlevels. The proof’s internal step numbers were normalized to the precheck dependency order.
- `cor-compact-genus-determines-uniformization-type`: the real fixed points are ordered before choosing the positive-determinant conjugation; a negative translation is inverted before positive scaling; the cyclic-centralizer argument is explicitly conditional on the genus-one deck group being abelian; the countable sequence approaching zero is taken with distinct elements.
- `ex-hyperbolic-disc-and-half-plane-geodesics`: the `a=0` case uses the extended real line directly, avoiding `1/\bar a`.
- `ex-genus-two-cocompact-fuchsian-quotient`: paths from the bounded part of the punctured plane use length `3R`, giving endpoint modulus at least `2R>R`; the torsion proof selects the smaller absolute-value fixed root by sign and uses the resulting bound `r/(|c|+s)<1`.
- `lem-cocompact-free-affine-plane-action-is-a-lattice`: the quotient charts and second countability are established before Hausdorffness, while the Riemann-surface conclusion is deferred until the quotient is shown Hausdorff.

Affected proof contracts were refreshed to match the current numbered steps, citations, and the compact-support convention. The proof-contract check reports no errors for the 12 changed proof-bearing items. No changed item had a stale `verification.judge` record.

## Uneditable defects

None. Every confirmed defect found was in an in-flight item in batch 28 and was repaired. No defect remained in assigned A-page prose, B-page prose, or a published dependency.

## Page verdicts

- A page: the summary matches the current assigned statements. The Green-kernel summary is supported by the compact-support convention, corrected barrier construction, boundary-regularity argument, and the two-case non-Green proof.
- B page: the example summary matches the current assigned items after the degenerate `a=0`, endpoint-radius, and fixed-point-root repairs.

## Validation and blocker

Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for all 13 changed items; all prechecks pass. The proof-contract check also passes for all affected proof contracts. No blocker remains.
