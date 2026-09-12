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
group work, `research/phase-2-next-17-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

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
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-17
role: alpha-group-read
label: c
covers: c

# Step 6 whole-group reading — group **c**, run `phase-2-next-17`

You are the group Alpha for batches **4**: 1 A/B pair(s), 2 page(s), 51 item(s).

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
| 4 | `grothendieck-spectral-sequences-and-computations` | A | homological-algebra | 365.069 | `double-complexes-exact-couples-and-convergence`, `derived-categories`, `derived-functors`, `delta-functors-and-universality`, `group-cohomology-as-a-derived-functor`, `universal-coefficients-and-kunneth-theorems`, `group-extensions-complements-and-schur-zassenhaus` |
| 4 | `grothendieck-spectral-sequences-and-computations-examples` | B | homological-algebra | 365.07 | `grothendieck-spectral-sequences-and-computations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `grothendieck-spectral-sequences-and-computations` — Grothendieck Spectral Sequences and Computations (42 item(s))

- `def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex` · definition — Cartan-Eilenberg injective resolution of a bounded-below complex
- `lem-finite-biproducts-of-injective-objects-are-injective` · lemma — Finite biproducts of injective objects are injective
- `lem-a-cartan-eilenberg-resolution-totalizes-to-an-injective-resolution-in-the-required-derived-sense` · lemma — A Cartan-Eilenberg resolution totalizes to an injective replacement
- `thm-cartan-eilenberg-injective-resolutions-exist` · theorem — Cartan-Eilenberg injective resolutions exist
- `def-right-hyperderived-functor-of-a-complex` · definition — Right hyperderived functor of a complex
- `lem-hyperderived-functors-are-independent-of-the-supplied-cartan-eilenberg-resolution-up-to-natural-isomorphism` · lemma — Hyperderived functors are independent of the supplied resolution
- `lem-cartan-eilenberg-comparisons-preserve-both-filtrations` · lemma — Cartan–Eilenberg comparisons preserve both filtrations
- `lem-finite-diagonal-cohomological-double-complex-spectral-sequences` · lemma — Finite-diagonal cohomological double-complex spectral sequences
- `thm-first-hypercohomology-spectral-sequence` · theorem — First hypercohomology spectral sequence
- `thm-second-hypercohomology-spectral-sequence` · theorem — Second hypercohomology spectral sequence
- `prop-the-hypercohomology-edge-maps-are-the-canonical-maps-from-cohomology-of-f` · proposition — Hypercohomology edge maps are canonical
- `def-g-acyclic-object-for-a-left-exact-functor` · definition — G-acyclic object for a left-exact functor
- `lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f` · lemma — Applying F gives a termwise G-acyclic complex
- `lem-the-total-cartan-eilenberg-complex-computes-the-derived-composite` · lemma — The total Cartan-Eilenberg complex computes the derived composite
- `lem-the-two-filtrations-have-e-two-pages-rpg-rqf-and-the-derived-composite-edge` · lemma — The two filtrations identify E2 and the composite edge
- `thm-grothendieck-spectral-sequence` · theorem — Grothendieck spectral sequence
- `thm-naturality-of-the-grothendieck-spectral-sequence` · theorem — Naturality of the Grothendieck spectral sequence
- `thm-five-term-exact-sequence-of-the-grothendieck-spectral-sequence` · theorem — Five-term exact sequence of the Grothendieck spectral sequence
- `cor-grothendieck-collapse-when-one-functor-is-exact` · corollary — Grothendieck collapse when one functor is exact
- `cor-derived-composition-isomorphism-under-total-acyclicity` · corollary — Derived composition isomorphisms under total acyclicity
- `rem-the-grothendieck-spectral-sequence-has-a-dual-left-derived-form` · remark — Dual left-derived Grothendieck spectral sequence
- `thm-universal-coefficient-spectral-sequence` · theorem — Universal coefficient spectral sequence
- `thm-kunneth-tor-spectral-sequence` · theorem — Kunneth Tor spectral sequence
- `cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse` · corollary — PID Kunneth is a two-column collapse
- `prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem` · proposition — UCT and Kunneth collapse retains an extension problem
- `thm-hyper-tor-spectral-sequence` · theorem — Hyper-Tor spectral sequence
- `thm-hyper-ext-spectral-sequence` · theorem — Hyper-Ext spectral sequence
- `lem-invariants-for-a-group-extension-compose` · lemma — Invariants for a group extension compose
- `lem-the-invariants-functor-for-n-sends-injectives-to-q-acyclic-modules` · lemma — N-invariants send injective G-modules to Q-acyclics
- `lem-restriction-of-injective-group-modules-is-injective` · lemma — Restriction of injective group modules is injective
- `thm-lyndon-hochschild-serre-spectral-sequence` · theorem — Lyndon-Hochschild-Serre spectral sequence
- `thm-five-term-exact-sequence-in-group-cohomology-from-lhs` · theorem — Five-term exact sequence from LHS
- `prop-lhs-collapses-for-a-cohomologically-trivial-normal-subgroup` · proposition — LHS collapse for a cohomologically trivial normal subgroup
- `def-spectral-sequence-computation-record` · definition — Spectral-sequence computation record
- `prop-an-e-two-page-alone-does-not-determine-the-abutment` · proposition — An E2 page alone does not determine the abutment
- `prop-a-collapsed-first-quadrant-spectral-sequence-with-field-vector-space-abutment-splits-noncanonically` · proposition — Collapsed vector-space spectral sequences split noncanonically
- `fs-the-grothendieck-spectral-sequence-needs-only-left-exactness-of-f-and-g` · false-statement — Grothendieck needs only left exactness
- `fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence` · false-statement — R^pG(R^qF) is the E1 page
- `fs-a-cartan-eilenberg-resolution-only-resolves-the-terms-of-a-complex` · false-statement — Cartan-Eilenberg only resolves terms
- `fs-collapse-of-the-uct-spectral-sequence-gives-a-natural-splitting` · false-statement — UCT collapse gives a natural splitting
- `fs-the-lhs-spectral-sequence-defines-low-degree-group-cohomology` · false-statement — LHS defines low-degree group cohomology
- `fs-writing-e-two-double-arrow-h-is-a-complete-convergence-proof` · false-statement — Writing E2 implies H proves convergence

### `grothendieck-spectral-sequences-and-computations-examples` — Grothendieck Spectral Sequences and Computations — Examples (9 item(s))

- `ex-a-two-row-hypercohomology-spectral-sequence` · example — A two-row hypercohomology spectral sequence
- `ex-grothendieck-spectral-sequence-with-an-exact-outer-functor` · example — Grothendieck with an exact outer functor
- `ex-the-five-term-exact-sequence-of-a-composite-functor` · example — Five-term sequence of a composite functor
- `ex-uct-as-a-two-column-spectral-sequence-over-the-integers` · example — UCT as a two-column spectral sequence over the integers
- `ex-kunneth-as-a-two-column-spectral-sequence-over-a-pid` · example — Kunneth as a two-column spectral sequence over a PID
- `ex-lhs-for-a-split-group-extension` · example — LHS for a split group extension
- `ex-a-collapse-with-a-noncanonical-extension-choice` · example — A collapse with a noncanonical extension choice
- `cex-identical-e-two-pages-with-different-later-differentials` · counterexample — Identical E2 pages with different later differentials
- `ex-a-complete-spectral-sequence-computation-record` · example — A complete spectral-sequence computation record

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

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
