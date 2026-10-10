---
id: def-em-polarization-magnetization
kind: definition
title: "Polarization, magnetization, bound and free sources, and the fields D and H"
status: draft
origin: pipeline
domain: physics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-cross-product-in-r3, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-riemann-integral-over-a-jordan-set, post-em-coarse-graining, thm-algebra-of-derivatives, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  post-em-coarse-graining: formulation-prerequisite
  thm-algebra-of-derivatives: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
physical_scope: "The macroscopic polarization P and magnetization M as dipole-moment densities of the chosen material model, the derived bound charge and bound current densities, the free/bound source decomposition, and the displacement D and magnetic intensity H, in SI units on the laboratory region in a fixed inertial frame. Definitions and conventions only: no field equation, no constitutive law, no conservation statement and no microscopic identification."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.1.1-7.1.2 printed pp. 173-178 (PDF pp. 181-186): P=np, the bound charge rho_bound=-div P (7.5), the displacement D=eps0 E+P (7.6) and div D=rho_free (7.7); sec. 7.2.1-7.2.2 printed pp. 180-183 (PDF pp. 188-191): the bound current J_bound=curl M (7.10), the completion by dP/dt and H=B/mu0-M (7.11) with curl H=J_free (7.12). Read in the retained 236-page full text."
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 69: Polarization"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node69.html"
      locator: "node 69: p=q d for a neutral two-charge dipole; P=N p and equation (803), the sum of number densities times mean electric moments; (804) and (808), bound charge and displacement. Consulted the complete online section for this repair; the compact-source and volume-content Riemann formulations below are local definitions."
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 73: Magnetization"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node73.html"
      locator: "node 73: (856), m=(1/2) integral r cross j; (857), M as the sum of number densities times mean magnetic moments; (858)-(860), magnetization and polarization currents; (864), H=B/mu0-M. Consulted the complete online section for this repair; the compact-source and volume-content Riemann formulations below are local definitions."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.3.1 printed pp. 175-178, equations (4.21)-(4.22): D=eps0 E+P and div D=rho_f; sec. 6.2.1 printed p. 264, equation (6.13): the magnetization bound volume current J_b=curl M; sec. 7.3.5 printed p. 329, equation (7.48): the polarization current J_p=dP/dt; read in the stamped 596-page scan."
---

## Definition

Let the laboratory region $U\cong I\times\Omega$, its frame basis $(e_1,e_2,e_3)$, its units, its fields $E,B$ and its source densities $\rho,J$ be those of [[def-em-lab-geometry]], [[def-em-si-conventions]], [[def-em-fields]] and [[def-em-sources]], and let the averaging convention be that of [[post-em-coarse-graining]], in whose sense the objects below are macroscopic. Any convolution used to instantiate that reading is taken on its declared exact interior-footprint domain, or under a declared locally integrable compatible extension covering every used footprint. Its every-time use requires every-time locally integrable spatial slices; joint spacetime local integrability alone supplies only the almost-every-time branch. The joint $C^2$ regularity specified below is a separate model hypothesis, not a consequence of spatial smoothing.

**(a) [Dipole moments, polarization and magnetization]** Fix the following moment convention in the frame basis. For a supplied closed rectangular box $K\subset\mathbb R^3$, a reference position $r_0\in\mathbb R^3$, a continuous charge density $f:\mathbb R^3\to\mathbb R$ supported in the interior of $K$, and a stationary current density $g:\mathbb R^3\to\mathbb R^3$ of class $C^1$ supported in the interior of $K$ with $\operatorname{div}g=0$, define the electric and magnetic dipole moments about $r_0$ by

$$p[f;r_0]:=\int_K(y-r_0)f(y)\,dy,\qquad m[g;r_0]:=\frac12\int_K(y-r_0)\times g(y)\,dy.$$

Here $f$ carries $\mathrm C\,\mathrm m^{-3}$, $g$ carries $\mathrm A\,\mathrm m^{-2}$, $p$ carries $\mathrm C\,\mathrm m$ and $m$ carries $\mathrm A\,\mathrm m^2$; the cross product is that of [[def-cross-product-in-r3]]. Integrals are componentwise Riemann integrals of [[def-riemann-integral-over-a-jordan-set]], finite by [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]. These specify the normalization of source moments, with $r_0$ retained as part of the data; they impose no microscopic representation on the material below.

The material model specifies two maps $P,M:\Omega\times I\to\mathbb R^3$ of class $C^2$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]. To say that they are electric and magnetic dipole-moment densities means that, for every compact Jordan-measurable volume $V\subset\Omega$ and $t\in I$, the model assigns the material moment contents

$$\mathcal P(V,t):=\int_V P(y,t)\,dy,\qquad\mathcal M(V,t):=\int_V M(y,t)\,dy,$$

in $\mathrm C\,\mathrm m$ and $\mathrm A\,\mathrm m^2$, respectively, using the same finite componentwise integrals. Thus $P$ carries $\mathrm C\,\mathrm m^{-2}$ and $M$ carries $\mathrm A\,\mathrm m^{-1}$. These contents record the model's assigned material moments; they are not defined by applying the source-moment formulas to the total or bound sources restricted to $V$. Matching them to microscopic charge/current moments requires an additional material identification, not supplied here. The maps are data of the chosen material model, and no relation between $(P,M)$ and $E,B$ is asserted here.

**(b) [Bound sources]** Write $\operatorname{div}$ and $\operatorname{curl}$ for the divergence and curl of [[def-divergence-and-curl-of-a-c1-vector-field]] taken at fixed $t$, and $\partial_t$ for the partial derivative of [[def-directional-and-partial-derivatives]] at fixed position, and define the bound charge density and bound current density by

$$\rho_b:=-\operatorname{div}P,\qquad J_b:=\partial_tP+\operatorname{curl}M.$$

Since $P,M$ are jointly $C^2$, $\rho_b$ and $J_b$ are continuous, indeed $C^1$, by the componentwise sum and product rules of [[thm-algebra-of-derivatives]]; $\rho_b$ carries $\mathrm C\,\mathrm m^{-3}$ and $J_b$ carries $\mathrm A\,\mathrm m^{-2}$.

**(c) [Free sources]** Define $\rho_f:=\rho-\rho_b$ and $J_f:=J-J_b$, in the same units as $\rho$ and $J$; these are the free charge and free current densities of the model. The decomposition $\rho=\rho_f+\rho_b$, $J=J_f+J_b$ is part of the chosen material model: the same total pair $(\rho,J)$ with a different pair $(P,M)$ is a different model.

**(d) [Displacement and magnetic intensity]** Define the electric displacement and the magnetic intensity by

$$D:=\varepsilon_0E+P,\qquad H:=\mu_0^{-1}B-M,$$

where $\varepsilon_0=(\mu_0c^2)^{-1}$ and $\mu_0,c>0$ are the constants of [[def-em-si-conventions]]; $D$ carries $\mathrm C\,\mathrm m^{-2}$ and $H$ carries $\mathrm A\,\mathrm m^{-1}$.

**(e) [Status]** This item fixes objects and the bound/free convention only. No field equation (the item `pthm-em-macroscopic-maxwell`), no constitutive relation (the item `post-em-material-closure`), no conservation of the bound pair (the item `pthm-em-macroscopic-maxwell`, clause (a)) and no identification of $P,M$ with microscopic dipole sums is asserted here.
