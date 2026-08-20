---
id: cex-boundary-convergent-power-series-no-larger-holomorphic-disc
kind: counterexample
title: "Uniform convergence on the closed unit disc does not give a holomorphic extension to a larger disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weierstrass-m-test-for-complex-function-series, thm-p-series-rational, thm-termwise-differentiation-of-complex-power-series, thm-extreme-value-metric, cor-complex-differentiability-implies-continuity, def-complex-series-power-series-and-absolute-convergence, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-heine-borel-rn, lem-complex-conjugation-and-modulus-laws, thm-cauchy-integral-formula-higher-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Remark 2.25"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** If a complex power series converges uniformly on a closed disc, its sum extends holomorphically to some larger centred disc.

The series

$$F(z):=\sum_{n\ge1}\frac{z^n}{n^2}$$

converges uniformly on $|z|\le1$, but its sum on $|z|<1$ has no holomorphic extension to any disc centred at $0$ with radius greater than $1$.

## Facts & Assumptions

**Given:** The complex power series defining $F$, with its partial sums and convergence interpreted as in [[def-complex-series-power-series-and-absolute-convergence]].

[L1] If $|f_n(x)|\le M_n$ and the real series $\sum M_n$ converges, then the complex function series $\sum f_n$ converges absolutely pointwise and uniformly ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L2] The series $\sum_{n\ge1}1/n^2$ converges, while the harmonic series $\sum_{n\ge1}1/n$ diverges ([[thm-p-series-rational]]).

[L3] Inside the radius of convergence, a complex power series may be differentiated term by term: $(\sum_{n\ge0}c_nz^n)'=\sum_{n\ge1}nc_nz^{n-1}$ ([[thm-termwise-differentiation-of-complex-power-series]]).

[L4] A continuous real-valued function on a nonempty compact metric space is bounded and attains a maximum ([[thm-extreme-value-metric]]).

[L5] A complex differentiable function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L6] Complex polynomials, including every monomial, are holomorphic ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L7] Closed bounded subsets of Euclidean space, including the interval $[0,1]$, are compact ([[thm-heine-borel-rn]]).

[L8] Complex modulus is multiplicative and satisfies the triangle inequality, hence $||u|-|v||\le|u-v|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L9] Every holomorphic function has complex derivatives of every order locally ([[thm-cauchy-integral-formula-higher-derivatives]]).

## Counterexample

**Proof technique:** contradiction.

1.1 On $|z|\le1$, one has $|z^n/n^2|\le1/n^2$, so [L1] and the convergent series in [L2] give absolute pointwise and uniform convergence of the displayed series. [L1, L2]

1.2 For real $0<r<1$, [L3] gives $F'(r)=\sum_{n\ge1}r^{n-1}/n$. [L3]

1.3 Suppose, for contradiction, that a function $G$ holomorphic on $D(0,S)$ for some $S>1$ agrees with $F$ on $|z|<1$. By [L9], $G'$ is holomorphic near $[0,1]$, hence continuous by [L5]; [L8] makes $|G'|$ continuous, [L7] makes $[0,1]$ compact, and [L4] bounds $|G'|$ there. [L4, L5, L7, L8, L9, assume-contra]

2.1 Given $B>0$, divergence in [L2] supplies $N\ge2$ with $\sum_{n=1}^{N}1/n>2B$; by [L6] and [L5], the finitely many monomials $r^{n-1}$ are continuous at $r=1$, so choose $0<r<1$ with $r^{n-1}>1/2$ for every $1\le n\le N$, and step 1.2 then gives $F'(r)>\frac12\sum_{n=1}^{N}1/n>B$. [step 1.2, L2, L5, L6, choose]

3.1 Step 2.1 makes $|F'(r)|=|G'(r)|$ exceed every proposed bound for points $0<r<1$, contradicting step 1.3; no such extension exists, and the refuted claim is false. [step 2.1, step 1.3, discharge-contradiction] ∎
