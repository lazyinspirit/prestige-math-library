# Alpha

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
group work, `research/frontier-33-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-8
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-8 task's explicit exception; otherwise
report the issue without changing it.

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
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

run: frontier-33
role: alpha-adjudicate
label: step8-f
covers: 14, 15

# Step 8 adjudication — group **f**, run `frontier-33`

You are the group Alpha for batches **14**, **15**: 2 A/B pair(s), 4 page(s), 56 item(s), 9 open rejection(s) over 9 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 14 | `category-o-finiteness-duality-and-blocks` | A | lie-theory | 510.007 | `homomorphisms-between-verma-modules-and-linkage-examples`, `chain-complexes-and-homology` |
| 14 | `category-o-finiteness-duality-and-blocks-examples` | B | lie-theory | 510.008 | `category-o-finiteness-duality-and-blocks` |
| 15 | `clifford-theory-over-normal-subgroups` | A | representation-theory | 510.037 | `schur-indices-and-fields-of-definition-examples` |
| 15 | `clifford-theory-over-normal-subgroups-examples` | B | representation-theory | 510.038 | `clifford-theory-over-normal-subgroups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `category-o-finiteness-duality-and-blocks` — Category O Finiteness Duality and Blocks (31 item(s))

- `def-bgg-category-o` · definition — The classical BGG category O
- `lem-enveloping-algebra-is-left-and-right-noetherian` · lemma — Noetherianity of the enveloping algebra
- `lem-finite-b-stable-generators-and-weight-flags-in-category-o` · lemma — Finite Borel-stable generators and weight flags
- `prop-equivalent-support-description-of-category-o` · proposition — The support description of category O with finite generation
- `prop-verma-and-finite-dimensional-modules-lie-in-category-o` · proposition — Verma and finite-dimensional weight modules belong to O
- `thm-category-o-is-abelian-and-extension-closed` · theorem — Category O is abelian and extension closed among weight modules
- `lem-n-plus-invariants-exist-in-every-nonzero-o-module` · lemma — A nonzero O-object has a highest-weight vector
- `thm-simple-objects-of-category-o-are-highest-weight-modules` · theorem — The simple objects of O
- `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation` · lemma — Finite filtrations by highest-weight quotients
- `lem-the-center-has-finite-dimensional-image-on-an-o-object` · lemma — The center has finite-dimensional image on each O-object
- `def-generalized-central-character-subcategory-of-o` · definition — Generalized central-character subcategories
- `lem-generalized-central-character-submodules-are-direct-summands` · lemma — Generalized central-character summands
- `thm-category-o-decomposes-by-generalized-central-character` · theorem — Generalized central-character decomposition of O
- `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients` · lemma — Finite weight-space detection of subquotients
- `thm-every-category-o-object-has-finite-length` · theorem — Every object of O has finite length
- `prop-hom-spaces-in-category-o-are-finite-dimensional` · proposition — Finite-dimensional Hom spaces in O
- `def-restricted-dual-of-a-weight-module` · definition — Restricted Chevalley dual
- `lem-simple-highest-weight-modules-are-restricted-self-dual` · lemma — Restricted self-duality of simple highest-weight modules
- `prop-restricted-duality-is-an-exact-involution-on-category-o` · proposition — Restricted duality is exact and involutive on O
- `def-standard-and-costandard-objects-in-category-o` · definition — Standard and costandard objects
- `prop-costandard-objects-have-simple-socles` · proposition — The simple socle of a costandard object
- `def-integral-weyl-group-of-a-weight` · definition — The integral Weyl group of a weight
- `lem-integral-reflection-orbits-are-linkage-equivalence-classes` · lemma — Integral reflection linkage is an equivalence relation
- `lem-extensions-between-distinct-o-linkage-classes-split` · lemma — Simple extensions cannot cross linkage classes
- `lem-o-modules-split-across-separated-simple-classes` · lemma — Splitting finite-length modules across separated simple classes
- `thm-central-character-summands-split-into-linkage-blocks` · theorem — Central-character summands refine into linkage blocks
- `cor-restricted-duality-preserves-linkage-blocks` · corollary — Duality preserves linkage blocks and block orthogonality
- `lem-verma-self-extensions-in-category-o-split` · lemma — Verma self-extensions in O split
- `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o` · proposition — Finite-dimensional tensoring preserves O
- `def-grothendieck-group-and-character-of-category-o` · definition — The Grothendieck group and character of O
- `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases` · proposition — Simple and standard bases of K0(O)

### `category-o-finiteness-duality-and-blocks-examples` — Category O Finiteness Duality and Blocks — Examples (8 item(s))

