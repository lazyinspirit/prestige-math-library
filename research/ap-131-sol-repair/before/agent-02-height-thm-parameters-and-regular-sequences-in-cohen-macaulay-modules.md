---
id: thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
title: Parameters and regular sequences in Cohen--Macaulay modules
kind: theorem
status: published
origin: pipeline
deps: [cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module, cor-one-regular-system-of-parameters-implies-cohen-macaulay, thm-dimension-and-parameters-for-modules, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-parameters-and-regular-sequences-in-cohen-macaulay-modules). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. For a nonzero finite module $M$ over a Noetherian local ring, the following
are equivalent:

1. $M$ is Cohen--Macaulay;
2. every system of parameters for $M$ is $M$-regular;
3. some system of parameters for $M$ is $M$-regular.

## Facts & Assumptions

**Given:** The Axiom of Choice and a nonzero finite module $M$ over a Noetherian local ring.

[L1] Under AC, every system of parameters of a Cohen--Macaulay module is regular ([[cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module]]).

[L2] A regular system of parameters makes its module Cohen--Macaulay ([[cor-one-regular-system-of-parameters-implies-cohen-macaulay]]).

[L3] Systems of parameters exist for nonzero finite modules over Noetherian local rings, and their length is $\dim_R(M)$ ([[thm-dimension-and-parameters-for-modules]]).

## Proof

**Proof technique:** direct.

1.1 Under the stated AC, [L1] gives (1)$\Rightarrow$(2). By [L3] there is at least one system of parameters, so (2)$\Rightarrow$(3) is not merely vacuous. [given, L1, L3]

2.1 By [L2], (3)$\Rightarrow$(1). Thus all three conditions are equivalent. [L2, step 1.1] ∎
