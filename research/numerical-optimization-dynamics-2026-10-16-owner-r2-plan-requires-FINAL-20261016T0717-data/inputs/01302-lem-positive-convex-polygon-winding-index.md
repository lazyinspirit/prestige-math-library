---
id: lem-positive-convex-polygon-winding-index
kind: lemma
title: "A positively oriented convex polygon has winding index one inside and zero outside"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-winding-number-closed-complex-contour
  - thm-winding-number-locally-constant
  - thm-winding-number-zero-unbounded-component
  - lem-winding-number-jumps-by-one-across-a-regular-planar-arc
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
      locator: "Complete 304-page text retrieved; inspected Chapter 4 §4.1, printed pp. 93–96, and Chapter 5 §5.4, printed pp. 128–132."
---

## Statement

Let $v_0,\ldots,v_{m-1}\in\mathbb Q+i\mathbb Q$, $m\ge3$, be the cyclically ordered vertices of a simple strictly convex polygon whose edges are traversed counterclockwise. Let $P$ be its filled convex hull and let $\Gamma$ be the concatenation of its oriented edges. For every $z\notin\Gamma$, the winding number $n(\Gamma,z)$ is $1$ if $z\in\operatorname{int}P$ and $0$ if $z\notin P$.

## Facts & Assumptions

**Given:** A simple strictly convex polygon with rational vertices, its positive boundary orientation, its filled convex hull $P$, and the winding number of the resulting closed contour.

[F1] For a closed contour and a point off its trace, $n(\Gamma,z)=(2\pi i)^{-1}\int_\Gamma (w-z)^{-1}\,dw$ ([[def-winding-number-closed-complex-contour]]).

[F2] The winding number is constant on each connected component of the complement of the trace ([[thm-winding-number-locally-constant]]).

[F3] The winding number is zero on the unbounded connected component of the complement ([[thm-winding-number-zero-unbounded-component]]).

[F4] At a single regular arc traversed with positive real tangent, the index on the left side minus the index on the right side is one ([[lem-winding-number-jumps-by-one-across-a-regular-planar-arc]]).

## Proof
1.1 Fix an exterior point $q\notin P$. Compactness gives a nearest point $p\in P$. For every $u\in P$, convexity puts $p+t(u-p)$ in $P$ for $0\le t\le1$; minimality of $p$ gives $\|q-p\|_2^2\le\|q-p-t(u-p)\|_2^2$. Expanding, dividing by $t>0$, and letting $t\downarrow0$ yields $\langle q-p,u-p\rangle\le0$. Hence the ray $q+s(q-p)$, $s\ge0$, remains strictly in the separating half-plane and avoids $P$. Each exterior point can therefore be joined outside $P$ to a circle containing $P$ in its interior; that circle is connected, so $\mathbb C\setminus P$ is connected and unbounded. [given, construct]

2.1 By [F1], $n(\Gamma,q)$ is the winding index of the contour. Since $\Gamma\subset P$, the exterior $\mathbb C\setminus P$ lies in the unbounded component of $\mathbb C\setminus\Gamma$; [F3] gives $n(\Gamma,q)=0$ for every $q\notin P$. [F1, F3, step 1.1]

3.1 Fix $z\in\operatorname{int}P$. Choose a ray from $z$ whose direction is not aimed at a vertex. Its intersection with the convex polygon is a bounded interval starting at $z$, so the ray exits at the interior of a single edge. The polygon interior lies to the left of that edge because the boundary orientation is counterclockwise. Taking sufficiently close points on its two sides, [F4], after an orientation-preserving translation and rotation, gives index difference one from the exterior side to the interior side. The exterior-side index is zero by step 2.1. Thus the winding number is one at an interior point near that edge. [F4, step 2.1, choose]

4.1 The interior of a convex polygon is connected. Its points avoid $\Gamma$, so [F2] makes the winding number constant throughout the interior. Step 3.1 identifies this constant as one. Together with step 2.1 this proves both cases. [F2, step 2.1, step 3.1] ∎
