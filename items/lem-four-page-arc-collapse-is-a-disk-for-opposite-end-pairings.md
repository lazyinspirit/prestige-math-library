---
id: lem-four-page-arc-collapse-is-a-disk-for-opposite-end-pairings
kind: lemma
title: "Four-page arc collapse is a disk for opposite end pairings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: the model has four rectangles and two supplied finite matchings; the quotient, cone coordinates and Euler counts are finite and explicit."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Procedure 2.20 and Figure 6, PDF pp.10–11; explicit four-page local quotient calculation supplied here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Take four rectangles $P_j=[0,1]_t\times[0,1]_r$, $j\in\{0,1,2,3\}$. Identify their edges $r=0$ pointwise in the $t$ coordinate to a common arc $A$. At each end $t=e$, $e\in\{0,1\}$, also identify the radial edges pointwise in $r$ by a matching $\mu_e$, where each $\mu_e$ is one of $M=(01)(23)$ and $N=(03)(12)$. Let $K$ be this finite quotient complex, and let $C$ be the image of the four outer edges $r=1$.

If the two end matchings differ, then $K/A$ is a closed topological disk whose boundary is exactly the image of $C$, and the collapsed arc is an interior point of that disk. If the two end matchings agree, then $K/A$ is two closed disks joined at their interior centers, so it is not a topological two-manifold at the collapsed point. Explicitly, $K/A$ is the cone on the graph $C$; the latter is one four-edge circle for distinct matchings and two disjoint two-edge circles for equal matchings.

Consequently, if a finite Hausdorff two-dimensional cell complex is already a topological two-manifold away from finitely many disjoint arc subcomplexes, with neighborhoods modeled by the interiors $r<1$ of these four-page models with distinct end matchings, collapsing those arcs gives a topological two-manifold. No boundary is created at a collapsed point. Collapsing any finite disjoint arc subcomplexes preserves the Euler characteristic, whether or not the local end matchings differ. These are intrinsic topological conclusions; an ambient embedding or local flatness needs separate data.

## Facts & Assumptions

**Given:** The four supplied rectangles, their pointwise edge identifications, the two supplied end matchings, and, for the global assertion, the finite Hausdorff cell complex and its stated modeled neighborhoods.

## Proof

1.1 The graph $C$ has four edges, each the parameter interval $t\in[0,1]$ of one page. At $t=0$ its edge endpoints are identified in the two pairs of $\mu_0$, and at $t=1$ in the two pairs of $\mu_1$. Each resulting vertex has degree two. If $\mu_0=M$ and $\mu_1=N$, follow page zero from zero to one, page three back to zero, page two to one, and page one back to zero. This traverses all four edges and returns to the start, so $C$ is a four-edge circle. Reversing the end roles gives the same conclusion when the matchings are interchanged. If both equal $M$, the two circles use page pairs $(0,1)$ and $(2,3)$; if both equal $N$, they use $(0,3)$ and $(1,2)$. Thus the listed cases are exhaustive and identify the whole graph. [given, construct]

2.1 Send the point $(t,r)$ on page $j$ to $([t,j],r)$ in the cone $(C\times[0,1])/(C\times\{0\})$. The end identifications are precisely those already present in $C$, and all points of the common arc $A$ map to the cone point. The map therefore factors continuously through $K/A$. For $r>0$ it identifies exactly the prescribed radial-edge pairs, and at $r=0$ it identifies exactly the collapsed arc. It is consequently a bijection. The domain is compact, being a quotient of finitely many compact rectangles. The target is Hausdorff: a finite graph admits its usual edge-length metric, and its cone is a finite triangular cell complex, or explicitly the finitely many triangles obtained by coning its edges. Hence this continuous bijection is a homeomorphism. [step 1.1, construct]

3.1 The cone on a polygonal circle is a closed disk: send its consecutive edges to the sides of a convex polygon, and extend each edge map linearly along cone radii to the polygon center. In the two-edge case subdivide each edge once before using this construction. This realizes the distinct-matching case as one disk with boundary $C$ and the cone point in its interior. In the equal-matching case the two components of $C$ give two such disks with only their cone centers identified. This is a Hausdorff wedge, for instance with distance between different disks defined as the sum of their distances to their common center. Every sufficiently small neighborhood of that center contains points of both disks, while deleting the center separates the two parts. A disk or half-disk neighborhood would have connected punctured interior, so no manifold chart can exist there. This proves both local alternatives. [step 1.1, step 2.1, construct, contradiction]

4.1 In the global cell complex the finitely many disjoint modeled neighborhoods can be taken disjoint. Their quotients have the disk charts in step 3.1. Away from the collapsed arcs the quotient is locally the original space: each arc is a closed subcomplex, so a point off their union has a neighborhood avoiding that union, on which no identification occurs. The quotient remains Hausdorff. Indeed its only nonsingleton equivalence classes are finitely many disjoint closed compact arcs; two distinct classes have disjoint neighborhoods avoiding all the other classes, and for a class that is an arc one may choose a neighborhood containing the entire arc. The resulting neighborhoods are saturated, so separate the quotient classes. Thus the disk charts and the retained original charts make the quotient a topological two-manifold, with no new boundary at the centers. [given, step 3.1, construct]

5.1 Finally retain the finite open cells not lying on a collapsed arc and compose their attaching maps with the quotient. Replace each arc's finite zero- and one-cells by one zero-cell. This describes a finite cell structure on the quotient: cell interiors off the arcs remain unchanged, and their boundary maps simply make the prescribed identifications. If an arc has $v$ vertices and $e$ edges in its given subdivision, then $v-e=1$, since it is a subdivided interval. Its replacement changes the Euler count by $1-v+e=0$. Summing over the finitely many disjoint arc subcomplexes shows Euler characteristic unchanged. This calculation is valid for either end-pairing case and also for an empty collection of arcs, when the quotient is the identity. It proves the stated global and Euler assertions without an ambient local-flatness assumption. [given, step 4.1, algebra] ∎
