---
id: def-boys-function-and-coulomb-auxiliary-recurrence
kind: definition
title: Boys functions and lower incomplete-gamma notation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-exponential-function-and-e, def-integrable-real-and-complex-functions-and-their-integrals, def-euler-gamma-function]
axiom_use: None. These are explicit integral definitions on finite or improper intervals.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Boys function definition, properties, and Coulomb-integral reduction on pp. 18–27."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §III, pp. 10–18, auxiliary Boys integrals and recurrence table."
---

## Definition

Write $\mathbb N_0=\{0,1,2,\ldots\}$. For $m\in\mathbb N_0$ and $T\in\mathbb R$, define the finite-integral extension
$$F_m(T)=\int_0^1 t^{2m}\exp(-Tt^2)\,dt.$$
The **Boys function** is the restriction to the conventional domain $T\ge0$. The extension to negative $T$ is used only for ordinary center derivatives at the boundary value $T=0$.
For $s>0$ and $T>0$, write the lower incomplete-gamma integral as
$$\gamma(s,T)=\int_0^T u^{s-1}\exp(-u)\,du.$$
The complete Euler Gamma function $\Gamma(s)$ has the existing meaning in [[def-euler-gamma-function]], namely $\Gamma(s)=\int_0^\infty u^{s-1}e^{-u}\,du$ for real $s>0$.

The integrand defining $F_m$ is continuous on $[0,1]$ and positive on $(0,1]$, so $F_m(T)$ exists, is positive, and, for $T\ge0$, satisfies $F_m(T)\le1/(2m+1)$. The index $m$ is an arbitrary nonnegative integer; no fixed maximum order is part of this definition.
