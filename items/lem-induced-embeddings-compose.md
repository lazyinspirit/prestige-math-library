---
id: lem-induced-embeddings-compose
kind: lemma
title: "Induced embeddings compose, and the induced-subgraph relation is transitive up to isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-embedding-and-induced-copy, def-injection-surjection-bijection, def-graph-isomorphism-and-complement]
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
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## Statement

If $\varphi:H\hookrightarrow_{\mathrm{ind}}G$ and $\psi:G\hookrightarrow_{\mathrm{ind}}K$, then $\psi\circ\varphi:H\hookrightarrow_{\mathrm{ind}}K$. Consequently, being an induced subgraph up to isomorphism is transitive.

## Facts & Assumptions

**Given:** Induced embeddings $\varphi:H\to G$ and $\psi:G\to K$.

[F1] An induced embedding is injective and preserves adjacency in both directions ([[def-induced-embedding-and-induced-copy]]).

[F2] A composite of injections is injective ([[def-injection-surjection-bijection]]).

[F3] Graph isomorphism is compatible with composition ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 The composite $\psi\circ\varphi$ is injective. [F2]

1.2 For distinct $x,y\in V(H)$, one has $xy\in E(H)$ if and only if $\varphi(x)\varphi(y)\in E(G)$, if and only if $\psi\varphi(x)\psi\varphi(y)\in E(K)$. [F1]

2.1 Hence $\psi\circ\varphi$ is an induced embedding. Replacing induced copies by their isomorphic representatives gives the stated transitivity up to isomorphism. [step 1.1, step 1.2, F1, F3] ∎
