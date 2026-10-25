---
id: lem-planar-piecewise-analytic-region-triangulation
kind: lemma
title: Slab triangulation of a compact plane region bounded by finitely many piecewise real-analytic curves
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-real-analytic-function
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical
  - cor-power-series-sums-are-smooth-with-coefficient-formula
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: construct
sources:
  references:
    - title: "Jürgen Jost, Compact Riemann Surfaces: An Introduction to Contemporary Mathematics"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/jost.pdf"
      locator: "§2.3.A, Theorem 2.3.A.1, printed pp. 37–39 (PDF pp. 49–51): subdivision of a geodesically cut surface into polygons with geodesic sides, followed by an explicit subdivision of each polygon into triangles. The slab construction here replaces the geodesic network by horizontal cuts and supplies the graph, pinching, and refinement details."
    - title: "Guillaume Valette, On subanalytic geometry (2025)"
      url: "https://arxiv.org/pdf/2507.23622"
      locator: "Definition 1.2.1 and Theorem 1.2.3, printed pp. 14–15, describe analytic cylindrical cells; Proposition 1.8.4, printed p. 38, gives convergent Puiseux expansions for one-variable globally subanalytic functions. This corroborates endpoint Puiseux behavior; the finite graph construction and rectifiability are proved locally below."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

A subset $\Gamma\subseteq\mathbb C$ is a **real-analytic arc** when it is
homeomorphic to a compact interval and has the following local graph form.
At each point other than its two endpoints, some neighbourhood meets $\Gamma$
in the graph $\{(x,y):y=\psi(x)\}$ or $\{(x,y):x=\psi(y)\}$ of a real-analytic
function on an open interval. At either endpoint, the same holds with the
graph restricted to one side of the endpoint coordinate; the analytic
function is defined on an open interval containing that coordinate
([[def-real-analytic-function]]). A **piecewise
real-analytic arc** is a subset homeomorphic to $[0,1]$ that is a finite union
of real-analytic arcs meeting only at their endpoints, and a **piecewise
real-analytic simple closed curve** is a subset homeomorphic to the unit
circle that is a finite union of real-analytic arcs meeting only at their
endpoints. A **Puiseux-analytic arc** is a graph over a compact horizontal or
vertical coordinate interval of a continuous function that is real analytic
on the open interval and, at each endpoint, has a convergent one-sided
Puiseux expansion $\sum_{j\ge0}c_jt^{j/m}$ in the distance $t$ from that
endpoint, for some positive integer $m$. A **piecewise Puiseux-analytic arc**
is a finite union of such arcs meeting only at their endpoints. Its pieces
have finite length: substituting $t=s^m$ gives a $C^1$ parametrization near
each endpoint, and the remaining compact interior is $C^1$. A
**curvilinear triangle** is the image of the closed plane triangle
$$\Delta=\{(s,t):s,t\ge 0,\ s+t\le 1\}$$
under a homeomorphism onto a subset of $\mathbb C$ such that the images of the
three sides of $\Delta$ are piecewise Puiseux-analytic arcs.

