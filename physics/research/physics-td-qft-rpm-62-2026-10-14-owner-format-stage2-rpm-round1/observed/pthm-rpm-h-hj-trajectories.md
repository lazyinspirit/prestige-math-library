---
id: pthm-rpm-h-hj-trajectories
kind: physics-theorem
title: "Conditional particle trajectories from Hamilton-Jacobi characteristics"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
physical_scope: "Adopted free test-particle/massless model, future momentum graph, actual invertible chart domain; no global solution through caustics."
dependency_level: 7
deps: ["post-rpm-h-free-test-particle-action", "post-rpm-h-massless-shell-action", "thm-rpm-h-first-order-action-and-geodesics", "thm-rpm-h-temporal-shell-reduction", "thm-rpm-h-local-hamilton-jacobi", "thm-rpm-h-complete-integral-coordinates", "def-countable-choice"]
dependency_roles: {"post-rpm-h-free-test-particle-action": "physical-assumption", "post-rpm-h-massless-shell-action": "physical-assumption", "thm-rpm-h-first-order-action-and-geodesics": "mathematical-premise", "thm-rpm-h-temporal-shell-reduction": "mathematical-premise", "thm-rpm-h-local-hamilton-jacobi": "mathematical-premise", "thm-rpm-h-complete-integral-coordinates": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "MIT OpenCourseWare 8.09 Classical Mechanics III, Fall 2014, complete Chapter 4 lecture notes PDF; §4.4 Hamilton–Jacobi equation and complete integrals, all 33 PDF pages inspected."
      url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf
      locator: "Complete 33-page chapter; full relevant section inspected."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$ for the cotangent/H7/H9 supplier chain. Adopt the massive free action or separate massless shell action in [[post-rpm-h-free-test-particle-action]] and [[post-rpm-h-massless-shell-action]]. Let $I\subseteq\mathbb R$ be an open time interval, $\Omega\subseteq\mathbb R^3$ an open spatial chart domain, and $(N,\beta,h)$ smooth temporal-chart data with $N>0$ and $h_{ij}$ positive definite as in [[def-rpm-h-temporal-chart-data]]. Take $m\ge0$ in kg and $c>0$ in m/s. On the future shell define $\kappa(t,q,p)=\sqrt{m^2c^2+h^{ij}(t,q)p_ip_j}$ and the positive-root reduced Hamiltonian $H(t,q,p)=c\bigl(N\kappa-\beta^ip_i\bigr)$ from [[thm-rpm-h-temporal-shell-reduction]]; its domain is $U=I\times T^*\Omega$ for $m>0$, and the open subset with $p\ne0$ for $m=0$. Here $t$ is measured in seconds, $q$ in metres, $p$ in kg m/s, $H$ in joules, and $S$ in joule-seconds. Let $D\subseteq I\times\Omega$ be open and let $S\in C^2(D,\mathbb R)$ (all partial derivatives through order two are continuous) satisfy $S_t+H(t,q,S_q)=0$ wherever $(t,q,S_q)\in U$. If $S$ is the smooth local solution supplied by [[thm-rpm-h-local-hamilton-jacobi]] from an initial exact-graph point in $U$, and $J=[t_1,t_2]\subset I$ with $t_1<t_2$ is an interval on which its characteristic projection remains invertible, let $q:J\to\Omega$ be a $C^1$ characteristic with $\dot q=H_p(t,q,S_q)$. Then $p(t):=S_q(t,q(t))$ satisfies $\dot p=-H_q$, so $(q,p)$ obey Hamilton's equations. The smooth ODE makes this characteristic smooth; by [[thm-rpm-h-temporal-shell-reduction]] these reduced equations are exactly the equations of the future-shell first-order system of [[thm-rpm-h-first-order-action-and-geodesics]]. Under the matching adopted model postulate, this curve is a trajectory of the massive or separate massless model. The conclusion holds only on the chart and local solution interval; it does not continue through a caustic or assert a global HJ solution. It is a conditional mathematical prediction, not a reported observation.

The characteristic graph is restricted to points with $(t,q,S_q(t,q))\in U$. The action $S$ is measured in joule-seconds.

## Facts & Assumptions

**Given:** One of the stated free-particle model postulates, the temporal chart and future-shell domain, a smooth HJ solution, and a characteristic curve on a compact interval of its invertible projection.

[A3] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent/H7 supplier chain; no full axiom of choice is used.

[A1] [[post-rpm-h-free-test-particle-action]]: the massive action is adopted only for future timelike curves and fixed $m>0$ with the stated regularity and endpoint conditions. This H5 carrier remains a draft model postulate with no pipeline_run binding; its current Step 1 record is ready/hash-current, which does not make it an empirical report or independent proof approval.

[A2] [[post-rpm-h-massless-shell-action]]: the massless model separately adopts nonzero future null momentum and a positive multiplier; it has no massive proper-time parameterization. This H5 carrier remains a draft model postulate with no pipeline_run binding; its current Step 1 record is ready/hash-current and is not an empirical report or independent proof approval.

[L1] [[thm-rpm-h-first-order-action-and-geodesics]]: the current H7 draft assumes a prescribed smooth time-oriented Lorentzian four-manifold, a compact chart interval, smooth $x,p,e$, $e>0$, $m\ge0$, and the future massive or separate nonzero future-null branch. It supplies $C_m=0$, $x\prime{}^a=e g^{ab}p_b$, $p\prime{}_a=-\tfrac e2\partial_a g^{bc}p_bp_c$, and the unparameterized geodesic interpretation. This is a mathematical variational supplier for explicit functionals and selected future branches; adoption of particle dynamics is a separate physical premise.

[L2] [[thm-rpm-h-local-hamilton-jacobi]]: when the initial exact-graph point lies in its open Hamiltonian domain, it supplies a smooth local HJ solution while the characteristic projection remains invertible. Its proof uses the current draft canonical-flow supplier's stated local Hamiltonian equations; that supplier's Step 1 readiness is not independent proof approval.

[L3] [[thm-rpm-h-complete-integral-coordinates]]: for a nonsingular mixed Hessian, the HJ parameters and their conjugates give local canonical integration coordinates; the item states the exact chart and caustic limitation.

[L4] [[thm-rpm-h-temporal-shell-reduction]]: under a smooth temporal product chart with $N>0$, positive-definite $h$, and nonzero spatial momentum on the massless branch, the positive future-shell root gives $p_0=\beta^ip_i-N\kappa$, $H=-cp_0$, and $C_{p_0}=\kappa/N>0$ for $C=\tfrac12(g^{ab}p_ap_b+m^2c^2)$. Its gauge-reduced action has Hamilton equations on the chart interval. This current H9 supplier is a draft; the use here is conditional on that exact statement.

## Proof

**Proof technique:** differentiate the HJ equation along characteristics.

**Given:** The model premises [A1] or [A2], an HJ solution on its invertible domain, and the exact conditional H7 interface [L1].

1.1 Put $p(t)=S_q(t,q(t))$. From $S_t+H(t,q,S_q)=0$, differentiation with respect to $q$ gives $S_{qt}+H_q+H_pS_{qq}=0$. Since $\dot q=H_p$, the chain rule yields $\dot p=S_{qt}+S_{qq}\dot q=-H_q$. Thus $(q,p)$ satisfies both Hamilton equations. [given, A3, algebra]

2.1 Write $C_m(x,p)=\tfrac12(g^{ab}p_ap_b+m^2c^2)$ and lift the characteristic by $x^0=ct$, $x^i=q^i$, with $p_0=\beta^ip_i-N\kappa$ from [L4]. Set $e:=c/C_{p_0}=cN/\kappa>0$. Implicit differentiation of $C_m(t,q,p_0(t,q,p),p)=0$ gives $H_{p_i}=cC_{p_i}/C_{p_0}=eC_{p_i}$ and $-H_{q^i}=-cC_{q^i}/C_{p_0}=-eC_{q^i}$. Thus $\dot x^0=c=eC_{p_0}$, $\dot x^i=eC_{p_i}$, and $\dot p_i=-eC_{q^i}$. Differentiating $C_m=0$ along the lifted curve makes the $q^i,p_i$ terms cancel and gives $C_{p_0}\dot p_0=-cC_{x^0}$, hence $\dot p_0=-eC_{x^0}$. The lift therefore satisfies the complete H7 first-order shell system. The smooth HJ characteristic and $e$ meet H7's regularity conditions on the compact chart interval. [A3, L1, L4, step 1.1, algebra]

2.2 By [A1] or [A2], the massive or separate massless action is adopted on exactly its stated future branch; H7's variational equivalence then identifies the shell trajectory of step 2.1 with a trajectory of that adopted model. This conclusion remains conditional on those physical postulates. [A1, A2, A3, L1, L4, step 2.1]

3.1 The inverse projection and complete-integral coordinates from [L2]–[L3] apply only where their Jacobians remain nonsingular. If that projection loses invertibility, the single-valued graph $p=S_q$ used in step 1.1 is no longer supplied; therefore no extension through that point or beyond the actual chart interval follows. [L2, L3, A3, step 1.1] ∎
