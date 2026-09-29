---
id: fs-a-geodesic-stops-minimizing-exactly-at-its-first-conjugate-point
kind: false-statement
title: A geodesic stops minimizing exactly at its first conjugate point
status: draft
origin: pipeline
deps:
  - def-cut-time-in-a-unit-tangent-direction
  - def-jacobi-field
  - thm-path-lifting-for-covering-maps
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-countable-choice
  - prop-coordinate-geodesic-equation
  - def-covariant-derivative-along-a-curve
  - prop-coordinate-formula-for-the-curvature-tensor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Theorem 10.15 discussion, printed p.190 (PDF P206): cylinder geodesics and the cut point"
    - title: Ved Datar, Lectures on Riemannian Geometry (2025)
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Example 23.1.2, printed p.165 (PDF P173): cylinder without conjugate points"
---

## Statement

Assuming countable choice through the declared proof dependencies: **False:**
the cut time may precede every conjugate point.

## Facts & Assumptions

**Given:** The cut-time and Jacobi-field conventions in the dependencies. For
this refutation, an instant $s>0$ is conjugate to $0$ along a geodesic when a
nonzero Jacobi field on $[0,s]$ vanishes at both endpoints; this is the
two-endpoint criterion used here, and no later conjugacy result is assumed.

[A1] The declared choice assumption is countable choice, $\mathrm{AC}_\omega$,
as defined in [[def-countable-choice]] and assumed by the cut-time interface
[[def-cut-time-in-a-unit-tangent-direction]].

[F1] For a complete connected boundaryless Riemannian manifold and unit
$v\in T_pM$, the cut time is
$$c_p(v):=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty].$$
([[def-cut-time-in-a-unit-tangent-direction]])

[F2] A field $J$ along an affinely parametrized geodesic is Jacobi when
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0.$$
([[def-jacobi-field]])

[F3] A path through a covering has a unique lift after its initial lift is
specified. ([[thm-path-lifting-for-covering-maps]])

[F4] Riemannian distance is the infimum of lengths of piecewise $C^1$ paths
joining the two points:
$$d_g(p,q)=\inf\{L_g(\alpha):\alpha\text{ is piecewise }C^1\text{ from }p\text{ to }q\}.$$
([[def-riemannian-distance-on-a-connected-manifold]])

[F5] The length of a piecewise $C^1$ curve is the sum of its piece integrals
of Riemannian speed:
$$L_g(\alpha)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\alpha(t)|_g\,dt.$$
([[def-riemannian-speed-and-length]])

[F6] In coordinates, the Levi-Civita symbols are
$$\Gamma^k{}_{ij}=\tfrac12\sum_\ell g^{k\ell}(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).$$
([[prop-christoffel-formula-for-the-levi-civita-connection]])

[F7] In coordinates, the geodesic equation is
$$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0.$$
([[prop-coordinate-geodesic-equation]])

[F8] With the declared curvature convention, its coordinate components are
$$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}.$$
([[prop-coordinate-formula-for-the-curvature-tensor]])

[F9] Covariant differentiation along a curve is the pullback connection
$$D_tV=(\gamma^*\nabla)_{\partial/\partial t}V.$$
([[def-covariant-derivative-along-a-curve]])

## Refutation

**Proof technique:** direct quotient calculation.

1.1 Construct the rectangular quotient with periods $L_i>0$ in its first $r$ coordinates. [construct, F5]
For $1\le r\le n$, let
$$\Lambda=\{(L_1k_1,\ldots,L_rk_r,0,\ldots,0):k_i\in\mathbb Z\}\subset\mathbb R^n, \qquad M=\mathbb R^n/\Lambda,$$
and let $q:\mathbb R^n\to M$ be the quotient map. Balls of radius less than
$\frac12\min_i L_i$ have disjoint translates, so their quotient images give
charts on which $q$ is a diffeomorphism; chart changes are translations. The
Euclidean metric therefore defines a consistent quotient metric, and in each
such chart its coefficients are constant. These charts show that $M$ is
boundaryless; it is connected because it is the continuous image of
$\mathbb R^n$. The same charts show that $q$ is a covering and that it
preserves speed on every lifted curve piece. [F5]

