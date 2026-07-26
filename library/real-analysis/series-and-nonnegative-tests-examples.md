---
page: series-and-nonnegative-tests-examples
title: "Series: Convergence and the Nonnegative Tests: Examples and Counterexamples"
status: draft
items: []
examples: [ex-harmonic-series-diverges, ex-sum-of-reciprocal-squares-converges,
           ex-geometric-series-computed, ex-telescoping-sum-computed,
           ex-condensation-applied, ex-abel-dini-pair-for-the-harmonic-series,
           ex-raabe-decides-where-ratio-fails, cex-ratio-inconclusive-root-decides,
           cex-root-limit-one-decides-nothing, cex-comparison-needs-nonnegativity,
           cex-condensation-needs-monotonicity,
           cex-limit-comparison-l-zero-one-directional]
---

**Objective.** Witnesses for the page on series and the nonnegative tests. The
first group computes; the second group shows that a hypothesis dropped from a
theorem there makes it false, or that a test is silent where one might expect it
to speak.

**A note on the notation $\iota$, which appears throughout this page.** A natural
number here is a von Neumann natural, that is a set, so it is not an element of
$\mathbb{R}$ and cannot be divided into $1$. The canonical natural
$\iota(n) = n \cdot 1_{\mathbb{R}}$ is the real number that $n$ names, $1$ added
to itself $n$ times ([[lem-of-naturals-positive]]). So $1/\iota(k+1)$ is what an
informal text writes as $1/(k+1)$, and the shift by one is there because
$\mathbb{N}$ contains $0$ and $\iota(0) = 0$, so $1/\iota(k)$ would be undefined
at the first index.

**The two series everything is measured against.**
[[ex-harmonic-series-diverges]] proves that $\sum_{k \ge 1} 1/k$ diverges twice
over: by [[thm-cauchy-condensation]], where the condensed terms are constantly
$1$, and by Oresme's block grouping, which gives the explicit bound
$\sum_{k=1}^{2^{n}} 1/k \ge 1 + n/2$ and uses no convergence test at all.
[[ex-sum-of-reciprocal-squares-converges]] proves that $\sum_{k \ge 1} 1/k^{2}$
converges with sum at most $2$, by comparison with a telescoping series; the
exact value $\pi^{2}/6$ is not established anywhere on either page and is not
used.

**Sums that can actually be evaluated.** [[ex-geometric-series-computed]] gives
$\sum_{k \ge 1} 2^{-k} = 1$ and $\sum_{k \ge 0}(-1/3)^{k} = 3/4$; the first is
the standard trap, since the series from $k = 0$ sums to $2$ and the omitted term
is exactly the difference. [[ex-telescoping-sum-computed]] gives
$\sum_{k \ge 1} 1/(k(k+1)) = 1$, where the value comes from the first term of the
telescoping sequence $b_k = 1/k$ and not from the first term of the series.
[[ex-condensation-applied]] displays the computation behind
[[thm-p-series-rational]] on its own: condensation turns $\sum 1/k^{p}$ into a
geometric series of ratio $2^{1-p}$, so the threshold $p = 1$ is where that ratio
is $1$.

**What the tests can and cannot do.**
[[ex-abel-dini-pair-for-the-harmonic-series]] instantiates [[thm-abel-dini]] at
the harmonic series: $\sum 1/(k H_k)$ still diverges while
$\sum 1/(k H_k^{2})$ converges, so even the slowest familiar divergent series is
not slowest. [[ex-raabe-decides-where-ratio-fails]] takes
$a_k = 1/(k+1)^{2}$, whose ratios tend to $1$ so that neither half of
[[thm-ratio-test]] applies, and computes its Raabe expression exactly as
$2 + 1/(k+1)$, which [[cor-raabe-test]] converts into convergence.
[[cex-ratio-inconclusive-root-decides]] is the standard witness
$a_k = 2^{-k+(-1)^{k}}$: its ratios oscillate between $1/8$ and $2$ while its
roots converge to $1/2$, so the root test decides and the ratio test is silent.
[[cex-root-limit-one-decides-nothing]] closes the other side, with
$\sum_{k \ge 1} k^{-1/2}$ divergent and $\sum_{k \ge 1} k^{-2}$ convergent and
both root quantities equal to $1$.

**Hypotheses that cannot be dropped.**
[[cex-comparison-needs-nonnegativity]] takes $a_k = -1/(k+1)$ and $b_k = 0$: the
terms satisfy $a_k \le b_k$ everywhere and $\sum b_k$ converges, yet $\sum a_k$
diverges, so the sign hypothesis in [[thm-direct-comparison-test]] is doing real
work. [[cex-condensation-needs-monotonicity]] takes a nonnegative family that
vanishes exactly at the powers of $2$: its condensed series is identically $0$
and converges, while the family itself has terms equal to $1$ at arbitrarily
large indices and its series diverges.
[[cex-limit-comparison-l-zero-one-directional]] takes $a_k = 1/(k+1)^{2}$ and
$b_k = 1/(k+1)$, with quotient tending to $0$, and shows that the $L = 0$ clause
of [[thm-limit-comparison-test]] gives one implication and not two.
