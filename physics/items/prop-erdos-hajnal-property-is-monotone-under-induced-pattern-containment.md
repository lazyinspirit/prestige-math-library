---
id: prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment
kind: proposition
title: "If $H$ is an induced subgraph of $H'$ and $H'$ has the Erdős–Hajnal property, then $H$ has it with every constant of $H'$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-erdos-hajnal-property-passes-to-hereditary-subclasses, def-h-free-and-family-free-graph, lem-induced-embeddings-compose, lem-forbidden-induced-subgraph-classes-are-hereditary]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Statement

Suppose $H$ has an induced embedding into $H'$. Then every Erdős–Hajnal constant for $H'$ is one for $H$. Consequently, if $H'$ has the Erdős–Hajnal property, then so does $H$.

## Facts & Assumptions

**Given:** Finite graphs $H,H'$ and an induced embedding $H\hookrightarrow_{\mathrm{ind}}H'$.

[L1] Every Erdős–Hajnal constant passes from a hereditary class to any hereditary subclass ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

[L2] A graph is $F$-free when it has no induced embedding of $F$ ([[def-h-free-and-family-free-graph]]).

[L3] Induced embeddings compose, so induced-subgraph containment is transitive ([[lem-induced-embeddings-compose]]).

[L4] Every fixed-pattern-free graph class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is $H$-free, then it is $H'$-free: an induced embedding $H'\hookrightarrow_{\mathrm{ind}}G$ would compose with the Given embedding to put $H$ inducedly in $G$. [given, L2, L3]

2.1 Hence the $H$-free class is a subclass of the $H'$-free class, and both are hereditary by [L4]. [step 1.1, L4]

3.1 Applying [L1] proves that every constant of $H'$ is a constant of $H$, and therefore proves the property implication. [step 2.1, L1] ∎
