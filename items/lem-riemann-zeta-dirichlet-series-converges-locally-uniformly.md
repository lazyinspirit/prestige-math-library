---
id: lem-riemann-zeta-dirichlet-series-converges-locally-uniformly
kind: lemma
title: "The Dirichlet series for zeta converges absolutely and locally uniformly on the half-plane $\\operatorname{Re}s>1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-zeta-function, def-complex-exponential, def-natural-logarithm, thm-weierstrass-m-test-for-complex-function-series, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

For every complex number $s$ with $\operatorname{Re}s>1$, the series

$$\sum_{n=1}^\infty n^{-s},\qquad n^{-s}:=\exp(-s\log n),$$

converges absolutely. Moreover, if $K\subseteq\{s\in\mathbb C:\operatorname{Re}s>1\}$
is compact, then the same series converges uniformly on $K$.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\{s\in\mathbb C:\operatorname{Re}s>1\}$.

[L1] The complex exponential is $\exp z=\sum_{m\ge0}z^m/m!$
([[def-complex-exponential]]).

[L2] The real logarithm is defined on $(0,\infty)$, so $\log n$ is defined for
every integer $n\ge1$ ([[def-natural-logarithm]]).

[L3] If $|f_n(s)|\le M_n$ on a set and $\sum M_n$ converges, then
$\sum f_n$ converges uniformly there ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L4] For rational $p>1$, the series $\sum_{n\ge1}n^{-p}$ converges
([[thm-p-series-rational]]).

## Proof

**Proof technique:** direct.

1.1 Because $K$ is compact and lies in the open half-plane $\operatorname{Re}s>1$, there is a real number $\sigma>1$ with $\operatorname{Re}s\ge\sigma$ for every $s\in K$. For $n\ge1$ and $s\in K$, [L1] and [L2] give $n^{-s}=\exp(-s\log n)$, so $$|n^{-s}|=\exp(-\operatorname{Re}s\log n)\le\exp(-\sigma\log n)=n^{-\sigma}.$$ [given, L1, L2, choose, algebra]

2.1 Taking $\sigma>1$ rational if necessary, [L4] makes $\sum_{n\ge1}n^{-\sigma}$ convergent. Step 1.1 and [L3] therefore give uniform convergence of $\sum n^{-s}$ on $K$. Since $|n^{-s}|$ is bounded by the same summable majorant, the series also converges absolutely at each point of $K$, hence at each $s$ with $\operatorname{Re}s>1$. [step 1.1, L3, L4, algebra] ∎
