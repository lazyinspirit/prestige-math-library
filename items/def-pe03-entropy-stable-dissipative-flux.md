---
id: def-pe03-entropy-stable-dissipative-flux
kind: definition
title: Entropy-stable flux from positive-semidefinite entropy-variable dissipation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-pe03-tadmor-entropy-conservative-flux]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "§§4.2–4.3, entropy-conservative fluxes and numerical viscosity, PDF pp. 11–13; full chapter read"
    - title: "R. Bürger, P. E. Méndez, and C. Parés, On Entropy Stable Schemes for Degenerate Parabolic Multispecies Kinematic Flow Models"
      url: "https://www.ci2ma.udec.cl/pdf/pre-publicaciones2/2018/pp18-24.pdf"
      locator: "§§2.2–2.3, entropy-conservative flux and added entropy-variable diffusion, PDF pp. 6–8; full preprint read"
---

## Definition

Let $(\eta,q)$ be an entropy pair with entropy variable $v$ and potential
$\psi$, and let $F^{ec}$ be a consistent entropy-conservative flux as in
[[def-pe03-tadmor-entropy-conservative-flux]]. For each pair
$(U_L,U_R)\in\mathcal A^2$, choose a symmetric positive-semidefinite matrix
$D(U_L,U_R)\in\mathbb R^{m\times m}$. The associated **entropy-stable
dissipative flux** is
$$F^{es}(U_L,U_R):=F^{ec}(U_L,U_R)-\frac12D(U_L,U_R)(v(U_R)-v(U_L)).$$
Positive semidefinite means $z^TD(U_L,U_R)z\ge0$ for every $z\in\mathbb R^m$.
No fully discrete time-step property is included.

