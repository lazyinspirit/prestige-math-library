---
id: def-csm-gibbs-physical-parameters
kind: definition
title: "Classical Gibbs quantities and SI reference conventions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps: ["def-csm-finite-range-lattice-interaction", "def-csm-stable-superstable-continuum-interaction", "thm-gaussian-integral", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions", "def-countable-choice"]
justified_by: []
dependency_roles: {"def-csm-finite-range-lattice-interaction": "mathematical-premise", "def-csm-stable-superstable-continuum-interaction": "mathematical-premise", "thm-gaussian-integral": "mathematical-premise", "thm-tonelli-theorem-for-sigma-finite-product-spaces": "mathematical-premise", "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
physical_scope: "SI units and reference conventions for the specified classical lattice and continuum Gibbs models; no empirical calibration or material-fit claim."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
      locator: "Complete PDF, especially printed pp. 128–134 / PDF pp. 1–6."
---

## Definition

Use SI units. Let $k_B>0$ be Boltzmann's constant in joules per kelvin, let $T>0$ be absolute temperature in kelvin, and define $\beta=(k_BT)^{-1}$ in joules$^{-1}$. For a finite-alphabet lattice model in dimension $d\geq1$, the lattice spacing $a>0$ is in metres; a spin is a dimensionless label. In the nearest-neighbor Ising convention
$$H_\Lambda=-J_{\rm I}\sum_{\{i,j\}\subset\Lambda,\ |i-j|_1=1}s_i s_j-h\sum_{i\in\Lambda}s_i,$$
the coupling $J_{\rm I}$ and field parameter $h$ are energies in joules, so $\beta J_{\rm I}$ and $\beta h$ are dimensionless. Here $h$ is an energy bias per spin, not by itself a magnetic-field strength.

For a finite region, use the energy convention of [[def-csm-finite-range-lattice-interaction]], with each physical interaction value $\Phi_r$ and total energy $H_\Lambda$ measured in joules. Let $Z_\Lambda=\sum_{\sigma\in A^\Lambda}e^{-\beta H_\Lambda(\sigma)}$ and define dimensionless pressure per site $p_\Lambda=|\Lambda|^{-1}\log Z_\Lambda$. When $p=\lim_{n\to\infty}|B_n|^{-1}\log Z_{B_n}$ exists for cubes $B_n=[-n,n]^d\cap\mathbb Z^d$, define physical pressure $\mathsf P=k_BT\,p/a^d$ in joules per cubic metre. For a stationary state $\mu$ on a finite alphabet, let $H_n=-\sum_{\sigma\in A^{B_n}}\mu_{B_n}(\sigma)\log\mu_{B_n}(\sigma)$ with $0\log0=0$; when the limit exists, its Shannon entropy density is $h_{\rm Sh}=\lim_{n\to\infty}H_n/|B_n|$ in nats per site. The mean energy per site is $u=\sum_{r\in\mathcal R}\mathbb E_\mu[\Phi_r]$ in joules per site. Define reference spin entropy density $s=k_Bh_{\rm Sh}/a^d$ and free-energy density $f=u/a^d-Ts$; both are per physical volume. Thus $f$ and $\mathsf P$ have units joules per cubic metre, while $s$ has units joules per kelvin per cubic metre.

For a continuum model in dimension $d$, let $x,p\in\mathbb R^d$ be position and momentum, let $m_{\rm p}>0$ be particle mass in kilograms, and use kinetic energy $|p|^2/(2m_{\rm p})$. Assume Countable Choice for the Lebesgue change-of-variables interface [[def-countable-choice]]. Tonelli's theorem [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and the one-dimensional Gaussian integral [[thm-gaussian-integral]] give $\int_{\mathbb R^d}e^{-|q|^2}\,d^dq=\pi^{d/2}$. Set $c=\sqrt{\beta/(2m_{\rm p})}>0$ and apply the nonnegative change-of-variables theorem [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] to the $C^1$ diffeomorphism $q\mapsto cq$ of $\mathbb R^d$ and $f(q)=e^{-|q|^2}$. Since its Jacobian determinant is $c^d$,
$$\int_{\mathbb R^d}e^{-\beta|p|^2/(2m_{\rm p})}\,d^dp=c^{-d}\pi^{d/2}=(2\pi m_{\rm p}k_BT)^{d/2}.$$
Under the phase-space reference measure $d^dx\,d^dp/h_{\rm ref}^d$, with reference action $h_{\rm ref}>0$ in joule-seconds, the integrated momentum factor is
$$h_{\rm ref}^{-d}\int_{\mathbb R^d}e^{-\beta|p|^2/(2m_{\rm p})}\,d^dp=\left(\frac{\sqrt{2\pi m_{\rm p}k_BT}}{h_{\rm ref}}\right)^d=\lambda_T^{-d},\qquad \lambda_T=\frac{h_{\rm ref}}{\sqrt{2\pi m_{\rm p}k_BT}}.$$
For chemical potential $\mu$ in joules, define the classical activity $z_c=e^{\beta\mu}\lambda_T^{-d}$, with units $\mathrm m^{-d}$. Thus $\lambda_T$ is a length and $z_c$ is inverse volume. This momentum integration explains the one-particle thermal factor; it does not derive particle indistinguishability or a factorial convention. The choice of $h_{\rm ref}$ is a reference convention, not a consequence of the classical equations of motion. For continuum interactions, the potential hypotheses and energy meaning are as in [[def-csm-stable-superstable-continuum-interaction]]. This item defines units and model quantities; it does not calibrate them to a material or claim empirical accuracy.
