---
id: lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
kind: lemma
title: Seifert surfaces of the same link are connected by arc surgeries
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - def-one-variable-alexander-module-of-an-oriented-link
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-classification-of-connected-covering-spaces
  - def-deck-transformation-and-deck-group
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
  - thm-transversality-homotopy-theorem
  - thm-transverse-preimage-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - thm-isotopy-extension
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-linking-number-equals-signed-intersection
  - lem-total-linking-equals-intersection-with-link-seifert-surface
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
      url: https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf
      locator: Chapter 8, Definition 8.1 and Theorem 8.2, printed pp. 79–81; the
        complete source section was inspected in the full 213-page book PDF.
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---
## Statement

Assume the full Axiom of Choice. Let $L$ be a nonempty smooth oriented link in the oriented $3$-sphere, and let $F_0,F_1$ be connected compact smooth oriented embedded surfaces with the same oriented boundary $L$. There is a finite sequence of such spanning surfaces from $F_0$ to $F_1$ in which each consecutive pair differs either by an ambient isotopy fixed on $L$ or by one embedded arc surgery or its reverse.

## Statement references

[Lickorish, Theorem 8.2, printed pp. 79–81](https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf)

[[def-oriented-link-in-s-three-and-ambient-isotopy|The oriented link and ambient three-sphere convention]]

[Hirsch, Chapter 8, §1, Theorem 1.3, printed p. 180](https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf)

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link $L\subset S^3$, and connected compact oriented spanning surfaces $F_0,F_1$ with boundary $L$.

[A1] Full AC implies dependent choice and countable choice. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The one-variable cover of $S^3\setminus L$ is the connected cover classified by $\ker\varphi$, where $\varphi$ is the total-linking homomorphism and sends every positive meridian to $1$. [[def-one-variable-alexander-module-of-an-oriented-link]]

[F2] The proofs of [[thm-transversality-homotopy-theorem]] and [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]] construct a smooth parameter family $\mathcal G$ centered at the original map, fixed near a specified closed good region, and with bad parameters forming a null set. In step 1.1 apply that construction on $\operatorname{Int}F_1$ with target $S^3\setminus L$ and closed embedded target submanifold $F_0\setminus L$, protecting a closed punctured collar of $L$ on which the surfaces are disjoint. The family is unchanged on a smaller collar, so it extends smoothly over $F_1$ by the original embedding. Its varying part has compact support. Smooth dependence on the parameter therefore gives convergence to the original map in $C^1(F_1)$; good parameters can be chosen arbitrarily near zero. This supplies the small relative perturbation used below, rather than assuming smallness in the cited Statements. The dimension-general isotopy extension theorem applies to a compact smooth surface, possibly with boundary, embedded in the boundaryless three-sphere. Its velocity construction fixes $L$ when the prescribed surface velocity is zero there. Smooth tubular neighborhoods exist for the link. [[thm-isotopy-extension]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[thm-transverse-preimage-theorem]]

[F3] A compact smooth manifold with corners has a finite triangulation relative to its already triangulated boundary faces. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

[F4] The arc-surgery operation removes two disks and replaces them with the lateral annulus of an embedded product cylinder, leaving the boundary link fixed. [[def-seifert-surface-arc-surgery]]

[F5] For a compact locally contractible subset of $S^3$, Alexander duality identifies its second integral cohomology with the reduced zeroth homology of its complement. [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]]

[F6] In a closed tubular disk bundle $N(L)$ with normalized fibre radius $|v|\le1$, the map $H_s(x,v)=(x,((1-s)|v|+s)v/|v|)$ on $0<|v|\le1$, glued to the identity outside $N(L)$, is a deformation retraction from $S^3\setminus L$ onto the compact exterior $S^3\setminus\operatorname{Int}N(L)$. It is defined because the link itself, the zero section, is deleted ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

[F7] For either connected spanning surface $F_i$, every transverse loop in the open complement has signed intersection with $F_i$ equal to its total-linking value; a positive meridian chosen just outside $N(L)$ intersects the trimmed surface $G_i$ once ([[lem-total-linking-equals-intersection-with-link-seifert-surface]]).

