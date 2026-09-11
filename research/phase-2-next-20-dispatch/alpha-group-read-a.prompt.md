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
role: alpha-group-read
label: a
covers: a

# Step 6 whole-group reading — group **a**, run `phase-2-next-20`

You are the group Alpha for batches **1**, **5**: 3 A/B pair(s), 6 page(s), 51 item(s).

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

---

# Step 6 — group reading digest, `phase-2-next-20`

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
