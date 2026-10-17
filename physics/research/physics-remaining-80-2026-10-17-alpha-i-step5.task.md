# Step 5 adjudication — group **i**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 4, 6, 7: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/physics-remaining-80-2026-10-17-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/physics-remaining-80-2026-10-17-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **7**: `research/physics-remaining-80-2026-10-17-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `emg-mg04` | A | einstein-maxwell-models-mathematics | 443 | `emg-mg03`, `emg-mg01`, `emg-mg02`, `gr-einstein-and-matter`, `the-exterior-derivative-and-cartan-calculus`, `vector-fields-flows-and-lie-derivatives`, `smooth-partitions-of-unity-and-exhaustions`, `countability-and-uncountability`, `integration-of-forms-and-the-general-stokes-theorem`, `gr-curvature-and-tides`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `the-de-rham-theorem-and-degree`, `gr-connections-and-free-fall` |
| 4 | `emg-mg04-examples` | B | einstein-maxwell-models-mathematics | 444 | `emg-mg04` |
| 6 | `emg-cp01` | A | einstein-maxwell-models-mathematics | 447 | `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `emg-mg01`, `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`, `gr-causal-and-initial-value-boundaries`, `limsup-and-subsequential-limits`, `gr-einstein-and-matter`, `countability-and-uncountability`, `riemannian-metrics-length-distance-and-volume`, `integration-of-forms-and-the-general-stokes-theorem` |
| 6 | `emg-cp01-examples` | B | einstein-maxwell-models-mathematics | 448 | `emg-cp01` |
| 7 | `emg-cp02` | A | einstein-maxwell-models-mathematics | 449 | `emg-cp01`, `inverse-and-implicit-function-theorems`, `gr-gr13-convex-normal-neighborhoods`, `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` |
| 7 | `emg-cp02-examples` | B | einstein-maxwell-models-mathematics | 450 | `emg-cp02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-mg04` — Gauge/diffeomorphism matter identity and field exchange (5 item(s))

- `lem-emg-matter-noether-exchange` · lemma — Gauge/diffeomorphism matter identity and field exchange
- `lem-emg-einstein-action-variation` · lemma — Compact Einstein–Hilbert variation and SI coupling
- `def-emg-charged-scalar-functional` · definition — Classical complex-scalar connection derivative and action
- `lem-emg-charged-scalar-variation` · lemma — Classical charged-scalar action, current and stress variation
- `lem-emg-maxwell-stress-divergence` · lemma — Curved electromagnetic stress divergence

### `emg-mg04-examples` — Gauge/diffeomorphism matter identity and field exchange — Examples (2 item(s))

- `ex-emgmath-scalar-plane-wave` · example — Exact background scalar plane wave and derived current
- `ex-emgmath-eh-boundary-derivative` · example — Zero boundary metric value does not kill EH derivative flux

### `emg-cp01` — Electrovacuum tensor Cauchy system (10 item(s))

- `def-emg-electrovacuum-cauchy-system` · definition — Electrovacuum tensor Cauchy system
- `def-emg-causal-solution-and-horizon-vocabulary` · definition — Causal solutions, Killing horizons, escape and metric extensions
- `def-emg-periodic-high-sobolev-state` · definition — Periodic high-Sobolev state spaces
- `thm-emg-symmetric-hyperbolic-research-supplier` · theorem — Exact periodic positive symmetric-hyperbolic supplier
- `lem-emg-maxwell-stress-conservation` · lemma — Maxwell stress algebra and covariant conservation
- `prop-emg-potential-ricci-wave-identity` · proposition — Lorenz potential wave contains Ricci coupling
- `lem-emg-local-potential-gauge` · lemma — Local potential homotopy and Lorenz gauge reachability
- `def-emg-constrained-electrovacuum-data` · definition — Constrained electrovacuum initial data
- `thm-emg-gauss-codazzi-maxwell-constraints` · theorem — Gauss-Codazzi and Maxwell initial constraints
- `lem-emg-fixed-smooth-background-harmonic-data` · lemma — Harmonic initial data relative to a fixed smooth background

### `emg-cp01-examples` — Electrovacuum tensor Cauchy system — Examples (3 item(s))

- `ex-emg-flat-zero-field-data` · example — Flat zero-field data and Minkowski development
- `cex-emg-test-field-not-coupled-flat-solution` · counterexample — Nonzero flat test field is not a coupled flat solution
- `ex-emg-nontrivial-magnetic-period` · example — Magnetic period obstructs a global potential

### `emg-cp02` — Positive symmetric Maxwell field-strength reduction (10 item(s))

- `lem-emg-classical-maxwell-stress-identity` · lemma — Maxwell stress divergence for classical fields
- `lem-emg-fieldstrength-positive-symmetric-reduction` · lemma — Positive symmetric Maxwell field-strength reduction
- `thm-emg-maxwell-gauss-propagation` · theorem — Maxwell Gauss constraints propagate by form transport
- `lem-emg-coupled-reduced-einstein-evolution` · lemma — Coupled reduced Einstein–Maxwell local evolution
- `thm-emg-einstein-gauge-propagation` · theorem — Einstein harmonic gauge propagation with Maxwell on shell
- `thm-emg-local-high-sobolev-electrovacuum` · theorem — Local high-Sobolev and smooth electrovacuum
- `prop-emg-local-sobolev-stability-continuation` · proposition — Local Sobolev stability and continuation for the reduced electrovacuum system
- `thm-emg-smooth-local-geometric-uniqueness` · theorem — Smooth local geometric existence and uniqueness for source-free Einstein–Maxwell data
- `lem-emg-smooth-geometric-causal-research-suppliers` · lemma — Causal and Cauchy-surface inputs for smooth electrovacuum developments
- `thm-emg-sourcefree-smooth-maximal-development` · theorem — Source-free smooth maximal globally hyperbolic Einstein–Maxwell development

### `emg-cp02-examples` — Positive symmetric Maxwell field-strength reduction — Examples (2 item(s))

- `ex-emg-nonzero-parallel-field-data` · example — Nonzero parallel Maxwell fields satisfy torus constraints with isotropic initial curvature
- `rem-emg-maximal-is-not-complete` · remark — Maximality of the Einstein–Maxwell GHD does not assert geodesic completeness

## Your seams

Your pages depend on another group's:

- `emg-mg04` requires `emg-mg03` (group h, batch 3)
- `emg-mg04` requires `emg-mg02` (group h, batch 2)

Another group's pages depend on yours:

- `emg-g04` (group d) requires your `emg-mg04`
- `emg-pcp01` (group e) requires your `emg-cp02`
- `emg-cp03` (group j) requires your `emg-cp02`
- `emg-cp04` (group j) requires your `emg-cp02`
- `emg-cp04` (group j) requires your `emg-mg04`
- `emg-mm01` (group j) requires your `emg-mg04`
- `emg-ms01` (group k) requires your `emg-cp01`
- `emg-ms02` (group l) requires your `emg-cp01`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-remaining-80-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
