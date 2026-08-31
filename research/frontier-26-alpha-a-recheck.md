# frontier-26 · Alpha group `a` · Step 3 recheck

Group `a` owns batches `1` and `5` in
`research/frontier-26-alpha-groups.json`: CA-9
`dedekind-domains-and-ideal-classes` and NT-10
`average-orders-divisor-sums-and-representation-counts`.

I re-read the governing task files on Sunday, August 30, 2026, then verified
the current bytes in:

- `research/frontier-26-alpha-a-step3-scaffold-review.md`
- `research/frontier-26-batch-1.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-1.pages.json`
- `research/frontier-26-batch-5.pages.json`
- `research/frontier-26-batch-1.coverage.json`
- `research/frontier-26-batch-5.coverage.json`
- `research/plan-spec.json`
- `research/plan-commutative-algebra-track.md`
- `research/plan-number-theory-track.md`
- `research/frontier-26-alpha-a-scope-decisions.json`
- `research/frontier-26-alpha-a-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group a`
  - result: `scope-decisions: a: 9 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-26 --group a`
  - result: `scope-decisions: 9 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-26-batch-1.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs research/frontier-26-batch-5.coverage.json --require-destination`
  - result: `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 1 warning(s)`
  - warning: `WARN coverage-low-yield [average-orders-divisor-sums-and-representation-counts]: frontier-26-batch-5.coverage.json: average-orders-divisor-sums-and-representation-counts: 16/43 harvested results scaffolded; confirm the declines with Alpha`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-1.pages.json research/frontier-26-batch-5.pages.json`
  - result: `content-policy: 61 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-1.coverage.json`
  - result: `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-5.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories
- exact manifest-to-coverage audit over the two owned A-page manifests
  - result: batch `1` has `33/33` A-page items carrier-covered; batch `5` has `17/17` A-page items carrier-covered

No newly pending scope row appeared after refresh, so no further
scope-decision resolution was required.

## Dispositions

1. Batch `1` coverage repair for the eleven omitted CA-9 carriers: **closed**.
   The accepted repair still stands on current disk. The live CA-9 manifest
   still declares all eleven items Alpha named in the scaffold review:
   `lem-local-dvr-condition-implies-global-normality`,
   `lem-local-dvr-condition-implies-dimension-one`,
   `lem-trace-pairing-for-a-finite-separable-extension`,
   `lem-finite-support-of-ideal-valuations`,
   `def-ideal-class-group-of-a-domain`,
   `lem-ideal-class-group-well-defined`,
   `def-divisor-group-of-a-dedekind-domain`,
   `lem-rank-one-projective-embedded-as-a-fractional-ideal`,
   `thm-invertible-ideals-and-rank-one-projective-modules`,
   `thm-ideal-class-group-is-the-picard-group`, and
   `lem-rank-one-summand-of-a-finite-projective-dedekind-module`. The current
   `research/frontier-26-batch-1.coverage.json` canonical block still carries
   exact carrier rows for each of those ids, the full current A-page manifest is
   carrier-covered `33/33`, and `coverage-checklist` passes with `0` errors and
   `0` warnings. The current CA-9 design block in
   `research/plan-commutative-algebra-track.md` still matches that route, so no
   further manifest or coverage repair is owed.

2. Batch `5` backward-prerequisite repair for `sums-of-two-squares`: **closed**.
   The accepted repair still stands on current disk. The live NT-10 manifest in
   `research/frontier-26-batch-5.pages.json` still lists both
   `sums-of-two-squares` and
   `arithmetic-functions-and-dirichlet-convolution-examples` in `requires`, and
   the current `research/plan-spec.json` entry for
   `average-orders-divisor-sums-and-representation-counts` matches that same
   prerequisite pair. The controlling NT-10 design block in
   `research/plan-number-theory-track.md` still scopes the page through the
   divisor, totient, coprime-pair, and two-square average-order lane rather
   than any wider analytic-number-theory branch. No further plan or manifest
   repair is owed.

3. Batch `5` coverage repair for the three omitted NT-10 carriers: **closed**.
   The accepted repair still stands on current disk. The live NT-10 manifest
   still declares `cor-average-order-of-divisor-sum-function`,
   `thm-coprime-pair-counting-asymptotic`, and
   `cor-asymptotic-density-of-coprime-pairs`, and the current
   `research/frontier-26-batch-5.coverage.json` canonical block still carries
   exact carrier rows for all three ids. The exact manifest-to-coverage audit on
   current bytes reports `17/17` A-page items carrier-covered for NT-10, while
   `coverage-checklist` passes structurally with only the standing
   `coverage-low-yield` warning that Alpha already tied to deliberate declines
   rather than to a missing in-scope carrier. The current NT-10 design block in
   `research/plan-number-theory-track.md` still names those three A-page items,
   so no further coverage repair is owed.

4. Group `a` scope decisions: **closed**.
   After refresh and check, `research/frontier-26-alpha-a-scope-decisions.json`
   still carries `9` current decline rows and `0` pending rows, all resolved as
   `stands`. That matches the current bytes: CA-9 still stops before the full
   invariant-factor/torsion-module classification, and NT-10 still defers the
   `psi`/`pi` and Mertens bridge material while leaving the weaker tau heuristic,
   generic Landau-notation restatement, and extra representation-count example
   out of scope.

## Outcome

Both owned A pages remain sufficient on the current bytes, and the current
`research/frontier-26-alpha-a-step3-verdicts.json` already matches that
verified state:

- `dedekind-domains-and-ideal-classes` -> `sufficient`
- `average-orders-divisor-sums-and-representation-counts` -> `sufficient`

No verdict-byte change was required in this recheck pass.
