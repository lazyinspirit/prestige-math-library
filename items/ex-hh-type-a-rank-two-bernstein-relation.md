---
id: ex-hh-type-a-rank-two-bernstein-relation
kind: example
title: "The rank-two multiplicative Bernstein relation"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences, def-hh-type-a-affine-bernstein-presentation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $n=2$, the Bernstein cross-relations and quadratic relation give
$$ T_1X_1-X_2T_1=-(Q-1)X_2,\qquad T_1X_2-X_1T_1=(Q-1)X_2,\qquad T_1X_1T_1=QX_2. $$

## Facts & Assumptions

**Given:** The universal rank-two presentation with $Q$ a unit.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $D_1(f)=(f-s_1(f))/(1-X_1/X_2)$.

[F2] [[def-hh-type-a-affine-bernstein-presentation]]: $T_1f-s_1(f)T_1=(Q-1)D_1(f)$ and $T_1^2=(Q-1)T_1+Q$.

## Verification

**Given:** $n=2$, $s_1(X_1)=X_2$, $s_1(X_2)=X_1$, and the displayed universal presentation.

1.1 The divided-difference formula gives $D_1(X_1)=(X_1-X_2)/(1-X_1/X_2)=-X_2$ and $D_1(X_2)=(X_2-X_1)/(1-X_1/X_2)=X_2$. [given, F1, algebra]

2.1 Substituting these two values into [F2] gives $T_1X_1-X_2T_1=-(Q-1)X_2$ and $T_1X_2-X_1T_1=(Q-1)X_2$. [F1, F2, step 1.1]

3.1 Multiply the first equality on the right by $T_1$ and substitute the quadratic relation to get $T_1X_1T_1=X_2T_1^2-(Q-1)X_2T_1=X_2((Q-1)T_1+Q)-(Q-1)X_2T_1=QX_2$. [F2, step 2.1, algebra] ∎

