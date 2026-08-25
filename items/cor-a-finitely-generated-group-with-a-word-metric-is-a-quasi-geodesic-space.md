---
id: cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space
kind: corollary
title: "A group with the word metric of any generating set is a $(1,1)$-quasi-geodesic space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-group, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

A group with the word metric of any generating set is a $(1,1)$-quasi-geodesic space.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[L1] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L2] The vertex set of a connected simple graph with its path metric is a $(1,1)$-quasi-geodesic space ([[prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one]]).

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L3] A group is finitely generated when some finite subset generates it ([[def-finitely-generated-group]]).


## Proof

**Proof technique:** direct.

1.1 The word metric is the path metric of the Cayley graph, which is connected because the set generates. [F1, L1, L3]

2.1 The previous proposition then applies verbatim. [L2, step 1.1] ∎
