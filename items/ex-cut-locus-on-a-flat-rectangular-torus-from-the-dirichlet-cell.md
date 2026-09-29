---
id: ex-cut-locus-on-a-flat-rectangular-torus-from-the-dirichlet-cell
kind: example
title: Cut locus on a flat rectangular torus from the Dirichlet cell
status: published
origin: pipeline
deps:
  - cor-triangle-inequality-for-inner-product-norm
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-countable-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-domain-and-exponential-map-of-a-connection
  - def-euclidean-inner-product
  - def-geodesically-complete-riemannian-manifold
  - def-piecewise-c-one-curve-on-a-manifold
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-quotient-topology
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - def-smooth-manifold
  - def-topological-manifold-without-boundary
  - def-vector-valued-derivative-and-integral
  - lem-finite-sum-laws
  - lem-integer-part
  - lem-of-square-monotone
  - lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-criterion-for-a-riemannian-metric
  - prop-coordinate-geodesic-equation
  - thm-continuous-implies-integrable
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-of-square-roots
  - thm-path-connected-implies-connected
  - thm-path-lifting-for-covering-maps
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
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Printed p.190 / PDF P206, lines 7559–7568: cut-point and cut-locus definitions and the flat-cylinder halfway example; the rectangular-torus distance and Dirichlet-cell calculations are proved locally here."
---

## Example

Assume exactly the declared $\mathrm{AC}_\omega$ assumption. Let $a,b>0$,
let $\Lambda=a\mathbb Z\times b\mathbb Z$, and give
$Q=\mathbb R^2/\Lambda$ its quotient flat metric. Write
$q:\mathbb R^2\to Q$ for the quotient projection and fix $p=[x_0]\in Q$.
The period-coordinate charts identify $T_pQ$ with $\mathbb R^2$. Put
$$D=[-a/2,a/2]\times[-b/2,b/2],\qquad D^\circ=(-a/2,a/2)\times(-b/2,b/2).$$
Define the radial tangent cut domain including zero by
$$C_p=\{0\}\cup\{tu:|u|=1,\ 0<t<c_p(u)\}.$$
Then $C_p=D^\circ$; equivalently, the positive tangent cut domain is
$D^\circ\setminus\{0\}$. For each unit $u=(u_1,u_2)$,
$$c_p(u)=\min\!\left(\left\{\frac{a}{2|u_1|}:u_1\ne0\right\}\cup \left\{\frac{b}{2|u_2|}:u_2\ne0\right\}\right),$$
where the displayed minimum is over the nonempty set of defined terms.
Moreover,
$$\operatorname{Cut}(p)=\{[x_0+w]:w\in\partial D\}.$$
Opposite edges of $D$ are identified in $Q$. A relative-interior edge class
has exactly two nearest lattice lifts from $p$, and the four corners represent
one class with four nearest lattice lifts.

## Facts & Assumptions

**Given:** Positive periods $a,b$, the lattice quotient set
$Q=\mathbb R^2/\Lambda$ with its quotient topology, the quotient map $q$, and
$p=[x_0]$. The period-coordinate flat metric is constructed below.

[A1] Exactly $\mathrm{AC}_\omega$ is assumed
([[def-countable-choice]]). Its uses below are through geodesic existence and
uniqueness, Hopf--Rinow, and the cut-time and cut-locus interfaces.

[F1] In the quotient topology, $V\subseteq Q$ is open exactly when
$q^{-1}[V]$ is open in $\mathbb R^2$; the quotient classes are those of the
given lattice equivalence relation ([[def-quotient-topology]]).

[F2] For every real $z$ there is a unique integer $n$ with
$n\le z<n+1$ ([[lem-integer-part]]).

[F3] A topological $2$-manifold without boundary is Hausdorff, second-countable,
and locally homeomorphic to open subsets of $\mathbb R^2$; a smooth manifold
has a maximal smooth atlas ([[def-topological-manifold-without-boundary]],
[[def-smooth-manifold]]).

