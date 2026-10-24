---
id: ex-parameter-sequence-fails-in-a-non-cm-ring
title: A parameter sequence that fails in a non-Cohen--Macaulay ring
kind: example
status: published
origin: pipeline
deps: [thm-depth-zero-associated-prime-criterion, ex-non-cohen-macaulay-local-ring]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

In the one-dimensional local ring
$A=k\llbracket x,y\rrbracket/(x^2,xy)$, the one-element sequence $y$ is a system of parameters
but is not regular.

## Facts & Assumptions

**Given:** `ex-non-cohen-macaulay-local-ring` computes $\dim A=1$ and $\operatorname{depth}A=0$.

## Verification

**Proof technique:** direct.

1.1 The quotient $A/yA\cong k\llbracket x\rrbracket/(x^2)$ has dimension $0$, so $y$ is a parameter. [given]

2.1 But the nonzero class of $x$ satisfies $yx=0$. Thus $y$ is a zero divisor and the parameter sequence is not regular, matching the depth gap $0<1$. [step 1.1, algebra] ∎
