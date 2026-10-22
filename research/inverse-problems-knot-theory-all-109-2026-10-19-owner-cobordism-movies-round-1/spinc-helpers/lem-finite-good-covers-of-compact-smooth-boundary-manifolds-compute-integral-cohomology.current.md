---
id: lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology
kind: lemma
title: "Finite good covers and integral nerve cohomology for compact smooth boundary manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-collar-neighborhood-theorem, thm-existence-of-geodesically-convex-neighborhoods, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, thm-simplicial-and-singular-homology-agree-for-simplicial-complexes, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-homotopic-maps-induce-equal-maps-in-singular-cohomology, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_strength: "Assume AC, inherited from the convex-neighborhood, partition, and cohomology suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, section 4G, the nerve of a good cover"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume AC. A compact smooth manifold $M$, possibly with boundary, has a finite relatively open good cover refining any specified open cover. Its nonempty finite intersections are contractible, with contractions depending smoothly on the endpoint and contraction parameter. The cover can be chosen with a smooth subordinate partition of unity whose supports lie in their assigned cover members. For its finite nerve $N$, there is a homotopy equivalence $M\to |N|$, and simplicial nerve cohomology identifies with singular cohomology of $M$ with coefficients in any abelian group. These identifications commute with coefficient homomorphisms, in particular reduction $\mathbb Z\to\mathbb F_2$.

## Facts & Assumptions

**Given:** AC, a compact smooth $M$, and an open cover to be refined.

[F1] A smooth manifold with boundary has a smooth collar. Small strongly geodesically convex neighborhoods exist in a boundaryless Riemannian manifold, and their geodesics depend smoothly on their endpoints. Smooth subordinate partitions of unity exist with and without boundary ([[thm-collar-neighborhood-theorem]], [[thm-existence-of-geodesically-convex-neighborhoods]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

[F2] Simplicial and singular homology of a simplicial complex agree; the cohomological UCT for free integral chain complexes is natural in coefficients. Homotopic maps induce equal cohomology maps ([[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[A1] Full AC is the inherited hypothesis of these geometric and cohomological suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The data above.

1.1 If the boundary is nonempty, double $M$ using its collar: glue two copies along their boundary, and use collar coordinates $(y,t)$ with positive and negative $t$ on the two copies. These charts and the original interior charts have smooth transitions, giving a boundaryless smooth double $D$. A partition of unity produces a Riemannian metric, chosen to equal $h+dt^2$ on a smaller collar, where $h$ is a metric on the compact boundary. Explicitly patch an arbitrary metric and this product metric using a cutoff equal to one on the smaller collar; positive convex combinations are positive definite. For empty boundary take $D=M$. [F1, A1, construct]

2.1 Near a boundary point choose a strongly convex open set $V\subset D$ contained in the product collar and sufficiently small that $V\cap M$ lies in a member of the prescribed cover. For two points of $V\cap M$, the unique minimizing geodesic in $D$ stays in $V$; its collar coordinate $t$ is affine because the metric is a product throughout $V$. Both endpoint coordinates are nonnegative, so the whole geodesic lies in $M$. Thus $V\cap M$ is convex in this same geodesic sense. For an interior point choose a convex $V$ contained in the interior and in a prescribed cover member. Finitely many resulting sets $U_i=V_i\cap M$ cover $M$ by compactness. For a nonempty intersection $U_\sigma$, the unique ambient minimizing geodesic between two points lies in every $V_i$ and in $M$, hence in $U_\sigma$. Contract to any chosen point by these geodesics. Smooth dependence supplies the asserted contractions. A finite smooth subordinate partition $(\phi_i)$ with $\operatorname{supp}\phi_i\subset U_i$ is supplied by [F1]. [F1, step 1.1, construct]

3.1 Let $N$ be the finite nerve. Put $f(x)=\sum_i\phi_i(x)i\in |N|$; the support consists of sets containing $x$, so it spans a simplex, and $f$ is continuous. In the barycentric subdivision $N'$, choose a point $x_\sigma\in U_\sigma$ for every vertex $\sigma$. On a chain simplex $\sigma_0\subset\cdots\subset\sigma_k$, define $g:|N'|\to M$ recursively by coning the already defined opposite face to $x_{\sigma_0}$ along the convex geodesics in $U_{\sigma_0}$. The opposite face lies in $U_{\sigma_1}\subset U_{\sigma_0}$. Restriction to a face containing the first vertex is the same coning construction on that face, while restriction to the opposite face is its previously defined map. Thus the definitions agree on faces, and finite pasting proves continuity. Write $h:|N'|\to |N|$ for the barycentric subdivision homeomorphism. [step 2.1, construct]

4.1 The points $x$ and $g h^{-1}f(x)$ lie together in a cover intersection containing the latter's smallest chain face. Join them by the unique ambient minimizing geodesic. These formulas agree where the chain description changes, since the ambient geodesic between fixed endpoints is unique. Smooth dependence on the open set of such convex endpoint pairs gives a continuous homotopy $g h^{-1}f\simeq 1_M$. [step 2.1, step 3.1, construct]

5.1 For the other composite, associate to a chain simplex with smallest face $\sigma_0$ the subcomplex $C_{\sigma_0}$ of nerve simplices $\tau$ such that $\tau\cup\sigma_0$ is a simplex. This carrier contracts to the barycenter of $\sigma_0$ by straight interpolation. Both $h$ and $fg$ on the chain simplex lie in this carrier: for $fg$, all support members and all members of $\sigma_0$ contain the point $g(-)$. A face has the same smallest simplex or a larger one, whose carrier is contained in the former carrier. Induct over the finitely many chain simplices to homotope $fg$ to $h$: on the boundary of each prism the homotopy is already defined in its contractible carrier, and coning that boundary map using the displayed contraction extends it across the prism. Finite pasting makes the result continuous. Therefore $f$ and $g h^{-1}$ are homotopy inverses. [step 3.1, step 4.1, construct]

6.1 The standard simplicial-to-singular chain map on $N$ is a homology isomorphism by [F2]. Apply the natural UCT to its free integral complexes with an arbitrary coefficient group $A$. The induced maps on the Ext and Hom terms are isomorphisms, so exactness makes the middle cohomology map an isomorphism: lift an element using surjectivity on the Hom term, correct its error in the Ext term, and use injectivity of the two outer maps for the kernel assertion. This map commutes with $A\to A'$ by UCT naturality. The homotopy equivalence $f$ identifies singular cohomology of $|N|$ with that of $M$, also naturally in coefficients by composition of cochains. Their composite gives the asserted comparison for $\mathbb Z$, $\mathbb F_2$, and all $A$. [F2, step 5.1, algebra]

7.1 If $M$ is empty use the empty cover and nerve; all groups and maps in positive degree vanish. Disconnected $M$ causes no change to the constructions, which use only nonempty intersections. Every chosen contraction and point belongs to a finite family after step 2.1. The inherited hypothesis is [A1]; no stronger choice principle is introduced by the finite constructions. [A1, step 2.1, step 6.1] ∎
