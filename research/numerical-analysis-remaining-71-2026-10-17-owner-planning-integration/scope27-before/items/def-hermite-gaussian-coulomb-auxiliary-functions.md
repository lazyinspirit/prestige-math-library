---
id: def-hermite-gaussian-coulomb-auxiliary-functions
kind: definition
title: Hermite Gaussian and Boys Coulomb auxiliary functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-cartesian-gaussian-primitives-and-contractions, def-boys-function-and-coulomb-auxiliary-recurrence]
axiom_use: None. Finite derivatives of the real exponential are choice-free.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Hermite Gaussians and Coulomb auxiliary functions on pp. 6–8 and 23–27."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §IV, pp. 16–18, the $R^n_{tuv}$ auxiliary family and recurrence table."
---

## Definition

Using $\mathbb N_0=\{0,1,2,\ldots\}$ from [[def-cartesian-gaussian-primitives-and-contractions]], for $p>0$, $P\in\mathbb R^3$, and $t,u,v\in\mathbb N_0$, the **Hermite Gaussian** is
$$\Lambda_{tuv}(x;p,P)=\frac{\partial^{t+u+v}}{\partial P_1^t\partial P_2^u\partial P_3^v}\exp(-p\|x-P\|_2^2).$$
For $\eta>0$, $P,C\in\mathbb R^3$, and $n,t,u,v\in\mathbb N_0$, define the **Boys Coulomb auxiliary function**
$$R^n_{tuv}(\eta,P-C)=(-2\eta)^n\frac{\partial^{t+u+v}}{\partial P_1^t\partial P_2^u\partial P_3^v}F_n\!\left(\eta\|P-C\|_2^2\right).$$
Each derivative is an ordinary derivative of a smooth real function of the displayed center coordinates. The multi-index $(t,u,v)$ records derivative order and $n$ records Boys order; both are nonnegative integers.
