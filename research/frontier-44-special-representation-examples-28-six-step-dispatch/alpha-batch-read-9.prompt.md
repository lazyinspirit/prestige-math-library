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
label: 9
covers: 9

# Step 4 batch reviewer — batch **9**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **9**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["9"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 9 | `quantum-affine-type-a-and-level-one-fock-space` | A | tensor-product-crystals-and-highest-weight-crystal-uniqueness, balanced-triples-and-global-crystal-bases, young-diagrams-tableaux-and-permutation-modules |
| 9 | `quantum-affine-type-a-and-level-one-fock-space-examples` | B | quantum-affine-type-a-and-level-one-fock-space |

## Your content, in full

### `quantum-affine-type-a-and-level-one-fock-space` — Quantum Affine Type A and Level-One Fock Space

- `def-cyclic-affine-type-a-cartan-datum` · definition — The cyclic affine type A Cartan datum and its residues
- `def-the-level-one-vector-representation-its-affinization-and-energy-function` · definition — The level-zero vector representation, its affinization and the level-one crystal energy
- `def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation` · definition — The affine Hecke algebra and its commuting action on tensor powers of the vector representation
- `lem-integrable-rank-one-actions-force-the-quantum-serre-relations` · lemma — Integrable rank-one actions force the quantum Serre sums
- `lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel` · lemma — The q-antisymmetrizer splits the tensor power and its kernel is the sum of the Hecke kernels
- `lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis` · lemma — The vector representation has a perfect crystal of level one and a lower global basis
- `def-finite-q-wedge-space-and-normal-ordering-relations` · definition — The finite q-wedge space and the normal-ordering relations
- `lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel` · lemma — The q-wedge relations coincide with the type-A energy braiding kernel
- `thm-normally-ordered-q-wedges-form-a-basis` · theorem — Normally ordered q-wedges form a basis for every finite wedge length
- `def-semi-infinite-q-wedge-fock-space-and-q-adic-topology` · definition — The semi-infinite q-wedge Fock space and its q-adic topology
- `lem-the-fock-space-tail-estimates-give-q-adic-vanishing-and-finiteness` · lemma — Tail estimates: q-adic vanishing against the vacuum and finiteness of the weight strings
- `lem-semi-infinite-wedges-are-indexed-by-partitions-and-give-node-action-formulas` · lemma — Semi-infinite wedges are indexed by partitions and the action gives the node formulas
- `def-level-one-partition-fock-space-and-node-residues` · definition — The level-one partition Fock space and node residues
- `lem-the-node-count-is-the-level-one-cartan-pairing` · lemma — The addable-minus-removable node count is the level-one Cartan pairing
- `def-the-node-order-and-n-i-exponents-for-fock-space` · definition — The node order and the signed exponents $N_i^l$ and $N_i^r$
- `lem-fixed-residue-node-cubes-realize-fock-i-strings-and-crystal-lattices` · lemma — Fixed-residue node cubes realize the actual Fock strings
- `def-good-and-cogood-nodes-by-residue-signature-reduction` · definition — Good and cogood nodes by residue-signature reduction
- `thm-the-fock-space-node-formulas-satisfy-the-quantum-affine-relations` · theorem — The Fock space node formulas satisfy the quantum affine relations
- `prop-the-empty-partition-generates-an-integrable-highest-weight-submodule` · proposition — The empty partition generates an integrable highest weight submodule of highest weight $\Lambda_0$
- `thm-the-crystal-of-level-one-fock-space-is-the-good-node-partition-graph` · theorem — The crystal of the level-one Fock space is the good-node partition graph
- `thm-the-semi-infinite-quantum-group-action-is-well-defined-and-integrable` · theorem — The semi-infinite action on the Fock space is well defined and the Fock space is an integrable $U_q(\\widehat{\\mathfrak{sl}}_e)$-module
- `thm-the-empty-component-is-the-highest-weight-crystal-b-lambda-zero` · theorem — The empty component is the highest weight crystal $B(\\Lambda_0)$
- `def-regular-partition-label-convention-and-mullineux-crystal-involution` · definition — The regular-partition label convention and the Mullineux crystal involution
- `thm-the-basic-representation-global-basis-is-unitriangular-in-the-partition-basis` · theorem — The basic representation global basis is unitriangular in the partition basis

### `quantum-affine-type-a-and-level-one-fock-space-examples` — Quantum Affine Type A and Level-One Fock Space — Examples

- `ex-level-one-fock-node-actions-for-partitions-up-to-three` · example — Node actions for partitions of size at most three
- `ex-the-affine-a-one-double-edge-serre-cancellation-on-partitions` · example — The double-edge Serre cancellation in affine $A_1$ on partitions
- `ex-good-node-crystal-component-for-equals-three` · example — The good-node crystal component of the empty partition for $e=3$
- `cex-the-whole-partition-fock-space-is-not-the-basic-representation` · counterexample — The whole partition Fock space is not the basic representation
- `ex-unitriangular-global-basis-elements-in-small-rank` · example — Unitriangular global basis elements at small rank

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-affine-type-a-and-level-one-fock-space` requires `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
- `quantum-affine-type-a-and-level-one-fock-space` requires `balanced-triples-and-global-crystal-bases`
- `level-one-fock-space-and-residue-crystals` requires `quantum-affine-type-a-and-level-one-fock-space`
- `cyclotomic-klr-algebras-and-highest-weight-categorification` requires `quantum-affine-type-a-and-level-one-fock-space`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `quantum-affine-type-a-and-level-one-fock-space`
- `ariki-categorification-and-graded-decomposition-numbers` requires `quantum-affine-type-a-and-level-one-fock-space`
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
