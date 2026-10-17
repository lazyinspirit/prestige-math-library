---
id: post-tgr-smooth-horizon-energy-condition
kind: postulate
title: Restricted smooth horizon Einstein/NEC adoption
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - post-emg-einstein-maxwell-equations
  - def-tgr-horizon-screen-family
  - def-emg-lorentzian-forms
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-emg-einstein-maxwell-equations: physical-assumption
  def-tgr-horizon-screen-family: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
physical_scope: >
  A restricted smooth classical Einstein–Maxwell model with the equation-based
  field law and the null energy condition for the specified future null
  generator. It does not construct matter or a horizon, and the energy
  condition is not asserted for every classical or quantum state.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 3–5, null generators, null energy condition, Raychaudhuri focusing, and the additional global hypotheses in the event-horizon area theorem."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Complete lecture notes; Chapter 7, printed pp. 215–216 (PDF pp. 221–223), Kerr area and classical black-hole-mechanics context. The local smooth-congruence restriction is not transferred from the Kerr process discussion."
verification:
  precheck: n/a
---

## Postulate

Use a smooth, oriented and time-oriented Lorentzian four-manifold $(M,g,N,o)$
of signature $(-,+,+,+)$, as in [[def-tgr-framework-units]]. The manifold
orientation is independent of the time orientation. On an open set $U\subseteq
M$, let $F$ be a smooth real two-form, let a specified smooth matter model
supply a smooth current $j$ and a smooth symmetric covariant matter stress
$T^m_{ab}$, and use the SI constants and length-coordinate convention of
[[def-emg-lorentzian-forms]]. Define
$$T_{ab}:=T^{\mathrm{EM}}_{ab}+T^m_{ab},\qquad T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),$$
where raised indices use $g^{-1}$ and $\mu_0>0$. Define
$G_{ab}:=\operatorname{Ric}_{ab}-\tfrac12 Rg_{ab}$ with the curvature
convention of [[def-emg-lorentzian-forms]]. Adopt the equation-based field law
of [[post-emg-einstein-maxwell-equations]] on $U$:
$$G_{ab}+\Lambda g_{ab}=\frac{8\pi G_N}{c^4}T_{ab},$$
with constant $\Lambda\in\mathbb R$, $G_N>0$, and $c>0$.

For a specified smooth embedded null hypersurface $H\subset U$ and a smooth
nowhere-zero future-directed null generator field $k$ along $H$, adopt the
null energy condition on this generator:
$$T_{ab}k^ak^b\ge0\qquad\text{at every point of }H.$$
Here $H$, $k$, and the screen variables are defined by
[[def-tgr-horizon-screen-family]]; the displayed inequality is a physical
restriction on the selected classical stress and congruence. It is not a
consequence of the field equation and is not asserted for every quantum state.
For the restricted area result on this page, the chosen generator must also
have the smooth future flow and persistent compact spacelike cuts stated in
[[thm-tgr-smooth-null-area]]. This adoption neither constructs such a flow or
horizon nor asserts that every event horizon has those regularity and
completeness properties. No matter action, singular source, observational
claim, or thermodynamic entropy is included.
