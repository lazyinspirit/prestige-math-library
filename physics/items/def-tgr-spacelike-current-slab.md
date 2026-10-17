---
id: def-tgr-spacelike-current-slab
kind: definition
title: "Finite spacelike slab and normal flux charge"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-gr-metric-volume-form-and-current-flux
  - lem-tgr-coordinate-boxes-are-compact-jordan
  - def-riemann-integral-over-a-jordan-set
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-tgr-coordinate-boxes-are-compact-jordan: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes, 12 October 2022, §§8.6–8.7, printed pp. 108–110 (PDF pp. 109–111)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§8.6 gives integration of the metric volume form; §8.7 defines hypersurface integration by pullback and states Stokes' theorem and the non-null normal-flux formula. The local coordinate-box definition here supplies its own C¹-current convention."
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, Michaelmas Term 2019, §§2.4.4–2.4.5 and §3.2.4, printed pp. 87–89 and 110–112 (PDF pp. 94–96 and 117–119)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "The notes define integration of forms and state Stokes' theorem, then give the curved-space divergence theorem. The local definition keeps side flux as a three-form/coordinate-face integral and does not require a unit normal on a null face."
---

## Definition

Use a time-oriented smooth Lorentzian four-manifold $(M,g,N)$ of signature
$(-,+,+,+)$ and an independent orientation, with the exact meanings in
[[def-gr-smooth-lorentzian-objects]] and
[[def-oriented-smooth-manifold-and-oriented-chart]]. The tangent-bundle smooth
structure follows the stated Countable Choice convention
[[def-countable-choice]]. Let $(U,x)$ be a positively oriented chart with
$x=(x^0,x^1,x^2,x^3)$ and $x(U)=V\subseteq\mathbb R^4$. Coordinates here are
mathematical real coordinates; no physical units are assigned.

Choose real numbers $t_0<t_1$ and $a_i<b_i$ for $i=1,2,3$, and let
$$\Omega=\prod_{i=1}^3(a_i,b_i),\qquad \overline\Omega=\prod_{i=1}^3[a_i,b_i],\qquad K=[t_0,t_1]\times\Omega,\qquad \overline K=[t_0,t_1]\times\overline\Omega\subset V.$$
The finite integration slab $K$ is a bounded Jordan set and its closure
$\overline K$ is a compact coordinate box. Assume $\overline K$ has an open
neighborhood in $V$ on which the spatial metric block
$h_{ij}:=g_{ij}$ is positive definite and the inverse-metric component
$g^{00}$ is negative. Thus each slice
$\Sigma_t=\{x^{-1}(t,x^1,x^2,x^3):(x^1,x^2,x^3)\in\Omega\}$ is spacelike.
Assume also that the future unit normal defined below is future-directed in the
given time orientation. The closure $\overline K$, its closed coordinate
faces, the open spatial rectangle $\Omega$, the mixed-endpoint slab $K$, and
the corresponding mixed-endpoint side-face rectangles are Jordan sets by
[[lem-tgr-coordinate-boxes-are-compact-jordan]].

Write $g^{ab}$ for the inverse matrix to $g_{ab}$ and put
$$w:=\sqrt{|\det(g_{ab})|},\qquad \alpha:=(-g^{00})^{-1/2},\qquad n^a:=-\alpha g^{a0},\qquad n_a:=-\alpha\,\delta_a^0.$$
Then $n$ is the future unit normal to every $\Sigma_t$; its unit and normal
properties follow from $g^{ab}n_an_b=-1$ and
$g_{ab}n^b=n_a$. Let $dV_h:=\sqrt{\det(h_{ij})}\,dx^1dx^2dx^3$ be the
Riemannian volume element of the induced positive-definite slice metric.
In this positively oriented chart the metric volume form is
$\mathrm{vol}_g=w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ by
[[def-gr-metric-volume-form-and-current-flux]] clause (a).

A **current** here is a $C^1$ vector field $J=J^a\partial_a$ on an open
neighborhood of $x^{-1}(\overline K)$; equivalently, its coordinate components $J^a$
are $C^1$. Its current three-form is the pointwise contraction
$\omega_J:=\iota_J\mathrm{vol}_g$, where
$(\iota_J\mathrm{vol}_g)(X_1,X_2,X_3):=
\mathrm{vol}_g(J,X_1,X_2,X_3)$. In coordinates,
$$\omega_J=w\bigl(J^0dx^1\wedge dx^2\wedge dx^3 -J^1dx^0\wedge dx^2\wedge dx^3 +J^2dx^0\wedge dx^1\wedge dx^3 -J^3dx^0\wedge dx^1\wedge dx^2\bigr).$$
The slice orientation is chosen so that the future unit normal precedes a
positive slice basis. Since $n^0=1/\alpha>0$ and the spacetime chart is
positive, this slice orientation is $dx^1\wedge dx^2\wedge dx^3$; the
pullback of $\omega_J$ to $\Sigma_t$ is $wJ^0dx^1\wedge dx^2\wedge dx^3$.
Define its signed **slice charge** (the normal flux through the spacelike
slice) by
$$Q_J(t):=\int_\Omega -g(J,n)\,dV_h.$$
Every displayed integral is the Riemann integral over the indicated bounded
Jordan set, as defined in
[[def-riemann-integral-over-a-jordan-set]]. The current and metric extend
continuously to the compact coordinate closure, and
[[lem-tgr-coordinate-boxes-are-compact-jordan]] proves that the open spatial
and mixed-endpoint rectangles are Jordan measurable and that these continuous
densities are Riemann integrable there.

Let $B$ denote the union of the six side faces of $K$, with outward boundary
orientation; each face is integrated over its relative interior, a bounded
Jordan rectangle whose closure is compact. The upper $x^i$ face has induced orientation
$(-1)^i dx^0\wedge\cdots\widehat{dx^i}\cdots\wedge dx^3$; the lower face
has its opposite. Thus the $i$th current-three-form pullback integrates to
the upper-minus-lower $wJ^i$ coordinate expression below. Define the
**net outward side flux** $\Phi_J(B)$ as the sum over
the three spatial coordinate directions of upper-face flux minus lower-face
flux. More explicitly, for $i\in\{1,2,3\}$ let $\Omega_i$ be the product
Jordan rectangle in the three coordinates other than $x^i$, with endpoint
convention $x^0\in[t_0,t_1]$ and $x^j\in(a_j,b_j)$ for $j\ne i$; then
$$\Phi_J(B):=\sum_{i=1}^3\int_{\Omega_i} \left. wJ^i\right|_{x^i=b_i}-\left. wJ^i\right|_{x^i=a_i}\,d^3x_{\widehat i}.$$
The integrals use the standard increasing-coordinate order on each face. For
a $C^1$ current the three-form coefficients are continuous, so the displayed
rectangular integrals exist. This extends the smooth-current flux convention
of [[def-gr-metric-volume-form-and-current-flux]] clause (b) to the present
finite coordinate faces. No unit normal to a side face is part of this
definition; in particular the flux form remains defined if a side face is
null. The term “charge” names this mathematical flux integral only; it does
not assert a physical conservation law or an entropy interpretation.

## Remarks

- The definition is local to the supplied chart and finite product slab with
  compact closure. It
  makes no claim about arbitrary regions, rough boundaries, noncompact
  exhaustions, or limits at infinity.
- If a later physical model assigns units and identifies $J$ with an entropy
  current, those units and that interpretation are additional premises. This
  mathematical definition has no unit convention.
