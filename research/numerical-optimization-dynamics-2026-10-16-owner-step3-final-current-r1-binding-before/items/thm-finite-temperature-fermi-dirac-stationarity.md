---
id: thm-finite-temperature-fermi-dirac-stationarity
kind: theorem
title: "Interior finite-temperature stationarity gives Fermi-Dirac occupations"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-finite-temperature-density-matrix-free-energy
  - prop-interior-entropy-trace-derivative
  - lem-finite-temperature-minimizer-is-interior
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - prop-functional-calculus-for-normal-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-frobenius-matrix-norm
  - thm-intermediate-value
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
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

Let $D$ be a global minimizer of $\mathcal F_\beta$ from
[[def-finite-temperature-density-matrix-free-energy]]. It is interior by
[[lem-finite-temperature-minimizer-is-interior]]. If
$F_{\mathcal E}(D)=\nabla\mathcal E(D)$ is the Hermitian Frobenius gradient of
the energy, then there is a real chemical potential $\mu$ such that
$$D=\bigl(I+\exp(\beta(F_{\mathcal E}(D)-\mu I))\bigr)^{-1}.$$
For a fixed Hermitian field $F$ independent of $D$, the equation
$$\sum_{j=1}^n\frac{1}{1+\exp(\beta(\lambda_j(F)-\mu))}=r$$
has exactly one real solution $\mu$ when $0<r<n$. In a nonlinear
self-consistent model, this uniqueness of $\mu$ for each fixed field does not
imply uniqueness of the density solving the self-consistency equation.

## Facts & Assumptions

**Given:** $n\ge2$, $0<r<n$, $\beta>0$, a real $C^1$ energy $\mathcal E$, and an interior minimizer $D$ of its entropy-regularized free energy.

[F1] The trace-constrained density domain and free-energy functional are as in the finite-temperature definition ([[def-finite-temperature-density-matrix-free-energy]]).

[F2] Every minimizer has $0\prec D\prec I$ ([[lem-finite-temperature-minimizer-is-interior]]).

[F3] For interior $D$, the entropy trace derivative is $\operatorname{tr}(H(\log D-\log(I-D)))$ ([[prop-interior-entropy-trace-derivative]]).

[F4] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis and its scalar functions act on eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[prop-functional-calculus-for-normal-endomorphisms]]).

[F5] A continuous real function on an interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F6] The real exponential is continuous and strictly increasing, tends to $0$ at $-\infty$ and to $+\infty$ at $+\infty$, and takes only positive values ([[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-limits-and-range]]).

## Proof


1.1 Let $H$ be any traceless Hermitian matrix. Since $D$ and $I-D$ are positive definite, their least eigenvalues have a positive minimum $\delta$. For $|t|\|H\|_2<\delta$, both $D+tH$ and $I-D-tH$ remain positive definite, and the trace remains $r$. Thus $D+tH$ is feasible for both signs of small $t$. At a minimizer its directional derivative is zero; [F3] gives
$$\operatorname{tr}\!\left(\left[F_{\mathcal E}(D)+\beta^{-1}(\log D-\log(I-D))\right]H\right)=0.$$
[F1, F2, F3, given]

2.1 Put $A=F_{\mathcal E}(D)+\beta^{-1}(\log D-\log(I-D))$. This is Hermitian. Choose $H=A-(\operatorname{tr}A/n)I$, which is Hermitian and traceless. Step 1.1 gives $0=\operatorname{tr}(AH)=\operatorname{tr}(H^2)=\|H\|_F^2$, hence $H=0$ and $A=\mu I$ with real $\mu=\operatorname{tr}A/n$. [step 1.1, given, algebra]

3.1 Rearranging step 2.1 gives $F_{\mathcal E}(D)=\mu I-\beta^{-1}(\log D-\log(I-D))$, so $F_{\mathcal E}(D)$ is a scalar function of $D$. In the spectral basis of $D$, for each eigenvalue $d\in(0,1)$ the scalar equation is $\lambda=\mu-\beta^{-1}\log(d/(1-d))$, whose unique solution is $d=(1+\exp(\beta(\lambda-\mu)))^{-1}$. Applying this scalar identity to the spectral functional calculus [F4] proves the matrix formula. [F4, step 2.1, algebra]

4.1 For a fixed Hermitian $F$, diagonalize it by [F4] with real eigenvalues $\lambda_j(F)$, and define $g(\mu):=\sum_{j=1}^n(1+\exp(\beta(\lambda_j(F)-\mu)))^{-1}$. By [F6] and $\beta>0$, each summand is continuous and strictly increasing in $\mu$. Its limits are $0$ as $\mu\to-\infty$ and $1$ as $\mu\to+\infty$, so $g$ is continuous and strictly increasing with limits $0$ and $n$. Since $0<r<n$, these limits give finite real numbers $\mu_-$ and $\mu_+$ with $g(\mu_-)<r<g(\mu_+)$. Strict increase implies $\mu_-<\mu_+$. Applying [F5] to $g$ on the closed interval $[\mu_-,\mu_+]$ gives a solution with $g(\mu)=r$, and strict increase makes it unique. This scalar argument proves uniqueness of the multiplier for the fixed field only. [F4, F5, F6, given, choose, algebra] ∎

