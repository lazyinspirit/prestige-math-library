---
id: prop-gr-fx-thin-path-quotient-groupoid
kind: proposition
title: Thin path classes form a groupoid
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-thin-paths
  - def-equivalence-relation
  - def-category
dependency_roles:
  def-gr-fx-thin-paths: mathematical-premise
  def-equivalence-relation: mathematical-premise
  def-category: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Urs Schreiber and Konrad Waldorf, Parallel Transport and Functors, §2.1, Definition 2.2 and Lemma 2.3"
      url: "https://arxiv.org/pdf/0705.0452"
      locator: "PDF pp. 6–7, thin homotopy, its quotient, concatenation, identities, inverses, and associativity. The proof below checks these properties for the stated piecewise-smooth convention."
verification:
  precheck: pass
---

## Statement

For every smooth manifold $M$ and open $U\subseteq M$, thin homotopy is an equivalence relation on each set of piecewise-smooth paths with fixed endpoints, and concatenation respects the equivalence classes. Tag a morphism by its endpoints and its path class. With objects the points of $U$, morphisms $x\to y$ the tagged classes $[\gamma]$ from $x$ to $y$, composition $[\delta]\circ[\gamma]=[\delta*\gamma]$ (first traverse $\gamma$, then $\delta$), identity the class of the constant path, and inverse $[\gamma]^{-1}=[\bar\gamma]$ where $\bar\gamma(t)=\gamma(1-t)$, the resulting category is a groupoid.

## Statement references

[[def-gr-fx-thin-paths]]

[[def-equivalence-relation]]

[[def-category]]

## Facts & Assumptions

**Given:** A smooth manifold $M$, an open set $U\subseteq M$, and the path and thin-homotopy data of Definition [[def-gr-fx-thin-paths]].

[F1] [[def-gr-fx-thin-paths]]: paths have finite smooth subdivisions; a thin homotopy has fixed endpoints and rank at most one on each smooth curvilinear triangle.

[F2] [[def-equivalence-relation]]: an equivalence relation is reflexive, symmetric, and transitive; its quotient consists of its equivalence classes.

[F3] [[def-category]]: category composition is associative and has left and right identities; morphisms retain their domain and codomain.

## Proof

**Proof technique:** direct.

1.1 The relation is reflexive because $H(s,t)=\gamma(t)$ has rank at most one and fixed endpoints. It is symmetric by replacing $s$ with $1-s$. If $H_0$ joins $\gamma_0$ to $\gamma_1$ and $H_1$ joins $\gamma_1$ to $\gamma_2$, paste $H_0(2s,t)$ on $0\le s\le\tfrac12$ to $H_1(2s-1,t)$ on $\tfrac12\le s\le1$; their common boundary is the same path $\gamma_1$, so the paste is continuous and piecewise smooth on a finite triangulation, fixes both path endpoints, and has rank at most one on each triangle. Thus the relation is transitive. [given, F1, F2, construct]

1.2 If $\gamma_0\sim_{\mathrm{thin}}\gamma_1$ and $\delta_0\sim_{\mathrm{thin}}\delta_1$ with matching endpoints, paste their homotopies on the first and second halves of the path parameter. The shared endpoint is fixed throughout each homotopy, so the paste is continuous and piecewise smooth; on each piece its differential has image contained in the image of the corresponding homotopy differential, hence rank at most one. Therefore $\delta_0*\gamma_0\sim_{\mathrm{thin}}\delta_1*\gamma_1$, and composition of classes is well-defined. [F1, step 1.1, construct]

2.1 Let $\Gamma$ be the path obtained by placing the three given paths, in order, on the three consecutive thirds of $[0,1]$. Each parenthesized concatenation is $\Gamma\circ\phi_j$ for an increasing piecewise-linear homeomorphism $\phi_j:[0,1]\to[0,1]$; on each affine piece, both $\phi_j$ and $\Gamma$ are smooth. The homotopy $H(s,t)=\Gamma((1-s)\phi_0(t)+s\phi_1(t))$ is fixed at its endpoints. Subdivide the square along the finitely many straight break lines of the two piecewise-linear maps and triangulate the resulting polygons. On each triangle, the argument of $\Gamma$ stays in one smooth path piece, so $H$ is smooth there and its two differential columns are scalar multiples of the single vector $\Gamma'$. Its rank is at most one. Thus the two parenthesizations are thin-homotopic. The same construction between the identity parameter and the parameter map for a path with an inserted constant segment proves both identity laws. [given, F1, F3, step 1.2, construct]

2.2 Put $\lambda(t)=2t$ for $0\le t\le\tfrac12$ and $\lambda(t)=2(1-t)$ for $\tfrac12\le t\le1$. Then $t\mapsto\gamma(\lambda(t))$ traverses $\gamma$ and then its reverse. The map $H(s,t)=\gamma((1-s)\lambda(t))$ joins this path to the constant path at $\gamma(0)$ with both endpoints fixed. After triangulating along $t=\tfrac12$, it is smooth on each piece and its differential has rank at most one because both derivatives are scalar multiples of $\dot\gamma$. Reversing $\gamma$ gives the corresponding contraction of the reverse-then-forward path at $\gamma(1)$. Hence $[\bar\gamma]$ is a two-sided inverse of $[\gamma]$. [given, F1, F3, step 1.2, construct]

3.1 The tagged morphism set has well-defined domain and codomain by construction; step 1.2 makes composition independent of representatives, step 2.1 gives associativity, and step 2.2 gives the inverse axiom. Steps 2.1 and 2.2 also provide the two identity laws stated in [F3]. Thus the data form a category in which every morphism is invertible, which is the asserted groupoid. [F2, F3, step 1.2, step 2.1, step 2.2] ∎ 