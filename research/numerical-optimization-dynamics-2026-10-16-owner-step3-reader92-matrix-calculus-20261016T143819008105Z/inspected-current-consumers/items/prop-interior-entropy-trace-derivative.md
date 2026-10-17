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
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
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

[F2] For invertible matrices, $(A+tH)^{-1}-A^{-1}=-t(A+tH)^{-1}HA^{-1}$ whenever both inverses exist; this follows by multiplying out the two sides.

[F3] Trace and Frobenius-linear matrix functionals differentiate by their linear increments ([[prop-differentials-of-trace-and-frobenius-linear-functionals]]).

[F4] A finite-dimensional complex Hermitian matrix has an orthonormal eigenbasis and its scalar functional calculus is defined on its spectrum ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-functional-calculus-for-a-normal-endomorphism]]).

[F5] Matrix differentials obey the product rule ([[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

[F6] The matrix operator norm is induced by the Euclidean vector norm and is a maximum over unit vectors in finite dimensions ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof


1.1 For positive scalars the integral in [F1] converges and equals $\log x$ by integrating over $[0,R]$ and taking $R\to\infty$. Diagonalizing a positive-definite Hermitian $X$ by [F4] gives the same identity for $\log X$. If $X\succeq mI$ for some $m>0$, the resolvent $R_s=(X+sI)^{-1}$ has norm at most $(m+s)^{-1}$. [F1, F4, F6, given, algebra]

2.1 Let $H$ be small enough that $\|H\|_2<m/2$, so $X+H\succeq(m/2)I$. For each $s\ge0$, the resolvent identity [F2] gives $R_s(X+H)-R_s(X)=-R_s(X+H)HR_s(X)$. The induced operator norm is submultiplicative: for any matrices $A,B$ and unit vector $x$, $\|ABx\|_2\le\|A\|_2\|Bx\|_2\le\|A\|_2\|B\|_2$, hence $\|AB\|_2\le\|A\|_2\|B\|_2$ by [F6]. Using the integral representation from step 1.1, the remainder after the candidate linear term is $\log(X+H)-\log X-\int_0^\infty R_s(X)HR_s(X)\,ds=-\int_0^\infty R_s(X+H)HR_s(X)HR_s(X)\,ds.$ By step 1.1, $\|R_s(X+H)\|_2\le(m/2+s)^{-1}$ and $\|R_s(X)\|_2\le(m+s)^{-1}$. Therefore the remainder has norm at most $\|H\|_2^2\int_0^\infty\frac{ds}{(m/2+s)(m+s)^2}\le\frac{2\|H\|_2^2}{m^2}=o(\|H\|_2).$ This proves the real Fr\'echet derivative formula $D\log(X)[H]=\int_0^\infty R_sHR_s\,ds$. [F1, F2, F6, step 1.1, given]

3.1 By the product rule [F5] and trace differential [F3], $D\operatorname{tr}(X\log X)[H]=\operatorname{tr}(H\log X)+\int_0^\infty\operatorname{tr}(XR_sHR_s)\,ds$. The trace identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ follows by expanding the diagonal sums. Since $X$ commutes with $R_s$, it rewrites the integral as $\operatorname{tr}(H\int_0^\infty XR_s^2\,ds)$. Diagonalizing $X$ and using $\int_0^\infty x(x+s)^{-2}\,ds=1$ for each eigenvalue $x>0$ makes the matrix integral $I$. Thus $D\operatorname{tr}(X\log X)[H]=\operatorname{tr}(H(\log X+I))$. [F3, F4, F5, step 2.1, algebra]

4.1 Apply step 3.1 first with $X=D$ and direction $H$, then with $X=I-D$ and direction $-H$. The identity terms cancel, leaving $D\mathcal S(D)[H]=\operatorname{tr}(H(\log D-\log(I-D)))$. [step 3.1, algebra] ∎

