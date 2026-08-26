---
id: cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence
kind: corollary
title: "For a single graph, the Erdős–Hajnal property, the polynomial Rödl property, and virality are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence, def-erdos-hajnal-property-and-constant, def-polynomial-rodl-property-for-a-finite-family, def-viral-property-for-a-finite-family, def-h-free-and-family-free-graph]
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
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Theorem 4"
      url: "https://arxiv.org/html/2403.08303v1"
pipeline_run: null
---

## Statement

For every finite graph $H$, the following are equivalent:

1. $H$ has the Erdős–Hajnal property.
2. The singleton family $\{H\}$ has the polynomial Rödl property.
3. The singleton family $\{H\}$ is viral.

## Facts & Assumptions

**Given:** A finite graph $H$.

[L1] The finite-family equivalence theorem applies to every finite family, in particular to the singleton family $\{H\}$ ([[thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L2] A graph is $\{H\}$-free exactly when it is $H$-free ([[def-h-free-and-family-free-graph]]).

[L3] The meanings of “$H$ has the Erdős–Hajnal property”, “the singleton family $\{H\}$ has the polynomial Rödl property”, and “the singleton family $\{H\}$ is viral” are those of the corresponding definitions ([[def-erdos-hajnal-property-and-constant]], [[def-polynomial-rodl-property-for-a-finite-family]], [[def-viral-property-for-a-finite-family]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to the family $\{H\}$ gives the equivalence of the finite-family Erdős–Hajnal property, the finite-family polynomial Rödl property, and virality for $\{H\}$. [L1]

1.2 By [L2] and [L3], the first of those assertions is exactly “$H$ has the Erdős–Hajnal property”, while the other two are already assertions about the singleton family $\{H\}$. [L2, L3]

2.1 Steps 1.1 and 1.2 give the claimed equivalence. [step 1.1, step 1.2] ∎
