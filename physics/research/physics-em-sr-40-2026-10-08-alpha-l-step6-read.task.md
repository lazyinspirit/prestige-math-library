# Step 6 Alpha group reader — read-only digest — group **l**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **6**, **7**, **8**: 3 A/B pair(s), 6 page(s), 52 item(s).

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
| 6 | `sr-proper-time-comparisons` | A | special-relativity | 219 | `sr-observer-measurements`, `construction-of-the-natural-numbers` |
| 6 | `sr-proper-time-comparisons-examples` | B | special-relativity | 220 | `sr-proper-time-comparisons` |
| 7 | `sr-light-and-doppler` | A | special-relativity | 221 | `sr-observer-measurements` |
| 7 | `sr-light-and-doppler-examples` | B | special-relativity | 222 | `sr-light-and-doppler` |
| 8 | `sr-energy-momentum` | A | special-relativity | 223 | `sr-observer-measurements`, `construction-of-the-natural-numbers`, `rings-subrings-and-integral-domains`, `sine-cosine-and-the-definition-of-pi`, `further-trigonometric-identities-and-inverses` |
| 8 | `sr-energy-momentum-examples` | B | special-relativity | 224 | `sr-energy-momentum` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sr-proper-time-comparisons` — Proper Time Comparisons (9 item(s))

- `def-sr-inertial-and-piecewise-inertial-worldline` · definition — Inertial and piecewise inertial worldlines of the affine Minkowski model
- `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` · lemma — The reversed Cauchy-Schwarz inequality for future timelike vectors
- `cor-sr-reverse-triangle-and-future-cone-convexity` · corollary — The reversed triangle inequality and convexity of the future timelike cone
- `lem-sr-rest-frame-of-a-future-timelike-displacement` · lemma — Existence of an inertial frame whose time axis is a prescribed future timelike direction
- `lem-sr-endpoint-displacement-of-a-future-timelike-worldline` · lemma — The displacement of a future timelike worldline is future timelike
- `thm-sr-endpoint-proper-time-bound-and-flat-maximum` · theorem — The endpoint bound for proper time and the maximality of the straight worldline in affine Minkowski space
- `pthm-sr-same-endpoint-clock-comparison` · physics-theorem — Same-endpoint clock comparison: the inertial clock ages most
- `texp-sr-piecewise-inertial-twin-reunion` · thought-experiment — The piecewise inertial twin reunion: conditional differential aging
- `rem-sr-twin-acceleration-and-synchronization-caveats` · remark — Acceleration is not an aging term, and the twin comparison is not symmetric: scope caveats

### `sr-proper-time-comparisons-examples` — Proper Time Comparisons — Examples (6 item(s))

- `ex-sr-reverse-cauchy-schwarz-and-equality` · example — Worked reverse Cauchy-Schwarz and reverse triangle inequalities
- `ex-sr-two-leg-itinerary-versus-straight-clock` · example — Worked two-leg itinerary against the straight clock at speed 3c/5
- `ex-sr-twin-simultaneity-gap-at-the-turn` · example — Worked simultaneity gap of the traveler's two momentary rest frames at the turn
- `cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair` · counterexample — Counterexample: the reversed Cauchy-Schwarz inequality fails outside same-orientation timelike pairs
- `cex-sr-past-directed-itinerary-attains-the-endpoint-bound` · counterexample — Counterexample: attainment of the endpoint bound does not force the future time orientation
- `ex-sr-rest-frame-of-a-timelike-displacement-worked` · example — Worked rest frame of the future timelike displacement (5,3,0,0)

### `sr-light-and-doppler` — Light And Doppler (10 item(s))

- `lem-sr-metric-duality-on-lorentz-vector-space` · lemma — The metric pairing is an isomorphism to the dual, and the raised covector in an orthonormal frame
- `def-sr-affine-phase-and-wave-covector` · definition — Affine phase functions and wave covectors on affine Minkowski space
- `lem-sr-future-causal-pairing-negative` · lemma — A future timelike vector pairs negatively with every nonzero future causal vector
- `lem-sr-null-covector-frame-data` · lemma — Frame data of a future null wave covector: the unique pair (varpi, s) with |s| = 1
- `lem-sr-null-covector-boost-transformation` · lemma — Transformation of the frame data of a future null wave covector under a passive boost
- `lem-sr-phase-rate-along-worldline` · lemma — The phase rate along a curve, a worldline and an ideal observer
- `def-sr-null-wave-covector-and-observer-frequency` · definition — Null wave covectors, frame frequency data and the observer frequency of an ideal plane wave
- `post-sr-ideal-plane-wave-model` · postulate — Adopted ideal plane-wave and frequency-reading model
- `pthm-sr-null-wave-doppler-and-aberration` · physics-theorem — Doppler shift and aberration for an ideal plane wave between inertial descriptions
- `rem-sr-doppler-dimensional-restoration` · remark — Units, coordinate conventions and c restoration for the wave and Doppler formulas

### `sr-light-and-doppler-examples` — Light And Doppler — Examples (6 item(s))

- `ex-sr-doppler-longitudinal-beta-three-fifths` · example — Worked longitudinal Doppler shift at beta = 3/5
- `ex-sr-transverse-doppler-protocols-worked` · example — Worked transverse Doppler configurations: gamma versus 1/gamma at beta = 3/5
- `ex-sr-aberration-worked-beta-three-fifths` · example — Worked aberration and Doppler shift at beta = 3/5 and cos theta = 4/5
- `ex-sr-phase-level-sets-and-null-generators` · example — Worked geometry of the phase level sets of a future null wave covector
- `cex-sr-transverse-doppler-is-not-unshifted` · counterexample — Counterexample: a transverse wave configuration need not have zero Doppler shift
- `ex-sr-null-covector-frame-data-worked` · example — Worked frame data of a future null wave covector and its boost

### `sr-energy-momentum` — Energy Momentum (13 item(s))

- `def-sr-observed-energy-momentum-and-kinetic-energy` · definition — Observer energy, spatial momentum, invariant mass, rest energy and kinetic energy of a four-momentum
- `lem-sr-energy-momentum-observer-identities` · lemma — Positivity, mass shell and kinetic energy of the observer quantities of a four-momentum
- `lem-sr-four-momentum-in-inertial-frame` · lemma — Four-momentum components, energy-velocity relation and passive boost transformation in an inertial frame
- `def-sr-proper-time-derivative-and-four-force` · definition — Proper-time derivative of a vector field along a worldline and the four-force notation
- `lem-sr-four-force-and-work-energy-identities` · lemma — Four-force identities and the work-energy relation in an inertial frame
- `def-sr-total-four-momentum-and-invariant-mass` · definition — Total four-momentum, invariant mass and center-of-momentum frame of a finite system
- `lem-sr-finite-future-causal-sums` · lemma — Finite sums of future causal vectors and additivity of observer energy and momentum
- `lem-sr-center-of-momentum-frame` · lemma — Center-of-momentum frames of a future timelike four-momentum and their unique time vector
- `def-sr-collision-datum-and-conservation` · definition — Collision data and four-momentum conservation
- `lem-sr-collision-necessary-conditions` · lemma — Invariant mass, center-of-momentum frame and necessary conditions for conserving collision data
- `post-sr-massive-particle-dynamics` · postulate — Adopted massive-particle momentum, observer measurement and isolated-collision conservation
- `post-sr-ideal-massless-particle-momentum` · postulate — Adopted momentum model for an ideal massless particle
- `pthm-sr-momentum-and-four-force` · physics-theorem — Energy, momentum, invariant mass and four-force of relativistic particles, and necessary collision thresholds

### `sr-energy-momentum-examples` — Energy Momentum — Examples (8 item(s))

- `ex-sr-four-momentum-at-beta-three-fifths` · example — Four-momentum and kinetic energy at speed three-fifths c
- `ex-sr-four-momentum-boost-to-rest` · example — A passive boost that brings a moving particle to rest
- `ex-sr-equal-mass-head-on-collision-mass` · example — Two equal masses in head-on motion: system mass exceeds the sum of the masses
- `ex-sr-perfectly-inelastic-collision-rest-mass` · example — A conserving two-into-one collision datum and the non-uniqueness of its final state
- `ex-sr-null-pair-invariant-mass` · example — Collective mass of a pair of oppositely directed massless momenta
- `ex-sr-stationary-target-threshold` · example — Threshold energy for a projectile on a stationary target
- `cex-sr-massless-momentum-not-mu-at-zero-mass` · counterexample — A massless four-momentum is not obtained from the massive formula at m = 0
- `cex-sr-kinetic-energy-is-observer-dependent` · counterexample — Kinetic energy depends on the observer even though the invariant mass does not

## Your seams

Your pages depend on another group's:

- `sr-proper-time-comparisons` requires `sr-observer-measurements` (group k, batch 4)
- `sr-light-and-doppler` requires `sr-observer-measurements` (group k, batch 4)
- `sr-energy-momentum` requires `sr-observer-measurements` (group k, batch 4)

Another group's pages depend on yours:

- `em-lorentz-covariant-formulation` (group e) requires your `sr-light-and-doppler`
- `sr-forces-and-continuum` (group m) requires your `sr-energy-momentum`
- `sr-accelerated-observers` (group m) requires your `sr-light-and-doppler`
- `sr-accelerated-observers` (group m) requires your `sr-proper-time-comparisons`
- `sr-newtonian-bridge` (group m) requires your `sr-energy-momentum`
- `sr-experimental-interface` (group n) requires your `sr-light-and-doppler`

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
