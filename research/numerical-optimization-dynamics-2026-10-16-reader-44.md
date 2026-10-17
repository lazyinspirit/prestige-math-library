# Step 3a reader report — batch 44

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `44`

## Review scope and inventory

The autopilot status showed the run active at `3a-read`, with no worker
currently running. Batch 44's assigned draft carriers were in the current
frontier. I read the batch manifest, batch dependency map, cross-batch
dependency map, author notes, author-check record, and all 13 proof-contract
entries. These records guided navigation but did not determine the verdicts.

Assigned pages opened:

- `delay-differential-equations-and-history-discretization` (A)
- `delay-differential-equations-and-history-discretization-examples` (B)

All 19 assigned items were opened in supplier-before-consumer order:

- A items: `def-retarded-delay-equation-and-history-space`,
  `lem-delay-history-space-is-banach`, `lem-retarded-delay-gronwall-bound`,
  `thm-retarded-delay-method-of-steps-well-posedness`,
  `alg-retarded-delay-euler-with-stored-history`,
  `lem-piecewise-linear-delay-history-error`,
  `thm-retarded-delay-euler-first-order-global-error`,
  `def-scalar-neutral-delay-equation-and-segment-shift`,
  `thm-neutral-delay-method-of-steps-well-posedness`,
  `lem-neutral-delay-shift-neumann-inverse`,
  `alg-neutral-delay-euler-compatible-grid`,
  `thm-neutral-delay-euler-first-order-error`,
  `def-distributed-delay-equation-and-window-integral`,
  `alg-distributed-delay-composite-midpoint-rule`, and
  `lem-distributed-delay-midpoint-error-split`.
- B examples: `ex-retarded-delayed-feedback-euler`,
  `ex-rk4-delay-breakpoint-local-order-loss`,
  `ex-neutral-delay-derivative-amplification`, and
  `ex-distributed-delay-midpoint-history-error`.

The assigned page requirements and relevant host pages were opened:
`global-ode-and-density-error`, `normed-and-banach-spaces`,
`one-step-ode-consistency-and-local-error`, and
`picard-lindelof-and-first-order-odes`.

The cross-batch draft suppliers opened were batch 7's
`def-one-step-ode-method-local-defect-order-and-stability` and batch 28's
`thm-global-error-from-one-step-defect-and-stability` and
`lem-discrete-one-step-error-recurrence-bound`. The published item suppliers
opened for the assigned claims were `def-first-order-ode-initial-value-problem-and-solution`,
`def-euclidean-inner-product`, `def-lipschitz-holder-contraction`,
`def-vector-valued-functions-limits-and-continuity`,
`def-vector-valued-derivative-and-integral`, `def-banach-space`,
`lem-vector-valued-continuous-curve-space-is-complete`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`thm-gronwall-integral-inequality`, `thm-heine-cantor-r`,
`thm-extreme-value-metric`, `thm-picard-lindelof-local-existence-and-uniqueness`,
`thm-norm-inequality-for-the-vector-valued-integral`,
`cor-vector-valued-ftc-and-lipschitz-bound`, `def-continuity-real`,
`def-derivative`, `def-function-space`, `lem-of-triangle-inequality`,
`thm-componentwise-limits-and-continuity`,
`thm-composition-of-continuous-functions`,
`thm-algebra-of-continuous-functions`, and
`thm-continuous-implies-integrable`.

To check the batch-28 recurrence proof used here at $p=1$, I also opened
`def-finite-sum`, `def-integer-power`, `def-natural-logarithm`,
`def-real-power`, `def-real-exponential-function-and-e`,
`lem-exponential-dominates-one-plus-x`, `lem-finite-sum-laws`,
`lem-power-monotone`, `thm-real-power-laws`,
`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`,
`thm-natural-logarithm-laws`, `cor-exponential-reciprocal-and-positivity`,
`lem-of-square-positive`, `thm-derivative-of-exponential`, and
`cor-mean-value-theorem`.

## Repairs and evidence

- In `alg-retarded-delay-euler-with-stored-history`, the optional budget had no
  type or exact exhaustion condition, and the `domain-failure` branch did not
  correspond to an input in the stated mathematical problem. The definition now
  requires an integer budget `B ∈ N₀`, checks `n ≥ B` before each evaluation,
  specifies the partial output on exhaustion, and records that evaluations are
  defined because `n < N` implies `t_n < T` and the vector field is total on its
  stated domain.
- In `thm-retarded-delay-euler-first-order-global-error`, the conclusion used a
  completed interpolant even though the algorithm could stop early for a small
  budget. The Statement and Given clauses now require no budget or `B ≥ N`. The
  proof contract now records this full-grid condition.
