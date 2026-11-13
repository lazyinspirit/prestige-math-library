---
id: lem-equivariant-topological-equivalence-artin-tits-normalisers
kind: lemma
title: Equivariant equivalence with fundamental groupoids
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-arrangement-groupoids-artin-tits-normalisers
  - def-chamber-open-sets-artin-tits-normalisers
  - def-topological-path-assignment-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - lem-author-d3116e202611-gallery-cover
  - thm-spherical-deligne-topology-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - prop-topological-orbit-interface-artin-tits-prerequisites
  - def-groupoid-action-quotient-artin-tits-normalisers
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-axiom-of-choice
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
  - def-relative-complement-artin-tits-normalisers
  - math:def-linear-hyperplane
  - math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - math:lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:def-locally-connected
  - math:def-fundamental-groupoid-of-a-space
dependency_roles:
  def-arrangement-groupoids-artin-tits-normalisers: mathematical-premise
  def-chamber-open-sets-artin-tits-normalisers: mathematical-premise
  def-topological-path-assignment-artin-tits-normalisers: mathematical-premise
  lem-normaliser-linear-action-artin-tits-normalisers: mathematical-premise
  lem-normaliser-chamber-action-artin-tits-normalisers: mathematical-premise
  lem-author-d3116e202611-gallery-cover: mathematical-premise
  thm-spherical-deligne-topology-artin-tits-normalisers: mathematical-premise
  prop-relative-cover-artin-tits-normalisers: mathematical-premise
  prop-topological-orbit-interface-artin-tits-prerequisites: mathematical-premise
  def-groupoid-action-quotient-artin-tits-normalisers: mathematical-premise
  math:def-equivalence-and-adjoint-equivalence-of-categories: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-arbitrary-rank-coxeter-system-and-bruhat-order: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  math:def-linear-hyperplane: mathematical-premise
  math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces: mathematical-premise
  math:lem-euclidean-linear-maps-have-matrices-and-are-bounded: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  math:def-locally-connected: mathematical-premise
  math:def-fundamental-groupoid-of-a-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 25–26, Lemma 6.6 and its proof
      statement: In spherical type the article states an equivariant equivalence from
        the relative arrangement groupoid to the fundamental groupoid of the
        relative complexified complement, together with the induced quotient
        equivalence and commutative square.
      hypotheses: A finite Coxeter group W with its specified relative arrangement for
        a subset J of the simple generators.
      reading_limits: The frozen article text at Lemma 6.6 and its construction was
        read for attribution only. The current local proof was read; steps 1.1
        and 2.1 prove the topological conclusions now exposed in the Statement,
        using the stated finite-arrangement and elementary linear/topological
        suppliers. No new reading of Deligne or Van der Lek, visual PDF
        inspection, or reconstruction of their theorems is claimed.
dependency_level: 19
formulation_deps:
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
  - def-relative-complement-artin-tits-normalisers
  - def-arrangement-groupoids-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - def-groupoid-action-quotient-artin-tits-normalisers
  - prop-topological-orbit-interface-artin-tits-prerequisites
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-axiom-of-choice
  - math:def-fundamental-groupoid-of-a-space
  - math:def-locally-connected
argument_deps:
  - def-arrangement-groupoids-artin-tits-normalisers
  - def-chamber-open-sets-artin-tits-normalisers
  - def-topological-path-assignment-artin-tits-normalisers
  - lem-normaliser-linear-action-artin-tits-normalisers
  - lem-normaliser-chamber-action-artin-tits-normalisers
  - lem-author-d3116e202611-gallery-cover
  - thm-spherical-deligne-topology-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - prop-topological-orbit-interface-artin-tits-prerequisites
  - def-groupoid-action-quotient-artin-tits-normalisers
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-axiom-of-choice
  - math:def-arbitrary-rank-coxeter-system-and-bruhat-order
  - def-relative-complement-artin-tits-normalisers
  - math:def-linear-hyperplane
  - math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - math:lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:def-locally-connected
  - math:def-fundamental-groupoid-of-a-space
---

## Statement

