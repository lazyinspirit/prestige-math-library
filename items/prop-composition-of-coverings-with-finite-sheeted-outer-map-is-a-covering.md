---
id: prop-composition-of-coverings-with-finite-sheeted-outer-map-is-a-covering
kind: proposition
title: "A composite of covering maps is a covering when the outer covering is finite-sheeted"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-map-and-evenly-covered-neighbourhoods]
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

If $p:E\to B$ and $q:B\to X$ are covering maps and $q$ is finite-sheeted, then $q\circ p:E\to X$ is a covering map.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Proof technique:** direct.

1.1 For coverings $p:E\to B$ and $q:B\to X$, evenly cover a neighbourhood of $x$ for $q$. [given, F1]

2.1 There are only finitely many resulting $q$-sheets. [step 1.1, F1]

3.1 Around the unique point of each such sheet over $x$, choose a smaller neighbourhood evenly covered by $p$; intersect their finitely many images downstairs and restrict all sheets to that common neighbourhood. [step 2.1, F1]

4.1 The resulting two-level sheets evenly cover the composite. [step 3.1, F1]

5.1 Separate the empty base case, and record that the finite-sheet hypothesis is what permits the common intersection. [step 4.1, F1]

6.1 The preceding construction and implications establish the assertion. [step 5.1] ∎
