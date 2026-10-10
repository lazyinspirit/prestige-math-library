# Step 6 Alpha group reader — read-only digest — group **k**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **3**, **4**, **5**: 3 A/B pair(s), 6 page(s), 60 item(s).

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
| 3 | `sr-worldlines-and-clocks` | A | special-relativity | 213 | `sr-lorentz-transformations`, `monotone-functions-and-discontinuities`, `monotone-sequences-and-cauchy-completeness`, `properties-of-the-integral-and-the-working-ftc`, `the-riemann-integral` |
| 3 | `sr-worldlines-and-clocks-examples` | B | special-relativity | 214 | `sr-worldlines-and-clocks`, `sine-cosine-and-the-definition-of-pi` |
| 4 | `sr-observer-measurements` | A | special-relativity | 215 | `sr-worldlines-and-clocks`, `compactness-in-metric-spaces`, `connections-levi-civita-and-parallel-transport`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `homotopy-and-homotopy-equivalence`, `line-integrals-and-the-gradient-theorem`, `picard-lindelof-and-first-order-odes`, `riemann-curvature-and-riemannian-submanifolds`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `the-exterior-derivative-and-cartan-calculus`, `the-fundamental-group`, `vector-fields-flows-and-lie-derivatives`, `sine-cosine-and-the-definition-of-pi`, `fundamental-trigonometric-identities` |
| 4 | `sr-observer-measurements-examples` | B | special-relativity | 216 | `sr-observer-measurements` |
| 5 | `sr-causality-and-signals` | A | special-relativity | 217 | `sr-observer-measurements` |
| 5 | `sr-causality-and-signals-examples` | B | special-relativity | 218 | `sr-causality-and-signals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sr-worldlines-and-clocks` — Worldlines And Clocks (11 item(s))

- `def-sr-regular-causal-curve-and-worldline` · definition — Curves, regular causal curves and future timelike worldlines in affine Minkowski space
- `lem-sr-weak-piecewise-causal-integrability` · lemma — Improper integrability and endpoint increments of weak piecewise future causal curves
- `def-sr-proper-time` · definition — Proper time along a future timelike worldline
- `def-sr-piecewise-proper-time` · definition — Total proper time of a piecewise C^1 future timelike worldline
- `lem-sr-piecewise-proper-time-reparametrization-invariance` · lemma — Proper time is invariant under regular increasing weak piecewise changes of parameter
- `lem-sr-proper-time-parametrization` · lemma — The proper-time function is a strictly increasing C^1 parametrization with C^1 inverse
- `lem-sr-proper-time-reparametrization-invariance` · lemma — Length-integral invariance under monotone C^1 maps and proper-time invariance under regular increasing maps
- `def-sr-four-velocity-and-four-acceleration` · definition — Four-velocity and four-acceleration of a future timelike worldline
- `thm-sr-proper-time-and-observer-decomposition` · theorem — Norms of four-velocity and four-acceleration, and the observer rest-space decomposition
- `post-sr-free-trajectories-and-clock-hypothesis` · postulate — Adopted free trajectories of massive particles and the clock hypothesis
- `pthm-sr-four-velocity-norm-and-orthogonality` · physics-theorem — Four-velocity norm and four-acceleration orthogonality for the model's clocks

### `sr-worldlines-and-clocks-examples` — Worldlines And Clocks — Examples (8 item(s))

