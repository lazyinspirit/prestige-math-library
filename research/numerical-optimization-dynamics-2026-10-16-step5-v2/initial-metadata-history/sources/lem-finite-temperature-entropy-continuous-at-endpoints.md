---
id: lem-finite-temperature-entropy-continuous-at-endpoints
kind: lemma
title: "The finite-temperature trace entropy is continuous at occupation endpoints"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-temperature-density-matrix-free-energy
  - lem-complex-hermitian-eigenvalues-lipschitz
  - thm-logarithm-derivative-and-integral
  - def-functional-calculus-for-a-normal-endomorphism
  - def-trace-of-a-square-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-frobenius-matrix-norm
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
    - title: "Christoph Helmberg, Guilherme Porto, Guilherme Torres, and Vilmar Trevisan, An interlacing property of the signless Laplacian of threshold graphs, §2, Theorem 2 (2023)"
      url: https://arxiv.org/pdf/2308.12654
verification: {}
---

## Statement

For $\phi(x)=x\log x+(1-x)\log(1-x)$ with $0\log0=0$, the map
$D\mapsto\operatorname{tr}\phi(D)$ is continuous on the full domain
$\mathcal D_r$, including matrices with eigenvalues $0$ or $1$.

## Facts & Assumptions

**Given:** The continuous scalar extension $\phi$ on $[0,1]$ and Hermitian matrices $D\in\mathcal D_r$.

[F1] The entropy integrand and endpoint convention are as in the finite-temperature model ([[def-finite-temperature-density-matrix-free-energy]]).

[F2] Ordered eigenvalues of complex Hermitian matrices change by at most the operator norm of the matrix perturbation ([[lem-complex-hermitian-eigenvalues-lipschitz]]).

[F3] The natural logarithm satisfies $\log'(x)=1/x$ and $\log x=\int_1^x ds/s$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]).

[F4] For real or complex matrices, the induced operator norm is bounded by the Frobenius norm, $\|A\|_2\le\|A\|_F$ ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

## Proof

1.1 For $0<x<1$, put $t=1/x$. By [F3], $0\le\log t=\int_1^t ds/s\le\int_1^t ds/\sqrt{s}=2(\sqrt t-1)$, so $|x\log x|=(\log t)/t\le2/\sqrt t\to0$. The other term $(1-x)\log(1-x)$ tends to $0$ as $x\downarrow0$ by continuity of $y\mapsto y\log y$ at $y=1$. Since $\phi(1-x)=\phi(x)$, the same limits hold at $1$. Thus the stipulated endpoint values make $\phi$ continuous on $[0,1]$. [F1, F3, algebra]

1.2 By [F2], if $D_k\to D$ in Frobenius norm, then every ordered eigenvalue $d_{k,j}$ tends to the corresponding $d_j$; indeed [F4] gives $\|D_k-D\|_2\le\|D_k-D\|_F\to0$. All these eigenvalues lie in $[0,1]$ by the domain definition. [F1, F2, F4, given]

2.1 Spectral functional calculus gives $\operatorname{tr}\phi(D_k)=\sum_{j=1}^n\phi(d_{k,j})$ and likewise for $D$. Scalar continuity from step 1.1 makes each of the finitely many summands converge, so $\operatorname{tr}\phi(D_k)\to\operatorname{tr}\phi(D)$. [F1, step 1.1, step 1.2, algebra] ∎

