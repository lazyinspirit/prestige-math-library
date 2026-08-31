# frontier-26 — Alpha group `a` Step 3 scaffold review

Scope: batches `1` and `5`, covering
`dedekind-domains-and-ideal-classes` and
`average-orders-divisor-sums-and-representation-counts`.

I read each owned batch manifest, coverage file, notes file, the controlling
design section, the current `research/plan-spec.json`, and
`research/frontier-26-alpha-step0-drift.md`. On Monday, August 31, 2026, I
refreshed `research/frontier-26-alpha-a-scope-decisions.json`, resolved its
nine pending rows, repaired the local scaffold defects described below, and ran
the prescribed checks on current bytes.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `dedekind-domains-and-ideal-classes` | 1 | sufficient | The CA-9 route still closes on current disk, the source boundaries remain honest, and every current A-page item now has a coverage carrier. |
| `average-orders-divisor-sums-and-representation-counts` | 5 | sufficient | The NT-10 scaffold now matches the authoritative backward prerequisite, its deferred/out-of-scope rows still stand, and every current A-page item now has a coverage carrier. |

## Direct repairs applied

### Batch 1 — `dedekind-domains-and-ideal-classes`

`research/frontier-26-batch-1.coverage.json` omitted direct carriers for
eleven current A-page items. I added canonical carriers for:

- `lem-local-dvr-condition-implies-global-normality`
- `lem-local-dvr-condition-implies-dimension-one`
- `lem-trace-pairing-for-a-finite-separable-extension`
- `lem-finite-support-of-ideal-valuations`
- `def-ideal-class-group-of-a-domain`
- `lem-ideal-class-group-well-defined`
- `def-divisor-group-of-a-dedekind-domain`
- `lem-rank-one-projective-embedded-as-a-fractional-ideal`
- `thm-invertible-ideals-and-rank-one-projective-modules`
- `thm-ideal-class-group-is-the-picard-group`
- `lem-rank-one-summand-of-a-finite-projective-dedekind-module`

This repair makes the current CA-9 manifest coverage-complete without changing
page scope or reading order.

### Batch 5 — `average-orders-divisor-sums-and-representation-counts`

The Step-0 drift receipt says the live plan already added the backward
prerequisite `sums-of-two-squares`, but
`research/frontier-26-batch-5.pages.json` still omitted it. I repaired the
manifest so its `requires` array now matches the authoritative
`research/plan-spec.json`, and I updated `research/frontier-26-batch-5.notes.md`
to replace the now-false description of that mismatch.

`research/frontier-26-batch-5.coverage.json` also lacked direct carriers for:

- `cor-average-order-of-divisor-sum-function`
- `thm-coprime-pair-counting-asymptotic`
- `cor-asymptotic-density-of-coprime-pairs`

I added canonical carriers for those three current A-page items. The only
remaining checklist warning is the documented `coverage-low-yield` note driven
by overlap and deliberate declines, not by a missing current-scope result.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-26 --group a` produced
nine current decline rows for this group. All nine now resolve as `stands`.

The current bytes support those retained boundaries:

- CA-9 still derives ideal factorization from the local-DVR route and still
  stops short of the full invariant-factor and torsion-module classification.
- NT-10 still defers the `psi`/`pi` and Mertens bridge material to
  `chebyshev-bounds-and-mertens-theorems`.
- NT-10 still keeps generic Landau-notation review, the weaker tau heuristic,
  and the third representation-count example out of scope.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group a`
  Result: `scope-decisions: a: 9 decline(s), 9 pending`.
- `node tools/scope-decisions.mjs check --run frontier-26 --group a`
  Result: `scope-decisions: 9 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-26-batch-1.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-26-batch-5.coverage.json --require-destination`
  Result: `WARN coverage-low-yield [average-orders-divisor-sums-and-representation-counts]: frontier-26-batch-5.coverage.json: average-orders-divisor-sums-and-representation-counts: 16/43 harvested results scaffolded; confirm the declines with Alpha`
  and then `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 1 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-1.pages.json`
  Result: `content-policy: 42 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-5.pages.json`
  Result: `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`.
- Manifest-to-coverage audit over the two owned A pages
  Result: both pages now have zero missing current A-item carriers.
- Batch-5 `requires` alignment audit against `research/plan-spec.json`
  Result: both now require `sums-of-two-squares` and `arithmetic-functions-and-dirichlet-convolution-examples`.
- `git diff --check -- research/frontier-26-batch-1.coverage.json research/frontier-26-batch-5.coverage.json research/frontier-26-batch-5.pages.json research/frontier-26-batch-5.notes.md research/frontier-26-alpha-a-scope-decisions.json`
  Result: clean.
