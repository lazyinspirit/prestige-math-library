---
id: def-emg-strict-charged-barotropic-system
kind: definition
title: "Strict charged barotropic tensor system"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-emg-electrovacuum-cauchy-system]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
verification:
  precheck: pending
---

## Definition

Use the oriented, time-oriented smooth Lorentzian four-manifold, metric-selected Levi-Civita connection, signature $(-,+,+,+)$, two-form $F$, Einstein tensor $G$, and SI tensor conventions of [[def-emg-electrovacuum-cauchy-system]]. In particular, $F$ is a smooth real section of $\Lambda^2T^*M$, $x^0=ct$ is a length coordinate, the electromagnetic stress is

$$T_{\mathrm{EM},ab}=\mu_0^{-1}\left(F_{ac}F_b{}^c-\tfrac14 g_{ab}F_{cd}F^{cd}\right),$$

and the sourced Maxwell convention is $dF=0$ and $d\star_gF=\mu_0\iota_j\operatorname{vol}_g$, equivalently $\nabla_aF^{ab}=-\mu_0j^b$. These are mathematical model equations, not claims that the model describes nature.

Choose an open real interval $J$ and a smooth equation of state $p:J\to\mathbb R$ such that $\epsilon+p(\epsilon)>0$ and $0<p'(\epsilon)<1$ for every $\epsilon\in J$. The rest-energy density $\epsilon:M\to J$ and pressure $p(\epsilon)$ have SI units J m$^{-3}$=Pa; $p$ depends only on $\epsilon$, which is the meaning of *barotropic* here. Fix $\epsilon_*\in J$ and a constant $N_*>0$ with units m$^{-3}$ and define the positive EOS scalar

$$N(\epsilon)=N_*\exp\!\left(\int_{\epsilon_*}^{\epsilon}\frac{dz}{z+p(z)}\right).$$

For each $\epsilon\in J$, the closed interval between $\epsilon_*$ and $\epsilon$ is a compact subset of $J$, so the smooth integrand has a finite ordinary integral there. The exponent is dimensionless and $N(\epsilon)>0$. This is an EOS-defined number-density variable and normalization, not a microscopic particle derivation.

Let $u$ be a smooth future-directed vector field with $g(u,u)=-1$, and let $Z:M\to\mathbb R$ be a smooth scalar with units coulomb, interpreted within this model as charge per number-density unit. Define the current and matter stress by

$$j^a=cN(\epsilon)Z u^a,\qquad T_{m,ab}=(\epsilon+p(\epsilon))u_a u_b+p(\epsilon)g_{ab}.$$

Here $u$ is dimensionless, $j$ has SI component units A m$^{-2}$, and $T_m$ has units Pa in the $x^0=ct$ convention. The *strict charged barotropic system* is the smooth tensor system

$$\nabla^aT_{m,ab}=F_{bc}j^c,\qquad u^a\nabla_aZ=0,$$

coupled to the stated sourced Maxwell equations and

$$G_{ab}+\Lambda g_{ab}=\kappa(T_{m,ab}+T_{\mathrm{EM},ab}),\qquad \kappa=8\pi G_N/c^4>0,\quad \Lambda\in\mathbb R.$$

The first equation is the charged-fluid energy-momentum balance; its Lorentz-force term is orthogonal to $u$ by antisymmetry of $F$. The second transports the charge-per-particle scalar along the fluid flow. No independent current continuity law is added: it is derived in [[lem-emg-charged-fluid-current-conservation]]. No dust, shock, vacuum interface, free boundary, degenerate sound speed, superluminal sound speed, finite-conductivity law, or point-charge source is included.
