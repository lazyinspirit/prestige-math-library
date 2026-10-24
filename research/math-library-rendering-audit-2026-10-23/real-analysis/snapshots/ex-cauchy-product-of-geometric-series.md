---
id: ex-cauchy-product-of-geometric-series
kind: example
title: "For $|r| < 1$ the Cauchy product of $\\sum r^{k}$ with itself is $\\sum (k+1) r^{k}$, with sum $1/(1-r)^{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-cauchy-product-absolute, thm-mertens, def-cauchy-product, thm-geometric-series, def-absolute-and-conditional-convergence, def-integer-power, lem-power-laws, lem-of-abs-value, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cauchy product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_product"
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "John K. Hunter, An Introduction to Real Analysis, Chapter 4"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch4.pdf"
pipeline_run: null
---

## Example

Let $r \in \mathbb{R}$ with $|r| < 1$ and take $a_k = b_k = r^{k}$
([[def-integer-power]]). Their Cauchy product ([[def-cauchy-product]]) is

$$c_n \;=\; \sum_{k=0}^{n} r^{k} r^{\,n-k} \;=\; \sum_{k=0}^{n} r^{n} \;=\; \iota(n+1)\,r^{n},$$

the sum of $n+1$ copies of the same number. Both factors converge absolutely
([[def-absolute-and-conditional-convergence]]), so by
[[cor-cauchy-product-absolute]] the product series converges absolutely, with

$$\sum_{n=0}^{\infty} (n+1)\,r^{n} \;=\; \Bigl(\sum_{k=0}^{\infty} r^{k}\Bigr)^{2} \;=\; \frac{1}{(1-r)^{2}} .$$

This is the cheapest way to sum $\sum (n+1)r^{n}$ available at this point in the
reading order: no differentiation of a power series is needed, only the geometric
series and Mertens' theorem.

## Facts & Assumptions

**Given:** A real $r$ with $|r| < 1$, the sequences $a_k = b_k = r^{k}$, and their Cauchy product $c_n = \sum_{k=0}^{n} a_k b_{n-k}$ ([[def-cauchy-product]]).

[L1] Geometric series: for $|x| < 1$, $\sum x^{k}$ converges with sum $1/(1-x)$, the first term being $x^{0} = 1$ ([[thm-geometric-series]], [[def-series]]).

[L2] Powers: $x^{0} = 1$, $x^{n+1} = x^{n}x$, and $x^{m+n} = x^{m}x^{n}$ ([[def-integer-power]], [[lem-power-laws]]).

[L3] Absolute value: $|xy| = |x|\,|y|$ and $|1| = 1$ ([[lem-of-abs-value]]).

[L4] Finite sums: $\sum_{k<n} \lambda = \iota(n)\lambda$ for a constant $\lambda$, and $\sum_{k=0}^{n}x_k = \sum_{k<n+1}x_k$ ([[lem-finite-sum-laws]], [[def-finite-sum]], [[lem-of-naturals-positive]]).

[L5] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L6] If both factors converge absolutely, the Cauchy product converges absolutely with sum the product of the sums ([[cor-cauchy-product-absolute]], [[thm-mertens]], [[def-absolute-and-conditional-convergence]]).

## Verification

**Proof technique:** direct.

1.1 An induction gives $|r^{k}| = |r|^{k}$ for every $k$: at $k = 0$ both sides are $1$, and $|r^{k+1}| = |r^{k}r| = |r^{k}|\,|r| = |r|^{k}|r| = |r|^{k+1}$. [L2, L3, L5]

1.2 For $k \le n$, $r^{k}r^{\,n-k} = r^{k + (n-k)} = r^{n}$, so $c_n = \sum_{k=0}^{n} r^{n} = \sum_{k<n+1} r^{n} = \iota(n+1)\,r^{n}$, a sum of $n+1$ copies of the constant $r^{n}$. [L2, L4]

2.1 Since $|r| < 1$, both $\sum_k r^{k}$ and $\sum_k |r^{k}| = \sum_k |r|^{k}$ converge, the first with sum $1/(1-r)$; so $\sum_k r^{k}$ converges absolutely. [step 1.1, L1]

3.1 Both factors of the Cauchy product converge absolutely, so $\sum_n c_n$ converges absolutely with sum $\bigl(1/(1-r)\bigr)^{2} = 1/(1-r)^{2}$. [step 2.1, L6]

4.1 By step 1.2 that series is $\sum_{n\ge0}(n+1)r^{n}$, so it converges absolutely with sum $1/(1-r)^{2}$. [step 1.2, step 3.1] ∎

## Remarks

- **The coefficient $n+1$ counts the antidiagonal.** There are exactly $n+1$ pairs $(k, n-k)$ with $k \le n$, and every one of them contributes the same product $r^{n}$; that is the whole computation of step 1.2, and it is why the answer is a count rather than a new expression.

- **Absolute convergence is available for free here.** The terms are powers of a fixed $r$, so $\sum |r^{k}|$ is again a geometric series. That is what lets [[cor-cauchy-product-absolute]] apply rather than only [[thm-mertens]], and it gives absolute convergence of the product as well as its value.

- **Compare the failing case.** In [[cex-cauchy-product-of-convergent-series-diverges]] the two factors again coincide, but neither converges absolutely, and the antidiagonal of $c_n$ has $n+1$ terms all of the same sign and not small enough; there the count $n+1$ is what destroys convergence rather than what produces a clean answer.
