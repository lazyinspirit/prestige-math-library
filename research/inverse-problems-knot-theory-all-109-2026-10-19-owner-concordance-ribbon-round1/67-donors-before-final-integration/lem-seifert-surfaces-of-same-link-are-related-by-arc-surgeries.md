---
id: lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
kind: lemma
title: Seifert surfaces of the same link are connected by arc surgeries
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-one-variable-alexander-module-of-an-oriented-link
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-classification-of-connected-covering-spaces
  - def-deck-transformation-and-deck-group
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - thm-transversality-homotopy-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - lem-isotopy-extension-for-a-compact-source-with-boundary
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - def-seifert-surface-arc-surgery
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts
        in Mathematics 175, Springer (1997)
      url: https://link.springer.com/chapter/10.1007/978-1-4612-0691-0_9
      locator: Printed Chapter 8, Definition 8.1 and Theorem 8.2, printed pp. 79–81;
        complete argument read in full-text PDF copy; publisher chapter record
        inspected.
---
## Statement

Assume the full Axiom of Choice. Let $L$ be a nonempty smooth oriented link in the oriented $3$-sphere, and let $F_0,F_1$ be connected compact smooth oriented embedded surfaces with the same oriented boundary $L$. There is a finite sequence of such spanning surfaces from $F_0$ to $F_1$ in which each consecutive pair differs either by an ambient isotopy fixed on $L$ or by one embedded arc surgery or its reverse.

## Statement references

[Lickorish, Theorem 8.2, printed pp. 79–81](https://link.springer.com/chapter/10.1007/978-1-4612-0691-0_9)

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link $L\subset S^3$, and connected compact oriented spanning surfaces $F_0,F_1$ with boundary $L$.

[A1] Full AC implies dependent choice and countable choice. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The one-variable cover of $S^3\setminus L$ is the connected cover classified by the kernel of the total-linking homomorphism, which sends every positive meridian to $1$. [[def-one-variable-alexander-module-of-an-oriented-link]]

[F2] Relative transversality and isotopy extension allow the surfaces to be arranged with distinct collar rays along their fixed common boundary $L$ and transverse interior intersection. The resulting interior intersections are finitely many closed curves. [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]], [[lem-isotopy-extension-for-a-compact-source-with-boundary]]

[F3] A compact smooth manifold with corners has a finite triangulation relative to its already triangulated boundary faces. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[F4] The arc-surgery operation removes two disks and replaces them with the lateral annulus of an embedded product cylinder, leaving the boundary link fixed. [[def-seifert-surface-arc-surgery]]

[F5] For a compact locally contractible subset of $S^3$, Alexander duality identifies its second integral cohomology with the reduced zeroth homology of its complement. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

## Proof

**Given:** Full AC, the oriented link $L$, and $F_0,F_1$ as in the Statement.

1.1 First arrange the two surfaces by [F2]. Near each component of $L$, choose its normal disk coordinates and move the inward collar direction of $F_1$ to a nearby ray distinct from that of $F_0$, fixing the disk center $L$. Away from these collars make the surfaces transverse. Their intersection is now $L$ together with a compact transverse one-manifold in their interiors. A compact one-manifold has finitely many components, each a circle. These adjustments are isotopies fixing $L$ and do not affect the required equivalence. Trim off a small open tubular neighborhood of $L$ and denote the compact exterior by $X$ and the trimmed surfaces by $G_0,G_1$. They have disjoint boundary curves on each boundary torus of $X$. [A1, F2, given, construct]

2.1 Cut $X$ along $G_0$ and stack the resulting cobordism $Y$ over the integers, gluing the positive face of one copy to the negative face of the next. A lifted loop changes its index by its algebraic intersection with $G_0$, which is its total linking number with $L$. The same construction using $G_1$ therefore gives the same cover $p:\widetilde X\to X$ by [F1] and the classification of covering spaces. Write $P_n=t^nP_0$ for the $G_0$ lifts and $Q_r=t^rQ_0$ for the $G_1$ lifts. The closed slabs $Y_n$ between $P_n$ and $P_{n+1}$ have disjoint interiors, and $p$ is injective on $Y_n\setminus P_{n+1}$. The second stacking description shows that $Q_0$ separates $\widetilde X$ into a negative and a positive component $C_-,C_+$, with $Q_r\subset C_-$ precisely for $r<0$. Indeed the negative slabs in the $G_1$ stacking form $C_-$ and the positive slabs form $C_+$. Both surfaces are connected, so the cut exteriors and these half-stacks are connected. Compactness of $Q_0$ and local finiteness of the slabs imply that $Q_0$ meets only finitely many $P_n$. [A1, F1, step 1.1, construct]

