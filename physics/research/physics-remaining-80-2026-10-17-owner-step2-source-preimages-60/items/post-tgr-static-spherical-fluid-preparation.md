---
id: post-tgr-static-spherical-fluid-preparation
kind: postulate
title: "Static spherical Einstein-fluid model with a supplied equation of state"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-spherical-static-state-domain
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-spherical-static-state-domain: formulation-prerequisite
justified_by: []
physical_scope: >-
  Classical, static, isotropic, spherically symmetric Einstein gravity with
  Lambda=0, a supplied smooth positive energy-density-as-a-function-of-pressure
  relation, and positive radial metric coefficient b; no claim of a global
  surface, causal material dynamics, observed stellar matter, or stability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (97)–(106)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lectures 20–21, PDF pp. 7–9"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
verification:
  precheck: pass
---

## Postulate

Assume the countable-choice convention ZF+$\mathrm{AC}_\omega$ used by the exact geometry supplier [[def-tgr-spherical-static-state-domain]]. Use its product spacetime, areal radius $r$, time coordinate $x^0=ct$, signature $(-,+,+,+)$, and static metric
$$g=-e^{2\phi(r)}(dx^0)^2+b(r)^{-1}dr^2+r^2\gamma,$$
where $\gamma$ is the unit round metric, $b(r)>0$, and the metric coefficients are independent of $x^0$. Here $x^0$ and $r$ are in metres, $\phi$ and $b$ are dimensionless, $G>0$ is in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, and $c>0$ is in $\mathrm{m\,s^{-1}}$, as in [[def-tgr-framework-units]] and [[def-tgr-spherical-static-state-domain]]. The static unit fluid velocity is $u=e^{-\phi}\partial_{x^0}$.

For an open pressure interval $I_P\subset(0,\infty)$, supply a $C^\infty$ constitutive function $\mathcal E:I_P\to(0,\infty)$, with pressure and energy-density values both in $\mathrm{J\,m^{-3}}$. A pressure profile $P(r)$ has rest energy density $\varepsilon(r)=\mathcal E(P(r))$. Adopt the $\Lambda=0$ Einstein field equation
$$G^a{}_b=\frac{8\pi G}{c^4}T^a{}_b,\qquad T^a{}_b=\operatorname{diag}(-\varepsilon(r),P(r),P(r),P(r)),$$
with the signed curvature and Einstein-tensor conventions of [[def-tgr-spherical-static-state-domain]]. Thus “perfect fluid” here means exactly this static isotropic rest-frame stress tensor; the EOS is a supplied model input, not derived from gravity.

This is an adopted classical model and source of conditional predictions. The item asserts no observed star, measured EOS, global zero-pressure surface, causal finite-sound-speed law, or radial/dynamical stability. The cited treatments motivate the static-fluid and EOS conventions; the later local branch and constant-density results are established only by their displayed conditional arguments and mathematical suppliers.

