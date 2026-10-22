---
id: post-emx-drude-current-closure
kind: postulate
title: "Drude current closure and collisionless limit"
status: draft
origin: pipeline
domain: physics
dependency_level: 0
deps:
  - post-em-material-closure
  - pthm-em-macroscopic-maxwell
  - def-em-fields
  - def-em-polarization-magnetization
  - def-em-si-conventions
dependency_roles:
  post-em-material-closure: formulation-prerequisite
  pthm-em-macroscopic-maxwell: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
verification:
  precheck: n/a
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "A phenomenological classical free-carrier response closure in a fixed homogeneous material rest frame. It is spatially local and linear, with a single relaxation rate and a fixed nondispersive scalar magnetic coefficient; no microscopic carrier-statistics claim is made. It asserts no empirical validity; spatial dispersion, nonlinear response, moving-media laws and quantum carrier effects are outside its scope."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.6.1, printed pp. 205–206: the phenomenological equation of motion with linear damping, its frequency-dependent conductivity, and the low-frequency DC limit; those source-specific carrier interpretations are not asserted by this closure."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course, complete University of Texas at Austin lecture notes"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node103.html"
      locator: "Node 103, equations (1201)–(1208): a collisional free-electron response, conductivity and limiting plasma/conductor dispersion formulas; the closure here adopts only the stated phenomenological current equation."
---

## Postulate

Use a material rest frame: an inertial frame in whose coordinates each modelled material element has fixed spatial position $x$ and history $t\mapsto(ct,x)$, as defined by the framework's earlier material-closure formulation. In that frame, let $E,P:\Omega\times I\to\mathbb R^3$ be the electric field and polarization, and let $V:\Omega\times I\to\mathbb R^3$ be a free-carrier current density. In SI, $E$ is V m$^{-1}$, $P$ is C m$^{-2}$, and $V$ is A m$^{-2}$. Adopt

$$\partial_tP(x,t)=V(x,t),\qquad \partial_tV(x,t)+\gamma V(x,t)=aE(x,t),$$

$$D(x,t)=\varepsilon_\infty E(x,t)+P(x,t),\qquad B(x,t)=\mu H(x,t).$$

The constant scalar parameters satisfy $\varepsilon_\infty>0$, $\mu>0$, $a>0$ and $\gamma\ge0$. Their units are respectively F m$^{-1}$, H m$^{-1}$, F m$^{-1}$ s$^{-2}$ and s$^{-1}$. The fields $V$ and $P$ have units A m$^{-2}$ and C m$^{-2}$. All coefficients are independent of $x$ and $t$, and the equation at $x$ depends only on the state and electric field at $x$; these clauses define the homogeneous, linear, spatially local closure used here. To identify these constitutive quantities with the framework's macroscopic definitions, stipulate $P_{\mathrm{tot}}=(\varepsilon_\infty-\varepsilon_0)E+P$ and $M_{\mathrm{tot}}=(\mu_0^{-1}-\mu^{-1})B$. Then $D=\varepsilon_0E+P_{\mathrm{tot}}=\varepsilon_\infty E+P$ and $H=\mu_0^{-1}B-M_{\mathrm{tot}}=\mu^{-1}B$. This is a constitutive identification within the model, not a microscopic decomposition.

At an initial time $t_0$, $P(x,t_0)$ and $V(x,t_0)$ are state data. A constant polarization offset is fixed with the Gauss-law data and is not determined by the current equation alone. The branch $\gamma=0$ is the collisionless model; it has no decaying stationary impulse kernel, and its zero-frequency response is not part of this postulate. This is a phenomenological closure, not a derivation of carrier mass, density, collision statistics or any actual material response.

## Postulate references

[[post-em-material-closure]]

[[pthm-em-macroscopic-maxwell]]

[[def-em-fields]]

[[def-em-polarization-magnetization]]

[[def-em-si-conventions]]
