---
id: prop-number-of-sheets-is-locally-constant
kind: proposition
title: "The cardinality of a covering fibre is locally constant and is constant on a connected base"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-map-and-evenly-covered-neighbourhoods, def-connected-space, def-equinumerous]
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

For a covering $p:E\to B$, the cardinality of $p^{-1}(b)$ is locally constant as a function of $b\in B$. If $B$ is connected, all fibres are equinumerous.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). A **separation** of $X$ is an ordered pair $(U,V)$ of open, nonempty, disjoint subsets of $X$ with $U\cup V=X$; $X$ is **disconnected** when a separation of $X$ exists and **connected** when none does. Since $U$ and $V$ are complementary each is clopen, so a separation is the same thing as a partition of $X$ into two nonempty clopen pieces. A subset $A\subseteq X$ is a **connected subset** when the subspace $(A,\mathcal T_A)$ is connected. ([[def-connected-space]]).

[F3] Let $A$ and $B$ be sets (def-injection-surjection-bijection for the terminology). $A$ and $B$ are **equinumerous**, written $A\approx B$, if there exists a bijection $f:A\to B$; $A$ is **dominated by** $B$, written $A\preceq B$, if there exists an injection $f:A\to B$. ([[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 Over an evenly covered neighbourhood every fibre meets each sheet in exactly one point, so all fibres there are in bijection with the sheet index set. [given, F1, F3, F2]

2.1 The subsets on which a fixed fibre cardinal occurs are open; connectedness permits only one nonempty such subset. [step 1.1, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
