---
id: ex-cantor-set-dimension-conjectural-candidate
kind: example
title: "Evaluating the Cantor-set dimension candidate at exponent two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-countable-choice
  - def-conjectural-cantor-dimension-candidate
  - thm-cantor-set-hausdorff-dimension-and-exact-measure
proof_strategy: direct
verification:
  precheck: n/a
---

## Example

At $\tau=2$, the conjectural middle-third Cantor candidate equals $\log 2/\log 3-1/3$, since this quantity exceeds $(\log 2/\log 3)/3$. This is only the value predicted by the candidate; it is not an established dimension theorem.

## Facts & Assumptions

**Given:** Countable Choice, the candidate function $D_K(\tau)$, and $d_K=\dim_H K=\log2/\log3$.

[A1] Countable Choice is assumed in the Hausdorff-dimension supplier. ([[def-countable-choice]])

[F1] $D_K(\tau)=\max\{2/(\tau+1)-(1-d_K),d_K/(\tau+1)\}$. ([[def-conjectural-cantor-dimension-candidate]])

[F2] $d_K=\log2/\log3$. ([[thm-cantor-set-hausdorff-dimension-and-exact-measure]])

## Verification

1.1 Substituting $\tau=2$ into [F1] gives $D_K(2)=\max\{d_K-1/3,d_K/3\}$. [F1, algebra]

2.1 The first term exceeds the second exactly when $d_K-1/3>d_K/3$, equivalently $2d_K>1$, equivalently $4>3$ after using [F2]. Hence $D_K(2)=d_K-1/3=\log2/\log3-1/3$. This evaluates the candidate only. [A1, F2, step 1.1, algebra] ∎

