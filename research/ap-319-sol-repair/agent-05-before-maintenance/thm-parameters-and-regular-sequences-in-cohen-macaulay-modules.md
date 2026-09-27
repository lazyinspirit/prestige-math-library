---
id: thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
title: Parameters and regular sequences in Cohen--Macaulay modules
kind: theorem
status: published
origin: pipeline
deps: [cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module, cor-one-regular-system-of-parameters-implies-cohen-macaulay]
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
## Statement

For a nonzero finite module $M$ over a Noetherian local ring, the following
are equivalent:

1. $M$ is Cohen--Macaulay;
2. every system of parameters for $M$ is $M$-regular;
3. some system of parameters for $M$ is $M$-regular.

## Facts & Assumptions

**Given:** systems of parameters have length $\dim_R(M)$ and a nonzero terminal quotient.

## Proof

**Proof technique:** direct.

1.1 The implication (1)$\Rightarrow$(2) is `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`, and (2)$\Rightarrow$(3) follows from existence of systems of parameters. [given]

2.1 The implication (3)$\Rightarrow$(1) is `cor-one-regular-system-of-parameters-implies-cohen-macaulay`. Thus all three conditions are equivalent. [step 1.1, algebra] ∎
