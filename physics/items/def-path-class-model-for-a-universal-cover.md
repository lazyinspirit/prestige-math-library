---
id: def-path-class-model-for-a-universal-cover
kind: definition
title: "The based path-class model and basic sets for a universal cover"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-semilocally-simply-connected-space, def-homotopy-relative-and-path-homotopy, def-locally-connected, def-path-connected]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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

## Definition

Fix a path-connected space $X$ and $x_0\in X$. Let $\widetilde X$ be the set of endpoint-fixed homotopy classes $[\alpha]$ of paths beginning at $x_0$, and put $p([\alpha])=\alpha(1)$. If $U$ is an open path-connected neighbourhood of $\alpha(1)$ on which the inclusion-induced fundamental-group map is trivial, define $B([\alpha],U)$ to consist of the classes $[\alpha*\gamma]$ with $\gamma$ a path in $U$ beginning at $\alpha(1)$. These sets are the proposed basic neighbourhoods for the path-class model ([[def-homotopy-relative-and-path-homotopy]], [[def-semilocally-simply-connected-space]], [[def-path-connected]]).

