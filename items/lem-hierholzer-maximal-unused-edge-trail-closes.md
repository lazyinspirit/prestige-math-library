---
id: lem-hierholzer-maximal-unused-edge-trail-closes
kind: lemma
title: "In an even multigraph or balanced digraph, a trail maximal among unused incident edges returns to its start"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euler-trail-and-circuit, def-multigraph-and-digraph-degrees-and-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Euler Tours and Trails"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html"
pipeline_run: null
---

## Statement

Let $T$ be a nonempty trail in a finite undirected multigraph in which every
vertex has even degree. If $T$ cannot be extended at its terminal vertex by an
unused incident edge, then $T$ is closed.

Likewise, let $T$ be a nonempty directed trail in a finite digraph satisfying
$\deg^+(v)=\deg^-(v)$ at every vertex. If $T$ cannot be extended at its terminal
vertex by an unused outgoing arc, then $T$ is closed.

## Facts & Assumptions

**Given:** One of the two finite trails in the statement, with initial vertex $s$ and terminal vertex $t$.

[F1] Trails do not repeat edges or arcs, and they are closed exactly when $s=t$ ([[def-euler-trail-and-circuit]]).

[F2] An undirected loop contributes two to degree; a directed loop contributes one to both indegree and outdegree ([[def-multigraph-and-digraph-degrees-and-connectivity]]).

## Proof

**Proof technique:** direct.

1.1 In the undirected case, if $s\ne t$, the used edge ends at $t$ occur in pairs for every intermediate visit and with one additional final arrival. Thus an odd number of edge ends incident with $t$ have been used; loops contribute pairs by [F2]. Since $\deg(t)$ is even, at least one incident edge is unused, contradicting maximality. [given, F1, F2, algebra]

1.2 In the directed case, if $s\ne t$, the trail uses one more incoming than outgoing arc at $t$. Total indegree equals total outdegree, so the number of unused outgoing arcs at $t$ is one more than the number of unused incoming arcs and is positive, again contradicting maximality. [given, F1, F2, algebra]

2.1 Therefore $s=t$ in either case, so the trail is closed. [step 1.1, step 1.2, F1, cases] ∎
