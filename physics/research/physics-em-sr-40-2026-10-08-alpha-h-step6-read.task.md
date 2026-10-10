# Step 6 Alpha group reader — read-only digest — group **h**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **16**, **17**, **18**: 3 A/B pair(s), 6 page(s), 41 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/physics-support/step7-scope.mjs`; no line
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
| 16 | `em-expanded-analysis-prerequisites` | A | classical-electromagnetism-mathematics | 310 | `compact-operators-and-riesz-schauder-theory`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `complex-lp-spaces-and-test-function-conventions`, `em-variational-mathematical-prerequisites`, `fourier-multipliers-and-sobolev-characterisations`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `poisson-problems-and-interior-harmonic-estimates`, `relations-functions-and-quotients`, `schwartz-space-and-the-plancherel-theorem`, `simply-connected-plane-domains`, `smooth-approximation-and-sobolev-extension`, `sobolev-traces-and-zero-boundary-values`, `sr-worldlines-and-clocks`, `stone-weierstrass-general`, `the-identity-theorem-and-the-open-mapping-theorem`, `the-lebesgue-integral-and-the-convergence-theorems`, `weak-derivatives-and-sobolev-spaces`, `compactness`, `completeness-and-uniform-continuity`, `contour-integration`, `convexity`, `further-trigonometric-identities-and-inverses`, `interior-and-boundary-sobolev-elliptic-regularity`, `picard-lindelof-and-first-order-odes`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `uniform-convergence-of-functions`, `wave-energy-finite-propagation-and-huygens`, `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`, `analyticity-liouville-and-morera`, `bounded-variation-and-riemann-stieltjes`, `inverse-and-implicit-function-theorems`, `fundamental-trigonometric-identities`, `series-and-nonnegative-tests`, `sobolev-poincare-and-morrey-inequalities`, `the-real-gamma-and-beta-functions`, `measures-and-their-basic-properties`, `complex-power-series-and-analytic-functions`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `sine-cosine-and-the-definition-of-pi`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `norming-and-separation-under-hahn-banach`, `pi-the-equivalent-characterizations`, `poisson-summation-sampling-and-lattice-duality`, `power-series-and-real-analytic-functions`, `projective-algebraic-sets-projective-morphisms-and-cones`, `signed-and-complex-measures-hahn-and-jordan`, `smooth-partitions-of-unity-and-exhaustions`, `suprema-and-infima`, `the-direct-method-and-euler-lagrange-equations`, `topology-of-r`, `the-total-derivative`, `distributions-test-functions-and-differentiation`, `sr-spacetime-primitives`, `euclidean-surface-measure-divergence-and-green-identities`, `the-topology-of-euclidean-space` |
| 16 | `em-expanded-analysis-prerequisites-examples` | B | classical-electromagnetism-mathematics | 320 | `em-expanded-analysis-prerequisites` |
| 17 | `em-wave-equation-prerequisites` | A | classical-electromagnetism-mathematics | 311 | `em-expanded-analysis-prerequisites`, `wave-equation-representation-formulas` |
| 17 | `em-wave-equation-prerequisites-examples` | B | classical-electromagnetism-mathematics | 312 | `em-wave-equation-prerequisites` |
| 18 | `em-boundary-and-spectral-prerequisites` | A | classical-electromagnetism-mathematics | 313 | `em-expanded-analysis-prerequisites`, `fubini-and-change-of-variables`, `norming-and-separation-under-hahn-banach`, `smooth-partitions-of-unity-and-exhaustions`, `tempered-distributions-and-the-fourier-transform`, `the-topology-of-euclidean-space`, `uniform-spaces`, `subspaces-products-and-quotients`, `rellich-kondrachov-and-sobolev-compactness` |
| 18 | `em-boundary-and-spectral-prerequisites-examples` | B | classical-electromagnetism-mathematics | 314 | `em-boundary-and-spectral-prerequisites`, `volumes-of-elementary-solids-and-solids-of-revolution` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-expanded-analysis-prerequisites` — Em Expanded Analysis Prerequisites (29 item(s))

- `lem-em-bounded-error-model-comparison` · lemma — Bounded-error model comparison: a derivative lower bound confines compatible parameters
- `lem-em-convergent-legendre-kernel` · lemma — Legendre polynomials from a convergent zonal kernel: generating function and exterior expansion
- `lem-em-global-retarded-root` · lemma — Global existence, uniqueness and differentiability of the retarded root
- `lem-em-integrable-causal-dispersion` · lemma — Dispersion relations for an absolutely continuous integrable causal kernel
- `lem-em-mean-zero-coercivity-on-a-c-one-domain` · lemma — Poincare inequality with mean subtraction on a bounded connected C-one domain
- `lem-em-outgoing-spherical-hankel-dtn-bounds` · lemma — Outgoing spherical radial functions: exact bounds on the spherical Dirichlet-to-Neumann coefficient
- `lem-em-rectangular-pec-energy-completeness` · lemma — Rectangular PEC reflection class: Fourier completeness, weak solutions and energy conservation
- `lem-em-smooth-newtonian-upgrade` · lemma — Newtonian potential of smooth compact data is smooth and solves the Poisson equation pointwise
- `lem-em-symmetric-coercive-variational-solver` · lemma — Unique solution of a symmetric coercive variational problem on a Hilbert space
- `lem-em-thin-current-limit` · lemma — Thin closed current: divergence-free distribution and convergence of its mollified Biot-Savart fields
- `lem-em-zero-boundary-coercivity` · lemma — The gradient norm dominates the H-one norm on zero-boundary Sobolev space
- `lem-em-dirichlet-resolvent-h-two-and-smooth-test-density` · lemma — The L-two Dirichlet resolvent and smooth zero-boundary test density
- `lem-em-finitely-subtracted-analytic-dispersion` · lemma — Dispersion relations for a finitely subtracted analytic response
- `lem-em-lift-specified-dirichlet-existence` · lemma — Weak Dirichlet existence for a prescribed lift and uniformly elliptic coefficient
- `lem-em-magnetic-dipole-remainder` · lemma — Magnetic dipole expansion with an explicit uniform remainder
- `lem-em-outgoing-source-helmholtz-and-diffraction` · lemma — Outgoing source Helmholtz field: fundamental solution, Fraunhofer and Fresnel error terms
- `lem-em-spherical-harmonic-basis-and-addition` · lemma — Spherical harmonics: orthogonal decomposition, complete basis and addition theorem
- `lem-em-spherical-mean-wave-identity` · lemma — The spherical mean identity behind the wave equation
- `lem-em-ball-poisson-series-boundary-convergence` · lemma — Ball Poisson series: interior convergence, boundary data and the Poisson kernel
- `lem-em-helmholtz-boundary-representation` · lemma — Exact Helmholtz boundary representation with actual traces
- `lem-em-particle-curve-variation` · lemma — Fixed-endpoint variation of the relativistic particle functional
- `lem-em-prescribed-fractional-dirichlet-existence` · lemma — Weak Dirichlet problem with prescribed fractional Sobolev boundary data
- `lem-em-sphere-outgoing-dirichlet-to-neumann-map` · lemma — Outgoing spherical trace and Dirichlet-to-Neumann map
- `lem-em-weak-neumann-and-transmission-existence` · lemma — Weak Neumann and transmission existence with interface charges
- `lem-em-parameter-preserving-smooth-extension-on-a-smooth-domain` · lemma — A fixed smooth-domain extension that preserves smooth parameters
- `lem-em-parameter-dependent-smooth-poisson-boundary-solvers` · lemma — Smooth parameter-dependent Dirichlet and compatible Neumann Poisson solvers
- `lem-em-smooth-domain-elliptic-regularity` · lemma — Classical elliptic regularity on smooth domains and across smooth interfaces
- `lem-em-smooth-pec-cavity-spectral-closure` · lemma — Spectral completeness of the curl operator in a smooth PEC cavity
- `lem-em-pec-cavity-eigenfield-boundary-regularity` · lemma — Smooth boundary regularity of PEC cavity eigenfields in the declared graph completion

### `em-expanded-analysis-prerequisites-examples` — Em Expanded Analysis Prerequisites — Examples (1 item(s))

- `ex-em-outgoing-dtn-and-pec-zero-mode-boundaries` · example — Outgoing DtN coefficient at degree zero and the explicit PEC topology zero mode

### `em-wave-equation-prerequisites` — Em Wave Equation Prerequisites (2 item(s))

- `lem-em-spherical-mean-family-smoothness` · lemma — Joint smoothness of the spherical-mean family of a smooth spacetime function
- `thm-em-wave-cauchy-kirchhoff` · theorem — The three-dimensional wave Cauchy problem: Kirchhoff representation, uniqueness, domain of dependence and compact support

### `em-wave-equation-prerequisites-examples` — Em Wave Equation Prerequisites — Examples (1 item(s))

- `ex-em-wave-equation-prerequisites-source-and-support-boundaries` · example — Worked checks of the wave Cauchy formula: source non-compactness, support propagation and linear growth

### `em-boundary-and-spectral-prerequisites` — Em Boundary And Spectral Prerequisites (7 item(s))

- `lem-three-dimensional-radial-carleman-integer-weight` · lemma — Three-dimensional radial Carleman inequality with integer weight
- `thm-bounded-potential-weak-unique-continuation-in-three-dimensions` · theorem — Weak unique continuation for bounded potentials in three dimensions
- `thm-em-spherical-multipole-basis` · theorem — Exterior spherical multipole expansion and the ball boundary series
- `thm-em-elliptic-boundary-existence` · theorem — Well-posed weak solvability and classical regularity for declared smooth-domain elliptic boundary problems
- `lem-em-exterior-outgoing-scalar-uniqueness` · lemma — Uniqueness of the outgoing scalar Helmholtz solution with a smooth obstacle
- `lem-em-exterior-vector-helmholtz-mixed-boundary-existence` · lemma — Existence and uniqueness for the smooth exterior vector Helmholtz mixed boundary problem
- `thm-em-waveguide-spectral-completeness` · theorem — Spectral completeness of the declared PEC waveguide and cavity classes

### `em-boundary-and-spectral-prerequisites-examples` — Em Boundary And Spectral Prerequisites — Examples (1 item(s))

- `ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries` · example — Explicit mathematical hypothesis/convention examples

## Your seams

Your pages depend on another group's:

- `em-expanded-analysis-prerequisites` requires `em-variational-mathematical-prerequisites` (group g, batch 15)
- `em-expanded-analysis-prerequisites` requires `sr-worldlines-and-clocks` (group k, batch 3)
- `em-expanded-analysis-prerequisites` requires `sr-spacetime-primitives` (group j, batch 1)

Another group's pages depend on yours:

- `em-electrostatic-boundaries-and-conductors` (group b) requires your `em-boundary-and-spectral-prerequisites`
- `em-electrostatic-multipoles` (group b) requires your `em-boundary-and-spectral-prerequisites`
- `em-magnetostatics-in-vacuum` (group b) requires your `em-expanded-analysis-prerequisites`
- `em-potentials-and-gauge` (group c) requires your `em-boundary-and-spectral-prerequisites`
- `em-potentials-and-gauge` (group c) requires your `em-wave-equation-prerequisites`
- `em-vacuum-waves-and-polarization` (group d) requires your `em-wave-equation-prerequisites`
- `em-causal-response-and-radiation-prerequisites` (group i) requires your `em-wave-equation-prerequisites`
- `em-experiment-analysis-prerequisites` (group i) requires your `em-expanded-analysis-prerequisites`
- `em-causal-wave-kernel-prerequisites` (group i) requires your `em-wave-equation-prerequisites`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

---

# Step 6 Alpha group reader — read-only digest, `physics-em-sr-40-2026-10-08`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
