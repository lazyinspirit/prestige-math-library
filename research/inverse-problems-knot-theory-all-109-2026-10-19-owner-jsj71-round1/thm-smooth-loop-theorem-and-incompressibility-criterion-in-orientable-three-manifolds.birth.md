---
id: thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
kind: theorem
title: "Smooth Loop theorem and the smooth incompressibility criterion"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations, thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from compatible finite smooth triangulation and implies countable choice for the precise relative surface-rounding supplier. The finite PL Loop theorem itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.45–48, Loop theorem and Corollary3.3; the compatible triangulation, smooth boundary collar and relative disk-rounding transfer are supplied explicitly here"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth three-manifold, let $F$ be a compact connected smooth subsurface of $\partial M$, and let $N\lhd\pi_1(F)$ be normal. If a continuous disk map into $M$ has its boundary in $\operatorname{Int}F$ with class outside $N$, there is a smoothly properly embedded disk in $M$ whose boundary lies in $\operatorname{Int}F$ and has class outside $N$. No pointwise preservation of the original boundary loop is asserted.

Consequently a compact neatly properly embedded two-sided smooth surface $S$ in an orientable smooth three-manifold is incompressible if and only if its inclusion induces an injection on fundamental groups, component by component. Here incompressibility means absence of a smooth embedded compressing disk, with the conventions of the indicated definition. For a compact ambient manifold the preceding hypotheses apply directly; in a noncompact ambient manifold it suffices to work in a compact smooth neighborhood of the supplied cap image and surface portion, with the same neat cut-side data.

## Facts & Assumptions

**Given:** Full AC and the first-assertion disk map; for the consequence a smooth surface $S$ with a supplied smooth two-sided product neighborhood and, if needed, a compact ambient neighborhood as in the Statement.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The smooth manifold and marked boundary curves admit a finite compatible whole-star triangulation, and the same is true of a neat two-sided smooth cut pair ([[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]], Statement).

[F2] The finite orientable PL Loop theorem produces a proper embedded PL disk with boundary class outside the prescribed normal subgroup ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement).

[F3] A finite PL embedded polyhedron has a compatible subcomplex subdivision ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], Statement).

[F4] A finite piecewise smooth surface with injective whole-star differential fan and an already smooth boundary collar has a smooth embedded replacement fixed on a smaller such collar, preserving its topology ([[lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings]], Statement).

