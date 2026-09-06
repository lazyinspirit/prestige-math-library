# Step 4 — splice-refusal adjudication (`frontier-31a`)

## Inputs

`research/frontier-31a-splice-refusals.json` has `refusals: []`.
The required `node tools/validate-plan.mjs research/plan-spec.json` check
nevertheless reports the two hard errors below. The `b-leaf` error is included
because this task specifically requires rerouting a dependency on an examples
page through an A-page result.

## Adjudications

### `cex-modification-need-not-be-indistinguishable`

- **Edge and evidence.** The plan's B-page item on
  `infinite-product-measures-and-kolmogorov-extension-examples` (order
  288.102) still depends on `ex-uniform-random-variable-on-zero-one`, homed
  on the B page `probability-spaces-random-variables-and-expectation-examples`
  (order 288.098). That page is in the declaring page's `requires` closure,
  but it is nevertheless an impermissible B-page item dependency. The current
  batch-4 scaffold instead names the A-page result
  `thm-lebesgue-measure-of-a-box-of-every-kind`, homed on
  `lebesgue-measure-on-euclidean-space` (order 288.007), which is in the same
  closure. Its stated box formula gives both $\lambda([0,1])=1$ and
  $\lambda(\{t\})=0$, exactly the facts used to show fixed-time agreement but
  not indistinguishability. The uniform example's CDF, moments, and tail
  calculations are not used.
- **Disposition.** Reroute through the A-page theorem; do not add a page edge.
- **Edit.** The owning batch-4 scaffold already replaces
  `ex-uniform-random-variable-on-zero-one` with
  `thm-lebesgue-measure-of-a-box-of-every-kind`. I made no manual plan-item
  transcription: the engine owns that splice.
- **Blocker.** None for Alpha. The plan's stale item object is awaiting the
  normal engine splice.

### `ex-lie-derivative-of-the-euclidean-metric-under-dilations`

- **Edge and evidence.** The plan's B-page item on
  `the-exterior-derivative-and-cartan-calculus-examples` (order 466) still
  depends on
  `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`,
  homed on `morse-critical-points-hessians-and-indices` (A page, order 517).
  That target is outside the citing page's current closure and is forward, so
  adding it as a prerequisite would be an unauthorised reading-order change.
  The retained local A-page dependency
  `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor`
  suffices: for $X=x^k\partial_k$ and constant Euclidean coefficients
  $g_{ij}=\delta_{ij}$, its coordinate formula gives
  $(\mathcal L_Xg)_{ij}=2\delta_{ij}$. No connection, covariant Hessian, or
  later definition of a Riemannian metric is used.
- **Disposition.** Remove the unneeded forward dependency; do not add a page
  edge.
- **Edit.** The owning batch-17 scaffold already retains only
  `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor` for
  this example. I made no manual plan-item transcription.
- **Blocker.** None for Alpha. The plan's stale item object is awaiting the
  normal engine splice.

### Rechecked backward page prerequisite: `logarithmic-space-nl-and-reachability` → `time-and-space-hierarchy-theorems`

- **Evidence and disposition.** This previously adjudicated edge remains a
  genuine backward prerequisite: the citing A page is order 629, the target
  A page is order 627, and the citing scaffold's `def-l-and-nl`,
  `thm-read-only-input-savitch-simulation`, and
  `thm-immerman-szelepcsenyi-nl-equals-conl` use the target's
  `def-read-only-input-workspace-classes`. The current plan and batch-22
  scaffold agree on the direct requirement
  `time-and-space-hierarchy-theorems`; it is in the current closure. No new
  plan edit is needed in this dispatch.
- **Blocker.** None.

## Validation and handoff

I ran `node tools/validate-plan.mjs research/plan-spec.json`. It returns
`FAIL` with exactly two hard errors:

1. the stale plan copy of the batch-4 item still has the prohibited B-page
   dependency; and
2. the stale plan copy of the batch-17 item still has the forward undeclared
   dependency.

The current batch scaffolds contain the two adjudicated removals, while the
plan has not yet been refreshed from them. The engine, not this dispatch, owns
the subsequent splice and rerun. I did not claim the validation gate passed,
change reading order, add a page, write a judge record, or modify any content
outside this task-authorised report.
