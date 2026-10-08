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
group work, `research/frontier-42-coxeter-32-alpha-groups.json` is the assignment: it permits at
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

run: frontier-42-coxeter-32
role: alpha-group-read
label: b
covers: b

# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **2**, **7**, **9**: 3 A/B pair(s), 6 page(s), 26 item(s).

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
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems` | A | coxeter-groups | 1708 | `tensor-coherence-and-algebraic-descent`, `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`, `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems` |
| 2 | `coxeter-presentations-exchange-and-reduced-word-theorems-examples` | B | coxeter-groups | 1709 | `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections` | A | coxeter-groups | 1730 | `real-forms-and-reflection-geometry`, `coxeter-presentations-exchange-and-reduced-word-theorems` |
| 7 | `canonical-roots-signs-and-faithful-reflections-examples` | B | coxeter-groups | 1731 | `canonical-roots-signs-and-faithful-reflections`, `free-products-and-amalgamation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers` | A | coxeter-groups | 1734 | `canonical-roots-signs-and-faithful-reflections`, `hilbert-space-geometry-and-riesz-representation` |
| 9 | `tits-cones-chambers-and-parabolic-stabilizers-examples` | B | coxeter-groups | 1735 | `tits-cones-chambers-and-parabolic-stabilizers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coxeter-presentations-exchange-and-reduced-word-theorems` — Coxeter Presentations, Exchange, and Reduced Word Theorems (6 item(s))

- `def-hh-coxeter-matrix-word-group-and-length` · definition — Coxeter matrices, the presented Coxeter group, reduced words, length, and standard parabolic subgroups
- `def-hh-geometric-coxeter-representation-and-roots` · definition — The geometric representation on the simple-root basis over a common splitting field, and the root set
- `lem-hh-dihedral-root-recurrence-and-root-sign` · lemma — The rank-two block computation, exact dihedral orders, the signed reflection action, and ambient reducedness
- `thm-hh-coxeter-exchange-deletion-and-faithfulness` · theorem — Length parity, exchange, two-letter deletion, and faithfulness of the signed reflection action
- `thm-hh-matsumoto-reduced-word-theorem` · theorem — Matsumoto's theorem: braid connectivity of reduced expressions, with singleton detection in dihedral subgroups
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` · theorem — Support, intrinsic parabolic presentations, minimal coset representatives and length additivity, with the type-A identification

### `coxeter-presentations-exchange-and-reduced-word-theorems-examples` — Coxeter Presentations, Exchange, and Reduced Word Theorems — Examples (5 item(s))

- `ex-hh-rank-one-reduced-words` · example — Reduced words in rank one
- `ex-hh-finite-dihedral-reduced-words` · example — Reduced words and lengths in a finite dihedral group
- `ex-hh-exchange-deletion-on-a-nonreduced-word` · example — A nonreduced word deleted by its repeated prefix reflection, and an exchange step
- `ex-hh-type-a-reduced-words-and-inversions` · example — Type-A reduced words and inversion numbers in $S_3$
- `ex-hh-minimal-representatives-for-s2-in-s3` · example — Minimal coset representatives of $S_2$ in $S_3$

### `canonical-roots-signs-and-faithful-reflections` — Canonical Roots, Signs, and Faithful Reflections (5 item(s))

- `lem-cg-rank-two-prefix-and-chamber-length-induction` · lemma — The rank-two half-space alternative and the chamber-length induction $(P_n)$, $(Q_n)$
- `thm-cg-root-sign-and-simple-reflection-positivity` · theorem — Root sign coherence and the action of simple reflections on positive roots
- `thm-cg-root-length-criterion-and-faithfulness` · theorem — The root-length criterion and faithfulness of the canonical reflection representation
- `def-cg-geometric-inversion-set` · definition — The geometric inversion set $N(w)$ of a Coxeter element and its step recursion
- `thm-cg-root-inversion-formulas-and-strong-exchange` · theorem — The root-reflection dictionary, the inversion-set formula, and strong exchange

### `canonical-roots-signs-and-faithful-reflections-examples` — Canonical Roots, Signs, and Faithful Reflections — Examples (3 item(s))

- `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity` · example — Roots, inversions and chamber images in $I_2(5)$, $A_2$ and infinite dihedral type
- `ex-cg-indefinite-form-admits-faithful-reflection-representation` · example — An indefinite Coxeter form with a faithful canonical reflection representation
- `ex-cg-mixed-sign-vector-is-not-a-root` · example — A vector with mixed signs is not a root, while every root has a sign

### `tits-cones-chambers-and-parabolic-stabilizers` — Tits Cones, Chambers, and Parabolic Stabilizers (4 item(s))

- `def-cg-tits-cone-and-fundamental-chamber` · definition — The Tits cone, its interior, and the negative-root set of a functional
- `thm-cg-tits-cone-finite-negativity-and-convexity` · theorem — The finite-negativity criterion, the reduction step, and convexity of the Tits cone
- `thm-cg-dual-chamber-intersections-and-point-stabilizers` · theorem — Chamber collisions, point stabilizers, and the intersection rule
- `thm-cg-tits-cone-interior-and-local-finiteness` · theorem — The interior of the Tits cone, finite parabolic stabilizers, and local finiteness

### `tits-cones-chambers-and-parabolic-stabilizers-examples` — Tits Cones, Chambers, and Parabolic Stabilizers — Examples (3 item(s))

- `ex-cg-tits-cone-of-infinite-dihedral-type` · example — The Tits cone of infinite dihedral type: interior, boundary, and stabilizers
- `ex-cg-chamber-face-stabilizers-in-a2` · example — Chamber faces and their stabilizers in $A_2$
- `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` · example — A point outside the Tits cone with infinite stabilizer

## Your seams

Your pages depend on another group's:

- `coxeter-presentations-exchange-and-reduced-word-theorems` requires `tensor-coherence-and-algebraic-descent` (group a, batch 1)
- `canonical-roots-signs-and-faithful-reflections` requires `real-forms-and-reflection-geometry` (group c, batch 4)

Another group's pages depend on yours:

- `generic-coxeter-hecke-algebras-and-the-standard-basis` (group a) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `real-forms-and-reflection-geometry` (group c) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `parabolic-subgroups-and-double-coset-geometry` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `bruhat-subword-order-and-lifting` (group f) requires your `canonical-roots-signs-and-faithful-reflections`
- `finite-coxeter-diagrams-and-complete-classification` (group h) requires your `tits-cones-chambers-and-parabolic-stabilizers`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `canonical-roots-signs-and-faithful-reflections`
- `heaps-commutation-classes-and-fully-commutative-elements` (group k) requires your `coxeter-presentations-exchange-and-reduced-word-theorems`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-42-coxeter-32`

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
