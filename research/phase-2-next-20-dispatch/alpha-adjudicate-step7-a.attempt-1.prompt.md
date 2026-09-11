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
group work, `research/phase-2-next-20-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-next-20
role: alpha-adjudicate
label: step7-a
covers: 1, 5

# Step 7 adjudication — group **a**, run `phase-2-next-20`

You are the group Alpha for batches **1**, **5**: 3 A/B pair(s), 6 page(s), 51 item(s), 16 open rejection(s) over 16 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `weak-mixing-and-the-chacon-transformation` | A | measure-theory | 288.0423 | `measure-preserving-systems-and-mixing-criteria`, `complex-lp-spaces-and-test-function-conventions`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `lebesgue-measure-on-euclidean-space`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial` |
| 1 | `weak-mixing-and-the-chacon-transformation-examples` | B | measure-theory | 288.0424 | `weak-mixing-and-the-chacon-transformation` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence` | A | fourier-analysis | 288.140165 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `orthonormal-bases-parseval-and-fourier-series`, `measures-and-their-basic-properties` |
| 5 | `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` | B | fourier-analysis | 288.14017 | `kolmogorov-block-construction-and-almost-everywhere-divergence` |
| 5 | `carleson-hunt-time-frequency-theorem` | A | fourier-analysis | 288.140175 | `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fejer-and-poisson-summability-of-fourier-series`, `schwartz-space-and-the-plancherel-theorem`, `the-maximal-function-and-lebesgue-differentiation` |
| 5 | `carleson-hunt-time-frequency-theorem-examples` | B | fourier-analysis | 288.1401775 | `carleson-hunt-time-frequency-theorem`, `kolmogorov-block-construction-and-almost-everywhere-divergence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-mixing-and-the-chacon-transformation` — Weak Mixing and the Chacon Transformation (21 item(s))

- `def-unitary-eigenfunction-for-a-probability-system` · definition — Unitary eigenfunction for a probability system
- `def-l-two-operator-conventions-for-weak-mixing` · definition — L two operator conventions for weak mixing
- `lem-closed-l-two-subspaces-have-orthogonal-projections` · lemma — Closed l two subspaces have orthogonal projections
- `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace` · lemma — Hilbert cesaro averages converge to the fixed subspace
- `lem-product-rectangle-kernels-are-dense-in-complex-l-two` · lemma — Product rectangle kernels are dense in complex l two
- `lem-square-integrable-kernels-define-bounded-compact-integral-operators` · lemma — Square integrable kernels define bounded compact integral operators
- `lem-conjugate-transpose-kernels-give-adjoints` · lemma — Conjugate transpose kernels give adjoints
- `lem-invariant-square-integrable-kernel-produces-a-compact-intertwiner` · lemma — Invariant square integrable kernel produces a compact intertwiner
- `lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k` · lemma — Nonzero compact kernel operators yield nonzero positive compact k star k
- `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces` · lemma — Nonzero positive compact self adjoint operators have positive finite dimensional eigenspaces
- `lem-compact-intertwiners-produce-finite-dimensional-invariant-subspaces` · lemma — Compact intertwiners produce finite dimensional invariant subspaces
- `lem-nonzero-finite-dimensional-complex-invariant-subspaces-have-unitary-eigenvectors` · lemma — Nonzero finite dimensional complex invariant subspaces have unitary eigenvectors
- `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` · theorem — Weak mixing is equivalent to absence of nonconstant eigenfunctions
- `def-chacon-three-cut-one-spacer-towers` · definition — Chacon three cut one spacer towers
- `lem-chacon-partial-maps-extend-to-an-invertible-map-mod-null-sets` · lemma — Chacon partial maps extend to an invertible map mod null sets
- `lem-chacon-levels-approximate-measurable-sets` · lemma — Chacon levels approximate measurable sets
- `thm-chacon-transformation-is-ergodic` · theorem — Chacon transformation is ergodic
- `lem-chacon-eigenfunctions-are-constant` · lemma — Chacon eigenfunctions are constant
- `lem-chacon-tower-height-correlations-obstruct-mixing` · lemma — Chacon tower height correlations obstruct mixing
- `thm-chacon-transformation-is-weakly-mixing-but-not-mixing` · theorem — Chacon transformation is weakly mixing but not mixing
- `fs-weak-mixing-implies-strong-mixing` · false-statement — Weak mixing implies strong mixing

### `weak-mixing-and-the-chacon-transformation-examples` — Weak Mixing and the Chacon Transformation — Examples (3 item(s))

- `ex-first-three-chacon-tower-heights` · example — First three chacon tower heights
- `ex-chacon-spacer-measure-budget` · example — Chacon spacer measure budget
- `cex-chacon-correlation-subsequence-prevents-mixing` · counterexample — Chacon correlation subsequence prevents mixing

### `kolmogorov-block-construction-and-almost-everywhere-divergence` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence (8 item(s))

- `def-kolmogorov-analytic-partial-sum-maximal-function` · definition — Kolmogorov analytic partial sum maximal function
- `lem-kolmogorov-simultaneous-phase-approximation` · lemma — Kolmogorov simultaneous phase approximation
- `lem-kolmogorov-atomic-kernel-maxima` · lemma — Kolmogorov atomic kernel maxima
- `lem-kolmogorov-block-polynomial-with-large-partial-sums` · lemma — Kolmogorov block polynomial with large partial sums
- `lem-separated-frequency-blocks-do-not-disturb-earlier-partial-sum-maxima` · lemma — Separated frequency blocks do not disturb earlier partial sum maxima
- `lem-kolmogorov-gliding-hump-series-converges-in-lone` · lemma — Kolmogorov gliding hump series converges in lone
- `lem-kolmogorov-block-maxima-diverge-off-a-null-limsup-set` · lemma — Kolmogorov block maxima diverge off a null limsup set
- `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere` · theorem — Kolmogorov lone fourier series diverges almost everywhere

### `kolmogorov-block-construction-and-almost-everywhere-divergence-examples` — Kolmogorov’s Block Construction and Almost-Everywhere Divergence: Examples (2 item(s))

- `ex-one-finite-kolmogorov-frequency-block` · example — One finite kolmogorov frequency block
- `ex-summable-exceptional-measures-in-the-kolmogorov-induction` · example — Summable exceptional measures in the kolmogorov induction

### `carleson-hunt-time-frequency-theorem` — The Carleson–Hunt Time–Frequency Theorem (14 item(s))

- `def-carleson-operator-and-measurable-linearisation` · definition — Carleson operator and measurable linearisation
- `def-carleson-tiles-wave-packets-and-tile-order` · definition — Carleson tiles wave packets and tile order
- `lem-wave-packet-model-dominates-the-linearised-carleson-operator` · lemma — Wave packet model dominates the linearised carleson operator
- `def-density-size-and-tree-count-for-carleson-tiles` · definition — Density size and tree count for carleson tiles
- `lem-carleson-density-selection` · lemma — Carleson density selection
- `lem-carleson-size-selection` · lemma — Carleson size selection
- `lem-carleson-single-tree-estimate` · lemma — Carleson single tree estimate
- `lem-carleson-forest-summation-gives-restricted-weak-ltwo` · lemma — Carleson forest summation gives restricted weak ltwo
- `lem-carleson-signed-tree-weak-one-one-estimate` · lemma — Carleson signed tree weak one one estimate
- `lem-hunt-exceptional-set-and-distribution-estimates` · lemma — Hunt exceptional set and distribution estimates
- `lem-carleson-restricted-weak-interpolation` · lemma — Carleson restricted weak interpolation
- `thm-carleson-maximal-operator-is-strong-ltwo` · theorem — Carleson maximal operator is strong ltwo
- `lem-carleson-real-line-to-torus-transfer` · lemma — Carleson real line to torus transfer
- `thm-carleson-hunt-maximal-inequality-on-the-torus` · theorem — Carleson hunt maximal inequality on the torus

### `carleson-hunt-time-frequency-theorem-examples` — The Carleson–Hunt Time–Frequency Theorem: Examples (3 item(s))

- `ex-two-comparable-and-two-incomparable-carleson-tiles` · example — Two comparable and two incomparable carleson tiles
- `ex-balancing-density-and-size-levels-in-the-carleson-sum` · example — Balancing density and size levels in the carleson sum
- `rem-carleson-hunt-does-not-include-the-lone-endpoint` · remark — Carleson hunt does not include the lone endpoint

## Your seams

Your pages depend on another group's:

- `carleson-hunt-time-frequency-theorem` requires `schwartz-space-and-the-plancherel-theorem` (group b, batch 15)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-9f1f4f613041edd90f79dfb2 · `lem-wave-packet-model-dominates-the-linearised-carleson-operator`** (from group a, presentation) — The symbol κ denotes the reconstruction constant κ = (1/log2)∫H(t)dt/t in this item, while def-density-size-and-tree-count-for-carleson-tiles uses κ = 20 for the weight exponent; both are locally defined, but the clash is visible on one page and can mislead a constants check.
- **s8a-57e1e1c2aa2b9a335a4991b3 · `ex-two-comparable-and-two-incomparable-carleson-tiles`** (from group a, presentation) — This example (and ex-balancing-density-and-size-levels-in-the-carleson-sum) gives its argument under a '## Proof' heading, whereas the content contract's heading convention for examples is 'Verification, when supplied' (SCHEMA §3). The mathematics is fine; only the section name deviates.
- **s8a-6889ae306bf4f2fa068e5e05 · `def-unitary-eigenfunction-for-a-probability-system`** (from group a, presentation) — The closing sentence asserts that a completed Lebesgue probability space 'has the usual interval-and-atoms model modulo null sets'; that is a classification fact stated as a convention, is not proved here, and is in fact not used by any owned proof (the equivalence theorem's arguments use only general Hilbert-space and measure facts).
- **s8a-fb25c16d6288da4c37c3dba2 · `kolmogorov-block-construction-and-almost-everywhere-divergence`** (from group a, presentation) — The page header's requires list contains orthonormal-bases-parseval-and-fourier-series, which has no library page file and is authored in none of this run's 15 batches; no owned item's deps reach it. Recorded so the adjudicator can rule on this page-level prerequisite.
- **s8a-1a9341f491db4e9b962b4724 · `lem-carleson-forest-summation-gives-restricted-weak-ltwo`** (from group a, presentation) — No item file declares this lemma in its deps (only the A-page prose names it); the two Carleson theorems reach their bounds through lem-hunt-exceptional-set-and-distribution-estimates and lem-carleson-restricted-weak-interpolation, so its intended role in the L² spine is unused. Not a mathematical defect, but worth confirming against the plan's intent.
- **s8a-d933b25791d97658fb3c3c7d · `lem-carleson-single-tree-estimate`** (from group a, presentation) — Its F4 (centered real-line maximal L² bound) rests on the published cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded, whose upstream supplier thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity has a canonically recorded proof gap (step 4.1 applies Tonelli without the σ-finiteness hypothesis; step 2.1 omits the tail-integrability note for the weak-(1,1) application). research/published-consumer-supplier-ledger.md already records this and states the Euclidean consumer is not additionally blocked, so this item is not defective; recorded as dependency debt only.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-chacon-correlation-subsequence-prevents-mixing` | `weak-mixing-and-the-chacon-transformation-examples` | gpt-5.6-terra | `cfcec32498b153978cd708c5472a1489936376e8155951f7e380139a4bd73c33` |
| `def-chacon-three-cut-one-spacer-towers` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `5dadde290aeb9e013c4ec1342d89f64775fa3ac6c0b05c3a01a26da6f039b936` |
| `def-density-size-and-tree-count-for-carleson-tiles` | `carleson-hunt-time-frequency-theorem` | gpt-5.6-terra | `d6144307997e8997988cadfed7473328daebf2539a7d4f1a0bee5b6cb0bbb38e` |
| `fs-weak-mixing-implies-strong-mixing` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `8ce6629125b43cc8c76396f425fec4604fed4b45f972f2689eaf5fb447eeff43` |
| `lem-carleson-forest-summation-gives-restricted-weak-ltwo` | `carleson-hunt-time-frequency-theorem` | gpt-5.6-terra | `1aa24c7d08db660f3e7706f4374e28515665545d2d9da4485a44b71d1347bf36` |
| `lem-carleson-restricted-weak-interpolation` | `carleson-hunt-time-frequency-theorem` | gpt-5.6-terra | `10427f8d0454e3bc0fdc1b3827d6c8e7dfecac9e6852c2a8361dc23f218f4951` |
| `lem-carleson-signed-tree-weak-one-one-estimate` | `carleson-hunt-time-frequency-theorem` | gpt-5.6-terra | `c8f7dfeafd26049b051cf97d7c5c60ca0d30b8b22f8d11f07617443374b47b8f` |
| `lem-chacon-eigenfunctions-are-constant` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `87ae1e3d3d9fadd2dc440866c376497d6a39dc1183c501f0b428ce91954883a9` |
| `lem-closed-l-two-subspaces-have-orthogonal-projections` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `f3135e234aba12847cce48d105241d88249277e77bac64aa1c14fb2421eac51f` |
| `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `814432d40e36db28acea3bc7177d9da13214b327b21b273d3c73d2f46b978076` |
| `lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `80a7a43dc5628670e35941039c077d59f585af17d12355d8f2c94a32d6240894` |
| `lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `9b6b74e0d63d15a728e90799e617926e344d61450b115e9975210b27d6212f1c` |
| `lem-square-integrable-kernels-define-bounded-compact-integral-operators` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `d97ffba35a96582f10d7787b1707e9a4cf785619da98267a369e5f5e0e85b4db` |
| `thm-carleson-hunt-maximal-inequality-on-the-torus` | `carleson-hunt-time-frequency-theorem` | gpt-5.6-terra | `6d046193fd0db811f5ec67d237428bf3b19ac2523ff100dd3935e3787c97be99` |
| `thm-chacon-transformation-is-ergodic` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `7cac937a833aee49cdb8fc50fc0f64bbed9060ee41c4a5a2bd81a619e700c504` |
| `thm-weak-mixing-is-equivalent-to-absence-of-nonconstant-eigenfunctions` | `weak-mixing-and-the-chacon-transformation` | gpt-5.6-terra | `7f255533da4b74856e28b17382c2b6abcf470cf625a5b3a22ab5001b58b9b34c` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-20`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-20-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-20-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
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
`research/phase-2-next-20-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-20-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-20-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
