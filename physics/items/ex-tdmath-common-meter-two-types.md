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

Take two types with fixed totals $T_1=T_2=1$ and a common meter satisfying the compatibility hypotheses of [[thm-tdmath-common-meter-calibration]], including its shared equal-mass comparison $\preceq_{\mathcal Y}$. Let type-1 states $a_0,a_1$ have normalized values $0,1$, and type-2 states $b_0,b_1$ have normalized values $1/3,3$. Using the shared raw state tags of that theorem, let $C_0=e_{a_{1,a_1}}+e_{a_{2,b_0}}$ and $D_0=e_{a_{1,a_0}}+e_{a_{2,b_1}}$. Their fixed-meter encodings are $C=C_0+2e_{\zeta_0}$ and $D=D_0+2e_{\zeta_0}$, each of mass four. The calibrated values are $4/3$ for $C$ and $3$ for $D$; the common-meter comparison orders $C\preceq_{\mathcal Y}D$ and, after common-meter cancellation, $C_0\preceq_{\mathcal Y}D_0$.

## Facts & Assumptions

[A1] The fixed type totals and values in the Example: one unit of each type, with $\sigma_1(a_1)=1$, $\sigma_1(a_0)=0$, $\sigma_2(b_0)=1/3$, and $\sigma_2(b_1)=3$.

[F1] [[thm-tdmath-common-meter-calibration]]: under its finite common-meter compatibility assumptions, including the defined shared relation on $\mathcal Y$, a compound comparison is equivalent to comparing the sum of its typewise calibrated values.

[F2] [[thm-tdmath-additive-entropy-representation]]: normalized values are real and may lie outside $[0,1]$ for states other than the two references.

## Verification

**Given:** [A1], [F1], and [F2].

1.1 Both compounds have type-total vector $(1,1)$, so [F1] applies. Their calibrated values are $\Sigma(C)=1+1/3=4/3$ and $\Sigma(D)=0+3=3$. Since $4/3\le3$, [F1] gives $C\preceq_{\mathcal Y}D$. The theorem also cancels their common $2e_{\zeta_0}$, giving $C_0\preceq_{\mathcal Y}D_0$. The value $3$ is permitted by [F2]; the representation theorem imposes no unit-interval bound on arbitrary states. [A1, F1, F2, algebra]

2.1 Reversing the comparison would require $3\le4/3$, which is false; hence this particular comparison is strict. No separate per-type numerical reading is treated as a proof of common-meter compatibility; that remains the stated hypothesis. [A1, F1, step 1.1, algebra] ∎

