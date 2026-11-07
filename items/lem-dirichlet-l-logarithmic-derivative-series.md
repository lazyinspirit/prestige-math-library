---
id: lem-dirichlet-l-logarithmic-derivative-series
kind: lemma
title: The logarithmic derivative of a real Dirichlet L-function is a von Mangoldt series
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - def-dirichlet-l-function
  - thm-dirichlet-l-euler-product
  - thm-log-one-plus-x-power-series
  - thm-logarithm-slower-than-every-positive-power
  - thm-p-series-real-exponents
  - thm-uniform-derivative-limit-on-a-closed-interval
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - def-von-mangoldt-function
  - thm-fundamental-theorem-of-arithmetic
  - thm-dirichlet-series-absolute-half-plane-holomorphy
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jan-Hendrik Evertse, Analytic Number Theory: Prime Number Theory, Chapter 2"
      url: https://pub.math.leidenuniv.nl/~evertsejh/ant20-2.pdf
      locator: Theorem 2.1.2 and proof, printed pp. 76–77, termwise differentiation of a Dirichlet series with bounded partial sums; the Euler-product logarithmic derivative is derived locally below.
---

## Statement

Let $\psi$ be a real Dirichlet character modulo $m\ge1$. For every real $\sigma>1$,
$$-\frac{L'(\sigma,\psi)}{L(\sigma,\psi)}=\sum_{n\ge1}\frac{\Lambda(n)\psi(n)}{n^\sigma},$$
where $\Lambda$ is the von Mangoldt function and $L(\sigma,\psi)>0$.

## Facts & Assumptions

**Given:** A real Dirichlet character $\psi$ modulo $m\ge1$ and a real $\sigma>1$.

[F1] A Dirichlet character is completely multiplicative, vanishes on nonunits, and a real character takes values in $\{-1,0,1\}$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]]).

[F2] For $\operatorname{Re}s>1$, $L(s,\psi)=\prod_p(1-\psi(p)p^{-s})^{-1}$ and the product is nonzero ([[def-dirichlet-l-function]], [[thm-dirichlet-l-euler-product]]).

[F3] For real $|u|<1$, $-\log(1-u)=\sum_{k\ge1}u^k/k$ ([[thm-log-one-plus-x-power-series]]).

[F4] On every compact interval $[a,b]\subset(1,\infty)$, both $\sum_{p}\sum_{k\ge1}p^{-ka}/k$ and $\sum_{p}\sum_{k\ge1}(\log p)p^{-ka}$ converge. The first is bounded by $C_a\sum_{n\ge2}n^{-a}$; for the second, $\sum_{k\ge1}p^{-ka}=p^{-a}/(1-p^{-a})\le C_a p^{-a}$, and $\log n\le C_a n^{(a-1)/2}$ for large $n$, so it is bounded by a convergent $p$-series ([[thm-logarithm-slower-than-every-positive-power]], [[thm-p-series-real-exponents]]).

[F5] If differentiable functions converge at one point and their derivatives converge uniformly on a closed interval, their limit is differentiable with the limiting derivative ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F6] The real logarithm is the inverse of the real exponential, is continuous with $\log'(x)=1/x$, and $(a^r)'=a^r\log a$ for $a>0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[def-real-power]], [[thm-real-power-continuity-and-derivatives]]).

[F7] $\Lambda(p^k)=\log p$ for primes $p$ and integers $k\ge1$, and $\Lambda(n)=0$ otherwise ([[def-von-mangoldt-function]]).

[F8] Every positive integer has a unique prime factorization, so each prime power $p^k$ corresponds to exactly one pair $(p,k)$ ([[thm-fundamental-theorem-of-arithmetic]]).

[F9] The Dirichlet series defining $L(s,\psi)$ is holomorphic and differentiable on $\operatorname{Re}s>1$ ([[def-dirichlet-l-function]], [[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

## Proof

**Given:** The real character and $\sigma>1$ in the statement.

1.1 For each prime $p$, $u_p:=\psi(p)\in\{-1,0,1\}$ by [F1]. On the real axis every Euler factor $(1-u_pp^{-\sigma})^{-1}$ is positive. The finite Euler products converge to $L(\sigma,\psi)>0$ by [F2]; continuity of $\log$ in [F6] and absolute convergence in [F4] therefore give $$\log L(\sigma,\psi)=G(\sigma):=\sum_p\sum_{k\ge1}\frac{\psi(p)^k}{k p^{k\sigma}}.$$ [F1, F2, F3, F4, F6, given, algebra]

1.2 Fix a compact interval $[a,b]\subset(1,\infty)$. For $N\ge2$, let $G_N(\sigma)$ be the finite sum of the terms in $G$ with $p^k\le N$. By the two absolute majorants in [F4], both sequences $G_N$ and $G_N'$ converge uniformly on $[a,b]$; indeed $(p^{-k\sigma})'= -k(\log p)p^{-k\sigma}$ by [F6]. The sequence $G_N(a)$ converges by [F4], so applying [F5] to these finite sums shows that $$G'(\sigma)=-\sum_p\sum_{k\ge1}\frac{\psi(p)^k\log p}{p^{k\sigma}}.$$ [F4, F5, F6, given]

2.1 By [F6] and step 1.1, $G'(\sigma)=L'(\sigma,\psi)/L(\sigma,\psi)$; differentiability is supplied by [F9]. By [F7] and [F8], the absolutely convergent prime-power sum in step 1.2 is exactly $-\sum_{n\ge1}\Lambda(n)\psi(n)n^{-\sigma}$. Rearranging gives the stated identity. [F6, F7, F8, F9, step 1.1, step 1.2, algebra] ∎

