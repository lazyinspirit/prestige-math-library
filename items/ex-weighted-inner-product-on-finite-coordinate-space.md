---
id: ex-weighted-inner-product-on-finite-coordinate-space
kind: example
title: "Positive coordinate weights define an inner product and change lengths and projections"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-inner-product-space, def-inner-product-norm, def-monoid-finite-product, prop-orthogonal-projection-formula-and-linearity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For positive real weights $a_0,\ldots,a_{n-1}$,

$$\langle x,y\rangle_a=\sum_{k<n}a_kx_k\overline{y_k}$$

is an inner product on $\mathbb F^n$, where $\mathbb F=\mathbb R$ or $\mathbb C$. With weights $(1,4)$ on $\mathbb R^2$, the vector $(1,1)$ has length $\sqrt5$, and the projection of $(1,0)$ onto $\operatorname{span}(1,1)$ is $(1/5,1/5)$ rather than the standard projection $(1/2,1/2)$.

## Facts & Assumptions

**Given:** Positive weights $a_k$ and the displayed pairing.

[L1] A real or complex inner product is linear in the first argument, conjugate symmetric, positive on the diagonal, and definite ([[def-inner-product-space]]).

[L2] The induced norm is $\sqrt{\langle x,x\rangle}$ ([[def-inner-product-norm]]).

[L3] For an orthonormal basis $(e_i)_{i<r}$ of a subspace $W$ of a finite-dimensional inner product space, $P_Wv=\sum_{i<r}\langle v,e_i\rangle e_i$ ([[prop-orthogonal-projection-formula-and-linearity]]).

[L4] The empty finite sum has additive value zero ([[def-monoid-finite-product]]).

## Verification

**Proof technique:** direct.

1.1 Finite-sum algebra gives linearity, conjugate symmetry, and $\langle x,x\rangle_a=\sum_k a_k|x_k|^2\ge0$. Because every $a_k>0$, this sum vanishes exactly when every coordinate of $x$ vanishes, so [L1] holds. For $n=0$, [L4] leaves only the zero vector. [L1, L4, algebra]

2.1 For weights $(1,4)$, [L2] gives $\lVert(1,1)\rVert_a^2=1+4=5$. Put $u=(1,1)$, $v=(1,0)$ and $W=\operatorname{span}(u)$. Then $e=\lVert u\rVert_a^{-1}u$ is an orthonormal basis of $W$, so [L3] gives $P_Wv=\langle v,e\rangle_ae=\langle v,u\rangle_a\langle u,u\rangle_a^{-1}u$. Here $\langle v,u\rangle_a=1$ and $\langle u,u\rangle_a=5$, so $P_Wv=(1/5)u$. With both weights $1$ the same computation uses $\langle v,u\rangle=1$ and $\langle u,u\rangle=2$ and gives $(1/2)u$. [L2, L3, algebra] ∎
