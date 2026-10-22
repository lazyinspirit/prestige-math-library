---
id: lem-seifert-fiber-quotient-is-finite-orbifold-free-product
kind: lemma
title: "The fiber quotient of a Seifert piece with boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-seifert-van-kampen, lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite smooth triangulation supplier; no stronger choice hypothesis is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.13–14, local Seifert models, and p.20, boundary-fiber uniqueness; the quotient calculation below is supplied explicitly"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary. Let $B$ be its underlying compact base surface, let $q_1,\ldots,q_m\ge2$ be the exceptional multiplicities, and let $h$ be a based regular fiber. Put $r=1-\chi(B)$. Then $r\ge0$, the subgroup $\langle h\rangle$ is normal, and
$$\pi_1(M)/\langle h\rangle\cong F_r*C_{q_1}*\cdots*C_{q_m},$$
where $F_r$ is the free group of rank $r$, $F_0$ is trivial, and an empty free product is trivial.

If $r+m\ge2$, excluding $r=0,m=2,q_1=q_2=2$, every boundary torus whose inclusion is injective on fundamental groups has the same unoriented fiber slope for every Seifert fibration of $M$. No family of essential annuli is required for this conclusion. Boundary injectivity itself is an explicit hypothesis of this last assertion, not a consequence claimed here.

## Facts & Assumptions

**Given:** Full AC and the Seifert piece, base and multiplicities of the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] Seifert local models and multiplicities are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] Compact smooth surfaces with boundary have finite compatible triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement, in dimension two).

[F3] A based Serre fibration with connected fiber has an exact sequence on fundamental groups ending in $\pi_1$ of the base and the trivial fiber-component set ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], Statement).

[F4] Van Kampen identifies the group after a solid-torus filling with the pushout of the boundary inclusion maps ([[thm-seifert-van-kampen]], Statement).

[F5] Fiber subgroups are normal by finite bundle-chart transport, and an injective boundary torus has a rigid fiber slope when the quotient by one fiber subgroup is a nonexceptional finite free product ([[lem-seifert-boundary-fibers-are-rigid-under-nonexceptional-free-product-quotients]], Proof 1.1 and Statement).

## Proof

1.1 The base is a compact surface with nonempty boundary. Its exceptional points are isolated, and a finite cover by local fiber charts shows that there are finitely many. Remove pairwise disjoint small open disks about them to form $B_0$, and remove their fibered solid-torus preimages from $M$ to form $M_0$. The restriction $M_0\to B_0$ is an ordinary circle bundle. The base charts away from exceptional points are ordinary disk or half-disk charts, and the quotient chart at an exceptional point is a disk with its marked center; these supply the base surface structure. Apply [F2] after choosing the disks, treating their boundary circles as boundary components. A locally trivial circle bundle is a Serre fibration here: a lifting problem on a finite cube is solved over finitely many subdivisions subordinate to trivializing charts, extending the already specified lift across successive parameter prisms using the chart product and retaining their common faces. Thus [F3] gives a surjection $\pi_1(M_0)\to\pi_1(B_0)$ whose kernel is the image of the fiber group, namely $\langle h\rangle$. In particular $\pi_1(M_0)/\langle h\rangle\cong\pi_1(B_0)$. Normality in the filled $M$ also follows directly from [F5]. [given, A1, F1, F2, F3, F5, construct]

2.1 Compute the base group while retaining the puncture generators. Join each of the $m$ new boundary circles of $B_0$ to one chosen original boundary component by disjoint embedded arcs. They can be constructed successively in a finite surface triangulation: choose an edge path between the desired boundary components, remove loops, perturb its interior off the boundary and existing arcs, and cut along it. Cutting an arc joining two distinct boundary components leaves the surface connected and reduces the number of boundary components by one; the inverse operation attaches a rectangular band along two intervals. The resulting cut surface $B'$ has nonempty boundary, is connected, and satisfies $\chi(B')=\chi(B_0)+m=\chi(B)$. A triangulated compact connected surface with boundary collapses to a finite graph: take a spanning tree in the triangle adjacency graph, rooted at an edge on the boundary; delete the root triangle across that free boundary edge, and then delete each successive triangle across its now exposed parent edge. Every triangle is deleted once and every deletion retains its other edges. The remaining connected one-complex is a graph spine. Collapsing a finite spanning tree in that graph gives a free fundamental group of rank $1-\chi(B')=r$, proving $r\ge0$. Restoring each cut band adds one free graph edge. Its loop may be chosen to run around precisely the corresponding puncture, with a path from the fixed basepoint along the joining arc. This follows also by covering the restored band and a small attaching collar by a rectangle: it attaches a one-cell between two points of the connected spine and no two-cell. Therefore, with these marked loops $c_j$ around the deleted disks, $\pi_1(B_0)=F_r*\langle c_1\rangle*\cdots*\langle c_m\rangle$. [F2, F4, step 1.1, construct]

3.1 Fill one removed fibered solid torus. The inclusion of its boundary torus onto its fundamental group is surjective, with kernel generated by the meridian: in its ordinary solid-torus coordinates the longitude maps to its core generator and the meridian bounds a disk. Hence [F4] eliminates the new core generator and adds exactly the normal meridian relation to $\pi_1(M_0)$. In the quotient by the regular fiber, this relation becomes $c_j^{q_j}=1$, up to inversion and conjugation. To verify the exponent, in the multiplicity-$q_j$ model the transverse disk covers the quotient base disk with degree $q_j$ off its center; its meridian therefore traverses the base puncture circle exactly $q_j$ times. Any change of its chosen boundary lift only multiplies by a fiber power, which is already killed. Repeating the finite fillings and then quotienting by $h$ gives $\pi_1(B_0)/\langle\!\langle c_1^{q_1},\ldots,c_m^{q_m}\rangle\!\rangle$. The free-product description of step 2.1 now gives exactly $F_r*C_{q_1}*\cdots*C_{q_m}$: a homomorphism out of either group is precisely a choice of images of the $r$ free generators and elements satisfying the respective relations $c_j^{q_j}=1$. Their identical universal properties give inverse isomorphisms. [F1, F4, step 1.1, step 2.1, algebra, construct]

4.1 Write $F_r$ as a free product of $r$ infinite cyclic groups. Under the numerical condition of the Statement there are at least two nontrivial factors, and the only two-order-two possibility is exactly the excluded case. Apply [F5] to any boundary torus with the specified injectivity. This proves fiber-slope uniqueness there for every other fibration, even when that fibration has a different base or exceptional multiplicities. The calculations also include $m=0$ and $r=0$ with the stated empty-product conventions. All topological constructions used compact smooth surfaces and already supplied Seifert charts; no topological three-manifold triangulation or full JSJ theorem was used. [A1, F5, step 3.1, algebra] ∎
