---
id: def-multivariable-power-series
kind: definition
title: "Multi-indexed power series in $\\mathbb{C}^m$ and their absolute convergence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-balls-and-polydiscs-in-complex-euclidean-space, def-ck-and-multi-index-notation-in-several-variables, def-complex-series-power-series-and-absolute-convergence, thm-absolute-convergence-of-complex-series, lem-finite-powers-of-countable-sets-are-countable, def-injection-surjection-bijection, def-complex-integer-powers, thm-weierstrass-m-test-for-complex-function-series, def-uniform-convergence-of-complex-valued-functions, def-countable, def-finite-sum-in-a-commutative-monoid, def-monoid-finite-product, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
pipeline_run: null
---

## Definition

Fix $m\ge1$ and read $\mathbb C^m$ through
[[rem-complex-euclidean-space-dictionary]]. A **multi-index** is
$\alpha\in\mathbb N^m$, with $|\alpha|=\sum_{k<m}\alpha_k$ and
$\alpha!=\prod_{k<m}\alpha_k!$ as in
[[def-ck-and-multi-index-notation-in-several-variables]], every index running
over $k<m$ from $0$. For $w\in\mathbb C^m$ the **complex monomial** is

$$w^\alpha:=\prod_{k<m}w_k^{\alpha_k},$$

a finite product in the multiplicative commutative monoid of $\mathbb C$
([[def-monoid-finite-product]], [[thm-complex-numbers-form-a-field]]) of natural powers
in $\mathbb C$ ([[def-complex-integer-powers]]); for the zero multi-index
$w^0=1$.

**Enumerating the index set.** $\mathbb N$ is countable and
[[lem-finite-powers-of-countable-sets-are-countable]] makes $\mathbb N^m$ at
most countable; it is infinite, so there is a bijection
$\sigma:\mathbb N\to\mathbb N^m$ ([[def-injection-surjection-bijection]],
[[def-countable]]).

Let $c:\mathbb N^m\to\mathbb C$ and $a,z\in\mathbb C^m$. The **multi-indexed
power series** $\sum_\alpha c_\alpha(z-a)^\alpha$ **converges absolutely at $z$**
when the complex series $\sum_n c_{\sigma(n)}(z-a)^{\sigma(n)}$ converges
absolutely ([[def-complex-series-power-series-and-absolute-convergence]]) for one
bijection $\sigma$, equivalently for every one. The two conditions agree, and the
sums agree, because for bijections $\sigma,\tau$ the series along $\tau$ is a
rearrangement of the series along $\sigma$: applying
[[thm-absolute-convergence-of-complex-series]] to the nonnegative series of
moduli transfers convergence, and applying it again to the series itself
transfers the sum. That common value is written $\sum_\alpha c_\alpha(z-a)^\alpha$
and no other notion of unordered sum is introduced.

**Box partial sums.** For $N\in\mathbb N$ put
$B_N:=\{\alpha\in\mathbb N^m:\alpha_k\le N\ \text{for every }k<m\}$, a finite
set, and let $S_N(z):=\sum_{\alpha\in B_N}c_\alpha(z-a)^\alpha$ be the
corresponding finite sum ([[def-finite-sum-in-a-commutative-monoid]]). If the
series converges absolutely at $z$ with sum $S$, then $S_N(z)\to S$. Given
$\varepsilon>0$, absolute convergence supplies $n_0$ with
$\sum_{n\ge n_0}|c_{\sigma(n)}(z-a)^{\sigma(n)}|<\varepsilon$ and
$\bigl|\sum_{n<n_0}c_{\sigma(n)}(z-a)^{\sigma(n)}-S\bigr|\le\varepsilon$; taking
$N$ large enough that $B_N$ contains $\sigma(0),\dots,\sigma(n_0-1)$, every index
of $B_N$ outside that finite list is $\sigma(n)$ for some $n\ge n_0$, so
$|S_N(z)-S|\le2\varepsilon$. The same argument bounds $|S_N(z)|$ and the tail of
the series by the corresponding tails of the series of moduli.

The series **converges absolutely and uniformly on a set $S\subseteq\mathbb C^m$**
when there are reals $M_\alpha\ge0$ with
$|c_\alpha(z-a)^\alpha|\le M_\alpha$ for every $z\in S$ and every $\alpha$, and
with $\sum_n M_{\sigma(n)}$ convergent. By
[[thm-weierstrass-m-test-for-complex-function-series]] the partial sums along
$\sigma$ then converge uniformly on $S$
([[def-uniform-convergence-of-complex-valued-functions]]) and the series converges
absolutely at every point of $S$.

## Remarks

**Why a bijection is fixed rather than an unordered sum defined.** The library
already has one theory of complex series and one rearrangement theorem, and the
clause above uses exactly those. Introducing a separate notion of summation over
$\mathbb N^m$ would create a second convergence notion that every later statement
would have to be matched against; instead every multi-indexed sum below means the
sum of the one-variable series along any enumeration, which the rearrangement
theorem makes unambiguous.

**Where the series live.** The natural regions here are the polydiscs of
[[def-balls-and-polydiscs-in-complex-euclidean-space]] rather than balls. If
every $|z_k-a_k|$ is positive, absolute convergence at $z$ controls the series
on the closed polydisc with that polyradius. If some coordinate is zero, the
same coordinatewise domination holds on the corresponding degenerate product
set, but that radius vector is not called a polyradius. This is exactly the
shape the kernel expansion and the Cauchy estimates on this page produce.
