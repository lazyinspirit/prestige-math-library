---
id: rem-same-chambers-artin-tits-normalisers
kind: remark
title: Interior restriction preserves chambers and adjacency
status: published
domain: mathematics
origin: pipeline
deps:
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-chamber-topology
  - prop-relative-local-finiteness-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - math:lem-locally-finite-unions-and-closures
  - math:ex-convex-subsets-of-rn-are-path-connected
  - prop-tits-domain-interface-artin-tits-prerequisites
dependency_roles:
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  def-arrangement-topology-interface-artin-tits-prerequisites: mathematical-premise
  lem-author-9b7c42e8f103-chamber-topology: mathematical-premise
  prop-relative-local-finiteness-artin-tits-normalisers: mathematical-premise
  prop-gallery-separation-interface-artin-tits-prerequisites: mathematical-premise
  math:lem-locally-finite-unions-and-closures: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  prop-tits-domain-interface-artin-tits-prerequisites: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 9, Remark 3.8
      statement: The arrangements on $\mathrm{Cone}(J)$ and $\mathrm{Cone}(J)^\circ$
        have the same chambers and the same adjacency relation. In the locally
        finite interior arrangement any two chambers are joined by a finite
        adjacency path.
      hypotheses: The finite-rank Coxeter-system and relative-cone notation of the
        article; $J$ is an arbitrary subset of the generators.
      reading_limits: Read the frozen extracted text of Remark 3.8 on PDF p. 9 for
        attribution. The article is not used as a proof premise; the argument
        applies the declared mathematical suppliers. No visual PDF inspection or
        reconstruction of an external proof is claimed by this repair.
dependency_level: 11
formulation_deps:
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-arrangement-topology-interface-artin-tits-prerequisites
argument_deps:
  - def-relative-cone-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
  - def-arrangement-topology-interface-artin-tits-prerequisites
  - lem-author-9b7c42e8f103-chamber-topology
  - prop-relative-local-finiteness-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - math:lem-locally-finite-unions-and-closures
  - math:ex-convex-subsets-of-rn-are-path-connected
  - prop-tits-domain-interface-artin-tits-prerequisites
---

## Statement

Let $(W,S)$ be a Coxeter system with finite generating set and $J\subseteq S$. Put $E=\Theta_J$, $T=\mathrm{Cone}(J)$, and let $T^\circ$ denote the interior of $T$ in $E$. Let $\mathcal H^J$ be the set of distinct relative root hyperplanes. Restricting the arrangement from $T$ to $T^\circ$ identifies their chambers and preserves adjacency. The interior arrangement is locally finite, and any two of its chambers are joined by a finite gallery, meaning a finite sequence of chambers in which consecutive chambers are adjacent.

## Statement references

[[def-relative-cone-artin-tits-normalisers]]

[[def-chambers-walls-artin-tits-normalisers]]

[[def-arrangement-topology-interface-artin-tits-prerequisites]]

## Facts & Assumptions

[F1] The relative-cone definition supplies the finite-dimensional space $E$, the cone intersection $T$, its relative interior, and the distinct restricted root hyperplanes $\mathcal H^J$. [[def-relative-cone-artin-tits-normalisers]]

[F2] A chamber is a connected component of the arrangement complement. A wall is the intersection of a chamber's closure in $E$ with an arrangement hyperplane, when that intersection has affine dimension one less than the chamber. Distinct chambers are adjacent when they share a wall. Restriction retains the hyperplanes meeting the restricted domain. [[def-chambers-walls-artin-tits-normalisers]] [[def-arrangement-topology-interface-artin-tits-prerequisites]]

[F3] The full-cone and interior complements are identical as subspaces of $E$, and their connected components coincide. [[lem-author-9b7c42e8f103-chamber-topology]]

[F4] The arrangement restricted to the hyperplanes meeting $T^\circ$ is locally finite. [[prop-relative-local-finiteness-artin-tits-normalisers]]

[F5] For a locally finite linear hyperplane arrangement in an open convex subset of a finite-dimensional real vector space, any two chambers are joined by a finite gallery. [[prop-gallery-separation-interface-artin-tits-prerequisites]]

[F6] In any topological space, a locally finite union of closed subsets is closed. Apply this to the hyperplane traces in the subspace $T^\circ$. [[math:lem-locally-finite-unions-and-closures]]

[F7] For $n\geq1$, every convex subset of $\mathbb R^n$ in its product topology is path-connected and hence connected (claim 1). The zero-dimensional case will be handled directly. [[math:ex-convex-subsets-of-rn-are-path-connected]]

[F8] For the same finite-rank Coxeter system and canonical real representation, the full Tits cone $U=\mathrm{Cone}$ is convex. [[prop-tits-domain-interface-artin-tits-prerequisites]]

## Proof


**Given:** The finite-rank Coxeter system, $J$, relative cone, and relative arrangement in the Statement.

