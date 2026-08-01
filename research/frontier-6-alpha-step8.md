# Frontier 6 — Alpha Step 8 judge adjudication

Date: 2026-08-01

## Role and frozen-context boundary

Alpha was the sole adjudicator. The orchestrator did not adjudicate, Beta did
not verify its own work, and neither DeepSeek nor Terra was asked to author or
repair content. No fresh judge call, verification block, publication, commit,
or push was performed in this step.

The initial Step-8 judge ledger was treated as frozen evidence. It contained 813 records, of
which 421 are rejection records. Deduplication by
`{id, model, context_sha256}` produced 345 unique rejection candidates across
143 item ids: 135 DeepSeek v4 Pro candidates and 210 GPT-5.6 Terra candidates.
Every one of the 345 candidates now has exactly one owner decision in
`research/frontier-6-judge-adjudications.jsonl`. `tools/judge-compare.mjs`
reports zero unadjudicated candidates and no mismatched or unattested latest
context.

Alpha applied the standing severity rule: a real logical gap that a competent
human can close locally in under 30 seconds is `confirmed_nonfatal`, not fatal.
Raw rejection counts were never treated as defect counts.

## Initial Step-8 adjudication totals and judge comparison

| Model | Unique rejection candidates | Fatal logic | Fatal dependency citation | Fatal other | All fatal | Nonfatal | False positive | Fatal confirmation rate |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| DeepSeek v4 Pro | 135 | 19 | 37 | 4 | 60 | 70 | 5 | 44.44% |
| GPT-5.6 Terra | 210 | 15 | 48 | 6 | 69 | 139 | 2 | 32.86% |

This comparison measures precision among adjudicated rejection candidates. It
does not measure recall without an independently enumerated ground-truth set of
all fatal defects. Terra found more fatal candidates in absolute terms because
it produced substantially more unique rejection candidates; DeepSeek had the
higher fatal-confirmation rate. At item-id granularity, 33 fatal ids were found
by both models, 4 only by DeepSeek, and 10 only by Terra.

DeepSeek-only fatal ids were:

- `def-minimal-forbidden-induced-subgraph`
- `ex-positive-derivative-at-zero-with-no-local-monotonicity`
- `lem-higher-order-rolle`
- `thm-lebesgue-criterion-in-rn`

Terra-only fatal ids were:

- `def-complement-of-a-graph-class`
- `def-jordan-inner-and-outer-content`
- `def-multidimensional-rectangle-and-volume`
- `lem-jordan-set-integral-well-defined`
- `lem-prufer-decoding-produces-a-tree`
- `thm-exponential-definition-equivalence`
- `thm-exponential-is-strictly-increasing`
- `thm-exponential-ivp-uniqueness`
- `thm-lhopital-infinity-over-infinity`
- `thm-lhopital-zero-over-zero`

## Confirmed fatal detections

The following lists are by model and defect class. Repeated contexts for one id
remain separate adjudication candidates in the JSONL ledger, while the lists
below intentionally deduplicate ids for readability.

### DeepSeek v4 Pro

Fatal logic (19 candidates, 13 ids):

- `cex-lhopital-converse`
- `cor-jordan-content-finite-additivity`
- `ex-differentiable-function-with-discontinuous-derivative`
- `ex-positive-derivative-at-zero-with-no-local-monotonicity`
- `lem-exponential-series-has-infinite-radius`
- `lem-finite-cube-covers-admit-grid-control`
- `lem-higher-order-rolle`
- `thm-graphs-of-continuous-functions-have-content-zero`
- `thm-jordan-content-and-indicator-integrability`
- `thm-lebesgue-criterion-in-rn`
- `thm-multidimensional-darboux-equals-riemann`
- `thm-prufer-code-bijection`
- `thm-taylor-peano-remainder`

Fatal dependency citation (37 candidates, 23 ids):

