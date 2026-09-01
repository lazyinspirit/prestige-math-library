# frontier-28 · Alpha group `c` · Step 3 recheck

Group `c` owns batches `4`, `5`, and `6`: MT-16 `the-duality-of-lp-and-lq`,
FA-2 `bounded-linear-operators-and-quotient-spaces`, and NT-11
`chebyshev-bounds-and-mertens-theorems`.

I re-read the current bytes in:

- `research/frontier-28-alpha-c-step3-scaffold-review.md`
- `research/frontier-28-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-28-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-28-batch-6.notes.md` (`## Step-3 fix pass`)
- `research/frontier-28-batch-4.pages.json`
- `research/frontier-28-batch-5.pages.json`
- `research/frontier-28-batch-6.pages.json`
- `research/frontier-28-batch-4.coverage.json`
- `research/frontier-28-batch-5.coverage.json`
- `research/frontier-28-batch-6.coverage.json`
- `research/plan-spec.json`
- `research/plan-measure-theory-track.md`
- `research/plan-functional-analysis-track.md`
- `research/plan-number-theory-track.md`
- `research/plan-complex-analysis-track.md`
- `research/frontier-28-alpha-c-scope-decisions.json`
- `research/frontier-28-alpha-c-step3-verdicts.json`

Checks run against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group c`
  - initial result before resolving the stale Tao row: `scope-decisions: c: 13 decline(s), 1 pending`
- `node tools/scope-decisions.mjs refresh --run frontier-28 --group c`
  - post-resolution result: `scope-decisions: c: 13 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-28 --group c`
  - result: `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-4.pages.json research/frontier-28-batch-5.pages.json research/frontier-28-batch-6.pages.json`
  - result: `content-policy: 80 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-4.coverage.json research/frontier-28-batch-5.coverage.json research/frontier-28-batch-6.coverage.json`
  - result: `coverage-checklist: 3 page(s), 114 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the repository's standing out-of-group `redundant-prereq` advisories

## Dispositions

1. `chebyshev-bounds-and-mertens-theorems` / `C6-1`: **closed**.
   The batch-6 `Step-3 fix pass` is accurate on the current bytes. The Tao
   Proposition 2 coverage row now defers to
   `the-riemann-zeta-function` at
   `research/frontier-28-batch-6.coverage.json:210-213`, exactly as claimed in
   `research/frontier-28-batch-6.notes.md:112-132`. That destination now agrees
   with the live plan: NT-12 explicitly needs only the initial zeta definition
   and Euler product, and says analytic continuation is not needed there at
   `research/plan-number-theory-track.md:1147-1153`, while CA-22 owns the
   meromorphic continuation and residue-one pole at `s = 1` at
   `research/plan-complex-analysis-track.md:2984-2986`. No scaffold blocker
   remains on NT-11.

2. `the-duality-of-lp-and-lq` / finding `none issued`: **closed**.
   The batch-4 pushback is accurate on the current bytes. Group `c` still
   issued no batch-4 finding in
   `research/frontier-28-alpha-c-step3-scaffold-review.md`, the current MT-16
   scaffold still preserves the intended endpoint discipline and separate
   finite-measure and arbitrary-measure carriers at
   `research/frontier-28-batch-4.notes.md:123-149`, and the B page still uses
   the MT-2 countable/cocountable witness plus the citation-only
   `p = infinity` boundary rather than importing Folland's extra `L^1`
   exception paragraph at `research/frontier-28-batch-4.pages.json:239-258` and
   `research/frontier-28-batch-4.coverage.json:70-78`. The pair remains
   sufficient on the current bytes.

3. `bounded-linear-operators-and-quotient-spaces` / finding `none issued`: **closed**.
   The batch-5 pushback is accurate on the current bytes. Group `c` still
   issued no batch-5 finding in
   `research/frontier-28-alpha-c-step3-scaffold-review.md`, and the live FA-2
   scaffold still matches the plan's local repair boundaries: item `23` remains
   in the Banach-to-Banach form and keeps the converse dependency-closed at
   `research/frontier-28-batch-5.notes.md:55-92`; quotient arguments still use
   the epsilon-minimizer route at `research/frontier-28-batch-5.notes.md:94-103`;
   and the notes still say FA-2 does not mint standalone open-mapping or
   bounded-inverse theorems at `research/frontier-28-batch-5.notes.md:198-206`.
   The corresponding deferred coverage rows remain aligned with the live FA-5,
   FA-6, and FA-17 destinations at
   `research/frontier-28-batch-5.coverage.json:116-119`,
   `research/frontier-28-batch-5.coverage.json:152-155`, and
   `research/frontier-28-batch-5.coverage.json:223-279`. No scaffold blocker
   remains on FA-2.

4. Group `c` scope decisions: **closed**.
   The refresh exposed one stale row: Tao's Proposition 2 still carried the old
   decision bytes even though the batch-6 coverage had already been repaired.
   I resolved that refreshed row from the current coverage and plan evidence, so
   `research/frontier-28-alpha-c-scope-decisions.json` is current again. After
   that repair, all `13` current decline rows are resolved as `stands`; no
   pending or owner-decision row remains for group `c`.

## Outcome

All three owned A pages remain sufficient on the current 2026-09-01 bytes:

- `the-duality-of-lp-and-lq`
- `bounded-linear-operators-and-quotient-spaces`
- `chebyshev-bounds-and-mertens-theorems`

`research/frontier-28-alpha-c-step3-verdicts.json` already matched that
verified state, so no verdict-byte change was required in this recheck pass.
