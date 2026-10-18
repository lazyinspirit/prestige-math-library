---
id: def-bem-calderon-boundary-operators
kind: definition
title: Calderon boundary operators and trace conventions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, def-bem-laplace-layer-potentials-and-energy-spaces, def-bem-double-layer-transmission-space]
justified_by: [thm-bem-calderon-mapping-and-jump-identities]
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
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§2–4, printed pp. 615–622: boundary operators as traces and conormal traces of weak single/double-layer potentials."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.2 and Chapter 2 §2.2, PDF pp. 4–6 and 23–25: averaged traces, double-layer operators, and hypersingular sign convention."
---

## Definition

For $\lambda\in H^{-1/2}(\Gamma)$ and $\phi\in H^{1/2}(\Gamma)$ define the Laplace Calderon boundary operators by
$$V\lambda=\gamma S\lambda,\qquad K\phi=\tfrac12(\gamma^-D\phi+\gamma^+D\phi),$$
$$K'\lambda=\tfrac12(\partial_n^-S\lambda+\partial_n^+S\lambda),\qquad W\phi=-\partial_n^-D\phi=-\partial_n^+D\phi.$$
Here $\gamma S\lambda$ is the common trace, conormal traces use the orientation of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]], and the last equality is meaningful because the weak double layer has a common conormal derivative. This page uses the real duality pairing between $H^{-1/2}(\Gamma)$ and $H^{1/2}(\Gamma)$. The well-definedness and bounded mapping properties of $V,K,K',W$ are proved in [[thm-bem-calderon-mapping-and-jump-identities]].