2.1 Every geodesic lifts to an affine line, giving the exponential formula and an all-time extension. [step 1.1, F3, F6, F7]
Every geodesic in this quotient lifts, by [F3], to a curve in $\mathbb R^n$.
On each periodic chart, [F6] gives $\Gamma^k{}_{ij}=0$, so [F7] says that the
lift has zero ordinary second derivative. The chart transitions are
translations, so these affine pieces combine into one affine line
$\widetilde\gamma(t)=x+tw$ on its whole parameter interval. Its projection
$q(x+tw)$ exists for all real $t$ and extends the geodesic; thus $M$ is
geodesically complete. For $p=q(x)$ and the tangent vector identified with
$w$ by the local chart, this also gives
$$\exp_p(w)=q(x+w).$$
[step 1.1, F3, F6, F7]

2.2 Quotient distance is the minimum Euclidean length among all lattice-separated lifts. [step 1.1, F1, F3, F4, F5]
For $x,y\in\mathbb R^n$, let $\alpha$ be any piecewise $C^1$ path from
$q(x)$ to $q(y)$. Its lift from $x$ ends at $y+\lambda$ for some
$\lambda\in\Lambda$ by [F3]. Speed preservation from step 1.1 and the
Euclidean endpoint length bound give
$$L_g(\alpha)=L_{\mathbb R^n}(\widetilde\alpha)\ge |y+\lambda-x|.$$
Refining the finitely many curve pieces into quotient-chart neighborhoods
makes each lifted piece a smooth inverse-branch image, so the lift is
piecewise $C^1$ and its length is computed by [F5].
For each smooth piece, the fundamental theorem of calculus writes its
displacement as the integral of its velocity; the triangle inequality for
the finite sum of those integrals gives the displayed endpoint bound.
Conversely, the straight segment from $x$ to $y+\lambda$ projects to a path
of length $|y+\lambda-x|$. Thus [F4] gives the infimum of these lengths. It
is a minimum: $\lambda=0$ gives the bound $|y-x|$, and every candidate no
longer than this satisfies $|\lambda|\le2|y-x|$. Thus each integer coordinate
satisfies $|k_i|\le2|y-x|/L_i$, leaving only finitely many tuples, so a least
candidate exists.
We have proved
$$d_g(q(x),q(y))=\min_{\lambda\in\Lambda}|y+\lambda-x|.$$
The quotient is the product of the $r$ periodic circles and $\mathbb R^{n-r}$;
the formula splits into the sum of the squared circle distances and the
squared Euclidean distance. Each circle is complete: for its coordinate
quotient $q_i:\mathbb R\to\mathbb R/L_i\mathbb Z$, the formula gives
$d(q_i(u),q_i(v))\le |u-v|$, so $q_i|_{[0,L_i]}$ is continuous and surjective
with compact image. For any Cauchy sequence, the
closures of its nonempty tails are nested nonempty closed subsets; compactness
gives a common point, and the Cauchy property forces convergence to it. Thus
each circle is complete. Coordinatewise convergence then makes the finite
product with its sum-of-squares distance complete. Thus every model
used below meets the Riemannian-completeness hypothesis of [F1]. [step 1.1,
F1, F3, F4, F5]

3.1 The quotient is flat, and every Jacobi field lifts to an affine vector field. [step 2.1, F2, F6, F8, F9]
All coordinate derivatives of the constant Christoffel symbols vanish, so
[F8] gives $R=0$ in every quotient chart. Lift a Jacobi field to the affine
geodesic in $\mathbb R^n$ using the derivative of the covering chart; chart
changes are translations, so the lifted vector components agree on overlaps.
Writing $J=J^k\partial_k$, [F9] and the coordinate Christoffel symbols give
$(D_tJ)^k=\dot J^k+\Gamma^k{}_{ij}\dot x^iJ^j$. The second term is zero by
[F6], and [F2] therefore reduces to
$$\widetilde J''(t)=0.$$
Consequently $\widetilde J(t)=A+tB$. If $\widetilde J(s_0)=\widetilde
J(s_1)=0$ for $s_0<s_1$, then $(s_1-s_0)B=0$, hence $B=A=0$. The lift, and
therefore $J$, is zero. By the stated two-endpoint criterion, this quotient
has no conjugate points along any geodesic. [step 2.1, F2, F6, F8, F9]

