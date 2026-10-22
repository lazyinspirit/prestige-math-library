---
id: def-emg-fx-extremal-test-scalar
kind: definition
title: Spherical scalar waves in regular extremal RN coordinates
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-emg-fx-wave-currents
  - def-emg-xs-ingoing-rn
  - lem-gr-metric-divergence-and-density-formula
  - prop-emg-xs-rn-horizon-data
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-wave-currents: mathematical-premise
  def-emg-xs-ingoing-rn: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  prop-emg-xs-rn-horizon-data: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefanos Aretakis, Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations I, Communications in Mathematical Physics 307 (2011), arXiv:1110.2007"
      url: https://arxiv.org/pdf/1110.2007
      locator: "Section 1.1, extreme RN scalar-wave setting; the local definition retains the exact ingoing metric and units of its mathematical supplier."
    - title: "Harvey Reall, What happens at the horizon of an extreme black hole?, complete 34-page lecture presentation (2013)"
      url: https://hep.physics.uoc.gr/Erasmus-IP-2013/files/lectures/Reall/Reall.pdf
      locator: "PDF pp. 9–11, regular ingoing chart and spherical scalar-wave equation; the operator and coordinate convention are stated explicitly here."
    - title: "Martin Taylor, Lectures on the nonlinear stability of the Schwarzschild family of black holes, complete lecture notes (Spring 2022)"
      url: https://www.ma.imperial.ac.uk/~mtaylor5/HarvardLectures.pdf
      locator: "Section 6.4, PDF pp. 40–41, scope of extremal-horizon instability; no nonlinear or generic Kerr–Newman claim is imported."
physical_scope: null
verification:
  precheck: n/a
---

## Definition

Fix real parameters $m>0$ and $q_e,q_m$ with $q_e^2+q_m^2=m^2$, and use the selected ingoing dyonic Reissner–Nordström metric on $\mathbb R_v\times(0,\infty)_r\times S^2$ with signature $(-,+,+,+)$:

$$g=-D(r)\,dv^2+2\,dv\,dr+r^2\gamma_{S^2},\qquad D(r)=\left(1-\frac mr\right)^2.$$

Here $\gamma_{S^2}$ is the unit round metric, $v,r,m,q_e,q_m$ have units of metres, and angles are dimensionless. The surface $r=m$ is the selected local degenerate Killing horizon; no maximal extension or global event-horizon assertion is included. A neutral spherical test scalar is a real function $\psi:\mathbb R_v\times(0,\infty)_r\to\mathbb R$ independent of the sphere variable, whose coordinate partial derivatives through total order three are continuous, and which satisfies $\Box_g\psi=0$, where $\Box_g\psi=g^{ab}\nabla_a\nabla_b\psi$ is the metric trace of the scalar Hessian for the metric-selected connection. Neutral means no electromagnetic gauge coupling occurs in this equation; test means the metric and Maxwell field are fixed and are not sourced by $\psi$. Set $\phi(v,r)=r\psi(v,r)$ and take all $\partial_r$ derivatives in this regular ingoing chart. If $[\psi]$ denotes the arbitrary scalar-field unit, then $[\phi]=[\psi]\,\mathrm m$.

## Statement references

[[def-emg-xs-ingoing-rn]]

[[prop-emg-xs-rn-horizon-data]]

[[def-emg-fx-wave-currents]]

[[lem-gr-metric-divergence-and-density-formula]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[def-countable-choice]]

## Remarks

This is a neutral test-field definition on a fixed exact background. Its regularity is imposed in the ingoing chart that crosses $r=m$; a static-coordinate radial derivative is not substituted for $\partial_r$ without transforming the vector field. The canonical smooth tangent-bundle structure of the geometric suppliers assumes only $\mathrm{AC}_\omega$ from [[def-countable-choice]]; no stronger choice principle is used.
