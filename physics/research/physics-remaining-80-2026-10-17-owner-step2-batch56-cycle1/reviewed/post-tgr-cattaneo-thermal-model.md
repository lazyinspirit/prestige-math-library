---
id: post-tgr-cattaneo-thermal-model
kind: postulate
title: "Supported-rest effective Cattaneo thermal model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - lem-tgr-cattaneo-stability-causality
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  lem-tgr-cattaneo-stability-causality: formulation-prerequisite
physical_scope: "A constant-coefficient linear thermal subsystem on fixed Minkowski spacetime with an externally supported rest congruence; when used, the flat torus represents spatially periodic fields lifted to Minkowski rest slices and is not a spacetime quotient. Effective quadratic entropy is adopted only on a declared near-equilibrium state neighborhood. It is not a full fluid model, universal constitutive law, measured material model, or microscopic derivation."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, arXiv:0908.1707v1 (2009), §4, equations (4.2)–(4.12)"
      url: "https://arxiv.org/pdf/0908.1707"
      locator: "Full 15-page paper; PDF pp. 5–7: rigid-solid simplification, near-equilibrium linearization, constant-parameter Cattaneo equation, and the caveat that constant alpha/(sT) is only a comparison assumption."
    - title: "S. K. Lander and N. Andersson, Heat conduction in rotating relativistic stars, arXiv:1804.01520 (2018), §2.1"
      url: "https://arxiv.org/pdf/1804.01520"
      locator: "Full 13-page paper; PDF pp. 1–2, equations (1)–(3): Fourier diffusion, the phenomenological Cattaneo relaxation term, the telegrapher equation, and relativistic causality context."
    - title: "MIT OpenCourseWare, 2.57 Nano-to-Macro Transport Processes, complete 2004 lecture notes, Lecture 21"
      url: "https://ocw.mit.edu/courses/2-57-nano-to-macro-transport-processes-spring-2012/2e4ecaa5cf55f03bcefbc8ccce79aed6_MIT2_57S12_lec_notes_2004.pdf"
      locator: "Full 177-page course notes; Lecture 21, PDF pp. 153–154: rigid-conductor Cattaneo law, energy-balance elimination to a hyperbolic heat equation, and the notes' stated applicability and evidence limitations."
---

## Postulate

Use the length-coordinate and unit-observer conventions of [[def-tgr-framework-units]]. Fix Minkowski spacetime $M=\mathbb R^4$ with metric $\eta=\operatorname{diag}(-1,1,1,1)$ in coordinates $(x^0,x^1,x^2,x^3)=(ct,x)$, where $t$ is physical time in seconds, $x^i$ are in metres, and $c>0$ is in $\mathrm{m\,s^{-1}}$. The supported rest observer congruence is the smooth future unit vector field $u=\partial_{x^0}$, so $\eta(u,u)=-1$. An external support maintains the modeled material at rest in this congruence; the support is not a dynamical variable, and this subsystem does not claim to include the momentum equations of a full fluid.

Fix constants $T_0>0$ in K, volumetric heat capacity $C>0$ in $\mathrm{J\,m^{-3}\,K^{-1}}$, thermal conductivity $\kappa>0$ in $\mathrm{W\,m^{-1}\,K^{-1}}$, and relaxation time $\tau>0$ in seconds. Select an open state neighborhood $D$ of $(0,0)$ in $\mathbb R\times\mathbb R^3$ contained in $\{(\vartheta,q):T_0+\vartheta>0\}$. The neighborhood is part of the application regime; no universal numerical size is asserted. Let $I\subseteq\mathbb R$ be an open interval of physical time, and define $\iota_I:I\times\mathbb R^3\to M$ by $\iota_I(t,\mathbf x)=(ct,\mathbf x)$; it identifies these coordinates with an open region of Minkowski spacetime. Choose either $\Sigma=\mathbb R^3$ or, for a fixed $L>0$, $\Sigma=\mathbb T_L^3:=\mathbb R^3/(L\mathbb Z^3)$ with its flat quotient metric; when $\Sigma=\mathbb T_L^3$, let $\pi_L:\mathbb R^3\to\mathbb T_L^3$ be the quotient map. The spacetime remains $M=\mathbb R^4$: the torus is only an analytic representation of spatially $L$-periodic fields on its Minkowski rest slices, not a quotient of spacetime. Take smooth fields $\vartheta:I\times\Sigma\to\mathbb R$ and $q:I\times\Sigma\to\mathbb R^3$ with $(\vartheta(t,x),q(t,x))\in D$. If $\Sigma=\mathbb T_L^3$, their physical fields on the rest slices are the smooth periodic lifts $\widetilde\vartheta(t,\mathbf x):=\vartheta(t,\pi_L(\mathbf x))$ and $\widetilde q(t,\mathbf x):=q(t,\pi_L(\mathbf x))$ on $I\times\mathbb R^3$; under $\iota_I$, these are coordinate representatives of fields on $\iota_I(I\times\mathbb R^3)\subset M$. If $\Sigma=\mathbb R^3$, the given fields are already coordinate representatives on that region. Here $\vartheta$ is the temperature departure in K, $T=T_0+\vartheta$ is the local temperature, and $q$ is the physical heat-flux vector in the supported rest space, expressed in its fixed Cartesian rest basis and measured in $\mathrm{W\,m^{-2}}$. Spatial $\nabla$ and $\operatorname{div}$ are Euclidean derivatives in metres on the Minkowski rest space, evaluated by periodic lifts when $\Sigma=\mathbb T_L^3$.

In the source-free effective model, adopt

$$C\,\partial_t\vartheta+\operatorname{div}q=0,\qquad \tau\,\partial_tq+q=-\kappa\nabla\vartheta.$$

The first equation is the subsystem's thermal-energy balance and the second is its Cattaneo constitutive relation. Also adopt the specified effective quadratic entropy density and entropy flux

$$s_{\mathrm{eff}}:=s_0+\frac{C\vartheta}{T_0}-\frac{C\vartheta^2}{2T_0^2}-\frac{\tau|q|^2}{2\kappa T_0^2},\qquad j_s:=\frac{q}{T_0}-\frac{\vartheta q}{T_0^2},$$

where $s_0$ is constant. Both $s_0$ and $s_{\mathrm{eff}}$ have units $\mathrm{J\,K^{-1}\,m^{-3}}$, and $j_s$ has units $\mathrm{J\,K^{-1}\,m^{-2}\,s^{-1}}$. This quadratic function is an adopted effective state function on $D$, not the exact nonlinear material entropy or a particle Gibbs equation of state. The model assigns no measured values to its coefficients, reports no experiment, and derives no microscopic transport law.
