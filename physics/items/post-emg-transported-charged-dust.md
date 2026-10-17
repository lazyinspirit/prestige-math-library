---
id: post-emg-transported-charged-dust
kind: postulate
title: "Selected transported charged-dust Einstein–Maxwell model"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
deps:
  - def-emg-matter-observables
  - post-emg-einstein-maxwell-equations
  - post-emg-covariant-maxwell
  - thm-emg-charged-dust-projection
dependency_roles:
  def-emg-matter-observables: formulation-prerequisite
  post-emg-einstein-maxwell-equations: formulation-prerequisite
  post-emg-covariant-maxwell: formulation-prerequisite
  thm-emg-charged-dust-projection: mathematical-premise
physical_scope: "A selected smooth charged-dust continuum with one four-velocity field U on its stated domain in the equation-based Einstein–Maxwell model. It adopts the dust stress/current closure, undivided mass and force equations, and charge conservation; the ratio is transported only on positive-density domains. It makes no coupled PDE existence claim and asserts neither a global smooth continuation nor single-velocity validity beyond the stated domain; singular particles and empirical validity are outside scope."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.104)–(1.106), dust number current and stress construction; no charged continuum force law is attributed to this source."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.2–4.5.4, PDF pp. 190–194 (printed pp. 183–187), selected matter stress and perfect-fluid balance context; the charged-dust constitutive choice is stated here."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011)"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Complete 8-page article inspected; §2, equations (1)–(7), PDF pp. 2–3, static ECD stress/current and Einstein–Maxwell equations in c=G=1 Gaussian units. The special fixed charge-to-mass ratio in that source is not generalized or adopted here."
verification:
  precheck: n/a
---

## Postulate

On an open region $\Omega$ of the smooth oriented, time-oriented Lorentzian spacetime and SI conventions of [[def-emg-matter-observables]], adopt the equation-based Einstein and smooth curved Maxwell systems of [[post-emg-einstein-maxwell-equations]] and [[post-emg-covariant-maxwell]], with the smooth matter quantities and electromagnetic stress of [[def-emg-matter-observables]]. Thus the coupled branch includes the adopted Einstein equation $G_{ab}+\Lambda g_{ab}=(8\pi G_N/c^4)(T_{m,ab}+T^{\mathrm{EM}}_{ab})$ and Maxwell equations $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, using the fixed local SI signs, units and curvature convention of those suppliers. Their adopted equations remain physical assumptions; neither is deduced here from flat spacetime, variational stationarity, or mathematical structure.

Choose smooth $\rho,\sigma,U$ on $\Omega$, with $\rho\geq0$, $U$ future timelike, $g(U,U)=-c^2$, and $\sigma=0$ wherever $\rho=0$. Select the pressureless dust closure

$$T_m^{ab}=\rho U^aU^b,\qquad j^a=\sigma U^a.$$

As the matter model, adopt the undivided smooth mass and Lorentz-force equations

$$\nabla_a(\rho U^a)=0,\qquad \rho U^a\nabla_aU^b=\sigma F^b{}_cU^c,$$

and charge-current conservation $\nabla_aj^a=0$. On each open region $\Omega_+:=\{p\in\Omega:\rho(p)>0\}$ define $\alpha:=\sigma/\rho$. Under the adopted mass continuity and charged-dust forms, [[thm-emg-charged-dust-projection]] gives the exact equivalence between charge-current conservation and transport $U^a\nabla_a\alpha=0$. The ratio is not defined and no division is made on $\rho=0$. This ratio statement is restricted to $\Omega_+$; no global coupled evolution theorem is asserted.

This is a selected classical pressureless continuum model with one four-velocity field $U$ on the stated smooth domain. It excludes viscosity, conduction, multistream averaging, spin, point sources, self-field products and a general dust action. The finely fixed charge-to-mass ratio used in the specific ECD solutions of Meinel and Hütten is not a law of this general model. The postulate asserts neither a global smooth continuation nor validity of a single-velocity description beyond the stated domain; it makes no coupled-solution existence, uniqueness, stability, or empirical claim.
