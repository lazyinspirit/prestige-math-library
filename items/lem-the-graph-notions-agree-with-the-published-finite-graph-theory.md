---
id: lem-the-graph-notions-agree-with-the-published-finite-graph-theory
kind: lemma
title: "On a finite vertex set the graph notions agree, and on connected graphs the two path distances agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-walks-paths-and-connectedness-in-a-simple-graph, lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints, def-graph-path-metric, thm-the-path-metric-of-a-connected-simple-graph-is-a-metric, def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-connected-graph-and-connected-component, def-graph-distance-and-girth, lem-graph-distance-is-a-metric-on-each-component, lem-every-graph-walk-contains-a-path-between-its-endpoints]
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

On a finite vertex set the simple-graph, walk, path, cycle, connectedness and
component notions on this page agree with the published finite-graph notions.
If the graph is connected, its path metric agrees with the published graph
distance; more generally, the same equality holds after restricting to any
connected component.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A simple graph is a pair $(V,E)$ with $V$ any set and $E$ a set of two-element subsets of $V$ ([[def-simple-graph-without-a-finiteness-hypothesis]]).

[F2] A walk of length $\ell$ in a simple graph is a finite vertex list $(v_0,\dots,v_\ell)$ with consecutive vertices adjacent; a path is a walk with distinct vertices; the graph is connected when it is nonempty and every two vertices are joined by a path ([[def-walks-paths-and-connectedness-in-a-simple-graph]]).

[L1] $$E\subseteq [V]^2:=\{\,\{u,v\}\subseteq V: u\ne v\,\}.$$ ([[def-finite-simple-graph]]).

[L2] A **walk of length $\ell$** is a finite vertex list ([[def-graph-walk-trail-path-and-cycle]]).

[L3] Vertices $u$ and $v$ of a graph $G$ are **connected**, or **reachable from one another**, when a path in $G$ has endpoints $u$ and $v$. Equivalently, a walk joins them, because turns such a walk into a path. ([[def-connected-graph-and-connected-component]]).

[L4] For vertices $u,v$ in one connected component, the published graph distance is the least length of a path joining them ([[def-graph-distance-and-girth]]).

[L5] These are the metric axioms, so shortest-path distance is a metric on $C$. ([[lem-graph-distance-is-a-metric-on-each-component]]).

[L6] By deleting zero or more closed segments from its vertex list, one obtains a path from $v_0$ to $v_\ell$ of length at most $\ell$. If $W$ repeats a vertex, the resulting path can be chosen to have length strictly less than $\ell$. ([[lem-every-graph-walk-contains-a-path-between-its-endpoints]]).

[L7] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L8] The path metric of a connected simple graph is a metric on its vertex set ([[thm-the-path-metric-of-a-connected-simple-graph-is-a-metric]]).

[L9] Every walk in a simple graph contains a path with the same endpoints and of no greater length ([[lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints]]).


## Proof

**Proof technique:** direct.

1.1 A simple graph whose vertex set is finite is a finite simple graph in the published sense, clause by clause. [F1, L1]

2.1 The walk, path, cycle, connectedness and component notions defined here read verbatim as the published ones on a finite vertex set, and the walk-to-path lemma specialises to the published one. [F2, L2, L3, L6, L9, step 1.1]

3.1 The published graph distance is the least length of a path in the same sense. It therefore agrees with the path metric when the graph is connected and, for a disconnected graph, with the path metric of each connected component. The metric statement specialises to the published component-wise one. [L4, L5, L7, L8, step 2.1] ∎
