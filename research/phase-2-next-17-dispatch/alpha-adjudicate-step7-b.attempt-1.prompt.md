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
label: step7-b
covers: 2

# Step 7 adjudication — group **b**, run `phase-2-next-17`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 85 item(s), 16 open rejection(s) over 16 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
| 2 | `weak-and-weak-star-topologies` | A | functional-analysis | 288.061 | `locally-convex-spaces-and-continuous-separation`, `nets-and-filters` |
| 2 | `weak-and-weak-star-topologies-examples` | B | functional-analysis | 288.062 | `weak-and-weak-star-topologies` |
| 2 | `distributions-test-functions-and-differentiation` | A | functional-analysis | 288.093 | `order-zorn-and-the-axiom-of-choice`, `schwartz-space-and-the-plancherel-theorem`, `the-divergence-theorem-and-classical-stokes` |
| 2 | `distributions-test-functions-and-differentiation-examples` | B | functional-analysis | 288.094 | `distributions-test-functions-and-differentiation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `weak-and-weak-star-topologies` — Weak and Weak Star Topologies (19 item(s))

- `def-weak-topology-on-a-normed-space` · definition — Weak topology on a normed space
- `lem-basic-weak-neighborhoods` · lemma — Basic weak neighborhoods
- `thm-weak-topology-is-hausdorff` · theorem — Weak topology is hausdorff
- `def-weak-convergence-of-nets-and-sequences` · definition — Weak convergence of nets and sequences
- `lem-basic-weak-star-neighborhoods` · lemma — Basic weak star neighborhoods
- `def-weak-star-convergence` · definition — Weak star convergence
- `thm-continuous-dual-of-a-weak-topology` · theorem — Continuous dual of a weak topology
- `thm-continuous-dual-of-a-weak-star-topology` · theorem — Continuous dual of a weak star topology
- `thm-norm-closed-convex-iff-weakly-closed` · theorem — Norm closed convex iff weakly closed
- `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball` · corollary — Weak closure of the unit sphere is the closed unit ball
- `thm-weakly-convergent-sequences-are-norm-bounded` · theorem — Weakly convergent sequences are norm bounded
- `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm` · corollary — Weak convergence implies lower semicontinuity of the norm
- `thm-weak-and-norm-topologies-agree-iff-finite-dimensional` · theorem — Weak and norm topologies agree iff finite dimensional
- `thm-infinite-dimensional-weak-topology-is-not-first-countable` · theorem — Infinite dimensional weak topology is not first countable
- `lem-annihilators-are-weak-and-weak-star-closed` · lemma — Annihilators are weak and weak star closed
- `thm-transpose-is-weak-to-weak-continuous` · theorem — Transpose is weak to weak continuous
- `thm-transpose-is-weak-star-to-weak-star-continuous` · theorem — Transpose is weak star to weak star continuous
- `def-strong-and-weak-operator-topologies` · definition — Strong and weak operator topologies
- `lem-norm-implies-strong-implies-weak-operator-convergence` · lemma — Norm implies strong implies weak operator convergence

### `weak-and-weak-star-topologies-examples` — Weak and Weak Star Topologies — Examples (9 item(s))

- `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p` · example — Coordinate vectors converge weakly to zero in ell p
- `cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one` · counterexample — Coordinate vectors do not converge weakly to zero in ell one
- `ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star` · example — Coordinate evaluations converge weak star to zero in ell one star
- `cex-weak-star-and-weak-topologies-on-a-dual-can-differ` · counterexample — Weak star and weak topologies on a dual can differ
- `cex-weak-closure-can-exceed-sequential-weak-closure` · counterexample — Weak closure can exceed sequential weak closure
- `ex-right-shift-powers-converge-in-wot-not-sot` · example — Right shift powers converge in wot not sot
- `ex-left-shift-powers-converge-in-sot-not-operator-norm` · example — Left shift powers converge in sot not operator norm
- `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain` · counterexample — Pointwise boundedness without a uniform bound on an incomplete domain
- `cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded` · counterexample — A weakly convergent net need not be eventually norm bounded

### `distributions-test-functions-and-differentiation` — Distributions Test Functions and Differentiation (49 item(s))

- `def-test-function-space-d-of-an-open-set` · definition — Test function space d of an open set
- `def-fixed-support-test-function-frechet-space` · definition — Fixed support test function frechet space
- `def-test-function-topology` · definition — Test function topology
- `def-distribution` · definition — Distribution
- `def-regular-distribution-from-a-locally-integrable-function` · definition — Regular distribution from a locally integrable function
- `def-convolution-of-a-distribution-with-a-test-function` · definition — Convolution of a distribution with a test function
- `lem-test-function-cutoffs-and-euclidean-localization` · lemma — Test function cutoffs and euclidean localization
- `lem-fixed-support-test-function-spaces-are-complete` · lemma — Fixed support test function spaces are complete
- `lem-test-function-lf-topology-universal-property` · lemma — Test function lf topology universal property
- `thm-test-function-operations-are-continuous` · theorem — Test function operations are continuous
- `thm-local-finite-order-characterization-of-distributions` · theorem — Local finite order characterization of distributions
- `def-order-of-a-distribution-on-a-compact-set` · definition — Order of a distribution on a compact set
- `def-distributional-derivative` · definition — Distributional derivative
- `def-multiplication-of-a-distribution-by-a-smooth-function` · definition — Multiplication of a distribution by a smooth function
- `thm-leibniz-rule-for-distributions` · theorem — Leibniz rule for distributions
- `def-dirac-delta-and-its-derivatives` · definition — Dirac delta and its derivatives
- `thm-distributions-form-a-sheaf` · theorem — Distributions form a sheaf
- `def-support-of-a-distribution` · definition — Support of a distribution
- `thm-compactly-supported-distributions-have-global-finite-order` · theorem — Compactly supported distributions have global finite order
- `thm-distributions-supported-at-one-point` · theorem — Distributions supported at one point
- `lem-bounded-test-function-sets-have-common-compact-support` · lemma — Bounded test function sets have common compact support
- `thm-sequential-convergence-in-test-function-space` · theorem — Sequential convergence in test function space
- `def-weak-and-strong-topologies-on-distributions` · definition — Weak and strong topologies on distributions
- `thm-locally-integrable-functions-embed-in-distributions` · theorem — Locally integrable functions embed in distributions
- `lem-strong-distribution-convergence-implies-weak-convergence` · lemma — Strong distribution convergence implies weak convergence
- `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` · lemma — Riemann–Lebesgue comparison for distribution test integrands
- `thm-distributional-differentiation-is-continuous-and-commutes` · theorem — Distributional differentiation is continuous and commutes
- `lem-distribution-pairing-with-smooth-parameter-families` · lemma — Distribution pairing with smooth parameter families
- `thm-convolution-with-a-test-function-is-smooth` · theorem — Convolution with a test function is smooth
- `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions` · theorem — Uniform finite order bounds for pointwise bounded distributions
- `def-pullback-of-a-distribution-by-a-diffeomorphism` · definition — Pullback of a distribution by a diffeomorphism
- `def-tensor-product-of-distributions` · definition — Tensor product of distributions
- `lem-compactly-supported-distributions-extend-to-smooth-functions` · lemma — Compactly supported distributions extend to smooth functions
- `thm-sequential-convergence-of-smooth-multipliers-and-distributions` · theorem — Sequential convergence of smooth multipliers and distributions
- `thm-extension-by-zero-for-distributions-with-ambient-closed-support` · theorem — Extension by zero for distributions with ambient closed support
- `thm-translation-invariant-test-function-operators-are-convolutions` · theorem — Translation invariant test function operators are convolutions
- `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities` · lemma — Complex l one functionals on finite measure spaces have bounded densities
- `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions` · theorem — Local structure of distributions as derivatives of continuous functions
- `lem-compact-support-continuous-primitive-representation` · lemma — Compact support continuous primitive representation
- `thm-global-locally-finite-structure-of-distributions` · theorem — Global locally finite structure of distributions
- `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets` · lemma — Finite sums of product tests are dense on product open sets
- `thm-tensor-product-distributions-and-iterated-pairings` · theorem — Tensor product distributions and iterated pairings
- `def-convolution-of-distributions-when-one-has-compact-support` · definition — Convolution of distributions when one has compact support
- `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` · lemma — Convolution of distributions is well defined under the support hypothesis
- `thm-mollifier-approximation-in-distributions` · theorem — Mollifier approximation in distributions
- `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant` · theorem — A distribution with zero derivatives on a connected open set is constant
- `cor-smooth-functions-are-weakly-dense-in-distributions` · corollary — Smooth functions are weakly dense in distributions
- `thm-associativity-of-distribution-convolution-under-compact-support` · theorem — Associativity of distribution convolution under compact support
- `thm-closed-bounded-test-function-sets-are-compact` · theorem — Closed bounded test function sets are compact

### `distributions-test-functions-and-differentiation-examples` — Distributions Test Functions and Differentiation — Examples (8 item(s))

- `ex-derivative-of-the-heaviside-function-is-dirac-delta` · example — Derivative of the heaviside function is dirac delta
- `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas` · example — Derivatives of piecewise smooth functions include jump deltas
- `ex-distributional-laplacian-of-the-newtonian-kernel` · example — Distributional laplacian of the newtonian kernel
- `ex-principal-value-distribution-one-over-x` · example — Principal value distribution one over x
- `cex-not-every-distribution-is-a-locally-integrable-function` · counterexample — Not every distribution is a locally integrable function
- `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control` · counterexample — Pointwise convergent functions need not converge as distributions without local control
- `ex-compactly-supported-distributions-have-global-finite-order` · example — Compactly supported distributions have global finite order
- `rem-sobolev-weak-derivatives-belong-to-pde` · remark — Sobolev weak derivatives belong to pde

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

3 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-29aad83de5e5f8d6d8be93f9 · `ex-distributional-laplacian-of-the-newtonian-kernel`** (from group b, gap-a-reader-closes) — The example needs the closed ball to be an elementary solid region in the sense of def-elementary-solid-region before Green's identity may be applied, and it discharges this with one compressed paragraph: the eight octant patches must be checked against clause 4 of def-adapted-outward-boundary-presentation-of-a-simple-solid-region (upper/lower projected images pairwise disjoint and filling the base disc up to content zero), against the compatible-presentation content-zero overlap condition, and against the requirement that a single elementary solid region counts for the 'finite gluing' hypothesis of cor-greens-second-identity-for-glued-elementary-solid-regions. The mathematics looks right (the four open quarter discs fill the open disc up to the two diameters and the circle, all content zero), but the verification is reconstructed by the reader from a sketch rather than derived.
- **s8a-68db6a57b7011e74da77f30f · `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`** (from group b, gap-a-reader-closes) — Step 2.1 compresses an interchange of limit and differentiation: 'its tagged sums converge uniformly, together with every target derivative, to the corresponding derivative-integral candidate ... F3 on coordinate intervals identifies these candidates as the actual derivatives, inductively'. The reader has to supply that the tagged sums of every mixed derivative converge uniformly on the parameter box, and then the alternative formula D^gamma I_eps = integral of D^gamma Phi(x - eps s, y - eps t) rho(s) sigma(t) ds dt coming from the Riemann substitution of F4, before step 3.1 can use uniform continuity to send sup|D^gamma I_eps - D^gamma Phi| to zero. The step is standard and closable in under a minute, but it is not written out.
- **s8a-6f948b122eceb89a6367e7ec · `thm-infinite-dimensional-weak-topology-is-not-first-countable`** (from group b, presentation) — The statement quantifies over a 'countable weak neighborhood base at zero', while step 1.1 begins 'Suppose (U_n) is a countable weak local base at zero' and later enumerates chosen finite lists 'by pairs of natural numbers, padding each finite list with zero functionals'. The reduction from a countable set of neighborhoods to a sequence indexed by N (and the coding of finite lists) is left to the reader, as is the convention for a finite base.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain` | `weak-and-weak-star-topologies-examples` | gpt-5.6-terra | `20aa55af3c50bed0aaa01a73a12ddf63ced0e28f1c2546888f86ef3d008386a3` |
| `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control` | `distributions-test-functions-and-differentiation-examples` | gpt-5.6-terra | `e9e60621356d6f241b9bf954d5c1da22e99ff0727df13557e6293e589367c33e` |
| `cor-smooth-functions-are-weakly-dense-in-distributions` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `bc2e981a82fa95aa0344428adcbe238b6f94e24ccbd600b48222dc05c29a6cb2` |
| `def-convolution-of-a-distribution-with-a-test-function` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `7965d7a383f3eaf7742c7ca061c3ec75752661b0e30bf26a9ee509de0c6cb0ce` |
| `def-convolution-of-distributions-when-one-has-compact-support` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `7f5c7759b8ed0f9a37a7c472fbe0359f0144bc1f781bf9799df911fc7c8d5caf` |
| `def-fixed-support-test-function-frechet-space` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `50a1caa96222107a45ec583f55caf02cdfcd61eb2d5f53d734804160ef6fc15b` |
| `def-pullback-of-a-distribution-by-a-diffeomorphism` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `81609efa48585ef567a3838c4e0af3f27a4651ad184e4ca9c1bd71d6031b116d` |
| `ex-derivative-of-the-heaviside-function-is-dirac-delta` | `distributions-test-functions-and-differentiation-examples` | gpt-5.6-terra | `475ba7b9cecba52b440f21959ab058c42e42a32580603c695fdce125748d1c28` |
| `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas` | `distributions-test-functions-and-differentiation-examples` | gpt-5.6-terra | `4df5ac520ae56cd9a80bdc2d00cb290624d9485718a6bb8066ee8f1f1badd19e` |
| `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `a9af730ec80eda95ac42e68ecc301f81639967532a9ec8250aed5fe92bb2e561` |
| `lem-distribution-pairing-with-smooth-parameter-families` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `c21472f7e3c14463ebf164050c5a4e02f9e6eecc919a37bb789df9e673d14eb0` |
| `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `ed23336f1b19bc4d3ab773172721bdca3c24ce285c6e50fd423a92010267ad8c` |
| `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `14496ec442e17a41642733396bdccf2c1b4dbda38d35f540aa12d2b6b6b89323` |
| `thm-distributions-supported-at-one-point` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `a96d75a4dcd7eeb28e7b0f76285b90eeddf27da980e8abd690ee3ea096bb2a3b` |
| `thm-global-locally-finite-structure-of-distributions` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `caab5ce24d3c91679748c9351cc0f9144d5a8b6a9cb198bd034d4054cc9b102a` |
| `thm-mollifier-approximation-in-distributions` | `distributions-test-functions-and-differentiation` | gpt-5.6-terra | `6257a7c5545f76cf778c814e41b70cb9fccd3d814d36f9e7579d96d9875aeaec` |

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
