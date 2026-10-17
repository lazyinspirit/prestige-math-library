---
id: post-tgr-smooth-horizon-energy-condition
kind: postulate
title: Restricted smooth horizon Einstein/NEC adoption
status: published
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
  post-emg-einstein-maxwell-equations: formulation-prerequisite
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

Use a smooth, oriented and time-oriented Lorentzian four-manifold $(M,g,N,o)$
of signature $(-,+,+,+)$, as in [[def-tgr-framework-units]]. The manifold
orientation is independent of the time orientation. On an open set $U\subseteq
M$, let $F$ be a smooth real two-form and use the SI constants and
length-coordinate convention of [[def-emg-lorentzian-forms]]. This adoption is
parameterized by any complete explicitly supplied named smooth classical
matter-model instance
$$\mathcal M=(\mathcal C_m,\mathcal E_m,\mathsf J_m,\mathsf T_m)$$
of [[post-emg-einstein-maxwell-equations]]. The model data are inputs, not
unspecified functions to be inferred from the field equation. They specify
the actual matter-field bundles and smooth configuration fields $\Psi$ in
$\mathcal C_m[g,F]$ on $U$, the exact equations and constraints
$\mathcal E_m[g,F;\Psi]=0$, all constitutive functions and parameters, and
the explicit current and symmetric-stress maps $\mathsf J_m$ and
$\mathsf T_m$. Any further domain, boundary or initial-data hypotheses of
that selected model are retained. A specialization must give these actual
equations and maps together with the model's name; providing only the symbols
$\mathcal E_m,\mathsf J_m,\mathsf T_m$ or arbitrary smooth $j,T^m$ is not
such a specification.

For the supplied model, take an admitted smooth configuration
$\Psi\in\mathcal C_m[g,F]$ satisfying all of its equations and constraints,
and set
$$j:=\mathsf J_m[g,F;\Psi],\qquad T^m:=\mathsf T_m[g,F;\Psi].$$
Thus $j$ is a smooth vector field and $T^m$ is a smooth symmetric covariant
two-tensor on the same domain. The postulate and the restricted area deduction
are uniform in these fully specified model data; they do not select one
constitutive law or restrict the range to source-free matter or dust. The
named zero-matter instance, when selected, is precisely $\mathcal M_0$ of
the equation-based supplier. No matter action or circle-representation
hypothesis is required for this model input.

Define
$$T_{ab}:=T^{\mathrm{EM}}_{ab}+T^m_{ab},\qquad T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),$$
where raised indices use $g^{-1}$ and $\mu_0>0$. Define
$G_{ab}:=\operatorname{Ric}_{ab}-\tfrac12 Rg_{ab}$ with the curvature
convention of [[def-emg-lorentzian-forms]]. Adopt the smooth Maxwell equations
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, together with the equation-based
gravitational field law of [[post-emg-einstein-maxwell-equations]] on $U$:
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
