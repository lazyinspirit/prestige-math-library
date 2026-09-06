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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
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

run: frontier-31a
role: alpha-adjudicate
label: step8-h
covers: 4, 15

# Step 8 adjudication — group **h**, run `frontier-31a`

You are the group Alpha for batches **4**, **15**: 2 A/B pair(s), 4 page(s), 43 item(s), 17 open rejection(s) over 17 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-h-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `infinite-product-measures-and-kolmogorov-extension` | A | probability | 288.101 | `independence-borel-cantelli-and-zero-one-laws-examples`, `complete-metrizability-and-baire` |
| 4 | `infinite-product-measures-and-kolmogorov-extension-examples` | B | probability | 288.102 | `infinite-product-measures-and-kolmogorov-extension` |
| 15 | `the-structural-criterion-for-property-star` | A | combinatorics | 433 | `property-star-and-comb-outcomes` |
| 15 | `the-structural-criterion-for-property-star-examples` | B | combinatorics | 434 | `the-structural-criterion-for-property-star` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `infinite-product-measures-and-kolmogorov-extension` — Infinite Product Measures and Kolmogorov Extension (21 item(s))

- `def-coordinate-maps-and-cylinder-sigma-algebra` · definition — Coordinate maps, finite-coordinate cylinders, and the cylinder $\sigma$-algebra
- `lem-finite-coordinate-cylinders-form-a-pi-system` · lemma — Finite-coordinate cylinders form a $\pi$-system
- `lem-finite-coordinate-cylinder-sets-form-an-algebra` · lemma — Finite-coordinate cylinder sets form an algebra
- `def-consistent-family-of-finite-dimensional-distributions` · definition — A consistent family of finite-dimensional distributions
- `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` · lemma — Consistent finite-dimensional laws define a well-defined finitely additive cylinder law
- `lem-countable-product-cylinder-premeasure-is-countably-additive` · lemma — The countable-product cylinder premeasure is countably additive
- `thm-countable-product-of-probability-spaces` · theorem — Assuming countable and dependent choice, countable products of arbitrary probability spaces
- `cor-coordinate-random-elements-on-a-countable-product-are-independent` · corollary — Coordinate random elements of a countable product are independent
- `cor-countable-independent-copies-exist` · corollary — Countably many independent copies of a prescribed law exist
- `def-stochastic-process-and-finite-dimensional-distributions` · definition — Stochastic processes and their finite-dimensional distributions
- `def-law-modification-and-indistinguishability-of-processes` · definition — Process law, modification, and indistinguishability
- `def-standard-borel-space` · definition — Standard Borel spaces
- `lem-finite-products-of-standard-borel-spaces-are-standard-borel` · lemma — Finite products of standard Borel spaces are standard Borel
- `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` · theorem — Assuming countable choice, Borel probability measures on Polish spaces are inner regular
- `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` · theorem — Assuming the Axiom of Choice, Kolmogorov extension for arbitrary families of standard Borel coordinate spaces
- `cor-arbitrary-product-measure-for-standard-borel-probability-spaces` · corollary — Arbitrary products of standard Borel probability spaces
- `cor-canonical-process-realizes-consistent-finite-dimensional-laws` · corollary — The canonical coordinate process realizes consistent finite-dimensional laws
- `thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions` · theorem — Finite-dimensional distributions determine a process law on the cylinder sigma-algebra
- `lem-cylinder-sigma-events-depend-on-countably-many-coordinates` · lemma — Assuming countable choice, cylinder-measurable events depend on only countably many coordinates
- `rem-cylinder-sigma-algebra-versus-full-product-power-set` · remark — The cylinder sigma-algebra need not be the full path-space power set
- `rem-kolmogorov-extension-state-space-boundary` · remark — State-space and index-set boundaries of the two extension routes

### `infinite-product-measures-and-kolmogorov-extension-examples` — Infinite Product Measures and Kolmogorov Extension — Examples (8 item(s))