[F4] A Riemannian metric is a smooth positive-definite symmetric two-tensor;
in coordinates it is enough to check that its matrices are smooth, symmetric,
and positive definite, with the usual tensor change-of-coordinate law
([[def-riemannian-metric-and-riemannian-manifold]],
[[prop-coordinate-criterion-for-a-riemannian-metric]]).

[F5] The Euclidean inner product on $\mathbb R^2$ induces the norm $|z|=\sqrt{\langle z,z\rangle}$ ([[def-euclidean-inner-product]]).

[F6] Squaring preserves order on nonnegative reals, and every nonnegative real has its unique nonnegative square root, so coordinatewise minima minimize the Euclidean norm ([[lem-of-square-monotone]], [[thm-of-square-roots]]).

[F7] A chart tangent vector has the pointwise Riemannian norm determined by its metric matrix ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

[F8] The Euclidean norm satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F9] A covering has evenly covered neighbourhoods, and every path has a unique lift after its starting point is fixed ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[thm-path-lifting-for-covering-maps]]). A piecewise $C^1$ path has a finite chartwise subdivision; once this quotient is shown to be covered, composing those pieces with local inverse charts makes its lift piecewise $C^1$ ([[def-piecewise-c-one-curve-on-a-manifold]]).

[F10] Riemannian speed is the norm of velocity, length is the sum of its speed integrals over the finite smooth pieces, and length is unchanged by finite subdivision. On a connected Riemannian manifold distance is the infimum of these lengths ([[def-riemannian-speed-and-length]], [[lem-riemannian-length-is-independent-of-piecewise-c-one-subdivision]], [[def-riemannian-distance-on-a-connected-manifold]]).

[F11] For a piecewise $C^1$ curve in $\mathbb R^2$, its continuous coordinate derivatives are integrable componentwise, and the vector-valued fundamental theorem gives the displacement as the integral of the derivative; the norm of that integral is at most the integral of the speed. Finite sums telescope ([[def-vector-valued-derivative-and-integral]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-continuous-implies-integrable]], [[lem-finite-sum-laws]]).

[F12] In coordinates the Levi-Civita symbols are given by the Christoffel formula, and geodesics satisfy the coordinate geodesic equation ([[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-coordinate-geodesic-equation]]). Under [A1], initial data determine a unique maximal geodesic; the exponential map evaluates it at time one, and geodesic completeness means all maximal geodesics have domain $\mathbb R$ ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[def-domain-and-exponential-map-of-a-connection]], [[def-geodesically-complete-riemannian-manifold]]).

[F13] A path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F14] Under [A1], Hopf--Rinow makes a geodesically complete nonempty connected boundaryless Riemannian manifold complete for its Riemannian distance ([[thm-hopf-rinow]]).

[F15] For a complete, connected, boundaryless Riemannian manifold, cut time in a unit direction is the supremum of positive times at which radial distance equals time ([[def-cut-time-in-a-unit-tangent-direction]]).

[F16] The cut locus consists of the finite cut-time endpoints over all unit directions ([[def-cut-point-and-cut-locus-of-a-point]]).

## Proof

**Proof technique:** quotient path lifting and the rectangular Dirichlet cell.

1.1 For $z\in\mathbb R$, set $n=\lfloor z+1/2\rfloor$ using [F2]. Then $-1/2\le z-n<1/2$. If $m\ge n+1$, then $|z-m|\ge|z-n|$; if $m\le n-1$, then again $|z-m|\ge|z-n|$. Equality for a second integer occurs exactly at the half-period boundary. Applying this to $z=(y_i-x_i)/L_i$ for $L_1=a,L_2=b$ shows that each coordinate has an attained nearest lattice translate. The squared Euclidean norm is minimized coordinatewise, so $$\min_{\lambda\in\Lambda}|y-x+\lambda|=\sqrt{\delta_1^2+\delta_2^2},\qquad \delta_i=\min_{k\in\mathbb Z}|y_i-x_i+kL_i|.$$ This minimum is zero exactly when $y-x\in\Lambda$. [F2, F5, F6]

