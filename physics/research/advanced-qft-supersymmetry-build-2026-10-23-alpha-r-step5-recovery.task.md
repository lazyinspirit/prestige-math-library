# Step 5 adjudication — group **r**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 18 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/advanced-qft-supersymmetry-build-2026-10-23-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 16 | `qftx-eft-operator-quotients` | A | quantum-field-theory-mathematics | 972 | `aqft-susy-math-foundations`, `reductive-affine-invariant-theory-and-geometric-quotients`, `relations-functions-and-quotients` |
| 16 | `qftx-eft-operator-quotients-examples` | B | quantum-field-theory-mathematics | 972 | `qftx-eft-operator-quotients`, `relations-functions-and-quotients` |
| 17 | `qftx-eft-rg-data` | A | quantum-field-theory-mathematics | 973 | `qftx-eft-operator-quotients`, `qftx-scale-cocycles`, `picard-lindelof-and-first-order-odes` |
| 17 | `qftx-eft-rg-data-examples` | B | quantum-field-theory-mathematics | 973 | `qftx-eft-rg-data` |
| 18 | `qftx-eft-dispersion-and-bootstrap` | A | quantum-field-theory-mathematics | 974 | `qftx-eft-operator-quotients`, `qftx-on-shell-amplitudes`, `goursat-and-cauchys-theorem-in-a-convex-domain`, `line-integrals-and-the-gradient-theorem`, `improper-integrals`, `properties-of-the-integral-and-the-working-ftc` |
| 18 | `qftx-eft-dispersion-and-bootstrap-examples` | B | quantum-field-theory-mathematics | 974 | `qftx-eft-dispersion-and-bootstrap` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-eft-operator-quotients` — Finite-Order EFT Operator Spaces and Redundancies (7 item(s))

- `def-aqft-local-operator-and-dimension` · definition — Finite-jet local operators and engineering dimension
- `lem-aqft-invariant-quotient-exactness` · lemma — Exactness of invariant vectors for a finite-dimensional quotient
- `lem-aqft-finite-order-local-operator-space-finite-dimensional` · lemma — Finite dimensionality of fixed-order local operator spaces
- `def-aqft-lsz-amplitude-data` · definition — Regulated perturbative LSZ amplitude data
- `def-aqft-operator-basis-quotient` · definition — Finite-order invariant operator-basis quotient
- `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy` · proposition — Fixed-order integration-by-parts and leading-equation field-redefinition relations
- `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order` · theorem — Fixed-order on-shell amplitude equivalence under local field redefinition

### `qftx-eft-operator-quotients-examples` — Finite-Order EFT Operator Spaces and Redundancies — Examples (1 item(s))

- `ex-aqft-operator-basis-reduction` · example — A dimension-six scalar operator reduced by integration by parts and the leading equation

### `qftx-eft-rg-data` — Wilson Coefficients and Finite-Dimensional RG Systems (2 item(s))

- `def-aqft-scheme-and-wilson-coefficients` · definition — Finite renormalization schemes and Wilson coefficient vectors
- `thm-aqft-truncated-coupled-rge-wellposedness` · theorem — Local well-posedness of a supplied truncated coupled RG system

### `qftx-eft-rg-data-examples` — Wilson Coefficients and Finite-Dimensional RG Systems — Examples (1 item(s))

- `ex-aqft-coupled-rge-linear-mixing` · example — A two-component truncated RG flow with linear mixing

### `qftx-eft-dispersion-and-bootstrap` — Gapped-Scalar Dispersion Positivity and Finite Bootstrap (6 item(s))

- `def-aqft-scattering-amplitude-input` · definition — Gapped identical-scalar forward-amplitude data
- `lem-aqft-crossing-even-forward-amplitude` · lemma — Crossing evenness at the scalar subtraction point
- `thm-aqft-gapped-scalar-forward-positivity` · theorem — Forward positivity for a gapped identical scalar
- `def-aqft-truncated-amplitude-bootstrap-problem` · definition — Finite truncated forward-amplitude bootstrap data
- `prop-aqft-finite-truncated-bootstrap-constraints` · proposition — Finite truncated forward-positivity constraints
- `prop-aqft-quartic-contact-jet-matching` · proposition — Quartic scalar contact jets descend through verified operator relations

### `qftx-eft-dispersion-and-bootstrap-examples` — Gapped-Scalar Dispersion Positivity and Finite Bootstrap — Examples (1 item(s))

- `ex-aqft-scalar-positivity-bound` · example — Allowed and excluded order-two forward coefficients

## Your seams

Your pages depend on another group's:

- `qftx-eft-operator-quotients` requires `aqft-susy-math-foundations` (group m, batch 1)

Another group's pages depend on yours:

- `aqft-eft-operators` (group b) requires your `qftx-eft-operator-quotients`
- `aqft-eft-operators-examples` (group b) requires your `qftx-eft-operator-quotients`
- `aqft-eft-matching-running` (group c) requires your `qftx-eft-rg-data`
- `aqft-eft-matching-running-examples` (group c) requires your `qftx-eft-rg-data`
- `aqft-smeft-heft` (group c) requires your `qftx-eft-operator-quotients`
- `aqft-eft-amplitudes` (group c) requires your `qftx-eft-dispersion-and-bootstrap`
- `aqft-eft-amplitudes` (group c) requires your `qftx-eft-operator-quotients`
- `aqft-susy-effective-theories` (group i) requires your `qftx-eft-operator-quotients`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/advanced-qft-supersymmetry-build-2026-10-23-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `advanced-qft-supersymmetry-build-2026-10-23`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
