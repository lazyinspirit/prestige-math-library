---
id: ex-strict-transform-node-separates-branches
kind: example
title: "First blowup of the node y^2=x^3+x^2 separates its branches"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-plane-curve-multiplicity-transform-chart
  - lem-blowup-plane-origin-incidence-equations
  - def-strict-transform-closed-subscheme
  - thm-blowup-separates-plane-curve-tangent-directions
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.3 the proper transform of a nodal curve meets E at s=+/-1, pp. 389-390"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, Example 11 (y^2=x^3+x^2) with preimage {(t=+/-1, x=0)}, PDF p. 24"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 Example 8.66 nodal cubic, pp. 195-197"
verification:
  precheck: pass
---

## Example

Let $C=V(y^2-x^3-x^2)$ over a field $k$ of characteristic not $2$, with its
node at the origin. In the chart $y=xs$ the total transform is
$x^2(s^2-x-1)$, so the strict transform is $V(s^2-x-1)$, which meets $E$ at
the two distinct points $s=+1$ and $s=-1$; the other chart contributes no
additional points of $E$. Hence the two branches of the node are separated by one point
blowup, and the strict transform is regular and transverse to $E$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$, the nodal plane curve
$C=V(y^2-x^3-x^2)\subseteq\mathbb A^2_k$ with node at the origin, the blowup
of the origin with exceptional curve $E$, its two standard charts, and the
strict transform $C'$.

[A1] **Choice.** The Axiom of Choice is inherited from the blowup
construction; the explicit chart computations below use no further choice. ([[def-axiom-of-choice]]).

[F1] [[lem-plane-curve-multiplicity-transform-chart]]: In the chart with
coordinates $(x,s)$ where $y=xs$, the total transform equation of a curve of
multiplicity $m$ is $f(x,xs)=x^mg(x,s)$ with $g(0,s)=f_m(1,s)$ the leading
form evaluated at $(1,s)$, and the strict transform is defined by $g=0$;
symmetrically in the other chart.

[F2] [[lem-blowup-plane-origin-incidence-equations]]: For
$\operatorname{Bl}_0\mathbb A^2_k$ the two standard charts are
$\operatorname{Spec}k[x,T]$ with $y=xT$ and $\operatorname{Spec}k[y,U]$ with
$x=yU$, glued by inverting $T$ and $U$ with $TU=1$; the exceptional divisor
$E$ is $V(x)$ and $V(y)$ respectively and is $\mathbb P^1_k$.

[F3] [[def-strict-transform-closed-subscheme]]: The strict transform is the
scheme-theoretic closure of the inverse image of the complement of the
center; in a chart where the ideal of $E$ is invertible it is cut by the
saturation of the inverse-image ideal by that ideal.

[F4] [[thm-blowup-separates-plane-curve-tangent-directions]]: For a reduced
plane curve $C=V(f)$ through the origin of multiplicity $m$ with leading form
$f_m$, the scheme $C'\cap E$ is cut out on $E$ by the form $f_m$: its closed
points correspond to the irreducible factors of $f_m$, a factor of
multiplicity $s$ contributes with multiplicity $s$, and the $0$-cycle has
total degree $m$; over a field over which $f_m$ splits these points are
exactly the tangent directions of $C$ at the origin, and if $f_m$ is
squarefree the strict transform meets $E$ transversally at each of them.

## Verification

1.1 In the first chart of [F2] write $s=T=y/x$, so the chart ring is $k[x,s]$ with $y=xs$ and $E=V(x)$, and let $f=y^2-x^3-x^2$, a reduced equation of $C$ of multiplicity $m=2$ at the origin with leading form $f_2=y^2-x^2=(y-x)(y+x)$, which is squarefree because the characteristic is not $2$; substituting $y=xs$ gives $f(x,xs)=x^2s^2-x^3-x^2=x^2(s^2-x-1)$ with $s^2-x-1$ not divisible by $x$, since its reduction modulo $x$ is $s^2-1$, so the strict transform is cut in this chart by $g=s^2-x-1$ by [F1] and [F3]. [A1, F1, F3, given]

2.1 In this chart $C'\cap E=V(x,s^2-x-1)=V(x,s^2-1)$, the two distinct points $s=1$ and $s=-1$; at each of them the local ring of $C'$ is $k[s]_{(s\mp1)}$ with the equation of $E$ restricting to $s^2-1=(s-1)(s+1)$, which has a simple zero at each point, so the contact order is one and $C'$ meets $E$ transversally there; this agrees with [F4], since $f_2(1,s)=s^2-1=(s-1)(s+1)$ is squarefree with the two distinct roots $s=\pm1$, the two tangent directions of $C$ at the origin. The curve $C'=V(s^2-x-1)$ is regular, its gradient $(-1,2s)$ being nowhere zero, so the strict transform is regular at both points. [F3, F4, step 1.1]

3.1 In the second chart of [F2] write $U=x/y$, so the chart ring is $k[y,U]$ with $x=yU$ and $E=V(y)$; substituting gives $f=y^2-y^3U^3-y^2U^2=y^2(1-U^2-yU^3)$, so the strict transform is cut in this chart by $1-U^2-yU^3$ and meets $E$ where $y=0$ and $1-U^2=0$, namely at $U=1$ and $U=-1$; these are the same two points as $s=1$ and $s=-1$, because $U=1/s$ on the overlap $TU=1$ of [F2], and there is no further point of $E$ on $C'$ in this chart, so the other chart contributes no additional points of $E$. [F1, F2, F3, step 2.1]

4.1 Consequently $C'\cap E$ consists exactly of the two distinct points over the node, one for each of the two factors $y-x$ and $y+x$ of the leading form, so the two branches of the node, whose tangent directions are those two factors, arrive at distinct points of $E$ and are separated by the one point blowup; the strict transform $C'$ is regular and transverse to $E$ at both points, and in the first chart it is the smooth conic-like curve $V(s^2-x-1)$ while in the second chart it is $V(1-U^2-yU^3)$, the two descriptions agreeing on the overlap. [F4, step 2.1, step 3.1] ∎
