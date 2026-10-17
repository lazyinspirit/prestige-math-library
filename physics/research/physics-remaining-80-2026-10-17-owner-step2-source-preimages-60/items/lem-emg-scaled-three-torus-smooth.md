---
id: lem-emg-scaled-three-torus-smooth
kind: lemma
title: "The scaled three-torus as a smooth compact flat spatial manifold"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-quotient-topology
  - def-topological-space
  - def-integers
  - def-rationals
  - def-continuous-map-top
  - def-homeomorphism-and-open-maps
  - def-hausdorff-space
  - def-second-countable-space
  - def-topological-manifold-without-boundary
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-exterior-power-bundle-of-the-cotangent-bundle
  - def-smooth-vector-field-as-a-tangent-bundle-section
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - lem-int-embeds-rat
  - lem-rat-embeds-dense
  - lem-q-and-irrationals-dense-r
  - thm-rationals-countable
  - thm-heine-borel-rn
  - thm-compactness-under-continuous-maps
dependency_roles:
  def-quotient-topology: mathematical-premise
  def-topological-space: mathematical-premise
  def-integers: mathematical-premise
  def-rationals: mathematical-premise
  def-continuous-map-top: mathematical-premise
  def-homeomorphism-and-open-maps: mathematical-premise
  def-hausdorff-space: mathematical-premise
  def-second-countable-space: mathematical-premise
  def-topological-manifold-without-boundary: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-exterior-power-bundle-of-the-cotangent-bundle: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  lem-int-embeds-rat: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  lem-q-and-irrationals-dense-r: mathematical-premise
  thm-rationals-countable: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Klaus Wirthmüller, Manifolds (lecture notes 2011–2016), §1.14(4), printed pp. 12–13 (PDF pp. 18–19)"
      url: "https://kluedo.ub.rptu.de/files/4529/man_skript.pdf"
      locator: "The quotient group R^n/Z^n; small cube quotient charts, local translation transition maps, the smooth atlas, and the quotient map as a local diffeomorphism. The current item proves the scaled-period, product-space, descended-field, and metric details directly."
---

## Statement

Let $L_1,L_2,L_3>0$ be real periods, let
$\Lambda:=L_1\mathbb Z\times L_2\mathbb Z\times L_3\mathbb Z\subseteq\mathbb R^3$,
and let $q:\mathbb R^3\to\mathbb T^3_L:=\mathbb R^3/\Lambda$ be the quotient
map with the quotient topology. Then $q$ is a smooth local diffeomorphism and
$\mathbb T^3_L$ is a compact,
Hausdorff, second-countable smooth three-manifold without boundary.

The forms $dx^1,dx^2,dx^3$ and coordinate vector fields
$\partial_1,\partial_2,\partial_3$ on $\mathbb R^3$ descend to global smooth
forms and vector fields on $\mathbb T^3_L$. Every smooth $\Lambda$-periodic
function on $\mathbb R^3$ descends to a smooth function on $\mathbb T^3_L$.
Consequently, $M_L:=\mathbb R_{x^0}\times\mathbb T^3_L$ has a smooth,
boundaryless four-manifold structure and carries the smooth Lorentzian metric,
orientation, and time orientation

$$g:=-(dx^0)^2+(dx^1)^2+(dx^2)^2+(dx^3)^2,\qquad N:=\partial_0,\qquad o:=dx^0\wedge dx^1\wedge dx^2\wedge dx^3.$$

In the product charts from the quotient atlas the metric has constant matrix
$\operatorname{diag}(-1,1,1,1)$ and its metric-selected Christoffel symbols
vanish.

## Facts & Assumptions

**Given:** Positive periods $L_i$, the quotient topology on $\mathbb T^3_L$,
and the standard Euclidean coordinates and smooth structure on $\mathbb R^3$.

[F1] A quotient map is continuous by the quotient-topology definition, a map
is open when it sends open sets to open sets, and a homeomorphism is a
continuous open bijection ([[def-quotient-topology]],
[[def-continuous-map-top]], [[def-homeomorphism-and-open-maps]]).

[F2] A topological three-manifold without boundary is Hausdorff,
second-countable, and locally homeomorphic to open subsets of $\mathbb R^3$;
a smooth manifold is such a space with a maximal atlas whose transitions are
smooth ([[def-topological-manifold-without-boundary]],
[[def-hausdorff-space]], [[def-second-countable-space]],
[[def-smooth-manifold]]).

[F3] The rationals are dense and countable, so products of open intervals
with rational endpoints form a countable base of $\mathbb R^3$
([[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]]).

[F4] The closed rectangular box $\prod_i[0,L_i]$ is compact in $\mathbb R^3$
by Heine–Borel, and the continuous image of a compact space is compact
([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]).

[F5] In smooth Euclidean charts, a translation has a smooth coordinate map;
a $C^\infty$ map in charts is a smooth map between smooth manifolds
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[F6] The metric-selected connection in coordinates has Christoffel symbols
$\Gamma^a{}_{bc}=\frac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$
([[def-gr-metric-selected-connection]]).

[F7] The integer ring embeds in the rationals, which embed canonically and
densely in $\mathbb R$; thus the periods $L_i$ define the stated real lattice
([[def-integers]], [[def-rationals]], [[lem-int-embeds-rat]],
[[lem-rat-embeds-dense]]).

[F8] A smooth Lorentzian four-manifold has signature $(-,+,+,+)$, and a
time orientation is a smooth timelike vector field; an orientation is a smooth
choice of a ray in the determinant line. A nowhere-zero smooth top form selects
such a ray ([[def-gr-smooth-lorentzian-objects]],
[[def-smooth-vector-field-as-a-tangent-bundle-section]],
[[def-oriented-smooth-manifold-and-oriented-chart]],
[[def-exterior-power-bundle-of-the-cotangent-bundle]]).

