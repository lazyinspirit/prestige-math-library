---
title: Real symmetric quadratic forms tested on phasors
status: published
research_item: prop-expander-prereq-complex-quadratic-tests
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)


## Statement

Let $V$ be a finite set and $B=(B_{xy})_{x,y\in V}$ a real symmetric matrix, meaning $B_{xy}=B_{yx}\in\mathbb R$. For $f=u+iv\in\mathbb C^V$ with $u,v\in\mathbb R^V$, write $f^*Bf=\sum_{x,y\in V}\overline{f_x}B_{xy}f_y$ and $u^TBu=\sum_{x,y\in V}u_xB_{xy}u_y$. Then $f^*Bf=u^TBu+v^TBv$.

Thus $B$ is positive semidefinite on real vectors, meaning $u^TBu\geq 0$ for every $u\in\mathbb R^V$, if and only if $f^*Bf\geq 0$ for every $f\in\mathbb C^V$. Likewise, $u^TBu>0$ for every nonzero real $u$ if and only if $f^*Bf>0$ for every nonzero complex $f$.

For any real symmetric array $b=(b_{xy})_{x,y\in V}$, let $L=\operatorname{diag}(\sum_y b_{xy})-b$, so that $L_{xy}=\delta_{xy}\sum_z b_{xz}-b_{xy}$, with $\delta_{xy}=1$ when $x=y$ and $0$ otherwise. Then $f^*Lf=\frac12\sum_{x,y\in V}b_{xy}|f_x-f_y|^2$. This identity allows signed coefficients $b_{xy}$; nonnegativity of the form requires a separate positive-semidefiniteness premise.

## Statement references

[Finite vertex Hilbert space in the article convention](item-def-expander-prereq-vertex-hilbert-space)

[Complex conjugation and modulus laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)

## Facts & Assumptions

[F1] On a finite vertex set, matrix action and the second-linear inner product are given by finite sums, and a real symmetric matrix is self-adjoint ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] Complex conjugation preserves sums and products, fixes real numbers, and satisfies $z\overline z=|z|^2$ ([math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)).

## Proof

**Given:** A finite set $V$, a real symmetric matrix $B$, a vector $f=u+iv$ with real $u,v$, and a real symmetric array $b$.

**Goal:** Prove the quadratic-form decomposition, the two positivity equivalences, and the signed-weight identity.

1.1 Expanding the finite sums using [F1] and [F2] gives $f^*Bf=u^TBu+v^TBv+i(u^TBv-v^TBu)$. Interchanging $x$ and $y$ in the finite sum and using $B_{xy}=B_{yx}$ gives $v^TBu=u^TBv$. The imaginary term therefore vanishes, proving the decomposition. [F1, F2, algebra]

2.1 If $u^TBu\geq0$ for all real $u$, the decomposition makes $f^*Bf\geq0$ for all complex $f$; the converse follows by taking $v=0$. If the real form is strictly positive on nonzero vectors, then a nonzero $f=u+iv$ has at least one nonzero component vector, and the decomposition is strictly positive because the other term is nonnegative. The converse again follows by taking $v=0$. [step 1.1, algebra]

3.1 By [F2], $|f_x-f_y|^2=|f_x|^2+|f_y|^2-\overline{f_x}f_y-\overline{f_y}f_x$. Since $b_{xy}=b_{yx}$, interchanging the indices in the second diagonal sum and in the last cross term yields $\frac12\sum_{x,y}b_{xy}|f_x-f_y|^2=\sum_x(\sum_yb_{xy})|f_x|^2-\sum_{x,y}b_{xy}\overline{f_x}f_y=f^*Lf$, by the matrix action in [F1]. No sign condition on $b$ was used. If $L$ is positive semidefinite on real vectors, step 2.1 gives nonnegativity on complex vectors. [F1, F2, step 2.1, algebra] ∎
