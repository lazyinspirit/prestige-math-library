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
group work, `research/frontier-32-alpha-groups.json` is the assignment: it permits at
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

run: frontier-32
role: alpha-group-read
label: read-again-b-1

# Step 7 whole-group reading — group **b**, run `frontier-32`

You are the group Alpha for batches **3**, **5**, **6**: 3 A/B pair(s), 6 page(s), 88 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
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
| 3 | `radon-measures-and-the-riesz-markov-kakutani-theorem` | A | measure-theory | 288.039 | `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples`, `partitions-of-unity-and-paracompactness` |
| 3 | `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` | B | measure-theory | 288.04 | `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 5 | `modes-of-convergence-for-random-variables` | A | probability | 288.103 | `infinite-product-measures-and-kolmogorov-extension-examples` |
| 5 | `modes-of-convergence-for-random-variables-examples` | B | probability | 288.104 | `modes-of-convergence-for-random-variables` |
| 6 | `lacunary-fourier-series-and-sidon-sets` | A | fourier-analysis | 288.14014 | `absolute-convergence-and-the-wiener-algebra-examples` |
| 6 | `lacunary-fourier-series-and-sidon-sets-examples` | B | fourier-analysis | 288.14016 | `lacunary-fourier-series-and-sidon-sets` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `radon-measures-and-the-riesz-markov-kakutani-theorem` — Radon Measures and the Riesz Markov Kakutani Theorem (36 item(s))

- `def-compact-support-c-c-and-c-zero-on-an-lch-space` · definition — Compact support, C_c(X), and C_0(X) on a locally compact Hausdorff space
- `def-cutoff-relation-f-prec-u` · definition — The compactly supported cutoff relation f prec U
- `def-positive-linear-functional-on-c-c` · definition — Positive linear functionals on C_c(X)
- `def-radon-measure-on-an-lch-space` · definition — Radon measure on a locally compact Hausdorff space
- `def-regular-borel-measure-on-an-lch-space` · definition — Regular Borel measure on a locally compact Hausdorff space
- `def-regular-complex-borel-measure-on-an-lch-space` · definition — Regular complex Borel measures
- `lem-positive-linear-functionals-on-c-c-are-monotone` · lemma — A positive linear functional on C_c(X) is monotone
- `lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set` · lemma — LCH Urysohn cutoff for a compact set inside an open set
- `lem-finite-lch-partition-of-unity-near-a-compact-set` · lemma — A finite compactly supported partition of unity near a compact set
- `lem-rmk-functional-outer-content-is-well-defined` · lemma — The RMK functional outer content is well defined
- `thm-rmk-functional-outer-content-is-an-outer-measure` · theorem — The RMK functional outer content is an outer measure
- `thm-rmk-open-sets-are-caratheodory-measurable` · theorem — Open sets are Caratheodory measurable for the RMK outer measure
- `lem-rmk-compact-set-formula-and-local-finiteness` · lemma — Compact-set formula and local finiteness of the RMK measure
- `thm-rmk-representing-measure-is-inner-regular-on-open-sets` · theorem — The RMK representing measure is inner regular on open sets
- `thm-rmk-positive-functional-is-integration-against-its-representing-measure` · theorem — Positive functionals on C_c(X) are integration against a Radon measure
- `thm-rmk-uniqueness-among-radon-measures` · theorem — Uniqueness of the RMK representing measure among Radon measures
- `thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact` · theorem — Sigma-compact open sets make locally finite Borel measures regular
- `cor-second-countable-lch-locally-finite-borel-measures-are-regular` · corollary — Locally finite Borel measures on second-countable LCH spaces are regular
- `thm-lebesgue-measure-is-a-radon-measure-on-rn` · theorem — Lebesgue measure is a Radon measure on R^n
- `prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r` · proposition — Lebesgue--Stieltjes regularity agrees with the LCH Radon convention on R
- `thm-lusin-theorem-for-radon-measures` · theorem — Lusin's theorem for a Radon measure
- `thm-c-c-is-dense-in-l-p-for-radon-measures` · theorem — C_c(X) is dense in L^p(mu) for a Radon measure
- `lem-positive-c-zero-functionals-have-finite-regular-representing-measures` · lemma — Positive C_0(X) functionals have finite regular representing measures
- `lem-bounded-real-c-zero-functional-is-a-difference-of-positive-functionals` · lemma — A bounded real C_0(X) functional is a difference of positive functionals
- `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals` · theorem — The bounded complex dual of C_0(X) is regular complex measures
- `rem-rmk-functional-analysis-uses` · remark — Functional-analysis uses of the Riesz--Markov--Kakutani theorem
- `lem-countable-intersections-of-club-subsets-of-omega-one-are-club` · lemma — Countable intersections of club subsets of omega_1 are club
- `thm-dieudonne-club-set-function-is-a-borel-measure` · theorem — The Dieudonne club-set function is a Borel measure
- `lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant` · lemma — Continuous functions on [0, omega_1] are eventually constant
- `lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions` · lemma — The Dieudonne measure and top-point Dirac mass agree on continuous functions
- `fs-every-borel-measure-on-an-lch-space-is-radon` · false-statement — Every Borel measure on an LCH space is Radon
- `fs-rmk-representing-measure-is-unique-among-all-borel-measures` · false-statement — An RMK functional determines every Borel representing measure uniquely
- `fs-positive-linear-functionals-on-c-c-are-uniformly-bounded` · false-statement — Every positive linear functional on C_c(X) is uniformly sup-norm bounded
- `fs-inner-regularity-on-open-sets-implies-inner-regularity-on-all-borel-sets` · false-statement — Inner regularity on open sets implies inner regularity on all Borel sets
- `fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular` · false-statement — Every finite Borel measure on a compact Hausdorff space is regular
- `fs-c-c-is-dense-in-l-infinity-for-radon-measures` · false-statement — C_c(X) is dense in L^infinity(mu) for every Radon measure

### `radon-measures-and-the-riesz-markov-kakutani-theorem-examples` — Radon Measures and the Riesz Markov Kakutani Theorem — Examples (7 item(s))

- `ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure` · example — The Riemann integral functional is represented by Lebesgue measure on an interval
- `ex-point-evaluation-functional-is-represented-by-a-dirac-measure` · example — Point evaluation is represented by a Dirac measure
- `ex-locally-integrable-density-functional-is-represented-by-g-dlambda` · example — A locally integrable density functional is represented by g dlambda
- `ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure` · example — A Lebesgue--Stieltjes functional is represented by its Stieltjes measure
- `ex-counting-functional-on-a-discrete-lch-space` · example — Counting measure represents finite-support summation on a discrete LCH space
- `cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular` · counterexample — The Dieudonne Borel measure on [0, omega_1] is not regular
- `cex-distinct-borel-measures-can-represent-the-same-c-c-functional` · counterexample — Distinct Borel measures can represent the same C_c functional

### `modes-of-convergence-for-random-variables` — Modes of Convergence for Random Variables (23 item(s))

- `def-almost-sure-convergence-of-random-variables` · definition — Almost-sure convergence of real random variables
- `lem-almost-sure-convergence-event-is-measurable` · lemma — The almost-sure convergence event is measurable
- `def-convergence-in-probability` · definition — Convergence in probability
- `def-convergence-in-lp-for-random-variables` · definition — L^p convergence for random variables
- `def-convergence-in-distribution-for-real-random-variables` · definition — Convergence in distribution for real random variables
- `thm-limits-in-probability-are-unique-almost-surely` · theorem — Limits in probability are unique almost surely
- `thm-almost-sure-convergence-implies-convergence-in-probability` · theorem — Almost-sure convergence implies convergence in probability
- `thm-lp-convergence-implies-convergence-in-probability` · theorem — L^p convergence implies convergence in probability
- `thm-lq-convergence-implies-lp-convergence-on-a-probability-space` · theorem — L^q convergence implies L^p convergence on a probability space
- `thm-convergence-in-probability-implies-convergence-in-distribution` · theorem — Convergence in probability implies convergence in distribution
- `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` · theorem — Convergence in distribution to a constant is convergence in probability
- `thm-almost-sure-subsequence-from-convergence-in-probability` · theorem — An almost-surely convergent subsequence from convergence in probability
- `thm-subsequence-characterization-of-convergence-in-probability` · theorem — Subsequence characterization of convergence in probability
- `def-probability-convergence-metric` · definition — A metric for convergence in probability
- `thm-probability-convergence-is-metrized-by-d-zero` · theorem — Convergence in probability is metrized by d_0
- `thm-dominated-convergence-in-lp` · theorem — Dominated convergence in L^p
- `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence` · theorem — Uniform integrability plus convergence in probability implies L^1 convergence
- `thm-l1-convergence-implies-uniform-integrability` · theorem — L^1 convergence implies uniform integrability
- `cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence` · corollary — Uniform integrability characterizes L^1 convergence under probability convergence
- `thm-slutsky-for-real-random-variables` · theorem — Slutsky's theorem for real random variables
- `rem-complete-convergence-implication-diagram` · remark — Complete convergence implication diagram
- `lem-pairing-preserves-convergence-in-probability` · lemma — Pairing preserves convergence in probability
- `thm-continuous-maps-preserve-convergence-in-probability` · theorem — Continuous maps preserve convergence in probability

### `modes-of-convergence-for-random-variables-examples` — Modes of Convergence for Random Variables — Examples (9 item(s))

- `cex-convergence-in-probability-need-not-be-almost-sure` · counterexample — Convergence in probability need not be almost sure
- `cex-almost-sure-convergence-need-not-imply-lp-convergence` · counterexample — Almost-sure convergence need not imply L^p convergence
- `cex-lp-convergence-need-not-imply-almost-sure-convergence` · counterexample — L^p convergence need not imply almost-sure convergence
- `cex-convergence-in-distribution-need-not-be-in-probability` · counterexample — Convergence in distribution need not be convergence in probability
- `cex-convergence-in-probability-need-not-imply-lp-convergence` · counterexample — Convergence in probability need not imply L^p convergence
- `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` · counterexample — L^p convergence need not imply L^q convergence when p is less than q
- `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` · counterexample — Almost-sure convergence does not imply convergence of expectations
- `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence` · example — A probability-convergent sequence with a prescribed fast almost-sure subsequence
- `ex-uniform-integrability-repairs-the-expectation-limit` · example — Uniform integrability repairs the expectation limit

### `lacunary-fourier-series-and-sidon-sets` — Lacunary Fourier Series and Sidon Sets (9 item(s))

- `def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series` · definition — Hadamard-lacunary sequences and lacunary trigonometric series
- `lem-finite-lacunary-fourier-sums-have-their-coefficient-ell-two-norm` · lemma — Finite lacunary Fourier sums have their coefficient ell-two norm
- `lem-hadamard-gaps-bound-additive-representations` · lemma — Hadamard gaps bound the additive representations used in even moments
- `thm-lacunary-lp-norm-equivalence` · theorem — L-p norm equivalence for finite Hadamard-lacunary sums
- `cor-lacunary-series-lp-membership-is-coefficient-ell-two` · corollary — L-p convergence of a lacunary series is equivalent to ell-two coefficients
- `def-sidon-set-in-the-integer-dual` · definition — Sidon sets in the integer dual
- `lem-riesz-product-for-a-hadamard-lacunary-set` · lemma — Riesz-product witnesses for a Hadamard-lacunary set
- `thm-hadamard-lacunary-sets-are-sidon` · theorem — Hadamard-lacunary sets are Sidon
- `cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients` · corollary — A continuous Fourier series supported on a Sidon set has ell-one coefficients

### `lacunary-fourier-series-and-sidon-sets-examples` — Lacunary Fourier Series and Sidon Sets — Examples (4 item(s))

- `ex-powers-of-two-form-a-hadamard-lacunary-sequence` · example — The powers of two form a Hadamard-lacunary sequence
- `cex-gaps-tending-to-infinity-need-not-be-hadamard-lacunary` · counterexample — Gaps tending to infinity need not be Hadamard-lacunary
- `ex-riesz-product-for-three-powers-of-three` · example — A Riesz product for three powers of three
- `cex-the-integers-are-not-a-sidon-set` · counterexample — The integers are not a Sidon set

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-32`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


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
