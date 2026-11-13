---
id: prop-chamber-open-set-properties-artin-tits-normalisers
kind: proposition
title: Contractibility and intersection components of chamber open sets
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-chamber-open-sets-artin-tits-normalisers
  - prop-sign-chamber-interface-artin-tits-prerequisites
  - def-complement-interface-artin-tits-prerequisites
  - math:def-homotopy-relative-and-path-homotopy
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-iff-identity-nullhomotopic
  - math:cor-contractible-spaces-are-path-connected
  - math:thm-path-connected-implies-connected
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
dependency_roles:
  def-chamber-open-sets-artin-tits-normalisers: mathematical-premise
  prop-sign-chamber-interface-artin-tits-prerequisites: mathematical-premise
  def-complement-interface-artin-tits-prerequisites: mathematical-premise
  math:def-homotopy-relative-and-path-homotopy: mathematical-premise
  math:def-nullhomotopic-map-and-contractible-space: mathematical-premise
  math:cor-contractible-iff-identity-nullhomotopic: mathematical-premise
  math:cor-contractible-spaces-are-path-connected: mathematical-premise
  math:thm-path-connected-implies-connected: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-connected-component-and-quasicomponent: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 25, proof of Lemma 6.6
      statement: The chamber open sets are open and contractible, and the intersection
        for adjacent chambers has the two indicated connected components.
      hypotheses: The spherical Coxeter system and relative arrangement in Lemma 6.6,
        with J a subset of its vertices.
      reading_limits: The frozen original PDF p. 25, proof of Lemma 6.6, and its
        extracted text were read for attribution of the chamber-set claims. Van
        der Lek’s cited corollaries were not read or imported. Openness, the
        deformations and the component argument below are local; the article
        assertion is not used as a premise. Topology conventions and
        implications are supplied by the declared existing mathematical items.
formulation_deps:
  - def-chamber-open-sets-artin-tits-normalisers
  - def-complement-interface-artin-tits-prerequisites
  - math:def-nullhomotopic-map-and-contractible-space
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
argument_deps:
  - def-chamber-open-sets-artin-tits-normalisers
  - prop-sign-chamber-interface-artin-tits-prerequisites
  - def-complement-interface-artin-tits-prerequisites
  - math:def-homotopy-relative-and-path-homotopy
  - math:def-nullhomotopic-map-and-contractible-space
  - math:cor-contractible-iff-identity-nullhomotopic
  - math:cor-contractible-spaces-are-path-connected
  - math:thm-path-connected-implies-connected
  - math:def-connected-space
  - math:def-connected-component-and-quasicomponent
dependency_level: 11
---

## Statement

Let $(W,S)$ be a Coxeter system with finite $W$, and let $J\subseteq S$. Use the relative real space $E$, its finite hyperplane arrangement $\mathcal H^J$, its complexified complement, and the chamber sets $X_C$, $X_{C,C'}$ and $X_{C',C}$ of the chamber-set definition. A chamber is a connected component of the real arrangement complement; adjacent chambers share a wall. Then $X_C$ is open and contractible. If $C$ and $C'$ are adjacent, $X_C\cap X_{C'}$ has exactly two connected components, namely $X_{C,C'}$ and $X_{C',C}$.

## Statement references

[[def-chamber-open-sets-artin-tits-normalisers]]

[[math:def-nullhomotopic-map-and-contractible-space]]

[[math:def-connected-space]]

[[math:def-connected-component-and-quasicomponent]]

## Facts & Assumptions

