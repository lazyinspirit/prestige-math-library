---
id: ex-unitary-and-special-unitary-lie-groups
kind: example
title: Unitary and special unitary Lie groups
status: published
verification:
  audited: 2026-09-14
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-lie-group, def-lie-bracket-on-the-tangent-space-of-a-lie-group, cor-square-matrix-invertible-iff-determinant-is-a-unit, cor-inverse-matrix-by-adjugate, thm-constant-rank-theorem-for-manifolds, def-complex-conjugate-real-imaginary-part-and-modulus, def-determinant-of-a-square-matrix]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory classical matrix groups
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Chapter 2, printed pages 18–27
---

## Example

Assume $\mathrm{AC}_\omega$ and let $n\geq1$. Regarded as real Lie groups,

$$U(n)=\{A\in\operatorname{GL}_n(\mathbb C):A^*A=I\},\qquad SU(n)=\{A\in U(n):\det A=1\}$$

have Lie algebras

$$\mathfrak u(n)=\{X:X^*+X=0\},\qquad \mathfrak{su}(n)=\{X\in\mathfrak u(n):\operatorname{tr}X=0\}.$$

## Facts & Assumptions

**Given:** An integer $n\geq1$ and complex matrices viewed as a
finite-dimensional real vector space.

[F1] A Lie group has smooth multiplication and inversion, and its tangent
bracket is the bracket of left-invariant fields.
[[def-lie-group]]. [[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F2] Over the field $\mathbb C$, a positive-sized matrix is invertible
exactly when its determinant is nonzero, and its inverse is its adjugate
divided by that determinant.
[[cor-square-matrix-invertible-iff-determinant-is-a-unit]].
[[cor-inverse-matrix-by-adjugate]].

[F3] Complex conjugation supplies the conjugate transpose $A^*$.
[[def-complex-conjugate-real-imaginary-part-and-modulus]].

[F4] Constant-rank level sets are embedded with tangent kernel.
[[thm-constant-rank-theorem-for-manifolds]].

[F5] Determinant is the finite alternating sum over permutations.
[[def-determinant-of-a-square-matrix]].

[F6] Countable choice is inherited through the tangent-bracket supplier in
[F1]; the finite matrix and level-set calculations need no further choice.
[[def-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 Regard $M_n(\mathbb C)$ as $\mathbb R^{2n^2}$. The complex determinant is a finite polynomial in matrix entries by [F5], hence its real and imaginary parts are real polynomials. By [F2], $\operatorname{GL}_n(\mathbb C)=\{A:\det A\ne0\}$ is open in this real vector space; multiplication is polynomial and inversion is real smooth there by the adjugate formula. Thus it is a real Lie group by [F1]. Its left-invariant field with identity value $X$ is $A\mapsto AX$; differentiating these linear fields gives the tangent bracket $[X,Y]=XY-YX$ in the convention of [F1]. Now $F(A)=A^*A$ maps this open group smoothly into the real vector space of Hermitian matrices and has $dF_A(X)=X^*A+A^*X$. For Hermitian $S$, $X=\frac12A^{-*}S$ maps to $S$, so [F4] makes $U(n)=F^{-1}(I)$ embedded; the adjoint-product identities make it a subgroup. At $I$ its tangent kernel is $X^*+X=0$. [F1, F2, F3, F4, F5, algebra]

2.1 For $A\in U(n)$, $|\det A|^2=\det(A^*A)=1$, so determinant maps $U(n)$ into the unit circle. Near $1$ that circle has the real coordinate $z\mapsto\operatorname{Im}z$ on the arc $\operatorname{Re}z>0$. Differentiating the finite determinant formula at $I$ gives $d(\det)_I(X)=\operatorname{tr}X$; on skew-Hermitian $X$ this is imaginary and every imaginary scalar occurs from a diagonal $X$. Left multiplication by any $A\in SU(n)$ transports this surjectivity to $A$. Hence $1$ is a regular value of the circle-valued determinant map and [F4] makes $SU(n)$ embedded in $U(n)$, with tangent kernel $\operatorname{tr}X=0$ at $I$. Its subgroup operations are smooth by restriction. [F4, F5, step 1.1, algebra]

3.1 Both tangent spaces are closed under commutator: adjoint reverses products, and trace of a commutator vanishes by finite reindexing. Hence they are the asserted Lie algebras. [F1, F3, step 1.1, step 2.1, algebra]

4.1 At $n=1$, $\mathfrak u(1)=i\mathbb R$ and $\mathfrak{su}(1)=0$; $n=0$ is excluded by the Statement. No interval, endpoint, arbitrary metric choice, or biconditional occurs. The ambient determinant is nonzero exactly on $\operatorname{GL}_n(\mathbb C)$ by [F2]. $\mathrm{AC}_\omega$ is inherited through [F1]; finite coordinates add no choice. [F1, F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1] ∎
