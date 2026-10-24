---
id: cor-triangle-inequality-for-inner-product-norm
kind: corollary
title: "The inner-product norm is definite, homogeneous, and satisfies the triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-norm, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-complex-conjugate-real-imaginary-part-and-modulus]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

The function induced by an inner product satisfies, for all vectors $u,v$ and scalars $\lambda$,

$$\lVert v\rVert\ge0,\qquad \lVert v\rVert=0\Longleftrightarrow v=0,$$

$$\lVert\lambda v\rVert=|\lambda|\lVert v\rVert,\qquad \lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert.$$

## Facts & Assumptions

**Given:** Vectors $u,v$ in a real or complex inner product space and a scalar $\lambda$.

[L1] The induced norm is a nonnegative square root, and positive definiteness detects the zero vector ([[def-inner-product-norm]]).

[L2] The induced norm is homogeneous ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

[L3] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\lVert u\rVert\lVert v\rVert$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[L4] If $z=a+bi$, then $\operatorname{Re}z=a$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

## Proof

**Proof technique:** direct.

1.1 Nonnegativity and definiteness follow directly from [L1], and homogeneity is [L2]. [L1, L2]

1.2 Expanding and using conjugate symmetry gives $\lVert u+v\rVert^2=\lVert u\rVert^2+2\operatorname{Re}\langle u,v\rangle+\lVert v\rVert^2$. From [L4], $|z|^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2$, so $\operatorname{Re}z\le|z|$; now [L3] makes the expansion at most $(\lVert u\rVert+\lVert v\rVert)^2$. [L3, L4, algebra]

2.1 Both quantities in step 1.2 are nonnegative. If the left were larger, their squared order would also be larger, a contradiction. Hence the triangle inequality holds. [step 1.2, L1, algebra] ∎
