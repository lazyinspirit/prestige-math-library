# Step 5 adjudication — group **z**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 70, 73, 74: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **70**: `research/physics-remaining-80-2026-10-17-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **73**: `research/physics-remaining-80-2026-10-17-batch-73-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **74**: `research/physics-remaining-80-2026-10-17-batch-74-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 70 | `tgr-mg02` | A | thermodynamics-and-general-relativity-mathematics | 637 | `cm-math-dynamics`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `gr-curvature-and-tides`, `riemannian-metrics-length-distance-and-volume`, `uniform-convergence-of-functions`, `darboux-lhopital-and-taylor` |
| 70 | `tgr-mg02-examples` | B | thermodynamics-and-general-relativity-mathematics | 638 | `tgr-mg02`, `td-math-ordered-composition` |
| 73 | `tgr-mhs01` | A | thermodynamics-and-general-relativity-mathematics | 643 | `emg-ms02`, `tgr-mi02`, `em-elementary-mathematical-prerequisites` |
| 73 | `tgr-mhs01-examples` | B | thermodynamics-and-general-relativity-mathematics | 644 | `tgr-mhs01` |
| 74 | `tgr-mhs02` | A | thermodynamics-and-general-relativity-mathematics | 645 | `qft-mf01`, `countability-and-uncountability`, `lebesgue-measure-on-euclidean-space`, `properties-of-the-integral-and-the-working-ftc`, `complex-differentiability-and-cauchy-riemann`, `the-total-derivative`, `the-complex-exponential-and-eulers-formula`, `the-exponential-function`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `orthonormal-bases-parseval-and-fourier-series`, `density-separability-and-convolution-in-lp`, `the-logarithm-and-general-powers`, `inner-product-spaces-and-orthogonality`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`, `sine-cosine-and-the-definition-of-pi`, `complex-power-series-and-analytic-functions`, `simply-connected-plane-domains`, `contour-integration` |
| 74 | `tgr-mhs02-examples` | B | thermodynamics-and-general-relativity-mathematics | 646 | `tgr-mhs02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgr-mg02` — Smooth static spherical geometry and state domain (7 item(s))

- `def-tgr-spherical-static-state-domain` · definition — Smooth static spherical geometry and state domain
- `lem-tgr-even-radial-center-regularity` · lemma — Even radial coefficients give a C² Cartesian center
- `lem-tgr-spherical-einstein-tov-reduction` · lemma — Complete spherical Einstein and conservation reduction
- `def-tgr-spherical-entropy-constraint-functional` · definition — Proper spherical entropy and particle constrained functionals
- `thm-tgr-tov-regular-center-local-existence` · theorem — Regular-center TOV local existence and dependence
- `thm-tgr-constant-density-star-verified` · theorem — Exact regular constant-density solution with verified matching
- `thm-tgr-constrained-entropy-tov-criticality` · theorem — Constrained entropy criticality and TOV equivalence

### `tgr-mg02-examples` — Smooth static spherical geometry and state domain — Examples (4 item(s))

- `ex-tgr-regular-central-pressure-family` · example — Local regular-center central-pressure family
- `ex-tgr-constant-density-positive-branch` · example — Positive regular constant-density branch
- `cex-tgr-constant-density-critical-center` · counterexample — Constant-density limiting center loses regularity
- `cex-tgr-incompressible-causal-transport` · counterexample — Constant-density profile has unequal pressures at equal energy density

### `tgr-mhs01` — Smooth null screen and KN parameter family (5 item(s))

- `def-tgr-horizon-screen-family` · definition — Smooth null screen and subextremal Kerr–Newman parameter family
- `lem-tgr-null-screen-quotient-positive` · lemma — The null screen quotient is a smooth positive two-plane
- `lem-tgr-schwarzschild-horizon-data` · lemma — Exact Schwarzschild horizon data at the zero-rotation KN point
- `thm-tgr-smooth-null-area` · theorem — Null focusing and a restricted smooth future area theorem
- `prop-tgr-kn-first-law-smarr` · proposition — Verified Kerr-Newman family first law and Smarr identity

### `tgr-mhs01-examples` — Smooth null screen and KN parameter family — Examples (2 item(s))

- `ex-tgr-schwarzschild-family-data` · example — Schwarzschild and charged endpoint algebra
- `cex-tgr-ingoing-null-cone-area` · counterexample — Flat focusing cone without future smooth completeness

### `tgr-mhs02` — Positive chiral current and exponential test-coordinate model (3 item(s))

- `lem-tgr-positive-damping-boundary` · lemma — Positive smooth damping preserves the double-pole boundary
- `lem-tgr-exponential-current` · lemma — Positive chiral current and exponential test-coordinate model
- `lem-tgr-thermal-contour-spectrum` · lemma — Single-pole thermal contour and exact detailed balance

### `tgr-mhs02-examples` — Positive chiral current and exponential test-coordinate model — Examples (1 item(s))

- `ex-tgr-chiral-generator-rescaling` · example — Chiral covariance and generator reference rescaling

## Your seams

Your pages depend on another group's:

- `tgr-mhs01` requires `emg-ms02` (group l, batch 22)
- `tgr-mhs01` requires `tgr-mi02` (group v, batch 51)

Another group's pages depend on yours:

- `tgr-g02` (group t) requires your `tgr-mg02`
- `tgr-phs01` (group t) requires your `tgr-mhs01`
- `tgr-mhs03` (group aa) requires your `tgr-mhs02`

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
