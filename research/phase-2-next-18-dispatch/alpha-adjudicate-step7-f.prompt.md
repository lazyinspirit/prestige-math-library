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
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-next-18
role: alpha-adjudicate
label: step7-f
covers: 2

# Step 7 adjudication — group **f**, run `phase-2-next-18`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 60 item(s), 14 open rejection(s) over 14 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-f-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `markov-kernels-and-markov-chains` | A | probability | 288.125 | `infinite-product-measures-and-kolmogorov-extension`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability`, `stopping-times-and-optional-stopping`, `product-measures-and-the-fubini-tonelli-theorems` |
| 2 | `markov-kernels-and-markov-chains-examples` | B | probability | 288.126 | `markov-kernels-and-markov-chains` |
| 2 | `brownian-motion-construction-and-continuity` | A | probability | 288.131 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `weak-convergence-tightness-and-representation`, `central-limit-theorems`, `markov-kernels-and-markov-chains`, `product-measures-and-the-fubini-tonelli-theorems`, `complete-metrizability-and-baire`, `function-space-topologies` |
| 2 | `brownian-motion-construction-and-continuity-examples` | B | probability | 288.132 | `brownian-motion-construction-and-continuity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `markov-kernels-and-markov-chains` — Markov Kernels and Markov Chains (22 item(s))

- `def-time-homogeneous-markov-chain-with-transition-kernel` · definition — Time-homogeneous Markov chain with transition kernel
- `lem-bounded-function-form-of-the-markov-property` · lemma — Bounded-function form of the Markov property
- `def-conditional-independence-given-a-sigma-algebra` · definition — Conditional independence given a sigma-algebra
- `lem-conditional-independence-equivalences-and-preservation` · lemma — Conditional-independence equivalences and preservation
- `lem-conditional-independence-splicing-over-a-standard-borel-variable` · lemma — Conditional-independence splice lemma
- `thm-markov-property-as-past-future-conditional-independence` · theorem — The Markov property is past-future conditional independence
- `def-initial-distribution-of-a-markov-chain` · definition — Initial distribution of a Markov chain
- `def-iterated-transition-kernels` · definition — Iterated transition kernels
- `thm-chapman-kolmogorov-equations` · theorem — Chapman-Kolmogorov equations
- `thm-finite-dimensional-laws-of-a-markov-chain` · theorem — Finite-dimensional laws of a Markov chain
- `thm-ionescu-tulcea-construction-of-a-markov-chain` · theorem — Ionescu-Tulcea construction of a Markov chain
- `cor-canonical-markov-chain-on-path-space` · corollary — Canonical Markov chain on path space
- `thm-markov-chain-law-is-determined-by-initial-law-and-kernel` · theorem — A Markov-chain law is determined by its initial law and kernel
- `def-shift-operator-and-future-coordinate-sigma-algebra` · definition — Shift operator and future-coordinate sigma-algebra
- `thm-markov-property-for-bounded-future-path-functionals` · theorem — Markov property for bounded future path functionals
- `thm-discrete-strong-markov-property` · theorem — Discrete strong Markov property
- `cor-post-hitting-chain-restarts-from-the-hit-state` · corollary — The post-hitting chain restarts from the hit state
- `def-killed-and-absorbed-transition-kernels` · definition — Killed and absorbed transition kernels
- `lem-killed-and-absorbed-kernels-are-probability-kernels` · lemma — Killed and absorbed kernels are probability kernels
- `def-discrete-generator-of-a-countable-state-transition-matrix` · definition — Discrete generator of a countable-state transition matrix
- `thm-countable-state-martingale-problem-characterization` · theorem — Countable-state martingale-problem characterization
- `cor-bounded-harmonic-functions-yield-markov-chain-martingales` · corollary — Bounded harmonic functions yield Markov-chain martingales

### `markov-kernels-and-markov-chains-examples` — Markov Kernels and Markov Chains — Examples (9 item(s))

- `ex-iid-sequences-as-markov-chains-with-state-independent-kernel` · example — IID sequences as Markov chains with state-independent kernel
- `ex-deterministic-dynamical-system-as-a-markov-kernel` · example — A deterministic dynamical system as a Markov kernel
- `ex-simple-random-walk-transition-kernel` · example — Simple random-walk transition kernel
- `ex-absorbing-gamblers-ruin-chain` · example — Absorbing gambler's-ruin chain
- `ex-gaussian-ar-one-chain` · example — Gaussian AR(1) chain
- `ex-random-mapping-representation-for-a-finite-transition-matrix` · example — Random-mapping representation for a finite transition matrix
- `cex-identical-one-step-marginals-do-not-determine-a-markov-chain` · counterexample — Identical one-time marginals do not determine a Markov chain
- `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration` · counterexample — The Markov property can fail for a larger filtration
- `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state` · counterexample — A time-inhomogeneous chain may require enlarged state

### `brownian-motion-construction-and-continuity` — Brownian Motion Construction and Continuity (21 item(s))

- `def-gaussian-process` · definition — Gaussian process
- `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws` · lemma — Mean and covariance determine Gaussian finite-dimensional laws
- `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` · lemma — Positive semidefiniteness of the Brownian covariance kernel
- `lem-consistency-of-brownian-finite-dimensional-laws` · lemma — Consistency of Brownian finite-dimensional laws
- `thm-kolmogorov-construction-of-the-canonical-gaussian-process` · theorem — Kolmogorov construction of the canonical Gaussian process
- `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` · lemma — Brownian covariance is equivalent to independent stationary normal increments
- `def-brownian-motion` · definition — Brownian motion
- `thm-kolmogorov-continuity-criterion-one-parameter` · theorem — Kolmogorov continuity criterion in one parameter
- `lem-gaussian-even-moment-bound-for-brownian-increments` · lemma — Gaussian even-moment bound for Brownian increments
- `thm-existence-of-continuous-brownian-motion` · theorem — Existence of continuous Brownian motion
- `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half` · corollary — Brownian paths are locally Holder below one half
- `def-uniform-on-compacts-metric-on-continuous-path-space` · definition — Uniform-on-compacts metric on continuous path space
- `lem-continuous-path-space-is-polish` · lemma — Continuous path space is Polish
- `def-wiener-measure-on-continuous-path-space` · definition — Wiener measure on continuous path space
- `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates` · lemma — Borel sigma-algebra of continuous path space is generated by coordinates
- `thm-uniqueness-of-wiener-measure` · theorem — Uniqueness of Wiener measure
- `thm-brownian-scaling` · theorem — Brownian scaling
- `thm-brownian-time-inversion` · theorem — Brownian time inversion
- `def-d-dimensional-brownian-motion` · definition — d-dimensional Brownian motion
- `cor-existence-and-scaling-of-d-dimensional-brownian-motion` · corollary — Existence and scaling of d-dimensional Brownian motion
- `def-continuous-time-filtration-and-all-pairs-martingale` · definition — Continuous-time filtrations and all-pairs martingales

### `brownian-motion-construction-and-continuity-examples` — Brownian Motion Construction and Continuity — Examples (8 item(s))

- `ex-brownian-finite-dimensional-density` · example — Brownian finite-dimensional density
- `ex-covariance-of-overlapping-brownian-increments` · example — Covariance of overlapping Brownian increments
- `ex-linear-combinations-of-brownian-values-are-gaussian` · example — Linear combinations of Brownian values are Gaussian
- `ex-brownian-bridge-from-brownian-motion` · example — Brownian bridge from Brownian motion
- `ex-deterministic-integral-construction-of-a-gaussian-process` · example — A deterministic integral construction of a Gaussian process
- `ex-multidimensional-brownian-radial-second-moment` · example — Radial second moment of multidimensional Brownian motion
- `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version` · counterexample — Kolmogorov extension alone does not give a continuous version
- `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set` · counterexample — Pointwise modification can destroy path continuity

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

5 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-34586613b50d6ab66c8a06d4 · `thm-discrete-strong-markov-property`** (from group f, gap-a-reader-closes) — Step 1.1 asserts '|Z_H|, |R_h| <= ||H||_inf, so both variables are integrable', but only R_h is shown F_tau-measurable (via the stopped-variable supplier). Measurability of the slice sum Z_H = sum_n 1_{tau=n} H(X_n, X_{n+1}, ...) is never stated, although integrability requires it and step 2.1's dominated-convergence passage to 1_A Z_H presupposes it. The gap closes in one line (each summand is measurable and at most one is nonzero), but the proof as written does not address it.
- **s8a-8b6e5d4f713727b2a1516045 · `cor-post-hitting-chain-restarts-from-the-hit-state`** (from group f, gap-a-reader-closes) — The closing sentence of the Statement ('Thus, conditional on the information at the hit, the shifted chain has the canonical path law started from the hit state') and step 2.1 ('it identifies the conditional path law, not only its one-time marginals') assert an identification of a conditional law, but the item and its declared dependencies provide only the bounded-functional identity: no regular conditional distribution is produced and no statement that x -> P_x(B) is measurable (the kernel property in the initial state) is available in the item or in [F1]-[F2]. The display itself is correct and fully supported; only the prose identification outruns the declared machinery.
- **s8a-a137b77dda1503645311143c · `thm-markov-property-for-bounded-future-path-functionals`** (from group f, presentation) — The Statement defines h(x) := E_x[H(X_0, X_1, ...)] for a general K-chain X on an arbitrary space, but the subscript-x law P_x = P_{delta_x} is fixed only by def-initial-distribution-of-a-markov-chain, which is not among the declared deps, and the proof silently realises h through the canonical law P_x of [F5]. Standard notation, but the notational commitment to the canonical law should be declared or cross-referenced.
- **s8a-8cc750df2cc6d3567f87ba29 · `thm-brownian-scaling`** (from group f, presentation) — Statement: 'After redefining the paths of Y to be zero on its common exceptional continuity event, its path-space law is Wiener measure.' Read literally (zero the paths on the probability-one continuity event) this gives the zero path almost surely and hence not Wiener measure; the intended reading is the Wiener-measure repair of def-wiener-measure, namely zeroing off the continuity event, as step 4.1 does. The word 'exceptional' is carrying the meaning of 'complement' and the sentence should say so.
- **s8a-e5929daf49c3efbb67a2c755 · `thm-countable-state-martingale-problem-characterization`** (from group f, presentation) — Statement: 'let X be adapted to (F_n). Then X is a p-chain if and only if ...', but f(X_n), Lf(X_n) and the phrase p-chain all presuppose that X takes values in the countable state space S; S-valuedness of the adapted process is nowhere stated (the Given repeats only 'the adapted process X'). Type-checking forces the intended hypothesis, but it is an unstated hypothesis of the statement.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cor-existence-and-scaling-of-d-dimensional-brownian-motion` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `a760c88ac546c831c15cd13b0ef0bda90d3acd02dd2022ae26f3097b8a82abda` |
| `def-d-dimensional-brownian-motion` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `a7d9354184a650b1ff357f8e9202075203b2139e36ab54eaac4c65a844c1d35c` |
| `def-gaussian-process` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `cc657d9208c48905bc2db827ce3f205f47e5e32e183f59e8e6bca6121189b430` |
| `def-shift-operator-and-future-coordinate-sigma-algebra` | `markov-kernels-and-markov-chains` | gpt-5.6-terra | `6d888c8ce2be890df6d67657fb3b965ee74a7e2ed3a0fc30dd971430ab1606a2` |
| `def-wiener-measure-on-continuous-path-space` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `b6b6856dc621012d888114363fb1a5c12efe65deb6d79ee064a91dd7967a3f90` |
| `ex-deterministic-integral-construction-of-a-gaussian-process` | `brownian-motion-construction-and-continuity-examples` | gpt-5.6-terra | `a5a60a8839f7f2de59be6ff6677939da638fe487fabf3a9a0e89dd70360d282b` |
| `ex-random-mapping-representation-for-a-finite-transition-matrix` | `markov-kernels-and-markov-chains-examples` | gpt-5.6-terra | `ae11d694f03bde08642373afabc80bbf48cd36c78a2b73f8efcdce9460beb3ba` |
| `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `215c16377fae9451be807915680e3c51eaa6e341ab63224dbe29688523ef49be` |
| `lem-conditional-independence-splicing-over-a-standard-borel-variable` | `markov-kernels-and-markov-chains` | gpt-5.6-terra | `4fa51e4c2867fe03ea6426cd68f496d2636536b93005238a8089b9ca31709459` |
| `lem-continuous-path-space-is-polish` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `be8856bda953048750c160a3eb6026f7f50bc76c88db3dbb537018e3cfc726f4` |
| `lem-gaussian-even-moment-bound-for-brownian-increments` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `922a8efe42452ddd6f4d753081796bf3fca840a68dffa341d254b437ff8f1979` |
| `thm-brownian-scaling` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `b8c12a84c22f87dd6748d8fafd5a04a7a9e09f5a7e812b67fcb3f9db6fa4c11e` |
| `thm-brownian-time-inversion` | `brownian-motion-construction-and-continuity` | gpt-5.6-terra | `d576b6b6ebf6411b07d8479979498b74deb5c7e31806a4858047dc6ce26f5386` |
| `thm-countable-state-martingale-problem-characterization` | `markov-kernels-and-markov-chains` | gpt-5.6-terra | `87bc52244bd8f86d05f9f0782c4621d8e241f76adbd2a9ba6cbc3ad99fffd530` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

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

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
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
