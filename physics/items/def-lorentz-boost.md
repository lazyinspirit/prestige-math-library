---
id: def-lorentz-boost
kind: definition
title: The passive Lorentz boost with parameter beta
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 6
deps: [def-lorentz-map-and-lorentz-group, def-inertial-frame-and-inertial-chart,
       def-rational-power, lem-rational-power-laws, def-euclidean-inner-product,
       def-linear-map, def-coordinate-column-and-matrix-of-a-linear-map,
       def-matrix-product-and-identity-matrix,
       thm-unique-coordinates-with-respect-to-an-ordered-basis,
       thm-real-power-continuity-and-derivatives,
       thm-real-power-agrees-with-rational-exponent, def-abs-value,
       lem-of-abs-value]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-map: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Definition

Let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame of the model
([[def-inertial-frame-and-inertial-chart]]), and let
$x=(x^0,x^1,x^2,x^3)$ be its coordinates, so that a vector is written
$x=x^0e_0+x^1e_1+x^2e_2+x^3e_3$ and the spatial part is the coordinate
column $x_{\mathrm{vec}}=(x^1,x^2,x^3)$ of $\mathbb R^3$ with its standard
Euclidean structure ([[def-euclidean-inner-product]]).

For $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$, where
$|\boldsymbol\beta|$ is the Euclidean norm, set

$$\gamma(\boldsymbol\beta):=(1-|\boldsymbol\beta|^2)^{-1/2}\ \ge 1,$$

with equality exactly for $\boldsymbol\beta=\mathbf 0$ and strict inequality
for $\boldsymbol\beta\neq\mathbf 0$; here the power is the rational power
([[def-rational-power]], [[lem-rational-power-laws]]). The **passive Lorentz
boost with parameter $\boldsymbol\beta$** is the linear map
$B(\boldsymbol\beta):V\to V$ ([[def-linear-map]]) defined by its action on
coordinates: for $\boldsymbol\beta\neq\mathbf 0$,

$$x'^0=\gamma\,(x^0-\boldsymbol\beta\cdot x_{\mathrm{vec}}),\qquad x'_{\mathrm{vec}}=x_{\mathrm{vec}}+\frac{\gamma-1}{|\boldsymbol\beta|^2}\,(\boldsymbol\beta\cdot x_{\mathrm{vec}})\,\boldsymbol\beta-\gamma\,\boldsymbol\beta\,x^0,$$

and for $\boldsymbol\beta=\mathbf 0$, $B(\mathbf 0):=\operatorname{id}_V$.
Here $x'$ denotes the coordinates of $B(\boldsymbol\beta)$ applied to the
vector with coordinates $x$, and $\boldsymbol\beta\cdot x_{\mathrm{vec}}$ is
the Euclidean scalar product. Equivalently, in the ordered basis
$(e_0,e_1,e_2,e_3)$ the matrix of $B(\boldsymbol\beta)$ is

$$\begin{pmatrix}\gamma & -\gamma\boldsymbol\beta^{T}\\ -\gamma\boldsymbol\beta & I_3+\dfrac{\gamma-1}{|\boldsymbol\beta|^{2}}\,\boldsymbol\beta\boldsymbol\beta^{T}\end{pmatrix},$$

that is, $B^0{}_0=\gamma$, $B^0{}_i=B^i{}_0=-\gamma\beta_i$ for
$i=1,2,3$, and
$B^i{}_j=\delta^i{}_j+\frac{\gamma-1}{|\boldsymbol\beta|^2}\beta_i\beta_j$
for $i,j=1,2,3$, with the spatial block replaced by
$I_3$ when $\boldsymbol\beta=\mathbf 0$. In the $1+1$ case
$\boldsymbol\beta=\beta e_1$ this reads
$x'^0=\gamma(x^0-\beta x^1)$ and $x'^1=\gamma(x^1-\beta x^0)$. The vector
$\boldsymbol\beta$ is called the **boost parameter**; it is dimensionless and
mathematically independent of any unit convention.

**Consistency of the definition.** The displayed formulas assign to every
coordinate pair $(x^0,x_{\mathrm{vec}})$ a pair
$(x'^0,x'_{\mathrm{vec}})$; writing the result as the matrix product above and
using that $\mathbb R^4$ is identified with coordinates through
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] (see
[[def-coordinate-column-and-matrix-of-a-linear-map]]), the map
$v\mapsto E(M(E^{-1}(v)))$ is the unique linear map with that matrix. The case
$\boldsymbol\beta=\mathbf 0$ is declared separately because the expression
$(\gamma-1)/|\boldsymbol\beta|^2$ is undefined there. That the two cases fit
together is the limit computation recorded next.

**The limit as $\boldsymbol\beta\to\mathbf 0$.** For
$\boldsymbol\beta\neq\mathbf 0$ the identity
$\gamma^2-1=|\boldsymbol\beta|^2\gamma^2$ gives

$$\frac{\gamma-1}{|\boldsymbol\beta|^{2}}=\frac{\gamma^{2}}{\gamma+1}.$$

Since $|\boldsymbol\beta|^2\le3/4$ forces $1\le\gamma\le2$, the bounds
$|\beta_i|\le|\boldsymbol\beta|$ and $|\beta_i\beta_j|\le|\boldsymbol\beta|^2$
(from the Euclidean norm convention, [[def-abs-value]], [[lem-of-abs-value]])
show that $\gamma\to1$ as $\boldsymbol\beta\to\mathbf 0$; here continuity of
the positive-base power at fixed exponent $-1/2$ is
[[thm-real-power-continuity-and-derivatives]], with real and rational powers
identified by [[thm-real-power-agrees-with-rational-exponent]]. Hence
$(\gamma-1)/|\boldsymbol\beta|^2\to1/2$, so
$B^i{}_j=\delta^i{}_j+\frac12\beta_i\beta_j+o(|\boldsymbol\beta|^2)$ and
$B(\boldsymbol\beta)\to I$ entrywise, without a hidden division by zero.
Here $o(|\boldsymbol\beta|^2)$ denotes a remainder whose ratio to
$|\boldsymbol\beta|^2$ tends to $0$ through nonzero parameters: the ratio
of each spatial remainder is bounded by
$|\gamma^2/(\gamma+1)-1/2|\to0$. The time-space entries obey
$|\gamma\beta_i|\le2|\boldsymbol\beta|\to0$, and the time-time entry tends to
$1$ by $\gamma\to1$. The
definition asserts no Lorentz property: that $B(\boldsymbol\beta)$ is a proper
orthochronous Lorentz map with inverse $B(-\boldsymbol\beta)$ is proved in
[[lem-boost-is-proper-orthochronous-with-inverse]], and its collinear
composition law in
[[lem-collinear-boost-composition-and-velocity-addition]]. The physical
reading of $c\boldsymbol\beta$ as a relative velocity is not part of this
definition ([[def-lorentz-map-and-lorentz-group]]).
