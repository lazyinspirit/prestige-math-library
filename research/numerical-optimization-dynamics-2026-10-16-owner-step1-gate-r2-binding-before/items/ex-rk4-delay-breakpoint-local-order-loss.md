---
id: ex-rk4-delay-breakpoint-local-order-loss
kind: example
title: "A breakpoint-crossing RK4 step has a second-order defect"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-retarded-delay-equation-and-history-space
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Example

Let $\tau>0$ and solve the retarded equation $y'(t)=y(t-\tau)$ with history
$\phi(s)=s$ on $[-\tau,0]$. Choose an integer $m\ge1$ and
$h=\tau/(m+1/2)$, so a classical four-stage RK4 step from $t_-=mh$ to
$t_+=(m+1)h$ crosses the first breakpoint $t=\tau$ at its midpoint. This
example computes its exact-start local defect; it does not assert a
fourth-order DDE bound for a mesh that crosses a breakpoint. On an ODE
$y'=g(t)$, the classical RK4 rule used here is
$Q=h(k_1+2k_2+2k_3+k_4)/6$, with
$k_1=g(t_-)$, $k_2=k_3=g(t_-+h/2)$, and $k_4=g(t_-+h)$. For affine $g$, the
weighted average is $g(t_-+h/2)$, so this rule integrates $g$ exactly.

## Facts & Assumptions

**Given:** The retarded problem, $m\ge1$, and the step $[mh,(m+1)h]$ for
$h=\tau/(m+1/2)$.

[F1] The history and delayed equation are as in [[def-retarded-delay-equation-and-history-space]].

[F2] The exact-start one-step local defect is the difference between the numerical output from the exact starting value and the exact next value ([[def-one-step-ode-method-local-defect-order-and-stability]]).

## Verification

1.1 For $0\le t\le\tau$, the delayed value is $\phi(t-\tau)=t-\tau$, so $y'(t)=t-\tau$ and the solution matching $y(0)=0$ is $y(t)=t^2/2-\tau t$. Earlier RK4 steps lie wholly in this interval, where $g(t)=t-\tau$ is affine and the RK4 rule in the Example integrates it exactly. Moreover $y''$ jumps at $\tau$: its left limit is $1$, while its right limit is $y'(0+)=-\tau$. [given, F1, algebra]

2.1 Write $x=t-\tau$. On the crossing step, the delayed right-hand side is $g(t)=x$ for $x\le0$ and $g(t)=x^2/2-\tau x$ for $x\ge0$. The terminal stage queries $y(t_+-\tau)=y(h/2)$, and $h/2<t_-=mh$ for $m\ge1$, so this value is already computed exactly by step 1.1; the midpoint uses $y(0)=0$. Therefore the RK4 stage values are $g(t_-)=-h/2$, $g(\tau)=0$, and $g(t_+)=h^2/8-\tau h/2$. [step 1.1, given, algebra]

2.2 The RK4 increment from the stated rule is $Q=h[-h/2+(h^2/8-\tau h/2)]/6=-(1+\tau)h^2/12+h^3/48$. [given, step 2.1, algebra]

3.1 The exact increment is $\int_{-h/2}^0x\,dx+\int_0^{h/2}(x^2/2-\tau x)\,dx=-(1+\tau)h^2/8+h^3/48$. Subtracting this from $Q$ gives the exact-start defect $(1+\tau)h^2/24>0$. [step 2.1, step 2.2, algebra]

3.2 This defect is not $O(h^5)$ as $h\to0$, so the smooth-RHS fourth-order local-defect premise cannot be transferred across this breakpoint. Aligning or restarting at the breakpoint removes this particular crossing step but supplies no higher-order theorem without separate smoothness and error bounds. [F2, step 3.1, algebra] ∎
