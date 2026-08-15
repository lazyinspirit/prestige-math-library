---
id: thm-sheets-equal-fundamental-group-index
kind: theorem
title: "For a nonempty path-connected total space, a covering fibre is in bijection with the left cosets of the induced fundamental-group subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monodromy-action-on-a-covering-fibre, thm-covering-maps-inject-fundamental-groups, prop-monodromy-acts-by-bijections-and-detects-components, def-coset, def-index]
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

For a covering $p:(E,e_0)\to(B,b_0)$ with nonempty path-connected total space, put $H=p_*\pi_1(E,e_0)$. With traversal-order multiplication, the fibre $p^{-1}(b_0)$ is in bijection with the set of left cosets $H\backslash\pi_1(B,b_0)$. Thus its finite number of sheets equals the subgroup index, and one is infinite exactly when the other is recorded as $\infty$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Fix a covering $p:E\to B$, a basepoint $b_0\in B$, and $e\in p^{-1}(b_0)$. For $[\alpha]\in\pi_1(B,b_0)$, define $e\cdot[\alpha]$ as the endpoint of the unique lift of $\alpha$ beginning at $e$ (thm-path-lifting-for-covering-maps). Endpoint homotopy invariance makes this well defined (cor-lifted-path-endpoints-depend-only-on-path-homotopy). With the library's traversal-order product this is a right action; the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ (def-group-action). ([[def-monodromy-action-on-a-covering-fibre]]).

[F2] For a covering $p:(E,e_0)\to(B,b_0)$, the induced homomorphism $p_*:\pi_1(E,e_0)\to\pi_1(B,b_0)$ is injective. ([[thm-covering-maps-inject-fundamental-groups]]).

[F3] Monodromy acts on each covering fibre by bijections. Its orbit through $e$ is exactly the intersection of the path component of $e$ with that fibre. ([[prop-monodromy-acts-by-bijections-and-detects-components]]).

[F4] Let $G$ be a group and let $H\le G$ be a subgroup (def-group, def-subgroup). For $g\in G$, the **left coset** and **right coset** of $H$ represented by $g$ are $$gH:=\{gh:h\in H\},\qquad Hg:=\{hg:h\in H\}.$$ The element $g$ is a **representative** of these cosets. The notation denotes subsets of $G$; it does not assert that either subset is a subgroup. ([[def-coset]]).

[F5] Let $H\le G$. The **left coset set** is $$G/H:=\{gH:g\in G\}.$$ By lem-coset-partition, its elements are exactly the blocks of the coset partition of $G$. The **index** of $H$ in $G$ is $$[G:H]:=|G/H|$$ when $G/H$ is finite, with finite cardinality as in def-finite-cardinality. If $G/H$ is not finite, write $[G:H]=\infty$. Here $\infty$ is a symbol, not a natural number, and no arithmetic with it is defined. ([[def-index]]).

## Proof

**Proof technique:** direct.

1.1 Fix a point in the fibre. [given, F3, F1]

2.1 Send a loop class to the endpoint of its lifted path. [step 1.1, F1, F3]

3.1 Endpoint homotopy invariance makes this well defined; with traversal-order multiplication, two classes have the same endpoint exactly when their quotient $[\alpha][\beta]^{-1}$ lies in the image $H$ of the upstairs fundamental group, which is equality of the left cosets $H[\alpha]$ and $H[\beta]$. [step 2.1, F1, F5, F4, F2]

4.1 Path-connectedness of the total space gives surjectivity onto the fibre. [step 3.1, F1, F3]

5.1 Translate the bijection into the published index convention: the finite cardinalities agree, and one side is infinite exactly when the other is recorded as $\infty$. [step 4.1, F5, F3]

6.1 The preceding construction and implications establish the assertion. [step 5.1] ∎

