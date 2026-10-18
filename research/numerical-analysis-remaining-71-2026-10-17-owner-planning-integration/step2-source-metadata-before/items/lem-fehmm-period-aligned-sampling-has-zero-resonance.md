---
id: lem-fehmm-period-aligned-sampling-has-zero-resonance
kind: lemma
title: No sampling resonance for period-aligned periodic micro cells
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - lem-periodic-cell-poincare
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - lem-affine-pullback-weak-derivatives-and-scaling
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§§2–3: periodic micro problems and FE-HMM assembly conventions."
verification:
  precheck: pass
---
## Statement

For any dimension $d$, phase $\theta\in\mathbb R^d$, and positive integer $m$, let $b(y)=a(\theta+my)$ on $Y$. Let $w_p\in V_\#$ be the unique mean-zero minimizer of $\int_Yb(y)|p+\nabla v(y)|^2dy$ and define $A_{\theta,m}^{\rm ex}p=\int_Yb(y)(p+\nabla w_p(y))dy$. Then $A_{\theta,m}^{\rm ex}=A^*$ for every $p\in\mathbb R^d$. Thus a micro side length $\delta=m\epsilon$ has zero continuum sampling/resonance error, regardless of phase; a separate finite micro-space error can remain.

## Facts & Assumptions

**Given:** $a$ is scalar, measurable, $\mathbb Z^d$-periodic, uniformly elliptic; $\chi_p$ is its mean-zero exact corrector; the local periodic-coupling cell space is $V_\#$.

[F1] [[def-periodic-scalar-diffusion-data]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: if $m\in\mathbb N$, then $b(y)=a(\theta+my)$ is a measurable, unit-periodic coefficient with the same ellipticity bounds; pullback preserves the a.e. periodicity and bounds.

[F2] [[def-periodic-cell-correctors-and-effective-tensor]] and [[lem-periodic-cell-corrector-wellposedness]]: $\chi_p$ solves the cell equation and $A^*p$ is the mean corrector flux.

[F3] [[lem-periodic-cell-poincare]]: subtracting the mean fixes the potential without changing its gradient, and mean-zero periodic gradients integrate to zero.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: Fourier expansions and Parseval are valid for periodic $L^2$ fluxes; divergence-free fluxes have coefficients orthogonal to their frequencies.

[F5] [[lem-affine-pullback-weak-derivatives-and-scaling]]: affine pullback preserves $H^1$ membership and applies the weak chain rule to the periodic corrector.

[F6] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: the phase-shifted affine pullback preserves measurable classes and transforms nonnegative integrals by its determinant; signed integrals follow by positive and negative parts.

## Proof



1.1 Since $m k\in\mathbb Z^d$ for each $k\in\mathbb Z^d$, periodicity of $a$ gives $b(y+k)=b(y)$ a.e.; the exceptional null sets pull back to null sets by [F6]. Bounds are preserved by the same affine pullback [F1]. Hence the generic cell-corrector result [F2] applies to $b$ and gives its unique mean-zero cell solution; energy expansion around that solution shows it is the unique minimizer in the Statement. Set $v_m(y)=m^{-1}\chi_p(\theta+my)-c$, where $c$ is its mean on $Y$. Periodic smooth approximants to $\chi_p$ converge on every bounded union of cells, and affine pullback [F5] shows $v_m\in V_\#$ with $\nabla_yv_m=\nabla\chi_p(\theta+my)$. The flux $q(z)=a(z)(p+\nabla\chi_p(z))$ is periodic and divergence-free by the cell equation. Its Fourier coefficients satisfy $k\cdot\widehat q(k)=0$. For a Fourier polynomial, $q(\theta+my)$ has only frequencies $mk$, with coefficients multiplied by phases, and each remains perpendicular to $mk$; hence it is divergence-free. For any periodic $h\in L^2(Y)$, affine change of variables [F6] gives $\int_Y|h(\theta+my)|^2dy=m^{-d}\int_{\theta+mY}|h(z)|^2dz$. The latter box meets at most $(m+2)^d$ unit lattice cells, so periodicity bounds this by $m^{-d}(m+2)^d\|h\|_{L^2(Y)}^2$. Thus composition with $y\mapsto\theta+my$ is bounded on periodic $L^2$, and the divergence-free identity passes from Fourier polynomials to $q$ in $L^2$. Therefore $\int_Yb(y)(p+\nabla v_m)\cdot\nabla z=0$ for every smooth periodic $z$, and by density for every $z\in V_\#$. Uniqueness of the cell solution for $b$ identifies it with $v_m$. [F1, F2, F3, F4, F5, F6, algebra]

2.1 The sampled tensor flux is $\int_Yq(\theta+my)dy$. By [F6], applied to the positive and negative parts of each component, this equals $m^{-d}\int_{\theta+mY}q(z)dz$. The box $\theta+mY$ is a union, up to null boundaries, of $m^d$ cells $\theta+k+Y$ with integer $k$, so periodicity makes each cell integral equal to $\int_{\theta+Y}q$. A translated unit cell has the same integral as $Y$: partition it at the integer coordinate faces and translate each resulting piece by an integer lattice vector into $Y$; applying [F6] to positive and negative parts and using periodicity gives equality componentwise. Thus the average is $\int_Yq=A^*p$. This holds for all $p$, so the sampled tensor is exactly $A^*$. [F6, F2, step 1.1, algebra] ∎
