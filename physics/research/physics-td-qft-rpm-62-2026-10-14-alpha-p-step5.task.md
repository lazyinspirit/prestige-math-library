# Step 5 adjudication — group **p**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/physics-td-qft-rpm-62-2026-10-14-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/physics-td-qft-rpm-62-2026-10-14-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/physics-td-qft-rpm-62-2026-10-14-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-td-qft-rpm-62-2026-10-14-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `td-accessibility-foundation` | A | thermodynamics | 271 | `td-math-convex-contact-and-mixing`, `td-thermodynamic-framework` |
| 7 | `td-accessibility-foundation-examples` | B | thermodynamics | 272 | `td-accessibility-foundation`, `the-logarithm-and-general-powers` |
| 8 | `td-representation-and-equilibrium` | A | thermodynamics | 273 | `td-entropy-foundation`, `td-math-nonsmooth-equilibrium` |
| 8 | `td-representation-and-equilibrium-examples` | B | thermodynamics | 274 | `td-representation-and-equilibrium`, `the-logarithm-and-general-powers` |
| 9 | `td-potentials-and-responses` | A | thermodynamics | 275 | `line-integrals-and-the-gradient-theorem`, `mixed-partials-taylor-and-extrema`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral`, `td-representation-and-equilibrium`, `banach-space-differential-calculus-and-banach-manifolds` |
| 9 | `td-potentials-and-responses-examples` | B | thermodynamics | 276 | `td-potentials-and-responses`, `the-logarithm-and-general-powers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `td-accessibility-foundation` — Accessibility Foundation (13 item(s))

- `def-td-adiabatic-accessibility` · definition — Adiabatic accessibility
- `def-td-scaled-products-and-comparison` · definition — Tagged scaled systems and separated products
- `post-td-accessibility-a1-a6` · postulate — Accessibility axioms A1–A6
- `def-td-thermal-join` · definition — Thermal joins and thermal equivalence
- `def-td-cross-type-reaction-network` · definition — Cross-type mixing and reaction network
- `post-td-simple-system-geometric-axioms` · postulate — Simple-system geometric axioms
- `post-td-thermal-join-axioms` · postulate — Thermal-contact axioms T1–T4
- `post-td-universal-thermal-range` · postulate — Universal thermal-equilibrium range T5
- `post-td-equilibrium-join-coherence` · postulate — Equilibrium-join coherence C1
- `pthm-td-contact-product-comparison` · physics-theorem — Conditional contact calibrator and product comparison
- `pthm-td-entropy-under-product-comparison` · physics-theorem — Entropy representation for finite separated products
- `pthm-td-universal-mixing-entropy` · physics-theorem — Conditional weak entropy principle across mixing channels
- `rem-td-entropy-construction-hypotheses` · remark — Scope of the accessibility entropy construction

### `td-accessibility-foundation-examples` — Accessibility Foundation — Examples (2 item(s))

- `ex-td-positive-log-contact-witness` · example — Positive logarithmic contact model as a consistency witness
- `cex-td-degenerate-thermometer-comparison` · counterexample — Degenerate thermometers can fail product comparison

### `td-representation-and-equilibrium` — Representation And Equilibrium (6 item(s))

- `def-td-temperature-pressure-chemical-potential` · definition — Entropic temperature, pressure, and molar chemical potentials
- `post-td-mechanical-conjugate-identification` · postulate — Mechanical pressure-volume work coupling
- `pthm-td-local-energy-representation` · physics-theorem — Local energy representation and thermodynamic conjugates
- `pthm-td-interior-exchange-equilibrium` · physics-theorem — Interior exchange conditions from entropy maximization
- `pthm-td-concave-stability` · physics-theorem — Concave entropy, constrained maxima, and local stability
- `def-td-response-functions` · definition — Thermodynamic response functions on valid local charts

### `td-representation-and-equilibrium-examples` — Representation And Equilibrium — Examples (3 item(s))

- `ex-td-local-response-chart` · example — Response functions in a formal logarithmic entropy chart
- `ex-td-retained-volume-thermal-equilibrium` · example — Stable equilibrium with retained unequal volumes
- `cex-td-tagged-scaling-not-fixed-type-homogeneity` · counterexample — Tagged bulk scaling need not be homogeneity within one fixed tag

### `td-potentials-and-responses` — Potentials And Responses (12 item(s))

- `lem-tdmath-euler-identity-for-degree-one-homogeneous-function` · lemma — Euler identity for a differentiable degree-one homogeneous function
- `lem-tdmath-smooth-partial-legendre-transform-differential` · lemma — Differential of a smooth partial Legendre transform on a local inverse chart
- `def-td-legendre-potentials` · definition — Local thermodynamic Legendre potentials
- `pthm-td-potential-differentials` · physics-theorem — Differentials of the thermodynamic potentials
- `pthm-td-euler-and-gibbs-duhem` · physics-theorem — Euler and Gibbs-Duhem identities under same-tag homogeneity
- `pthm-td-maxwell-relations` · physics-theorem — Maxwell relations on valid thermodynamic potential charts
- `def-td-isentropic-compressibility` · definition — Isentropic compressibility on a valid local chart
- `pthm-td-reservoir-minimum-principles` · physics-theorem — Helmholtz and Gibbs potential minimum principles for ideal reservoirs
- `pthm-td-useful-work-bound` · physics-theorem — Useful-work bound from the Gibbs potential
- `pthm-td-heat-capacity-relation` · physics-theorem — Heat-capacity relation on a stable response chart
- `pthm-td-compressibility-capacity-ratio` · physics-theorem — Ratio of isothermal and isentropic compressibilities
- `pthm-td-joule-thomson-chart` · physics-theorem — Joule-Thomson coefficient on a valid Gibbs chart

### `td-potentials-and-responses-examples` — Potentials And Responses — Examples (2 item(s))

- `ex-td-response-chart-failure` · example — A smooth chart with no isothermal pressure inverse
- `ex-td-nonzero-isothermal-work-loop` · example — Nonzero pressure work around a closed model cycle

## Your seams

Your pages depend on another group's:

- `td-accessibility-foundation` requires `td-math-convex-contact-and-mixing` (group t, batch 6)
- `td-accessibility-foundation` requires `td-thermodynamic-framework` (group o, batch 1)
- `td-representation-and-equilibrium` requires `td-entropy-foundation` (group o, batch 2)
- `td-representation-and-equilibrium` requires `td-math-nonsmooth-equilibrium` (group s, batch 4)

Another group's pages depend on yours:

- `td-cycles-and-low-temperature` (group q) requires your `td-potentials-and-responses`
- `td-phases-and-limits` (group q) requires your `td-potentials-and-responses`
- `td-finite-statistical-bridge` (group q) requires your `td-potentials-and-responses`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-td-qft-rpm-62-2026-10-14-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-td-qft-rpm-62-2026-10-14`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
