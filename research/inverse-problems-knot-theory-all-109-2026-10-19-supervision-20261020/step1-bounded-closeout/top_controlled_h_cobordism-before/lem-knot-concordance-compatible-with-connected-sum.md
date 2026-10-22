---
id: lem-knot-concordance-compatible-with-connected-sum
kind: lemma
title: "Smooth and topological concordance respect connected sum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - def-countable-choice
  - thm-isotopy-extension
  - thm-parametric-transversality
  - thm-relative-whitney-approximation-for-manifold-valued-maps
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - thm-locally-flat-codimension-three-arc-unknotting
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, connected-sum operation on concordances, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, concordance groups and connected-sum operation, printed pp.10–11"
---

## Statement

Assume the Axiom of Countable Choice. If $K_0$ and $K_1$ are concordant in the smooth category and $J_0$ and $J_1$ are concordant in the same category, then $K_0\#J_0$ and $K_1\#J_1$ are smoothly concordant. The same implication holds when both given concordances and the resulting concordance are required to be locally flat and topological.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance annuli]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological concordance annuli]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected sum]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, concordance annuli $A$ from $K_0$ to $K_1$ and $B$ from $J_0$ to $J_1$ in one of the two categories.

[F1] Each annulus is proper, has product collars at its endpoint knots, and has boundary orientation $-K_0\sqcup K_1$ or $-J_0\sqcup J_1$. ([[def-smooth-knot-concordance]], [[def-locally-flat-topological-knot-concordance]])

[F2] The oriented connected sum is obtained by deleting short trivial arcs and gluing with the fixed orientation-reversing boundary map; its class is independent of the local choices under $\mathrm{AC}_\omega$. ([[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]])

[F3] Under $\mathrm{AC}_\omega$, $S^3$ is simply connected, continuous homotopies into a smooth manifold can be smoothly approximated relative to a closed region where they are already smooth, finite-dimensional smooth perturbations can be chosen transverse, compact smooth isotopies extend ambiently, and smooth submanifolds have tubular neighborhoods. ([[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[thm-parametric-transversality]], [[thm-isotopy-extension]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-countable-choice]])

[F4] Ambient-isotopic oriented knot representatives may be changed by smooth families of orientation-preserving diffeomorphisms of $S^3$. A chosen point on a knot can be moved to any prescribed point by an isotopy of embeddings of that point, which extends ambiently under $\mathrm{AC}_\omega$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-isotopy-extension]], [[def-countable-choice]])

[L1] Bare locally flat proper arcs with the specified product end collars can now be straightened by the proved [[thm-locally-flat-codimension-three-arc-unknotting]]. The remaining TOP operation must additionally supply a proper pair-adapted tube $(D^3\times I,D^1\times I,\{0\}\times I)$ along a spanning annulus core, matching both end collars, and identify the actual whole tube/complement for the connected-sum gluing. Core-image straightening alone does not normalize the transverse annulus germs or prove this relative tube operation.

## Proof

**Given:** The two annuli $A,B$ and the fixed connected-sum convention.

1.1 First consider smooth concordances. Pick one point on each endpoint knot. By [F4], apply separate endpoint ambient isotopies carrying both marked points to a common point $p\in S^3$; extend them over disjoint product collars of the concordance and interpolate by the identity between the collars. This changes the representatives only within their ambient-isotopy classes. Choose a smooth spanning arc in each annulus joining the marked points and fixed in product collars. For one annulus, write this arc as $\alpha$ and the standard product arc as $\beta(s)=(p,s)$. Since $S^3\times(0,1)$ is simply connected by [F3], the middle portions of $\alpha$ and $\beta$ are homotopic rel endpoints after their common endpoint collars are deleted. Relative smooth approximation in [F3] gives a smooth homotopy $H(s,t)$ fixed on those collars. We now perturb this homotopy through a finite-dimensional family. First, local coordinate bumps whose $s$-derivatives span the four target coordinates at each zero of $\partial_sH$ make the total derivative family transverse to the zero section of the rank-four tangent bundle; its source has dimension two, so a generic parameter has $\partial_sH\ne0$ everywhere. Compactness then supplies a uniform $\delta>0$ for local injectivity of every slice when $|s-s'|<\delta$. On the compact configuration set $|s-s'|\ge\delta$, use two disjoint source-supported coordinate bumps near each pair to vary $H(s,t)$ and $H(s',t)$ independently. A finite cover of the possible diagonal preimage makes the total pair map transverse to the diagonal in $(S^3\times I)^2$. Its source-pair-time dimension is three and the diagonal has codimension four, so the generic slice has no double points. Both perturbations are supported away from the endpoint collars and can be chosen small enough to preserve immersion and local injectivity. Thus every time-slice is a smooth embedding, giving an isotopy of proper arcs rel collars. By [F3], it extends to an ambient isotopy fixed near the two end levels. This produces the required vertical arc in each concordance without changing the oriented endpoint knot types. [F1, F2, F3, F4, given, construct, choose]

2.1 For each vertical arc, the smooth tubular-neighborhood theorem and a frame of its rank-three normal bundle over the contractible interval give a product neighborhood $D^3\times I$. Choose the frame so the rank-one normal direction of the annulus within its normal bundle is the first coordinate; the adapted tubular chart then makes the intersection with the annulus exactly $D^1\times I$. Removing the interior of this strip from each annulus leaves a rectangle. Remove the two product neighborhoods from two copies of $S^3\times I$ and glue their boundary cylinders $S^2\times I$ by the fixed product identification. At each level this glues two three-balls along their boundary spheres, giving $S^3\#S^3\cong S^3$; since the gluing is independent of the interval parameter, the resulting ambient cobordism is $S^3\times I$. Glue the two surface rectangles across the two side intervals in the connecting cylinder, choosing the side identifications to extend the orientations on the cut annuli. At the lower end the fixed orientation-reversing boundary map joins the incoming arcs with boundary orientation $-(K_0\#J_0)$; at the upper end the same product convention gives $K_1\#J_1$. The result is connected, orientable, has two boundary circles, and has Euler characteristic $0$ (two rectangles, each of Euler characteristic $1$, glued along two intervals); hence it is an annulus. The product collars give the required smooth concordance. [F1, F2, F3, step 1.1, construct, algebra]

3.1 The preceding construction proves the smooth implication. [step 1.1, step 2.1]

4.1 For locally flat topological concordances, the bare spanning core can be straightened by the proved arc theorem in [L1]. The cut-and-glue construction of step 2.1 still needs the pair-adapted proper strip/tube, its actual two-end attaching germs, and whole ambient complement normalization described in [L1]. The bare arc theorem makes no assertion about these transverse data. This remaining relative operation has not been proved, so the full TOP implication remains unresolved. [F1, F2, L1, step 2.1]

## Sources

[[lem-knot-connected-sum-well-defined]]

[[thm-isotopy-extension]]

[[thm-parametric-transversality]]
