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
label: 4
covers: 4

# Step 4 batch reviewer — batch **4**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **4**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["4"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 4 | `ordinals-and-transfinite-recursion` | A | linear-independence-bases-and-dimension |
| 4 | `ordinals-and-transfinite-recursion-examples` | B | ordinals-and-transfinite-recursion |

## Your content, in full

### `ordinals-and-transfinite-recursion` — Ordinals, Cardinals, and Transfinite Recursion

- `def-well-order` · definition — Well-order and well-ordered set
- `def-order-isomorphism` · definition — Order embedding and order isomorphism
- `def-initial-segment` · definition — Initial segment of a well-order
- `thm-transfinite-induction` · theorem — Transfinite induction
- `thm-transfinite-recursion` · theorem — Transfinite recursion
- `lem-well-order-rigid` · lemma — Rigidity of well-orders
- `lem-well-order-comparability` · lemma — Comparability of well-orders
- `def-ordinal` · definition — Ordinal (von Neumann)
- `lem-ordinal-basics` · lemma — Basic closure properties of ordinals
- `lem-ordinal-trichotomy` · lemma — Trichotomy and well-ordering of the ordinals
- `thm-burali-forti` · theorem — Burali-Forti: there is no set of all ordinals
- `thm-mostowski-collapse` · theorem — Every well-order has a unique order type
- `def-limit-ordinal` · definition — Successor and limit ordinals
- `lem-omega-least-limit-ordinal` · lemma — $\omega$ is the least limit ordinal
- `thm-hartogs` · theorem — Hartogs: an ordinal that does not inject into a given set
- `thm-well-ordering-theorem` · theorem — The well-ordering theorem
- `thm-well-ordering-implies-ac` · theorem — The well-ordering theorem implies the Axiom of Choice
- `cor-ac-iff-well-ordering` · corollary — Choice, Zorn and well-ordering are equivalent
- `def-cardinal` · definition — Cardinal (initial ordinal) and cardinality
- `fs-ordinals-form-a-set` · false-statement — FALSE: the ordinals form a set
- `fs-transfinite-induction-needs-choice` · false-statement — FALSE: transfinite induction and recursion need the Axiom of Choice
- `rem-choice-ledger` · remark — The proved choice ledger: hypotheses, equivalences, and upper bounds

### `ordinals-and-transfinite-recursion-examples` — Ordinals, Cardinals, and Transfinite Recursion: Examples and Counterexamples

- `ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega` · example — The finite von Neumann ordinals, and $\omega$ as the least limit ordinal
- `cex-a-set-of-ordinals-that-is-not-transitive` · counterexample — A set of ordinals that is not an ordinal: $\{0,1,\omega\}$
- `ex-lexicographic-orders-on-products-of-naturals` · example — Lexicographic orders: $\{0,1\}\times\mathbb{N}$ and $\mathbb{N}\times\mathbb{N}$
- `ex-the-one-point-extension-of-a-well-order` · example — The one-point extension of a well-order, and $\omega$ with a new top element
- `cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order` · counterexample — The lexicographic order on $\mathbb{Z}\times\mathbb{Z}$ is not a well-order
- `ex-an-explicit-well-ordering-of-the-integers` · example — An explicit well-ordering of the integers: $0\prec1\prec-1\prec2\prec-2\prec\cdots$
- `cex-the-shift-is-a-nonidentity-order-automorphism` · counterexample — The shift $x\mapsto x+1$ is a nonidentity order automorphism of $(\mathbb{Z},<)$
- `ex-the-mostowski-collapse-of-a-finite-chain` · example — The Mostowski collapse of a finite chain computes its order type
- `cex-the-collapsing-recursion-has-no-solution-on-the-integers` · counterexample — The collapsing recursion has no solution on $(\mathbb{Z},<)$
- `ex-the-hartogs-number-of-a-finite-set` · example — The Hartogs number of an $n$-element set is $n^{+}$
- `ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal` · example — The Hartogs number of $\omega$ is a limit ordinal above $\omega$
- `cex-transfinite-induction-fails-when-the-minimum-is-exempted` · counterexample — Transfinite induction fails if the least element is exempted from the hypothesis

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
No dependency edge crosses this batch boundary.
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
