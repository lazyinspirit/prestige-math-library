---
id: ex-genus-two-orientable-surface-polygonal-schema
kind: example
title: "Genus-two orientable polygon"
status: published
origin: pipeline
deps: [def-polygonal-schema-and-edge-pairing, def-quotient-topology, lem-polygonal-schema-reduction-moves, ex-torus-polygonal-schema, def-connected-sum-of-compact-surfaces, def-euler-characteristic-of-a-finite-cw-complex, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6 §6.2, printed pp.89–96"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3 Theorem 2, printed pp.3–5"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

The octagon schema of [[def-polygonal-schema-and-edge-pairing]] with boundary
word $a\,b\,a^{-1}b^{-1}c\,d\,c^{-1}d^{-1}$ realizes the connected sum of two
tori ([[def-connected-sum-of-compact-surfaces]]). It is orientable and has
$V=1$, $E=4$, $F=1$, hence $\chi=-2$
([[def-euler-characteristic-of-a-finite-cw-complex]]). This finite
cut-and-paste computation uses no choice axiom.

## Facts & Assumptions

**Given:** The convex octagon $P$ with vertices $v_0,\dots,v_7$ in cyclic order and sides $a=v_0v_1$, $b=v_1v_2$, $a^{-1}=v_2v_3$, $b^{-1}=v_3v_4$, $c=v_4v_5$, $d=v_5v_6$, $c^{-1}=v_6v_7$ and $d^{-1}=v_7v_0$, with each side pair identified by the affine reversal and $Y=P/R$ the realization.

[L1] Schema conventions: a polygonal schema is finite data of oriented nondegenerate disks with boundary sides paired by specified homeomorphisms (affine when the sides are straight), and its realization is the quotient; a bigon (a disk with two sides meeting at its two corners) occurs as an intermediate piece of cut-and-paste moves; the quotient vertices are the corner classes, the edges the paired side classes and the faces the disk interiors, giving a finite cell structure with counts $(V,E,F)$; in a one-polygon word a pair with opposite exponents is orientation compatible and a pair with equal exponents is twisted ([[def-polygonal-schema-and-edge-pairing]]). The same definition proves that the quotient map of a finite polygonal schema is closed.

[L2] Quotient conventions: a subset $A$ of a quotient's source is saturated when it is a union of fibres, and the open sets of the quotient correspond exactly to the saturated open sets; a subset of the quotient is closed exactly when its preimage is closed ([[def-quotient-topology]]).

[L3] For one-polygon schemas, cutting along an embedded polygonal diagonal whose interior lies in the polygon interior and regluing the two new boundary sides to each other preserves the quotient homeomorphism type, as does the inverse operation of gluing two faces along a paired pair of sides. The same reduction lemma permits cancellation of an adjacent inverse pair of sides when another paired letter remains ([[lem-polygonal-schema-reduction-moves]]).

[L4] The square schema with boundary word $a\,b\,a^{-1}b^{-1}$ realizes the torus $T^2$ ([[ex-torus-polygonal-schema]]).

[L5] The connected-sum model of [[def-connected-sum-of-compact-surfaces]] is the quotient of the disjoint union of $S\setminus\operatorname{int}D_S$ and $T\setminus\operatorname{int}D_T$ by a homeomorphism of the boundary circles; the disks and the gluing homeomorphism are part of the model data, and no independence of those choices is asserted.

[L6] An orientation is a continuous generating section of the local homology system, which is locally constant over coordinate balls, so a generator prescribed on the face of a schema continues across an edge exactly when the pairing is orientation compatible ([[def-r-orientation-of-a-topological-manifold]], [[def-orientation-local-system-and-orientation-cover]]).

[L7] The Euler characteristic of a space with finitely many cells is $\chi(X)=\sum_n(-1)^nc_n(X)$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Verification

**Proof technique:** direct.

1.1 Each of the four side pairs identifies two corners: pairing $a$ with $a^{-1}$ gives $v_0\sim v_3$ and $v_1\sim v_2$, pairing $b$ with $b^{-1}$ gives $v_1\sim v_4$ and $v_2\sim v_3$, pairing $c$ with $c^{-1}$ gives $v_4\sim v_7$ and $v_5\sim v_6$, and pairing $d$ with $d^{-1}$ gives $v_5\sim v_0$ and $v_6\sim v_7$; the chain $v_0\sim v_5\sim v_6\sim v_7\sim v_4\sim v_1\sim v_2\sim v_3\sim v_0$ shows that all eight corners form a single vertex class. Hence $Y$ has $V=1$ vertex class, $E=4$ paired side classes and $F=1$ face, and these are the cells of its finite CW structure. [L1]

1.2 Let $\delta$ be the straight diagonal from $v_0$ to $v_4$; its relative interior lies in the interior of the convex octagon, and cutting $P$ along $\delta$ produces the pentagon $P_1$ with vertices $v_0,v_1,v_2,v_3,v_4$ and sides $a,b,a^{-1},b^{-1},\delta$, together with the pentagon $P_2$ with vertices $v_4,v_5,v_6,v_7,v_0$ and sides $c,d,c^{-1},d^{-1},\delta'$. By the split identity of [L3] the quotient of $P_1\sqcup P_2$ by the pentagon pairings $R_1,R_2$ together with the identification $S$ of the two copies of $\delta$ by the natural reversal is homeomorphic to $Y$; write $Y_1=P_1/R_1$ and $Y_2=P_2/R_2$ for the two punctured pieces. [L1, L3]

2.1 In the notation of step 1.2, each pentagon quotient $Y_i$ is homeomorphic to $T^2$ minus an open disk. For $i=1$, subdivide the free boundary side $\delta$ of $P_1$ at an interior point into consecutive sides $e,f$, and glue a bigon $M$ with boundary word $e^{-1}f^{-1}$ to $P_1$ by the affine reversals pairing $e$ with $e^{-1}$ and $f$ with $f^{-1}$. Merging the two faces along $e$ by [L3] gives a one-face schema with cyclic boundary word $f\,a\,b\,a^{-1}b^{-1}f^{-1}$; it contains the adjacent inverse pair $f^{-1}f$ after cyclic rotation, and since the pairs $a,a^{-1}$ and $b,b^{-1}$ remain, cancellation by [L3] gives the square schema $a\,b\,a^{-1}b^{-1}$, whose quotient is $T^2$ by [L4]. Let $q:P_1\sqcup M\to T^2$ be the quotient map followed by this homeomorphism. The interior $M^\circ$ is a saturated open subset of the source, and $q$ is injective on it, so $D_1:=q(M^\circ)$ is an open disk in $T^2$ and $q(P_1)=T^2\setminus D_1$. The summand $P_1$ is closed in $P_1\sqcup M$, though it is not saturated because each point of the subdivided boundary side is also represented on $\partial M$. The finite-schema quotient map $q$ is closed by [L1], so its restriction $q|_{P_1}:P_1\to q(P_1)=T^2\setminus D_1$ is a closed continuous surjection and hence a quotient map. Its fibers are exactly the $R_1$-classes: the bigon pairings identify each subarc of $\delta$ with its corresponding bigon side, and the two endpoints of $\delta$ are already in one $R_1$-class by the $a,b$ pairings. Consequently $Y_1=P_1/R_1\cong T^2\setminus D_1$, with boundary circle the image of $\delta$. The same construction with $c,d,\delta'$ in place of $a,b,\delta$ gives $Y_2\cong T^2\setminus D_2$ for an open disk $D_2$, with boundary circle the image of $\delta'$. [L1, L2, L3, L4]

3.1 The identification $S$ glues the boundary circle of $Y_1$ to the boundary circle of $Y_2$ by a homeomorphism, because both are images of the same diagonal arcs; iterating the quotient by the pairings on each summand gives $Y\cong(Y_1\sqcup Y_2)/S$, and by step 2.1 this is exactly the connected-sum model $((T^2\setminus D_1)\sqcup(T^2\setminus D_2))/\!\sim_\phi$ of [L5], with the disks and the boundary homeomorphism just constructed. Hence the octagon word realizes the connected sum of two tori. [L1, L2, L5, step 1.2, step 2.1]

4.1 Each of the four letters occurs once with exponent $+1$ and once with exponent $-1$, so by [L1] all four pairings are orientation compatible; the generator carried by the oriented face continues unchanged across each edge class, and its locally constant generator classes supply a continuous generating section as in [L6]. Hence $Y$ is orientable. [L1, L6, step 1.1, step 3.1]

5.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-4+1=-2$ by [L7], and this is the Euler characteristic of the connected sum of two tori by step 3.1. Every construction used is a finite explicit quotient, cut or gluing of polygons, so no choice axiom is used. [L1, L7, step 1.1, step 3.1, step 4.1] ∎

## Remarks

The word $a\,b\,a^{-1}b^{-1}c\,d\,c^{-1}d^{-1}$ is the genus-two case $g=2$ of the commutator word $\prod_{i=1}^{g}a_ib_ia_i^{-1}b_i^{-1}$, and the count $V-E+F=1-4+1=-2$ matches $2-2g$ at $g=2$. The argument identifies the surface as the connected sum of two copies of the torus of [[ex-torus-polygonal-schema]] by an explicit double splitting, and never uses the classification theorem or the Axiom of Choice.