[F5] Smooth compact boundary collars can be obtained by the finite inward-field flow construction in [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Proof 1.2 and 2.2; for an ordinary smooth boundary this collar is smooth, not merely piecewise smooth. The same supplier gives relative finite triangulations of the cut corner pieces.

[F6] A compressing disk and incompressibility have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Apply [F1] with no interior cut surfaces and boundary circle system $\partial F$. It makes $F$ a finite PL subsurface of the boundary in a whole-star smooth triangulation of $M$. The continuous cap and its boundary class are unchanged. Apply [F2] to obtain a proper PL disk $D$ with boundary $c\subset\operatorname{Int}F$ outside $N$. By [F3] subdivide compatibly so $D$ is a subcomplex. Its simplex maps are smooth and its differential fan is injective, being restricted from the ambient whole-star fan. The remaining issue is its boundary collar, which need not yet be smooth. [A1, F1, F2, F3, given, construct]

2.1 Take the smooth ambient boundary collar of [F5], with height $q\ge0$. Near the disk boundary the inward tangent directions of $D$ have strictly positive $dq$, while its boundary directions have $dq=0$. Indeed the ambient whole-star fan maps the boundary fan exactly onto the tangent boundary plane and no other vector onto that plane; a proper PL disk has no inward cone ray in the ambient boundary fan. This verifies piecewise smooth neatness rather than inferring it merely from properness of an arbitrary topological disk. The finite boundary stars therefore give a short level collar of $D$: on each mixed boundary face the implicit equation $q=\epsilon$ cuts one smooth arc, and the arcs join across its finite edges. The positive first-order normal coefficients give a common small height for which their directions remain transverse. In the vertex stars their linear cone section is an interval, with its two ends in the adjacent edge strips; the same local implicit coordinates retain that interval for sufficiently small positive height. Thus $D\cap\{0\le q\le\epsilon\}$ is a finite piecewise smooth annulus, with only its bottom $c$ on the ambient boundary and one simple upper curve $c_\epsilon$. Compactness separates the rest of the disk from $q=0$, so choose the height below that separation as well. All upper boundary points of the truncated disk then belong to this one $c_\epsilon$. [F1, F3, F5, step 1.1, construct]

3.1 Project $c_\epsilon$ to $F$ by the ambient collar. This is an embedded finite piecewise smooth circle $\bar c_\epsilon$ and is freely homotopic in $\operatorname{Int}F$ to $c$, by projection of the disk collar. Choose a smooth parallel circle $c'$ on one side, disjoint from $\bar c_\epsilon$, with an annulus $A$ between them in $\operatorname{Int}F$. This is a finite construction: use small vertex disks and edge strips of the piecewise smooth curve, choose the same side consistently in the oriented boundary surface, take a close parallel boundary, and round its finitely many corners in monotone graph charts. The intervening annulus has a finite piecewise smooth triangulation by those vertex sectors and edge strips, with injective differential fan because it lies in the smooth boundary surface. Replace the deleted disk collar by $A\times\{\epsilon\}$ followed by $c'\times[0,\epsilon]$ in the smooth ambient collar, and retain the truncated disk $D\cap\{q\ge\epsilon\}$. This union is an embedded disk: the first piece of it lies at heights at least $\epsilon$ and meets that level only at $c_\epsilon$; the horizontal annulus and vertical curtain meet only at their stated seams. At the old seam the disk's inward fan has positive $dq$, while the attached annulus lies in $dq=0$; at the new seam the horizontal and vertical half-planes are distinct. Hence the full differential fans of the union are injective. Its bottom collar $c'\times[0,\epsilon/2]$ is already smooth. [F4, F5, step 2.1, construct]

4.1 Apply [F4] to that finite piecewise smooth disk, protecting its smaller smooth bottom collar and choosing a replacement neighborhood that misses the ambient boundary except there. It gives a properly embedded smooth disk with boundary exactly $c'$. The annulus in step 3.1 and the projected original collar show that $c'$ is freely homotopic to $c$ in $F$. Normality of $N$ therefore preserves exclusion from $N$. This proves the strong smooth Loop assertion. It used the specified compatible smooth triangulation and the actual boundary-collar repair, with no ambient homeomorphism smoothing or arbitrary PL-marking compatibility assumed. [A1, F4, step 1.1, step 3.1, construct]

5.1 For the criterion, injection immediately rules out a compressing disk, since its essential boundary would be nullhomotopic in the ambient manifold. Conversely suppose a component of $S$ has a nontrivial kernel loop. Take an actual cap map. Give the neat cut pair compatible finite triangulations by [F1], push the map's boundary collar into one chosen side, and put its interior in finite PL general position relative to $S$. The interior preimage of $S$ is a finite union of circles. If a preimage circle has image nullhomotopic in $S$, replace the source disk it bounds by such a nullhomotopy, pushed slightly into the side occupied by the outside collar of that circle. This removes that circle and all preimage circles inside it, without changing the outer boundary. The push is defined in the supplied two-sided product neighborhood, so creates no new preimages; finite relative approximation retains this separation. Repeat these finite removals. Either no circles remain, giving the original essential outer boundary a cap in one cut side, or choose an innermost remaining circle, whose image is essential in $S$ and whose inside disk now misses $S$. In either case obtain a disk map in one cut component with essential boundary in its copy of $S$. [F1, F5, F6, step 4.1, construct]

6.1 Choose a compact inner subsurface $S_0$ of that copy containing this boundary image and obtained by removing only a sufficiently small boundary collar of $S$; it is homotopy equivalent to $S$. Round the cut manifold's corners away from $S_0$, using its finite product quadrant charts. The rounding is smooth on the interior and unchanged near $S_0$. Apply the first assertion, with marked boundary subsurface $S_0$ and trivial normal subgroup. It gives a proper smooth disk in that cut component with boundary essential in $S_0$, hence in $S$. On regluing this is a smooth compressing disk for $S$, since its interior is disjoint from the cut boundary and its boundary lies away from the rounded corners. This contradicts incompressibility and proves injection. The same finite argument applies to each component and inside any compact neighborhood carrying the supplied map and cut-side data. No general TOP three-manifold triangulation theorem has entered the proof. [F1, F5, F6, step 4.1, step 5.1, construct] ∎
