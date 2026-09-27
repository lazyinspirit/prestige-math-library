---
id: cor-iid-finite-variance-weak-law
title: "IID finite-variance weak law"
kind: corollary
status: published
origin: pipeline
deps: ["def-identically-distributed-and-iid-random-variables", "thm-chebyshev-weak-law-for-uncorrelated-arrays", "thm-factorization-of-expectations-for-independent-variables"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Section 2.2.1, p. 58"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Theorem 3.2, pp. 55\u201356"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Independence factors mixed moments; apply row variance with b_n=n."
---

## Statement

Let $(X_k)_{k\ge1}$ be IID square-integrable real random variables, with $\mu=\mathbb EX_1$ and $\sigma^2=\operatorname{Var}(X_1)$. For $S_n=\sum_{k=1}^nX_k$,
$$\mathbb E|S_n/n-\mu|^2=\sigma^2/n,$$
and $S_n/n\to\mu$ in $L^2$ and in probability. Also $\mathbb P(|S_n/n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$ for $\varepsilon>0$.

## Facts & Assumptions

[F1] [[def-identically-distributed-and-iid-random-variables]]: Let $(X_i)_{i\in I}$ be random elements with the same measurable target $(E,\mathcal E)$. They are **identically distributed** if $\mathbb P(X_i\in B)=\mathbb P(X_j\in B)$ for all $i,j\in I$ and $B\in\mathcal E$, that is, their laws in def-law-or-distribution-of-a-random-element agree. They are **independent and identically distributed (IID)** if, in addition, the whole family is independent in def-independent-random-elements. Independence means mutual independence, not merely pairwise independence. No moment assumption is part of either definition. The empty family satisfies these universal conditions vacuously.

[F2] [[thm-chebyshev-weak-law-for-uncorrelated-arrays]]: For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If $v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$ then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

[F3] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 IID gives common mean and variance. For distinct indices, factorization of the integrable variables gives $\mathbb E(X_iX_j)=\mu^2$, hence zero covariance. Thus the first $n$ variables form an uncorrelated row. [F1, F3, given]

2.1 Apply the row result with $r_n=n$ and $b_n=n$. Its variance sum is $n\sigma^2$, so it gives the displayed identity, both convergences, and the probability bound. This calculation holds for $n=1$ and for $\sigma^2=0$. [F2, step 1.1, algebra] ∎
