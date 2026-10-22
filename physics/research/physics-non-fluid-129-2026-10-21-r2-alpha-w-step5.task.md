# Step 5 adjudication — group **w**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 52, 54, 55: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/physics-non-fluid-129-2026-10-21-r2-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/physics-non-fluid-129-2026-10-21-r2-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/physics-non-fluid-129-2026-10-21-r2-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 52 | `nrqmx-finite-mode-gaussian` | A | non-relativistic-quantum-mechanics-mathematics | 801 | `nrqmx-weyl-galilei-representations`, `qm-math-oscillator`, `qm-math-fock-and-equilibrium`, `regular-weyl-representations-and-stone-von-neumann`, `bounded-variation-and-riemann-stieltjes`, `td-math-ensembles-and-limits` |
| 52 | `nrqmx-finite-mode-gaussian-examples` | B | non-relativistic-quantum-mechanics-mathematics | 802 | `nrqmx-finite-mode-gaussian` |
| 54 | `nrqmx-bloch-band-geometry` | A | non-relativistic-quantum-mechanics-mathematics | 805 | `nrqmx-adiabatic-holonomy`, `nrqmx-form-spectral-methods`, `orthonormal-bases-parseval-and-fourier-series`, `orientations-poincare-lefschetz-and-alexander-duality`, `the-de-rham-theorem-and-degree`, `singular-cohomology-and-coefficient-theorems`, `compact-kahler-hodge-foundations`, `singular-chains-and-singular-homology`, `chern-and-pontryagin-classes-by-splitting-and-complexification` |
| 54 | `nrqmx-bloch-band-geometry-examples` | B | non-relativistic-quantum-mechanics-mathematics | 806 | `nrqmx-bloch-band-geometry`, `the-de-rham-theorem-and-degree` |
| 55 | `nrqmx-floquet-control` | A | non-relativistic-quantum-mechanics-mathematics | 807 | `qm-math-controlled-dynamics`, `nrqmx-form-spectral-methods`, `unbounded-self-adjoint-operators-and-stones-theorem` |
| 55 | `nrqmx-floquet-control-examples` | B | non-relativistic-quantum-mechanics-mathematics | 808 | `nrqmx-floquet-control` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nrqmx-finite-mode-gaussian` — Finite-mode Fock, Gaussian and Bogoliubov foundations (10 item(s))

- `lem-nrqmx-finite-mode-fock-schr-identification` · lemma — Finite-mode Fock to Schrödinger identification
- `lem-nrqmx-finite-symplectic-generator-factorization` · lemma — Finite symplectic generator factorization
- `def-nrqmx-finite-mode-symplectic-data` · definition — Finite-mode quadratures and symplectic data
- `lem-nrqmx-finite-symplectic-implementers` · lemma — Individual finite symplectic implementers
- `lem-nrqmx-finite-maslov-phase-parity` · lemma — Maslov phase parity in a finite generating chart
- `thm-nrqmx-finite-metaplectic-construction` · theorem — Finite symplectic implementation by quadratic generators
- `thm-nrqmx-finite-mode-bogoliubov` · theorem — Finite Bogoliubov implementability
- `lem-nrqmx-williamson-normal-form` · lemma — Positive definite Williamson normal form
- `lem-nrqmx-schwartz-joint-quadrature-graph-core` · lemma — Schwartz density in the joint quadrature graph norm
- `thm-nrqmx-gaussian-covariance-uncertainty` · theorem — Gaussian covariance and uncertainty

### `nrqmx-finite-mode-gaussian-examples` — Finite-mode Fock, Gaussian and Bogoliubov foundations — Examples (2 item(s))

- `ex-nrqmx-single-mode-squeezing` · example — Single-mode squeeze statistics
- `cex-nrqmx-infinite-mode-vacuum-warning` · counterexample — Finite-mode implementability does not supply an infinite-mode limit

### `nrqmx-bloch-band-geometry` — Single-particle Bloch bundles and band topology (9 item(s))

- `def-nrqmx-bloch-fiber-model` · definition — Lattice Bloch transform and band projectors
- `lem-nrqmx-bloch-fiber-model-properties` · lemma — Exact Bloch transform and regularity of gapped band projectors
- `def-nrqmx-determinant-line-projector` · definition — Determinant line and its projector
- `lem-nrqmx-determinant-line-projector-well-defined` · lemma — The determinant-line projector is smooth and rank one
- `lem-nrqmx-determinant-curvature-is-trace` · lemma — Determinant-line curvature is the trace curvature
- `lem-nrqmx-degree-area-formula` · lemma — Normalized area integral equals the degree
- `thm-nrqmx-bloch-projector-chern` · theorem — Gapped band curvature and Chern invariance
- `thm-nrqmx-two-band-degree-formula` · theorem — Two-band Chern number and degree formula
- `thm-nrqmx-finite-band-adiabatic-velocity` · theorem — Conditional band velocity and anomalous term

### `nrqmx-bloch-band-geometry-examples` — Single-particle Bloch bundles and band topology — Examples (2 item(s))

- `ex-nrqmx-two-band-gap-closures` · example — Gap closings and Chern regions in the two-band lattice model
- `cex-nrqmx-smooth-frame-obstruction` · counterexample — A nonzero-Chern band has no global smooth periodic frame

### `nrqmx-floquet-control` — Periodic finite dynamics, quasienergy and controlled truncation (7 item(s))

- `def-nrqmx-finite-hermitian-matrix-exponential` · definition — Finite-dimensional matrix exponential
- `lem-nrqmx-finite-hermitian-matrix-exponential` · lemma — Unitarity and differentiation of the finite Hermitian matrix exponential
- `thm-nrqmx-finite-floquet-normal-form` · theorem — Finite Floquet unitary normal form
- `thm-nrqmx-finite-level-duhamel-error` · theorem — Finite-level truncation with bounded coupling error
- `thm-nrqmx-floquet-sambe-domain` · theorem — Finite-level Sambe operator with Fourier domain
- `alg-nrqmx-floquet-fourier-galerkin` · algorithm — Floquet Fourier–Galerkin assembly
- `thm-nrqmx-floquet-galerkin-correctness` · theorem — Fourier–Galerkin assembly correctness and termination

### `nrqmx-floquet-control-examples` — Periodic finite dynamics, quasienergy and controlled truncation — Examples (2 item(s))

- `ex-nrqmx-driven-two-level-floquet` · example — Commuting longitudinal drive
- `cex-nrqmx-quasienergy-no-order` · counterexample — Quasienergy has no canonical ground value

## Your seams

Your pages depend on another group's:

- `nrqmx-finite-mode-gaussian` requires `nrqmx-weyl-galilei-representations` (group v, batch 49)
- `nrqmx-bloch-band-geometry` requires `nrqmx-adiabatic-holonomy` (group u, batch 47)
- `nrqmx-bloch-band-geometry` requires `nrqmx-form-spectral-methods` (group s, batch 44)
- `nrqmx-floquet-control` requires `nrqmx-form-spectral-methods` (group s, batch 44)

Another group's pages depend on yours:

- `nrqmx-quantum-optics-models` (group t) requires your `nrqmx-finite-mode-gaussian`
- `nrqmx-certified-spectral-computation` (group x) requires your `nrqmx-floquet-control`
- `qsmx-hall-categorification-spin` (group aj) requires your `nrqmx-floquet-control`
- `qsmx-quasifree-gases` (group ak) requires your `nrqmx-finite-mode-gaussian`

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
