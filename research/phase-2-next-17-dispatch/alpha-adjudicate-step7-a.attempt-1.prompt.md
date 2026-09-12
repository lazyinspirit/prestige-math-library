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
role: alpha-adjudicate
label: step7-a
covers: 1, 3

# Step 7 adjudication — group **a**, run `phase-2-next-17`

You are the group Alpha for batches **1**, **3**: 2 A/B pair(s), 4 page(s), 68 item(s), 15 open rejection(s) over 15 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-a-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `measure-preserving-transformations-and-poincare-recurrence` | A | measure-theory | 288.043 | `measure-preserving-systems-and-mixing-criteria`, `weak-mixing-and-the-chacon-transformation`, `the-lebesgue-integral-and-the-convergence-theorems`, `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `outer-measure-and-the-caratheodory-extension-theorem`, `compactness`, `countability-and-uncountability`, `the-topology-of-euclidean-space`, `sequences-and-limits` |
| 1 | `measure-preserving-transformations-and-poincare-recurrence-examples` | B | measure-theory | 288.044 | `measure-preserving-transformations-and-poincare-recurrence` |
| 3 | `central-limit-theorems` | A | probability | 288.113 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `weak-laws-and-series-of-independent-random-variables`, `strong-laws-of-large-numbers`, `weak-convergence-tightness-and-representation`, `characteristic-functions-inversion-and-continuity`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-spectral-theorem-and-singular-value-decomposition`, `darboux-lhopital-and-taylor` |
| 3 | `central-limit-theorems-examples` | B | probability | 288.114 | `central-limit-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measure-preserving-transformations-and-poincare-recurrence` — Measure Preserving Transformations and Poincare Recurrence (34 item(s))

- `lem-no-return-sets-have-null-preimage-towers` · lemma — No-return sets have disjoint null preimage towers
- `thm-poincare-recurrence-for-finite-measure-preserving-systems` · theorem — Poincare recurrence for finite measure-preserving systems
- `cor-topological-poincare-recurrence-on-second-countable-spaces` · corollary — Topological recurrence on second-countable spaces
- `def-first-return-time-and-induced-transformation` · definition — First-return times and induced transformations
- `prop-first-return-time-and-induced-map-are-measurable` · proposition — First-return time and induced map are measurable
- `thm-induced-transformation-preserves-the-restricted-measure` · theorem — Induced transformations preserve restricted finite measure
- `prop-inducing-preserves-ergodicity` · proposition — Inducing an ergodic system gives an ergodic system
- `thm-kac-return-time-formula` · theorem — Kac return-time formula without invertibility
- `thm-kac-integral-formula-for-excursions` · theorem — Kac integral formula for excursions
- `def-circle-rotation-and-doubling-map` · definition — The circle, rotations and the doubling map
- `prop-circle-rotations-preserve-lebesgue-measure` · proposition — Circle rotations preserve Lebesgue measure
- `lem-irrational-circle-orbits-are-dense` · lemma — Irrational circle orbits are dense
- `thm-circle-rotation-is-ergodic-iff-angle-is-irrational` · theorem — Circle rotation is ergodic for Lebesgue measure exactly at irrational angles
- `def-integer-base-map-on-the-circle` · definition — Integer-base maps and b-adic circle intervals
- `prop-integer-base-map-preserves-lebesgue-measure` · proposition — Integer-base circle maps preserve Lebesgue measure
- `thm-integer-base-map-is-strongly-mixing` · theorem — Every integer-base circle map is strongly mixing
- `prop-doubling-map-preserves-lebesgue-measure` · proposition — Doubling preserves Lebesgue measure
- `thm-doubling-map-is-ergodic-for-lebesgue-measure` · theorem — Doubling is ergodic for Lebesgue measure
- `prop-doubling-map-is-strongly-mixing` · proposition — Doubling is strongly mixing for Lebesgue measure
- `def-binary-sequence-cylinders-and-fair-coin-content` · definition — Binary-sequence cylinders and fair-coin content
- `lem-binary-sequence-space-is-compact-without-tychonoff` · lemma — Binary-sequence space is compact without Tychonoff
- `lem-fair-coin-cylinder-content-is-a-premeasure` · lemma — Fair-coin cylinder content is a premeasure
- `thm-fair-coin-measure-on-binary-sequences` · theorem — Fair-coin measure on binary sequences
- `thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing` · theorem — The fair-coin one-sided shift preserves measure and is mixing
- `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family` · lemma — A countable dense family of continuous functions on a compact metric space
- `lem-positive-functionals-on-compact-metric-spaces-have-probability-representations` · lemma — A compact-metric probability representation using countable choice
- `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences` · lemma — Probability sequences on compact metric spaces have integral-convergent subsequences
- `thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces` · theorem — Krylov–Bogolyubov existence of an invariant probability
- `fs-measure-preserving-transformations-are-invertible` · false-statement — False: measure-preserving transformations are invertible
- `fs-ergodicity-implies-strong-mixing` · false-statement — False: ergodicity implies strong mixing
- `fs-poincare-recurrence-without-finite-total-measure` · false-statement — False: Poincare recurrence needs no finite total measure
- `fs-ergodicity-forces-only-empty-and-full-invariant-sets` · false-statement — False: an ergodic invariant sigma-algebra has only two sets
- `fs-ergodicity-forces-every-orbit-dense` · false-statement — False: every orbit of an ergodic system is dense
- `fs-continuous-invariant-functions-characterize-measure-ergodicity` · false-statement — False: constant continuous invariants characterize measure ergodicity

