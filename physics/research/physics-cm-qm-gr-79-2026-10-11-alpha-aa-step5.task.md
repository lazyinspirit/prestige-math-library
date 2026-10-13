# Step 5 adjudication — group **aa**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 42: 1 A/B pair(s), 2 page(s), 18 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **42**: `research/physics-cm-qm-gr-79-2026-10-11-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 42 | `qm-math-magnetic-and-detection` | A | non-relativistic-quantum-mechanics-mathematics | 163 | `qm-math-orbital-and-spin`, `qm-math-intervals-and-contacts`, `sobolev-poincare-and-morrey-inequalities`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `product-measures-and-the-fubini-tonelli-theorems`, `unbounded-self-adjoint-operators-and-stones-theorem`, `qm-math-composites` |
| 42 | `qm-math-magnetic-and-detection-examples` | B | non-relativistic-quantum-mechanics-mathematics | 164 | `qm-math-magnetic-and-detection`, `improper-and-parameter-dependent-multiple-integrals` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-math-magnetic-and-detection` — Qm Math Magnetic And Detection (15 item(s))

- `def-nrqm-magnetic-and-detection-position-and-momentum-operators` · definition — Position and momentum operators on Euclidean L2
- `lem-nrqm-magnetic-and-detection-weak-product-rule` · lemma — Weak product rule for a bounded coefficient with bounded weak derivative
- `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint` · lemma — Self-adjointness, Fourier representation and translation identities of position and momentum
- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` · definition — Bounded-coefficient magnetic Schrodinger operator
- `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator` · theorem — Self-adjointness of the bounded-coefficient magnetic Schrodinger operator
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` · theorem — Gauge multiplication preserves H2 and transports the magnetic momentum
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` · theorem — Gauge transported propagator for the bounded-coefficient magnetic operator
- `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation` · theorem — Smooth local continuity equation and its integrated forms
- `thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws` · theorem — Coherent and incoherent two-path bin laws and the marker overlap
- `thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty` · theorem — Covariance-refined preparation uncertainty without operator products
- `thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty` · theorem — Position-momentum uncertainty on the maximal domains of the line
- `thm-nrqm-magnetic-and-detection-galilean-covariance` · theorem — Galilean boost covariance of the Schrodinger model with bounded potential
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws` · theorem — Conserved spectral probability laws for commuting observables and stationary eigenrays
- `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale` · theorem — Graph-domain Ehrenfest identities and the conditional timescale bound
- `thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force` · theorem — Conditional Stern-Gerlach force for a spin-coupled bounded field model

### `qm-math-magnetic-and-detection-examples` — Qm Math Magnetic And Detection — Examples (3 item(s))

- `ex-nrqm-magnetic-and-detection-gauge-phase-units` · example — Gauge phase periodicity, a linear gauge, and the dimension vector of q chi over hbar
- `ex-nrqm-magnetic-and-detection-finite-dark-bin-probability` · example — A dark bin of positive length has positive coherent probability
- `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error` · example — Gaussian preparation spread and an independent additive reading error

## Your seams

Your pages depend on another group's:

- `qm-math-magnetic-and-detection` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-math-magnetic-and-detection` requires `qm-math-intervals-and-contacts` (group y, batch 38)
- `qm-math-magnetic-and-detection` requires `qm-math-composites` (group x, batch 35)

Another group's pages depend on yours:

- `qm-framework-and-quantities` (group q) requires your `qm-math-magnetic-and-detection`
- `qm-framework-and-quantities-examples` (group q) requires your `qm-math-magnetic-and-detection`
- `qm-observables-and-born-probabilities` (group r) requires your `qm-math-magnetic-and-detection`
- `qm-observables-and-born-probabilities-examples` (group r) requires your `qm-math-magnetic-and-detection`
- `qm-autonomous-dynamics` (group r) requires your `qm-math-magnetic-and-detection`
- `qm-autonomous-dynamics-examples` (group r) requires your `qm-math-magnetic-and-detection`
- `qm-massive-particle-kinematics` (group s) requires your `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility` (group s) requires your `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility-examples` (group s) requires your `qm-math-magnetic-and-detection`
- `qm-symmetries-and-conservation` (group t) requires your `qm-math-magnetic-and-detection`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-math-magnetic-and-detection`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
