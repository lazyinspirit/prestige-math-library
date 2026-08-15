---
id: thm-universal-cover-uniqueness-and-dominating-property
kind: theorem
title: "For a path-connected locally path-connected base, universal covers are uniquely isomorphic over the base and lift to every connected covering"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-covering-space, thm-covering-space-lifting-criterion, thm-uniqueness-of-lifts-from-a-connected-space, prop-local-path-connectedness-lifts-and-descends-along-coverings]
justified_by: []
aliases: []
landmark: true
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

Let $B$ be path-connected and locally path-connected. After basepoints over the same point are fixed, a universal cover of $B$ has a unique covering map to every connected covering of $B$; in particular any two universal covers are uniquely isomorphic over $B$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **universal covering space** of $B$ is a covering map $p:\widetilde B\to B$ whose total space $\widetilde B$ is simply connected (def-covering-map-and-evenly-covered-neighbourhoods, def-simply-connected). ([[def-universal-covering-space]]).

[F2] Let $Y$ be path-connected and locally path-connected, let $f:(Y,y_0)\to(B,b_0)$ be based, and let $p:(E,e_0)\to(B,b_0)$ be a covering. A based lift $\widetilde f:(Y,y_0)\to(E,e_0)$ exists if and only if $f_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$; when it exists it is unique. ([[thm-covering-space-lifting-criterion]]).

[F3] Let $Y$ be connected and let $f,g:Y\to E$ be lifts through the same covering of the same map $Y\to B$. If $f(y_0)=g(y_0)$ for some $y_0\in Y$, then $f=g$. ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F4] For a covering $p:E\to B$, the total space $E$ is locally path-connected if and only if the base $B$ is locally path-connected. ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

## Proof

**Proof technique:** direct.

1.1 Let the base be path-connected and locally path-connected and fix points over a common basepoint. [given, F4, F2, F1]

2.1 The lifting criterion applies to a universal cover because its fundamental group is trivial, giving a unique covering map to any connected covering. [step 1.1, F1, F2, F3]

3.1 Applying this in both directions between two universal covers and using uniqueness of lifts makes the composites identities. [step 2.1, F3, F1, F4]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
