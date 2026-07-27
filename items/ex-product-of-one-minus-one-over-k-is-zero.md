---
id: ex-product-of-one-minus-one-over-k-is-zero
kind: example
title: "$\\prod_{j \\ge 0} \\bigl(1 - 1/(j+2)\\bigr)$ has partial products $1/(n+1)$, which tend to $0$, so the product does not converge in the sense used here"
status: published
origin: session
deps: [def-infinite-product, thm-infinite-product-criterion, thm-p-series-rational, lem-series-tail-invariance, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-of-naturals-positive, lem-of-inverse-positive, cor-archimedean-reciprocal, def-rational-power, thm-nth-roots-exist, def-integer-power, def-series, def-real-limit]
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
    - title: "Infinite product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infinite_product"
    - title: "Telescoping series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Telescoping_series"
pipeline_run: null
---

## Example

Put $p_j := 1/\iota(j+2)$, so $0 < p_j \le 1/2 < 1$, and consider

$$\prod_{j \ge 0}\Bigl(1 - \frac{1}{j+2}\Bigr) \;=\; \prod_{j \ge 0}\frac{\iota(j+1)}{\iota(j+2)} \;=\; \frac12 \cdot \frac23 \cdot \frac34 \cdots$$

Its partial products telescope:

$$\prod_{j<n}\Bigl(1 - \frac{1}{\iota(j+2)}\Bigr) \;=\; \frac{1}{\iota(n+1)} \qquad (n \in \mathbb{N}),$$

so they tend to $0$. Every factor is nonzero, and yet **the product does not
converge** in the sense of [[def-infinite-product]], because no tail of it has
partial products with a nonzero limit.

This is the example the definition of a convergent infinite product is written to
exclude, and [[def-infinite-product]] names it for that purpose. Were a limit of
$0$ admitted, this product would "converge to $0$" with no factor equal to $0$,
and a convergent product could no longer be divided by.

The behaviour is also exactly what [[thm-infinite-product-criterion]] predicts:
$\sum_j p_j$ is a tail of the harmonic series and diverges, so the partial
products of $\prod(1-p_j)$ tend to $0$.

## Facts & Assumptions

**Given:** The sequence $p_j = 1/\iota(j+2)$ and the partial products $Q_n = \prod_{j<n}(1 - p_j)$.

[L1] Finite products: $\prod_{j<0}x_j = 1$ and $\prod_{j<n+1}x_j = \bigl(\prod_{j<n}x_j\bigr)x_n$; splitting at an intermediate index; a finite product of positive factors is positive ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L2] The canonical naturals are positive for $n \ge 1$, strictly increasing, and $\iota(m+n) = \iota(m)+\iota(n)$; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The principle of induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L4] Convergence of an infinite product: some tail must have nonvanishing factors and partial products with a nonzero limit ([[def-infinite-product]], [[def-real-limit]]).

[L5] $\sum_{k\ge1}1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; a series converges if and only if each of its tail series converges ([[thm-p-series-rational]], [[lem-series-tail-invariance]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L6] For $0 \le p_j < 1$ with $\sum p_j$ divergent, the partial products of $\prod(1-p_j)$ tend to $0$ ([[thm-infinite-product-criterion]]).

## Verification

**Proof technique:** direct.

1.1 For every $j$, $\iota(j+2) \ge \iota(2) = 2 > 0$, so $0 < p_j \le 1/2 < 1$ and $1 - p_j = \iota(j+1)/\iota(j+2) > 0$. [given, L2]

2.1 An induction gives $Q_n = 1/\iota(n+1)$ for every $n$: at $n = 0$ the empty product is $1 = 1/\iota(1)$; and $Q_{n+1} = Q_n(1 - p_n) = \dfrac{1}{\iota(n+1)}\cdot\dfrac{\iota(n+1)}{\iota(n+2)} = \dfrac{1}{\iota(n+2)}$. [step 1.1, L1, L2, L3]

2.2 The same conclusion follows from the general criterion: $\sum_j p_j = \sum_j 1/\iota(j+2)$ is the first tail series of $\sum_j 1/\iota(j+1)$, which is the harmonic series and diverges, so $\sum_j p_j$ diverges and the partial products of $\prod(1-p_j)$ tend to $0$. [step 1.1, L5, L6]

3.1 Hence $Q_n \to 0$: given a rational $\varepsilon > 0$, an $n_0 \ge 1$ with $1/\iota(n_0) < \varepsilon$ gives $0 < Q_n = 1/\iota(n+1) \le 1/\iota(n_0) < \varepsilon$ for every $n \ge n_0$. [step 2.1, L2]

4.1 For every $N$ the $N$-th tail products satisfy $\prod_{j=N}^{N+n-1}(1-p_j) = Q_{N+n}/Q_N$, the finite product $Q_N$ being positive; so they also tend to $0$ as $n$ grows, $Q_N$ being a fixed nonzero real. [step 1.1, step 2.1, step 3.1, L1]

5.1 Therefore no tail of the product has partial products with a nonzero limit, and $\prod_j (1-p_j)$ does not converge, although every one of its factors is nonzero. [step 4.1, L4]

6.1 So the partial products are $1/\iota(n+1)$, they tend to $0$, and the product diverges in the sense of [[def-infinite-product]]. [step 2.1, step 5.1, step 2.2] ∎

## Remarks

- **The telescoping is the reason the answer is exactly $1/(n+1)$.** Each factor is $\iota(j+1)/\iota(j+2)$, so consecutive numerators and denominators cancel and only the first numerator $\iota(1) = 1$ and the last denominator $\iota(n+1)$ survive. Written informally, $\tfrac12\cdot\tfrac23\cdots\tfrac{n}{n+1} = \tfrac{1}{n+1}$.

- **Why a zero limit is excluded from the definition.** If it were admitted, this product would have value $0$ although no factor is $0$; and then from $\prod a_k = 0$ one could infer nothing about the factors, whereas [[def-infinite-product]] arranges that a convergent product is $0$ exactly when some factor is. The exclusion costs this one example and buys that.

- **The index shift is not decorative.** Written as $\prod_{n \ge 1}(1 - 1/n)$ the same product begins with the factor $1 - 1/1 = 0$; the shift to $1 - 1/(j+2)$ is what keeps every factor nonzero, so that the failure is genuinely about the limit and not about a vanishing factor.