- `ex-sr-clock-at-rest-in-a-chart` · example — Worked example: the clock at rest in an inertial chart
- `ex-sr-proper-time-of-a-straight-worldline` · example — Worked example: proper time and four-velocity of a straight worldline at beta = 3/5
- `ex-sr-proper-time-reparametrization` · example — Worked example: invariance of elapsed proper time under a cubic reparametrization
- `ex-sr-four-velocity-and-acceleration-of-a-circular-worldline` · example — Worked example: four-velocity and four-acceleration of uniform circular motion
- `ex-sr-observer-split-worked` · example — Worked example: splitting a four-velocity in an observer's rest frame
- `cex-sr-null-curves-have-no-proper-time-parametrization` · counterexample — Counterexample: a future null curve has no proper-time parametrization
- `cex-sr-spacelike-curves-have-no-proper-time` · counterexample — Counterexample: the proper-time integrand of a spacelike curve is not real
- `cex-sr-past-directed-timelike-parametrization-is-not-a-worldline` · counterexample — Counterexample: a past-directed parametrization of a timelike line is not a worldline

### `sr-observer-measurements` — Observer Measurements (15 item(s))

- `def-sr-chart-tetrad-and-congruence-distinction` · definition — Charts, tetrads, observer congruences and adapted charts in affine Minkowski space
- `def-flat-covariant-derivative-on-affine-minkowski-space` · definition — The flat covariant derivative on affine Minkowski space and fields along curves
- `def-sr-observer-congruence-and-kinematics` · definition — Kinematics of an observer congruence: acceleration, expansion, shear, vorticity and Born rigidity
- `def-sr-simultaneity-slice-and-rest-distance` · definition — Simultaneity slices and rest distance relative to a future unit timelike vector
- `def-sr-operational-radar-protocol` · definition — The operational radar protocol of an ideal observer
- `lem-sr-radar-midpoint-for-inertial-observer` · lemma — The radar round trip of an inertial observer halves at the midpoint of the reception interval
- `pthm-sr-radar-synchronization-of-inertial-observers` · physics-theorem — Radar synchronization of an inertial observer reproduces its inertial chart
- `lem-sr-boost-time-length-and-velocity-formulas` · lemma — Coordinate formulas of a boost: clock rates, rod lengths, simultaneity and velocity transformation
- `pthm-sr-observer-time-length-and-velocity-measurements` · physics-theorem — Time dilation, length contraction, simultaneity and velocity transformation for inertial observers
- `def-sr-fermi-walker-transport` · definition — Fermi-Walker transport along a timelike worldline
- `lem-sr-fermi-walker-transport-existence-and-uniqueness` · lemma — Existence, uniqueness and linearity of Fermi-Walker transport
- `thm-sr-local-congruence-adapted-charts-and-frobenius` · theorem — Local flow boxes, adapted charts and the Frobenius criterion for rest distributions
- `lem-sr-closed-one-form-primitive-on-simply-connected-open-sets` · lemma — A closed 1-form on a simply connected open subset of the affine model has a primitive
- `thm-sr-fermi-walker-and-rigid-observer-examples` · theorem — Fermi-Walker transport preserves the metric, and explicit rigid and non-rigid observer congruences
- `thm-sr-smooth-local-herglotz-noether` · theorem — The smooth local Herglotz-Noether classification of Born-rigid motions

### `sr-observer-measurements-examples` — Observer Measurements — Examples (10 item(s))

- `ex-sr-radar-round-trip-3-4-5` · example — Worked radar round trip: emission, reflection and reception at exact rational parameters
- `ex-sr-time-dilation-at-beta-three-fifths` · example — Worked time dilation at speed 3c/5
- `ex-sr-length-contraction-of-a-moving-rod` · example — Worked length contraction of a rod of rest length 5 at speed 3c/5
- `ex-sr-velocity-transformation-worked` · example — Worked velocity transformation: collinear, transverse and null cases
- `ex-sr-rindler-wedge-congruence-worked` · example — Worked Rindler wedge congruence: chart, metric, acceleration, rigidity and non-coordinate frame
- `ex-sr-rigid-rotation-simultaneity-holonomy` · example — Worked rigid rotation: rest-space holonomy around the ring and failure of ring synchronization
- `ex-sr-bell-congruence-fails-born-rigidity` · example — Worked Bell-type translated congruence: constant launch-frame separation without Born rigidity
- `cex-sr-born-rigid-motion-need-not-be-killing` · counterexample — Counterexample: a Born-rigid congruence need not be a Killing congruence
- `cex-sr-simultaneity-is-observer-dependent` · counterexample — Counterexample: simultaneity is relative to the observer vector
- `ex-sr-fermi-walker-transport-along-hyperbolic-motion` · example — Worked Fermi-Walker transport along uniformly accelerated hyperbolic motion