### `measure-preserving-transformations-and-poincare-recurrence-examples` — Measure Preserving Transformations and Poincare Recurrence — Examples (11 item(s))

- `ex-rational-rotation-invariant-set` · example — An explicit invariant set for a rational rotation
- `ex-doubling-dyadic-preimage-computation` · example — Dyadic preimages under doubling
- `ex-base-three-cylinder-intervals-and-preimages` · example — Base-three cylinders and their preimages
- `ex-fair-coin-cylinder-measures-tabulated` · example — Fair-coin cylinder masses and separated blocks
- `ex-doubling-recurrence-to-a-dyadic-interval` · example — Recurrence to a dyadic interval under doubling
- `ex-kac-mean-return-to-a-half-circle` · example — Kac mean return to a half-circle under irrational rotation
- `cex-mod-null-invariance-is-not-strict-invariance` · counterexample — Mod-null invariance need not be strict invariance
- `cex-doubling-ergodicity-depends-on-the-invariant-measure` · counterexample — Doubling ergodicity depends on the invariant measure
- `cex-irrational-rotation-is-not-weakly-mixing` · counterexample — Irrational rotation is ergodic but not weakly mixing
- `cex-kac-formula-needs-ergodicity` · counterexample — Kac normalization needs ergodicity
- `ex-gauss-map-preserves-gauss-measure` · example — The Gauss map preserves Gauss measure

### `central-limit-theorems` — Central Limit Theorems (16 item(s))

- `lem-characteristic-function-of-a-normal-law` · lemma — Characteristic function of a normal law
- `lem-second-order-characteristic-function-expansion` · lemma — Second-order characteristic-function expansion
- `lem-product-of-near-one-characteristic-factors` · lemma — Products of near-one characteristic factors
- `thm-lindeberg-levy-iid-central-limit-theorem` · theorem — Lindeberg-Levy iid central limit theorem
- `lem-ac-supplies-sequential-choices-for-probability-constructions` · lemma — AC supplies countable selections and prescribed serial paths
- `cor-de-moivre-laplace-central-limit-theorem` · corollary — De Moivre-Laplace central limit theorem
- `def-row-wise-independent-centered-triangular-array` · definition — Row-wise independent centered triangular array
- `def-total-row-variance-and-lindeberg-condition` · definition — Total row variance and the Lindeberg condition
- `lem-lindeberg-condition-implies-feller-negligibility` · lemma — The Lindeberg condition implies Feller negligibility
- `thm-lindeberg-feller-central-limit-theorem-sufficiency` · theorem — Lindeberg-Feller central limit theorem: sufficiency
- `thm-feller-converse-to-lindeberg-feller` · theorem — Feller converse to Lindeberg-Feller
- `cor-lyapunov-central-limit-theorem` · corollary — Lyapunov central limit theorem
- `def-multivariate-normal-law` · definition — Multivariate normal law, including singular covariance
- `lem-characteristic-function-of-a-multivariate-normal-law` · lemma — Characteristic function of a multivariate normal law
- `thm-multivariate-iid-central-limit-theorem` · theorem — Multivariate iid central limit theorem
- `rem-clt-convergence-is-only-in-distribution` · remark — Central-limit convergence is only in distribution

