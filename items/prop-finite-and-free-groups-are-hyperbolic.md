---
id: prop-finite-and-free-groups-are-hyperbolic
kind: proposition
title: "Finite groups and free groups are hyperbolic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hyperbolic-group, prop-cayley-trees-are-zero-hyperbolic, thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Sections 6.2.4 and 6.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Every finite group and every finitely generated free group is hyperbolic.

## Facts & Assumptions

**Given:** Either a finite group $G$ with a finite generating set $S$, or a finitely generated free group $F(X)$ with free basis $X$.

[L1] Cayley trees are $0$-hyperbolic
([[prop-cayley-trees-are-zero-hyperbolic]]).

[L2] The Cayley graph of a free group with respect to a free basis is a tree
([[thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is finite, then its Cayley graph has finite diameter. Every geodesic triangle in a finite-diameter space is $\operatorname{diam}(\Gamma(G,S))$-slim, so $G$ is hyperbolic. [given, algebra]

2.1 If $F(X)$ is free, then [L2] says that its Cayley graph is a tree, and [L1] therefore makes it $0$-hyperbolic. Hence $F(X)$ is hyperbolic. [L1, L2] ∎ 