### `sr-causality-and-signals` — Causality And Signals (7 item(s))

- `def-sr-causal-reachability-in-affine-minkowski-space` · definition — Causal reachability, causal futures and pasts, causal diamonds, and reachability by future causal paths in affine Minkowski space
- `lem-sr-future-causal-sums-and-inertial-coordinate-criterion` · lemma — The closed future cone in inertial coordinates: description, finite sums, and the coordinate criterion for causal reachability
- `thm-sr-future-cone-and-flat-domain-of-dependence` · theorem — Future causal reachability, absence of causal loops, time monotonicity and the straight-worldline proper-time maximum
- `lem-sr-spacelike-pairs-have-frame-dependent-time-order` · lemma — Spacelike-separated events: the spacelike coordinate inequality in every inertial chart, and an explicit family of inertial frames realizing every time-order sign
- `post-sr-causal-signal-propagation` · postulate — The causal signal restriction of the model
- `pthm-sr-causal-signal-order-and-composition` · physics-theorem — Signals in the model: receipt in the future cone, relay composition, absence of closed signal loops, and frame independence of the causal signal condition
- `texp-sr-superluminal-relay-antitelephone` · thought-experiment — The conditional superluminal relay: a one-relay signal chain received in the strict past of its emission

### `sr-causality-and-signals-examples` — Causality And Signals — Examples (9 item(s))

- `ex-sr-causal-diamond-in-one-plus-one` · example — Worked four-dimensional causal diamond and the boost-invariant area of its planar section
- `ex-sr-null-legs-compose-to-a-timelike-displacement` · example — Two nonparallel future null legs compose to a future timelike displacement
- `ex-sr-parallel-null-displacements-compose-to-null` · example — Parallel future null displacements compose to a future null displacement
- `ex-sr-boost-makes-spacelike-events-simultaneous` · example — Worked boost family on the spacelike pair (11,13,0,0): simultaneity at b = 11/13 and both time orders
- `cex-sr-spacelike-time-order-is-not-absolute` · counterexample — Counterexample: the temporal order of a spacelike-separated pair is not the same in every inertial frame
- `cex-sr-null-separated-events-are-not-timelike-joinable` · counterexample — Counterexample: a causally related pair of events need not be joinable by a future timelike worldline
- `ex-sr-causal-classification-of-explicit-displacements` · example — Worked coordinate criteria: four displacements classified by the future-cone inequalities
- `ex-sr-superluminal-sweep-has-no-causal-connection` · example — A prearranged sweep with superluminal coordinate speed: successive events are spacelike separated and can be made simultaneous
- `ex-sr-antitelephone-relay-arrival-time` · example — Worked relay arithmetic at $u=2c$ and $v=(9/10)c$: arrival at $t=-50/(121c)$ seconds

## Your seams

Your pages depend on another group's:

- `sr-worldlines-and-clocks` requires `sr-lorentz-transformations` (group j, batch 2)

Another group's pages depend on yours:

- `em-vacuum-waves-and-polarization` (group d) requires your `sr-causality-and-signals`
- `em-expanded-analysis-prerequisites` (group h) requires your `sr-worldlines-and-clocks`
- `sr-proper-time-comparisons` (group l) requires your `sr-observer-measurements`
- `sr-light-and-doppler` (group l) requires your `sr-observer-measurements`
- `sr-energy-momentum` (group l) requires your `sr-observer-measurements`
- `sr-accelerated-observers` (group m) requires your `sr-causality-and-signals`

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
