---
id: ex-parameter-sequence-regular-in-a-hypersurface
title: A parameter sequence regular in a hypersurface
kind: example
status: draft
origin: pipeline
deps: [thm-parameters-and-regular-sequences-in-cohen-macaulay-modules, ex-depth-of-a-hypersurface]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

In $A=k\llbracket x,y,z\rrbracket/(xy)$, the pair $x+y,z$ is a system of
parameters and a regular sequence.

## Facts & Assumptions

**Given:** $A$ is a two-dimensional hypersurface, hence Cohen--Macaulay.

## Verification

**Proof technique:** direct.

1.1 The quotient by $x+y$ and $z$ is $$A/(x+y,z)\cong k\llbracket x\rrbracket/(x^2),$$ which is nonzero and zero-dimensional. Thus $x+y,z$ is a system of parameters. [given]

2.1 Every system of parameters on a Cohen--Macaulay module is regular, so $x+y$ is a nonzerodivisor on $A$ and $z$ is a nonzerodivisor on $A/(x+y)$. [step 1.1, algebra] ∎
