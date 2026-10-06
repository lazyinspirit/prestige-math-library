---
id: lem-finitely-cornered-regular-plane-curve-separates-without-choice
kind: lemma
title: "A finitely cornered regular plane curve separates without choice"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-winding-number-jumps-by-one-across-a-regular-planar-arc, lem-winding-number-is-locally-constant-via-integral-estimate, thm-complement-of-a-compact-plane-set-has-one-unbounded-component, thm-components-partition-and-are-closed, cor-components-of-open-subsets-of-rn-are-polygonally-connected, cor-rn-is-polygonally-connected-and-locally-path-connected, def-connected-component-and-quasicomponent, def-interior-closure-boundary-top, thm-heine-borel-rn, cor-mean-value-theorem, cor-intermediate-value-theorem-topological, def-subspace-topology-top, def-homeomorphism-and-open-maps, thm-compact-subset-is-closed-and-bounded]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 1
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Carsten Thomassen, The Jordan-Schonflies Theorem and the Classification of Surfaces (American Mathematical Monthly 99 (1992) 116-130)"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
      locator: "Theorem 4.1, printed pp. 126-127; the classical separation theorem applied to this piecewise-regular topological embedding, with the local proof supplying the choice-free winding-number argument"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3 (Jordan curve theorem for piecewise smooth curves)"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
      locator: "Ch. 4 §2.3, printed pp.116-118 (the winding-number proof of the Jordan curve theorem for a smooth curve, applied edge by edge)"
---

## Statement

Let $c:S^1\to\mathbb R^2$ be a piecewise-$C^1$ topological embedding with finitely many
corner parameters. Assume each smooth edge is regular up to its endpoints and the two
incident one-sided tangent rays at each corner are distinct. Then $\mathbb R^2\setminus
c(S^1)$ has exactly two connected components, one bounded and one unbounded, and each
has boundary $c(S^1)$. No choice axiom is assumed.

## Facts & Assumptions

**Given:** A piecewise-$C^1$ topological embedding $c:S^1\to\mathbb R^2$ with finitely many corner parameters, each smooth edge regular up to its endpoints and the two incident one-sided tangent rays distinct at each corner.

[F1] If an oriented closed piecewise-$C^1$ contour contains exactly one regular $C^1$ arc near $0$, traversed once with positive real tangent, and the remaining contour is compact and disjoint from $0$, then for all small $\varepsilon>0$ the points $i\varepsilon$ and $-i\varepsilon$ avoid it and the two winding numbers differ by $1$. ([[lem-winding-number-jumps-by-one-across-a-regular-planar-arc]]).

[F2] If the trace stays at distance at least $d$ from $p_0$ and $|p-p_0|<d/2$, then $|n(\Gamma,p)-n(\Gamma,p_0)|\le L|p-p_0|/(\pi d^2)$, and the winding number is locally constant on the complement of the trace. ([[lem-winding-number-is-locally-constant-via-integral-estimate]]).

[F3] If $K\subseteq\mathbb C$ is compact, then $\mathbb C\setminus K$ has exactly one unbounded connected component and every other component is bounded. ([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]]).

[F4] The connected components of a topological space are nonempty, pairwise disjoint, cover the space, and each is closed in the space. ([[thm-components-partition-and-are-closed]]).

[F5] The connected components of an open subset of $\mathbb R^n$ are open and polygonally connected. ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F6] For $n\ge1$, $\mathbb R^n$ is polygonally connected and connected and is locally path-connected. ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[F7] A closed box in $\mathbb R^n$ is a compact subset of Euclidean space. ([[thm-heine-borel-rn]]).

[F8] A function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some interior point $c$. ([[cor-mean-value-theorem]]).

[F9] A continuous real function on a connected space has order-convex image and attains every intermediate value. ([[cor-intermediate-value-theorem-topological]]).

## Proof

**Proof technique:** direct.

1.1 Orient $c(S^1)$ by the parameter; since $S^1$ is a closed bounded subset of the plane it is compact by [F7], any open cover of $c(S^1)$ pulls back along the continuous bijection $c$ to an open cover of $S^1$, so $c(S^1)$ is compact, and it is closed in the plane. [given, F7]

2.1 At a smooth edge point choose linear coordinates with the tangent horizontal; the first coordinate has nonzero derivative along the edge, so after shrinking it has one sign, [F8] makes it strictly monotone, [F9] shows its image is an interval, and its inverse is $C^1$ by the difference quotient and the derivative lower bound, exhibiting the curve as a local graph; at a corner let $u$ be the outgoing directed unit tangent and $v$ the incoming directed unit tangent. The geometric incident rays point along $u$ and $-v$, so their distinctness excludes $v=-u$. Thus the coordinate $\xi(w)=\langle w,u+v\rangle$ has rate $1+\langle u,v\rangle>0$ along both branches, so both are $C^1$ graphs over $\xi$ with the corner as common endpoint and disjoint $\xi$-ranges and their union is one local graph, and no opposite-directed tangent case remains under the hypothesis. A small disk about the corner meets the curve in two arcs meeting only at the corner and its complement in that disk has exactly two connected components; every sufficiently short parameter arc has image open in $c(S^1)$, so inside the corresponding ambient open set one chooses an ambient disk in which the curve portion is exactly this local model and whose complement has exactly two connected sides; the finitely many such parameter arcs cover $S^1$, and compactness of $S^1$ yields a finite subcover. Shrink the side rectangles using positive separation of the images of compact nonadjacent parameter arcs; then every overlap near the curve concerns compatible adjacent arc charts and cannot interchange the oriented sides. [F8, F9, step 1.1]

3.1 The overlap graph of this finite cover is connected, since otherwise the unions of parameter arcs in its two vertex classes would be disjoint nonempty closed subsets covering the connected circle; whenever two parameter arcs overlap, their rectangles overlap near a common curve point and the left-side patches, respectively the right-side patches, meet there because both are the same oriented side of the same local graph, so the unions $V_+$ and $V_-$ of all left and right patches are connected subsets of the complement and every curve point is approached from each side. [step 2.1]

4.1 At a smooth edge point $p$ with unit tangent $\tau$ use the oriented coordinate $w=\bar\tau(z-p)$: the defining integral is unchanged because $dw/(w-w_0)=dz/(z-z_0)$ when $w_0=\bar\tau(z_0-p)$, so the local jump lemma [F1] gives different winding numbers on the two side unions near $p$, while the local estimate [F2] makes the winding number constant on each connected side; hence $V_+$ and $V_-$ lie in two distinct connected components of the complement. [F1, F2, step 3.1]

5.1 Let $U$ be any component of the open complement; $U$ is closed in the complement by [F4], open in the plane and polygonally connected by [F5], and its boundary is contained in the curve and is nonempty, because otherwise $U$ would be a nonempty proper clopen subset of the connected plane, contradicting [F6]; at a boundary point the local graph patch has exactly two connected sides, and since $U$ meets one of them and an open connected side inside $U$ cannot meet the other, the whole side lies in $U$, identifying $U$ with one of the two global collar-side components; hence the complement has at most two components, and at least two by step 4.1. [F4, F5, F6, step 4.1]

6.1 The local sides of $V_+$ and $V_-$ approach every curve point and no component boundary lies off the curve, so the curve is the boundary of both components, and by [F3] exactly one of them is unbounded while the other is bounded; all choices in the collar construction are finite, and neither the Jordan-Brouwer theorem, the Jordan-Schonflies theorem, nor any choice axiom is used. [F3, step 5.1] ∎
