---
id: ex-weak-law-for-independent-nonidentical-variables
title: "A nonidentical Bernoulli weak law"
kind: example
status: published
origin: pipeline
deps: ["thm-chebyshev-weak-law-for-uncorrelated-arrays", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "thm-countable-product-of-probability-spaces", "lem-bernoulli-and-binomial-mean-and-variance", "thm-factorization-of-expectations-for-independent-variables"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 2.2.6, p. 59, direct example"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "Compute the deterministic mean average and the sum of variances; apply the row law. Existence uses varying Bernoulli factors."
---

## Example

Assume countable choice and dependent choice. Let independent $X_k$ be Bernoulli$(p_k)$ with $p_k=1/4$ for odd $k$ and $p_k=3/4$ for even $k$. Then for $S_n=\sum_{k=1}^nX_k$,
$$\mathbb E\left|\frac{S_n-\mathbb ES_n}{n}\right|^2=\frac3{16n},\qquad S_n/n\longrightarrow1/2\quad\text{in probability}.$$
Thus a common distribution is not required.

## Facts & Assumptions

[F1] [[thm-chebyshev-weak-law-for-uncorrelated-arrays]]: For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If $v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$ then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

[F2] [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]: Under the measure of thm-countable-product-of-probability-spaces, the coordinate maps $X_n(x)=x_n$ have laws $\mu_n$ and are independent.

[F3] [[thm-countable-product-of-probability-spaces]]: Assume countable choice and dependent choice. For probability spaces $(E_n,\mathcal E_n,\mu_n)_{n\in\mathbb N}$ there is a unique probability measure $\mu$ on $\mathcal C_{\mathbb N}$ such that, for every finite $F$, its $F$-coordinate marginal is $\bigotimes_{n\in F}\mu_n$.

[F4] [[lem-bernoulli-and-binomial-mean-and-variance]]: If $X$ is Bernoulli$(p)$, then $\mathbb E[X]=p$ and $\operatorname{Var}(X)=p(1-p)$. If $S$ is binomial$(n,p)$, then $\mathbb E[S]=np,\qquad \operatorname{Var}(S)=np(1-p).$ These formulas include $p=0$, $p=1$, and $n=0$.

[F5] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

## Verification

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice, take the countable product of the two-point Bernoulli probability spaces with the prescribed $p_k$ (shift the product index by one). Its coordinates are independent with the required laws. Each has mean $p_k$ and variance $3/16$. Independence gives zero mixed centered moments, hence zero off-diagonal covariances. [F3, F2, F4, given, F5]

2.1 The row weak law with the first $n$ entries and normalizer $n$ gives centered second moment $n(3/16)/n^2=3/(16n)$ and convergence in probability to zero. Meanwhile $\mathbb ES_n/n=1/2$ for even $n$ and $1/2-1/(4n)$ for odd $n$, including $n=1$. For any $\varepsilon>0$ the deterministic error is eventually below $\varepsilon/2$, so the probability of $|S_n/n-1/2|>\varepsilon$ is at most the probability that the centered average exceeds $\varepsilon/2$ in absolute value, which tends to zero. [F1, step 1.1, algebra] ∎
