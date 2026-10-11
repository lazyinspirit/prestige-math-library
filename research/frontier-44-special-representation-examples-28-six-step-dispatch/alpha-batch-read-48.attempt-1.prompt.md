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
label: 48
covers: 48

# Step 4 batch reviewer — batch **48**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **48**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["48"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 48 | `cyclotomic-hecke-and-quiver-hecke-algebras` | A | type-a-hecke-specht-modules-and-cellular-bases, quantum-affine-type-a-and-level-one-fock-space, klr-algebras-induction-and-quantum-serre-categorification, cyclotomic-klr-algebras-and-highest-weight-categorification, cores-quotients-and-blocks-of-symmetric-groups |
| 48 | `cyclotomic-hecke-and-quiver-hecke-algebras-examples` | B | cyclotomic-hecke-and-quiver-hecke-algebras |

## Your content, in full

### `cyclotomic-hecke-and-quiver-hecke-algebras` — Cyclotomic Hecke and Quiver Hecke Algebras

- `def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules` · definition — Arbitrary-level cyclotomic Hecke, Murphy cell and multipartition Schur modules
- `lem-laurent-binomial-valuation-at-one-over-any-field` · lemma — Laurent binomial valuation at one over any field
- `lem-ultra-tight-multisets-admit-column-potentials` · lemma — Ultra-tight multisets admit integer column potentials
- `def-type-a-affine-presentations-and-charged-cyclotomic-quotients` · definition — Affine type-A presentations and charged cyclotomic quotients
- `lem-dvr-cellular-jantzen-filtration-and-gram-valuation` · lemma — DVR cellular Jantzen filtration and exact Gram valuation
- `lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis` · lemma — Universal nondegenerate affine Hecke ordered monomials form a basis
- `lem-cyclotomic-hecke-bounded-ordered-monomials-span` · lemma — Bounded ordered monomials span the cyclotomic Hecke quotients
- `lem-degenerate-affine-hecke-ordered-monomials-form-a-basis` · lemma — Degenerate affine Hecke ordered monomials form a basis
- `lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes` · lemma — Selfadjoint weight Gram valuations detect Jantzen classes
- `lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents` · lemma — Symmetric polynomial centers have primitive split content idempotents
- `lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors` · lemma — Polynomial spectra and central content sectors of finite cyclotomic Hecke algebras
- `def-cyclotomic-hecke-central-content-sector-notation` · definition — Central content sectors of the cyclotomic Hecke algebra
- `lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity` · lemma — Charged core height matrices: content-preserving descent and minimal switch connectivity
- `lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension` · lemma — Cyclic type-A KLR regular Hom norm gives the total dimension
- `prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras` · proposition — Cyclotomic Hecke algebras of level one are finite Hecke algebras
- `def-affine-and-cyclotomic-type-a-hecke-algebras` · definition — Affine and cyclotomic type-A Hecke algebras
- `def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras` · definition — The type-A cyclotomic specialization of the QG-KLR algebras
- `lem-cyclotomic-hecke-intertwiners-and-local-power-series` · lemma — Cyclotomic Hecke intertwiners and local power series
- `lem-cyclotomic-klr-block-satisfies-the-hecke-relations` · lemma — The cyclotomic KLR block satisfies the Hecke relations
- `lem-hecke-intertwiners-produce-local-klr-generators` · lemma — Hecke intertwiners produce the local KLR generators
- `thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras` · theorem — Cyclotomic Hecke central sectors are isomorphic to type-A cyclotomic KLR algebras
- `lem-cyclotomic-hecke-algebra-basis-and-dimension` · lemma — Basis and dimension of the cyclotomic Hecke algebra
- `lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis` · lemma — Universal cyclotomic Hecke ordered monomials form a basis
- `lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image` · lemma — The degenerate cyclotomic Hecke center is the symmetric polynomial image
- `lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric` · lemma — The universal cyclotomic Hecke canonical trace is perfect and symmetric
- `thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular` · theorem — The arbitrary-level cyclotomic Hecke Murphy basis is cellular
- `lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular` · lemma — Arbitrary-level Murphy Jucys–Murphy action is content triangular
- `lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases` · lemma — Cyclotomic semistandard row-type sums give permutation-module bases
- `lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis` · lemma — Cyclotomic semistandard sums give the actual Schur endomorphism basis
- `thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage` · theorem — Cyclotomic Schur standards and corner functor control block linkage
- `lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms` · lemma — Generic cyclotomic Schur deformation standards have nondegenerate forms
- `lem-cyclotomic-schur-weight-gram-determinants-are-products-of-monic-semistandard-norms` · lemma — Cyclotomic Schur weight Gram determinants are products of monic semistandard norms
- `lem-cyclotomic-schur-weight-gram-valuations-equal-signed-rim-hook-kostka-sums` · lemma — Cyclotomic Schur weight Gram valuations equal signed rim-hook Kostka sums
- `thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations` · theorem — Cyclotomic Schur Jantzen sum formula from rim-hook valuations
- `lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage` · lemma — Cyclotomic Jantzen equivalence is Schur and Hecke block linkage
- `lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected` · lemma — Multipartitions with fixed component cores are cyclotomic Jantzen-connected
- `thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected` · theorem — Cyclotomic multipartitions have equal residue content exactly when Jantzen-connected
- `thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks` · theorem — Central content sectors are zero or primitive cyclotomic Hecke blocks
- `def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks` · definition — Residue-sequence idempotents and cyclotomic Hecke blocks
- `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` · theorem — The Brundan–Kleshchev blockwise Hecke–KLR isomorphism
- `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading` · corollary — Cyclotomic Hecke blocks inherit a nontrivial Z-grading

### `cyclotomic-hecke-and-quiver-hecke-algebras-examples` — Cyclotomic Hecke and Quiver Hecke Algebras — Examples

- `ex-homogeneous-degree-check-for-the-corrected-klr-braid-relation` · example — Homogeneous degree check for the corrected KLR braid relation
- `ex-degenerate-level-one-hecke-klr-map-for-s3` · example — The degenerate level-one Hecke–KLR map for S_3
- `ex-level-one-rank-two-cyclotomic-klr-algebra-at-e-three` · example — The level-one rank-two cyclotomic KLR algebra at e=3
- `cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block` · counterexample — The whole affine Hecke algebra is not one cyclotomic KLR block

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `type-a-hecke-specht-modules-and-cellular-bases`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `quantum-affine-type-a-and-level-one-fock-space`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `klr-algebras-induction-and-quantum-serre-categorification`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `cyclotomic-klr-algebras-and-highest-weight-categorification`
- `cyclotomic-hecke-and-quiver-hecke-algebras` requires `cores-quotients-and-blocks-of-symmetric-groups`
- `the-degenerate-ariki-categorification-theorem-examples` requires `cyclotomic-hecke-and-quiver-hecke-algebras`
- `ariki-categorification-and-graded-decomposition-numbers` requires `cyclotomic-hecke-and-quiver-hecke-algebras`
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
