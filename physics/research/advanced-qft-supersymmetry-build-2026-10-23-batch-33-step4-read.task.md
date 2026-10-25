# Step 4 batch reviewer — batch **33**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the only reviewer for batch **33**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `qftx-susy-moduli-and-dualities` | A | qftx-susy-algebra-and-multiplets, qftx-susy-extended-actions, qftx-susy-ward-and-nonrenormalization, qftx-instanton-topology-mathematics, qftx-abelian-higgs-vortex-existence-mathematics, qftx-susy-n1-superspace-and-actions, aqft-susy-math-foundations, qftx-nonabelian-yang-mills-model, countability-and-uncountability, relations-functions-and-quotients, the-lp-spaces-holder-minkowski-and-riesz-fischer, product-measures-and-the-fubini-tonelli-theorems, the-lebesgue-integral-and-the-convergence-theorems, integration-of-forms-and-the-general-stokes-theorem |
| 33 | `qftx-susy-moduli-and-dualities-examples` | B | qftx-susy-moduli-and-dualities |

## Your content, in full

### `qftx-susy-moduli-and-dualities` — Supersymmetric Moduli, Seiberg–Witten Data and Duality Questions

- `post-qftx-n2-pure-su2-ultraviolet-model` · postulate — Independent pure N=2 SU(2) ultraviolet vector-multiplet datum
- `def-qftx-susy-vacuum-moduli-data` · definition — Classical and quantum supersymmetric vacuum-moduli data
- `def-qftx-n2-coulomb-branch-data` · definition — Pure N=2 SU(2) Coulomb-branch and period data
- `def-qftx-n2-monopole-local-dual-higgs-model` · definition — Local dual U(1) monopole-Higgs effective data
- `def-qftx-n2-dual-higgs-flux-tube-sector` · definition — Finite-energy dual-Higgs flux-tube sector
- `post-qftx-n2-seiberg-witten-effective-solution` · postulate — Source-proposed pure SU(2) N=2 Seiberg–Witten low-energy data
- `pthm-qftx-n2-bps-central-charge-mass` · physics-theorem — N=2 SU(2) central-charge mass bound from Seiberg–Witten periods
- `pthm-qftx-n2-dual-higgs-vortex-flux-and-tension` · physics-theorem — Flux quantization and positive tension for an admitted dual vortex
- `pthm-qftx-n2-monopole-condensation-after-n1-perturbation` · physics-theorem — Conditional monopole Higgs vacuum after a small N=1 perturbation
- `pthm-qftx-n2-linear-monopole-bps-vortex-bound` · physics-theorem — Critical monopole truncation: BPS bound, minimizing tubes and nonlinear obstruction
- `def-qftx-n2-nonlinear-magnetostatic-flux-cylinder` · definition — Nonlinear local dual-Higgs magnetostatic flux cylinders
- `pthm-qftx-n2-nonlinear-local-electric-flux-confinement` · physics-theorem — Nonlinear local electric-flux confinement from planar energy infima

### `qftx-susy-moduli-and-dualities-examples` — Supersymmetric Moduli, Seiberg–Witten Data and Duality Questions — Examples

- `ex-qftx-susy-u1-pair-classical-vacuum-moduli` · example — One-flavor U(1) classical F/D-flat vacuum quotient
- `ex-qftx-n1-sqcd-su-nf-cubic-anomaly-check` · example — SU(Nf) cubic-anomaly check for proposed SQCD dual data
- `ex-qftx-n2-monopole-perturbed-vacuum` · example — Symbolic monopole vacuum in the local dual U(1) model

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qftx-susy-moduli-and-dualities` requires `qftx-susy-algebra-and-multiplets`
- `qftx-susy-moduli-and-dualities` requires `qftx-susy-extended-actions`
- `qftx-susy-moduli-and-dualities` requires `qftx-susy-ward-and-nonrenormalization`
- `qftx-susy-moduli-and-dualities` requires `qftx-instanton-topology-mathematics`
- `qftx-susy-moduli-and-dualities` requires `qftx-abelian-higgs-vortex-existence-mathematics`
- `qftx-susy-moduli-and-dualities` requires `qftx-susy-n1-superspace-and-actions`
- `qftx-susy-moduli-and-dualities` requires `aqft-susy-math-foundations`
- `qftx-susy-moduli-and-dualities` requires `qftx-nonabelian-yang-mills-model`
- `qftx-susy-breaking-and-phenomenology` requires `qftx-susy-moduli-and-dualities`
- `qftx-susy-scft-and-frontier` requires `qftx-susy-moduli-and-dualities`
- `qftx-s4-partition-functions` requires `qftx-susy-moduli-and-dualities`
- `qftx-physical-hall-bps-wall-crossing` requires `qftx-susy-moduli-and-dualities`
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

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 4 Alpha batch reviewer — read-only digest, `advanced-qft-supersymmetry-build-2026-10-23`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