[F9] Smooth $k$-forms are sections of the exterior-power cotangent bundle and
their wedge products are smooth alternating forms; the displayed nowhere-zero
top form therefore supplies the orientation record of [F8]
([[def-smooth-differential-k-form]],
[[def-exterior-power-bundle-of-the-cotangent-bundle]],
[[def-wedge-product-of-differential-forms]]).

## Proof

**Given:** Facts [F1]–[F9] and the periods in the Statement.

1.1 The quotient map is open: for any open $U\subseteq\mathbb R^3$,
$q^{-1}(q(U))=\bigcup_{\lambda\in\Lambda}(U+\lambda)$ is open, so $q(U)$
is open by the quotient topology. For any $x\in\mathbb R^3$, choose
$0<r<\frac12\min_iL_i$ and let $B=B(x,r)$ be the Euclidean ball. If
$y,z\in B$ and $q(y)=q(z)$, then $y-z\in\Lambda$; each coordinate has
absolute value less than $2r<L_i$, so each lattice coordinate is zero and
$y=z$. Thus $q|_B$ is a continuous open bijection from $B$ to the open set
$q(B)$, hence a homeomorphism by [F1]. These neighborhoods give local
Euclidean charts. [given, F1, F7, construct, algebra]

1.2 Every class in $\mathbb T^3_L$ has a representative in the compact box
$C:=\prod_i[0,L_i]$, since in each coordinate an integer multiple of $L_i$
can be subtracted to leave a value in $[0,L_i)$. Hence $q(C)=\mathbb T^3_L$.
The quotient map is continuous by [F1], so [F4] makes its image compact.
[given, F1, F4, F7, algebra]

2.1 If $q(x)\ne q(y)$, then $x-y\notin\Lambda$. Among the lattice vectors
with $|x-y-\lambda|\le1$, each integer coordinate is bounded by
$(|x-y|+1)/L_i$, so there are finitely many. Their distances from $x-y$ are
all positive, and every other distance exceeds $1$; therefore
$\delta:=\inf_{\lambda\in\Lambda}|x-y-\lambda|>0$. Choose
$0<\epsilon<\delta/3$.
If $q(B(x,\epsilon))$ and $q(B(y,\epsilon))$ met, some
$x'\in B(x,\epsilon)$ and $y'\in B(y,\epsilon)$ would satisfy
$x'-y'\in\Lambda$, implying
$|x-y-(x'-y')|\le |x-x'|+|y-y'|<2\epsilon<\inf_{\lambda\in\Lambda}|x-y-\lambda|$,
a contradiction. These quotient neighborhoods are disjoint, so the torus is
Hausdorff. Let $\mathcal B$ be the countable rational-box base of [F3]. Since
$q$ is open by step 1.1, $\{q(B):B\in\mathcal B\}$ is a countable base on
$\mathbb T^3_L$: if $p\in V$ with $V$ open, choose $x\in q^{-1}(p)$ and a
rational box $B$ with $x\in B\subseteq q^{-1}(V)$; then
$p\in q(B)\subseteq V$. Together with step 1.1 this proves the topological
three-manifold conditions in [F2]. [given, F2, F3, F7, step 1.1, construct, algebra]

3.1 The charts $q|_B^{-1}$ from step 1.1 form a smooth atlas. In these charts
the local representative of $q$ is the identity, so $q$ is a smooth local
diffeomorphism. On an overlap, fix lifts $x,y$ of one point with
$y-x=\lambda\in\Lambda$. The distance from $\lambda$ to any other lattice
vector is positive because each lattice spacing $L_i$ is positive. Restrict
both chart neighborhoods so their lifts are within less than one quarter of
that distance from $x$ and $y$. Any pair of lifts of one point in this
restricted overlap must then differ by the same $\lambda$; otherwise the
triangle inequality would put two distinct lattice vectors less than half
their positive separation apart. Thus the transition is locally a fixed
translation, smooth by [F5]. The atlas generates the smooth structure of [F2].
Since every chart has open image in $\mathbb R^3$, there is no boundary. The
translation transitions have derivative the identity, so the local one-forms
$dx^i$ and vector fields $\partial_i$ agree on overlaps and define global
smooth fields. A smooth $\Lambda$-periodic function is constant on quotient
fibres; in each chart its representative is a translate of the original
smooth function, so it descends smoothly.
The product is Hausdorff: $\mathbb R$ is Hausdorff because distinct real
coordinates have disjoint intervals of radius less than half their distance,
and $\mathbb T^3_L$ is Hausdorff by step 2.1. For distinct product points,
separate a differing coordinate by disjoint open neighborhoods and take their
products with the full other factor. It is second-countable because the products of a
countable rational-interval base of $\mathbb R$ and the countable base of
step 2.1 form a countable base. Product chart images are open in $\mathbb R^4$,
so they give a boundaryless topological four-manifold. Their transitions are
products of identity maps and the smooth translations just proved, hence form
a smooth structure. In these charts the displayed $g,N,o$ have the same
constant components, so they patch globally; $g$ has signature $(-,+,+,+)$,
$N$ is timelike, and $o$ never vanishes. The metric formula [F6] then gives
$\Gamma^a{}_{bc}=0$ in every product chart. This proves all claims. [given, F2, F3, F5, F6, F7, F8, F9, step 1.1, step 2.1, algebra, construct] ∎

