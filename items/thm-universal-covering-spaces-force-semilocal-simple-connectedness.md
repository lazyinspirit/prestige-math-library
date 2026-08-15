---
id: thm-universal-covering-spaces-force-semilocal-simple-connectedness
kind: theorem
title: "A space admitting a universal covering is semilocally simply connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-universal-covering-space, def-semilocally-simply-connected-space, thm-covering-maps-inject-fundamental-groups, def-simply-connected]
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

If a space admits a universal covering, then it is semilocally simply connected. No local path-connectedness hypothesis is required.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **universal covering space** of $B$ is a covering map $p:\widetilde B\to B$ whose total space $\widetilde B$ is simply connected (def-covering-map-and-evenly-covered-neighbourhoods, def-simply-connected). ([[def-universal-covering-space]]).

[F2] A space $X$ is **semilocally simply connected at $x\in X$** when there is a neighbourhood $U$ of $x$ and a basepoint-preserving inclusion $(U,x)\hookrightarrow(X,x)$ whose induced map on fundamental groups is trivial (def-neighbourhood-top, def-induced-homomorphism-on-fundamental-groups, def-based-loops-and-fundamental-group). It is semilocally simply connected when this holds at every point. The neighbourhood need not itself be simply connected. ([[def-semilocally-simply-connected-space]]).

[F3] For a covering $p:(E,e_0)\to(B,b_0)$, the induced homomorphism $p_*:\pi_1(E,e_0)\to\pi_1(B,b_0)$ is injective. ([[thm-covering-maps-inject-fundamental-groups]]).

[F4] A topological space $X$ is **simply connected** when it is nonempty and path-connected (def-path-connected) and, for every $x_0\in X$, the group $\pi_1(X,x_0)$ has exactly one element. ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 At a basepoint choose an evenly covered neighbourhood and a lift of that point. [given, F2, F1]

2.1 Any loop in the neighbourhood lifts to a loop in its sheet. [step 1.1, F2]

3.1 The induced fundamental-group map of the universal cover is injective and its domain group is trivial, so the inclusion-induced class downstairs is trivial. [step 2.1, F2, F3, F1]

4.1 No local path-connectedness is needed for this necessity direction. [step 3.1, F4, F2]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
