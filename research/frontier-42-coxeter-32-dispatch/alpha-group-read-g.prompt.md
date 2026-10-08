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
label: g
covers: g

# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **11**, **15**: 2 A/B pair(s), 4 page(s), 26 item(s).

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
| 11 | `cat-comparison-link-criteria-and-local-globalization` | A | coxeter-groups | 1738 | `spherical-simplex-metrics-angular-links-and-cones`, `homotopy-and-homotopy-equivalence`, `covering-spaces-and-lifting`, `further-trigonometric-identities-and-inverses`, `hilbert-space-geometry-and-riesz-representation`, `foundations-of-the-real-numbers` |
| 11 | `cat-comparison-link-criteria-and-local-globalization-examples` | B | coxeter-groups | 1739 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease` | A | coxeter-groups | 1746 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease-examples` | B | coxeter-groups | 1747 | `short-loop-polygons-and-quantitative-energy-decrease` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cat-comparison-link-criteria-and-local-globalization` — CAT Comparison, Link Criteria, and Local Globalization (9 item(s))

- `def-cg-cat-zero-cat-one-and-local-geodesic` · definition — Comparison triangles, the CAT(0) and CAT(1) inequalities, local CAT, local geodesics and round circles
- `def-cg-comparison-angle-and-alexandrov-angle` · definition — Comparison angles of hinges, model triangle angles, and the Alexandrov upper angle
- `lem-cg-comparison-convexity-and-model-spaces` · lemma — Comparison triangles in the Euclidean plane and the round sphere, model spaces, and CAT(0) and CAT(1) consequences
- `lem-cg-alexandrov-comparison-triangle-gluing` · lemma — Alexandrov comparison: straightening a hinge, gluing comparison triangles, and patchwork
- `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` · theorem — Berestovskii's cone criterion and the polyhedral link criterion
- `lem-cg-local-geodesic-endpoint-stability` · lemma — Endpoint stability for local geodesics in complete locally CAT(0) spaces
- `lem-cg-local-geodesic-continuation-and-path-space-covering` · lemma — The space of local geodesics, its length metric, and the covering criterion for local isometries
- `thm-cg-complete-simply-connected-local-cat-zero-globalization` · theorem — Complete, simply connected, locally CAT(0) length spaces are CAT(0)
- `thm-cg-compact-local-cat-one-short-circle-criterion` · theorem — Compact geodesic locally CAT(1) spaces are CAT(1) exactly when they contain no short circle

### `cat-comparison-link-criteria-and-local-globalization-examples` — CAT Comparison, Link Criteria, and Local Globalization — Examples (4 item(s))

- `ex-cg-intervals-and-metric-trees-are-cat-zero` · example — Intervals and metric trees are CAT(0)
- `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one` · example — The unit circle is CAT(1) at the strict perimeter boundary
- `ex-cg-short-circle-fails-cat-one` · example — A circle of circumference $\ell<2\pi$ fails CAT(1)
- `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` · example — A complete locally CAT(0) circle whose fundamental group prevents global CAT(0)

### `short-loop-polygons-and-quantitative-energy-decrease` — Short Loop Polygons and Quantitative Energy Decrease (9 item(s))

- `def-cg-short-loop-homotopy-and-nonshrinkability` · definition — Short loops, the uniform-plus-length topology, short-loop homotopies, and nonshrinkability
- `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` · definition — Uniform local radii, cyclic small-mesh polygons, mesh, length, energy, the midpoint operation and the zero-limit basin
- `lem-cg-cat-one-short-and-closed-local-geodesics` · lemma — Short local geodesics in a CAT(1) space are geodesics, and closed local geodesics have length at least $2\pi$
- `lem-cg-polygon-midpoint-drop-and-equality` · lemma — Existence of the uniform radius, continuity of the midpoint operation, the energy drop, its equality case, and convergence of zero-limit polygons
- `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` · lemma — The spherical radius estimate, the quadrilateral separation constant, and the finite midpoint-operation comparison disk
- `lem-cg-local-cat-one-products-from-sine-comparison` · lemma — Local CAT(1) of the $l^2$ product from a model $S^2\times S^2$ sine-comparison calculation
- `lem-cg-comparison-product-perturbation-and-degenerate-limits` · lemma — Perturbation by a Euclidean regular polygon: comparison-disk bounds for degenerate comparison triangles
- `lem-cg-uniform-energy-decrement-and-short-class-closedness` · lemma — The uniform energy decrement on the basin, bounded iteration, and the closedness of the basin inside the short polygon space
- `lem-cg-bowditch-quantitative-short-loop-control` · lemma — Polygon transfer, the basin as the shrinkable class, and the short-loop criterion

### `short-loop-polygons-and-quantitative-energy-decrease-examples` — Short Loop Polygons and Quantitative Energy Decrease — Examples (4 item(s))

- `ex-cg-midpoint-iteration-on-a-spherical-triangle` · example — Midpoint iteration on a small equilateral spherical triangle contracts geometrically to its centre
- `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` · example — Equally spaced points on a metric circle: stationary energy and the equality case
- `ex-cg-null-homotopy-versus-short-loop-shrinkability` · example — Null-homotopy versus shrinkability through short loops on $S^2$ and on a short circle
- `ex-cg-zero-length-boundary-of-the-energy-criterion` · example — The zero-length boundary: constant tuples, collapsed edges and the degeneracy of the energy decrement at $L=0$

## Your seams

Your pages depend on another group's:

- `cat-comparison-link-criteria-and-local-globalization` requires `spherical-simplex-metrics-angular-links-and-cones` (group e, batch 8)

Another group's pages depend on yours:

- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `cat-comparison-link-criteria-and-local-globalization`
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `short-loop-polygons-and-quantitative-energy-decrease`

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
