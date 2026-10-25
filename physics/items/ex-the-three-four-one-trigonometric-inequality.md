---
id: ex-the-three-four-one-trigonometric-inequality
title: "The three four one trigonometric inequality"
kind: example
status: published
origin: pipeline
deps: [lem-zeta-three-four-one-logarithmic-derivative-inequality]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.6 proof"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Example

The weight in the three-four-one inequality is nonnegative term by term:
$$3+4\cos u+\cos(2u)=2(1+\cos u)^2.$$
It vanishes exactly when $u$ is an odd multiple of pi.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-zeta-three-four-one-logarithmic-derivative-inequality]]: For $\sigma>1$ and $t\in\mathbb R$, $-3\frac{\zeta'(\sigma)}{\zeta(\sigma)}-4\operatorname{Re}\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}-\operatorname{Re}\frac{\zeta'(\sigma+2it)}{\zeta(\sigma+2it)}\ge0.$

## Verification

1.1 Using $\cos(2u)=2\cos^2u-1$, the left side is $2+4\cos u+2\cos^2u=2(1+\cos u)^2$. The square vanishes precisely for $\cos u=-1$. [algebra]

2.1 In the logarithmic-derivative expansion the nth contribution is $2\Lambda(n)n^{-\sigma}(1+\cos(t\log n))^2$. It is zero for non-prime-powers and nonnegative otherwise. At t=0 its weight is eight, and at t log n equal to an odd multiple of pi its weight is zero, exactly as required by the inequality. [F1, step 1.1] ∎
