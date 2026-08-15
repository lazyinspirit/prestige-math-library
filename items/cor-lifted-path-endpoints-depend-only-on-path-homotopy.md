---
id: cor-lifted-path-endpoints-depend-only-on-path-homotopy
kind: corollary
title: "The endpoint of a lifted path depends only on its endpoint-fixed homotopy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-homotopy-lifting-for-covering-maps, prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres, def-connected-space]
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

Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $p:E\to B$ be a covering, $H:Y\times I\to B$ a homotopy, and $\widetilde H_0:Y\to E$ a lift of $H(-,0)$. There is a unique lift $\widetilde H:Y\times I\to E$ of $H$ extending $\widetilde H_0$. ([[thm-homotopy-lifting-for-covering-maps]]).

[F2] Every covering map is a surjective local homeomorphism, and each of its fibres is discrete in the subspace topology. ([[prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Lift an endpoint-fixed homotopy starting from the chosen lift of one path. [given, F1, F3]

2.1 Along each endpoint edge the lifted map takes values in a discrete fibre; connectedness of the interval makes it constant, so the terminal endpoints agree. [step 1.1, F2]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
