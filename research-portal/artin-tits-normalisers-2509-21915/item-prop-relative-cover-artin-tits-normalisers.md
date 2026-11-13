---
title: Relative free action, normal cover and exact sequence
status: draft
research_item: prop-relative-cover-artin-tits-normalisers
dependency_level: 16
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 3 and 13, equation (1.5), §3.3 after Remark 3.27, and equation
        (3.28)
      statement: The induced normaliser-quotient action on the relative complexified
        complement is free and properly discontinuous, and its quotient gives a
        normal covering and the displayed fundamental-group exact sequence.
      hypotheses: The article's Coxeter-system and relative-cone conventions; no
        spherical-type assumption is stated for this assertion.
      reading_limits: Frozen article text was inspected for attribution. The article
        is not used as a proof premise; the argument below uses the declared
        suppliers.
---

PDF p. 3: ` (1.5) `; PDF p. 13: ` §3.3 after Remark 3.27; (3.28) `

## Prerequisites

- [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)
- [lem-normaliser-linear-action-artin-tits-normalisers](item-lem-normaliser-linear-action-artin-tits-normalisers)
- [lem-normaliser-chamber-action-artin-tits-normalisers](item-lem-normaliser-chamber-action-artin-tits-normalisers)
- [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers)
- [prop-topological-orbit-interface-artin-tits-prerequisites](item-prop-topological-orbit-interface-artin-tits-prerequisites)
- [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)
- [math:thm-cg-tits-cone-finite-negativity-and-convexity](https://alphabetamath.cc/item/thm-cg-tits-cone-finite-negativity-and-convexity)


## Statement

Let $(W,S)$ be a finite-rank Coxeter system and $J\subseteq S$. Write $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$ and let $\mathcal X_J^{\mathbb C}$ be the relative complexified complement of [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers). The induced diagonal $N(W,J)$-action on $\mathcal X_J^{\mathbb C}$ is free and properly discontinuous: every point has an open neighbourhood disjoint from all its nonidentity translates.

The quotient map is a normal covering, meaning a covering whose deck transformations act transitively on every fibre. For $x\in\mathcal X_J^{\mathbb C}$ and its image $\overline x$, it induces the exact sequence $1\to\pi_1(\mathcal X_J^{\mathbb C},x)\to\pi_1(\mathcal X_J^{\mathbb C}/N(W,J),\overline x)\to N(W,J)\to1$. Fundamental groups use first-path-first multiplication; the last map sends a loop to the unique element taking $x$ to the endpoint of its lift starting at $x$.

## Facts & Assumptions


[F1] The relative complement is $X=(T\times T)\setminus\bigcup_{H\in\mathcal A}(H\times H)$, with its subspace topology. The relative cone is an intersection with $E$ and the relative hyperplanes are proper linear hyperplanes of $E$. [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F2] The full Tits cone is convex by clause (4) of [math:thm-cg-tits-cone-finite-negativity-and-convexity](https://alphabetamath.cc/item/thm-cg-tits-cone-finite-negativity-and-convexity), applied to the finite set $S$ and its canonical geometric representation. Under the simple-root basis identification $e_s=\alpha_s$, its dual action and union of translates of the closed fundamental chamber agree with those used here. The relative cone is $\mathrm{Cone}\cap E$, and $T$ is its interior in $E$, hence is open. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) The arrangement $\mathcal A$ is locally finite in $T$. [prop-relative-local-finiteness-artin-tits-normalisers](item-prop-relative-local-finiteness-artin-tits-normalisers)

[F3] The normaliser quotient acts linearly on $E$, preserving the relative cone. Every normaliser representative preserves $E$, and the kernel of this restricted action is $W_J$. The relative hyperplanes are the proper traces in $E$ of root hyperplanes. An invertible linear map preserving $T$ and permuting $\mathcal A$ restricts diagonally to a homeomorphism of $X$. [lem-normaliser-linear-action-artin-tits-normalisers](item-lem-normaliser-linear-action-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)

[F4] A chamber is a connected component of $T\setminus\bigcup\mathcal A$. The induced action on chambers is free. [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers) [lem-normaliser-chamber-action-artin-tits-normalisers](item-lem-normaliser-chamber-action-artin-tits-normalisers)

[F5] An action by homeomorphisms on a nonempty, path-connected, locally path-connected space with a disjoint-translate neighbourhood at every point has a regular orbit covering with deck group the acting group and the endpoint-lift exact sequence stated above. [prop-topological-orbit-interface-artin-tits-prerequisites](item-prop-topological-orbit-interface-artin-tits-prerequisites)

[F6] In the geometric representation, the root set is $\Phi=\{w\alpha_i:w\in W,\ i\in\Gamma_0\}$ and the contragredient action is $(wf)(v)=f(w^{-1}v)$. [def-coxeter-data-artin-tits-normalisers](item-def-coxeter-data-artin-tits-normalisers)

## Proof


**Given:** The finite-rank system and subset $J$ in the Statement. Put $E=\Theta_J$, $T=\mathrm{Cone}(J)^\circ$, and let $\mathcal A$ consist of the relative hyperplanes meeting $T$.

**Goal:** Prove the neighbourhood condition, covering assertion, and exact sequence.

**Given:** The objects in the Statement and Facts.

**Goal:** Verify the hypotheses of [F5] and apply it.

**Proof technique:** direct.

1.1 By [F1] and [F2], the relative cone is convex, being the intersection of the convex full Tits cone with the linear subspace $E$. If $a,b\in T$, choose $r>0$ such that $B_E(a,r)$ and $B_E(b,r)$ are contained in the relative cone. For $0\leq s\leq1$ and $\|h\|<r$, convexity puts $(1-s)(a+h)+s(b+h)=(1-s)a+sb+h$ in that cone. Thus the ball $B_E((1-s)a+sb,r)$ lies in the relative cone, so $(1-s)a+sb\in T$. Hence $T$ is convex. The coordinate face $C_J$, consisting of functionals vanishing on $J$ and strictly positive on $S\setminus J$, is a nonempty open subset of $E$ contained in the closed fundamental chamber and hence in the relative cone. Thus $T$ is nonempty. Local finiteness implies that the union of the hyperplanes in $T$ is relatively closed: near each point only finitely many need be considered. A nonempty open subset of a finite-dimensional real vector space cannot be covered by finitely many proper hyperplanes, so a locally finite family of such hyperplanes has nonempty complement in $T$. In particular $X$ is nonempty. The same local-finiteness argument shows that the deleted union in $T\times T$ is closed there; consequently $X$ is open in the Euclidean space $E\times E$ and is locally path-connected. These statements include the zero-dimensional case, where there are no proper hyperplanes. [F1, F2, F3]

1.2 Let $(u,v)\in X$. Choose a neighbourhood of $u$ meeting only finitely many members of $\mathcal A$. For sufficiently small positive $t$, $u+tv$ is in that neighbourhood and in $T$. If a hyperplane in the finite list contains $u$, it does not contain $v$, since $(u,v)\in X$; therefore it does not contain $u+tv$. For each remaining hyperplane in the list, at most one value of $t$ makes $u+tv$ lie on it. Choose $t$ avoiding those finitely many values. Then $u+tv$ belongs to a chamber $C$. [F1, F2, F4]

1.3 Let $w\in\operatorname{Norm}_W(W_J)$. For $\alpha=u\alpha_i\in\Phi$, the equality $w\alpha=(wu)\alpha_i$ shows $w\alpha\in\Phi$; applying this also to $w^{-1}$ gives $w\Phi=\Phi$. For $H_\alpha=\{f:f(\alpha)=0\}$, the dual formula gives $(wf)(w\alpha)=f(\alpha)$, hence $wH_\alpha=H_{w\alpha}$. Since $wE=E$, it follows that $w(H_\alpha\cap E)=H_{w\alpha}\cap E$, and a trace is proper exactly when its image is proper. Thus $w$ permutes the relative hyperplanes. The restricted linear homeomorphism preserves the relative cone and therefore its interior $T$, so it permutes precisely those relative hyperplanes meeting $T$, namely $\mathcal A$. Its diagonal map consequently restricts to a homeomorphism of $X$. This action factors through $N(W,J)$ because $W_J$ fixes $E$ pointwise. In particular the quotient acts by homeomorphisms on the arrangement complement in $T$ and permutes its connected components, the chambers. [F1, F3, F4, F6]

2.1 The arrangement complement in $T$ is open by step 1.1, and each of its components is open because sufficiently small Euclidean balls are connected. Hence $U=\{(a,b)\in X:a+tb\in C\}$ is an open neighbourhood of $(u,v)$. If $gU\cap U\ne\varnothing$, linearity gives $gC\cap C\ne\varnothing$. The homeomorphism $g$ permutes chambers, so $gC=C$; by chamber freeness $g$ is the identity. Thus every point has a disjoint-translate neighbourhood, which also proves freeness. [F3, F4, step 1.1, step 1.2, step 1.3]

2.2 Let $p,q\in X$. Their straight segment lies in the open convex set $T\times T$. By compactness of that segment and local finiteness in each coordinate, a sufficiently small open tubular neighbourhood of the segment lies in $T\times T$ and meets only finitely many sets $H\times H$. It can be chosen convex. For each such $H$, the set of intermediate points $z$ for which either segment $[p,z]$ or $[z,q]$ meets $H\times H$ is contained in the union of the affine spans of $H\times H$ with $p$ and with $q$. Because $p,q\notin H\times H$ and $H\times H$ has codimension two, these spans are proper affine subspaces. A finite union of proper affine subspaces cannot cover the nonempty tube. Choose $z$ outside that union. Both segments remain in the tube and avoid every deleted set, so they form a path in $X$ from $p$ to $q$. If $E$ has dimension zero, $X$ is a point and the conclusion is immediate. [F1, F2, step 1.1]

3.1 Steps 1.1, 2.1 and 2.2 verify all hypotheses of [F5]. Applying it gives the normal covering, identifies its deck group with $N(W,J)$, and yields the exact sequence with the stated endpoint-lift map. [F5, step 1.1, step 2.1, step 2.2] ∎

## Source notes

The article is cited for attribution of the retained claim. The local argument above derives the covering hypotheses from the declared suppliers and does not use the article's assertion as its own proof.
