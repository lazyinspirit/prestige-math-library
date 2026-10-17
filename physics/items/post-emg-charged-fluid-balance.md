---
id: post-emg-charged-fluid-balance
kind: postulate
title: "Selected charged perfect-fluid exchange/Ohmic branch"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
deps:
  - def-emg-matter-observables
  - post-emg-einstein-maxwell-equations
  - post-emg-covariant-maxwell
  - thm-emg-charged-fluid-projections
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  post-emg-einstein-maxwell-equations: formulation-prerequisite
  post-emg-covariant-maxwell: formulation-prerequisite
  thm-emg-charged-fluid-projections: mathematical-premise
physical_scope: "A selected smooth positive-rest-energy perfect-fluid domain coupled through the adopted Einstein–Maxwell equations and matter exchange. The current is either convective or uses a separately selected smooth Ohmic conduction branch. It asserts no global fluid or conducting-fluid evolution, entropy law, or empirical validity."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.107)–(1.110), isotropic perfect-fluid stress in the rest frame and covariant form."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.4, equations (4.53)–(4.55), PDF pp. 192–194 (printed pp. 185–187), perfect-fluid stress and its energy/Euler projections; the sourced exchange and optional Ohmic law are separate explicit assumptions here."
verification:
  precheck: n/a
---

## Postulate

On a smooth open state domain $\Omega$ in the spacetime and SI conventions of [[def-emg-matter-observables]], choose $C^1$ rest-energy density $\epsilon>0$, pressure $p$, rest-charge density $\sigma$, and a $C^2$ future-timelike field $U$ with $g(U,U)=-c^2$. The equation-based coupled branch uses [[post-emg-einstein-maxwell-equations]] and [[post-emg-covariant-maxwell]] with a smooth symmetric matter tensor and current supplied by this selected fluid model. Adopt the perfect-fluid tensor

$$T_m^{ab}=\frac{\epsilon+p}{c^2}U^aU^b+pg^{ab}$$

and either the convective current $j^a=\sigma U^a$ or a separately specified conduction current $j^a=\sigma U^a+q^a$ with $q^aU_a=0$. Adopt charge continuity $\nabla_aj^a=0$ and the local matter-exchange balance $\nabla_aT_m^{ab}=F^b{}_cj^c$. The fields and derivatives are smooth enough for these equations to hold pointwise.

For an optional Ohmic branch, choose a smooth scalar conductivity $\chi\geq0$ in $\mathrm{S\,m^{-1}}$ and impose $q^a=\chi E_U^a$, where $E_U^a=F^a{}_bU^b$ is the rest-frame electric field in $\mathrm{V\,m^{-1}}$. This is a separate constitutive adoption, not a consequence of covariance or of the Maxwell equations. A smooth equation of state may be supplied on the chosen local state domain; no particular function, relativistic entropy law, causality assertion, or thermodynamic interpretation of $\epsilon,p$ is included here. The stress-projection and comoving work identities follow conditionally from [[thm-emg-charged-fluid-projections]], but no global fluid or conducting-fluid solution theory is asserted.

This postulate adopts a local classical matter branch. It does not presume an unspecified matter action or infer empirical validity from the source literature.
