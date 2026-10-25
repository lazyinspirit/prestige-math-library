---
id: ex-neural-operator-grid-refinement-vs-fixed-grid-network
kind: example
title: "A kernel integral has a mesh-refinement limit while a fixed-grid map needs a separate interface"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-neural-operator
  - alg-neural-operator-mesh-discretization
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Definition 4 and Theorem 8; fixed-grid comparison in §1.2"
---

## Example

On the open domain $D=(0,1)$, use the continuous representatives $a\in C([0,1])$ and $G(a)\in C([0,1])$, and define $G(a)(x)=\int_0^1a(y)\,dy$ for every $x\in[0,1]$. Its midpoint-mesh realization with $n$ cells is the constant output $G_n(a)(x)=\frac1n\sum_{j=1}^n a((j-\frac12)/n)$. For a fixed continuous input $a$, these outputs converge uniformly in $x$ to $G(a)$. By contrast, the identity map $F_n:\mathbb R^n\to\mathbb R^n$ on a length-$n$ vector is defined on a different input and output space at each $n$; without an additional reconstruction rule it is not a single function-space operator that accepts arbitrary meshes and can be queried at arbitrary output points.

## Example references
[Kovachki et al., Definition 4, Theorem 8, and §1.2: continuum operators versus fixed-grid maps](https://arxiv.org/pdf/2108.08481)

[Kovachki et al., Appendix E: uniform Riemann-sum convergence for operator layers](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** A continuous function $a:[0,1]\to\mathbb R$, the integral operator $G$, and the midpoint quadrature rule in the Example.

[F1] A continuous function on the compact interval $[0,1]$ is uniformly continuous.

## Verification

**Proof strategy:** estimate each midpoint cell error by the modulus of continuity.

1.1 Let $I_j=[(j-1)/n,j/n]$ and define $\omega_a(\delta)=\sup\{|a(x)-a(y)|:x,y\in[0,1],\ |x-y|\le\delta\}$. For each $y\in I_j$, $|y-(j-\frac12)/n|\le1/(2n)$, so $$\left|\int_{I_j}a(y)\,dy-\frac1n a((j-\tfrac12)/n)\right|\le\frac1n\omega_a(1/(2n)).$$ Summing over $j$ gives $|G(a)(x)-G_n(a)(x)|\le\omega_a(1/(2n))$ for every $x$. [given, algebra]

2.1 By [F1], $\omega_a(\delta)\to0$ as $\delta\downarrow0$. The bound in step 1.1 is independent of $x$, so $G_n(a)\to G(a)$ in $C([0,1])$. The dimension of $F_n$ changes with $n$ and its definition returns only a length-$n$ vector, so no arbitrary-point output or common function-space domain follows from $F_n$ alone. [step 1.1, F1, algebra] ∎

