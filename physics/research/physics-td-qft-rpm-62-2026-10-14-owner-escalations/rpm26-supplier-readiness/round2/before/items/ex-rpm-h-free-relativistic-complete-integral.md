---
id: ex-rpm-h-free-relativistic-complete-integral
kind: example
title: "Explicit massive and nonzero-null free complete integral"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 7
deps: ["thm-rpm-h-complete-integral-coordinates", "thm-rpm-h-inertial-time-reduced-hamiltonian", "def-countable-choice"]
dependency_roles: {"thm-rpm-h-complete-integral-coordinates": "mathematical-premise", "thm-rpm-h-inertial-time-reduced-hamiltonian": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Assume $\mathrm{AC}_\omega$ for the cotangent-shell supplier. For a free massive particle with $m>0$, or a nonzero massless particle with $m=0$ and $\alpha\ne0$, define

$$S(t,q,\alpha)=q\cdot\alpha-tE(\alpha),\qquad E(\alpha)=\sqrt{m^2c^4+c^2|\alpha|^2}.$$

Then $S_t+E(S_q)=0$, $S_{q\alpha}=I$, and its integration coordinates satisfy $\beta=S_\alpha=q-tc^2\alpha/E$, equivalently $q=\beta+t c^2\alpha/E$. The mixed Hessian is everywhere nonsingular on the stated domain, so this is a complete integral there. $[S]=\mathrm{J\,s}$, $[\alpha]=\mathrm{kg\,m/s}$, and $[\beta]=\mathrm m$.

## Facts & Assumptions

**Given:** Flat inertial coordinates, $m\ge0$, $c>0$, and for $m=0$ the open parameter domain $\alpha\ne0$.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent-shell supplier; no full axiom of choice is used.

[L1] [[thm-rpm-h-complete-integral-coordinates]]: a smooth HJ family with invertible mixed Hessian defines local canonical coordinates $p=S_q$, $\beta=S_\alpha$ and constants $\beta$ along characteristics; it is local to the nonsingular domain.

[L2] [[thm-rpm-h-inertial-time-reduced-hamiltonian]]: the current H8 draft states the positive-energy Hamiltonian $E=\sqrt{m^2c^4+c^2|p|^2}$ on the fixed inertial-time branch. Its H25 Step 1 record is ready/hash-current, but the carrier remains draft/unbound; its mathematics-domain proof closure includes H7 with physics-postulate inputs.

## Proof

**Proof technique:** substitution and derivative verification.

**Given:** The formulas and domain in the statement, together with [L1]–[L2].

1.1 Differentiation gives $S_q=\alpha$, $S_t=-E(\alpha)$, and hence $S_t+E(S_q)=0$. Also $S_{q_i\alpha_j}=\delta_{ij}$, so its determinant is one. By [L1] this nonsingular family supplies local canonical integration coordinates on the stated domain. [L1, L2, A1, algebra]

1.2 Differentiating $E$ gives $\partial_{\alpha_i}E=c^2\alpha_i/E$ wherever $E>0$. Thus $\beta=S_\alpha=q-tc^2\alpha/E$ and rearranging yields the stated trajectory formula. For $m=0$, $E=c|\alpha|>0$ and differentiability requires $\alpha\ne0$, which is exactly the given domain. [L1, L2, A1, algebra]

2.1 The products $q\cdot\alpha$ and $tE$ have action units, while $\alpha$ is momentum and $\partial_\alpha S$ is length. Hence the generating function and canonical coordinates have the claimed physical dimensions. [given, algebra] ∎
