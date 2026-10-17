---
id: post-tgr-kepler-canonical-preparation
kind: postulate
title: "Relative-shell canonical comparison preparation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-regulated-kepler-shell-law
  - lem-tgr-relative-shell-canonical-response
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-regulated-kepler-shell-law: mathematical-premise
  lem-tgr-relative-shell-canonical-response: mathematical-premise
justified_by: []
physical_scope: "Effective Newtonian relative two-body Hamiltonian on the fixed hard radial shell r0≤|q|≤R with canonical β>0 preparation; the center-of-mass mode is absent and the unbounded canonical momentum tail has no uniform slow-speed guarantee."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "§2(vii)(c), PDF p. 10, specifies fixed particle number and inverse temperature in the canonical ensemble. In §2(i), PDF p. 3, equations (2.2)–(2.3), Katz's Gibbs entropy uses an energy-shell density of states, not cumulative phase volume. The distinct volume-entropy convention and exact confined relative model here are specified by the local mathematical suppliers."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §§1.3–1.3.3 and §2.1, PDF pp. 23–30 and from p. 38, for canonical probability weights and classical phase integrals."
verification:
  precheck: pass
---

## Postulate

Use positive masses $m_1,m_2$ in $\mathrm{kg}$, reduced mass $\mu=m_1m_2/(m_1+m_2)$, $A=Gm_1m_2>0$ in $\mathrm{J\,m}$, relative position $q\in\mathbb R^3$ in metres, relative momentum $p\in\mathbb R^3$ in $\mathrm{kg\,m\,s^{-1}}$, and action reference $h_*>0$ in $\mathrm{J\,s}$. Fix $r_0>0$ and $R>16r_0$. Adopt the relative phase region and Hamiltonian of [[def-tgr-regulated-kepler-shell-law]]:
$$\Gamma_{\rm rel}=\{(q,p):r_0\le|q|\le R,\ p\in\mathbb R^3\},\qquad d\nu_{\rm rel}=h_*^{-3}d^3q\,d^3p,\qquad h(q,p)=\frac{|p|^2}{2\mu}-\frac A{|q|}.$$
There are no center-of-mass variables and no identical-particle factor in this relative phase convention. Adopt a canonical preparation at inverse energy $\beta>0$ with $T_K=(k_B\beta)^{-1}$ and density $p_\beta(q,p)=Z_{\rm rel}(\beta)^{-1}e^{-\beta h(q,p)}$ relative to $d\nu_{\rm rel}$ on all of $\Gamma_{\rm rel}$. Its finite positive normalizer and normalized density follow from [[lem-tgr-relative-shell-canonical-response]]. Since $h$ is finite throughout this domain, the density is positive for arbitrarily large momentum magnitudes. This is a fixed relative-shell effective Newtonian model, distinct from the microcanonical preparation and Gibbs-volume entropy convention in [[post-tgr-kepler-microcanonical-volume-preparation]].

Here $m_1,m_2,G,r_0,R,h_*$ and $\beta$ are fixed inputs; the reduced mass $\mu$, coupling product $A$, and Hamiltonian $h$ are the specified derived constructions. The partition function, density, temperature parameter and response are derived within this selected preparation.

Because canonical momenta are unbounded, this preparation does not have the whole-ensemble slow-motion bound imposed on the separate bounded-energy microcanonical branch. The postulate makes no claim that either distribution is dynamically reached or empirically observed.
