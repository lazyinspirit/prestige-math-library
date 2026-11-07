---
id: lem-binary-form-resultant-bezout-identities
kind: lemma
title: Sylvester resultant Bezout identities for binary forms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-sylvester-resultant-of-binary-forms
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, elimination theory, Proposition 7.28"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification: {}
---

## Statement

Let $K$ be a field, let $d\ge1$, and let $F,G\in K[X,Y]$ be homogeneous
forms of nominated degree $d$. If their Sylvester resultant
$R=\operatorname{Res}_{d,d}(F,G)$ is nonzero, then there are homogeneous
forms $A_X,B_X,A_Y,B_Y\in K[X,Y]_{d-1}$ such that
$$A_XF+B_XG=R X^{2d-1},\qquad A_YF+B_YG=R Y^{2d-1}.$$

## Statement references

[[def-sylvester-resultant-of-binary-forms]]

[[def-matrix-minors-cofactors-and-adjugate]]

[[thm-laplace-cofactor-expansion]]

[[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]

## Facts & Assumptions

**Given:** A field $K$, an integer $d\ge1$, the vector spaces
$K[X,Y]_{d-1}$ and $K[X,Y]_{2d-1}$ with the ordered monomial bases, forms
$F,G$ of nominated degree $d$, and their nonzero Sylvester resultant $R$.

[F1] The Sylvester map
$$\Phi:K[X,Y]_{d-1}\oplus K[X,Y]_{d-1}\to K[X,Y]_{2d-1},
\qquad(A,B)\mapsto AF+BG$$
has a $2d\times2d$ matrix $M$ in which the $F$-block columns precede the
$G$-block columns, and $\det M=R$.
([[def-sylvester-resultant-of-binary-forms]])

[F2] For any square matrix $M$ over a commutative ring,
$M\operatorname{adj}(M)=(\det M)I$. Its $(i,j)$ entry is
$\sum_k M_{ik}C_{jk}(M)$: if $i=j$ this is the row-$j$ Laplace expansion;
if $i\ne j$ it is the row-$j$ expansion of the determinant obtained by
replacing row $j$ by row $i$, which is zero because that matrix has two equal
rows. ([[def-matrix-minors-cofactors-and-adjugate]],
[[thm-laplace-cofactor-expansion]],
[[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]])

## Proof

1.1 By [F1], the matrix $M$ represents the Sylvester map in the stated
bases and has determinant $R$. Apply [F2] to obtain
$M\operatorname{adj}(M)=RI_{2d}$. [F1, F2]

1.2 Let $e_X$ be the first target basis vector, corresponding to
$X^{2d-1}$, and write the coefficient vector
$\operatorname{adj}(M)e_X$ as the ordered coefficient vectors of forms
$(A_X,B_X)$ in the two domain blocks. Then
$$\Phi(A_X,B_X)=M\operatorname{adj}(M)e_X=Re_X,$$
which is the polynomial identity $A_XF+B_XG=RX^{2d-1}$. The degree of each
coefficient form is $d-1$ by its domain block. [F1, step 1.1, construct]

2.1 Let $e_Y$ be the last target basis vector, corresponding to
$Y^{2d-1}$, and write $\operatorname{adj}(M)e_Y$ as the coefficient vectors
of $(A_Y,B_Y)$. The same matrix identity gives
$$\Phi(A_Y,B_Y)=M\operatorname{adj}(M)e_Y=Re_Y,$$
so $A_YF+B_YG=RY^{2d-1}$, again with each form of degree $d-1$.
[F1, step 1.1, construct]

3.1 The two constructed pairs satisfy both required identities. No choice
principle is used: each coefficient vector is a specified column of the
adjugate matrix. [step 1.2, step 2.1] ∎
