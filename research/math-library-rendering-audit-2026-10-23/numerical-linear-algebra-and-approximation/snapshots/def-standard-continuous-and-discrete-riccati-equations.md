---
id: def-standard-continuous-and-discrete-riccati-equations
kind: definition
title: "Standard CARE and DARE data, equations, and conventions"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-lqr-stabilizability-and-detectability
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Liberzon, Calculus of Variations and Optimal Control Theory: A
        Concise Introduction, Chapter 6"
      url: "https://liberzon.csl.illinois.edu/teaching/cvoc/node113.html"
      locator: "§6.2.1, monotone and bounded finite-horizon values and CARE limit"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, CARE assumptions, Hamiltonian graph, and Newton methods"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, DARE graph, symplectic matrix, doubling formula"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, finite invariant subspaces, pencil regularity, infinite
        eigenvalues"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $F\in\{\mathbb R,\mathbb C\}$, $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$, and $R=R^*\in F^{m\times m}$ be positive definite. Write $Q=C^*C$ and $G=BR^{-1}B^*$. The inverse $R^{-1}$ is well-defined: [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]] supplies an invertible factor $R=LL^*$, so $R^{-1}=L^{-*}L^{-1}$. Thus $v^*Gv=\|L^{-1}B^*v\|_2^2\ge0$ and $v^*Qv=\|Cv\|_2^2\ge0$. The symbol $^*$ is transpose over $\mathbb R$ and conjugate transpose over $\mathbb C$.

The **continuous algebraic Riccati equation (CARE)** is
$$A^*X+XA-XGX+Q=0.$$
Its residual is $F_c(X)=A^*X+XA-XGX+Q$, its feedback is $K_c(X)=R^{-1}B^*X$, and its closed-loop matrix is $A_c(X)=A-BK_c(X)=A-GX$.

For $X=X^*\succeq0$, $S_X:=R+B^*XB$ is positive definite because
$v^*S_Xv=v^*Rv+(Bv)^*X(Bv)>0$ for every nonzero $v$. The **discrete
algebraic Riccati equation (DARE)** is
$$X=Q+A^*XA-A^*XB(R+B^*XB)^{-1}B^*XA.$$
Its residual is $F_d(X)=Q+A^*XA-A^*XB(R+B^*XB)^{-1}B^*XA-X$. Whenever $X=X^*$, the matrix $R+B^*XB$ is positive definite if $X\succeq0$. Its feedback and closed-loop matrix are
$$K_d(X)=(R+B^*XB)^{-1}B^*XA,\qquad A_c(X)=A-BK_d(X).$$
A CARE solution is **stabilizing** when it is Hermitian and $A_c(X)$ is Hurwitz. A DARE solution is **stabilizing** when it is Hermitian, $R+B^*XB\succ0$, and $A_c(X)$ is Schur stable. No inverse of $A$ is part of either definition.

For Hermitian $X$ with $S_X$ invertible, multiplication gives
$$(I+GX)^{-1}=I-BS_X^{-1}B^*X,\qquad X(I+GX)^{-1}=X-XB S_X^{-1}B^*X.$$
In either product, the additional coefficient of $B$ is
$R^{-1}-S_X^{-1}-S_X^{-1}(B^*XB)R^{-1}=0$, because
$S_X=R+B^*XB$. Thus the DARE is equivalently
$X=Q+A^*X(I+GX)^{-1}A$, and its closed-loop matrix is
$A_c(X)=(I+GX)^{-1}A$.

The associated homogeneous symplectic pencil is
$$N=\begin{bmatrix}A&0\\-Q&I\end{bmatrix},\qquad M=\begin{bmatrix}I&G\\0&A^*\end{bmatrix},\qquad \mathcal P(\alpha,\beta)=\beta N-\alpha M.$$
The homogeneous-coordinate convention is that a finite eigenvalue
$\lambda$ is $[\alpha:\beta]=[\lambda:1]$ and $[1:0]$ denotes infinity.
