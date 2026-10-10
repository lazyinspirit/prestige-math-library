# Step 6 Alpha group reader — read-only digest — group **d**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **32**, **33**, **34**: 3 A/B pair(s), 6 page(s), 29 item(s).

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
| 32 | `em-energy-momentum-and-angular-balance` | A | classical-electromagnetism | 343 | `em-elementary-mathematical-prerequisites`, `em-primitives-and-postulates` |
| 32 | `em-energy-momentum-and-angular-balance-examples` | B | classical-electromagnetism | 344 | `em-energy-momentum-and-angular-balance` |
| 33 | `em-vacuum-waves-and-polarization` | A | classical-electromagnetism | 345 | `em-energy-momentum-and-angular-balance`, `em-maxwell-integral-and-constraints`, `em-wave-equation-prerequisites`, `sr-causality-and-signals`, `fourier-restriction-and-the-stein-tomas-theorem` |
| 33 | `em-vacuum-waves-and-polarization-examples` | B | classical-electromagnetism | 346 | `em-vacuum-waves-and-polarization` |
| 34 | `em-wave-interfaces-and-conductors` | A | classical-electromagnetism | 347 | `em-material-response`, `em-vacuum-waves-and-polarization`, `sine-cosine-and-the-definition-of-pi`, `improper-integrals` |
| 34 | `em-wave-interfaces-and-conductors-examples` | B | classical-electromagnetism | 348 | `em-wave-interfaces-and-conductors` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-energy-momentum-and-angular-balance` — Energy momentum angular balance (6 item(s))

- `def-em-vacuum-energy-flux` · definition — Vacuum electromagnetic energy density and energy flux (the Poynting vector)
- `def-em-vacuum-stress-momentum` · definition — Momentum density, Maxwell stress, momentum flux and orbital angular density in vacuum
- `pthm-em-poynting-balance` · physics-theorem — Local and fixed-volume electromagnetic energy balance
- `pthm-em-momentum-balance` · physics-theorem — Local and fixed-volume momentum balance for smooth sources
- `pthm-em-angular-balance` · physics-theorem — Orbital field angular momentum and torque balance
- `pthm-em-coupled-total-conservation` · physics-theorem — Closed-system energy, momentum and angular balance conditional on a matter model

### `em-energy-momentum-and-angular-balance-examples` — Energy momentum angular balance — Examples (1 item(s))

- `ex-em-vacuum-energy-flow-example` · example — Energy flow in crossed external fields with finite-volume accounting

### `em-vacuum-waves-and-polarization` — Vacuum waves and polarization (7 item(s))

- `def-em-plane-wave-definition` · definition — Real plane-wave fields encoded by complex amplitudes
- `pthm-em-vacuum-wave-equation` · physics-theorem — Source-free vacuum Maxwell fields satisfy the wave equation
- `pthm-em-plane-wave-maxwell` · physics-theorem — Dispersion, transversality and the two polarization conditions for plane-wave solutions
- `def-em-polarization-definition` · definition — Polarization of a transverse plane wave: linear, circular and elliptical traces, and handedness
- `pthm-em-general-wave-ivp` · physics-theorem — Constrained smooth vacuum Maxwell initial-value theory, finite-energy conservation and finite propagation
- `pthm-em-wave-energy-average` · physics-theorem — Period-averaged energy density, Poynting vector and momentum flux of a plane wave
- `pthm-em-classical-interference` · physics-theorem — Superposition intensity and the coherent interference cross term

### `em-vacuum-waves-and-polarization-examples` — Vacuum waves and polarization — Examples (4 item(s))

- `ex-em-polarization-examples` · example — Linear, circular and elliptical amplitude choices
- `ex-em-plane-wave-infinite-energy` · example — A nonzero whole-space plane wave has infinite total energy
- `texp-em-radiation-pressure-example` · thought-experiment — Ideal absorber and ideal reflector momentum transfer (radiation pressure)
- `ex-em-two-beam-fringes` · example — Ideal deterministic two-wave interference and its fringe geometry

### `em-wave-interfaces-and-conductors` — Wave interfaces and conductors (8 item(s))

- `lem-em-exponential-character-open-set-independence` · lemma — Distinct exponential characters are linearly independent on a nonempty open set, and the real-part grouping rule
- `lem-em-admittance-interface-solve` · lemma — The two-equation interface admittance system: solution formulas and the normal-flux identity
- `def-em-medium-wave-parameters` · definition — Homogeneous isotropic medium parameters: phase speed, impedance, refractive index, complex propagation constant and skin depth
- `pthm-em-medium-plane-wave-fields` · physics-theorem — Plane-wave fields in a homogeneous Ohmic medium: amplitude conditions, dispersion, averaged flux and the evanescent branch
- `pthm-em-phase-matching` · physics-theorem — Phase matching at a plane interface: common tangential wavevector and frequency, the reflection law and Snell's law
- `pthm-em-conducting-skin-depth` · physics-theorem — Conducting-medium propagation: the exact attenuation constant, the skin depth and its good- and poor-conductor regimes
- `pthm-em-normal-fresnel` · physics-theorem — Normal-incidence amplitudes and the flux budget, with the Ohmic transmitting medium
- `pthm-em-oblique-fresnel` · physics-theorem — Oblique-incidence TE and TM Fresnel amplitudes, the flux budget, Brewster's angle and total internal reflection

### `em-wave-interfaces-and-conductors-examples` — Wave interfaces and conductors — Examples (3 item(s))

- `ex-em-skin-depth-approximation-example` · example — Numerical check of the good-conductor skin-depth bounds and the $\sigma=0$ exclusion
- `ex-em-brewster-angle-example` · example — The Brewster angle at an equal-permeability interface and the surviving $s$-reflection
- `ex-em-evanescent-flux-example` · example — Total internal reflection: decaying transmitted field, vanishing normal flux and the reflection phase

## Your seams

Your pages depend on another group's:

- `em-energy-momentum-and-angular-balance` requires `em-elementary-mathematical-prerequisites` (group g, batch 13)
- `em-energy-momentum-and-angular-balance` requires `em-primitives-and-postulates` (group a, batch 23)
- `em-vacuum-waves-and-polarization` requires `em-maxwell-integral-and-constraints` (group a, batch 24)
- `em-vacuum-waves-and-polarization` requires `em-wave-equation-prerequisites` (group h, batch 17)
- `em-vacuum-waves-and-polarization` requires `sr-causality-and-signals` (group k, batch 5)
- `em-wave-interfaces-and-conductors` requires `em-material-response` (group c, batch 29)

Another group's pages depend on yours:

- `em-waveguides-and-cavities` (group e) requires your `em-vacuum-waves-and-polarization`
- `em-retarded-fields-and-radiation` (group e) requires your `em-energy-momentum-and-angular-balance`
- `em-lorentz-covariant-formulation` (group e) requires your `em-vacuum-waves-and-polarization`
- `em-empirical-tests-and-scope` (group f) requires your `em-vacuum-waves-and-polarization`

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
