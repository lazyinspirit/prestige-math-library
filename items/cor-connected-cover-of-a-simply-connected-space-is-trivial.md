---
id: cor-connected-cover-of-a-simply-connected-space-is-trivial
kind: corollary
title: "A connected covering of a locally path-connected simply connected space is one-sheeted and trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-local-path-connectedness-lifts-and-descends-along-coverings, cor-lifted-path-endpoints-depend-only-on-path-homotopy, def-simply-connected, def-covering-map-and-evenly-covered-neighbourhoods]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
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

Every connected covering of a locally path-connected simply connected space is one-sheeted and isomorphic to the identity covering.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$, the total space $E$ is locally path-connected if and only if the base $B$ is locally path-connected. ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F2] Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point. ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

[F3] A topological space $X$ is **simply connected** when it is nonempty and path-connected (def-path-connected) and, for every $x_0\in X$, the group $\pi_1(X,x_0)$ has exactly one element. ([[def-simply-connected]]).

[F4] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Proof technique:** direct.

1.1 Local path-connectedness lifts to the connected total space, making it path-connected. [given, F1, F3, F2]

2.1 If two points lie in one fibre, join them upstairs; the projected loop is null-homotopic because the base is simply connected, while endpoint homotopy invariance forces its lift to have the same initial and final point. [step 1.1, F2, F3, F1]

3.1 Thus every fibre is a singleton, and a one-sheeted covering is a homeomorphism by its local sheet descriptions. [step 2.1, F4, F1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
