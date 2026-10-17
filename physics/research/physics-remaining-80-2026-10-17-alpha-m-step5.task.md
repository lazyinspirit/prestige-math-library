# Step 5 adjudication — group **m**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 37, 38, 39: 3 A/B pair(s), 6 page(s), 34 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/physics-remaining-80-2026-10-17-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/physics-remaining-80-2026-10-17-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/physics-remaining-80-2026-10-17-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `qsm-local-ensemble-bridge` | A | quantum-statistical-mechanics | 571 | `qft-ir01`, `qm-framework-and-quantities`, `qsm-states-ensembles`, `td-math-mixture-dynamics-and-shells`, `gelfand-theory-and-commutative-c-star-algebras`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `group-c-star-algebras-and-the-fell-unitary-dual` |
| 37 | `qsm-local-ensemble-bridge-examples` | B | quantum-statistical-mechanics | 572 | `qsm-local-ensemble-bridge` |
| 38 | `qsm-quasilocal-states` | A | quantum-statistical-mechanics | 573 | `countability-and-uncountability`, `gelfand-theory-and-commutative-c-star-algebras`, `qsm-states-ensembles`, `the-topology-of-euclidean-space`, `normed-and-banach-spaces`, `group-c-star-algebras-and-the-fell-unitary-dual`, `monotone-sequences-and-cauchy-completeness`, `construction-of-the-natural-numbers`, `hilbert-space-geometry-and-riesz-representation`, `bounded-linear-operators-and-quotient-spaces` |
| 38 | `qsm-quasilocal-states-examples` | B | quantum-statistical-mechanics | 574 | `qsm-quasilocal-states` |
| 39 | `qsm-finite-range-spin-dynamics` | A | quantum-statistical-mechanics | 575 | `qsm-quasilocal-states` |
| 39 | `qsm-finite-range-spin-dynamics-examples` | B | quantum-statistical-mechanics | 576 | `qsm-finite-range-spin-dynamics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qsm-local-ensemble-bridge` — Finite tensor density, observable and measurement language (13 item(s))

- `lem-qsm-local-hermitian-diagonalization` · lemma — Finite Hermitian diagonalization
- `def-qsm-local-finite-tensor-state` · definition — Finite tensor density, observable and measurement language
- `def-qsm-local-finite-matrix-entropy` · definition — Dimensionless entropy of a finite density matrix
- `def-qsm-local-additive-spectral-ensembles` · definition — Additive spectral Hamiltonian and normalized ensembles
- `lem-qsm-local-subsystem-trace-tests` · lemma — Subsystem expectations and reduced finite tensor densities
- `def-qsm-local-matrix-net-completion` · definition — Quasilocal completion of finite matrix registers
- `post-qsm-local-ensemble-preparations` · postulate — Adopted finite canonical and band preparation rules
- `lem-qsm-local-tensor-gibbs-factorization` · lemma — Factorization of finite additive canonical densities
- `thm-qsm-local-classical-diagonal-embedding` · theorem — Consistent finite classical laws define a quasilocal C-star state
- `thm-qsm-local-independent-shell-equivalence` · theorem — Fixed-subsystem equivalence for independent finite energy shells
- `def-qsm-local-coercive-regulated-model` · definition — Finite regulated interacting polynomial model
- `pthm-qsm-local-qualified-shell-measurements` · physics-theorem — Fixed-block measurement predictions under independent shell preparation
- `pthm-qsm-local-regulated-interacting-gibbs` · physics-theorem — Trace-Gibbs predictions for coercive finite regulators

### `qsm-local-ensemble-bridge-examples` — Finite tensor density, observable and measurement language — Examples (3 item(s))

- `cex-qsm-local-empty-exact-band` · counterexample — A centered exact band can be empty
- `cex-qsm-local-entropy-density-insufficient` · counterexample — Entropy density agreement does not force local state agreement
- `cex-qsm-local-local-global-distinction` · counterexample — Fixed marginals do not determine global trace-norm convergence

### `qsm-quasilocal-states` — Local spin matrix algebras and isometric inclusions (9 item(s))

- `lem-qsm-integer-lattice-countable` · lemma — Countability of every finite-dimensional integer lattice
- `def-qsm-local-spin-algebras` · definition — Local spin matrix algebras and their factor inclusions
- `lem-qsm-local-spin-inclusions-isometric` · lemma — Local spin factor inclusions preserve the operator norm
- `def-qsm-quasilocal-spin-algebra` · definition — Norm-completed quasi-local quantum spin algebra
- `lem-qsm-quasilocal-completion` · lemma — Quasi-local algebra completion and locality
- `def-qsm-infinite-algebraic-state` · definition — Infinite algebraic state and finite-region restrictions
- `lem-qsm-consistent-local-states` · lemma — Consistent local densities extend to an algebraic state
- `lem-qsm-spin-state-compactness` · lemma — Sequential compactness of the quasi-local spin state space
- `lem-qsm-state-gns-construction` · lemma — Cyclic representation of a quasi-local state

### `qsm-quasilocal-states-examples` — Local spin matrix algebras and isometric inclusions — Examples (3 item(s))

- `ex-qsm-quasilocal-two-site-locality` · example — Two-site Pauli observables commute at disjoint sites
- `ex-qsm-quasilocal-infinite-tail-observable` · example — A norm-convergent observable with no finite localization region
- `ex-qsm-maximally-mixed-consistent-product-state` · example — Consistent maximally mixed local densities

### `qsm-finite-range-spin-dynamics` — Uniformly bounded finite-range quantum spin interaction (5 item(s))

- `def-qsm-bounded-finite-range-interaction` · definition — Uniformly bounded finite-range quantum spin interaction
- `lem-qsm-finite-range-commutator-path-bound` · lemma — Volume-independent finite-range commutator path bound
- `lem-qsm-boundary-dynamics-cauchy` · lemma — Boundary Duhamel estimate for thermodynamic spin dynamics
- `thm-qsm-finite-range-spin-dynamics` · theorem — Strongly continuous thermodynamic spin automorphism group
- `lem-qsm-local-generator-domain` · lemma — Local observables lie in the closed generator domain

### `qsm-finite-range-spin-dynamics-examples` — Uniformly bounded finite-range quantum spin interaction — Examples (1 item(s))

- `ex-qsm-finite-range-nearest-neighbor-ising` · example — Nearest-neighbor Ising interaction satisfies the finite-range bounds

## Your seams

Your pages depend on another group's:

- `qsm-local-ensemble-bridge` requires `qsm-states-ensembles` (group l, batch 36)
- `qsm-quasilocal-states` requires `qsm-states-ensembles` (group l, batch 36)

Another group's pages depend on yours:

- `qsm-spin-thermodynamic-limits` (group n) requires your `qsm-finite-range-spin-dynamics`
- `qsm-kms-equilibrium` (group n) requires your `qsm-finite-range-spin-dynamics`
- `qsm-dt-response` (group p) requires your `qsm-finite-range-spin-dynamics`

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
