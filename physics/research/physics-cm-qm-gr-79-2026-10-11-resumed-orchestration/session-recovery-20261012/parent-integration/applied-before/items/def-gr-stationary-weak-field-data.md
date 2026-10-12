---
id: def-gr-stationary-weak-field-data
kind: definition
title: "Stationary weak-field data: the diagonal ansatz, its bounds, stationarity and the Einstein-family condition"
status: draft
origin: session
domain: mathematics
dependency_level: 7
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
[[def-gr-minkowski-model-and-inertial-chart]] with inertial chart $x$ and
constant components $\eta_{ab}=\operatorname{diag}(-1,1,1,1)$, let
$\Omega\subseteq M$ be a nonempty open set identified with its chart image,
and let $c>0$ and $G_N>0$ be real parameters; put
$\kappa:=8\pi G_N/c^4$ as in the framework's convention. All components below
are taken in the inertial chart, and $\partial_a$ are the chart derivatives.

**(a) Structural data.** A tuple $(\Omega,K,L,C,\varepsilon_0,\varphi,r)$ is
**stationary weak-field data** when

- $K\subseteq\Omega$ is a compact set, $L>0$, $C>0$ and
  $\varepsilon_0>0$ are constants;
- $\varphi:\Omega\to\mathbb R$ is a smooth dimensionless function and
  $r=(r_{ab})$ is a family of component functions
  $r_{ab}(\varepsilon,p)$, defined for $\varepsilon\in(-\varepsilon_1,\varepsilon_1)$
  and $p\in\Omega$ for some $\varepsilon_1>\varepsilon_0$ and smooth in
  $(\varepsilon,p)$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]);
- for every $0<\varepsilon\le\varepsilon_0$ the component field

$$g_{ab}(\varepsilon,p)=\begin{cases}-(1+2\varepsilon\varphi(p))+r_{00}(\varepsilon,p),&a=b=0,\\[2pt] r_{0i}(\varepsilon,p),&\{a,b\}=\{0,i\},\\[2pt] (1-2\varepsilon\varphi(p))\,\delta_{ij}+r_{ij}(\varepsilon,p),&a=i,\ b=j,\end{cases}$$

  is the component field of a smooth Lorentzian metric $g(\varepsilon)$ on
  $\Omega$ of signature $(-,+,+,+)$ ([[def-gr-smooth-lorentzian-objects]]);
- **(stationarity)** $\partial_0\varphi=0$ and $\partial_0r_{ab}=0$ on
  $\Omega$ for all $a,b$ and all $\varepsilon$, so that
  $\partial_0g_{ab}(\varepsilon,\cdot)=0$;
- **(bounds)** for every multiindex $\alpha$ with $|\alpha|\le2$ and every
  $p\in K$,

$$|\partial^\alpha\varphi(p)|\le\frac{C}{L^{|\alpha|}},\qquad |\partial^\alpha r_{00}(\varepsilon,p)|+|\partial^\alpha r_{ij}(\varepsilon,p)|\le\frac{C\varepsilon^2}{L^{|\alpha|}},\qquad |\partial^\alpha r_{0i}(\varepsilon,p)|\le\frac{C\varepsilon^{3/2}}{L^{|\alpha|}} .$$

  (Here $|\partial^\alpha r_{ij}|$ stands for the maximum over $i,j$ and
  $|\partial^\alpha r_{0i}|$ for the maximum over $i$.)

**(b) Derived data.** For stationary weak-field data define the
**potential**

$$\Phi:=\varepsilon c^2\varphi\qquad\text{on }\Omega,$$

a smooth stationary function of dimension $\mathrm m^2\,\mathrm s^{-2}$ in
the framework's unit conventions. The symmetric component family
$g(\varepsilon)-\eta$ is the **perturbation of the family**.

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
**density read from the time-time component**

$$\rho_\varepsilon:=\frac{T_{00}(\varepsilon)}{c^2}\qquad\text{on }\Omega .$$

**(d) Scope.** This item fixes a class of metric families and the vocabulary
of the weak-field bridge: the component form, the stationarity of the data,
the derivative bounds, the potential, and the equation that upgrades the
data to an Einstein family. It asserts that no family exists, that
$\partial_0$ is a Killing field or timelike, that the inverse metrics are
uniformly bounded or that the density is positive; those are consequences
proved separately where they are used. The family is an explicit
input-family hypothesis: neither its existence for prescribed Newtonian
initial data nor its construction from other data is claimed. The physical
reading of the components, of $G_{ab}=\kappa T_{ab}$, of $\Phi$ and of
$\rho_\varepsilon$ belongs to the framework's postulates and unit
conventions, which are separate items.
