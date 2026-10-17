---
id: def-finite-temperature-density-matrix-free-energy
kind: definition
title: "Fixed-particle finite-temperature density-matrix free energy"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-non-negative-and-positive-operator
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - thm-logarithm-derivative-and-integral
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
  - prop-differentials-of-trace-and-frobenius-linear-functionals
justified_by:
  - lem-finite-temperature-entropy-continuous-at-endpoints
  - prop-interior-entropy-trace-derivative
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Daniel Arovas, Thermodynamics and Statistical Mechanics, §7.4 Variational Density Matrix Method, UC San Diego / Physics LibreTexts"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/07:_Mean_Field_Theory_of_Phase_Transitions/7.04:_Variational_Density_Matrix_Method
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: n/a
---

## Definition

Let $n\ge2$, $r\in\{1,\ldots,n-1\}$, and $\beta>0$. The fixed-particle
density-matrix domain is
$$\mathcal D_r:=\{D\in\mathbb H_n:0\preceq D\preceq I,\ \operatorname{tr}D=r\},$$
where $0\preceq D\preceq I$ means that both $D$ and $I-D$ are positive
semidefinite in the operator order ([[def-non-negative-and-positive-operator]]).
Define the continuous scalar entropy integrand on $[0,1]$ by
$$\phi(x):=x\log x+(1-x)\log(1-x),\qquad 0\log0:=0.$$
For $D\in\mathcal D_r$, $\phi(D)$ is defined by the spectral functional
calculus ([[def-functional-calculus-for-a-normal-endomorphism]],
[[prop-functional-calculus-for-normal-endomorphisms]]). The logarithm is the
natural logarithm on $(0,\infty)$ ([[thm-logarithm-derivative-and-integral]]).
Supply a real $C^1$ energy $\mathcal E$ on an open neighborhood of
$\mathcal D_r$ and its Hermitian Frobenius gradient $F_{\mathcal E}(D)$,
defined by $D\mathcal E(D)[H]=\langle F_{\mathcal E}(D),H\rangle_F$ for every
Hermitian direction $H$. Define
$$\mathcal F_\beta(D):=\mathcal E(D)+\beta^{-1}\operatorname{tr}\phi(D).$$
The fixed-Hermitian-field case is $\mathcal E(D)=\operatorname{tr}(FD)$ for a
fixed Hermitian $F$. For nonlinear self-consistent models, $\mathcal E$ and its
gradient may depend on $D$; the definition alone asserts no uniqueness of a
minimizing density.

