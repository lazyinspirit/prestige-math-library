# Reader report — batch 30

Run: `statistical-models-experiments-62`  
Role: independent Step 3a reader  
Batch: `30`

## Inventory reviewed

Assigned pages opened:

- A-page: `counting-process-compensators-and-integrals`
- B-page: `counting-process-compensators-and-integrals-examples`

All 14 A-page items opened in supplier-before-consumer order:

- `lem-continuous-finite-variation-martingale-is-zero`
- `lem-bounded-stopping-preserves-cadlag-square-integrable-martingales`
- `def-counting-process-intensity-and-compensator-contract`
- `def-optional-and-predictable-brackets-for-counting-processes`
- `def-elementary-predictable-counting-process-integral`
- `lem-predictable-step-processes-dense-in-compensator-l2`
- `def-l2-counting-process-integral`
- `lem-continuous-predictable-bracket-uniqueness`
- `lem-elementary-counting-integral-preserves-martingales`
- `lem-finite-variation-integration-by-parts-for-counting-process-martingales`
- `thm-compensated-counting-process-brackets`
- `thm-cross-brackets-vanish-under-no-simultaneous-jumps`
- `lem-elementary-counting-process-integral-isometry`
- `thm-l2-counting-process-integral-isometry`

All three B-page examples opened after their suppliers:

- `ex-delayed-entry-predictable-risk-process`
- `ex-tied-jumps-produce-nonzero-cross-bracket`
- `ex-one-event-exponential-compensator-and-isometry`

Published mathematical dependencies opened for the arguments included the
continuous-time filtration, martingale, stopping-time and predictable-process
definitions; conditional expectation and its algebra, taking-out and L²
contraction results; bounded variation and process indistinguishability;
Doob's L² inequality; dominated and monotone convergence; Heine–Borel and
Heine–Cantor; the Lp quotient and completeness results; product measure,
Tonelli, Dynkin's π–λ theorem and simple-function density; and the finite and
random-variable Cauchy–Schwarz inequalities.

Source passages checked:

- [Tian, STAT331 Unit 8](https://web.stanford.edu/~lutian/coursepdf/martingale1.pdf), PDF p. 1 for the Lebesgue–Stieltjes density convention and pp. 13–14 for the one-event exponential compensator.
- [Tian, STAT331 Unit 9](https://web.stanford.edu/~lutian/coursepdf/martingale2.pdf), pp. 4–5 for the counting-process martingale calculation and p. 12 for the continuous-compensator bracket theorem. The notes omit the full bracket proof; the assigned local proof supplies it.
- [Tian, STAT331 Unit 10](https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf), Theorems 12.1, 12.3 and 12.4, for cross brackets, bounded predictable integrals and the integral bracket formula; the notes refer to fuller proofs, which the assigned items give locally.
- [Bass, *SDEs with Jumps*](https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf), §§2.4–2.5, PDF pp. 4–6 for the jump-square convention, product identity and predictable step-integral construction.
- [Andersen–Borgan–Gill–Keiding](https://ir.cwi.nl/pub/5993/5993D.pdf), §2, including PDF pp. 4–5 for the multiplicative-intensity form and predictable at-risk process.
- [Mai Zhou, Notes on Counting Process in Survival Analysis](https://www.ms.uky.edu/~mai/sta709/topic.pdf), PDF p. 6 for the late-entry risk indicator used as supplemental context.

## Repairs and evidence

1. In `def-counting-process-intensity-and-compensator-contract`, the contract
   defined (A_t=\int_0^tY_s\lambda_s\,ds), while the integral and isometry
   items used (dA_s) without specifying its meaning. I added the local
   convention (\int_0^tG_s\,dA_s:=\int_0^tG_sY_s\lambda_s\,ds) for
   nonnegative predictable (G). This matches the density measure used by
   `lem-predictable-step-processes-dense-in-compensator-l2`; Tonelli there
   identifies its total mass with (\mathbb E A_T).

2. In `lem-finite-variation-integration-by-parts-for-counting-process-martingales`,
   proof step 1.1 previously attributed the absolute jump-sum bound directly
   to `def-bounded-variation-and-total-variation`, which defines variation by
   partition sums but does not state that jump bound. I added the finite-jump
   partition argument using left limits, then established countability of
   nonzero jumps and the variation bound for omitted pure-jump tails. This
   supplies the finite-jump truncation used in the squared-increment limit.

The batch proof-contract file was regenerated for the repaired lemma and for
the six entries whose citation quotes include the revised model definition:
`thm-compensated-counting-process-brackets`,
`thm-cross-brackets-vanish-under-no-simultaneous-jumps`,
`lem-elementary-counting-process-integral-isometry`, and the three assigned
examples. Neither edited item had a `verification.judge` record to remove.

## Page verdicts

- **A-page — acceptable after the two item repairs.** Its summaries match the
  finite-horizon model contract, the proved brackets, the bounded-step
  isometry, and the stated finite-energy L² extension. Its limits on general
  compensator existence, local-martingale extensions and path-level limits
  are respected by the items.
- **B-page — acceptable.** The delayed-entry and one-event examples verify the
  exponential model under their displayed assumptions; the tied-jump example
  correctly shows why simultaneous jumps can yield nonzero cross brackets.

No uneditable defects were found.

## Checks and blocker

- Reflow: both changed item paths completed; the final reflow left both
  unchanged.
- Precheck: definition, 0 checked / 0 failing; finite-variation lemma, 1
  checked / 0 failing.
- Strict proof-contract check: 7 affected entries checked, 0 errors and 0
  warnings.
- Final batched proof-layout check: 2 items, 3 steps, 0 defects.

No mathematical blocker remains. At the status check the run was still active
at `3a-read`, with no worker in flight and no reader results yet collected;
this report and its findings JSON are the batch-30 deliverables for collection.
The checkout was already dirty on entry; no files outside this batch's two
items, affected proof-contract entries, and assigned report/findings paths were
edited.
