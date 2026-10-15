---
id: post-rpm-lad-effective-equation
kind: postulate
title: "Flat Lorentz–Abraham–Dirac effective equation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-rpm-charge-spin-model
  - def-em-electromagnetic-tensor
  - def-em-si-conventions
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
sources:
  references:
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §§75–76, printed pp. 222–229. Gaussian-unit formulas are not copied as SI coefficients."
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2, Eqs. (2.1)–(2.6), and Appendix A, Eqs. (A.1)–(A.4), discussing the LAD equation and its reduced-order use."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
physical_scope: "Adopted flat-space point-particle effective equation in a prescribed external field. It is a model postulate, not a derivation from a coupled Maxwell point source, finite-body limit, or observation; it asserts no solution existence or global accuracy."
empirical_premises: []
---

## Postulate

Restrict [[def-rpm-charge-spin-model]] to its flat affine Minkowski branch, with signature $(-,+,+,+)$, proper time $\tau$ in seconds, future four-velocity $U=dx/d\tau$ satisfying $\eta(U,U)=-c^2$, constant primitive $m>0$ in kilograms and nonzero charge $q\in\mathbb R$ in coulombs. Let the prescribed external electromagnetic two-form $F$ be $C^2$ on an open neighborhood of the worldline; use the component convention $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ of [[def-em-electromagnetic-tensor]]. Let $a:=dU/d\tau$ and

$$\alpha:=q/m,\qquad \tau_e:=\frac{q^2}{6\pi\epsilon_0mc^3}>0,\qquad f_0^a:=\alpha F^a{}_bU^b,$$

where $\epsilon_0=(\mu_0c^2)^{-1}$ follows [[def-em-si-conventions]]. Adopt the flat LAD effective equation

$$a^a=f_0^a+\tau_e\left(\frac{da^a}{d\tau}-\frac{\eta_{bc}a^ba^c}{c^2}U^a\right).$$

The derivative is the ordinary derivative in an inertial affine chart. Its dimensions are consistent: $a$ and $f_0$ are accelerations, the parenthesized term has acceleration per second, and $\tau_e$ is a time. This is an adopted effective model equation for sufficiently regular curves (at least $C^3$); it is not asserted to be an exact law of nature, a point-source Maxwell construction, or a globally well-posed dynamics. In particular, no existence, uniqueness, stability, or empirical claim is part of this postulate.

At each proper-time value $\tau$, define the particle's instantaneous rest frame to be the tuple $(x(\tau);e_0,e_1,e_2,e_3)$, where $e_0=U(\tau)/c$ and $(e_1,e_2,e_3)$ is a positively oriented $\eta$-orthonormal basis of $U(\tau)^\perp$. This is a pointwise basis at the event $x(\tau)$, not one inertial chart along an accelerated curve; the rest-space norm is $\|v\|_{\rm rest}:=\sqrt{\eta(v,v)}$ for $v\in U(\tau)^\perp$. Use of the equation as a reduced physical approximation carries the source's qualitative validity qualification that radiation reaction be small relative to the applied Lorentz force in this instantaneous rest frame. This postulate neither asserts that condition for arbitrary $F$ nor supplies a numerical threshold; the qualification is not used to deduce the local ODE results or the force-free counterexample.

## Facts & Assumptions

**Given:** The flat charged-body quantities and proper-time convention of [[def-rpm-charge-spin-model]], the flat electromagnetic tensor sign convention of [[def-em-electromagnetic-tensor]], the SI definition of $\epsilon_0$ in [[def-em-si-conventions]], and the additional smoothness and nonzero-charge restrictions explicitly stated above.

[A1] Adopt the displayed third-order equation as a separate flat effective model postulate. Its validity as a physical approximation is not concluded here.

[F1] [[def-rpm-charge-spin-model]]: the flat branch uses a prescribed two-form, constant primitive $m,q$, proper-time parameter, and $\eta(U,U)=-c^2$.

[F2] [[def-em-electromagnetic-tensor]]: in the stated SI inertial chart $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$.

[F3] [[def-em-si-conventions]]: $\epsilon_0=(\mu_0c^2)^{-1}$; no numerical value or precision is assumed.

## Adopted status

The equation is taken as a modeling premise. The source discussion motivates radiation-reaction modeling and order reduction but does not turn this postulate into an experimentally proved universal law. No self-field is evaluated at the worldline here.
