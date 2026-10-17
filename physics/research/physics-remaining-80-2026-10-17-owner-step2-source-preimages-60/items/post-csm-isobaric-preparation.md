---
id: post-csm-isobaric-preparation
kind: postulate
title: "Isothermal-isobaric joint preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-csm-counting-and-physical-observables
  - def-csm-statistical-state-observable
  - def-td-si-quantities
dependency_roles:
  post-csm-counting-and-physical-observables: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Fixed finite particle number with a classical shape-scaled domain and a declared uniform dV/V0 volume prior; alternative piston measures define different preparations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "University of Concordia, CHEM 630P Statistical Mechanics Part 1, complete lecture notes, NPT ensemble section"
      url: "https://mypage.concordia.ca/faculty/glamoure/pdfs/statmech_part1.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

Fix $N$, dimension $d$, $T>0$, $\beta=(k_BT)^{-1}$ as in
[[def-td-si-quantities]], external pressure
$P_{\rm ext}>0$ in J m$^{-d}$, a fixed unit-shape domain $Q_1$, and a positive
volume reference $V_0$ in m$^d$. Identify configurations at volume $V>0$ by
$q_i=V^{1/d}y_i$ with $y_i\in Q_1$. The position Jacobian is $V^N$. Adopt
the joint reference
$$d\nu_N=\frac{dV}{V_0}\,\frac{V^N\,dy\,dp}{N!a_0^{dN}},$$
where $a_0>0$ is the action reference in J s. For the chosen Hamiltonian
$H_N(V,y,p)$, assume
$$0<\Delta_N:=\int_0^\infty\!\int e^{-\beta(H_N(V,y,p)+P_{\rm ext}V)}\,d\nu_N<\infty.$$
Adopt the probability density proportional to this integrand. The factor
$dV/V_0$ is an explicit volume-reference convention; a different piston
state measure gives a different preparation. This postulate includes no
piston kinetic energy unless it is explicitly included in the Hamiltonian,
and does not claim a smooth wall dynamics.