3.1 Suppose there is an interior intersection and choose the largest $n$ with $Q_0\cap P_n\ne\varnothing$. All the slabs strictly beyond $Y_n$ miss $Q_0$ and lie in $C_+$; the positive end is the same in the two stacking descriptions, since each positive meridian increases both sheet indices. In particular $P_{n+1}$ is disjoint from $\overline{C_-}$. Choose a component of $C_-\cap\operatorname{Int}Y_n$ adjacent to a curve of $Q_0\cap P_n$, and let $\widetilde M$ be its closure. Then $\widetilde M$ is contained in $Y_n\setminus P_{n+1}$, so it projects injectively. It abuts $P_n$ and $Q_0$ only from their selected sides. No other $Q_r$ cuts this region. For $r>0$ this follows from $Q_r\subset C_+$. For $r<0$, maximality gives $Q_r\cap P_n=\varnothing$, since otherwise $Q_0\cap P_{n-r}\ne\varnothing$. The connected surface $Q_r$, which lies on the negative side of $Q_0$, is therefore disjoint from the connected slab sector incident to $P_n$: it cannot enter that sector through $Q_0$, through the upper face $P_{n+1}\subset C_+$, or through $P_n$, and its boundary is in the lower-index boundary collars, not this sector. To check the latter assertion, use the real meridional coordinate on each lifted boundary torus, normalized so that $t$ adds $1$: the connected $Q_0$, which meets $P_n$ and misses every higher cut face, has all its boundary curves below the $P_{n+1}$ boundary curves. Translating by an integer $r<0$ puts the boundary of $Q_r$ below the $P_n$ boundary curves. A connected $Q_r$ meeting the sector would therefore have to cross $P_n$ on its way to its boundary, already excluded. Thus $M=p(\widetilde M)$ is the closure of a component of $X\setminus(G_0\cup G_1)$. Restore the collars at $L$ when necessary. Locally at an intersection curve it is a quadrant, hence a compact three-manifold with corners, lying on one side of each surface it meets. It has at least one interior intersection curve in its boundary. [F1, F2, step 2.1, choose, construct]

4.1 Here is the finite modification associated to such a one-sided region $M$. Write its two surface faces as $\partial_0M=M\cap F_0$ and $\partial_1M=M\cap F_1$; the small link collars are understood throughout. Triangulate $M$ relative to these faces by [F3]. In the second barycentric subdivision take $A$ to be a regular neighborhood of $\partial_0M$ together with the entire primal one-skeleton, and let $B=\overline{M\setminus A}$. The latter is a regular neighborhood, relative to its part on $\partial_1M$, of the dual graph: its vertices are the tetrahedron barycenters and its edges pass through the triangle barycenters of faces not belonging to $\partial_0M$. The common frontier $S=A\cap B$ is a surface. Starting with $F_0$, move its $\partial_0M$ face through its collar and then over a neighborhood of the primal graph, replacing that face by $\overline{\partial A\setminus\partial_0M}$. Starting with $F_1$, do the analogous replacement across $B$ and its dual graph. Each is a finite succession of allowed moves: take a rooted spanning forest of the graph relative to the attaching face; extending over a forest edge and its new vertex is a ball isotopy, and each remaining edge attaches a solid cylinder to two disks on the current surface, precisely the arc surgery [F4]. All cylinders approach from the same side because they lie in $M$. The construction is relative to the collars and preserves orientability. Every intermediate surface remains connected, since an isotopy or an orientable one-handle attachment to a connected surface preserves connectedness. [F2, F3, F4, step 3.1, construct]

5.1 The two new faces agree on the common frontier $S$. Push one slightly toward $A$ and the other toward $B$, using its product neighborhood. They are then disjoint in $M$. Outside a small neighborhood of $M$ the surfaces have not changed. At the old corners the local quadrant model rounds the new faces on opposite sides; thus the old intersection curves incident to $M$ disappear, while every other old intersection curve is unchanged and no new one is created. In particular the number of interior intersection curves strictly decreases. If $M$ meets $L$, move the shifted boundary back along the fixed link collar; this isotopy is supported near $L$ and leaves every interior intersection curve untouched. Repeat steps 2.1–4.1 for each remaining nonempty intersection. The positive integer count strictly decreases, so after finitely many such modifications the two surfaces have disjoint interiors. [F2, F3, F4, step 3.1, step 4.1, construct]

6.1 In this last case their union, with the orientation on the second surface reversed and their common link collars rounded, is a connected embedded closed oriented surface $\Sigma$ in $S^3$. Its second integral cohomology is $\mathbb Z$, so [F5] says its complement has exactly two components. The local two-sided surface charts show that the closure of either component has the whole $\Sigma$ as boundary: each boundary subset is open and closed in the connected surface, and each side occurs in every chart. Choose one such closure $M$. Its faces are the whole of the two original surfaces, with the small common link collar restored. Apply the construction of $A$ and $B$ once more. Both modified surfaces are now the common frontier $S$ (up to the opposite small parallel pushes), so they are ambient isotopic through that product neighborhood, fixed on $L$. This final step does not assert that the original disjoint surfaces were parallel. Concatenate the finite moves from $F_0$ to its last modified surface, this last isotopy, and the reversed finite moves from $F_1$ to its last modified surface. All are ambient isotopies fixing $L$, embedded arc surgeries, or their reverses, and all spanning surfaces are connected and oriented. This is the required finite sequence. [F3, F4, F5, step 4.1, step 5.1, construct] ∎
