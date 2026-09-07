---
id: thm-khinchin-weak-law-for-iid-integrable-variables
title: "Khinchin weak law for integrable IID variables"
kind: theorem
status: published
origin: pipeline
deps: ["def-identically-distributed-and-iid-random-variables", "def-partial-sums-and-sample-means", "def-truncation-at-a-fixed-level", "cor-iid-finite-variance-weak-law", "lem-measurable-functions-preserve-independence", "thm-dominated-convergence", "cor-markov-inequality-for-random-variables", "thm-finite-measure-l-r-includes-into-l-p-for-p-less-r", "cor-expectation-linearity-monotonicity-and-modulus-bound"]
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
    - title: "Theorem 3.3, first proof, pp. 56\u201357"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
    - title: "Theorem 2.2.14, pp. 64\u201365"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "For fixed A, the centered truncated average has L1 norm at most its L2 norm, tending to zero. The residual centered average has L1 norm at most 2 E[|X_1|1_{|X_1|>A}]. Let n then A tend to infinity; Markov gives probability convergence."
---

## Statement

If $(X_k)_{k\ge1}$ are IID real random variables and $\mathbb E|X_1|<\infty$, then, with $S_n=\sum_{k=1}^nX_k$ and $\mu=\mathbb EX_1$,
$$\mathbb E|S_n/n-\mu|\longrightarrow0.$$
Consequently $S_n/n\to\mu$ in probability.

## Facts & Assumptions

[F1] [[def-truncation-at-a-fixed-level]]: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is $X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$ The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by thm-arithmetic-and-lattice-operations-preserve-measurability. Thus $X^{(A)}$ is a real random variable as in def-random-element-and-real-random-variable. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

[F2] [[cor-iid-finite-variance-weak-law]]: Let $(X_k)_{k\ge1}$ be IID square-integrable real random variables, with $\mu=\mathbb EX_1$ and $\sigma^2=\operatorname{Var}(X_1)$. For $S_n=\sum_{k=1}^nX_k$, $\mathbb E|S_n/n-\mu|^2=\sigma^2/n,$ and $S_n/n\to\mu$ in $L^2$ and in probability. Also $\mathbb P(|S_n/n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$ for $\varepsilon>0$.

[F3] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F4] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then $f\in L^1(\mu)$, $\int|f_n-f|\,d\mu\longrightarrow0,$ and hence $\int f_n\,d\mu\longrightarrow\int f\,d\mu.$

[F5] [[cor-markov-inequality-for-random-variables]]: If $X:\Omega\to[0,+\infty]$ is a nonnegative random variable on a probability space and $a>0$, then $\mathbb P(X\ge a)\le\frac{\mathbb E[X]}{a}.$

[F6] [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]: Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<\infty$. 1. If $1\le p<r<\infty$ and $f\in\mathcal L^r(\mu)$, then $f\in\mathcal L^p(\mu)$ and $\|f\|_p\le\mu(X)^{1/p-1/r}\|f\|_r.$ 2. If $1\le p<\infty$ and $f\in L^\infty(\mu)$, then $f\in\mathcal L^p(\mu)$ and $\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty.$

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Let $X,Y$ be integrable real or complex random variables on one probability space. 1. For scalars $a,b$, $\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$ 2. If $X$ and $Y$ are real-valued and $X\le Y$ almost surely, then $\mathbb E[X]\le\mathbb E[Y].$ 3. $|\mathbb E[X]|\le\mathbb E[|X|].$

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Fix $A>0$ and set $Y_k=X_k^{(A)}$, $R_k=X_k-Y_k$. The $Y_k$ are bounded IID variables: measurable transformations preserve independence and their laws remain equal by inverse images. The finite-variance result gives $\|n^{-1}\sum_k(Y_k-\mathbb EY_k)\|_2=\sqrt{\operatorname{Var}(Y_1)/n}$. [F1, F3, F2, given]

2.1 On a probability space the $L^1$ norm is at most the $L^2$ norm. Finite linearity, the triangle inequality and the modulus bound give $\mathbb E|n^{-1}\sum_k(R_k-\mathbb ER_k)|\le2\mathbb E|R_1|$. Therefore $\mathbb E|S_n/n-\mu|\le\sqrt{\operatorname{Var}(Y_1)/n}+2\mathbb E(|X_1|\mathbf1_{\{|X_1|>A\}})$. [F6, F7, step 1.1, algebra]

3.1 For each fixed $A$ let $n\to\infty$ in this bound. Then let $A$ run through positive integers tending to infinity. The residual is dominated by the integrable $|X_1|$ and tends pointwise to zero, so dominated convergence makes the remaining bound tend to zero. Finally Markov applied to $|S_n/n-\mu|$ proves convergence in probability. No division by a moment occurs, so constant or zero variables are included. [F4, F5, step 2.1] ∎
