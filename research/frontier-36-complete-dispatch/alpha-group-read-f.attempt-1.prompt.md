# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-36-complete-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-36-complete
role: alpha-group-read
label: f
covers: f

# Step 6 whole-group reading — group **f**, run `frontier-36-complete`

You are the group Alpha for batches **1**, **2**, **20**: 3 A/B pair(s), 6 page(s), 73 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `fredholm-determinants-and-the-lidskii-trace-formula` | A | functional-analysis | 288.0801 | `banach-algebras-spectrum-and-holomorphic-functional-calculus`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `the-determinant-of-a-linear-operator`, `triangularisation-and-jordan-canonical-form`, `exterior-powers-orientation-and-hodge-duality` |
| 1 | `fredholm-determinants-and-the-lidskii-trace-formula-examples` | B | functional-analysis | 288.0802 | `fredholm-determinants-and-the-lidskii-trace-formula` |
| 2 | `measurable-hilbert-fields-and-direct-integral-operators` | A | functional-analysis | 288.1103 | `standard-borel-real-codings-and-determining-classes`, `measurable-functions-and-simple-approximation`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `spectral-measures-and-borel-functional-calculus` |
| 2 | `measurable-hilbert-fields-and-direct-integral-operators-examples` | B | functional-analysis | 288.1104 | `measurable-hilbert-fields-and-direct-integral-operators` |
| 20 | `alphabet-reduction-and-the-pcp-theorem` | A | computability-theory | 649 | `gap-amplification-and-assignment-testing`, `arithmetization-and-the-sum-check-protocol`, `the-cook-levin-theorem` |
| 20 | `alphabet-reduction-and-the-pcp-theorem-examples` | B | computability-theory | 650 | `alphabet-reduction-and-the-pcp-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fredholm-determinants-and-the-lidskii-trace-formula` — Fredholm Determinants and the Lidskii Trace Formula (17 item(s))

- `def-algebraic-multiplicity-for-compact-operators` · definition — Algebraic multiplicity of a nonzero compact-operator eigenvalue
- `lem-finite-rank-compressions-converge-in-trace-norm` · lemma — Finite-rank orthogonal compressions converge in trace norm
- `def-hilbert-exterior-power-and-induced-operator` · definition — Hilbert exterior powers and induced operators
- `lem-trace-norm-of-hilbert-exterior-powers` · lemma — Trace-norm bound for exterior powers of trace-class operators
- `lem-weyl-eigenvalue-singular-value-inequalities` · lemma — Weyl product and sum inequalities for compact operators
- `lem-diagonal-trace-class-operator-on-ell-two` · lemma — Diagonal trace-class operators on $\ell^2(\mathbb N,\mathbb C)$
- `lem-separable-trace-class-determinant-construction` · lemma — Local separable trace-class determinant construction
- `lem-fredholm-determinant-trace-norm-continuity-and-growth` · lemma — Trace-norm continuity, growth and multiplicativity of the local determinant
- `lem-fredholm-determinant-logarithmic-derivative` · lemma — Logarithmic derivative of the local Fredholm determinant
- `lem-fredholm-determinant-zeros-and-algebraic-multiplicities` · lemma — Zeros of the local Fredholm determinant
- `lem-quasinilpotent-trace-class-operator-has-zero-trace` · lemma — A quasinilpotent trace-class operator has zero trace
- `lem-generalized-eigenspace-trace-decomposition` · lemma — Trace decomposition through generalized eigenspaces and the invariant quotient
- `lem-fredholm-determinant-spectral-product-from-power-traces` · lemma — Spectral product from traces of powers
- `lem-arbitrary-hilbert-fredholm-determinant-from-separable-support` · lemma — Arbitrary-Hilbert Fredholm determinant from a separable reducing support
- `def-fredholm-determinant` · definition — Fredholm determinant of a trace-class operator
- `prop-fredholm-determinant-properties-for-trace-class-operators` · proposition — Fredholm determinant properties for trace-class operators
- `thm-lidskii-for-trace-class-operators` · theorem — Lidskii trace formula for trace-class operators

### `fredholm-determinants-and-the-lidskii-trace-formula-examples` — Fredholm Determinants and the Lidskii Trace Formula: Examples (4 item(s))

- `cex-invariant-subspace-need-not-reduce-an-operator` · counterexample — An invariant subspace need not reduce an operator
- `ex-volterra-square-has-zero-trace` · example — The square of the Volterra operator has zero trace
- `ex-diagonal-trace-class-fredholm-determinant` · example — Diagonal trace-class Fredholm determinant
- `ex-fredholm-determinant-of-a-finite-rank-operator` · example — Fredholm determinant of a finite-rank operator

### `measurable-hilbert-fields-and-direct-integral-operators` — Measurable Hilbert Fields and Direct-Integral Operators (11 item(s))

- `def-von-neumann-algebra-and-commutant` · definition — Von Neumann algebras and commutants
- `def-measurable-hilbert-field-from-a-countable-fundamental-family` · definition — Measurable Hilbert field from a countable fundamental family
- `lem-measurable-sections-have-measurable-pointwise-inner-products` · lemma — Measurable sections have measurable pointwise inner products
- `lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator` · lemma — A separably acting abelian von Neumann algebra has a self-adjoint generator
- `def-direct-integral-of-a-measurable-hilbert-field` · definition — Direct integral of a measurable Hilbert field
- `thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces` · theorem — Direct integrals of measurable Hilbert fields are Hilbert spaces
- `def-measurable-and-decomposable-operator-fields` · definition — Measurable and decomposable operator fields
- `thm-measurable-essentially-bounded-operator-fields-act-decomposably` · theorem — Measurable essentially bounded operator fields act decomposably
- `thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication` · theorem — Decomposable operators are the commutant of diagonal multiplication
- `lem-diagonal-multipliers-form-a-von-neumann-algebra` · lemma — Diagonal multipliers form a von Neumann algebra
- `thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras` · theorem — Spectral multiplicity model for separably acting abelian von Neumann algebras

