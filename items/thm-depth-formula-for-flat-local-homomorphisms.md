---
id: thm-depth-formula-for-flat-local-homomorphisms
title: The depth formula for flat local homomorphisms
kind: theorem
status: draft
origin: pipeline
deps: [cor-flat-local-depth-additivity, cor-flat-local-cohen-macaulay-fibre-criterion]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

For every flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of
Noetherian local rings,
$$\operatorname{depth}S=\operatorname{depth}R+ \operatorname{depth}(S/\mathfrak mS).$$
Moreover, $S$ is Cohen--Macaulay if and only if $R$ and the closed fibre are
both Cohen--Macaulay. No finite-type hypothesis is required.

## Facts & Assumptions

**Given:** the flat local Noetherian hypotheses and the closed fibre.

## Proof

**Proof technique:** direct.

1.1 The depth equality is `cor-flat-local-depth-additivity`. [given]

2.1 The Cohen--Macaulay equivalence is `cor-flat-local-cohen-macaulay-fibre-criterion`. Both prerequisites use only the displayed hypotheses, so no finite-type condition is introduced. [step 1.1, algebra] ∎
