# frontier-25 · Alpha group `a` · Step 3 recheck

Group `a` owns batches `1`, `4`, and `5` in
`research/frontier-25-alpha-groups.json`: the four A pages
`valuation-rings-and-discrete-valuation-rings`,
`simply-connected-plane-domains`, `the-riemann-zeta-function`, and
`arithmetic-functions-and-dirichlet-convolution`.

On Sunday, August 30, 2026, I re-read the Step-3 task inputs and verified the
current bytes in:

- `research/frontier-25-alpha-a-step3-scaffold-review.md`
- `research/frontier-25-batch-1.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-5.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-1.pages.json`
- `research/frontier-25-batch-4.pages.json`
- `research/frontier-25-batch-5.pages.json`
- `research/frontier-25-batch-1.coverage.json`
- `research/frontier-25-batch-4.coverage.json`
- `research/frontier-25-batch-5.coverage.json`
- `research/plan-spec.json`
- `research/frontier-25-alpha-step0-drift.md`
- `research/plan-commutative-algebra-track.md`
- `research/plan-complex-analysis-track.md`
- `research/plan-number-theory-track.md`
- `research/frontier-25-alpha-a-scope-decisions.json`
- `research/frontier-25-alpha-a-step3-verdicts.json`
- `research/frontier-25-scaffold-closure.json`

## Scope ledger

`node tools/scope-decisions.mjs refresh --run frontier-25 --group a` now
returns `scope-decisions: a: 14 decline(s), 0 pending`.

No newly pending scope row appears on the current bytes, so no further
scope-decision resolution was required. `node tools/scope-decisions.mjs check
--run frontier-25 --group a` then passes with
`scope-decisions: 14 current decline(s), 0 error(s)`.

## Dispositions

1. `valuation-rings-and-discrete-valuation-rings`: **closed**.
   The stable Alpha review issued no numbered batch-`1` finding, and the
   current batch-`1` notes still record that accurately at
   `research/frontier-25-batch-1.notes.md:208-245`. The current manifest and
   coverage still close honestly: a direct item-to-coverage audit finds no
   missing A-page item id, `node tools/source-fetch-check.mjs --coverage
   research/frontier-25-batch-1.coverage.json` still returns
   `source-fetch-check: 2/2 source(s) fetch-verified`, and the CA-8/CA-9
   boundary in `research/plan-commutative-algebra-track.md:748-818` still
   supports deferring the Dedekind-domain rows to
   `dedekind-domains-and-ideal-classes`. The verdict `sufficient` remains
   correct.

2. `simply-connected-plane-domains`: **closed**.
   The accepted batch-`4` coverage repair is still present on current bytes and
   is recorded in `research/frontier-25-batch-4.notes.md:203-227`. The current
   `research/frontier-25-batch-4.coverage.json` still carries the seven CA-17
   bridge carriers at lines `24-54`:
   `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`,
   `lem-null-homology-implies-connected-spherical-complement`,
   `thm-null-homology-is-equivalent-to-global-harmonic-conjugates`,
   `lem-null-homology-gives-the-plane-or-disc-alternative`,
   `lem-the-plane-or-disc-alternative-gives-contractibility`,
   `lem-contractibility-implies-trivial-fundamental-group`, and
   `rem-choice-strength-of-the-grand-equivalence`. The current CA-17 design
   boundary still treats the annulus only as a B-page failure witness, so the
   review verdict `sufficient` remains correct for this page.

3. `B4-1` / `the-riemann-zeta-function`: **open; insufficiency confirmed**.
   The batch-`4` fix-pass pushback remains correct on the current bytes; see
   `research/frontier-25-batch-4.notes.md:229-323`. The live design still
   requires the missing Poisson-summation supplier:
   `research/frontier-25-alpha-step0-drift.md:17-19` still marks CA-22 as
   `drift-rescoped`, and
   `research/plan-complex-analysis-track.md:2955-2957` still says the
   theta/Mellin functional-equation proof must cite FA-23's Gaussian transform
   plus FA-25's Fourier-invariant Dirac comb and that this route may not be
   dropped. The current scaffold still does not supply that interface:
   `research/frontier-25-batch-4.pages.json:395-401` gives
   `thm-jacobi-theta-transformation` only
   `def-jacobi-theta-function` and `thm-gaussian-integral`, while
   `research/plan-spec.json:90870-90879` and `90918-90927` still show
   `schwartz-space-and-the-plancherel-theorem` and
   `tempered-distributions-and-the-fourier-transform` with `items: []`, and
   `research/plan-spec.json:105321-105331` still leaves
   `the-riemann-zeta-function` with only the three page prerequisites
   `the-gamma-function`, `mittag-leffler-and-runges-theorem`, and
   `primes-and-the-fundamental-theorem-of-arithmetic`.

   The earlier batch-`4` coverage under-harvest is closed, not live: the
   current coverage file also still carries the five CA-22 carrier repairs at
   `research/frontier-25-batch-4.coverage.json:266-286`. The shared closure
   artifact agrees with this state: `research/frontier-25-scaffold-closure.json:18-23`
   still records `the-riemann-zeta-function` with the same missing
   FA-23/FA-25 interface. The page therefore remains `insufficient` for one
   reason only: the missing Poisson-summation interface for
   `thm-jacobi-theta-transformation`.