- In `alg-neutral-delay-euler-compatible-grid`, the budget branch was similarly
  unspecified and the domain-failure branch was not part of the stated problem.
  The definition now fixes `B ∈ N₀`, the pre-evaluation exhaustion check, the
  accepted arrays returned on an early stop, and the totality of evaluations on
  the problem domain.
- In `thm-neutral-delay-euler-first-order-error`, the maxima over all grid
  indices require all `N` steps. The Statement and Given clauses now require no
  budget or `B ≥ N`. The proof contract records this full-grid condition.
- In `def-distributed-delay-equation-and-window-integral`, continuity alone had
  been used to assert a componentwise Riemann integral without establishing
  integrability. The Definition now traces component continuity through the
  componentwise, composition, and algebra-of-continuous-functions results, then
  invokes `thm-continuous-implies-integrable` on `[0,τ]`. Those supplier IDs
  were added to the item dependencies and the batch-44 manifest; dependency
  level remains 1.
- In `alg-distributed-delay-composite-midpoint-rule`, the grid query range and
  exact execution were implicit. The Definition now states its inputs and
  admissible query indices, proves every history query lies in the stored path,
  gives the finite accumulation loop, and states its work and memory costs.
- I refreshed supplier excerpts in the affected proof contracts (9 citations
  and 9 supplier interfaces). I also corrected stale contract step locators in
  `lem-piecewise-linear-delay-history-error`,
  `ex-retarded-delayed-feedback-euler`,
  `ex-rk4-delay-breakpoint-local-order-loss`,
  `ex-neutral-delay-derivative-amplification`, and
  `ex-distributed-delay-midpoint-history-error`. No changed item had a stale
  `verification.judge` record.

No authored mathematical result was withdrawn or narrowed. The proof contracts
for the unchanged theorems, lemmas, and examples still match their current proof
steps after the corrected locators.

## Independent mathematical checks and sources

The retarded and neutral recurrences, finite-horizon constants, interpolation
bound, RK4 exact-start defect, and midpoint split were checked directly from the
displayed formulas and hypotheses. The batch 7 and batch 28 suppliers are draft
items; their stated interfaces and proofs were checked for these consumers, but
this report does not claim to accept those suppliers for the run.

For delay-equation context, I read Guglielmi and Hairer, *Solving Delay
Differential Equations*, Chapter 1: §1.1.1 (PDF pp. 2–3) states that for a
constant delay the solution is an ODE between successive breaking points and
that derivative regularity can fail at multiples of the delay; §1.1.4 (PDF
p. 5) describes neutral derivative-delay equations and the lack of smoothing at
breakpoints; §1.1.5 (PDF pp. 5–6) defines a distributed-delay integral in a
Volterra form; and §1.2 (PDF pp. 6–7) identifies constant-delay breakpoints
`jτ`, recommends placing relevant breakpoints on the mesh, and explains why
dense output is needed for delayed values. [Full chapter PDF](https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf)

For finite-window distributed delays and quadrature, I read Pulch, *Equivalent
Systems for Differential Equations with Polynomially Distributed Delay*, v3:
§2.2 (PDF/printed pp. 3–5) gives a compact delay interval and the corresponding
history integral; §5 (PDF p. 14), equation (24), replaces a distributed-delay
integral by a quadrature formula, noting the composite Simpson rule used in
prior work. The assigned midpoint remainder and stored-history split are
derived locally in this batch, not imported from that paper. [Version 3 PDF](https://arxiv.org/pdf/2408.09861v3)

The browser could not retrieve Zennaro's cited lecture-note PDF. The Hairer–Guglielmi
chapter and Pulch paper supplied the authoritative delay context used here; the
local numerical calculations were checked from the item hypotheses directly.

## Page verdicts

- `delay-differential-equations-and-history-discretization` (A): its summary
  correctly states the fixed-delay method-of-steps result, the completed-grid
  Euler setup and storage, the interpolation and tube hypotheses, the scalar
  neutral stability restriction, and the finite-window midpoint error split.
  No page prose edit was needed.
- `delay-differential-equations-and-history-discretization-examples` (B): its
  summary matches the exact delayed-feedback endpoint calculation, the RK4
  crossing-step defect, the neutral shift examples, and the distributed-delay
  signed-error cancellation. No page prose edit was needed.

## Unedited defects and blockers

No confirmed defect remains in an uneditable assigned dependency or page.
There is no workflow blocker. Findings JSON is empty.

## Validation

- Reflow ran for all six changed items; five were unchanged by reflow and the
  retarded global-error theorem was reflowed.
- Precheck passed for both changed theorem proofs (1 checked, 0 failing each);
  the four definition/algorithm items returned 0 checked, 0 failing.
- After the final item edits and reflow, one batched proof-layout command checked
  all six changed item paths: 6 items, 9 proof steps, 0 defects.
- The updated proof-contract excerpts match the current source sections, and a
  contract-locus check found no remaining stale proof-step references.