Let $(W,S)$ be a Coxeter system with finite $W$, and let $J\subseteq S$. Put $G=N(W,J)=\operatorname{Norm}_W(W_J)/W_J$, where $W_J$ is generated by $J$. Let $X=\mathcal X_J^{\mathbb C}$ be the relative complexified arrangement complement and let $\mathcal D=\mathcal D(J)$ be the groupoid completion of the positive relative chamber category. Thus its objects are chambers and its generating arrows are directed crossings of adjacent chambers, subject to equality of positive geodesic galleries with the same endpoints and formal inversion of arrows.

The space $X$ is nonempty, path-connected and locally path-connected.

There is a $G$-equivariant equivalence $p:\mathcal D\to\Pi_1(X)$, where $\Pi_1(X)$ has points of $X$ as objects and endpoint-fixed path-homotopy classes as arrows. Equivariance means $p(gC)=g p(C)$ on objects and $p(g\alpha)=g p(\alpha)$ on arrows. With $Q:\mathcal D\to\mathcal D/G$ the orbit functor and $q:X\to X/G$ the topological orbit map, $p$ induces an equivalence $\bar p:\mathcal D/G\to\Pi_1(X/G)$ satisfying $\bar p\,Q=q_*p$. The map $q$ is a normal covering. An equivalence means a functor equipped with a quasi-inverse and natural isomorphisms to the two identity functors; the Axiom of Choice is used below to choose connecting paths for all objects.

## Statement references

[[def-arrangement-groupoids-artin-tits-normalisers]]

[[math:def-locally-connected]]

[[math:def-arbitrary-rank-coxeter-system-and-bruhat-order]]

[[def-relative-complement-artin-tits-normalisers]]

[[math:def-fundamental-groupoid-of-a-space]]

## Facts & Assumptions

[F1] The relative arrangement is finite, central and simplicial, and $X$ is its complexified complement. Its ambient space $E=\Theta_J$ is finite-dimensional with its coordinate Euclidean topology, and $X=(E\times E)\setminus\bigcup_{H\in\mathcal H^J}(H\times H)$ has the product subspace topology. A linear hyperplane $H$ has $\dim(E/H)=1$; choosing an identification $E/H\cong\mathbb R$ gives a nonzero linear functional $\ell_H:E\to\mathbb R$ with kernel $H$. [[thm-spherical-deligne-topology-artin-tits-normalisers]] [[def-relative-complement-artin-tits-normalisers]] [[math:def-linear-hyperplane]]

[F2] The action of $G$ on chambers is free, preserves adjacency, and is induced by linear automorphisms of the relative real space preserving the arrangement. [[lem-normaliser-chamber-action-artin-tits-normalisers]] [[lem-normaliser-linear-action-artin-tits-normalisers]]

[F3] Given equivariant points $a_C$ in the chamber charts, the assignment of an adjacent directed crossing to the path class through the ordered chart intersection is independent of its intermediate point and paths and is equivariant. For a crossing from $C$ to $C'$, this ordered intersection has real part on the $C$ side of the separating wall; the chart of $C$ requires the imaginary part to be on the $C$ side whenever the real part lies on that wall. [[def-topological-path-assignment-artin-tits-normalisers]] [[def-chamber-open-sets-artin-tits-normalisers]]

[F4] For a finite central simplicial arrangement, the groupoid completion of positive galleries modulo equal-endpoint minimal-gallery relations is isomorphic to the full fundamental subgroupoid on chosen real chamber points by the positive wall-crossing convention: at a positive crossing the imaginary component is on the preceding chamber's side. [[lem-author-d3116e202611-gallery-cover]]

[F5] The $G$-action on $X$ is by homeomorphisms, is free and has the disjoint-neighbourhood property; the orbit map is a normal covering. [[prop-relative-cover-artin-tits-normalisers]] If $X$ is nonempty, path-connected and locally path-connected, these action properties imply that projection identifies $\Pi_1(X)/G$ with $\Pi_1(X/G)$. The three topological hypotheses are proved in steps 1.1 and 2.1 below before this implication is applied. [[prop-topological-orbit-interface-artin-tits-prerequisites]]

[F6] The orbit groupoid has object and arrow orbits, with composition by aligning representatives when the action is free on objects. The arrangement groupoid is the completion described in the Statement. [[def-groupoid-action-quotient-artin-tits-normalisers]] [[def-arrangement-groupoids-artin-tits-normalisers]]

