---
id: ex-two-sum-recovers-a-rounded-away-low-part
kind: example
title: "TwoSum recovers a rounded away low part"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-two-sum-error-free-transform
  - thm-two-sum-error-free-transform
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Example

In binary64 nearest-even arithmetic, take $a=1$ and $b=2^{-53}$. The call to [[alg-two-sum-error-free-transform]] succeeds and returns $(s,e)=(1,2^{-53})$. It preserves $s+e=a+b$ exactly although the leading rounded sum loses the low part.

## Facts & Assumptions

**Given:** binary64 nearest-even arithmetic with $p=53$, $e_{\min}=-1022$, $e_{\max}=1023$, $a=1$ and $b=2^{-53}$.

[F1] [[alg-two-sum-error-free-transform]] evaluates the six separately rounded operations displayed in its definition.

[F2] [[thm-two-sum-error-free-transform]] proves $s+e=a+b$ for every successful call in a binary format of precision at least two.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] requires zero or normal exact intermediates and nearest-even rounding.

## Verification

1.1 The spacing above $1$ is $2^{-52}$, so $1+2^{-53}$ is the midpoint between $1$ and $1+2^{-52}$. The even-significand endpoint is $1$; hence $s=1$. The next exact operands give $z=1-1=0$, $v=1-0=1$, $w=1-1=0$, and $t=2^{-53}-0=2^{-53}$. Each is representable, so each subtraction is exact. [given, F1, F3, algebra]

2.1 The final exact intermediate is $w+t=2^{-53}$, hence $e=2^{-53}$. The first exact sum $1+2^{-53}$ and every later nonzero exact intermediate ($1$ or $2^{-53}$) are normal and within range; the zero intermediates are allowed by [F3]. Thus the call succeeds, its format satisfies [F2], and $s+e=1+2^{-53}=a+b$ exactly, also directly verified by these outputs. [step 1.1, F1, F2, F3, algebra] ∎
