---
id: prop-local-path-connectedness-lifts-and-descends-along-coverings
kind: proposition
title: "Local path-connectedness lifts and descends along covering maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-locally-connected, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

For a covering $p:E\to B$, the total space $E$ is locally path-connected if and only if the base $B$ is locally path-connected.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $x \in X$. Subsets carry the subspace topology (def-subspace-topology-top); connectedness is def-connected-space and path-connectedness is def-path-connected. $X$ is **locally connected at $x$** when for every open $U$ with $x\in U$ there is an open **connected** $V$ with $x\in V\subseteq U$, and **locally connected** when this holds at every point; $X$ is **locally path-connected at $x$** when for every open $U$ with $x\in U$ there is an open **path-connected** $V$ with $x\in V\subseteq U$, and **locally path-connected** when this holds at every point. ([[def-locally-connected]]).

[F3] Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let $f : X \to Y$ be a function. Continuity is as in def-continuous-map-top, injections, surjections and bijections as in def-injection-surjection-bijection. $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U\subseteq X$, a **closed map** if $f[F]$ is closed in $Y$ for every closed $F\subseteq X$, and a **homeomorphism** if $f$ is a continuous bijection whose inverse $f^{-1}:Y\to X$ is also continuous; the spaces are **homeomorphic** when such an $f$ exists. ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Every point has a sheet homeomorphic to an open neighbourhood of its image. [given, F1, F3]

2.1 Local path-connectedness passes to open subspaces and across homeomorphisms, which proves both directions using surjectivity to choose a point over each basepoint. [step 1.1, F1, F2, F3]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