[F7] A quasi-inverse and natural isomorphisms give an equivalence; arbitrary indexed selections are available under the Axiom of Choice. [[math:def-equivalence-and-adjoint-equivalence-of-categories]] [[math:def-axiom-of-choice]]

[F8] A finite-dimensional vector space over an infinite field is not the union of finitely many proper linear subspaces. We apply this over $\mathbb R$ to $E$ and to $E\times E$. [[math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]

[F9] Every linear map between coordinate Euclidean spaces satisfies a bound $\|Lv\|_2\leq K\|v\|_2$ for some $K\geq0$. Every Euclidean ball is convex, and every convex subset of $\mathbb R^n$ for $n\geq1$ is path-connected. Local path connectedness means that every point has a base of open path-connected neighbourhoods. [[math:lem-euclidean-linear-maps-have-matrices-and-are-bounded]] [[math:ex-convex-subsets-of-rn-are-path-connected]] [[math:def-locally-connected]]

[F10] For every topological space $Y$, the fundamental groupoid $\Pi_1(Y)$ has points as objects and endpoint-fixed path-homotopy classes as arrows, with composition $[\beta]\circ[\alpha]=[\alpha*\beta]$ traversing $\alpha$ first, constant-path identities and reversed-path inverses. [[math:def-fundamental-groupoid-of-a-space]]

## Proof

**Given:** The finite Coxeter system and subset $J$ of the Statement.

**Given:** The data in the Statement, with the Axiom of Choice.

**Goal:** Construct the equivariant equivalence and prove the quotient square and equivalence.

**Proof technique:** direct.

1.1 By [F1] and [F8], choose $a\in E\setminus\bigcup\mathcal H^J$; then $(a,0)\in X$, so $X$ is nonempty. If $E$ has dimension zero, there are no hyperplanes and $X$ is a singleton, hence is locally path-connected. Otherwise, fix $z=(x,y)\in X$. For each $H$, at least one of $\ell_H(x)$ and $\ell_H(y)$ is nonzero. The bound in [F9] gives $K_H>0$ with $|\ell_H(v)|\leq K_H\|v\|_2$. If, for example, $\ell_H(x)\ne0$, every perturbation of $z$ of norm less than $|\ell_H(x)|/(2K_H)$ still has nonzero first-coordinate value under $\ell_H$; use the analogous radius for $y$ otherwise. Taking the minimum of these finitely many positive radii gives an open Euclidean ball about $z$ contained in $X$; if the arrangement is empty, any radius works. Thus $X$ is open. Inside any neighbourhood of $z$ open in $X$, a sufficiently small Euclidean ball is still contained in that neighbourhood. Such balls are open and path-connected by [F9], so they give the required neighbourhood base and prove local path connectedness. [F1, F8, F9]

1.2 There are finitely many chambers by [F1]. Choose a real point $a_C\in C$ for one chamber in each $G$-orbit and extend by $a_{gC}=g a_C$. By [F2], the action preserves chambers and is free on them, so this is well-defined. A real point of $C$ lies in its chart: its real part lies on no arrangement hyperplane, making the chart conditions in [F3] vacuous. Apply the path assignment of [F3] to these points. [F1, F2, F3]

2.1 Let $p,q\in X$. For $H\in\mathcal H^J$ put $L_H=H\times H$. The linear map $f_H:E\times E\to\mathbb R^2$ defined by $f_H(u,v)=(\ell_H(u),\ell_H(v))$ is surjective, since $\ell_H$ is nonzero, and has kernel $L_H$. For $s=p$ or $s=q$, $f_H(s)\ne0$, so $B_{H,s}=L_H+\mathbb R s$ is a proper linear subspace: its image under the surjective $f_H$ is just the one-dimensional line $\mathbb R f_H(s)$. By [F8], choose $r$ outside all these finitely many $B_{H,s}$. The segment $[p,r]$ cannot meet any $L_H$: if $(1-t)p+tr\in L_H$, then $t\ne0$ because $p\notin L_H$, and solving for $r$ puts it in $L_H+\mathbb R p$, a contradiction. The identical argument with $q$ shows that $[r,q]$ avoids every $L_H$. Both segments are continuous paths by [F9], and traversing them successively gives a path in $X$ from $p$ to $q$. An empty arrangement gives straight segments directly; in dimension zero the constant path suffices. Thus $X$ is path-connected. [F1, F8, F9, step 1.1]

2.2 Compare the two crossing conventions. The map $\kappa:X\to X$, $\kappa(x+iy)=x-iy$, is a homeomorphism and its own inverse: it preserves the excluded sets $H\times H$ and is an isometry of $E\times E$. It fixes the real chamber points and commutes with the real linear $G$-action. Composing paths and endpoint-fixed homotopies with $\kappa$ therefore induces a groupoid automorphism $\kappa_*$ of $\Pi_1(X)$. For adjacent $C,C'$, take a short transverse real segment through the relative interior of their common wall, avoiding every other hyperplane, and give it a small imaginary displacement on the $C'$ side near its crossing, tapering to zero at its endpoints. Join these endpoints to $a_C,a_{C'}$ in the respective real chambers. Choose an intermediate real point $d$ before the crossing, on the $C$ side. Then $d\in X_{C,C'}$; the portion up to $d$ lies in $X_C$, and the portion after $d$ lies in $X_{C'}$, since at the crossed wall its imaginary part is on the $C'$ side and no other wall meets this small segment. Hence [F3] identifies its class with the assigned crossing. Its conjugate under $\kappa$ instead has imaginary part on the preceding chamber's $C$ side, exactly the convention in [F4]. If $\Phi$ denotes that supplier's isomorphism on real chamber basepoints, the assigned crossing class is therefore $\kappa_*\Phi(C\to C')$. [F1, F2, F3, F4, F9, step 1.2, F10]

3.1 By [F4], $\Phi$ is an isomorphism from $\mathcal D$ to the full fundamental subgroupoid on the selected real points $a_C$. Step 2.2 shows that the graph assignment is $\kappa_*\Phi$ on every generator. This composite is again an isomorphism onto that subgroupoid, since $\kappa_*$ fixes its objects and is invertible. Thus the assignment respects the equal-endpoint geodesic relations and extends over formal inverses. Composing with inclusion gives $p$. It is equivariant by [F3] on generating crossings and objects, and hence on formal inverses and composites. It is fully faithful, and it is essentially surjective because $X$ is path-connected by step 2.1. Using [F7], choose for each point of $X$ a path to a selected chamber point, taking the constant path at selected points. Transporting arrows along these paths and through the inverse of $\kappa_*\Phi$ defines a quasi-inverse; the chosen path classes give the natural isomorphism to the identity, while the other composite is the identity on $\mathcal D$. Hence $p$ is an equivalence in the stated sense. [F3, F4, F6, F7, step 2.1, step 2.2, F10]

4.1 Let $A$ be the full subgroupoid on the points $a_C$. The free action on chambers makes $C\mapsto a_C$ injective: distinct real chambers are disjoint. Thus [F2] makes the action on the objects of $A$ free, and [F5] makes the action on all points of $X$ free. By [F6], $A/G$ is the full subgroupoid of $\Pi_1(X)/G$ on the orbits of the $a_C$: any arrow orbit between two such orbits can be translated so that its endpoints are selected points. It is essentially surjective because every point of $X$ is joined by a path to a selected point by step 2.1. Consequently $\mathcal D/G\cong A/G$ maps by an equivalence to $\Pi_1(X)/G$; a quasi-inverse is obtained by choosing connecting arrows in that quotient as in step 3.1. [F2, F5, F6, F7, step 2.1, step 3.1, F10]

5.1 Steps 1.1 and 2.1 establish nonemptiness, path connectedness and local path connectedness of $X$. Together with the action properties in [F5], these verify every hypothesis of the topological orbit interface, so projection induces an isomorphism $\Pi_1(X)/G\cong\Pi_1(X/G)$ and $q$ is a normal covering. Define $\bar p$ as this isomorphism after the equivalence in step 4.1. On each object and arrow, both $\bar p Q$ and $q_*p$ take the assigned point or path class to its projection, so the square commutes strictly. Composition with an isomorphism preserves the quasi-inverse data, proving that $\bar p$ is an equivalence. [F5, F6, step 1.1, step 2.1, step 4.1, F10] ∎

## Source notes

The article reference attributes the original claim. The proof uses the declared gallery and covering suppliers and the local comparison of path conventions; it does not use the article's lemma as a premise.
