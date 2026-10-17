---
id: pthm-qsm-fermi-zero-temperature
kind: physics-theorem
title: "Ideal Fermi continuum and zero-temperature endpoint"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-qsm-models-statistics-and-preparation
  - pthm-qsm-periodic-ideal-occupation
  - thm-qsm-models-lattice-riemann-bose-bound
  - def-countable-choice
dependency_roles:
  post-qsm-models-statistics-and-preparation: physical-assumption
  pthm-qsm-periodic-ideal-occupation: physical-result
  thm-qsm-models-lattice-riemann-bose-bound: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "The continuum grand-state density and energy and its fixed-density zero-temperature endpoint for a three-dimensional homogeneous ideal Fermi dispersion alpha|k|^2 with finite internal degeneracy g. The zero-temperature results are conditional ideal-gas predictions, with no Sommerfeld expansion, material-specific model, or reported observation."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §3.6, Fermi gases and degeneracy pressure"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 24, Fermi gas and zero-temperature limit"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/9d5207eef23c4d6e18ef3afbca5d9d81_MIT8_333F13_Lec24.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and use the ideal spectral gas model of [[pthm-qsm-periodic-ideal-occupation]], specializing to $d=3$, a positive integer internal degeneracy $g\ge1$, and $\alpha=\hbar^2/(2m)>0$. For finite $\mu$ and $\beta>0$, the continuum number and energy densities are
$$\rho(\mu,\beta)=\frac{g}{(2\pi)^3}\int_{\mathbb R^3}\frac{d^3k}{e^{\beta(\alpha|k|^2-\mu)}+1},\quad u(\mu,\beta)=\frac{g}{(2\pi)^3}\int_{\mathbb R^3}\frac{\alpha|k|^2d^3k}{e^{\beta(\alpha|k|^2-\mu)}+1}.$$
For each $\rho>0$ and $\beta>0$ there is a unique $\mu(\rho,\beta)$ giving that density. As $\beta\to\infty$, $\mu(\rho,\beta)\to E_F$ and $u\to(3/5)\rho E_F$, where
$$k_F=(6\pi^2\rho/g)^{1/3},\qquad E_F=\alpha k_F^2.$$
The ideal grand thermodynamic pressure $p$ defined by
$$p=\frac{g}{\beta(2\pi)^3}\int_{\mathbb R^3}\log(1+e^{-\beta(\alpha|k|^2-\mu)})d^3k$$
satisfies $p=2u/3$; hence its zero-temperature endpoint is $2\rho E_F/5$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the periodic ideal-gas preparation, dimensionless integer $g\ge1$, $\alpha=\hbar^2/(2m)>0$ in J m$^2$, $m$ in kg, $\hbar$ in J s, wave vector $k$ in m$^{-1}$, $\mu$ and $E_F$ in J, density $\rho$ in m$^{-3}$, energy density $u$ in J m$^{-3}$, pressure $p$ in Pa, and $\beta>0$ in J$^{-1}$.

[A1] [[post-qsm-models-statistics-and-preparation]]: grand Gibbs preparation and fermionic sector are adopted model assumptions.

[F1] [[pthm-qsm-periodic-ideal-occupation]], Statement: the finite-volume model and its continuum density/energy integrals are the Riemann limits of the exact diagonal grand-state traces.

[F2] [[thm-qsm-models-lattice-riemann-bose-bound]], Statement: Gaussian tails with polynomial weights are integrable and uniform on compact finite-$\mu$ parameter sets, which supplies the integrable far-tail bounds below.

## Proof



1.1 Under the adopted preparation [A1] and the exact periodic continuum state [F1], for fixed $\beta>0$, the integrand is continuous in $(k,\mu)$ and strictly increases at every $k$ with $\mu$. The Gaussian tail bound from [F2] is uniform when $\mu$ ranges over a compact interval, so the integral is continuous in $\mu$. As $\mu\to-\infty$, the pointwise bound $f_F\le e^{\beta\mu}e^{-\beta\alpha|k|^2}$ makes $\rho\to0$. As $\mu\to+\infty$, on the ball $\alpha|k|^2\le\mu$ the occupation is at least $1/2$; the ball volume tends infinity, so $\rho\to\infty$. Strict monotonicity and the intermediate value theorem give a unique chemical potential for every positive $\rho$. [given, A1, F1, F2, algebra]

1.2 Fix $\mu>0$ and let $k_\mu=\sqrt{\mu/\alpha}$. Off any annulus $||k|-k_\mu|<\delta$, the Fermi occupation converges uniformly on bounded sets to the indicator of $|k|<k_\mu$, since the exponent has a positive gap from zero there. The annulus volume tends zero with $\delta$ and the occupation is bounded by one, so its number and bounded-energy contributions vanish as $\delta\downarrow0$. Fix $\beta_0>0$ in J$^{-1}$. For $|k|$ sufficiently large, $\alpha|k|^2\ge2\mu$ and, for every $\beta\ge\beta_0$, $f_F\le e^{-\beta\alpha|k|^2/2}\le e^{-\beta_0\alpha|k|^2/2}$. The latter Gaussian and its energy-weighted counterpart $\alpha|k|^2e^{-\beta_0\alpha|k|^2/2}$ are integrable and bound the respective number and energy tails uniformly for $\beta\ge\beta_0$. Splitting into the bounded region and this tail proves convergence of both integrals to their filled-ball integrals. [given, F2, algebra]

2.1 Spherical integration of the limiting indicator gives $\rho_0(\mu)=g(2\pi)^{-3}(4\pi k_\mu^3/3)=gk_\mu^3/(6\pi^2)$ and $u_0(\mu)=g(2\pi)^{-3}4\pi\alpha k_\mu^5/5=g\alpha k_\mu^5/(10\pi^2)=(3/5)\rho_0(\mu)\mu$. Solving $\rho_0(E_F)=\rho$ gives the displayed $k_F,E_F$. For any $0<\delta<E_F$, the zero-temperature limits at $E_F-\delta$ and $E_F+\delta$ strictly bracket $\rho$; for sufficiently large $\beta$ the finite-temperature densities at these endpoints still bracket $\rho$, so step 1.1 traps $\mu(\rho,\beta)$ between them. The energy density is increasing in $\mu$ pointwise; therefore $u_\beta(E_F-\delta)\le u_\beta(\mu(\rho,\beta))\le u_\beta(E_F+\delta)$. Step 1.2 gives the limits of both bounds, and continuity of $u_0(\mu)$ as $\delta\downarrow0$ proves $u\to(3/5)\rho E_F$. [step 1.1, step 1.2, algebra]

3.1 Let $L(r)=\log(1+e^{-\beta(\alpha r^2-\mu)})$. Then $L'(r)=-2\beta\alpha r f_F(r)$. The boundary term $r^3L(r)$ vanishes at $r=0$ and at infinity, the latter because $L(r)\le e^{-\beta(\alpha r^2-\mu)}$. Integration by parts on $[0,R]$ followed by $R\to\infty$ gives $\int_0^\infty r^2L(r)dr=(2\beta\alpha/3)\int_0^\infty r^4f_F(r)dr$. Substitution into the radial definitions of $p$ and $u$ gives $p=2u/3$. Passing to the limit in step 2.1 yields $p\to2\rho E_F/5$. These are ideal-model predictions; no material pressure is inferred. [step 2.1, algebra] ∎