### `measurable-hilbert-fields-and-direct-integral-operators-examples` — Measurable Hilbert Fields and Direct-Integral Operators: Examples (3 item(s))

- `ex-direct-integral-of-a-constant-hilbert-field` · example — Direct integral of a constant Hilbert field
- `ex-multiplicity-two-diagonal-representation` · example — Multiplicity-two diagonal representation
- `ex-a-measurable-two-dimensional-operator-field` · example — A measurable two-dimensional operator field

### `alphabet-reduction-and-the-pcp-theorem` — Alphabet Reduction and the PCP Theorem (34 item(s))

- `def-pcp-verifier-randomness-query-and-proof-length` · definition — PCP verifier resources and deterministic proof strings
- `def-pcp-class-with-completeness-and-soundness` · definition — PCP classes with completeness and soundness
- `lem-two-query-pcps-and-constraint-graphs-are-equivalent` · lemma — Two-query PCPs and binary constraint graphs
- `def-walsh-hadamard-encoding-and-relative-distance` · definition — Walsh–Hadamard encoding and relative Hamming distance
- `lem-walsh-hadamard-code-has-distance-one-half` · lemma — Distinct Walsh–Hadamard words differ on half the cube
- `def-robust-codeword-blocks-for-constraint-graphs` · definition — Shared codeword blocks and edge acceptance circuits
- `lem-robust-edge-circuit-has-distance-gap` · lemma — A violated decoded edge is far from edge-circuit acceptance
- `lem-random-subsum-detects-a-nonzero-binary-vector` · lemma — Random binary subsums detect every nonzero discrepancy
- `def-quadratic-equation-instance-and-tensor-code-oracles` · definition — Quadratic equations and tensor-code oracle tables
- `lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix` · lemma — Boolean circuits become quadratic systems with a fixed input prefix
- `lem-blr-testing-supplies-nearby-linear-decoders` · lemma — The BLR test supplies a nearby unique linear decoder
- `lem-tensor-consistency-test-soundness` · lemma — Tensor consistency rejects a wrong decoded tensor
- `lem-random-subsum-verifies-all-quadratic-equations-with-constant-error` · lemma — A random subsum checks all quadratic equations at once
- `thm-constant-query-exponential-pcp-for-quadratic-equations` · theorem — An exponential-length constant-query PCP for quadratic equations
- `def-pcp-of-proximity-and-concatenation-test` · definition — Two-piece PCP of proximity and concatenation check
- `lem-concatenation-test-enforces-a-shared-prefix` · lemma — Concatenation testing enforces the same decoded prefix
- `thm-two-piece-pcp-of-proximity` · theorem — A two-piece constant-query PCP of proximity
- `def-composition-with-an-assignment-tester` · definition — Composition of an edge system with an assignment tester
- `lem-composition-preserves-perfect-completeness` · lemma — Composition preserves perfect satisfiability
- `lem-composition-transfers-rejection-ratio` · lemma — Composition transfers a constant fraction of unsatisfaction
- `lem-bounded-arity-boolean-csp-to-binary-constraint-graph` · lemma — Bounded-arity Boolean constraints become binary graph constraints
- `thm-alphabet-reduction-step` · theorem — Fixed-alphabet reduction with constant gap retention
- `lem-alphabet-reduction-controls-size-and-degree` · lemma — Alphabet reduction controls explicit size and degree
- `def-dinur-pcp-transformation` · definition — One fixed-alphabet Dinur transformation
- `lem-one-transformation-preserves-satisfiability` · lemma — One Dinur transformation preserves perfect satisfiability
- `lem-one-transformation-amplifies-gap` · lemma — One fixed-alphabet transformation doubles small gaps
- `lem-one-transformation-has-constant-factor-growth` · lemma — One fixed transformation has constant-factor growth
- `lem-logarithmically-many-iterations-reach-constant-gap` · lemma — Logarithmic iteration reaches a constant unsatisfaction gap
- `lem-three-sat-to-binary-constraint-graph` · lemma — A three-CNF formula as a fixed-alphabet binary constraint graph
- `thm-gap-csp-is-np-hard` · theorem — Constant-gap binary CSP is NP-hard
- `thm-pcp-theorem-np-equals-pcp-log-n-o-one` · theorem — The PCP theorem: NP equals PCP(log n, O(1))
- `thm-pcp-error-amplification` · theorem — PCP soundness amplification by independent repetition
- `fs-gap-amplification-alone-controls-alphabet` · false-statement — False: graph powering alone keeps the alphabet fixed
- `fs-pcp-proofs-are-randomized-strings` · false-statement — False: a PCP proof is itself a random string

### `alphabet-reduction-and-the-pcp-theorem-examples` — Alphabet Reduction and the PCP Theorem: Examples and Counterexamples (4 item(s))

- `ex-composition-preserves-perfect-completeness` · example — A single equality edge through robust composition
- `ex-pcp-error-amplification` · example — Three repetitions of a three-quarters-sound PCP
- `cex-gap-amplification-alone-controls-alphabet` · counterexample — A powered graph whose alphabet grows
- `ex-walsh-hadamard-encoding-and-testing` · example — Four coordinates of a Walsh–Hadamard codeword

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
