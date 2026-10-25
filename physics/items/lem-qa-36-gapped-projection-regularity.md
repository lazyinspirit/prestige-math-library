---
id: lem-qa-36-gapped-projection-regularity
kind: lemma
title: Finite gapped spectral projection regularity
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-36-finite-adiabatic-path-model
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-functional-calculus-for-a-normal-endomorphism
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite resolvent identities and finite-dimensional spectral theory only.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sabine Jansen, Mary-Beth Ruskai, and Ruedi Seiler, Bounds for the adiabatic approximation with applications to quantum computation
      url: https://arxiv.org/pdf/quant-ph/0603175
      locator: Theorems 1 and 3, PDF pp. 3–11; Riesz projections and finite resolvent derivatives.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 30, printed pp. 151–156; PDF pp. 159–164.
verification:
  precheck: n/a
---

## Statement

For a $C^2$ finite-dimensional Hermitian path with a coherently followed spectral cluster separated from the complementary spectrum by a positive gap, the spectral projection $P(s)$ is $C^2$ on $[0,1]$.

## Facts & Assumptions

**Given:** The finite adiabatic path and the fixed-rank, locally Riesz spectral band from [[def-qa-36-finite-adiabatic-path-model]].

[F1] A finite Hermitian matrix has a real spectrum and an orthogonal eigenspace decomposition ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] For a normal matrix $H=\sum_j\lambda_jP_j$, functions of $H$ are the finite sums $f(H)=\sum_jf(\lambda_j)P_j$ ([[def-functional-calculus-for-a-normal-endomorphism]]).

[F3] The operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

## Proof

1.1 Fix $s_0\in[0,1]$. By [F1], the selected finite set of eigenvalues at $s_0$ is separated from its complement by the positive gap. Choose finitely many positively oriented closed contours whose interiors contain exactly this cluster and whose boundaries avoid the spectrum; for a sufficiently small neighborhood of $s_0$, the resolvent on these contours remains defined. Indeed, if $R_0(z)=(H(s_0)-zI)^{-1}$ and $\|H(s)-H(s_0)\|\|R_0(z)\|<1$ uniformly on the compact contour, then submultiplicativity [F3] makes the Neumann series for $I+(H(s)-H(s_0))R_0(z)$ convergent and gives the inverse. [given, F1, F3, algebra, choose]

2.1 On this neighborhood, [F2] and the scalar residue formula give the same Riesz projection as the definition: $\displaystyle P(s)=-\frac1{2\pi i}\oint_\Gamma(H(s)-zI)^{-1}\,dz.$ To see this, diagonalize $H(s)$; the integral of $(\lambda-z)^{-1}$ is $-2\pi i$ when $\lambda$ is inside the contour and zero when it is outside, so the sum is exactly the projection onto the selected eigenspaces. [given, F1, F2, step 1.1, algebra]

3.1 Put $R_z(s)=(H(s)-zI)^{-1}$. Differentiating $(H-zI)R_z=I$ gives $\dot R_z=-R_zH'R_z$ and differentiating again gives $\ddot R_z=2R_zH'R_zH'R_z-R_zH''R_z$. The contour is compact and stays uniformly in the resolvent set on this neighborhood, so these integrands and their first two derivatives are continuous uniformly in $z$. Differentiation under the finite contour integral is therefore valid, and step 2.1 makes $P$ twice continuously differentiable near $s_0$. [step 2.1, algebra]

4.1 On the overlap of two such neighborhoods, each contour formula projects onto the same coherently followed eigenspaces by [F1]–[F2]; hence the local projections agree. Their first two derivatives consequently agree on overlaps, so the local $C^2$ representations patch to a global $C^2$ map on $[0,1]$, with one-sided derivatives at the endpoints. [given, F1, F2, step 3.1] ∎
