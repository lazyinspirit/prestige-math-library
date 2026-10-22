# Step 5 adjudication — group **ag**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 84, 99, 100: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **84**: `research/physics-non-fluid-129-2026-10-21-r2-batch-84-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **99**: `research/physics-non-fluid-129-2026-10-21-r2-batch-99-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **100**: `research/physics-non-fluid-129-2026-10-21-r2-batch-100-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 84 | `qftx-massive-scattering-estimates` | A | quantum-field-theory-mathematics | 865 | `qftx-spectral-tube-analyticity`, `qft-mf02` |
| 84 | `qftx-massive-scattering-estimates-examples` | B | quantum-field-theory-mathematics | 866 | `qftx-massive-scattering-estimates` |
| 99 | `qsmx-operator-algebra-prerequisites` | A | quantum-statistical-mechanics | 895 | `qsm-quasilocal-states`, `unbounded-self-adjoint-operators-and-stones-theorem`, `measurable-hilbert-fields-and-direct-integral-operators`, `relations-functions-and-quotients`, `direct-integral-decomposition-and-type-i-groups`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `banach-alaoglu-goldstine-and-krein-milman`, `weak-and-weak-star-topologies`, `peter-weyl-theory-for-general-compact-groups`, `dual-spaces-adjoint-operators-and-annihilators`, `filters-and-ultrafilters` |
| 99 | `qsmx-operator-algebra-prerequisites-examples` | B | quantum-statistical-mechanics | 896 | `qsmx-operator-algebra-prerequisites`, `square-integrable-kernels-and-hilbert-schmidt-compactness` |
| 100 | `qsmx-modular-equilibrium` | A | quantum-statistical-mechanics | 897 | `qsmx-operator-algebra-prerequisites`, `qsm-kms-equilibrium`, `banach-alaoglu-goldstine-and-krein-milman`, `the-analytic-hahn-banach-theorem`, `fourier-transform-convolution-and-approximate-identities`, `the-residue-theorem`, `relations-functions-and-quotients`, `qsm-states-ensembles`, `filters-and-ultrafilters` |
| 100 | `qsmx-modular-equilibrium-examples` | B | quantum-statistical-mechanics | 898 | `qsmx-modular-equilibrium` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-massive-scattering-estimates` — Cook limits, massive wavepackets and scattering obligations (3 item(s))

- `def-qftx-scattering-approximant-contract` · definition — Massive scattering packets and Cook approximant contract
- `thm-qftx-cook-scattering-limit` · theorem — Integrable derivatives yield scattering vectors
- `prop-qftx-scattering-isometry-not-completeness` · proposition — Scattering isometries do not establish asymptotic completeness

### `qftx-massive-scattering-estimates-examples` — Cook limits, massive wavepackets and scattering obligations — Examples (1 item(s))

- `cex-qftx-isometries-different-ranges` · counterexample — Abstract isometries can give a nonunitary comparison

### `qsmx-operator-algebra-prerequisites` — Von Neumann closure, standard vectors and modular analytic tools (8 item(s))

- `def-qsmx-von-neumann-algebra` · definition — Concrete von Neumann algebra and faithful vector
- `def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint` · definition — Conjugate Hilbert space and adjoint of an antilinear operator
- `lem-qsmx-trace-class-duality` · lemma — Trace-class duality and finite-rank density
- `lem-qsmx-linear-closed-polar-decomposition` · lemma — Polar decomposition of a closed densely defined operator
- `lem-qsmx-bicommutant-and-commutant-cyclicity` · lemma — Strong closure and cyclic-separating duality
- `lem-qsmx-monotone-bounded-positive-net` · lemma — Bounded increasing positive nets have strong suprema
- `lem-qsmx-closed-antilinear-polar-calculus` · lemma — Closed antilinear polar calculus and Tomita-operator closability
- `lem-qsmx-von-neumann-predual` · lemma — Trace-class quotient predual and normal functionals

### `qsmx-operator-algebra-prerequisites-examples` — Von Neumann closure, standard vectors and modular analytic tools — Examples (1 item(s))

- `ex-qsmx-nonfaithful-gns-vector` · example — Defining and Hilbert–Schmidt representations of M_n

### `qsmx-modular-equilibrium` — Modular automorphisms and physical-time KMS conversion (8 item(s))

- `lem-qsmx-modular-strip-analyticity` · lemma — Spectral analyticity on the modular strip
- `lem-qsmx-modular-unitary-strong-continuity` · lemma — Strong continuity of positive modular unitary powers
- `def-qsmx-von-neumann-kms-state` · definition — Upper-strip KMS condition for von Neumann algebras
- `lem-qsmx-tomita-operator-involution` · lemma — Involution and polar identities for the Tomita operator
- `def-qsmx-standard-modular-data` · definition — Tomita graph and standard modular data
- `thm-qsmx-finite-modular-density` · theorem — Faithful matrix modular flow and Gibbs time
- `lem-qsmx-modular-resolvent-core` · lemma — Modular resolvent invariance and commutant equality
- `thm-qsmx-tomita-takesaki` · theorem — Tomita modular automorphisms and the upper-strip KMS condition

### `qsmx-modular-equilibrium-examples` — Modular automorphisms and physical-time KMS conversion — Examples (1 item(s))

- `ex-qsmx-modular-is-not-physical-time` · example — Modular frequency requires a physical time identification

## Your seams

Your pages depend on another group's:

- `qftx-massive-scattering-estimates` requires `qftx-spectral-tube-analyticity` (group af, batch 83)

Another group's pages depend on yours:

- `qsmx-lieb-robinson-spectral-flow` (group ah) requires your `qsmx-operator-algebra-prerequisites`
- `tgrx-gaussian-wedge` (group am) requires your `qsmx-modular-equilibrium`

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

# Historical Step-5 closure recovery, `physics-non-fluid-129-2026-10-21-r2`

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
