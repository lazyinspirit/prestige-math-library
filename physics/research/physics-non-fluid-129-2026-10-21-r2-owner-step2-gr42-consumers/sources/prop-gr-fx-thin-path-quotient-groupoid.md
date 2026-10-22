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
  - def-isomorphism-groupoid-and-connected-category
dependency_roles:
  def-gr-fx-thin-paths: mathematical-premise
  def-equivalence-relation: mathematical-premise
  def-category: mathematical-premise
  def-isomorphism-groupoid-and-connected-category: mathematical-premise
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

Let $M$ be a smooth manifold and $U\subseteq M$ open. For composable piecewise-smooth paths $\gamma:x\to y$ and $\delta:y\to z$ in $U$, define $\delta*\gamma:[0,1]\to U$ by $(\delta*\gamma)(t)=\gamma(2t)$ for $0\le t\le\tfrac12$ and $(\delta*\gamma)(t)=\delta(2t-1)$ for $\tfrac12\le t\le1$. Thus $\delta*\gamma$ traverses $\gamma$ first and then $\delta$. A groupoid means a category in which every morphism is an isomorphism.

Then thin homotopy is an equivalence relation on each set of piecewise-smooth paths with fixed endpoints, and concatenation respects the equivalence classes. Tag a morphism by its endpoints and its path class. With objects the points of $U$, morphisms $x\to y$ the tagged classes $[\gamma]$ from $x$ to $y$, composition $[\delta]\circ[\gamma]=[\delta*\gamma]$, identity the class of the constant path, and inverse $[\gamma]^{-1}=[\bar\gamma]$ where $\bar\gamma(t)=\gamma(1-t)$, the resulting category is a groupoid.

## Statement references

[[def-gr-fx-thin-paths]]

[[def-equivalence-relation]]

[[def-category]]

[[def-isomorphism-groupoid-and-connected-category]]

## Facts & Assumptions

**Given:** A smooth manifold $M$, an open set $U\subseteq M$, and the path and thin-homotopy data of Definition [[def-gr-fx-thin-paths]].

[F1] [[def-gr-fx-thin-paths]]: paths have finite smooth subdivisions; a thin homotopy has fixed endpoints and rank at most one on each smooth curvilinear triangle.

[F2] [[def-equivalence-relation]]: an equivalence relation is reflexive, symmetric, and transitive; its quotient consists of its equivalence classes.

[F3] [[def-category]]: category composition is associative and has left and right identities; morphisms retain their domain and codomain.

[F4] [[def-isomorphism-groupoid-and-connected-category]]: a groupoid is a category in which every morphism has a two-sided inverse.

## Proof

**Proof technique:** direct.

1.1 The relation is reflexive because $H(s,t)=\gamma(t)$ has rank at most one and fixed endpoints; subdivide the square along each breakpoint of a finite smooth partition of $\gamma$ and triangulate the resulting strips. It is symmetric by replacing $s$ with $1-s$ and reflecting a witnessing subdivision. For transitivity, first take finite common refinements of the boundary subdivisions of $H_0$ and $H_1$ along their common path $\gamma_1$, then paste $H_0(2s,t)$ on $0\le s\le\tfrac12$ to $H_1(2s-1,t)$ on $\tfrac12\le s\le1$. The common boundary is the same path $\gamma_1$, so this paste is continuous; the scaled finite subdivisions on the two halves give a finite curvilinear-triangle subdivision after triangulating any resulting polygons. It fixes both path endpoints, and its differential has rank at most one on each triangle. Thus the relation is an equivalence relation. [given, F1, F2, construct]

2.1 If $\gamma_0\sim_{\mathrm{thin}}\gamma_1$ and $\delta_0\sim_{\mathrm{thin}}\delta_1$ with matching endpoints, paste their homotopies on the first and second halves of the path parameter, scaling their finite subdivisions to those halves and taking a finite common refinement along their shared fixed endpoint. The shared endpoint is fixed throughout each homotopy, so the paste is continuous and piecewise smooth; on each triangle its differential has image contained in that of the corresponding homotopy differential, hence rank at most one. Therefore $\delta_0*\gamma_0\sim_{\mathrm{thin}}\delta_1*\gamma_1$, and composition of classes is well-defined. [F1, step 1.1, construct]

3.1 Let $\Gamma$ be the path obtained by placing the three given paths, in order, on the three consecutive thirds of $[0,1]$. Each parenthesized concatenation is $\Gamma\circ\phi_j$ for an increasing piecewise-linear homeomorphism $\phi_j:[0,1]\to[0,1]$. Put $u(s,t)=(1-s)\phi_0(t)+s\phi_1(t)$ and $H(s,t)=\Gamma(u(s,t))$. Refine the $t$-partition by all breakpoints of $\phi_0$ and $\phi_1$. On each resulting strip $u$ is smooth and piecewise bilinear. For every breakpoint $b$ of the piecewise-smooth path $\Gamma$, also subdivide along the level set $u^{-1}(b)$; on each strip these finitely many level sets are smooth arcs, with their finitely many endpoints and intersections included in the subdivision. The resulting regions have finitely many smooth boundary arcs and can be triangulated into curvilinear triangles. On each triangle, $u$ remains in one smooth piece of $\Gamma$, so $H$ is smooth there and both differential columns are scalar multiples of the single vector $\Gamma'$. Its rank is at most one. Thus the two parenthesizations are thin-homotopic. For the right identity law use $\rho_0(t)=2t$ on $[0,\tfrac12]$ and $\rho_0(t)=1$ on $[\tfrac12,1]$, with $\rho_1(t)=t$; for the left identity law use $\rho_0(t)=0$ on $[0,\tfrac12]$ and $\rho_0(t)=2t-1$ on $[\tfrac12,1]$, again with $\rho_1(t)=t$. The corresponding homotopies $\gamma((1-s)\rho_0(t)+s\rho_1(t))$ have the required concatenated and unaltered paths as boundaries. Refine each square along the parameter-map breakpoints and the preimages of every breakpoint of $\gamma$; any region on which the argument is constant is already smooth. The same rank argument proves both identity laws. [given, F1, F3, step 2.1, construct]

3.2 Put $\lambda(t)=2t$ for $0\le t\le\tfrac12$ and $\lambda(t)=2(1-t)$ for $\tfrac12\le t\le1$. Then $t\mapsto\gamma(\lambda(t))$ traverses $\gamma$ and then its reverse. The map $H(s,t)=\gamma((1-s)\lambda(t))$ joins this path to the constant path at $\gamma(0)$ with both endpoints fixed. Subdivide first at $t=\tfrac12$, then along the preimages of every breakpoint of a finite smooth partition of $\gamma$ under $(s,t)\mapsto(1-s)\lambda(t)$; these are finitely many smooth arcs or constant regions on the two parameter strips. Triangulating the resulting finite curvilinear regions makes $H$ smooth on each triangle. Its differential has rank at most one because both derivatives are scalar multiples of $\dot\gamma$. Applying the same construction to $\bar\gamma$ contracts the reverse-then-forward path at $\gamma(1)$. Hence $[\bar\gamma]$ is a two-sided inverse of $[\gamma]$. [given, F1, F3, step 2.1, construct]

4.1 The tagged morphism set has well-defined domain and codomain by construction; step 2.1 makes composition independent of representatives, step 3.1 gives associativity, and step 3.2 gives the inverse axiom. Steps 3.1 and 3.2 also provide the two identity laws stated in [F3]. Thus the data form a category in which every morphism is invertible, which is a groupoid by [F4]. [F2, F3, F4, step 2.1, step 3.1, step 3.2] ∎
