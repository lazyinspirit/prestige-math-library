---
id: thm-single-pattern-and-finite-family-erdos-hajnal-formulations
kind: theorem
title: "The single-forbidden-graph and finite-nonempty-family formulations of the Erdős–Hajnal conjecture are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-erdos-hajnal-property-and-constant, def-h-free-and-family-free-graph, prop-erdos-hajnal-property-passes-to-hereditary-subclasses, lem-forbidden-induced-subgraph-classes-are-hereditary]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Chernikov, MATH 223M notes, Remark 3.2"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement

The following assertions are equivalent:

1. every finite graph $H$ has the Erdős–Hajnal property;
2. for every finite nonempty family $\mathcal F$ of finite graphs, the hereditary class of $\mathcal F$-free graphs has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The two universally quantified assertions in the Statement.

[L1] The Erdős–Hajnal property of a graph $H$ is the property of its $H$-free class ([[def-erdos-hajnal-property-and-constant]]).

[L2] A graph is $\mathcal F$-free exactly when it is $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

[L3] The Erdős–Hajnal property passes to hereditary subclasses ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]), and every family-free class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

## Proof

**Proof technique:** direct.

1.1 Assume assertion 1, let $\mathcal F$ be finite and nonempty, and choose $H\in\mathcal F$. By [L2], every $\mathcal F$-free graph is $H$-free. [given, L2, choose]

1.2 Conversely, assume assertion 2 and let $H$ be any finite graph. Applying assertion 2 to the finite nonempty family $\{H\}$ gives the property for the $H$-free class, which is assertion 1 by [L1] and [L2]. [given, L1, L2]

2.1 The $H$-free class has the property by assertion 1 and [L1], so its hereditary subclass of $\mathcal F$-free graphs has it by [L3]. This proves assertion 2. [step 1.1, L1, L3]

3.1 The two implications prove the equivalence. [step 2.1, step 1.2] ∎
