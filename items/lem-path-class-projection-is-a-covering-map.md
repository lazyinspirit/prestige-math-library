---
id: lem-path-class-projection-is-a-covering-map
kind: lemma
title: "For a nonempty path-connected locally path-connected semilocally simply connected space, the path-class projection is a covering map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-class-model-for-a-universal-cover, def-covering-map-and-evenly-covered-neighbourhoods, def-semilocally-simply-connected-space, def-locally-connected]
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

If $X$ is nonempty, path-connected, locally path-connected, and semilocally simply connected, then after a basepoint is fixed the path-class basic sets define a topology on $\widetilde X$ for which the endpoint projection $p:\widetilde X\to X$ is a covering map.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Fix a path-connected space $X$ and $x_0\in X$. Let $\widetilde X$ be the set of endpoint-fixed homotopy classes $[\alpha]$ of paths beginning at $x_0$, and put $p([\alpha])=\alpha(1)$. If $U$ is an open path-connected neighbourhood of $\alpha(1)$ on which the inclusion-induced fundamental-group map is trivial, define $B([\alpha],U)$ to consist of the classes $[\alpha*\gamma]$ with $\gamma$ a path in $U$ beginning at $\alpha(1)$. These sets are the proposed basic neighbourhoods for the path-class model (def-homotopy-relative-and-path-homotopy, def-semilocally-simply-connected-space, def-path-connected). ([[def-path-class-model-for-a-universal-cover]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] A space $X$ is **semilocally simply connected at $x\in X$** when there is a neighbourhood $U$ of $x$ and a basepoint-preserving inclusion $(U,x)\hookrightarrow(X,x)$ whose induced map on fundamental groups is trivial (def-neighbourhood-top, def-induced-homomorphism-on-fundamental-groups, def-based-loops-and-fundamental-group). It is semilocally simply connected when this holds at every point. The neighbourhood need not itself be simply connected. ([[def-semilocally-simply-connected-space]]).

[F4] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $x \in X$. Subsets carry the subspace topology (def-subspace-topology-top); connectedness is def-connected-space and path-connectedness is def-path-connected. $X$ is **locally connected at $x$** when for every open $U$ with $x\in U$ there is an open **connected** $V$ with $x\in V\subseteq U$, and **locally connected** when this holds at every point; $X$ is **locally path-connected at $x$** when for every open $U$ with $x\in U$ there is an open **path-connected** $V$ with $x\in V\subseteq U$, and **locally path-connected** when this holds at every point. ([[def-locally-connected]]).

## Proof

**Proof technique:** direct.

1.1 Refine each semilocally simply connected neighbourhood to an open path-connected one. [given, F1, F3, F2, F4]

2.1 For a path class ending at its centre, append paths in that neighbourhood to obtain a basic sheet. [step 1.1, F1, F3, F2]

3.1 Triviality of the inclusion-induced fundamental group makes the endpoint description independent of the appended path, and distinct initial classes give disjoint sheets. [step 2.1, F1, F3, F2]

4.1 Verify that these basic sets form a topology and map homeomorphically onto the chosen neighbourhood. [step 3.1, F1, F2, F3]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

