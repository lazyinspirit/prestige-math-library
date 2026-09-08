# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 9's lead must refresh and read the unified frontier ledger.

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
group work, `research/phase-2-wave-1-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-wave-1
role: alpha-adjudicate
label: step8-d
covers: 2, 12

# Step 8 adjudication — group **d**, run `phase-2-wave-1`

You are the group Alpha for batches **2**, **12**: 2 A/B pair(s), 4 page(s), 21 item(s), 1 open rejection(s) over 1 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `finite-averaging-and-character-theory-prerequisites` | A | abstract-algebra | 144.2 | `the-group-algebra-and-representations`, `inner-product-spaces-and-orthogonality` |
| 2 | `finite-averaging-and-character-theory-prerequisites-examples` | B | abstract-algebra | 144.4 | `finite-averaging-and-character-theory-prerequisites` |
| 12 | `galois-orbits-and-descent-of-simple-finite-group-modules` | A | representation-theory | 510.0341 | `chain-conditions-and-semisimple-modules`, `the-galois-correspondence`, `tensor-products-of-modules`, `the-group-algebra-and-representations`, `maschkes-theorem-and-complete-reducibility` |
| 12 | `galois-orbits-and-descent-of-simple-finite-group-modules-examples` | B | representation-theory | 510.0342 | `galois-orbits-and-descent-of-simple-finite-group-modules` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-averaging-and-character-theory-prerequisites` — Finite Averaging and Character-Theory Prerequisites (9 item(s))

- `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field` · lemma — For a field k and integer n>0, n·1_k is invertible if and only if char(k) does not divide n; 0 divides no positive integer.
- `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice` · lemma — If V is a finite-dimensional k-vector space and U is a subspace, there exists a k-linear P:V→V with P²=P, image P=U and P restricted to U equal to the identity. This uses no choice axiom, including when U=0 or U=V.
- `lem-trace-of-an-idempotent-is-the-dimension-of-its-image` · lemma — For an idempotent endomorphism P of a finite-dimensional vector space over any field k, tr(P)=(dim_k image P)·1_k. In positive characteristic this is a scalar equality, not recovery of the integer rank from trace.
- `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition` · lemma — For a group acting on a set X with finitely many orbits and any field k, invariant functions X→k form a vector space with basis the indicators of the distinct orbits. The dimension equals the number of orbits. For the conjugation action of a finite group these are class functions and conjugacy-class indicators. The empty X case has the empty basis.
- `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product` · lemma — For nonempty finite X, the form (f,h)=|X|^(-1) sum_x f(x) conjugate(h(x)) on C^X is an inner product, linear in the first variable. The denominator is the positive real image of |X|.
- `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers` · lemma — For n>0 and complex z_1,...,z_n with |z_i|=1, |sum_i z_i|≤n, with equality if and only if all z_i agree. The n=1 case is included.
- `lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity` · lemma — If n>0 and z_1,...,z_n are complex roots of unity and a=(sum_i z_i)/n, then a is algebraic over Q. For every complex Q-conjugate b of a there is a finite cyclotomic splitting field E⊂C containing all z_i and a Q-automorphism σ of E such that b=σ(a)=(sum_i σ(z_i))/n; each σ(z_i) has the same order as z_i. No integrality hypothesis on a is needed.
- `lem-kernel-of-a-direct-sum-of-representations-is-the-intersection` · lemma — For a finite family of finite-dimensional k-representations ρ_i of the same group G, the componentwise direct-sum representation has kernel intersection_i ker(ρ_i). For the empty family the representation is on 0 and the intersection is G.
- `lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton` · lemma — A group G is abelian if and only if every conjugacy class is a singleton; no finiteness hypothesis is required.

### `finite-averaging-and-character-theory-prerequisites-examples` — Finite Averaging and Character-Theory Prerequisites: Examples (4 item(s))

- `ex-coordinate-projection-onto-a-subspace-of-c-three` · example — On C³, U=span((1,1,0),(0,1,1)); P(x,y,z)=(x,x+z,z) projects onto U along span((0,1,0)).
- `ex-conjugacy-class-indicator-basis-for-s-three` · example — The indicators of {e}, {(12),(13),(23)}, {(123),(132)} form the class-function basis for S₃.
- `ex-standard-hermitian-inner-product-on-functions-on-a-three-point-set` · example — On X={1,2,3}, the normalized form has Gram matrix I₃/3 in the indicator basis. For f=(1,i,0) and h=(i,1,1), (f,h)=0 and (f,f)=2/3.
- `cex-unit-complex-sum-strict-with-distinct-summands` · counterexample — The assertion that unit summands always attain the bound |sum z_i|=n is false: z_1=1,z_2=-1 give 0<2.

### `galois-orbits-and-descent-of-simple-finite-group-modules` — Galois Orbits and Descent of Simple Finite-Group Modules (5 item(s))

- `def-semilinear-galois-action-on-a-scalar-extended-algebra` · definition — Semilinear Galois actions, twists, and split central idempotents
- `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension` · lemma — Galois fixed points recover finite-dimensional scalar extensions
- `lem-galois-orbit-sums-of-split-central-idempotents-descend` · lemma — Orbit sums of primitive split central idempotents descend
- `lem-a-descended-galois-orbit-idempotent-is-primitive` · lemma — Descended orbit idempotents are primitive and their blocks have one simple type
- `thm-galois-orbits-classify-simple-modules-after-splitting-base-change` · theorem — Galois orbits classify simple modules after splitting base change

### `galois-orbits-and-descent-of-simple-finite-group-modules-examples` — Galois Orbits and Descent of Simple Finite-Group Modules: Examples (3 item(s))

- `ex-galois-descent-for-the-two-nontrivial-characters-of-c-three` · example — Descent of the two nontrivial characters of C₃
- `ex-the-rational-simple-block-of-the-quaternion-group` · example — The rational simple quaternion block
- `cex-a-galois-stable-character-need-not-have-schur-index-one` · counterexample — A Galois-stable character need not descend with multiplicity one

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
| `lem-a-descended-galois-orbit-idempotent-is-primitive` | `galois-orbits-and-descent-of-simple-finite-group-modules` | gpt-5.6-terra | `8d5aaac63b1cbad97bc69d07a3c2fb7edf4a0f957828c7017c6a587749bd5e17` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `phase-2-wave-1`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-wave-1-judge-adjudications.jsonl`
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
decision in `research/phase-2-wave-1-step8-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-wave-1-step8-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-wave-1-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/phase-2-wave-1-alpha-step8-<group>.md` with every
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
