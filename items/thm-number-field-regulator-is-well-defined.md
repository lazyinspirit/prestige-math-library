---
id: thm-number-field-regulator-is-well-defined
kind: theorem
title: The regulator is well defined
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-invertible-matrix-has-unit-determinant
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-fundamental-units
  - def-logarithmic-unit-embedding
  - def-number-field-regulator
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - lem-deleted-row-minors-of-a-matrix-with-zero-column-sums
  - lem-discrete-subgroups-of-real-vector-spaces-are-lattices
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - lem-units-of-z
  - thm-determinant-multiplicative
  - thm-logarithmic-unit-image-is-a-full-lattice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Regulators p.94 (the regulator computed from any one of the deleted coordinates; the index ratio for independent sets)."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Def. 15.16 p.9 ('the value of R_K does not depend on the choice of pi')."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Section 8.1 p.89 (regulator as covolume of the log lattice; change of basis)."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. The regulator $R_K$ of a number field $K$ is
independent of the deleted row and of the chosen system of fundamental units,
and $R_K>0$. Consequently $R_K$ is an invariant of $K$ (in the doubled
logarithmic normalization), with $R_K=1$ for rank zero.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of signature $(r_1,r_2)$ with unit rank $r=r_1+r_2-1$, a system of fundamental units $(\varepsilon_1,\dots,\varepsilon_r)$, the matrix $A$ with columns $\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$, and the deleted-row matrices $A_k$ of the regulator definition ([[def-number-field-regulator]], [[def-logarithmic-unit-embedding]]).

[F1] The regulator is $R_K=\lvert\det A_k\rvert$ for the $r\times r$ matrix $A_k$ obtained from $A$ by deleting row $k$; every square matrix has a determinant, and for $r=0$ the matrices $A$ and $A_k$ are empty and the empty determinant is $1$ ([[def-number-field-regulator]], [[def-determinant-of-a-square-matrix]]).

[F2] The logarithms $\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$ form a $\mathbb Z$-basis of the free abelian group $\lambda(\mathcal O_K^\times)$, that is $\lambda(\mathcal O_K^\times)=\mathbb Z\lambda(\varepsilon_1)\oplus\cdots\oplus\mathbb Z\lambda(\varepsilon_r)$; in rank $r=0$ the empty tuple is the unique system of fundamental units; and for two systems $(\varepsilon_i)$ and $(\varepsilon_i')$ there is a matrix $C=(c_{ij})\in\operatorname{GL}_r(\mathbb Z)$ with $\lambda(\varepsilon_i')=\sum_jc_{ij}\lambda(\varepsilon_j)$ ([[def-fundamental-units]]).

[F3] Every column of $A$ lies in $H=\{x:\sum_ix_i=0\}$, because $\lambda(u)\in H$ for every unit $u$ ([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]], [[def-logarithmic-unit-embedding]]).

[F4] $\lambda(\mathcal O_K^\times)$ is discrete in $H$ and spans $H$ over $\mathbb R$; it is a full lattice in $H$ of rank $r_1+r_2-1$ ([[thm-logarithmic-unit-image-is-a-full-lattice]]).

[F5] If $\Gamma$ is a discrete subgroup of a finite-dimensional real vector space, then there are $\mathbb R$-linearly independent $v_1,\dots,v_s\in\Gamma$ with $\Gamma=\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_s$ and $\operatorname{span}_{\mathbb R}\Gamma=\mathbb Rv_1\oplus\cdots\oplus\mathbb Rv_s$ ([[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]).

[F6] Let $m\ge1$ and let $B$ be an $(m+1)\times m$ real matrix of rank $m$ whose columns have coordinate sum zero. For the determinant $\Delta_k$ of the matrix obtained by deleting row $k$ one has $\Delta_k\ne0$ for every $k$ and $\Delta_k=(-1)^{k-1}\Delta_1$; in particular all $\lvert\Delta_k\rvert$ are equal ([[lem-deleted-row-minors-of-a-matrix-with-zero-column-sums]]).

[F7] For square matrices of the same size, $\det(BC)=\det(B)\det(C)$ ([[thm-determinant-multiplicative]]), the rank of a matrix is the dimension of its column space ([[def-row-space-column-space-nullspace-and-matrix-ranks]]), and an invertible square matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]); the units of $\mathbb Z$ are $1$ and $-1$ ([[lem-units-of-z]]).

[A1] The Axiom of Choice is assumed; it is used only through the existence of a system of fundamental units supplied by the AC-qualified unit theorem [F2] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** prove the two invariance statements of the definition separately. The deleted-row statement reduces to the sign pattern of the cofactors of a rank-$r$ matrix with zero column sums. For a change of fundamental system, form the integer matrix whose columns give the new basis vectors in the old basis; it is unimodular, so every deleted-row determinant is multiplied by $\pm1$. Positivity follows because the common determinant is nonzero.

