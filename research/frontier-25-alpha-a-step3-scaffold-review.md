# frontier-25 — Alpha group `a` Step 3 scaffold review

Scope: batches `1`, `4`, and `5`, covering `valuation-rings-and-discrete-valuation-rings`,
`simply-connected-plane-domains`, `the-riemann-zeta-function`, and
`arithmetic-functions-and-dirichlet-convolution`.

I read each owned batch manifest, coverage file, notes file, the controlling
design section, the current `research/plan-spec.json`, and the run-level drift
receipt. I refreshed `research/frontier-25-alpha-a-scope-decisions.json`,
resolved its fourteen pending rows, and then checked the resulting file.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `valuation-rings-and-discrete-valuation-rings` | 1 | sufficient | The CA-8 route still closes on current disk, every A-page item is represented in coverage, and the deferred Dedekind-domain rows remain honest CA-9 material. |
| `simply-connected-plane-domains` | 4 | sufficient | After repairing the missing coverage carriers for the bridge lemmas and remarks, the CA-17 route, source stack, and scope boundaries are sufficient for authoring. |
| `the-riemann-zeta-function` | 4 | insufficient | The theta/Mellin route still lacks the mandatory Poisson-summation supplier named by the design and by the Step-0 drift receipt, so the current scaffold is not author-ready on current bytes. |
| `arithmetic-functions-and-dirichlet-convolution` | 5 | sufficient | After restoring the missing coverage carrier for the Liouville square-indicator proposition, the NT-9 route, source stack, and deferred NT-10 tails are sufficient for authoring. |

## Direct repairs applied

### Batch 4 — `simply-connected-plane-domains` and `the-riemann-zeta-function`

`research/frontier-25-batch-4.coverage.json` was under-harvested against its
own A-page manifest. I added canonical carriers for the missing current-scope
items:

- `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`
- `lem-null-homology-implies-connected-spherical-complement`
- `thm-null-homology-is-equivalent-to-global-harmonic-conjugates`
- `lem-null-homology-gives-the-plane-or-disc-alternative`
- `lem-the-plane-or-disc-alternative-gives-contractibility`
- `lem-contractibility-implies-trivial-fundamental-group`
- `rem-choice-strength-of-the-grand-equivalence`
- `rem-agreement-with-the-existing-infinitude-of-primes`
- `def-jacobi-theta-function`
- `def-completed-riemann-zeta-function`
- `def-riemann-xi-function`
- `def-bernoulli-numbers-by-their-generating-function`

This fixes the coverage completeness problem, but it does not cure the separate
zeta route defect described below.

### Batch 5 — `arithmetic-functions-and-dirichlet-convolution`

`research/frontier-25-batch-5.coverage.json` omitted the current A-page
proposition `prop-liouville-convolution-square-indicator`. I added a canonical
carrier for that exact item. After the edit, every A-page item in the batch is
represented in coverage.

## Blocking finding

### B4-1 — `the-riemann-zeta-function` still lacks its mandatory theta supplier

The current batch-4 manifest keeps `the-riemann-zeta-function` in scope with
page prerequisites only
`the-gamma-function`, `mittag-leffler-and-runges-theorem`, and
`primes-and-the-fundamental-theorem-of-arithmetic`.

That does not match the controlling CA-22 route on current disk:

- `research/frontier-25-alpha-step0-drift.md` says, on Sunday, August 30,
  2026, that CA-22 is `drift-rescoped` because its theta/Mellin functional
  equation needs FA-23 and FA-25.
- `research/plan-complex-analysis-track.md:2955-2957` says the preferred
  functional-equation proof "closes by citing the functional-analysis Poisson
  summation interface (FA-23's Gaussian transform plus FA-25's
  Fourier-invariant Dirac comb); it may not be dropped."
- The current scaffolded item
  `thm-jacobi-theta-transformation` in
  `research/frontier-25-batch-4.pages.json` depends only on
  `def-jacobi-theta-function` and `thm-gaussian-integral`.
- On current disk there is no authored supplier page for either
  `schwartz-space-and-the-plancherel-theorem` or
  `tempered-distributions-and-the-fourier-transform`, and the current
  `research/plan-spec.json` entries for those A pages are empty placeholders at
  orders `288.091` and `288.095`.

So the zeta page is not just missing a coverage row. Its intended proof route
still names a result that the current closure does not supply, and the Step-0
drift receipt already records that the proper repair is a scope/routing change
rather than a silent local proof substitution.

Exact missing result and source:

- the FA-23/FA-25 Poisson-summation interface needed to justify
  `thm-jacobi-theta-transformation`:
  `research/frontier-25-alpha-step0-drift.md` and
  `research/plan-complex-analysis-track.md:2955-2957` name FA-23's Gaussian
  transform plus FA-25's Fourier-invariant Dirac comb.

Because adding those pages or rescoping the batch is not Step-3 local repair
authority, `the-riemann-zeta-function` remains **insufficient** on current
bytes.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-25 --group a` produced
fourteen current decline rows for this group. All fourteen now resolve as
`stands` with current evidence.

The current bytes support the recorded boundaries:

- CA-8 still defers Dedekind-domain definition/localization material to
  `dedekind-domains-and-ideal-classes` and keeps the global
  intersection-of-height-one-localizations theorem out of scope.
- CA-17 still uses the annulus only as a simple-connectivity failure witness,
  not as a finitely connected period-theory page.
- NT-9 still stops before `omega(n)`, hyperbola estimates, harmonic-sum
  asymptotics, and prime-distribution tails, which remain honest NT-10
  deferrals or out-of-scope enrichments.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-25 --group a`
  Result: `scope-decisions: a: 14 decline(s), 14 pending`.
- `node tools/scope-decisions.mjs check --run frontier-25 --group a`
  Result: `scope-decisions: 14 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-1.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-4.coverage.json --require-destination`
  Result: `coverage-checklist: 2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-5.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)`.
- Manifest-to-coverage alignment audit over the four owned A pages
  Result: every current A-page item is now represented in its coverage record.
- `git diff --check -- research/frontier-25-batch-4.coverage.json research/frontier-25-batch-5.coverage.json research/frontier-25-alpha-a-scope-decisions.json`
  Result: clean.
