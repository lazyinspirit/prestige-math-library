---
page: series-and-nonnegative-tests
title: "Series: Convergence and the Nonnegative Tests"
status: draft
items: [def-series, lem-series-tail-invariance, lem-nth-term-test,
        thm-series-cauchy-criterion, lem-series-linearity,
        lem-absolute-convergence-implies-convergence, thm-geometric-series,
        lem-telescoping-series, thm-nonnegative-series-bounded-partial-sums,
        thm-direct-comparison-test, thm-limit-comparison-test,
        thm-cauchy-condensation, thm-p-series-rational, thm-root-test,
        thm-ratio-test, cor-root-test-dominates-ratio-test, thm-kummer-test,
        cor-ratio-test-is-kummer-with-constant-weights, cor-raabe-test,
        thm-gauss-test, thm-abel-dini,
        rem-strength-order-of-the-nonnegative-tests]
examples: [fs-nth-term-test-converse, fs-ratio-limsup-at-least-one-diverges,
           fs-universal-comparison-series]
---

**A note on the notation $\iota$.** A natural number here is a von Neumann
natural, that is a set, so it is not an element of $\mathbb{R}$ and cannot be
divided into $1$. The canonical natural $\iota(n) = n \cdot 1_{\mathbb{R}}$ is
the real number that $n$ names ([[lem-of-naturals-positive]]), so $1/\iota(k+1)$
is what an informal text writes as $1/(k+1)$; the shift by one is there because
$\mathbb{N}$ contains $0$ and $\iota(0) = 0$.

**Objective.** A series is not a new kind of object. It is a sequence, namely the
sequence of partial sums, looked at through the terms that generate it. This page
makes that reduction precise in [[def-series]] and then spends itself on the one
question the reduction leaves open: given the terms, and without ever computing
the limit, how does one decide whether the partial sums converge?

**Definition, and the index convention that runs through the page.**
[[def-series]] fixes the partial sums as $s_n = \sum_{k<n} a_k$, so that
$s_0 = 0$ is the empty sum and $s_{n+1} = s_n + a_n$ is exactly the recursion of
[[def-finite-sum]] with no shift. Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many
classical series are built from expressions undefined at $0$: $1/k$, $1/k^{p}$,
$|a_k|^{1/k}$. So [[def-series]] also defines the series $\sum_{k \ge m} a_k$ of
a family from a general starting index $m$, as the series of the shifted sequence
$j \mapsto a_{j+m}$. Every statement on this page says which starting index it
uses, and the ones that must start at $1$ do.

**The five general facts, true for terms of any sign.**
[[lem-series-tail-invariance]] says convergence depends only on the terms from
any index on, with the sum splitting as $s_N$ plus the $N$-th tail sum.
[[lem-nth-term-test]] gives the necessary condition that the terms tend to $0$,
and [[fs-nth-term-test-converse]] records at once that it is not sufficient.
[[thm-series-cauchy-criterion]] is the sharp version: convergence is equivalent
to a bound on every block $a_{m+1} + \dots + a_n$ with $n > m \ge N$, and it
decides convergence without naming the sum. [[lem-series-linearity]] adds that
convergent series may be added and scaled, and that scaling by a nonzero constant
preserves both convergence and divergence. Finally
[[lem-absolute-convergence-implies-convergence]] proves that convergence of
$\sum |a_k|$ forces convergence of $\sum a_k$: the Cauchy criterion never asks
for a sign, so the triangle inequality carries its hypothesis from the absolute
values to the terms in one line. That is the only part of the theory of absolute
convergence proved here, and it is the part the root and ratio tests need.

**Two computable families.** [[thm-geometric-series]] evaluates
$\sum_{k \ge 0} r^{k} = 1/(1-r)$ for $|r| < 1$ and shows divergence for
$|r| \ge 1$; it is the comparison object behind the root and ratio tests.
[[lem-telescoping-series]] handles $\sum (b_k - b_{k+1})$, whose partial sums are
$b_0 - b_n$, and is the mechanism behind Kummer's test and the Abel-Dini
theorem.

