---
id: prop-interior-entropy-trace-derivative
kind: proposition
title: "The finite-temperature matrix entropy has its interior trace derivative"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-finite-temperature-density-matrix-free-energy
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-derivative-of-matrix-inversion
  - prop-differentials-of-trace-and-frobenius-linear-functionals
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification: {}
---

## Statement

For $0\prec D\prec I$ and every Hermitian direction $H$, let
$\mathcal S(D)=\operatorname{tr}(D\log D+(I-D)\log(I-D))$. Then
$$D\mathcal S(D)[H]=\operatorname{tr}\big(H(\log D-\log(I-D))\big).$$

## Facts & Assumptions

**Given:** Positive-definite Hermitian matrices $D$ and $I-D$, the spectral definition of matrix logarithm, and the real Fréchet derivative on $\mathbb H_n$.

[F1] For $x>0$, $\log x=\int_0^\infty((1+s)^{-1}-(x+s)^{-1})\,ds$ and $\log'(x)=1/x$ ([[thm-logarithm-derivative-and-integral]]).

[F2] Matrix inversion is differentiable with $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$ ([[thm-derivative-of-matrix-inversion]]).

[F3] Trace and Frobenius-linear matrix functionals differentiate by their linear increments ([[prop-differentials-of-trace-and-frobenius-linear-functionals]]).

[F4] A finite-dimensional complex Hermitian matrix has an orthonormal eigenbasis and its scalar functional calculus is defined on its spectrum ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-functional-calculus-for-a-normal-endomorphism]]).

[F5] Matrix differentials obey the product rule ([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

## Proof


1.1 For positive scalars the integral in [F1] converges and equals $\log x$ by integrating over $[0,R]$ and taking $R\to\infty$. Diagonalizing a positive-definite Hermitian $X$ by [F4] gives the same identity for $\log X$. If $X\succeq mI$ for some $m>0$, the resolvent $R_s=(X+sI)^{-1}$ has norm at most $(m+s)^{-1}$. [F1, F4, given, algebra]

2.1 In the neighborhood $X\succeq (m/2)I$, the resolvent identity gives $\frac{R_s(X+tH)-R_s(X)}{t}=-R_s(X+tH)H R_s(X)$. On every bounded interval of $s$, [F2] and continuity give uniform convergence of these difference quotients to $-R_sHR_s$. For $s\ge R\ge1$, their norm is at most $\|H\|_2/s^2$, so the integral of the tail is at most $\|H\|_2/R$, uniformly for small $t$. First differentiating on $[0,R]$ and then letting $R\to\infty$ proves $D\log(X)[H]=\int_0^\infty R_sHR_s\,ds$. [F1, F2, step 1.1, given]

3.1 By the product rule [F5] and trace differential [F3], $D\operatorname{tr}(X\log X)[H]=\operatorname{tr}(H\log X)+\int_0^\infty\operatorname{tr}(XR_sHR_s)\,ds$. The trace identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ follows by expanding the diagonal sums. Since $X$ commutes with $R_s$, it rewrites the integral as $\operatorname{tr}(H\int_0^\infty XR_s^2\,ds)$. Diagonalizing $X$ and using $\int_0^\infty x(x+s)^{-2}\,ds=1$ for each eigenvalue $x>0$ makes the matrix integral $I$. Thus $D\operatorname{tr}(X\log X)[H]=\operatorname{tr}(H(\log X+I))$. [F3, F4, F5, step 2.1, algebra]

4.1 Apply step 3.1 first with $X=D$ and direction $H$, then with $X=I-D$ and direction $-H$. The identity terms cancel, leaving $D\mathcal S(D)[H]=\operatorname{tr}(H(\log D-\log(I-D)))$. [step 3.1, algebra] ∎

