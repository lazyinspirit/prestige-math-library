---
id: lem-author-47d4423675aa-outlier-error-transfer
title: A fixed outlier gap dominates the critical-source error
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-47d4423675aa-rank-one-lower-edge
  - lem-author-47d4423675aa-entropy-rational-gap
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-real-power
  - math:def-natural-logarithm
  - math:thm-natural-logarithm-laws
  - math:thm-exponential-is-strictly-increasing
  - math:lem-probability-measure-basic-identities
  - math:def-divergence-to-infinity
  - math:def-probability-measure
  - def-expander-prereq-vertex-hilbert-space
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  lem-author-47d4423675aa-rank-one-lower-edge: mathematical-premise
  lem-author-47d4423675aa-entropy-rational-gap: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-real-power: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:lem-probability-measure-basic-identities: mathematical-premise
  math:def-divergence-to-infinity: mathematical-premise
  math:def-probability-measure: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement

Let $d_n>0$, $\beta_n\ge9/4$ and $p_n\ge0$ be deterministic real sequences with $d_n\to\infty$. For each $n$, let $(\Omega_n,\mathcal F_n,\mathbb P_n)$ be a probability space, let $m_n\ge1$ be a deterministic integer, and let $A_n$ assign a real symmetric $m_n\times m_n$ matrix to every outcome in $\Omega_n$. Let $E_n\in\mathcal F_n$ satisfy $\mathbb P_n(E_n)\to1$. Write $\lambda_{\min}$ for the least eigenvalue, $\|\cdot\|$ for the vertex Hilbert-space operator norm, $J$ for the all-ones matrix of order $m_n$, and $\Lambda(t)=t/\sqrt{t-1}$ for $t\ge2$.

Let $C,c,\theta>0$ be fixed. Suppose that at every outcome in $E_n$, $|\lambda_{\min}(A_n)/\sqrt{d_n}+\Lambda(\beta_n)|\le C(d_n^{-c(\Lambda(\beta_n)-2)}+d_n^{-\theta/2})$. Put $\Delta_n=A_n-p_nJ$ and $g=9/(2\sqrt5)-2>0$. Assume that the set $H_n=\{\omega\in\Omega_n:\|\Delta_n(\omega)\|\ge(2+g/2)\sqrt{d_n}\}$ belongs to $\mathcal F_n$. Then $\mathbb P_n(H_n)\to1$.

## Statement references

[[lem-author-47d4423675aa-rank-one-lower-edge]]

[[lem-author-47d4423675aa-entropy-rational-gap]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[math:def-real-power]]

[[math:def-natural-logarithm]]

[[math:thm-natural-logarithm-laws]]

[[math:thm-exponential-is-strictly-increasing]]

[[math:lem-probability-measure-basic-identities]]

[[math:def-divergence-to-infinity]]

[[math:def-probability-measure]]

[[def-expander-prereq-vertex-hilbert-space]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Facts & Assumptions

[F1] The all-ones centering satisfies $\|A-pJ\|\ge-\lambda_{\min}(A)$ for every real symmetric matrix of positive finite order and $p\ge0$. [[lem-author-47d4423675aa-rank-one-lower-edge]]

[F2] For $t\ge9/4$ the function $\Lambda(t)=t/\sqrt{t-1}$ is at least $2+g$, with $g>0$. [[lem-author-47d4423675aa-entropy-rational-gap]]

[F3] The hypothesis $d_n\to\infty$ means that for every real $M$ there is an $N$ such that $d_n>M$ for every $n\ge N$. High probability means that the probabilities of the specified measurable events tend to one; limits and eventual inequalities use the ordinary real-sequence quantifiers. [[math:def-divergence-to-infinity]] [[def-expander-prereq-asymptotic-quantifiers]]

[F4] For $x>0$ and $r\in\mathbb R$, $x^r=\exp(r\log x)$. The exponential is strictly increasing, the logarithm is strictly increasing on $(0,\infty)$, $\log1=0$, and $\log(\exp u)=u$ and $\exp(\log x)=x$ on their stated domains. [[math:def-real-power]] [[math:def-natural-logarithm]] [[math:thm-natural-logarithm-laws]] [[math:thm-exponential-is-strictly-increasing]]

[F5] In a probability space, measurable events $B\subseteq D$ satisfy $\mathbb P(B)\le\mathbb P(D)$; in particular their probabilities lie in $[0,1]$. [[math:lem-probability-measure-basic-identities]] [[math:def-probability-measure]]

[F6] The finite vertex Hilbert space has norm $\|v\|_2=(\sum_i|v_i|^2)^{1/2}$. On this nonzero space, a matrix $T$ has induced operator norm $\|T\|=\max_{\|v\|_2=1}\|Tv\|_2$. [[def-expander-prereq-vertex-hilbert-space]] [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove $\mathbb P_n(H_n)\to1$.

1.1 Fix $a>0$ and $\varepsilon>0$. Set $M=\max\{1,\exp(-\log(\varepsilon)/a)\}$. Since $d_n\to\infty$, eventually $d_n>M$. By [F4], $\log d_n> -\log(\varepsilon)/a$, hence $0<d_n^{-a}=\exp(-a\log d_n)<\exp(\log\varepsilon)=\varepsilon$. Thus $d_n^{-a}\to0$ for each fixed $a>0$. [F3, F4, given, algebra]

2.1 By [F2], $\Lambda(\beta_n)-2\ge g>0$. Eventually $d_n\ge1$; then $\log d_n\ge0$ by [F4], so $d_n^{-c(\Lambda(\beta_n)-2)}\le d_n^{-cg}$. Apply step 1.1 to the positive exponents $cg$ and $\theta/2$, with $\varepsilon=g/(4C)$ for each. Eventually $C(d_n^{-cg}+d_n^{-\theta/2})<g/2$. At every outcome in $E_n$, the assumed error inequality therefore gives $-\lambda_{\min}(A_n)/\sqrt{d_n}\ge\Lambda(\beta_n)-g/2\ge2+g/2$. [F2, F3, F4, given, step 1.1, algebra]

3.1 Using the norm convention in [F6], apply [F1] at every outcome in $E_n$ to obtain $\|\Delta_n\|\ge(2+g/2)\sqrt{d_n}$ for all sufficiently large $n$. Thus $E_n\subseteq H_n$. Both sets are measurable by hypothesis, so [F5] gives $\mathbb P_n(E_n)\le\mathbb P_n(H_n)\le1$. For each $\varepsilon>0$, eventually $\mathbb P_n(E_n)>1-\varepsilon$ by [F3]; consequently $1-\varepsilon<\mathbb P_n(H_n)\le1$. This proves the claimed limit. [F1, F3, F5, F6, given, step 2.1, algebra] ∎
