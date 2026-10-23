# Step 5 adjudication — group **h**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 2, 5, 6: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/fluid-dynamics-all-47-2026-10-23-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/fluid-dynamics-all-47-2026-10-23-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/fluid-dynamics-all-47-2026-10-23-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/fluid-dynamics-all-47-2026-10-23-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `fd-mf01` | A | fluid-dynamics-mathematics | 363 | `fubini-and-change-of-variables`, `inverse-and-implicit-function-theorems`, `the-total-derivative`, `determinants-of-matrices-over-a-commutative-ring`, `the-riemann-integral-in-rn-and-jordan-content` |
| 2 | `fd-mf01-examples` | B | fluid-dynamics-mathematics | 364 | `fd-mf01` |
| 5 | `fd-x01` | A | fluid-dynamics-mathematics | 369 | `the-divergence-theorem-and-classical-stokes`, `complex-differentiability-and-cauchy-riemann`, `complex-power-series-and-analytic-functions`, `field-extensions-and-the-complex-numbers`, `foundations-of-the-real-numbers`, `fundamental-trigonometric-identities`, `line-integrals-and-the-gradient-theorem`, `linear-independence-bases-and-dimension`, `regular-surfaces-and-surface-integrals`, `rn-as-a-normed-space`, `the-complex-exponential-and-eulers-formula`, `the-derivative-and-mean-value-theorems`, `the-exponential-function`, `the-logarithm-and-general-powers`, `the-total-derivative` |
| 5 | `fd-x01-examples` | B | fluid-dynamics-mathematics | 370 | `fd-x01` |
| 6 | `fd-x02` | A | fluid-dynamics-mathematics | 371 | `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, `fd-x01` |
| 6 | `fd-x02-examples` | B | fluid-dynamics-mathematics | 372 | `fd-x02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-mf01` — Smooth material configurations and Eulerian fields (3 item(s))

- `def-fd-smooth-motion` · definition — Smooth material configurations and Eulerian fields
- `lem-fd-transport-and-density` · lemma — Smooth transport, Jacobian and advected reference density
- `lem-fd-observer-calculus` · lemma — Rigid observer calculus and objective strain rate

### `fd-mf01-examples` — Smooth material configurations and Eulerian fields — Examples (1 item(s))

- `ex-fdmath-dilation-jacobian` · example — Dilation Jacobian and advected scalar density

### `fd-x01` — Formal parameterized fluid systems and observables (8 item(s))

- `def-fd-x00` · definition — Formal parameterized fluid systems and observables
- `def-fd-real-trigonometric-functions` · definition — Real sine and cosine as real restrictions of complex trigonometric functions
- `lem-fd-x02-vector-triple-product` · lemma — The vector triple-product identity in $\mathbb R^3$
- `lem-fd-x03-tanh-error-bounds` · lemma — Quantitative shallow and deep bounds for the hyperbolic tangent
- `thm-fd-x01` · theorem — Exact Reynolds and Mach nondimensionalization
- `lem-fd-real-trigonometric-derivatives` · lemma — Derivative identities for the real restrictions of complex sine and cosine
- `thm-fd-x02` · theorem — Acoustic and inertial finite-mode solutions
- `thm-fd-x03` · theorem — Finite-depth gravity-wave dispersion with quantitative limits

### `fd-x01-examples` — Formal parameterized fluid systems and observables — Examples (3 item(s))

- `ex-fd-x01-formal-verification` · example — Exact Reynolds and Mach parameter substitution
- `ex-fd-x02-application` · example — Acoustic and inertial finite modes — worked interpretation
- `ex-fd-x03-application` · example — Finite-depth gravity-wave dispersion — worked interpretation

### `fd-x02` — Plane and pipe Couette–Poiseuille verification (7 item(s))

- `thm-fd-x04` · theorem — Plane and pipe Couette–Poiseuille verification
- `thm-fd-x05` · theorem — Vortex topology and global-Bernoulli counterexamples
- `thm-fd-x06` · theorem — Exterior sphere Stokes solution, force and decay-class uniqueness
- `thm-fd-x08` · theorem — Exact viscous diffusion layer and material-circulation decay
- `thm-fd-x09` · theorem — Barotropic Kelvin and Bernoulli with exact hypotheses
- `def-fd-incompressible-euler-system` · definition — Formal constant-density incompressible Euler system
- `thm-fd-x13` · theorem — Exterior potential sphere and zero ideal force

### `fd-x02-examples` — Plane and pipe Couette–Poiseuille verification — Examples (6 item(s))

- `ex-fd-x04-formal-verification` · example — Plane and pipe Couette–Poiseuille verification — formal worked fields
- `ex-fd-x05-formal-verification` · example — Vortex topology and global-Bernoulli counterexamples — formal worked fields
- `ex-fd-x06-formal-verification` · example — Exterior sphere Stokes solution, force and uniqueness — formal worked field
- `ex-fd-x08-formal-verification` · example — Exact viscous diffusion layer and material-circulation decay — formal worked fields
- `ex-fd-x09-formal-verification` · example — Barotropic Kelvin and Bernoulli with exact hypotheses — formal worked solution
- `ex-fd-x13-formal-verification` · example — Exterior potential sphere and zero ideal force — formal worked field

## Your seams

Another group's pages depend on yours:

- `fd-f01` (group a) requires your `fd-mf01`
- `fd-px01` (group b) requires your `fd-x01`
- `fd-px02` (group b) requires your `fd-x02`
- `fd-x03` (group i) requires your `fd-x01`
- `fd-mf02` (group i) requires your `fd-mf01`
- `fd-mf04` (group j) requires your `fd-mf01`
- `fd-g01` (group o) requires your `fd-x01`
- `fd-mp01` (group o) requires your `fd-x01`
- `fd-bl01` (group p) requires your `fd-x01`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/fluid-dynamics-all-47-2026-10-23-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `fluid-dynamics-all-47-2026-10-23`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
