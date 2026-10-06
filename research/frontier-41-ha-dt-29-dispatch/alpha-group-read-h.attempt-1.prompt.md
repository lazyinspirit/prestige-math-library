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
group work, `research/frontier-41-ha-dt-29-alpha-groups.json` is the assignment: it permits at
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

run: frontier-41-ha-dt-29
role: alpha-group-read
label: h
covers: h

# Step 6 Alpha group reader — read-only digest — group **h**, run `frontier-41-ha-dt-29`

- You are the read-only Step 6 Alpha group reader for batches **3**, **7**, **15**: 3 A/B pair(s), 6 page(s), 83 item(s).

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
| 3 | `handle-cancellation-slides-and-elementary-moves` | A | differential-topology | 533 | `sublevel-deformation-and-the-handle-attachment-theorem`, `handle-decompositions-duality-and-rearrangement`, `oriented-and-mod-two-intersection-numbers`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `vector-fields-flows-and-lie-derivatives`, `manifolds-with-boundary-collars-and-orientations`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 3 | `handle-cancellation-slides-and-elementary-moves-examples` | B | differential-topology | 534 | `handle-cancellation-slides-and-elementary-moves` |
| 7 | `vector-field-index-euler-characteristic-and-poincare-hopf` | A | differential-topology | 541 | `morse-critical-points-hessians-and-indices`, `morse-inequalities-and-the-handle-chain-complex`, `oriented-and-mod-two-intersection-numbers`, `intersection-pairings-self-intersection-and-euler-classes`, `vector-fields-flows-and-lie-derivatives`, `manifolds-with-boundary-collars-and-orientations`, `the-de-rham-theorem-and-degree`, `singular-chains-and-singular-homology`, `cw-complexes-and-cellular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `chern-weil-theory-and-characteristic-forms` |
| 7 | `vector-field-index-euler-characteristic-and-poincare-hopf-examples` | B | differential-topology | 542 | `vector-field-index-euler-characteristic-and-poincare-hopf` |
| 15 | `the-smooth-h-cobordism-theorem` | A | differential-topology | 561 | `handle-decompositions-duality-and-rearrangement`, `handle-cancellation-slides-and-elementary-moves`, `morse-inequalities-and-the-handle-chain-complex`, `oriented-and-mod-two-intersection-numbers`, `smooth-surgery-traces-and-handle-trading`, `the-whitney-trick-and-surgery-below-the-middle-dimension`, `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `the-fundamental-group` |
| 15 | `the-smooth-h-cobordism-theorem-examples` | B | differential-topology | 562 | `the-smooth-h-cobordism-theorem`, `pontryagin-thom-and-framed-cobordism` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `handle-cancellation-slides-and-elementary-moves` — Handle Cancellation Slides and Elementary Moves (19 item(s))

- `def-geometric-cancelling-handle-pair` · definition — Geometrically cancelling adjacent handle pair
- `lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type` · lemma — Isotopic attaching embeddings give diffeomorphic handle attachments
- `lem-transverse-complementary-spheres-have-product-charts` · lemma — Transverse submanifolds have product charts
- `lem-standard-complementary-pair-fills-an-n-ball` · lemma — The standard complementary pair fills a ball
- `lem-one-intersection-gives-the-standard-local-cancelling-model` · lemma — One transverse intersection gives the standard local cancelling model
- `thm-handle-cancellation` · theorem — Handle cancellation
- `thm-creation-of-a-cancelling-handle-pair` · theorem — Creation of a cancelling handle pair
- `lem-embedded-bands-joining-two-framed-spheres-exist` · lemma — Embedded bands joining two framed spheres exist
- `def-handle-slide-of-one-k-handle-over-another` · definition — Handle slide of one k-handle over another
- `lem-handle-slides-preserve-the-relative-diffeomorphism-type` · lemma — Handle slides preserve the relative diffeomorphism type
- `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` · lemma — Handle slides act by elementary basis change on handle chains
- `def-attaching-belt-intersection-matrix-of-adjacent-index-handles` · definition — Attaching-belt intersection matrix of adjacent-index handles
- `lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix` · lemma — Geometric cancellation is a unit entry in the handle matrix
- `prop-elementary-matrix-operations-are-realized-by-handle-slides` · proposition — Elementary matrix operations are realized by handle slides
- `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation` · lemma — Algebraic cancellation does not yet give geometric cancellation
- `prop-morse-cancellation-criterion-via-a-unique-connecting-orbit` · proposition — Morse cancellation criterion via a unique connecting orbit
- `lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood` · lemma — The cancellation modification is supported in a trajectory neighbourhood
- `rem-handle-slides-are-not-handle-cancellations` · remark — Handle slides are not handle cancellations
- `rem-elementary-moves-do-not-constitute-full-cerf-theory-here` · remark — Elementary moves do not constitute full Cerf theory here

