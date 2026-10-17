# Step 3a reader report — batch 51

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Assignment: batch `51`

## Inventory reviewed

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/adaptive-quadrature-and-error-indicators.md` (A page)
- `library/numerical-linear-algebra-and-approximation/adaptive-quadrature-and-error-indicators-examples.md` (B page)

Assigned items, reviewed in dependency order:

- `def-adaptive-simpson-refinement-indicator`
- `lem-composite-simpson-asymptotic-error-expansion`
- `alg-adaptive-simpson-with-finite-depth-and-panel-cap`
- `thm-simpson-richardson-error-estimator-asymptotic`
- `thm-adaptive-simpson-cap-termination-and-indicator-budget`
- `ex-adaptive-simpson-misses-narrow-feature`
- `ex-adaptive-simpson-cap-reached`
- `ex-adaptive-simpson-leading-error-cancellation`
- `alg-certified-adaptive-simpson`
- `thm-certified-adaptive-simpson-enclosure`

Opened the three required A-page prerequisites: `composite-quadrature-rules`,
`outward-rounded-interval-and-ball-arithmetic`, and
`clenshaw-curtis-and-extrapolation-quadrature`. The assigned proof items import
the Simpson and real interval-arithmetic interfaces; no Clenshaw–Curtis or
Romberg item is used as an item-level premise.

Opened the dependency items needed to check the assigned arguments, including
`alg-composite-simpson-rule`, `lem-simpson-panel-peano-kernel`,
`thm-composite-simpson-error-bound`, the interval, rounding and outward
operation definitions, `thm-outward-rounded-operations-are-isotone-and-dag-sound`,
`lem-directed-dyadic-rounding-enclosure-and-error`, and the cited real-analysis
results for compactness, uniform continuity, integrability, additivity,
monotonicity, linearity, finite sums, differentiation, the fundamental theorem,
and extreme values. For the interval-soundness argument, the complex-ball and
square-root branches not used by the assigned algorithm were not audited as a
separate closure.

## Mathematical review

- `def-adaptive-simpson-refinement-indicator`: the two nested even Simpson grids
  match the stated coarse and refined values. The `/15` quantity is explicitly
  only an indicator at finite levels.
- `lem-composite-simpson-asymptotic-error-expansion`: the panel kernel has
  signed integral `-(2h)^5/2880`; summing its leading term over `(b-a)/(2h)`
  panels gives `-(h^4/180) sum (2h) f^(4)(c_j)`. Uniform continuity controls
  both the panel remainder and the midpoint sum, establishing the claimed
  little-o expansion with the stated sign and coefficient.
- `alg-adaptive-simpson-with-finite-depth-and-panel-cap`: the five-node
  indicator, acceptance and cap branches, recursive tolerance split, positive
  child budgets, and failure propagation are specified. A split spends one
  parent call and at most `p-1` child calls.
- `thm-simpson-richardson-error-estimator-asymptotic`: the nested error
  expansion gives the indicator term `|c|h^4/16 + o(h^4)` and cancels the
  leading term in the corrected value. The relative limit is correctly
  restricted to `c != 0`; it asserts no finite-level error guarantee.
- `thm-adaptive-simpson-cap-termination-and-indicator-budget`: strong
  induction on the positive call budget proves termination, the `P` and `5P`
  request bounds, the leaf-sum identity, and the accepted indicator budget.
  The cap result is not described as a tolerance success.
- `ex-adaptive-simpson-misses-narrow-feature`: all five sample nodes are roots,
  so the returned value and indicator are zero. On `[1/8,3/16]`, the displayed
  lower bound is `f >= C`; its integral is `C/16 = 2 tau`, proving the claimed
  failure witness.
- `ex-adaptive-simpson-cap-reached`: the endpoint, midpoint and quarter-point
  values give the displayed `S_0` and `S_1`; the rational inequalities imply
  the indicator exceeds `1/1000`, so the zero-depth call returns `cap-reached`.
- `ex-adaptive-simpson-leading-error-cancellation`: the fourth derivative
  integrates to zero, the exact refined error is `5/43008`, and the indicator
  is `1/2048`, giving the claimed ratio `21/5`.
- `alg-certified-adaptive-simpson` and
  `thm-certified-adaptive-simpson-enclosure`: the finite interval DAG encloses
  the exact one-panel Simpson value; the sound fourth-derivative range gives
  the `ML^5/2880` remainder, rounded upward. Summing sound panel enclosures
  proves the returned enclosure. The oracle contracts remain explicit
  mathematical hypotheses, and `inconclusive` does not claim the tolerance.

## Repair and evidence

Corrected the Owen bibliography entry in these five assigned items:

- `def-adaptive-simpson-refinement-indicator`
- `lem-composite-simpson-asymptotic-error-expansion`
- `thm-simpson-richardson-error-estimator-asymptotic`
- `ex-adaptive-simpson-misses-narrow-feature`
- `ex-adaptive-simpson-cap-reached`

Their Owen entry had pointed to `fncbook.com/integration`, which is the
Driscoll–Braun book, not Owen's book. The corrected URL is Owen's chapter PDF,
`https://artowen.su.domains/mc/Ch-quadrature.pdf`, and the locator now names
Chapter 7, §7.2 and equation (7.6). The Owen section supports the compound
Simpson formula and its fourth-derivative error formula; the Richardson
indicator claims remain sourced to Driscoll–Braun §5.7.1. Evidence: Owen's
[book page](https://artowen.su.domains/mc/) identifies the author and Chapter 7
section 2, “Simpson's rule”; the [chapter PDF](https://artowen.su.domains/mc/Ch-quadrature.pdf)
contains compound Simpson formula (7.6) and the C4 error formula. The
[FNC book page](https://tobydriscoll.net/fnc/) identifies Driscoll and Braun as
its authors.

No mathematical statement, proof step, or local proof-contract fact changed, so
the batch proof-contract entries remain applicable. None of the five edited
items had a `verification.judge` record to remove.

Validation after the edits:

- Reflow ran on all five changed items: the indicator definition was unchanged;
  the other four were reflowed.
- Precheck: the definition had `0 checked, 0 failing`; each of the other four
  passed its direct proof check.
- Batched proof-layout: `5 items, 14 steps, 0 defects`.

## Page verdicts and remaining defects

- A page `adaptive-quadrature-and-error-indicators`: summary accurately
  separates the finite heuristic indicator from conditional interval
  certification and states the relevant oracle conditions.
- B page `adaptive-quadrature-and-error-indicators-examples`: summary matches
  the three exact examples and makes no general accuracy-rate claim.
- Required page `composite-quadrature-rules`: the page's exact-real Simpson
  interface and signed panel-kernel summary match the suppliers used here.
- Required page `outward-rounded-interval-and-ball-arithmetic`: the page
  summary matches the finite directed-rounding and explicit-status interface
  used by the certified branch.
- Required page `clenshaw-curtis-and-extrapolation-quadrature`: no conflict
  found in the page summary; it is a page-level requirement, not a local proof
  premise of these items.

No confirmed defect remains unedited in batch 51 or among the dependencies
reviewed for the assigned claims. No batch 51 mathematical blocker was found.
The on-disk run status checked at review start records an unrelated
`3a-split` blocker: `split-6` failed three times for batch 6.

Coverage was limited to batch 51, its page-level prerequisites, and the
dependency interfaces used by the assigned arguments. This review did not
re-audit every transitive proof dependency of published library results or
unrelated branches of the interval-arithmetic page.
