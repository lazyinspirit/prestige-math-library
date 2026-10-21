# Batch 14 authoring notes

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Pair: `statistical-inverse-model-misspecification`  
Batch level: 3; prerequisite batches: 1, 7, 8.  
Dispatch scheduling input: `20b60da2687238d07b4fc7c122ff2d8b74706d9ba1383c190e3e18ee0fddb90a`.

## Inventory, dependencies, and levels

The IP-14 design names the two A items `def-ip-operator-and-prior-mismatch` and
`thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`. Its two B
leaves are authored here as `ex-ip-restricted-operator-class-positive-modulus`
and `ex-ip-identical-laws-under-operator-mismatch`. The page manifest now holds
that inventory before item-carrier authoring.

Item levels use actual in-run logical suppliers, with outside published
definitions retained as dependencies but excluded from the level maximum:

- Level 1: `def-ip-operator-and-prior-mismatch`, from batch 1's
  `def-ip-forward-map-and-solution-classes` (level 0).
- Level 2: `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`,
  from the new definition (level 1); and
  `ex-ip-restricted-operator-class-positive-modulus`, from the new definition
  and batch 1's `def-ip-identifiability-and-stability-modulus` (both level 1).
- Level 3: `ex-ip-identical-laws-under-operator-mismatch`, from the theorem
  (level 2) and the new definition (level 1).

The direct logical dependencies and those labels are recorded in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-14.pages.json`.
The B leaves do not supply the A theorem. No helper result is needed: the metric
triangle inequality and additivity/monotonicity of nonnegative integrals have
published suppliers in the declared dependencies.

## Plan and convention decisions

- The IP-14 section in `research/plan-inverse-problems-track.md` lists IP-01,
  IP-07, and IP-08 as A-page prerequisites. The current task and
  `research/plan-spec.json` also require the published
  `losses-risk-and-decision-rules` page. The extra page edge is retained because
  the theorem states expected metric risk and uses the published definition of
  risk for randomized rules. This discrepancy is recorded for reconciliation;
  no required page edge is deleted.
- The controlling owner direction requires draft, frontmatter-only A/B pages.
  The pages have empty bodies and no manually authored layout flag; the
  native engine owns `page_layout: compact-v1`.
- The definition separates operator discrepancy at the true parameter,
  noise-law discrepancy, sampling-model misspecification, and prior-support
  mismatch. It assumes no linearity and makes no posterior-existence or
  posterior-contraction claim. The theorem is the metric-loss two-point result
  under equality of the two observation laws. It does not assert that every
  mismatch is fatal; the B page supplies a restricted class with an explicit
  positive modulus.
- Neither the theorem nor examples use an axiom of choice. IP-08's sequence
  model carries Countable Choice upstream, but that branch is page-level
  context only and is not inherited by this pair.

## Supplier audit and interfaces

The actual current supplier bodies were inspected. Draft status is retained as
draft evidence and no supplier is described as approved by this author.

- IP-01, `library/inverse-problems/inverse-problems-identifiability-and-stability.md`:
  `def-ip-forward-map-and-solution-classes` supplies the metric truth/data
  spaces, admissible truth class, forward map, and metric target map.
  `def-ip-identifiability-and-stability-modulus` supplies the exact uniform
  modulus conditions used by the restricted B example. Its transitive metric
  inputs `def-metric-space` and `lem-metric-nonnegativity` were inspected; the
  latter's proof derives nonnegativity from its stated metric axioms.
- IP-07, `library/inverse-problems/statistical-inverse-experiments-and-white-noise.md`:
  the isonormal definition specifies centered L2-linear white noise, its
  covariance, and standard-normal values on finite orthonormal tuples; it does
  not identify samples as observation-space vectors. This page is a declared
  prerequisite but no item in this pair assumes Gaussian or white noise.
- IP-08, `library/inverse-problems/gaussian-sequence-models-and-risk-decomposition.md`:
  the actual SVD sequence model, ellipsoid, cutoff, and exact-risk proof were
  inspected. The proof's Countable Choice assumption belongs to the upstream
  SVD/coordinate branch only; none of its risk claims enter this pair.
- The published `losses-risk-and-decision-rules` page's
  `def-loss-function-and-risk` supplies the nonnegative expected-risk
  convention for randomized kernels. Its measurable-action-law supplier and
  the published nonnegative-integral additivity, monotonicity, and homogeneity
  results were inspected for the theorem's extended-valued risk argument.
- The new additive-noise definition will use the existing measurable-space,
  probability-measure, random-element, and law suppliers. Translation maps are
  required to be measurable; their pushforward laws are therefore probability
  measures. This adds no axiom branch.

## Source resolution and reading

The assigned design says “reader 2's tomography misspecification discussion”
without a title or URL. A searched Kaipio–Somersalo book mirror was not usable:
the PDF browser open returned an internal fetch error and a direct request to
the listed mirror returned HTTP 404. The Springer catalogue gave metadata and
a table of contents, not full text, so that book is not cited or treated as
read. Full-text alternatives were retrieved and inspected instead: Baek,
Aquino, and Mukherjee on generalized Bayes under inverse-model misspecification;
Cvetković et al. on approximate versus best parameter-to-observable maps and
observed model error; and Dashti–Stuart on the separation of forward map, prior,
and noise. Their posterior-stability conclusions are context only and are not
used to establish this batch's deterministic modulus. The failed book candidate
remains in the source-resolution history; no claim depends on it.

InverseBench (29 PDF pages) was retrieved from arXiv and read page by page.
Its reported algorithm rankings, sensitivity, and prior-shift outcomes remain
specific empirical benchmark observations. The paper treats its forward model
as exact and identifies forward-model mismatch as future work; no empirical
result is used as a theorem or generalized beyond its stated data and tuning.

The theorem was checked against two independent full treatments of the
two-point method: Raginsky's full minimax lecture notes, §1, Lemma 1 and its
proof (PDF pp. 3–5), and Duchi's full 495-page lecture notes, Chapter 8,
§§8.1–8.3 (PDF pp. 178–186). Both treat metric risk through a testing/loss
argument. Raginsky's displayed proof is for a finite sample space; the local
proof uses the same pointwise triangle inequality and integration under an
arbitrary common probability law, so it does not import that finite-space
restriction.

The source coverage file records exact URLs, locators, supported items,
fetch stamps, and a disposition for each result:
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-14.source-coverage.json`.

