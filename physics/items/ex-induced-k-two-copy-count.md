---
id: ex-induced-k-two-copy-count
kind: example
title: "$\\operatorname{ind}_{K_2}(G)=2|E(G)|$ under the induced-embedding convention"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-copy-number, def-induced-embedding-and-induced-copy, thm-handshake-lemma-for-finite-simple-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Swastik Kopparty, Local Structure: Subgraph Counts I"
      url: "https://www.math.toronto.edu/swastik/courses/rutgers/graphtheory-F11/homs.pdf"
pipeline_run: null
---

## Statement

For every finite simple graph $G$,

$$\operatorname{ind}_{K_2}(G)=2|E(G)|.$$

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[F1] $\operatorname{ind}_{K_2}(G)$ counts induced embeddings of the two labelled vertices of $K_2$ into $G$ ([[def-induced-copy-number]], [[def-induced-embedding-and-induced-copy]]).

[L1] The sum of vertex degrees is $2|E(G)|$ ([[thm-handshake-lemma-for-finite-simple-graphs]]).

## Verification

**Proof technique:** direct.

1.1 An induced embedding of $K_2$ is exactly an ordered adjacent pair $(u,v)$ of vertices of $G$. [F1]

2.1 Counting ordered adjacent pairs by their first vertex gives $\sum_{u\in V(G)}\deg(u)$. [step 1.1]

3.1 By the handshake lemma this is $2|E(G)|$, proving the formula. [step 2.1, L1] ∎
