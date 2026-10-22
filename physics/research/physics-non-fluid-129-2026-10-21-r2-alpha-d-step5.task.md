# Step 5 adjudication — group **d**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 2, 3, 11: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/physics-non-fluid-129-2026-10-21-r2-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/physics-non-fluid-129-2026-10-21-r2-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/physics-non-fluid-129-2026-10-21-r2-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `emx-lorentz-form-algebra` | A | classical-electromagnetism-mathematics | 701 | `tensor-fields-exterior-algebra-and-differential-forms`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `the-de-rham-theorem-and-degree`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, `regular-surfaces-and-surface-integrals`, `rn-as-a-normed-space`, `compactness-in-metric-spaces`, `integration-of-forms-and-the-general-stokes-theorem`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `sine-cosine-and-the-definition-of-pi`, `fundamental-trigonometric-identities`, `fubini-and-change-of-variables`, `properties-of-the-integral-and-the-working-ftc`, `the-exterior-derivative-and-cartan-calculus`, `the-fundamental-theorems-of-calculus`, `the-total-derivative`, `the-derivative-and-mean-value-theorems`, `improper-and-parameter-dependent-multiple-integrals`, `the-riemann-integral-in-rn-and-jordan-content` |
| 2 | `emx-lorentz-form-algebra-examples` | B | classical-electromagnetism-mathematics | 702 | `emx-lorentz-form-algebra`, `the-exterior-derivative-and-cartan-calculus`, `the-logarithm-and-general-powers`, `the-total-derivative`, `the-derivative-and-mean-value-theorems`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, `regular-surfaces-and-surface-integrals`, `compactness-in-metric-spaces`, `integration-of-forms-and-the-general-stokes-theorem`, `power-series-and-real-analytic-functions` |
| 3 | `emx-premetric-maxwell` | A | classical-electromagnetism | 703 | `em-lorentz-covariant-formulation`, `em-material-response`, `em-primitives-and-postulates`, `emx-lorentz-form-algebra`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, `singular-chains-and-singular-homology`, `categories-functors-and-natural-transformations` |
| 3 | `emx-premetric-maxwell-examples` | B | classical-electromagnetism | 704 | `emx-premetric-maxwell`, `emx-lorentz-form-algebra`, `integration-of-forms-and-the-general-stokes-theorem`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` |
| 11 | `emx-compatible-matrix-evolution` | A | classical-electromagnetism-mathematics | 719 | `discrete-de-rham-complexes-and-edge-elements`, `finite-generator-master-equations-and-uniformization`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `the-riemann-integral-in-rn-and-jordan-content`, `the-derivative-and-mean-value-theorems` |
| 11 | `emx-compatible-matrix-evolution-examples` | B | classical-electromagnetism-mathematics | 720 | `emx-compatible-matrix-evolution` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emx-lorentz-form-algebra` — Lorentzian forms and relative topology (4 item(s))

- `def-emx-lorentz-star` · definition — Lorentzian Hodge star and periods
- `lem-emx-unit-sphere-radial-flux` · lemma — Unit-sphere area form and outward radial flux
- `lem-emx-lorentz-star-square` · lemma — Lorentzian duality sign
- `thm-emx-local-potential-homotopy` · theorem — Local two-form potentials and global obstruction

### `emx-lorentz-form-algebra-examples` — Lorentzian forms and relative topology — Examples (2 item(s))

- `ex-emx-punctured-flux` · example — Closed flux form without global vector potential
- `ex-emx-flat-nonexact-connection` · example — Flat potentials with nonzero circulation

### `emx-premetric-maxwell` — Metric dependence, flux sectors and constitutive geometry (5 item(s))

- `def-emx-continuous-chain-integral` · definition — Continuous differential-form integrals over smooth singular chains in Euclidean domains
- `def-emx-excitation-form` · definition — Excitation and free-current forms
- `lem-emx-c1-stokes-on-standard-3-simplex` · lemma — Stokes identity for a C1 two-form on the standard three-simplex
- `pthm-emx-exterior-maxwell` · physics-theorem — Metric-free Maxwell equations and metric-dependent vacuum closure
- `pthm-emx-duality-vacuum` · physics-theorem — Vacuum duality and its domain

### `emx-premetric-maxwell-examples` — Metric dependence, flux sectors and constitutive geometry — Examples (2 item(s))

- `ex-emx-topological-flux-sector` · example — Excluded interior flux is not a global source law
- `ex-emx-duality-pec-failure` · example — An ideal PEC boundary condition is not preserved by a vacuum duality quarter-turn

### `emx-compatible-matrix-evolution` — Compatible matrix evolution and time stepping (4 item(s))

- `def-emx-matrix-maxwell-system` · definition — Finite compatible matrix system
- `thm-emx-matrix-energy-constraints` · theorem — Energy, existence and algebraic constraints
- `alg-emx-staggered-leapfrog` · algorithm — Staggered compatible leapfrog
- `thm-emx-leapfrog-cfl` · theorem — CFL energy stability and finite termination

### `emx-compatible-matrix-evolution-examples` — Compatible matrix evolution and time stepping — Examples (2 item(s))

- `cex-emx-explicit-euler-growth` · counterexample — Explicit Euler grows a free oscillator
- `cex-emx-cfl-endpoint` · counterexample — CFL endpoint can have linear growth

## Your seams

Another group's pages depend on yours:

- `emx-compatible-finite-elements` (group c) requires your `emx-compatible-matrix-evolution`
- `emx-polarization-bundle` (group e) requires your `emx-lorentz-form-algebra`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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

# Step 5 batch adjudication, `physics-non-fluid-129-2026-10-21-r2`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
