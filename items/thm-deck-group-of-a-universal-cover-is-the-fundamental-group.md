---
id: thm-deck-group-of-a-universal-cover-is-the-fundamental-group
kind: theorem
title: "For a path-connected locally path-connected semilocally simply connected base, the deck group of a universal cover is isomorphic to the fundamental group"
status: published
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

## Statement

For a path-connected, locally path-connected, semilocally simply connected base $B$, the deck group of a universal cover is isomorphic to $\pi_1(B,b_0)$. With the library's traversal-order path product the monodromy action is a right action, and the assignment carrying a loop class to the deck transformation that moves the chosen point of the fibre to the corresponding lifted endpoint is itself an isomorphism; no path reversal is inserted.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ (def-map-and-isomorphism-of-covering-spaces). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation (def-group, def-group-action). ([[def-deck-transformation-and-deck-group]]).

[F2] Fix a covering $p:E\to B$, a basepoint $b_0\in B$, and $e\in p^{-1}(b_0)$. For $[\alpha]\in\pi_1(B,b_0)$, define $e\cdot[\alpha]$ as the endpoint of the unique lift of $\alpha$ beginning at $e$ (thm-path-lifting-for-covering-maps). Endpoint homotopy invariance makes this well defined (cor-lifted-path-endpoints-depend-only-on-path-homotopy). With the library's traversal-order product this is a right action; the corresponding left action is $[\alpha]\cdot e:=e\cdot[\alpha]^{-1}$ (def-group-action). ([[def-monodromy-action-on-a-covering-fibre]]).

[F3] Let $B$ be path-connected and locally path-connected. After basepoints over the same point are fixed, a universal cover of $B$ admits a unique based continuous map over $B$ to every connected covering of $B$; in particular any two universal covers of $B$ are uniquely isomorphic over $B$. ([[thm-universal-cover-uniqueness-and-dominating-property]]).

[F4] For a covering with connected total space, two deck transformations agreeing at one point are equal. Consequently the deck group acts freely on the total space. ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F5] For every pointed topological space $(X,x_0)$, the product $$[\alpha][\beta]=[\alpha*\beta]$$ is well defined and makes $\pi_1(X,x_0)$ a group. Its identity is the class of the constant loop $c_{x_0}$, and $[\alpha]^{-1}=[\bar\alpha]$. ([[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 For a path-connected locally path-connected semilocally simply connected base and a chosen point upstairs, each loop class determines the endpoint of its lift. [given, F3, F2, F4, F5]

2.1 The universal-cover lifting criterion gives the unique deck transformation taking the chosen point to that endpoint. [step 1.1, F1, F3, F4]

3.1 Because the library multiplies loops in traversal order, [F2] makes the monodromy a right action, and no path reversal is needed. A deck transformation $h$ satisfies $h(x\cdot g)=h(x)\cdot g$: since $p\circ h=p$, composing $h$ with the lift of a loop starting at $x$ gives a lift of that loop starting at $h(x)$, and lifts from a given point are unique, so the endpoints correspond. Writing $h_a$ for the deck transformation of step 2.1 with $h_a(e)=e\cdot a$, this gives $(h_a\circ h_b)(e)=h_a(e\cdot b)=h_a(e)\cdot b=(e\cdot a)\cdot b=e\cdot(ab)=h_{ab}(e)$, so $h_a\circ h_b$ and $h_{ab}$ agree at $e$ and [F4] makes them equal. Hence $a\mapsto h_a$ is a homomorphism as it stands; assigning inverse classes instead would reverse products and give an antihomomorphism. [step 2.1, F2, F3, F1, F4]

4.1 For injectivity, suppose two loop classes give the same lifted endpoint. Their quotient then fixes the chosen point of the fibre, so it lies in the stabiliser of that point under the monodromy action [F2]. That stabiliser is the image of the upstairs fundamental group, which is trivial because the total space of a universal cover is simply connected; so the two classes are equal. Freeness of the deck action then makes the induced assignment injective as a map of groups, and path-connectedness of the total space gives surjectivity. [step 3.1, F2, F3]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