3.2 The rectangular torus Dirichlet cell is the product of half-period intervals. [step 2.2, algebra]
For a full rectangular torus ($r=n$), step 2.2 gives
$$d_g(q(0),q(x))^2=\sum_{i=1}^n\min_{k_i\in\mathbb Z}|x_i+k_iL_i|^2.$$
The coordinate minima are attained independently, so choosing a nearest
integer in each of the finitely many coordinates attains their summed value.
By definition, the Euclidean Dirichlet cell of the origin is
$$V_0=\{x\in\mathbb R^n:|x|\le|x-\lambda|\text{ for every }\lambda\in\Lambda\}.$$
This cell is exactly
$$\prod_{i=1}^n[-L_i/2,L_i/2].$$
Indeed comparison with the adjacent lattice points $\pm L_i e_i$ forces
$-L_i/2\le x_i\le L_i/2$; inside that box each coordinate of $0$ is nearest
among all its period translates, so summing the coordinate inequalities
proves comparison with every lattice point. At a face, the origin and the
adjacent translate tie as nearest lifts; intersections of faces have more
ties. Thus the torus boundary consists of points with multiple minimizing
lifts, as claimed by the scaffold calculation. [step 2.2, algebra]

3.3 The length-$L$ circle has cut time $L/2$, with two minimizing lifts at its cut point. [F1, step 2.1, step 2.2]
Take $n=r=1$, so $M=\mathbb R/L\mathbb Z$ is a circle, and choose
$p=q(0)$ and the unit direction $v=1$. By step 2.1, $\gamma(t)=q(t)$;
step 2.2 gives
$$d_g(p,\gamma(t))=\min_{k\in\mathbb Z}|t-kL|.$$
For $0\le t\le L/2$, the minimum is $t$: the $k=0$ lift has length $t$,
every $k\le-1$ is farther, and every $k\ge1$ has distance at least
$L-t\ge t$. At $t=L/2$, precisely the lifts $L/2$ and $-L/2$ tie, giving
two distinct minimizing semicircles. For every $t>L/2$, the lift ending at
$t-L$ is shorter, since $|t-L|<t$. Hence the minimizing positive times are
exactly $(0,L/2]$, and [F1] gives
$$c_p(v)=L/2.$$
The endpoint still minimizes; every later point on this ray fails to
minimize. [F1, step 2.1, step 2.2]

4.1 The complete cylinder has the same finite horizontal cut time and no conjugate points. [step 2.2, step 3.1, step 3.3]
The cylinder $S^1(L)\times\mathbb R$ is the quotient with $n=2$, $r=1$;
its two coordinates are the circular and axial directions. Step 3.1 proves
that every cylinder geodesic has no conjugate instant, while the distance
formula in step 2.2 and the calculation in step 3.3 give cut time $L/2$ on
the horizontal ray and two minimizing paths at its endpoint. This is the
cylinder model cited by Lee. [step 2.2, step 3.1, step 3.3]

5.1 A complete circle has a finite cut time but no conjugate instant, refuting the proposed claim. [step 1.1, step 2.2, step 3.1, step 3.3, step 4.1]
The circle is connected and boundaryless by step 1.1, complete by step 2.2,
and has a finite cut time $L/2$ by step 3.3, but has no conjugate point by
step 3.1. The complete cylinder supplies the same phenomenon by step 4.1.
Therefore a geodesic can cease to minimize without reaching any conjugate
point, so the cut time may precede every conjugate point. [step 1.1, step 2.2,
step 3.1, step 3.3, step 4.1]

6.1 Empty, zero-dimensional, one-dimensional, endpoint, degeneracy and choice cases are settled. [A1, F1, step 2.2, step 3.3, step 5.1]
The model has $n\ge1$ and $r\ge1$; the one-dimensional circle already
provides the witness, and the two-dimensional cylinder is Lee's cited model.
An empty manifold has no base point, and in dimension zero there is no unit
direction, so neither case is an instance of the universal cut-time setup.
At $t=0$ the radial segment is constant and minimizing; the finite cut-time
endpoint $L/2$ is included, while every $t>L/2$ fails strictly. Periods are
assumed positive, and a constant geodesic is not used. The construction
chooses no family of points, paths or lattice vectors: for each distance
calculation the bounded candidate set is finite. The compact metric-space
completeness argument in step 2.2 uses only nested closed tail closures;
quotient path lifts are unique and all lattice searches are finite. The
declared $\mathrm{AC}_\omega$ enters only as the inherited hypothesis [F1]
for cut time; no local calculation spends it and no full Axiom of Choice is
used. This is an existential counterexample, not an
if-and-only-if assertion. [A1, F1, step 2.2, step 3.3, step 5.1] ∎
