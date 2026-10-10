---
id: ex-sr-causal-diamond-in-one-plus-one
kind: example
title: "Worked four-dimensional causal diamond and the boost-invariant area of its planar section"
status: draft
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse, lem-lorentz-map-preserves-metric-and-causal-structure, def-lorentz-map-and-lorentz-group, def-sr-proper-time, def-euclidean-inner-product, cor-triangle-inequality-for-inner-product-norm]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
dependency_level: 10
aliases: []
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation in the affine Minkowski model
([[def-sr-affine-minkowski-model]]). In the chart $x$ of an inertial frame with
$\eta_0=\operatorname{diag}(-1,1,1,1)$ and all coordinate values expressed as numerical lengths in metres
([[def-inertial-frame-and-inertial-chart]]) let $p:=x^{-1}(0,0,0,0)$ and
$q:=x^{-1}(2,0,0,0)$. Interior is taken in the Euclidean topology transported by $x$. In this item the **interval magnitude** of a displacement $D$ means $\ell(D):=\sqrt{|\eta(D,D)|}$; this is not a norm on $V$. For the planar polygons below, define a triangle with edge columns $a,c\in\mathbb R^2$ to have coordinate area $\tfrac12|a_0c_1-a_1c_0|$, and compute polygon area by the displayed disjoint-interior triangulations. The coordinate area carries square metres. Here $c$ in the proper-time formula denotes the positive numerical conversion factor in metres per second.

**(a)** By the coordinate criterion
([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]) one has
$$J^+(p)=\{x^{-1}(D):D^0\ge|D_s|\},\qquad J^-(q)=\{x^{-1}(u):2-u^0\ge|u_s|\},$$
as subsets of $A$; hence the causal diamond is
$$J^+(p)\cap J^-(q)=\{x^{-1}(u):|u_s|\le u^0\le 2-|u_s|\},\qquad |u_s|:=\sqrt{(u^1)^2+(u^2)^2+(u^3)^2},$$
and its interior is
$I^+(p)\cap I^-(q)=\{x^{-1}(u):|u_s|<u^0<2-|u_s|\}$.

**(b)** In the $1+1$-dimensional section $u^2=u^3=0$ the diamond is the square
with vertices $x^{-1}(0,0,0,0)$, $x^{-1}(1,1,0,0)$, $x^{-1}(2,0,0,0)$ and
$x^{-1}(1,-1,0,0)$. Its diagonals are the straight timelike segment from $p$ to
$q$ and the straight spacelike segment from $x^{-1}(1,1,0,0)$ to
$x^{-1}(1,-1,0,0)$; both have length $2$ m in the interval magnitude, and the area of
the square in the $(x^0,x^1)$-plane is half the product of the diagonal lengths,
that is $2$ m$^2$.

**(c)** For a passive boost with parameter $b$ along the $x^1$ direction the
block of $B(b)$ in the $(0,1)$-plane is $\gamma\begin{pmatrix}1&-b\\-b&1\end{pmatrix}$
with $\gamma=(1-b^2)^{-1/2}$
([[def-lorentz-boost]]), whose determinant is $\gamma^2(1-b^2)=1$. Let $x'$ be
the chart of the inertial frame related to $x$ by this boost, so that
$x'=B(b)\circ x$
([[lem-boost-is-proper-orthochronous-with-inverse]],
[[lem-lorentz-map-preserves-metric-and-causal-structure]],
[[def-lorentz-map-and-lorentz-group]]); the coordinate image of the $1+1$ section in
$x'$ is the parallelogram with centre $\gamma(1,-b)$ and half-diagonal vectors
$\gamma(1,-b)$ and $\gamma(-b,1)$, whose area is
$2\gamma^2(1-b^2)=2$ m$^2$. Hence the area of the diamond in the
$(x^0,x^1)$-plane is the same in the chart of every frame related to $x$ by such
a boost; this is the source's invariance of the area of a light-rectangle.

**(d)** The identification of this area with a physical time or clock reading is
not made here. With $c$ retained, the interval magnitude of the timelike diagonal is
$\sqrt{-\eta(D,D)}=2$ m and, for the straight future timelike segment from $p$
to $q$, the proper time is $2/c$ s
([[def-sr-proper-time]], [[def-euclidean-inner-product]], [[cor-triangle-inequality-for-inner-product-norm]]); no clock reading is asserted.

## Facts & Assumptions

**Given:** An inertial frame with chart $x$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, the events $p=x^{-1}(0,0,0,0)$ and $q=x^{-1}(2,0,0,0)$, and for a real $b$ with $|b|<1$ the boost $B(b):=B(be_1)$ of the $(0,1)$-plane with $\gamma=(1-b^2)^{-1/2}$.

[L1] Coordinate criterion: for events $r,s$ with $D=x(s)-x(r)$, $s\in J^+(r)$ iff $D^0\ge|D_s|$ and $s\in I^+(r)$ iff $D^0>|D_s|$; also $J^+(r)=r+\overline{C^+}$ and $I^+(r)=r+C^+$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]], [[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L2] Diagonal form: $\eta(D,D)=-(D^0)^2+|D_s|^2$; a displacement is timelike iff $\eta(D,D)<0$ and spacelike iff $\eta(D,D)>0$ ([[def-causal-classification-of-lorentz-vectors]]).

[L3] Chart linearity: $x(s)-x(r)=E^{-1}(s-r)$, so coordinate differences of events are the coordinates of their displacement ([[def-inertial-frame-and-inertial-chart]]).

[L4] For $|\beta|<1$ the passive boost acts in the $(0,1)$-plane by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$; it is a proper orthochronous Lorentz map with inverse $B(-\beta)$, so the ordered basis $e'_a:=B(\beta)^{-1}e_a$ is $\eta$-orthonormal, future and positively oriented and is the basis of an inertial frame whose chart satisfies $x'=B(\beta)\circ x$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]], [[lem-lorentz-map-preserves-metric-and-causal-structure]], [[def-lorentz-map-and-lorentz-group]]).

