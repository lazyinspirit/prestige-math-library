---
id: lem-bem-plane-poisson-kernel-fourier-transform
kind: lemma
title: Fourier transform of the three-dimensional plane Poisson kernel
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, thm-linear-change-of-variables-for-lebesgue-measure, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, thm-sine-and-cosine-derivatives, thm-ftc-second-part]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice enters only through the cited Fourier-transform constructions.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 2 §2.1, PDF pp. 23–24: the Laplace Poisson kernel and its Fourier multiplier."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 615–616: local planar layer kernels and Fourier-based boundary operators."
---

## Statement

For $t>0$ and $z\in\mathbb R^2$, let
$$P_t(z)=\frac{t}{2\pi(|z|^2+t^2)^{3/2}}.$$
Then $P_t\in L^1(\mathbb R^2)$ has integral one and, under the negative-sign $2\pi$ Fourier convention,
$$\widehat{P_t}(\xi)=e^{-2\pi|\xi|t}\qquad(\xi\in\mathbb R^2).$$

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), $t>0$, the displayed kernel, and the Fourier convention.

[A1] Countable Choice is assumed through the Fourier constructions ([[def-countable-choice]]).

[F1] The $L^1$ Fourier transform is a bounded function, agrees with the distributional transform, and sends a second distributional derivative to multiplication by $(2\pi i\xi_j)^2$ ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F2] In dimension two the angular measure in [F90] has mass $2\pi$: the parametrization $(\cos\theta,\sin\theta)$, $0<\theta<2\pi$, has unit speed and covers the circle except one surface-null point. Thus $\int_{\mathbb R^2}a(|z|)dz=2\pi\int_0^\infty a(r)r\,dr$ for nonnegative radial $a$. The parametrization and one-variable integrations use the sine/cosine derivatives and FTC. ([[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]])

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

## Proof

1.1 In polar coordinates, $\int_{\mathbb R^2}P_t(z)\,dz=t\int_0^\infty r(r^2+t^2)^{-3/2}dr=1$; the same estimate shows $P_t\in L^1$. Direct differentiation of $t(|z|^2+t^2)^{-3/2}$ gives $(\Delta_z+\partial_t^2)P_t=0$ for $t>0$. [F2, F90, given, algebra]

2.1 Put $F(t,\xi)=\widehat{P_t}(\xi)$. For $t$ in any compact subinterval of $(0,\infty)$, $P_t$ and its first two $t$-derivatives are dominated by integrable radial functions, so differentiation under the Fourier integral is valid. Fourier transforming the harmonic identity in step 1.1 and using [F1] gives $\partial_t^2F-(2\pi|\xi|)^2F=0$. Also $|F(t,\xi)|\le\|P_t\|_1=1$. For fixed $\xi$, the change $z=tw$ gives $F(t,\xi)=\int_{\mathbb R^2}P_1(w)e^{-2\pi itw\cdot\xi}dw$; dominated convergence yields $F(t,\xi)\to1$ as $t\downarrow0$. The solutions of this constant-coefficient ODE are linear combinations of $e^{2\pi|\xi|t}$ and $e^{-2\pi|\xi|t}$ when $\xi\ne0$; boundedness removes the growing term, and the boundary limit fixes the coefficient to one. When $\xi=0$, the bounded affine solutions are constant and the same limit gives one. Hence $F(t,\xi)=e^{-2\pi|\xi|t}$. [A1, F1, step 1.1, given, algebra] ∎