- `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`
- `cor-one-dimensional-and-multidimensional-riemann-agree`
- `cor-taylor-lagrange-and-cauchy-remainders`
- `def-clique-stable-set-and-numbers`
- `def-minimal-forbidden-induced-subgraph`
- `def-weighted-graph-and-minimum-spanning-tree`
- `ex-geometric-function-taylor-remainder`
- `lem-compact-null-iff-content-zero-in-rn`
- `lem-exponential-factorial-tail-bound`
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
- `lem-scaled-binomial-coefficients-converge`
- `lem-taylor-polynomial-derivatives`
- `thm-continuous-on-a-rectangle-is-riemann-integrable`
- `thm-darboux-theorem-for-derivatives`
- `thm-derivative-of-exponential`
- `thm-exponential-addition-formula`
- `thm-exponential-limits-and-range`
- `thm-general-leibniz-rule`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-multidimensional-integral-properties`
- `thm-normalized-exponential-functional-equation`
- `thm-prims-minimum-spanning-tree-algorithm`
- `thm-taylor-peano-remainder`

Fatal other (4 candidates, 3 ids):

- `def-multidimensional-darboux-integral`
- `def-oscillation-in-rn`
- `lem-higher-order-rolle`

### GPT-5.6 Terra

Fatal logic (15 candidates, 10 ids):

- `cex-lhopital-converse`
- `cor-jordan-content-finite-additivity`
- `ex-differentiable-function-with-discontinuous-derivative`
- `lem-exponential-series-has-infinite-radius`
- `lem-finite-cube-covers-admit-grid-control`
- `lem-jordan-set-integral-well-defined`
- `lem-prufer-decoding-produces-a-tree`
- `thm-graphs-of-continuous-functions-have-content-zero`
- `thm-jordan-content-and-indicator-integrability`
- `thm-prufer-code-bijection`

Fatal dependency citation (48 candidates, 29 ids):

- `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`
- `cor-one-dimensional-and-multidimensional-riemann-agree`
- `cor-taylor-lagrange-and-cauchy-remainders`
- `def-clique-stable-set-and-numbers`
- `def-jordan-inner-and-outer-content`
- `def-weighted-graph-and-minimum-spanning-tree`
- `ex-geometric-function-taylor-remainder`
- `lem-compact-null-iff-content-zero-in-rn`
- `lem-exponential-factorial-tail-bound`
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
- `lem-scaled-binomial-coefficients-converge`
- `lem-taylor-polynomial-derivatives`
- `thm-continuous-on-a-rectangle-is-riemann-integrable`
- `thm-darboux-theorem-for-derivatives`
- `thm-derivative-of-exponential`
- `thm-exponential-addition-formula`
- `thm-exponential-definition-equivalence`
- `thm-exponential-is-strictly-increasing`
- `thm-exponential-ivp-uniqueness`
- `thm-exponential-limits-and-range`
- `thm-general-leibniz-rule`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-lhopital-infinity-over-infinity`
- `thm-lhopital-zero-over-zero`
- `thm-multidimensional-darboux-equals-riemann`
- `thm-multidimensional-integral-properties`
- `thm-normalized-exponential-functional-equation`
- `thm-prims-minimum-spanning-tree-algorithm`
- `thm-taylor-peano-remainder`

Fatal other (6 candidates, 4 ids):

- `def-complement-of-a-graph-class`
- `def-multidimensional-darboux-integral`
- `def-multidimensional-rectangle-and-volume`
- `def-oscillation-in-rn`

## Confirmed nonfatal findings

There are 209 confirmed-nonfatal candidates: 70 DeepSeek and 139 Terra.
Typical cases were an omitted elementary tag, a one-line direct argument, a
routine finite-set fact, a harmless endpoint split, or a citation-fidelity
improvement whose mathematical bridge is locally evident. These were not
credited as fatal detections even when Alpha chose to improve the prose while
editing an adjacent fatal defect.

Examples include the missing explicit eligibility sentence in the repaired
Kruskal exchange, the $d=0$ split in the product-content bound, the
$\varepsilon/3$ adjustment in the oscillation characterization, avoiding
$g(c)$ in the Darboux jump argument, and starting the non-uniform-continuity
sequence at $n=1$. Each can be closed locally within the 30-second threshold.

## False positives, verified from disk

Seven candidates were false positives. The decisive text is quoted here so the
refutation does not depend on Alpha's summary.

- DeepSeek, `cor-taylor-remainder-bound`, context `46a619d3…`: the cited parent
  explicitly says, “The reflected formula holds when \(x<a\).” The rejection
  incorrectly restricted the Lagrange form to $a<x$.
- Terra, `ex-xk-abs-x-smoothness-threshold`, context `1900e2ef…`: the step says
  “Differentiating \(j\le k\) times”. At $k=0$, this asserts only the zeroth
  derivative/continuity; it does not claim that \(|x|\) is differentiable.
- DeepSeek, `fs-every-hereditary-class-has-a-finite-forbidden-basis`, context
  `e63f41f0…`: the local assumption is verbatim, “**Given:** The hereditary
  class \(\mathcal B\) of finite bipartite graphs.” The rejection said heredity
  was not established.
- Terra, `lem-compact-null-iff-content-zero-in-rn`, context `52412685…`: the
  proof says, “One implication is [L1]. For the other,” before choosing the null
  cover. The cover is under the assumption of the reverse implication, not an
  unconditional choice from compactness.
