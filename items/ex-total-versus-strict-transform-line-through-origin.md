---
id: ex-total-versus-strict-transform-line-through-origin
kind: example
title: "Total and strict transform of a line through the origin"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-total-transform-divisor
  - def-strict-transform-closed-subscheme
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - lem-plane-curve-multiplicity-transform-chart
  - lem-blowup-plane-origin-incidence-equations
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
      locator: "19.4.3 total and proper transform computations and Exercise 19.4.B, pp. 389-390"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
      locator: "Lecture 9, blowup charts and proper transform, PDF p. 23"
verification:
  precheck: pass
---

## Example

Let $k$ be a field and let $L=V(y)\subseteq\mathbb A^2_k$ be the line through
the origin, of multiplicity $m=1$ at the origin. Let
$\pi\colon\operatorname{Bl}_0\mathbb A^2_k\to\mathbb A^2_k$ be the blowup of
the origin with exceptional curve $E$, and let $L'$ be the strict transform of
$L$. Then the total transform is $\pi^*L=L'+E$, the full preimage
$L'\cup E$, while the strict transform is only the closure of the part of the
preimage away from the origin. The line $L'$ is isomorphic to $L$ and meets
$E$ transversally in the single point of $E$ corresponding to the direction
of $L$; in the other chart the strict transform has no points, because that
chart meets $L$ only at the origin.

## Facts & Assumptions

**Given:** A field $k$, the line $L=V(y)\subseteq\mathbb A^2_k$ through the origin, the blowup $\pi\colon\operatorname{Bl}_0\mathbb A^2_k\to\mathbb A^2_k$ with exceptional curve $E$, and the strict transform $L'$ of $L$.

[A1] **Choice.** The Axiom of Choice is inherited from the blowup construction; no further choice enters the two explicit charts below. ([[def-axiom-of-choice]]).

[F1] [[def-total-transform-divisor]]: The total transform is the Cartier pullback, with associated line bundle the pulled-back line bundle.

[F2] [[def-strict-transform-closed-subscheme]]: The strict transform of a closed subscheme under a blowup is the scheme-theoretic closure of the inverse image of the complement of the center; in a chart where the ideal of the exceptional divisor is invertible, it is the closed subscheme cut by the saturation of the inverse-image ideal by that ideal.

[F3] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: If $C$ is a reduced curve on a regular surface $S$ with finite positive multiplicity $m$ at a closed point $p$ with $\dim\mathcal O_{S,p}=2$, and $\pi\colon S'\to S$ is the blowup of $p$ with exceptional curve $E$ and strict transform $C'$, then $\pi^*C=C'+mE$ as effective Cartier divisors on $S'$; equivalently, the strict transform is defined by dividing a local equation of the total transform by the $m$-th power of an exceptional equation on each chart.

[F4] [[lem-blowup-plane-origin-incidence-equations]]: For the blowup of $\mathbb A^2_k$ at the origin the two standard charts are $\operatorname{Spec}k[x,y][y/x]=\operatorname{Spec}k[x,y/x]$ and $\operatorname{Spec}k[x/y,y]$, each isomorphic to $\mathbb A^2_k$; the exceptional curve $E$ is cut by $x$ in the first chart and by $y$ in the second, and its two affine-line chart pieces glue to $E\cong\mathbb P^1_k$.

[F5] [[lem-plane-curve-multiplicity-transform-chart]]: In the chart $y=xs$ of the blowup of the origin, the total transform of a plane curve equation $f$ of multiplicity $m$ at the origin is the $m$-th power of an exceptional equation times the strict transform: substituting $y=xs$ one has $f(x,xs)=x^mg(x,s)$ with $g(0,s)$ the leading form evaluated at $(1,s)$, which is nonzero and hence not divisible by $x$, and the strict transform is cut by $g$ in this chart.

## Verification

1.1 In the first chart of [F4] write $s=y/x$, so the chart ring is $k[x,s]$ with $y=xs$ and the exceptional curve is $E=V(x)$; the line $L$ has local equation $f=y$ at the origin, and $f(x,xs)=xs=x\cdot s$ with $x\nmid s$, so by [F5] the total transform is cut by $x\cdot s$ and the strict transform is cut by $s$, the divided equation of multiplicity $m=1$. The preimage of $L\smallsetminus\{0\}$ is the locus $\{s=0,\ x\ne0\}$ of this chart, whose closure is $L'=V(s)\cong\operatorname{Spec}k[x]$, and $E=V(x)$; hence $\pi^*L=(x)+(s)=E+L'$ as effective Cartier divisors, in agreement with [F3], and $\pi$ restricts on $L'=V(s)$ to $(x,s)\mapsto(x,xs)=(x,0)$, an isomorphism onto $L$. [A1, F2, F3, F4, F5, given]

2.1 In the second chart of [F4] write $t=x/y$, so the chart ring is $k[y,t]$ with $x=yt$ and $E=V(y)$; the line $L$ is $V(y)$, whose pullback there is $E$ itself with no residual factor, so no point of the strict transform lies in this chart. Indeed $(y):y^\infty=(1)$, so the defining saturated ideal is the unit ideal and the strict-transform chart is empty. [F2, F4, step 1.1]

3.1 The two chart computations glue: steps 1.1 and 2.1 give $L'$ as the closed subscheme cut by $s$ in the first chart and by the unit ideal in the second, and these descriptions agree on the overlap, where $L'$ is empty; hence $L'$ is the closure of the preimage of $L\smallsetminus\{0\}$ and is isomorphic to $L$ through $\pi$. In the first chart $L'=V(s)$ and $E=V(x)$ meet in the single reduced point $V(x,s)$, the point of $E$ with chart coordinate $s=0$, which is exactly the direction of $L$; the two curves are the coordinate axes there, so they are regular with distinct tangent lines and meet transversally with contact order one. [F2, F4, step 1.1, step 2.1]

4.1 Collecting the results: $\pi^*L=L'+E$ with multiplicity one along $E$, the strict transform $L'$ is isomorphic to $L$ and meets $E$ transversally in the single point of $E$ corresponding to the direction of $L$, the strict transform has no points in the second chart, and the total transform $L'\cup E$ is the full preimage of $L$. This is exactly the assertion of the statement. [F1, F3, step 1.1, step 2.1, step 3.1] ∎
