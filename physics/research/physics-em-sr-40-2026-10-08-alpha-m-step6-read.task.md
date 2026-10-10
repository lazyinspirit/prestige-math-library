# Step 6 Alpha group reader — read-only digest — group **m**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **9**, **10**, **11**: 3 A/B pair(s), 6 page(s), 44 item(s).

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
| 9 | `sr-forces-and-continuum` | A | special-relativity | 225 | `sr-energy-momentum`, `fubini-and-change-of-variables`, `regular-surfaces-and-surface-integrals`, `smooth-partitions-of-unity-and-exhaustions`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral-in-rn-and-jordan-content`, `partitions-of-unity-and-paracompactness` |
| 9 | `sr-forces-and-continuum-examples` | B | special-relativity | 226 | `sr-forces-and-continuum` |
| 10 | `sr-accelerated-observers` | A | special-relativity | 227 | `sr-causality-and-signals`, `sr-light-and-doppler`, `sr-proper-time-comparisons`, `sine-cosine-and-the-definition-of-pi` |
| 10 | `sr-accelerated-observers-examples` | B | special-relativity | 228 | `sr-accelerated-observers` |
| 11 | `sr-newtonian-bridge` | A | special-relativity | 229 | `sr-energy-momentum`, `darboux-lhopital-and-taylor` |
| 11 | `sr-newtonian-bridge-examples` | B | special-relativity | 230 | `sr-newtonian-bridge` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sr-forces-and-continuum` — Forces And Continuum (15 item(s))

- `def-sr-stress-energy-tensor-and-force-density` · definition — Stress-energy tensor, force density and local balance on flat spacetime
- `lem-sr-observer-stress-energy-decomposition` · lemma — Observer decomposition of a symmetric stress-energy tensor
- `lem-sr-compact-variation-and-fundamental-lemma` · lemma — Compact-support variation: the fundamental lemma, integration by parts and differentiation under the integral sign
- `lem-sr-scalar-field-euler-lagrange` · lemma — First variation of the scalar-field action and the Euler-Lagrange equation
- `lem-sr-scalar-field-hilbert-stress-energy` · lemma — The Hilbert stress-energy tensor of the scalar-field action on flat spacetime
- `lem-sr-scalar-field-stress-divergence-identity` · lemma — Divergence identity for the scalar-field stress-energy tensor
- `lem-sr-dust-conservation-equivalence` · lemma — Dust: conservation of rho n tensor n is equivalent to continuity and inertial flow
- `lem-sr-perfect-fluid-conservation-equations` · lemma — Perfect fluid: conservation is equivalent to the energy and Euler equations
- `thm-sr-stress-balance-and-finite-flux` · theorem — Stress balance and finite flux on closed boxes
- `thm-sr-antisymmetric-observer-decomposition` · theorem — Hodge reconstruction of an alternating two-tensor and the optional SI field split
- `post-sr-matter-models-and-evolution` · postulate — Adopted continuum matter models and their evolution equations
- `post-sr-matter-isolation-and-total-stress-energy` · postulate — Adopted total stress-energy and isolation premise for integrated conservation
- `pthm-sr-local-stress-energy-conservation` · physics-theorem — Local conservation of stress-energy for the adopted matter models
- `pthm-sr-integrated-conservation-for-isolated-matter` · physics-theorem — Integrated four-momentum of an isolated system on finite slices
- `rem-sr-continuum-force-and-conservation-scope` · remark — Scope of the page: two notions of force, conditional conservation and excluded claims

### `sr-forces-and-continuum-examples` — Forces And Continuum — Examples (8 item(s))

- `ex-sr-dust-stress-energy-under-a-boost` · example — Dust stress-energy in a boosted inertial frame
- `ex-sr-perfect-fluid-rest-and-moving-frame` · example — Perfect fluid components in its rest frame and in a moving frame
- `ex-sr-constant-velocity-dust-with-transverse-profile` · example — A dust solution with constant velocity and transverse density profile
- `ex-sr-static-tension-stress-balance` · example — A static uniaxial stress: tension must be constant along the stressed direction
- `ex-sr-box-flux-balance-worked` · example — The box balance identity checked on an explicit stress-energy field
- `ex-sr-scalar-field-plane-wave-stress-energy` · example — Null plane-wave scalar field and its conserved stress-energy tensor
- `cex-sr-divergence-free-stress-energy-with-varying-slice-momentum` · counterexample — Divergence-free stress-energy with a nonconserved slice integral
- `cex-sr-prescribed-stress-energy-need-not-be-conserved` · counterexample — A prescribed covariant stress-energy tensor need not be conserved

