---
id: post-tgr-finite-newton-gravity-preparation
kind: postulate
title: "Finite regulated Newtonian gravitational canonical preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-gravitating-phase-reference
  - def-tgr-softened-gravity-finite-phase
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-gravitating-phase-reference: mathematical-premise
  def-tgr-softened-gravity-finite-phase: mathematical-premise
justified_by: []
physical_scope: "Finite N≥2, bounded positive-volume confining box, equal classical masses, fixed positive softening length and inverse-energy parameter; effective Newtonian weak-field/slow-motion model only, with no thermalization or dynamical stability claim."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "Complete 41-page manuscript retrieved; §§2(i)–2(ii), PDF pp. 2–5, on the finite-box point-particle collapse obstruction and the role of short-distance cutoffs; §2(c), PDF pp. 9–10, on a canonical preparation and its cutoff-dependent scope. The present finite softened model is specified locally."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–1.3.3, PDF pp. 23–30, for canonical weights, phase-space integrals, response, and entropy conventions."
verification:
  precheck: pass
---

## Postulate

Work in SI units. Adopt positive Newton constant $G$ in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, common particle mass $m$ in $\mathrm{kg}$, positions $q_i$ in $\mathrm m$, momenta $p_i$ in $\mathrm{kg\,m\,s^{-1}}$, energy $H$ in joules, Boltzmann constant $k_B$ in $\mathrm{J\,K^{-1}}$, and inverse-energy parameter $\beta>0$ in $\mathrm{J^{-1}}$. Fix an action reference $h_*>0$ in $\mathrm{J\,s}$; it is a phase-counting convention, not an assertion that $h_*$ equals Planck's constant. These conventions follow [[def-tgr-framework-units]] and [[def-tgr-gravitating-phase-reference]].

For an integer $N\ge2$, take a bounded measurable confining region $B\subset\mathbb R^3$ with $0<|B|<\infty$ and adopt the ordered phase space $\Gamma_N=B^N\times\mathbb R^{3N}$ and identical-particle reference measure $d\nu_N=d^{3N}q\,d^{3N}p/(N!h_*^{3N})$ of [[def-tgr-gravitating-phase-reference]]. Fix a softening length $a>0$ in metres and adopt the Hamiltonian
$$H_{N,a}(q,p)=\sum_{i=1}^N\frac{|p_i|^2}{2m}-\sum_{1\le i<j\le N}\frac{Gm^2}{\sqrt{|q_i-q_j|^2+a^2}},$$
which is the model defined in [[def-tgr-softened-gravity-finite-phase]]. The preparation assigns canonical weight $e^{-\beta H_{N,a}}$ relative to $\nu_N$; its normalization is established separately in [[pthm-tgr-regulated-gravity-canonical-equilibrium]]. Reflecting or confining walls specify the finite position region, but no wall dynamics is used in the equilibrium calculation.

Within this formulation, $N,m,G,a,B,h_*$ and $\beta$ are fixed model/preparation inputs. The displayed $H_{N,a}$ is the defined effective Hamiltonian; $Z_N$, the normalized density, mean energy, entropy and response are derived mathematical quantities. Their definition does not make them universal properties of gravitating matter.

This is an adopted effective Newtonian statistical model in a stated weak-field, slow-motion regime. The unbounded momentum domain is part of the canonical mathematical preparation and does not give a uniform speed bound on every point in its support. The postulate asserts neither dynamical equilibration, an observed gravitating gas, nor stability of a self-consistently gravitating relativistic solution.