**Lemma.** Let $R\subseteq\mathbb C$ be compact and the closure of a bounded
connected open set, and suppose $\partial R$ is a finite disjoint union of
piecewise real-analytic simple closed curves. Let $P\subseteq\operatorname{int}R$
be finite. Then there are finitely many pairwise interior-disjoint curvilinear
triangles $T_1,\dots,T_m\subseteq R$ with
$$R=T_1\cup\cdots\cup T_m,$$
such that any two of them meet in the empty set, in a common vertex, or in a
full common edge, and such that no point of $P$ lies on an edge of any $T_i$.
The construction uses no choice principle. Moreover each $T_i$ is, in an
orthonormal affine coordinate system of the plane, a **graph-bounded region**:
there are $w<w'$ and continuous functions $\alpha\le\beta$ on $[w,w']$,
real-analytic on $(w,w')$ and with Puiseux-analytic-arc graphs in the sense above,
such that
$$T_i=\{(x,y):w\le y\le w',\ \alpha(y)\le x\le\beta(y)\}$$
in those coordinates, and the boundary of $T_i$ is the positively oriented
boundary contour of this region (bottom segment, graph of $\beta$ traversed
upwards, top segment, graph of $\alpha$ traversed downwards). The coordinate
system is obtained from the standard one by a rotation and a translation
determined by the construction.

## Facts & Assumptions

**Given:** A compact region $R$ which is the closure of a bounded connected
open set, its boundary written as a finite disjoint union of piecewise
real-analytic simple closed curves, and a finite set
$P\subseteq\operatorname{int}R$.

[F1] $f:U\to\mathbb R$ on an open $U\subseteq\mathbb R$ is real analytic when
every $c\in U$ has a neighbourhood on which $f$ is the sum of a convergent
power series ([[def-real-analytic-function]]).

[F2] If a real-analytic map between open subsets of $\mathbb R^n$ has
invertible derivative at a point, then it is locally invertible with
real-analytic inverse; if $P(x,y)$ is real analytic near $(a,b)$ with
$P(a,b)=0$ and $D_yP(a,b)$ invertible, then near $(a,b)$ its zero set is
exactly the graph of a unique real-analytic $y=g(x)$ with $g(a)=b$
([[thm-real-analytic-inverse-and-implicit-function-theorems]]).

[F3] If $f$ is real analytic near $c$ and $f(c)=0$, then either all
coefficients of a power-series expansion of $f$ about $c$ vanish, so that $f$
vanishes on a neighbourhood of $c$, or $c$ is an isolated zero of $f$
([[lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical]]).

[F4] Every derivative of a power-series sum is again given by a power series
with the same radius of convergence at its centre
([[cor-power-series-sums-are-smooth-with-coefficient-formula]]), so
derivatives of real-analytic functions of one variable are real analytic.



## Proof

**Proof technique:** cut by horizontal lines through all critical heights,
all endpoints of the chosen analytic pieces and horizontal boundary pieces; in each slab express the boundary as
finitely many ordered graphs bounding closed bands; triangulate each band by
pulling back an explicit rectangle triangulation, splitting pinched bands by an
explicit quotient, and choosing the internal cuts and the auxiliary heights to
avoid the given finite set and avoid the special heights.

1.1 (Local shape of the boundary.) Every real-analytic arc of $\partial R$ is locally a graph of a real-analytic function, in either the $x$-variable or the $y$-variable, with a one-sided graph germ at its endpoints, and the representation can be switched at every point where the tangent is neither horizontal nor vertical, by [F2] applied to a local real-analytic equation of the arc. If an arc point has horizontal tangent, then near that point the arc is $\{(x,y):y=\psi(x)\}$ with $\psi$ real analytic and horizontal tangency there is exactly $\psi'(x)=0$; by [F4] the derivative $\psi'$ is again real analytic, so by [F3] its zeros are isolated on that arc, or $\psi'\equiv0$ and the arc lies in a horizontal line [F1]. If an arc point is not a horizontal-tangency point then, by continuity of the tangent direction along the arc, some neighbourhood of it contains no horizontal-tangency point. [F1, F2, F3, F4]

1.2 (Choice of direction.) Fix a finite decomposition of the boundary into real-analytic arcs and let $J$ be the finite set of all their endpoints, including smooth joins as well as corners. Call a point $z\in\partial R$ **critical for the direction** $u\in S^1$ when the tangent line of $\partial R$ at $z$ is perpendicular to $u$, and write $h_u(z)=\langle z,u\rangle$. We claim that only finitely many directions $u$ are bad in the sense that some $p\in P$ has $h_u(p)$ equal to the height of a point of $J$ or of a point of $\partial R$ that is critical for $u$. Indeed, fix $p\in P$. If $z\in\partial R$ is critical for some $u$ and $h_u(z)=h_u(p)$, then $z-p$ is parallel to the tangent line of $\partial R$ at $z$. On each real-analytic arc, the points $z$ whose tangent line passes through $p$ are the zeros of a real-analytic equation for the parameter; by [F3] they are finitely many unless the equation vanishes identically on a subarc, in which case that subarc is straight and contributes only its one constant tangent direction, hence at most the two directions normal to it [F1]. A point $z$ of $\partial R$ fixed in advance determines the two directions perpendicular to its tangent line, and each point of $J$ determines the two directions perpendicular to the difference of that point and $p$; with finitely many arcs, finitely many such $z$, and finitely many points of $J$ this gives only finitely many bad directions $u$. Choose, once and for all, a direction $u$ that is not bad, and rename the coordinate axes so that $u$ is the positive $y$-direction. [F1, F3, given, choose]

1.3 (Endpoint form of a projected analytic arc.) Let $g:(w,w')\to\mathbb R$ be a boundary graph obtained by projecting one of the input analytic arcs to the $y$-axis, and suppose its graph has an endpoint $(x_0,y_0)$ at a wall. If that arc is locally $x=\psi(y)$, the one-sided Taylor expansion of $\psi$ is an ordinary convergent power series in $y-y_0$. Otherwise it is locally $y=\psi(x)$; because it projects to a nonempty open $y$-interval, $\psi$ is not constant, and its first nonzero Taylor term on the relevant side is $\psi(x_0+\varepsilon t)-y_0=\varepsilon_y c t^m(1+u(t))$ for $t\ge0$, where $m\ge1$, $c>0$, $u(0)=0$ is analytic and $\varepsilon,\varepsilon_y\in\{\pm1\}$. The function $s=t(c(1+u(t)))^{1/m}$ is analytic near zero with nonzero derivative; the positive analytic root exists by the power-series expansion of the root near $1$, and [F2] gives an analytic inverse $t=t(s)$. Since $s=|y-y_0|^{1/m}$ on the arc, $g(y)=x_0+\varepsilon t(|y-y_0|^{1/m})$ has a convergent one-sided Puiseux expansion. A finite sum or product of such expansions, after taking a common denominator for their exponents, again has a convergent Puiseux expansion. A continuous graph with such an expansion has finite length near its endpoint: with $y-y_0=\varepsilon_y s^m$, both coordinates are $C^1$ functions of $s$ on a closed short interval. [F1, F2, F4, given]

2.1 (Finitely many special heights.) Because $\partial R$ is a finite union of real-analytic arcs meeting only at endpoints and each arc is compact, step 1.1 gives that there are only finitely many points of $\partial R$ with horizontal tangent outside the maximal horizontal pieces of $\partial R$, and only finitely many such pieces: on each arc the horizontal-tangency set is locally finite and closed, hence finite in the compact arc, and if it is all of an arc that arc is a horizontal piece. Hence the set $H$ of heights of all points of $J$, of points with horizontal tangent, and of maximal horizontal pieces is a finite subset of $\mathbb R$. [step 1.1, given]

3.1 (Auxiliary heights.) Let the elements of the finite set $H$ of step 2.1 be $h_1<\cdots<h_r$. Choose numbers $\varepsilon_i>0$ so small that the $2r$ numbers $h_i\pm\varepsilon_i$ are pairwise distinct, lie outside $H$, avoid the $y$-coordinates of points of $P$, and the closed intervals $[h_i-\varepsilon_i,h_i+\varepsilon_i]$ are pairwise disjoint. In particular each such interval contains no element of $H$ other than $h_i$. These are finitely many nonempty open restrictions together with finitely many forbidden values for each $\varepsilon_i$. Put $W=\{h_i-\varepsilon_i,\ h_i,\ h_i+\varepsilon_i:1\le i\le r\}$ and call the elements of $W$ the **walls**. Then every interval between consecutive walls contains no element of $H$ in its interior, and each interval $(h_i-\varepsilon_i,h_i+\varepsilon_i)$ contains $h_i$ as its only wall. [step 2.1, step 1.2, given, choose]

4.1 (The boundary is a finite family of graphs in each strip.) Let $I=(w,w')$ be an interval between consecutive walls. Every connected component of $\partial R\cap\{w<y<w'\}$ is the graph $\{(g(y),y):w<y<w'\}$ of a function $g$ that is real analytic on $I$ and continuous on $[w,w']$: by step 3.1 the component contains no point of $J$, so it lies in a single real-analytic piece of the fixed decomposition, and it contains no point of horizontal tangency, so at each of its points it is locally a graph over the $y$-axis by step 1.1 and these local graphs glue. The components have no limit point in the strip, since otherwise two of them or one of them twice would meet at a point of the compact set $\overline{\partial R}$ in the open strip, and each spans the whole strip, so there are finitely many of them; write them as $g_1,\dots,g_m$. Two disjoint graphs over the same interval are everywhere ordered, because their difference is continuous and never vanishes, so after relabelling $g_1(y)<g_2(y)<\cdots<g_m(y)$ for every $y\in I$. [step 1.1, step 3.1]

5.1 (Bands.) For $y\in I$ the set $R\cap\{(x,y):x\in\mathbb R\}$ is a compact union of intervals whose boundary points are exactly the graph points $g_1(y),\dots,g_m(y)$; every open interval between two consecutive such points lies entirely in $R$ or entirely outside $R$, since a transition point in its interior would be a further boundary point at that height. Crossing a graph point the horizontal line passes from one local side of $\partial R$ to the other, so membership in $R$ flips, and every point sufficiently far to the left is outside $R$ because $R$ is bounded. Hence $m$ is even, $m=2n$, and $R\cap\{w<y<w'\}=\bigcup_{k=1}^{n}\{(x,y):w<y<w',\ g_{2k-1}(y)\le x\le g_{2k}(y)\}$. The closures $C_k=\{(x,y):w\le y\le w',\ g_{2k-1}(y)\le x\le g_{2k}(y)\}$ are compact subsets of $R$ which are exactly the closures in $\mathbb C$ of the open bands above, and $R$ is the union of the finitely many $C_k$ over all strips. Call the $C_k$ the **bands** and say that a band is **pinched at an end** when its two bounding graphs agree at that wall. [step 4.1, given]

6.1 (Marks on a wall.) Fix a wall $w\in W$ and consider the finitely many bands whose closure meets the height $w$, that is, bands over the strips having $w$ as an endpoint. The values at $w$ of the graphs bounding those bands are finitely many points of $\partial R$; call these points the **marks** at height $w$. They are exactly the points at which the partition of $R\cap\{y=w\}$ into band sides can change from one side of the wall to the other: a point of $R\cap\{y=w\}$ lying in the interior of a band side from each adjacent strip is interior to both, and if the two sides overlap in a segment then their endpoints are values at $w$ of bounding graphs. Every point of $P$ has a height strictly between two consecutive walls by step 3.1, hence lies in the interior of a strip and of a band, and no point of $P$ lies on $\partial R$ because $P\subseteq\operatorname{int}R$. [step 3.1, step 5.1, given]

6.2 (Non-pinched bands are pulled back from a rectangle.) Let $C=\{(x,y):w\le y\le w',\ g_{2k-1}(y)\le x\le g_{2k}(y)\}$ be a band with $g_{2k-1}(w)<g_{2k}(w)$ and $g_{2k-1}(w')<g_{2k}(w')$. The map $\Phi:C\to[0,1]\times[w,w']$, $\Phi(x,y)=((x-g_{2k-1}(y))/(g_{2k}(y)-g_{2k-1}(y)),\ y)$, is well defined; its denominator is continuous and positive on the compact interval, so $\Phi$ is a continuous bijection, and the displayed formula for $\Phi$ has the continuous inverse $(s,y)\mapsto(g_{2k-1}(y)+s(g_{2k}(y)-g_{2k-1}(y)),y)$. Thus $\Phi$ is a homeomorphism. [step 5.1]

7.1 (A graph-bounded fan in a nonpinched band.) For the rectangle $Q=[0,1]\times[w,w']$ of step 6.2, mark on its bottom and top sides exactly the $\Phi$-images of the wall marks of step 6.1 that lie on the corresponding side of $C$, including the four corners. Choose a height $h\in(w,w')$ and a parameter $s_\ast\in(0,1)$, put $q=(s_\ast,h)$, $\ell=(0,h)$ and $r=(1,h)$, and draw the two horizontal segments $\ell q$ and $qr$. In the upper rectangle fan from $q$ to every top-wall mark: its triangles are $(q,\ell,(0,w'))$, then $(q,t_j,t_{j+1})$ for consecutive top marks, then $(q,(1,w'),r)$. In the lower rectangle do the symmetric fan from $q$ to every bottom-wall mark. These finitely many triangles cover $Q$ face to face, and on its top and bottom sides introduce exactly the prescribed wall marks, with no additional wall vertex. Every nonhorizontal fan edge is a straight segment with $s$-coordinate affine in $y$, say $s(y)=s_0+\lambda y$; its pullback under $\Phi^{-1}$ is the graph $x=g_{2k-1}(y)+s(y)(g_{2k}(y)-g_{2k-1}(y))$. By step 1.3 it is analytic on the open strip and has convergent Puiseux expansions at wall endpoints; at the interior height $h$ it is ordinary analytic. Each pulled-back fan triangle is graph-bounded over $[h,w']$ or $[w,h]$: a middle triangle lies between two adjacent spoke graphs, which meet at $q$, and a side triangle lies between one spoke graph and $g_{2k-1}$ or $g_{2k}$. Horizontal fan edges pull back to horizontal segments. Thus all resulting cells are curvilinear triangles with piecewise Puiseux-analytic rectifiable edges, and their graph-bounded presentations have continuous, open-interval analytic boundary functions with Puiseux endpoints. [step 1.3, step 6.1, step 6.2, construct]

8.1 (Pinched bands split into a triangle and a band.) Suppose the band $C$ of step 5.1 is pinched at the bottom wall, so $g_{2k-1}(w)=g_{2k}(w)=x_0$; the case of a pinch at the top wall is symmetric. By step 3.1 the other wall $w'$ satisfies $(w,w')\cap H=\varnothing$, and $w'$ is an auxiliary wall outside $H$ (consecutive walls cannot both belong to $H$). A pinch outside $H$ would force a boundary junction or a horizontal tangent, since at any other boundary point there is a single graph over height. Thus the band is not pinched at $w'$, so $g_{2k-1}(w')<g_{2k}(w')$. The map $\Psi:[0,1]\times[w,w']\to C$, $\Psi(s,y)=(g_{2k-1}(y)+s(g_{2k}(y)-g_{2k-1}(y)),y)$, is a continuous surjection that is injective off the bottom edge and collapses that edge to the point $(x_0,w)$. Since $[0,1]\times[w,w']$ is compact and $C$ is Hausdorff, $\Psi$ is a quotient map, so $C$ is homeomorphic to the quotient of the rectangle obtained by collapsing one edge to a point; that quotient is a closed plane triangle. After affinely rescaling $[w,w']$ to $[0,1]$, the map $(s,t)\mapsto(s/(s+t),s+t)$ for $s+t>0$ and $(0,0)\mapsto(0,0)$ is a homeomorphism from the standard triangle $\Delta=\{s,t\ge0:s+t\le1\}$ onto the quotient. Under these identifications the three sides of $\Delta$ correspond to the two graph arcs of $C$ and the wall segment at height $w'$, all piecewise Puiseux-analytic by step 1.3. To respect every prescribed mark on the nonpinched wall, always cut $C$ along a horizontal segment at a height $\eta\in(w,w')$, chosen below the heights of all points of $P$ in $C$ when there are any and otherwise chosen arbitrarily in the open interval. The lower piece is a curvilinear triangle containing no point of $P$ and having no extra mark on its new horizontal side. The upper piece is a nonpinched band, triangulated by steps 6.2 and 7.1 using all marks on its original wall. The top-pinched case is symmetric, with the cut chosen above all points of $P$ when needed. [step 1.3, step 3.1, step 5.1, step 6.2, step 7.1, given]

9.1 (Avoiding the finite set in each fan.) Fix a nonpinched band $C$ and the finitely many points of $P$ in its open interior. Choose $h\in(w,w')$ different from their $y$-coordinates, so none lies on the horizontal fan edges of step 7.1. Under $\Phi$ each such point is an interior point $(s_p,y_p)$ of $Q$. For one fixed top or bottom wall mark $a$, a spoke from $q=(s_\ast,h)$ to $a$ can contain $(s_p,y_p)$ for at most one value of $s_\ast$, because the line through $a$ and $(s_p,y_p)$ meets the horizontal line $y=h$ at a unique point; if $y_p$ is outside the spoke's height range, there is no forbidden value. There are finitely many pairs $(p,a)$, so choose $s_\ast\in(0,1)$ outside their finitely many forbidden values. Then no spoke contains a point of $P$, while the band-boundary arcs are disjoint from $P$ by hypothesis. For every band pinched at one wall, first make the horizontal cut of step 8.1, below (or above) all heights of its points of $P$ when needed, and apply this choice to its nonpinched remainder. Every point of $P$ therefore lies in an open triangular face, not on an edge. [step 6.1, step 6.2, step 7.1, step 8.1, given, choose]

9.2 (Face-to-face across the walls.) At a wall $w$, step 6.1 supplies the same finite marks for every band side meeting the same wall segment. The fan of step 7.1 adds no further vertex on its top or bottom wall, so each maximal interval between consecutive marks is exactly one full triangle edge on each incident band side. The horizontal cut inside a pinched band in step 8.1 is shared in full by its lower triangular piece and the fan triangulation of its upper nonpinched piece. Distinct bands have disjoint interiors; their common parts are only the marked wall intervals or endpoint marks. Thus the triangles from all bands meet only in full common edges, common vertices or the empty set. [step 5.1, step 6.1, step 7.1, step 8.1]

10.1 (Conclusion.) The finitely many triangles produced in steps 7.1, 8.1 and 9.1 are curvilinear triangles with piecewise Puiseux-analytic, hence rectifiable, edges contained in $R$, their interiors are pairwise disjoint, they meet only in full edges or vertices by steps 7.1 and 9.2, and their union is $R$ because every point of $R$ lies in a band of step 5.1 and every band is triangulated. By steps 6.1 and 9.1 no point of $P$ lies on an edge. Every choice made was a choice from finitely many explicitly described alternatives: the direction of step 1.2, the finitely many heights of step 3.1, and the finitely many cuts and diagonals of steps 7.1 and 9.1. No choice principle is used. [step 1.3, step 5.1, step 7.1, step 8.1, step 9.1, step 9.2] ∎



## Source locator

Jost, *Compact Riemann Surfaces*, §2.3.A, Theorem 2.3.A.1, printed pp. 37–39
(PDF pp. 49–51), subdivides a compact surface into polygonal pieces along a
geodesic network and then subdivides each piece into triangles by short
geodesics. The present lemma is the plane-local replacement used for the
chartwise triangulation of a compact Riemann surface: horizontal cuts play the
role of the network, the graph representation of each boundary arc replaces
geodesic convexity, and the rectangle fan pullback replaces the geodesic diagonal
construction.

Valette, *On subanalytic geometry*, Definition 1.2.1 and Theorem 1.2.3,
printed pp. 14–15, gives analytic cylindrical cells, and Proposition 1.8.4,
printed p. 38, gives Puiseux endpoint expansions for one-variable globally
subanalytic functions. It does not assert the face-to-face graph-bounded
triangulation here; steps 1.3 and 5.1–10.1 establish that construction and its
endpoint regularity directly from the input analytic arcs.
