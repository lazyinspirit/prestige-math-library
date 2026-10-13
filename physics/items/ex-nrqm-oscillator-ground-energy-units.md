---
id: ex-nrqm-oscillator-ground-energy-units
aliases: [nrqm-oscillator-example-ground-energy-units]
kind: example
domain: mathematics
title: "Ground energy units"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-nrqm-oscillator-hermite-recurrence, thm-algebra-of-derivatives, thm-chain-rule, def-complex-exponential, thm-derivative-of-exponential, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 pp. 1-9 (zero point energy and level spacing)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (ground state and the length scale)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $m,\omega,\hbar>0$ and let $\ell=\sqrt{\hbar/(m\omega)}$, $\psi_n$, $H_{\mathrm{osc}}$ be as in [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]. Then:

(a) the spectrum of $H_{\mathrm{osc}}$ is exactly $\{\hbar\omega(n+\frac12):n\in\mathbb N\}$; measured in units of $\hbar\omega$ the eigenvalues are $n+\frac12$, the ground energy is

$$\frac{E_0}{\hbar\omega}=\frac12,$$

and every consecutive gap is $1$ unit: $\frac{E_{n+1}-E_n}{\hbar\omega}=1$;

(b) the ground eigenvector is the Gaussian

$$\psi_0(x)=\pi^{-1/4}\ell^{-1/2}e^{-x^2/(2\ell^2)},$$

and it satisfies the eigenvalue equation pointwise:

$$-\frac{\hbar^2}{2m}\psi_0''(x)+\frac{m\omega^2}{2}x^2\psi_0(x)=\frac{\hbar\omega}{2}\psi_0(x)\qquad(x\in\mathbb R);$$

(c) for the isotropic $d$-dimensional oscillator of [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]$\,$(d) with common frequency $\omega$, the ground energy is $\frac{d}{2}\hbar\omega$ in the same units, in particular $\frac32\hbar\omega$ for $d=3$, and all gaps within one coordinate direction are $\hbar\omega$;

(d) no other value of the ground energy is compatible with the displayed spectrum: $E_0$ is the infimum of $\sigma(H_{\mathrm{osc}})$.

No physical identification of $\hbar\omega$ with a measured energy is made; the statements are about the operator $H_{\mathrm{osc}}$ built from the positive parameters.

## Facts & Assumptions

**Given:** positive reals $m,\omega,\hbar$; $\ell=\sqrt{\hbar/(m\omega)}$; the oscillator operator $H_{\mathrm{osc}}=\frac{\hbar\omega}{2}DAD^{-1}$ with basis $(\psi_n)$.

[F1] $H_{\mathrm{osc}}$ is self-adjoint with complete orthonormal eigenbasis $(\psi_n)$, $H_{\mathrm{osc}}\psi_n=\hbar\omega(n+\frac12)\psi_n$, and $\sigma(H_{\mathrm{osc}})=\{\hbar\omega(n+\frac12):n\in\mathbb N\}$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]](b)).

[F2] $\psi_0=Dg_0$ with $g_0(y)=\pi^{-1/4}e^{-y^2/2}$, $\ell=\sqrt{\hbar/(m\omega)}$, and for every $f=D(pg_0)$ one has $H_{\mathrm{osc}}f=-\frac{\hbar^2}{2m}f''+\frac{m\omega^2}{2}x^2f$ pointwise ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]](a),(c), [[thm-nrqm-oscillator-hermite-recurrence]](a)).

[F3] $(e^{-x^2/(2\ell^2)})'=-\frac{x}{\ell^2}e^{-x^2/(2\ell^2)}$ and $\bigl(e^{-x^2/(2\ell^2)}\bigr)''=\bigl(-\frac1{\ell^2}+\frac{x^2}{\ell^4}\bigr)e^{-x^2/(2\ell^2)}$ by the product rule, the chain rule and $(\exp)'=\exp$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-derivative-of-exponential]], [[def-complex-exponential]]).

[F4] $\frac{\hbar^2}{2m\ell^2}=\frac{\hbar\omega}{2}$ and $\frac{\hbar^2}{2m\ell^4}=\frac{m\omega^2}{2}$, because $\ell^2=\hbar/(m\omega)$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

## Verification

1.1 [(a) levels] By [F1], each $\psi_n$ is a unit eigenvector with eigenvalue $\hbar\omega(n+\frac12)$, and $\sigma(H_{\mathrm{osc}})$ is exactly the set of these numbers. Hence $E_0=\hbar\omega/2$, so $E_0/(\hbar\omega)=\frac12$, and $E_{n+1}-E_n=\hbar\omega$ for every $n$, so $(E_{n+1}-E_n)/(\hbar\omega)=1$. [F1, algebra]

1.2 [(c) $d$-dimensional ground energy] In the isotropic $d$-dimensional operator $H$ of [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]]$\,$(d), the eigenvalues are $\hbar\omega(M+\frac d2)$, $M\in\mathbb N$, so the smallest is $\hbar\omega\cdot\frac d2$: the ground energy is $\frac d2\hbar\omega$, equal to $\frac32\hbar\omega$ for $d=3$, and the increment of $M$ by one raises the energy by $\hbar\omega$. [F1, algebra]

2.1 [(b) ground eigenfunction] By [F2], $\psi_0(x)=\ell^{-1/2}\pi^{-1/4}e^{-x^2/(2\ell^2)}$. Using [F3], $-\frac{\hbar^2}{2m}\psi_0''+\frac{m\omega^2}{2}x^2\psi_0=\bigl[\frac{\hbar^2}{2m\ell^2}+\bigl(-\frac{\hbar^2}{2m\ell^4}+\frac{m\omega^2}{2}\bigr)x^2\bigr]\psi_0$, and by [F4] the coefficient of $x^2$ vanishes while the constant term is $\frac{\hbar\omega}{2}$; hence $H_{\mathrm{osc}}\psi_0=\frac{\hbar\omega}{2}\psi_0$ pointwise, in agreement with $H_{\mathrm{osc}}\psi_0=\hbar\omega(0+\frac12)\psi_0$ from [F1]. [step 1.1, F2, F3, F4, algebra]

3.1 [(d) minimality] By [F1] the spectrum is the closed discrete set $\{\hbar\omega(n+\frac12):n\in\mathbb N\}$, whose infimum is its least element $\hbar\omega/2=E_0$; no smaller value belongs to the spectrum. [step 1.1, F1] ∎
