---
id: def-labelled-directed-graph-and-labelled-graph-isomorphism
kind: definition
title: "Labelled directed graphs, their underlying simple graphs, and label-preserving isomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-multigraph-loop-and-digraph, def-graph-isomorphism-and-complement]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Sections 3.1-3.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $L$ be a set of labels. A **labelled directed graph** with label set $L$ is
a pair $\Gamma=(V,A)$ consisting of a vertex set $V$ and a set of **labelled
arcs**

$$A \subseteq V \times L \times V.$$

An element $(u,\lambda,v) \in A$ is an arc from $u$ to $v$ labelled by
$\lambda$. Distinct labels may connect the same ordered pair of vertices; this
is why a labelled directed graph is treated here as a digraph variant rather
than as a simple graph.

The **underlying simple graph** of $\Gamma$ is the simple graph on $V$ whose
edge set consists of the unordered pairs $\{u,v\}$ for which some labelled arc
$(u,\lambda,v)$ or $(v,\lambda,u)$ exists, with loops $\{u,u\}$ discarded.

If $\Gamma=(V,A)$ and $\Gamma'=(V',A')$ are labelled directed graphs with the
same label set $L$, a **label-preserving directed graph isomorphism** is a
bijection $\varphi:V \to V'$ such that

$$(u,\lambda,v) \in A \quad \Longleftrightarrow \quad (\varphi(u),\lambda,\varphi(v)) \in A'$$

for all $u,v \in V$ and $\lambda \in L$.
