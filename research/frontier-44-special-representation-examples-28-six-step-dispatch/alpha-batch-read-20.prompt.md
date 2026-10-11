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
your write scope. The engine refreshes the unified frontier ledger at mutable joins.

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
group work, `research/frontier-44-special-representation-examples-28-six-step-alpha-groups.json` is the assignment: it permits at
most the capacity-derived group count (currently 80), with at most three batches
per group and lowercase alphabetic labels (`a` through `z`, then `aa`). A group
writes only its own artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-5
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-5 dispatches also follow
`step5-adjudicator.md` or `step5-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Step 5, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-5 task ownership rules. Existing-item edits still require ordinary
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
not current coverage. Current Step-5 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


---

# This dispatch

run: frontier-44-special-representation-examples-28-six-step
role: alpha-batch-read
label: 20
covers: 20

# Step 4 batch reviewer — batch **20**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **20**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `projective-functors-and-the-soergel-functor-in-category-o` | A | soergel-intersection-forms-and-hodge-theory, category-o-finiteness-duality-and-blocks, projectives-standard-filtrations-and-bgg-reciprocity, finite-weyl-invariants-bruhat-and-kostant-harmonics, symmetric-polynomials, graded-bimodules-and-tensor-functors, lie-algebras-and-infinitesimal-group-schemes, unipotent-solvable-groups-and-borel-fixed-points, weyl-character-and-multiplicity-formulas |
| 20 | `projective-functors-and-the-soergel-functor-in-category-o-examples` | B | projective-functors-and-the-soergel-functor-in-category-o |

## Your content, in full

### `projective-functors-and-the-soergel-functor-in-category-o` — Projective Functors and the Soergel Functor in Category O

- `def-the-coinvariant-algebra-of-a-finite-weyl-group` · definition — The coinvariant algebra of a finite Weyl group
- `def-regular-integral-category-o-block-and-its-antidominant-weight` · definition — The regular integral block and its antidominant weight
- `lem-the-basic-weyl-invariant-degree-sum-is-the-number-of-positive-roots` · lemma — The sum of basic Weyl invariant degrees minus one counts positive roots
- `lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank` · lemma — Adjoint isotypic modules have the zero-weight rank
- `def-projective-functors-on-a-regular-integral-category-o-block` · definition — Projective functors on a regular integral block
- `lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle` · lemma — The coinvariant algebra is a complete intersection with one-dimensional socle
- `lem-the-harmonic-complement-of-the-coinvariant-algebra` · lemma — The harmonic complement of the coinvariant algebra
- `def-the-deformed-category-o-family-and-its-specializations` · definition — The deformed category O family over the Cartan symmetric algebra
- `lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain` · lemma — The nilpotent central fiber is reduced and integral
- `def-wall-crossing-functor-and-unit-counit` · definition — The wall-crossing functor and its unit and counit
- `thm-the-weyl-coinvariant-algebra-is-the-graded-regular-representation` · theorem — The coinvariant algebra is the graded regular representation of W
- `def-the-antidominant-projective-and-the-soergel-functor` · definition — The antidominant projective and the Soergel functor
- `thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules` · theorem — Duflo–Joseph g-finite endomorphisms of every Verma module
- `lem-wall-crossing-functors-act-on-standard-modules-by-the-two-step-extension` · lemma — Wall-crossing acts on standard modules by a two-step extension
- `prop-base-change-freeness-and-specialization-in-the-deformed-family` · proposition — Base change, freeness and specialization in the deformed family
- `lem-wall-crossing-functors-act-on-the-grothendieck-group-by-right-multiplication-by-one-plus-s` · lemma — The wall-crossing action on the Grothendieck group is multiplication by 1+s
- `lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label` · lemma — Wall-crossing compositions produce the projective with the top standard label
- `thm-lifting-of-indecomposable-projectives-to-the-deformed-family` · theorem — Lifting of indecomposable projectives to the deformed family
- `thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group` · theorem — Indecomposable projective functors are indexed by the Weyl group
- `lem-the-central-action-on-the-deformed-antidominant-projective` · lemma — The central action on the deformed antidominant projective
- `thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra` · theorem — The endomorphisms of the antidominant projective form the coinvariant algebra
- `thm-soergels-struktursatz-full-faithfulness-on-projectives` · theorem — Soergel's Struktursatz: the functor V is fully faithful on projectives
- `thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule` · theorem — Wall-crossing under the Soergel functor is tensoring with the coinvariant bimodule
- `thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules` · theorem — Indecomposable projectives correspond to indecomposable Soergel modules
- `prop-verma-flag-multiplicities-are-standard-filtration-ranks-under-v` · proposition — Verma-flag multiplicities are standard-filtration ranks under V

### `projective-functors-and-the-soergel-functor-in-category-o-examples` — Projective Functors and the Soergel Functor in Category O — Examples

- `ex-the-coinvariant-algebra-of-s-two-and-s-three-as-graded-regular-representations` · example — The coinvariant algebra of S_2 and S_3 as graded regular representations
- `ex-the-wall-crossing-functor-on-verma-modules-in-rank-one` · example — The wall-crossing functor on Verma modules in rank one
- `ex-the-class-map-and-wall-crossing-action-on-the-grothendieck-group-in-rank-two` · example — The class map and the wall-crossing action in rank two
- `cex-wall-crossing-functors-do-not-commute` · counterexample — Wall-crossing functors do not commute
- `ex-wall-crossing-on-projectives-in-the-sl-two-block` · example — Wall-crossing on the projectives in the sl_2 block
- `ex-the-soergel-functor-on-a-small-regular-block` · example — The Soergel functor on the small regular sl_2 block
- `cex-soergel-full-faithfulness-does-not-hold-on-all-category-o-objects` · counterexample — The Soergel functor is not fully faithful on all category-O objects

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `projective-functors-and-the-soergel-functor-in-category-o` requires `soergel-intersection-forms-and-hodge-theory`
- `the-kazhdan-lusztig-character-and-multiplicity-theorem` requires `projective-functors-and-the-soergel-functor-in-category-o`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


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
