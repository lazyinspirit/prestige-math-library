---
id: thm-depth-formula-for-flat-local-homomorphisms
title: The depth formula for flat local homomorphisms
kind: theorem
status: published
origin: pipeline
deps: [cor-flat-local-depth-additivity, cor-flat-local-cohen-macaulay-fibre-criterion, def-axiom-of-choice]
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
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-depth-formula-for-flat-local-homomorphisms). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. For every flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of
Noetherian local rings,
$$\operatorname{depth}S=\operatorname{depth}R+ \operatorname{depth}(S/\mathfrak mS).$$
Moreover, $S$ is Cohen--Macaulay if and only if $R$ and the closed fibre are
both Cohen--Macaulay. No finite-type hypothesis is required.

## Facts & Assumptions

**Given:** The Axiom of Choice, the flat local Noetherian hypotheses and the closed fibre. Choice is spent through the regular-sequence lifting in [[cor-flat-local-depth-additivity]] and the dimension argument in [[cor-flat-local-cohen-macaulay-fibre-criterion]] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The depth equality is [[cor-flat-local-depth-additivity]] under the stated Choice hypothesis. [given]

2.1 The Cohen--Macaulay equivalence is [[cor-flat-local-cohen-macaulay-fibre-criterion]] under the same Choice hypothesis. Both prerequisites use only the displayed ring hypotheses and AC, so no finite-type condition is introduced. [step 1.1, algebra] ∎
