---
page: qm-math-oscillator-examples
title: Qm Math Oscillator — Examples
status: published
items: []
requires:
  - qm-math-oscillator
examples:
  - ex-nrqm-oscillator-ground-energy-units
  - ex-nrqm-oscillator-poisson-number-distribution
  - ex-nrqm-oscillator-formal-nonnormalizable-solution
---

The companion page to [[qm-math-oscillator]] records three explicit
mathematical checks behind its spectral, coherent and differential results. All
three items are mathematics: they carry `domain: mathematics`, depend only on
the items of the parent page and on mathematical suppliers, and make no
physical or empirical claim.

[[ex-nrqm-oscillator-ground-energy-units]] reads the spectrum
$\{\hbar\omega(n+\frac12)\}$ of the realised oscillator in units of
$\hbar\omega$: the ground energy is $1/2$, every gap is $1$, the ground
eigenvector is the Gaussian $\psi_0(x)=\pi^{-1/4}\ell^{-1/2}e^{-x^2/(2\ell^2)}$
solving $-\frac{\hbar^2}{2m}\psi_0''+\frac{m\omega^2}{2}x^2\psi_0=
\frac{\hbar\omega}{2}\psi_0$ pointwise, and the isotropic $d$-dimensional
ground energy is $d/2$ in the same units, so $\frac32\hbar\omega$ for $d=3$.
None of these numbers is identified with a measured energy.

[[ex-nrqm-oscillator-poisson-number-distribution]] computes the coefficients
of the coherent vector in the number basis:
$p_n=|\langle g_n,\psi_z\rangle|^2=e^{-|z|^2}|z|^{2n}/n!$ has total mass $1$,
mean $|z|^2$ and variance $|z|^2$, so the coefficient distribution is the
Poisson distribution with parameter $\lambda=|z|^2$, with every $p_n$ positive
when $z\ne0$. The statement is about the coefficients of a vector in an
orthonormal basis, not about measured counts.

[[ex-nrqm-oscillator-formal-nonnormalizable-solution]] exhibits the classical
formal second solution $u_2(y)=e^{-y^2/2}\int_0^ye^{t^2}dt$ of the ground-state
equation $u''=(y^2-1)u$: it has constant Wronskian $g_0u_2'-g_0'u_2=\pi^{-1/4}$
against the Gaussian $g_0$, satisfies $|u_2(y)|^2\ge e^{y^2-4y+2}$ for $y\ge1$ and is therefore not in
$L^2(\mathbb R,dy)$, and every $C^2\cap L^2$ solution of the equation is a
constant multiple of $g_0$. This is the analytic reason the $L^2$
eigenfunction at the bottom of the spectrum is the normalizable Gaussian and
not the formal growing solution.

