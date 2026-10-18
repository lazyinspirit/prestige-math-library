---
id: lem-sylvester-vectorization-isometry-and-kronecker-identity
kind: lemma
title: "Column vectorization is an isometry and represents the Sylvester map by a Kronecker sum"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-frobenius-matrix-norm]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations, SIAM Review 58(3), 2016"
      url: https://www.dm.unibo.it/~simoncin/matrixeq.pdf
    - title: "Elias Jarlebring, Numerical Methods for Lyapunov Equations, lecture notes in numerical linear algebra, 2017"
      url: https://people.kth.se/~eliasj/NLA/matrixeqs.pdf
---

## Statement

Let $F$ be $\mathbb R$ or $\mathbb C$, let $m,n\ge1$, let $A\in F^{m\times m}$, $B\in F^{n\times n}$, and let $X=[x_1\ \cdots\ x_n]\in F^{m\times n}$. Define $\operatorname{vec}(X)$ by stacking the columns $x_1,\ldots,x_n$. For compatible matrices, define $P\otimes Q$ as the block matrix whose $(i,j)$ block is $p_{ij}Q$. Then

$$\|\operatorname{vec}(X)\|_2=\|X\|_F,\qquad \operatorname{vec}(AX+XB)=(I_n\otimes A+B^T\otimes I_m)\operatorname{vec}(X).$$

## Facts & Assumptions

**Given:** The dimensions and matrices in the statement.

[F1] [[def-frobenius-matrix-norm]]: $\|X\|_F^2=\sum_{i=1}^{m}\sum_{j=1}^{n}|x_{ij}|^2$.

## Proof


1.1 By the definition of column stacking, $\|\operatorname{vec}(X)\|_2^2=\sum_{j=1}^{n}\sum_{i=1}^{m}|x_{ij}|^2=\|X\|_F^2$ by [F1]. Both sides are nonnegative, so taking square roots proves the isometry claim. [given, F1, algebra]

1.2 The $j$th block of $(I_n\otimes A)\operatorname{vec}(X)$ is $Ax_j$, which is the $j$th column of $AX$. Hence $\operatorname{vec}(AX)=(I_n\otimes A)\operatorname{vec}(X)$. [given, algebra]

1.3 The $j$th column of $XB$ is $\sum_{\ell=1}^{n}b_{\ell j}x_\ell$. The $j$th block of $(B^T\otimes I_m)\operatorname{vec}(X)$ is the same sum because its $(j,\ell)$ block is $b_{\ell j}I_m$. Thus $\operatorname{vec}(XB)=(B^T\otimes I_m)\operatorname{vec}(X)$. [given, algebra]

2.1 Adding the identities in steps 1.2 and 1.3 gives the displayed Sylvester-map representation, completing both claims. [step 1.2, step 1.3, algebra] ∎
