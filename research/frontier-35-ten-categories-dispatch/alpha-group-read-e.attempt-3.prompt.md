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
group work, `research/frontier-35-ten-categories-alpha-groups.json` is the assignment: it permits at
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

run: frontier-35-ten-categories
role: alpha-group-read
label: e
covers: e

# Step 6 whole-group reading — group **e**, run `frontier-35-ten-categories`

You are the group Alpha for batches **1**, **2**, **13**: 4 A/B pair(s), 8 page(s), 88 item(s).

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
| 1 | `finite-abelian-characters-for-combinatorics` | A | combinatorics | 222.1 | `characters-and-the-orthogonality-relations`, `cyclic-groups-and-direct-products`, `the-complex-exponential-and-eulers-formula`, `finite-counting-and-binomial-coefficients` |
| 1 | `finite-abelian-characters-for-combinatorics-examples` | B | combinatorics | 222.2 | `finite-abelian-characters-for-combinatorics` |
| 1 | `erdos-hajnal-for-the-e-graph-and-bird` | A | combinatorics | 441 | `from-generalized-niceness-to-erdos-hajnal`, `co-bird-free-comb-structure` |
| 1 | `erdos-hajnal-for-the-e-graph-and-bird-examples` | B | combinatorics | 442 | `erdos-hajnal-for-the-e-graph-and-bird` |
| 2 | `simple-homotopy-whitehead-groups-and-torsion` | A | algebraic-topology | 366.0401 | `cw-complexes-and-cellular-homology`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `covering-spaces-and-lifting`, `classification-of-covering-spaces`, `the-fundamental-group`, `rings-subrings-and-integral-domains`, `modules-and-module-homomorphisms`, `free-modules-and-exact-sequences`, `the-group-algebra-and-representations`, `chain-homotopy-and-the-homotopy-category`, `mapping-cones-cylinders-and-chain-triangles` |
| 2 | `simple-homotopy-whitehead-groups-and-torsion-examples` | B | algebraic-topology | 366.0402 | `simple-homotopy-whitehead-groups-and-torsion` |
| 13 | `eastons-theorem-and-cardinal-invariants-of-the-continuum` | A | foundations | 715 | `finite-support-iterations-and-martins-axiom`, `borel-analytic-sets-perfect-sets-and-determinacy`, `large-cardinals-measures-and-elementary-embeddings` |
| 13 | `eastons-theorem-and-cardinal-invariants-of-the-continuum-examples` | B | foundations | 716 | `eastons-theorem-and-cardinal-invariants-of-the-continuum` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-abelian-characters-for-combinatorics` — Finite Abelian Characters for Combinatorics (3 item(s))

- `def-additive-character-of-a-finite-abelian-group` · definition — Additive characters of a finite abelian group
- `lem-additive-characters-are-one-dimensional-complex-representations` · lemma — Additive characters are exactly one-dimensional complex representation characters
- `lem-additive-character-orthogonality-from-representation-orthogonality` · lemma — Row orthogonality for additive characters of a finite abelian group

### `finite-abelian-characters-for-combinatorics-examples` — Finite Abelian Characters for Combinatorics: Examples (1 item(s))

- `ex-characters-of-z-mod-five-and-their-orthogonality` · example — The five characters of Z/5Z and their orthogonality

### `erdos-hajnal-for-the-e-graph-and-bird` — The Erdős–Hajnal Theorems for the E-Graph and Bird (6 item(s))

- `lem-the-e-graph-and-the-bird-are-leaf-reducible` · lemma — The E-graph and Bird singleton families are leaf-reducible
- `cor-the-e-graph-is-generalized-nice` · corollary — The singleton E-graph family is generalized nice
- `thm-the-e-graph-has-the-erdos-hajnal-property` · theorem — The E-graph has the Erdős-Hajnal property
- `cor-the-singleton-family-containing-bird-has-property-star` · corollary — The singleton Bird family has property (*)
- `cor-the-bird-graph-is-generalized-nice` · corollary — The singleton Bird family is generalized nice
- `thm-the-bird-graph-has-the-erdos-hajnal-property` · theorem — The Bird graph has the Erdős-Hajnal property

### `erdos-hajnal-for-the-e-graph-and-bird-examples` — The Erdős–Hajnal Theorems for the E-Graph and Bird — Examples (2 item(s))

- `ex-the-e-graph-theorem-properly-extends-the-p-five-case` · example — The E theorem reaches an induced P5 witness
- `ex-the-bird-theorem-properly-extends-the-bull-case` · example — The Bird theorem reaches an induced bull witness

### `simple-homotopy-whitehead-groups-and-torsion` — Simple Homotopy, Whitehead Groups, and Torsion (27 item(s))

- `def-elementary-expansion-and-collapse-of-finite-cw-complexes` · definition — Elementary expansions and collapses of finite CW complexes
- `def-simple-homotopy-equivalence` · definition — Simple homotopy equivalence
- `def-stable-general-linear-group-and-elementary-subgroup-of-a-ring` · definition — Stable general linear and elementary groups for right modules
- `lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup` · lemma — Stable elementary matrices equal the commutator subgroup
- `def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group` · definition — K₁ of a ring and the Whitehead group of a discrete group
- `lem-group-rings-have-invariant-basis-number-via-augmentation` · lemma — Integral group rings have invariant basis number
- `lem-parity-map-of-a-finite-contracted-complex-is-invertible` · lemma — A chain contraction makes the odd-to-even parity map invertible
- `def-finite-based-free-chain-complex-and-its-contraction-torsion` · definition — Finite based free complexes and contraction torsion
- `lem-contraction-torsion-is-independent-of-the-contracting-homotopy` · lemma — Contraction torsion does not depend on the contraction
- `lem-basis-change-and-direct-sum-formulas-for-chain-torsion` · lemma — Basis-change, direct-sum and based exact-sequence formulas
- `def-based-cellular-chain-complex-of-a-universal-cover` · definition — Based cellular chains of a universal cover as finite free right group-ring modules
- `lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group` · lemma — Cellular basis ambiguities vanish in the Whitehead group
- `lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear` · lemma — Universal-cover boundaries, maps and homotopies respect the right group-ring action
- `lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone` · lemma — A lifted finite CW equivalence has a contractible group-ring mapping cone
- `def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence` · definition — Whitehead torsion of a finite CW homotopy equivalence
- `thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction` · theorem — Whitehead torsion is independent of all auxiliary choices
- `thm-composition-and-sum-formulas-for-whitehead-torsion` · theorem — Composition and based-pair sum formulas for Whitehead torsion
- `lem-an-elementary-expansion-has-zero-whitehead-torsion` · lemma — An elementary CW expansion has zero Whitehead torsion
- `thm-simple-homotopy-equivalences-have-zero-whitehead-torsion` · theorem — Simple homotopy equivalences have zero torsion
- `lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple` · lemma — The target of a finite cellular mapping cylinder is a simple subcomplex
- `lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees` · lemma — Cell trading puts a finite relative equivalence in two high degrees
- `lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases` · lemma — Two high relative cell layers have free homotopy bases and their cellular boundary matrix
- `lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices` · lemma — Cell slides and elementary pairs realize stable group-ring matrix operations
- `lem-an-identity-relative-boundary-matrix-allows-cell-cancellation` · lemma — Identity relative boundary matrix permits geometric cancellation
- `lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves` · lemma — Zero relative Whitehead torsion yields a finite relative elementary deformation
- `lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence` · lemma — Every Whitehead class is realized by a finite CW homotopy equivalence
- `thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes` · theorem — Whitehead torsion is the complete obstruction to finite CW simple homotopy

### `simple-homotopy-whitehead-groups-and-torsion-examples` — Simple Homotopy, Whitehead Groups, and Torsion: Examples (4 item(s))

- `ex-an-elementary-expansion-has-zero-whitehead-torsion` · example — A free-face interval expansion has zero torsion
- `ex-the-whitehead-group-of-the-trivial-group-is-zero` · example — The Whitehead group of the trivial group is zero
- `ex-torsion-of-a-two-term-based-contractible-complex` · example — Torsion of a two-term based contractible complex
- `cex-ordinary-acyclicity-forgets-basis-and-group-ring-torsion` · counterexample — Ordinary acyclicity forgets nonzero group-ring torsion

### `eastons-theorem-and-cardinal-invariants-of-the-continuum` — Easton's Theorem and Cardinal Invariants of the Continuum (41 item(s))

- `thm-regular-continuum-function-constraints` · theorem — Necessary constraints on the regular-cardinal continuum function
- `def-easton-function` · definition — Easton functions on regular cardinals
- `def-easton-support-product` · definition — The Easton-support product of higher Cohen forcings
- `def-easton-support-iteration` · definition — Set-length Easton-support forcing iterations
- `lem-easton-head-cc-and-tail-closure` · lemma — Easton head chain condition and tail closure
- `lem-easton-head-tail-no-new-short-sequences` · lemma — A closed Easton tail adds no short sequences across its chain-condition head
- `thm-set-easton-product-preserves-cardinals-and-cofinalities` · theorem — Set-sized Easton forcing preserves cardinals and cofinalities
- `lem-easton-head-cardinality-and-name-count` · lemma — GCH counts Easton head conditions and subset names
- `thm-set-easton-product-realizes-regular-pattern` · theorem — Set-sized Easton realization on regular cardinals
- `def-gbc-global-choice-ground-for-easton` · definition — Class-theoretic ground assumptions for Easton forcing
- `lem-easton-class-forcing-truth-and-set-names` · lemma — Set-stage names and the forcing truth lemma for the Easton class product
- `lem-easton-class-tail-head-decision` · lemma — Uniform head-antichain decisions below a class tail
- `lem-easton-class-separation-and-power-set` · lemma — Separation and Power Set in the Easton class extension
- `lem-easton-class-replacement` · lemma — Replacement in the Easton class extension
- `lem-easton-class-generic-model-satisfies-zfc` · lemma — The Easton class-generic union satisfies ZFC
- `thm-eastons-theorem-for-regular-cardinals` · theorem — Easton’s theorem for regular cardinals
- `rem-easton-singular-cardinal-caveat` · remark — Easton’s theorem does not prescribe singular-cardinal powers
- `def-almost-inclusion-pseudointersection-and-tower` · definition — Almost inclusion, pseudointersections and towers
- `lem-small-tower-exists` · lemma — A tower of size at most the continuum exists
- `def-pseudointersection-and-tower-numbers` · definition — The pseudointersection and tower numbers
- `lem-basic-pseudointersection-and-tower-bounds` · lemma — Basic bounds for p and t
- `def-eventual-domination-bounding-and-dominating-numbers` · definition — Eventual domination and b and d
- `lem-basic-bounding-and-dominating-relations` · lemma — Basic bounding and dominating relations
- `def-splitting-and-reaping-numbers` · definition — Splitting and reaping numbers
- `lem-splitting-reaping-comparison-with-b-and-d` · lemma — Splitting and reaping comparisons with b and d
- `def-null-and-meagre-cardinal-invariants` · definition — Add, cov, non and cof for null and meagre ideals
- `lem-basic-ideal-cardinal-inequalities` · lemma — Elementary bounds on ideal cardinal invariants
- `lem-cantor-coin-measure-from-binary-expansion` · lemma — The fair-coin Borel measure on Cantor space
- `def-null-meagre-borel-master-codes` · definition — Borel master codes for null and meagre sets
- `lem-borel-null-sections-have-uniform-open-hulls` · lemma — Borel-coded small open hulls for null sections
- `lem-borel-meagre-sections-have-uniform-closed-covers` · lemma — Borel-coded nowhere-dense covers for meagre sections
- `lem-null-meagre-master-codes-are-cofinal` · lemma — Borel master codes are cofinal in both ideals
- `lem-null-meagre-ideal-transfer-cantor-real` · lemma — Transfer of null and meagre ideal invariants between Cantor space and the reals
- `lem-ideal-tukey-morphism-controls-add-and-cof` · lemma — Ideal Tukey morphisms control additivity and cofinality
- `lem-null-master-codes-and-summable-slaloms-are-tukey-equivalent` · lemma — Null master codes and summable slaloms have both Tukey morphisms
- `lem-good-clopen-family-for-summable-slaloms` · lemma — A good clopen family with finite intersections
- `lem-meagre-master-codes-below-summable-slaloms` · lemma — Meagre master codes Tukey-reduce to summable slaloms
- `lem-null-meagre-tukey-inequalities` · lemma — The null-to-meagre Tukey inequalities
- `lem-cichon-cross-and-bounding-inequalities` · lemma — Cross-ideal and eventual-domination arrows of Cichoń’s diagram
- `thm-cichons-diagram-inequalities` · theorem — Cichoń’s diagram inequalities
- `fs-zfc-determines-the-continuum-function` · false-statement — ZFC does not determine the continuum function

### `eastons-theorem-and-cardinal-invariants-of-the-continuum-examples` — Easton's Theorem and Cardinal Invariants of the Continuum: Examples and Counterexamples (4 item(s))

- `ex-countable-decreasing-family-has-a-pseudointersection` · example — A diagonal pseudointersection of a countable tower prefix
- `ex-ch-collapses-classical-cardinal-invariants` · example — Under CH the listed classical invariants equal aleph one
- `ex-easton-two-regular-cardinal-pattern` · example — A two-coordinate Easton pattern
- `ex-ma-model-null-meagre-additivity-equals-continuum` · example — MA iteration computes null and meagre additivity

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `frontier-35-ten-categories`

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
