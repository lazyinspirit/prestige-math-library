---
id: pthm-emg-source-test-backreaction-scope
kind: physics-theorem
title: Exact source/test-field/backreaction consistency distinction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - def-emg-matter-observables
  - lem-emg-source-and-test-scaling
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  def-emg-matter-observables: formulation-prerequisite
  lem-emg-source-and-test-scaling: mathematical-premise
physical_scope: "Fixed smooth metric with a smooth Maxwell field and explicitly stated source/dust scaling, including the exact quadratic stress residual and finite Coulomb-annulus energy calculation. This distinguishes test-field bookkeeping from a coupled solution; it constructs no nearby coupled family, singular point charge, or self-field."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011), complete 162-page review"
      url: https://arxiv.org/pdf/1102.0529v3
      locator: "§18.1, equations (18.3)–(18.10), PDF pp. 96–98, sets out the coupled point-charge source and the formal self-field difficulty; no point-source limit is inferred here."
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "§§4.3–4.5, PDF pp. 120–125, treats the Maxwell stress tensor and its observer energy in the source's Gaussian conventions; local SI stress and residual identities are those of the exact mathematical supplier."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes (2019)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "§§4.5.2–4.5.4, PDF pp. 190–194, treats Maxwell and matter stress tensors in curved spacetime. Its conventions are contextual; the quadratic scaling and compact-region residual are proved by the exact mathematical supplier."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), complete 8-page article"
      url: https://arxiv.org/pdf/1105.3807
      locator: "§2, equations (1)–(7), PDF pp. 2–3, gives one exact smooth charged-dust Einstein–Maxwell branch with a specially fixed charge-to-mass ratio; that restriction is not generalized here."
verification:
  precheck: pass
---

## Statement

Use the formal Einstein–Maxwell tensor and SI conventions of [[def-emg-matter-observables]] within the separately prescribed Maxwell test model of [[post-emg-background-maxwell-test]]. Let $g$ be a smooth fixed metric on an open region $U$ with $G_{ab}(g)+\Lambda g_{ab}=0$, where $\Lambda$ is constant, and let $F_0$ be a smooth real source-free Maxwell two-form there. For real dimensionless $\delta$, the scaled field $F_\delta:=\delta F_0$ remains source-free and its exact Einstein residual on the unchanged metric is

$$\mathscr R_{ab}(g,F_\delta;\Lambda):=G_{ab}(g)+\Lambda g_{ab}-\kappa T^{\mathrm{EM}}_{ab}(g,F_\delta)=-\kappa\delta^2T^{\mathrm{EM}}_{ab}(g,F_0).$$

If $\delta\ne0$ and $F_0$ is nonzero at a point, its observer energy is positive there, so this residual is nonzero. It is a consistency residual, not an estimate of distance to a different metric solution.

Separately, on an open region where smooth charged-dust quantities have $\rho>0$, $T_m^{ab}=\rho U^aU^b$, $j^a=\sigma U^a$, and the formal matter-exchange equation holds, replacing $(\rho,\sigma)$ by $(\eta\rho,\eta\sigma)$ for $\eta>0$ scales matter stress and current linearly, leaves $\sigma/\rho$ unchanged, and preserves the dust force equation when the prescribed $F,U$ are held fixed. Maxwell's sourced equation must still match the scaled current. If instead both $F$ and $j$ are scaled by $\eta$, the sourced Maxwell system is linear but electromagnetic stress scales as $\eta^2$ while dust stress scales as $\eta$; these degree differences provide no general coupled-solution family.

Finally, for a fixed $Q\ne0$ and $\ell>0$, prescribe only on the finite Minkowski annulus $\mathcal A_\ell=\{\mathbf x:\ell<|\mathbf x|<2\ell\}$ the radial electric field $\mathbf E=Q(4\pi\varepsilon_0r^2)^{-1}\mathbf e_r$, $\mathbf B=0$. Its field energy on that annulus is $Q^2/(16\pi\varepsilon_0\ell)$ and diverges as $\ell\downarrow0$. This calculation defines no field or source at the origin and supplies no point-charge construction or regularization theorem.

## Facts & Assumptions

**Given:** The smooth fixed-background physical interpretation of [[post-emg-background-maxwell-test]], the formal SI tensor definitions of [[def-emg-matter-observables]], a fixed vacuum metric and smooth source-free two-form for the first clause, a positive-density dust region for the scaling clause, and the stated finite-annulus profile for the final clause.

[F1] [[post-emg-background-maxwell-test]]: the metric and Maxwell field may be prescribed independently; no Einstein equation on the unchanged metric or probe/source backreaction is part of the test-model postulate.

[F2] [[lem-emg-source-and-test-scaling]]: under its exact smoothness, SI, fixed-vacuum-metric and source-free hypotheses, $F_0\mapsto\delta F_0$ preserves Maxwell's equations and gives the exact quadratic Einstein residual; it also proves positivity of observer energy for a nonzero field, the charged-dust/current scaling clauses, and the finite-annulus Coulomb-energy formula. Its residual is not a nearby-solution estimate.

[F3] [[def-emg-matter-observables]]: $T_{\mathrm{EM}}$ is the displayed quadratic SI tensor, $\varepsilon_0=(\mu_0c^2)^{-1}$, $\kappa=8\pi G_N/c^4>0$, charged dust has $T_m^{ab}=\rho U^aU^b$ and $j^a=\sigma U^a$, and observer energy is $T_{ab}n^an^b$.

[A1] The metric, field, dust, and annulus hypotheses are independent assumptions of their respective clauses. No source is extended to the origin and no coupled family is assumed to exist.

## Proof

1.1 The first-clause hypotheses in [A1] are exactly the fixed vacuum metric and smooth source-free Maxwell hypotheses of [F2]. Applying that complete conditional result gives both the preserved Maxwell equations for $F_\delta$ and the displayed exact residual under the tensor definition [F3]; [F1] identifies this as a test-background calculation. [given, F1, F2, F3, A1]

1.2 On $\rho>0$, $(\eta\sigma)/(\eta\rho)=\sigma/\rho$. The exact force-equation and sourced-Maxwell qualifications, linear dust/current scaling, and mismatch between the $\eta$ and $\eta^2$ stress scalings are the corresponding clauses proved in [F2] for the matter forms defined in [F3]. Thus these rescalings alone do not establish a coupled solution family. [F2, F3, A1, algebra]

2.1 If $F_0$ is nonzero at a point, [F2]'s positive observer-energy clause, with $\mu_0>0$ from [F3], makes its stress nonzero there. For $\delta\ne0$ and $\kappa>0$, the residual in step 1.1 is therefore nonzero. This excludes an unchanged-metric vacuum Einstein solution for that scaled field, but says nothing about other metrics. [F2, F3, step 1.1, algebra]

3.1 On $\mathcal A_\ell$, the SI field-energy density is $\varepsilon_0|\mathbf E|^2/2=Q^2/(32\pi^2\varepsilon_0r^4)$ by [F3]. Polar coordinates on this finite annulus give $\mathcal E_\ell=4\pi\int_\ell^{2\ell}(Q^2/(32\pi^2\varepsilon_0r^4))r^2\,dr=(Q^2/(8\pi\varepsilon_0))\int_\ell^{2\ell}r^{-2}\,dr=Q^2/(16\pi\varepsilon_0\ell)$, using the annulus calculation supplied by [F2]. This diverges at fixed nonzero $Q$ as $\ell\downarrow0$, while every field evaluation remains on $r>\ell>0$; no field, source, or point limit at $r=0$ is asserted. [F2, F3, A1, algebra] ∎
