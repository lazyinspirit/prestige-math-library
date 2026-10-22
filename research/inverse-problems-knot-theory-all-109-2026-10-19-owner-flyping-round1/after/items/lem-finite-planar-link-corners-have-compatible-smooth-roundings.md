---
id: lem-finite-planar-link-corners-have-compatible-smooth-roundings
kind: lemma
title: "Finite planar link corners have compatible smooth roundings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-regular-oriented-link-diagram
  - thm-euclidean-implicit-function-theorem
  - thm-isotopy-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable choice is inherited only from ambient isotopy extension for the height-realization assertion. The finite local graph roundings and the explicit relative diffeomorphisms use no additional choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "William Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), 37–44, crossing-ball setup, printed pp.38–39; the explicit rounding adapter is proved here"
      url: "https://doi.org/10.1016/0040-9383(84)90023-5"
---

## Statement

Assume countable choice. Let $K\subset S^3$ be an embedded link smooth except at finitely many planar corners. Supply disjoint coordinate boxes about these corners, each meeting $K$ in one arc lying in a coordinate plane, with its two oriented one-sided tangents in a common open half-plane. Fix one positive graph coordinate in each box. A rounding means replacement there by a smooth planar graph in that coordinate, agreeing with the old arc near the box ends. Then arbitrarily small such roundings exist, equal to $K$ outside these boxes. Any two sufficiently fine such roundings are related by a smooth ambient isotopy supported in those same boxes, fixing their exterior pointwise. Component labels and orientations are retained. Consequently every surface disjoint from the boxes stays fixed; for a two-point decomposing sphere disjoint from the boxes, triviality or nontriviality of its side tangles is unchanged when one such rounding is replaced by another.

For the usual crossing-ball picture of a finite regular diagram, obtained by semicircle overpasses and underpasses inside disjoint crossing balls and by its planar edges outside, all sufficiently fine roundings represent the same smooth oriented link as the diagram. At a semicircle endpoint one may also leave the entire part inside its crossing ball unchanged and round only the exterior arc; that exterior rounding can lie on the opposite side of the projection face from the semicircle. This last assertion compares actual smooth roundings; it does not assert a smooth diffeomorphism carrying an unrounded corner to a smooth arc.

## Statement references

[[def-countable-choice]]

[[def-regular-oriented-link-diagram]]

## Facts & Assumptions

**Given:** Countable choice, the finite planar-corner model with its disjoint boxes, and for the final assertion a finite regular diagram and its smooth height realization.

[F1] A scalar smooth equation with nonzero derivative has a local smooth inverse graph, with regularity obtained by iterating the implicit derivative formula. ([[thm-euclidean-implicit-function-theorem]])

[F2] A smooth isotopy of embeddings of a compact link in a boundaryless three-manifold extends to an ambient isotopy under countable choice, with support in any prescribed neighborhood of its compact track. ([[thm-isotopy-extension]])

[F3] A regular diagram has an immersed projection with only finitely many transverse double points and records strict over-under height inequalities at precisely those points. ([[def-regular-oriented-link-diagram]])

## Proof

1.1 In one corner plane choose a linear coordinate $u$ positive on both oriented one-sided tangent directions. By [F1] each side is a graph, and after shrinking the box their union is $(u,f(u),0)$, where $f$ is continuous, smooth on each side of $0$, and has bounded one-sided derivatives. In particular it is Lipschitz. On a smaller interval convolve $f$ with a smooth nonnegative unit-integral kernel of radius $\epsilon$, and join this to $f$ by a smooth cutoff that is one near $0$ and zero near the interval ends. The result $f_\epsilon$ is smooth, equals $f$ near the box ends, and converges uniformly to $f$, since convolution changes a Lipschitz function by at most its Lipschitz constant times $\epsilon$. Its graph is a smooth embedded arc because the $u$ coordinate remains its parameter, with derivative one. For small $\epsilon$ it stays inside the box and misses all other link pieces. Repeat in the finitely many disjoint boxes. [given, F1, construct]

