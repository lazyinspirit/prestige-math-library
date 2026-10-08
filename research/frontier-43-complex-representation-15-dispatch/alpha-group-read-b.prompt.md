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
group work, `research/frontier-43-complex-representation-15-alpha-groups.json` is the assignment: it permits at
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

run: frontier-43-complex-representation-15
role: alpha-group-read
label: b
covers: b

# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **2**, **4**: 2 A/B pair(s), 4 page(s), 59 item(s).

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
| 2 | `amenability-reiter-nets-and-folner-conditions` | A | representation-theory | 1234 | `haar-measure-existence-and-uniqueness`, `the-modular-function-and-l1-group-algebras`, `unitary-representations-positive-type-and-gns`, `group-c-star-algebras-and-the-fell-unitary-dual`, `the-analytic-hahn-banach-theorem`, `geometric-hahn-banach-and-convex-separation`, `banach-alaoglu-goldstine-and-krein-milman`, `amenable-groups-and-folner-criteria`, `induced-unitary-representations-of-locally-compact-groups` |
| 2 | `amenability-reiter-nets-and-folner-conditions-examples` | B | representation-theory | 1235 | `amenability-reiter-nets-and-folner-conditions` |
| 4 | `kazhdans-property-t-and-spectral-gap` | A | representation-theory | 1238 | `unitary-representations-positive-type-and-gns`, `group-c-star-algebras-and-the-fell-unitary-dual`, `amenability-reiter-nets-and-folner-conditions`, `sl2-r-principal-and-complementary-series` |
| 4 | `kazhdans-property-t-and-spectral-gap-examples` | B | representation-theory | 1239 | `kazhdans-property-t-and-spectral-gap` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `amenability-reiter-nets-and-folner-conditions` — Amenability Reiter Nets and Folner Conditions (27 item(s))

- `def-complex-haar-l-infinity-space` · definition — Complex $L^\infty$ space of a locally compact group
- `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group` · definition — Left-invariant means on $L^\infty$ of a locally compact group
- `def-amenable-locally-compact-group` · definition — Amenable locally compact group
- `def-reiter-condition-p1` · definition — Reiter's condition (P1)
- `def-left-folner-net-for-a-locally-compact-group` · definition — Left Følner nets for locally compact groups
- `def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group` · definition — Left-uniformly continuous bounded functions (UCB)
- `lem-an-lch-group-has-an-open-sigma-compact-subgroup` · lemma — Every locally compact Hausdorff group has an open sigma-compact subgroup
- `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets` · lemma — Finite Haar mass, compact detection, and integrable pairings
- `lem-averages-over-probability-densities-attain-the-essential-supremum` · lemma — Probability-density averages and locally detectable upper essential values
- `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous` · lemma — L1 convolution smooths bounded functions into UCB
- `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean` · lemma — A UCB-invariant mean yields a topological invariant mean
- `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` · lemma — Probability-density approximation of continuous tests and topological means
- `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities` · lemma — A topological invariant mean yields norm-approximately invariant densities
- `lem-an-invariant-mean-produces-a-reiter-net` · lemma — An invariant mean produces a Reiter net
- `lem-a-reiter-net-has-an-invariant-mean-cluster-point` · lemma — A Reiter net has an invariant-mean cluster point
- `thm-amenability-is-equivalent-to-reiter-p1` · theorem — Amenability is equivalent to Reiter's condition (P1)
- `lem-folner-nets-give-reiter-nets` · lemma — Følner nets give Reiter nets
- `lem-layer-cake-identity-for-nonnegative-integrable-functions` · lemma — The layer-cake identity for integrable functions
- `lem-reiter-functions-can-be-cut-down-to-folner-sets` · lemma — Reiter functions can be cut down to Følner sets
- `thm-folner-criterion-for-locally-compact-groups` · theorem — The Følner criterion for locally compact groups
- `cor-folner-sequences-for-second-countable-compactly-generated-groups` · corollary — Folner sequences for second countable compactly generated groups
- `thm-hulanicki-weak-containment-criterion-for-amenability` · theorem — The Hulanicki–Reiter weak containment criterion for amenability
- `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions` · lemma — The Markov-Kakutani fixed point theorem for abelian affine actions
- `lem-a-group-with-the-fixed-point-property-is-amenable` · lemma — The fixed point property implies amenability
- `prop-compact-and-locally-compact-abelian-groups-are-amenable` · proposition — Compact and locally compact abelian groups are amenable
- `lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation` · lemma — Restriction of the regular representation to a closed subgroup
- `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions` · theorem — Amenability is stable under closed subgroups, quotients and extensions

