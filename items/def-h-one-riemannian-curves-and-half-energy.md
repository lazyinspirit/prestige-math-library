---
id: def-h-one-riemannian-curves-and-half-energy
kind: definition
title: H-one Riemannian curves and their half-energy
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-energy-of-a-piecewise-smooth-curve
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant
  - thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-locally-integrable-functions-embed-in-distributions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Juha Kinnunen, Sobolev Spaces lecture notes
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: One-dimensional Sobolev representatives and smooth approximation; the manifold chart construction and half-energy are derived locally.
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Definition 16.1.3, printed p.120, for the Riemannian half-energy convention.
---

## Definition

Assume Countable Choice. Let $(M,g)$ be a connected finite-dimensional Riemannian
manifold, and let $a<b$. A continuous curve $\alpha:[a,b]\to M$ is an
**$H^1$ Riemannian curve** if there is a finite subdivision
$a=t_0<\cdots<t_m=b$ and smooth manifold charts containing the images of its
closed pieces such that every real coordinate component $x$ on a piece has a
representation
$$x(t)=x(t_{j-1})+\int_{t_{j-1}}^t h(s)\,ds\qquad(t_{j-1}\le t\le t_j),\qquad h\in L^2([t_{j-1},t_j]).$$
Matching endpoint values are part of the continuity condition. This is the
continuous representative model of the usual one-dimensional weak
$W^{1,2}=H^1$ coordinate condition; it is independent of the finite charts and
subdivision. In particular every piecewise smooth curve is $H^1$.

The almost-everywhere coordinate derivatives transform by the ordinary smooth
chain rule. They therefore define an almost-everywhere tangent velocity
$\dot\alpha(t)$, whose metric speed is measurable and belongs to $L^2[a,b]$.
Define its **length** and **half-energy** by
$$L_g(\alpha):=\int_a^b|\dot\alpha(t)|_g\,dt,\qquad E(\alpha):=\frac12\int_a^b|\dot\alpha(t)|_g^2\,dt.$$
These are finite and chart independent. On piecewise smooth curves they agree
with the published length and half-energy conventions. The fixed-endpoint
$H^1$ path topology is the topology of the coordinate $H^1$ norms near any
fixed smooth reference path; in particular $H^1$ convergence implies uniform
convergence in Riemannian distance on the compact interval.

## Facts & Assumptions

**Given:** Countable Choice, a connected finite-dimensional Riemannian manifold, and a
nondegenerate compact interval $[a,b]$.

[F1] The metric is a smooth positive-definite inner product on tangent fibres
([[def-riemannian-metric-and-riemannian-manifold]]); the published length and
half-energy of a piecewise smooth curve are the finite sums of its speed and
half-squared-speed integrals, respectively
([[def-riemannian-speed-and-length]], [[def-energy-of-a-piecewise-smooth-curve]]).
On connected $M$, the Riemannian distance $d_g$ is the infimum of lengths
of piecewise $C^1$ joining curves
([[def-riemannian-distance-on-a-connected-manifold]]).

[F2] Smooth compactly supported real functions are dense in $L^2(\mathbb R)$
under Countable Choice ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]]).

[F3] Fubini applies to integrable functions on finite interval products
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] A distribution with zero derivative on a connected nonempty open
interval is a constant distribution under Countable Choice
([[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]]),
and locally integrable functions embed injectively into distributions under
Countable Choice ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F5] The $p=q=2$ case of H\"older's integral inequality bounds an
integral pairing of square-integrable real functions by the product of
their $L^2$ norms ([[thm-holder-inequality-for-integrals]]).

## Verification

1.1 The one-dimensional weak-coordinate equivalence. [F3, F4, F5, given]
Let $u$ be a real
weak-$W^{1,2}$ coordinate class on an interval $(c,d)$, with weak derivative
$h\in L^2(c,d)$. Because the interval has finite length, $h\in L^1$. Set
$H(t)=\int_c^t h(s)\,ds$. For a compactly supported smooth test $\varphi$,
Fubini [F3] on the integrable triangle gives
$$\int_c^d H(t)\varphi'(t)\,dt=\int_c^d h(s)\Bigl(\int_s^d\varphi'(t)\,dt\Bigr)ds=-\int_c^d h(s)\varphi(s)\,ds.$$
Thus $u-H$ has zero distributional derivative; [F4] makes it a constant
distribution and identifies $u$ almost everywhere with the unique continuous
primitive $C+H$. Conversely the same Fubini identity gives weak derivative
$h$ for every such primitive, which is bounded by Cauchy--Schwarz [F5] and hence in
$L^2(c,d)$. This proves the claimed equivalence without invoking a sharp
absolute-continuity FTC that assumes Dependent Choice. [F3, F4, F5]

1.2 Continuous representatives and the interval bound. [F5, given]
For a primitive
$x(t)=x(c)+\int_c^t h$, [F5] gives
$$|x(t)-x(s)|\le\|h\|_{L^2(c,d)}\sqrt{|t-s|}.$$
It is continuous, has fixed endpoint traces, is absolutely continuous by the
integral criterion, and is bounded on the compact interval. The same bound
coordinatewise holds for a finite-dimensional vector primitive. In particular
the coordinate $H^1$ topology embeds continuously in the uniform topology.
[F5, given]

2.1 Smooth superposition and chart invariance. [F2, F5, step 1.2, given]
Let $x$ be such a vector
primitive and let $F(t,z)$ be smooth on a compact coordinate tube containing
its graph. Extend $h=x'$ by zero to $\mathbb R$ and use [F2] to choose smooth
$h_k\to h$ in $L^2$; put $x_k(t)=x(c)+\int_c^t h_k$. Step 1.2 makes
$x_k\to x$ uniformly. For each smooth $x_k$, the ordinary chain rule gives
$$F(t,x_k(t))-F(c,x_k(c))=\int_c^t\bigl(\partial_sF(s,x_k(s))+D_zF(s,x_k(s))h_k(s)\bigr)ds.$$
Uniform boundedness and uniform continuity of the first derivatives of $F$
on a slightly larger compact tube, together with $L^2$ convergence of $h_k$,
let both sides converge to the same identity for $x$. Its integrand belongs
to $L^2$ because the derivatives of $F$ are bounded there. Applying this to
smooth coordinate transitions proves that the defining property and the
almost-everywhere chain rule are independent of charts; finite subdivisions
may be refined without changing them. [F2, F5, step 1.2]

3.1 Speed, energy, topology and boundaries. [F1, F2, F5, step 1.2, step 2.1, given]
The coordinate velocity is in
$L^2$ on each of the finitely many pieces by step 2.1. Smoothness and positive
definiteness of the metric [F1] make $|\dot\alpha|_g$ a measurable $L^2$
function; it is also $L^1$ by [F5] on the finite interval. Under a chart
change the velocity and metric transform together, so its norm and the two
integrals in the definition are invariant. For a piecewise smooth curve the
a.e. velocity is its ordinary velocity, so the integrals agree with [F1] and
the published half-energy convention. Near a fixed smooth reference curve,
finitely many smooth coordinate tubes and step 2.1 make their coordinate
$H^1$ norms locally equivalent; step 1.2 then implies uniform closeness in
the manifold metric. Dimension zero gives constant curves and zero energy;
empty manifolds have no curve instance. All selections in this verification
are finite except the countable approximation sequence supplied by [F2],
which is covered by the stated Countable Choice. [F1, F2, F5, step 1.2, step 2.1] ∎
