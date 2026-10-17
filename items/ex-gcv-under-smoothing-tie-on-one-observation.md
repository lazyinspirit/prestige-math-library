---
id: ex-gcv-under-smoothing-tie-on-one-observation
kind: example
title: A one-observation GCV tie can select severe undersmoothing
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
dependency_level: 2
deps:
  - alg-gcv-finite-grid-parameter-choice
  - lem-linear-smoother-gcv-expression
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 16–18 give the GCV criterion and document occasional undersmoothing failures.
---

## Example

Take $A=[1]$, observed datum $b=1$, true solution $x^\dagger=0$ (so the
noise is $e=1$), and grid $\lambda_1=1/10<\lambda_2=10$. The finite-grid GCV
rule ties at these two parameters and chooses $\lambda_1$, whose squared
solution error is one hundred times the squared error at $\lambda_2$.

## Facts & Assumptions

**Given:** The scalar matrix $A=[1]$, observation $b=1$, target $x^\dagger=0$,
and ordered grid $(1/10,10)$.

[F1] [[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]: The
Tikhonov solution is $(A^TA+\lambda I)^{-1}A^Tb$.

[F2] [[lem-linear-smoother-gcv-expression]]: The GCV score is
$\|(I-H_\lambda)b\|^2/[m(1-\operatorname{tr}(H_\lambda)/m)^2]$.

[F3] [[alg-gcv-finite-grid-parameter-choice]]: The rule selects the least-score
grid point and breaks ties by the least index.

## Verification
1.1 Here $H_\lambda=1/(1+\lambda)$, the residual is $(1-H_\lambda)b=\lambda/(1+\lambda)$, and $m=1$. Therefore the numerator and denominator of the score are both $(\lambda/(1+\lambda))^2$, so $GCV(\lambda)=1$ for each of the two positive grid values. [given, F1, F2, algebra]

2.1 By [F3], the tied scores select the smaller parameter $\lambda_1=1/10$. The corresponding estimate is $x_{1/10}=10/11$; at the other grid value it is $x_{10}=1/11$. [given, F1, F3, step 1.1, algebra]

3.1 Since the target is zero, the squared errors are $(10/11)^2=100/121$ and $(1/11)^2=1/121$. The first is one hundred times the second, so this valid finite GCV selection need not minimize solution error on its grid. [step 2.1, algebra] ∎