[F8] The open link complement is path-connected, locally path-connected and semilocally simply connected; its deformation retract $X$ is a smooth manifold with boundary and has the same local properties. Connected covers of $X$ are classified by subgroups of $\pi_1(X)$, and covers classified by the same subgroup are isomorphic ([[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]], [[thm-classification-of-connected-covering-spaces]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Given:** Full AC, the oriented link $L$, and $F_0,F_1$ as in the Statement.

1.1 Here is the boundary-relative arrangement required in [F2]. Frame the normal disks of each link component $K$ by the inward tangent of $F_0$ and its oriented normal. The inward ray of $F_1$ has winding zero relative to this framing. Indeed a parallel copy $K_i$ lying just inside either $F_i$ satisfies $\operatorname{lk}(K,K_i)=-\sum_{J\ne K}\operatorname{lk}(K,J)$: the surface obtained by removing the collar at $K$ is disjoint from $K$ and has boundary $K_i$ together with the other link components, so linking with that boundary is zero. The difference of these two self-linkings is the ray winding: in $S^1\times(D^2\setminus0)$ the difference of the two sections is their angular degree times the positive meridian, which has linking one. Thus the angular difference has a smooth real lift $\theta(k)$. In the tubular coordinates the maps $(k,z)\mapsto(k,\exp(it\chi(|z|)(\delta-\theta(k)))z)$, where $\chi=1$ near zero and is zero near the tube boundary, give an ambient isotopy fixing $L$; their inverses use the negative angle. Apply it to $F_1$, with a fixed $0<\delta<\pi$. Its inward ray is now everywhere at angle $\delta$ from that of $F_0$. Compactness and the smooth collar expansions make the two surfaces disjoint on a common sufficiently small punctured collar of $L$. On the remaining compact part, choose a generic sufficiently $C^1$-small perturbation of $F_1$ transverse to $F_0$, fixed on these collars, by [F2]. The straight small perturbation path consists of embeddings: locally this follows by projecting to the tangent planes and the inverse function theorem, and away from a fixed diagonal neighborhood compactness gives a positive separation between distinct source points. Extend this surface isotopy ambiently by [F2]; its velocity is zero on $L$, so the ambient flow fixes $L$. The remaining intersection is a compact transverse one-manifold, hence a finite union of circles. Choose a closed tubular neighborhood $N(L)$ sufficiently small that the trimmed surfaces $G_i=F_i\cap X$, where $X=S^3\setminus\operatorname{Int}N(L)$, have disjoint boundary curves on $\partial X$. [A1, F2, given, construct]


2.1 By [F6], the inclusion of $X$ into $S^3\setminus L$ is a deformation-retraction equivalence, so the total-linking character $\varphi$ of [F1] restricts to $\pi_1(X)$. By [F8], $X$ is path-connected, locally path-connected and semilocally simply connected, so the covering classification applies. For either connected two-sided surface $G_i$, its positive and negative collar regions are each connected, and every component of $X\setminus G_i$ has frontier in $G_i$; therefore there is at most one component on each side and at most two in total. A positive meridian $\mu_j\subset\operatorname{Int}X$ has signed intersection $\mu_j\cdot G_i=1$ by [F7], so $G_i$ does not separate $X$, since every closed loop has algebraic intersection zero with a separating surface. Thus each cut exterior is connected. Cutting $X$ along $G_0$ and stacking the resulting cobordism $Y$ over the integers, gluing the positive face of one copy to the negative face of the next, gives the connected cover classified by $\ker\varphi$: a lifted loop changes its index by its algebraic intersection with $G_0$, which equals its total-linking value by [F7]. The same construction using $G_1$ therefore gives the same cover $p:\widetilde X\to X$ by [F1] and [F8]. Write $P_n=t^nP_0$ for the $G_0$ lifts and $Q_r=t^rQ_0$ for the $G_1$ lifts. The closed slabs $Y_n$ between $P_n$ and $P_{n+1}$ have disjoint interiors, and $p$ is injective on $Y_n\setminus P_{n+1}$. The second stacking description shows that $Q_0$ separates $\widetilde X$ into a negative and a positive component $C_-,C_+$, with $Q_r\subset C_-$ precisely for $r<0$. Indeed the negative slabs in the $G_1$ stacking form $C_-$ and the positive slabs form $C_+$. Thus the slabs and both half-stacks are connected. Compactness of $Q_0$ and local finiteness of the slabs imply that $Q_0$ meets only finitely many $P_n$. [A1, F1, F6, F7, F8, step 1.1, construct]

3.1 Suppose there is an interior intersection and choose the largest $n$ with $Q_0\cap P_n\ne\varnothing$. The positive end is the same in the two stackings, since a positive meridian increases both indices. Thus every higher face $P_j$, $j>n$, lies on the positive side $C_+$ of $Q_0$. Choose a component of $C_-\cap\operatorname{Int}Y_n$ incident to a curve of $Q_0\cap P_n$ and let $\widetilde M$ be its closure. It misses $P_{n+1}$, so lies in the half-open slab on which $p$ is injective. No other $Q_r$ cuts it. For $r>0$, $Q_r\subset C_+$. For $r<0$, maximality implies $Q_r\cap P_n=\varnothing$, since such an intersection would translate to $Q_0\cap P_{n-r}$. But translating a point of $Q_0\cap P_n$ shows that $Q_r$ meets $P_{n+r}$, strictly below $P_n$. The connected $Q_r$, disjoint from the separating cut face $P_n$, therefore stays entirely below that face and misses $Y_n$. Consequently $M=p(\widetilde M)$ is the closure of a component of $X\setminus(G_0\cup G_1)$, and restoring the link collars gives a compact three-manifold with corners abutting each surface from only one side. At least one interior intersection curve belongs to its boundary. [F1, F2, step 2.1, choose, construct]

4.1 Triangulate the finitely many seam circles and collar edges, extend these triangulations over the compact surface faces by the two-dimensional case of [F3], and then triangulate this $M$ relative to its faces $\partial_iM=M\cap F_i$ by [F3]. In the second barycentric subdivision let $A$ be the simplicial neighborhood of $\partial_0M$ together with the primal one-skeleton, and put $B=\overline{M\setminus A}$. In each tetrahedron the part left outside that neighborhood is the cone from its barycenter towards the barycenters of its triangular faces not on $\partial_0M$; gluing these pieces exhibits $B$ as a neighborhood of the dual graph, rooted on its boundary disks $B\cap F_1$. Replace the face $\partial_0M$ of $F_0$ by $T=\overline{\partial A\setminus\partial_0M}$. For $F_1$ remove only $B\cap F_1$, not its entire $M$-face, and insert $\overline{\partial B\setminus(B\cap F_1)}$. These are allowed finite moves: push $F_0$ through the initial face collar and then through a neighborhood of the primal graph; push $F_1$ through a neighborhood of the dual graph rooted on $B\cap F_1$. For each graph take a spanning forest rooted on its attaching face. Crossing a forest edge together with its new vertex is a ball isotopy. Every remaining edge attaches a product solid cylinder to two disks of the current surface, exactly [F4]. The graphs have finitely many edges and each root lies on the current surface; all feet approach from the selected side in $M$. Thus orientation and connectedness of each spanning surface are preserved. All moves are relative to $L$: in its product collar taper every displacement to zero at the core $L$, using the normal disk radial coordinate, and round the new collar arcs to join $L$ with the shifted frontier. The graphs and their surgery feet are away from $L$. This changes only a collar and is an isotopy fixing its core. [F2, F3, F4, step 3.1, construct]

5.1 The two modified surfaces coincide on $T$, including the part $A\cap F_1$ of the old second face, and, before rounding, retain their old portions outside $M$. Perform the following rounding in arbitrarily small bicollars straddling $\partial M$, so the old intersection circles are not pointwise protected. Push the two copies of $T$ to opposite sides in its product neighborhood, with the collar taper just described. At an old intersection circle the normal cross-section consists of two coordinate axes bounding the selected quadrant $M$; the replacement rounds the quadrant corner, and the two small opposite pushes are disjoint there. Thus every old intersection circle incident to $M$ disappears. All other old circles are untouched, and compact separation away from these corners and the common frontier lets the pushes be chosen small enough to create no new intersection. The number of interior circles strictly decreases. Repeat steps 2.1–4.1 while it is positive. The process terminates in finitely many moves with disjoint interiors, always fixing $L$. [F2, F3, F4, step 3.1, step 4.1, construct]

6.1 In this last case their union, with the orientation on the second surface reversed and their common link collars rounded, is a connected embedded closed oriented surface $\Sigma$ in $S^3$. Its second integral cohomology is $\mathbb Z$, so [F5] says its complement has exactly two components. The local two-sided surface charts show that the closure of either component has the whole $\Sigma$ as boundary: each boundary subset is open and closed in the connected surface, and each side occurs in every chart. Choose one such closure $M$. Its faces are the whole of the two original surfaces, with the small common link collar restored. Apply the construction of $A$ and $B$ once more. Both modified surfaces are now the common replacement surface $T=\overline{\partial A\setminus\partial_0M}$ (up to the opposite small parallel pushes), so they are ambient isotopic through that product neighborhood, fixed on $L$. This final step does not assert that the original disjoint surfaces were parallel. Concatenate the finite moves from $F_0$ to its last modified surface, this last isotopy, and the reversed finite moves from $F_1$ to its last modified surface. All are ambient isotopies fixing $L$, embedded arc surgeries, or their reverses, and all spanning surfaces are connected and oriented. This is the required finite sequence. [F3, F4, F5, step 4.1, step 5.1, construct] ∎
