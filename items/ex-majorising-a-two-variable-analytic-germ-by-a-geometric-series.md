---
id: ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series
kind: example
title: A concrete geometric majorant
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §3 Exercise 14, printed p. 8, supplies the geometric-majorant construction; this concrete polynomial perturbation and calculation are adapted locally.
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-coefficientwise-majorisation-of-multivariable-power-series", "lem-an-analytic-germ-has-a-rational-geometric-majorant"]
---

## Example

For $f(x,y)=x^2+1/(1-x-y)$ at the origin, $r=1/2$ and $M=2$ give $f\ll2/(1-2x-2y)$.

## Facts & Assumptions

**Given:** The explicit two-variable germ and proposed geometric majorant in the Example; their coefficient comparison is to be calculated.

[F1] Compare ordinary coefficients at each multi-index. ([[def-coefficientwise-majorisation-of-multivariable-power-series]]).

## Verification

1.1 For $|x|+|y|<1$, the geometric expansion and binomial formula give $[x^ay^b](1-x-y)^{-1}=\binom{a+b}{a}$. Hence $[x^ay^b]f=\binom{a+b}{a}+\mathbf1_{(a,b)=(2,0)}$. The proposed majorant has coefficient $2^{a+b+1}\binom{a+b}{a}$. [given, algebra]

2.1 Outside $(a,b)=(2,0)$ the comparison follows from $2^{a+b+1}\ge2>1$. At $(2,0)$ the coefficients are 2 and 8, respectively. In particular the constant coefficients are 1 and 2. Every coefficient is nonnegative, so these inequalities give the claimed majorisation by F1. [step 1.1, F1, algebra] ∎

## Source notes

Gantumur, §3 Exercise 14, printed p. 8, supplies the geometric-majorant construction; this concrete polynomial perturbation and calculation are adapted locally.
