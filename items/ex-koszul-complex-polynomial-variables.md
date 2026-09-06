---
id: ex-koszul-complex-polynomial-variables
kind: example
title: "Koszul Complex Polynomial Variables"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-koszul-complex-resolves-a-regular-quotient]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Example

For $S=k[x_1,\ldots,x_n]$, the variables form a regular sequence and $K(x_1,\ldots,x_n;S)$ is a finite free resolution of $k=S/(x_1,\ldots,x_n)$.

## Facts & Assumptions

**Given:** The polynomial ring and its variable sequence stated in the claim. The declared prerequisite used here is [[cor-koszul-complex-resolves-a-regular-quotient]].

## Proof

**Proof technique:** direct.

1.1 Successive quotients by the variables are polynomial rings, so each next variable is injective. [given, algebra]

2.1 The regular-quotient resolution theorem gives a finite free resolution of $k$. [step 1.1, algebra] ∎
