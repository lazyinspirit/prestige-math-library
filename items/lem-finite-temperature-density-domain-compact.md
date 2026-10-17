---
id: lem-finite-temperature-density-domain-compact
kind: lemma
title: "The fixed-particle density-matrix domain is nonempty and compact"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-temperature-density-matrix-free-energy
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-heine-borel-rn
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-frobenius-matrix-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
verification: {}
---

## Statement

For an integer $n\ge2$ and a real $0<r<n$, put
$$\mathcal D_r:=\{D\in\mathbb H_n:0\preceq D\preceq I,\ \operatorname{tr}D=r\}.$$
This agrees with the domain of
[[def-finite-temperature-density-matrix-free-energy]] when $r$ is an integer.
Then $\mathcal D_r$ is a nonempty compact subset of $\mathbb H_n$.

## Facts & Assumptions

**Given:** An integer $n\ge2$, a real $0<r<n$, the displayed domain $\mathcal D_r$, and the Frobenius topology on the Hermitian matrices.

[F1] For integer $1\le r<n$, [[def-finite-temperature-density-matrix-free-energy]] defines $\mathcal D_r$ by the constraints $D=D^*$, $0\preceq D\preceq I$, and $\operatorname{tr}D=r$. For real $0<r<n$, the displayed formula in the Statement defines the same notation locally.

[F2] A Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] A subset of finite-dimensional real coordinate space is compact exactly when it is closed and bounded; no choice principle is used ([[thm-heine-borel-rn]]).

## Proof

1.1 The matrix $D_*=(r/n)I$ has eigenvalues $r/n\in(0,1)$ and trace $r$, so [F1] gives $D_*\in\mathcal D_r$. Thus the domain is nonempty. [F1, given, construct]

1.2 The conditions $D=D^*$, $D\succeq0$, $I-D\succeq0$, and $\operatorname{tr}D=r$ define a closed subset of the real coordinates of $\mathbb H_n$: the first and last are continuous equalities, while positive semidefiniteness is closed because it is the intersection of the closed inequalities $\langle Dx,x\rangle\ge0$ over all fixed vectors $x$. [F1, given]

1.3 If $d_1,\ldots,d_n\in[0,1]$ are the eigenvalues of $D\in\mathcal D_r$, then $\|D\|_F^2=\operatorname{tr}(D^2)=\sum_jd_j^2\le\sum_jd_j=r$. Thus $\mathcal D_r$ is bounded. [F1, F2, given, algebra]

2.1 The real vector space $\mathbb H_n$ has dimension $n^2$ and is isomorphic to $\mathbb R^{n^2}$ by its real diagonal entries and real and imaginary off-diagonal coordinates. Closedness from step 1.2 and boundedness from step 1.3 give compactness by [F3]. [F3, step 1.2, step 1.3, algebra] ∎

