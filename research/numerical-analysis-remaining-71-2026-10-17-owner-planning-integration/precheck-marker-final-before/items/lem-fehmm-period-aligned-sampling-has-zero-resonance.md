---
id: lem-fehmm-period-aligned-sampling-has-zero-resonance
kind: lemma
title: No sampling resonance for period-aligned periodic micro cells
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - alg-fehmm-periodic-cell-micro-macro
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-correctors-and-effective-tensor
  - lem-periodic-cell-corrector-wellposedness
  - lem-periodic-cell-poincare
  - lem-fehmm-micro-cell-solves-wellposedness
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-linear-change-of-variables-for-lebesgue-measure
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
  precheck: n/a
---
## Statement

For any dimension $d$, phase $\theta\in\mathbb R^d$, and positive integer $m$, let $b(y)=a(\theta+my)$ on $Y$. Let $w_p\in V_\#$ be the unique mean-zero minimizer of $\int_Yb(y)|p+\nabla v(y)|^2dy$ and define $A_{\theta,m}^{\rm ex}p=\int_Yb(y)(p+\nabla w_p(y))dy$. Then $A_{\theta,m}^{\rm ex}=A^*$ for every $p\in\mathbb R^d$. Thus a micro side length $\delta=m\epsilon$ has zero continuum sampling/resonance error, regardless of phase; a separate finite micro-space error can remain.

## Facts & Assumptions

**Given:** $a$ is scalar, measurable, $\mathbb Z^d$-periodic, uniformly elliptic; $\chi_p$ is its mean-zero exact corrector; the local periodic-coupling cell space is $V_\#$.

[F1] [[alg-fehmm-periodic-cell-micro-macro]]: the sampled coefficient on a micro square is $a(\theta+ry)$, with periodic fluctuation space $V_\#$; for $r=m\in\mathbb N$ it is a periodic coefficient in $y$.

[F2] [[def-periodic-cell-correctors-and-effective-tensor]] and [[lem-periodic-cell-corrector-wellposedness]]: $\chi_p$ solves the cell equation and $A^*p$ is the mean corrector flux.

[F3] [[lem-periodic-cell-poincare]]: subtracting the mean fixes the potential without changing its gradient, and mean-zero periodic gradients integrate to zero.

[F4] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: Fourier expansions and Parseval are valid for periodic $L^2$ fluxes; divergence-free fluxes have coefficients orthogonal to their frequencies.

[F5] [[thm-linear-change-of-variables-for-lebesgue-measure]]: an invertible affine dilation changes Lebesgue integrals by its determinant.

## Proof



1.1 Set $v_m(y)=m^{-1}\chi_p(\theta+my)-c$, where $c$ is its mean on $Y$. Periodicity of $\chi_p$ and integer $m$ make $v_m$ periodic; approximation of $\chi_p$ by smooth periodic functions in $H^1$ shows $v_m\in V_\#$, and its gradient is $\nabla\chi_p(\theta+my)$. The flux $q(z)=a(z)(p+\nabla\chi_p(z))$ is periodic and divergence-free by the cell equation. Its Fourier coefficients satisfy $k\cdot\widehat q(k)=0$. The composition $q(\theta+my)$ has only frequencies $mk$ and each is perpendicular to $mk$, so it is divergence-free in $y$; this follows first for Fourier polynomials and then by $L^2$ approximation. Therefore $\int_Yb(y)(p+\nabla v_m)\cdot\nabla z=0$ for every smooth periodic $z$, and by density for every $z\in V_\#$. Uniqueness of the sampled cell solution identifies it with $v_m$. [F1, F2, F3, F4, algebra]

2.1 The sampled tensor flux is $\int_Yq(\theta+my)dy$. By affine change of variables [F5] this is $m^{-d}\int_{\theta+mY}q(z)dz$. The box $\theta+mY$ is a union, up to null boundaries, of $m^d$ unit cells, each with the same integral of the periodic $q$. Hence the average equals $\int_Yq=A^*p$. This holds for all $p$, so the sampled tensor is exactly $A^*$. [F5, F2, step 1.1, algebra] ∎
