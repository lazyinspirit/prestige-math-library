---
id: thm-uniqueness-of-lifts-from-a-connected-space
kind: theorem
title: "Two lifts from a connected space that agree at one point agree everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lift-of-a-map-path-and-homotopy, def-connected-space, def-covering-map-and-evenly-covered-neighbourhoods]
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

Let $Y$ be connected and let $f,g:Y\to E$ be lifts through the same covering of the same map $Y\to B$. If $f(y_0)=g(y_0)$ for some $y_0\in Y$, then $f=g$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $p:E\to B$ be a covering and $f:Y\to B$ continuous. A **lift** of $f$ through $p$ is a continuous map $\widetilde f:Y\to E$ with $p\circ\widetilde f=f$. This includes lifts of paths $I\to B$ and of homotopies $Y\times I\to B$; an initial lift prescribes the restriction at time $0$ (def-homotopy-relative-and-path-homotopy, def-path-connected). ([[def-lift-of-a-map-path-and-homotopy]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). A **separation** of $X$ is an ordered pair $(U,V)$ of open, nonempty, disjoint subsets of $X$ with $U\cup V=X$; $X$ is **disconnected** when a separation of $X$ exists and **connected** when none does. Since $U$ and $V$ are complementary each is clopen, so a separation is the same thing as a partition of $X$ into two nonempty clopen pieces. A subset $A\subseteq X$ is a **connected subset** when the subspace $(A,\mathcal T_A)$ is connected. ([[def-connected-space]]).

[F3] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Proof technique:** direct.

1.1 The equaliser of two lifts is open because a common image point has an evenly covered neighbourhood and both lifts must lie in the same sheet near an agreement point. [given, F3, F1, F2]

2.1 Its complement is open by choosing disjoint sheets near a disagreement point. [step 1.1, F3]

3.1 Connectedness and the named agreement point force the equaliser to be the whole domain. [step 2.1, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
