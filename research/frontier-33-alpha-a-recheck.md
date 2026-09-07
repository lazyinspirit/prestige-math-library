# frontier-33 · Alpha group `a` · Step 3 recheck

Rechecked the current batch-1, batch-3, and batch-4 manifests and coverage
ledgers, their `## Step-3 fix pass` notes, and the current
`research/plan-spec.json`. The dispositions below are based on current bytes.

## Dispositions

1. **Batch 1 — no reported batch-local scaffold finding: closed.** The
   manifest remains a 31-item A page plus a 15-item companion, at plan orders
   `288.041` and `288.042`, respectively. Its A page retains the backward
   prerequisite `radon-measures-and-the-riesz-markov-kakutani-theorem-examples`
   and the B page retains its A companion. All 46 planned items have explicit
   dependency arrays. The batch-1 note correctly reports that no claim,
   dependency, source, convention, or scaffold repair was requested or made.

2. **Batch 3 — full-text-stamp wording correction: applied and closed.** The
   four current `read_verified.status` records say that the full-text fetch
   stamp is recorded below; the old phrase occurs only as a historical quote
   explaining the correction, not as a current status. The corresponding fetch
   records validate 4/4, while the 27-item A page
   and 9-item companion retain their plan orders `288.105` and `288.106`,
   their A-to-B prerequisite, and explicit dependency arrays for all 36
   planned items. This is a ledger-wording correction only: it changes no
   source route, statement, dependency, or page order.

3. **Batch 4 — countable-choice hypothesis: applied and closed.** Current
   item `rem-the-lone-endpoint-is-excluded-from-carleson-hunt` begins
   “Assume countable choice.” It retains the dependencies
   `lem-fourier-maximal-weak-bound-closes-almost-everywhere-convergence` and
   `thm-chebyshev-markov-inequality-for-the-integral`; the cited local maximal
   lemma itself also assumes countable choice. Thus the endpoint interpretation
   no longer uses the countable-null-union closure step without its stated
   hypothesis. The 10-item A page and 4-item companion remain at orders
   `288.14018` and `288.1402`, with their original A-to-B prerequisite and
   explicit dependency arrays. No id, source, external-reference record, or
   plan edge changed.

## Scope decisions

The required refresh exposed 18 previously pending current rows, rather than
the stale zero-pending count in the prior receipt. I rechecked every row at
its recorded coverage locator against the current manifests and plan: the 14
out-of-scope rows are separate alternate proofs, higher-dimensional or
regularity branches, or unused applications; the four deferred rows have the
later planned destinations `strong-laws-of-large-numbers` (order `288.107`)
or `characteristic-functions-inversion-and-continuity` (order `288.111`).
Their row-specific evidence is now in
`research/frontier-33-alpha-a-scope-decisions.json`. A subsequent `check`
reports 35 current declines and 0 errors; all 35 decisions are `stands`.
The Batch-4 coverage ledger still emits its reviewed 14/40 low-yield warning;
it does not identify a missing ingredient for the fixed scaffold route.

## Pair verdicts

- `hausdorff-measure-and-hausdorff-dimension`: **sufficient**.
- `weak-laws-and-series-of-independent-random-variables`: **sufficient**.
- `divergence-and-almost-everywhere-convergence-of-fourier-series`:
  **sufficient**.

## Current-byte checks

- `source-fetch-check --coverage`: 4/4 (batch 1), 4/4 (batch 3), and 3/3
  (batch 4) fetch-verified.
- `coverage-checklist --require-destination`: 79, 94, and 40 harvested
  results, respectively; batches 1 and 3 have no warnings, and batch 4 has
  only the reviewed low-yield warning.
- `manifest-deps`: 46, 36, and 14 items, respectively; 0 errors for each.
- `content-policy --manifest-only` over the three manifests: 96 scoped items,
  0 errors, 0 warnings.
- `splice-plan --dry-run` finds each assigned pair already correct: two pages,
  zero unresolved or withheld items for each of batches 1, 3, and 4.
- `validate-plan research/plan-spec.json` reports two unrelated
  undeclared-prerequisite errors on
  `dimension-constructible-images-and-dimensions-of-fibres` for
  `zariski-topology-on-prime-spectra` and
  `schemes-subschemes-and-morphisms-locally-of-finite-type`. Neither page nor
  item belongs to group `a`; this report records the diagnostic rather than
  altering another group's plan. The assigned pages retain their verified plan
  orders, prerequisite directions, and manifest/coverage closure.

## Closure

All three assigned pairs are sufficient and have no open group-`a` scaffold
obligation. The next action is the engine-owned Step-3 closure/transition; the
non-owned plan diagnostic remains recorded above for its owning route.
