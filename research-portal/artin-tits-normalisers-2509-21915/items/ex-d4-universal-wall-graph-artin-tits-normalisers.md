---
id: ex-d4-universal-wall-graph-artin-tits-normalisers
kind: example
title: Universal groupoid interpretation of the D4 graph
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - def-universal-wall-groupoid-artin-tits-normalisers
  - prop-universal-generators-artin-tits-normalisers
  - def-path-localisation-interface-artin-tits-prerequisites
dependency_roles:
  def-d4-example-data-artin-tits-normalisers: mathematical-premise
  ex-d4-labelled-chamber-graph-artin-tits-normalisers: mathematical-premise
  def-universal-wall-groupoid-artin-tits-normalisers: mathematical-premise
  prop-universal-generators-artin-tits-normalisers: mathematical-premise
  def-path-localisation-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 28–29, §7.2.1 and (7.1)
      statement: The D4 graph describes the universal groupoid, whose morphism sets
        are singletons; opposite wall-crossing labels are inverses, though they
        need not be equal.
      hypotheses: The D4 example with J={2} and the article's chamber and
        wall-crossing conventions.
      reading_limits: The frozen assignment records this passage for attribution. The
        verification below uses the declared completed suppliers, not the
        article assertion as a proof premise.
dependency_level: 18
---

## Example

Use the $D_4$ Coxeter system with central vertex $2$, $J=\{2\}$, and generators $s=s_1$, $t=s_2$, $u=s_3$, $v=s_4$ from [[def-d4-example-data-artin-tits-normalisers]]. Take the 32 labelled vertices and 48 undirected adjacency pairs of [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]], replacing each adjacency by an arrow in each direction. A path is a finite composable sequence of these arrows, including the empty path at a vertex.

The universal wall groupoid $\widetilde{\mathcal{BH}}(J)$ has exactly one morphism between each ordered pair of these vertices. It is presented by this directed graph with a relation identifying every two paths with the same endpoints. For an arrow from $A=(x,I)$ to an adjacent vertex $B=(y,K)$, its label in $W$ is $x^{-1}y=v_{a,I}$, where $a$ is the wall index at $A$; the reverse arrow has label $y^{-1}x=v_{b,K}$ for its wall index $b$ at $B$. Every two-cycle is an identity, and the two labels are inverses, although they need not be equal.

## Facts & Assumptions


[F1] The listed 32 vertices are all relative chamber labels, and the 48 listed pairs are exactly their adjacencies. Vertex 7 is $(e,2)$, vertex 4 is $(st,1)$, and they are adjacent. [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]

[F2] The universal wall groupoid has a singleton hom-set from $(x,I)$ to $(y,K)$, labelled $x^{-1}y$; composition multiplies labels in order. For adjacent chambers the arrow label is the corresponding simple wall-crossing element. [[def-universal-wall-groupoid-artin-tits-normalisers]]

[F3] Adjacent-crossing arrows generate the universal wall groupoid for a finite-rank Coxeter system. [[prop-universal-generators-artin-tits-normalisers]]

[F4] A graph and endpoint-preserving path relations present a category whose arrows are path classes and whose composition is concatenation. [[def-path-localisation-interface-artin-tits-prerequisites]]

[F5] In the D4 representation, $s_i$ sends $z$ to $z-2B(z,\alpha_i)\alpha_i$, with $B(\alpha_1,\alpha_2)=-1/2$ and $B(\alpha_i,\alpha_i)=1$. [[def-d4-example-data-artin-tits-normalisers]]

## Verification


**Given:** The D4 data and the directed adjacency graph in the Example.

**Goal:** Establish the path presentation, labels, and inverse assertions.

1.1 By [F1] the graph has exactly the objects and adjacent crossings under consideration. Map each directed edge to its unique wall-crossing arrow. By [F2], composites of paths with the same endpoints agree. Conversely, by [F3], every arrow is represented by a crossing path. Thus the induced functor from the path category modulo all same-endpoint path relations is bijective on each hom-set and on objects. By the quotient construction in [F4], it is an isomorphism. [F1, F2, F3, F4]

2.1 For adjacent $A=(x,I)$ and $B=(y,K)$, [F2] gives the forward label $x^{-1}y=v_{a,I}$ and, applied in the reverse direction, the label $y^{-1}x=v_{b,K}$. Their products in either order are $1$. The two composites have equal endpoints and hence are identities by the singleton hom-set property. This proves the two-cycle assertion. [F2, step 1.1]

3.1 For the adjacency from vertex 7 to vertex 4, [F1] and [F2] give the labels $st$ and $ts$. The generators are involutions, so these labels are inverse. They are unequal: applying the reflection formulas in [F5] from right to left gives $st(\alpha_1)=\alpha_2$ and $ts(\alpha_1)=-\alpha_1-\alpha_2$. Distinct images under the group representation imply distinct group elements. Together with steps 1.1 and 2.1 this proves the example. [F1, F2, F5, step 1.1, step 2.1] ∎

## Source notes

The article reference attributes the example. The verification uses the declared suppliers and the displayed local calculation.
