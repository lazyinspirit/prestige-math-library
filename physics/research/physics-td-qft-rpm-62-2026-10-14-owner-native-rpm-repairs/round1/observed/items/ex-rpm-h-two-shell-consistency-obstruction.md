---
id: ex-rpm-h-two-shell-consistency-obstruction
kind: example
title: "Two scalar shell potentials fail first-class closure generically"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 3
deps: ["thm-rpm-h-constraint-consistency", "def-countable-choice", "def-rpm-h-first-class-constraint-family", "thm-rpm-h-canonical-poisson-and-flow"]
dependency_roles: {"thm-rpm-h-constraint-consistency": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-rpm-h-first-class-constraint-family": "mathematical-premise", "thm-rpm-h-canonical-poisson-and-flow": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
landmark: false
---

## Example

Assume $\mathrm{AC}_\omega$ for the cotangent/constraint supplier. On the product of two Minkowski cotangent spaces, use signature $(-,+,+,+)$, $P_i^a=\eta^{ab}p_{ib}$, $r=x_1-x_2$, and constraints

$$C_1=\tfrac12(p_1^2+m_1^2c^2)+V(r^2),\qquad C_2=\tfrac12(p_2^2+m_2^2c^2)+V(r^2).$$

Here $m_i>0$, $r^2=\eta_{ab}r^ar^b$, and $V$ is smooth with units of momentum squared. Their canonical bracket is

$$\{C_1,C_2\}=-2V'(r^2)\,r\cdot(P_1+P_2).$$

For $V(z)=\lambda z$, $\lambda>0$, this bracket is nonzero at explicit points on the joint surface $C_1=C_2=0$ where $dC_1,dC_2$ are independent. Thus, by [[def-rpm-h-first-class-constraint-family]], the pair fails first-class closure on the local regular surface around each such point, and arbitrary independent multipliers need not preserve both constraints there. Additional consistency conditions are required; no universal obstruction for all interacting relativistic models is claimed.

## Facts & Assumptions

**Given:** Two canonical spacetime cotangent factors, the stated constraints, smooth $V$, and the canonical bracket convention.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the referenced cotangent/constraint supplier; no full axiom of choice is used.

[F1] [[def-rpm-h-first-class-constraint-family]]: on a regular common zero surface, “first-class” means every pairwise Poisson bracket vanishes at every point of that surface. This is the exact local definition used by the conclusion.

[F2] [[thm-rpm-h-canonical-poisson-and-flow]]: in induced cotangent coordinates, $\{F,G\}=F_{q^i}G_{p_i}-F_{p_i}G_{q^i}$ and $\iota_{X_H}\omega=dH$. The H25 Step 1 record is ready/hash-current, but the carrier remains draft/unbound and its ai-altered proof is not independently approved.

[L1] [[thm-rpm-h-constraint-consistency]]: the current H2 draft assumes an open parameter interval, a symplectic manifold, smooth moving constraints with independent differentials on each $N_\lambda$, a smooth ambient $H_c$, paths in a Darboux chart on a compact subinterval, and smooth multipliers. It states $\partial_\lambda\chi_a+\{\chi_a,H_c(\lambda,\cdot)\}+u^b(\lambda)\{\chi_a,\chi_b\}=0$ on $N_\lambda$ as the tangency condition; for autonomous constraints the first term vanishes. Its H25 Step 1 record is ready/hash-current, but the carrier remains draft/unbound with ai-altered proof provenance and no independent proof approval. The autonomous $H_c=0$ specialization used here matches its current Statement.

## Verification

**Proof technique:** direct differentiation and an on-surface witness.

**Given:** Canonical coordinates, $C_1,C_2$, the bracket convention [F2], the local first-class definition [F1], and the autonomous tangency condition [L1].

1.1 The potential derivatives are $\partial_{x_1^a}V=2V'(r^2)r_a$ and $\partial_{x_2^a}V=-2V'(r^2)r_a$. The kinetic terms have $\partial_{p_i^a}C_i=P_i^a$. In $\{C_1,C_2\}$, the first particle contributes $-P_1^a(2V'r_a)$ and the second contributes $(-2V'r_a)P_2^a$; all other cross terms vanish. Their sum is the displayed bracket. [F2, A1, algebra]

2.1 Choose $r=(0,R,0,0)$ with $R>0$, $V(z)=\lambda z$, and $\lambda>0$. Let $P_i^1=u_i>0$, other spatial components zero, and $P_i^0=\sqrt{m_i^2c^2+2\lambda R^2+u_i^2}$. Then $p_i^2=-(P_i^0)^2+u_i^2=-m_i^2c^2-2\lambda R^2$, so both $C_i=0$, while $r\cdot(P_1+P_2)=R(u_1+u_2)>0$. Each constraint differential has nonzero momentum component $P_i$ in its own cotangent factor, so $dC_1,dC_2$ are independent at this witness. Independence persists on a sufficiently small neighborhood, making the local joint level regular. The bracket is $\{C_1,C_2\}=-2\lambda R(u_1+u_2)\ne0$ there, so [F1] says the pair is not first-class on that local regular surface. With autonomous constraints and $H_c=0$, [L1] gives $\dot C_1=u^2\{C_1,C_2\}$ and $\dot C_2=u^1\{C_2,C_1\}$; hence preserving both constraints at this point forces $u^1=u^2=0$. Thus arbitrary independent nonzero multipliers need not preserve the joint surface. [F1, L1, A1, step 1.1, algebra] ∎
