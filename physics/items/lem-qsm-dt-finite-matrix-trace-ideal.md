---
id: lem-qsm-dt-finite-matrix-trace-ideal
kind: lemma
title: Finite matrix trace-norm ideal inequalities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 1
deps:
  - lem-qsm-matrix-state-calculus
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, author-hosted manuscript, Chapter 2, §§2.1–2.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: "Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21: Quantum Microstates and Quantum Macrostates"
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $\mathcal H$ be a complex Hilbert space of finite dimension $d\ge1$. For a matrix $X$ define $|X|=(X^*X)^{1/2}$ by finite Hermitian functional calculus and define its trace norm by $\|X\|_1=\operatorname{Tr}|X|$. This is a complete norm on the finite-dimensional matrix space. Write $\|Y\|:=\sup\{\|Yv\|:\|v\|\le1\}$ for the operator norm induced by the Hilbert-space norm. For all matrices $X,Y$,
$$
\|YX\|_1\le\|Y\|\|X\|_1,\qquad \|XY\|_1\le\|Y\|\|X\|_1,\qquad |\operatorname{Tr}X|\le\|X\|_1.
$$
For unitary $U$, $\|UXU^*\|_1=\|X\|_1$.

## Facts & Assumptions

**Given:** A complex inner-product space $\mathcal H$ of finite dimension $d\ge1$ and matrices $X,Y$.

[F1] [[lem-qsm-matrix-state-calculus]]: every positive Hermitian matrix has a basis-independent orthonormal spectral decomposition and positive square root; the finite trace is basis independent.

## Proof



**Proof technique:** direct.

**Given:** The finite-dimensional Hilbert space and matrices above.

1.1 Diagonalize $X^*X$ by [F1], with nonnegative eigenvalues $s_j^2$ and orthonormal eigenvectors $v_j$. For each $s_j>0$ put $u_j=Xv_j/s_j$; then $\langle u_i,u_j\rangle=\delta_{ij}$ because $\langle Xv_i,Xv_j\rangle=\langle v_i,X^*Xv_j\rangle$. Extending both finite orthonormal families to bases gives the singular-value expansion $X=\sum_{s_j>0}s_jR_{u_j,v_j}$, where $R_{u,v}x=\langle x,v\rangle u$. The only nonzero singular value of $R_{u,v}$ is $\|u\|\|v\|$, so $\|R_{u,v}\|_1=\|u\|\|v\|$ and $\|X\|_1=\sum_{s_j>0}s_j$. [given, F1, construct]


2.1 The rank-one trace formula is $\operatorname{Tr}(R_{u,v})=\langle u,v\rangle$, so the expansion in step 1.1 gives $\|X\|_1=\sup_{U\text{ unitary}}|\operatorname{Tr}(UX)|$. For the upper bound, if $u_j,v_j$ are unit vectors, then $\|Uu_j-\langle Uu_j,v_j\rangle v_j\|^2=1-|\langle Uu_j,v_j\rangle|^2\ge0$, so $|\langle Uu_j,v_j\rangle|\le1$. Equality is attained by a unitary mapping each $u_j$ to $v_j$, extended from these finite orthonormal families to bases. The supremum formula implies the triangle inequality $\|X+Y\|_1\le\|X\|_1+\|Y\|_1$ and homogeneity; positivity and definiteness follow from the singular values. [step 1.1, F1, algebra]


3.1 Applying step 1.1 to $YX=\sum_j s_jR_{Yu_j,v_j}$ and using the triangle inequality of step 2.1 gives $\|YX\|_1\le\sum_j s_j\|Yu_j\|\|v_j\|\le\|Y\|\sum_j s_j=\|Y\|\|X\|_1$. Similarly $XY=\sum_j s_jR_{u_j,Y^*v_j}$ gives $\|XY\|_1\le\|Y\|\|X\|_1$. The rank-one trace formula and step 1.1 also give $|\operatorname{Tr}X|\le\sum_j s_j|\langle u_j,v_j\rangle|\le\|X\|_1$. [step 1.1, step 2.1, algebra]


4.1 Define the Frobenius norm by $\|X\|_F=(\sum_{i,j}|X_{ij}|^2)^{1/2}$ in an orthonormal basis. The finite singular-value expansion gives $\|X\|_F=(\sum_js_j^2)^{1/2}$. Since $s_j\ge0$, $(\sum_js_j^2)^{1/2}\le\sum_js_j$; also $d\sum_js_j^2-(\sum_js_j)^2=\sum_{i<j}(s_i-s_j)^2\ge0$. Thus $\|X\|_F\le\|X\|_1\le\sqrt d\,\|X\|_F$. A trace-norm Cauchy sequence is therefore Cauchy in each matrix coordinate and converges to a matrix; the second inequality gives convergence in trace norm. This proves completeness. For unitary $U$, step 3.1 gives $\|UX\|_1\le\|X\|_1$; applying it to $U^*$ and $UX$ gives the reverse inequality. The same argument on the right proves $\|UXU^*\|_1=\|X\|_1$. [step 3.1, algebra] ∎