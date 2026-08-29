---
id: ex-a-floating-point-dot-product-error-bound
kind: example
title: "A short floating-point dot product obeys the gamma_n error bound"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
---



## Example

Take $x=(1,2)$, $y=(3,4)$ and the binary64 unit roundoff
$u=2^{-53}$, for which $\gamma_2=2u/(1-2u)\approx 2.2\cdot 10^{-16}$. The
left-to-right computed dot product $s_2$ satisfies

$$s_2=3(1+\delta_0)+8(1+\delta_1)\qquad\text{with }|\delta_0|,|\delta_1|\le\gamma_2,$$

so the computed value is the exact dot product of slightly perturbed summands,
and

$$|s_2-11|\;\le\;\gamma_2\,(3+8)=11\gamma_2\;\le\;\gamma_2\,\lVert x\rVert_1\lVert y\rVert_1=21\gamma_2\approx 4.7\cdot 10^{-15}.$$

## Facts & Assumptions

**Given:** The vectors $x=(1,2)$, $y=(3,4)$, the exact dot product $x\cdot y=11$, the unit roundoff $u=2^{-53}$ with $2u<1$, and the left-to-right computed sum $s_2$ of the two products $x_0y_0=3$ and $x_1y_1=8$.

[L1] The computed dot product obeys the componentwise form $s_n=\sum_{j<n}x_jy_j(1+\delta_j)$ with $|\delta_j|\le\gamma_n=nu/(1-nu)$, and the normwise bound $|s_n-x\cdot y|\le\gamma_n\sum_j|x_jy_j|\le\gamma_n\lVert x\rVert_1\lVert y\rVert_1$ ([[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]).

## Verification

**Proof technique:** direct.

1.1 With $n=2$ and $2u<1$, [L1] applies and yields $s_2=x_0y_0(1+\delta_0)+x_1y_1(1+\delta_1)$ with $|\delta_0|,|\delta_1|\le\gamma_2$, which for $x=(1,2)$ and $y=(3,4)$ reads $s_2=3(1+\delta_0)+8(1+\delta_1)$. [L1, algebra]

1.2 The exact dot product is $x\cdot y=1\cdot 3+2\cdot 4=11$, and the absolute summand total is $|x_0y_0|+|x_1y_1|=3+8=11$, while $\lVert x\rVert_1\lVert y\rVert_1=(1+2)(3+4)=21$. [algebra]

2.1 By the normwise bound of [L1] applied to the numbers of step 1.2, $|s_2-11|\le\gamma_2\cdot 11\le\gamma_2\cdot 21$; substituting $u=2^{-53}$ gives $\gamma_2=2^{-52}/(1-2^{-52})$, so $|s_2-11|\le 11\cdot 2^{-52}/(1-2^{-52})$, a bound of order $10^{-15}$. [L1, step 1.2, algebra]

3.1 Step 1.1 verifies the componentwise perturbation form and step 2.1 the normwise bound for this short vector pair: the computed dot product agrees with the exact dot product of slightly perturbed summands and lies within $11\gamma_2$ of $11$. [step 1.1, step 2.1] ∎
