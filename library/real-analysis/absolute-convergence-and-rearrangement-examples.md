---
page: absolute-convergence-and-rearrangement-examples
title: "Absolute and Conditional Convergence; Rearrangement; Products: Examples and Counterexamples"
status: published
items: []
examples: [ex-alternating-harmonic-series,
           ex-absolutely-convergent-rearranged-freely,
           ex-alternating-harmonic-rearranged-to-three-halves,
           ex-riemann-rearrangement-to-a-prescribed-sum,
           ex-dirichlet-test-with-period-three-signs, ex-abel-test-applied,
           cex-abel-test-needs-monotonicity, ex-cauchy-product-of-geometric-series,
           cex-cauchy-product-of-convergent-series-diverges,
           ex-double-array-with-unequal-iterated-sums,
           cex-grouped-series-converges-original-diverges,
           ex-product-of-one-minus-one-over-k-is-zero,
           cex-infinite-product-diverges-though-the-series-converges,
           ex-decimal-expansion-nonuniqueness]
---

**A note on the notation $\iota$, which appears throughout this page.** A natural
number here is a von Neumann natural, that is a set, so it is not an element of
$\mathbb{R}$ and cannot be divided into $1$. The canonical natural
$\iota(n) = n \cdot 1_{\mathbb{R}}$ is the real number that $n$ names
([[lem-of-naturals-positive]]), so $1/\iota(k+1)$ is what an informal text writes
as $1/(k+1)$; the shift by one is there because $\mathbb{N}$ contains $0$ and
$\iota(0) = 0$.

**Objective.** Witnesses for
[[absolute-convergence-and-rearrangement|the page on absolute convergence, rearrangement and products]].
Some compute; the rest show that a hypothesis dropped from a theorem there makes
it false. One series does most of the work.

**The series that runs through the page.**
[[ex-alternating-harmonic-series]] proves that $\sum_{j\ge0}(-1)^j/(j+1)$
converges conditionally, with sum $S$ strictly between $1/2$ and $1$. The bounds
come from the bracketing in [[thm-alternating-series-test]], applied at the fourth
and third partial sums; the exact value of $S$ is a logarithm and is not available
at this point in the reading order, so nothing here asserts it.
[[ex-absolutely-convergent-rearranged-freely]] is the contrast: the geometric
series $\sum(-1/2)^k$ has the same alternating sign pattern and terms tending to
$0$, converges absolutely, and by [[thm-dirichlet-rearrangement]] every one of its
rearrangements converges to $2/3$.

**Rearranging the alternating harmonic series.**
[[ex-alternating-harmonic-rearranged-to-three-halves]] takes two positive terms
for each negative one and proves the exact identity
$T_{3n} = S_{4n} + \tfrac12 S_{2n}$ between partial sums, from which the
rearranged sum is $\tfrac32 S$, again stated relative to $S$, since $S$ itself is
not evaluated here. The bijection is explicit, and the three residual index
classes are closed rather than waved through.
[[ex-riemann-rearrangement-to-a-prescribed-sum]] is the other kind of
rearrangement: the greedy recipe of [[thm-riemann-series-theorem]] applied with a
constant target, giving a rearrangement of the same series with sum $0$, and with
sum any prescribed real.

**Tests beyond the alternating one.**
[[ex-dirichlet-test-with-period-three-signs]] builds the repeating pattern
$1, 1, -2$ by a recursion on a three-element state, notes that its partial sums
take only the values $0, 1, 2$, and deduces convergence of $\sum a_k/(k+1)$ from
[[thm-dirichlet-test]]. Since $a_0 = a_1 = 1$ the sign pattern is not alternating,
so [[thm-alternating-series-test]] does not reach this series: this is the item
showing Dirichlet's test is strictly stronger.
[[ex-abel-test-applied]] multiplies the alternating harmonic series by the
monotone bounded factor $(j+3)/(j+1)$, and
[[cex-abel-test-needs-monotonicity]] deletes *monotone* from the hypothesis of
[[thm-abel-test]]: with $a_j = (-1)^j/\sqrt{j+1}$ and $b_j = (-1)^j$ the product
series is $\sum 1/\sqrt{j+1}$, a $p$-series at $p = 1/2$, which diverges.

**Products of series.** [[ex-cauchy-product-of-geometric-series]] computes the
Cauchy product of $\sum r^k$ with itself, obtaining $\sum(k+1)r^k$ with sum
$1/(1-r)^2$, with no differentiation of power series required, only
[[cor-cauchy-product-absolute]].
[[cex-cauchy-product-of-convergent-series-diverges]] is the failure: with
$a_k = b_k = (-1)^k/\sqrt{k+1}$ every term of the antidiagonal carries the same
sign, so $|c_n| \ge 2\iota(n+1)/\iota(n+2) \ge 1$ and the product series diverges
by the term test.

**Double series and brackets.**
[[ex-double-array-with-unequal-iterated-sums]] is the array with $1$ on the
diagonal and $-1$ immediately below it: every row and column series converges,
both iterated sums exist, and they are $1$ and $0$. Its row totals of absolute
values are $1, 2, 2, 2, \dots$, so the hypothesis of
[[thm-double-series-fubini]] fails at exactly one point.
[[cex-grouped-series-converges-original-diverges]] groups $\sum(-1)^k$ in
consecutive pairs: every block is $0$, so the grouped series converges to $0$
while the original diverges.

**Infinite products.**
[[ex-product-of-one-minus-one-over-k-is-zero]] telescopes: the partial products of
$\prod_{j\ge0}(1 - 1/(j+2))$ are exactly $1/\iota(n+1)$ and tend to $0$, although
no factor is $0$. This is the example [[def-infinite-product]] is written to
exclude, and it is why a zero limit is not called convergence.
[[cex-infinite-product-diverges-though-the-series-converges]] is the signed case:
$\sum_{j\ge0}(-1)^j/\sqrt{j+2}$ converges, every factor $1 + (-1)^j/\sqrt{j+2}$ is
positive, and yet the partial products tend to $0$. The proof pairs consecutive
factors and bounds each pair by $1 - 1/\iota(4i+6)$, which is what replaces the
logarithmic expansion the classical argument would use.

**Expansions.** [[ex-decimal-expansion-nonuniqueness]] computes
$0.999\dots = 1$ and $0.4999\dots = 0.5$ from the geometric series, and explains
why the uniqueness clause of [[thm-decimal-expansions]] has to exclude the digit
sequences that are eventually constantly $b-1$: they are precisely the second
expansion of a number that already has one.

**Index discipline on this page.** Every series here is indexed from $0$, and the
shifts in the displayed expressions are deliberate: $(-1)^j/(j+1)$,
$1/\sqrt{j+1}$, $1 - 1/(j+2)$ and $1 + (-1)^j/\sqrt{j+2}$. At the unshifted
indices the first term of each would be $1/0$, $1/\sqrt 0$, a zero factor and a
zero factor respectively.
