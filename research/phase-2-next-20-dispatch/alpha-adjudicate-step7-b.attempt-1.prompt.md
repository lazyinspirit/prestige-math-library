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
label: step7-b
covers: 2, 15

# Step 7 adjudication — group **b**, run `phase-2-next-20`

You are the group Alpha for batches **2**, **15**: 3 A/B pair(s), 6 page(s), 70 item(s), 15 open rejection(s) over 15 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
| 2 | `locally-convex-spaces-and-continuous-separation` | A | functional-analysis | 288.0603 | `sequential-uniform-boundedness-with-countable-choice`, `subspaces-products-and-quotients`, `norming-and-separation-under-hahn-banach` |
| 2 | `locally-convex-spaces-and-continuous-separation-examples` | B | functional-analysis | 288.0604 | `locally-convex-spaces-and-continuous-separation` |
| 15 | `fourier-transform-convolution-and-approximate-identities` | A | functional-analysis | 288.089 | `countability-and-uncountability`, `properties-of-the-integral-and-the-working-ftc`, `uniform-convergence-of-functions`, `the-exponential-function`, `the-complex-exponential-and-eulers-formula`, `the-total-derivative`, `mixed-partials-taylor-and-extrema`, `stone-weierstrass-general`, `improper-and-parameter-dependent-multiple-integrals`, `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lebesgue-and-riemann-integrals-compared`, `product-measures-and-the-fubini-tonelli-theorems`, `signed-and-complex-measures-hahn-and-jordan`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `density-separability-and-convolution-in-lp`, `complex-lp-spaces-and-test-function-conventions`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `bounded-linear-operators-and-quotient-spaces` |
| 15 | `fourier-transform-convolution-and-approximate-identities-examples` | B | functional-analysis | 288.09 | `fourier-transform-convolution-and-approximate-identities` |
| 15 | `schwartz-space-and-the-plancherel-theorem` | A | functional-analysis | 288.091 | `fourier-transform-convolution-and-approximate-identities` |
| 15 | `schwartz-space-and-the-plancherel-theorem-examples` | B | functional-analysis | 288.092 | `schwartz-space-and-the-plancherel-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `locally-convex-spaces-and-continuous-separation` — Locally Convex Spaces and Continuous Separation (10 item(s))

- `def-topological-vector-space-for-local-convexity` · definition — Topological vector spaces over the real and complex fields
- `lem-topological-vector-space-translation-scaling-and-absorption` · lemma — Translations, dilations and absorption in a topological vector space
- `def-locally-convex-topological-vector-space` · definition — Local convexity, convex and balanced sets, and the continuous dual
- `lem-locally-convex-closures-and-finite-compact-convex-hulls` · lemma — Convex closures and hulls of finitely many compact convex sets
- `lem-balanced-convex-zero-neighborhood-refinement` · lemma — Open and closed balanced convex zero-neighborhood refinements
- `def-minkowski-gauge-of-an-open-convex-zero-neighborhood` · definition — Minkowski gauge for an open convex zero-neighborhood
- `lem-continuous-gauge-of-an-open-convex-zero-neighborhood` · lemma — Continuity, sublinearity and strict sublevels of an open convex gauge
- `thm-locally-convex-open-convex-separation` · theorem — Continuous separation when one convex set is open
- `thm-locally-convex-continuous-dual-separates-points` · theorem — The continuous dual separates points in a Hausdorff locally convex space
- `thm-locally-convex-strict-separation` · theorem — Uniform strict separation of compact and closed convex sets

### `locally-convex-spaces-and-continuous-separation-examples` — Locally Convex Spaces and Continuous Separation: Examples (3 item(s))

- `ex-product-scalar-topology-is-locally-convex` · example — Arbitrary products of the scalar field are locally convex
- `ex-locally-convex-separation-by-a-coordinate` · example — Coordinate functionals give an explicit uniform separating gap
- `cex-convex-maximum-set-need-not-be-a-face` · counterexample — A convex function can have a nonconvex maximum set

### `fourier-transform-convolution-and-approximate-identities` — Fourier Transform Convolution and Approximate Identities (20 item(s))

- `def-fourier-transform-on-l-one-of-rn` · definition — Fourier transform on complex L1 classes
- `lem-l-one-fourier-transform-is-well-defined` · lemma — The integral transform is representative independent
- `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` · theorem — The L1 transform is bounded and uniformly continuous
- `thm-fourier-translation-modulation-dilation-and-reflection-laws` · theorem — Translation, modulation, linear dilation and reflection laws
- `thm-fourier-transform-converts-convolution-to-products` · theorem — Fourier transform turns L1 convolution into multiplication
- `lem-complex-integration-by-parts-on-intervals-and-decaying-lines` · lemma — Complex integration by parts on intervals and decaying lines
- `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization` · lemma — Euclidean Gaussian transform with the 2π normalization
- `thm-riemann-lebesgue` · theorem — Riemann–Lebesgue lemma
- `lem-gaussian-fourier-summability-kernel-is-an-approximate-identity` · lemma — Gaussian summability kernels
- `lem-radial-majorized-kernels-recover-lebesgue-point-values` · lemma — Lebesgue-point convergence for radial-majorized kernels
- `thm-fourier-inversion-at-lebesgue-points-under-summability` · theorem — Gaussian Fourier summability at Lebesgue points
- `thm-l-one-fourier-inversion` · theorem — L1 Fourier inversion with an integrable transform
- `thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis` · theorem — Fourier transform of a product with one integrable transform
- `cor-uniqueness-of-the-l-one-fourier-transform` · corollary — Uniqueness of the L1 Fourier transform
- `cor-convolution-approximate-identities-from-fourier-multipliers` · corollary — Fourier multipliers of approximate identities
- `thm-fourier-transform-of-a-finite-complex-measure` · theorem — Fourier transform of a finite complex Borel measure
- `lem-gaussian-smoothing-of-finite-complex-measures` · lemma — Gaussian smoothing of finite measures
- `cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms` · corollary — Uniqueness of finite Borel measures from their Fourier transforms
- `rem-probability-characteristic-function-normalization` · remark — Characteristic-function normalization
- `rem-riesz-thorin-supplied-by-measure-theory` · remark — The interpolation input belongs to measure theory

### `fourier-transform-convolution-and-approximate-identities-examples` — Fourier Transform Convolution and Approximate Identities — Examples (8 item(s))

- `ex-fourier-transform-of-an-interval-indicator` · example — Transform of an interval indicator
- `ex-fourier-transform-of-a-gaussian` · example — Scaled and tensor Gaussian examples
- `ex-fourier-transform-of-the-poisson-kernel` · example — Poisson kernel transform and Abel summability on the line
- `ex-fourier-transform-of-a-compactly-supported-triangle-function` · example — Triangle function and squared sinc
- `cex-fourier-transform-of-an-l-one-function-need-not-be-integrable` · counterexample — An L1 transform need not be integrable
- `cex-fourier-inversion-need-not-hold-at-every-point-of-an-l-one-representative` · counterexample — Null-set modifications defeat everywhere representative recovery
- `cex-riemann-lebesgue-has-no-universal-rate` · counterexample — There is no universal Riemann–Lebesgue decay rate
- `rem-wiener-tauberian-theorem` · remark — Wiener Tauberian orientation

### `schwartz-space-and-the-plancherel-theorem` — Schwartz Space and the Plancherel Theorem (20 item(s))

- `def-schwartz-space-and-its-seminorms` · definition — Schwartz space and its seminorms
- `def-schwartz-topology-and-convergence` · definition — Schwartz topology and convergence
- `thm-schwartz-space-is-frechet` · theorem — Schwartz space is Fréchet
- `lem-schwartz-functions-and-all-derivatives-are-integrable` · lemma — Schwartz derivatives are integrable
- `lem-schwartz-cutoffs-from-the-standard-smooth-step` · lemma — Explicit compactly supported smooth cutoffs
- `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` · lemma — Smooth compact supports are dense in Schwartz space
- `thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space` · theorem — Basic operations are continuous on Schwartz space
- `thm-fourier-transform-maps-schwartz-space-continuously-to-itself` · theorem — Fourier transform acts continuously on Schwartz space
- `thm-fourier-inversion-on-schwartz-space` · theorem — Fourier inversion on Schwartz space
- `cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space` · corollary — Fourier transform is a topological automorphism of Schwartz space
- `cor-schwartz-convolution-and-product-transform-laws` · corollary — Schwartz convolution and product laws
- `thm-parseval-pairing-on-schwartz-space` · theorem — Parseval pairing on Schwartz space
- `lem-schwartz-space-is-dense-in-l-two` · lemma — Schwartz space is dense in L2
- `thm-plancherel` · theorem — Plancherel theorem
- `lem-real-ltwo-multipliers-and-unitary-transport` · lemma — Real L2 multipliers and unitary transport
- `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` · lemma — Simultaneous L1 and L2 smooth approximation
- `thm-l-one-l-two-agreement-of-fourier-transform` · theorem — Agreement of the integral and L2 transforms
- `thm-l-two-fourier-inversion` · theorem — L2 Fourier inversion
- `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` · lemma — Fourier uniqueness for continuous functions on the Euclidean torus
- `thm-poisson-summation-for-schwartz-functions` · theorem — Poisson summation for Schwartz functions

### `schwartz-space-and-the-plancherel-theorem-examples` — Schwartz Space and the Plancherel Theorem — Examples (9 item(s))

- `ex-gaussians-and-polynomials-times-gaussians-are-schwartz` · example — Polynomial Gaussians are Schwartz
- `cex-a-smooth-integrable-function-need-not-be-schwartz` · counterexample — Smooth and integrable does not imply Schwartz
- `cex-a-schwartz-function-need-not-have-compact-support` · counterexample — A Schwartz function need not have compact support
- `ex-hermite-functions-as-fourier-eigenfunctions` · example — Normalized Hermite Fourier eigenfunctions
- `ex-plancherel-for-an-interval-indicator` · example — Sinc-square integral from Plancherel
- `ex-poisson-summation-for-the-gaussian-and-theta-functional-equation` · example — Gaussian Poisson summation and theta inversion
- `thm-heisenberg-uncertainty-inequality` · theorem — Heisenberg uncertainty and Gaussian equality
- `rem-hausdorff-young-and-interpolation` · remark — Hausdorff–Young and interpolation orientation
- `ex-momentum-operator-under-the-fourier-transform` · example — Momentum operator under the Fourier transform

## Your seams

Another group's pages depend on yours:

- `carleson-hunt-time-frequency-theorem` (group a) requires your `schwartz-space-and-the-plancherel-theorem`
- `characteristic-functions-inversion-and-continuity` (group c) requires your `fourier-transform-convolution-and-approximate-identities`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

2 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-0ad5195c4d51cc7a69135001 · `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`** (from group b, gap-a-reader-closes) — Step 2.1 asserts that 'continuity of the exponential at zero gives a single δ>0 such that |h|<δ implies |exp(-2πix·h)-1| < ε/(2(1+||f||_1))' for all |x| ≤ R. Continuity of (x,h) -> exp(-2πix·h) at h=0 alone gives only a δ depending on x; uniformity over the compact slice |x| ≤ R is the extra step (Heine-Cantor on the box, or the bound |exp(iθ)-1| ≤ |θ| ≤ 2πR|h|). The cited facts F2/F3/F4 do not supply it and the item does not name it.
- **s8a-e3aa0075b212358a123532bd · `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`** (from group b, presentation) — Step 1.1 derives ∫exp(-πx^2)dx = 1 from the cited ∫exp(-x^2)dx = sqrt(π) without displaying the rescaling substitution, and compresses the majorant bound |x|^m exp(-cx^2) <= C exp(-cx^2/2) into 'F3 bounds ... on the tails' plus continuity on a compact middle. Both are immediate, but they are steps the reader must reconstruct rather than read.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-schwartz-function-need-not-have-compact-support` | `schwartz-space-and-the-plancherel-theorem-examples` | gpt-5.6-terra | `303c2c54092e87e462510b2d698f3e4706f5a5d4e782c9eedfb2b388a9f13f0a` |
| `lem-gaussian-smoothing-of-finite-complex-measures` | `fourier-transform-convolution-and-approximate-identities` | gpt-5.6-terra | `6c2e67be28361e0c3fdd1a7c08b73d9b0c18b6b4e1fd80c7b7bb41111aeb16eb` |
| `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `82437a165f3fc5c8a3055676beadc409fa36da94e3360b6ee5be328e166d0f22` |
| `lem-real-ltwo-multipliers-and-unitary-transport` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `cb9af813df071a44577d7a582afeaa82e6e4fa3322078896d68e44ae4578b9f9` |
| `lem-schwartz-cutoffs-from-the-standard-smooth-step` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `5668a81e25ba9885c2db7be0b99f35762fb26c2f35f706bbc9f7bbe042ec251b` |
| `lem-schwartz-functions-and-all-derivatives-are-integrable` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `d4c46dd7dd23eb603e59da9695598145a024caeb92045c3539cfa782ba857777` |
| `lem-schwartz-space-is-dense-in-l-two` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `9fc42d5e623db7b93e3af9c74167017d38cd2aff4438eec279cb201f894783dc` |
| `lem-simultaneous-smooth-approximation-in-l-one-and-l-two` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `e63a63a0c3c49b1b3612721b8572d34aa6e3b2fe1d0de4e2404021706ace0321` |
| `lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `40efec10062dfc828b649c5d12233cd62ad19c3b11caf11ed73aa5640981c1a7` |
| `lem-topological-vector-space-translation-scaling-and-absorption` | `locally-convex-spaces-and-continuous-separation` | gpt-5.6-terra | `5b0b1c903534018701019d0020f73022c7a8c2d764d6e3e22c9daeee6757ccf8` |
| `thm-fourier-transform-converts-convolution-to-products` | `fourier-transform-convolution-and-approximate-identities` | gpt-5.6-terra | `7ac23dd1af906dc3b4a9bf817c0793dd7370610e1c3886fd37a8303a482c3d6e` |
| `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions` | `fourier-transform-convolution-and-approximate-identities` | gpt-5.6-terra | `d48f8f5821f7cdcaf39fe449e116a6aaca93e46eed3c2339d370707552329283` |
| `thm-heisenberg-uncertainty-inequality` | `schwartz-space-and-the-plancherel-theorem-examples` | gpt-5.6-terra | `7410f0a9dd4e5ec21bfbb1c3a35f613866c0a13cbfacba233b28beb29e15f3e8` |
| `thm-l-one-fourier-inversion` | `fourier-transform-convolution-and-approximate-identities` | gpt-5.6-terra | `92ca8cf9a0b11f1c92eb015aedddf37911e80115e679ce96273fbe501d2aceed` |
| `thm-plancherel` | `schwartz-space-and-the-plancherel-theorem` | gpt-5.6-terra | `1b2ca0adc6b50d59017ad1c45a120c213607df7e55283270bad6802a09892d7d` |

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