2.1 Let $f_0,f_1$ be two such fine roundings in the same box, and put $b(u)=f_1(u)-f_0(u)$, a smooth function supported in the smaller interval. Choose a fixed smooth transverse cutoff $\chi(v,w)$ equal to one on a rectangle containing the graph heights in that interval and supported inside the transverse box. Make the roundings fine enough that $\|b\|_\infty\|\partial_v\chi\|_\infty<1$. Then $H_t(u,v,w)=(u,v+t b(u)\chi(v,w),w)$ is a diffeomorphism for every $0\le t\le1$: on each fixed $(u,w)$ fiber its $v$ derivative is positive and the map is the identity outside a compact interval, so it is onto with smooth inverse. It is the identity near every box face and carries $(u,f_0(u),0)$ to $(u,f_0(u)+t b(u),0)$. Extend by the identity outside the box. Finite disjoint compositions give the required smooth ambient isotopy, retaining all labels and orientations. [step 1.1, construct, algebra]

2.2 In the diagram picture, use local product crossing coordinates: transversality of the two projected branches gives a plane chart making them the coordinate axes, extended by the height coordinate. This is a change of local coordinates, leaving the given projected graph as a global set unchanged. There is at least one rounding that is a smooth height graph over exactly this projection. On an overpass use the semicircle height away from small endpoint boxes and cut that height smoothly to zero before its endpoint, using a nonincreasing cutoff at the right end and a nondecreasing one at the left; use the negative height for the underpass. The height is zero on all remaining edges. These are smooth functions of the original diagram parameters after the endpoint cutoffs, and at every crossing the over height is strictly above the under height. They give roundings of the corner arcs in their boxes: near an endpoint the incoming vertical tangent and outgoing horizontal tangent admit the common bisector coordinate of step 1.1, and the monotone height cutoff remains a regular graph in that coordinate. The boxes can be arbitrarily small, and these rounding heights retain the original component orientations. [step 1.1, F1, F3, construct]

2.3 The exterior-only endpoint rounding is explicit. At the right endpoint of an upper semicircle, take planar coordinates $u=(x-z-1)/\sqrt2$, $v=(x+z-1)/\sqrt2$. The continued circle is a smooth graph $v=F(u)$ with $F(0)=0$, $F'(0)=-1$, and the outgoing planar edge is $v=E(u)=u$. For small $u>0$, $E(u)-F(u)\ge u$, and the exterior of the crossing ball is the side $v>F(u)$. Choose a smooth $\delta(u)$ positive for $u>0$, flat at zero, bounded by $E-F$, and equal to $E-F$ beyond a small positive number. For example blend $e^{-1/u^2}$ with $E-F$ by a cutoff; after shrinking the interval, $e^{-1/u^2}\le u^2<E-F$, so the blend retains these strict bounds. Set the rounded graph equal to $F$ for $u\le0$ and $F+\delta$ for $u>0$. It is smooth across zero, equals the old semicircle inside the ball, and lies outside the ball afterwards. Since $F+\delta\le E=u$, its height $z=(v-u)/\sqrt2$ is nonpositive on the new exterior portion. The other three endpoint types follow by coordinate reflections. These are admissible graph roundings of step 1.1 and have arbitrarily small support. [step 1.1, F1, construct]

3.1 A surface disjoint from the boxes is fixed throughout step 2.1. The isotopy carries the link inside each of its complementary components to the rounded link there, and transports every boundary-parallelism disk and every closed tangle component. Hence triviality and nontriviality of the side tangles are the same for the two roundings. The same conclusion holds simultaneously for any supplied collection of witnesses outside the boxes. [step 2.1, construct]

4.1 Interpolate these smooth heights linearly with the heights of any original smooth realization of the regular diagram, using a smooth time function stationary at the ends. At a projected crossing the over-minus-under difference stays a convex combination of two positive numbers. There are no other projected multiple points by [F3], so every slice is injective. Its projected derivative never vanishes, so it is an embedding of the compact link. Apply [F2] to obtain a smooth ambient isotopy. Thus the graph rounding in step 2.2 represents the original smooth link, and every other sufficiently fine rounding does too by step 2.1. This establishes the final assertion without identifying a cornered arc with a smooth arc by a smooth map. [step 2.1, step 2.2, F2, F3, construct] ∎
