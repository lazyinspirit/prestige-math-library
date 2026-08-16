---
id: prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres
kind: proposition
title: "Covering maps are surjective local homeomorphisms with discrete fibres"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-homeomorphism-and-open-maps, def-standard-topologies]
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

Every covering map is a surjective local homeomorphism, and each of its fibres is discrete in the subspace topology.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F2] Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces and let $f : X \to Y$ be a function. Continuity is as in def-continuous-map-top, injections, surjections and bijections as in def-injection-surjection-bijection. $f$ is an **open map** if $f[U]$ is open in $Y$ for every open $U\subseteq X$, a **closed map** if $f[F]$ is closed in $Y$ for every closed $F\subseteq X$, and a **homeomorphism** if $f$ is a continuous bijection whose inverse $f^{-1}:Y\to X$ is also continuous; the spaces are **homeomorphic** when such an $f$ exists. ([[def-homeomorphism-and-open-maps]]).

[F3] Throughout, a topology is as in def-topological-space, and *finite*, *at most countable* and *uncountable* are as in def-countable, so that "countable" always means "at most countable" and every finite set is countable. Let $X$ be a set. The six families below are topologies on $X$; that each really satisfies (T1), (T2) and (T3) is discharged in full after the list. Among those six is the **discrete topology** $\mathcal T_{\mathrm{disc}}:=\mathcal P(X)$, in which every subset is open and hence every subset is also closed. ([[def-standard-topologies]]).

## Proof

**Proof technique:** direct.

1.1 An evenly covered neighbourhood restricts the projection to a homeomorphism on each sheet, which gives the local-homeomorphism property. [given, F1, F2, F3]

2.1 Intersect a sheet with a fibre to isolate its unique point. [step 1.1, F1]

3.1 Keep surjectivity as part of the covering-map definition rather than infer it from local data. [step 2.1, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
