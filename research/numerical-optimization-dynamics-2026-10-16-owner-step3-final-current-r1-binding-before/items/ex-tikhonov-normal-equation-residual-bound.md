---
id: ex-tikhonov-normal-equation-residual-bound
kind: example
title: "An exact normal-equation residual gives an a posteriori solution bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-hilbert-tikhonov-normal-operator-invertible
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6, equations (6.1)–(6.4), PDF pp. 56–63."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Slides 2–6 on the regularized inverse and error decomposition."
---

## Example

Assume Countable Choice. Let $A=2$ on $\mathbb R$, $\lambda=1/2$, and $y_\delta=1$. The exact
regularized solution is $4/9$. For the approximate value
$\widetilde x=4/9+1/100$, the exact normal-equation residual is $9/200$,
so the bound $|\widetilde x-4/9|\le |r|/\lambda$ holds. This uses an exact
residual; it does not certify how floating-point residual evaluation error
should be bounded.

## Facts & Assumptions

**Given:** Countable Choice, $A=2$, $\lambda=1/2$, $y_\delta=1$, and $\widetilde x=4/9+1/100$; compute the exact residual and compare it with the error bound.

[F1] [[lem-hilbert-tikhonov-normal-operator-invertible]]: The inverse of $A^*A+\lambda I$ exists and has norm at most $1/\lambda$.

## Verification

1.1 Here $A^*A+\lambda I=4+1/2=9/2$, while the exact regularized solution is $A^*y_\delta/(A^*A+\lambda I)=2/(9/2)=4/9$. Thus $|\widetilde x-4/9|=1/100$. [given, algebra]

2.1 The exact residual is $r=(9/2)(4/9+1/100)-2=9/200$. Since $\widetilde x-4/9=(9/2)^{-1}r$, [F1] bounds the error by $|r|/\lambda=(9/200)/(1/2)=9/100\ge1/100$. The residual here is exact, not a floating-point evaluation certificate. [given, F1, step 1.1, algebra] ∎