[F1] Each chamber $C$ is nonempty and lies in a definite open half-space $D_H(C)$ for every arrangement hyperplane $H$. Adjacent chambers $C,C'$ have a unique separating hyperplane $H_0$; their half-spaces agree for every $H\ne H_0$ and are opposite for $H_0$. Use the defining half-space formulas for $X_C$, $X_{C,C'}$ and $X_{C',C}$. [[def-chamber-open-sets-artin-tits-normalisers]]

[F2] Each chamber is convex. [[prop-sign-chamber-interface-artin-tits-prerequisites]]

[F3] The complexified complement has the subspace topology inherited from $E\times E$, with $x+iy$ identified with $(x,y)$. [[def-complement-interface-artin-tits-prerequisites]]

[F4] A homotopy from $f:X\to Y$ to $g:X\to Y$ is a jointly continuous map $K:X\times[0,1]\to Y$ with $K(z,0)=f(z)$ and $K(z,1)=g(z)$. A map is nullhomotopic if it is homotopic to a constant map. A nonempty space is contractible if and only if its identity map is nullhomotopic. [[math:def-homotopy-relative-and-path-homotopy]] [[math:def-nullhomotopic-map-and-contractible-space]] [[math:cor-contractible-iff-identity-nullhomotopic]]

[F5] Every nonempty contractible space is path-connected, and every path-connected space is connected. [[math:cor-contractible-spaces-are-path-connected]] [[math:thm-path-connected-implies-connected]]

[F6] A connected space has no partition into two disjoint nonempty open subsets. The connected component of a point is the union of all connected subsets containing that point, hence the largest such subset, using the subspace topology throughout. [[math:def-connected-space]] [[math:def-connected-component-and-quasicomponent]]

## Proof

**Given:** The finite relative arrangement and chamber sets in the Statement, with the topology and conventions in [F3]–[F6].

**Proof technique:** direct deformation and separation.

**Goal:** Prove openness and contractibility of each chamber set and identify the connected components of an adjacent intersection.

1.1 **Prove openness from the formulas.** For each arrangement hyperplane $H$, a nonzero linear functional defining $H$ is continuous: in finite-dimensional coordinates it is a finite linear combination of the coordinate functions. Thus $H$ is closed and $D_H(C)$ is open. The condition $x\in H\Rightarrow y\in D_H(C)$ describes the open subset $((E\setminus H)\times E)\cup(E\times D_H(C))$ of $E\times E$. The set $X_C$ is the intersection of the complexified complement with these open subsets, one for each member of the finite arrangement. It is therefore open in the complement. For an empty arrangement this intersection is the entire complement, also open. [F1, F3, given]

1.2 **Contract a chamber set.** Fix $c\in C$. For $t\in[0,1]$, put $s(t)=\min(2t,1)$ and $r(t)=\max(2t-1,0)$, and define $K_c(x+iy,t)=((1-r(t))x+r(t)c)+i((1-s(t))y+s(t)c)$. These continuous scalar functions make the formula jointly continuous in the coordinate product topology. It first moves the imaginary coordinate linearly from $y$ to $c$, keeping $x$ fixed, and then moves the real coordinate linearly from $x$ to $c$, keeping the imaginary coordinate equal to $c$. If $x\in H$ during the first motion, both $y$ and $c$ lie in the convex half-space $D_H(C)$, so the moving imaginary coordinate does too. During the second motion the imaginary coordinate $c$ lies in $D_H(C)$ for every $H$, regardless of the real coordinate. Thus both motions stay in $X_C$; in particular they avoid every $H\times H$. With the subspace topology, $K_c$ is a homotopy from the identity to the constant map at $c+ic$. This point belongs to $X_C$, so the space is nonempty; [F4] now gives contractibility. [F1, F2, F3, F4, given]

2.1 **Split an adjacent intersection.** Let $C,C'$ be adjacent and let $H_0$ be their unique separating hyperplane. Write $I=X_C\cap X_{C'}$. In $I$ the real coordinate cannot lie in $H_0$: otherwise the imaginary coordinate would have to lie in both opposite half-spaces $D_{H_0}(C)$ and $D_{H_0}(C')$. For every other hyperplane the two required half-spaces agree. Consequently the points whose real coordinate lies in $D_{H_0}(C)$ are exactly $X_{C,C'}$, and those whose real coordinate lies in $D_{H_0}(C')$ are exactly $X_{C',C}$. Equivalently these pieces are $I\cap(D_{H_0}(C)\times E)$ and $I\cap(D_{H_0}(C')\times E)$. They are disjoint and cover $I$. By step 1.1 and openness of the two half-spaces they are open in the complement, and in particular in $I$. [F1, F3, step 1.1, given]

3.1 **Connect both pieces.** Fix $c\in C$ and restrict $K_c$ from step 1.2 to $X_{C,C'}$. Throughout the deformation the real coordinate remains in the convex half-space $D_{H_0}(C)$, since both its initial value and $c$ are in that half-space. During the first motion, for any other hyperplane containing the fixed real coordinate, the original imaginary coordinate and $c$ lie in the common required half-space, so their line segment does too. During the second motion the imaginary coordinate is $c$, which lies in every common required half-space for $H\ne H_0$. The real coordinate never lies in $H_0$, so that hyperplane imposes no imaginary-coordinate condition. Thus this is a continuous contraction of $X_{C,C'}$ to $c+ic$. Interchanging $C$ and $C'$ gives a contraction of $X_{C',C}$. Both pieces are nonempty, since they contain $c+ic$ and $c'+ic'$ respectively for choices $c\in C$ and $c'\in C'$. By [F4] and [F5], each piece is contractible, path-connected and connected. [F1, F2, F3, F4, F5, step 1.2, step 2.1]

4.1 **Identify the components.** A connected subset of $I$ cannot meet both pieces: its intersections with the two disjoint open pieces from step 2.1 would give a partition into two nonempty relatively open subsets, contrary to [F6]. For a point in either piece, that entire piece is a connected subset containing the point by step 3.1, while every connected subset containing the point lies in that same piece. Its union, the component in [F6], is therefore exactly that piece. Hence $I$ has exactly the two stated connected components. [F6, step 2.1, step 3.1] ∎
