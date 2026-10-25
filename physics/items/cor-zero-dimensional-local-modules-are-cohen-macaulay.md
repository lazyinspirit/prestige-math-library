---
id: cor-zero-dimensional-local-modules-are-cohen-macaulay
title: Zero-dimensional finite local modules are Cohen--Macaulay
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-cohen-macaulay-local-module-and-ring, cor-depth-of-a-finite-local-module-at-most-its-dimension]
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

Every nonzero finite module $M$ of dimension $0$ over a Noetherian local ring
is Cohen--Macaulay.

## Facts & Assumptions

**Given:** The Axiom of Choice; $M\ne0$ and $\dim_R(M)=0$.

## Proof

**Proof technique:** direct.

1.1 Depth is nonnegative, while the AC-qualified `cor-depth-of-a-finite-local-module-at-most-its-dimension` gives $\operatorname{depth}_R(M)\le0$. [given]

2.1 Thus $\operatorname{depth}_R(M)=0=\dim_R(M)$, which is precisely the definition of Cohen--Macaulayness. [step 1.1, algebra] ∎