- DeepSeek, `lem-left-and-right-cosets-equinumerous`, context `1db78a1a…`: [L1]
  says “\(gH=kH\) if and only if \(g^{-1}k\in H\),” and step 1.1 already has
  exactly $g^{-1}k\in H$, which is the right-coset criterion after replacing
  $g,k$ by $g^{-1},k^{-1}$. The rejection overlooked the already available
  element.
- DeepSeek, `thm-exponential-limits-and-range`, context `4983ef74…`, and
  DeepSeek, `thm-lhopital-infinity-over-infinity`, context `3d38b241…`: the cited
  definition has a section headed “**Combined forms**” and says “We write
  \(f(x)\to+\infty\) as \(x\to+\infty\) when …”. The rejected limit modes are
  therefore explicitly defined.

The Terra countable-choice objection to
`thm-lipschitz-images-of-null-sets-in-rn-are-null` was *not* called a false
positive: the construction is canonical, but the frozen proof did not say so.
It is a real, locally closable, nonfatal omission.

## Repairs applied

No Cosets item needed a material Step-8 repair. The 54 changed items are in the
other five pairs.

### Trees, Prüfer codes, and MSTs

- Generalized Prüfer encoding and decoding from initial-segment labels to
  finite subsets of natural labels, so induction on $S\setminus\{v\}$ is
  inside the stated domain.
- Replaced the false “singleton component” decoding invariant by the correct
  unused-label/component invariant.
- Added the missing connected-graph spanning-tree existence dependency to the
  MST definition.
- Added the fundamental-cycle and exchange dependencies to uniqueness,
  Kruskal, and Prim, and made the exchanged tree edge and its eligibility
  explicit.

### Induced subgraphs and hereditary classes

- Removed the false unconditional “equivalently up to isomorphism” claim for
  complement classes; the equivalence is now conditional on isomorphism
  closure.
- Made the finite-graph domain explicit for $H$-free/ℱ-free graphs.
- Added the finite-power-set result for clique/stable-set maxima and the exact
  family-free dependency for minimal forbidden induced subgraphs.

### Darboux, L'Hôpital, and Taylor theory

- Strengthened the periodic oscillator example to prove $C^1$, give its
  derivative, and exhibit recurring derivative values $3$ and $-3$; this
  repairs the three counterexamples that consume it.
- Replaced the circular higher-order Rolle regularity condition by the standard
  continuity/$n$-times-differentiability hypotheses and a licensed induction.
- Supplied compactness for the Darboux EVT argument and continuity for both
  L'Hôpital applications.
- Added shifted-power/chain-rule, canonical-natural arithmetic, power-rule,
  and induction support where Taylor and Leibniz calculations actually use
  them.
- Restated the full Schlömilch formula before specializing it, repaired the
  Peano/Cauchy hypotheses, and licensed positivity in the denominator.

### Exponential function

- Split $x=0$ before the ratio-test division.
- Added the Archimedean reciprocal limit, canonical-natural arithmetic, and
  nonnegative-series domination where the scaled-binomial, factorial-tail,
  derivative, range, and bound arguments require them.
- Added exponential continuity, $\exp(0)=1$, and the series-defined existence
  direction to the functional-equation, IVP, and definition-equivalence chain.
- Repaired the strict $2<e<3$ estimate and the non-uniform-continuity sequence
  domain.

### Riemann integration in \(\mathbb R^m\) and Jordan content

- Repaired malformed dimension/coordinate quantification and the false exact
  empty-set oscillation comparison.
- Added the exact Euclidean/sup-norm comparison from the earlier
  `rn-as-a-normed-space` dependency closure.
- Replaced the invalid grid-control lemma by a clipped, padded finite rectangle
  cover construction with an explicit volume-excess bound.
- Removed the false one/every-bounding-rectangle claim from the indicator
  theorem and rebuilt bounding-rectangle independence using content-zero shared
  faces, the Lebesgue criterion, and additivity.
- Repaired finite additivity by proving that cube-cover content zero yields
  Jordan inner and outer content zero before invoking indicator integrability.
- Supplied the nonnegative-series theorem for countable null unions, intrinsic
  compactness for ambient covers, arbitrarily fine grids for Darboux/Riemann
  equivalence, refinement and reverse-triangle dependencies for integral
  properties, and exact one-dimensional definition links.
- Restricted the continuous-graph theorem to the nondegenerate rectangle
  domain actually proved and made the compactness step in the multidimensional
  Lebesgue criterion explicit.

## Exact material-change and rejudge target set

