---
id: def-emg-fx-spherical-quotient
kind: definition
title: Spherical electrovacuum quotient and charged mass
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-fx-spherical-orbit-geometry
  - lem-emg-fx-spherical-maxwell-reduction
  - def-emg-xs-geometric-electrovac
  - def-emg-xs-rn-data
dependency_roles:
  def-emg-fx-spherical-orbit-geometry: mathematical-premise
  lem-emg-fx-spherical-maxwell-reduction: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 3, Theorem 1 and equations (8)–(9), PDF pp. 3–4: four-dimensional spherical electrovac equations, charge parameters, and the Reissner–Nordström–(A)dS family."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Sections 6.2.1 and 6.2.5, printed pp. 259–260 and 266–268 (PDF pp. 266–267 and 273–275): dyonic RN flux conventions and the Bertotti–Robinson exceptional product."
verification:
  precheck: n/a
---

## Definition

An exact spherical Einstein–Maxwell–$\Lambda$ datum consists of the orbit
geometry specified above, a smooth rotationally invariant real two-form
$\mathcal F$, a constant $\Lambda\in\mathbb R$, and
the equations
$$d\mathcal F=0,\qquad d(\star_g\mathcal F)=0,\qquad \operatorname{Ric}(g)_{ab}=\Lambda g_{ab}+2Q_{ab}(\mathcal F),$$
where
$$Q_{ab}(\mathcal F):=\mathcal F_{ac}\mathcal F_b{}^c -\frac14g_{ab}\mathcal F_{cd}\mathcal F^{cd}.$$
This is a mathematical system of equations, not a physical postulate. For
$\Lambda=0$ it uses exactly the curvature, Hodge, and Maxwell normalization of
the previously defined geometric electrovac equations. For $\Lambda\ne0$ the extra constant
term is part of this local mathematical definition; it is not supplied by
that zero-$\Lambda$ item.

By the preceding Maxwell reduction lemma, the field has unique constant
flux parameters $q_e,q_m\in\mathbb R$ and
$$\mathcal F=\frac{q_e}{(r\circ\pi_U)^2}\pi_U^*\epsilon_2+q_m\pi_S^*\omega_{S^2},\qquad Q^2:=q_e^2+q_m^2.$$
In subsequent formulas on $\mathcal M$, a tensor or differential form on
$U$ or $S^2$ written without a pullback symbol denotes its pullback by
$\pi_U$ or $\pi_S$, respectively; a scalar on $U$ denotes its composition
with $\pi_U$. Formulas stated on $U$ retain their original base objects.
In geometric units, coordinates have length, $r,q_e,q_m$ have length, the
metric components are dimensionless, and $\Lambda$ has units of inverse
length squared. Define
$$z:=q^{-1}(dr,dr),\qquad \varpi:=\frac r2(1-z)+\frac{Q^2}{2r}-\frac{\Lambda r^3}{6}.$$
Thus $z$ is dimensionless and $\varpi$ has length. The scalar $\varpi$ is
called the charged spherical mass function; this definition does not assert
that it is constant. The field equations are local on $U\times S^2$ and
impose no global potential, bundle, horizon, asymptotic, completeness, or
extension condition.

The geometric-electrovacuum flux convention inherits only $\mathrm{AC}_\omega$
through the supplied geometric electrovac definition. No full axiom of choice is used
by this definition or by the subsequent local algebra.

## Definition references

[[def-emg-fx-spherical-orbit-geometry]]

[[lem-emg-fx-spherical-maxwell-reduction]]

[[def-emg-xs-geometric-electrovac]]

[[def-emg-xs-rn-data]]
