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
label: i
covers: i

# Step 6 whole-group reading — group **i**, run `frontier-36-complete`

You are the group Alpha for batches **17**, **18**, **25**: 3 A/B pair(s), 6 page(s), 63 item(s).

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
| 17 | `specht-modules-and-the-irreducibles-of-the-symmetric-group` | A | representation-theory | 510.047 | `young-diagrams-tableaux-and-permutation-modules`, `maschkes-theorem-and-complete-reducibility`, `characters-and-the-orthogonality-relations`, `hilbert-space-geometry-and-riesz-representation`, `permutation-statistics-inversions-and-eulerian-numbers` |
| 17 | `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples` | B | representation-theory | 510.048 | `specht-modules-and-the-irreducibles-of-the-symmetric-group` |
| 18 | `unitary-representations-positive-type-and-gns` | A | representation-theory | 510.069 | `the-modular-function-and-l1-group-algebras`, `spectral-measures-and-borel-functional-calculus`, `uniform-spaces` |
| 18 | `unitary-representations-positive-type-and-gns-examples` | B | representation-theory | 510.07 | `unitary-representations-positive-type-and-gns` |
| 25 | `symmetric-functions-hall-inner-product-and-schur-bases` | A | representation-theory | 799 | `symmetric-polynomials`, `young-diagrams-tableaux-and-permutation-modules` |
| 25 | `symmetric-functions-hall-inner-product-and-schur-bases-examples` | B | representation-theory | 800 | `symmetric-functions-hall-inner-product-and-schur-bases` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `specht-modules-and-the-irreducibles-of-the-symmetric-group` — Specht Modules and the Irreducibles of the Symmetric Group (17 item(s))

