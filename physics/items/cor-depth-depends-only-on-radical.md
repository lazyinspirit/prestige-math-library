---
id: cor-depth-depends-only-on-radical
title: Depth depends only on the radical of the ideal
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-depth-radical-invariance-via-ext, cor-depth-as-first-nonzero-ext]
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be Noetherian, $M$ finite, and $I,J$ ideals contained in the Jacobson
radical. If $\sqrt I=\sqrt J$, then
$$\operatorname{depth}_I(M)=\operatorname{depth}_J(M),$$
including the value $\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the ring, module, and ideals in the statement.

[L1] Equal radicals give equal first nonzero Ext degrees, including simultaneous infinity ([[lem-depth-radical-invariance-via-ext]]).

[L2] Under the assumed Axiom of Choice, depth for a finite module and a Jacobson-radical ideal is its first nonzero Ext degree ([[cor-depth-as-first-nonzero-ext]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $I$ and $J$: the least nonvanishing degrees of $\operatorname{Ext}^*_R(R/I,M)$ and $\operatorname{Ext}^*_R(R/J,M)$ agree, with both infinite if neither family has a nonzero group. [L1, given]

2.1 Apply [L2] separately to $I$ and $J$; both lie in the Jacobson radical by hypothesis. Their depths are the degrees equal in step 1.1, including the infinite case. [L2, step 1.1, given] ∎
