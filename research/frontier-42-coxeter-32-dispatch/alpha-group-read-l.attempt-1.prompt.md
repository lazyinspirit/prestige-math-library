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
label: l
covers: l

# Step 6 Alpha group reader — read-only digest — group **l**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **24**, **27**: 2 A/B pair(s), 4 page(s), 24 item(s).

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
| 24 | `affine-reflections-coroot-translations-and-alcoves` | A | coxeter-groups | 1764 | `crystallographic-root-lattices-and-weyl-group-interfaces`, `real-forms-and-reflection-geometry`, `homotopy-and-homotopy-equivalence`, `simplicial-subdivision-and-simplicial-approximation`, `root-systems-dynkin-diagrams-and-cartan-killing-classification` |
| 24 | `affine-reflections-coroot-translations-and-alcoves-examples` | B | coxeter-groups | 1765 | `affine-reflections-coroot-translations-and-alcoves` |
| 27 | `affine-coxeter-diagrams-and-semidefinite-classification` | A | coxeter-groups | 1770 | `finite-coxeter-diagrams-and-complete-classification`, `affine-reflections-coroot-translations-and-alcoves` |
| 27 | `affine-coxeter-diagrams-and-semidefinite-classification-examples` | B | coxeter-groups | 1771 | `affine-coxeter-diagrams-and-semidefinite-classification`, `trigonometric-and-oscillatory-examples-in-one-variable` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `affine-reflections-coroot-translations-and-alcoves` — Affine Reflections, Coroot Translations, and Alcoves (7 item(s))

- `def-cg-affine-root-hyperplane-reflection-and-alcove` · definition — Affine root hyperplanes, coroot translations, alcoves, and the affine reflection group
- `lem-cg-affine-reflection-identities-and-local-finiteness` · lemma — Affine reflections: translation form, involutivity, local finiteness, and $W_a=Q^\vee\rtimes W$
- `lem-cg-highest-root-and-fundamental-alcove` · lemma — Highest root dominance and the fundamental alcove
- `lem-cg-affine-alcove-separation-and-facet-types` · lemma — Alcove separation, facet reflections, panel types, and triviality of the fundamental alcove stabilizer
- `lem-cg-affine-point-stabilizers-and-vertex-residues` · lemma — Point stabilizers, vertex residues, and rank-two boundary words
- `lem-cg-affine-generic-gallery-paths-and-disk-moves` · lemma — Generic galleries, boundary-fixed disks, and the gallery-move calculus
- `thm-cg-affine-alcove-transitivity-presentation-and-length` · theorem — Alcove transitivity, the affine Coxeter presentation, and the length function

### `affine-reflections-coroot-translations-and-alcoves-examples` — Affine Reflections, Coroot Translations, and Alcoves — Examples (4 item(s))

- `ex-cg-a1-affine-line-alcoves-and-translations` · example — The $A_1$ affine line: alcoves, translations, and the root versus coroot lattice
- `ex-cg-a2-and-b2-alcove-shapes-and-corner-data` · example — The $A_2$ and $B_2$ fundamental alcoves: coordinates, corner vectors, and facet types
- `ex-cg-root-versus-coroot-translation-lattices` · example — Root versus coroot translation lattices: A2, B2 and two conventions
- `ex-cg-extended-affine-weyl-group-and-alcove-stabilizers` · example — The extended affine Weyl group and non-trivial alcove stabilizers

### `affine-coxeter-diagrams-and-semidefinite-classification` — Affine Coxeter Diagrams and Semidefinite Classification (8 item(s))

- `lem-cg-similar-euclidean-simplices-from-shared-facet-normal-gram` · lemma — Euclidean simplices with the same facet-normal Gram matrix are similar facet to facet
- `def-cg-irreducible-affine-coxeter-type` · definition — Irreducible affine Coxeter type: the corank-one form, the radical quotient, and the affine slice
- `lem-cg-positive-radical-and-affine-gram-exclusions` · lemma — Positive radical, corank one, positive definiteness of proper submatrices, and domination exclusions
- `def-cg-standard-affine-diagrams` · definition — The standard affine diagrams A-tilde, B-tilde, C-tilde, D-tilde, E-tilde, F-tilde and G-tilde
- `lem-cg-affine-slice-simplex-and-wall-reflections` · lemma — The affine slice: faithful isometric action, the alcove simplex, and its facet reflections
- `lem-cg-affine-type-crystallographic-alcove-diagrams` · lemma — Crystallographic alcove diagrams: the affine list realized by Weyl types A–G
- `lem-cg-affine-diagram-enumeration` · lemma — Enumeration of the connected positive semidefinite corank-one diagrams
- `thm-cg-affine-gram-classification-and-euclidean-realization` · theorem — Classification of affine Coxeter diagrams and their Euclidean simplex realization

### `affine-coxeter-diagrams-and-semidefinite-classification-examples` — Affine Coxeter Diagrams and Semidefinite Classification — Examples (5 item(s))

- `ex-cg-reducible-semidefinite-forms-are-factorwise` · example — Reducible positive semidefinite forms: factorwise treatment and the square alcove
- `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral` · example — The A-tilde 1 infinity edge, separated from the finite dihedral families and from the 4-edge
- `ex-cg-a-tilde-2-radical-vector-and-affine-slice` · example — The radical vector of A-tilde 2 and its Euclidean slice
- `ex-cg-b-tilde-versus-c-tilde-diagrams` · example — B-tilde versus C-tilde: the n=2 coincidence and the duality behind the difference
- `ex-cg-indefinite-coxeter-form-is-not-affine` · example — An indefinite Coxeter form: infinite, but not of affine type

## Your seams

Your pages depend on another group's:

- `affine-reflections-coroot-translations-and-alcoves` requires `crystallographic-root-lattices-and-weyl-group-interfaces` (group h, batch 21)
- `affine-reflections-coroot-translations-and-alcoves` requires `real-forms-and-reflection-geometry` (group c, batch 4)
- `affine-coxeter-diagrams-and-semidefinite-classification` requires `finite-coxeter-diagrams-and-complete-classification` (group h, batch 13)

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
