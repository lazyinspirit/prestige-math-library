---
id: ex-linear-electromechanical-multirate-block-cost
title: "A dissipative electromechanical toy model under slow-fast blocking"
kind: example
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-frozen-slow-explicit-fast-euler
  - cor-mean-value-theorem
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Use the linear toy model with mechanical position $q$, velocity $v$, and electrical current $i$:
$$q'=v,\qquad v'=-q-v+i,\qquad i'=v-8i.$$
The unit mass, unit spring and damping coefficients, unit inductance, resistance $8$, force-current coupling, and back-emf coupling are stipulated model data. Its mechanical block is $x=(q,v)$ and its electrical block is $z=i$. For the quadratic energy $E(q,v,i)=\tfrac12(q^2+v^2+i^2)$,
$$E'=-(v-i)^2-7i^2\le0.$$
Thus the exact model dissipates this energy. Starting from $(q,v,i)=(0,1,0)$, apply [[alg-frozen-slow-explicit-fast-euler]] with $H=1/10$, $m=4$, and $h=1/40$. The macro method returns $(q^+,v^+,i_4)=(1/10,9/10,369/5000)$.

## Facts & Assumptions

**Given:** The stipulated electromechanical model, initial state, macro step $H=1/10$, and four fast microsteps of length $h=1/40$.

[F1] The assigned algorithm updates the slow block once by explicit Euler and then updates the fast block four times while keeping the slow state fixed at its initial value ([[alg-frozen-slow-explicit-fast-euler]]).

[F2] If $E$ is continuous on $[t_1,t_2]$ and differentiable on $(t_1,t_2)$, then $E(t_2)-E(t_1)=E'(c)(t_2-t_1)$ for some $c\in(t_1,t_2)$ ([[cor-mean-value-theorem]]).

[A1] In this example $f(q,v,i)=(v,-q-v+i)$ and $g(q,v,i)=v-8i$; the mechanical and electrical labels refer to this stipulated block partition.

## Proof

1.1 Differentiating $E=\tfrac12(q^2+v^2+i^2)$ along [A1] gives $E'=qv+v(-q-v+i)+i(v-8i)=-v^2+2vi-8i^2=-(v-i)^2-7i^2\le0$. On any solution interval and any $t_1<t_2$, [F2] gives $E(t_2)-E(t_1)=E'(c)(t_2-t_1)\le0$, so the energy is nonincreasing. [A1, F2, algebra]

1.2 By [F1] and [A1], the mechanical update uses the initial state $(q,v,i)=(0,1,0)$: $q^+=0+(1/10)1=1/10$ and $v^+=1+(1/10)(-0-1+0)=9/10$. [F1, A1, algebra]

1.3 The fast recurrence uses frozen $v=1$, so $i_{j+1}=i_j+(1/40)(1-8i_j)$. Starting with $i_0=0$, successive substitution gives $i_1=1/40$, $i_2=9/200$, $i_3=61/1000$, and $i_4=369/5000$. Thus the stated macro output follows. [F1, A1, induction, algebra]

2.1 By [F1], the method evaluates the two-component mechanical field once and the electrical field four times. Its fast loop reads the initial slow value $v=1$ at each stage, so an implementation may transmit that frozen value once at the block boundary and cache it; no fast-to-slow refresh occurs inside this macro block. This count describes the procedure and does not claim a wall-clock saving. [F1, step 1.2, step 1.3, algebra] ∎
