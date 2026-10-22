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
  - thm-euclidean-inverse-function-theorem
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

[F5] Smooth local inverse maps follow from an invertible derivative. [[thm-euclidean-inverse-function-theorem]]

[F4] Ambient-isotopic oriented knot representatives may be changed by smooth families of orientation-preserving diffeomorphisms of $S^3$. A chosen point on a knot can be moved to any prescribed point by an isotopy of embeddings of that point, which extends ambiently under $\mathrm{AC}_\omega$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[thm-isotopy-extension]], [[def-countable-choice]])

[L1] The topological branch needs both locally flat arc image straightening and a proper pair-adapted tube with the specified endpoint product germs and standard whole-tube complement. Arc image straightening alone supplies neither this pair-neighborhood nor its complement normalization. [[thm-locally-flat-codimension-three-arc-unknotting]]

## Proof

**Given:** The two annuli $A,B$ and the fixed connected-sum convention.

1.1 First consider smooth concordances. Pick one point on each endpoint knot. By [F4], apply separate endpoint ambient isotopies carrying both marked points to a common point $p\in S^3$; extend them over disjoint product collars of the concordance and interpolate by the identity between the collars. This changes the representatives only within their ambient-isotopy classes. Choose a smooth spanning arc in each annulus joining the marked points and fixed in product collars. For one annulus, write this arc as $\alpha$ and the standard product arc as $\beta(s)=(p,s)$. Since $S^3\times(0,1)$ is simply connected by [F3], the middle portions of $\alpha$ and $\beta$ are homotopic rel endpoints after their common endpoint collars are deleted. Relative smooth approximation in [F3] gives a smooth homotopy $H(s,t)$ fixed on those collars. We now perturb this homotopy through a finite-dimensional family. First, local coordinate bumps whose $s$-derivatives span the four target coordinates at each zero of $\partial_sH$ make the total derivative family transverse to the zero section of the rank-four tangent bundle; its source has dimension two, so a generic parameter has $\partial_sH\ne0$ everywhere. Compactness then supplies a uniform $\delta>0$ for local injectivity of every slice when $|s-s'|<\delta$. On the compact configuration set $|s-s'|\ge\delta$, use two disjoint source-supported coordinate bumps near each pair to vary $H(s,t)$ and $H(s',t)$ independently. A finite cover of the possible diagonal preimage makes the total pair map transverse to the diagonal in $(S^3\times I)^2$. Its source-pair-time dimension is three and the diagonal has codimension four, so the generic slice has no double points. Both perturbations are supported away from the endpoint collars and can be chosen small enough to preserve immersion and local injectivity. Thus every time-slice is a smooth embedding, giving an isotopy of proper arcs rel collars. By [F3], it extends to an ambient isotopy fixed near the two end levels. This produces the required vertical arc in each concordance without changing the oriented endpoint knot types. [F1, F2, F3, F4, given, construct, choose]

2.1 We supply a levelwise adapted tube, rather than assuming that any tubular chart respects the level function. After step 1.1, the smooth annulus contains the vertical core $\{p\}\times I$. The differential of the level function on that annulus is surjective along the core, since it takes its core tangent to one. In one fixed small geodesic chart about $p$, let $w(t)$ be the smooth unit tangent to the level arc of the annulus at $(p,t)$, with its sign given by the annulus orientation. The inverse function theorem and compactness give a uniform neighborhood in which the annulus is the graph $x=a w(t)+f(a,t)$ with $f(a,t)\perp w(t)$, $f(0,t)=\partial_a f(0,t)=0$. Product endpoint collars make this data constant in $t$ near the ends. For small $r$, take a smooth spatial cutoff $\chi$ supported in the radius-$r$ chart ball and equal to one in its concentric half ball. The levelwise map $x\mapsto x-\chi(x)f(\langle x,w(t)\rangle,t)$ straightens that graph to the line $\mathbb Rw(t)$ near zero. Its displacement is $O(r^2)$ and its derivative differs from the identity by $O(r)$ uniformly in $t$, so for small $r$ that derivative norm is less than $1/2$. It is globally injective by the Lipschitz estimate and onto by contraction applied to the inverse equation; extend it by the identity outside the chart. Scaling its displacement gives an isotopy of diffeomorphisms, product on endpoint collars. Compactness and embeddedness separate every other portion of the annulus from a sufficiently small fixed ball about the core. Thus, in the changed coordinates, the tube is literally this fixed small ball times $I$, and its intersection with the annulus is the family of diameters in directions $w(t)$. A smooth orthonormal frame starting with $w(t)$ identifies these diameters with $D^1\times I$: one may construct the remaining vectors locally by projection and Gram–Schmidt, successively extending along finitely many overlapping intervals; on each overlap the two positive plane frames differ by a smooth angle and interpolation of a real angle lift pastes them, constant on the endpoint collars. The tube complement is the product of the complement of a small coordinate ball in $S^3$ with $I$, hence is $B^3\times I$ by stereographic radial coordinates. Cut this diameter strip from each annulus, leaving a rectangle. Glue the two complement products along $S^2\times I$ using the fixed orientation-reversing sphere map, with the chosen diameter frames matching the strip edges. Any parameter dependence of those frames is absorbed by their explicitly given smooth family of orthogonal ball maps, so the ambient gluing is conjugate to the fixed product gluing. The result is $S^3\times I$. The two rectangles glue along their two side intervals, with compatible orientations; their Euler characteristic is $1+1-2=0$, and their boundary consists of $-(K_0\#J_0)$ and $K_1\#J_1$. They therefore form the desired smooth annulus with product collars. [F1, F2, F3, F5, step 1.1, construct, algebra]

3.1 The preceding construction proves the smooth implication. [step 1.1, step 2.1]

4.1 For locally flat topological concordances, the cut-and-glue argument would apply once [L1] is supplied in its full pair-adapted form. A verticalized core in a merely locally flat annulus need not make the restriction of the smooth level coordinate a submersion on that annulus: the inverse-function and graph-subtraction argument of step 2.1 is a smooth argument. The arc-unknotting statement alone therefore does not give the topological tube or identify its entire complement with the required product. The original full two-category Statement is retained, but the topological implication and this item's readiness remain held on exactly that proper pair-neighborhood and normalization obligation. [F1, F2, L1, step 2.1]

## Sources

[[lem-knot-connected-sum-well-defined]]

[[thm-isotopy-extension]]

[[thm-parametric-transversality]]
