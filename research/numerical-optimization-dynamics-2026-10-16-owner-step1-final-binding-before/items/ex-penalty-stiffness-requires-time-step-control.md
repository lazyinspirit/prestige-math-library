---
id: ex-penalty-stiffness-requires-time-step-control
kind: example
title: A stiff penalty equation defeats a fixed explicit step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-projected-contact-dynamics-and-euler-step
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
axiom_use: No choice axiom is used; this is a scalar exact-solution and recurrence calculation.
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Sections 6.1.8 and 6.1.10, pp. 221–222 and 231–232; penalty stiffness, time-step tuning, and limits of penalty-to-rigid-body conclusions.
---

## Example

Let $C=[0,\infty)$ and $f=-1$ in the projected dynamics of [[def-projected-contact-dynamics-and-euler-step]], starting at $x_0=0$. Compare this constrained motion with the penalty equation
$$y_\kappa'=-1+\kappa(-y_\kappa)_+,\qquad y_\kappa(0)=0,$$
where $\kappa>0$ and $s_+=\max(s,0)$. The explicit Euler penalty method uses a fixed step $h>0$ and horizon $2h$.

## Facts & Assumptions

**Given:** The scalar constrained and penalty models in the Example.

[F1] [[def-projected-contact-dynamics-and-euler-step]]: $f-\dot x\in N_C(x)$, with $N_C$ outward.

[F2] [[thm-derivative-of-exponential]] and [[def-real-exponential-function-and-e]]: $(e^t)'=e^t$ and $e^0=1$.

[F3] [[cor-exponential-reciprocal-and-positivity]]: $e^t>0$ for every real $t$.

[F4] [[thm-exponential-is-strictly-increasing]]: if $s<t$, then $e^s<e^t$.

## Verification

1.1 For $C=[0,\infty)$, $N_C(0)=(-\infty,0]$ because $\langle n,z\rangle=nz\le0$ for every $z\ge0$. Thus $x(t)=0$ solves the projected inclusion: $f-\dot x=-1\in N_C(0)$. For $y_\kappa(t)=-(1-e^{-\kappa t})/\kappa$, [F2] gives $y_\kappa'=-e^{-\kappa t}=-1-\kappa y_\kappa$; [F3]–[F4] give $0<e^{-\kappa t}<1$ for $t>0$, so $y_\kappa(t)<0$ and the penalty equation holds. Also $0\le1-e^{-\kappa t}\le1$, so $\sup_{0\le t\le2h}|y_\kappa(t)|\le1/\kappa$ and the exact penalty paths converge uniformly to the constrained path as $\kappa\to\infty$. [F1, F2, F3, F4, given, algebra]

2.1 Explicit Euler gives $y_1=-h$, since the penalty is zero at $y_0=0$. At $y_1=-h$, the next value is $y_2=-h+h(-1+\kappa h)=\kappa h^2-2h$. For fixed $h>0$, $y_2\to+\infty$ as $\kappa\to\infty$, despite the continuous penalty solutions converging uniformly to zero. Therefore the timestep must be controlled as stiffness grows; this example makes no general penalty-to-rigid-impact limit claim. [step 1.1, given, algebra] ∎
