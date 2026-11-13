---
title: Sign facets of a cone arrangement
status: draft
research_item: def-author-5a1e77100001-sign-facets
dependency_level: 2
sources:
  references:
    - title: Luis Paris, K(π, 1) conjecture for Artin groups (2014)
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: §2.3, printed p.382 (PDF page 23), paragraphs defining chambers,
        induced arrangements and codimensional facets; arrangement hypotheses on
        printed p.364 (PDF page 5).
      statement: For H in the arrangement, the induced arrangement in I∩H consists of
        the distinct traces H∩H′ for H′≠H that meet I. Chambers are the
        codimension-zero facets; chambers of induced arrangements are the
        codimension-one facets. For d≥2, codimension-d facets are
        codimension-(d−1) facets of an induced arrangement.
      hypotheses: A locally finite set of linear hyperplanes, each meeting a nonempty
        open convex cone I in a finite-dimensional real vector space.
      reading_limits: Read the arrangement definition on printed p.364 and the
        chamber/induced-arrangement/facet definitions on printed p.382 in the
        PDF text. Only these definitions are imported; no theorem on facet
        supports, posets, Salvetti complexes or equivariance is imported. The
        equivalence with sign fibers is proved locally below.
---

## Prerequisites

- [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)
- [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)
- [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded)
- [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected)
- [prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites)
- [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)
- [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space)
- [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane)
- [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection)
- [math:def-dimension](https://alphabetamath.cc/item/def-dimension)
- [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)
- [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)
- [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace)
- [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span)
- [` Luis Paris, K(π, 1) conjecture for Artin groups (2014) · §2.3, printed p.382 (PDF page 23), paragraphs defining chambers, induced arrangements and codimensional facets; arrangement hypotheses on printed p.364 (PDF page 5). `](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf)


## Definition

Use the finite-dimensional locally finite arrangement conventions of *def-arrangement-topology-interface-artin-tits-prerequisites*, now with $I$ a nonempty open convex cone in $E$. For each $H\in\mathcal A$ choose a nonzero real linear functional $h_H$ with kernel $H$. Define the sign of $x\in I$ at $H$ to be $\operatorname{sgn}(h_H(x))\in\{-,0,+\}$. A facet is a nonempty fiber of the simultaneous sign map on $I$. Write $\mathcal F$ for the facets and $\mathcal C$ for those having no zero signs. A cone here is stable under multiplication by positive real scalars. Closures in the following helpers are always relative to $I$.

## Definition references

[def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites)

[math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional)

[math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map)

## Justification

First justify the defining functionals. For a hyperplane $K$ in a finite-dimensional real vector space $V$, [math:def-linear-hyperplane](https://alphabetamath.cc/item/def-linear-hyperplane) says that $\dim(V/K)=1$. Use the quotient operations of [math:def-quotient-vector-space-and-canonical-projection](https://alphabetamath.cc/item/def-quotient-vector-space-and-canonical-projection) and the meanings of dimension and basis in [math:def-dimension](https://alphabetamath.cc/item/def-dimension) and [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis). Thus $V/K$ has a one-element basis $\{b\}$. If $v\notin K$, write $v+K=s b$ with $s\ne0$. For every $x\in V$, write $x+K=r b$; then $x-(r/s)v\in K$. This coefficient is unique: if both $x-tv$ and $x-uv$ lie in $K$, then $(t-u)(v+K)=0$, so $t=u$. Define $f_v(x)=t$ by $x-tv\in K$. For $x-tv,y-uv\in K$ and $\alpha,\beta\in\mathbb R$, the subspace property gives $(\alpha x+\beta y)-(\alpha t+\beta u)v\in K$. Uniqueness therefore gives $f_v(\alpha x+\beta y)=\alpha f_v(x)+\beta f_v(y)$, so $f_v$ is a linear functional, with $f_v(v)=1$ and $\ker f_v=K$. These are the functional and kernel notions of [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) and [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map). For the simultaneous choices on $E$, use the fixed coordinates $c$ in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites). Let $e_j\in\mathbb R^n$ have $j$-th coordinate $1$ and all other coordinates $0$. Coordinatewise evaluation gives $z=\sum_{j<n}z_j e_j$. Hence, for each proper $H$, some $c^{-1}(e_j)$ lies outside $H$, since otherwise every $x=c^{-1}(\sum_{j<n}c(x)_j e_j)$ would lie in $H$. Take the least such $j$ and set $v_H=c^{-1}(e_j)$ and $h_H=f_{v_H}$. This supplies a definite family of defining functionals without arbitrary choices. When $n=0$ there are no hyperplanes.

Also, if $f,g:V\to\mathbb R$ are nonzero linear functionals with the same kernel $K$, take any $v$ with $f(v)\ne0$. For every $x\in V$, linearity gives $x-\frac{f(x)}{f(v)}v\in K$, whence $g(x)=\frac{g(v)}{f(v)}f(x)$. Since $v\notin K=\ker g$, the scalar $g(v)/f(v)$ is nonzero. This proves the scalar-multiple assertion in any real vector space, using precisely the functional and kernel definitions in [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) and [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map).

The arrangement conventions in [def-arrangement-topology-interface-artin-tits-prerequisites](item-def-arrangement-topology-interface-artin-tits-prerequisites) and linear functionals in [math:def-algebraic-dual-and-linear-functional](https://alphabetamath.cc/item/def-algebraic-dual-and-linear-functional) make the signs meaningful. Kernels are understood as in [math:def-kernel-and-image-of-a-linear-map](https://alphabetamath.cc/item/def-kernel-and-image-of-a-linear-map). Write $n=\dim E$ and use the specified coordinate isomorphism $c:E\to\mathbb R^n$. For $n\geq1$, apply [math:lem-euclidean-linear-maps-have-matrices-and-are-bounded](https://alphabetamath.cc/item/lem-euclidean-linear-maps-have-matrices-and-are-bounded) to $h_H\circ c^{-1}$ to obtain $|h_H(u)-h_H(v)|\leq K_H\|c(u)-c(v)\|_2$ for some $K_H\geq0$. Taking a coordinate-ball radius smaller than $|h_H(u)|/(K_H+1)$ preserves every nonzero value's sign. Thus $h_H$ is continuous, $H=h_H^{-1}(0)$ is closed, and its two strict half-spaces are open. For $n=0$ there are no hyperplanes or defining nonzero functionals.

Connectedness and separation are understood as in [math:def-connected-space](https://alphabetamath.cc/item/def-connected-space). Each fiber is an intersection of linear hyperplanes, strict half-spaces and $I$, so it is convex. Claim 1 of [math:ex-convex-subsets-of-rn-are-path-connected](https://alphabetamath.cc/item/ex-convex-subsets-of-rn-are-path-connected) makes its coordinate image connected when $n\geq1$. The supplier's product topology agrees with the Euclidean topology here: $\|v\|_\infty\leq\|v\|_2\leq\sqrt n\|v\|_\infty$ gives mutual ball inclusions. Transporting a separation along $c$ would therefore contradict that connectedness. For $n=0$ the nonempty fiber is a singleton and has no separation. Near $x\in I$, local finiteness gives an open ball contained in $I$ meeting only finitely many hyperplanes. Shrink its radius to avoid the finitely many among them not containing $x$, using the continuity just established. Each other hyperplane misses this connected ball and has constant sign on it, since two nonempty strict sign sets would separate the ball. The hyperplanes through $x$ form a finite set, and their intersection $L_x$ contains the whole fiber through $x$. Within this ball, that fiber is exactly its intersection with $L_x$. The zero signs, and hence $L_x$, are the same at every point of the fiber, so the fiber is relatively open in $L_x$. Using span as the smallest linear subspace containing a set, as in [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), it spans $L_x$: if $x$ lies in such a relatively open part, then for any $v\in L_x$ a sufficiently small nonzero $t$ has both $x$ and $x+tv$ in the fiber, whence $v=t^{-1}((x+tv)-x)$ lies in its linear span. This includes $L_x=\{0\}$. The fibers partition $I$. By [prop-sign-chamber-interface-artin-tits-prerequisites](item-prop-sign-chamber-interface-artin-tits-prerequisites), applied with $T=I$, those with no zero signs are exactly the chambers. They are open: the ball construction at a point with no zero signs gives a ball contained in its fiber.

For the recursive comparison, fix $H\in\mathcal A$, take $H$ as the new ambient vector space, and put $I^H=I\cap H$ and $\mathcal A^H=\{H\cap H':H'\in\mathcal A\setminus\{H\},\ (H\cap H')\cap I\ne\varnothing\}$. This is a set of distinct traces: repetitions are identified, and traces missing $I^H$ are omitted. Since distinct ambient hyperplanes do not contain one another, every retained trace is a linear hyperplane of $H$. The domain $I^H$ is a nonempty open convex cone in $H$. At $x\in I^H$, intersect an open neighbourhood in $I$ meeting finitely many ambient hyperplanes with $H$. Any trace meeting this neighbourhood comes from an ambient hyperplane meeting the original neighbourhood. Thus $\mathcal A^H$ is locally finite in $I^H$, so the same arrangement conventions apply in the smaller ambient space.

The recursive definition in [Paris, §2.3, printed p.382](https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf) calls chambers codimension-zero facets, chambers of these induced arrangements codimension-one facets, and, for $d\geq2$, codimension-$(d-1)$ facets of induced arrangements codimension-$d$ facets of the original arrangement.

Here is the local comparison with that recursion. On $I^H$ the $H$-coordinate is identically zero. A hyperplane $H'$ whose trace misses $I^H$ has a constant nonzero sign there, because $I^H$ is convex. For a retained trace, $h_{H'}|_H$ is a nonzero defining functional. By the scalar-multiple argument above, two such restrictions with the same kernel are nonzero scalar multiples, so identifying duplicate traces only removes redundant sign coordinates, with a possible fixed sign reversal. Consequently, two points of $I^H$ have the same induced sign vector if and only if they have the same full ambient sign vector. Thus induced sign fibers are exactly the ambient sign fibers contained in $H$. Induction on ambient dimension now proves the recursive comparison: in dimension zero the empty arrangement has the single chamber $I$; in higher dimension, fibers with no zero signs are already the chambers, while any other fiber lies in some $H$ and is, by induction, a recursive facet of its induced arrangement. Conversely, every recursive facet lying in some $H$ is an induced sign fiber by induction, hence an ambient sign fiber by the correspondence just proved. For such a fiber $F$, let $L$ be its span as defined in [math:def-linear-combination-and-span](https://alphabetamath.cc/item/def-linear-combination-and-span), the same subspace whether computed in $H$ or in $E$ by the subspace-span comparison in [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis). The subspaces $L\subseteq H\subseteq E$ are finite-dimensional by [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace), since $E$ is finite-dimensional. To compute the dimension drop, choose $v\in E$ with $h_H(v)\ne0$. For every $r\in\mathbb R$, one has $h_H((r/h_H(v))v)=r$, so $\operatorname{im}h_H=\mathbb R$. The set $\{1\}$ is a basis of $\mathbb R$ over itself: every $r$ equals $r\cdot1$ and $a\cdot1=0$ implies $a=0$. Thus [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity), applied to the real linear map $h_H:E\to\mathbb R$ with kernel $H$, gives $n=\dim E=\dim H+1$. Put $d=\dim L$. The geometric codimension of $F$ in either ambient space is the ambient dimension minus the dimension $d$ of its support $L$. Consequently $\operatorname{codim}_E F=n-d=(\dim H-d)+1=\operatorname{codim}_H F+1$, as required by the recursion. This also covers $L=\{0\}$. Choices of the signs of the $h_H$ merely rename coordinates.

## Source notes

The sign-fiber description and its equivalence with the cited recursive definition are justified locally above; no equivalence theorem is imported.
