---
id: def-tgr-gravitating-phase-reference
kind: definition
title: "Finite gravitational phase and entropy reference"
status: published
origin: pipeline
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
dependency_level: 0
---

## Definition

Use SI dimensions for the numerical model parameters: Newton constant $G$ has units $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, each mass $m_i$ has units $\mathrm{kg}$, each position $q_i$ has units $\mathrm{m}$, each momentum $p_i$ has units $\mathrm{kg\,m\,s^{-1}}$, energy $H$ has units $\mathrm{J}$, Boltzmann constant $k_B$ has units $\mathrm{J\,K^{-1}}$, and inverse energy $\beta$ has units $\mathrm{J^{-1}}$. Fix an action reference $h_*>0$ in $\mathrm{J\,s}$; it is a normalization convention and is not identified with Planck's constant.

For an integer $N\ge1$, any Lebesgue measurable position region $B\subseteq\mathbb R^3$, and equal particle mass $m>0$, define the ordered phase space $\Gamma_N=B^N\times\mathbb R^{3N}$ with coordinates $(q_1,\ldots,q_N,p_1,\ldots,p_N)$. This phase space and measure are allowed even when $B$ is unbounded or has infinite volume; finite canonical preparations separately require a positive finite partition integral. The dimensionless reference measure for identical classical particles is
$$d\nu_N=\frac{d^{3N}q\,d^{3N}p}{N!h_*^{3N}}.$$
For a measurable real Hamiltonian $H:\Gamma_N\to\mathbb R$ and $\beta>0$ with $0<Z_N(\beta):=\int_{\Gamma_N}e^{-\beta H}\,d\nu_N<\infty$, define the canonical density $p_\beta=Z_N(\beta)^{-1}e^{-\beta H}$ relative to $\nu_N$. A probability density relative to $\nu_N$ is a measurable function $\rho:\Gamma_N\to[0,\infty)$ with $\int_{\Gamma_N}\rho\,d\nu_N=1$. Set $0\log0:=0$. For such a density with $\int_{\Gamma_N}|\rho\log\rho|\,d\nu_N<\infty$, define its reference-relative entropy by
$$S(\rho)=-k_B\int_{\Gamma_N}\rho\log\rho\,d\nu_N.$$

When $H$ is fixed and the Gibbs-volume function $\Omega(E):=\nu_N\{H\le E\}$ satisfies $0<\Omega(E)<\infty$, define the Gibbs-volume entropy by $S_G(E)=k_B\log\Omega(E)$. Where $\omega(E):=\Omega'(E)>0$, define the distinct surface-entropy convention, for a fixed energy width $\Delta E>0$ measured in the same units as $E$, by $S_B(E)=k_B\log(\omega(E)\Delta E)$. Since $\nu_N$ and $\Omega$ are dimensionless, $\omega$ has units inverse to energy and $\omega\Delta E$ is dimensionless. For either $\alpha\in\{G,B\}$, where $S_\alpha$ is differentiable and $S_\alpha'(E)>0$, define $T_\alpha(E):=[S_\alpha'(E)]^{-1}$; where also $T_\alpha'(E)\ne0$, define $C_\alpha(E):=dE/dT_\alpha=1/T_\alpha'(E)$. These are finite-system conventions, and their temperatures and capacities need not agree.

The measure is dimensionless because $d^{3N}q\,d^{3N}p$ and $h_*^{3N}$ have the same units. The definition supplies no physical assertion that the chosen Hamiltonian describes nature and no mechanism of dynamical equilibration.
