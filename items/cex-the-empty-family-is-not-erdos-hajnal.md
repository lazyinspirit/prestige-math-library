---
id: cex-the-empty-family-is-not-erdos-hajnal
kind: counterexample
title: "The empty forbidden family is not Erdős–Hajnal"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-the-class-of-all-graphs-is-not-erdos-hajnal, def-h-free-and-family-free-graph, thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The empty forbidden family has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The empty family $\varnothing$ of graphs.

[L1] A graph is $\varnothing$-free exactly when it is $H$-free for every $H\in\varnothing$, which is vacuous ([[def-h-free-and-family-free-graph]]).

[L2] The hereditary class of all finite graphs does not have the Erdős–Hajnal property ([[cor-the-class-of-all-graphs-is-not-erdos-hajnal]]).

[L3] On a finite family, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent ([[thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], every finite graph is $\varnothing$-free. So the class of $\varnothing$-free graphs is exactly the class of all finite graphs. [L1]

2.1 Applying [L2] to the class identified in step 1.1 shows that the empty family does not have the Erdős–Hajnal property. [step 1.1, L2]

3.1 Therefore the claim is false. By [L3], the empty family also has neither of the other two equivalent properties from the A page. [step 2.1, L3] ∎
