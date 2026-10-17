---
id: ex-branchwise-ad-at-the-absolute-value-switch
kind: example
title: "Branchwise AD for absolute value and the nondifferentiable switch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [def-finite-straight-line-computational-program]
justified_by: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Example

The primitive $f(x)=|x|$ has two strict branches: $f(x)=x$ for $x>0$ and $f(x)=-x$ for $x<0$. Branchwise AD returns derivative $1$ on the positive branch and $-1$ on the negative branch. At the switch $x=0$ it returns NONDIFFERENTIABLE.

## Facts & Assumptions

**Given:** The absolute-value primitive with the two strict branch formulas.

[F1] [[def-finite-straight-line-computational-program]]: a piecewise primitive uses the derivative of its unique strict active branch and returns NONDIFFERENTIABLE at a branch boundary.

## Proof

**Proof technique:** one-sided difference quotients.

1.1 For $x>0$, the active formula is $f(x)=x$, whose derivative is $1$; for $x<0$, the active formula is $f(x)=-x$, whose derivative is $-1$. These are the two derivatives used by the strict-branch rule in [F1]. [F1, given, algebra]

1.2 At zero, the right difference quotient is $(|h|-0)/h=1$ for $h>0$, while the left quotient is $(|h|-0)/h=-1$ for $h<0$. Since the one-sided limits differ, the derivative does not exist at zero. [given, algebra]

2.1 By [F1], the branch boundary therefore returns NONDIFFERENTIABLE and no derivative; selecting a generalized derivative would require a separately supplied rule. [F1, step 1.2] ∎
