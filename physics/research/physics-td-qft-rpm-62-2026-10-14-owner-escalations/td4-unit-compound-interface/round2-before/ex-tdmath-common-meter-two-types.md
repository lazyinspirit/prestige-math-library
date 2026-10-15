---
id: ex-tdmath-common-meter-two-types
kind: example
title: Two types on one meter scale
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 9
deps: [thm-tdmath-additive-entropy-representation, thm-tdmath-common-meter-calibration]
dependency_roles:
  thm-tdmath-additive-entropy-representation: mathematical-premise
  thm-tdmath-common-meter-calibration: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.E"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Example

Take two types with fixed totals $T_1=T_2=1$ and a common meter satisfying the compatibility hypotheses of [[thm-tdmath-common-meter-calibration]]. Let type-1 states $a_0,a_1$ have normalized values $0,1$, and type-2 states $b_0,b_1$ have normalized values $1/3,3$. Then the compound $C=(a_1,b_0)$ has calibrated value $4/3$, while $D=(a_0,b_1)$ has value $3$; the common-meter comparison orders $C\preceq D$.

## Facts & Assumptions

[A1] The fixed type totals and values in the Example: one unit of each type, with $\sigma_1(a_1)=1$, $\sigma_1(a_0)=0$, $\sigma_2(b_0)=1/3$, and $\sigma_2(b_1)=3$.

[F1] [[thm-tdmath-common-meter-calibration]]: under its finite common-meter compatibility assumptions, a compound comparison is equivalent to comparing the sum of its typewise calibrated values.

[F2] [[thm-tdmath-additive-entropy-representation]]: normalized values are real and may lie outside $[0,1]$ for states other than the two references.

## Verification

**Given:** [A1], [F1], and [F2].

1.1 Both compounds have type-total vector $(1,1)$, so [F1] applies. Their calibrated values are $\Sigma(C)=1+1/3=4/3$ and $\Sigma(D)=0+3=3$. Since $4/3\le3$, [F1] gives $C\preceq D$. The value $3$ is permitted by [F2]; the representation theorem imposes no unit-interval bound on arbitrary states. [A1, F1, F2, algebra]

2.1 Reversing the comparison would require $3\le4/3$, which is false; hence this particular comparison is strict. No separate per-type numerical reading is treated as a proof of common-meter compatibility; that remains the stated hypothesis. [A1, F1, step 1.1, algebra] ∎

