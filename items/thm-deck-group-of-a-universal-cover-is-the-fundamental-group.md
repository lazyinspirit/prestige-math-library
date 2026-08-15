---
id: thm-deck-group-of-a-universal-cover-is-the-fundamental-group
kind: theorem
title: "For a path-connected locally path-connected semilocally simply connected base, the deck group of a universal cover is isomorphic to the fundamental group with the inverse-path convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-deck-transformation-and-deck-group, def-monodromy-action-on-a-covering-fibre, thm-universal-cover-uniqueness-and-dominating-property, prop-deck-transformations-are-determined-by-one-point-and-act-freely, thm-fundamental-group-laws]
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

For a path-connected, locally path-connected, semilocally simply connected base $B$, the deck group of a universal cover is isomorphic to $\pi_1(B,b_0)$. With the library's traversal-order path product, the isomorphism uses inverse path classes.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ (def-map-and-isomorphism-of-covering-spaces). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation (def-group, def-group-action). ([[def-deck-transformation-and-deck-group]]).

[F2] Fix a covering $p:E\to B$, a basepoint $b_0\in B$, and $e\in p^{-1}(b_0)$. For $[\alpha]\in\pi_1(B,b_0)$, define $e\cdot[\alpha]$ as the endpoint of the unique lift of $\alpha$ beginning at $e$ (thm-path-lifting-for-covering-maps). Endpoint homotopy invariance makes this well defined (cor-lifted-path-endpoints-depend-only-on-path-homotopy). With the library's traversal-order product this is a right action; the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ (def-group-action). ([[def-monodromy-action-on-a-covering-fibre]]).

[F3] Let $B$ be path-connected and locally path-connected. After basepoints over the same point are fixed, a universal cover of $B$ has a unique covering map to every connected covering of $B$; in particular any two universal covers are uniquely isomorphic over $B$. ([[thm-universal-cover-uniqueness-and-dominating-property]]).

[F4] For a covering with connected total space, two deck transformations agreeing at one point are equal. Consequently the deck group acts freely on the total space. ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F5] For every pointed topological space $(X,x_0)$, the product $$[\alpha][\beta]=[\alpha*\beta]$$ is well defined and makes $\pi_1(X,x_0)$ a group. Its identity is the class of the constant loop $c_{x_0}$, and $[\alpha]^{-1}=[\bar\alpha]$. ([[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 For a path-connected locally path-connected semilocally simply connected base and a chosen point upstairs, each loop class determines the endpoint of its lift. [given, F3, F2, F4, F5]

2.1 The universal-cover lifting criterion gives the unique deck transformation taking the chosen point to that endpoint. [step 1.1, F1, F3, F4]

3.1 Because the library multiplies loops in traversal order, insert path reversal in the assignment so composition is a homomorphism rather than an antihomomorphism. [step 2.1, F2, F3, F1]

4.1 Freeness gives injectivity and path-connectedness gives surjectivity. [step 3.1, F2, F3]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
