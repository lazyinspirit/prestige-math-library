# Step 5 adjudication — group **s**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 42, 43, 44: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **42**: `research/physics-non-fluid-129-2026-10-21-r2-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **43**: `research/physics-non-fluid-129-2026-10-21-r2-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/physics-non-fluid-129-2026-10-21-r2-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 42 | `gr-fx14-holonomy-and-discrete-geometric-interface` | A | general-relativity | 781 | `gr-fx13-tetrads-and-lorentz-spin`, `complete-reducibility-for-compact-groups`, `gauge-groups-and-representation-theory-interfaces`, `relations-functions-and-quotients`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `the-fundamental-group`, `the-fundamental-group-of-the-circle`, `the-seifert-van-kampen-theorem`, `the-zfc-axioms-and-basic-set-constructions`, `categories-functors-and-natural-transformations`, `free-groups-and-presentations`, `hilbert-space-geometry-and-riesz-representation`, `unitary-representations-positive-type-and-gns`, `haar-measure-existence-and-uniqueness`, `bounded-linear-operators-and-quotient-spaces`, `characters-and-the-orthogonality-relations`, `uniform-spaces` |
| 42 | `gr-fx14-holonomy-and-discrete-geometric-interface-examples` | B | general-relativity | 782 | `gr-fx14-holonomy-and-discrete-geometric-interface` |
| 43 | `nrqmx-operator-realizations` | A | non-relativistic-quantum-mechanics-mathematics | 783 | `unbounded-self-adjoint-operators-and-stones-theorem`, `qm-math-intervals-and-contacts`, `relations-functions-and-quotients`, `bounded-variation-and-riemann-stieltjes` |
| 43 | `nrqmx-operator-realizations-examples` | B | non-relativistic-quantum-mechanics-mathematics | 784 | `nrqmx-operator-realizations` |
| 44 | `nrqmx-form-spectral-methods` | A | non-relativistic-quantum-mechanics-mathematics | 785 | `nrqmx-operator-realizations`, `qm-math-coulomb`, `spectral-measures-and-borel-functional-calculus`, `analytic-semigroups-and-linear-evolution-equations`, `unbounded-self-adjoint-operators-and-stones-theorem`, `tempered-distributions-and-the-fourier-transform` |
| 44 | `nrqmx-form-spectral-methods-examples` | B | non-relativistic-quantum-mechanics-mathematics | 786 | `nrqmx-form-spectral-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-fx14-holonomy-and-discrete-geometric-interface` — Holonomy and discrete geometric interfaces (14 item(s))

- `thm-qftx-cw-fundamental-group-presentation` · theorem — A finite connected CW complex has the edge-and-2-cell presentation
- `def-gr-fx-thin-paths` · definition — Piecewise-smooth paths and thin homotopies
- `prop-gr-fx-thin-path-quotient-groupoid` · proposition — Thin path classes form a groupoid
- `def-gr-fx-thin-path-groupoid` · definition — Thin path groupoid
- `prop-gr-fx-s1-loop-noncontractible` · proposition — The once-around circle path is not thin-contractible
- `prop-gr-fx-connection-path-transport-exists` · proposition — Existence and uniqueness of transport along a piecewise-smooth path
- `def-gr-fx-connection-path-transport` · definition — Connection path transport
- `prop-gr-fx-thin-transport-invariance` · proposition — Connection transport is invariant under thin homotopy
- `prop-gr-fx-path-functor-and-gauge` · proposition — Path transport composes and transforms covariantly
- `prop-gr-fx-small-loop-curvature` · proposition — Small-loop transport recovers curvature
- `prop-gr-fx-su2-compact` · proposition — SU(2) is a compact Hausdorff matrix group
- `def-gr-fx-discrete-holonomy-model` · definition — Finite SU(2) graph holonomy model
- `prop-gr-fx-discrete-wilson-trace` · proposition — Wilson traces are invariant under vertex gauge transformations
- `prop-gr-fx-vertex-haar-projection` · proposition — Finite graph vertex Haar averaging is an orthogonal projection

