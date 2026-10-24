---
id: ex-discrete-terminal-condition-mismatch
kind: example
title: A mismatched terminal adjoint condition changes the discrete gradient
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [thm-discrete-adjoint-gradient-recursion]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "William W. Hager, Runge-Kutta methods in optimal control and the transformed adjoint system, §3"
      url: "https://people.clas.ufl.edu/hager/files/rk.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §2.4"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Example

Take $x_0(\theta)=0$, one step $x_1(\theta)=\theta$, and terminal objective $J(\theta)=\frac12x_1(\theta)^2$. The correct terminal adjoint seed is $p_1=D\phi(x_1)=x_1$.

## Facts & Assumptions

**Given:** The one-step scalar graph, terminal loss, and exact reverse recursion.

[F1] The terminal seed and reverse recursion are the exact derivative rule for a finite state-step objective ([[thm-discrete-adjoint-gradient-recursion]]).

## Verification

1.1 Directly, $J(\theta)=\frac12\theta^2$, so $J'(0)=0$. The correct seed is $p_1=x_1=0$ at $\theta=0$ and the transition derivative is $D_\theta x_1=1$, so the exact adjoint gradient is also zero. [F1, given, algebra]

2.1 If the terminal seed is incorrectly replaced by $p_1=1$, reverse accumulation returns $p_1D_\theta x_1=1$ at $\theta=0$, which differs from $J'(0)$. Thus the terminal condition is load-bearing for the discrete gradient. [F1, step 1.1, algebra] ∎ 