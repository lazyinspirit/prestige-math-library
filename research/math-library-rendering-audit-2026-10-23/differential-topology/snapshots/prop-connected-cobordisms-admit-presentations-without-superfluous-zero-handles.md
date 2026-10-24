---
id: prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles
kind: proposition
title: "Connected cobordisms admit presentations without superfluous zero handles"
status: published
origin: pipeline
dependency_level: 6
deps: [def-handle-decomposition-relative-to-the-incoming-boundary, thm-morse-functions-and-handle-decompositions-correspond, thm-self-indexing-morse-function-existence, lem-handles-of-equal-index-can-be-attached-on-one-level, cor-index-zero-handles-create-components, lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, thm-collar-neighborhood-theorem, def-countable-choice, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "self-indexed presentation, spanning tree of the one-handles, disk absorption"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty compact connected triad with
$M_0\ne\varnothing$ connected. Then $W$ admits a handle decomposition relative
to $M_0$ with no $0$-handles. If $M_0$ has $k$ components the same argument
leaves no $0$-handles and begins with $k-1$ connecting $1$-handles; if
$M_0=\varnothing$, exactly the $0$-handles needed to create the components of
$W$ remain, one per component.

## Facts & Assumptions

[F1] [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] supplies an initial adapted excellent pair. [[thm-self-indexing-morse-function-existence]] and [[thm-morse-functions-and-handle-decompositions-correspond]]: Assume $\mathrm{AC}_\omega$. An adapted Morse function on the compact triad may be taken self-indexed, so that all critical points of index $k$ lie at one level and the levels increase with $k$; the associated decomposition has all $0$-handles attached at the first level, then all $1$-handles at the next, and so on, one handle per critical point.

[F2] [[cor-index-zero-handles-create-components]]: a $0$-handle attaches along the empty set and adds one disjoint $n$-disk component.

[F3] [[lem-handles-of-equal-index-can-be-attached-on-one-level]]: if a common critical level contains no critical point of another index, handles of equal index attached at one level may be regarded as attached simultaneously or successively in any order, with the same result up to diffeomorphism relative to the lower stage; in particular the $1$-handles may be reordered freely.

[F4] [[lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum]]: a $1$-handle whose attaching disks lie in two distinct manifold components of the lower stage performs their boundary connected sum.

[F5] [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]]: for a connected manifold $N$ with nonempty boundary and an embedded disk $D\subseteq\partial N$, the boundary connected sum $N\natural D^n$ is diffeomorphic to $N$ by a diffeomorphism equal to the identity outside a collar neighbourhood of $D$.

[F6] [[def-handle-decomposition-relative-to-the-incoming-boundary]]: a decomposition relative to $M_0$ is an ordered list of handles attached to the successive stages, starting from the collar $M_0\times[0,\varepsilon]$.

[F7] [[thm-collar-neighborhood-theorem]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

[F8] [[def-countable-choice]]: $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

[A1] **Connectivity of the first stages.** After the $0$-handles and $1$-handles have been attached, the stage $W_1$ is connected whenever $W$ is connected: a handle of index $k\ge2$ attaches along $S^{k-1}\times D^{n-k}$, whose first factor is a sphere of dimension $k-1\ge1$ and hence connected, so such a handle cannot join two components; the handle bodies themselves are connected. Consequently the graph whose vertices are the components of the collar $\sqcup$ $0$-handles and whose edges are the $1$-handles is connected, and it has a spanning tree.

## Proof

**Given:** The nonempty compact connected triad $(W;M_0,M_1)$, a self-indexed presentation of [F1], and the resulting graph of [A1].

1.1 Present $W$ with all $0$-handles first and all $1$-handles next, by [F1]. Let $m_0$ be the number of $0$-handles and let $k$ be the number of components of $M_0$ ($k=0$ if $M_0=\varnothing$). After the $0$-handle stage the first stage is the disjoint union of the $k$ collar components $M_0^{(1)}\times[0,\varepsilon],\dots,M_0^{(k)}\times[0,\varepsilon]$ and $m_0$ disjoint $n$-disks, hence it has $k+m_0$ components; by [F2] each disk is created by exactly one $0$-handle. [F1, F2, F6, given, algebra]

2.1 By [A1] the graph $G$ of components and $1$-handles is connected; choose a spanning tree $T$ of $G$. Reorder the $1$-handles by [F3] so that the tree edges come first, in an order in which each new edge joins the component accumulated so far to one further component of the first stage; this is possible by rooting the tree at one vertex and listing the edges in the order in which a breadth-first search reaches new vertices. [F3, A1, step 1.1, choose]

3.1 Process the tree edges in that order. Each processed $1$-handle joins two distinct components and realizes a boundary connected sum of them by [F4]. If one of the two components is a new bare $0$-handle, that is the $n$-disk $D^n$ created by that handle, then the summand $D^n$ is absorbed by [F5]: the stage is diffeomorphic to the other component, so the $0$-handle and this $1$-handle may be deleted from the presentation without changing the diffeomorphism type relative to $M_0$. If neither component is a bare $0$-handle, the sum is a genuine boundary connected sum of two components, each either a collar component or a component already obtained by a previous sum; such a step is retained. Applying the two cases successively to all edges of the tree makes the first stage connected, and the retained edges are exactly the $1$-handles that join two components neither of which is a bare $0$-handle. [F4, F5, F8, step 2.1, construct]

4.1 If $k>0$, root the tree at a collar vertex. Every bare disk is then a new vertex reached from the accumulated component and is absorbed with its incident tree edge. Thus precisely $m_0$ zero-handles and $m_0$ tree edges disappear, leaving $(k+m_0-1)-m_0=k-1$ connecting edges between collar components. If $k=0$, root at one disk and retain it; precisely the other $m_0-1$ disks and tree edges are absorbed, leaving one zero-handle and no tree edge. Each absorption fixes the incoming face; transport every remaining attaching map through the stage diffeomorphism rather than assuming its support is disjoint from later handles. [F4, F5, F6, step 2.1, step 3.1, algebra]

5.1 The three cases. If $M_0\ne\varnothing$ is connected, then $k=1$, all $m_0$ disks are deleted, no edge is retained, and the resulting decomposition of $W$ relative to $M_0$ has no $0$-handles. If $M_0$ has $k\ge2$ components, all $m_0$ disks are deleted, no $0$-handle remains, and after reordering the retained $1$-handles first (legal by [F3]) the decomposition begins with $k-1$ $1$-handles that connect the $k$ collar components into one boundary sum. If $M_0=\varnothing$, then $k=0$ and every component of the first stage is a bare disk: every processed edge deletes one disk, so $m_0-1$ disks disappear and exactly one $0$-handle remains, which is the number of components of the connected manifold $W$; the claim that exactly the needed $0$-handles remain is the statement $m_0-(m_0-1)=1$. [F2, F3, F4, step 4.1, algebra]

6.1 Conclusion. In every case the presentation obtained by deleting the absorbed $0$-handles and $1$-handles and reordering the retained $1$-handles is a handle decomposition of $W$ relative to $M_0$ (still with one handle per remaining handle body, all indices preserved) with the asserted number of $0$-handles, and with $k-1$ connecting $1$-handles coming first when $M_0$ has $k$ components. This is Wall's normalization of a presentation relative to a nonempty incoming boundary; the argument uses the collar, handle and absorption suppliers, and through them $\mathrm{AC}_\omega$. [F1, F2, F6, F7, step 5.1, algebra] ∎
