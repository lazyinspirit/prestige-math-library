# frontier-28 · Beta · batch 6 scaffold notes — `chebyshev-bounds-and-mertens-theorems`

Run `frontier-28`, batch `6`, one A/B pair, category `number-theory`.

Artifacts owned by this batch:
`research/frontier-28-batch-6.pages.json`,
`research/frontier-28-batch-6.coverage.json`,
and this file.

---

## 1. Controlling design and drift

- The controlling design is `research/plan-number-theory-track.md` lines
  `1072-1145`.
- The design and the live `research/plan-spec.json` agree on the A-page order
  `348.005`, the B-page order `348.006`, and the prerequisite
  `average-orders-divisor-sums-and-representation-counts-examples`.
- No design-vs-spec drift needed adjudication in this batch.

## 2. Scope and split decision

- A-page item count: `18`.
- B-page item count: `7`.
- No split is needed. The A page stays `42` items below the `60`-item cap.
- The design's route is preserved:
  Chebyshev's theorem is proved from central binomial coefficients and prime
  valuations, prime-counting bounds are transferred from `theta(x)` by Abel
  summation, Bertrand keeps its explicit finite residual check, and the three
  Mertens theorems stay distinct from the already-published Cauchy-product
  `thm-mertens`.

## 3. Dependency and proof-shape decisions

- I moved `lem-chebyshev-functions-prime-power-comparison` to follow
  `thm-chebyshev-theta-linear-bounds`. The design's statement gives two
  estimates: an `O(sqrt x log x)` bound from trivial counting and a sharper
  `O(sqrt x)` bound after a linear upper bound for `theta(x)`. Keeping the item
  before the theta theorem would have forced a forward dependency.
- `lem-prime-counting-chebyshev-partial-summation` is kept as its own node so
  `thm-chebyshev-prime-counting-bounds` depends on an explicit transfer lemma
  rather than on an unscaffolded proof maneuver.
- `def-meissel-mertens-constant` uses the same "provided the limit exists"
  pattern already used on disk for `def-euler-mascheroni-constant`, with
  `justified_by: [thm-second-mertens-theorem-for-primes]`.
- `thm-third-mertens-theorem-for-primes` is scaffolded as the exact
  `e^(-gamma)/log x` statement the design requires, not as Shoup's weaker
  `Theta(1/log x)` product bound.

## 4. Source support

- Primary textbook treatment:
  Shoup Chapter 5, Sections `5.1`-`5.3`, backs the Chebyshev bounds, the
  central-binomial coefficient lemmas, Bertrand's postulate, Abel summation in
  this context, the first Mertens theorem, and the weaker bounded-error forms
  of the second and third Mertens theorems.
- Independent textbook treatment:
  Crisman Chapter 21 backs the theta notation, the Bertrand statement, the
  Chebyshev prime-counting bounds, and the theta-from-pi integral formula.
- Short direct source for the first two Mertens theorems:
  Goldmakher's two-page note gives the exact `O(1/log x)` second-theorem shape
  and the bounded prime-power tail from the von Mangoldt harmonic sum.
- Exact third-theorem constant support:
  MIT 18.785 Problem Set 9 supplies the second-to-third-theorem remainder
  decomposition and the constant-identification route, while Tao's note records
  the Gamma-side origin of the `-gamma` constant and warns against reading it
  off from a bare `O(1)` term.
- Andersen Chapter 3 is named in the design, but this scaffold pass did not
  record it because I did not obtain a fetch-verified full-text URL for the
  relevant chapter in the browsing tool. Under the batch's URL-discipline rule,
  an unfetched citation is not evidence and is left out of the coverage file.

## 5. Known limits

- The exact constant in `thm-third-mertens-theorem-for-primes` is the highest
  proof-density point on the page. The scaffold keeps the theorem because the
  design requires it and the coverage file now records the supporting sources,
  but step 5 will need to keep the MIT/Tao analytic computation inside the
  theorem body or split out a local bridge if the proof starts leaning on
  unpublished zeta-page machinery.
- There is no page-graph blocker in the current scaffold. The risk is proof
  density, not unresolved ordering.
- No forward references are needed.

## 6. Validator state on August 31, 2026

- `node tools/coverage-checklist.mjs research/frontier-28-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 134 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-6.coverage.json --stamp`
  -> `source-fetch-check: 0/5 source(s) fetch-verified (0 newly stamped), 5 FAILED`.
  Every source failed with `EAI_AGAIN`, specifically:
  `https://shoup.net/ntb/ntb-v2.pdf`,
  `https://math.gordon.edu/ntic/nticoneside.pdf`,
  `https://web.williams.edu/Mathematics/lg5/mertens.pdf`,
  `https://terrytao.wordpress.com/2013/12/11/mertens-theorems/`,
  and
  `https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf`.
- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-6.coverage.json --out /tmp/frontier-28-batch-6-url-liveness.json --recover --fail-on-dead`
  wrote `/tmp/frontier-28-batch-6-url-liveness.json` with summary
  `urls: 5, live: 0, failed: 5, recovered: 0`.
  Each row records `curl: (6) Could not resolve host`, so the liveness failure is
  an environment DNS blocker rather than a page-specific dead-link pattern.
- `git diff --check`
  -> clean.

## Step-3 fix pass

- `C6-1` — `applied`.
  Evidence: `research/plan-number-theory-track.md:1147-1152` assigns NT-12
  `dirichlet-series-and-euler-products` only the initial zeta definition and
  Euler product, and states that analytic continuation is not needed there.
  `research/plan-complex-analysis-track.md:2871` and `:2986` assign the
  continuation and residue-one pole at `s = 1` to CA-22
  `the-riemann-zeta-function`. Tao's Proposition 2 is exactly the local
  simple-pole asymptotic near `s = 1`, so its deferred destination should match
  CA-22 rather than NT-12.
  Source check: on September 1, 2026, I re-opened all five recorded source URLs
  in the web fetcher and confirmed live access to
  `https://www.shoup.net/ntb/ntb-v2.pdf`,
  `https://math.gordon.edu/ntic/nticoneside.pdf`,
  `https://web.williams.edu/Mathematics/lg5/mertens.pdf`,
  `https://terrytao.wordpress.com/2013/12/11/mertens-theorems/`, and
  `https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_pset9.pdf`.
  Changed scaffold record:
  `research/frontier-28-batch-6.coverage.json` Tao source row,
  `contents[0]`, `destination` changed from
  `dirichlet-series-and-euler-products` to `the-riemann-zeta-function`, and the
  deferment reason was rewritten to cite the live NT-12/CA-22 split.
- Validators rerun on September 1, 2026:
  `node tools/coverage-checklist.mjs research/frontier-28-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
  `git diff --check`
  -> clean.

## Step-5 authoring

- Authored A-page items:
  `def-prime-counting-function`,
  `def-chebyshev-theta-function`,
  `def-chebyshev-psi-function`,
  `lem-chebyshev-psi-prime-power-expansion`,
  `lem-prime-counting-chebyshev-partial-summation`,
  `lem-central-binomial-coefficient-bounds`,
  `lem-central-binomial-coefficient-prime-valuation`,
  `thm-chebyshev-theta-linear-bounds`,
  `lem-chebyshev-functions-prime-power-comparison`,
  `thm-chebyshev-prime-counting-bounds`,
  `thm-bertrands-postulate`,
  `lem-weighted-von-mangoldt-harmonic-estimate`,
  `thm-first-mertens-theorem-for-primes`,
  `def-meissel-mertens-constant`,
  `thm-second-mertens-theorem-for-primes`,
  `thm-third-mertens-theorem-for-primes`,
  `cor-sum-of-reciprocals-of-primes-diverges`,
  and `cor-euler-prime-product-tends-to-zero`.
- Authored B-page items:
  `ex-prime-counting-theta-and-psi-table`,
  `ex-chebyshev-binomial-coefficient-estimate`,
  `ex-bertrand-finite-range-verification`,
  `ex-first-and-second-mertens-numerics`,
  `ex-third-mertens-product-numerics`,
  `cex-chebyshev-bounds-do-not-give-the-prime-number-theorem`,
  and `cex-shoups-product-bound-does-not-determine-mertens-constant`.
- Authored pages:
  `library/number-theory/chebyshev-bounds-and-mertens-theorems.md` and
  `library/number-theory/chebyshev-bounds-and-mertens-theorems-examples.md`.

- Provenance rationale:
  the A-page statements are literature-derived from the Shoup/Crisman/Goldmakher/MIT/Tao scaffold sources; the local proofs are mostly AI-generated expositions of those standard finite arguments.
- Provenance rationale:
  `thm-third-mertens-theorem-for-primes` keeps `provenance.proof: literature-derived` because the exact constant-identification step is a direct source-backed Gamma-side computation from the MIT/Tao support, not a fresh in-repo derivation from an already-authored zeta page.
- Provenance rationale:
  the B-page examples and counterexamples use `provenance.statement: ai-generated` with the required `generation.role` tags, and none of those generated statements is used as a dependency target.

- Narrowed or dropped claims:
  none. The page keeps the exact scoped items from the batch scaffold, including the exact `e^{-\gamma}/\log x` form of the third Mertens theorem.
- Finite residual verification:
  the Bertrand proof closes the asymptotic branch at `n >= 468`; the remaining range `2 <= n <= 467` was checked directly on September 1, 2026 and is recorded both in the theorem and in `ex-bertrand-finite-range-verification`.
- Contract/report artifact:
  `research/frontier-28-batch-6.proof-contracts.json` was created, seeded with item-specific boundary rows, and then regenerated from the authored Facts/steps using `tools/regen-contract-entries.mjs`.

- Blockers:
  none. The only delicate point was the exact constant in `thm-third-mertens-theorem-for-primes`; that proof now states its source-backed analytic computation explicitly instead of pretending the constant follows from Shoup's weaker `Theta(1/log x)` product bound.

- Validators run on September 1, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts` on the 21 proof-bearing batch items
  -> `21 checked, 0 failing — all clean`.
- Validators run on September 1, 2026:
  `node tools/content-policy.mjs research/frontier-28-batch-6.pages.json`
  -> `content-policy: 25 scoped item(s), 0 error(s), 0 warning(s)`.
- Validators run on September 1, 2026:
  `node tools/proof-contract.mjs research/frontier-28-batch-6.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 21/21 item(s) checked`.
- Validators run on September 1, 2026:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
