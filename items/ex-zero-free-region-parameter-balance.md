---
id: ex-zero-free-region-parameter-balance
title: "Zero free region parameter balance"
kind: example
status: published
origin: pipeline
deps: [thm-riemann-zeta-classical-zero-free-region]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Theorem 6.6 proof"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Example

Let $\rho=\beta+i\gamma$ be a zero of $\zeta$ with $\beta<1$ and $|\gamma|\ge3$. In the high-height zero-free-region proof, if
$$\frac4{1+\delta-\beta}\le\frac3\delta+C\log(|\gamma|+2),$$
then choosing $\delta=1/(2C\log(|\gamma|+2))$ gives $1-\beta\ge1/(14C\log(|\gamma|+2))$. Here C is a fixed sufficiently large positive comparison constant.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-riemann-zeta-classical-zero-free-region]]: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

## Verification

1.1 Write $L=\log(|\gamma|+2)$. Here $L>0$ and $C>0$, so the chosen $\delta$ is positive. Apply the displayed assumed inequality at this value of $\delta$. Substitution makes $3/\delta+CL=7CL$, so $1+\delta-\beta\ge4/(7CL)$; the denominator is positive because $\beta<1$. [given, algebra]

2.1 Subtract $\delta=1/(2CL)$ to obtain $(4/7-1/2)/(CL)=1/(14CL)$. A smaller constant proves exclusion on a closed boundary. This calculation applies only to $|\gamma|\ge3$; [F1] states the all-height zero-free region, whose small-height conclusion is not supplied by this conditional calculation. [F1, step 1.1, algebra] ∎
