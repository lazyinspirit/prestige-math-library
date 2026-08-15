---
id: ex-pullback-over-an-evenly-covered-open-set-is-trivial
kind: example
title: "Pulling a covering back to an evenly covered open set gives a trivial covering"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullback-covering-space, def-covering-map-and-evenly-covered-neighbourhoods, ex-trivial-coverings-and-discrete-fibre-products]
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
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

If $U$ is evenly covered by $p:E\to B$, then the pullback of $p$ along the inclusion $U\hookrightarrow B$ is a trivial covering of $U$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$ and a continuous map $f:X\to B$, define $f^*E:=\{(x,e)\in X\times E:f(x)=p(e)\}$ with the subspace topology, and let $f^*p:f^*E\to X$ be $(x,e)\mapsto x$ (def-product-topology, def-subspace-topology-top). This is the **pullback covering space**; its covering property is proved in prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback. ([[def-pullback-covering-space]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] If $X$ is any space and $F$ is a nonempty discrete space, the projection $X\times F\to X$ is a trivial covering with fibre $F$. If $X=\varnothing$, the same holds for $F=\varnothing$; for nonempty $X$, an empty fibre would violate surjectivity. ([[ex-trivial-coverings-and-discrete-fibre-products]]).

## Verification

**Proof technique:** direct.

1.1 For the inclusion $U\hookrightarrow X$ of an evenly covered open set, identify the pullback with the disjoint union of the sheets over $U$. [given, F2, F1, F3]

2.1 Write the explicit mutually inverse maps over $U$ and verify their continuity from the pullback subspace topology. [step 1.1, F1, F2]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
