---
id: rem-strength-order-of-the-nonnegative-tests
kind: remark
title: "How the nonnegative tests are ordered by strength, and which of them this page cannot state without the logarithm"
status: draft
origin: session
deps: [thm-root-test, thm-ratio-test, cor-root-test-dominates-ratio-test, cor-ratio-test-is-kummer-with-constant-weights, cor-raabe-test, thm-gauss-test, thm-kummer-test, thm-abel-dini, fs-universal-comparison-series, thm-direct-comparison-test, thm-geometric-series, thm-cauchy-condensation, thm-p-series-rational, def-rational-power, def-limsup-liminf]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
    - title: "K. Knopp, Theory and Application of Infinite Series, Ch. IX"
      url: "https://en.wikipedia.org/wiki/Konrad_Knopp"
pipeline_run: null
---

The tests on this page are not independent criteria of comparable status. Some
of them are strictly stronger than others, in the precise sense that whenever the
weaker one decides a series, the stronger one decides it the same way, and there
are series the stronger one decides and the weaker one does not. This remark
records exactly which comparisons are *proved here*, and, equally importantly,
which are not.

**Everything on this page is a comparison in disguise.** [[thm-direct-comparison-test]]
compares against an arbitrary series; the strength of every later test is the
strength of the particular series it compares against. The root and ratio tests
compare against a geometric series ([[thm-geometric-series]]); Raabe's test
compares against the harmonic series, through the weights $\zeta_k = k+1$ in
[[thm-kummer-test]]; and the borderline branch of [[thm-gauss-test]] compares
against the harmonic series again. [[thm-cauchy-condensation]] is of a different
kind: it does not compare, it reindexes, and that is why it settles the whole
$p$-series family ([[thm-p-series-rational]]) in one step.

**The comparisons proved on this page.**

- *Root over ratio.* [[cor-root-test-dominates-ratio-test]]: whenever the ratio
  test ([[thm-ratio-test]]) decides, the root test ([[thm-root-test]]) decides the
  same way, and there is a series the root test decides and the ratio test does
  not. This is a consequence of the inequality chain
  $\liminf q_k \le \liminf \rho_k \le \limsup \rho_k \le \limsup q_k$, proved on
  the previous page, and of nothing else.
- *Ratio as a case of Kummer.* [[cor-ratio-test-is-kummer-with-constant-weights]]:
  for positive terms, the ratio test is Kummer's test with the constant weights
  $\zeta_k = 1$.
- *Raabe as a case of Kummer.* [[cor-raabe-test]]: Raabe's test is Kummer's test
  with the weights $\zeta_k = k+1$.
- *Gauss over Raabe, inside Gauss's hypothesis.* [[thm-gauss-test]] assumes an
  expansion $a_k/a_{k+1} = 1 + h/k + r_k$ with a summable error. Under that
  hypothesis $R_k = (k+1)(a_k/a_{k+1}-1)$ converges to $h$. When $h \ne 1$,
  Raabe's test already decides, and Gauss's proof says so by invoking it. When
  $h = 1$ Raabe's test cannot decide: $\liminf_k R_k > 1$ would force $R_k$ to
  stay above a fixed number greater than $1$ from some index on, and
  $\limsup_k R_k < 1$ would force it to stay below a fixed number less than $1$,
  and $R_k \to 1$ rules out both. Gauss decides that case, and it is the reason
  the theorem exists.

**Two comparisons that are *not* claimed here.** Raabe's test is not compared
with the root test on this page, in either direction, and nothing above should be
read as ordering them. Nor is Kummer's test claimed to be universal: the choice
of weights is free, and the question of which series some choice of weights
decides is not addressed.

**And one that is refuted.** No comparison test can be final.
[[thm-abel-dini]] turns any divergent series of positive terms into a divergent
series of positive terms with eventually smaller terms, and
[[fs-universal-comparison-series]] draws the conclusion: there is no slowest
divergent series of positive terms, hence no universal comparison test. The
hierarchy above is therefore an initial segment of something with no last term,
not an approach to a best test.

**What this page cannot state, and why.** Every gap below is a missing
*definition*, not a missing proof.

- *The $p$-series at irrational exponents.* [[def-rational-power]] defines $a^{r}$
  for rational $r$ and positive $a$. So $\sum 1/k^{p}$ is a well-formed expression
  here only for rational $p$, and [[thm-p-series-rational]] is the full theorem
  for every exponent this page can name. Real exponents wait for the exponential
  and the logarithm.
- *Bertrand's test.* Its criterion is a condition on
  $\log k \,\big(k(a_k/a_{k+1} - 1) - 1\big)$, and it is the natural next member of
  the Kummer family, with weights $\zeta_k = k \log k$. Both the weights and the
  criterion mention the logarithm, so neither can be written down here.
- *The integral test.* It compares $\sum f(k)$ with $\int f$, and the Riemann
  integral is developed much later in this library. Condensation is the substitute
  used on this page, and for the $p$-series it does the same work.
- *The general form of Gauss's test.* The classical statement allows an error
  $r_k$ of order $1/(k \log k)$, or more generally any error making
  $\sum |r_k|$ convergent with the relevant products controlled; the version
  proved here assumes $|r_k| \le C k^{-1-\varepsilon}$ with $\varepsilon$ a
  positive rational, which is a $p$-series bound and therefore expressible. The
  restriction costs generality, not correctness.

**One further limitation, of a different kind.** The root and ratio tests
conclude convergence of $\sum |a_k|$, not of $\sum a_k$. That the second follows
from the first is the theorem that absolute convergence implies convergence, and
it is not proved on this page; it belongs with rearrangement and the
Riemann series theorem, on the page that follows. Until then, the convergence
halves of those two tests should be read exactly as they are stated.
