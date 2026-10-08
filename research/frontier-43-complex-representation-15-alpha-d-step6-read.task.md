# Step 6 Alpha group reader — read-only digest — group **d**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **11**, **15**: 2 A/B pair(s), 4 page(s), 60 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `periods-jacobians-and-abel-jacobi-theory` | A | complex-analysis | 1614 | `cw-complexes-and-cellular-homology`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `the-de-rham-theorem-and-degree`, `hilbert-space-geometry-and-riesz-representation`, `divisors-riemann-roch-and-duality`, `classification-of-compact-connected-surfaces`, `intersection-pairings-self-intersection-and-euler-classes`, `poisson-summation-sampling-and-lattice-duality`, `elliptic-functions-and-complex-tori`, `minkowski-theory-and-number-field-class-groups`, `the-gauss-bonnet-theorem-for-riemannian-surfaces` |
| 11 | `periods-jacobians-and-abel-jacobi-theory-examples` | B | complex-analysis | 1615 | `periods-jacobians-and-abel-jacobi-theory` |
| 15 | `bergman-and-szego-kernels` | A | complex-analysis | 1626 | `complex-lp-spaces-and-test-function-conventions`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `the-dbar-complex-and-integral-solutions`, `hormander-estimates-and-the-levi-problem`, `harmonic-hardy-classes-and-fatou-boundary-limits`, `analytic-hardy-spaces-and-canonical-factorisation`, `strongly-continuous-semigroups-and-hille-yosida`, `heat-equation-maximum-principles-duhamel-and-smoothing` |
| 15 | `bergman-and-szego-kernels-examples` | B | complex-analysis | 1627 | `bergman-and-szego-kernels` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `periods-jacobians-and-abel-jacobi-theory` — Periods, Jacobians, and Abel--Jacobi Theory (25 item(s))

- `lem-cellular-homology-of-the-one-polygon-surface-model` · lemma — Cellular homology of the one-polygon surface model
- `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface` · definition — Path integral of a holomorphic differential on a Riemann surface
- `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism` · lemma — A degree-one holomorphic map of compact Riemann surfaces is an isomorphism
- `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` · definition — The intersection form on the homology of a closed oriented surface
- `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity` · lemma — Weak solutions of a degree-zero divisor and the logarithmic-derivative identity
- `thm-symplectic-homology-basis-compact-riemann-surface` · theorem — A symplectic homology basis of a compact Riemann surface
- `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form` · lemma — The dbar-solvability criterion and the holomorphic-orthogonality pairing
- `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface` · lemma — Every holomorphic line bundle on a compact Riemann surface has a meromorphic section
- `def-picard-group-of-divisor-classes-and-pic-zero` · definition — The Picard group of divisor classes and its degree-zero part
- `lem-holomorphic-differentials-form-a-g-dimensional-space` · lemma — The space of holomorphic differentials and the degree of the canonical divisor
- `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere` · lemma — Trace of a holomorphic differential along a nonconstant map to the sphere
- `def-period-pairing-and-period-lattice` · definition — The period pairing and the period lattice
- `lem-holomorphic-differentials-separate-generic-points` · lemma — Holomorphic differentials separate generic points
- `lem-period-pairing-is-well-defined-and-computed-by-integration` · lemma — The period pairing is well defined and computed by integration
- `lem-cut-surface-and-boundary-jumps-of-primitives` · lemma — The cut surface, primitives of closed forms, and their boundary jumps
- `thm-symplectic-period-formula-for-wedge-integrals` · theorem — The symplectic period formula for integrals of wedge products
- `thm-riemann-bilinear-relations` · theorem — The Riemann bilinear relations and the period lattice
- `def-jacobian-of-a-compact-riemann-surface` · definition — The Jacobian of a compact Riemann surface
- `def-abel-jacobi-map` · definition — The Abel-Jacobi map
- `lem-abel-jacobi-map-is-well-defined-and-base-point-independent` · lemma — The Abel-Jacobi map is well defined and base-point independent
- `lem-principal-divisors-have-vanishing-abel-jacobi-class` · lemma — Principal divisors have vanishing Abel-Jacobi class
- `thm-abels-theorem-for-divisors` · theorem — Abel's theorem for divisors
- `thm-jacobi-inversion` · theorem — Jacobi inversion
- `cor-picard-zero-is-the-jacobian` · corollary — Picard zero is the Jacobian
- `thm-abel-jacobi-embedding-positive-genus` · theorem — The Abel-Jacobi map embeds a positive-genus surface

### `periods-jacobians-and-abel-jacobi-theory-examples` — Periods, Jacobians, and Abel--Jacobi Theory: Examples and Counterexamples (6 item(s))