## Item checkpoints

The inventory and levels are fixed before carrier writing. No item is marked
ready until its final body, proof contract, placement, source evidence, and
supplier checks are complete. After each item, append its exact claim,
dependencies, source locators, validation results, unresolved obligations, and
next action here.

### `def-ip-operator-and-prior-mismatch` — level 1

The Definition distinguishes a truth, forward map, admissible truth/operator
pair set, noise probability law, true sampling law, working sampling family,
and prior-support mismatch. Its convention is broad enough for nonlinear
operators, permits restricted pair sets, and requires only measurable
translations for additive noise. It makes no posterior-existence or
convergence claim. Direct dependencies: `def-ip-forward-map-and-solution-classes`,
`def-metric-space`, `def-measurable-space`, `def-probability-measure`,
`def-statistical-experiment`, `def-measurable-function-between-measurable-spaces`,
`def-random-element-and-real-random-variable`,
`def-law-or-distribution-of-a-random-element`, and
`lem-law-of-a-random-element-is-a-probability-measure`.

Source locators read: Baek–Aquino–Mukherjee §§1, 2.2–2.3,
<https://arxiv.org/pdf/2210.06921>; Cvetković et al., Abstract, §1,
§2.1,
<https://arxiv.org/pdf/2301.04863>; Dashti–Stuart §1.1 and §3.2,
<https://arxiv.org/pdf/1302.6989>. The complete 29-page InverseBench paper was
read; its benchmark results remain empirical and its exact-forward-model scope
is isolated in the Definition's Remarks,
<https://arxiv.org/pdf/2503.11043>.

The actual IP-01, statistical-experiment, probability, metric, and
random-element supplier bodies are present and inspected. IP-01's
`def-ip-forward-map-and-solution-classes` remains draft; its interface is used
as declared and is not treated as independent approval. No missing supplier or
unresolved hypothesis remains for this definition. `source-fetch-check --stamp`
stamped all six selected full texts; the final fetch check reports 6/6 verified,
6/6 resolved and zero drops. Strict proof-contract, focused dependency,
statement-first, content-policy, forward-reference and render checks pass.
The readiness record is `ready`; this does not constitute independent approval.

### `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch` — level 2

The theorem states that if two truth/operator/noise specifications have the
same observation law and target distance `Delta`, every single randomized
decision kernel used under both has maximum expected metric loss at least
`Delta/2`. The proof uses the common kernel, metric triangle inequality,
monotonicity/additivity of nonnegative integration, and total mass one. Risks
may be infinite; the argument covers that case. It makes no claim for unequal
observation laws and no generic loss claim beyond metric loss. Dependencies:
`def-ip-operator-and-prior-mismatch`,
`def-ip-forward-map-and-solution-classes`, `def-metric-space`,
`lem-metric-nonnegativity`, `def-probability-measure`,
`def-loss-function-and-risk`, `lem-procedure-action-law-is-measurable`,
`def-nonnegative-lebesgue-integral`,
`def-integral-of-a-nonnegative-simple-function`,
`prop-the-nonnegative-integral-agrees-with-the-simple-integral`,
`cor-additivity-of-the-nonnegative-lebesgue-integral`, and
`prop-order-and-scalar-rules-for-the-nonnegative-integral`. Its only in-run
supplier above level 0 is the new definition (level 1), so its label is 2.