**Goal:** Identify the chambers and adjacency relations and establish local finiteness and finite gallery connectivity.

1.1 By [F3], the complements in $T$ and $T^\circ$ are the same topological space. Their connected components, hence their chambers, are the same subsets of $E$. Their closures in $E$ and their affine dimensions therefore also agree. [F1, F2, F3]

1.2 The interior arrangement has open convex chambers. First put $n=\dim E$. If $n=0$, there are no hyperplanes, and $T^\circ$ is empty or a singleton; its chambers, if any, are open and convex directly. For $n\geq1$, use the coordinate isomorphism $c:E\to\mathbb R^n$ and transported Euclidean norm $\|\cdot\|$ of [F2]. Each relative hyperplane is the kernel of a nonzero root-evaluation form $\ell:E\to\mathbb R$ from [F1]. In coordinates write $\ell(x)=\sum_{i=1}^n a_i c(x)_i$ and $A=\sum_{i=1}^n|a_i|>0$. Then $|\ell(x)-\ell(y)|\leq A\|x-y\|$. At a point $x$ with $\ell(x)\ne0$, the ball of radius $|\ell(x)|/(2A)$ preserves its strict sign. Thus each hyperplane is closed in $E$, its strict half-spaces are open, and its trace on $T^\circ$ is closed in that subspace. These traces form a locally finite family by [F4]. Their union is therefore closed in $T^\circ$ by [F6]. Write $Q$ for its complement in $T^\circ$; since $T^\circ$ is open in $E$, so is $Q$. [F1, F2, F4, F6, algebra]

1.3 The cone $T=U\cap E$ is convex: a convex combination of two points of $T$ belongs to $U$ by [F8] and to the linear subspace $E$ by [F1]. Its interior in $E$ is convex as well. Indeed, for $x,y\in T^\circ$, choose $r>0$ such that $B_E(x,r)$ and $B_E(y,r)$ are contained in $T$, using the coordinate Euclidean balls of [F2]. For $0\leq t\leq1$ and $h\in E$ with $\|h\|<r$, convexity of $T$ gives $(1-t)(x+h)+t(y+h)=(1-t)x+ty+h\in T$. Thus $B_E((1-t)x+ty,r)\subseteq T$, so $(1-t)x+ty\in T^\circ$. If $T^\circ$ is empty the assertion is vacuous; this argument also applies when $\dim E=0$. [F1, F2, F8, choose, algebra]

2.1 Continue with $n\geq1$. The inequalities $\max_i|v_i|\leq(\sum_i v_i^2)^{1/2}\leq\sqrt n\max_i|v_i|$ show that the Euclidean coordinate topology agrees with the product topology used in [F7]. Thus [F7] applies through $c$ to every convex subset of $E$. A connected subset of $Q$ has a constant strict sign for each root-evaluation form: otherwise the two relatively open sign parts would separate it. Conversely, the subset of $T^\circ$ with any fixed realizable set of strict signs is convex by linearity and step 1.3, is connected by [F7], and lies in $Q$. Every connected component of $Q$ is contained in one such region, and maximality makes it equal to that connected region. Hence the chambers are convex. At any point of $Q$ there is an $E$-ball contained in $Q$ by step 1.2. This ball is convex and connected by [F7], so all its points have the signs of its centre and lie in that centre's chamber. Hence every chamber is open. Together with the direct zero-dimensional case, this proves the assertion of step 1.2. [F1, F2, F7, step 1.2, step 1.3, algebra]

3.1 A shared wall in the interior arrangement is also a shared wall in the full arrangement, because restriction only discards hyperplanes and the chambers and their closures agree. Conversely, suppose distinct chambers $C,D$ share a full-arrangement wall $W$ supported by $H\in\mathcal H^J$. If $\dim E=0$ there are no hyperplanes and no adjacency, so assume positive dimension. The open convex sets $C,D$ are full-dimensional by steps 1.2 and 2.1, and $W$ has dimension $\dim E-1$. They must lie on opposite sides of $H$: if they lay on the same side, choose a point in the relative interior of the convex set $W$ and points of $C,D$. Convexity gives, at every sufficiently small common positive distance from $H$, relatively open slices of both chambers containing a common neighbourhood of that wall point; the chambers would intersect. A segment joining a point of $C$ to a point of $D$ therefore meets $H$, and it lies in $T^\circ$ by step 1.3. Thus $H$ is retained by the restriction, and the same set $W$ is a shared interior wall. [F2, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 The interior is open by definition and convex by step 1.3, and its arrangement is locally finite by [F4]. Applying [F5] gives a finite gallery between any two interior chambers. Together with steps 1.1 and 3.1, this proves the stated chamber and adjacency identifications and connectivity. [F4, F5, step 1.1, step 1.3, step 3.1] ∎

## Source notes

The article is cited for attribution of the remark. The argument uses the declared suppliers, including the independently sourced chamber-topology chain, rather than the article's assertion as its own proof.
