---
id: ex-heat-evolution-of-affine-and-quadratic-polynomials
kind: example
title: "Heat evolution of affine and quadratic polynomials"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - lem-first-and-second-moments-of-the-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2)"
---

## Example

Assume Countable Choice, let $n\ge1$ and $t>0$. For a polynomial
$P:\mathbb R^n\to\mathbb R$ define the Gaussian moment integral
$$H_tP(x):=\int_{\mathbb R^n}\Gamma(x-y,t)P(y)\,dy,\qquad x\in\mathbb R^n,$$
whenever this integral converges absolutely. For the polynomials $1$, $y_i$,
$y_iy_j$ and $|y|^2$ it converges absolutely for every $x$, and
$$H_t1=1,\qquad H_ty_i=x_i,\qquad H_t(y_iy_j)=x_ix_j+2t\delta_{ij},\qquad H_t|y|^2=|x|^2+2nt.$$
These integrals extend the convolution formula to these polynomial data;
nonconstant polynomial data are not asserted to lie in $L^p$ or to be bounded.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$, $x\in\mathbb R^n$ and coordinate indices $0\le i,j<n$.

[A1] Countable Choice is the hypothesis carried by the integration suppliers below ([[def-countable-choice]]).

[F1] The heat kernel is $\Gamma(z,t)=(4\pi t)^{-n/2}e^{-|z|^2/(4t)}$ with $\int_{\mathbb R^n}\Gamma(z,t)\,dz=1$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] All first and second moments of the kernel are absolutely integrable and $\int z_i\Gamma(z,t)\,dz=0$, $\int z_iz_j\Gamma(z,t)\,dz=2t\delta_{ij}$, $\int|z|^2\Gamma(z,t)\,dz=2nt$ ([[lem-first-and-second-moments-of-the-heat-kernel]]).

[F3] Translations preserve Lebesgue measurability and measure ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]), as does reflection $z\mapsto-z$, whose linear matrix has $|\det(-I)|=1$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]). Thus $T_x(z)=x-z$ is a measurable measure-preserving involution. For nonnegative measurable $q$, allowing infinity, and for integrable real $q$, $\int q\circ T_x=\int q$ ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).



## Verification

**Proof technique:** direct.

1.1 Absolute convergence: put $q(z)=\Gamma(z,t)P(x-z)$. For $P\equiv1$ the integrand is $\Gamma(z,t)$, integrable with integral $1$ by [F1]; for $P(y)=y_i$ the substituted integrand is $x_i\Gamma(z,t)-z_i\Gamma(z,t)$, a sum of integrable terms by [F1] and the first-moment clause of [F2]; for $P(y)=y_iy_j$ it is the finite expansion $x_ix_j\Gamma-x_iz_j\Gamma-x_jz_i\Gamma+z_iz_j\Gamma$, integrable by [F1] and the second-moment clause of [F2]; and for $P(y)=|y|^2$ it is $|x|^2\Gamma-2\sum_i x_iz_i\Gamma+|z|^2\Gamma$, integrable by the same clauses. Thus $q\in L^1$ in all four cases; applying [F3] to $|q|$ and $q$ shows that $q(x-y)=\Gamma(x-y,t)P(y)$ is absolutely integrable and $H_tP(x)=\int q(z)\,dz$. [A1, F1, F2, F3, given, algebra]

2.1 Constant and affine data: by [F1], $H_t1(x)=\int\Gamma(z,t)\,dz=1$; by [F1] and the vanishing first moments of [F2], $H_ty_i(x)=\int\Gamma(z,t)(x_i-z_i)\,dz=x_i\int\Gamma(z,t)\,dz-\int z_i\Gamma(z,t)\,dz=x_i$. [step 1.1, F1, F2, given, algebra]

3.1 Quadratic data: expanding as in step 1.1 and using [F1] and the covariance clause of [F2], $H_t(y_iy_j)(x)=x_ix_j\int\Gamma-x_i\int z_j\Gamma-x_j\int z_i\Gamma+\int z_iz_j\Gamma=x_ix_j+2t\delta_{ij}$, and, summing the diagonal identities, $H_t|y|^2(x)=|x|^2\int\Gamma-2\sum_i x_i\int z_i\Gamma+\int|z|^2\Gamma=|x|^2+2nt$. [step 1.1, step 2.1, F1, F2, given, algebra]

4.1 Steps 1.1, 2.1 and 3.1 show that all four moment integrals converge absolutely for every $x$ and have the stated values, which is the example. [step 1.1, step 2.1, step 3.1, given] ∎
