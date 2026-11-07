---
dependency_level: 3
id: lem-smooth-finite-zeta-density-sensitive-perron-formula
kind: lemma
title: Density-sensitive truncated Perron formula for the finite smooth Euler product
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- lem-smooth-counting-logarithmic-identity-and-finite-euler-product
- thm-truncated-perron-formula
- thm-complex-exponential-addition-and-real-extension
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Hildebrand and Tenenbaum, Integers without large prime factors, Lemma3.3 and proof, printed435-436
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
---

## Statement

For real $x,y\ge2$, $0<\sigma\le2$ and $T\ge1$, put $Z_y(s)=\prod_{p\le y}(1-p^{-s})^{-1}$. Then

$$\Psi(x,y)=\frac1{2\pi i}\int_{\sigma-iT}^{\sigma+iT}Z_y(s)\frac{x^s}{s}\,ds+R,$$

where, with an absolute implied constant,

$$|R|\ll1+\frac{x^\sigma Z_y(\sigma)}{\sqrt T}+\min\left\{\frac{x}{\sqrt T},\frac{x^\sigma}{\sqrt T}\int_{-\sqrt T}^{\sqrt T}|Z_y(\sigma+it)|\,dt\right\}.$$

The count uses $n\le x$ with a full weight at an integer endpoint; this is included in the error term. Powers of positive reals use their real logarithm.

## Statement references

[[lem-smooth-counting-logarithmic-identity-and-finite-euler-product]]

[[thm-truncated-perron-formula]]

[[thm-complex-exponential-addition-and-real-extension]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local result [[lem-smooth-counting-logarithmic-identity-and-finite-euler-product]] has its stated interface.

[F2] The local result [[thm-truncated-perron-formula]] has its stated interface.

[F3] The local result [[thm-complex-exponential-addition-and-real-extension]] has its stated interface.

## Proof

1.1 By [F1], $Z_y(s)$ is the absolutely convergent Dirichlet series of the smooth indicator for every $\Re s>0$. The truncated Perron formula [F2], with that indicator as coefficient, bounds the error by $C(1+x^\sigma\sum_{P^+(n)\le y}n^{-\sigma}\min\{1,(T|\log(x/n)|)^{-1}\})$, with the minimum interpreted as $1$ at $n=x$. The constant term covers the full versus half endpoint and the bounded $\sigma/T$ endpoint error. The portion with $|\log(x/n)|>1/\sqrt T$ is at most $x^\sigma Z_y(\sigma)/\sqrt T$. [given, F1, F2, F3, algebra]

2.1 Let $R_1=x^\sigma\sum_{P^+(n)\le y,\ |\log(x/n)|\le1/\sqrt T}n^{-\sigma}$. Its integers lie in $[xe^{-1/\sqrt T},xe^{1/\sqrt T}]$, an interval containing $O(1+x/\sqrt T)$ integers; each weight $(x/n)^\sigma$ is at most $e^2$. Thus $R_1\ll1+x/\sqrt T$. For another bound put $w(v)=(2\pi)^{-1}(\sin(v/2)/(v/2))^2$, with its continuous value at zero. Direct integration of the two linear pieces of the triangle gives $w(v)=(2\pi)^{-1}\int_{-1}^1(1-|t|)e^{itv}dt$. Moreover $w(v)$ has a positive absolute lower bound on $|v|\le1$. [given, F1, F2, F3, step 1.1, algebra]

3.1 Nonnegativity of $w$ implies $R_1\ll x^\sigma\sum_{P^+(n)\le y}n^{-\sigma}w(\sqrt T\log(x/n))$. Insert the triangle integral from step 2.1. Uniform absolute convergence of the Dirichlet series on this finite integration interval permits exchanging its sum and integral, so the last expression is at most $C x^\sigma\int_{-1}^1|Z_y(\sigma+it\sqrt T)|dt=Cx^\sigma T^{-1/2}\int_{-\sqrt T}^{\sqrt T}|Z_y(\sigma+it)|dt$. Combine this bound with the crude bound in step 2.1 and use $\min(1+a,b)\le1+\min(a,b)$ for nonnegative $a,b$. Together with step 1.1 this gives precisely the stated error, uniformly in every allowed parameter. [given, F1, F2, F3, step 2.1, algebra] ∎
