---
id: def-expander-prereq-symmetric-coordinate-metrics
kind: definition
title: Independent-entry coordinates, convexity and Lipschitz constants
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:lem-symmetric-matrix-frobenius-isometry
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:def-convex-and-strictly-convex-functions-on-euclidean-sets
  - math:def-lipschitz-holder-contraction
  - math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - math:prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
dependency_roles:
  math:lem-symmetric-matrix-frobenius-isometry: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:def-convex-and-strictly-convex-functions-on-euclidean-sets: mathematical-premise
  math:def-lipschitz-holder-contraction: mathematical-premise
  math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  math:prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $n\ge1$ be an integer and $N=\binom n2$. Label the coordinates of $x\in\mathbb R^N$ by pairs $1\le i<j\le n$. Let $\operatorname{Sym}_n$ be the real symmetric $n\times n$ matrices, and define $T:\mathbb R^N\to\operatorname{Sym}_n$ by $T(x)_{ij}=T(x)_{ji}=x_{ij}$ for $i<j$ and $T(x)_{ii}=0$.

Use the Euclidean coordinate norm $\|x\|_2=(\sum_{i<j}x_{ij}^2)^{1/2}$ and distance $\|x-y\|_2$. For a real matrix $A$, its Frobenius norm is $\|A\|_F=(\sum_{i,j}A_{ij}^2)^{1/2}$, and its operator norm is $\|A\|_{\mathrm{op}}=\max_{\|v\|_2=1}\|Av\|_2$. These conventions give $\|T(x)-T(y)\|_F^2=2\|x-y\|_2^2$.

For a fixed real $n\times n$ matrix $C$, define $f_C(x)=\|T(x)-C\|_{\mathrm{op}}$. A function $f$ is convex if $f((1-t)x+ty)\le(1-t)f(x)+tf(y)$ for $0\le t\le1$, and is $L$-Lipschitz in this coordinate metric if $|f(x)-f(y)|\le L\|x-y\|_2$ for all $x,y$. The function $f_C$ is convex and has least Lipschitz constant $L_n=\sqrt{2(n-1)/n}$; for $n=1$ this constant is zero. Restrictions to coordinate boxes retain this upper bound, although their least constant can be smaller.

## Definition references

[[math:lem-symmetric-matrix-frobenius-isometry]]

[[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[[math:def-convex-and-strictly-convex-functions-on-euclidean-sets]]

[[math:def-lipschitz-holder-contraction]]

## Justification

The coordinate formulas determine a unique linear map $T$. The Frobenius identity follows by counting each off-diagonal entry twice, equivalently by the symmetric-vectorization isometry [[math:lem-symmetric-matrix-frobenius-isometry]]. The operator norm is defined by [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]; the Euclidean triangle inequality and homogeneity imply its triangle inequality and homogeneity. Thus the norm of an affine matrix-valued map is convex, and the reverse triangle inequality gives $|f_C(x)-f_C(y)|\le\|T(x-y)\|_{\mathrm{op}}$.

For $z\in\mathbb R^N$, the matrix $T(z)$ is self-adjoint by [[math:prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]. The real spectral theorem [[math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] gives a unit eigenvector $v$ whose eigenvalue has absolute value $\|T(z)\|_{\mathrm{op}}$: expand unit vectors in an orthonormal eigenbasis to obtain this norm formula. By Cauchy–Schwarz [[math:thm-cauchy-schwarz-and-the-euclidean-norm]], $|v^TT(z)v|\le\|z\|_2(4\sum_{i<j}v_i^2v_j^2)^{1/2}$. Since $\sum_i v_i^2=1$, the squared second factor is $2(1-\sum_i v_i^4)\le2(n-1)/n$; the last inequality is Cauchy–Schwarz applied to $(v_i^2)$ and the all-ones vector. Therefore $\|T(z)\|_{\mathrm{op}}\le L_n\|z\|_2$, establishing the stated Lipschitz bound.

For $n\ge2$, take $z_{ij}=1$ for every $i<j$. Then $T(z)=J-I$, where $J$ is the all-ones matrix. It has eigenvalue $n-1$ on the all-ones vector and eigenvalue $-1$ on its orthogonal complement, so $\|T(z)\|_{\mathrm{op}}/\|z\|_2=(n-1)/\sqrt{n(n-1)/2}=L_n$. For any fixed $C$, the reverse triangle inequality gives $f_C(tz)\ge t\|T(z)\|_{\mathrm{op}}-\|C\|_{\mathrm{op}}$ for $t>0$, while $f_C(0)=\|C\|_{\mathrm{op}}$. Dividing $f_C(tz)-f_C(0)$ by $t\|z\|_2$ and letting $t\to\infty$ shows that no smaller global Lipschitz constant works. For $n=1$, the coordinate space has one point and $T=0$, so the least constant is zero.
