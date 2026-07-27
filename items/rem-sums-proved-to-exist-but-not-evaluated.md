---
id: rem-sums-proved-to-exist-but-not-evaluated
kind: remark
title: "Which sums and products on this page are proved to exist without being evaluated, and what the evaluation waits for"
status: published
origin: session
deps: [thm-alternating-series-test, thm-infinite-product-criterion, thm-decimal-expansions, thm-riemann-series-theorem, rem-rearrangement-in-higher-dimensions, def-absolute-and-conditional-convergence]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
pipeline_run: null
---

## Remark

A convergence test proves that a limit exists; it does not produce the limit. On
this page that gap is systematic, and this remark says exactly where it falls and
what would close it. **Every scope statement below is relative to the reading
order**: the material named is developed elsewhere in this library, later than
this page, and nothing here says it is absent from the library.

**The alternating harmonic series.** [[thm-alternating-series-test]] proves that
$\sum_{j \ge 0} (-1)^j/(j+1)$ converges, and its error bound pins the sum between
consecutive partial sums; the companion examples page uses that to prove the sum lies
strictly between $1/2$ and $1$. No closed
expression for the sum is given, and none can be given here: the classical value
is a logarithm, and the logarithm is introduced later in the reading order. So the
sum is named, bracketed, and left unevaluated.

**The two-positive-one-negative rearrangement.** The same is true one level up.
The companion examples page proves that taking two
positive terms for each negative one produces a convergent rearrangement whose sum
is $3/2$ times the sum of the original series. That statement is exact and complete
as it stands, and it is deliberately *relative*: it compares two sums rather than
evaluating either. The familiar form of the same fact multiplies a logarithm by
$3/2$, and it becomes available at the same later point.

**The refined criterion for infinite products.** [[thm-infinite-product-criterion]]
settles $\prod(1+p_k)$ completely for $p_k \ge 0$, settles $\prod(1-p_k)$ for
$0 \le p_k < 1$, and proves that $\sum |p_k|$ convergent forces $\prod(1+p_k)$
convergent. It does **not** settle the remaining case: a signed sequence $(p_k)$
with $\sum p_k$ convergent but $\sum |p_k|$ divergent. The classical criterion
there is that $\prod(1+p_k)$ converges exactly when $\sum p_k^{2}$ converges, and
every known proof of it expands $\log(1+x)$; that expansion belongs with the
logarithm, later in the reading order. The gap is not hypothetical: the companion
examples page exhibits a signed
sequence with $\sum p_k$ convergent whose partial products tend to $0$.

**Rearrangement beyond $\mathbb{R}$.** [[thm-riemann-series-theorem]] and
[[cor-unconditional-iff-absolute-in-r]] together answer the rearrangement question
for real series completely. The corresponding question for series of vectors is
raised, and left open at this point in the reading order, in
[[rem-rearrangement-in-higher-dimensions]], which states no theorem about it.

**Two places where existence is constructive but no formula is claimed.**
[[thm-decimal-expansions]] produces, for every $x \in [0,1)$, its digit sequence in
base $b$, by a recursion that depends on $x$; it gives no closed expression for
the digits of any particular real, and it claims none. Likewise
[[thm-riemann-series-theorem]] produces, for each prescribed target, a bijection of
$\mathbb{N}$ defined by a recursion over the terms of the series; no formula for
that bijection is given, and the theorem asserts only that one exists. In both
cases the construction is fully determined by the data, with no choice made
anywhere, which is a stronger statement than mere existence and a weaker one than
a formula.

**What is not on this list.** Every other convergence claim on this page either
identifies its sum outright (on the companion examples page, the geometric
rearrangement of $\sum(-1/2)^k$, the Cauchy product of $\sum r^k$ with itself,
and the telescoping product of $\prod(1 - 1/(j+2))$), or is a statement of the form
"this converges to the same value as that", where both sides are named by the same
unevaluated limit. [[thm-dirichlet-rearrangement]], [[thm-mertens]],
[[cor-cauchy-product-absolute]], [[thm-grouping-of-series]] and
[[thm-double-series-fubini]] are all of the second kind: they identify sums with
one another and evaluate nothing, which is exactly what makes them usable wherever
the sums themselves are unknown.
