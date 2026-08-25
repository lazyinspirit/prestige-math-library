---
id: prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity
kind: proposition
title: "The word metric is the largest left-invariant metric in which each generator and its inverse lie within distance one of the identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, def-word-metric, thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph, def-metric-space]
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

The word metric is the largest left-invariant metric in which each generator and its inverse lie within distance one of the identity.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L2] Word length is defined on every element and satisfies $|gh|_S\le|g|_S+|h|_S$, $|g^{-1}|_S=|g|_S$, and $|g|_S=0$ exactly when $g$ is the identity ([[lem-word-length-is-well-defined-and-satisfies-the-length-laws]]).

[L3] The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[L4] Every metric satisfies the triangle inequality ([[def-metric-space]]).


## Proof

**Proof technique:** direct.

1.1 For a competing left-invariant metric with the stated property, the triangle inequality along a shortest expression bounds the competing distance by the word length. [F1, L1, L2, L4]

2.1 The word metric itself gives every symmetrised generator distance one from the identity, so it satisfies the constraint and dominates every competitor. [F1, L1, L3, step 1.1] ∎
