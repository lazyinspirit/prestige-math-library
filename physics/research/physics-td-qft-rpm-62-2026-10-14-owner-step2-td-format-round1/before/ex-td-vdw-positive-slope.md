---
id: ex-td-vdw-positive-slope
kind: example
title: A positive-slope segment in the reduced van der Waals model
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An exact derivative calculation in the dimensionless reduced van der Waals model below its model critical temperature; no real-fluid measurement or universal equation of state is asserted.
dependency_level: 9
deps:
  - def-td-phase-and-coexistence-domain
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Adopt the reduced van der Waals equation as a phenomenological model:
$$
p(v,t)=\frac{8t}{3v-1}-\frac{3}{v^2},\qquad v>\frac13,\quad t>0,
$$
where $p=P/P_c$, $v=V/V_c$, and $t=T/T_c$ use positive model scales $P_c,V_c,T_c$. Define a model critical point by the simultaneous isothermal conditions $\partial_vp=\partial_v^2p=0$ in this domain. The equation is a model premise; its extension to liquid-like densities is not a universal physical law.

## Facts & Assumptions

**Given:** The reduced model and domain in the Example, with $P_c,V_c,T_c>0$.

[A1] The isothermal local mechanical-stability criterion for this model is not needed for the calculation below. The claimed result is only the sign of the model derivative.

[F1] [[def-td-phase-and-coexistence-domain]]: A phase branch and its chart are model-specified; a branch equation is not asserted to be universal.

## Verification

1.1 At fixed $t$, differentiating the rational equation gives
$$
\frac{\partial p}{\partial v}=-\frac{24t}{(3v-1)^2}+\frac{6}{v^3}.
$$
At $t=0.9$ and $v=1$, this derivative is $-24(0.9)/4+6=0.6>0$. [given, algebra]

1.2 The second derivative is $\partial_v^2p=144t/(3v-1)^3-18/v^4$. At a simultaneous zero, the first derivative gives $t=(3v-1)^2/(4v^3)$ and the second gives $t=(3v-1)^3/(8v^4)$. Equality and $v>1/3$ imply $2v=3v-1$, hence $v=1$, $t=1$, and $p=1$. Conversely these values make both derivatives zero. Thus $T_c$ is the model critical temperature in this stated sense, and $t=0.9<1$ is below it. [given, step 1.1, algebra]

2.1 The derivative is continuous near $(t,v)=(0.9,1)$ because $3v-1\ne0$ there. Hence it remains positive on some open neighborhood within $v>1/3$. Since $P=P_cp$ and $V=V_cv$ with positive scales, $(\partial P/\partial V)_T=(P_c/V_c)(\partial p/\partial v)_t>0$ there as well. This verifies a positive-slope branch of this phenomenological model only. [A1, F1, step 1.1, algebra] ∎