- `ex-infinite-coin-toss-space` · example — The infinite fair-coin-toss space
- `ex-iid-sequence-with-a-prescribed-law` · example — An i.i.d. sequence with a prescribed law
- `ex-independent-but-not-identically-distributed-coordinate-sequence` · example — Independent but non-identically distributed coordinates
- `ex-canonical-random-walk-from-product-increments` · example — A canonical random walk from product increments
- `ex-uncountable-bernoulli-coordinate-process` · example — An uncountable Bernoulli coordinate process
- `cex-modification-need-not-be-indistinguishable` · counterexample — A modification need not be indistinguishable
- `cex-consistent-marginals-alone-do-not-specify-joint-laws` · counterexample — One-dimensional marginals alone do not specify a joint law
- `cex-a-noncylinder-path-functional-may-fail-measurability` · counterexample — A noncylinder path functional may fail to be measurable

### `the-structural-criterion-for-property-star` — The Structural Criterion for Property (*) (10 item(s))

- `def-structural-comb-partition-hypothesis` · definition — The structural comb-partition hypothesis
- `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set` · lemma — A large Y-part in a structural comb partition yields the clique-or-stable-set outcome
- `lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade` · lemma — A transversal of wide structural blocks yields the pure blockade outcome
- `lem-no-property-star-outcome-forces-a-small-structural-block-partition` · lemma — Failure of the first and third property-(*) outcomes forces one small-block structural partition
- `def-integral-geometric-layers-of-a-decreasing-block-partition` · definition — Integral geometric layers of a decreasing block partition
- `lem-integral-geometric-layers-have-rounded-cutoff-bounds` · lemma — Integral geometric layers exist, cover the partition, and retain the required cutoff bounds
- `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` · lemma — Homogeneous sets in pure-blockade patterns lift to complete or anticomplete blockades
- `lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade` · lemma — A wide integral geometric layer forces the complete-or-anticomplete property-(*) blockade
- `lem-successive-small-integral-geometric-layers-contradict-a-large-x-part` · lemma — Successive small integral geometric layers contradict a large X-part
- `thm-the-structural-comb-partition-criterion-implies-property-star` · theorem — The structural comb-partition criterion implies property (*)

### `the-structural-criterion-for-property-star-examples` — The Structural Criterion for Property (*) — Examples (4 item(s))

