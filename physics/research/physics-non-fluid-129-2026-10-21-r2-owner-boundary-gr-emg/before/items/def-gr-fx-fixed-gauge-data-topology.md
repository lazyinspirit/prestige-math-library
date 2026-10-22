---
id: def-gr-fx-fixed-gauge-data-topology
kind: definition
title: "Fixed-gauge finite-slab data and solution topology"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps:
  - thm-gr-local-geometric-development
  - thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
  - def-gr-periodic-torus-and-sobolev-spaces
  - def-gr-periodic-symmetric-hyperbolic-system
  - def-countable-choice
dependency_roles:
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), Sections 3.1 and 5.3: symmetric-hyperbolic energy and Cauchy stability on a fixed common region"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations, UC Davis lecture notes, revised 18 June 2014, Chapter 8, Sections 8.1 and 8.3: the symmetric-system energy identity and its positivity hypotheses"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, Sections 3.1 and 3.3–3.4: symmetric-hyperbolic Cauchy theory, stability and continuation"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
verification:
  precheck: pending
---

## Definition

Fix an integer $s\ge5$, a finite number $T>0$, the closed interval $J=[0,T]$, and the flat spatial torus $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$. Use the spaces $H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ and one fixed periodic symmetric-hyperbolic system as defined in [[def-gr-periodic-symmetric-hyperbolic-system]]: its state domain $O\subseteq\mathbb R^m$ is open, its coefficient maps $A^\mu(t,x,z),B(t,x,z)$ are smooth on the stated time, torus and state domain, each $A^\mu$ is symmetric, and $A^0$ is positive definite. The fixed-gauge Einstein state is the finite vector $z=(g_{ab},p_{ab},q_{abi},w)$, where $p_{ab}=\partial_0g_{ab}$, $q_{abi}=\partial_i g_{ab}$, and $w$ is the complete matter and auxiliary state of one fixed reduction.

For the SI interpretation, the system's time parameter $t$ is the length coordinate $x^0=ct_{\rm phys}$ in metres, while $x^i$ are dimensionless angular coordinates on the torus. The metric components then have coordinate-dependent units: $g_{00}$ is dimensionless, $g_{0i}$ has units of metres, and $g_{ij}$ has units of square metres. Accordingly $p_{ab}=\partial_0g_{ab}$ has units $[g_{ab}]\,\mathrm m^{-1}$ and $q_{abi}=\partial_i g_{ab}$ has units $[g_{ab}]$. The model-specific components of $w$ have the fixed units declared by that reduction. Divide each component by its fixed declared unit scale before forming the Euclidean-valued state and its Sobolev norm; the resulting numerical state is dimensionless. The coefficient and source fields are those of this same fixed normalized reduction. Thus $R_z$ is a bound on that normalized state, and $R_t$ is a separate bound on its derivative with respect to the length coordinate $x^0$ (units $\mathrm m^{-1}$). Neither is a unit-independent physical observable. If physical seconds are used instead, then $\partial_{x^0}=c^{-1}\partial_{t_{\rm phys}}$; consequently the term $A^0\partial_{x^0}$ becomes $c^{-1}A^0\partial_{t_{\rm phys}}$ unless the entire equation is multiplied by $c$.

A fixed-gauge finite-slab comparison context consists of one such coefficient family on an open time interval containing $J$, one coordinate gauge and reconstruction rule, compact state sets $K_0\subset\operatorname{int}K_1\subset\operatorname{int}K_2\subset O$, separate finite nonnegative bounds $R_z,R_t$, and constants $0<a\le b<\infty$ such that

$$a|\zeta|^2\le \zeta^{\mathsf T}A^0(t,x,z)\zeta\le b|\zeta|^2$$

for every $t\in J$, $x\in\mathbb T^3_{2\pi}$, $z\in K_2$, and $\zeta\in\mathbb R^m$. The reference state takes values in $K_0$. Compared classical states take values in $K_1$, belong to $L^\infty(J;H^s)\cap C^0(J;H^{s-1})$, have $\partial_tz\in L^\infty(J;H^{s-1})$, and satisfy
$$\operatorname*{ess\,sup}_{t\in J}\|z(t)\|_{H^s}\le R_z,\qquad \operatorname*{ess\,sup}_{t\in J}\|\partial_tz(t)\|_{H^{s-1}}\le R_t.$$
The outer set $K_2$ supplies the positive coefficient margin for local existence restarted from data in compact subsets of $K_1$. Two states use the same chart grid, coefficient maps, gauge source functions, reconstruction rule, and fixed matter branch. Forcing terms, when included in a comparison, are continuous $H^{s-1}$-valued functions of the slab parameter; their size is controlled through the separate stated solution and time-derivative bounds when the comparison estimate is applied.

The Sobolev norms compare coordinate fields in this fixed gauge. They do not identify two arbitrary coordinate representatives by a diffeomorphism. The Einstein interpretation uses the same first-order reduction, full initial constraints, complete matter data, and local restart hypotheses throughout the finite slab.

## Definition references

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[def-gr-periodic-symmetric-hyperbolic-system]]

[[def-countable-choice]]

[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]

[[thm-gr-local-geometric-development]]