- `ex-symplectic-homology-basis-of-a-genus-two-surface` · example — A symplectic homology basis of a genus-two surface
- `ex-base-point-cancellation-for-degree-zero-divisors` · example — Base-point cancellation for degree-zero divisors
- `ex-periods-of-a-complex-torus` · example — Periods of a complex torus
- `ex-period-matrix-and-jacobian-of-the-pentagon-curve` · example — Period matrix and Jacobian of the pentagon curve
- `ex-principal-divisor-tests-via-the-abel-jacobi-map` · example — Principal divisor tests via the Abel-Jacobi map
- `ex-abel-image-in-its-jacobian` · example — The Abel image in its Jacobian

### `bergman-and-szego-kernels` — Bergman and Szegő Kernels (21 item(s))

- `lem-bergman-mean-value-l2-bound` · lemma — The mean-value $L^2$ bound for holomorphic functions on a polydisc
- `lem-bergman-evaluation-bound-on-compact-subsets` · lemma — Sup-norm and first-derivative bounds by the $L^2$ norm on compact subsets
- `def-bergman-space-and-kernel` · definition — The Bergman space $A^2(\Omega)$ and the Bergman kernel
- `thm-bergman-basis-expansion-and-closedness` · theorem — $A^2(\Omega)$ is closed, and the Bergman kernel is the sum over any complete orthonormal system
- `thm-bergman-reproducing-projection-and-extremal` · theorem — Reproducing property, Bergman projection and the extremal characterization
- `lem-bergman-kernel-smoothness-and-positive-diagonal` · lemma — Smoothness of the Bergman kernel and positivity of its diagonal on bounded domains
- `thm-bergman-kernel-biholomorphic-transformation` · theorem — Transformation law of the Bergman kernel under a biholomorphism
- `def-bergman-metric-bounded-domain` · definition — The Bergman metric form on a bounded domain
- `lem-complex-hessian-domination-at-a-common-minimum` · lemma — The complex Hessian of a $C^2$ function dominates that of a minorant at a common minimum
- `thm-bergman-metric-positivity-and-biholomorphic-invariance` · theorem — The Bergman metric is positive definite on bounded domains and biholomorphically invariant
- `lem-bergman-determinant-over-kernel-invariant` · lemma — $\det g_\Omega/K_\Omega$ is a biholomorphic invariant of the Bergman geometry
- `def-szego-kernel-smooth-bounded-domain` · definition — The Hardy boundary space, Szegő projection and Szegő kernel on a smoothly bounded domain
- `lem-monomial-integrals-over-disc-ball-and-polydisc` · lemma — Weighted monomial integrals and monomial norms for the disc, ball and polydisc
- `lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc` · lemma — Monomials form complete orthogonal systems of the Bergman spaces of the disc, the ball and the polydisc
- `lem-sphere-and-torus-monomial-integrals` · lemma — Monomial integrals on the sphere and orthonormality on the distinguished torus
- `lem-disc-hardy-traces-and-szego-reproducing` · lemma — The disc trace space is the Hardy boundary space and the Szegő family reproduces $H^2$
- `lem-ball-hardy-traces-and-evaluation-bound` · lemma — Polynomial traces, monomial basis and bounded evaluation for the ball Hardy space
- `lem-complex-multinomial-theorem` · lemma — The multinomial theorem for finitely many complex variables
- `thm-model-domain-bergman-and-szego-kernels` · theorem — Bergman kernels of the disc, ball and polydisc, and Szegő kernels of the disc and ball
- `lem-bergman-metric-determinants-of-ball-and-polydisc` · lemma — Determinants and kernel quotients of the model Bergman metrics
- `thm-poincare-ball-and-polydisc-not-biholomorphic` · theorem — Poincaré's theorem: the ball and the polydisc are not biholomorphic for $m\ge2$

### `bergman-and-szego-kernels-examples` — Bergman and Szegő Kernels: Examples and Counterexamples (8 item(s))

- `ex-disc-monomial-bergman-basis-and-reproducing-check` · example — The disc Bergman kernel from its monomial basis, with a reproducing check
- `ex-ball-monomial-norms-and-model-kernels` · example — Ball monomial norms, Bergman and Szegő kernels of the ball
- `ex-half-plane-bergman-kernel-by-mobius-transport` · example — The upper half-plane Bergman kernel by biholomorphic transport
- `ex-bergman-versus-szego-normalization-on-the-disc` · example — Bergman versus Szegő normalization on the disc
- `ex-square-integrable-entire-functions-vanish` · example — An unbounded domain with trivial Bergman space
- `ex-polydisc-bergman-product-and-distinguished-torus-kernel` · example — The polydisc Bergman product and the different distinguished-torus Hardy kernel
- `ex-polydisc-boundary-and-the-smooth-szego-hypotheses` · example — The polydisc boundary is not a smooth hypersurface, so the Szegő definition does not apply
- `fs-ball-and-polydisc-are-biholomorphic-for-n-at-least-two` · false-statement — The claim that the ball and the polydisc are biholomorphic

## Your seams

Your pages depend on another group's:

- `periods-jacobians-and-abel-jacobi-theory` requires `divisors-riemann-roch-and-duality` (group c, batch 10)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
