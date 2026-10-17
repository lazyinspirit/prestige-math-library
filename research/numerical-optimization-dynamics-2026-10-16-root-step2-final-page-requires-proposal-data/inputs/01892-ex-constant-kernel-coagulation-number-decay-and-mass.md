---
id: ex-constant-kernel-coagulation-number-decay-and-mass
kind: example
title: Constant-kernel aggregation conserves mass and has explicit number decay
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-continuous-size-coagulation-fragmentation-weak-model
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the scalar moment equation is explicitly integrated.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §1
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

Let $\mu_t$ be any positive weak solution of the continuous model with constant aggregation kernel $K(x,y)=\kappa\ge0$ and no active fragmentation ($\beta=0$). If $N_0=M_0(\mu_0)$ and $M=M_1(\mu_0)$, then
$$M_1(\mu_t)=M,\qquad M_0(\mu_t)=\frac{N_0}{1+\kappa N_0t/2}.$$

## Facts & Assumptions

**Given:** The weak formulation for a positive solution and the choices $\varphi=1,x$.

[F1] [[def-continuous-size-coagulation-fragmentation-weak-model]]: coagulation has ordered-pair factor $1/2$, while fragmentation vanishes when $\beta=0$.

## Proof

1.1 With $\varphi(x)=x$, the coagulation increment is $(x+y)-x-y=0$. The integral equation therefore gives $M_1(\mu_t)=M$ on the solution interval. [given, F1, algebra]

1.2 With $\varphi=1$, the increment is $1-1-1=-1$, so $N'(t)=-\kappa N(t)^2/2$. If $N_0>0$, differentiating $1/N(t)$ gives $(1/N)'=\kappa/2$ and hence the displayed formula. If $N_0=0$, positivity gives $N(t)\ge0$ and the differential equation gives $N'(t)\le0$, so $N(t)=0$, again the formula. [given, F1, step 1.1, algebra] ∎
