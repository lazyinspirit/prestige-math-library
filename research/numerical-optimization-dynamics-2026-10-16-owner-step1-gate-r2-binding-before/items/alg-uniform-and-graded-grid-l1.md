---
id: alg-uniform-and-graded-grid-l1
kind: algorithm
title: Uniform-grid and graded-grid L1 discretization
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-caputo-derivative-and-fractional-integral]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Yumin Lin and Chuanju Xu, Finite difference/spectral approximations for the time-fractional diffusion equation, Journal of Computational Physics 225 (2007), §3
      url: https://sem.xmu.edu.cn/papers/jcp07.pdf
    - title: Bangti Jin, Raytcho Lazarov, and Zhi Zhou, An Analysis of the L1 Scheme for the Subdiffusion Equation with Nonsmooth Data, IMA Journal of Numerical Analysis, §1
      url: https://discovery.ucl.ac.uk/1459965/1/fracL1scheme_IMA_rev.pdf
---

## Definition

Input $0<\alpha<1$, $T>0$, an integer $N\ge1$, $\lambda\ge0$, an initial
value $U^0=u_0$, and forcing values $F^1,\ldots,F^N$. Choose either the
uniform grid $t_k=kh$ with $h=T/N$, or a strictly increasing grid
$0=t_0<t_1<\cdots<t_N=T$. A power-graded choice is
$t_k=T(k/N)^r$ with a specified $r\ge1$. Write $h_k=t_k-t_{k-1}$ and, for
$1\le k\le n\le N$, define the exact kernel weight

$$b_{n,k}:=\frac{(t_n-t_{k-1})^{1-\alpha}-(t_n-t_k)^{1-\alpha}}{\Gamma(2-\alpha)h_k}.$$

For a grid sequence $V^0,\ldots,V^N$, the L1 approximation to the Caputo
derivative at $t_n$ is

$$\delta_{\mathcal T}^\alpha V^n:=\sum_{k=1}^n b_{n,k}(V^k-V^{k-1}).$$

For each $n=1,\ldots,N$, return the value given by the scalar recurrence

$$U^n:=\frac{F^n+b_{n,1}U^0+\sum_{k=1}^{n-1}(b_{n,k+1}-b_{n,k})U^k}{b_{n,n}+\lambda}.$$

This solves $\delta_{\mathcal T}^\alpha U^n+\lambda U^n=F^n$. Every weight
$b_{n,k}$ is positive and $b_{n,n}=h_n^{-\alpha}/\Gamma(2-\alpha)>0$, so
the exact-real denominator is strictly positive. On a uniform grid, writing
$a_j=(j+1)^{1-\alpha}-j^{1-\alpha}$ gives

$$\delta_h^\alpha U^n=\frac{h^{-\alpha}}{\Gamma(2-\alpha)}\sum_{k=1}^n a_{n-k}(U^k-U^{k-1}).$$

The direct method uses every earlier increment at each step, hence uses
$N(N+1)/2$ history terms and stores $N+1$ solution values. An input outside
the stated parameter or grid domain returns `invalid-input`. A real-arithmetic
execution has no singular branch under these hypotheses; a finite-precision
implementation that cannot certify a scalar solve returns `solve-failed`
without reporting a value. The graded-grid procedure is an implementation
definition only; no optimal graded-mesh rate is part of this item.
