---
id: post-tgr-incompressible-star-preparation
kind: postulate
title: "Specified constant-density star and vacuum boundary model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-static-spherical-fluid-preparation
dependency_roles:
  post-tgr-static-spherical-fluid-preparation: formulation-prerequisite
justified_by: []
physical_scope: >-
  Constant-energy-density specialization of the adopted static isotropic model,
  with prescribed areal radius, compactness 0<u<8/9, zero surface pressure,
  and a vacuum exterior; no finite-sound-speed constitutive dynamics, general
  compactness theorem, observed matter, or stability claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 8–10"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (99)–(110)"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
---

## Postulate

Within the adopted model [[post-tgr-static-spherical-fluid-preparation]], choose a constant rest mass density $\rho_0>0$ in $\mathrm{kg\,m^{-3}}$, so the constant rest energy density is $\varepsilon_0=\rho_0c^2$ in $\mathrm{J\,m^{-3}}$. Fix an areal boundary radius $R>0$ in metres, define $M_R=4\pi\rho_0R^3/3$ in kilograms and $u=2GM_R/(c^2R)$, and restrict the model parameters to $0<u<8/9$. Adopt the supplied equation of state $\mathcal E(P)=\varepsilon_0$, impose the boundary condition $P(R)=0$, and prescribe vacuum stress for $r\ge R$ with exterior mass $M_R$.

This is a constitutive and boundary preparation within the stated static Einstein-fluid model. The uniform-density relation is a model input; it is not a finite-sound-speed causal transport law. The range $0<u<8/9$ defines this selected branch and does not assert a general Buchdahl bound, a realistic stellar equation of state, an observed star, or stability.

