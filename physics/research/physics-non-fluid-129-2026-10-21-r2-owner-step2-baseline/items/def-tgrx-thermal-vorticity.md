---
id: def-tgrx-thermal-vorticity
kind: definition
title: Thermal vorticity and equilibrium domain
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-killing-field
  - def-tgr-stationary-thermal-carriers
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-tgr-stationary-thermal-carriers: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. Becattini, Thermodynamic equilibrium in relativity: four-temperature, Killing vectors and Lie derivatives, §§3–5, eqs. (6), (11)–(16)"
      url: https://arxiv.org/pdf/1606.06605
    - title: "Jessica Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–IV, eqs. (4.1)–(4.6)"
      url: https://arxiv.org/pdf/1807.02915
    - title: "David Tong, General Relativity, complete Cambridge Part III lecture notes, §§2.4.1–2.4.5 and §4.3.1"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf
verification:
  precheck: pass
---

## Definition

Let $O$ be a nonempty connected open subset of a smooth time-oriented Lorentzian four-manifold $(M,g)$ of signature $(-,+,+,+)$, with its Levi-Civita connection $\nabla$ and length-coordinate convention $x^0=ct$. Let $\beta$ be a smooth future-directed timelike Killing vector field on $O$, with components in $\mathrm{J}^{-1}$, and fix $k_B>0$ in $\mathrm{J\,K}^{-1}$. On $O$ define

$$T:=\frac{1}{k_B\sqrt{-g(\beta,\beta)}},\qquad u:=k_BT\,\beta,\qquad \varpi_{ab}:=-\frac12(\nabla_a\beta_b-\nabla_b\beta_a).$$

Thus $T$ is in kelvins, $g(u,u)=-1$, and the covariant two-form $\varpi$ has units $\mathrm{J}^{-1}\mathrm{m}^{-1}$. For a smooth chemical-potential scalar $\mu:O\to\mathbb R$ in joules, set $\zeta:=\mu/(k_BT)$ and $\alpha:=-\zeta$, both dimensionless. These fields are defined only on the region where $\beta$ is future timelike; no thermal state or material realization is part of this definition.

## Definition references

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-killing-field]]

[[def-tgr-stationary-thermal-carriers]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The smooth time-oriented Lorentzian domain, its Levi-Civita connection, a smooth future-timelike Killing field $\beta$, a smooth scalar $\mu$, and $k_B>0$ as specified in the Definition.

[F1] [[def-gr-smooth-lorentzian-objects]]: $M$ is a smooth time-oriented four-manifold, $g$ is a smooth Lorentzian metric of signature $(-,+,+,+)$, timelike means $g(v,v)<0$, and future direction is fixed by the time orientation.

[F2] [[def-gr-killing-field]]: a smooth vector field is Killing when $\mathcal L_\beta g=0$.

[F3] [[def-tgr-stationary-thermal-carriers]]: the metric-selected connection is Levi-Civita; the length-coordinate convention is $x^0=ct$, vector $u$ is unit timelike, $\beta$ has inverse-joule units, and $\mu$ is in joules.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says that every sequence of nonempty sets has a choice function. It is the inherited foundational assumption of the stationary geometric carrier; this definition uses no stronger choice principle.

## Proof

1.1 The scalar $s:=-g(\beta,\beta)$ is smooth and strictly positive on $O$. Hence $s^{-1/2}$ is smooth and positive, so $T=(k_B\sqrt{s})^{-1}$ is a smooth positive kelvin-valued scalar and $u=\beta/\sqrt{s}$ is a smooth future-directed vector field. Direct contraction gives $g(u,u)=g(\beta,\beta)/s=-1$. [given, F1, F3, algebra]

2.1 Lowering the smooth vector field $\beta$ with $g$ gives a smooth one-form, and its covariant derivative is a smooth covariant two-tensor. Antisymmetrizing this tensor gives the smooth two-form $\varpi$; the inverse-length derivative of the inverse-joule components of $\beta$ gives its stated units. Since $\mu$ and $k_BT>0$ are smooth, $\zeta$ and $\alpha=-\zeta$ are defined and dimensionless on all of $O$. The only foundational assumption in this construction is the inherited $\mathrm{AC}_\omega$ in [F4]; no selection or stronger choice principle is used. [given, F1, F2, F3, F4, algebra] ∎
