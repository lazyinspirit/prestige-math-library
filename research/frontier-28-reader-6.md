# frontier-28 reader-6 report

Date: Tuesday, September 1, 2026.

## Opened scope

- Batch-local control artifacts: [research/frontier-28-batch-6.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.pages.json), [research/frontier-28-batch-6.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.coverage.json), [research/frontier-28-batch-6.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.notes.md), [research/frontier-28-batch-6.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.proof-contracts.json), [research/frontier-28-reader.task.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-reader.task.md), [research/frontier-28-dispatch/reader-reader-6.prompt.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-dispatch/reader-reader-6.prompt.md), and [.autopilot/frontier-28/status.md](/home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28/status.md).
- Page files: [library/number-theory/chebyshev-bounds-and-mertens-theorems.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/chebyshev-bounds-and-mertens-theorems.md) and [library/number-theory/chebyshev-bounds-and-mertens-theorems-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/chebyshev-bounds-and-mertens-theorems-examples.md).
- Assigned A-page items opened: `def-prime-counting-function`, `def-chebyshev-theta-function`, `def-chebyshev-psi-function`, `lem-chebyshev-psi-prime-power-expansion`, `lem-prime-counting-chebyshev-partial-summation`, `lem-central-binomial-coefficient-bounds`, `lem-central-binomial-coefficient-prime-valuation`, `thm-chebyshev-theta-linear-bounds`, `lem-chebyshev-functions-prime-power-comparison`, `thm-chebyshev-prime-counting-bounds`, `thm-bertrands-postulate`, `lem-weighted-von-mangoldt-harmonic-estimate`, `thm-first-mertens-theorem-for-primes`, `def-meissel-mertens-constant`, `thm-second-mertens-theorem-for-primes`, `thm-third-mertens-theorem-for-primes`, `cor-sum-of-reciprocals-of-primes-diverges`, and `cor-euler-prime-product-tends-to-zero`.
- Assigned B-page items opened: `ex-prime-counting-theta-and-psi-table`, `ex-chebyshev-binomial-coefficient-estimate`, `ex-bertrand-finite-range-verification`, `ex-first-and-second-mertens-numerics`, `ex-third-mertens-product-numerics`, `cex-chebyshev-bounds-do-not-give-the-prime-number-theorem`, and `cex-shoups-product-bound-does-not-determine-mertens-constant`.
- Additional dependency items opened beyond the assigned batch items: `def-prime`, `def-natural-logarithm`, `def-von-mangoldt-function`, `def-binomial-coefficient`, `def-factorial-and-falling-factorial`, `def-p-adic-valuation`, `def-euler-mascheroni-constant`, `lem-abel-summation-by-parts`, `lem-binomial-coefficients-symmetric-and-unimodal`, `lem-p-adic-valuation-basic`, `lem-p-adic-valuation-additive`, `lem-harmonic-sum-asymptotic`, `lem-summatory-logarithm-asymptotic`, `thm-binomial-closed-formula`, `thm-binomial-theorem`, `thm-direct-comparison-test`, `thm-gamma-weierstrass-product`, `thm-induction-principle`, `thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`, `thm-p-series-real-exponents`, and `thm-von-mangoldt-divisor-sum-identity`.

## Repairs

- Confirmed and repaired a domain defect in [items/def-chebyshev-theta-function.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-chebyshev-theta-function.md:1). The batch had defined $\theta(x)$ only for $x \ge 2$, but both `lem-chebyshev-psi-prime-power-expansion` and later uses require evaluating $\theta(x^{1/k})$ for values in $[1,2)$. I widened the in-flight definition to $x \ge 1$, recorded the empty-sum clause for $1 \le x < 2$, and synced the five affected citation quotes in [research/frontier-28-batch-6.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.proof-contracts.json:1).
- Confirmed and repaired an ill-formed decomposition in [items/thm-first-mertens-theorem-for-primes.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-first-mertens-theorem-for-primes.md:1). Step `1.1` had omitted the `+` between the prime layer and the prime-power tail, turning the intended partition of $\sum_{n \le x}\Lambda(n)/n$ into a false formula. I restored the additive decomposition in the item and in the corresponding contract row at [research/frontier-28-batch-6.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-batch-6.proof-contracts.json:1355).
- Confirmed and repaired a false large-$n$ threshold in [items/thm-bertrands-postulate.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-bertrands-postulate.md:1). The old bound claimed $\frac{4^{n/3-1}}{(2n+1)(2n)^{\sqrt{2n}}} > 1$ for every $n \ge 468$, but direct evaluation shows it first exceeds `1` only at `n = 476`. I replaced that crude small-prime estimate by a logarithmic layer bound using $\theta(2n/3)$ and $\sum_{k \ge 2}\theta((2n)^{1/k})$, which yields a lower bound for $\log Q_n$ already positive at `n = 468`; the proof-contract entries for steps `1.2` and `2.1` were updated in the same file.

## Verdicts

- `chebyshev-bounds-and-mertens-theorems`: sufficient after the local A-item repairs above.
- `chebyshev-bounds-and-mertens-theorems-examples`: sufficient on the current bytes.
- No uneditable in-flight-item, page, or published-dependency defect remains in batch `6`.

## Blockers

- None.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-chebyshev-theta-function.md` -> unchanged.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-first-mertens-theorem-for-primes.md` -> reflowed.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-bertrands-postulate.md` -> reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-chebyshev-theta-function.md items/thm-first-mertens-theorem-for-primes.md items/thm-bertrands-postulate.md` -> `2 checked, 0 failing`; the definition item remains `precheck: n/a`.
- `node tools/rendercheck.mjs items/def-chebyshev-theta-function.md items/thm-first-mertens-theorem-for-primes.md items/thm-bertrands-postulate.md` -> `OK — 3 file(s)`.
- `node tools/proof-contract.mjs research/frontier-28-batch-6.proof-contracts.json --strict` -> pass.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-6.proof-contracts.json --fail-on-missing-quote` -> `75 citation(s)`, no missing quote, no widening candidate.
- `node tools/content-policy.mjs research/frontier-28-batch-6.pages.json` -> `25 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-28-batch-6.coverage.json --require-destination` -> pass.
- `node tools/validate-plan.mjs research/plan-spec.json` -> `OK`; only the standing repository-wide `redundant-prereq` advisories remain.
- `git diff --check` -> clean.
- Custom arithmetic check on September 1, 2026: the direct scan for `2 <= n <= 467` still succeeds, and the repaired lower bound for `log Q_n` has minimum value about `16.64` on `468 <= n <= 2000`, attained at `n = 468`.
