---
id: lem-tgr-finite-gaussian-moment-envelope
kind: lemma
title: "Finite-dimensional Gaussian normalization and moment envelope"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps: 
  - thm-gaussian-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 0
---

## Statement

Let $d\ge1$ be an integer, $m>0$, and $0<\beta_0\le\beta_1<\infty$. For every $\beta\in[\beta_0,\beta_1]$,
$$\int_{\mathbb R^d}e^{-\beta|p|^2/(2m)}\,dp=\left(\frac{2\pi m}{\beta}\right)^{d/2}.$$
For every integer $s\ge0$, the polynomially weighted Gaussian has a uniform finite bound
$$\sup_{\beta\in[\beta_0,\beta_1]}\int_{\mathbb R^d}(1+|p|^{2s})e^{-\beta|p|^2/(2m)}\,dp<\infty.$$

## Facts & Assumptions

**Given:** An integer $d\ge1$, mass parameter $m>0$, and compact positive inverse-temperature interval $[\beta_0,\beta_1]$.

[F1] The one-dimensional Gaussian integral is $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$. ([[thm-gaussian-integral]])

[F2] For sigma-finite measure spaces and a nonnegative product-measurable function, Tonelli's theorem identifies the product integral with either iterated integral. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

1.1 In one dimension set $y=\sqrt{\beta/(2m)}\,x$; the substitution and [F1] give $\int_{\mathbb R}e^{-\beta x^2/(2m)}dx=\sqrt{2\pi m/\beta}$. Taking the product of $d$ such factors and applying [F2] repeatedly gives the displayed exact $d$-dimensional integral. [F1, F2, algebra]

1.2 Put $\alpha=\beta_0/(2m)>0$. For any integer $s\ge1$, the function $x\mapsto |x|^{2s}e^{-\alpha x^2/2}$ is bounded: it is continuous on $[-1,1]$ and tends to zero at both infinite ends. Hence $|x|^{2s}e^{-\alpha x^2}\le C_{s,\alpha}e^{-\alpha x^2/2}$; on $[-1,1]$ the same bound holds after increasing $C_{s,\alpha}$. By the scaled one-dimensional Gaussian integral, both $\int e^{-\alpha x^2}dx$ and $\int |x|^{2s}e^{-\alpha x^2}dx$ are finite. [F1, algebra]

2.1 For $\beta\ge\beta_0$, $e^{-\beta|p|^2/(2m)}\le e^{-\alpha|p|^2}$. If $s\ge1$, $(\sum_{i=1}^d p_i^2)^s\le d^{s-1}\sum_{i=1}^d|p_i|^{2s}$; for $s=0$ the weight is one. Factor the remaining coordinate Gaussians and apply [F2] and the one-dimensional bounds from step 1.2. The resulting finite upper bound depends only on $d,s,m,\beta_0$, not on $\beta$ in the stated interval. [F2, step 1.2, algebra] ∎
