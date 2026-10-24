---
id: cex-unique-critical-point-is-a-nonglobal-strict-local-minimum
kind: counterexample
title: "$x^2+y^2(1-x)^3$ has a unique critical point, a strict local but nonglobal minimum"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-hessian-and-euclidean-critical-point, thm-multivariable-second-derivative-test]
aliases: []
landmark: false
proof_strategy: calculation
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Refuted: a unique critical point which is a strict local minimum must be a global minimum.

## Facts & Assumptions
**Given:** $f(x,y)=x^2+y^2(1-x)^3$ on $\mathbb R^2$.

[L1] A positive definite Hessian at a critical point gives a strict local minimum ([[thm-multivariable-second-derivative-test]]).

## Proof

**Proof technique:** calculation.

1.1 The partial derivatives are $f_x=2x-3y^2(1-x)^2$ and $f_y=2y(1-x)^3$. Their simultaneous vanishing forces $(x,y)=(0,0)$. [given, algebra]

1.2 At $x=2$, $f(2,y)=4-y^2$, which is negative for $|y|>2$, whereas $f(0,0)=0$. [given, algebra]

2.1 At the origin the Hessian is $\operatorname{diag}(2,2)$, so [L1] makes it a strict local minimum. [step 1.1, L1, algebra]

3.1 Thus the unique critical point is a strict local minimum but not a global one. [step 1.1, step 2.1, step 1.2, algebra] ∎