- `ex-the-regular-integral-sl2-block-of-category-o` · example — The regular integral sl2 block
- `ex-a-generic-sl2-block-is-semisimple` · example — Nonintegral sl2 central characters split into two simple blocks
- `ex-a-singular-a2-central-character-summand` · example — A singular integral A2 central-character summand
- `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o` · counterexample — The full algebraic Verma dual is too large
- `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o` · counterexample — Finite weight spaces and bounded support do not replace finite generation
- `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o` · counterexample — Finite weight spaces alone do not give category O
- `cex-category-o-is-not-extension-closed-in-all-g-modules` · counterexample — An ambient extension can leave category O
- `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o` · counterexample — O is not closed under arbitrary tensor products

### `clifford-theory-over-normal-subgroups` — Clifford Theory over Normal Subgroups (14 item(s))

- `def-conjugate-representation-and-inertia-group` · definition — Inertia group and characters lying above a normal type
- `lem-normal-isotypical-components-are-permuted-by-translation` · lemma — Translation permutes normal isotypical components
- `lem-normal-restriction-constituents-form-one-conjugacy-orbit` · lemma — Normal restriction has one orbit of constituents
- `thm-clifford-homogeneous-restriction-formula` · theorem — Clifford restriction formula
- `def-clifford-ramification-index` · definition — Clifford ramification index
- `lem-normal-isotypical-component-is-inertia-stable` · lemma — The stabilizer of a nonzero isotypical component
- `lem-induction-from-the-inertia-group-recovers-the-module` · lemma — Reconstruction from the inertia component
- `lem-inducing-an-irreducible-inertia-module-is-irreducible` · lemma — Induction of an inertia constituent is irreducible
- `thm-clifford-correspondence` · theorem — Clifford correspondence
- `cor-normal-subgroup-induction-irreducibility-criterion` · corollary — Normal subgroup induction criterion
- `cor-clifford-ramification-squares-sum-to-inertia-index` · corollary — Ramification indices account for the inertia quotient
- `def-extension-of-an-irreducible-normal-subgroup-representation` · definition — An extension of a normal subgroup representation
- `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces` · lemma — Isotypical evaluation and multiplicity subspaces
- `thm-gallagher-correspondence-for-an-extendible-character` · theorem — Gallagher correspondence for an extendible type

### `clifford-theory-over-normal-subgroups-examples` — Clifford Theory over Normal Subgroups — Examples (3 item(s))

- `ex-clifford-theory-for-s3-over-a3` · example — Clifford correspondence for A3 in S3
- `ex-gallagher-correspondence-for-a-direct-product` · example — Gallagher correspondence for a direct product
- `ex-clifford-boundaries-n-equals-one-and-n-equals-g` · example — Boundary normal subgroups in Clifford theory

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `def-bgg-category-o` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `4729d520e60db26e06b508bf067d4f45bf0bc834b433c195de2aa3c4ed7394ba` |
| `ex-a-generic-sl2-block-is-semisimple` | `category-o-finiteness-duality-and-blocks-examples` | gpt-5.6-terra | `5ae868f759c51b6de0e2a287a6d67965ebdde7a17ee644247b12a23619531ed4` |
| `ex-the-regular-integral-sl2-block-of-category-o` | `category-o-finiteness-duality-and-blocks-examples` | gpt-5.6-terra | `27616b476eb5dc1d420b4bf77ce921e503f4941ed2a8a2d374e8f0b974f0463d` |
| `lem-extensions-between-distinct-o-linkage-classes-split` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `813ac84682172fb07c05eda8e3266e73aea6885cf01c8dee307f8f576caddd9a` |
| `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `034d1c283f0f5ee7a0a876a8a215e4ab05592152ff28a39434100a755d2a3e7f` |
| `prop-costandard-objects-have-simple-socles` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `8ae53850cb3523a52eff1e9daa5a9e95ba5dee7644b2d44618673a4b1cefe2dc` |
| `prop-hom-spaces-in-category-o-are-finite-dimensional` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `1e65a11ee24d8428844cef748bdbfa31fbf14cdf7a09ce378994185d2d1e7781` |
| `prop-restricted-duality-is-an-exact-involution-on-category-o` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `604717f9b0bf6d2e11a1163a51a20e41a9d3c7b3b6914121f91e108c0f05f966` |
| `thm-category-o-is-abelian-and-extension-closed` | `category-o-finiteness-duality-and-blocks` | gpt-5.6-terra | `bf67104c5eb5d20927adca2f9a357acf381160bcc08eb04ae64713f391de0872` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-33`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-33-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-8 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-33-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-33-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-33-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-33-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
