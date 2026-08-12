## Your cluster — `logarithm`: the integral logarithm and its characterisations (RA-27b)

Pages: `the-integral-logarithm-and-its-characterisations` (A, 19 items, order
178.1) and its `-examples` (B, 5 items).

**This is the highest-risk-scored cluster in the run.** `risk-report.mjs` rates
most of these items `critical`, on signals for existence/uniqueness/well-definedness
language, boundary-sensitive language, and analytic limiting/completeness
language. Alpha must record a `risk_review` disposition for each, and your report
is the evidence for it. Say explicitly, for each item you accept, what you
actually checked.

### Priority 1 — the non-circularity obligation, which is the whole point of this page

The page's design (owner design RA-27b) is that `log` is **defined** as
`L(x) = ∫_1^x dt/t` and `E` is defined as its inverse, and that the entire
development from `def-integral-logarithm` through
`thm-integral-exponential-solves-the-normalised-ivp` proceeds **without using the
published exponential or logarithm at all**. Only then does
`thm-integral-exponential-agrees-with-exponential` bridge to the published
`exp`, and it may do so using exactly one citation:
`thm-exponential-ivp-uniqueness`.

Reader-3 checked this with a text scan for `exp` and `log` in proof regions and
reported it clean. **A text scan is not a proof of non-circularity.** Check it
semantically:

- Does any item before the bridge cite a dependency that is *itself* defined in
  terms of the published exponential or logarithm — `a^x` for real `x`, general
  powers, `e` defined as `Σ 1/n!` or as `lim(1+1/n)^n`, the natural-log
  derivative, `log`-based inequalities? A dependency two levels down that unfolds
  to `exp` is still circular, and a scan cannot see it.
- `cor-integral-logarithm-reciprocals-and-integer-powers` — check the power law
  is proved only for **integer** exponents there, since real powers need the
  exponential.
- `cor-e-is-the-unique-unit-hyperbolic-area` and `ex-unit-hyperbolic-area-brackets-e`
  both name `e`. Which `e`? If the item's `e` is the published constant, the
  claim is a bridge claim and must come *after* the bridge or prove the
  identification. If it is defined as `L^{-1}(1)`, the item must say so.
  `ex-unit-hyperbolic-area-brackets-e` claims bounds `7/12 ≤ L(2) ≤ 5/6` giving
  `2 < e < 4` — **recompute both bounds** and check they are obtained from
  Riemann/Darboux sums the page actually has, not from a series for `e`.
- `thm-integral-exponential-agrees-with-exponential` — read
  `thm-exponential-ivp-uniqueness` on disk. Does it state uniqueness for the IVP
  `y' = y, y(0) = 1` over the interval the bridge needs, and does the bridge
  verify `E' = E` and `E(0) = 1` before invoking it? Is `E` known differentiable
  everywhere on its range first?

### Priority 2 — the repaired items

- `thm-logarithm-continuous-functional-equation-characterisation` (score 10,
  critical). The reader found `[L7]` attributed `log(e) = 1` to
  `thm-natural-logarithm-laws`, whose Statement does not contain it, and rederived
  `log(e) = L(E(1)) = 1` from the completed bridge. Verify: (a) the cited theorem
  really lacks that clause; (b) the rederivation is available at that point in the
  page's own order — i.e. the bridge item precedes this one; (c) the
  characterisation's hypotheses are **sufficient**: continuity, `f(xy) = f(x)+f(y)`
  on the positive reals, and `f(e) = 1` imply `f = log`. Check the standard proof
  is complete — rationals first, then density and continuity — and check the
  degenerate solution `f ≡ 0` is excluded exactly by the normalisation.
- `ex-logarithmic-functions-without-normalisation` — same citation split. Check
  the family it exhibits is exactly `{c·log}` and that `c = 0` is included or
  excluded consistently with `cor-continuous-logarithmic-functions-form-a-one-parameter-family`.
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family` (score 12) —
  the reader made explicit `log b = 1/c ≠ 0 = log 1`, hence `b ≠ 1`. Check the
  direction of that inference and whether `c` was known nonzero at that point.

### Priority 3 — the five-way equivalence and the two `cex-` items

- `thm-logarithm-definition-equivalence` claims five descriptions all define the
  same function. **Enumerate the five yourself from the item text and check each
  implication the proof actually supplies**; a five-way equivalence proved as a
  cycle needs the cycle to be complete, and one proved pairwise needs every pair.
  A missing arc here is fatal and easy to miss.
- `rem-logarithm-roadmap-and-circularity` is a Remark, and Remark prose is where
  falsehoods hide. Check every implication-order claim it makes against the
  page's actual dependency edges. If it says a result is proved without using
  another and that is false, that is a fatal defect in a Remark.
- `cex-discontinuous-logarithmic-functional-equation` — this needs a Hamel basis.
  Read `lem-hamel-basis-exists` on disk: does it supply an additive coefficient
  map and a nonzero complementary vector, and is the choice principle it uses
  declared? A construction transported from additive `ℝ` to multiplicative `ℝ_{>0}`
  needs the transport (via `L` or `E`) to be stated, not assumed.
- `cex-mercator-series-does-not-define-logarithm-globally` — check the divergence
  claim is for the right range and that the cited ratio-test clause is the
  divergence clause, not the inconclusive one.

### Also read in full

`def-integral-logarithm` (well-definedness: continuity and integrability of `1/t`
on `[1,x]`, and the `x < 1` orientation convention),
`thm-integral-logarithm-derivative-and-normalisation`,
`cor-integral-logarithm-is-strictly-increasing`,
`thm-integral-logarithm-product-law`, `thm-integral-logarithm-is-unbounded`,
`thm-integral-logarithm-is-a-bijection` (onto **all** of `ℝ` — check both
unboundedness directions, and that the intermediate-value theorem is applied on a
genuine closed interval), `def-integral-exponential`,
`cor-integral-exponential-addition-law`,
`thm-integral-exponential-solves-the-normalised-ivp`,
`cor-integral-logarithm-agrees-with-natural-logarithm`,
`thm-logarithm-differentiable-functional-equation-characterisation`,
`lem-log-series-extends-by-the-product-law`, `ex-log-two-from-four-characterisations`.

`lem-log-series-extends-by-the-product-law` is scored critical and involves an
induction plus a convergence claim: check exactly which `x` the series converges
for and that the extension by the product law is stated for the range it actually
covers, not for all positive reals.
