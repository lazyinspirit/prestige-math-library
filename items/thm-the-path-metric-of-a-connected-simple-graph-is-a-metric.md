---
id: thm-the-path-metric-of-a-connected-simple-graph-is-a-metric
kind: theorem
title: "The path metric of a connected simple graph is a metric on its vertex set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints, def-graph-path-metric, def-metric-space]
aliases: []
landmark: true
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

The path metric of a connected simple graph is a metric on its vertex set.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] Every walk in a simple graph contains a path with the same endpoints and of no greater length ([[lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints]]).

[L2] A metric on a set satisfies separation, symmetry and the triangle inequality ([[def-metric-space]]).

[L3] A simple graph is a pair $(V,E)$ with $V$ any set and $E$ a set of two-element subsets of $V$ ([[def-simple-graph-without-a-finiteness-hypothesis]]).


## Proof

**Proof technique:** direct.

1.1 The only path of length zero joins a vertex to itself, so the distance vanishes exactly on the diagonal. [F1, F2, L3]

1.2 Reversing a path preserves its length, so the distance is symmetric. [F1, F2]

1.3 Concatenating two shortest paths gives a walk of the summed length, which the previous lemma replaces by a path no longer, giving the triangle inequality. [F1, F2, L1]

2.1 Steps 1.1, 1.2 and 1.3 establish separation, symmetry and the triangle inequality, so the path metric is a metric. [L2, step 1.1, step 1.2, step 1.3] ∎
