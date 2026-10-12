---
id: def-gr-stationary-weak-field-data
kind: definition
title: "Stationary weak-field data: the diagonal ansatz, its bounds, stationarity and the Einstein-family condition"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-killing-field, def-c-r-and-smooth-maps-between-smooth-manifolds, def-invertible-matrix-and-general-linear-group, def-interval]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the weak-field, static, slow-motion conditions g_{00}=-(1+2Phi), spatial metric (1-2Phi) delta_{ij} and the Newtonian limit, printed pp. 105-112 (PDF pp. 112-119)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the stationary weak-field ansatz g = eta + h with h_{00}=-2Phi, h_{ij}=-2Phi delta_{ij} and the Newtonian limit, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.2 and the Newtonian-gravity module: weak fields, slow motion and the Poisson equation, printed p. 42 (PDF p. 43) with the Newtonian expansion of the geodesic equation"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Definition

Let $(M,g_\eta,N_\eta)$ be the flat model of
[[def-gr-minkowski-model-and-inertial-chart]] with inertial chart
$x=(x^0,x^1,x^2,x^3)$ and constant components
$\eta_{ab}=\operatorname{diag}(-1,1,1,1)$. Let $\Omega\subseteq M$ be a
nonempty open spacetime region, identified with its image in $\mathbb R^4$,
and let $\pi:\Omega\to\mathbb R^3$ be the spatial projection
$\pi(x^0,\mathbf x)=\mathbf x$. Its image $U:=\pi(\Omega)$ is open: a
coordinate ball in $\Omega$ about any point projects onto a ball about that
point's spatial coordinates. Let $K\subseteq U$ be compact. Let $c>0$ and
$G_N>0$ be the constants of the framework's conventions and put
$\kappa:=8\pi G_N/c^4$. The coordinates have units of metres, $c$ has units
$\mathrm m\,\mathrm s^{-1}$, and $\varepsilon$ is dimensionless.

**(a) Structural data.** A tuple $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ is
**stationary weak-field data** when

- $L>0$ is a length, $C>0$ is dimensionless, and $\varepsilon_0>0$ is
  dimensionless;
- $\varphi:U\to\mathbb R$ is a smooth dimensionless spatial function and
  $r=(r_{ab})$ is a family of smooth dimensionless spatial functions
  $r_{ab}:(-\varepsilon_1,\varepsilon_1)\times U\to\mathbb R$ for some
  $\varepsilon_1>\varepsilon_0$
  ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]);
- for every $0<\varepsilon\le\varepsilon_0$ the component field

$$g_{ab}(\varepsilon,p)=\begin{cases}-(1+2\varepsilon\varphi(\pi(p)))+r_{00}(\varepsilon,\pi(p)),&a=b=0,\\[2pt] r_{0i}(\varepsilon,\pi(p)),&\{a,b\}=\{0,i\},\\[2pt] (1-2\varepsilon\varphi(\pi(p)))\,\delta_{ij}+r_{ij}(\varepsilon,\pi(p)),&a=i,\ b=j,\end{cases}$$

  is the component field of a smooth Lorentzian metric $g(\varepsilon)$ on
  $\Omega$ of signature $(-,+,+,+)$ ([[def-gr-smooth-lorentzian-objects]]);
- **(spatial factorization and stationarity)** all metric components factor
  through $\pi$ by construction. Thus points of $\Omega$ with the same
  spatial coordinates have the same metric components, even when they lie in
  different connected components of that spatial fiber, and
  $\partial_0g_{ab}=0$ on $\Omega$;
- **(spatial bounds)** for every multiindex $\alpha\in\mathbb N^3$ with
  $|\alpha|\le2$ and every $\mathbf x\in K$,

$$|\partial^\alpha\varphi(\mathbf x)|\le\frac{C}{L^{|\alpha|}},\qquad |\partial^\alpha r_{00}(\varepsilon,\mathbf x)|+|\partial^\alpha r_{ij}(\varepsilon,\mathbf x)|\le\frac{C\varepsilon^2}{L^{|\alpha|}},\qquad |\partial^\alpha r_{0i}(\varepsilon,\mathbf x)|\le\frac{C\varepsilon^{3/2}}{L^{|\alpha|}}.$$

  (Derivatives are with respect to $x^1,x^2,x^3$; here $|\partial^\alpha r_{ij}|$
  is the maximum over $i,j$ and $|\partial^\alpha r_{0i}|$ is the maximum
  over $i$.)

**(b) Derived data.** For stationary weak-field data define the
**spatial potential**

$$\Phi:=\varepsilon c^2\varphi\qquad\text{on }U,$$

a smooth spatial function of dimension $\mathrm m^2\,\mathrm s^{-2}$ in the
framework's unit conventions; its pullback to $\Omega$ is stationary. The
symmetric component family $g(\varepsilon)-\eta$ is the **perturbation of the
family**.

**(c) Einstein families.** Stationary weak-field data form an **Einstein
family with coupling $\kappa$** when for every $0<\varepsilon\le\varepsilon_0$
there is a smooth symmetric component field $T_{ab}(\varepsilon,\cdot)$ on
$\Omega$ ([[def-gr-smooth-covariant-two-tensor-field]]) satisfying

$$G_{ab}\bigl(g(\varepsilon)\bigr)=\kappa\,T_{ab}(\varepsilon)\qquad\text{on }\Omega,$$

where $G$ is the Einstein tensor of the metric-selected connection of
$g(\varepsilon)$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). In that case define the
**spatial density read from the time-time component**

$$\rho_\varepsilon(\mathbf x):=\frac{T_{00}(\varepsilon,x^0,\mathbf x)}{c^2}\qquad\text{on }U,$$

where any $x^0$ with $(x^0,\mathbf x)\in\Omega$ may be used. This is
well-defined: the metric is the pullback of spatial functions, so its
coordinate curvature components, and hence $T_{00}=\kappa^{-1}G_{00}$, are
constant on each fiber of $\pi$, including when that fiber is disconnected.
It has units $\mathrm{kg}\,\mathrm m^{-3}$; it is a coordinate-component
density and is not thereby the dust rest-mass density.

**(d) Scope.** This item fixes a class of metric families and the vocabulary
of the weak-field bridge: the spatial factorization, component form,
stationarity, spatial derivative bounds, potential, and the equation that
upgrades the data to an Einstein family. It asserts that no family exists,
that $\partial_0$ is timelike or a Killing field, that the inverse metrics
are uniformly bounded or that $\rho_\varepsilon$ is positive; those are
consequences proved separately where they are used. The family is an explicit
input-family hypothesis: neither its existence for prescribed Newtonian
initial data nor its construction from other data is claimed. The physical
reading of the components, of $G_{ab}=\kappa T_{ab}$, of $\Phi$ and of
$\rho_\varepsilon$ belongs to the framework's postulates and unit
conventions, which are separate items.
