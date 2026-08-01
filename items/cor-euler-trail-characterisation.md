---
id: cor-euler-trail-characterisation
kind: corollary
title: "A connected finite undirected multigraph has an Euler trail if and only if it has zero or two odd-degree vertices; an open Euler trail occurs exactly in the two-vertex case"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-eulers-euler-circuit-characterisation, def-euler-trail-and-circuit, def-multigraph-and-digraph-degrees-and-connectivity]
justified_by: []
aliases: []
landmark: true
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

A connected finite undirected multigraph has an Euler trail if and only if the
number of odd-degree vertices is zero or two. It has an open Euler trail, one
whose endpoints are distinct, if and only if it has exactly two odd-degree
vertices; those vertices are the endpoints.

## Facts & Assumptions

**Given:** A connected finite undirected multigraph $M$.

[F1] An Euler trail uses every edge exactly once and is an Euler circuit when closed ([[def-euler-trail-and-circuit]]).

[F2] Loops count twice toward undirected degree ([[def-multigraph-and-digraph-degrees-and-connectivity]]).

[L1] A connected finite undirected multigraph has an Euler circuit exactly when all degrees are even ([[thm-eulers-euler-circuit-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Along any trail, every vertex other than two distinct endpoints uses incident edge ends in pairs. If the trail is open, its two endpoints each use one unpaired end; if it is closed, every used incidence is paired. Loops contribute pairs by [F2]. [F1, F2, algebra]

1.2 If every degree is even, [L1] supplies an Euler circuit, which is an Euler trail. [L1, F1]

1.3 If exactly $u$ and $v$ have odd degree, add one distinguished edge between $u$ and $v$, allowing it to be parallel to an existing edge. The augmented connected multigraph has all degrees even, so [L1] supplies an Euler circuit. Rotate that circuit to begin with the distinguished edge and delete it; what remains is an Euler trail in $M$ from $v$ to $u$. [L1, F1, F2, algebra]

2.1 Therefore an Euler trail forces exactly two odd-degree vertices when open and zero odd-degree vertices when closed. [step 1.1, F1]

3.1 Steps 2.1, 1.2, and 1.3 prove the criterion and show that openness occurs exactly in the two-odd-vertex case. [step 2.1, step 1.2, step 1.3] ∎
