---
id: cex-rpm-h-relativistic-hj-caustic
kind: counterexample
title: "Smooth free relativistic Hamilton-Jacobi data form a caustic"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 6
deps: ["thm-rpm-h-local-hamilton-jacobi", "thm-rpm-h-inertial-time-reduced-hamiltonian", "def-countable-choice"]
dependency_roles: {"thm-rpm-h-local-hamilton-jacobi": "mathematical-premise", "thm-rpm-h-inertial-time-reduced-hamiltonian": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

## Statement refuted

For the free one-dimensional massive relativistic Hamiltonian, every smooth initial action produces a characteristic family that extends as a smooth single-valued momentum graph $p=S_q(t,q)$ with finite $S_{qq}$ through every finite future time.

## Example

Assume $\mathrm{AC}_\omega$ for the cotangent-shell supplier. For the free one-dimensional massive Hamiltonian $H(p)=E(p)=\sqrt{m^2c^4+c^2p^2}$ with $m>0$, choose smooth initial action $S_0(a)=-\kappa a^2/2$, $\kappa>0$ in kg/s. Its characteristics have $p(a)=-\kappa a$ and

$$q(t,a)=a+t\frac{c^2p(a)}{E(p(a))}.$$

The projection derivative is $\partial_aq=1-t\kappa m^2c^6/E(p)^3$. It stays positive for $0\le t<m/\kappa$ and first vanishes at $(t,a)=(m/\kappa,0)$, where $\partial_ap=-\kappa\ne0$. Therefore this characteristic family cannot extend there as a smooth single-valued graph $p=S_q(t,q)$ with finite $S_{qq}$. The initial data and Hamiltonian are smooth; the failure is the projection singularity, not an initial-data defect.

## Facts & Assumptions

**Given:** $m,c,\kappa>0$, the free Hamiltonian $E(p)$ and the stated smooth initial graph.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent-shell supplier; no full axiom of choice is used.

[L1] [[thm-rpm-h-local-hamilton-jacobi]]: the current assigned A draft proves local HJ existence only while the characteristic projection is invertible and makes no continuation claim through a caustic. Its H0 dependency remains open.

[L2] [[thm-rpm-h-inertial-time-reduced-hamiltonian]]: the current H8 draft states $E=\sqrt{m^2c^4+c^2p^2}$, $\dot q=c^2p/E$, and $\dot p=0$. The supplier is a mathematical deduction within its stated chart, positive-root and nonzero-null hypotheses; it introduces no physical action adoption.

## Counterexample

**Proof technique:** compute the characteristic projection and use the graph chain rule.

**Given:** The free Hamiltonian and initial action above, plus [L1]–[L2].

1.1 Hamilton's equations from [L2] give $\dot p=0$, so $p(t,a)=S_0'(a)=-\kappa a$. Also $\dot q=E_p=c^2p/E$, hence integration with $q(0,a)=a$ gives the displayed formula. [L2, A1, algebra]

2.1 Differentiate: $\partial_aq=1-t\kappa c^2\frac d{dp}(p/E)$. Since $E^2=m^2c^4+c^2p^2$, $\frac d{dp}(p/E)=m^2c^4/E^3$. Thus $\partial_aq=1-t\kappa m^2c^6/E^3$. Because $E\ge mc^2$, this is at least $1-t\kappa/m$, positive for $t<m/\kappa$. At $a=0$, $p=0$ and $E=mc^2$, so it equals zero at $t=m/\kappa$; this is the first singular point. [L2, A1, step 1.1, algebra]

3.1 At that point $\partial_ap=-\kappa$. If a smooth graph $p=S_q(t,q(t,a))$ extended through it, the chain rule would give $\partial_ap=S_{qq}\partial_aq=0$, contradicting $-\kappa\ne0$. Hence no such smooth single-valued graph extension exists through that projection singularity. [L1, step 2.1, algebra] ∎