4. `arithmetic-functions-and-dirichlet-convolution`: **closed**.
   The batch-`5` fix-pass notes still support the current scaffold state at
   `research/frontier-25-batch-5.notes.md:272-338`. The original coverage
   repair remains present: the current coverage file carries
   `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` and
   `prop-liouville-convolution-square-indicator` at
   `research/frontier-25-batch-5.coverage.json:19-24`. The additional closure
   repair from the fix pass also remains present: the current manifest at
   `research/frontier-25-batch-5.pages.json:9-12` includes
   `finite-fields-and-cyclotomic-extensions` in the page `requires` array, and
   the load-bearing corollary at `research/frontier-25-batch-5.pages.json:187-194`
   still depends on
   `prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field`,
   whose home remains the published page
   `finite-fields-and-cyclotomic-extensions` in
   `research/plan-spec.json:27851-27984`. The page remains `sufficient`.

## Checks on current bytes

- `node tools/scope-decisions.mjs refresh --run frontier-25 --group a`
  - result: `scope-decisions: a: 14 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-25 --group a`
  - result: `scope-decisions: 14 current decline(s), 0 error(s)`
- direct A-page item-to-coverage audit over batches `1`, `4`, and `5`
  - result: no missing A-page item ids for
    `valuation-rings-and-discrete-valuation-rings`,
    `simply-connected-plane-domains`,
    `the-riemann-zeta-function`, or
    `arithmetic-functions-and-dirichlet-convolution`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-1.coverage.json research/frontier-25-batch-4.coverage.json research/frontier-25-batch-5.coverage.json --require-destination`
  - result: `coverage-checklist: 4 page(s), 161 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-1.pages.json research/frontier-25-batch-4.pages.json research/frontier-25-batch-5.pages.json`
  - result: `content-policy: 116 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-1.coverage.json`
  - result: `source-fetch-check: 2/2 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-4.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-5.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- temporary splice of batches `1`, `4`, and `5` into `research/plan-spec.json`
  - artifact: `/private/tmp/frontier-25-alpha-a-spliced-plan.json`
- `node tools/validate-plan.mjs /private/tmp/frontier-25-alpha-a-spliced-plan.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...`
    and reports only the standing repository-wide `redundant-prereq`
    advisories
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-a-spliced-plan.json --page valuation-rings-and-discrete-valuation-rings`
  - result: `17` external deps, all `published`; `0` unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-a-spliced-plan.json --page simply-connected-plane-domains`
  - result: `0` external deps; `0` unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-a-spliced-plan.json --page the-riemann-zeta-function`
  - result: `0` external deps; `0` unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-a-spliced-plan.json --page arithmetic-functions-and-dirichlet-convolution`
  - result: `33` external deps, all `published`; `0` unresolved
- `node -e 'JSON.parse(require("fs").readFileSync("research/frontier-25-alpha-a-step3-verdicts.json","utf8")); console.log("json-parse: ok");'`
  - result: `json-parse: ok`

## Verdicts

The current bytes support `research/frontier-25-alpha-a-step3-verdicts.json`
unchanged:

- `valuation-rings-and-discrete-valuation-rings` — `sufficient`
- `simply-connected-plane-domains` — `sufficient`
- `the-riemann-zeta-function` — `insufficient`
- `arithmetic-functions-and-dirichlet-convolution` — `sufficient`

The one live missing result remains:

- the FA-23/FA-25 Poisson-summation interface for
  `thm-jacobi-theta-transformation`, as named by
  `research/frontier-25-alpha-step0-drift.md:17-19` and
  `research/plan-complex-analysis-track.md:2955-2957`
