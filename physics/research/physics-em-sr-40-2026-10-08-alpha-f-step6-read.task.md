# Step 6 Alpha group reader — read-only digest — group **f**, run `physics-em-sr-40-2026-10-08`

- You are the read-only Step 6 Alpha group reader for batches **38**, **39**, **40**: 3 A/B pair(s), 6 page(s), 25 item(s).

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
| 38 | `em-empirical-tests-and-scope` | A | classical-electromagnetism | 355 | `em-experiment-analysis-prerequisites`, `em-material-response`, `em-retarded-fields-and-radiation`, `em-vacuum-waves-and-polarization` |
| 38 | `em-empirical-tests-and-scope-examples` | B | classical-electromagnetism | 356 | `em-empirical-tests-and-scope` |
| 39 | `em-action-and-variational-formulation` | A | classical-electromagnetism | 357 | `em-lorentz-covariant-formulation` |
| 39 | `em-action-and-variational-formulation-examples` | B | classical-electromagnetism | 358 | `em-action-and-variational-formulation` |
| 40 | `em-scattering-and-scalar-diffraction` | A | classical-electromagnetism | 359 | `em-lorentz-covariant-formulation`, `em-material-response`, `em-retarded-fields-and-radiation`, `signed-and-complex-measures-hahn-and-jordan` |
| 40 | `em-scattering-and-scalar-diffraction-examples` | B | classical-electromagnetism | 360 | `em-scattering-and-scalar-diffraction` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `em-empirical-tests-and-scope` — Empirical tests and limitations (6 item(s))

- `def-em-experiment-record-contract` · definition — Report-backed operational evidence with uncertainty
- `exp-em-induction-report` · experiment — Faraday's 1831 induction experiments: reported transients and the iron-ring apparatus
- `exp-em-wave-propagation-report` · experiment — Hertz's 1888 finite-velocity tests: sparks, wire nodes and qualitative interference
- `exp-em-inverse-square-report` · experiment — Cavendish's enclosed-globe inverse-square nulls with a sensitivity control
- `pthm-em-specified-model-comparison` · physics-theorem — Conditional predictions and qualified experimental comparison
- `rem-em-classical-validity-limits` · remark — Classical material, point-source and mechanical regimes and the quantum exclusions

### `em-empirical-tests-and-scope-examples` — Empirical tests and limitations — Examples (2 item(s))

- `ex-em-apparatus-model-ambiguity` · example — A discrepancy can test auxiliaries as well as field assumptions
- `ex-em-ideal-and-measured-fringes` · example — An ideal electric-field zero and a declared detector-bin response

### `em-action-and-variational-formulation` — Alternative action formulation (5 item(s))

- `def-em-field-action-definition` · definition — Smooth finite-region Maxwell action, compact variations and the fixed-endpoint particle functional
- `post-em-stationary-action-model` · postulate — Adopt stationary Maxwell action as alternative physical formulation
- `pthm-em-action-gauge-source-compatibility` · physics-theorem — Compact gauge variation is boundary-free for conserved source
- `pthm-em-action-maxwell-variation` · physics-theorem — Action stationarity implies the inhomogeneous Maxwell equations
- `pthm-em-particle-action-coupling` · physics-theorem — Relativistic prescribed-field particle action yields the Lorentz force

### `em-action-and-variational-formulation-examples` — Alternative action formulation — Examples (2 item(s))

- `ex-em-stationary-not-minimum` · example — Stationary functional need not be a minimum
- `ex-em-compact-variation-example` · example — A compact test variation and gauge-source sign check

### `em-scattering-and-scalar-diffraction` — Vector PEC scattering, dipole limits and controlled scalar diffraction (9 item(s))

- `def-em-monochromatic-source-free-phasors` · definition — Frequency-$\omega$ source-free vacuum phasor pairs and their real-field encoding
- `lem-em-phasor-real-part-calculus-and-equivalence` · lemma — Real parts of $e^{-i\omega t}$ phasors: calculus, injectivity and equivalence with the real Helmholtz-Maxwell system
- `lem-em-harmonic-forcing-periodic-response` · lemma — Periodic responses of $\ddot z=\operatorname{Re}(we^{-i\omega t})$ and the affine classification of all solutions
- `def-em-ideal-harmonic-dipole-model` · definition — The ideal harmonic electric-dipole radiation model
- `post-em-scalar-aperture-model` · postulate — Adopted scalar aperture-diffraction model (polarization-insensitive regime)
- `pthm-em-scalar-aperture-diffraction` · physics-theorem — Controlled scalar aperture diffraction: Fresnel and Fraunhofer approximations with explicit error terms
- `pthm-em-pec-monochromatic-exterior-scattering` · physics-theorem — Monochromatic scattering by a smooth perfect-electric-conductor obstacle
- `pthm-em-dipole-scattering-cross-section` · physics-theorem — Differential and total cross sections of the ideal harmonic dipole in a plane-wave field
- `pthm-em-weak-field-thomson-limit` · physics-theorem — Controlled first variation of the relativistic test-charge law: the leading Thomson-model cross section

### `em-scattering-and-scalar-diffraction-examples` — Vector PEC scattering, dipole limits and controlled scalar diffraction — Examples (1 item(s))

- `ex-em-rectangular-aperture` · example — Uniform rectangular aperture: the Fraunhofer sinc-squared pattern

## Your seams

Your pages depend on another group's:

- `em-empirical-tests-and-scope` requires `em-experiment-analysis-prerequisites` (group i, batch 20)
- `em-empirical-tests-and-scope` requires `em-material-response` (group c, batch 29)
- `em-empirical-tests-and-scope` requires `em-retarded-fields-and-radiation` (group e, batch 36)
- `em-empirical-tests-and-scope` requires `em-vacuum-waves-and-polarization` (group d, batch 33)
- `em-action-and-variational-formulation` requires `em-lorentz-covariant-formulation` (group e, batch 37)
- `em-scattering-and-scalar-diffraction` requires `em-lorentz-covariant-formulation` (group e, batch 37)
- `em-scattering-and-scalar-diffraction` requires `em-material-response` (group c, batch 29)
- `em-scattering-and-scalar-diffraction` requires `em-retarded-fields-and-radiation` (group e, batch 36)

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
