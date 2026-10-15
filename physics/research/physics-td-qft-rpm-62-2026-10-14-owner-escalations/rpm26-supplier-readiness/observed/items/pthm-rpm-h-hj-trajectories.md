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
deps: ["post-rpm-h-free-test-particle-action", "post-rpm-h-massless-shell-action", "thm-rpm-h-first-order-action-and-geodesics", "thm-rpm-h-local-hamilton-jacobi", "thm-rpm-h-complete-integral-coordinates", "def-countable-choice"]
dependency_roles: {"post-rpm-h-free-test-particle-action": "physical-assumption", "post-rpm-h-massless-shell-action": "physical-assumption", "thm-rpm-h-first-order-action-and-geodesics": "mathematical-premise", "thm-rpm-h-local-hamilton-jacobi": "mathematical-premise", "thm-rpm-h-complete-integral-coordinates": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Adopt the massive free action or separate massless shell action in [[post-rpm-h-free-test-particle-action]] and [[post-rpm-h-massless-shell-action]]. Let a smooth time Hamiltonian $H(t,q,p)$ describe the corresponding shell in a declared temporal chart, and let $S(t,q)$ be a local classical HJ solution on an actually invertible characteristic projection. Then each curve satisfying $\dot q=H_p(t,q,S_q)$ with $p=S_q(t,q)$ satisfies Hamilton's equations and, under the matching H7 first-order shell formulation, is a trajectory of the adopted model. The conclusion holds only on the chart and local solution interval; it does not continue through a caustic or assert a global HJ solution. It is a conditional mathematical prediction, not a reported observation.

## Facts & Assumptions

**Given:** One of the stated free-particle model postulates, a smooth time Hamiltonian, an actual local HJ solution, and a characteristic curve staying in the invertible chart domain.

[A3] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent/H7 supplier chain; no full axiom of choice is used.

[A1] [[post-rpm-h-free-test-particle-action]]: the massive action is adopted only for future timelike curves and fixed $m>0$ with the stated regularity and endpoint conditions.

[A2] [[post-rpm-h-massless-shell-action]]: the massless model separately adopts nonzero future null momentum and a positive multiplier; it has no massive proper-time parameterization.

[L1] [[thm-rpm-h-first-order-action-and-geodesics]]: the current H7 draft gives the constrained shell equations and their massive/nonzero-null geodesic interpretation. The item carrier is present in items/ as status draft, but has no pipeline_run binding and is absent from the still-empty batch-25 page manifest; no independent proof approval or current Step 1 record exists. Its domain mathematics depends on the physical action postulates, so its role as a mathematical supplier remains owner-escalated.

[L2] [[thm-rpm-h-local-hamilton-jacobi]]: local smooth HJ existence is proved by invertible characteristics before the projection singularity; its proof is conditional on the missing canonical-flow carrier [L1 of that item].

[L3] [[thm-rpm-h-complete-integral-coordinates]]: for a nonsingular mixed Hessian, the HJ parameters and their conjugates give local canonical integration coordinates; the item states the exact chart and caustic limitation.

## Proof

**Proof technique:** differentiate the HJ equation along characteristics.

**Given:** The model premises [A1] or [A2], an HJ solution on its invertible domain, and the exact conditional H7 interface [L1].

1.1 Put $p(t)=S_q(t,q(t))$. From $S_t+H(t,q,S_q)=0$, differentiation with respect to $q$ gives $S_{qt}+H_q+H_pS_{qq}=0$. Since $\dot q=H_p$, the chain rule yields $\dot p=S_{qt}+S_{qq}\dot q=-H_q$. Thus $(q,p)$ satisfies both Hamilton equations. [given, A3, algebra]

1.2 By [L1], on the stated branch the first-order action gives precisely the shell Hamilton equations and their free geodesic interpretation. Combining this with step 1.1 proves that the constructed curve is a trajectory of the adopted massive or separately adopted massless model on its common interval. [A1, A2, A3, L1, step 1.1]

1.3 The inverse projection and complete-integral coordinates from [L2]–[L3] apply only where their Jacobians remain nonsingular. If that projection loses invertibility, the single-valued graph $p=S_q$ used in step 1.1 is no longer supplied; therefore no extension through that point or beyond the actual chart interval follows. [L2, L3, A3, step 1.1] ∎
