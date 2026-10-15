---
id: thm-rpm-h-complete-integral-coordinates
kind: theorem
title: "Complete integrals and covariant versus time Hamilton-Jacobi"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 6
deps: ["thm-rpm-h-local-hamilton-jacobi", "thm-rpm-h-temporal-shell-reduction", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space", "def-countable-choice"]
dependency_roles: {"thm-rpm-h-local-hamilton-jacobi": "mathematical-premise", "thm-rpm-h-temporal-shell-reduction": "mathematical-premise", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Assume $\mathrm{AC}_\omega$ for the cotangent/HJ supplier chain. Let $H(t,q,p)$ be smooth and let $S(t,q,\alpha)$ be a $C^3$ solution of $S_t+H(t,q,S_q)=0$ on an open domain. If the mixed matrix $S_{q\alpha}$ is invertible at $(t,q,\alpha)$, then after restricting neighborhoods the equations $p=S_q$, $\beta=S_\alpha$ define a local canonical transformation $(q,p)\leftrightarrow(\alpha,\beta)$ at each fixed $t$, and $\beta$ is constant along its Hamilton characteristics. Such a family is a complete integral only on that nonsingular local domain. In a temporal spacetime chart satisfying H9, the covariant future-shell equation $g^{ab}S_aS_b+m^2c^2=0$ reduces to the time Hamilton–Jacobi equation with $p_0=S_t/c=-H/c$; for $m=0$ require a nonzero future null covector. The function $S$ has action units, not dimensionless phase units.

## Facts & Assumptions

**Given:** Smooth $H$, a local $C^3$ HJ solution, and a point where $S_{q\alpha}$ is invertible.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent and HJ supplier chain; no full axiom of choice is used.

[L1] [[thm-rpm-h-local-hamilton-jacobi]]: the local characteristic construction supplies an actual HJ solution on the domain where its projection remains invertible; no continuation through a caustic is asserted.

[F1] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map with invertible derivative has a smooth local inverse.

[L2] [[thm-rpm-h-temporal-shell-reduction]]: the current H9 draft assumes a temporal product chart, $N>0$, positive spatial metric, and excludes $p_i=0$ on the massless branch; it gives $p_0=\beta^ip_i-N\sqrt{m^2c^2+h^{ij}p_ip_j}$ and $H=-cp_0$. The supplier is a mathematical deduction within its stated chart, positive-root and nonzero-null hypotheses; it introduces no physical action adoption.

## Proof

**Proof technique:** implicit-function and generating-function identities.

**Given:** The hypotheses in the statement and exact conditional temporal-shell interface [L2].

1.1 For fixed $(t,\alpha)$ the map $q\mapsto S_\alpha(t,q,\alpha)$ has derivative $S_{\alpha q}=(S_{q\alpha})^T$, invertible by hypothesis. [F1] gives a local smooth solution $q=q(t,\alpha,\beta)$ of $\beta=S_\alpha$. Set $p=S_q$. Then $d_qp=S_{qq}dq+S_{q\alpha}d\alpha$ and $d_q\beta=S_{\alpha q}dq+S_{\alpha\alpha}d\alpha$. Symmetry of second derivatives gives $dq\wedge dp=d\beta\wedge d\alpha$, so the transformation is canonical. [L1, F1, A1, algebra]

1.2 Along a characteristic, $\dot q=H_p$ and $\dot\alpha=0$. Differentiate the HJ equation with respect to $\alpha$: $S_{\alpha t}+S_{\alpha q}H_p=0$. Thus $\dot\beta=\frac d{dt}S_\alpha=S_{\alpha t}+S_{\alpha q}\dot q=0$. [L1, A1, algebra]

1.3 In the temporal chart, $x^0=ct$ implies $p_0=\partial_{x^0}S=S_t/c$. The future mass-shell root [L2] says $p_0=-H/c$, hence $S_t+H(t,q,S_q)=0$. Conversely, substitution of this root into the covariant shell equation recovers the same time HJ equation, with the future sign fixed by $P^0>0$ and the nonzero null restriction when $m=0$. [L2, A1, given, algebra]

2.1 Here $p=S_q$ has units kg m/s, $q$ has metres, and $t$ seconds; the HJ equation makes $S_t$ energy, so $S$ has joule-seconds. The canonical generating identity therefore pairs length with momentum and respects the action units. [given, algebra] ∎
