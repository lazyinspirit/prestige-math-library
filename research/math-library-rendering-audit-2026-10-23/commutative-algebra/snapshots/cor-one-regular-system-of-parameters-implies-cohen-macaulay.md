---
id: cor-one-regular-system-of-parameters-implies-cohen-macaulay
title: One regular system of parameters implies Cohen--Macaulayness
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-cohen-macaulay-local-module-and-ring, thm-dimension-and-parameters-for-modules, thm-depth-bounded-by-support-dimension]
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
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Statement

Assume the Axiom of Choice.

Let $0\ne M$ be finite over a Noetherian local ring. If one system of
parameters for $M$ is $M$-regular, then $M$ is Cohen--Macaulay. Here a system of parameters for $M$ means a tuple $x_1,\ldots,x_d$ in the maximal ideal, where $d=\dim\operatorname{Supp}_R(M)$, such that $M/(x_1,\ldots,x_d)M$ has finite length.

## Facts & Assumptions

**Given:** The Axiom of Choice, a nonzero finite module $M$ over a Noetherian local ring and an $M$-regular parameter tuple of length $d=\dim\operatorname{Supp}_R(M)$, using the terminology introduced in [[thm-dimension-and-parameters-for-modules]].

## Proof

**Proof technique:** direct.

1.1 The regular parameter system gives $\operatorname{depth}_R(M)\ge d$. Under the stated AC, [[thm-depth-bounded-by-support-dimension]] gives $\operatorname{depth}_R(M)\le d$. [given]

2.1 Hence depth and dimension both equal $d$, which is Cohen--Macaulayness. [step 1.1, algebra] ∎