The following 54 ids differ from the pre-Step-8 touch snapshot. This exact set
is the target for the next paired rejudge; no rejudge was run by Alpha here.
None currently contains a `verification.judge` block.

- `cex-exponential-not-uniformly-continuous-on-r`
- `cor-derivatives-have-no-removable-or-jump-discontinuities`
- `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`
- `cor-exponential-is-a-bijection-onto-positive-reals`
- `cor-jordan-content-finite-additivity`
- `cor-one-dimensional-and-multidimensional-riemann-agree`
- `cor-taylor-lagrange-and-cauchy-remainders`
- `cor-two-less-than-e-less-than-three`
- `def-clique-stable-set-and-numbers`
- `def-complement-of-a-graph-class`
- `def-h-free-and-family-free-graph`
- `def-jordan-inner-and-outer-content`
- `def-minimal-forbidden-induced-subgraph`
- `def-multidimensional-rectangle-and-volume`
- `def-oscillation-in-rn`
- `def-prufer-code`
- `def-weighted-graph-and-minimum-spanning-tree`
- `ex-geometric-function-taylor-remainder`
- `ex-piecewise-polynomial-periodic-oscillator`
- `ex-positive-derivative-at-zero-with-no-local-monotonicity`
- `lem-compact-null-iff-content-zero-in-rn`
- `lem-exponential-factorial-tail-bound`
- `lem-exponential-series-has-infinite-radius`
- `lem-finite-cube-covers-admit-grid-control`
- `lem-higher-order-rolle`
- `lem-jordan-set-integral-well-defined`
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
- `lem-oscillation-characterisation-in-rn`
- `lem-product-lower-bound-for-jordan-content`
- `lem-prufer-decoding-produces-a-tree`
- `lem-scaled-binomial-coefficients-converge`
- `lem-taylor-polynomial-derivatives`
- `thm-continuous-on-a-rectangle-is-riemann-integrable`
- `thm-darboux-theorem-for-derivatives`
- `thm-derivative-of-exponential`
- `thm-exponential-definition-equivalence`
- `thm-exponential-is-strictly-increasing`
- `thm-exponential-ivp-uniqueness`
- `thm-exponential-limits-and-range`
- `thm-general-leibniz-rule`
- `thm-graphs-of-continuous-functions-have-content-zero`
- `thm-jordan-content-and-indicator-integrability`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-lebesgue-criterion-in-rn`
- `thm-lhopital-infinity-over-infinity`
- `thm-lhopital-zero-over-zero`
- `thm-multidimensional-darboux-equals-riemann`
- `thm-multidimensional-integral-properties`
- `thm-multidimensional-riemann-criterion`
- `thm-normalized-exponential-functional-equation`
- `thm-prims-minimum-spanning-tree-algorithm`
- `thm-prufer-code-bijection`
- `thm-taylor-peano-remainder`
- `thm-taylor-schlomilch-roche-remainder`

## Gates

- Scoped proof precheck: 45 proof-bearing changed items checked, 45 pass, 0
  failing.
- `validate-plan`: pass; page order, dependency closure, and item ids are
  consistent.
- Plan/manifest/live parity: all 188 Frontier-6 manifest entries match live
  item titles and dependencies in `research/plan-spec.json` and both batch
  manifests.
- `rendercheck`: pass over 2,400 files.
- `citecheck`: pass; its 24 global heuristic warnings do not include a changed
  Frontier-6 item.
- `prosecheck`: 0 errors (global heuristic warnings remain informational).
- `depcheck`, `fwdcheck`, `extcheck`, and the two-batch manifest audit: pass.
- `git diff --check`: pass.
- `judge-compare --adjudications`: complete, 345/345 candidates adjudicated,
  zero unadjudicated.
- Touch snapshot `step-8-alpha-judge-adjudication` recorded as snapshot 5. It
  reports 25 items with more than one repair transition. All 25 were inside
  Alpha's disk audit/adjudication scope in this step; none was delegated back
  to its author and none was adjudicated by the orchestrator.

The unrelated Frontier-3 files and `items/thm-reals-ordered-field.md` were not
modified by Alpha Step 8.

## Step 8b — final-current postrepair adjudication

Both models subsequently produced usable final-current verdicts for all 54
Step-8 repair targets. Alpha did not run those judges and treated their contexts
as frozen. Diffing the updated ledger against the 345 existing adjudication
keys produced exactly 56 new unique rejection candidates across 38 ids: 23
DeepSeek candidates and 33 Terra candidates.

Alpha read the current item and relevant dependencies for every new candidate.
The results were:

| Model | New candidates | Fatal | Nonfatal | False positive |
|---|---:|---:|---:|---:|
| DeepSeek v4 Pro | 23 | 0 | 20 | 3 |
| GPT-5.6 Terra | 33 | 0 | 32 | 1 |
| **Total** | **56** | **0** | **52** | **4** |

The 52 real findings are local citation-fidelity, tagging, endpoint, notation,
or one-line proof-expansion issues. Representative examples are explicitly
invoking finite-image preservation, adding the monotonicity line after the
Archimedean reciprocal witness, citing comparison before summing a geometric
majorant, spelling out uniform grid subdivision, and reapplying the same
Cauchy-MVT construction with reversed endpoints. Each closes from the current
text and dependency closure in under 30 seconds. Under the standing Alpha rule,
none is fatal.

The four false positives are:

- Terra on `thm-exponential-definition-equivalence`, context `37892709…`:
  `[algebra]` is an accepted proof tag and licenses equality transitivity; a
  separate equality-transitivity dependency is not required.
- DeepSeek on `thm-exponential-limits-and-range`, context `93900db0…`: the
  cited `def-limits-at-infinity` explicitly contains the “Combined forms” for
  infinite limits at infinite endpoints.
- DeepSeek on `thm-lhopital-infinity-over-infinity`, context `49f5b641…`: the
  same “Combined forms” define the challenged approach modes, and the theorem
  uses arrow notation rather than an extended-real equation.
- DeepSeek on `thm-lhopital-zero-over-zero`, context `ee6e2320…`: `L` in the
  extended line abbreviates the separately defined finite and
  `to +∞`/`to -∞` arrow cases, which the proof explicitly handles. It does not
  assert an extended-real limit equation.

The 38 current ids reviewed were:

- `cex-exponential-not-uniformly-continuous-on-r`
- `cor-derivatives-have-no-removable-or-jump-discontinuities`
- `cor-one-dimensional-and-multidimensional-riemann-agree`
- `cor-two-less-than-e-less-than-three`
- `def-oscillation-in-rn`
- `def-prufer-code`
- `def-weighted-graph-and-minimum-spanning-tree`
- `ex-positive-derivative-at-zero-with-no-local-monotonicity`
- `lem-compact-null-iff-content-zero-in-rn`
- `lem-exponential-factorial-tail-bound`
- `lem-exponential-series-has-infinite-radius`
- `lem-finite-cube-covers-admit-grid-control`
- `lem-jordan-set-integral-well-defined`
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
- `lem-oscillation-characterisation-in-rn`
- `lem-product-lower-bound-for-jordan-content`
- `lem-prufer-decoding-produces-a-tree`
- `lem-scaled-binomial-coefficients-converge`
- `thm-continuous-on-a-rectangle-is-riemann-integrable`
- `thm-darboux-theorem-for-derivatives`
- `thm-derivative-of-exponential`
- `thm-exponential-definition-equivalence`
- `thm-exponential-is-strictly-increasing`
- `thm-exponential-ivp-uniqueness`
- `thm-exponential-limits-and-range`
- `thm-general-leibniz-rule`
- `thm-graphs-of-continuous-functions-have-content-zero`
- `thm-jordan-content-and-indicator-integrability`
- `thm-kruskals-minimum-spanning-tree-algorithm`
- `thm-lebesgue-criterion-in-rn`
- `thm-lhopital-infinity-over-infinity`
- `thm-lhopital-zero-over-zero`
- `thm-multidimensional-darboux-equals-riemann`
- `thm-multidimensional-integral-properties`
- `thm-normalized-exponential-functional-equation`
- `thm-prims-minimum-spanning-tree-algorithm`
- `thm-prufer-code-bijection`
- `thm-taylor-schlomilch-roche-remainder`

No fatal postrepair defect remained. Therefore Step 8b made no item, page,
manifest, or plan edit; it recorded no new touch snapshot; and its exact rejudge
target is the empty set. No fresh judge call, verification block, publication,
commit, or push was performed.

The final ledger has 931 records and 477 rejection rows. Deduplication gives
401 unique rejection candidates, all 401 adjudicated with unique keys and zero
remaining. The final cumulative comparison is:

| Model | Unique candidates | Fatal logic | Fatal dependency | Fatal other | All fatal | Nonfatal | False positive | Fatal confirmation rate |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| DeepSeek v4 Pro | 158 | 19 | 37 | 4 | 60 | 90 | 8 | 37.97% |
| GPT-5.6 Terra | 243 | 15 | 48 | 6 | 69 | 171 | 3 | 28.40% |

`tools/judge-compare.mjs` reports status `complete` and zero unadjudicated
rejections. These rates remain precision among rejection candidates, not recall
against an independently enumerated defect set.