2.1 The quotient projection is open: for open $U\subseteq\mathbb R^2$, $$q^{-1}(q(U))=\bigcup_{\lambda\in\Lambda}(U+\lambda),$$ which is open, so [F1] makes $q(U)$ open. The images of rational balls therefore form a countable base. If $q(x)\ne q(y)$, [F2] and step 1.1 give $\delta=\min_{\lambda\in\Lambda}|y-x+\lambda|>0$. Choose $r>0$ with $2r<\delta$. If $q(B(x,r))$ met $q(B(y,r))$, some $x'\in B(x,r)$ and $y'\in B(y,r)$ would satisfy $x'-y'\in\Lambda$, yielding a lattice translate of $y-x$ of norm $|y'-x'|<2r$, a contradiction. Thus $Q$ is Hausdorff. For $0<\varepsilon<\min(a,b)/2$, each rectangle $U_x=x+(-\varepsilon,\varepsilon)^2$ has pairwise disjoint lattice translates; $q|_{U_x}$ is an open continuous bijection onto the open set $q(U_x)$, hence a chart. On overlaps the coordinate changes are locally translations by elements of $\Lambda$, so they are smooth. The coordinate metric matrices are the constant identity matrix; [F4] makes this a smooth positive flat metric. The same disjoint-translate description of $q^{-1}(q(U_x))$ shows these charts evenly cover their images, so $q$ is a covering and a local isometry. Projected straight segments join every pair of classes, so $Q$ is path-connected and connected by [F13]. It is nonempty because it contains $q(0)$, and its charts have no boundary. [F1, F3, F4, F13, step 1.1]

3.1 Fix $x,y\in\mathbb R^2$ and any piecewise $C^1$ path $\alpha$ in $Q$ from $q(x)$ to $q(y)$. Lift it from $x$ by [F9]. On each path piece lying in a quotient chart, its lift lies in one translated sheet and is the chartwise inverse of $\alpha$; hence the lift is piecewise $C^1$ and has the same coordinate speed. Its endpoint is $y+\lambda$ for some $\lambda\in\Lambda$. Refine to a common finite subdivision and write $\Delta_j=\widetilde\alpha(t_{j+1})-\widetilde\alpha(t_j)$. By [F11], $$|\Delta_j|\le\int_{t_j}^{t_{j+1}}|\widetilde\alpha'(t)|\,dt.$$ The increments telescope, the triangle inequality in [F8] bounds their sum, and the local isometry preserves speed. Therefore $$|y-x+\lambda|=|\widetilde\alpha(1)-\widetilde\alpha(0)|\le\sum_j|\Delta_j|\le L_g(\alpha).$$ By step 1.1 this is at least $\min_{\mu\in\Lambda}|y-x+\mu|$. Taking the infimum over all paths gives the same lower bound for $d_g(q(x),q(y))$. [F5, F7, F8, F9, F10, F11, step 1.1, step 2.1]

3.2 For every $x\in\mathbb R^2$ and $w\in T_{q(x)}Q\cong\mathbb R^2$, define $\gamma_{x,w}(t)=q(x+tw)$ for all $t\in\mathbb R$. In every quotient chart its coordinates are affine and the metric coefficients are constant, so [F12] gives zero Christoffel symbols and the geodesic equation. This is a global geodesic with the prescribed initial data. Uniqueness in [F12] shows that every maximal geodesic is this one; hence $Q$ is geodesically complete and $\exp_{q(x)}(w)=q(x+w)$. This includes $w=0$, whose geodesic is constant. [A1, F12, step 2.1]

4.1 Step 1.1 supplies a translate $\lambda_*$ attaining the minimum. The projection of the straight segment from $x$ to $y+\lambda_*$ has constant speed $|y-x+\lambda_*|$, so [F10] gives its length as that norm. Combining it with step 3.1 proves the attained quotient-distance formula $$d_g(q(x),q(y))=\min_{\lambda\in\Lambda}|y-x+\lambda|=\sqrt{\delta_1^2+\delta_2^2}.$$ [F10, step 1.1, step 3.1]

4.2 The model is nonempty, connected, boundaryless, and geodesically complete by steps 2.1 and 3.2. Hopf--Rinow [F14], under exactly [A1], makes $(Q,d_g)$ complete. Thus the completeness hypotheses of [F15] and [F16] hold. [A1, F14, F15, F16, step 2.1, step 3.2]

