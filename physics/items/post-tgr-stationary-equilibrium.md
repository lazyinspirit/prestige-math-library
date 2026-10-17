---
id: post-tgr-stationary-equilibrium
kind: postulate
title: Selected stationary thermal equilibrium
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-stationary-thermal-carriers
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-stationary-thermal-carriers: mathematical-premise
physical_scope: "One selected comoving bath on a connected smooth Lorentzian domain with a future timelike Killing field and a Killing inverse-temperature vector; no universal equilibrium existence, KMS state, or empirical thermometer law."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§VI.B–VI.C"
      url: "https://arxiv.org/pdf/2106.09235"
      locator: "Full 79-page PDF; global and local equilibrium discussion, PDF pp. 45–48."
    - title: "Francesco Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §§4–6"
      url: "https://arxiv.org/pdf/1606.06605"
      locator: "Full 13-page PDF; proper temperature/four-temperature and curved-space global equilibrium condition, PDF pp. 4–7."
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–IV"
      url: "https://arxiv.org/pdf/1807.02915"
      locator: "Full 7-page PDF; static and selected Killing-flow treatments, PDF pp. 3–4."
---

## Postulate

On a nonempty connected open set $O$ in the smooth, time-oriented Lorentzian four-manifold of [[def-tgr-framework-units]], select one smooth future timelike Killing field $\xi$ and one smooth scalar $T:O\to(0,\infty)$ in kelvins. Its dimensionless lapse and selected observer congruence are

$$N_\xi:=\sqrt{-g(\xi,\xi)}>0,\qquad u:=\xi/N_\xi.$$

Thus $g(u,u)=-1$ and the physical four-velocity is $cu$ in the length-coordinate convention $x^0=ct$. A reference normalization of $\xi$ is part of the selected model. The local temperature $T$ is assigned to this comoving observer congruence; it is not a coordinate temperature or a value assigned to every observer.

Adopt the inverse-temperature vector

$$\beta:=\frac{u}{k_BT},$$

where $k_B>0$ is Boltzmann's constant in joules per kelvin, and assume that this field is Killing on $O$. In this item, a selected stationary thermal equilibrium means precisely this adopted bath, observer congruence, positive proper-temperature field, and Killing condition on $\beta$. The field $N_\xi T$ is not assumed constant here; its constancy is the conclusion of [[pthm-tgr-tolman-ehrenfest]].

This is a model assumption, not a statement that every stationary geometry admits a thermal state or that every material realizes this bath. It asserts no complete Killing flow, KMS state, trace-class stress exponential, collision or thermalization law, Hawking or Unruh temperature, or empirical thermometer reading.