- `def-column-antisymmetrizer-polytabloid-and-specht-module` · definition — Column antisymmetrizers, polytabloids, and Specht modules
- `lem-polytabloid-covariance-and-column-sign` · lemma — Polytabloid covariance and the column sign rule
- `def-invariant-inner-product-on-a-tabloid-module` · definition — Invariant Hermitian product on a tabloid module
- `lem-column-collision-causes-antisymmetrizer-cancellation` · lemma — Column collision cancels antisymmetrization
- `lem-column-antisymmetrizer-detects-dominance` · lemma — Nonzero antisymmetrizer image detects dominance
- `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional` · lemma — The antisymmetrizer image in its own tabloid module is one-dimensional
- `thm-james-submodule-theorem-in-characteristic-zero` · theorem — James's submodule theorem over the complex numbers
- `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero` · lemma — Complex Specht modules have nondegenerate Hermitian self-pairing
- `thm-complex-specht-modules-are-irreducible` · theorem — Complex Specht modules are irreducible
- `thm-specht-to-permutation-homomorphism-dominance` · theorem — Homomorphisms from Specht to Young permutation modules obey dominance
- `cor-distinct-specht-modules-are-inequivalent` · corollary — Distinct complex Specht modules are inequivalent
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules` · theorem — Specht modules classify the complex irreducibles of S_n
- `def-tabloid-and-column-orders-for-specht-straightening` · definition — Tabloid and column orders for Specht straightening
- `lem-leading-tabloid-coefficient-of-a-standard-polytabloid` · lemma — Leading tabloid of a column-standard polytabloid
- `lem-adjacent-column-garnir-relation` · lemma — Adjacent-column Garnir relation over C
- `lem-garnir-straightening-of-polytabloids` · lemma — Garnir straightening spans the complex Specht module
- `thm-standard-polytabloid-basis` · theorem — Standard polytabloids form a basis of a complex Specht module

### `specht-modules-and-the-irreducibles-of-the-symmetric-group-examples` — Specht Modules and the Irreducibles of the Symmetric Group — Examples (4 item(s))

- `ex-polytabloids-for-shape-two-one` · example — Polytabloids of shape (2,1)
- `ex-trivial-and-sign-specht-modules` · example — The row and column Specht modules
- `ex-specht-modules-of-s3` · example — All three Specht modules of S_3
- `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis` · counterexample — A reducible Specht module in characteristic two

### `unitary-representations-positive-type-and-gns` — Unitary Representations Positive Type and Gns (17 item(s))

- `def-strongly-continuous-unitary-representation` · definition — Strongly continuous unitary representation, invariance and intertwiners
- `lem-continuity-criteria-for-unitary-representations` · lemma — Continuity criteria for unitary representations
- `def-cyclic-vector-and-cyclic-unitary-representation` · definition — Cyclic vector and cyclic unitary representation
- `thm-schurs-lemma-for-unitary-representations` · theorem — Schur lemma for complex unitary representations
- `def-matrix-coefficient-of-a-unitary-representation` · definition — Matrix coefficient of a unitary representation
- `lem-unitary-matrix-coefficients-are-bounded-and-uniformly-continuous` · lemma — Bounds and two-sided uniform continuity of unitary coefficients
- `def-continuous-function-of-positive-type` · definition — Continuous positive-type function and normalized positive-type cone
- `lem-diagonal-unitary-coefficients-have-positive-type` · lemma — Diagonal unitary coefficients have positive type
- `lem-positive-type-functions-define-a-pre-hilbert-form` · lemma — Positive-type functions define the GNS pre-Hilbert form
- `lem-the-gns-null-space-is-translation-invariant` · lemma — The GNS null space is invariant under left translation
- `lem-the-gns-translation-action-is-unitary-and-strongly-continuous` · lemma — The GNS translation action is unitary and strongly continuous
- `thm-gns-construction-for-topological-groups` · theorem — GNS construction for a continuous positive-type function
- `thm-uniqueness-of-the-cyclic-gns-representation` · theorem — Uniqueness of the pointed cyclic GNS representation
- `cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations` · corollary — Normalized positive type and pointed cyclic unitary representations
- `lem-dominated-positive-type-functions-give-positive-commutant-contractions` · lemma — Dominated positive type and positive commutant contractions
- `lem-nonscalar-positive-commutant-elements-split-a-normalized-positive-type-function` · lemma — Nonscalar commutant contractions and convex decompositions
- `thm-pure-positive-type-functions-correspond-to-irreducible-gns-representations` · theorem — Extreme normalized positive type is equivalent to irreducible GNS

### `unitary-representations-positive-type-and-gns-examples` — Unitary Representations Positive Type and Gns — Examples (4 item(s))

- `ex-positive-type-functions-on-a-discrete-group` · example — Positive type on a discrete group: the identity mass, characters, and the regular GNS model
- `ex-gns-representation-of-a-one-dimensional-character` · example — GNS representation of a continuous unitary character
- `ex-positive-type-gaussian-on-the-real-line` · example — The positive-type Gaussian on the real line and its cyclic model
- `cex-a-bounded-continuous-function-need-not-have-positive-type` · counterexample — A bounded continuous normalized function that is not of positive type

### `symmetric-functions-hall-inner-product-and-schur-bases` — Symmetric Functions, the Hall Inner Product, and Schur Bases (16 item(s))

- `def-stable-graded-ring-of-symmetric-functions` · definition — The stable graded ring of symmetric functions
- `def-skew-diagram-and-semistandard-skew-tableau` · definition — Skew diagrams and semistandard skew tableaux
- `thm-monomial-symmetric-functions-form-the-integral-stable-basis` · theorem — The monomial symmetric functions form the integral stable basis
- `def-stable-schur-function-by-bialternants` · definition — Stable Schur functions from bialternants
- `def-bidegree-completed-symmetric-function-tensor-product` · definition — Bidegree completion of two symmetric-function rings
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring` · theorem — Elementary and complete families freely generate the stable ring
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities` · theorem — Jacobi–Trudi and dual Jacobi–Trudi identities
- `prop-power-sums-form-a-rational-not-integral-stable-basis` · proposition — Power sums form a rational but not integral stable basis
- `def-hall-inner-product-on-symmetric-functions` · definition — The Hall inner product on symmetric functions
- `prop-omega-conjugates-schur-functions` · proposition — The omega involution conjugates Schur functions
- `thm-cauchy-kernel-has-power-complete-and-schur-expansions` · theorem — Power-sum, complete, and Schur expansions of the Cauchy kernel
- `cor-power-sums-are-orthogonal-for-the-hall-inner-product` · corollary — Power sums are orthogonal for the Hall form
- `thm-schur-functions-form-an-orthonormal-integral-basis` · theorem — Schur functions form an orthonormal integral basis
- `def-skew-schur-function-by-hall-adjointness` · definition — Skew Schur functions by Hall adjointness
- `thm-skew-jacobi-trudi-and-tableau-expansion` · theorem — Skew Jacobi–Trudi and tableau expansion
- `lem-kostka-change-of-basis-is-dominance-unitriangular` · lemma — The Kostka change of basis is dominance-unitriangular

### `symmetric-functions-hall-inner-product-and-schur-bases-examples` — Symmetric Functions, the Hall Inner Product, and Schur Bases — Examples (5 item(s))

- `cex-power-sums-do-not-form-an-integral-basis` · counterexample — Power sums fail to span integrally in degree two
- `ex-degree-three-stable-symmetric-function-bases` · example — The five standard symmetric-function bases in degree three
- `ex-cauchy-kernel-through-total-degree-three` · example — Cauchy kernel through bidegree three
- `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables` · counterexample — A nonzero stable Schur function can vanish in too few variables
- `ex-a-disconnected-skew-schur-function-factors` · example — A disconnected skew Schur function factors

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
