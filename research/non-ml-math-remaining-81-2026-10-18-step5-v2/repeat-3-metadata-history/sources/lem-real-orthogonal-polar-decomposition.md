---
id: lem-real-orthogonal-polar-decomposition
kind: lemma
title: Polar decomposition of a real indefinite orthogonal matrix
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 0
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 1 §6 and Chapter 2 §4.1"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
---

## Statement

Let $p,q\ge0$, $J=\operatorname{diag}(I_p,-I_q)$, and $A\in O(p,q)=\{A\in\operatorname{GL}_{p+q}(\mathbb R):A^TJA=J\}$. There are unique matrices $K$ and $P$ such that

$$A=KP,\qquad K\in O(p)\times O(q),\qquad P=(A^TA)^{1/2}>0.$$

Moreover $PJP=J$, $X=\log P$ is symmetric and satisfies $JXJ=-X$, and $K\exp(sX)\in O(p,q)$ for every real $s$. Thus $A$ is joined to its block-diagonal orthogonal factor $K$ by a path in $O(p,q)$; if $\det A=1$, the path lies in $SO(p,q)$.

## Facts & Assumptions

**Given:** The matrix $J$ and $A^TJA=J$ as in the Statement.

[F1] Every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof


**Proof technique:** direct.

1.1 If $p+q=0$, there is one $0\times0$ matrix, and $A=K=P=I_0$, $X=0$ satisfy every assertion. If $p+q=1$, write $A=(a)$; $A^TJA=J$ gives $a^2=1$, so $P=(1)$, $K=A$, and $X=0$, and the factorization and path assertions follow. For $p+q\ge2$, set $M=A^TA$. For $x\ne0$, $x^TMx=\|Ax\|^2>0$, so $M$ is positive definite and symmetric. The relation $A^TJA=J$ gives $A^{-1}=JA^TJ$ and, by transposition, $A^{-T}=JAJ$. Hence $JMJ=JA^TAJ=A^{-1}A^{-T}=M^{-1}$. [given, algebra, construct]

2.1 By [F1], diagonalize $M$ in an orthonormal basis; all its eigenvalues $\lambda_i$ are positive. Define $P$ to have eigenvalues $\sqrt{\lambda_i}$ in that basis. Then $P$ is symmetric positive definite and $P^2=M$. If $R$ is another symmetric positive definite root, it commutes with $M=R^2$ and preserves each eigenspace of $M$; on the $\lambda$-eigenspace, [F1] diagonalizes $R$ and positivity forces every eigenvalue to be $\sqrt\lambda$. Thus $R=P$. [F1, step 1.1, construct]

3.1 Both $JPJ$ and $P^{-1}$ are symmetric positive definite roots of $M^{-1}=JMJ$. Uniqueness in step 2.1 yields $JPJ=P^{-1}$, hence $PJ=JP^{-1}$ and $P^{-1}JP^{-1}=J$. [step 1.1, step 2.1, algebra]

4.1 Put $K=AP^{-1}$. Then $K^TK=P^{-1}A^TAP^{-1}=I$, and $K^TJK=P^{-1}A^TJAP^{-1}=P^{-1}JP^{-1}=J$. Thus $K$ is Euclidean orthogonal and preserves $J$; multiplying $K^TJK=J$ by $K$ shows $JK=KJ$, so $K$ is block diagonal in the positive and negative coordinates. The factorization is unique because its positive factor must be the positive square root of $A^TA$. [step 1.1, step 3.1, algebra]

5.1 Diagonalize $P$ by [F1] and define $X=\log P$ by replacing each positive eigenvalue $\lambda$ by $\log\lambda$. Then $X$ is symmetric. Conjugation by $J$ preserves the matrix logarithm, so $JXJ=\log(JPJ)=\log(P^{-1})=-X$. Consequently $J\exp(sX)J=\exp(-sX)=\exp(sX)^{-1}$; because $K$ commutes with $J$ and is orthogonal, $K\exp(sX)$ preserves $J$. At $s=0$ this is $K$ and at $s=1$ it is $A$. Its determinant is constant and equals $\det A$, proving the path assertion. [F1, step 3.1, step 4.1, algebra] ∎

## Remarks

When $p,q>0$, $K$ lies in $S(O(p)\times O(q))$ if $A\in SO(p,q)$. The two possible common signs of $\det K|_{\mathbb R^p}$ and $\det K|_{\mathbb R^q}$ are analyzed in [[lem-real-spin-norm-detects-components]].