- `ex-a-large-y-part-in-a-structural-comb-partition` · example — A large Y-part in a structural comb partition
- `ex-a-wide-transversal-in-four-structural-comb-partitions` · example — A wide transversal in four structural comb partitions
- `ex-integral-geometric-layers-for-fourteen-ordered-blocks` · example — Integral geometric layers for fourteen ordered blocks
- `cex-omitting-cross-block-purity-breaks-the-transversal-conclusion` · counterexample — Omitting cross-block purity breaks the transversal conclusion

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-35bd272d56c5d8470dbbb80f · `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`** (from group h, gap-a-reader-closes) — Proof 2.1 says that, after replacing each nonempty closed-ball cover member by a point of K_0 and “doubling the radius,” it obtains a finite net. If y and the selected centre p both lie in a closed ball of radius delta, the triangle inequality gives d(y,p)<=2 delta, whereas a net uses an open ball and requires a strict bound. Choosing the original scale strictly below the requested net radius, or using a larger radius, closes this, but the written inference is not valid as stated.
- **s8a-9bc2614340836ba932fd9836 · `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`** (from group h, gap-a-reader-closes) — Proof 2.1 invokes successive convergent-subsequence extraction and a diagonal limit from the compact finite-coordinate bases, but its cited facts establish only finite products being standard Borel and inner regularity. It does not state or cite the needed compact-metric sequential compactness/diagonal argument, nor explicitly transport those compact bases to compatible Polish product presentations. This is the central compactness step in the asserted continuity-at-empty-set proof.
- **s8a-7ee11d610f1a1f5ac356d7f1 · `ex-a-large-y-part-in-a-structural-comb-partition`** (from group h, gap-a-reader-closes) — Verification 1.1 says [F1] yields a clique or stable set of size at least (16/2)^(1/2)=sqrt(8). But [F1] cites the large-Y lemma whose stated conclusion is only at least w^(c/2), which here is 2. The stronger sqrt(8) bound appears in that lemma's proof, not its Statement, and this example supplies no separate Erdős–Hajnal fact from which to derive it.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-coordinate-random-elements-on-a-countable-product-are-independent` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `209cfcb4b407e395b473debcf68b2ffb7f92c247b873e19f08e73bb20862abeb` |
| `cor-countable-independent-copies-exist` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `24368d517942568f7b6065905966d853258645e8ec7847137d86850f8d77e8b5` |
| `def-consistent-family-of-finite-dimensional-distributions` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `c11957eb2af718c57dee5934374df6a2bef77d9e4a5387bae9055d234984d298` |
| `def-coordinate-maps-and-cylinder-sigma-algebra` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `4341f3fa4e17c2260b76a1e92afcb7cb0ff7236812e329c050bead8806a7454c` |
| `def-law-modification-and-indistinguishability-of-processes` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `a33396c881ce54346771bf2c5010dcd5a9947938c4a919134f50e2c3b8871969` |
| `def-structural-comb-partition-hypothesis` | `the-structural-criterion-for-property-star` | gpt-5.6-terra | `75950332dbdac469e16a213e9da71a9912fe6a4d94f90415f2c6a1e99d56489b` |
| `ex-a-large-y-part-in-a-structural-comb-partition` | `the-structural-criterion-for-property-star-examples` | gpt-5.6-terra | `334987e3ac92b1f58bc14548625e706602a9381d2bea428afc97eecad2cb3b87` |
| `ex-a-wide-transversal-in-four-structural-comb-partitions` | `the-structural-criterion-for-property-star-examples` | gpt-5.6-terra | `8466b025d3652006d26b27f8c7ffa31bb773fae16af88181356f1b41d3a8f7b4` |
| `ex-canonical-random-walk-from-product-increments` | `infinite-product-measures-and-kolmogorov-extension-examples` | gpt-5.6-terra | `6ecd7d003b84cd38cfd024c4660eb773cd2caddc384210aed1ba1053e25def74` |
| `ex-iid-sequence-with-a-prescribed-law` | `infinite-product-measures-and-kolmogorov-extension-examples` | gpt-5.6-terra | `3f1f0b355f84ecc97102f43b90395d9ecb7722e6441f2bcdc43f99138af7769f` |
| `ex-infinite-coin-toss-space` | `infinite-product-measures-and-kolmogorov-extension-examples` | gpt-5.6-terra | `8d70ed0639b6c50b45e1c757177783c1ad32cb419c5d881b79bd93f87a43f048` |
| `lem-countable-product-cylinder-premeasure-is-countably-additive` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `08ce64a7560045d45fa69fc4754a653d205f93fcf68e67e1eccb0b2ac83c77c3` |
| `lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades` | `the-structural-criterion-for-property-star` | gpt-5.6-terra | `a701645c85aa8d1eaf0db61f142a58e1a5adb92621094e3c71022fb8668dc449` |
| `rem-cylinder-sigma-algebra-versus-full-product-power-set` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `ffd7fe83e484550f0e238ccc8c197e9371d53f45bb9b5e1af10f844f99e9de46` |
| `thm-borel-probability-measures-on-polish-spaces-are-inner-regular` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `2bba05b38d38e9d2811435c944ff67eaafe118e0b71a4954f617067f01ff79af` |
| `thm-countable-product-of-probability-spaces` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `eddaabc7e6f57d3dce25aca65eac7d9b06c4d77a95a532cf13b234c2b2e88c97` |
| `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` | `infinite-product-measures-and-kolmogorov-extension` | gpt-5.6-terra | `e40f2eb919d644d551421eed058fc1ec0761397219811fa7c0aaf6a9f028426d` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
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
