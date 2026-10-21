---
id: lem-finite-gaussian-max-comparison
kind: lemma
title: Finite Sudakov–Fernique comparison for Gaussian maxima
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-dominated-convergence
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "AC covers finite-dimensional Gaussian realization and characteristic-function uniqueness, including their inherited DC and countable-choice uses."
verification:
  precheck: pass
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Recovery of Sparsity, 2006, Appendix B, Lemma 10"
      url: "https://arxiv.org/pdf/math/0605740"
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, §VI"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
---

## Statement

Assume AC. Let $m\ge2$, and let $X,Y\in\mathbb R^m$ be independent, centered Gaussian vectors with finite covariance matrices. If

$$\mathbb E[(X_i-X_j)^2]\ge\mathbb E[(Y_i-Y_j)^2]\qquad(i,j\in\{1,\ldots,m\}),$$

then $\mathbb E[\max_iX_i]\ge\mathbb E[\max_iY_i]$.

## Statement references

[Wainwright 2006, Appendix B, Lemma 10](https://arxiv.org/pdf/math/0605740)

[Wainwright 2009, §VI](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Facts & Assumptions

**Given:** AC and independent centered Gaussian vectors $X,Y\in\mathbb R^m$ satisfying the displayed increment-variance inequalities.

[A1] Under AC, [[def-multivariate-normal-law]] constructs $C^{1/2}Z$ with law $N_m(0,C)$ for $C\succeq0$ and independent standard-normal coordinates $Z$. The uniqueness assertion of [[lem-characteristic-function-of-a-multivariate-normal-law]] identifies this law with that of any given centered Gaussian vector of covariance $C$, including singular $C$ ([[def-axiom-of-choice]]).

[F1] A standard normal coordinate has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, with $\phi'(x)=-x\phi(x)$ ([[def-standard-normal-and-normal-laws]]).

[F2] A product of sigma-finite measure spaces has a product measure with the rectangle formula ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F3] Dominated convergence permits passage to limits when the integrands have an integrable common majorant ([[thm-dominated-convergence]]).

[F4] An integrable function on a sigma-finite product can be integrated in either order ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

1.1 For $a>0$ define $\Phi_a(x)=a^{-1}\log\sum_{i=1}^m e^{ax_i}$ and $p_i(x)=e^{ax_i}/\sum_j e^{ax_j}$. Direct differentiation gives $\partial_i\Phi_a=p_i$ and $\partial_{ij}\Phi_a=a(p_i\mathbf1_{i=j}-p_ip_j)$, while $\max_i x_i\le\Phi_a(x)\le\max_i x_i+\log(m)/a$. [given, construct, algebra]

2.1 Let $C_X,C_Y$ be the covariance matrices. By [A1], on a product probability space [F2] replace $X,Y$ by copies $X=C_X^{1/2}\xi$, $Y=C_Y^{1/2}\eta$ with the same respective laws, where all coordinates of $\xi,\eta$ are independent standard normals. The desired expectations depend only on these laws. Put $Z_t=\sqrt tX+\sqrt{1-t}Y$ and $F_a(t)=\mathbb E\Phi_a(Z_t)$. For $0<t<1$, differentiate under the expectation; on every closed subinterval of $(0,1)$ the derivative is bounded by a constant times $\|\xi\|_2+\|\eta\|_2$, which is integrable since $\int_{\mathbb R}|x|\phi(x)\,dx=\sqrt{2/\pi}$. Thus [F3] applies. Using [F4] to integrate one standard-normal coordinate at a time, one-dimensional integration by parts against [F1], with the bounded first and second derivatives from step 1.1, gives
$$F_a'(t)=\frac12\sum_{i,j}(C_X-C_Y)_{ij}\,\mathbb E[\partial_{ij}\Phi_a(Z_t)].$$
The boundary terms vanish because $\phi(x)$ decays to zero and $\partial_i\Phi_a$ is bounded. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 Substituting the Hessian from step 1.1 into step 2.1 and using $\sum_i p_i=1$ rewrites the derivative as $$F_a'(t)=\frac a4\mathbb E\left[\sum_{i,j}p_i(Z_t)p_j(Z_t)\left(\mathbb E[(X_i-X_j)^2]-\mathbb E[(Y_i-Y_j)^2]\right)\right]\ge0.$$ Hence $F_a$ is nondecreasing on $(0,1)$. For all $t\in[0,1]$, $|\Phi_a(Z_t)|\le\|X\|_2+\|Y\|_2+\log(m)/a$, an integrable bound, so [F3] gives continuity at the endpoints and therefore $F_a(1)\ge F_a(0)$. [F3, step 1.1, step 2.1, given, algebra]

4.1 The uniform approximation in step 1.1 gives $|\mathbb E\Phi_a(X)-\mathbb E\max_iX_i|\le\log(m)/a$ and the analogous bound for $Y$. Letting $a\to\infty$ in step 3.1 proves the asserted comparison. [step 1.1, step 3.1, algebra] ∎

