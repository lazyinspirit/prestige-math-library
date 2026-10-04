---
id: ex-strict-transform-cusp-first-blowup
kind: example
title: "First blowup of the cusp y^2=x^3"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-plane-curve-multiplicity-transform-chart
  - lem-blowup-plane-origin-incidence-equations
  - def-strict-transform-closed-subscheme
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - thm-blowup-separates-plane-curve-tangent-directions
  - lem-blowup-lowers-contact-order
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
      locator: "Exercise 19.4.C blowing up a cuspidal plane curve, p. 391"
    - title: "J. S. Milne, Algebraic Geometry v6.10"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
      locator: "Chapter 8 Examples 8.66-8.67 (nodal and cuspidal cubics), pp. 195-197"
verification:
  precheck: pass
---

## Example

Let $C=V(y^2-x^3)$ over a field $k$ of characteristic not $2$. Blowing up
the origin, in the chart with $y=xs$ the total transform is $x^2(s^2-x)$, so
the strict transform is the smooth parabola $s^2=x$ and it meets the
exceptional curve $E=(x=0)$ at the single point $s=0$ with multiplicity $2$;
in the other chart the strict transform does not meet $E$. Thus after one
blowup the cusp has become a regular curve tangent to $E$, and a second point
blowup of that tangency point makes the strict transforms of the curve and $E$ meet transversally with contact order one.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$, the cuspidal plane curve
$C=V(y^2-x^3)\subseteq\mathbb A^2_k$, the blowup of the origin with
exceptional curve $E$, the two standard charts, and the strict transform
$C'$.

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

[F4] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: For a
reduced plane curve of multiplicity $m$ at the blown-up point,
$\pi^*C=C'+mE$; equivalently the strict transform is obtained on each chart
by dividing a local equation of the total transform by the $m$-th power of an
exceptional equation, and $C'\cap E$ is cut by the degree-$m$ leading form of
a local equation of the curve.

[F5] [[thm-blowup-separates-plane-curve-tangent-directions]]: For a reduced
plane curve $C=V(f)$ through the origin of multiplicity $m$ and leading form
$f_m$, the scheme $C'\cap E$ is cut out on $E$ by the form $f_m$: its closed
points correspond to the irreducible factors of $f_m$, a factor of
multiplicity $s$ contributes with multiplicity $s$, and the $0$-cycle has
total degree $m$.

[F6] [[lem-blowup-lowers-contact-order]]: For distinct regular curves
$Y,Z$ through a point with contact order $n>1$, the strict transforms under
the blowup of that point meet at the point of the new exceptional curve
corresponding to their common tangent direction, with contact order $n-1$.

## Verification

1.1 In the first chart of [F2] write $s=T=y/x$, so the chart ring is $k[x,s]$ with $y=xs$ and $E=V(x)$, and let $f=y^2-x^3$, a reduced equation of the cusp of multiplicity $m=2$ at the origin; substituting $y=xs$ gives $f(x,xs)=x^2s^2-x^3=x^2(s^2-x)$ with $s^2-x$ not divisible by $x$ because its reduction modulo $x$ is $s^2\ne0$, so by [F1] (or [F4]) the strict transform is cut in this chart by $g=s^2-x$, and by [F3] the strict transform is the closure of the corresponding open part. [A1, F1, F3, F4, given]

2.1 The curve $g=s^2-x=0$ is regular: its gradient $(-1,2s)$ never vanishes, so $C'$ is the smooth parabola $x=s^2$; its intersection with $E=V(x)$ in this chart is $V(x,s^2-x)=V(x,s^2)$, the single point $s=0$, and the local ring of $C'$ there is $k[s]_{(s)}$ with the equation of $E$ restricting to $s^2$, so the contact order is $\operatorname{length}\bigl(k[s]_{(s)}/(s^2)\bigr)=2$; both $C'$ and $E$ are regular at this point with the same tangent line, so the curves are tangent there. This agrees with [F5]: the leading form of $f$ is $f_2=y^2$, whose dehomogenization $f_2(1,s)=s^2$ vanishes only at $s=0$, with multiplicity $2$, so $C'\cap E$ is the single point of multiplicity $2$. [F4, F5, step 1.1]

3.1 In the second chart of [F2] write $U=x/y$, so the chart ring is $k[y,U]$ with $x=yU$ and $E=V(y)$; substituting gives $f=y^2-y^3U^3=y^2(1-yU^3)$, and the residual factor $1-yU^3$ is a unit at every point of $E$ (where $y=0$ it equals $1$), so the strict transform has no points of $E$ in this chart. [F1, F2, step 2.1]

4.1 The total transform identity $\pi^*C=C'+2E$ of [F4] is visible in the two charts of steps 1.1 and 3.1: the pullback of $y^2-x^3$ factors as $x^2(s^2-x)$ and as $y^2(1-yU^3)$, the exceptional factor $x^2$ or $y^2$ contributing $2E$ and the residual factor the strict transform; no other component of $E$ appears, since the residual factors do not vanish along $E$. [F2, F3, F4, step 1.1, step 3.1]

5.1 The point $V(x,s)$ at which $C'$ is tangent to $E$ is a point at which the two distinct regular curves $C'$ and $E$ meet with contact order $n=2$; blowing up this point, [F6] applies with $n>1$ and shows that the strict transforms of $C'$ and of $E$ meet, at the point of the new exceptional curve corresponding to their common tangent direction, with contact order $n-1=1$, that is, transversally: the tangency is separated by the second blowup. [F6, step 2.1, step 4.1]

6.1 Therefore in the first chart the strict transform is the smooth parabola $s^2=x$, meeting $E=(x=0)$ at the single point $s=0$ with multiplicity $2$, while in the second chart the strict transform does not meet $E$; the cusp has become a regular curve tangent to $E$, and the second point blowup reduces the contact order of $C'$ with $E$ to one, separating the tangency. [step 2.1, step 3.1, step 5.1] ∎
