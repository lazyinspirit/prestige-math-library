# frontier-29 · Alpha group `f` · Step 3 recheck

Group `f` owns batches `8`, `9`, and `15` in
`research/frontier-29-alpha-groups.json`: NT-17
`absolute-values-completions-and-p-adic-numbers`, NT-12
`dirichlet-series-and-euler-products`, CA-22 `the-riemann-zeta-function`, and
page `427` `generalized-niceness-and-reduction-outcomes`.

I re-read the governing task files on Wednesday, September 2, 2026, then
verified the current bytes in:

- `research/frontier-29-alpha-f-step3-scaffold-review.md`
- `research/frontier-29-batch-8.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-9.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-15.notes.md` (`## Step-3 fix pass`)
- `research/frontier-29-batch-8.pages.json`
- `research/frontier-29-batch-9.pages.json`
- `research/frontier-29-batch-15.pages.json`
- `research/frontier-29-batch-8.coverage.json`
- `research/frontier-29-batch-9.coverage.json`
- `research/frontier-29-batch-15.coverage.json`
- `research/plan-spec.json`
- `research/plan-number-theory-track.md`
- `research/plan-complex-analysis-track.md`
- `research/plan-combinatorics-and-categories.md`
- `research/frontier-29-alpha-f-scope-decisions.json`
- `research/frontier-29-alpha-f-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group f`
  - result: `scope-decisions: f: 7 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-29 --group f`
  - result: `scope-decisions: 7 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-8.coverage.json research/frontier-29-batch-9.coverage.json research/frontier-29-batch-15.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 132 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-8.pages.json research/frontier-29-batch-9.pages.json research/frontier-29-batch-15.pages.json`
  - result: `content-policy: 99 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-8.coverage.json`
  - result: `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-9.coverage.json`
  - result: `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-15.coverage.json`
  - result: `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK` and reports only the standing repository-wide
    `redundant-prereq` advisories
- `node tools/validate-plan.mjs /tmp/frontier-29-alpha-f-spliced-plan.json`
  - result: pass; ends `OK` and reports only the standing repository-wide
    `redundant-prereq` advisories

No newly pending scope row appeared after refresh, so no further
scope-decision resolution was required in this pass.

## Dispositions

1. `absolute-values-completions-and-p-adic-numbers` / finding `F8-1`: **closed**.
   The batch-8 repair still stands on current bytes. `research/frontier-29-batch-8.notes.md:69-74`
   and `:267-275` now say the exact `Z_p` supplier inventory already exists on
   disk while the live plan still exposes only page-level placeholders. That
   matches the current files: `research/frontier-29-batch-2.pages.json` now
   carries `def-p-adic-integers-as-compatible-residue-classes`,
   `thm-inverse-limit-topology-equals-the-p-adic-metric-topology`,
   `thm-zp-is-compact-hausdorff-totally-disconnected-and-complete`, and
   `thm-the-integers-map-injectively-and-densely-into-zp`, while the live
   `research/plan-spec.json` entry for `pro-p-groups-and-the-p-adic-integers`
   still has `items: []`. The current NT-17 plan entry still names only
   `regular-local-rings-and-homological-dimension-examples` and
   `pro-p-groups-and-the-p-adic-integers` as page-level prerequisites, so the
   repaired note is now the honest current-byte statement and no further
   manifest or coverage repair is owed.

2. `dirichlet-series-and-euler-products` / deferred `Corollary 3.8`: **closed**.
   The current pushback still stands. NT-12 still says the page needs only the
   initial zeta definition and Euler product, and that zeta continuation is not
   needed there: `research/plan-number-theory-track.md:1147-1153`. The batch-8
   notes still record the resulting deferment at
   `research/frontier-29-batch-8.notes.md:247-249`, and the current coverage row
   at `research/frontier-29-batch-8.coverage.json:357-360` still sends Tomczak
   `Corollary 3.8` to `the-riemann-zeta-function`. The exact supplier ids also
   now exist in `research/frontier-29-batch-9.pages.json`, while the live plan
   still exposes only the page-level zeta prerequisite, so the current scaffold
   remains accurate and source-backed without a local NT-12 repair.

