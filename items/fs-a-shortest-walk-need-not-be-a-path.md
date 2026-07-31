---
id: fs-a-shortest-walk-need-not-be-a-path
kind: false-statement
title: "FALSE: a shortest walk between two vertices may repeat a vertex and fail to be a path"
status: published
origin: session
deps: [lem-every-graph-walk-contains-a-path-between-its-endpoints, def-graph-distance-and-girth]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Statement

**FALSE.** A shortest walk between two vertices may repeat a vertex and fail to
be a path.

## Facts & Assumptions

**Given:** Vertices $u,v$ in one connected component and a $u$ to $v$ walk $W$ of minimum length.

[L1] Every walk contains a path between the same endpoints of no greater length, and if the walk repeats a vertex the path can be chosen strictly shorter ([[lem-every-graph-walk-contains-a-path-between-its-endpoints]]).

[F1] The distance $d_G(u,v)$ is the minimum length of a $u$ to $v$ path ([[def-graph-distance-and-girth]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the minimum-length walk $W$ repeats a vertex and is not a path. [assume-contra, given]

2.1 By [L1], deleting a closed segment from $W$ yields a $u$ to $v$ path of length strictly less than the length of $W$. This path is also a walk, contradicting the minimality of $W$. [step 1.1, L1, F1]

3.1 Therefore every shortest walk is a path, and the claimed possibility cannot occur. [step 2.1, discharge-contradiction] ∎
