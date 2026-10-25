---
id: thm-regular-quotients-and-cohen-macaulayness
title: Regular quotients and Cohen--Macaulayness
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, cor-regular-quotient-cohen-macaulay-equivalence]
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
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-01-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be Noetherian local, let $0\ne M$ be finite, and let
$x_1,\ldots,x_r$ be both $M$-regular and an initial segment of a system of
parameters for $M$. Then $M$ is Cohen--Macaulay if and only if
$M/(x_1,\ldots,x_r)M$ is Cohen--Macaulay.

## Facts & Assumptions

**Given:** The Axiom of Choice; each successive quotient is nonzero, and the remaining parameter tuple shows that each $x_i$ is a parameter element on the preceding quotient.

## Proof

**Proof technique:** direct.

1.1 Apply `cor-regular-quotient-cohen-macaulay-equivalence` first to $M$ and $x_1$, then to each successive quotient and $x_i$. [given]

2.1 Chaining the resulting equivalences proves the assertion. The case $r=0$ is the identity statement. [step 1.1, algebra] ∎
