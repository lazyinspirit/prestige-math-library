---
id: def-chebyshev-weighted-spectral-sobolev-scale
kind: definition
title: "Chebyshev weighted spectral Sobolev scale and projection"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice axiom is used; the norm is a weighted square-summable coefficient norm."
verification:
  precheck: n/a
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8 and Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 61–67 and 105–118 / PDF pp. 67–73 and 111–124; weighted polynomial projection and Chebyshev-Galerkin approximation."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev cosine coefficients and polynomial approximation."
---

## Definition

For $s\ge0$, define $H_C^s$ to be the completion of finite real Chebyshev sums $p=\sum_{n=0}^{M}c_nT_n$ in the norm
$$
\|p\|_{H_C^s}^2=\pi|c_0|^2+\frac{\pi}{2}\sum_{n=1}^{M}(1+n^2)^s|c_n|^2.
$$
By [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]], the coefficients of a finite sum are unique and this is a norm. At $s=0$, this norm on finite sums is the arcsine-weighted norm from [[def-chebyshev-arcsine-weighted-l2-pairing]]. This is the spectral Sobolev scale for the named weight and domain; it is defined by Chebyshev coefficients, and no equivalence with an unweighted derivative-based Sobolev norm is asserted.

Identify the completion isometrically with the weighted coefficient sequence space
$$
\left\{(c_n)_{n\ge0}:\ c_n\in\mathbb R\text{ for every }n,\ \pi|c_0|^2+\frac{\pi}{2}\sum_{n\ge1}(1+n^2)^s|c_n|^2<\infty\right\},
$$
so $u=\sum_{n\ge0}c_nT_n$ denotes its coefficient representation in the completion; it does not assert pointwise convergence of the series. The norm of a completion element is the completion norm, given by the displayed weighted coefficient sum.

At $s=0$, denote this completion by $L_C^2:=H_C^0$ and define
$$
\|u\|_C^2:=\|u\|_{H_C^0}^2=\pi|c_0|^2+\frac{\pi}{2}\sum_{n\ge1}|c_n|^2.
$$
By the orthogonality lemma, this is the unique norm extension from finite sums of the arcsine-weighted norm of [[def-chebyshev-arcsine-weighted-l2-pairing]]. Since $(1+n^2)^s\ge1$ for $s\ge0$, every $H_C^s$ embeds continuously in $L_C^2$, so $\|u\|_C$ is defined for every $u\in H_C^s$, including when $s=0$.

If an element has a continuous representative given by a uniformly convergent Chebyshev series, its arcsine integral norm agrees with this completion norm: for continuous $h$, the defining pairing gives $\|h\|_C\le\sqrt\pi\|h\|_\infty$, so uniform convergence implies convergence in the arcsine norm as well.

For $u=\sum_{n\ge0}c_nT_n$ in this coefficient completion, define the degree-$N$ orthogonal projection by
$$
\Pi_Nu=\sum_{n=0}^{N}c_nT_n.
$$
The projection is well-defined by coefficient truncation and the positive coefficient norm above.