### `amenability-reiter-nets-and-folner-conditions-examples` — Amenability Reiter Nets and Folner Conditions — Examples (4 item(s))

- `ex-folner-sets-in-rn` · example — Følner sets in $\mathbb R^n$
- `ex-compact-groups-have-a-constant-reiter-net` · example — Compact groups have a constant Reiter net
- `ex-the-real-affine-group-is-amenable-and-nonunimodular` · example — The real affine group is amenable and nonunimodular
- `cex-the-free-group-on-two-generators-is-not-amenable` · counterexample — The free group on two generators is not amenable

### `kazhdans-property-t-and-spectral-gap` — Kazhdans Property T and Spectral Gap (24 item(s))

- `lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras` · lemma — Irreducible representations separate arbitrary C star algebras
- `def-almost-invariant-vectors-for-a-unitary-representation` · definition — Almost invariant vectors for a unitary representation
- `def-kazhdan-pair-and-kazhdan-constant` · definition — Kazhdan pairs, Kazhdan sets and Kazhdan constants
- `def-kazhdans-property-t` · definition — Kazhdan's property (T)
- `lem-almost-invariant-vectors-and-positive-type-functions` · lemma — Almost invariant vectors and normalized positive type functions
- `thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair` · theorem — Property (T) is equivalent to the existence of a compact Kazhdan pair
- `thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation` · theorem — Property (T) and isolation of the trivial representation in the Fell dual
- `def-compactly-generated-locally-compact-group` · definition — Compactly generated locally compact groups
- `lem-quasi-regular-representation-on-a-discrete-coset-space` · lemma — Quasi-regular representations on discrete coset spaces
- `thm-property-t-implies-compact-generation` · theorem — Property (T) implies compact generation
- `thm-property-t-passes-to-quotients` · theorem — Property (T) passes to Hausdorff quotients
- `def-spectral-gap-for-a-unitary-representation` · definition — Spectral gap for a unitary representation
- `thm-property-t-is-uniform-spectral-gap-for-representations` · theorem — Property (T) is a uniform spectral gap over all representations
- `lem-finite-haar-volume-compactness-criterion` · lemma — Compactness, finite Haar volume and invariant vectors in the regular representation
- `thm-an-amenable-property-t-locally-compact-group-is-compact` · theorem — An amenable locally compact group with property (T) is compact
- `thm-compact-groups-have-property-t` · theorem — Compact groups have property (T) by Haar averaging
- `def-relative-property-t-for-a-pair` · definition — Relative property (T) for a pair and relative Kazhdan pairs
- `def-real-projective-line-and-its-sl2-action` · definition — The real projective line and the action of SL2(R)
- `lem-sl2-r-has-no-invariant-probability-on-the-projective-line` · lemma — No probability measure on the projective line is invariant under two unipotents
- `lem-sl2-r-semidirect-r2-has-relative-property-t` · lemma — Relative property (T) for SL2(R) semidirect R2
- `lem-normal-relative-property-t-controls-distance-to-invariant-vectors` · lemma — Normal relative property (T) controls the distance to the invariant subspace
- `lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups` · lemma — Bounded elementary generation of SLn(R) by transvections
- `thm-sl-n-r-has-property-t-for-n-at-least-three` · theorem — SLn(R) has property (T) for n at least three
- `prop-sl2-r-does-not-have-property-t` · proposition — SL2(R) does not have property (T)

### `kazhdans-property-t-and-spectral-gap-examples` — Kazhdans Property T and Spectral Gap — Examples (4 item(s))

- `ex-a-kazhdan-pair-for-a-compact-group` · example — A Kazhdan pair for a compact group via Haar averaging
- `ex-property-t-for-a-finite-group` · example — Property (T) for finite groups via normalized counting measure
- `cex-z-does-not-have-property-t` · counterexample — The integers do not have property (T)
- `cex-sl2-r-complementary-series-destroys-property-t` · counterexample — The spherical complementary series destroys property (T) for SL2(R)

## Your seams

Your pages depend on another group's:

- `kazhdans-property-t-and-spectral-gap` requires `sl2-r-principal-and-complementary-series` (group c, batch 3)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

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