### `handle-cancellation-slides-and-elementary-moves-examples` — Handle Cancellation Slides and Elementary Moves — Examples (5 item(s))

- `ex-cancelling-zero-one-handle-pair` · example — A cancelling zero-one handle pair
- `ex-cancelling-one-two-handle-pair-on-a-surface` · example — A cancelling one-two handle pair on a surface
- `ex-a-handle-slide-realizes-an-elementary-row-operation` · example — A handle slide realizes an elementary row operation
- `cex-algebraic-intersection-one-with-three-geometric-points` · counterexample — Algebraic intersection one with three geometric points
- `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel` · counterexample — Adjacent-index handles with zero intersection do not cancel

### `vector-field-index-euler-characteristic-and-poincare-hopf` — Vector Field Index Euler Characteristic and Poincare Hopf (27 item(s))

- `def-euler-characteristic-of-a-compact-manifold` · definition — Euler characteristic of a compact manifold
- `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` · proposition — Finiteness and additivity of the Euler characteristic
- `def-reduced-degree-into-the-zero-sphere` · definition — The reduced degree of a map into the 0-sphere
- `lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative` · lemma — Reduced degree into the 0-sphere is homotopy invariant and multiplicative
- `def-isolated-zero-and-local-index-of-a-vector-field` · definition — Isolated zero and local index of a vector field
- `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` · lemma — The local index is independent of chart, ball and trivialization
- `def-nondegenerate-zero-of-a-vector-field` · definition — Nondegenerate zero of a vector field
- `thm-index-of-a-nondegenerate-vector-field-zero` · theorem — The index of a nondegenerate vector-field zero
- `lem-local-index-is-additive-under-a-transverse-perturbation` · lemma — The local index is additive under a transverse perturbation
- `prop-vector-field-zero-index-is-a-zero-section-intersection-number` · proposition — The index of a zero is its zero-section intersection number
- `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension` · lemma — Negation scales the local index by $(-1)^n$
- `lem-index-sum-of-an-outward-field-is-the-gauss-degree` · lemma — The index sum of an outward field is the Gauss degree
- `thm-poincare-hopf-for-closed-manifolds` · theorem — Poincare-Hopf for closed manifolds
- `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic` · corollary — A nowhere-zero vector field forces zero Euler characteristic
- `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda` · corollary — A Morse gradient zero contributes $(-1)^\lambda$ to the index
- `cor-morse-critical-point-sum-is-the-euler-characteristic` · corollary — The Morse critical-point sum is the Euler characteristic
- `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` · corollary — Closed odd-dimensional manifolds have zero Euler characteristic
- `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball` · lemma — A degree-zero sphere map extends over the ball without zeros
- `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball` · lemma — Two points avoiding a finite set lie in a common embedded ball
- `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball` · lemma — Opposite-index nondegenerate zeros cancel in a ball
- `lem-reflection-of-an-outward-field-extends-over-the-double` · lemma — The reflection of an outward field extends over the double
- `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold` · lemma — The index sum of an outward field on an even-dimensional manifold
- `thm-poincare-hopf-with-outward-pointing-boundary` · theorem — Poincare-Hopf with outward-pointing boundary
- `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` · corollary — The Euler number of the tangent bundle is the Euler characteristic
- `thm-converse-poincare-hopf-for-nowhere-zero-fields` · theorem — Converse Poincare-Hopf for nowhere-zero fields
- `lem-closed-connected-one-manifolds-are-circles` · lemma — Nonempty closed connected 1-manifolds are circles
- `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` · remark — The outward boundary hypothesis cannot be replaced by nonzero on the boundary

### `vector-field-index-euler-characteristic-and-poincare-hopf-examples` — Vector Field Index Euler Characteristic and Poincare Hopf — Examples (6 item(s))

- `ex-hairy-ball-theorem-for-even-spheres` · example — The hairy-ball theorem for even spheres
- `ex-a-nowhere-zero-vector-field-on-an-odd-sphere` · example — A nowhere-zero vector field on an odd sphere
- `ex-source-sink-and-saddle-indices-on-a-surface` · example — Source, sink and saddle indices on a surface
- `ex-outward-radial-field-on-a-disk` · example — The outward radial field on a disk
- `cex-an-inward-radial-field-violates-the-outward-boundary-formula` · counterexample — An inward radial field violates the outward boundary formula
- `cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional` · counterexample — An interval has nonzero Euler characteristic despite being odd-dimensional