3. `the-riemann-zeta-function` / review verdict `applied as no-op`: **closed**.
   The current CA-22 scaffold still matches the reviewed carrier. The batch-9
   notes at `research/frontier-29-batch-9.notes.md:45-55` and `:170-178`
   still record the live theta-route seam honestly: the preferred FA-23/FA-25
   supplier pages remain present in `research/plan-spec.json` but still have
   `items: []`, so the local carrier `thm-jacobi-theta-transformation` remains
   necessary. The notes also still record the deliberate Stein-plus-Chandrasekharan
   source stack in place of the design's Stein-plus-Romik pairing. The current
   batch-9 manifest and coverage therefore still support the Step-3 no-op
   disposition with no new edit owed.

4. `the-riemann-zeta-function` / deferred `Proposition 2.7`: **closed**.
   The current pushback still stands. CA-22 still ends with continuation,
   functional equations, the zero-free line, the critical strip, xi, Hadamard
   product, and special values, not the later quantitative boundary-growth
   package: `research/plan-complex-analysis-track.md:2924-2931`. The current
   coverage row at `research/frontier-29-batch-9.coverage.json:126-129` still
   defers Stein-Shakarchi `Proposition 2.7` to
   `classical-zero-free-region-and-the-prime-number-theorem`, and that exact
   later page still exists in `research/plan-spec.json`. No local CA-22 repair
   is licensed or needed.

5. `the-riemann-zeta-function` / deferred `Theorem 4(v), the partial-fraction formula for zeta'/zeta`: **closed**.
   The current pushback still stands. The current coverage row at
   `research/frontier-29-batch-9.coverage.json:213-216` still defers this
   Chandrasekharan result to
   `classical-zero-free-region-and-the-prime-number-theorem`, and the batch-9
   notes at `research/frontier-29-batch-9.notes.md:170-178` still separate the
   CA-22 endpoint from later prime-number-theorem machinery. That matches the
   current design boundary in `research/plan-complex-analysis-track.md:2924-2931`,
   so the deferment remains correct on current bytes.

6. `the-riemann-zeta-function` / Riemann-hypothesis seam `owner-decision`: **closed**.
   The current pushback still stands as an owner-level scope question. The CA-22
   design still requires the Riemann hypothesis to live as a `proved_here: false`
   remark on `open-problems-and-research-frontier`, mentioned from CA-22 via
   `external_refs`: `research/plan-complex-analysis-track.md:2928-2930`.
   The current canonical coverage row at
   `research/frontier-29-batch-9.coverage.json:57-60` still defers there, the
   batch-9 notes still say no published RH item exists on disk at
   `research/frontier-29-batch-9.notes.md:176-178`, and the published destination
   page still lists no RH remark in
   `library/not-proved-here/open-problems-and-research-frontier.md:5-13`.
   Adding that item would modify published out-of-scope content, so the
   `owner-decision` disposition remains correct.

7. `generalized-niceness-and-reduction-outcomes` / finding `none issued`: **closed**.
   The no-op fix pass is accurate on current bytes. The controlling design still
   fixes page `427/428` to generalized niceness and source Lemmas `3.1-3.3`,
   decomposed by outcome and scale:
   `research/plan-combinatorics-and-categories.md:3913-3914,3957-3959`. The
   batch-15 notes at `research/frontier-29-batch-15.notes.md:70-87` and
   `:108-127` still record the three local bridge items that make the page
   self-contained, and the live manifest still contains those bridge carriers.
   The current bounded-VC exclusions in
   `research/frontier-29-batch-15.coverage.json:171-188` therefore remain honest
   out-of-scope context rather than missing local prerequisites.

8. Group `f` scope decisions: **closed**.
   After refresh and check, `research/frontier-29-alpha-f-scope-decisions.json`
   is current with `7` decline rows, `0` pending rows, and `0` errors. The six
   `stands` rows still match the current design and coverage boundaries for
   Tomczak `Corollary 3.8`, Stein-Shakarchi `Proposition 2.7`, Chandrasekharan
   `Theorem 4(v)`, and Nguyen `Theorem 5.1`, `Theorem 5.2`, and `Lemma 5.4`.
   The single `owner-decision` row is still the published-content Riemann-hypothesis
   seam. No newly pending row appeared on the current bytes.

## Outcome

All four owned A pages remain sufficient on the current bytes:

- `absolute-values-completions-and-p-adic-numbers` -> `sufficient`
- `dirichlet-series-and-euler-products` -> `sufficient`
- `the-riemann-zeta-function` -> `sufficient`
- `generalized-niceness-and-reduction-outcomes` -> `sufficient`

`research/frontier-29-alpha-f-step3-verdicts.json` already matches that
verified all-`sufficient` state, so no verdict-byte change was required in this
recheck pass.
