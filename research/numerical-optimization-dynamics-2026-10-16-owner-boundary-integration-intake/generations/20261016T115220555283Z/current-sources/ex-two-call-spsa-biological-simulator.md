---
id: ex-two-call-spsa-biological-simulator
kind: example
title: "One two-call SPSA estimate for an expensive biological simulator"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-evaluation-spsa-gradient-estimator
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
justified_by: []
verification:
  precheck: pass
---

## Example

Suppose a costly black-box biological simulator reports a scalar mismatch for three positive kinetic rates. At $\theta=(0.20,0.20,0.20)$, take $c=0.02$ and Rademacher perturbation $\Delta=(1,-1,1)$. If the two simulator calls return $13.1$ and $12.7$, the SPSA estimate is $(10,-10,10)$ and uses two calls, compared with six coordinatewise central-difference calls.

## Facts & Assumptions

**Given:** The parameter, step, perturbation, two observed simulator outputs, and the SPSA procedure in the Statement.

[F1] [[alg-two-evaluation-spsa-gradient-estimator]]: with two values $Y^\pm$, the coordinate output is $(Y^+-Y^-)/(2c\Delta_i)$.

## Verification

1.1 The perturbed parameters are $\theta+c\Delta=(0.22,0.18,0.22)$ and $\theta-c\Delta=(0.18,0.22,0.18)$, so both remain in the positive-rate domain. [given, algebra]

1.2 The common numerator is $13.1-12.7=0.4$ and $2c=0.04$. By [F1], the three outputs are $0.4/0.04=10$, $0.4/(-0.04)=-10$, and $0.4/0.04=10$. [given, F1, algebra]

2.1 The estimate uses the two simulator values for all coordinates, whereas one central-difference pair per coordinate uses $2d=6$ calls at $d=3$. The finite calculation verifies the estimator output only; it does not certify its bias, variance, or convergence for the biological model. [step 1.2, given, algebra] ∎