5.1 Let $u=(u_1,u_2)$ be a unit vector and put $$\tau(u)=\min\!\left(\left\{\frac{a}{2|u_1|}:u_1\ne0\right\}\cup\left\{\frac{b}{2|u_2|}:u_2\ne0\right\}\right).$$ The set is nonempty and $0<\tau(u)<\infty$. For $0<t\le\tau(u)$, $tu\in D$; step 1.1 says zero is a nearest lattice translate, including a tie when a coordinate reaches a face. Steps 3.2 and 4.1 then give $d_g(p,\exp_p(tu))=|tu|=t$. If $t>\tau(u)$, choose a nonzero coordinate $u_i$ attaining the minimum. Then $|tu_i|>L_i/2$, where $L_1=a,L_2=b$. Adding the opposite period to that coordinate strictly reduces its absolute value, leaves the other coordinate unchanged, and gives a projected straight competitor of length strictly less than $|tu|=t$. Hence $d_g(p,\exp_p(tu))<t$. The minimizing-time set is exactly $(0,\tau(u)]$, so [F15] gives $c_p(u)=\tau(u)$. [A1, F5, F7, F15, step 1.1, step 3.2, step 4.1]

6.1 For $v\ne0$, write $v=|v|u$ with $|u|=1$. The formula for $\tau(u)$ in step 5.1 shows $|v|<\tau(u)$ exactly when $|v_1|<a/2$ and $|v_2|<b/2$. Adjoining $v=0$ proves both inclusions $C_p=D^\circ$; omitting zero gives the positive domain $D^\circ\setminus\{0\}$. For each unit $u$, step 5.1 puts $\tau(u)u$ on $\partial D$, so every finite cut endpoint lies in $\{[x_0+w]:w\in\partial D\}$. Conversely, given $w\in\partial D$, $w\ne0$; put $u=w/|w|$. For each nonzero coordinate, its candidate exit time is $L_i|w|/(2|w_i|)\ge|w|$, with equality on every face coordinate, so $\tau(u)=|w|$ and $[x_0+w]$ is a cut endpoint. Thus $\operatorname{Cut}(p)=\{[x_0+w]:w\in\partial D\}$, proving both set inclusions. [F15, F16, step 2.1, step 4.2, step 5.1]

7.1 In one coordinate, a point strictly between the two half-periods has one nearest period representative, while either endpoint $\pm L_i/2$ has exactly two, differing by $L_i$. Independence of the two coordinates makes each relative-interior edge point have exactly two nearest lattice lifts and each corner have four. Opposite edges differ by a lattice vector and therefore have the same image. A vertical-edge image and a horizontal-edge image meet only when both coordinates are half-periods; all four corners then give the same corner class. This is the stated branch intersection. [F2, F5, step 1.1, step 6.1]

8.1 The torus is nonempty and two-dimensional; $a,b>0$ rule out a collapsed period. The zero tangent vector is included in $C_p$ but is not a unit direction. Directions with one zero coordinate are covered by omitting that coordinate's quotient from the minimum in step 5.1. The cut-time supremum is over $t>0$, its endpoint $\tau(u)$ is included and minimizing, and every later time fails strictly. The two set equalities in step 6.1 were proved in both directions. The only choice assumption is [A1] through geodesic uniqueness, Hopf--Rinow [F14] and the cut interfaces [F15, F16]; coordinate rounding is determined by [F2], path lifts are unique from a specified start, and no full AC or family selection is used. No other dimension or iff claim is made. [A1, F2, F12, F14, F15, F16, step 2.1, step 3.2, step 4.2, step 5.1, step 6.1, step 7.1] QED
## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10,
printed p.190 / PDF P206, lines 7559–7568, defines cut points and the cut locus
and gives the flat-cylinder example where geodesics wrapping past halfway cease
to minimize. This passage does not establish the rectangular-torus distance
formula or Dirichlet cell; those are derived locally in steps 1.1–4.2.