[L5] For the straight future timelike segment $s\mapsto p+s(q-p)$, $s\in[0,1]$, the elapsed proper time is $c^{-1}\sqrt{-\eta(q-p,q-p)}$, and the interval magnitude of the displacement is $\sqrt{-\eta(q-p,q-p)}$ ([[def-sr-proper-time]], [[def-euclidean-inner-product]], [[cor-triangle-inequality-for-inner-product-norm]]).

[L6] The coordinate Euclidean norm satisfies the triangle inequality, hence $\big||u_s|-|v_s|\big|\le|u_s-v_s|$; the Euclidean scalar product is the sum of coordinate products ([[def-euclidean-inner-product]], [[cor-triangle-inequality-for-inner-product-norm]]).

## Verification

**Proof technique:** direct.

1.1 Let $r=x^{-1}(u)$ be an event with coordinates $u$. By [L3] the displacement $r-p$ has coordinates $u$, so [L1] gives $r\in J^+(p)$ iff $u^0\ge|u_s|$; likewise the displacement $q-r$ has coordinates $(2-u^0,-u^1,-u^2,-u^3)$ of spatial norm $|u_s|$, so $r\in J^-(q)$ iff $q\in J^+(r)$ iff $2-u^0\ge|u_s|$. Hence the diamond is $\{x^{-1}(u):|u_s|\le u^0\le 2-|u_s|\}$, and the two strict versions give $I^+(p)\cap I^-(q)=\{x^{-1}(u):|u_s|<u^0<2-|u_s|\}$ by the strict clauses of [L1]. For the interior: the triangle inequality gives $\big||u_s|-|v_s|\big|\le|u_s-v_s|\le\|u-v\|_2$, so each of the functions $u\mapsto u^0-|u_s|$ and $u\mapsto 2-u^0-|u_s|$ changes by at most $2\|u-v\|_2$. At a point where both are positive, the coordinate ball of radius half their smaller value keeps both positive, i.e. lies in the interior of the diamond; if $u^0=|u_s|$ or $u^0=2-|u_s|$, every neighbourhood contains points with $u^0$ decreased or increased slightly, which violate $u^0\ge|u_s|$ or $u^0\le 2-|u_s|$, so such points are not interior; hence the interior is exactly the displayed open set, which is $I^+(p)\cap I^-(q)$; this is (a). [given, L1, L3, L6, algebra]

2.1 In the section $u^2=u^3=0$ the description of step 1.1 reads $|u^1|\le u^0\le 2-|u^1|$, whose boundary consists of the four segments joining $(0,0)$ to $(1,1)$, $(1,1)$ to $(2,0)$, $(2,0)$ to $(1,-1)$ and $(1,-1)$ to $(0,0)$: the square with those four vertices (successive edge columns have squared Euclidean length $2$ and scalar product $0$). Its diagonals are the displacement $(2,0,0,0)$ from $p$ to $q$, of interval magnitude $\sqrt{-\eta}=\sqrt{4}=2$ m, and the displacement $(0,2,0,0)$ from $x^{-1}(1,-1,0,0)$ to $x^{-1}(1,1,0,0)$, of interval magnitude $\sqrt{\eta}=\sqrt{4}=2$ m, both by [L2]; relative to its centre $(1,0)$, the four triangles have edge columns chosen from $(\pm1,0)$ and $(0,\pm1)$, each of area $1/2$ by the stated coordinate-area definition, so their total area is $2$ m$^2$, also $\tfrac12\cdot2\cdot2$; this is (b). [step 1.1, L2, algebra]

3.1 By [L4] the chart $x'$ of the boosted frame satisfies $x'=B(b)\circ x$, so the $x'$-coordinates of the events of the $1+1$ section are the images under the linear map $B(b)$ of their $x$-coordinates, and the coordinate image of the square of step 2.1 is the parallelogram spanned by the images of the two diagonals: $B(b)(2,0)=2\gamma(1,-b)$ and $B(b)(0,2)=2\gamma(-b,1)$. Its centre is $B(b)(1,0)=\gamma(1,-b)$, its half-diagonal vectors are $a:=\gamma(1,-b)$ and $c:=\gamma(-b,1)$, and it is the union of the four triangles $(0,\pm a,\pm c)$ in centred coordinates, each of area $\tfrac12|\det(a,c)|$; hence its area is $2|\det(a,c)|=2\gamma^2\bigl(1\cdot 1-(-b)(-b)\bigr)=2\gamma^2(1-b^2)=2$ m$^2$, since $\gamma^2(1-b^2)=1$; this holds for every $|b|<1$ and is (c). [step 2.1, L4, algebra]

4.1 Clause (a) is step 1.1, clause (b) is step 2.1, clause (c) is step 3.1, and clause (d) follows from [L5] applied to the straight segment from $p$ to $q$, whose displacement has $\eta=-4$ m$^2$ and interval magnitude $2$ m, giving proper time $2/c$ s; nothing in the computation identifies the coordinate area $2$ m$^2$ with a physical time or clock reading, and no measurement is reported. [step 1.1, step 2.1, step 3.1, L5, given] ∎
