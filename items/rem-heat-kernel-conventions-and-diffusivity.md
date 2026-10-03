---
id: rem-heat-kernel-conventions-and-diffusivity
kind: remark
title: "Diffusivity, rescaling, and the heat kernel compared with the Poisson kernels"
status: draft
origin: pipeline
deps:
  - def-heat-equation-heat-operator-and-cauchy-problem
  - def-heat-kernel
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-poisson-kernel-for-a-ball-in-rn
  - def-countable-choice
  - thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.1.1, printed p. 99, equation (3.1.1) with diffusivity $k$; §3.2.4, printed p. 111, formula (3.2.24); §9.1, printed pp. 281–284, (9.1.8)–(9.1.10), the three-dimensional spherical-mean representation"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1 (diffusivity $D$ in the kernel)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.36) (the $\\kappa=1$ normalisation adopted here)"
---

## Remarks

Assume Countable Choice for the kernel identities cited below.

With diffusivity parameter $\kappa>0$, the equation
$u_t-\kappa\Delta u=0$ is converted into the $\kappa=1$ heat equation of
[[def-heat-equation-heat-operator-and-cauchy-problem]] by
$v(x,t):=u(x,t/\kappa)$, and its kernel is
$\Gamma_\kappa(x,t)=(4\pi\kappa t)^{-n/2}e^{-|x|^2/(4\kappa t)}$; the kernel
$\Gamma$ of [[def-heat-kernel]] is the case $\kappa=1$. The rescaling is the
chain rule: $\partial_tv(x,t)=\kappa^{-1}\partial_tu(x,t/\kappa)$ while
$\Delta_xv(x,t)=(\Delta u)(x,t/\kappa)$, so $v_t=\Delta v$ is equivalent to
$u_t=\kappa\Delta u$; the identity $\Gamma_\kappa(x,t)=\Gamma(x,\kappa t)$ gives the unit-mass normalisation of
[[lem-heat-kernel-normalisation-scaling-and-derivatives]].

For $n\ge3$, the ball Poisson kernel
$P_{R,a}(x,y)=(R^2-|x-a|^2)/(R\omega_{n-1}|x-y|^n)$ of
[[thm-poisson-kernel-for-a-ball-in-rn]] is a boundary-value kernel: its two
slots are an interior point and a boundary point, it carries no time parameter,
and its dependence on $x$ is not translation-invariant convolution, so it is
not the heat kernel in other notation. For the half-space kernel of
[[thm-poisson-kernel-and-bounded-dirichlet-problem-on-the-half-space]], a
boundary mode $e^{2\pi i\xi\cdot x'}$ has bounded harmonic extension
$e^{-2\pi|\xi|t}e^{2\pi i\xi\cdot x'}$: direct differentiation shows it is
harmonic and the bounded Dirichlet uniqueness identifies it with the Poisson
integral. Its derivative at $t=0$ is $-2\pi|\xi|$ times that mode, whereas
$\Delta_{x'}$ multiplies the mode by $-4\pi^2|\xi|^2$. This is the Fourier-symbol
meaning of the Poisson generator $-\sqrt{-\Delta}$, and distinguishes its
normal-time family from the heat semigroup. In three spatial dimensions the
homogeneous wave representation uses spherical means at radius $ct$, rather than a positive
Gaussian convolution; this comparison is dimension-specific. A source's
diffusivity normalisation must be matched before its kernel formula is quoted.
