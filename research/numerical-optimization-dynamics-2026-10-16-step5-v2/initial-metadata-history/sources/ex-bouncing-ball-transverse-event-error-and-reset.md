---
id: ex-bouncing-ball-transverse-event-error-and-reset
kind: example
title: "A bouncing-ball impact has a transverse event-time and reset-error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-hybrid-mode-guard-reset-system
  - lem-transverse-hybrid-event-time-error
  - lem-reset-error-after-a-mistimed-hybrid-event
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.4"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Example

Let $q$ be height and $v$ velocity, with mode field $q'=v$, $v'=-2$ before and after impacts, initial state $(q(0),v(0))=(1,0)$, downward guard $g(q,v)=q$ of orientation $\sigma=-1$, and time-independent reset $R(q,v)=(0,-v/2)$. On the event bracket $[1,51/50]$, use the approximate incoming reconstruction
$$U(t)=(1-t^2+1/25,-2t).$$
It has uniform state error $\eta=1/25$ from the exact incoming solution $y(t)=(1-t^2,-2t)$. The reported guard root is the upper endpoint $\widehat\tau=\sqrt{26/25}$, and the exact impact time is $\tau=1$. This example isolates the event-time and reset estimates; it does not claim that $U$ is a residual-certified reconstruction from the exact initial state.

## Facts & Assumptions

**Given:** A smooth hybrid mode and reset, the transverse event-time estimate, and the mistimed-reset estimate.

[F1] [[def-hybrid-mode-guard-reset-system]]: a mode follows its ODE until an oriented guard crossing, then applies its reset and changes mode.

[F2] [[lem-transverse-hybrid-event-time-error]]: if the exact guard has signed derivative at least $\nu>0$, the dense state error is at most $\eta$, and the reported guard residual is at most $\varepsilon$, then $|\widehat\tau-\tau|\le(L_g\eta+\varepsilon)/\nu$.

[F3] [[lem-reset-error-after-a-mistimed-hybrid-event]]: with incoming error $\eta$, event-time error $\Delta$, reset constants $L_R,L_{R,t}$, and incoming/outgoing field bounds $M^-,M^+$, the aligned post-reset error is at most $L_R\eta+(L_RM^-+L_{R,t}+M^+)\Delta$.

## Verification

1.1 The exact incoming solution is $y(t)=(1-t^2,-2t)$, so its guard $h(t)=1-t^2$ has the unique root $\tau=1$ on the bracket. For $t\in[1,51/50]$, $-h'(t)=2t\ge2$, so the downward crossing is transverse with margin $\nu=2$. [given, F1, algebra]

2.1 The dense guard is $1-t^2+1/25$, whose root in the bracket is $\widehat\tau=\sqrt{26/25}$ and whose residual there is $\varepsilon=0$. For $x\ge0$, both sides are nonnegative and $(1+x/2)^2-(1+x)=x^2/4\ge0$, so $\sqrt{1+x}\le1+x/2$. Taking $x=1/25$ gives $0\le\widehat\tau-\tau\le1/50$. [given, step 1.1, algebra]

3.1 On the bracket, $\|U(t)-y(t)\|_2=1/25$. Since $g(q,v)=q$, $|g(q_1,v_1)-g(q_2,v_2)|=|q_1-q_2|\le\|(q_1,v_1)-(q_2,v_2)\|_2$, so $L_g=1$; the reported guard residual is zero. Apply [F2] with $\nu=2$ to obtain $|\widehat\tau-\tau|\le(1/25)/2=1/50$, agreeing with the explicit bound in step 2.1. [given, F2, step 1.1, step 2.1, algebra]

3.2 The reset is defined on all of $\mathbb R^2$, is $L_R=1/2$-Lipschitz in state, and has $L_{R,t}=0$. On the incoming bracket, $\|U(t)-y(t)\|_2=1/25$ and $\|f^-(t,y(t))\|_2=\sqrt{4t^2+4}<3$. Since $g(q,v)=q$, $|g(q_1,v_1)-g(q_2,v_2)|=|q_1-q_2|\le\|(q_1,v_1)-(q_2,v_2)\|_2$, so $L_g=1$; the reported guard residual is zero. Apply [F2] with $\nu=2$ to obtain $|\widehat\tau-\tau|\le(1/25)/2=1/50$, agreeing with the explicit bound in step 2.1. The outgoing field $(q,v)\mapsto(v,-2)$ is globally $1$-Lipschitz in state. The exact outgoing path through $\widehat\tau$ and the reported reset state lie in $[-1/10,1/10]\times[4/5,6/5]$, where the field norm is less than $3$; by local existence and continuity both outgoing solutions remain in the bounded convex rectangle $[-1/5,1/5]\times[3/4,5/4]$ for a short common forward interval. Thus the reset and outgoing tube hypotheses of [F3] hold with $M^-=M^+=3$ and $L^+=1$. By [F3], the aligned post-reset error is at most $\frac12\cdot\frac1{25}+(\frac12\cdot3+3)\frac1{50}=11/100$. [given, F2, F3, step 1.1, step 2.1, algebra]

4.1 Directly, the exact outgoing state at $\widehat\tau=1+\Delta$ is $(\Delta-\Delta^2,1-2\Delta)$ and the reported reset state is $(0,1+\Delta)$. Their difference has components bounded by $1/50$ and $3/50$, so its Euclidean norm is at most $\sqrt{(1/50)^2+(3/50)^2}<11/100$. This verifies the reset estimate for this instance. [given, step 2.1, step 3.2, algebra] ∎
