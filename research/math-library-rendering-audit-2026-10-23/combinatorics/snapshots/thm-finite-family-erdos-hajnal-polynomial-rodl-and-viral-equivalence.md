---
id: thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence
kind: theorem
title: "For a finite family, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, def-polynomial-rodl-property-for-a-finite-family, def-viral-property-for-a-finite-family, thm-a-finite-family-with-the-erdos-hajnal-property-is-viral, cor-viral-implies-polynomial-rodl-for-a-finite-family, cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.3"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a finite family of graphs. The following are equivalent:

1. $\mathcal F$ has the Erdős–Hajnal property.
2. $\mathcal F$ has the polynomial Rödl property.
3. $\mathcal F$ is viral.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of graphs.

[L1] Every finite family with the Erdős–Hajnal property is viral ([[thm-a-finite-family-with-the-erdos-hajnal-property-is-viral]]).

[L2] Every viral finite family has the polynomial Rödl property ([[cor-viral-implies-polynomial-rodl-for-a-finite-family]]).

[L3] Every finite family with the polynomial Rödl property has the Erdős–Hajnal property ([[cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 Assertion 1 implies assertion 3 by [L1]. [L1]

1.2 Assertion 3 implies assertion 2 by [L2]. [L2]

1.3 Assertion 2 implies assertion 1 by [L3]. [L3]

2.1 The three implications close the cycle $1\Rightarrow3\Rightarrow2\Rightarrow1$, so the three assertions are equivalent. [step 1.1, step 1.2, step 1.3] ∎