**Where the sign hypothesis enters.**
[[thm-nonnegative-series-bounded-partial-sums]] is the pivot of the page: for
nonnegative terms the partial sums are nondecreasing, so convergence is exactly
boundedness above of the partial sums, and the sum is their supremum. Every test
that follows is an application of it. [[thm-direct-comparison-test]] compares
against an arbitrary series, [[thm-limit-comparison-test]] does the same through
the quotient $a_k/b_k$, phrasing the infinite case as divergence to $+\infty$
([[def-divergence-to-infinity]]) rather than as an extended limit equation, and
[[thm-cauchy-condensation]] reindexes instead of comparing, squeezing blocks of
$2^{n}$ terms between $2^{n}$ copies of the first and $2^{n}$ copies of the last.
Condensation settles the whole $p$-series family at a stroke:
[[thm-p-series-rational]] proves that $\sum_{k \ge 1} 1/k^{p}$ converges exactly
when $p > 1$, for every rational $p > 0$, which is every exponent this page can
name ([[def-rational-power]]).

**The tests that read the terms against a geometric series.**
[[thm-root-test]] and [[thm-ratio-test]] are stated with $\limsup$ and $\liminf$
in $\overline{\mathbb{R}}$, so their hypotheses always mean something
([[lem-limsup-exists]]); the root family is written $|a_{k+1}|^{1/(k+1)}$, the
shift of [[thm-ratio-root-inequality]], since $|a_k|^{1/k}$ is undefined at
$k = 0$. What the comparison with a geometric series delivers in each case is
convergence of $\sum |a_k|$;
[[lem-absolute-convergence-implies-convergence]] carries it the rest of the way,
so both tests are stated in their standard form, concluding convergence of
$\sum a_k$ itself. [[cor-root-test-dominates-ratio-test]] reads the chain of
[[thm-ratio-root-inequality]] through the two tests: whenever the ratio test
decides, the root test decides the same way, and the standard witness
$a_k = 2^{-k+(-1)^{k}}$ shows the converse fails.
[[fs-ratio-limsup-at-least-one-diverges]] records why the divergence half of the
ratio test is stated with $\liminf$ and a strict inequality.

**The tests that read the rate at which the ratios approach $1$.**
[[thm-kummer-test]] is a family of criteria, one for each positive weight
sequence $(\zeta_k)$, and its strength is the strength of the divergent series
$\sum 1/\zeta_k$ it carries. Positivity of the terms is load bearing there, not a
normalisation: with $\zeta_k = 1$ the convergent series $\sum (-1/2)^{k}$
satisfies every hypothesis of the divergence half, so the half is false without
it. Constant weights recover the ratio test
([[cor-ratio-test-is-kummer-with-constant-weights]]) and the weights $k+1$ give
[[cor-raabe-test]], whose comparison series is the harmonic one. [[thm-gauss-test]]
covers the case Raabe leaves open: under the expansion
$a_k/a_{k+1} = 1 + h/k + r_k$ with $|r_k| \le C k^{-1-\varepsilon}$ the series
converges exactly when $h > 1$, and the borderline $h = 1$ is proved divergent
**without any logarithm**, by a telescoping product estimate that bounds $k a_k$
below by a constant.

**The hierarchy has no last term.** [[thm-abel-dini]] divides the terms of a
divergent series of positive terms by the running total, producing a series that
still diverges, and by the square of the running total, producing one that
converges. [[fs-universal-comparison-series]] draws the consequence: the first of
those has eventually smaller terms than the series it came from, so no divergent
series of positive terms is slowest, no comparison test is universal, and the
sequence of refinements on this page cannot terminate.
[[rem-strength-order-of-the-nonnegative-tests]] collects exactly which
comparisons are proved here, which are deliberately not claimed, and which
classical tests, Bertrand's and the integral test among them, cannot even be
stated at this point because the logarithm and the integral do not yet exist in
this library.