### `the-smooth-h-cobordism-theorem` — The Smooth H Cobordism Theorem (21 item(s))

- `def-h-cobordism` · definition — h-Cobordism
- `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` · lemma — Relative homology of an h-cobordism vanishes at both ends
- `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` · proposition — h-Cobordisms admit adapted ordered handle decompositions
- `prop-relative-handle-chain-complex-of-a-cobordism` · proposition — The relative handle chain complex computes $H_*(W,M_0)$ and has the intersection matrix as its differential
- `lem-handle-elimination-by-trading-a-pair` · lemma — Elimination lemma: trading a handle for a handle two indices higher
- `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` · lemma — Zero- and one-handles are eliminated in a simply connected h-cobordism
- `lem-duality-eliminates-top-and-cotop-handles` · lemma — Duality eliminates the top and codimension-one handles
- `lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group` · lemma — Belt-sphere complements in low handle levels preserve the fundamental group
- `lem-homology-lemma-realizes-handle-bases-by-isotopy` · lemma — Homology lemma: a handle-basis class is realized by a sphere meeting the belt sphere once
- `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation` · lemma — Modification lemma: prescribed class changes by isotopy of an embedded boundary sphere
- `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices` · lemma — Trading concentrates a simply connected h-cobordism in two adjacent middle indices
- `def-middle-handle-intersection-matrix-of-an-h-cobordism` · definition — The middle-handle intersection matrix of an h-cobordism
- `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` · lemma — Acyclicity makes the simply connected middle-handle matrix unimodular
- `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity` · lemma — Handle slides reduce a unimodular middle-handle matrix to the identity
- `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` · lemma — The Whitney trick realizes algebraic middle-handle cancellation geometrically
- `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` · lemma — Middle-handle pairs with one geometric intersection cancel
- `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` · theorem — A cobordism with no handles is a product
- `thm-smooth-simply-connected-h-cobordism-theorem` · theorem — The smooth simply connected h-cobordism theorem
- `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` · corollary — High-dimensional simply connected h-cobordant manifolds are diffeomorphic
- `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold` · corollary — Homotopy spheres of dimension at least five bounding a contractible manifold are standard spheres
- `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` · remark — The h-cobordism theorem does not cover boundary dimension four

### `the-smooth-h-cobordism-theorem-examples` — The Smooth H Cobordism Theorem — Examples (5 item(s))

- `ex-a-product-cobordism-is-an-h-cobordism` · example — A product cobordism is an h-cobordism
- `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` · example — An elementary cancelling handle pair gives a product cobordism
- `cex-a-homology-cobordism-need-not-be-an-h-cobordism` · counterexample — A homology cobordism need not be an h-cobordism
- `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` · counterexample — A four-dimensional boundary case is outside the smooth h-cobordism theorem
- `ex-the-handle-matrix-of-a-simple-acyclic-presentation` · example — The handle matrix of a simple acyclic presentation

## Your seams

Your pages depend on another group's:

- `handle-cancellation-slides-and-elementary-moves` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)
- `vector-field-index-euler-characteristic-and-poincare-hopf` requires `morse-inequalities-and-the-handle-chain-complex` (group f, batch 4)
- `vector-field-index-euler-characteristic-and-poincare-hopf` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `the-smooth-h-cobordism-theorem` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)
- `the-smooth-h-cobordism-theorem` requires `morse-inequalities-and-the-handle-chain-complex` (group f, batch 4)
- `the-smooth-h-cobordism-theorem` requires `smooth-surgery-traces-and-handle-trading` (group f, batch 13)
- `the-smooth-h-cobordism-theorem` requires `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j, batch 14)
- `the-smooth-h-cobordism-theorem-examples` requires `pontryagin-thom-and-framed-cobordism` (group i, batch 9)

Another group's pages depend on yours:

- `exotic-smooth-structures-and-milnor-spheres` (group d) requires your `the-smooth-h-cobordism-theorem`
- `exotic-smooth-structures-and-milnor-spheres` (group d) requires your `vector-field-index-euler-characteristic-and-poincare-hopf`
- `fixed-point-index-and-the-lefschetz-theorem` (group e) requires your `vector-field-index-euler-characteristic-and-poincare-hopf`
- `morse-inequalities-and-the-handle-chain-complex` (group f) requires your `handle-cancellation-slides-and-elementary-moves`
- `smooth-surgery-traces-and-handle-trading` (group f) requires your `handle-cancellation-slides-and-elementary-moves`
- `whitehead-torsion-and-the-s-cobordism-theorem` (group i) requires your `the-smooth-h-cobordism-theorem`
- `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j) requires your `handle-cancellation-slides-and-elementary-moves`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-41-ha-dt-29`

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
