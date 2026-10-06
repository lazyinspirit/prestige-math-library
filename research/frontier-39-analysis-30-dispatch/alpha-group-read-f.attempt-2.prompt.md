# Alpha

**Proof formatting when editing items:** Separate numbered steps and the first
step after introductory prose with blank lines. Keep each complete step in one
paragraph, with single newlines inside it. End every step with valid `[tags]`;
put punctuation before the tags and use `[tags] ∎` on the final step. Preserve
mathematics and references. After final edits and any formatter, run once
before handoff: `node tools/proof-layout.mjs items/<id>.md ...`, batching all
your changed item paths in one command.
Read-only assignments report defects without editing.

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

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
group work, `research/frontier-39-analysis-30-alpha-groups.json` is the assignment: it permits at
most ten groups of at most three batches, and a group writes only its own
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

run: frontier-39-analysis-30
role: alpha-group-read
label: f
covers: f

# Step 6 Alpha group reader — read-only digest — group **f**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **10**, **21**, **22**: 3 A/B pair(s), 6 page(s), 91 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `lax-milgram-and-weak-elliptic-solutions` | A | pde | 458.029 | `rellich-kondrachov-and-sobolev-compactness`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 10 | `lax-milgram-and-weak-elliptic-solutions-examples` | B | pde | 458.03 | `lax-milgram-and-weak-elliptic-solutions` |
| 21 | `weyl-character-and-multiplicity-formulas` | A | lie-theory | 510.013 | `harish-chandra-isomorphism-casimir-and-central-characters`, `verma-modules-and-shapovalov-forms`, `the-bgg-resolution`, `projectives-standard-filtrations-and-bgg-reciprocity` |
| 21 | `weyl-character-and-multiplicity-formulas-examples` | B | lie-theory | 510.014 | `weyl-character-and-multiplicity-formulas` |
| 22 | `tensor-product-multiplicities-and-littlewood-richardson` | A | lie-theory | 799.1 | `weyl-character-and-multiplicity-formulas`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `symmetric-functions-hall-inner-product-and-schur-bases`, `the-branching-rule-and-the-young-graph` |
| 22 | `tensor-product-multiplicities-and-littlewood-richardson-examples` | B | lie-theory | 799.2 | `tensor-product-multiplicities-and-littlewood-richardson` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lax-milgram-and-weak-elliptic-solutions` — Lax Milgram and Weak Elliptic Solutions (28 item(s))

- `def-bounded-coercive-and-symmetric-sesquilinear-forms` · definition — Bounded, coercive and symmetric sesquilinear forms
- `lem-form-to-bounded-operator-by-hilbert-riesz` · lemma — A bounded form is represented by a unique bounded operator
- `lem-coercive-form-operator-is-bounded-below` · lemma — A coercive form operator is bounded below
- `lem-bounded-below-operator-has-closed-range` · lemma — A bounded-below operator has closed range
- `lem-adjoint-of-a-coercive-sesquilinear-form-is-coercive` · lemma — The adjoint of a coercive form is coercive with the same constants
- `lem-coercivity-of-the-adjoint-makes-the-form-operator-range-dense` · lemma — Coercivity of the adjoint makes the form-operator range dense
- `lem-coercivity-makes-a-small-form-step-a-contraction` · lemma — Coercivity makes a small form step a strict contraction
- `thm-lax-milgram` · theorem — The Lax--Milgram theorem
- `cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha` · corollary — The Lax--Milgram solution operator has norm at most $1/\alpha$
- `cor-symmetric-lax-milgram-is-energy-minimisation` · corollary — Symmetric Lax--Milgram is energy minimisation
- `rem-nonsymmetric-lax-milgram-is-not-a-scalar-minimisation-principle` · remark — Nonsymmetric Lax--Milgram is not a scalar minimisation principle
- `def-h-minus-one-as-the-dual-of-h-one-zero` · definition — The negative Sobolev space $H^{-1}(\Omega)$
- `lem-ltwo-and-divergence-data-embed-in-h-minus-one` · lemma — $L^2$ forcing and divergence data embed in $H^{-1}$ with a quantitative bound
- `thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form` · theorem — Every $H^{-1}$ functional is an $L^2$ function plus a divergence
- `def-uniformly-elliptic-divergence-form-operator` · definition — Uniformly elliptic divergence-form operators and their sesquilinear forms
- `def-weak-dirichlet-solution-for-a-divergence-form-operator` · definition — Weak Dirichlet solutions for a divergence-form operator
- `lem-elliptic-form-is-well-defined-and-bounded` · lemma — The elliptic form is well defined and bounded on $H^1$
- `lem-coercivity-of-the-principal-dirichlet-form` · lemma — Coercivity of the principal Dirichlet form
- `lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound` · lemma — Testing a coercive weak solution with itself gives the energy bound
- `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem` · theorem — Existence and uniqueness for the weak Dirichlet Poisson problem
- `thm-lax-milgram-solvability-for-coercive-divergence-form-equations` · theorem — Lax--Milgram solvability for coercive divergence-form equations
- `lem-w-one-two-is-a-hilbert-space` · lemma — The Sobolev space $H^1$ is a Hilbert space
- `thm-weak-neumann-poisson-solvability-on-the-mean-zero-subspace` · theorem — Weak Neumann solvability on the mean-zero subspace
- `cor-positive-reaction-restores-coercivity-without-dirichlet-poincare` · corollary — A positive reaction term restores coercivity without Poincar\'e
- `cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting` · corollary — The inhomogeneous weak Dirichlet problem by a trace lifting
- `lem-classical-solutions-satisfy-the-weak-formulation` · lemma — Classical solutions satisfy the weak formulation
- `cor-weak-solution-depends-continuously-on-data` · corollary — Weak solutions depend continuously on the data
- `lem-sharp-dirichlet-poincare-inequality-on-an-interval` · lemma — The sharp Dirichlet Poincare inequality on an interval

### `lax-milgram-and-weak-elliptic-solutions-examples` — Lax Milgram and Weak Elliptic Solutions — Examples (11 item(s))

- `ex-weak-dirichlet-poisson-problem-on-an-interval` · example — The weak Dirichlet Poisson problem on an interval
- `ex-ltwo-forcing-defines-an-h-minus-one-functional` · example — $L^2$ forcing defines an $H^{-1}$ functional
- `ex-nonsymmetric-coercive-elliptic-form` · example — A nonsymmetric coercive elliptic form
- `cex-bounded-form-without-coercivity-need-not-be-solvable` · counterexample — A bounded form without coercivity need not be solvable
- `cex-coercive-form-need-not-be-symmetric` · counterexample — A coercive form need not be symmetric
- `cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting` · counterexample — Arbitrary $L^2$ boundary data need not have an $H^1$ lifting
- `cex-neumann-poisson-problem-is-not-coercive-on-all-of-h-one` · counterexample — The Neumann Poisson problem is not coercive on all of $H^1$
- `ex-complex-sesquilinear-coercivity-differs-from-bilinear-positivity` · example — Complex sesquilinear coercivity differs from bilinear positivity
- `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound` · example — A one-dimensional form attains the $1/\alpha$ Lax--Milgram bound
- `ex-neumann-kernel-dimension-equals-the-number-of-connected-components` · example — The Neumann kernel is spanned by the componentwise constants
- `cex-a-large-adverse-zero-order-term-destroys-dirichlet-coercivity` · counterexample — A large adverse zero-order term destroys Dirichlet coercivity

### `weyl-character-and-multiplicity-formulas` — Weyl Character and Multiplicity Formulas (21 item(s))

- `def-completed-formal-character-ring-for-downward-cones` · definition — The completed formal character ring
- `def-formal-character-of-a-finite-dimensional-weight-module` · definition — The formal character of a finite-dimensional weight module
- `prop-formal-characters-are-additive-and-multiplicative` · proposition — Formal characters are additive and multiplicative
- `def-weyl-alternation-operator` · definition — The Weyl alternation operator
- `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` · proposition — Characters of finite-dimensional modules are Weyl-invariant
- `lem-weyl-length-parity-is-multiplicative` · lemma — The sign of the Weyl length is multiplicative
- `lem-rho-minus-w-rho-is-a-sum-of-positive-roots` · lemma — The difference of the Weyl vector from its reflections is a sum of positive roots
- `lem-weyl-alternants-are-skew-invariant` · lemma — Weyl alternants are skew-invariant
- `lem-geometric-series-invertibility-in-the-completed-character-ring` · lemma — Geometric series are invertible in the completed character ring
- `thm-weyl-denominator-identity` · theorem — The Weyl denominator identity
- `lem-bgg-euler-character-gives-the-weyl-numerator` · lemma — The BGG Euler identity gives the Weyl numerator
- `thm-weyl-character-formula` · theorem — The Weyl character formula
- `def-kostant-partition-function` · definition — The Kostant partition function
- `thm-kostant-weight-multiplicity-formula` · theorem — Kostant's weight multiplicity formula
- `lem-casimir-comparison-on-a-weight-vector` · lemma — The Casimir comparison on a weight space
- `lem-positive-root-strings-sum-the-freudenthal-correction` · lemma — Positive root strings sum the Freudenthal correction
- `thm-freudenthal-weight-multiplicity-recursion` · theorem — Freudenthal's weight multiplicity recursion
- `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` · lemma — The shifted norm of a weight is maximal only at the top weight
- `cor-freudenthal-recursion-terminates-from-the-highest-weight` · corollary — Freudenthal recursion terminates from the highest weight
- `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one` · lemma — Regularized evaluation of the Weyl character quotient at one
- `thm-weyl-dimension-formula` · theorem — The Weyl dimension formula

### `weyl-character-and-multiplicity-formulas-examples` — Weyl Character and Multiplicity Formulas — Examples (6 item(s))

- `ex-weyl-character-and-dimension-formulas-for-sl2` · example — Weyl character and dimension formulas for sl2
- `ex-a2-weyl-denominator-expansion` · example — The A2 Weyl denominator expansion
- `ex-kostant-multiplicity-in-the-sl3-adjoint-module` · example — Kostant multiplicity in the sl3 adjoint module
- `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` · example — Freudenthal recursion for the sl3 adjoint zero weight
- `cex-omitting-the-rho-shift-breaks-kostants-formula` · counterexample — Omitting the rho shift breaks Kostant's formula
- `ex-weyl-dimension-formula-for-a-fundamental-sl3-module` · example — The Weyl dimension formula for a fundamental sl3 module

### `tensor-product-multiplicities-and-littlewood-richardson` — Tensor Product Multiplicities and Littlewood Richardson (19 item(s))

- `def-tensor-product-multiplicity-for-highest-weight-modules` · definition — Tensor-product multiplicities for finite-dimensional simple modules
- `prop-tensor-product-multiplicities-are-character-structure-constants` · proposition — Tensor-product multiplicities are character structure constants
- `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` · lemma — Weyl alternation extracts a dominant highest-weight coefficient
- `thm-steinberg-tensor-product-multiplicity-formula` · theorem — Steinberg's tensor-product multiplicity formula
- `cor-racah-speiser-tensor-product-algorithm` · corollary — The Racah--Speiser tensor-product algorithm
- `def-minuscule-weight` · definition — Minuscule weights
- `lem-minuscule-weights-are-the-weyl-orbit` · lemma — Minuscule weights have exactly the Weyl orbit as their weights
- `cor-minuscule-tensor-product-rule` · corollary — Tensor product with a minuscule representation
- `def-polynomial-glr-highest-weights-as-partitions` · definition — Polynomial representations of GL_r and their highest weights
- `def-schur-module-and-schur-polynomial-character` · definition — Schur modules and their characters
- `prop-semistandard-tableaux-expand-schur-characters` · proposition — Semistandard tableaux expand Schur characters
- `def-littlewood-richardson-tableau-and-coefficient` · definition — Littlewood--Richardson tableaux and coefficients
- `lem-bender-knuth-involutions-on-semistandard-tableaux` · lemma — Bender--Knuth involutions permute the weights of semistandard tableaux
- `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` · lemma — The admissible-tableau count equals the Littlewood--Richardson coefficient
- `thm-littlewood-richardson-tensor-product-rule` · theorem — The Littlewood--Richardson tensor-product rule
- `cor-horizontal-pieri-rule` · corollary — The horizontal Pieri rule
- `cor-vertical-pieri-rule` · corollary — The vertical Pieri rule
- `prop-determinant-twists-translate-glr-highest-weights` · proposition — Determinant twists translate GL_r highest weights
- `prop-littlewood-richardson-coefficients-stabilize-with-rank` · proposition — Littlewood--Richardson coefficients stabilise with rank

### `tensor-product-multiplicities-and-littlewood-richardson-examples` — Tensor Product Multiplicities and Littlewood Richardson — Examples (6 item(s))

- `ex-clebsch-gordan-decomposition-for-sl2` · example — The Clebsch--Gordan tensor decomposition for sl2
- `ex-three-tensor-three-for-sl3` · example — Three times three for sl3
- `ex-littlewood-richardson-product-s21-times-s1` · example — The product s(2,1)s(1) by Pieri
- `ex-a-littlewood-richardson-coefficient-greater-than-one` · example — A Littlewood--Richardson coefficient greater than one
- `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` · counterexample — A semistandard tableau with non-lattice reading word is not a Littlewood--Richardson tableau
- `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` · counterexample — A partition with too many rows vanishes at fixed rank

## Your seams

Your pages depend on another group's:

- `lax-milgram-and-weak-elliptic-solutions` requires `rellich-kondrachov-and-sobolev-compactness` (group c, batch 9)

Another group's pages depend on yours:

- `fredholm-elliptic-problems-and-the-elliptic-spectrum` (group a) requires your `lax-milgram-and-weak-elliptic-solutions`
- `schauder-and-lp-elliptic-estimates` (group h) requires your `lax-milgram-and-weak-elliptic-solutions`
- `borel-weil-and-borel-weil-bott` (group h) requires your `weyl-character-and-multiplicity-formulas`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.


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
