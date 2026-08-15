---
id: def-monodromy-action-on-a-covering-fibre
kind: definition
title: "The monodromy right action on a covering fibre and its equivalent left-action convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-path-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy, def-based-loops-and-fundamental-group, def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

Fix a covering $p:E\to B$, a basepoint $b_0\in B$, and $e\in p^{-1}(b_0)$. For $[\alpha]\in\pi_1(B,b_0)$, define $e\cdot[\alpha]$ as the endpoint of the unique lift of $\alpha$ beginning at $e$ ([[thm-path-lifting-for-covering-maps]]). Endpoint homotopy invariance makes this well defined ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]). With the library's traversal-order product this is a right action; the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ ([[def-group-action]]).

