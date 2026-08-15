---
id: prop-monodromy-acts-by-bijections-and-detects-components
kind: proposition
title: "Monodromy acts by fibre bijections, and its orbits are the intersections of path components with the fibre"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monodromy-action-on-a-covering-fibre, thm-fundamental-group-laws, def-path-connected]
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

Monodromy acts on each covering fibre by bijections. Its orbit through $e$ is exactly the intersection of the path component of $e$ with that fibre.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Fix a covering $p:E\to B$, a basepoint $b_0\in B$, and $e\in p^{-1}(b_0)$. For $[\alpha]\in\pi_1(B,b_0)$, define $e\cdot[\alpha]$ as the endpoint of the unique lift of $\alpha$ beginning at $e$ (thm-path-lifting-for-covering-maps). Endpoint homotopy invariance makes this well defined (cor-lifted-path-endpoints-depend-only-on-path-homotopy). With the library's traversal-order product this is a right action; the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ (def-group-action). ([[def-monodromy-action-on-a-covering-fibre]]).

[F2] For every pointed topological space $(X,x_0)$, the product $$[\alpha][\beta]=[\alpha*\beta]$$ is well defined and makes $\pi_1(X,x_0)$ a group. Its identity is the class of the constant loop $c_{x_0}$, and $[\alpha]^{-1}=[\bar\alpha]$. ([[thm-fundamental-group-laws]]).

[F3] Throughout, $I := [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$ (def-interval) carries the subspace topology inherited from $\mathbb{R}$ with its usual topology (def-subspace-topology-top, lem-real-line-is-a-metric-space, def-metric-topology, def-metrizable-space). It is called the **unit interval**. ([[def-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 Path reversal gives the inverse endpoint permutation and concatenation gives the right-action law under the library's convention that $[\alpha][\beta]$ traverses $\alpha$ first. [given, F1, F2, F3]

2.1 A lifted loop is a path upstairs joining its starting and endpoint fibre points. [step 1.1, F1, F2, F3]

3.1 Conversely, project any path upstairs between fibre points to a loop downstairs. [step 2.1, F1, F2, F3]

4.1 Thus transitivity is equivalent to path-connectedness of the relevant covering component. [step 3.1, F1, F3]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
