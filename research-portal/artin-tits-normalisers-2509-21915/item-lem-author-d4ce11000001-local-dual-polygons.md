---
title: The dual face cycles are the D4 atomic polygons
status: draft
research_item: lem-author-d4ce11000001-local-dual-polygons
dependency_level: 23
---

## Prerequisites

- [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)
- [ex-d4-atomic-relations-artin-tits-normalisers](item-ex-d4-atomic-relations-artin-tits-normalisers)
- [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells)
- [thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)


## Statement

Every dual face in the seven-plane spherical dual decomposition is a square or a hexagon. Its two boundary arcs from any chosen chamber to the opposite chamber are the lifted atomic relation at the two incident chamber facets. Conversely every lifted atomic relation gives one of these cyclic faces, up to the choice of starting point and reversal.

## Statement references

[lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere)

[ex-d4-atomic-relations-artin-tits-normalisers](item-ex-d4-atomic-relations-artin-tits-normalisers)

[lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells)

[thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites)

## Facts & Assumptions

[F1] [lem-author-d4ce11000001-flag-dual-sphere](item-lem-author-d4ce11000001-flag-dual-sphere) identifies dual faces with spherical arrangement vertices and reads their boundaries in cyclic chamber order.

[F2] [lem-author-d4ce11000001-spherical-arrangement-cells](item-lem-author-d4ce11000001-spherical-arrangement-cells) supplies the spherical cellulation of the seven planes with forms $X,Y,Z,X+Y,X+Z,Y+Z,X+Y+Z$. Its arrangement is the relative $D_4$ arrangement for central $J=\{2\}$, in coordinates $(X,Y,Z)=(f(\alpha_1),f(\alpha_3),f(\alpha_4))$ on $E_J=\{f:f(\alpha_2)=0\}$; the identification is the local restricted-root calculation used in that supplier.

[F3] Apply [thm-relative-chamber-labelling-input-artin-tits-prerequisites](item-thm-relative-chamber-labelling-input-artin-tits-prerequisites) to the finite-rank $D_4$ system with $S=\{1,2,3,4\}$ and central $J=\{2\}$. Every relative chamber is $xC_I$, labelled by $(x,I)$ with $W_Jx=xW_I$ and $x$ of minimum Coxeter length in $xW_I$. Here $E_I=\{f:f(\alpha_i)=0\ (i\in I)\}$ and $C_I=\{f\in E_I:f(\alpha_s)>0\ (s\notin I)\}$. Thus the coordinates outside $I$ are independent positive coordinates on $C_I$, and $x$ acts by an invertible linear map.

[F4] [ex-d4-atomic-relations-artin-tits-normalisers](item-ex-d4-atomic-relations-artin-tits-normalisers), Verification steps 2.1, 3.1 and 3.1, proves the generic-face/support correspondence and the two opposite atomic arcs at every labelled chamber: for a singleton $I$ and distinct $a,b\notin I$, put $T=I\cup\{a,b\}$. The common facet ray is $xC_T$; the hyperplanes containing its supporting line give a normal slice with two lines in type $A_1^3$ and three in type $A_3$. Its two opposite chamber arcs are exactly the lifted atomic relation.

## Proof

**Given:** The data in the Statement and the exact supplier facts above.

**Goal:** Establish the Statement.

1.1 At an arrangement vertex $v$, the supporting line $\mathbb Rv$ is a codimension-two flat by [F2]. Choose a chamber incident to $v$ and write it as $xC_I$ using [F3]. It is three-dimensional, so $4-|I|=3$ and $I$ is a singleton. Its closure is the image of the nonnegative orthant in the three coordinates outside $I$. Each arrangement plane through $v$ supports this cone, because its defining form has constant sign in the chamber. There are at least two distinct such supporting planes. In a three-dimensional orthant a nonzero point with only one zero coordinate lies on only one supporting plane: a nonnegative linear form vanishing there can involve only that zero coordinate. Consequently $x^{-1}v$ has exactly two zero coordinates, indexed by distinct $a,b\notin I$. The ray $\mathbb R_{>0}v=xC_T$, with $T=I\cup\{a,b\}$, is therefore the relative interior of the common face of exactly those two coordinate facets. This identifies the chosen incident facets with an atomic pair. [F2, F3]

2.1 Apply [F4] to this labelled chamber and atomic pair. A sufficiently small transverse slice at $v$ sees precisely the hyperplanes containing $\mathbb Rv$, with $m=2$ or $m=3$ lines. Its $2m$ sectors list the incident chambers in cyclic order. By [F1] this is the dual face boundary, so it is a square or a hexagon; by [F4] its two opposite arcs are exactly the lifted atomic relation. The incident chamber in step 1.1 was arbitrary, so this conclusion holds from every chosen boundary chamber. [F1, F4, step 1.1]

3.1 Conversely, [F4] associates any lifted atomic relation at a labelled chamber $xC_I$ to the nonzero ray $xC_T$ where its two coordinate facets meet. The two supporting arrangement planes meet in its supporting line, so by [F2] the ray direction is an arrangement vertex. Its local chamber cycle is the dual face boundary by [F1], with opposite atomic arcs as in step 2.1. Changing the starting chamber or reversing the arcs changes the written relation, not the face being filled. This proves both assertions. [F1, F2, F3, F4, step 2.1] ∎
