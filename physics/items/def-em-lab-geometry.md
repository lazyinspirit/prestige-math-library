---
id: def-em-lab-geometry
kind: definition
title: "Laboratory geometry: a restricted inertial chart, its spatial slices and fixed-time fields"
status: draft
origin: session
domain: physics
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-euclidean-inner-product, def-interval, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-sr-affine-minkowski-model, def-vector-space, lem-standard-basis-of-f-n, post-sr-inertial-covariance]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-vector-space: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  post-sr-inertial-covariance: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The laboratory description of classical electromagnetism in one named inertial frame of flat Minkowski spacetime: a restricted inertial chart, its constant-time slices with the frame's Euclidean spatial structure, and fixed-time component fields. The region may be proper. No Galilean transformation, no observer congruence, no curvature and no quantum structure is defined here; all spatial structure belongs to the named frame."
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§1 printed pp. 1-3 (velocity of propagation of interaction; principle of relativity), §2 printed pp. 3-7 (intervals and the Minkowski coordinate system) and §4 printed pp. 9-12 (Lorentz transformation); the laboratory notion of a restricted inertial chart is the library's own formulation of the cited coordinate structure"
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term, 2015; 236 PDF pages)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.1-§5.1.4, printed pp. 95-101 (PDF pp. 103-109): inertial coordinates, Lorentz transformations, proper time and four-vector conventions. This supports the coordinate conventions; the restricted product-region construction is local."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§12.1 printed pp. 491-494 (the special theory of relativity: inertial frames, coordinates and the role of c)"
---

## Definition

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space
([[def-sr-affine-minkowski-model]]), let $(o;e_0,e_1,e_2,e_3)$ be an inertial
frame with inertial chart $x:A\to\mathbb R^4$
([[def-inertial-frame-and-inertial-chart]]), let $c>0$ be the framework's
conversion constant, and let $\delta$ be the Euclidean spatial form of that
frame on $n^\perp$, $n:=e_0$, with norm $|\cdot|$ and positive spatial
orientation ([[def-spatial-euclidean-structure-of-an-inertial-frame]]). Fix a
nonempty open interval $I\subseteq\mathbb R$ ([[def-interval]]) and a nonempty
open set $\Omega\subseteq\mathbb R^3$, and put

$$U:=\{p\in A:\ \text{there are }t\in I,\ y\in\Omega\text{ with }x^0(p)=ct,\ (x^1,x^2,x^3)(p)=y\}.$$

Then:

(a) [Chart restriction] $x(U)=\{(ct,y):t\in I,\ y\in\Omega\}$ and
$\Phi:U\to I\times\Omega$, $\Phi(p):=(x^0(p)/c,(x^1,x^2,x^3)(p))$, is a
bijection, because the inertial chart $x:A\to\mathbb R^4$ is a bijection and
$c>0$; its components are the **laboratory time coordinate**
$t(p):=x^0(p)/c$ and the **laboratory position**
$r(p):=(x^1(p),x^2(p),x^3(p))$. In the chart coordinates the pair
$(t(p),r(p))$ is the reading of the laboratory decomposition of $p$. Writing
$r(p)=(r^1(p),r^2(p),r^3(p))\in\mathbb R^3$, the standard basis of
$\mathbb R^3$ ([[lem-standard-basis-of-f-n]]) labels the three coordinate
directions, and the identification $\mathbb R^3\cong n^\perp$ is the linear
map $\sum_{i=1}^3 r^i e_i$ into the three-dimensional real vector space
$n^\perp$ ([[def-vector-space]], [[def-euclidean-inner-product]]).

(b) [Slices and spatial structure] For each $t\in I$ the slice
$U_t:=\{p\in U:t(p)=t\}$ is carried bijectively onto $\Omega$ by $r$; the
constant vector $n=e_0$ is future unit timelike, and $(e_1,e_2,e_3)$ is the
$\delta$-orthonormal positively oriented basis of $n^\perp$ in which the
coordinates of $r$ are expressed.

(c) [Laboratory fields] For a nonnegative integer $m$, a **laboratory field of rank $m$** is a map
$F:\Omega\times I\to\mathbb R^m$; it is identified with the map $U\to\mathbb R^m$,
$p\mapsto F(r(p),t(p))$, and with the family $(F(\cdot,t))_{t\in I}$ of maps
$\Omega\to\mathbb R^m$, its values at fixed time. Such a field is of class
$C^k$, for $m\ge1$, when the map $(y,t)\mapsto F(y,t)$ is $C^k$ in the sense of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. For $m=0$, set $\mathbb R^0:=\{()\}$;
the unique field into this singleton is declared $C^\infty$ (and $C^k$ for every
finite $k$), and each of its partial derivatives is the same singleton-valued
zero map. For $m\ge1$ and $k\ge1$, $\partial_{y_i}F$ (at fixed
$t$) and $\partial_tF$ (at fixed $y$) are the partial derivatives of
[[def-directional-and-partial-derivatives]]. No regularity of a field is
asserted beyond the class stated for it.

(d) [Conventions] The product decomposition is a coordinate identification
inside the single inertial frame $(o;e_0,e_1,e_2,e_3)$; it is not a Galilean
transformation, it does not compare two inertial frames, and it does not
assert absolute simultaneity. The objects $I,\Omega,t,r,\delta$ and the
identification $\mathbb R^3\cong n^\perp$ belong to the named frame; changes
of inertial description are the proper orthochronous maps adopted in
[[post-sr-inertial-covariance]]. The frame is an origin together with an
ordered basis; it is not a congruence of observers, and no moving observer
field is defined here.
