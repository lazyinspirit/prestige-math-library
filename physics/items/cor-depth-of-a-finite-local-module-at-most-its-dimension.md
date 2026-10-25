---
id: cor-depth-of-a-finite-local-module-at-most-its-dimension
title: A finite local module has depth at most its dimension
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-depth-at-a-prime-bounded-by-local-dimension]
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

If $(R,\mathfrak m)$ is Noetherian local and $0\ne M$ is a finite
$R$-module, then
$$\operatorname{depth}_R(M)\le\dim_R(M):=\dim\operatorname{Supp}_R(M).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, and $\mathfrak m\in\operatorname{Supp}_R(M)$ because $M\ne0$ is finite.

## Proof

**Proof technique:** direct.

1.1 Under the stated AC, apply [[lem-depth-at-a-prime-bounded-by-local-dimension]] at $\mathfrak p=\mathfrak m$. [given]

2.1 Localization at the maximal ideal changes neither $R$, $M$, nor the support dimension, giving the displayed inequality. [step 1.1, algebra] ∎