### `gr-fx14-holonomy-and-discrete-geometric-interface-examples` — Holonomy and discrete geometric interfaces — Examples (3 item(s))

- `ex-gr-fx14-1` · example — Holonomy and discrete geometric interfaces — flat local transport with global holonomy
- `ex-gr-fx14-2` · example — Holonomy and discrete geometric interfaces — triangular graph Wilson trace
- `ex-gr-fx14-3` · example — Holonomy and discrete geometric interfaces — antisymmetric invariant tensor at a bivalent SU(2) vertex

### `nrqmx-operator-realizations` — Operator domains, deficiency spaces and boundary realizations (5 item(s))

- `def-nrqmx-extension-data` · definition — Closed symmetric operators and deficiency data
- `lem-nrqmx-minimal-maximal-interval-laplacian-domains` · lemma — Minimal and maximal domains of the interval Laplacian
- `thm-nrqmx-von-neumann-extension` · theorem — Unitary deficiency parameterization at a reference scale
- `thm-nrqmx-interval-unitary-boundaries` · theorem — All self-adjoint interval Laplacian boundary conditions
- `thm-nrqmx-half-line-momentum-obstruction` · theorem — A symmetric half-line momentum with no self-adjoint extension

### `nrqmx-operator-realizations-examples` — Operator domains, deficiency spaces and boundary realizations — Examples (2 item(s))

- `ex-nrqmx-twisted-ring-spectrum` · example — Twisted circle momentum and its interval boundary matrix
- `cex-nrqmx-formal-symmetry-insufficient` · counterexample — A symmetric operator need not have a self-adjoint extension

### `nrqmx-form-spectral-methods` — Semibounded forms, variational spectra and Birman–Schwinger (6 item(s))

- `thm-nrqmx-closed-form-representation` · theorem — Semibounded closed-form representation and perturbation
- `thm-nrqmx-rank-one-resolvent` · theorem — Rank-one resolvent and bound-state equation
- `thm-nrqmx-free-laplacian-form-domain` · theorem — Free Laplacian form domain and realization
- `thm-nrqmx-form-min-max` · theorem — Form min-max below the essential spectrum
- `lem-nrqmx-yukawa-resolvent-kernel` · lemma — Yukawa kernel of the free resolvent in three dimensions
- `thm-nrqmx-birman-schwinger-negative-spectrum` · theorem — Birman–Schwinger principle for bounded compactly supported potentials

### `nrqmx-form-spectral-methods-examples` — Semibounded forms, variational spectra and Birman–Schwinger — Examples (2 item(s))

- `ex-nrqmx-attractive-separable-bound-state` · example — Rank-one attractive perturbation has at most one negative eigenvalue
- `cex-nrqmx-trial-vector-domain` · counterexample — A normalized square-integrable vector can have infinite kinetic form energy

## Your seams

Your pages depend on another group's:

- `gr-fx14-holonomy-and-discrete-geometric-interface` requires `gr-fx13-tetrads-and-lorentz-spin` (group r, batch 41)

Another group's pages depend on yours:

- `nrqmx-magnetic-geometry` (group t) requires your `nrqmx-form-spectral-methods`
- `nrqmx-magnetic-geometry` (group t) requires your `nrqmx-operator-realizations`
- `nrqmx-scattering-interfaces` (group u) requires your `nrqmx-form-spectral-methods`
- `nrqmx-bloch-band-geometry` (group w) requires your `nrqmx-form-spectral-methods`
- `nrqmx-floquet-control` (group w) requires your `nrqmx-form-spectral-methods`
- `nrqmx-certified-spectral-computation` (group x) requires your `nrqmx-form-spectral-methods`
- `qftx-finite-group-bf` (group ae) requires your `gr-fx14-holonomy-and-discrete-geometric-interface`

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
