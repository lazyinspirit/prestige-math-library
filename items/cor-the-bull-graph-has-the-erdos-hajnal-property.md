---
id: cor-the-bull-graph-has-the-erdos-hajnal-property
kind: corollary
title: "The bull graph has the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter, def-bull-graph, def-erdos-hajnal-property-and-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture — A Survey, Theorem 2.3"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

The bull graph has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The bull graph.

[L1] Every bull-free finite graph contains a clique or a stable set of size at
least $|V(G)|^{1/4}$, so bull-free graphs have Erdős-Hajnal constant $1/4$
([[cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter]]).

[L2] A graph $H$ has the Erdős-Hajnal property exactly when the hereditary class
of $H$-free graphs has a positive Erdős-Hajnal constant
([[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the hereditary class of bull-free graphs has the positive exponent $1/4$. [L1]

2.1 By [L2], that is exactly the statement that the bull graph has the Erdős-Hajnal property. [step 1.1, L2] ∎