### `sr-accelerated-observers` — Accelerated Observers (6 item(s))

- `def-sr-proper-acceleration` · definition — Proper acceleration of a massive worldline and its agreement with the acceleration of an observer congruence
- `lem-sr-hyperbolic-motion-worldline` · lemma — The uniformly accelerated worldline: hyperbolic motion, constant four-acceleration magnitude, and identification as a Rindler flow line
- `lem-sr-connecting-field-stretching` · lemma — The material metric of a congruence: evolution of rest separations and preservation of the internal metric under Born rigidity
- `pthm-sr-rindler-horizons-and-radar` · physics-theorem — The Rindler chart: causal horizons of a uniformly accelerated observer and the restrictions of radar time and distance
- `pthm-sr-guided-ring-sagnac-delay` · physics-theorem — The guided-ring Sagnac delay: return times and receiver proper-time difference for counter-propagating guided signals on a rotating ring
- `texp-sr-bell-rockets-thread` · thought-experiment — Bell's rockets and thread: constant chart separation and the criterion for longitudinal expansion of the translated congruence

### `sr-accelerated-observers-examples` — Accelerated Observers — Examples (5 item(s))

- `ex-sr-rindler-radar-distance-worked` · example — Rindler radar distances worked: reflectors at twice and at half the observer's radius
- `cex-sr-rindler-horizon-is-not-a-physical-boundary` · counterexample — The Rindler causal horizon is not a boundary or singularity of spacetime
- `cex-sr-rindler-radar-distance-is-not-symmetric` · counterexample — Rindler radar distance between two coaxial observers is not symmetric under interchange
- `ex-sr-guided-ring-sagnac-worked` · example — Guided-ring Sagnac delay worked at angular velocity Omega R = 3c/5
- `ex-sr-bell-congruence-rest-separation-worked` · example — Bell congruence worked: internal material length gamma(t)L and constant chart separation

### `sr-newtonian-bridge` — Newtonian Bridge (7 item(s))

- `def-sr-newtonian-comparison-quantities` · definition — Newtonian comparison momentum and kinetic energy in a named inertial frame
- `lem-sr-uniform-low-speed-taylor-remainder` · lemma — The uniform second-order Taylor remainder of $z\mapsto(1-z)^{-1/2}$ on $[0,z_0]$
- `lem-sr-uniform-low-speed-expansion-of-observer-quantities` · lemma — Uniform low-speed expansion of the observer energy, momentum and kinetic energy of a massive four-momentum
- `def-sr-galilean-limiting-charts` · definition — Galilean limiting chart maps and bounded chart regions
- `lem-sr-uniform-galilean-limit-of-boost-charts` · lemma — Uniform Galilean limit of the boost charts on bounded regions, and its failure on unbounded regions
- `pthm-sr-newtonian-p-e-correspondence` · physics-theorem — Specified low-speed momentum-energy correspondence between the relativistic measured quantities and the Newtonian comparison quantities
- `rem-sr-newtonian-bridge-limits-and-failures` · remark — Limits of the Newtonian bridge: speed-dependent error constants, the excluded massless case, and bounded chart regions

### `sr-newtonian-bridge-examples` — Newtonian Bridge — Examples (3 item(s))

- `ex-sr-low-speed-expansion-at-beta-one-fifth` · example — Worked low-speed correspondence at $|w|=c/5$
- `ex-sr-uniform-galilean-chart-bound-worked` · example — Worked uniform Galilean chart bound on a bounded region
- `cex-sr-uniform-low-speed-remainder-fails-near-light-speed` · counterexample — Counterexample: no speed-independent uniform low-speed remainder for the kinetic energy

## Your seams

Your pages depend on another group's:

- `sr-forces-and-continuum` requires `sr-energy-momentum` (group l, batch 8)
- `sr-accelerated-observers` requires `sr-causality-and-signals` (group k, batch 5)
- `sr-accelerated-observers` requires `sr-light-and-doppler` (group l, batch 7)
- `sr-accelerated-observers` requires `sr-proper-time-comparisons` (group l, batch 6)
- `sr-newtonian-bridge` requires `sr-energy-momentum` (group l, batch 8)

Another group's pages depend on yours:

- `em-primitives-and-postulates` (group a) requires your `sr-forces-and-continuum`
- `sr-experimental-interface` (group n) requires your `sr-forces-and-continuum`

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
