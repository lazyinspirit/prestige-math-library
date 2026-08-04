---
id: cor-h-free-complement-dictionary
kind: corollary
title: "$G$ is $H$-free if and only if $\\overline G$ is $\\overline H$-free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, lem-complement-commutes-with-induced-subgraphs, def-graph-isomorphism-and-complement]
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
    - title: "ISGCI, Self-complementary classes"
      url: "https://www.graphclasses.org/classes/self_complementary.html"
pipeline_run: null
---

## Statement

For finite graphs $G$ and $H$,

$$G\text{ is }H\text{-free}\quad\Longleftrightarrow\quad \overline G\text{ is }\overline H\text{-free}.$$

## Facts & Assumptions

**Given:** Finite graphs $G$ and $H$.

[F1] $H$-free means containing no induced copy of $H$ ([[def-h-free-and-family-free-graph]]).

[L1] Complementation commutes with induced subgraphs ([[lem-complement-commutes-with-induced-subgraphs]]).

[F2] Complementation carries isomorphisms $H\cong G[W]$ to isomorphisms $\overline H\cong\overline G[W]$ ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 For every $W\subseteq V(G)$, one has $G[W]\cong H$ if and only if $\overline G[W]=\overline{G[W]}\cong\overline H$. [L1, F2]

2.1 Thus $G$ contains an induced $H$ if and only if $\overline G$ contains an induced $\overline H$. Negating both sides gives the claimed equivalence. [step 1.1, F1] ∎
