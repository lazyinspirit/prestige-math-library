---
id: cor-local-rings-have-only-trivial-idempotents
kind: corollary
title: 'Assuming the Axiom of Choice, a local ring has no idempotents other than $0$ and $1$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-ring-unit-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Statement

Assume the Axiom of Choice. If $R$ is a local ring and $e\in R$ satisfies $e^2=e$, then $e=0$ or $e=1$.

## Facts & Assumptions

**Given:** A local ring $R$ and an idempotent $e\in R$.

[F1] For every element $x$ of a local ring, at least one of $x$ and $1-x$ is a unit ([[thm-local-ring-unit-characterisations]]).

## Proof

**Proof technique:** cases.

1.1 By [F1], either $e$ is a unit or $1-e$ is a unit. If $e$ is a unit, multiplying $e^2=e$ by $e^{-1}$ gives $e=1$. [F1, algebra, assume-case eunit]

2.1 If $1-e$ is a unit, then $(1-e)e=e-e^2=0$; multiplying by $(1-e)^{-1}$ gives $e=0$. The two cases prove the claim, including the endpoint idempotents themselves. [F1, algebra, assume-case complement, cases-exhaustive] ∎
