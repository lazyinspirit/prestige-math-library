---
id: ex-menon-complement-endpoint-weights
kind: example
title: Endpoint weights in the complement integral
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-menon-typical-set-complement-estimate
---

## Example

Assume Countable Choice and the Lebesgue convention of the complement lemma. For $X=10$, $h=4$, let the excluded set be $B=\{1,10,14\}$ and take coefficient one at these integers. The normalized excluded integral is $1/8$, whereas its counting upper bound is $3/10$. This illustrates the finite endpoint calculation, rather than an admissible asymptotic choice of prime ranges.

## Facts & Assumptions

**Given:** The displayed $X,h,B$ and unit coefficients.

[F1] The finite counting argument in the complement lemma assigns to integer $n$ the weight $\max(0,\min(X,n)-\max(0,n-h))$. This part holds for any excluded set independently of its prime-range hypotheses. [[lem-menon-typical-set-complement-estimate]]

## Verification

1.1 The weights from [F1] at $n=1,10,14$ are respectively $1,4,0$; the last interval meets $[0,10]$ only at its endpoint. The sum has nonnegative real terms, so the absolute value leaves it unchanged. [given, F1, algebra]

2.1 The normalized integral is consequently $(1+4+0)/(4\cdot10)=1/8\le3/10=\#B/X$, as claimed. [step 1.1, given, algebra] ∎