1.1 Rank zero: if $r=0$ then by [F1] the matrix $A$ has no columns and each $A_k$ is the empty matrix with determinant $1$, while by [F2] the empty tuple is the unique system of fundamental units; hence $R_K=1$ is independent of the deleted row and of the fundamental system, and $R_K>0$. [F1, F2]

1.2 Assume $r\ge1$ from here on, so $A$ is an $(r+1)\times r$ real matrix with $r_1+r_2=r+1\ge2$ rows. Its columns are $\mathbb R$-linearly independent, that is $A$ has rank $r$: by [F4] the group $\lambda(\mathcal O_K^\times)$ is a discrete subgroup of the finite-dimensional real vector space $H$, so by [F5] it equals $\mathbb Zv_1\oplus\cdots\oplus\mathbb Zv_s$ with $v_1,\dots,v_s$ $\mathbb R$-linearly independent and $\operatorname{span}_{\mathbb R}\lambda(\mathcal O_K^\times)=\mathbb Rv_1\oplus\cdots\oplus\mathbb Rv_s$ of dimension $s$; by [F2] the elements $\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$ form a $\mathbb Z$-basis of that same group, so $s=r$ (equal free rank) and their $\mathbb R$-span is all of $\operatorname{span}_{\mathbb R}\lambda(\mathcal O_K^\times)$, of dimension $r$; a spanning set of $r$ vectors in a space of dimension $r$ is a basis, so the columns of $A$ are $\mathbb R$-linearly independent and the rank of $A$ is $r$ by [F7]. [F2, F4, F5, F7]

1.3 Every column of $A$ lies in $H$, hence has coordinate sum zero. [F3]

1.4 Independence of the fundamental system: let $(\varepsilon_1',\dots,\varepsilon_r')$ be a second system of fundamental units and let $A'$ be the matrix with columns $\lambda(\varepsilon_1'),\dots,\lambda(\varepsilon_r')$. By [F2] both logarithm lists are $\mathbb Z$-bases of the same group. For each $i$, write $\lambda(\varepsilon_i')=\sum_j b_{ji}\lambda(\varepsilon_j)$ using unique integers $b_{ji}$, and let $B=(b_{ji})$, so the $i$-th column of $B$ records the coordinates of $\lambda(\varepsilon_i')$ in the old basis. The reverse basis change also has integer coefficients, so $B\in\operatorname{GL}_r(\mathbb Z)$. With these column coordinates, $A'=AB$; deleting row $k$ gives $A_k'=A_kB$ for every $k$. [F2]

2.1 The matrix $B$ of step 1.4 has an integer inverse, so [F7] makes $\det B$ a unit of $\mathbb Z$, and the description of the units of $\mathbb Z$ in [F7] gives $\det B=\pm1$. [F7, step 1.4]

2.2 Independence of the deleted row: by step 1.2 and step 1.3 the matrix $A$ satisfies the hypotheses of [F6] with $m=r$, so for the determinants $\Delta_k=\det A_k$ one has $\Delta_k\ne0$ and $\Delta_k=(-1)^{k-1}\Delta_1$ for every $k$; therefore $\lvert\det A_k\rvert=\lvert\Delta_1\rvert$ is the same number for every deleted row, and it is positive because $\Delta_1\ne0$. [F6, step 1.2, step 1.3]

3.1 For every $k$, multiplicativity of the determinant [F7] applied to $A_k'=A_kB$ of step 1.4 gives $\det A_k'=\det A_k\det B$, so $\lvert\det A_k'\rvert=\lvert\det A_k\rvert\,\lvert\det B\rvert=\lvert\det A_k\rvert$ by step 2.1; hence every deleted-row determinant of the second system has the same absolute value as the first. [F7, step 1.4, step 2.1]

4.1 Combining steps 2.2 and 3.1: in the case $r\ge1$ the number $R_K=\lvert\det A_k\rvert$ depends neither on the deleted row nor on the chosen system of fundamental units, and it is positive; in the case $r=0$ step 1.1 gives $R_K=1$. Therefore $R_K$ is well defined and is an invariant of $K$ alone, equal to $1$ in rank zero. [F1, step 1.1, step 2.2, step 3.1]

5.1 Choice accounting: the only place where AC enters is the existence of the systems of fundamental units in [F2], inherited from the AC-qualified unit theorem; the linear algebra of ranks, determinants and unimodular change of basis is elementary and choice-free. [A1, F2] ∎
