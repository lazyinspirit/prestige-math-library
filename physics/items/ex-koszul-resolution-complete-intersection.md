---
id: ex-koszul-resolution-complete-intersection
kind: example
title: "Koszul Resolution Complete Intersection"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-koszul-complex-resolves-a-regular-quotient, cor-complete-intersection-betti-numbers-binomial]
proof_strategy: direct
verification:
  audited: 2026-09-06
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

In $k[x,y]$, the regular sequence $x^2,y^3$ gives $0\to R\to R^2\to R\to R/(x^2,y^3)\to0$ with ranks $1,2,1$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[cor-koszul-complex-resolves-a-regular-quotient]], [[cor-complete-intersection-betti-numbers-binomial]].

## Proof

**Proof technique:** direct.

1.1 $x^2$ is regular in $k[x,y]$, and $y^3$ is regular modulo $(x^2)$. [given, algebra]

2.1 The Koszul complex resolves the quotient with exterior ranks $1,2,1$, whose alternating sum is zero. [step 1.1, algebra] ∎