The two independent treatments read in full at the cited arguments are
Raginsky, §1, Lemma 1 and proof, PDF pp. 3–5,
<https://maxim.ece.illinois.edu/teaching/fall13/notes/minimax.pdf>, and Duchi,
Chapter 8, §§8.1–8.3, PDF pp. 178–186,
<https://web.stanford.edu/class/stats311/lecture-notes.pdf>. Raginsky states
the overlap/two-point inequality for a finite sample space; this local proof
directly integrates the metric triangle inequality under an arbitrary common
probability law and therefore does not import that restriction. Duchi's
estimation-to-testing and total-variation treatment is a general independent
check on the claim.

Actual risk suppliers were inspected: `def-loss-function-and-risk`,
`lem-procedure-action-law-is-measurable`,
`def-randomized-procedure-as-a-markov-kernel`, and the stated nonnegative
integral suppliers. The pointwise metric losses are assumed measurable in the
action sigma-algebra, which is the ordinary risk-definition hypothesis. The
complete proof is choice-free, including the infinite-risk boundary. The exact
supplier excerpts and numbered-step contracts pass the strict contract gate;
precheck, proof-layout, content-policy, focused dependency, forward-reference
and render checks pass. Its readiness record is `ready`, without independent
approval.

### `ex-ip-restricted-operator-class-positive-modulus` — level 2

For truth space `U=[1,2] union [4,5]`, the two operator labels `a=1,2` use
`F_a(x)=a*x`, and the admissible truth/operator pairs restrict each label to
its disjoint interval. The configuration forward map is `G(x,a)=a*x`, the
target is `q(x,a)=x`, and the class metric is the restriction of the `d_1`
metric on `R^2`. The local proof checks same-label and cross-label pairs and
then verifies `omega(t)=t` against IP-01's exact modulus conditions.
Dependencies: `def-ip-operator-and-prior-mismatch`,
`def-ip-identifiability-and-stability-modulus`, `def-metric-space`,
`lem-metrics-on-rn`, and `lem-real-line-is-a-metric-space`; the two in-run
suppliers are level 1, hence this item is level 2. It is an
exact-data restricted-class example and makes no noisy-model guarantee.
IP-01's actual modulus definition is present and inspected; it remains draft,
not independent approval. The empty, zero-distance, endpoint, same-operator,
and cross-operator cases are accounted for. No choice is used. The exact
supplier contract and endpoint finite checks pass, as do precheck, proof-layout,
statement-first, content-policy, focused dependency, forward-reference and
render checks. Its readiness record is `ready`, without independent approval.

### `ex-ip-identical-laws-under-operator-mismatch` — level 3

For `U=R`, the identity and half-scale linear forward maps send truths 1 and 2
to the same signal 1. The data and action sigma-algebras are both the power set,
so translations and absolute metric-loss sections are measurable directly.
Translating any common noise probability law by the common signal gives
identical observation laws, while the identity target distance is 1. The
theorem therefore gives the exact lower bound 1/2 for expected absolute loss.
Dependencies: `def-ip-operator-and-prior-mismatch`,
`thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`, and
`lem-real-line-is-a-metric-space`. Its highest in-run supplier is the theorem
at level 2, so the level is 3. This example uses arbitrary common additive
noise; the white-noise page requirement is page-level context only. No noise
distribution is omitted from the definition, and no choice is used. Its exact
contract, scoped precheck, proof-layout, statement-first, content-policy,
focused dependency, forward-reference and render checks pass. Its readiness
record is `ready`, without independent approval.

## Current run state

The final read-only autopilot status recomputed to `running` at `1-scaffold`:
43/109 batches are covered, no work is in flight, Batch 14 remains in the
missing set pending the author-drain artifact refresh, and the run retains its
earlier owner repair/recertification hold and invalid unit-prerequisite blocker.
No autopilot state or shared plan was changed. HEAD is `50139bdcb6`.

Final checks: strict proof-contract 4/4, proof-layout 4 items/8 steps/0 defects,
precheck 3/3 proofs, rendercheck 6 files, content-policy 4/4, focused depcheck
and fwdcheck 0 errors/warnings, and scoped statement-first 4/4 all pass.
Coverage-checklist has no errors and one `coverage-low-yield` warning (5/14
harvested results scaffolded); each decline is documented with an item-specific
scope reason, and Alpha confirmation remains a separate review obligation.
The full-run dependency-level command is blocked by unrelated scaffold state:
104 empty inventories and 34 stale labels elsewhere in the run. It reports no
level error for these four items; their computed levels are 1, 2, 2 and 3. The
full-run statement-first command likewise stops at the empty Batch 100
inventory; the scoped check passes all four items here. No other pair's files,
published content, shared plan, engine state, or verdicts were modified.
