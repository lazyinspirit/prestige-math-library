---
id: lem-induced-freeness-passes-to-induced-subgraphs
kind: lemma
title: "Every induced subgraph of an $\\mathcal F$-free graph is $\\mathcal F$-free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, lem-induced-embeddings-compose]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement

If $G$ is $\mathcal F$-free and $J$ is an induced subgraph of $G$, then $J$ is $\mathcal F$-free.

## Facts & Assumptions

**Given:** An $\mathcal F$-free graph $G$ and an induced embedding $\iota:J\to G$.

[F1] $\mathcal F$-free means that no $H\in\mathcal F$ has an induced embedding into $G$ ([[def-h-free-and-family-free-graph]]).

[L1] Induced embeddings compose ([[lem-induced-embeddings-compose]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $J$ is not $\mathcal F$-free. Then some $H\in\mathcal F$ has an induced embedding $\varphi:H\to J$. [assume-contra, F1]

2.1 The composite $\iota\circ\varphi:H\to G$ is an induced embedding. [step 1.1, L1]

3.1 This contradicts that $G$ is $\mathcal F$-free. Hence $J$ is $\mathcal F$-free. [step 2.1, F1, discharge-contradiction] ∎
