---
id: ex-ros2-shared-factorization-two-stage-solves
kind: example
title: ROS2 reuses one stage matrix for two solves
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "KPP 2.6 documentation, Numerical methods, Rosenbrock methods and ROS-2 coefficient table"
      url: "https://kpp.readthedocs.io/en/2.6.0/tech_info/07_numerical_methods.html"
---

## Example

For a $d$-dimensional ROS2 step with fixed $W$, put $M=I-\gamma hW$. The two stage equations are $Mk_1=r_1$ and $Mk_2=r_2$, with different right-hand sides but the same matrix. Any direct factorization of the fixed nonsingular matrix $M$ can therefore be formed once and used in two stage solves. This is only an operation-count observation; it asserts no flop bound, rounding-error bound, or accuracy for inexact solves.

## Facts & Assumptions

**Given:** A ROS2 step with a fixed nonsingular stage matrix $M$ and a direct factorization routine that forms factors for one matrix and applies those factors to each requested right-hand side.

[F1] [[alg-rosenbrock-ros2-step]] uses the same matrix $M=I-\gamma hW$ in the equations for both $k_1$ and $k_2$.

## Verification

1.1 By [F1], after $M$ is formed the first stage solves $Mk_1=r_1$; the vector $r_1=f(t,y)+\gamma h f_t(t,y)$ is its right-hand side. [given, F1]

1.2 The second stage also has coefficient matrix $M$ and right-hand side $r_2=f(t+h,y+hk_1)-2k_1-\gamma h f_t(t,y)$. Since the assumed direct factorization is for this fixed $M$, its factors apply to $r_2$ without a second factorization. Thus one factorization and two stage solves suffice. [given, F1, step 1.1, algebra] ∎
