---
id: cor-linear-elliptic-control-projection-formula
kind: corollary
title: The optimal elliptic control is the clipped negative adjoint
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-linear-elliptic-pde-constrained-control-problem
  - lem-box-control-projection-is-pointwise-clipping
  - thm-linear-elliptic-control-existence-and-variational-inequality
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–4: reduced gradient, adjoint, and interval clipping formula."
---

## Statement

For the unique minimizer $q_*$ in [[thm-linear-elliptic-control-existence-and-variational-inequality]], with adjoint $p(q_*)$, one has
$$
q_*(x)=\min\left\{q_b(x),\max\left\{q_a(x),-\frac{B^*p(q_*)(x)}{\alpha}\right\}\right\} \quad\text{for almost every }x\in E.
$$

## Facts & Assumptions
**Given:** The linear-quadratic reduced objective, the nonempty closed convex box $Q_{ad}$, its unique minimizer $q_*$, and $\alpha>0$.

[F1] The minimizer is characterized by $(B^*p(q_*)+\alpha q_*,v-q_*)_U\ge0$ for every $v\in Q_{ad}$ ([[thm-linear-elliptic-control-existence-and-variational-inequality]]).

[F2] The unique $L^2$ projection onto $Q_{ad}$ is pointwise clipping and is characterized by its variational inequality ([[lem-box-control-projection-is-pointwise-clipping]]).

## Proof

1.1 Divide the variational inequality in [F1] by $\alpha>0$ and rewrite it as $\left(q_*-\left(-B^*p(q_*)/\alpha\right),v-q_*\right)_U\ge0\qquad(v\in Q_{ad}).$ This is exactly the projection variational inequality in [F2] for projecting $-B^*p(q_*)/\alpha$ onto $Q_{ad}$. [F1, F2, given, algebra]

2.1 By the explicit formula in [F2], the projection is pointwise clipping to $[q_a(x),q_b(x)]$ almost everywhere. Substitution gives the displayed formula. [F2, step 1.1] ∎
