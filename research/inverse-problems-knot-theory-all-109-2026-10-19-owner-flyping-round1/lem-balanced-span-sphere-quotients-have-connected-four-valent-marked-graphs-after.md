---
id: lem-balanced-span-sphere-quotients-have-connected-four-valent-marked-graphs
kind: lemma
title: "Balanced-span sphere quotients have connected four-valent marked graphs"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-balanced-spans-with-standard-intersections-admit-smooth-sphere-quotients
  - lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres
  - lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings
  - lem-standard-intersection-arcs-have-opposite-end-page-pairings
  - thm-cellular-homology-computes-singular-homology
  - cor-homology-of-spheres
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the balanced surface quotient and its finite cellulation. The finite marked graph, local page calculation and cellular chain argument introduce no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, proof of Theorem 1.1, PDF pp.7–8; marked graph and disconnected component argument supplied here"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Take a surface pair and its standard finite intersection arcs satisfying the hypotheses of the balanced-span smooth sphere quotient: the common boundary link is nonempty, there are no closed surface components or intersection circles, both surfaces have $p$ components, and the number of standard arcs equals the sum of their first Betti numbers. Let $Q$ be a continuous ambient surjection with exactly those arc fibers, whose surface image $S=Q(F_0\cup F_1)$ is a disjoint union of $p$ spheres and whose every sphere contains the images of exactly one component of each surface. In particular one may take the smooth sphere quotient constructed there.

Then $G=Q(L)\subset S$ is a finite topologically embedded graph, connected on each sphere. Its vertices are the distinct points $Q(A_j)$, each of valence four; components without vertices are circles. At each vertex there is a supplied topological disk chart with four radial graph arms, with the sectors from $Q(F_0)$ and $Q(F_1)$ alternating cyclically. Away from vertices the graph has an ordinary line chart, and each component of $S\setminus G$ belongs to exactly one of the two surface images. This is a topological marked graph assertion; it does not assert that the graph is smooth or specify overcrossings.

## Statement references

[[def-axiom-of-choice]]

[[lem-balanced-spans-with-standard-intersections-admit-smooth-sphere-quotients]]

## Facts & Assumptions

**Given:** Full AC, the actual balanced surface pair and standard arc list, and the quotient with the stated fiber and sphere-component properties.

[F1] The balanced quotient has the stated sphere components and one component from each original surface on each sphere. The finite cell construction in its earlier Euler proof makes the two original surfaces into compatible finite CW complexes with their common graph $L\cup\bigcup_j A_j$ as a subcomplex; collapsing each arc gives a finite CW surface with the surface images as subcomplexes. ([[lem-balanced-spans-with-standard-intersections-admit-smooth-sphere-quotients]], [[lem-finite-standard-arc-collapse-of-balanced-spans-is-a-union-of-spheres]])

[F2] The actual proper standard arc has four pages, two from each surface. Equal ordered endpoint signs give opposite end pairings. The page quotient is the cone on its outer four-edge circle, with the four radial boundary seams as graph arms. The matchings pair different-surface pages at each end. ([[lem-standard-intersection-arcs-have-opposite-end-page-pairings]], [[lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings]])

[F3] Cellular homology of a finite CW complex computes its singular homology, and $H_1(S^2;\mathbb Z)=0$. ([[thm-cellular-homology-computes-singular-homology]], [[cor-homology-of-spheres]])

## Proof

1.1 The restriction of $Q$ to $L$ identifies precisely each pair of endpoints of $A_j$. There are no other identifications, because the whole nonsingleton fibers are exactly the disjoint arcs and their interiors miss $L$. Subdivide $L$ at these finitely many endpoints, adding a vertex on a circle with no endpoints for its cell presentation. Its quotient identifies the two distinct endpoints of each arc to one vertex and retains every open edge. Each such vertex has four incident half-edges, two from each original link point, with loops counted twice. The compact quotient maps continuously and bijectively onto Hausdorff $G$, so is a homeomorphism. It is therefore a finite topological graph, with the additional subdivision vertices on vertex-free circles understood as auxiliary. [given, construct]

2.1 In the four-page neighborhood [F2], the image of $L$ is exactly the four radial seams: the common arc is the cone center, and the two short boundary intervals at its endpoints give the four rays. Opposite matchings make the outer graph one circle. Its four page edges alternate between the two surfaces, since every successive endpoint identification joins one page from each surface. The coning chart therefore gives a disk with four radial graph arms and alternating surface sectors. At an uncollapsed boundary point the distinct radial collars give the line chart by angular straightening of their two rays. Any two ambient quotient maps with the same arc fibers differ by an ambient homeomorphism: both factor through the same compact quotient, and the induced continuous bijection of Hausdorff compact targets is a homeomorphism. Hence these actual local marked charts transfer to the specified $Q$, including when its later cap maps have not preserved smooth marked curves. [given, step 1.1, F2, construct]

3.1 Fix one sphere component $S_a$ and put $X_i=Q(F_i)\cap S_a$, $G_a=G\cap S_a$. Each $X_i$ is connected, being the image of its one original connected surface component. The intersection $X_0\cap X_1$ equals $G_a$: an equality of image points from the two surfaces is either their original common boundary point or a collapsed common arc, whose image also belongs to $Q(L)$. Use the finite CW structure in [F1] and transport it to this quotient as in step 2.1. Then $X_0,X_1,G_a$ are subcomplexes covering $S_a$. The intersection is nonempty, since every original component has a nonempty boundary circle. Their one-skeleta are connected: attaching a cell of dimension at least two cannot join components of a one-skeleton, as its boundary sphere is connected. Thus for any vertices $u,v$ of $G_a$, there are finite integral cellular one-chains $a\in C_1(X_0)$ and $b\in C_1(X_1)$ with $\partial a=\partial b=v-u$. [given, step 2.1, F1, construct]

4.1 The chain $a-b$ is a cellular one-cycle in $S_a$. By [F3] it bounds a cellular two-chain $c$. Split $c=c_0+c_1$ by assigning each of its two-cells to a containing $X_i$, assigning common cells to either side. Then $w=a-\partial c_0=b+\partial c_1$ is a one-chain lying in both cellular chain subgroups, hence in $C_1(G_a)$, and $\partial w=v-u$. If $u,v$ belonged to different graph components, the augmentation counting vertices in the component of $u$ would vanish on every graph edge boundary and hence on $\partial w$, but have value $-1$ on $v-u$. This contradiction proves that all graph vertices lie in one component. Every nonempty finite graph component has a vertex in the chosen cell structure, so $G_a$ is connected. [step 3.1, F3, construct, algebra]

5.1 Finally the two closed subcomplexes $X_i$ cover $S_a$ and intersect exactly in $G_a$. In its complement, the sets $X_i\setminus G_a$ are disjoint, relatively closed and also relatively open because each is the other's complement. Thus a connected complementary component lies wholly in exactly one of them. The line and four-arm charts from step 2.1 give the asserted local colored sectors. Repeating the argument on the finitely many spheres proves all conclusions; when a sphere has no arc vertex its connected finite graph is a single original boundary circle. No crossing height or regularity of marked edges beyond these topological charts has been claimed. [step 1.1, step 2.1, step 3.1, step 4.1, construct] ∎
