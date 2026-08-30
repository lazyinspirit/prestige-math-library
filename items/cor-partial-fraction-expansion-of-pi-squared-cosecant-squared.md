---
id: cor-partial-fraction-expansion-of-pi-squared-cosecant-squared
kind: corollary
title: "The partial-fraction expansion of pi-squared cosecant-squared"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-mittag-leffler-expansion-of-pi-cotangent,
       cor-complex-trigonometric-and-hyperbolic-derivatives,
       thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Weber, Complex Analysis, Example 3.3.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §9.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C\setminus\mathbb Z$,

$$\pi^2\csc^2(\pi z)=\sum_{n\in\mathbb Z}\frac1{(z-n)^2}=\frac1{z^2}+\sum_{n\ge1}\left(\frac1{(z-n)^2}+\frac1{(z+n)^2}\right).$$

with locally uniform convergence on $\mathbb C\setminus\mathbb Z$.

## Facts & Assumptions

**Given:** The cotangent expansion on $\mathbb C\setminus\mathbb Z$.

[L1] On $\mathbb C\setminus\mathbb Z$, $\pi\cot(\pi z)=1/z+\sum_{n\ge1}2z/(z^2-n^2)$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

[L2] The derivative of $\cot$ is $-\csc^2$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[L3] Locally uniform convergence of holomorphic partial sums forces local-uniform convergence of their derivatives to the derivative of the limit ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Let $$S_N(z):=\frac1z+\sum_{n=1}^{N}\left(\frac1{z-n}+\frac1{z+n}\right).$$ By [L1], the holomorphic functions $S_N$ converge locally uniformly on $\mathbb C\setminus\mathbb Z$ to $\pi\cot(\pi z)$. On any compact set $K\subseteq\mathbb C\setminus\mathbb Z$, the derivatives satisfy $$S_N'(z)=-\frac1{z^2}-\sum_{n=1}^{N}\left(\frac1{(z-n)^2}+\frac1{(z+n)^2}\right),$$ and this derivative series converges uniformly on $K$ because its terms are $O(n^{-2})$ there. Therefore [L3] identifies the derivative of the limit with the displayed series on $K$. [L1, L3, given]

2.1 Differentiating [L1] gives $$-\pi^2\csc^2(\pi z)=-\frac1{z^2} -\sum_{n\ge1}\left(\frac1{(z-n)^2}+\frac1{(z+n)^2}\right)$$ by [L2]. Multiplying by $-1$ yields the claimed formula. [step 1.1, L2, algebra] ∎