### `central-limit-theorems-examples` — Central Limit Theorems — Examples (7 item(s))

- `ex-normal-approximation-to-binomial-probabilities` · example — Normal approximation to binomial probabilities
- `ex-clt-for-sums-of-uniform-random-variables` · example — CLT for sums of uniform random variables
- `ex-lyapunov-condition-for-nonidentical-summands` · example — Lyapunov condition for nonidentical summands
- `ex-lindeberg-array-with-no-identically-distributed-row` · example — A Lindeberg array with no identically distributed row
- `ex-degenerate-multivariate-gaussian-limit` · example — A degenerate multivariate Gaussian limit
- `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling` · counterexample — Infinite variance can defeat square-root-n CLT scaling
- `cex-feller-negligibility-cannot-be-removed-from-the-converse` · counterexample — Feller negligibility cannot be removed from the converse

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-96c9fa3253d84007809bbf39 · `thm-circle-rotation-is-ergodic-iff-angle-is-irrational`** (from group a, gap-a-reader-closes) — Step 2.1 of the irrational direction ends: 'Subtracting the two exceptional portions, this intersection would contain points in both A and its complement on a set of measure at least 19r/10-2r/5=3r/2>0, impossible.' The reader must reconstruct the argument: with K = J intersect R^m I, B1 = R^m I minus A of measure < r/5 and B2 = J intersect A of measure < r/5, one has K minus (B1 union B2) contained in A intersect A-complement = empty while lambda(K minus (B1 union B2)) >= lambda(K) - 2r/5 > 19r/10 - 2r/5 = 3r/2. The numbers and the conclusion are correct, but the sentence does not say which set has measure 3r/2 or why it is empty.
- **s8a-6ee36e270ce20371761fd054 · `thm-induced-transformation-preserves-the-restricted-measure`** (from group a, gap-a-reader-closes) — Step 2.1 says of the pieces H_n: 'Each differs from H_n intersect E_infinity by a subset of the measurable null set E minus E_infinity; these differences are themselves measurable.' Measurability of a subset of a null set needs completeness, which is not assumed here (the statement explicitly does not require invertibility, and no completeness hypothesis is present). The intended justification is available but unstated: H_n and E_infinity are both measurable, so the difference is measurable by closure under intersection and complement, and it has measure zero by monotonicity. As written the parenthetical reason is not valid in a non-complete space.
- **s8a-ac4ba8d17c1346323061463b · `ex-gauss-map-preserves-gauss-measure`** (from group a, presentation) — Step 3.1 closes with two sentences reading 'The rational-base assertion uses [F10]. The rational-base assertion uses [F11].' This is a duplicated sentence; it is harmless but should be merged into one statement naming both facts.
- **s8a-40df81b6e6ecc8c8481bd77f · `ex-lindeberg-array-with-no-identically-distributed-row`** (from group a, presentation) — Step 2.1 justifies the sum identity by 'obtained by pairing k with n+1-k and adding the n equal pair sums'. The pairing gives n/2 pairs each of sum n+1 (and, for odd n, one unpaired middle term), not n pair sums. The displayed value n(n+1)/2 is correct; only the description of the justification is inaccurate.
- **s8a-53693bf584a50340bb00930c · `def-row-wise-independent-centered-triangular-array`** (from group a, presentation) — The row-wise independence clause is stated as the rectangle product rule and then asserted to be 'independence in [[def-independent-random-elements]]', which is defined through independence of generated sigma-algebras. The equivalence is true and is published as thm-rectangle-criterion-for-independent-random-elements, but the definition cites only the definition item, so the bridge is asserted rather than cited. The CLT chain (row independence implies factorization of characteristic functions) uses it.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling` | `central-limit-theorems-examples` | gpt-5.6-terra | `cc2bb991c775df2920227e495d6d4c057bbc7737333c1e93bec19c58c5e0b07b` |
| `cex-feller-negligibility-cannot-be-removed-from-the-converse` | `central-limit-theorems-examples` | gpt-5.6-terra | `e861dd2e6862b2a9a2296ecf0889d4f7162e3f6e1cab8d465bbc93c7cd71bcc0` |
| `cex-kac-formula-needs-ergodicity` | `measure-preserving-transformations-and-poincare-recurrence-examples` | gpt-5.6-terra | `325620cf61d46208adb94e07e8474e715502367ec2f14b0a9f45ac29e038189f` |
| `cor-lyapunov-central-limit-theorem` | `central-limit-theorems` | gpt-5.6-terra | `83945386652a817339abb33f2748d3879e7ff61f28114df50f044fbb7e846141` |
| `ex-clt-for-sums-of-uniform-random-variables` | `central-limit-theorems-examples` | gpt-5.6-terra | `42d64eb2dad2f97f3906e1772688157b6d56299fd38ec728aea1fb476633856b` |
| `ex-lindeberg-array-with-no-identically-distributed-row` | `central-limit-theorems-examples` | gpt-5.6-terra | `b1b0c87181d24bafa693a9a5357f1ad1883e0acc896e66336c9f495440bbe6b4` |
| `ex-lyapunov-condition-for-nonidentical-summands` | `central-limit-theorems-examples` | gpt-5.6-terra | `c2c754aafaaf6bf45140d1d5d838507c65c0bec1a1d16df683c228cb1289117b` |
| `ex-normal-approximation-to-binomial-probabilities` | `central-limit-theorems-examples` | gpt-5.6-terra | `d02835134e9770b91aa1dd1f389151bf5845e7cb8f84ef19d5430a7806fd984e` |
| `lem-characteristic-function-of-a-normal-law` | `central-limit-theorems` | gpt-5.6-terra | `e73a8909db4c8fe836646c7b24aca7a25d19e199d6807835d6d5e343b3aa9af2` |
| `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family` | `measure-preserving-transformations-and-poincare-recurrence` | gpt-5.6-terra | `99ee206aca77c7edfb4ba8b5bd633f5366da8f3baf46a5fb2418c748d8fbe3ad` |
| `lem-second-order-characteristic-function-expansion` | `central-limit-theorems` | gpt-5.6-terra | `0667639a9f5730253e4a7f42b61e5e87e7c656cf2006ae4aba1d25b2dd1ee2c7` |
| `rem-clt-convergence-is-only-in-distribution` | `central-limit-theorems` | gpt-5.6-terra | `63751b035c896558357bad530d0fff92e604fac6edaaa38276c9d61774dc8b49` |
| `thm-doubling-map-is-ergodic-for-lebesgue-measure` | `measure-preserving-transformations-and-poincare-recurrence` | gpt-5.6-terra | `c5719eee9e01c005200996faa5474fa6665491ad408931cdad0cc1adb53972c3` |
| `thm-kac-integral-formula-for-excursions` | `measure-preserving-transformations-and-poincare-recurrence` | gpt-5.6-terra | `6dd743b06b8a790b82d7f4543590b9e88006d4465ebebf06f66346d009c99bb4` |
| `thm-multivariate-iid-central-limit-theorem` | `central-limit-theorems` | gpt-5.6-terra | `10b02accae6b0d2684001b89ee976953c360df944fc914ce3cd08dd7abd056d4` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-17`

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

Append one row per rejection to `research/phase-2-next-17-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-17-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-17-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-17-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-17-alpha-step7-<group>.md` with every
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
