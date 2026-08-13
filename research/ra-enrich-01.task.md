# ra-enrich-01 — this dispatch

Run `ra-enrich-01`. Phase 1 only. You are the sole writer of every file listed as
yours in the brief.

## The owner's four named gaps — VERIFIED FROM DISK BY THE ORCHESTRATOR

The owner listed four gaps *"that I can already identify"*. Three of the four are
partly or wholly covered already. **Check each yourself before authoring** — the
point of stating this is that you must not re-mint what exists.

| owner's gap | what is actually on disk | your job |
|---|---|---|
| **Taylor series** | **Largely covered. 31 items mention Taylor.** `def-taylor-polynomial-and-remainder`, `lem-taylor-polynomial-derivatives`, `thm-taylor-peano-remainder`, `cor-taylor-lagrange-and-cauchy-remainders`, `thm-taylor-schlomilch-roche-remainder`, `cor-taylor-remainder-bound`, plus multivariable versions, all on `darboux-lhopital-and-taylor` (order 155, 20 items) and the multivariable pages. | The *finite Taylor polynomial with remainder* is done. What to check is the **infinite Taylor SERIES**: does the library prove a smooth function's Taylor series converges *to the function* on an interval, and does it give the standard counterexample $e^{-1/x^2}$ where the series converges but not to $f$? Look at `power-series-and-real-analytic-functions` (order 173, 30 items). Author only what is genuinely missing. |
| **Maclaurin series** | **Zero items** use the word. | This is a naming gap over existing machinery — a Maclaurin series is the Taylor series at 0. Almost certainly one definition plus the standard expansions, not a development. Do not manufacture a page's worth of material out of a synonym. |
| **harmonic series** | **Well covered.** `ex-harmonic-series-diverges` exists, plus `ex-alternating-harmonic-series`, `ex-alternating-harmonic-series-sums-to-log-two`, `ex-alternating-harmonic-rearranged-to-three-halves`, `ex-abel-dini-pair-for-the-harmonic-series`, `ex-abel-theorem-on-the-alternating-harmonic-series`. | Probably nothing to add. If you find a genuine hole — the Cauchy condensation route, $p$-series sharpness, the $\log n$ asymptotic and the Euler–Mascheroni constant — say so specifically. Report "already covered" if that is the truth. |
| **sin/cos power series match the geometric definitions**, $\cos x = A/H$, $\sin x = O/H$ | **A GENUINE AND SUBSTANTIAL GAP.** Zero items in the entire 4172-item corpus mention "hypotenuse". The library defines sine and cosine **by their power series** (`def-sine-and-cosine-by-power-series`) and develops everything analytically from there — derivatives, addition formulas, the Pythagorean identity, $\pi$ via the first positive zero of cosine, periodicity, the tangent family. It never connects any of it to the right-triangle ratios or to the geometric notion of angle. | **This is the headline item of your commission.** See below. |

## The sin/cos geometric bridge — what closing it actually requires

Do not underestimate this one; it is the interesting mathematics in this job.
Bridging "power series" to "$\cos\theta = $ adjacent over hypotenuse" honestly
requires **angle as arc length**, and then the statement that the point
$(\cos t,\sin t)$ traverses the unit circle at unit speed, so that the parameter
$t$ *is* the arc length subtended — which is what makes the ratio definition
agree with the analytic one.

The material you need already exists and you must build on it, not around it:

- `arc-length-and-rectifiable-curves` (order 181, 15 items) — the arc-length
  machinery, and `lem-arc-length-function-is-continuous-and-nondecreasing`;
- `pi-the-equivalent-characterizations` (order 183, 14 items) — the equivalence
  hub, and the most likely correct home for the bridge;
- `sine-cosine-and-the-definition-of-pi` (order 179, 16 items) — the analytic
  development, `cor-trigonometric-parity-and-pythagorean-identity`,
  `thm-sine-cosine-zero-sets-and-fundamental-period`;
- `fundamental-trigonometric-identities` (order 185) and
  `further-trigonometric-identities-and-inverses` (order 187, **only 5 items**).

Decide the honest home for each new item, respect reading order (an item may not
depend on a later page), and if the bridge genuinely needs a whole new pair, that
is a **phase 2** finding — scaffold it and do not build it.

## Thin published real-analysis pages, ranked

Item counts against neighbours running 20–35. Thin is a signal to investigate,
not proof of a defect — a page can be short because its subject is small.

```
  5 items  further-trigonometric-identities-and-inverses
  5 items  inverse-and-implicit-function-theorems
 10 items  the-fundamental-theorems-of-calculus
 14 items  pi-the-equivalent-characterizations
 15 items  arc-length-and-rectifiable-curves
 16 items  sine-cosine-and-the-definition-of-pi
 17 items  suprema-and-infima
 17 items  the-total-derivative
 18 items  countability-and-uncountability
 18 items  sequences-and-limits
 18 items  the-riemann-integral
 19 items  the-derivative-and-mean-value-theorems
```

`the-fundamental-theorems-of-calculus` at 10 items is worth particular
attention: a previous build found that **no page in the whole plan homes Green's
theorem**, and the vector-calculus coverage around orders 239–241 has known
holes. Verify what is actually proved there before assuming.

## Concurrency warning

Thirteen subject-track scaffolders are running against this repo right now, and
several are enriching prose scaffolds in place. **`research/plan-realanalysis-pages.md`
is yours and yours alone.** Do not open any other `research/plan-*.md` for
writing — not the algebra, combinatorics, category-theory, measure-theory or
complex-analysis tracks. If you want something changed in one of them, write it
in your report as an amendment owed and the orchestrator will route it.

Measure theory is being scaffolded concurrently as its own track. Anything of
yours that genuinely needs Lebesgue integration is **out of scope for you** —
record it as a dependency on that track rather than building measure theory.
`DEFERRED.md` §1 lists what is already knowingly deferred to it.
